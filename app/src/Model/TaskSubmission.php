<?php

/**
 * This file contains the "TaskSubmission" class.
 *
 * @category SilverStripe_Project
 * @package SDLT
 * @author  Catalyst I.T. SilverStripe Team 2018 <silverstripedev@catalyst.net.nz>
 * @copyright 2018 Catalyst.Net Ltd
 * @license https://www.catalyst.net.nz (Commercial)
 * @link https://www.catalyst.net.nz
 */

namespace NZTA\SDLT\Model;

use Exception;
use GraphQL\Type\Definition\ResolveInfo;
use NZTA\SDLT\GraphQL\GraphQLAuthFailure;
use Ramsey\Uuid\Uuid;
use SilverStripe\GraphQL\Scaffolding\Interfaces\ResolverInterface;
use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\DataObjectScaffolder;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
use SilverStripe\ORM\DataObject;
use SilverStripe\Security\Member;
use SilverStripe\Security\Security;

/**
 * Class TaskSubmission
 *
 * @property string QuestionnaireData
 * @property string AnswerData
 * @property string Status
 * @property string UUID
 * @property string Result
 * @property int SubmitterID
 * @property int TaskID
 * @property int QuestionnaireSubmissionID
 *
 * @method Member Submitter()
 * @method Task Task()
 * @method QuestionnaireSubmission QuestionnaireSubmission()
 */
class TaskSubmission extends DataObject implements ScaffoldingProvider
{
    const STATUS_IN_PROGRESS = 'in_progress';
    const STATUS_COMPLETE = 'complete';

    /**
     * @var string
     */
    private static $table_name = 'TaskSubmission';

    /**
     * @var array
     */
    private static $db = [
        'QuestionnaireData' => 'Text', // store in JSON format
        'AnswerData' => 'Text', // store in JSON format
        'Status' => 'Enum(array("in_progress", "complete"))',
        'UUID' => 'Varchar(255)',
        'Result' => 'Varchar(255)'
    ];

    /**
     * @var array
     */
    private static $has_one = [
        'Submitter' => Member::class,
        'Task' => Task::class,
        'QuestionnaireSubmission' => QuestionnaireSubmission::class
    ];

    /**
     * @var array
     */
    private static $summary_fields = [
        'ID',
        'UUID',
        'Task.Name' => 'Task Name',
        'Status',
        'Result',
        'Created' => 'Created date',
    ];

    /**
     * Default sort ordering
     * @var array
     */
    private static $default_sort = ['ID' => 'DESC'];

    /**
     * Allow logged-in user to access the model
     *
     * @param Member|null $member member
     * @return bool
     */
    public function canView($member = null)
    {
        return (Security::getCurrentUser() !== null);
    }

    /**
     * @return string
     */
    public function getTaskName()
    {
        $task = $this->Task();
        if (!$task->exists()) {
            return "";
        }
        return $task->Name;
    }

