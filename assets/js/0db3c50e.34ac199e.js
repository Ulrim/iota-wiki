"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8766],{12285:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],l={},c="Getting Started with Node.js",s={unversionedId:"libraries/nodejs/getting_started",id:"libraries/nodejs/getting_started",isDocsHomePage:!1,title:"Getting Started with Node.js",description:"Installation",source:"@site/external/iota.rs/documentation/docs/libraries/nodejs/getting_started.md",sourceDirName:"libraries/nodejs",slug:"/libraries/nodejs/getting_started",permalink:"/iota.rs/libraries/nodejs/getting_started",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"API Reference",permalink:"/iota.rs/libraries/rust/api_reference"},next:{title:"examples",permalink:"/iota.rs/libraries/nodejs/examples"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-nodejs"},"Getting Started with Node.js"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using NPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ npm i @iota/client\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using yarn:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ yarn add @iota/client\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { ClientBuilder } = require('@iota/client')\nconst client = new ClientBuilder()\n    .node('https://api.lb-0.testnet.chrysalis2.com')\n    .build()\nclient.getInfo().then(console.log).catch(console.error)\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);