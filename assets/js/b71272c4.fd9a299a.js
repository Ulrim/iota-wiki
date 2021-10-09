"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[16850],{23747:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),s=["components"],i={},l="Tokens and the UTXO Ledger",d={unversionedId:"guide/solo/tokens-and-utxos",id:"guide/solo/tokens-and-utxos",isDocsHomePage:!1,title:"Tokens and the UTXO Ledger",description:"Goshimmer implements the IOTA UTXO Ledger, a distributed ledger of tokens.",source:"@site/external/wasp/documentation/docs/guide/solo/tokens-and-utxos.md",sourceDirName:"guide/solo",slug:"/guide/solo/tokens-and-utxos",permalink:"/wasp/guide/solo/tokens-and-utxos",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"First Example",permalink:"/wasp/guide/solo/first-example"},next:{title:"Invoking smart contracts",permalink:"/wasp/guide/solo/invoking-sc"}},c=[],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tokens-and-the-utxo-ledger"},"Tokens and the UTXO Ledger"),(0,a.kt)("p",null,"Goshimmer implements the IOTA ",(0,a.kt)("em",{parentName:"p"},"UTXO Ledger"),", a distributed ledger of tokens.\nWe won't go in depth about this topic. The specification of the ",(0,a.kt)("em",{parentName:"p"},"UTXO Ledger")," can be found ",(0,a.kt)("a",{parentName:"p",href:"https://goshimmer.docs.iota.org/docs/protocol_specification/ledgerstate/"},"here"),".\nWe only have to know that the ",(0,a.kt)("em",{parentName:"p"},"UTXO Ledger")," contains balances of colored tokens locked in\naddresses, like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"Address: Yk85765qdrwheQ4udj6RihxtPxudTSWF9qYe4NsAfp6K\n   IOTA: 1000\n   Red: 15\n   Green: 200\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"IOTA")," is the color code of IOTA tokens and ",(0,a.kt)("inlineCode",{parentName:"p"},"Red")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Green")," are other\ncolor codes (color codes are 32-byte hashes, as defined by Goshimmer).\nTokens can only be moved on the UTXO Ledger by unlocking the corresponding\naddress with its private key."),(0,a.kt)("p",null,"(In this tutorial we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"private key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"signature scheme")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet")," as\nsynonyms)."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Solo")," environment implements a detailed in-memory ",(0,a.kt)("em",{parentName:"p"},"UTXO Ledger"),". For example,\nyou can only move tokens in the ",(0,a.kt)("em",{parentName:"p"},"Solo")," environment by creating and submitting\nvalid and signed transactions. You can also create new wallets on the ",(0,a.kt)("em",{parentName:"p"},"UTXO\nLedger")," and request iotas from the faucet to your wallet."),(0,a.kt)("p",null,"The following code shows how to do it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial2(t *testing.T) {\n    env := solo.New(t, false, false, seed)\n    _, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(1))\n    t.Logf("address of the userWallet is: %s", userAddress.Base58())\n    numIotas := env.GetAddressBalance(userAddress, colored.IOTA) // how many iotas the address contains\n    t.Logf("balance of the userWallet is: %d iota", numIotas)\n    env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n}\n')),(0,a.kt)("p",null,"The deterministic output of the test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"=== RUN   TestTutorial2\n53:47.437253000 INFO    TestTutorial2.db    dbmanager/dbmanager.go:54   creating new registry database. Persistent: false\n53:47.438906800 INFO    TestTutorial2   solo/solo.go:166    Solo environment has been created with initial logical time 00:01.000000000\n    tutorial_test.go:39: address of the userWallet is: 1Haybtqv1SdB8SWTKpWLLuREXf3q7uRePBoVCEMZnCHJF\n    tutorial_test.go:41: balance of the userWallet is: 1000000 iota\n--- PASS: TestTutorial2 (0.00s)\n")),(0,a.kt)("p",null,"The UTXO Ledger in ",(0,a.kt)("em",{parentName:"p"},"Solo"),' "lives" in the global environment ',(0,a.kt)("inlineCode",{parentName:"p"},"env")," of the test.\nIt is shared among all chains, which are deployed on that environment. It serves as a\nmedium for transactions between smart contracts on different chains. This way\n",(0,a.kt)("em",{parentName:"p"},"Solo")," makes it possible to test transacting between chains."),(0,a.kt)("p",null,"Note that in the test above we didn\u2019t deploy any chains: the UTXO Ledger exists\nindependently of any chains."))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);