    /**
     * @param SchemaScaffolder $scaffolder The scaffolder of the schema
     *
     * @return void
     */
    public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder)
    {
        $dataObjectScaffolder = $this->provideGraphQLScaffoldingForEntityType($scaffolder);
        $this->provideGraphQLScaffoldingForCreateTaskSubmission($scaffolder);
        $this->provideGraphQLScaffoldingForUpdateTaskSubmission($scaffolder);
        $this->provideGraphQLScaffoldingForCompleteTaskSubmission($scaffolder);
        $this->provideGraphQLScaffoldingForEditTaskSubmission($scaffolder);
        $this->provideGraphQLScaffoldingForReadTaskSubmission($dataObjectScaffolder);
    }

    /**
     * @param SchemaScaffolder $scaffolder The scaffolder of the schema
     * @return DataObjectScaffolder
     */
    private function provideGraphQLScaffoldingForEntityType(SchemaScaffolder $scaffolder)
    {
        return $scaffolder
            ->type(TaskSubmission::class)
            ->addFields([
                'ID',
                'UUID',
                'QuestionnaireData',
                'AnswerData',
                'Status',
                'Result',
                'Submitter',
                'TaskName',
                'QuestionnaireSubmission'
            ]);
    }

    /**
     * @param SchemaScaffolder $scaffolder The scaffolder of the schema
     * @return void
     */
    private function provideGraphQLScaffoldingForCreateTaskSubmission(SchemaScaffolder $scaffolder)
    {
        $scaffolder
            ->mutation('createTaskSubmission', TaskSubmission::class)
            ->addArgs([
                'TaskID' => 'String!',
                'QuestionnaireSubmissionID' => 'String!'
            ])
            ->setResolver(new class implements ResolverInterface
            {
                /**
                 * Invoked by the Executor class to resolve this mutation / query
                 * @see Executor
                 *
                 * @param mixed       $object  object
                 * @param array       $args    args
                 * @param mixed       $context context
                 * @param ResolveInfo $info    info
                 * @throws Exception
                 * @return mixed
                 */
                public function resolve($object, array $args, $context, ResolveInfo $info)
                {
                    $submitter = Security::getCurrentUser();

                    // Check authentication
                    if (!$submitter) {
                        throw new GraphQLAuthFailure();
                    }

                    $taskID = (int)$args['TaskID'];
                    $questionnaireSubmissionID = (int)$args['QuestionnaireSubmissionID'];
                    $submitterID = (int)$submitter->ID;

                    if (!$taskID || !$questionnaireSubmissionID || !$submitterID) {
                        throw new Exception('Invalid arguments');
                    }

                    $questionnaireSubmission = QuestionnaireSubmission::get_by_id($questionnaireSubmissionID);
                    if (!$questionnaireSubmission->exists()) {
                        throw new Exception('Questionnaire submission does not exist');
                    }
                    if ((int)$questionnaireSubmission->User()->ID !== $submitterID) {
                        throw new Exception('Questionnaire submission does not belong to you');
                    }

                    $taskSubmission = TaskSubmission::create_task_submission(
                        $taskID,
                        $questionnaireSubmissionID,
                        $submitterID
                    );
                    return $taskSubmission;
                }
            })
            ->end();
    }

    /**
     * When the user submit a questionnaire, the system will generate task submissions by calling this method
     *
     * @param string|int $taskID                    The task ID
     * @param string|int $questionnaireSubmissionID The questionnaire submission ID
     * @param int        $submitterID               The submitter ID
     * @return TaskSubmission
     * @throws Exception
     */
    public static function create_task_submission($taskID, $questionnaireSubmissionID, $submitterID)
    {
        $taskSubmission = TaskSubmission::create();

        // Relations
        $taskSubmission->TaskID = $taskID;
        $taskSubmission->QuestionnaireSubmissionID = $questionnaireSubmissionID;
        $taskSubmission->SubmitterID = $submitterID;

        // Structure of task questionnaire
        $task = Task::get_by_id($taskID);
        if (!$task->exists()) {
            throw new Exception('Task does not exist');
        }
        $questionnaireData = $task->getQuestionsData();
        $taskSubmission->QuestionnaireData = json_encode($questionnaireData);

        // Initial status of the submission
        $taskSubmission->Status = TaskSubmission::STATUS_IN_PROGRESS;
        $taskSubmission->UUID = (string)Uuid::uuid4();

        $taskSubmission->write();

        return $taskSubmission;
    }

    /**
     * @param DataObjectScaffolder $scaffolder The scaffolder of the data object
     * @return void
     */
    private function provideGraphQLScaffoldingForUpdateTaskSubmission(SchemaScaffolder $scaffolder)
    {
        $scaffolder
            ->mutation('updateTaskSubmission', TaskSubmission::class)
            ->addArgs([
                'UUID' => 'String!',
                'QuestionID' => 'ID!',
                'AnswerData' => 'String'
            ])
            ->setResolver(new class implements ResolverInterface
            {
                /**
                 * Invoked by the Executor class to resolve this mutation / query
                 * @see Executor
                 *
                 * @param mixed       $object  object
                 * @param array       $args    args
                 * @param mixed       $context context
                 * @param ResolveInfo $info    info
                 * @throws Exception
                 * @return mixed
                 */
                public function resolve($object, array $args, $context, ResolveInfo $info)
                {
                    $submitter = Security::getCurrentUser();

                    // Check authentication
                    if (!$submitter) {
                        throw new GraphQLAuthFailure();
                    }

                    /* @var $submission TaskSubmission */
                    $submission = TaskSubmission::get()->where(['UUID' => $args['UUID']])->first();
                    if (!$submission) {
                        throw new Exception('Task submission does not exist');
                    }

                    // AnswerData is generated by `window.btoa(JSON.stringify(answerData))` in JavaScript
                    // This is to avoid parsing issue caused by `quote`, `\n` and other special characters
                    $questionAnswerData = json_decode(base64_decode($args['AnswerData']), true);

                    if (is_null($questionAnswerData)) {
                        throw new Exception('data is not a vaild json object.');
                    }

                    // add validation here

                    // if everything is ok, then please add/update AnswerData
                    $allAnswerData = json_decode($submission->AnswerData, true);
                    $allAnswerData[$args['QuestionID']] = $questionAnswerData;
                    $submission->AnswerData = json_encode($allAnswerData);

                    $submission->write();

                    return $submission;
                }
            })
            ->end();
    }

    /**
     * @param DataObjectScaffolder $scaffolder The scaffolder of the data object
     * @return void
     */
    private function provideGraphQLScaffoldingForCompleteTaskSubmission(SchemaScaffolder $scaffolder)
    {
        $scaffolder
            ->mutation('completeTaskSubmission', TaskSubmission::class)
            ->addArgs([
                'UUID' => 'String!',
                'Result' => 'String'
            ])
            ->setResolver(new class implements ResolverInterface
            {
                /**
                 * Invoked by the Executor class to resolve this mutation / query
                 * @see Executor
                 *
                 * @param mixed       $object  object
                 * @param array       $args    args
                 * @param mixed       $context context
                 * @param ResolveInfo $info    info
                 * @throws Exception
                 * @return mixed
                 */
                public function resolve($object, array $args, $context, ResolveInfo $info)
                {
                    $submitter = Security::getCurrentUser();

                    // Check authentication
                    if (!$submitter) {
                        throw new GraphQLAuthFailure();
                    }

                    /* @var $submission TaskSubmission */
                    $submission = TaskSubmission::get()->where(['UUID' => $args['UUID']])->first();
                    if (!$submission) {
                        throw new Exception('Task submission does not exist');
                    }

                    $submission->Status = TaskSubmission::STATUS_COMPLETE;

                    if (isset($args['Result'])) {
                        $submission->Result = trim($args['Result']);
                    }

                    $submission->write();

                    return $submission;
                }
            })
            ->end();
    }

    /**
     * @param DataObjectScaffolder $scaffolder The scaffolder of the data object
     * @return void
     */
    private function provideGraphQLScaffoldingForEditTaskSubmission(SchemaScaffolder $scaffolder)
    {
        $scaffolder
            ->mutation('editTaskSubmission', TaskSubmission::class)
            ->addArgs([
                'UUID' => 'String!',
            ])
            ->setResolver(new class implements ResolverInterface
            {
                /**
                 * Invoked by the Executor class to resolve this mutation / query
                 * @see Executor
                 *
                 * @param mixed       $object  object
                 * @param array       $args    args
                 * @param mixed       $context context
                 * @param ResolveInfo $info    info
                 * @throws Exception
                 * @return mixed
                 */
                public function resolve($object, array $args, $context, ResolveInfo $info)
                {
                    $submitter = Security::getCurrentUser();

                    // Check authentication
                    if (!$submitter) {
                        throw new GraphQLAuthFailure();
                    }

                    /* @var $submission TaskSubmission */
                    $submission = TaskSubmission::get()->where(['UUID' => $args['UUID']])->first();
                    if (!$submission) {
                        throw new Exception('Task submission does not exist');
                    }

                    $submission->Status = TaskSubmission::STATUS_IN_PROGRESS;
                    $submission->Result = "";
                    $submission->write();

                    return $submission;
                }
            })
            ->end();
    }

    /**
     * @param DataObjectScaffolder $scaffolder The scaffolder of the data object
     * @return void
     */
    private function provideGraphQLScaffoldingForReadTaskSubmission(DataObjectScaffolder $scaffolder)
    {
        $scaffolder
            ->operation(SchemaScaffolder::READ)
            ->setName('readTaskSubmission')
            ->addArg('UUID', 'String!')
            ->setUsePagination(false)
            ->setResolver(new class implements ResolverInterface
            {

                /**
                 * Invoked by the Executor class to resolve this mutation / query
                 * @see Executor
                 *
                 * @param mixed       $object  object
                 * @param array       $args    args
                 * @param mixed       $context context
                 * @param ResolveInfo $info    info
                 * @throws Exception
                 * @return mixed
                 */
                public function resolve($object, array $args, $context, ResolveInfo $info)
                {
                    $member = Security::getCurrentUser();
                    $uuid = htmlentities(trim($args['UUID']));

                    // Check authentication
                    if (!$member) {
                        throw new GraphQLAuthFailure();
                    }

                    // Check argument
                    if (!$uuid) {
                        throw new Exception('Wrong argument');
                    }

                    // Filter data by UUID
                    $data = TaskSubmission::get()->where([
                        'UUID' => $uuid
                    ]);

                    return $data;
                }
            })
            ->end();
    }
}
