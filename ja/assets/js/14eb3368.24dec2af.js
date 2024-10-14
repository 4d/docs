"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46969],{409596:(e,n,t)=>{t.d(n,{A:()=>v});var s=t(474848),r=(t(296540),t(634164)),i=t(23891),a=t(580696),l=t(393989),o=t(528618),c=t(115418),d=t(992469);function u(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,d.Ay)("/");return(0,s.jsx)("li",{className:"breadcrumbs__item",children:(0,s.jsx)(o.A,{"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,s.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x({children:e,href:n,isLast:t}){const r="breadcrumbs__link";return t?(0,s.jsx)("span",{className:r,itemProp:"name",children:e}):n?(0,s.jsx)(o.A,{className:r,href:n,itemProp:"item",children:(0,s.jsx)("span",{itemProp:"name",children:e})}):(0,s.jsx)("span",{className:r,children:e})}function p({children:e,active:n,index:t,addMicrodata:i}){return(0,s.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,r.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[e,(0,s.jsx)("meta",{itemProp:"position",content:String(t+1)})]})}function v(){const e=(0,a.OF)(),n=(0,l.Dt)();return e?(0,s.jsx)("nav",{className:(0,r.A)(i.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,c.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,s.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,s.jsx)(h,{}),e.map(((n,t)=>{const r=t===e.length-1,i="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,s.jsx)(p,{active:r,index:t,addMicrodata:!!i,children:(0,s.jsx)(x,{href:i,isLast:r,children:n.label})},t)}))]})}):null}},263088:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var s=t(474848),r=(t(296540),t(892341)),i=t(580696),a=t(992469),l=t(634164),o=t(528618),c=t(383477),d=t(311410),u=t(115418),m=t(61917);const h={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function b({href:e,children:n}){return(0,s.jsx)(o.A,{href:e,className:(0,l.A)("card padding--lg",h.cardContainer),children:n})}function x({href:e,icon:n,title:t,description:r}){return(0,s.jsxs)(b,{href:e,children:[(0,s.jsxs)(m.A,{as:"h2",className:(0,l.A)("text--truncate",h.cardTitle),title:t,children:[n," ",t]}),r&&(0,s.jsx)("p",{className:(0,l.A)("text--truncate",h.cardDescription),title:r,children:r})]})}function p({item:e}){const n=(0,i.Nr)(e),t=function(){const{selectMessage:e}=(0,c.W)();return n=>e(n,(0,u.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return n?(0,s.jsx)(x,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(r=e.description)&&void 0!==r?r:t(e.items.length)}):null;var r}function v({item:e}){const n=(0,d.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var t;const r=(0,i.cC)(null!==(t=e.docId)&&void 0!==t?t:void 0);var a;return(0,s.jsx)(x,{href:e.href,icon:n,title:e.label,description:null!==(a=e.description)&&void 0!==a?a:null==r?void 0:r.description})}function g({item:e}){switch(e.type){case"link":return(0,s.jsx)(v,{item:e});case"category":return(0,s.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f({className:e}){const n=(0,i.$S)();return(0,s.jsx)(j,{items:n.items,className:e})}function j(e){const{items:n,className:t}=e;if(!n)return(0,s.jsx)(f,{...e});const r=(0,i.d1)(n);return(0,s.jsx)("section",{className:(0,l.A)("row",t),children:r.map(((e,n)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(g,{item:e})},n)))})}var A=t(497054),N=t(712498),T=t(294287),L=t(409596);const _={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function k({categoryGeneratedIndex:e}){return(0,s.jsx)(r.be,{title:e.title,description:e.description,keywords:e.keywords,image:(0,a.Ay)(e.image)})}function y({categoryGeneratedIndex:e}){const n=(0,i.$S)();return(0,s.jsxs)("div",{className:_.generatedIndexPage,children:[(0,s.jsx)(N.A,{}),(0,s.jsx)(L.A,{}),(0,s.jsx)(T.A,{}),(0,s.jsxs)("header",{children:[(0,s.jsx)(m.A,{as:"h1",className:_.title,children:e.title}),e.description&&(0,s.jsx)("p",{children:e.description})]}),(0,s.jsx)("article",{className:"margin-top--lg",children:(0,s.jsx)(j,{items:n.items,className:_.list})}),(0,s.jsx)("footer",{className:"margin-top--lg",children:(0,s.jsx)(A.A,{previous:e.navigation.previous,next:e.navigation.next})})]})}function w(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k,{...e}),(0,s.jsx)(y,{...e})]})}},497054:(e,n,t)=>{t.d(n,{A:()=>o});var s=t(474848),r=(t(296540),t(115418)),i=t(634164),a=t(528618);function l(e){const{permalink:n,title:t,subLabel:r,isNext:l}=e;return(0,s.jsxs)(a.A,{className:(0,i.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[r&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,s.jsx)("div",{className:"pagination-nav__label",children:t})]})}function o(e){const{previous:n,next:t}=e;return(0,s.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,s.jsx)(l,{...n,subLabel:(0,s.jsx)(r.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,s.jsx)(l,{...t,subLabel:(0,s.jsx)(r.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},294287:(e,n,t)=>{t.d(n,{A:()=>o});var s=t(474848),r=(t(296540),t(634164)),i=t(115418),a=t(23891),l=t(13296);function o({className:e}){const n=(0,l.r)();return n.badge?(0,s.jsx)("span",{className:(0,r.A)(e,a.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,s.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},712498:(e,n,t)=>{t.d(n,{A:()=>p});var s=t(474848),r=(t(296540),t(634164)),i=t(890062),a=t(528618),l=t(115418),o=t(203654),c=t(23891),d=t(858625),u=t(13296);const m={unreleased:function({siteTitle:e,versionMetadata:n}){return(0,s.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function({siteTitle:e,versionMetadata:n}){return(0,s.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const n=m[e.versionMetadata.banner];return(0,s.jsx)(n,{...e})}function b({versionLabel:e,to:n,onClick:t}){return(0,s.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:(0,s.jsx)("b",{children:(0,s.jsx)(a.A,{to:n,onClick:t,children:(0,s.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x({className:e,versionMetadata:n}){const{siteConfig:{title:t}}=(0,i.A)(),{pluginId:a}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:l}=(0,d.g1)(a),{latestDocSuggestion:u,latestVersionSuggestion:m}=(0,o.HW)(a),x=null!=u?u:(p=m).docs.find((e=>e.id===p.mainDocId));var p;return(0,s.jsxs)("div",{className:(0,r.A)(e,c.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,s.jsx)("div",{children:(0,s.jsx)(h,{siteTitle:t,versionMetadata:n})}),(0,s.jsx)("div",{className:"margin-top--md",children:(0,s.jsx)(b,{versionLabel:m.label,to:x.path,onClick:()=>l(m.name)})})]})}function p({className:e}){const n=(0,u.r)();return n.banner?(0,s.jsx)(x,{className:e,versionMetadata:n}):null}},383477:(e,n,t)=>{t.d(n,{W:()=>c});var s=t(296540),r=t(890062);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((n=>e.includes(n)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,s.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:a(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(n,t)=>function(e,n,t){const s=e.split("|");if(1===s.length)return s[0];s.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const r=t.select(n),i=t.pluralForms.indexOf(r);return s[Math.min(i,s.length-1)]}(t,n,e)}}}}]);