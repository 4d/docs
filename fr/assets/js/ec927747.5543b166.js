"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34311"],{626691:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-formulas","title":"VP Get formulas","description":"VP Get formulas ( rangeObj Collection","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-get-formulas.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-formulas","permalink":"/docs/fr/ViewPro/commands/vp-get-formulas","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-formulas.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-get-formulas","title":"VP Get formulas"},"sidebar":"docs","previous":{"title":"VP Get formula by name","permalink":"/docs/fr/ViewPro/commands/vp-get-formula-by-name"},"next":{"title":"VP Get frozen panes","permalink":"/docs/fr/ViewPro/commands/vp-get-frozen-panes"}}'),t=r("785893"),l=r("250065");let o={id:"vp-get-formulas",title:"VP Get formulas"},i=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get formulas"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet plage"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Collection de valeurs d'une formule"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP Get formulas"})," command retrieves the formulas from a designated ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pass a range whose formulas you want to retrieve. If ",(0,t.jsx)(n.em,{children:"rangeObj"})," designates multiple ranges, the formula of the first range is returned. If ",(0,t.jsx)(n.em,{children:"rangeObj"})," does not contain any formulas, the command returns an empty string."]}),"\n",(0,t.jsx)(n.p,{children:"La collection retourn\xe9e est bidemensionnelle :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La collection de premier niveau contient des sous-collections de formules. Chaque sous-collection repr\xe9sente une ligne."}),"\n",(0,t.jsx)(n.li,{children:"Chaque sous-collection d\xe9finit les valeurs des cellules de la ligne. Les valeurs sont des \xe9l\xe9ments textuels contenant les formules des cellules."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez r\xe9cup\xe9rer les formules des colonnes Sum et Average de ce document :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(392085).Z+"",width:"521",height:"147"})}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez utiliser ce code :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))\n//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]\n//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]\n//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-formula",children:"VP Get formula"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-values",children:"VP Get values"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},392085:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/cmd_vpGetFormulas-75332305b21fbedadcd2ba342151d16a.PNG"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var s=r(667294);let t={},l=s.createContext(t);function o(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);