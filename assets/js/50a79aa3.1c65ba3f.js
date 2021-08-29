"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3929],{22073:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return h},default:function(){return u}});var n=a(22122),s=a(19756),o=(a(67294),a(3905)),r=["components"],i={id:"value-transfer",title:"Value Transfer",description:"Learn how the IOTA Cryptocurrency Protocol transfers the native IOTA Tokens."},l="IOTA Value Transactions",d={unversionedId:"learn/about-iota/value-transfer",id:"learn/about-iota/value-transfer",isDocsHomePage:!1,title:"Value Transfer",description:"Learn how the IOTA Cryptocurrency Protocol transfers the native IOTA Tokens.",source:"@site/docs/learn/about-iota/value-transfer.md",sourceDirName:"learn/about-iota",slug:"/learn/about-iota/value-transfer",permalink:"/docs/learn/about-iota/value-transfer",editUrl:"https://github.com/iota-community/iota-wiki/edit/develop/docs/learn/about-iota/value-transfer.md",tags:[],version:"current",frontMatter:{id:"value-transfer",title:"Value Transfer",description:"Learn how the IOTA Cryptocurrency Protocol transfers the native IOTA Tokens."},sidebar:"learn",previous:{title:"Data Transfer",permalink:"/docs/learn/about-iota/data-transfer"},next:{title:"Why is IOTA Feeless?",permalink:"/docs/learn/about-iota/why-is-iota-feeless"}},h=[{value:"Simple example:",id:"simple-example",children:[{value:"The goal",id:"the-goal",children:[]},{value:"What is in the Tangle",id:"what-is-in-the-tangle",children:[]},{value:"Choosing where to attach messages",id:"choosing-where-to-attach-messages",children:[]},{value:"Signing the messages",id:"signing-the-messages",children:[]},{value:"Waiting for the messages to be confirmed",id:"waiting-for-the-messages-to-be-confirmed",children:[]}]},{value:"Clients",id:"clients",children:[]},{value:"Nodes",id:"nodes",children:[]}],c={toc:h};function u(e){var t=e.components,a=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iota-value-transactions"},"IOTA Value Transactions"),(0,o.kt)("p",null,"This page will explain how IOTA tokens will be sent and received in the IOTA Network in an understandable manner and link to further detailed and high-level content."),(0,o.kt)("h2",{id:"simple-example"},"Simple example:"),(0,o.kt)("p",null,"To explain how IOTA tokens are transferred from one address to another, this topic follows three characters:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Alice"),(0,o.kt)("li",{parentName:"ol"},"Bob"),(0,o.kt)("li",{parentName:"ol"},"Charlie")),(0,o.kt)("h3",{id:"the-goal"},"The goal"),(0,o.kt)("p",null,"Charlie wants to transfer 10 i to Bob."),(0,o.kt)("h3",{id:"what-is-in-the-tangle"},"What is in the Tangle"),(0,o.kt)("p",null,"In this example, Alice had 10 i that she transferred to Bob.\nTherefore, the Tangle now includes a value message that transferred those 10 i to Bob."),(0,o.kt)("h3",{id:"choosing-where-to-attach-messages"},"Choosing where to attach messages"),(0,o.kt)("p",null,"To transfer 10 i to Bob, Charlie must attach a value message to the Tangle. For that, he needs between 1 and 8 tip messages that he can attach to his own message."),(0,o.kt)("p",null,"To get these tip messages, Charlie requests them from a node."),(0,o.kt)("p",null,"The node selects this messages by using an algorithm called uniform random tip selection (URTS). This algorithm selects between 1 and 8 valid tip messages that lead to a valid ledger state."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ledger state is a record of all the value message that have transferred IOTA tokens in the Tangle, including the state of all balances on addresses. This state must always be balanced: The total number of IOTA tokens must always add up to the total supply.")),(0,o.kt)("p",null,"By using the tip messages that the node gave him, Charlie lets the network know that he is also approving them and their history. If any of those messages turn out to be invalid, Charlie's messages will also be treated as invalid and will not be selected by other nodes during tip selection."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nodes ignore invalid parts of the Tangle during tip selection. These parts are called an invalid subtangle.")),(0,o.kt)("h3",{id:"signing-the-messages"},"Signing the messages"),(0,o.kt)("p",null,"To prove to nodes that he is indeed the owner of the IOTA tokens in his address, Charlie signs an input message with his private key. This input message withdraws 10 i from his address."),(0,o.kt)("p",null,"Charlie then creates an output message to deposit that 10 i into Bob's address. This message does not need a signature because it is not withdrawing IOTA tokens."),(0,o.kt)("p",null,"Then Charlie puts all the messages in a UTXO and sends them to a node on an IOTA network."),(0,o.kt)("h3",{id:"waiting-for-the-messages-to-be-confirmed"},"Waiting for the messages to be confirmed"),(0,o.kt)("p",null,"Anyone is free to send messages to a node at any time. As a result, it is not always a simple matter of selecting valid tip messages. The milestone, however, determines which messages are included and confirmed based on deterministic ordering."),(0,o.kt)("p",null,"For example, what if Alice actually attached two messages to the Tangle: One that transferred 10 i to Bob, and one that transferred 10 i to Charlie? Together, these messages would be called a double spend because they try to transfer the same IOTA tokens to different addresses."),(0,o.kt)("p",null,"Both of Alice's messages could not be part of the ledger state because it would result in a negative balance for Alice\u2019s address: - 10 i."),(0,o.kt)("p",null,"Messages in the Tangle are confirmed by special messages called milestones. Those milestones are issued by a special node called Coordinator, that is operated by the IOTA Foundation and is therefore still a centralized part of the Consensus."),(0,o.kt)("p",null,"After Charlie's message is confirmed by a milestone, the nodes update his and Bob's balances to reflect the transfer of 10 i to Bob's address.\nBob can now spend his new IOTA tokens."),(0,o.kt)("p",null,"Let's go a bit more into details and observe the single steps taken by the participants:"),(0,o.kt)("h2",{id:"clients"},"Clients"),(0,o.kt)("p",null,"Everything starts with a client. A client is a software that initiates and creates IOTA transactions for a user (humans/machines/devices).\nMost clients for users will come in the form of a wallet software like the "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https:/firefly.iota.org/"},"IOTA Firefly Wallet"))),(0,o.kt)("p",null,"But also simple command-line tools for professional users, like the "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https:/https://github.com/iotaledger/cli-wallet/"},"CLI Wallet")," ")),(0,o.kt)("p",null,"are available. "),(0,o.kt)("p",null,"Machines, sensors, and devices, etc. will use the code of the IOTA Wallet Libraries to create and execute the transactions autonomously."),(0,o.kt)("p",null,'To send a value transaction into the IOTA network, a client creates an IOTA message that includes a "signed transaction payload". In this payload, all the data is specified to tell the IOTA network how many tokens from address A (owned by the issuer of the message) should be transferred to address B and makes it possible to upgrade the state of the IOTA Ledger accordingly.'),(0,o.kt)("p",null,"This signed transaction payload must contain a digital signature that guarantees that the sender of the transaction is the owner of the address where those funds are stored at the moment. This is guaranteed through signing the transaction with the private key of that address. A public key, that is also part of this message, will be used to validate the ownership over those funds. Read more about how private and public keys work together to establish this here:"),(0,o.kt)("p",null,"The next step will be that the client connects to a node in the IOTA network and asks this node for valid tips to include into the message. After the tips (1 - 8 previous already confirmed messages of the tangle) are known to the client, they can be included into the message and therefore create a reference path for this message in the Tangle. Finally, the client now submits this message (that includes the transaction payload) for validation and processing to the node."),(0,o.kt)("h2",{id:"nodes"},"Nodes"),(0,o.kt)("p",null,"Nodes are the bookkeepers, decision-makers, and validators of all information in the IOTA network. Every node in the IOTA network knows the exact status and containing value of all existing addresses in the iota network at a given time. This is called the Ledger State. "),(0,o.kt)("p",null,"A Node is also the entry point for clients into the network. The clients submit messages to the node over a specified port in the node. The node collects all arriving traffic of this entry port in his inbox and first checks if the message is correctly formatted and can be processed."),(0,o.kt)("p",null,"If all bits of the message are readable for the node and the node detects the signed transaction payload included in the message, a validation process starts."),(0,o.kt)("p",null,"Firstly, the node verifies if the address that tries to send these funds has the needed balance to do this. So he checks his current knowledge of that address (his ledger state) if the address has enough funds. Also, the node checks that no conflicts are known in the network that would make it possible to spend more funds than are currently located on the address (double spend). So if there is another message currently present and know for the node that wants to spend the same funds of the address, a conflict is detected and both messages will be processed into conflict resolution - more about this process later. "),(0,o.kt)("p",null,'If no conflicts are detected, the next step for a node is to submit the requested update of the ledger state - "remove amount Funds X from address A and add those amount to address B". Submitting happens via the so-called ',(0,o.kt)("strong",{parentName:"p"},"gossip protocol"),". "),(0,o.kt)("p",null,"The node sends its updated Ledger State to all its directly connected neighboring nodes. Every node is connected to several other nodes. Those nodes receive the updated ledger state from their neighbors. Every node compares the request to its currently known version of the Ledger and checks again for conflicts. If no conflicts are found, the node updates his ledger state and sends the updated state to his neighbors again..."),(0,o.kt)("p",null,"This leads to an extremely fast propagation of ledger updates through the network and in a few seconds, it has reached every node in the network and is therefore accepted and confirmed. In this stage, the message has reached full confirmation and is considered solid. It will now be added to the tip pool of every node and can be used to be referenced by new messages."))}u.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=d(a),p=s,f=u["".concat(l,".").concat(p)]||u[p]||c[p]||o;return a?n.createElement(f,r(r({ref:t},h),{},{components:a})):n.createElement(f,r({ref:t},h))}));function p(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);