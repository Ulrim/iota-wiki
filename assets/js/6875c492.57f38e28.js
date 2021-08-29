"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8610,9514,3089,6103],{18607:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(19756),r=n(67294),l=n(86010),i=n(65856),o=n(51384),c="sidebar_2ahu",s="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",f="sidebarItemLinkActive_12pM",g=n(54416);function v(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var h=n(8969),p=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,n=e.toc,o=e.children,c=(0,a.Z)(e,p),s=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&r.createElement("div",{className:"col col--2"},r.createElement(h.Z,{toc:n})))))}},82100:function(e,t,n){n.r(t);var a=n(67294),r=n(51384),l=n(18607),i=n(91891),o=n(54416),c=n(34397);t.default=function(e){var t,n=e.metadata,s=e.items,m=e.sidebar,u=n.allTagsPath,d=n.name,f=n.count,g=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),v=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:g(f),tagName:d});return a.createElement(l.Z,{title:v,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,v),a.createElement(r.Z,{href:u},a.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),s.map((function(e){var t=e.content;return a.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},a.createElement(t,null))})))}},60153:function(e,t,n){n.d(t,{N:function(){return d},Z:function(){return f}});var a=n(19756),r=n(22122),l=n(67294),i=n(86010),o=n(54416),c=n(34397),s="anchorWithStickyNavbar_31ik",m="anchorWithHideOnScrollNavbar_3R7-",u=["id"],d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},f=function(e){return"h1"===e?d:(t=e,function(e){var n,r=e.id,d=(0,a.Z)(e,u),f=(0,c.LU)().navbar.hideOnScroll;return r?l.createElement(t,d,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor","anchor__"+t,(n={},n[m]=f,n[s]=!f,n)),id:r}),d.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,d)});var t}},23779:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(22122),r=n(19756),l=n(67294),i=n(86010),o="iconEdit_2_ui",c=["className"],s=function(e){var t=e.className,n=(0,r.Z)(e,c);return l.createElement("svg",(0,a.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(o,t),"aria-hidden":"true"},n),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},83949:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(22122),r=n(19756),l=n(67294),i=n(9932),o=n(51384),c=n(48235),s=n(60153),m=n(86010),u=n(34397),d="details_1VDD";function f(e){var t=Object.assign({},e);return l.createElement(u.PO,(0,a.Z)({},t,{className:(0,m.Z)("alert alert--info",d,t.className)}))}var g=["mdxType","originalType"];var v={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,r.Z)(a,g));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(c.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(o.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(n)&&(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:l.createElement(c.Z,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(f,(0,a.Z)({},e,{summary:n}),r)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},8969:function(e,t,n){n.d(t,{r:function(){return f},Z:function(){return g}});var a=n(67294),r=n(86010),l=n(34397);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e){var t,n=e.anchorTopOffset,a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=a.find((function(e){return i(e).top>=n}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(r))?r:null!=(t=a[a.indexOf(r)-1])?t:null:a[a.length-1]}function c(){var e=(0,a.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((function(){var a=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=o({anchorTopOffset:n.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function f(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(f,{isChild:!0,toc:e.children}))}))):null}var g=function(e){var t=e.toc;return s(d),a.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},a.createElement(f,{toc:t}))}},15987:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(5977),l=n(51402),i=n(52426),o=n(54416),c=n(57617);function s(e){var t=e.editUrl,n=(0,r.TH)().pathname,s=(0,c.useActivePlugin)(),m=(0,i.usePluginData)("docusaurus-plugin-docs-editor"),u=function(){if(s){var e=s.pluginData.path,t=n.slice(e.length);return"/"+m.route+t}}();return a.createElement(a.Fragment,null,u&&a.createElement(a.Fragment,null,a.createElement("a",{href:(0,l.Z)(u),target:"_blank",rel:"noreferrer noopener"},"Open in editor"),a.createElement("span",{className:"margin-horiz--sm"},"|")),a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Open on GitHub")))}},91891:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),r=n(86010),l=n(3905),i=n(54416),o=n(51384),c=n(34397),s=n(83949),m=n(37027),u=n(30513),d="blogPostTitle_nmLu",f="blogPostData_3WzT",g="blogPostDetailsFull_3bEF";var v=function(e){var t,n,v,h=(n=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=e.children,b=e.frontMatter,E=e.metadata,_=e.truncated,Z=e.isBlogPostPage,k=void 0!==Z&&Z,N=E.date,w=E.formattedDate,y=E.permalink,C=E.tags,I=E.readingTime,T=E.title,L=E.editUrl,x=b.author,D=b.image,S=b.keywords,U=b.author_url||b.authorURL,A=b.author_title||b.authorTitle,B=b.author_image_url||b.authorImageURL;return a.createElement(a.Fragment,null,a.createElement(m.Z,{keywords:S,image:D}),a.createElement("article",{className:k?void 0:"margin-bottom--xl"},(v=k?"h1":"h2",a.createElement("header",null,a.createElement(v,{className:d},k?T:a.createElement(o.Z,{to:y},T)),a.createElement("div",{className:(0,r.Z)(f,"margin-vert--md")},a.createElement("time",{dateTime:N},w),I&&a.createElement(a.Fragment,null," \xb7 ",h(I))),a.createElement("div",{className:"avatar margin-vert--md"},B&&a.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:U},a.createElement("img",{src:B,alt:x})),a.createElement("div",{className:"avatar__intro"},x&&a.createElement(a.Fragment,null,a.createElement("div",{className:"avatar__name"},a.createElement(o.Z,{href:U},x)),a.createElement("small",{className:"avatar__subtitle"},A)))))),a.createElement("div",{className:"markdown"},a.createElement(l.Zo,{components:s.Z},p)),(C.length>0||_)&&a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[g]=k,t))},C.length>0&&a.createElement("div",{className:"col"},a.createElement("b",null,a.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),C.map((function(e){var t=e.label,n=e.permalink;return a.createElement(o.Z,{key:n,className:"margin-horiz--sm",to:n},t)}))),k&&L&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:L})),!k&&_&&a.createElement("div",{className:"col text--right"},a.createElement(o.Z,{to:E.permalink,"aria-label":"Read more about "+T},a.createElement("b",null,a.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},30513:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(54416),l=n(23779),i=n(15987);function o(e){var t=e.editUrl,n=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return a.createElement(a.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener"},a.createElement(l.Z,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):a.createElement(i.Z,{editUrl:t}))}},91148:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(22122),r=n(19756),l=n(67294),i=n(86010),o=n(51384),c=n(34397),s=n(51402),m=n(34455),u="socialBar_2nY3",d="socialLink_1As6",f="socialImage_2plZ",g="socialTitle_3JEm",v=[{title:"Youtube",imageUrl:"/img/youtube.svg",url:"https://www.youtube.com/c/iotafoundation",backgroundColor:"#18243C"},{title:"GitHub",imageUrl:"/img/github.svg",url:"https://www.github.com/iotaledger/",backgroundColor:"#24314A"},{title:"Discord",imageUrl:"/img/discord.svg",url:"https://discord.iota.org/",backgroundColor:"#303C56"},{title:"Twitter",imageUrl:"/img/twitter.svg",url:"https://www.twitter.com/iota/",backgroundColor:"#3B4862"},{title:"Reddit",imageUrl:"/img/reddit.svg",url:"https://www.reddit.com/r/iota/",backgroundColor:"#47546F"},{title:"Linkedin",imageUrl:"/img/linkedin.svg",url:"https://www.linkedin.com/company/iotafoundation/",backgroundColor:"#52607B"},{title:"Instagram",imageUrl:"/img/instagram.svg",url:"https://www.instagram.com/iotafoundation/",backgroundColor:"#5E6B87"}];function h(e){var t=e.title,n=e.imageUrl,a=e.url,r=e.backgroundColor;return l.createElement("a",{className:(0,i.Z)("padding-horiz--sm padding-vert--md",d),style:{backgroundColor:r},href:a},l.createElement("img",{className:(0,i.Z)(f),src:(0,s.Z)(n)}),l.createElement("div",{className:(0,i.Z)(g)},t))}var p=function(){return l.createElement("div",{className:(0,i.Z)(u)},v.map((function(e,t){return l.createElement(h,(0,a.Z)({key:t},e))})))},b=["to","href","label","prependBaseUrlToHref"];function E(e){var t=e.to,n=e.href,i=e.label,c=e.prependBaseUrlToHref,m=(0,r.Z)(e,b),u=(0,s.Z)(t),d=(0,s.Z)(n,{forcePrependBaseUrl:!0});return l.createElement(o.Z,(0,a.Z)({className:"footer__link-item"},n?{href:c?d:n}:{to:u},m),i)}var _=function(e){var t=e.sources,n=e.alt;return l.createElement(m.Z,{className:"footer__logo",alt:n,sources:t})};var Z=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,m=t.logo,u=void 0===m?{}:m,d={light:(0,s.Z)(u.src),dark:(0,s.Z)(u.srcDark||u.src)};return e?l.createElement(l.Fragment,null,l.createElement("footer",{className:(0,i.Z)("footer","padding--none","padding-top--xl",{"footer--dark":"dark"===e.style})},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-top--lg padding-bottom--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(E,e))}))):null)}))),(u||n)&&l.createElement("div",{className:"footer__bottom padding-top--xl padding-bottom--lg"},u&&(u.src||u.srcDark)&&l.createElement("div",null,u.href?l.createElement(o.Z,{href:u.href},l.createElement(_,{alt:u.alt,sources:d})):l.createElement(_,{alt:u.alt,sources:d})),n?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null),l.createElement(p,null))):null}},65660:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(22122),r=n(67294),l=n(86010),i=n(54416),o=n(78239),c=n(34397),s=n(6832),m={toggle:"toggle_3D-N"},u=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,l.Z)(m.toggle,m.dark),style:n},t)},d=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,l.Z)(m.toggle,m.light),style:n},t)},f=(0,r.memo)((function(e){var t=e.className,n=e.icons,a=e.checked,i=e.disabled,o=e.onChange,c=(0,r.useState)(a),s=c[0],m=c[1],u=(0,r.useState)(!1),d=u[0],f=u[1],g=(0,r.useRef)(null);return r.createElement("div",{className:(0,l.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":i}),role:"button",tabIndex:-1,onClick:function(e){var t=g.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void m(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.createElement("input",{ref:g,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:o,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function g(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,l=t.darkIconStyle,i=t.lightIcon,o=t.lightIconStyle,m=(0,s.Z)().isClient;return r.createElement(f,(0,a.Z)({disabled:!m,icons:{checked:r.createElement(u,{icon:n,style:l}),unchecked:r.createElement(d,{icon:i,style:o})}},e))}var v=n(26266),h=n(98565),p=n(74909),b=n(27213),E=n(85275),_=n(90974),Z=n(3089),k="toggle_2xs0",N="navbarHideable_1VR7",w="navbarHidden_1FmO",y="right";function C(){return(0,c.LU)().navbar.items}function I(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,v.Z)(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():a()}),[a,l]),disabled:e}}function T(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,p.Z)(t);var o=C(),s=I(),m=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,l=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:a}),i=(0,c.D9)(l),o=(0,r.useState)((function(){return!1})),s=o[0],m=o[1];(0,r.useEffect)((function(){l&&!i&&m(!0)}),[l,i]);var u=!!l;return(0,r.useEffect)((function(){u?n||m(!0):m(!1)}),[n,u]),{shown:s,hide:(0,r.useCallback)((function(){m(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(_.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&t&&r.createElement(g,{checked:s.isDarkTheme,onChange:s.toggle})),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":m.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(E.Z,(0,a.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:m.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),m.content)))}var L=function(){var e,t,n,i,s,m,u,d=(0,c.LU)().navbar,f=d.hideOnScroll,v=d.style,p=(t=(0,b.Z)(),n="mobile"===t,i=(0,r.useState)(!1),s=i[0],m=i[1],u=(0,r.useCallback)((function(){m((function(e){return!e}))}),[]),(0,r.useEffect)((function(){"desktop"===t&&m(!1)}),[t]),{shouldRender:n,toggle:u,shown:s}),L=I(),x=(0,h.Z)(f),D=x.navbarRef,S=x.isNavbarVisible,U=C(),A=U.some((function(e){return"search"===e.type})),B=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:y)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:y)}))}}(U),P=B.leftItems,R=B.rightItems;return r.createElement("nav",{ref:D,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===v,"navbar--primary":"primary"===v,"navbar-sidebar--show":p.shown},e[N]=f,e[w]=f&&!S,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},r.createElement(_.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),P.map((function(e,t){return r.createElement(E.Z,(0,a.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},R.map((function(e,t){return r.createElement(E.Z,(0,a.Z)({},e,{key:t}))})),!A&&r.createElement(o.Z,null),!L.disabled&&r.createElement(g,{className:k,checked:L.isDarkTheme,onChange:L.toggle}),(null==U?void 0:U.length)>0&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:p.toggle,onKeyDown:p.toggle},r.createElement(Z.Z,null)))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:p.toggle}),p.shouldRender&&r.createElement(T,{sidebarShown:p.shown,toggleSidebar:p.toggle}))}},78358:function(e,t,n){n.d(t,{O:function(){return v}});var a=n(22122),r=n(19756),l=n(67294),i=n(86010),o=n(51384),c=n(51402),s=n(78168),m=n(71699),u=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],g=["mobile","position"];function v(e){var t=e.activeBasePath,n=e.activeBaseRegex,i=e.to,d=e.href,f=e.label,g=e.activeClassName,v=void 0===g?"navbar__link--active":g,h=e.prependBaseUrlToHref,p=(0,r.Z)(e,u),b=(0,c.Z)(i),E=(0,c.Z)(t),_=(0,c.Z)(d,{forcePrependBaseUrl:!0}),Z=f&&d&&!(0,m.Z)(d),k="dropdown__link--active"===v;return l.createElement(o.Z,(0,a.Z)({},d?{href:h?_:d}:Object.assign({isNavLink:!0,activeClassName:v,to:b},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(E)}}:null),p),Z?l.createElement("span",null,f,l.createElement(s.Z,k&&{width:12,height:12})):f)}function h(e){var t=e.className,n=e.isDropdownItem,o=void 0!==n&&n,c=(0,r.Z)(e,d),s=l.createElement(v,(0,a.Z)({className:(0,i.Z)(o?"dropdown__link":"navbar__item navbar__link",t)},c));return o?l.createElement("li",null,s):s}function p(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,f));return l.createElement("li",{className:"menu__list-item"},l.createElement(v,(0,a.Z)({className:(0,i.Z)("menu__link",t)},n)))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(e.position,(0,r.Z)(e,g));if("category-header"===a.to){return l.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},a.label)}var i=n?p:h;return l.createElement(i,a)}},16679:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(22122),r=n(19756),l=n(67294),i=n(78358),o=n(57617),c=n(86010),s=n(34397),m=n(79861),u=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,g=e.docsPluginId,v=(0,r.Z)(e,u),h=(0,o.useActiveDocContext)(g),p=h.activeVersion,b=h.activeDoc,E=(0,s.J)(g).preferredVersion,_=(0,o.useLatestVersion)(g),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([p,E,_].filter(Boolean)),n);return l.createElement(i.Z,(0,a.Z)({exact:!0},v,{className:(0,c.Z)(v.className,(t={},t[d]=b&&b.sidebar===Z.sidebar,t)),label:null!=f?f:Z.id,to:Z.path}))}},68510:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(22122),r=n(19756),l=n(67294),i=n(78358),o=n(61142),c=n(57617),s=n(34397),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,f=e.docsPluginId,g=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,p=(0,r.Z)(e,m),b=(0,c.useActiveDocContext)(f),E=(0,c.useVersions)(f),_=(0,c.useLatestVersion)(f),Z=(0,s.J)(f),k=Z.preferredVersion,N=Z.savePreferredVersionName;var w,y=(w=E.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){N(e.name)}}})),[].concat(v,w,h)),C=null!=(t=null!=(n=b.activeVersion)?n:k)?t:_,I=d&&y?"Versions":C.label,T=d&&y?void 0:u(C).path;return y.length<=1?l.createElement(i.Z,(0,a.Z)({},p,{mobile:d,label:I,to:T,isActive:g?function(){return!1}:void 0})):l.createElement(o.Z,(0,a.Z)({},p,{mobile:d,label:I,to:T,items:y,isActive:g?function(){return!1}:void 0}))}},18384:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(22122),r=n(19756),l=n(67294),i=n(78358),o=n(57617),c=n(34397),s=["label","to","docsPluginId"];function m(e){var t,n=e.label,m=e.to,u=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,o.useActiveVersion)(u),g=(0,c.J)(u).preferredVersion,v=(0,o.useLatestVersion)(u),h=null!=(t=null!=f?f:g)?t:v,p=null!=n?n:h.label,b=null!=m?m:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return l.createElement(i.Z,(0,a.Z)({},d,{label:p,to:b}))}},61142:function(e,t,n){var a=n(22122),r=n(19756),l=n(67294),i=n(86010),o=n(34397),c=n(78358),s=n(85275),m=["items","position","className"],u=["items","className","position"],d=["mobile"];function f(e,t){return!!(0,o.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function g(e){var t,n=e.items,u=e.position,d=e.className,g=(0,r.Z)(e,m),v=(0,l.useRef)(null),h=(0,l.useRef)(null),p=(0,l.useState)(!1),b=p[0],E=p[1],_=function(e,t,n){var a=t.filter((function(e){return f(e,(0,o.be)())})),r=e;return a.length&&(r=Object.assign({},a[0],{label:e.label+" > "+a[0].label})),r}(g,n,(0,o.be)());return(0,l.useEffect)((function(){var e=function(e){v.current&&!v.current.contains(e.target)&&E(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[v]),l.createElement("div",{ref:v,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===u,"dropdown--show":b})},l.createElement(c.O,(0,a.Z)({className:(0,i.Z)("navbar__item navbar__link",d)},_,{onClick:g.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),E(!b))}}),null!=(t=g.children)?t:g.label),l.createElement("ul",{ref:h,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),E(!1);var a=v.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function v(e){var t,n=e.items,m=e.className,d=(e.position,(0,r.Z)(e,u)),g=(0,o.be)(),v=function(e,t){return e.some((function(e){return f(e,t)}))}(n,g),h=(0,o.uR)({initialState:function(){return!v}}),p=h.collapsed,b=h.toggleCollapsed,E=h.setCollapsed;return(0,l.useEffect)((function(){v&&E(!v)}),[g,v]),l.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":p})},l.createElement(c.O,(0,a.Z)({role:"button",className:(0,i.Z)("menu__link menu__link--sublist",m)},d,{onClick:function(e){e.preventDefault(),b()}}),null!=(t=d.children)?t:d.label),l.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:p},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),i=n?v:g;return l.createElement(i,a)}},85275:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(19756),r=n(67294),l=n(78358),i=n(61142),o=n(22122),c=n(4194),s=n(6832),m=n(34397),u=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function d(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,d=(0,a.Z)(e,u),f=(0,s.Z)().i18n,g=f.currentLocale,v=f.locales,h=f.localeConfigs,p=(0,m.l5)();function b(e){return h[e].label}var E=v.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:b(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===g?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),_=[].concat(n,E,l),Z=t?"Languages":b(g);return r.createElement(i.Z,(0,o.Z)({},d,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(c.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,Z)),items:_}))}var f=n(78239);function g(e){return e.mobile?null:r.createElement(f.Z,null)}var v=["type"],h={default:function(){return l.Z},localeDropdown:function(){return d},search:function(){return g},dropdown:function(){return i.Z},docsVersion:function(){return n(18384).Z},docsVersionDropdown:function(){return n(68510).Z},doc:function(){return n(16679).Z}};function p(e){var t=e.type,n=(0,a.Z)(e,v),l=function(e){var t=h[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return r.createElement(l,n)}},78239:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(34397),l=n(86010),i="toggle_10iL",o=(0,a.memo)((function(){var e=(0,r.LU)().searchMode.switchConfig,t=e.closeIcon,n=e.closeIconStyle,o=e.searchIcon,c=e.searchIconStyle,s=(0,a.useState)(!1),m=s[0],u=s[1],d=(0,a.useRef)(null),f=function(e){var t=d.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)};return a.createElement(a.Fragment,null,a.createElement("div",{className:(0,l.Z)("wiki-search",{"wiki-search--checked":m}),role:"button",tabIndex:-1,onClick:f},a.createElement("div",{className:"wiki-search-opened"},a.createElement("span",{className:(0,l.Z)(i),style:n},t)),a.createElement("div",{className:"wiki-search-closed"},a.createElement("span",{className:(0,l.Z)(i),style:c},o)),a.createElement("input",{ref:d,checked:m,type:"checkbox",className:"wiki-search-screenreader-only","aria-label":"Open and close search",onChange:f})),a.createElement("div",{className:(0,l.Z)("wiki-search-page",{"wiki-search-page--checked":m})},a.createElement("div",{className:"wiki-search-header"}),a.createElement("div",{className:"wiki-search-main"},a.createElement("div",{className:"wiki-search-bar"},a.createElement("div",{className:"wiki-search-logo"},a.createElement("span",{className:(0,l.Z)(i),style:c},o)),a.createElement("input",{className:"wiki-search-input",type:"text"})))))}))}}]);