(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8428],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(n),p=r,f=c["".concat(l,".").concat(p)]||c[p]||u[p]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7669:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"Firefly Wallet",description:"The IOTA Firefly Wallet sets a new standard for Software Wallets in DLT. We describe why it is so secure and how amazing it is to use it."},l={unversionedId:"learn/wallets/firefly-wallet",id:"learn/wallets/firefly-wallet",isDocsHomePage:!1,title:"The Firefly Wallet",description:"The IOTA Firefly Wallet sets a new standard for Software Wallets in DLT. We describe why it is so secure and how amazing it is to use it.",source:"@site/docs/learn/wallets/firefly-wallet.md",sourceDirName:"learn/wallets",slug:"/learn/wallets/firefly-wallet",permalink:"/iota-wiki/docs/learn/wallets/firefly-wallet",editUrl:"https://github.com/iota-community/iota-wiki/docs/learn/wallets/firefly-wallet.md",version:"current",frontMatter:{title:"Firefly Wallet",description:"The IOTA Firefly Wallet sets a new standard for Software Wallets in DLT. We describe why it is so secure and how amazing it is to use it."},sidebar:"learn",previous:{title:"What is a Wallet?",permalink:"/iota-wiki/docs/learn/wallets/what-is-a-wallet"},next:{title:"Heading 1 (Page Title)",permalink:"/iota-wiki/docs/learn/wallets/iota-devnet-wallet"}},h=[{value:"Firefly Token Migration",id:"firefly-token-migration",children:[]},{value:"Firefly Token Migration",id:"firefly-token-migration-1",children:[]},{value:"Useful Links",id:"useful-links",children:[]},{value:"Firefly Features",id:"firefly-features",children:[{value:"Account Structure",id:"account-structure",children:[]},{value:"Profile Setup",id:"profile-setup",children:[]},{value:"Firefly Dashboard",id:"firefly-dashboard",children:[]}]},{value:"Wallets",id:"wallets",children:[{value:"Wallet Detail view",id:"wallet-detail-view",children:[]},{value:"Send and Receive Transactions",id:"send-and-receive-transactions",children:[]}]}],d={toc:h};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Secure Entrypoint to the IOTA Ecosystem."),(0,o.kt)("p",null,"Firefly is built with a bright future in mind. It will evolve into a tool that offers much more than being just a Software Wallet for your IOTA Tokens.\nFirefly offers a modular design that makes it easy to add innovative new features later on.\nIOTA\u2019s new wallet guides you through the complexities of crypto, protected and with ease, while it is using cutting-edge technology to secure your tokens."),(0,o.kt)("p",null,"Some of the most important features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Written in Rust")),(0,o.kt)("p",null,"Rust offers security from the ground up \u2013 while maintaining speed, low memory usage, and scalability. This allows us to build apps with better performance and higher security."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modular design")),(0,o.kt)("p",null,"Firefly separates different functionalities \u2013 like seed storage, handling transactions, and cryptography \u2013 in module crates. A module crate groups related functions so that the functionality is easy to share between multiple projects that aim to use the same feature."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Secured with Stronghold")),(0,o.kt)("p",null,"Sensitive actions like address generation and transaction signing take place in isolated application memory built upon the IOTA Stronghold library, keeping the seed away from potential attackers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Crypto.rs")),(0,o.kt)("p",null,"Crypto.rs combines all cryptographic algorithms used by many of the projects at the IOTA Foundation. It reduces the risk of using unsafe crypto implementations, making it easier to audit, resulting in verifiably safer code."),(0,o.kt)("p",null,"Find more information on the official Website and download the Firefly Wallet only from there:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://firefly.iota.org/"},"Firefly"))," - official Website"),(0,o.kt)("h2",{id:"firefly-token-migration"},"Firefly Token Migration"),(0,o.kt)("p",null,"With the launch of the new IOTA 1.5 Chrysalis Mainnet end of April 28th, every IOTA Holder must migrate his entire Funds from the old IOTA 1.0 network to the new, much more improved, and advanced 1.5 network.\nTo make this process user-friendly and safe, the IOTA Foundation integrated a migration tool into the Firefly Wallet, that takes care of the whole process and moves your funds automated from the old into the new network. "),(0,o.kt)("p",null,"The only thing you need to move your Tokens to the new network is your current IOTA 1.0 network Seed, represented as a combination of 81 characters, or a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},".kdbx seed vault file"))," that you have backed up from the Trinity Wallet and the password that belongs to the file, or your Ledger Nano device.\nWith this information entered in the Firefly Wallet Migration Process, a fully automated migration will start and all your Funds will be moved securely into the new network. Upon completion, you will have access to them through Firefly from now on.\nRead everything about the process here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.iota.org/the-chrysalis-token-migration-starts-now/"},"Chrysalis Migration"))," - The Chrysalis network Migration process"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.iota.org/firefly-token-migration/"},"Firefly Migration Process"))," - The whole Migration Process explained"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.iota.org/security-during-token-migration/"},"Migration Security"))," - Important advice for a safe Migration Process")),(0,o.kt)("p",null,"Sensitive actions like address generation and transaction signing take place in isolated application memory, keeping the seed away from potential attackers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Crypto.rs")),(0,o.kt)("p",null,"Crypto.rs combines all cryptographic algorithms used by many of the projects at IOTA Foundation. It reduces the risk of using unsafe crypto implementations, making it easier to audit, resulting in verifiably safer code."),(0,o.kt)("p",null,"Find more information on the official Website and download the Firefly Wallet only from there:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://firefly.iota.org/"},"Firefly"))," - official Website"),(0,o.kt)("h2",{id:"firefly-token-migration-1"},"Firefly Token Migration"),(0,o.kt)("p",null,"With the launch of the new IOTA 1.5 Chrysalis Mainnet end of April 28th, it is important that every IOTA Holder migrates his entire Funds from the old IOTA 1.0 network to the new, much more improved and advanced 1.5 network."),(0,o.kt)("p",null,"To make this process user-friendly and safe, the IOTA Foundation integrated a migration tool into the Firefly Wallet, that takes care of the whole process and moves your funds automated from the old into the new network. The only thing you need is your old IOTA 1.0 network Seed, represented as a combination of 81 characters, a ",(0,o.kt)("inlineCode",{parentName:"p"},".kdbx seed vault file"),"that you have backed up from the Trinity Wallet, or your Ledger Nano device."),(0,o.kt)("p",null,"With this information entered in the Migration Process in Firefly, a fully automated process will start and all your Funds will be moved securely into the new network, and you will have access to them through Firefly from now on."),(0,o.kt)("p",null,"Read everything about the process here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.iota.org/the-chrysalis-token-migration-starts-now/"},"Chrysalis Migration"))," - The Chrysalis network Migration process"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.iota.org/firefly-token-migration/"},"Firefly Migration Process"))," - The whole Migration Process explained"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.iota.org/security-during-token-migration/"},"Migration Security"))," - Important advice for a safe Migration Process")),(0,o.kt)("h2",{id:"useful-links"},"Useful Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://discord.com/channels/397872799483428865/748265907351978115"},"Firefly Discord Channel"))," - Discuss the Firefly Wallet, ask questions and engage with the IOTA community on Discord"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/iotaledger/firefly"},"Firefly GitHub"))," - Firefly codebase and development repository")),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"firefly-features"},"Firefly Features"),(0,o.kt)("h3",{id:"account-structure"},"Account Structure"),(0,o.kt)("p",null,"Firefly's basic Account handling Logic works like this: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One Firefly ",(0,o.kt)("strong",{parentName:"li"},"Profile")," is always the representation of one ",(0,o.kt)("strong",{parentName:"li"},"IOTA Seed")),(0,o.kt)("li",{parentName:"ul"},"Every Firefly ",(0,o.kt)("strong",{parentName:"li"},"Profile")," can host an unlimited amount of ",(0,o.kt)("strong",{parentName:"li"},"Wallet's")," which can be seen as Sub-Accounts under the ",(0,o.kt)("strong",{parentName:"li"},"Profile Seed"),".")),(0,o.kt)("h3",{id:"profile-setup"},"Profile Setup"),(0,o.kt)("p",null,"Every ",(0,o.kt)("strong",{parentName:"p"},"Profile")," receives a unique IOTA Seed consisting of a ",(0,o.kt)("strong",{parentName:"p"},"24 words mnemonic Phrase")," created with the ",(0,o.kt)("inlineCode",{parentName:"p"},"BIP39 Standard"),". During the Profile creation, these 24 words will be shown to the user ",(0,o.kt)("strong",{parentName:"p"},"only a single time")," and the user must make sure to back up these 24 words. We highly recommend creating a Paper Wallet as a physical backup of these words. Losing the words will potentially result in losing access to the Profile and the funds connected with the Seed.\nTo make sure that the user has created a backup of the 24 words, a check is done during setup, which requires adding all the 24 words in the correct order by the user."),(0,o.kt)("p",null,"After the user has received the 24 Seed Words the user can also create a ",(0,o.kt)("strong",{parentName:"p"},"Stronghold File")," as a digital Backup of the Profile. This File also contains the SEED securely encrypted, and some setup Information of the Profile. We strongly recommend storing this file in several independent locations (USB Stick, Cloud storage,...). Given the case that the 24 words get lost, it is possible to restore a profile with this file. To use the file the user has to create a secure password that encrypts the Stronghold file. Only in combination with this password, the Stronghold file will restore the Profile. It is therefore also essential for the user to store the Password to this stronghold file securely."),(0,o.kt)("p",null,"Further then, the user creates a Pin-code as an easy access method to the Firefly wallet Interface. This Pin Code is required to enter the Profile - Dashboard but does not grant access to Functions that handle or move the user's funds or give access to security settings of the Wallet. For all these actions that require a higher level of security, the user needs to enter the Stronghold Password. Only this password gives access to the full functionality of the Wallet."),(0,o.kt)("p",null,"If different Users aim to use the same Firefly Wallet App, or if you have IOTA Tokens on multiple Seeds, you need to create a new Profile for every Seed / every User."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Key Takeaways:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Securely Back up the 24 words mnemonic phrase, it is your IOTA SEED!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Securely store your Stronghold Backup File and the Stronghold Password!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Store it in multiple independent locations digital and physical!"))),(0,o.kt)("h3",{id:"firefly-dashboard"},"Firefly Dashboard"),(0,o.kt)("p",null,'The Firefly Dashboard is the main overview of a User Profile. Easily accessible information on the spot and the most common functions "Send" and "Receive" ordered in a nicely styled layout.\nUsers are shown the total Profile balance here, the different Wallets, and a list of the latest occurred transactions. IOTA Price or Profile value is shown in a chart and a section with the basic security info of the Profile.'),(0,o.kt)("h2",{id:"wallets"},"Wallets"),(0,o.kt)("p",null,'Wallets are sub-accounts to a Seed (Profile). It may be a convenient way to have several of them for different occasions. Users could have a "long-term hold" and a "spending" Wallet. Or a Wallet where they receive payments, another one in which only donations are received, etc. Users are free in setting them up as they wish.\nUsing the little "+" sign in the ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"My Wallets"))," section of the dashboard creates a new Wallet. Assign a name for the Wallet, confirm the creation with the Stronghold password, and the Wallet is set to receive funds."),(0,o.kt)("p",null,"Wallets contain a collection of addresses and those addresses are grouped under this wallet to help users keeping their addresses organized."),(0,o.kt)("p",null,"Important to mention here: Users can only set up further Wallets if the first Wallet has already funds in it. So if Users want to set up 5 different Wallets they need a small amount of IOTA in every newly created Wallet before another one can be created."),(0,o.kt)("h3",{id:"wallet-detail-view"},"Wallet Detail view"),(0,o.kt)("p",null,"A mouse click on one of the Wallets in the Dashboard overview opens the Wallet Detail Screen.\nHere Users see the Balance contained in this specific Wallet and have the option to send and receive transactions."),(0,o.kt)("p",null,"Next to the send and receive section an overview of all the transactions related to this specific wallet is shown.\nLittle Icons indicate if a send or receive transaction was done internal (to another Wallet of the same Profile) or external.\nClicking on one of the transactions opens the "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transaction detail view"),"."),(0,o.kt)("p",null,"The following information about the transaction is displayed:"),(0,o.kt)("p",null,"A transaction flow that indicates: ",(0,o.kt)("strong",{parentName:"p"},"from where > token amount > to where")," followed by:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Status")),(0,o.kt)("p",null,"Confirmed or Pending status of the message"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Date")),(0,o.kt)("p",null,"Date and Time when the transaction was issued or received (in local System time)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Message ID")),(0,o.kt)("p",null,"The unique identifier of this specific message (every transaction in IOTA is a message) in the IOTA Ledger."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Send Address")),(0,o.kt)("p",null,"The Address from where the transaction was initiated"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Receive Address")),(0,o.kt)("p",null,"The Address on which the tokens of this transaction have arrived. Several different receive Addresses may be shown in this view. The Addresses belonging to you are highlighted with the name of your wallet in brackets, other addresses that are shown without brackets do not belong to you. These are normally addresses of the sender to where the remaining funds that have not been used from the sender's address are transferred. This is related to the UTXO (unspent transaction output) Account model in IOTA."),(0,o.kt)("p",null,"If a transaction is issued from a UTXO output (an address holding funds) that does not consume all funds that are part of this output, 2 transactions are issued. One transaction moves the funds that are planned to send away from the address, and a second transaction that moves the rest of the unused funds from this UTXO to a new UTXO output. Both these transactions are part of the Message and therefore shown in the Transaction detail. Read more about the UTXO Account model here: (",(0,o.kt)("em",{parentName:"p"},"internal link to utxo"),")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Amount")),(0,o.kt)("p",null,"Amount of IOTA sent and current value in chosen Profile currency"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2 different charts")," "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Wallet Value")," and ",(0,o.kt)("strong",{parentName:"p"},"Wallet activity")," also provide a graphic overview of the activities in this wallet.\nAlso, you have will find ",(0,o.kt)("strong",{parentName:"p"},"3 little dots")," next to the Wallet balance. Clicking on those dots opens a popup menu."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In this popup menu you can enter the functions:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Customize Wallet")," "),(0,o.kt)("p",null,"Possibility to change the Wallet name."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"View address history")),(0,o.kt)("p",null,"A list of all addresses that have been used by this wallet and the balance that sits currently on this address. You can copy this list and paste it into your documents."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hide Wallet")),(0,o.kt)("p",null,'Empty Wallets can be hidden to keep your Main Wallet overview organized. If a wallet still contains funds you will not be able to hide it by clicking this option but will be offered to transfer the funds to another Wallet and hide the Wallet afterward. A hidden Wallet can be shown again by enabling the function "show hidden wallets" in the advanced account settings.'),(0,o.kt)("h3",{id:"send-and-receive-transactions"},"Send and Receive Transactions"),(0,o.kt)("p",null,"The Send and Receive functions are available in the main Wallets dashboard, and also in evert Wallet detail view."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Receive")),(0,o.kt)("p",null,'Click on the "Receive" button to open the Receive Funds dialogue. Using a dropdown menu, the user can choose in which of the Wallets the incoming funds should be received.\nThe receive address of the selected Wallet is displayed as a QR Code and as a written address. The button ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Copy Address"))," copies the displayed receive address into the user's clipboard for convenient pasting into other applications or documents.\n",(0,o.kt)("strong",{parentName:"p"},"The receive address of a user will change every time funds have been received and spent again from that address. The wallet creates automatically a fresh address for the next receive attempt.")),(0,o.kt)("p",null,'If a user has received, but not yet spent funds from that receiving address, the user can manually decide to generate a fresh receive address using the small "refresh" button above the QR Code.\nThis function is an essential privacy feature that is a standard approach in Crypto to reduce the traceability of your balances'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Send")),(0,o.kt)("p",null,'The Send function has two essential features:\n"Send payment" - which is a standard IOTA transaction where you type or copy in a full IOTA receive address in the form of ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"iotaxjdjfkfkldldd.......")),'.\nThe user now defines the Wallet from where the tokens should be sent in a dropdown menu and the Number of Tokens to be sent. While defining the amount, a user may choose "Max" - which will send all the Tokens contained in the chosen wallet, or specify the exact amount with manual input. A dropdown button provides the option to switch the amount between different unit sizes (Mi, Gi,...). ',(0,o.kt)("strong",{parentName:"p"},"Make sure that you are entering the token amount in the correct unit size.")),(0,o.kt)("p",null,"To initiate the transaction now, the user has to enter the stronghold password which confirms and signs the transaction.\nAfter this, the following steps are performed by the wallet to deliver the transaction to the recipient: "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Syncing Wallet"')," - establishing the connection to the IOTA Ledger, "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Performing PoW"')," - a tiny amount of PoW is performed by the device of the user, "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Broadcasting transaction"')," - sending the signed transaction into the network, "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Transfer complete"')," - confirmation of the transaction received from the network. "),(0,o.kt)("p",null,"This whole process happens in just a few seconds."),(0,o.kt)("p",null,"One important thing to mention: You can only set up further Wallets if your first Wallet has already funds in it. So if you want to set up 5 different Wallets you need a small amount of IOTA' to end the newly created Wallet, before you can create another one."),(0,o.kt)("p",null,"If you send and receive funds, they will always be organized under the wallet that you used to send or receive, so it is easier to keep track if you have a lot of transactions going on."))}u.isMDXComponent=!0}}]);