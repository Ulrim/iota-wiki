"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[70907],{99178:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),s=["components"],i={},c="Account Balances",l={unversionedId:"guide/solo/balances",id:"guide/solo/balances",isDocsHomePage:!1,title:"Account Balances",description:"Each chain in ISCP is a separate ledger, different from the UTXO ledger.",source:"@site/external/wasp/documentation/docs/guide/solo/balances.md",sourceDirName:"guide/solo",slug:"/guide/solo/balances",permalink:"/wasp/guide/solo/balances",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error handling",permalink:"/wasp/guide/solo/error-handling"},next:{title:"Sending tokens to a Smart Contract",permalink:"/wasp/guide/solo/sending-funds"}},d=[],u={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"account-balances"},"Account Balances"),(0,o.kt)("p",null,"Each chain in ",(0,o.kt)("em",{parentName:"p"},"ISCP")," is a separate ledger, different from the UTXO ledger.\nMultiple chains adds another dimension on top of the UTXO Ledger. Smart contracts\ncan exchange assets between themselves on the same chain and also between different chains as well as with\naddresses on the UTXO Ledger. We will skip explaining the whole picture for time\nbeing and will concentrate on one specific use case."),(0,o.kt)("p",null,"Let's say we have a wallet, the private key (with the address) and some tokens on\nthat address on the UTXO Ledger, the Tangle. The use case is about sending those tokens to a smart contract on a chain\nand receiving these tokens back to the address."),(0,o.kt)("p",null,"Here we explore the concept of ",(0,o.kt)("inlineCode",{parentName:"p"},"on-chain account")," a.k.a. just ",(0,o.kt)("inlineCode",{parentName:"p"},"account"),". On the UTXO\nLedger the private key is represented by the address (the hash of the public\nkey). That address holds balances of colored tokens. Those tokens are\n",(0,o.kt)("em",{parentName:"p"},"controlled")," by the private key."),(0,o.kt)("p",null,"In ISCP we extend the concept of ",(0,o.kt)("em",{parentName:"p"},"address")," with the concept of ",(0,o.kt)("inlineCode",{parentName:"p"},"account"),". An\n",(0,o.kt)("inlineCode",{parentName:"p"},"account")," contains colored tokens just like an ",(0,o.kt)("inlineCode",{parentName:"p"},"address"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"account")," is\nlocated on some chain, and it is controlled by the same private key as the\nassociated address. So, an address can control tokens on the UTXO Ledger\n(Level 1 or ",(0,o.kt)("inlineCode",{parentName:"p"},"L1"),") and on each chain (Level 2 or ",(0,o.kt)("inlineCode",{parentName:"p"},"L2"),")."),(0,o.kt)("p",null,"So, the chain essentially is a custodian of the tokens deposited in its ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts"),"."),(0,o.kt)("p",null,"The following test demonstrates how a wallet can deposit tokens in a chain\naccount and then withdraw them back."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial5(t *testing.T) {\n env := solo.New(t, false, false, seed)\n chain := env.NewChain(nil, "ex5")\n // create a wallet with 1000000 iotas.\n // the wallet has address and it is globally identified\n // through a universal identifier: the agent ID\n userWallet, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(5))\n userAgentID := iscp.NewAgentID(userAddress, 0)\n\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0) // empty on-chain\n\n t.Logf("Address of the userWallet is: %s", userAddress.Base58())\n numIotas := env.GetAddressBalance(userAddress, colored.IOTA)\n t.Logf("balance of the userWallet is: %d iota", numIotas)\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n\n // send 42 iotas from wallet to own account on-chain, controlled by the same wallet\n req := solo.NewCallParams(accounts.Contract.Name, accounts.FuncDeposit.Name).WithIotas(42)\n _, err := chain.PostRequestSync(req, userWallet)\n require.NoError(t, err)\n\n // check address balance: must be 42 iotas less\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo-42)\n // check the on-chain account. Must contain 42 iotas\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 42)\n\n // withdraw all iotas back to the sender\n req = solo.NewCallParams(accounts.Contract.Name, accounts.FuncWithdraw.Name).WithIotas(1)\n _, err = chain.PostRequestSync(req, userWallet)\n require.NoError(t, err)\n\n // we are back to initial situation: IOTA is fee-less!\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0) // empty\n}\n')),(0,o.kt)("p",null,"The example above creates a chain, then creates a wallet with ",(0,o.kt)("inlineCode",{parentName:"p"},"solo.Saldo")," iotas (1 Mi) and\nsends (deposits) 42 iotas to the corresponding on-chain account by posting\na ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," core contract on that chain. That account\nwill now contain 42 iotas. The address on the UTXO Ledger will contain 42 iotas\nless, of course."),(0,o.kt)("p",null,"In the next step the same wallet (",(0,o.kt)("inlineCode",{parentName:"p"},"userWallet"),") will withdraw all 42 iotas back\nto the address by sending a ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," contract on\nthe same chain."),(0,o.kt)("p",null,"If the same request would be posted from another user wallet (another private\nkey), the ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," request would fail. Try it! Only the owner of the address\ncan move those funds from the on-chain account."))}p.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return t?a.createElement(m,s(s({ref:n},d),{},{components:t})):a.createElement(m,s({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);