/*! For license information please see f9bcc6c7.48261001.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7864],{96694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(474848),s=t(28453);const i={id:"vp-set-row-attributes",title:"VP SET ROW ATTRIBUTES"},d=void 0,o={id:"ViewPro/commands/vp-set-row-attributes",title:"VP SET ROW ATTRIBUTES",description:"VP SET ROW ATTRIBUTES ( rangeObj Object  )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-set-row-attributes.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-row-attributes",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-row-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-row-attributes.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-row-attributes",title:"VP SET ROW ATTRIBUTES"},sidebar:"docs",previous:{title:"VP SET PRINT INFO",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-print-info"},next:{title:"VP SET ROW COUNT",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-row-count"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET ROW ATTRIBUTES"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(n.em,{children:"propertyObj"})," : Object  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Plage de lignes"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"propertyObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet contenant des propri\xe9t\xe9s de lignes"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET ROW ATTRIBUTES"})," command applies the attributes defined in the ",(0,r.jsx)(n.em,{children:"propertyObj"})," to the rows in the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pass an object containing a range. Si la plage contient des colonnes et des lignes, les attributs s'appliquent uniquement aux lignes."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"propertyObj"})," parameter lets you specify the attributes to apply to the rows in the ",(0,r.jsx)(n.em,{children:"rangeObj"}),". Ces attributs sont :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"height"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Hauteur de la ligne exprim\xe9e en pixels"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pageBreak"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Vrai pour ins\xe9rer un saut de page avant la premi\xe8re ligne de la plage, sinon faux"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"visible"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Vrai si la ligne est visible, sinon faux"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resizable"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Vrai si la ligne peut \xeatre redimensionn\xe9e, sinon faux"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"header"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Texte de l'en-t\xeate de la ligne"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Pour modifier la taille de la deuxi\xe8me ligne et d\xe9finir l'en-t\xeate, saisissez le code suivant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $row; $properties : Object\n \n$row:=VP Row("ViewProArea";1)\n$properties:=New object("height";75;"header";"June")\n \nVP SET ROW ATTRIBUTES($row;$properties)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(701038).A+"",width:"555",height:"131"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-get-row-attributes",children:"VP Get row attributes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-get-column-attributes",children:"VP get column attributes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:a,props:i,_owner:o.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},701038:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/cmd_vpSetRowAttributes-4a46d2daac9f9c643381a86535798f2a.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(296540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);