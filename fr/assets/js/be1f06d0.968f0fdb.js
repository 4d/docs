/*! For license information please see be1f06d0.968f0fdb.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58023],{510603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=t(474848),l=t(28453);const s={id:"vp-get-value",title:"VP Get value"},i=void 0,c={id:"ViewPro/commands/vp-get-value",title:"VP Get value",description:"VP Get value ( rangeObj Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-value",permalink:"/docs/fr/ViewPro/commands/vp-get-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-value.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-value",title:"VP Get value"},sidebar:"docs",previous:{title:"VP Get tables",permalink:"/docs/fr/ViewPro/commands/vp-get-tables"},next:{title:"VP Get values",permalink:"/docs/fr/ViewPro/commands/vp-get-values"}},d={},a=[{value:"Description",id:"Description",level:4},{value:"Objet retourn\xe9",id:"Objet-retourn\xe9",level:4},{value:"Exemple",id:"Exemple",level:4},{value:"Voir \xe9galement",id:"Voir-\xe9galement",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get value"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet plage"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objet contenant une valeur de cellule"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Get value"})," command retrieves a cell value from a designated cell range."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pass a range whose value you want to retrieve."]}),"\n",(0,r.jsx)(n.h4,{id:"Objet-retourn\xe9",children:"Objet retourn\xe9"}),"\n",(0,r.jsxs)(n.p,{children:["The object returned will contain the ",(0,r.jsx)(n.code,{children:"value"})," property, and, in case of a js date value, a ",(0,r.jsx)(n.code,{children:"time"})," property:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Object"}),(0,r.jsxs)(n.td,{children:["Value in the ",(0,r.jsx)(n.em,{children:"rangeObj"})," (except- time)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"time"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"Valeur heure (en secondes) si la valeur est du type js"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Si l'objet retourn\xe9 inclut une date ou une heure, il est trait\xe9 en tant que datetime et est compl\xe9t\xe9 comme suit :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"valeur heure - la date est compl\xe9t\xe9e comme suit : December 30, 1899 au format dd/MM/yyyy (30/12/1899)"}),"\n",(0,r.jsx)(n.li,{children:"valeur date - l'heure est compl\xe9t\xe9e comme suit : minuit au format HH:mm:ss (00:00:00)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"rangeObj"})," contains multiple cells or multiple ranges, the value of the first cell is returned. La commande retourne un objet null si la cellule est vide."]}),"\n",(0,r.jsx)(n.h4,{id:"Exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$cell:=VP Cell("ViewProArea";5;2)\n$value:=VP Get value($cell)\nIf(Value type($value.value)=Is text)\n    VP SET TEXT VALUE($cell;New object("value";Uppercase($value.value))\nEnd if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"Voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-values",children:"VP Get values"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},221020:(e,n,t)=>{var r=t(296540),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,s={},a=null,o=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:l,type:e,key:a,ref:o,props:s,_owner:c.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(296540);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);