"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[66315],{40186:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=n(31137),s=n(71871),l=["components"],c={},u="Smart Contract State",d={unversionedId:"guide/schema/state",id:"guide/schema/state",isDocsHomePage:!1,title:"Smart Contract State",description:"The smart contract state storage on the host consists of a single key/value map. Both key",source:"@site/external/wasp/documentation/docs/guide/schema/state.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/state",permalink:"/wasp/guide/schema/state",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Type Definitions",permalink:"/wasp/guide/schema/typedefs"},next:{title:"Function Definitions",permalink:"/wasp/guide/schema/funcs"}},p=[],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"smart-contract-state"},"Smart Contract State"),(0,i.kt)("p",null,"The smart contract state storage on the host consists of a single key/value map. Both key\nand value are raw data bytes. As long as we access the data in the same way that we used\nto store it we will always get valid data back. The schema tool will create a type-safe\naccess layer to make sure that data storage and retrieval always uses the expected data\ntype."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," section in schema.json contains a number of field definitions that together\ndefine the variables that are stored in the state storage. Each field definition uses a\nJSON key/value pair to define the name and data type of the field. The JSON key defines\nthe field name. The JSON value (a string) defines the field's data type, and can be\nfollowed by an optional comment that describes the field."),(0,i.kt)("p",null,"The schema tool will use this information to generate the specific code that accesses the\nstate variables in a type-safe way. Let's examine the ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," section of the ",(0,i.kt)("inlineCode",{parentName:"p"},"dividend"),"\nexample in more detail:"),(0,i.kt)(o.Z,{defaultValue:"json",values:[{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "state": {\n    "memberList": "[]Address // array with all the recipients of this dividend",\n    "members": "[Address]Int64 // map with all the recipient factors of this dividend",\n    "owner": "AgentID // owner of contract, the only one who can call \'member\' func",\n    "totalFactor": "Int64 // sum of all recipient factors"\n  }\n}\n')))),(0,i.kt)("p",null,"Let's start with the simplest state variables. ",(0,i.kt)("inlineCode",{parentName:"p"},"totalFactor")," is an Int64, and ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," is\nan AgentID. Both are predefined ",(0,i.kt)("a",{parentName:"p",href:"/wasp/guide/schema/types"},"WasmLib value types"),"."),(0,i.kt)("p",null,"Then we have the ",(0,i.kt)("inlineCode",{parentName:"p"},"memberList")," variable. The empty brackets ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," indicate that this is an\narray. The brackets are immediately followed by the homogenous type of the elements in the\narray, which in this case is the predefined Address value type."),(0,i.kt)("p",null,"Finally, we have the ",(0,i.kt)("inlineCode",{parentName:"p"},"members")," variable. The non-empty brackets ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," indicate that this is\na map. Between the brackets is the homogenous type of the keys, which in this case are of\nthe predefined Address type. The brackets are immediately followed by the homogenous type\nof the values in the map, which in this case are of the predefined Int64 type."),(0,i.kt)("p",null,"Here is part of the Rust code in ",(0,i.kt)("inlineCode",{parentName:"p"},"state.rs")," that the schema tool has generated. The\nMutableDividendState struct defines a type-safe interface to access each of the state\nvariables through mutable proxies:"),(0,i.kt)(o.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"    type MutableDividendState struct {\n        id int32\n    }\n\n    func (s MutableDividendState) MemberList() ArrayOfMutableAddress {\n        arrID := wasmlib.GetObjectID(s.id, idxMap[IdxStateMemberList], wasmlib.TYPE_ARRAY|wasmlib.TYPE_ADDRESS)\n        return ArrayOfMutableAddress{objID: arrID}\n    }\n\n    func (s MutableDividendState) Members() MapAddressToMutableInt64 {\n        mapID := wasmlib.GetObjectID(s.id, idxMap[IdxStateMembers], wasmlib.TYPE_MAP)\n        return MapAddressToMutableInt64{objID: mapID}\n    }\n\n    func (s MutableDividendState) Owner() wasmlib.ScMutableAgentID {\n        return wasmlib.NewScMutableAgentID(s.id, idxMap[IdxStateOwner])\n    }\n\n    func (s MutableDividendState) TotalFactor() wasmlib.ScMutableInt64 {\n        return wasmlib.NewScMutableInt64(s.id, idxMap[IdxStateTotalFactor])\n    }\n"))),(0,i.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Copy)]\npub struct MutableDividendState {\n    pub(crate) id: i32,\n}\n\nimpl MutableDividendState {\n    pub fn member_list(&self) -> ArrayOfMutableAddress {\n        let arr_id = get_object_id(self.id, idx_map(IDX_STATE_MEMBER_LIST), TYPE_ARRAY | TYPE_ADDRESS);\n        ArrayOfMutableAddress { obj_id: arr_id }\n    }\n\n    pub fn members(&self) -> MapAddressToMutableInt64 {\n        let map_id = get_object_id(self.id, idx_map(IDX_STATE_MEMBERS), TYPE_MAP);\n        MapAddressToMutableInt64 { obj_id: map_id }\n    }\n\n    pub fn owner(&self) -> ScMutableAgentID {\n        ScMutableAgentID::new(self.id, idx_map(IDX_STATE_OWNER))\n    }\n\n    pub fn total_factor(&self) -> ScMutableInt64 {\n        ScMutableInt64::new(self.id, idx_map(IDX_STATE_TOTAL_FACTOR))\n    }\n}\n")))),(0,i.kt)("p",null,"As you can see the schema tool has generated a proxy interface for the mutable ",(0,i.kt)("inlineCode",{parentName:"p"},"dividend"),"\nstate, called ",(0,i.kt)("inlineCode",{parentName:"p"},"MutableDividendState"),". It has a 1-to-1 correspondence to the ",(0,i.kt)("inlineCode",{parentName:"p"},"state"),"\nsection in schema.json. Each member function accesses a type-safe proxy object for the\ncorresponding variable. In addition, the schema tool generates any necessary intermediate\nmap and array proxy types that force the usage of their respective homogenous types. In\nthe above example both ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayOfMutableAddress")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MapAddressToMutableInt64")," are examples\nof such automatically generated proxy types. See the full ",(0,i.kt)("inlineCode",{parentName:"p"},"state.rs")," for more details."),(0,i.kt)("p",null,"In the next section we will look at how to define our own structured data types in the\nschema definition file."))}f.isMDXComponent=!0},71871:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},31137:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(54179);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=a.Children.toArray(e.children),f=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),y=b.tabGroupChoices,v=b.setTabGroupChoices,g=(0,a.useState)(h),w=g[0],k=g[1],T=[];if(null!=d){var M=y[d];null!=M&&M!==w&&f.some((function(e){return e.value===M}))&&k(M)}var I=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;k(a),null!=d&&(v(d,a),setTimeout((function(){var e,n,a,r,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.target)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.target)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:I,onClick:I},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},54179:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);