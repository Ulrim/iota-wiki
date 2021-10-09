"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[19641],{98796:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o=["components"],i={id:"energy-efficiency",title:"Energy efficiency",description:"Energy efficiency of transactions in the IOTA Network."},s="Energy Efficiency",p={unversionedId:"learn/about-iota/energy-efficiency",id:"learn/about-iota/energy-efficiency",isDocsHomePage:!1,title:"Energy efficiency",description:"Energy efficiency of transactions in the IOTA Network.",source:"@site/docs/learn/about-iota/energy-efficiency.md",sourceDirName:"learn/about-iota",slug:"/learn/about-iota/energy-efficiency",permalink:"/docs/learn/about-iota/energy-efficiency",editUrl:"https://github.com/iota-community/iota-wiki/edit/develop/docs/learn/about-iota/energy-efficiency.md",tags:[],version:"current",frontMatter:{id:"energy-efficiency",title:"Energy efficiency",description:"Energy efficiency of transactions in the IOTA Network."},sidebar:"learn",previous:{title:"Messages",permalink:"/docs/learn/about-iota/messages"},next:{title:"Buying IOTA",permalink:"/docs/learn/iota-token/buying-iota"}},m=[{value:"The Tests",id:"the-tests",children:[]},{value:"The Results",id:"the-results",children:[]},{value:"Results Explained",id:"results-explained",children:[]}],u={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"energy-efficiency"},"Energy Efficiency"),(0,l.kt)("p",null,"An important measurement of any distributed ledger technology is the energy cost per transaction. The IOTA network is designed to be lightweight and energy-efficient. This page provides an overview of the process and results of tests conducted by the IOTA Foundation to measure the energy efficiency of the Tangle. To read the full details of the test, this ",(0,l.kt)("a",{parentName:"p",href:"https://blog.iota.org/internal-energy-benchmarks-for-iota/"},"IOTA Foundation blog post")," covers the process in depth."),(0,l.kt)("h2",{id:"the-tests"},"The Tests"),(0,l.kt)("p",null,"The energy benchmark tests were conducted using a Raspberry Pi 3 and 4 running the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/gohornet/hornet"},"Hornet node")," software. Hornet was designed to be able to run on low-power devices such as these small computers."),(0,l.kt)("p",null,"Tests were completed on both a dedicated private Tangle set up for the tests as well as on the main ",(0,l.kt)("a",{parentName:"p",href:"https://chrysalis.iota.org/"},"Chrysalis network"),". For the dedicated testing network, a laptop was used to be the test coordinator and to generate spam transactions for the Pi nodes."),(0,l.kt)("p",null,"To measure the energy consumed, INA219 current sensors were used to measure the power consumed by the devices while processing transactions. The INA219 data was collected by a BeagleBone Black. This data was then normalized against the power consumed by the devices when idle to determine the cost of processing transactions. Each set of measurements was collected over a period of 10 minutes."),(0,l.kt)("h2",{id:"the-results"},"The Results"),(0,l.kt)("p",null,"The results of the tests are shown below in table 1 and figure 2."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Device"),(0,l.kt)("th",{parentName:"tr",align:null},"Average Power"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3 (Reference)"),(0,l.kt)("td",{parentName:"tr",align:null},"2617.35 mW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 4 (Reference)"),(0,l.kt)("td",{parentName:"tr",align:null},"2785.91 mW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3 (No messages)"),(0,l.kt)("td",{parentName:"tr",align:null},"2628.58 mW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 4 (No messages)"),(0,l.kt)("td",{parentName:"tr",align:null},"2801.58 mW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3 (50 MPS remote PoW)"),(0,l.kt)("td",{parentName:"tr",align:null},"2745.52 mW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 4 (50 MPS remote PoW)"),(0,l.kt)("td",{parentName:"tr",align:null},"2862.21 mW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3 (100 MPS remote PoW)"),(0,l.kt)("td",{parentName:"tr",align:null},"2947.90 mW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 4 (100 MPS remote PoW)"),(0,l.kt)("td",{parentName:"tr",align:null},"2920.55 mW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3 (Mainnet PoW)"),(0,l.kt)("td",{parentName:"tr",align:null},"2968.84 mW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 4 (Mainnet PoW)"),(0,l.kt)("td",{parentName:"tr",align:null},"3095.51 mW")))),(0,l.kt)("p",null,"Table 1: Reference power levels"),(0,l.kt)("p",null,"With these results, the data of the node tests was then normalized against the results from the node without Hornet running and with Hornet running without messages being processed. Table 2 shows the final results of the test."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"device"),(0,l.kt)("th",{parentName:"tr",align:null},"No messages"),(0,l.kt)("th",{parentName:"tr",align:null},"50 MPS remote PoW"),(0,l.kt)("th",{parentName:"tr",align:null},"100 MPS remote PoW"),(0,l.kt)("th",{parentName:"tr",align:null},"Mainnet PoW"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3"),(0,l.kt)("td",{parentName:"tr",align:null},"11.23 mW"),(0,l.kt)("td",{parentName:"tr",align:null},"128.16 mW"),(0,l.kt)("td",{parentName:"tr",align:null},"330.55 mW"),(0,l.kt)("td",{parentName:"tr",align:null},"351.49 mW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 4"),(0,l.kt)("td",{parentName:"tr",align:null},"15.67 mW"),(0,l.kt)("td",{parentName:"tr",align:null},"76.30 mW"),(0,l.kt)("td",{parentName:"tr",align:null},"134.63 mW"),(0,l.kt)("td",{parentName:"tr",align:null},"309.60 mW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3 (normalized from 0 MPS)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"116.92 mW"),(0,l.kt)("td",{parentName:"tr",align:null},"319.32 mW"),(0,l.kt)("td",{parentName:"tr",align:null},"340.26 mW")))),(0,l.kt)("h2",{id:"results-explained"},"Results Explained"),(0,l.kt)("p",null,"Using the normalized data of the nodes running at 0 messages per second, the energy cost per message can be calculated with the formula:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Energy(J) = Power(W) ","*"," Time(s)")),(0,l.kt)("p",null,"It is important to note that while the devices were performing the mainnet proof of work, they were processing an average of 0.0592 messages per second (RPi 3), and 0.0730 messages per second (RPi 4). For the remote proof-of-work scenarios, the MPS rates were a fixed 50 and 100 messages per second. Table 3 shows the calculated energy cost per message for each test scenario."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"device"),(0,l.kt)("th",{parentName:"tr",align:null},"50 MPS remote PoW"),(0,l.kt)("th",{parentName:"tr",align:null},"100 MPS remote PoW"),(0,l.kt)("th",{parentName:"tr",align:null},"Mainnet PoW"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3"),(0,l.kt)("td",{parentName:"tr",align:null},"116.92 mW ","*"," (1/50) S = ",(0,l.kt)("strong",{parentName:"td"},"2.33 mJ")),(0,l.kt)("td",{parentName:"tr",align:null},"319.32 mW ","*"," (1/100) S = ",(0,l.kt)("strong",{parentName:"td"},"3.19 mJ")),(0,l.kt)("td",{parentName:"tr",align:null},"340.26 mW ","*"," (1/.059) S = ",(0,l.kt)("strong",{parentName:"td"},"5.77 J"))))))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);