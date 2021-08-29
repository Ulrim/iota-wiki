"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[6103,9514,3089],{91891:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(67294),r=a(86010),l=a(3905),i=a(54416),o=a(51384),c=a(34397),s=a(83949),m=a(37027),u=a(30513),d="blogPostTitle_nmLu",f="blogPostData_3WzT",v="blogPostDetailsFull_3bEF";var g=function(e){var t,a,g,b=(a=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=e.children,p=e.frontMatter,E=e.metadata,_=e.truncated,k=e.isBlogPostPage,Z=void 0!==k&&k,N=E.date,w=E.formattedDate,y=E.permalink,C=E.tags,I=E.readingTime,D=E.title,x=E.editUrl,T=p.author,S=p.image,L=p.keywords,U=p.author_url||p.authorURL,B=p.author_title||p.authorTitle,R=p.author_image_url||p.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:L,image:S}),n.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(g=Z?"h1":"h2",n.createElement("header",null,n.createElement(g,{className:d},Z?D:n.createElement(o.Z,{to:y},D)),n.createElement("div",{className:(0,r.Z)(f,"margin-vert--md")},n.createElement("time",{dateTime:N},w),I&&n.createElement(n.Fragment,null," \xb7 ",b(I))),n.createElement("div",{className:"avatar margin-vert--md"},R&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:U},n.createElement("img",{src:R,alt:T})),n.createElement("div",{className:"avatar__intro"},T&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:U},T)),n.createElement("small",{className:"avatar__subtitle"},B)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:s.Z},h)),(C.length>0||_)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[v]=Z,t))},C.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),C.map((function(e){var t=e.label,a=e.permalink;return n.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&x&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:x})),!Z&&_&&n.createElement("div",{className:"col text--right"},n.createElement(o.Z,{to:E.permalink,"aria-label":"Read more about "+D},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},30513:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(54416),l=a(23779),i=a(15987);function o(e){var t=e.editUrl,a=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return n.createElement(n.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?n.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},n.createElement(l.Z,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):n.createElement(i.Z,{editUrl:t}))}},91148:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(22122),r=a(19756),l=a(67294),i=a(86010),o=a(51384),c=a(34397),s=a(51402),m=a(34455),u="socialBar_2nY3",d="socialLink_1As6",f="socialImage_2plZ",v="socialTitle_3JEm",g=[{title:"Youtube",imageUrl:"/img/youtube.svg",url:"https://www.youtube.com/c/iotafoundation",backgroundColor:"#18243C"},{title:"GitHub",imageUrl:"/img/github.svg",url:"https://www.github.com/iotaledger/",backgroundColor:"#24314A"},{title:"Discord",imageUrl:"/img/discord.svg",url:"https://discord.iota.org/",backgroundColor:"#303C56"},{title:"Twitter",imageUrl:"/img/twitter.svg",url:"https://www.twitter.com/iota/",backgroundColor:"#3B4862"},{title:"Reddit",imageUrl:"/img/reddit.svg",url:"https://www.reddit.com/r/iota/",backgroundColor:"#47546F"},{title:"Linkedin",imageUrl:"/img/linkedin.svg",url:"https://www.linkedin.com/company/iotafoundation/",backgroundColor:"#52607B"},{title:"Instagram",imageUrl:"/img/instagram.svg",url:"https://www.instagram.com/iotafoundation/",backgroundColor:"#5E6B87"}];function b(e){var t=e.title,a=e.imageUrl,n=e.url,r=e.backgroundColor;return l.createElement("a",{className:(0,i.Z)("padding-horiz--sm padding-vert--md",d),style:{backgroundColor:r},href:n},l.createElement("img",{className:(0,i.Z)(f),src:(0,s.Z)(a)}),l.createElement("div",{className:(0,i.Z)(v)},t))}var h=function(){return l.createElement("div",{className:(0,i.Z)(u)},g.map((function(e,t){return l.createElement(b,(0,n.Z)({key:t},e))})))},p=["to","href","label","prependBaseUrlToHref"];function E(e){var t=e.to,a=e.href,i=e.label,c=e.prependBaseUrlToHref,m=(0,r.Z)(e,p),u=(0,s.Z)(t),d=(0,s.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(o.Z,(0,n.Z)({className:"footer__link-item"},a?{href:c?d:a}:{to:u},m),i)}var _=function(e){var t=e.sources,a=e.alt;return l.createElement(m.Z,{className:"footer__logo",alt:a,sources:t})};var k=function(){var e=(0,c.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,m=t.logo,u=void 0===m?{}:m,d={light:(0,s.Z)(u.src),dark:(0,s.Z)(u.srcDark||u.src)};return e?l.createElement(l.Fragment,null,l.createElement("footer",{className:(0,i.Z)("footer","padding--none","padding-top--xl",{"footer--dark":"dark"===e.style})},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-top--lg padding-bottom--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(E,e))}))):null)}))),(u||a)&&l.createElement("div",{className:"footer__bottom padding-top--xl padding-bottom--lg"},u&&(u.src||u.srcDark)&&l.createElement("div",null,u.href?l.createElement(o.Z,{href:u.href},l.createElement(_,{alt:u.alt,sources:d})):l.createElement(_,{alt:u.alt,sources:d})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null),l.createElement(h,null))):null}},65660:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(22122),r=a(67294),l=a(86010),i=a(54416),o=a(78239),c=a(34397),s=a(6832),m={toggle:"toggle_3D-N"},u=function(e){var t=e.icon,a=e.style;return r.createElement("span",{className:(0,l.Z)(m.toggle,m.dark),style:a},t)},d=function(e){var t=e.icon,a=e.style;return r.createElement("span",{className:(0,l.Z)(m.toggle,m.light),style:a},t)},f=(0,r.memo)((function(e){var t=e.className,a=e.icons,n=e.checked,i=e.disabled,o=e.onChange,c=(0,r.useState)(n),s=c[0],m=c[1],u=(0,r.useState)(!1),d=u[0],f=u[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,l.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":i}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void m(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},a.checked),r.createElement("div",{className:"react-toggle-track-x"},a.unchecked)),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:o,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function v(e){var t=(0,c.LU)().colorMode.switchConfig,a=t.darkIcon,l=t.darkIconStyle,i=t.lightIcon,o=t.lightIconStyle,m=(0,s.Z)().isClient;return r.createElement(f,(0,n.Z)({disabled:!m,icons:{checked:r.createElement(u,{icon:a,style:l}),unchecked:r.createElement(d,{icon:i,style:o})}},e))}var g=a(26266),b=a(98565),h=a(74909),p=a(27213),E=a(85275),_=a(90974),k=a(3089),Z="toggle_2xs0",N="navbarHideable_1VR7",w="navbarHidden_1FmO",y="right";function C(){return(0,c.LU)().navbar.items}function I(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,g.Z)(),a=t.isDarkTheme,n=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:a,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():n()}),[n,l]),disabled:e}}function D(e){var t=e.sidebarShown,a=e.toggleSidebar;(0,h.Z)(t);var o=C(),s=I(),m=function(e){var t,a=e.sidebarShown,n=e.toggleSidebar,l=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:n}),i=(0,c.D9)(l),o=(0,r.useState)((function(){return!1})),s=o[0],m=o[1];(0,r.useEffect)((function(){l&&!i&&m(!0)}),[l,i]);var u=!!l;return(0,r.useEffect)((function(){u?a||m(!0):m(!1)}),[a,u]),{shown:s,hide:(0,r.useCallback)((function(){m(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:a});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(_.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&t&&r.createElement(v,{checked:s.isDarkTheme,onChange:s.toggle})),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":m.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(E.Z,(0,n.Z)({mobile:!0},e,{onClick:a,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:m.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),m.content)))}var x=function(){var e,t,a,i,s,m,u,d=(0,c.LU)().navbar,f=d.hideOnScroll,g=d.style,h=(t=(0,p.Z)(),a="mobile"===t,i=(0,r.useState)(!1),s=i[0],m=i[1],u=(0,r.useCallback)((function(){m((function(e){return!e}))}),[]),(0,r.useEffect)((function(){"desktop"===t&&m(!1)}),[t]),{shouldRender:a,toggle:u,shown:s}),x=I(),T=(0,b.Z)(f),S=T.navbarRef,L=T.isNavbarVisible,U=C(),B=U.some((function(e){return"search"===e.type})),R=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:y)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:y)}))}}(U),A=R.leftItems,P=R.rightItems;return r.createElement("nav",{ref:S,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===g,"navbar--primary":"primary"===g,"navbar-sidebar--show":h.shown},e[N]=f,e[w]=f&&!L,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},r.createElement(_.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),A.map((function(e,t){return r.createElement(E.Z,(0,n.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},P.map((function(e,t){return r.createElement(E.Z,(0,n.Z)({},e,{key:t}))})),!B&&r.createElement(o.Z,null),!x.disabled&&r.createElement(v,{className:Z,checked:x.isDarkTheme,onChange:x.toggle}),(null==U?void 0:U.length)>0&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:h.toggle,onKeyDown:h.toggle},r.createElement(k.Z,null)))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:h.toggle}),h.shouldRender&&r.createElement(D,{sidebarShown:h.shown,toggleSidebar:h.toggle}))}},78358:function(e,t,a){a.d(t,{O:function(){return g}});var n=a(22122),r=a(19756),l=a(67294),i=a(86010),o=a(51384),c=a(51402),s=a(78168),m=a(71699),u=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function g(e){var t=e.activeBasePath,a=e.activeBaseRegex,i=e.to,d=e.href,f=e.label,v=e.activeClassName,g=void 0===v?"navbar__link--active":v,b=e.prependBaseUrlToHref,h=(0,r.Z)(e,u),p=(0,c.Z)(i),E=(0,c.Z)(t),_=(0,c.Z)(d,{forcePrependBaseUrl:!0}),k=f&&d&&!(0,m.Z)(d),Z="dropdown__link--active"===g;return l.createElement(o.Z,(0,n.Z)({},d?{href:b?_:d}:Object.assign({isNavLink:!0,activeClassName:g,to:p},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(E)}}:null),h),k?l.createElement("span",null,f,l.createElement(s.Z,Z&&{width:12,height:12})):f)}function b(e){var t=e.className,a=e.isDropdownItem,o=void 0!==a&&a,c=(0,r.Z)(e,d),s=l.createElement(g,(0,n.Z)({className:(0,i.Z)(o?"dropdown__link":"navbar__item navbar__link",t)},c));return o?l.createElement("li",null,s):s}function h(e){var t=e.className,a=(e.isDropdownItem,(0,r.Z)(e,f));return l.createElement("li",{className:"menu__list-item"},l.createElement(g,(0,n.Z)({className:(0,i.Z)("menu__link",t)},a)))}t.Z=function(e){var t=e.mobile,a=void 0!==t&&t,n=(e.position,(0,r.Z)(e,v));if("category-header"===n.to){return l.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},n.label)}var i=a?h:b;return l.createElement(i,n)}},16679:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(22122),r=a(19756),l=a(67294),i=a(78358),o=a(57617),c=a(86010),s=a(34397),m=a(79861),u=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,a=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,g=(0,r.Z)(e,u),b=(0,o.useActiveDocContext)(v),h=b.activeVersion,p=b.activeDoc,E=(0,s.J)(v).preferredVersion,_=(0,o.useLatestVersion)(v),k=function(e,t){var a=e.flatMap((function(e){return e.docs})),n=a.find((function(e){return e.id===t}));if(!n){var r=a.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return n}((0,m.uniq)([h,E,_].filter(Boolean)),a);return l.createElement(i.Z,(0,n.Z)({exact:!0},g,{className:(0,c.Z)(g.className,(t={},t[d]=p&&p.sidebar===k.sidebar,t)),label:null!=f?f:k.id,to:k.path}))}},68510:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(22122),r=a(19756),l=a(67294),i=a(78358),o=a(61142),c=a(57617),s=a(34397),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,a,d=e.mobile,f=e.docsPluginId,v=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,b=e.dropdownItemsAfter,h=(0,r.Z)(e,m),p=(0,c.useActiveDocContext)(f),E=(0,c.useVersions)(f),_=(0,c.useLatestVersion)(f),k=(0,s.J)(f),Z=k.preferredVersion,N=k.savePreferredVersionName;var w,y=(w=E.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){N(e.name)}}})),[].concat(g,w,b)),C=null!=(t=null!=(a=p.activeVersion)?a:Z)?t:_,I=d&&y?"Versions":C.label,D=d&&y?void 0:u(C).path;return y.length<=1?l.createElement(i.Z,(0,n.Z)({},h,{mobile:d,label:I,to:D,isActive:v?function(){return!1}:void 0})):l.createElement(o.Z,(0,n.Z)({},h,{mobile:d,label:I,to:D,items:y,isActive:v?function(){return!1}:void 0}))}},18384:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(22122),r=a(19756),l=a(67294),i=a(78358),o=a(57617),c=a(34397),s=["label","to","docsPluginId"];function m(e){var t,a=e.label,m=e.to,u=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,o.useActiveVersion)(u),v=(0,c.J)(u).preferredVersion,g=(0,o.useLatestVersion)(u),b=null!=(t=null!=f?f:v)?t:g,h=null!=a?a:b.label,p=null!=m?m:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return l.createElement(i.Z,(0,n.Z)({},d,{label:h,to:p}))}},61142:function(e,t,a){var n=a(22122),r=a(19756),l=a(67294),i=a(86010),o=a(34397),c=a(78358),s=a(85275),m=["items","position","className"],u=["items","className","position"],d=["mobile"];function f(e,t){return!!(0,o.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function v(e){var t,a=e.items,u=e.position,d=e.className,v=(0,r.Z)(e,m),g=(0,l.useRef)(null),b=(0,l.useRef)(null),h=(0,l.useState)(!1),p=h[0],E=h[1],_=function(e,t,a){var n=t.filter((function(e){return f(e,(0,o.be)())})),r=e;return n.length&&(r=Object.assign({},n[0],{label:e.label+" > "+n[0].label})),r}(v,a,(0,o.be)());return(0,l.useEffect)((function(){var e=function(e){g.current&&!g.current.contains(e.target)&&E(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[g]),l.createElement("div",{ref:g,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===u,"dropdown--show":p})},l.createElement(c.O,(0,n.Z)({className:(0,i.Z)("navbar__item navbar__link",d)},_,{onClick:v.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),E(!p))}}),null!=(t=v.children)?t:v.label),l.createElement("ul",{ref:b,className:"dropdown__menu"},a.map((function(e,t){return l.createElement(s.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),E(!1);var n=g.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function g(e){var t,a=e.items,m=e.className,d=(e.position,(0,r.Z)(e,u)),v=(0,o.be)(),g=function(e,t){return e.some((function(e){return f(e,t)}))}(a,v),b=(0,o.uR)({initialState:function(){return!g}}),h=b.collapsed,p=b.toggleCollapsed,E=b.setCollapsed;return(0,l.useEffect)((function(){g&&E(!g)}),[v,g]),l.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":h})},l.createElement(c.O,(0,n.Z)({role:"button",className:(0,i.Z)("menu__link menu__link--sublist",m)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),l.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},a.map((function(e,t){return l.createElement(s.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,a=void 0!==t&&t,n=(0,r.Z)(e,d),i=a?g:v;return l.createElement(i,n)}},85275:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(19756),r=a(67294),l=a(78358),i=a(61142),o=a(22122),c=a(4194),s=a(6832),m=a(34397),u=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function d(e){var t=e.mobile,a=e.dropdownItemsBefore,l=e.dropdownItemsAfter,d=(0,n.Z)(e,u),f=(0,s.Z)().i18n,v=f.currentLocale,g=f.locales,b=f.localeConfigs,h=(0,m.l5)();function p(e){return b[e].label}var E=g.map((function(e){var t="pathname://"+h.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:p(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),_=[].concat(a,E,l),k=t?"Languages":p(v);return r.createElement(i.Z,(0,o.Z)({},d,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(c.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,k)),items:_}))}var f=a(78239);function v(e){return e.mobile?null:r.createElement(f.Z,null)}var g=["type"],b={default:function(){return l.Z},localeDropdown:function(){return d},search:function(){return v},dropdown:function(){return i.Z},docsVersion:function(){return a(18384).Z},docsVersionDropdown:function(){return a(68510).Z},doc:function(){return a(16679).Z}};function h(e){var t=e.type,a=(0,n.Z)(e,g),l=function(e){var t=b[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items));return r.createElement(l,a)}},78239:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(34397),l=a(86010),i="toggle_10iL",o=(0,n.memo)((function(){var e=(0,r.LU)().searchMode.switchConfig,t=e.closeIcon,a=e.closeIconStyle,o=e.searchIcon,c=e.searchIconStyle,s=(0,n.useState)(!1),m=s[0],u=s[1],d=(0,n.useRef)(null),f=function(e){var t=d.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)};return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,l.Z)("wiki-search",{"wiki-search--checked":m}),role:"button",tabIndex:-1,onClick:f},n.createElement("div",{className:"wiki-search-opened"},n.createElement("span",{className:(0,l.Z)(i),style:a},t)),n.createElement("div",{className:"wiki-search-closed"},n.createElement("span",{className:(0,l.Z)(i),style:c},o)),n.createElement("input",{ref:d,checked:m,type:"checkbox",className:"wiki-search-screenreader-only","aria-label":"Open and close search",onChange:f})),n.createElement("div",{className:(0,l.Z)("wiki-search-page",{"wiki-search-page--checked":m})},n.createElement("div",{className:"wiki-search-header"}),n.createElement("div",{className:"wiki-search-main"},n.createElement("div",{className:"wiki-search-bar"},n.createElement("div",{className:"wiki-search-logo"},n.createElement("span",{className:(0,l.Z)(i),style:c},o)),n.createElement("input",{className:"wiki-search-input",type:"text"})))))}))}}]);