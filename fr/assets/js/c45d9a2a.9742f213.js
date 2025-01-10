"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51429"],{634282:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-value","title":"VP Get value","description":"VP Get value ( rangeObj Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-value","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-get-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-value.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-get-value","title":"VP Get value"},"sidebar":"docs","previous":{"title":"VP Get tables","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-get-tables"},"next":{"title":"VP Get values","permalink":"/docs/fr/20-R6/ViewPro/commands/vp-get-values"}}'),l=t("785893"),s=t("250065");let i={id:"vp-get-value",title:"VP Get value"},d=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Objet retourn\xe9",id:"objet-retourn\xe9",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"VP Get value"})," ( ",(0,l.jsx)(n.em,{children:"rangeObj"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tres"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"rangeObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Objet plage"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"<-"}),(0,l.jsx)(n.td,{children:"Objet contenant une valeur de cellule"}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.code,{children:"VP Get value"})," r\xe9cup\xe8re la valeur d'une cellule depuis une plage de cellules d\xe9sign\xe9es."]}),"\n",(0,l.jsxs)(n.p,{children:["Dans ",(0,l.jsx)(n.em,{children:"rangeObj"}),", passez une plage dont vous souhaitez r\xe9cup\xe9rer la valeur."]}),"\n",(0,l.jsx)(n.h4,{id:"objet-retourn\xe9",children:"Objet retourn\xe9"}),"\n",(0,l.jsxs)(n.p,{children:["L'objet retourn\xe9 contiendra la propri\xe9t\xe9 ",(0,l.jsx)(n.code,{children:"value"})," et, dans le cas d'une valeur de date js, une propri\xe9t\xe9 ",(0,l.jsx)(n.code,{children:"time"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value"}),(0,l.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Object"}),(0,l.jsxs)(n.td,{children:["Valeur de ",(0,l.jsx)(n.em,{children:"rangeObj"})," (except\xe9e - time)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"time"}),(0,l.jsx)(n.td,{children:"Real"}),(0,l.jsx)(n.td,{children:"Valeur heure (en secondes) si la valeur est du type js"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"Si l'objet retourn\xe9 inclut une date ou une heure, il est trait\xe9 en tant que datetime et est compl\xe9t\xe9 comme suit :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"valeur heure - la date est compl\xe9t\xe9e comme suit : December 30, 1899 au format dd/MM/yyyy (30/12/1899)"}),"\n",(0,l.jsx)(n.li,{children:"valeur date - l'heure est compl\xe9t\xe9e comme suit : minuit au format HH:mm:ss (00:00:00)"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Si ",(0,l.jsx)(n.em,{children:"rangeObj"})," contient plusieurs cellules ou plusieurs plages, la valeur de la premi\xe8re cellule est retourn\xe9e. La commande retourne un objet null si la cellule est vide."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$cell:=VP Cell("ViewProArea";5;2)\n$value:=VP Get value($cell)\nIf(Value type($value.value)=Is text)\n    VP SET TEXT VALUE($cell;New object("value";Uppercase($value.value))\nEnd if\n'})}),"\n",(0,l.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-values",children:"VP Get values"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var r=t(667294);let l={},s=r.createContext(l);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);