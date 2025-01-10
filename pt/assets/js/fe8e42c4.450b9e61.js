"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76974"],{681439:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>i});var l=JSON.parse('{"id":"ViewPro/commands/vp-set-values","title":"VP SET VALUES","description":"VP SET VALUES ( rangeObj Collection )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-values.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-values","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-set-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-values.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-set-values","title":"VP SET VALUES"},"sidebar":"docs","previous":{"title":"VP SET VALUE","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-set-value"},"next":{"title":"VP SET WORKBOOK OPTIONS","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-set-workbook-options"}}'),t=s("785893"),r=s("250065");let o={id:"vp-set-values",title:"VP SET VALUES"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function d(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET VALUES"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"valuesCol"})," : Collection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto intervalo"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valuesCol"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Cole\xe7\xe3o de valores"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP SET VALUES"})," command assigns a collection of values starting at the specified cell range."]}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"rangeObj"}),", passe um intervalo para a c\xe9lula (criada com ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-cell",children:(0,t.jsx)(n.code,{children:"VP Cell"})}),") cujo valor voc\xea deseja especificar. The cell defined in the ",(0,t.jsx)(n.em,{children:"rangeObj"})," is used to determine the starting point."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.em,{children:"rangeObj"})," is not a cell range, only the first cell of the range is used."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.em,{children:"rangeObj"})," includes multiple ranges, only the first cell of the first range is used."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["O par\xe2metro ",(0,t.jsx)(n.em,{children:"valuesCol"})," \xe9 bidimensional:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A cole\xe7\xe3o de primeiro n\xedvel cont\xe9m subcole\xe7\xf5es de valores. Cada subcolec\xe7\xe3o define uma linha. Passa uma cole\xe7\xe3o vazia para saltar uma linha."}),"\n",(0,t.jsx)(n.li,{children:"Cada subcole\xe7\xe3o define os valores das c\xe9lulas para a linha. Os valores podem ser Integer, Real, Boolean, Text, Date, Null ou Object. Se o valor for um objeto, pode ter as seguintes propriedades:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Null"}),(0,t.jsx)(n.td,{children:"Valor da c\xe9lula (exceto - time)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"Valor hora (em segundos)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$param:=New collection\n$param.push(New collection(1;2;3;False)) //first row, 4 values\n$param.push(New collection) //second row, untouched\n$param.push(New collection(4;5;Null;"hello";"world")) // third row, 5 values\n$param.push(New collection(6;7;8;9)) // fourth row, 4 values\n$param.push(New collection(Null;New object("value";Current date;"time";42))) //fifth row, 1 value\n   \nVP SET VALUES(VP Cell("ViewProArea";2;1);$param)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(41394).Z+"",width:"756",height:"270"})}),"\n",(0,t.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-get-formulas",children:"VP Get formulas"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-get-value",children:"VP Get value"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-get-values",children:"VP Get Values"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},41394:function(e,n,s){s.d(n,{Z:function(){return l}});let l=s.p+"assets/images/cmd_vpSetValues-b67ff95f1ff17766f7646ad11eff9028.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var l=s(667294);let t={},r=l.createContext(t);function o(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);