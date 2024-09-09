/*! For license information please see 99d194fb.24bca256.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23603],{132970:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=s(474848),r=s(28453);const c={id:"vp-add-selection",title:"VP ADD SELECTION"},o=void 0,i={id:"ViewPro/commands/vp-add-selection",title:"VP ADD SELECTION",description:"VP ADD SELECTION ( rangeObj : Object )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-add-selection.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-add-selection",permalink:"/docs/fr/ViewPro/commands/vp-add-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-selection.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-add-selection",title:"VP ADD SELECTION"},sidebar:"docs",previous:{title:"VP ADD RANGE NAME",permalink:"/docs/fr/ViewPro/commands/vp-add-range-name"},next:{title:"VP ADD SHEET",permalink:"/docs/fr/ViewPro/commands/vp-add-sheet"}},l={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP ADD SELECTION"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet plage"}),(0,t.jsx)(n.td,{})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"VP ADD SELECTION"})," ajoute les cellules sp\xe9cifi\xe9es aux cellules actuellement s\xe9lectionn\xe9es."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"rangeObj"}),", passez un objet plage de plusieurs cellules \xe0 ajouter \xe0 la s\xe9lection courante."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"La cellule active n'est pas modifi\xe9e."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Les cellules s\xe9lectionn\xe9es sont les suivantes :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(82432).A+"",width:"552",height:"362"})}),"\n",(0,t.jsx)(n.p,{children:"Le code suivant ajoutera des cellules \xe0 votre s\xe9lection :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$currentSelection:=VP Cells("myVPArea";3;4;2;3)\nVP ADD SELECTION($currentSelection)\n'})}),"\n",(0,t.jsx)(n.p,{children:"R\xe9sultat:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(505307).A+"",width:"552",height:"358"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var t=s(296540),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,c={},d=null,a=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,t)&&!l.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:r,type:e,key:d,ref:a,props:c,_owner:i.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},474848:(e,n,s)=>{e.exports=s(221020)},82432:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/cmd_vpAddSelection1-a7868594e656fbab99c06115645b4ad1.PNG"},505307:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/cmd_vpAddSelection2-27e4c536e5f87f2cf3e32241e3668bf7.PNG"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(296540);const r={},c=t.createContext(r);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);