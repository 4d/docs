"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27516],{437314:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var r=t(474848),l=t(28453);const s={id:"vp-get-value",title:"VP Get value"},d=void 0,i={id:"ViewPro/commands/vp-get-value",title:"VP Get value",description:"VP Get value ( rangeObj Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-value",permalink:"/docs/fr/ViewPro/commands/vp-get-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-value.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-value",title:"VP Get value"},sidebar:"docs",previous:{title:"VP Get tables",permalink:"/docs/fr/ViewPro/commands/vp-get-tables"},next:{title:"VP Get values",permalink:"/docs/fr/ViewPro/commands/vp-get-values"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Objet retourn\xe9",id:"objet-retourn\xe9",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get value"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet plage"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objet contenant une valeur de cellule"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"VP Get value"})," r\xe9cup\xe8re la valeur d'une cellule depuis une plage de cellules d\xe9sign\xe9es."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"rangeObj"}),", passez une plage dont vous souhaitez r\xe9cup\xe9rer la valeur."]}),"\n",(0,r.jsx)(n.h4,{id:"objet-retourn\xe9",children:"Objet retourn\xe9"}),"\n",(0,r.jsxs)(n.p,{children:["L'objet retourn\xe9 contiendra la propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:"value"})," et, dans le cas d'une valeur de date js, une propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:"time"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Object"}),(0,r.jsxs)(n.td,{children:["Valeur de ",(0,r.jsx)(n.em,{children:"rangeObj"})," (except\xe9e - time)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"time"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"Valeur heure (en secondes) si la valeur est du type js"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Si l'objet retourn\xe9 inclut une date ou une heure, il est trait\xe9 en tant que datetime et est compl\xe9t\xe9 comme suit :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"valeur heure - la date est compl\xe9t\xe9e comme suit : December 30, 1899 au format dd/MM/yyyy (30/12/1899)"}),"\n",(0,r.jsx)(n.li,{children:"valeur date - l'heure est compl\xe9t\xe9e comme suit : minuit au format HH:mm:ss (00:00:00)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"rangeObj"})," contient plusieurs cellules ou plusieurs plages, la valeur de la premi\xe8re cellule est retourn\xe9e. La commande retourne un objet null si la cellule est vide."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$cell:=VP Cell("ViewProArea";5;2)\n$value:=VP Get value($cell)\nIf(Value type($value.value)=Is text)\n    VP SET TEXT VALUE($cell;New object("value";Uppercase($value.value))\nEnd if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-values",children:"VP Get values"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var r=t(296540);const l={},s=r.createContext(l);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);