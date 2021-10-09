"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[27952],{27894:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],c={},s="Anatomy of a Smart Contract",l={unversionedId:"guide/core_concepts/smart-contract-anatomy",id:"guide/core_concepts/smart-contract-anatomy",isDocsHomePage:!1,title:"Anatomy of a Smart Contract",description:"Smart contracts are programs, immutably stored in the chain.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/smart-contract-anatomy.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/smart-contract-anatomy",permalink:"/wasp/guide/core_concepts/smart-contract-anatomy",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"State, Transitions, and State Anchoring",permalink:"/wasp/guide/core_concepts/states"},next:{title:"Sandbox Interface",permalink:"/wasp/guide/core_concepts/sandbox"}},p=[{value:"Identifying a Smart Contract",id:"identifying-a-smart-contract",children:[]},{value:"State",id:"state",children:[]},{value:"Entry points",id:"entry-points",children:[]},{value:"Execution Results",id:"execution-results",children:[]},{value:"Error Handling",id:"error-handling",children:[]}],u={toc:p};function d(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anatomy-of-a-smart-contract"},"Anatomy of a Smart Contract"),(0,o.kt)("p",null,"Smart contracts are programs, immutably stored in the chain."),(0,o.kt)("p",null,"The logical structure of an ISCP smart contract is independent of the VM type we\nuse, be it a ",(0,o.kt)("em",{parentName:"p"},"Wasm")," smart contract or any other VM type."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Smart Contract Structure",src:n(64570).Z})),(0,o.kt)("h2",{id:"identifying-a-smart-contract"},"Identifying a Smart Contract"),(0,o.kt)("p",null,"Each smart contract on the chain is identified by its name hashed into 4 bytes\nand interpreted as ",(0,o.kt)("inlineCode",{parentName:"p"},"uint32")," value: the ",(0,o.kt)("inlineCode",{parentName:"p"},"hname"),"."),(0,o.kt)("p",null,"For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"hname")," of the root contract is ",(0,o.kt)("inlineCode",{parentName:"p"},"0xcebf5908"),", the unique identifier of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"root")," contract in every chain. The exception is ",(0,o.kt)("inlineCode",{parentName:"p"},"_default")," contract which always has hname ",(0,o.kt)("inlineCode",{parentName:"p"},"0x00000000"),"."),(0,o.kt)("p",null,"Each smart contract instance has a program with a collection of entry points and\na state. An entry point is a function of the program through which the program\ncan be invoked."),(0,o.kt)("p",null,"There are several ways to invoke an entry point: a request, a call and a view\ncall, depending on the type of the entry point."),(0,o.kt)("p",null,"The smart contract program can access its state and account through an interface\nlayer called the ",(0,o.kt)("em",{parentName:"p"},"Sandbox"),"."),(0,o.kt)("h2",{id:"state"},"State"),(0,o.kt)("p",null,"The smart contract state is its data, with each update stored on the chain. The\nstate can only be modified by the smart contract program itself. There are two\nparts of the state:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A collection of key/value pairs called the ",(0,o.kt)("inlineCode",{parentName:"li"},"data state"),". Each key and value\nare byte arrays of arbitrary size (there are practical limits set by the\ndatabase, of course). The value of the key/value pair is always retrieved by\nits key."),(0,o.kt)("li",{parentName:"ul"},"A collection of ",(0,o.kt)("inlineCode",{parentName:"li"},"color: balance")," pairs called the ",(0,o.kt)("inlineCode",{parentName:"li"},"account"),". The account\nrepresents the balances of tokens of specific colors controlled by the smart\ncontract. Receiving and spending tokens into/from the account means changing\nthe account's balances.")),(0,o.kt)("p",null,"Only the smart contract program can change its data state and spend from its\naccount. Tokens can be sent to the smart contract account by any other agent on\nthe ledger, be it a wallet with an address or another smart contract."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/accounts/how-accounts-work"},"Accounts")," for more info on sending and receiving tokens."),(0,o.kt)("h2",{id:"entry-points"},"Entry points"),(0,o.kt)("p",null,"There are two types of entry points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Full entry points")," or just ",(0,o.kt)("em",{parentName:"li"},"entry points"),". These functions can modify\n(mutate) the state of the smart contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"View entry points")," or ",(0,o.kt)("em",{parentName:"li"},"views"),". These are read-only functions. They are used\nonly to retrieve the information from the smart contract state. They can\u2019t\nmodify the state, i.e. are read-only calls.")),(0,o.kt)("h2",{id:"execution-results"},"Execution Results"),(0,o.kt)("p",null,'After a request to a Smart Contract is executed (a call to a "full entry point"),\nThere will be a ',(0,o.kt)("inlineCode",{parentName:"p"},"receipt")," added to the ",(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/blocklog"},(0,o.kt)("inlineCode",{parentName:"a"},"BlockLog")),"\ndetailing the execution results of said request: whether it was successful, the block it was\nincluded in, and other information. Any events dispatched by the Smart Contract in context of\nthis execution will also be added to the BlockLog."),(0,o.kt)("h2",{id:"error-handling"},"Error Handling"),(0,o.kt)("p",null,"When a smart contract execution is interrupted for some reason (exception), or it produces an\nerror (missing parameter, or other inconsistency), the funds will be refunded to the caller,\nexcept the fees. Any error that resulted from the SC execution can be viewed on the contract\n",(0,o.kt)("inlineCode",{parentName:"p"},"receipt")," (present in the ",(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/blocklog"},(0,o.kt)("inlineCode",{parentName:"a"},"BlockLog")),")."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64570:function(e,t,n){t.Z=n.p+"assets/images/SC-structure-95a09ea794362efb20ff6a4d06627285.png"}}]);