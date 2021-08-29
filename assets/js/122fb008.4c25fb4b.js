"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[910],{60159:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={},s="How to do a release",c={unversionedId:"teamresources/release",id:"teamresources/release",isDocsHomePage:!1,title:"How to do a release",description:"1. Create a PR into develop updating the banner version (plugins/banner.AppVersion) and mentioning the changes in CHANGELOG.md",source:"@site/external/goshimmer/documentation/docs/teamresources/release.md",sourceDirName:"teamresources",slug:"/teamresources/release",permalink:"/goshimmer/teamresources/release",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Integration tests with Docker",permalink:"/goshimmer/tooling/integration_tests"},next:{title:"Code guidelines",permalink:"/goshimmer/teamresources/guidelines"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-do-a-release"},"How to do a release"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a PR into ",(0,a.kt)("inlineCode",{parentName:"li"},"develop")," updating the banner version (",(0,a.kt)("inlineCode",{parentName:"li"},"plugins/banner.AppVersion"),") and mentioning the changes in ",(0,a.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")),(0,a.kt)("li",{parentName:"ol"},"Create a PR merging ",(0,a.kt)("inlineCode",{parentName:"li"},"develop")," into ",(0,a.kt)("inlineCode",{parentName:"li"},"master")),(0,a.kt)("li",{parentName:"ol"},"Create a release via the release page with the same changelog entries as in ",(0,a.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")," for the given version tagging the ",(0,a.kt)("inlineCode",{parentName:"li"},"master")," branch"),(0,a.kt)("li",{parentName:"ol"},"Pray that the CI gods let the build pass"),(0,a.kt)("li",{parentName:"ol"},"Check that the binaries are working"),(0,a.kt)("li",{parentName:"ol"},"Stop the entry-node"),(0,a.kt)("li",{parentName:"ol"},"Delete DB"),(0,a.kt)("li",{parentName:"ol"},"Update version in docker-compose"),(0,a.kt)("li",{parentName:"ol"},"Pull newest image"),(0,a.kt)("li",{parentName:"ol"},"Start the node")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);