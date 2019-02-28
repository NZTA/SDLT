!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],u=0,s=[];u<a.length;u++)o=a[u],N[o]&&s.push(N[o][0]),N[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(T&&T(t);s.length;)s.shift()();return q.push.apply(q,c||[]),n()}function n(){for(var e,t=0;t<q.length;t++){for(var n=q[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==N[a]&&(r=!1)}r&&(q.splice(t--,1),e=D(D.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!O[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--v&&0===E&&x()}(e,t),r&&r(e,t)};var o,a=!0,i="d06f619cc4b50397f064",c=1e4,u={},s=[],l=[];function f(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:_,apply:k,status:function(e){if(!e)return d;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:u[e]};return o=void 0,t}var p=[],d="idle";function m(e){d=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var y,h,b,v=0,E=0,w={},g={},O={};function S(e){return+e+""===e?+e:e}function _(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return a=e,m("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=D.p+"hot/hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;g={},w={},O=e.c,b=e.h,m("prepare");var t=new Promise(function(e,t){y={resolve:e,reject:t}});for(var n in h={},N)j(n);return"prepare"===d&&0===E&&0===v&&x(),t});var t}function j(e){var t;O[e]?(g[e]=!0,v++,(t=document.createElement("script")).charset="utf-8",t.src=D.p+"hot/hot-update.js",document.head.appendChild(t)):w[e]=!0}function x(){m("ready");var e=y;if(y=null,e)if(a)Promise.resolve().then(function(){return k(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(S(n));e.resolve(t)}}function k(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=P[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var u=0;u<a.parents.length;u++){var s=a.parents[u],l=P[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),f(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},y=[],v={},E=function(){console.warn("[HMR] unexpected require("+g.moduleId+") to disposed module")};for(var w in h)if(Object.prototype.hasOwnProperty.call(h,w)){var g;c=S(w);var _=!1,j=!1,x=!1,k="";switch((g=h[w]?l(c):{type:"disposed",moduleId:w}).chain&&(k="\nUpdate propagation: "+g.chain.join(" -> ")),g.type){case"self-declined":t.onDeclined&&t.onDeclined(g),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+g.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(g),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+g.moduleId+" in "+g.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(g),t.ignoreUnaccepted||(_=new Error("Aborted because "+c+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(g),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(g),x=!0;break;default:throw new Error("Unexception type "+g.type)}if(_)return m("abort"),Promise.reject(_);if(j)for(c in v[c]=h[c],f(y,g.outdatedModules),g.outdatedDependencies)Object.prototype.hasOwnProperty.call(g.outdatedDependencies,c)&&(p[c]||(p[c]=[]),f(p[c],g.outdatedDependencies[c]));x&&(f(y,[g.moduleId]),v[c]=E)}var q,C=[];for(r=0;r<y.length;r++)c=y[r],P[c]&&P[c].hot._selfAccepted&&C.push({module:c,errorHandler:P[c].hot._selfAccepted});m("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete N[e]}(e)});for(var I,A,T=y.slice();T.length>0;)if(c=T.pop(),a=P[c]){var H={},R=a.hot._disposeHandlers;for(o=0;o<R.length;o++)(n=R[o])(H);for(u[c]=H,a.hot.active=!1,delete P[c],delete p[c],o=0;o<a.children.length;o++){var M=P[a.children[o]];M&&((q=M.parents.indexOf(c))>=0&&M.parents.splice(q,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=P[c]))for(A=p[c],o=0;o<A.length;o++)I=A[o],(q=a.children.indexOf(I))>=0&&a.children.splice(q,1);for(c in m("apply"),i=b,v)Object.prototype.hasOwnProperty.call(v,c)&&(e[c]=v[c]);var F=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=P[c])){A=p[c];var L=[];for(r=0;r<A.length;r++)if(I=A[r],n=a.hot._acceptedDependencies[I]){if(-1!==L.indexOf(n))continue;L.push(n)}for(r=0;r<L.length;r++){n=L[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:A[r],error:e}),t.ignoreErrored||F||(F=e)}}}for(r=0;r<C.length;r++){var U=C[r];c=U.module,s=[c];try{D(c)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||F||(F=n),F||(F=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||F||(F=e)}}return F?(m("fail"),Promise.reject(F)):(m("idle"),new Promise(function(e){e(y)}))}var P={},N={1:0},q=[];function D(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:f(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return D;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),D(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(t){D[e]=t}}};for(var a in D)Object.prototype.hasOwnProperty.call(D,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===d&&m("prepare"),E++,D.e(e).then(t,function(e){throw t(),e});function t(){E--,"prepare"===d&&(w[e]||j(e),0===E&&0===v&&x())}},n.t=function(e,t){return 1&t&&(e=n(e)),D.t(e,-2&t)},n}(t)),n.l=!0,n.exports}D.m=e,D.c=P,D.d=function(e,t,n){D.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,t){if(1&t&&(e=D(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(D.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)D.d(n,r,function(t){return e[t]}.bind(null,r));return n},D.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(t,"a",t),t},D.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},D.p="/resources/themes/sdlt/dist/img/",D.h=function(){return i};var C=window.webpackJsonp=window.webpackJsonp||[],I=C.push.bind(C);C.push=t,C=C.slice();for(var A=0;A<C.length;A++)t(C[A]);var T=I;q.push([307,2]),n()}({136:function(e,t,n){e.exports=n.p+"../img/6c282a66c8955eb7517b0f0e3780f5a5.jpg"},137:function(e,t,n){e.exports=n.p+"../img/b002cf666ac7512c21ad21462efdf4e8.svg"},307:function(e,t,n){"use strict";n.r(t);n(139),n(141),n(142),n(145),n(146),n(147),n(77),n(150),n(151),n(153),n(154),n(155),n(157),n(158),n(159),n(160),n(161),n(162),n(163),n(164),n(165),n(166),n(168),n(169),n(170),n(171),n(172),n(173),n(174),n(175),n(176),n(177),n(178),n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(187),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(212),n(213),n(214),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(117),n(228),n(230),n(231),n(232),n(233),n(234),n(235),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276);var r=n(0),o=n.n(r),a=n(131),i=n.n(a),c=n(312),u=n(313),s=n(132),l=n.n(s);function f(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,n=null,r=[{key:"provideData",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.a.create({url:"/schema/".concat(t,".json"),method:"get"}),e.next=3,n.request();case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){f(a,r,o,i,c,"next",e)}function c(e){f(a,r,o,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}],n&&p(t.prototype,n),r&&p(t,r),e}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,b(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e="";return e+=this.props.page.title,this.props.isCurrentStep&&(e+="[current]"),this.props.touched&&(e+="[touched]"),o.a.createElement("div",{className:"LeftBarItem"},o.a.createElement("button",{className:"btn",onClick:this.props.onClick},e))}}])&&y(n.prototype,a),i&&y(n,i),t}(),w=n(35);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,_(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,r["Component"]),n=t,(a=[{key:"renderInputsForm",value:function(e){var t=this,n=e&&e.inputs;if(!n)return null;var r={};return n.forEach(function(e){r[e.name]=""}),o.a.createElement(w.d,{initialValues:r,validate:function(e){var t={};return n.forEach(function(n){var r=n.name,o=n.type;e[r]?"email"!==o||/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e[r])||(t[r]="Invalid email address"):t[r]="Required"}),t},onSubmit:function(e,n){t.props.handleFormSubmit(n,e)}},function(e){var t=e.isSubmitting;return o.a.createElement(w.c,null,n.map(function(e){return["text","email"].includes(e.type)?o.a.createElement("div",{className:"form-group",key:e.name},o.a.createElement("label",null,e.name.toUpperCase(),o.a.createElement("br",null),o.a.createElement(w.b,{type:e.type,name:e.name})),o.a.createElement(w.a,{className:"text-danger",name:e.name,component:"div"})):"textarea"===e.type?o.a.createElement("div",{className:"form-group",key:e.name},o.a.createElement("label",null,e.name.toUpperCase(),o.a.createElement("br",null),o.a.createElement(w.b,{name:e.name},function(e){var t=e.field;return o.a.createElement("textarea",t)})),o.a.createElement(w.a,{className:"text-danger",name:e.name,component:"div"})):null}),o.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:t},"Continue"))})}},{key:"renderActions",value:function(e){var t=this,n=e&&e.actions;if(!n)return null;var r=function(e){switch(e){case 0:return"btn btn-primary";case 1:return"btn btn-secondary";default:return"btn btn-light"}};return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col d-flex justify-content-between"},n.map(function(e,n){return o.a.createElement("button",{key:e.text,type:"button",className:"col-2 ".concat(r(n)),onClick:function(){switch(e.action){case"continue":t.props.handleActionContinue(e);break;case"create_task":alert("Create Task: ".concat(e.target));break;case"goto":t.props.handleActionGoto(e);break;case"message":alert(e.message);break;case"finish":alert(e.result)}}},e.text)})))}},{key:"renderKeyInformation",value:function(){return this.props.currentFormPage.keyInformation?o.a.createElement("div",{className:"row"},o.a.createElement("h2",null,"Key Information"),o.a.createElement("ul",null,this.props.currentFormPage.keyInformation.map(function(e){return o.a.createElement("li",null,e)}))):null}},{key:"render",value:function(){var e=this.props.currentFormPage;return o.a.createElement("div",{className:"MainContent container"},this.renderKeyInformation(),o.a.createElement("div",{className:"row mb-3"},e.question),o.a.createElement("div",{className:"row mb-3"},e.description),this.renderInputsForm(e),this.renderActions(e))}}])&&O(n.prototype,a),i&&O(n,i),t}(),k=n(310);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function q(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){N(a,r,o,i,c,"next",e)}function c(e){N(a,r,o,i,c,"throw",e)}i(void 0)})}}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=C(this,I(t).call(this,e))).state={currentStep:0,maxStep:0,schema:[],data:[]},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=q(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=q(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.provideData(this.props.questionnaire);case 2:t=e.sent,this.setState({schema:t,maxStep:t.length-1,data:Array(t.length).fill(null)});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleFormSubmit",value:function(e,t){var n=this;e.setValues({}),this.setState(function(e){var n=e.data.map(function(n,r){return r===e.currentStep?t:n});return{currentStep:e.currentStep+1,data:n}},function(){e.setSubmitting(!1),n.state.currentStep===n.state.maxStep&&alert(JSON.stringify(n.state.data,null,2))})}},{key:"handleActionContinue",value:function(e){var t=this;this.setState(function(t){var n=t.data.map(function(n,r){return r===t.currentStep?e.text:n});return{currentStep:t.currentStep+1,data:n}},function(){t.state.currentStep===t.state.maxStep&&alert(JSON.stringify(t.state.data,null,2))})}},{key:"handleActionGoto",value:function(e){var t=this,n=this.state.schema.map(function(e){return e.id}).indexOf(e.target);this.setState(function(t){var r=t.data.map(function(n,r){return r===t.currentStep?e.text:n});return{currentStep:n,data:r}},function(){t.state.currentStep===t.state.maxStep&&alert(JSON.stringify(t.state.data,null,2))})}},{key:"handleClickLeftBarItem",value:function(e){var t=this.state.schema.map(function(e){return e.id}).indexOf(e.id);this.setState(function(e){return{currentStep:t}})}},{key:"render",value:function(){var e=this;return 0===this.state.schema.length?o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"The questionnaire is not available..."),o.a.createElement(k.a,{to:"/"},o.a.createElement("button",{className:"btn btn-primary"},"Back"))):o.a.createElement("div",{className:"Questionnaire container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-4"},o.a.createElement("div",{className:"LeftBar"},this.state.schema.map(function(t){var n=e.state.schema.findIndex(function(e){return e.id===t.id}),r=e.state.currentStep===n,a=null!==e.state.data[n];return o.a.createElement(E,{key:t.id,page:t,isCurrentStep:r,touched:a,onClick:function(){e.handleClickLeftBarItem(t)}})}))),o.a.createElement("div",{className:"col-8"},o.a.createElement(x,{currentFormPage:this.state.schema[this.state.currentStep],handleFormSubmit:this.handleFormSubmit.bind(this),handleActionGoto:this.handleActionGoto.bind(this),handleActionContinue:this.handleActionContinue.bind(this)}))))}}])&&D(n.prototype,a),i&&D(n,i),t}(),H=n(136),R=n.n(H);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),L(this,U(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("div",{className:"Home"},o.a.createElement("div",{className:"banner"},o.a.createElement("img",{src:R.a}),o.a.createElement("h1",{className:"site-title"},"Security Development Lifecycle TOOL (SDLT)")),o.a.createElement("div",{className:"entries container py-3"},o.a.createElement("div",{className:"row"},o.a.createElement(k.a,{className:"entry col",to:"/questionnaire/proof-of-concept-questions"},o.a.createElement("div",{className:"icon rounded-circle btn-primary mb-2 d-flex justify-content-center align-items-center"},o.a.createElement("i",{className:"fas fa-play",style:{fontSize:44}})),o.a.createElement("div",{className:"text-primary"},"Proof of Concept or Software Trial")),o.a.createElement(k.a,{className:"entry col",to:"/questionnaire/software-as-a-service-questions"},o.a.createElement("div",{className:"icon rounded-circle btn-primary mb-2 d-flex justify-content-center align-items-center"},o.a.createElement("i",{className:"fas fa-cloud",style:{fontSize:44}})),o.a.createElement("div",{className:"text-primary"},"Software as-a Service (SaaS)")),o.a.createElement(k.a,{className:"entry col",to:"/questionnaire/solution-questions"},o.a.createElement("div",{className:"icon rounded-circle btn-primary mb-2 d-flex justify-content-center align-items-center"},o.a.createElement("i",{className:"fas fa-tasks",style:{fontSize:44}})),o.a.createElement("div",{className:"text-primary"},"Product, Project or Solution")),o.a.createElement(k.a,{className:"entry col",to:"/questionnaire/feature-questions"},o.a.createElement("div",{className:"icon rounded-circle btn-primary mb-2 d-flex justify-content-center align-items-center"},o.a.createElement("i",{className:"fas fa-tools",style:{fontSize:44}})),o.a.createElement("div",{className:"text-primary"},"Feature or Bug Fix")),o.a.createElement(k.a,{className:"entry col",to:"/questionnaire/feature-questions"},o.a.createElement("div",{className:"icon rounded-circle btn-primary mb-2 d-flex justify-content-center align-items-center"},o.a.createElement("i",{className:"fas fa-tools",style:{fontSize:44}})),o.a.createElement("div",{className:"text-primary"},"Tasks"))),o.a.createElement("ul",{className:"d-none"},o.a.createElement("li",null,o.a.createElement(k.a,{to:"/questionnaire/feature-questions"},"feature-questions")),o.a.createElement("li",null,o.a.createElement(k.a,{to:"/questionnaire/information-classification-questions"},"information-classification-questions")),o.a.createElement("li",null,o.a.createElement(k.a,{to:"/questionnaire/proof-of-concept-questions"},"proof-of-concept-questions")),o.a.createElement("li",null,o.a.createElement(k.a,{to:"/questionnaire/software-as-a-service-questions"},"software-as-a-service-questions")),o.a.createElement("li",null,o.a.createElement(k.a,{to:"/questionnaire/solution-initial-risk-assessment-questions"},"solution-initial-risk-assessment-questions")),o.a.createElement("li",null,o.a.createElement(k.a,{to:"/questionnaire/solution-questions"},"solution-questions")))))}}])&&F(n.prototype,a),i&&F(n,i),t}(),z=n(137),G=n.n(z);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var $=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),V(this,X(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("div",{className:"container py-3"},o.a.createElement("img",{className:"logo",src:G.a}))),o.a.createElement("main",null,o.a.createElement(c.a,null,o.a.createElement(u.a,{exact:!0,path:"/"},function(){return o.a.createElement(J,null)}),o.a.createElement(u.a,{path:"/questionnaire/:questionnaire"},function(e){var t=e.match;return o.a.createElement(T,{questionnaire:t.params.questionnaire})}))),o.a.createElement("footer",{className:"fixed-bottom"},o.a.createElement("div",{className:"container pt-1"},"© 2019 | NZ Transport Agency")))}}])&&K(n.prototype,a),i&&K(n,i),t}(),W=n(311);i.a.render(o.a.createElement(W.a,null,o.a.createElement($,null)),document.getElementById("root"))}});
//# sourceMappingURL=index.bundle.js.map