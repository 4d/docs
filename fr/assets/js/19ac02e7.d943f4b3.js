/*! For license information please see 19ac02e7.d943f4b3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59339],{170531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(474848),s=t(28453);const o={id:"onColumnResize",title:"On Column Resize"},i=void 0,l={id:"Events/onColumnResize",title:"On Column Resize",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                     | D\xe9finition                                                                                                                           |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onColumnResize.md",sourceDirName:"Events",slug:"/Events/onColumnResize",permalink:"/docs/fr/20/Events/onColumnResize",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonColumnResize.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onColumnResize",title:"On Column Resize"},sidebar:"docs",previous:{title:"On Column Moved",permalink:"/docs/fr/20/Events/onColumnMoved"},next:{title:"On Data Change",permalink:"/docs/fr/20/Events/onDataChange"}},d={},c=[{value:"Description",id:"Description",level:2},{value:"List Box",id:"List-Box",level:3},{value:"4D View Pro",id:"4D-View-Pro",level:3},{value:"Exemple",id:"Exemple",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,r.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"33"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})," - ",(0,r.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,r.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listboxOverview#list-box-columns",children:"Colonne de List Box"})]}),(0,r.jsx)(n.td,{children:"La largeur d'une colonne est modifi\xe9e directement par l'utilisateur ou \xe0 la suite d'un redimensionnement de la fen\xeatre de formulaire"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"Description",children:"Description"}),"\n",(0,r.jsx)(n.h3,{id:"List-Box",children:"List Box"}),"\n",(0,r.jsxs)(n.p,{children:["Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsque la largeur d'une colonne dans la list box est modifi\xe9e par un utilisateur. L'\xe9v\xe9nement est d\xe9clench\xe9 \"en direct\", c'est-\xe0-dire envoy\xe9 en continu pendant l'\xe9v\xe9nement, tant que la list box ou la colonne concern\xe9e est redimensionn\xe9e. Ce redimensionnement s'effectue manuellement par un utilisateur, ou peut se produire suite au redimensionnement de la list box et de ses colonnes avec la fen\xeatre de formulaire elle-m\xeame (que le formulaire soit redimensionn\xe9 manuellement ou \xe0 l'aide de la commande ",(0,r.jsx)(n.code,{children:"RESIZE FORM WINDOW"}),")."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,r.jsx)(n.code,{children:"On Column Resize"})," n'est pas d\xe9clench\xe9 lorsqu'une ",(0,r.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#about-the-fake-blank-column",children:"fausse colonne"})," est redimensionn\xe9e."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4D-View-Pro",children:"4D View Pro"}),"\n",(0,r.jsxs)(n.p,{children:["Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsque la largeur d'une colonne est modifi\xe9e par un utilisateur. Dans ce contexte, l'",(0,r.jsx)(n.a,{href:"/docs/fr/20/Events/overview#event-object",children:"objet \xe9v\xe9nement"})," retourn\xe9 par la commande ",(0,r.jsx)(n.code,{children:"FORM Event"})," contient :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"entier long"}),(0,r.jsx)(n.td,{children:"On Column Resize"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On Column Resize"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la zone 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la feuille de l'\xe9v\xe9nement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Plage de cellules des colonnes dont les largeurs ont chang\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"header"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:'"True" si la colonne d\'en-t\xeate de ligne (premi\xe8re colonne) est redimensionn\xe9e, sinon false'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Column Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))\n End if\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:a,props:o,_owner:l.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(296540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);