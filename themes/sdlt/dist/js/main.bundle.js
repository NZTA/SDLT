!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],u=0,l=[];u<a.length;u++)o=a[u],D[o]&&l.push(D[o][0]),D[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(N&&N(t);l.length;)l.shift()();return A.push.apply(A,c||[]),n()}function n(){for(var e,t=0;t<A.length;t++){for(var n=A[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==D[a]&&(r=!1)}r&&(A.splice(t--,1),e=T(T.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--v&&0===E&&k()}(e,t),r&&r(e,t)};var o,a=!0,i="fbe4280461e46cfa9fb4",c=1e4,u={},l=[],s=[];function f(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:S,apply:P,status:function(e){if(!e)return d;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:u[e]};return o=void 0,t}var p=[],d="idle";function m(e){d=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var y,h,b,v=0,E=0,O={},g={},w={};function _(e){return+e+""===e?+e:e}function S(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return a=e,m("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=T.p+"hot/hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return m("idle"),null;g={},O={},w=e.c,b=e.h,m("prepare");var t=new Promise(function(e,t){y={resolve:e,reject:t}});for(var n in h={},D)j(n);return"prepare"===d&&0===E&&0===v&&k(),t});var t}function j(e){var t;w[e]?(g[e]=!0,v++,(t=document.createElement("script")).charset="utf-8",t.src=T.p+"hot/hot-update.js",document.head.appendChild(t)):O[e]=!0}function k(){m("ready");var e=y;if(y=null,e)if(a)Promise.resolve().then(function(){return P(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(_(n));e.resolve(t)}}function P(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function s(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=x[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var u=0;u<a.parents.length;u++){var l=a.parents[u],s=x[l];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(s.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),f(n[l],[i])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},y=[],v={},E=function(){console.warn("[HMR] unexpected require("+g.moduleId+") to disposed module")};for(var O in h)if(Object.prototype.hasOwnProperty.call(h,O)){var g;c=_(O);var S=!1,j=!1,k=!1,P="";switch((g=h[O]?s(c):{type:"disposed",moduleId:O}).chain&&(P="\nUpdate propagation: "+g.chain.join(" -> ")),g.type){case"self-declined":t.onDeclined&&t.onDeclined(g),t.ignoreDeclined||(S=new Error("Aborted because of self decline: "+g.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(g),t.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+g.moduleId+" in "+g.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(g),t.ignoreUnaccepted||(S=new Error("Aborted because "+c+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(g),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(g),k=!0;break;default:throw new Error("Unexception type "+g.type)}if(S)return m("abort"),Promise.reject(S);if(j)for(c in v[c]=h[c],f(y,g.outdatedModules),g.outdatedDependencies)Object.prototype.hasOwnProperty.call(g.outdatedDependencies,c)&&(p[c]||(p[c]=[]),f(p[c],g.outdatedDependencies[c]));k&&(f(y,[g.moduleId]),v[c]=E)}var A,I=[];for(r=0;r<y.length;r++)c=y[r],x[c]&&x[c].hot._selfAccepted&&I.push({module:c,errorHandler:x[c].hot._selfAccepted});m("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete D[e]}(e)});for(var H,C,N=y.slice();N.length>0;)if(c=N.pop(),a=x[c]){var M={},R=a.hot._disposeHandlers;for(o=0;o<R.length;o++)(n=R[o])(M);for(u[c]=M,a.hot.active=!1,delete x[c],delete p[c],o=0;o<a.children.length;o++){var L=x[a.children[o]];L&&((A=L.parents.indexOf(c))>=0&&L.parents.splice(A,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=x[c]))for(C=p[c],o=0;o<C.length;o++)H=C[o],(A=a.children.indexOf(H))>=0&&a.children.splice(A,1);for(c in m("apply"),i=b,v)Object.prototype.hasOwnProperty.call(v,c)&&(e[c]=v[c]);var q=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=x[c])){C=p[c];var F=[];for(r=0;r<C.length;r++)if(H=C[r],n=a.hot._acceptedDependencies[H]){if(-1!==F.indexOf(n))continue;F.push(n)}for(r=0;r<F.length;r++){n=F[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:C[r],error:e}),t.ignoreErrored||q||(q=e)}}}for(r=0;r<I.length;r++){var U=I[r];c=U.module,l=[c];try{T(c)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||q||(q=n),q||(q=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||q||(q=e)}}return q?(m("fail"),Promise.reject(q)):(m("idle"),new Promise(function(e){e(y)}))}var x={},D={1:0},A=[];function T(t){if(x[t])return x[t].exports;var n=x[t]={i:t,l:!1,exports:{},hot:f(t),parents:(s=l,l=[],s),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=x[e];if(!t)return T;var n=function(n){return t.hot.active?(x[n]?-1===x[n].parents.indexOf(e)&&x[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),T(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return T[e]},set:function(t){T[e]=t}}};for(var a in T)Object.prototype.hasOwnProperty.call(T,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===d&&m("prepare"),E++,T.e(e).then(t,function(e){throw t(),e});function t(){E--,"prepare"===d&&(O[e]||j(e),0===E&&0===v&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),T.t(e,-2&t)},n}(t)),n.l=!0,n.exports}T.m=e,T.c=x,T.d=function(e,t,n){T.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},T.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.t=function(e,t){if(1&t&&(e=T(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(T.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)T.d(n,r,function(t){return e[t]}.bind(null,r));return n},T.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return T.d(t,"a",t),t},T.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},T.p="/resources/themes/sdlt/dist/img/",T.h=function(){return i};var I=window.webpackJsonp=window.webpackJsonp||[],H=I.push.bind(I);I.push=t,I=I.slice();for(var C=0;C<I.length;C++)t(I[C]);var N=H;A.push([324,2]),n()}({144:function(e,t,n){e.exports=n.p+"../img/b2ce59ecfcc515cb33d81013163089b9.svg"},145:function(e,t,n){e.exports=n.p+"../img/41e304962a77cf734f9bfe9772ab12b9.svg"},146:function(e,t,n){e.exports=n.p+"../img/0e61629440d7a6d860ba88aad4af303a.svg"},147:function(e,t,n){e.exports=n.p+"../img/442b4a253c2be23661dc12e64f264053.svg"},149:function(e,t,n){e.exports=n.p+"../img/f0545538d29150bca803dd2e1d422c11.jpg"},150:function(e,t,n){e.exports=n.p+"../img/b002cf666ac7512c21ad21462efdf4e8.svg"},324:function(e,t,n){"use strict";n.r(t);n(153),n(155),n(156),n(159),n(160),n(161),n(83),n(164),n(165),n(167),n(168),n(169),n(171),n(172),n(173),n(174),n(175),n(176),n(177),n(178),n(179),n(180),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(201),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(226),n(227),n(228),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(125),n(242),n(244),n(245),n(246),n(247),n(248),n(249),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290);var r=n(0),o=n.n(r),a=n(139),i=n.n(a),c=n(330),u=n(329),l=n(69),s=n.n(l);function f(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,n=null,r=[{key:"provideData",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.a.create({url:"/schema/".concat(t,".json"),method:"get"}),e.next=3,n.request();case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){f(a,r,o,i,c,"next",e)}function c(e){f(a,r,o,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}],n&&p(t.prototype,n),r&&p(t,r),e}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,b(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e="";return e+=this.props.page.title,this.props.isCurrentStep&&(e+="[current]"),this.props.touched&&(e+="[touched]"),o.a.createElement("div",{className:"LeftBarItem"},o.a.createElement("button",{className:"btn",onClick:this.props.onClick},e))}}])&&y(n.prototype,a),i&&y(n,i),t}(),O=n(36);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,S(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,r["Component"]),n=t,(a=[{key:"renderInputsForm",value:function(e){var t=this,n=e&&e.inputs;if(!n)return null;var r={};return n.forEach(function(e){r[e.name]=""}),o.a.createElement(O.d,{initialValues:r,validate:function(e){var t={};return n.forEach(function(n){var r=n.name,o=n.type;e[r]?"email"!==o||/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e[r])||(t[r]="Invalid email address"):t[r]="Required"}),t},onSubmit:function(e,n){t.props.handleFormSubmit(n,e)}},function(e){var t=e.isSubmitting;return o.a.createElement(O.c,null,n.map(function(e){return["text","email"].includes(e.type)?o.a.createElement("div",{className:"form-group",key:e.name},o.a.createElement("label",null,e.name.toUpperCase(),o.a.createElement("br",null),o.a.createElement(O.b,{type:e.type,name:e.name})),o.a.createElement(O.a,{className:"text-danger",name:e.name,component:"div"})):"textarea"===e.type?o.a.createElement("div",{className:"form-group",key:e.name},o.a.createElement("label",null,e.name.toUpperCase(),o.a.createElement("br",null),o.a.createElement(O.b,{name:e.name},function(e){var t=e.field;return o.a.createElement("textarea",t)})),o.a.createElement(O.a,{className:"text-danger",name:e.name,component:"div"})):null}),o.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:t},"Continue"))})}},{key:"renderActions",value:function(e){var t=this,n=e&&e.actions;if(!n)return null;var r=function(e){switch(e){case 0:return"btn btn-primary";case 1:return"btn btn-secondary";default:return"btn btn-light"}};return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col d-flex justify-content-between"},n.map(function(e,n){return o.a.createElement("button",{key:e.text,type:"button",className:"col-2 ".concat(r(n)),onClick:function(){switch(e.action){case"continue":t.props.handleActionContinue(e);break;case"create_task":alert("Create Task: ".concat(e.target));break;case"goto":t.props.handleActionGoto(e);break;case"message":alert(e.message);break;case"finish":alert(e.result)}}},e.text)})))}},{key:"renderKeyInformation",value:function(){return this.props.currentFormPage.keyInformation?o.a.createElement("div",{className:"row"},o.a.createElement("h2",null,"Key Information"),o.a.createElement("ul",null,this.props.currentFormPage.keyInformation.map(function(e){return o.a.createElement("li",null,e)}))):null}},{key:"render",value:function(){var e=this.props.currentFormPage;return o.a.createElement("div",{className:"MainContent container"},this.renderKeyInformation(),o.a.createElement("div",{className:"row mb-3"},e.question),o.a.createElement("div",{className:"row mb-3"},e.description),this.renderInputsForm(e),this.renderActions(e))}}])&&w(n.prototype,a),i&&w(n,i),t}(),P=n(327);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function A(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){D(a,r,o,i,c,"next",e)}function c(e){D(a,r,o,i,c,"throw",e)}i(void 0)})}}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=I(this,H(t).call(this,e))).state={currentStep:0,maxStep:0,schema:[],data:[]},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=A(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=A(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.provideData(this.props.questionnaire);case 2:t=e.sent,this.setState({schema:t,maxStep:t.length-1,data:Array(t.length).fill(null)});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleFormSubmit",value:function(e,t){var n=this;e.setValues({}),this.setState(function(e){var n=e.data.map(function(n,r){return r===e.currentStep?t:n});return{currentStep:e.currentStep+1,data:n}},function(){e.setSubmitting(!1),n.state.currentStep===n.state.maxStep&&alert(JSON.stringify(n.state.data,null,2))})}},{key:"handleActionContinue",value:function(e){var t=this;this.setState(function(t){var n=t.data.map(function(n,r){return r===t.currentStep?e.text:n});return{currentStep:t.currentStep+1,data:n}},function(){t.state.currentStep===t.state.maxStep&&alert(JSON.stringify(t.state.data,null,2))})}},{key:"handleActionGoto",value:function(e){var t=this,n=this.state.schema.map(function(e){return e.id}).indexOf(e.target);this.setState(function(t){var r=t.data.map(function(n,r){return r===t.currentStep?e.text:n});return{currentStep:n,data:r}},function(){t.state.currentStep===t.state.maxStep&&alert(JSON.stringify(t.state.data,null,2))})}},{key:"handleClickLeftBarItem",value:function(e){var t=this.state.schema.map(function(e){return e.id}).indexOf(e.id);this.setState(function(e){return{currentStep:t}})}},{key:"render",value:function(){var e=this;return 0===this.state.schema.length?o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"The questionnaire is not available..."),o.a.createElement(P.a,{to:"/"},o.a.createElement("button",{className:"btn btn-primary"},"Back"))):o.a.createElement("div",{className:"Questionnaire container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-4"},o.a.createElement("div",{className:"LeftBar"},this.state.schema.map(function(t){var n=e.state.schema.findIndex(function(e){return e.id===t.id}),r=e.state.currentStep===n,a=null!==e.state.data[n];return o.a.createElement(E,{key:t.id,page:t,isCurrentStep:r,touched:a,onClick:function(){e.handleClickLeftBarItem(t)}})}))),o.a.createElement("div",{className:"col-8"},o.a.createElement(k,{currentFormPage:this.state.schema[this.state.currentStep],handleFormSubmit:this.handleFormSubmit.bind(this),handleActionGoto:this.handleActionGoto.bind(this),handleActionContinue:this.handleActionContinue.bind(this)}))))}}])&&T(n.prototype,a),i&&T(n,i),t}(),M=n(73),R={HOME:{LOAD_HOME_STATE_STARTED:"LOAD_HOME_STATE_STARTED",LOAD_HOME_STATE_FAILED:"LOAD_HOME_STATE_FAILED",LOAD_HOME_STATE_FINISHED:"LOAD_HOME_STATE_FINISHED"}},L=n(103),q=n(144),F=n.n(q),U=n(145),B=n.n(U),J=n(146),G=n.n(J),Q=n(147),Z=n.n(Q),K=n(37),V=n.n(K),X=n(148),W=n.n(X);function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"prepareRequest",value:function(e,t){var n={query:W()(e),variables:t};return s.a.create({url:"/graphql",method:"post",data:n,headers:{}})}}],(n=null)&&$(t.prototype,n),r&&$(t,r),e}(),Y=new Error("There is an error when fetching data...");function ee(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ne=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,n=null,r=[{key:"fetchHomeData",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t,n,r,o,a,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"\nquery {\n  readDashboard {\n    Title\n    Subtitle\n    Pillars {\n      Label\n      Type\n      Disabled\n      Questionnaire {\n        ID\n      }\n    }\n  }\n}",e.next=3,z.prepareRequest("\nquery {\n  readDashboard {\n    Title\n    Subtitle\n    Pillars {\n      Label\n      Type\n      Disabled\n      Questionnaire {\n        ID\n      }\n    }\n  }\n}").request();case 3:if(t=e.sent,n=t.data,r=V.a.get(n,"data.readDashboard",[]),Array.isArray(r)&&0!==r.length){e.next=8;break}throw Y;case 8:if(o=r[0],a=V.a.get(o,"Title",""),i=V.a.get(o,"Subtitle",""),c=V.a.get(o,"Pillars",[]),Array.isArray(c)){e.next=14;break}throw Y;case 14:return c=c.map(function(e){var t="";switch(e.Type){case"proof_of_concept":t=F.a;break;case"software_as_service":t=B.a;break;case"product_project_or_solution":t=G.a;break;case"feature_or_bug_fix":t=Z.a}return{title:V.a.get(e,"Label",""),disabled:V.a.get(e,"Disabled",!0),questionnaireID:V.a.get(e,"Questionnaire.0.ID",""),icon:t}}),e.abrupt("return",{title:a,subtitle:i,pillars:c});case 16:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){ee(a,r,o,i,c,"next",e)}function c(e){ee(a,r,o,i,c,"throw",e)}i(void 0)})});return function(){return t.apply(this,arguments)}}()}],n&&te(t.prototype,n),r&&te(t,r),e}();function re(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function oe(){return function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:R.HOME.LOAD_HOME_STATE_STARTED}),e.prev=1,e.next=4,ne.fetchHomeData();case 4:n=e.sent,t(ae(n)),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),t((r=e.t0,{type:R.HOME.LOAD_HOME_STATE_FAILED,error:r})),console.error(e.t0),alert(e.t0.message);case 13:case"end":return e.stop()}var r},e,this,[[1,8]])}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){re(a,r,o,i,c,"next",e)}function c(e){re(a,r,o,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}function ae(e){return{type:R.HOME.LOAD_HOME_STATE_FINISHED,payload:e}}var ie=n(149),ce=n.n(ie),ue=n(150),le=n.n(ue);function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t){return!t||"object"!==se(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function me(e){return(me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var he=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),de(this,me(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this,t=["Pillar"].concat(fe(this.props.classes));return this.props.pillar.disabled&&t.push("disabled"),o.a.createElement(P.a,{className:t.join(" "),to:this.props.link,onClick:function(t){e.props.pillar.disabled&&(t.preventDefault(),alert("Coming soon..."))}},o.a.createElement("div",{className:"icon"},o.a.createElement("img",{src:this.props.pillar.icon,alt:this.props.pillar.title})),o.a.createElement("div",{className:"title"},this.props.pillar.title))}}])&&pe(n.prototype,a),i&&pe(n,i),t}();function be(e){return(be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e,t){return!t||"object"!==be(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Oe(e){return(Oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ge(e,t){return(ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var we=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ee(this,Oe(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ge(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this;return o.a.createElement(P.a,{className:"TaskButton ".concat(this.props.classes.join(" ")),to:this.props.link,onClick:function(t){e.props.disabled&&(t.preventDefault(),alert("Coming soon..."))}},o.a.createElement("div",{className:"title"},this.props.title))}}])&&ve(n.prototype,a),i&&ve(n,i),t}();function _e(e){return(_e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function je(e,t){return!t||"object"!==_e(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ke(e){return(ke=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Pe(e,t){return(Pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var xe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),je(this,ke(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pe(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("div",{className:"Home"},o.a.createElement("div",{className:"background-image",style:{backgroundImage:'url("'.concat(ce.a,'")')}}),o.a.createElement("div",{className:"layout"},o.a.createElement("img",{src:le.a,className:"logo"}),o.a.createElement("h1",null,this.props.homeState.title),o.a.createElement("h2",null,this.props.homeState.subtitle),o.a.createElement("div",{className:"pillars"},this.props.homeState.pillars.map(function(e,t){return o.a.createElement(he,{link:"/questionnaire/start/".concat(e.questionnaireID),classes:["col","mx-1"],pillar:e,key:t})})),o.a.createElement("div",{className:"tasks"},o.a.createElement(we,{link:"/tasks/blah",classes:["mx-1"],disabled:!0,title:"Information Classification"}),o.a.createElement(we,{link:"/tasks/blah",classes:["mx-1"],disabled:!0,title:"Information Classification"}),o.a.createElement(we,{link:"/tasks/blah",classes:["mx-1"],disabled:!0,title:"Information Classification"}),o.a.createElement(we,{link:"/tasks/blah",classes:["mx-1"],disabled:!0,title:"Information Classification"}),o.a.createElement(we,{link:"/tasks/blah",classes:["mx-1"],disabled:!0,title:"Information Classification"}))))}}])&&Se(n.prototype,a),i&&Se(n,i),t}();function De(e){return(De="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Te(e,t){return!t||"object"!==De(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ie(e){return(Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function He(e,t){return(He=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ce=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Te(this,Ie(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&He(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){this.props.dispatchLoadHomeDataAction&&this.props.dispatchLoadHomeDataAction()}},{key:"render",value:function(){return this.props.homeState?o.a.createElement("div",{className:"Home"},o.a.createElement(xe,{homeState:this.props.homeState})):null}}])&&Ae(n.prototype,a),i&&Ae(n,i),t}(),Ne=Object(M.b)(function(e){return{homeState:e.homeState}},function(e,t){return{dispatchLoadHomeDataAction:function(){e(oe())}}})(Ce);function Me(e){return(Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Le(e,t){return!t||"object"!==Me(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function qe(e){return(qe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Fe(e,t){return(Fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ue=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Le(this,qe(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Fe(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("main",null,o.a.createElement(c.a,null,o.a.createElement(u.a,{exact:!0,path:"/"},function(){return o.a.createElement(Ne,null)}),o.a.createElement(u.a,{path:"/questionnaire/:questionnaire"},function(e){var t=e.match;return o.a.createElement(N,{questionnaire:t.params.questionnaire})}))),o.a.createElement("footer",null,o.a.createElement("div",null,"© 2019 | NZ Transport Agency")))}}])&&Re(n.prototype,a),i&&Re(n,i),t}(),Be=n(328),Je=n(22),Ge=(n(323),{title:"",subtitle:"",pillars:[]});var Qe=Object(Je.combineReducers)({homeState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.HOME.LOAD_HOME_STATE_STARTED:case R.HOME.LOAD_HOME_STATE_FAILED:return e;case R.HOME.LOAD_HOME_STATE_FINISHED:return t.payload;default:return e}}}),Ze=n(152),Ke=[L.a];var Ve=Object(Je.createStore)(Qe,Object(Ze.composeWithDevTools)(Je.applyMiddleware.apply(void 0,Ke)));i.a.render(o.a.createElement(Be.a,null,o.a.createElement(M.a,{store:Ve},o.a.createElement(Ue,null))),document.getElementById("main-app"))}});
//# sourceMappingURL=main.bundle.js.map