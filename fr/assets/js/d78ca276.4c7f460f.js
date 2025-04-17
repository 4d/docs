"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48627"],{904288:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>d,contentTitle:()=>o});var l=JSON.parse('{"id":"ViewPro/commands/vp-set-values","title":"VP SET VALUES","description":"VP SET VALUES ( rangeObj Collection )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-values.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-values","permalink":"/docs/fr/20-R8/ViewPro/commands/vp-set-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-values.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-values","title":"VP SET VALUES"},"sidebar":"docs","previous":{"title":"VP SET VALUE","permalink":"/docs/fr/20-R8/ViewPro/commands/vp-set-value"},"next":{"title":"VP SET WORKBOOK OPTIONS","permalink":"/docs/fr/20-R8/ViewPro/commands/vp-set-workbook-options"}}'),t=s("785893"),r=s("250065");let i={id:"vp-set-values",title:"VP SET VALUES"},o=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET VALUES"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"valuesCol"})," : Collection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet plage"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valuesCol"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Collection de valeurs"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP SET VALUES"})," command assigns a collection of values starting at the specified cell range."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pass a range for the cell (created with ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-cell",children:(0,t.jsx)(n.code,{children:"VP Cell"})}),") whose value you want to specify. The cell defined in the ",(0,t.jsx)(n.em,{children:"rangeObj"})," is used to determine the starting point."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.em,{children:"rangeObj"})," is not a cell range, only the first cell of the range is used."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.em,{children:"rangeObj"})," includes multiple ranges, only the first cell of the first range is used."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"valuesCol"})," parameter is two-dimensional:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La collection de premier niveau contient des sous-collections de valeurs. Chaque sous-collection d\xe9finit une ligne. Passez une collection vide pour sauter une ligne."}),"\n",(0,t.jsx)(n.li,{children:"Chaque sous-collection d\xe9finit les valeurs des cellules de la ligne. Les valeurs peuvent \xeatre de type entier long, r\xe9el, bool\xe9en, texte, date, null ou objet. Si la valeur est un objet, elle peut avoir les propri\xe9t\xe9s suivantes :"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Null"}),(0,t.jsx)(n.td,{children:"Valeur dans la cellule (sauf heure)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"Valeur heure (en secondes)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$param:=New collection\n$param.push(New collection(1;2;3;False)) //first row, 4 values\n$param.push(New collection) //second row, untouched\n$param.push(New collection(4;5;Null;"hello";"world")) // third row, 5 values\n$param.push(New collection(6;7;8;9)) // fourth row, 4 values\n$param.push(New collection(Null;New object("value";Current date;"time";42))) //fifth row, 1 value\n   \nVP SET VALUES(VP Cell("ViewProArea";2;1);$param)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(215224).Z+"",width:"756",height:"270"})}),"\n",(0,t.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-get-formulas",children:"VP Get formulas"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-get-value",children:"VP Get value"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-get-values",children:"VP Get Values"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},215224:function(e,n,s){s.d(n,{Z:function(){return l}});let l=s.p+"assets/images/cmd_vpSetValues-b67ff95f1ff17766f7646ad11eff9028.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var l=s(667294);let t={},r=l.createContext(t);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);