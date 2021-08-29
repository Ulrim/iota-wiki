"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9076],{38459:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],l={},s="\ud83d\uddd3\ufe0f Team Identity Meeting Notes - 2020-08-26",c={unversionedId:"meeting-notes/2020-08-26",id:"meeting-notes/2020-08-26",isDocsHomePage:!1,title:"\ud83d\uddd3\ufe0f Team Identity Meeting Notes - 2020-08-26",description:"\ud83d\udc65 Participants",source:"@site/external/identity.rs/documentation/docs/meeting-notes/2020-08-26.md",sourceDirName:"meeting-notes",slug:"/meeting-notes/2020-08-26",permalink:"/identity.rs/meeting-notes/2020-08-26",tags:[],version:"current",frontMatter:{}},u=[{value:"\ud83d\udc65 Participants",id:"-participants",children:[]},{value:"\ud83d\udcac Discussion topics",id:"-discussion-topics",children:[{value:"Parster decidion: nom vs pest",id:"parster-decidion-nom-vs-pest",children:[]},{value:"Determining order for the Diff chain.",id:"determining-order-for-the-diff-chain",children:[]},{value:"Transformers (Local optimization)",id:"transformers-local-optimization",children:[]},{value:"Context (JSON-LD)",id:"context-json-ld",children:[]},{value:"Determining order for the Diff chain.",id:"determining-order-for-the-diff-chain-1",children:[]},{value:"Standup",id:"standup",children:[]}]}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-team-identity-meeting-notes---2020-08-26"},"\ud83d\uddd3\ufe0f Team Identity Meeting Notes - 2020-08-26"),(0,a.kt)("h2",{id:"-participants"},"\ud83d\udc65 Participants"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@Thoralf-M"),(0,a.kt)("li",{parentName:"ul"},"@nothingismagick"),(0,a.kt)("li",{parentName:"ul"},"@l1h3r"),(0,a.kt)("li",{parentName:"ul"},"@tensor-programming"),(0,a.kt)("li",{parentName:"ul"},"@JelleMillenaar"),(0,a.kt)("li",{parentName:"ul"},"@huhn511")),(0,a.kt)("h2",{id:"-discussion-topics"},"\ud83d\udcac Discussion topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Standup"),(0,a.kt)("li",{parentName:"ul"},"Parser decision: nom vs pest"),(0,a.kt)("li",{parentName:"ul"},"Transformers (Local optimization)"),(0,a.kt)("li",{parentName:"ul"},"Context (JSON-LD)"),(0,a.kt)("li",{parentName:"ul"},"Determining order for the Diff chain.")),(0,a.kt)("h3",{id:"parster-decidion-nom-vs-pest"},"Parster decidion: nom vs pest"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://crates.io/crates/nom"},"nom")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://crates.io/crates/pest"},"pest"))),(0,a.kt)("p",null,"Benchmark results: Nom is faster than Pest if parsing byte to Rust. If parsing Rust to Rust both are about the same. Since we're using Serde for serialization, it becomes irrelevant from a performance perspective. The rest is up to personal preference. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"pest")),(0,a.kt)("h3",{id:"determining-order-for-the-diff-chain"},"Determining order for the Diff chain."),(0,a.kt)("p",null,"What should be contained in the metadata of a DID document to determine ordering (and in general)? Should some of the metadata also be divisible from the document in the case where it leaves the iota network? I.E. Address references, Hybrid Logical Clock timestamps etc. Could something like Global Logical Time be possible on the Tangle (gossiping a small increment value around the network to synchronize the time frame"),(0,a.kt)("h3",{id:"transformers-local-optimization"},"Transformers (Local optimization)"),(0,a.kt)("p",null,"Do we want to kind of compress our data?\nOr is this a later optimization task?"),(0,a.kt)("p",null,"DID and DIDDoc can be transformed into anything (also bytes)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Debug and Production mode")),(0,a.kt)("p",null,"Further Optimizations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Compression (shorting names)\n- remove w3c link in every DID\n- Metadata\n")),(0,a.kt)("p",null,"Task: Difference between bytes and JSON format (size)."),(0,a.kt)("h3",{id:"context-json-ld"},"Context (JSON-LD)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"JSON-LD is a lightweight Linked Data format. It is easy for humans to read and write. It is based on the already successful JSON format and provides a way to help JSON data interoperate at Web-scale.\n",(0,a.kt)("a",{parentName:"p",href:"https://json-ld.org/"},"https://json-ld.org"))),(0,a.kt)("h3",{id:"determining-order-for-the-diff-chain-1"},"Determining order for the Diff chain."),(0,a.kt)("p",null,"Move to next meeting"),(0,a.kt)("h3",{id:"standup"},"Standup"),(0,a.kt)("p",null,"We can use the Standup Bot after the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"!standup\n")),(0,a.kt)("h4",{id:"what-was-last-weeks-progress-on-your-project"},"What was last week's progress on your project?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DID Core Lib"),(0,a.kt)("li",{parentName:"ul"},"Built logic for DID document Diffing via Serde-Diff"),(0,a.kt)("li",{parentName:"ul"},"Determining what will go into the Metadata fields and strengthing the CRUD API for the Core library. "),(0,a.kt)("li",{parentName:"ul"},"DID Parser and resolver"),(0,a.kt)("li",{parentName:"ul"},"Error handling"),(0,a.kt)("li",{parentName:"ul"},"Verified Credentials de/serialization")),(0,a.kt)("h4",{id:"what-will-be-the-projects-focus-this-week"},"What will be the project's focus this week?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Discuss Transaction Layout "),(0,a.kt)("li",{parentName:"ul"},"Explain DIDComm to Team and Community"),(0,a.kt)("li",{parentName:"ul"},"Add licence to main repo"),(0,a.kt)("li",{parentName:"ul"},"Verified Credentials tests and usability improvements")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);