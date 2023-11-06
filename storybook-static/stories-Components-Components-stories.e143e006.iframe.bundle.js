/*! For license information please see stories-Components-Components-stories.e143e006.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstory_book_learn=self.webpackChunkstory_book_learn||[]).push([[342],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/stories/Components/Components.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FloatingPoint:function(){return FloatingPoint},Large:function(){return Large},Normal:function(){return Normal},Number:function(){return Number},__namedExportsOrder:function(){return __namedExportsOrder}});var _Normal$parameters,_Normal$parameters2,_Normal$parameters2$d,_Large$parameters,_Large$parameters2,_Large$parameters2$do,_Number$parameters,_Number$parameters2,_Number$parameters2$d,_FloatingPoint$parame,_FloatingPoint$parame2,_FloatingPoint$parame3,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Components__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/index.css"),__webpack_require__("./src/stories/Components/Components.jsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Components/Input",component:_Components__WEBPACK_IMPORTED_MODULE_2__.II};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components__WEBPACK_IMPORTED_MODULE_2__.II,(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},args))},Normal=Template.bind({});Normal.args={label:"Normal Input",placeholder:"Enter your value",size:"normal"};var Large=Template.bind({});Large.args={label:"Large Input",placeholder:"Enter your value",size:"large"};var Number=Template.bind({});Number.args={label:"Integer Number",placeholder:"Enter your value",size:"large",type:"number"};var FloatingPoint=Template.bind({});FloatingPoint.args={label:"Floating Point Number",placeholder:"Enter your value",size:"large",type:"floating-point"},Normal.parameters=(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},Normal.parameters),{},{docs:(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_Normal$parameters=Normal.parameters)||void 0===_Normal$parameters?void 0:_Normal$parameters.docs),{},{source:(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"args => <Input {...args} />"},null===(_Normal$parameters2=Normal.parameters)||void 0===_Normal$parameters2||null===(_Normal$parameters2$d=_Normal$parameters2.docs)||void 0===_Normal$parameters2$d?void 0:_Normal$parameters2$d.source)})}),Large.parameters=(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},Large.parameters),{},{docs:(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_Large$parameters=Large.parameters)||void 0===_Large$parameters?void 0:_Large$parameters.docs),{},{source:(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"args => <Input {...args} />"},null===(_Large$parameters2=Large.parameters)||void 0===_Large$parameters2||null===(_Large$parameters2$do=_Large$parameters2.docs)||void 0===_Large$parameters2$do?void 0:_Large$parameters2$do.source)})}),Number.parameters=(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},Number.parameters),{},{docs:(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_Number$parameters=Number.parameters)||void 0===_Number$parameters?void 0:_Number$parameters.docs),{},{source:(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"args => <Input {...args} />"},null===(_Number$parameters2=Number.parameters)||void 0===_Number$parameters2||null===(_Number$parameters2$d=_Number$parameters2.docs)||void 0===_Number$parameters2$d?void 0:_Number$parameters2$d.source)})}),FloatingPoint.parameters=(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},FloatingPoint.parameters),{},{docs:(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_FloatingPoint$parame=FloatingPoint.parameters)||void 0===_FloatingPoint$parame?void 0:_FloatingPoint$parame.docs),{},{source:(0,_var_www_html_story_book_learn_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"args => <Input {...args} />"},null===(_FloatingPoint$parame2=FloatingPoint.parameters)||void 0===_FloatingPoint$parame2||null===(_FloatingPoint$parame3=_FloatingPoint$parame2.docs)||void 0===_FloatingPoint$parame3?void 0:_FloatingPoint$parame3.source)})});var __namedExportsOrder=["Normal","Large","Number","FloatingPoint"]},"./src/stories/Components/Components.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{II:function(){return Input},Ph:function(){return Select},mQ:function(){return Tabs}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Input(_ref){var size=_ref.size,type=_ref.type,label=_ref.label,name=_ref.name,placeholder=_ref.placeholder,onChange=_ref.onChange;return(0,jsx_runtime.jsxs)("label",{className:"input-component input-component--".concat(size),children:[(0,jsx_runtime.jsxs)("span",{children:[label," :"]}),(0,jsx_runtime.jsx)("input",{type:"text"===type?"text":"number",step:"floating-point"===type?"any":void 0,name:name,className:"input",placeholder:placeholder,onChange:onChange})]})}function Select(_ref2){var size=_ref2.size,label=_ref2.label,options=_ref2.options,onChange=_ref2.onChange;return(0,jsx_runtime.jsxs)("label",{className:"select-component select-component--".concat(size),children:[(0,jsx_runtime.jsxs)("span",{children:[label," :"]}),(0,jsx_runtime.jsx)("select",{className:"select-component",onChange:onChange,children:options.map((function(option){return(0,jsx_runtime.jsx)("option",{value:option.value,children:option.name})}))})]})}function Tabs(_ref3){var children=_ref3.children,_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),active=_useState2[0],setActive=_useState2[1],onTabClick=function onTabClick(newActive){return function(){setActive((function(){return newActive}))}};return(0,jsx_runtime.jsxs)("div",{className:"tabs-component",children:[(0,jsx_runtime.jsx)("div",{className:"tabs-row",children:children.map((function(child,index){return(0,jsx_runtime.jsx)("div",{className:"tab ".concat(index===active?"active":""),onClick:onTabClick(index),children:child.props.label})}))}),(0,jsx_runtime.jsx)("div",{className:"tabs-content",children:children[active]})]})}Input.defaultProps={size:"medium",type:"text",label:"Enter a value",name:"input",placeholder:"Please enter a value",onChange:void 0},Select.defaultProps={size:"medium",label:"Options",options:[]},Tabs.defaultProps={children:[]},Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},type:{defaultValue:{value:"'text'",computed:!1},description:"",type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'number'",computed:!1},{value:"'floating-point'",computed:!1}]},required:!1},label:{defaultValue:{value:"'Enter a value'",computed:!1},description:"",type:{name:"string"},required:!1},name:{defaultValue:{value:"'input'",computed:!1},description:"",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:"'Please enter a value'",computed:!1},description:"",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1}}},Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},label:{defaultValue:{value:"'Options'",computed:!1},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{value:{name:"string",required:!0},description:{name:"string",required:!0}}}},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}},Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{children:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"instanceOf",value:"Array"},required:!1}}}},"./src/index.css":function(){},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);