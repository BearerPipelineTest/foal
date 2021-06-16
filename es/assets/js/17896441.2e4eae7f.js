(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7918],{3319:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(7294),r=n(6742),l=n(4973);var i=function(e){var t=e.metadata;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(r.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(r.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},s=n(2263),o=n(907),c=n(6700);function d(e){var t=e.siteTitle,n=e.versionLabel;return a.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("strong",null,n)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function m(e){var t=e.siteTitle,n=e.versionLabel;return a.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("strong",null,n)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function u(e){var t=e.versionLabel,n=e.to,i=e.onClick;return a.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:a.createElement("strong",null,a.createElement(r.Z,{to:n,onClick:i},a.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var v=function(){var e=(0,s.default)().siteConfig.title,t=(0,o.useActivePlugin)({failfast:!0}).pluginId,n=(0,c.J)(t).savePreferredVersionName,r=(0,o.useActiveVersion)(t),l=(0,o.useDocVersionSuggestions)(t),i=l.latestDocSuggestion,v=l.latestVersionSuggestion;if(!v)return a.createElement(a.Fragment,null);var p,g=null!=i?i:(p=v).docs.find((function(e){return e.id===p.mainDocId}));return a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,"current"===r.name?a.createElement(d,{siteTitle:e,versionLabel:r.label}):a.createElement(m,{siteTitle:e,versionLabel:r.label})),a.createElement("div",{className:"margin-top--md"},a.createElement(u,{versionLabel:v.label,to:g.path,onClick:function(){return n(v.name)}})))},p=n(1217),g="lastUpdatedDate_1WI_";function f(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(l.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:g},n)}}," on {date}")}function h(e){var t=e.lastUpdatedBy;return a.createElement(l.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("strong",null,t)}}," by {user}")}function b(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("div",{className:"col text--right"},a.createElement("em",null,a.createElement("small",null,a.createElement(l.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(h,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)))}var E=n(8812),_=n(6146),L=n(6010),N="docTitle_3a4h",w="docItemContainer_33ec",k="docItemCol_3FnS";var y=function(e){var t,n=e.content,r=n.metadata,l=n.frontMatter,s=l.image,c=l.keywords,d=l.hide_title,m=l.hide_table_of_contents,u=r.description,g=r.title,f=r.editUrl,h=r.lastUpdatedAt,y=r.formattedLastUpdatedAt,U=r.lastUpdatedBy,T=(0,o.useActivePlugin)({failfast:!0}).pluginId,Z=(0,o.useVersions)(T),A=(0,o.useActiveVersion)(T),C=Z.length>1,x=l.title||g;return a.createElement(a.Fragment,null,a.createElement(p.Z,{title:x,description:u,keywords:c,image:s}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,L.Z)("col",(t={},t[k]=!m,t))},a.createElement(v,null),a.createElement("div",{className:w},a.createElement("article",null,C&&a.createElement("div",null,a.createElement("span",{className:"badge badge--secondary"},"Version: ",A.label)),!d&&a.createElement("header",null,a.createElement("h1",{className:N},g)),a.createElement("div",{className:"markdown"},a.createElement(n,null))),(f||h||U)&&a.createElement("div",{className:"margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},f&&a.createElement(_.Z,{editUrl:f})),(h||U)&&a.createElement(b,{lastUpdatedAt:h,formattedLastUpdatedAt:y,lastUpdatedBy:U}))),a.createElement("div",{className:"margin-vert--lg"},a.createElement(i,{metadata:r})))),!m&&n.toc&&a.createElement("div",{className:"col col--3"},a.createElement(E.Z,{toc:n.toc}))))}},6146:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(7294),r=n(4973),l=n(2122),i=n(9756),s=n(6010),o="iconEdit_2_ui",c=["className"],d=function(e){var t=e.className,n=(0,i.Z)(e,c);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-label":"Edit page"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(d,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},8812:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(6010);var l=function(e,t,n){var r=(0,a.useState)(void 0),l=r[0],i=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var c=o[r],d=c.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));a.id===m&&(l&&l.classList.remove(t),c.classList.add(t),i(c),s=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},i="tableOfContents_rbnR";function s(){_bsa.init("custom","CEBI553Y","placement:foaltsorg",{target:"#carbon-js",template:'\n      <div id="carbonads">\n        <span\n          ><span class="carbon-wrap"\n            ><a\n              href="##statlink##"\n              class="carbon-img"\n              target="_blank"\n              rel="noopener sponsored"\n              ><img\n                src="##smallImage##"\n                alt="ads via Carbon"\n                border="0"\n                height="100"\n                width="130"\n                style="max-width: 130px" /></a\n            ><a\n              href="##statlink##"\n              class="carbon-text"\n              target="_blank"\n              rel="noopener sponsored"\n              >##description##</a\n            ></span\n          ><a\n            href="##ad_via_link##"\n            class="carbon-poweredby"\n            target="_blank"\n            rel="noopener sponsored"\n            >ads via Carbon</a\n          ></span\n        >\n      </div>\n      \n      '})}var o=!0;var c="table-of-contents__link";function d(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(d,{isChild:!0,toc:e.children}))}))):null}var m=!1;var u=function(e){var t=e.toc,n=function(){return"undefined"!=typeof window&&window.document.body.clientWidth>996};return(0,a.useEffect)((function(){n()&&!m&&(m=!0,setTimeout((function(){return m=!1}),1e3),"undefined"!=typeof _bsa&&_bsa&&(console.log("Loading ad"),s(),o||s(),o=!1))}),["undefined"!=typeof window?window.location.href:""]),l(c,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},a.createElement(d,{toc:t}),n()&&a.createElement("div",{id:"carbon-js"}))}}}]);