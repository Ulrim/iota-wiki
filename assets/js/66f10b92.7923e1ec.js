"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[96339],{89080:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),i=["components"],c={},l="Using `wasp-cli` to deploy a chain and a contract",p={unversionedId:"misc/deploy",id:"misc/deploy",isDocsHomePage:!1,title:"Using `wasp-cli` to deploy a chain and a contract",description:"Once you have one or more Wasp nodes you can use the",source:"@site/external/wasp/documentation/docs/misc/deploy.md",sourceDirName:"misc",slug:"/misc/deploy",permalink:"/wasp/misc/deploy",tags:[],version:"current",frontMatter:{}},s=[],u={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-wasp-cli-to-deploy-a-chain-and-a-contract"},"Using ",(0,o.kt)("inlineCode",{parentName:"h1"},"wasp-cli")," to deploy a chain and a contract"),(0,o.kt)("p",null,"Once you have one or more Wasp nodes you can use the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/tools/wasp-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"wasp-cli"))," tool to interact with it.  Here is\nan example set of commands that will deploy one chain and the example\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/contracts/rust/inccounter/src"},(0,o.kt)("inlineCode",{parentName:"a"},"inccounter")),"\ncontract to the chain."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"First we need to tell ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp-cli")," the location of the Goshimmer node and the\ncommittee of Wasp nodes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ wasp-cli set goshimmer.api 127.0.0.1:8080\n\n$ wasp-cli set wasp.0.api 127.0.0.1:9090\n$ wasp-cli set wasp.0.nanomsg 127.0.0.1:5550\n$ wasp-cli set wasp.0.peering 127.0.0.1:4000\n\n$ wasp-cli set wasp.1.api 127.0.0.1:9091\n$ wasp-cli set wasp.1.nanomsg 127.0.0.1:5551\n$ wasp-cli set wasp.1.peering 127.0.0.1:4001\n\n...\n")),(0,o.kt)("p",null,"The configuration is stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp-cli.json"),", you can also edit the file by hand\ninstead of running the commands."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Next, we initialize a seed and request some funds from the faucet (we need at\nleast one token for each transaction; which can be ",(0,o.kt)("a",{parentName:"p",href:"/wasp/misc/accounts"},"redeemed")," later)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ wasp-cli init\n$ wasp-cli request-funds\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now we can deploy a chain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ wasp-cli chain deploy --committee=0,1,2,3 --quorum=3 --chain=mychain --description="My chain"\n')),(0,o.kt)("p",null,"The indices in ",(0,o.kt)("inlineCode",{parentName:"p"},"--committee=0,1,2,3")," will correspond to ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp.1"),",\netc in ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp-cli.json"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--chain=mychain")," sets up an alias for the chain. From now on all chain\ncommands will be targeted to this chain."),(0,o.kt)("p",null,"You can check that the chain was properly deployed in the Wasp node dashboard\n(e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:7000"),"). Note that the chain was deployed with some ",(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/overview"},"core contracts")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We can now deploy a Wasm contract to our chain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ wasp-cli chain deploy-contract wasmtime inccounter "inccounter SC" tools/cluster/tests/wasm/inccounter_bg.wasm\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"inccounter_bg.wasm")," file is a precompiled Wasm contract included as an\nexample."),(0,o.kt)("p",null,"Check again in the dashboard that the ",(0,o.kt)("inlineCode",{parentName:"p"},"inccounter")," contract is listed in the chain."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We can interact with a contract by calling its exposed functions and views."),(0,o.kt)("p",null,"For instance, the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/contracts/rust/inccounter/src"},(0,o.kt)("inlineCode",{parentName:"a"},"inccounter")),"\ncontract exposes the ",(0,o.kt)("inlineCode",{parentName:"p"},"increment")," function, which simply increments a counter\nstored in the state. Also we have the ",(0,o.kt)("inlineCode",{parentName:"p"},"getCounter")," view that returns the\ncurrent value of the counter."),(0,o.kt)("p",null,"Let's call the ",(0,o.kt)("inlineCode",{parentName:"p"},"getCounter")," view:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ wasp-cli chain call-view inccounter getCounter | wasp-cli decode string counter int\ncounter: 0\n")),(0,o.kt)("p",null,"Note: the part after ",(0,o.kt)("inlineCode",{parentName:"p"},"|")," is necessary because the return value is encoded and\nwe need to know the ",(0,o.kt)("em",{parentName:"p"},"schema")," in order to decode it. The schema definition is in\nits early stages and will likely change in the future."),(0,o.kt)("p",null,"Now, let's call the ",(0,o.kt)("inlineCode",{parentName:"p"},"increment")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ wasp-cli chain post-request inccounter increment\n")),(0,o.kt)("p",null,"After the request has been processed by the committee we should get a new\ncounter value after calling ",(0,o.kt)("inlineCode",{parentName:"p"},"getCounter"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ wasp-cli chain call-view inccounter getCounter | wasp-cli decode string counter int\ncounter: 1\n")))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},s),{},{components:t})):a.createElement(h,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);