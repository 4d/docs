"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99892"],{275577:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/object-get-subform","title":"OBJECT GET SUBFORM","description":"OBJECT GET SUBFORM ( { ;} objeto ; pontTabela ; subFormDet {; subFormList*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-subform.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-subform","permalink":"/docs/pt/commands/object-get-subform","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-subform.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-subform","title":"OBJECT GET SUBFORM","slug":"/commands/object-get-subform","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get style sheet","permalink":"/docs/pt/commands/object-get-style-sheet"},"next":{"title":"OBJECT GET SUBFORM CONTAINER SIZE","permalink":"/docs/pt/commands/object-get-subform-container-size"}}'),s=n("785893"),t=n("250065");let i={id:"object-get-subform",title:"OBJECT GET SUBFORM",slug:"/commands/object-get-subform",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let o={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"OBJECT GET SUBFORM"})," ( {* ;} ",(0,s.jsx)(o.em,{children:"objeto"})," ; ",(0,s.jsx)(o.em,{children:"pontTabela"})," ; ",(0,s.jsx)(o.em,{children:"subFormDet"})," {; ",(0,s.jsx)(o.em,{children:"subFormList"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Se especificado, objeto \xe9 um nome de objeto(cadeia)Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objeto"}),(0,s.jsx)(o.td,{children:"any"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome de objeto (se especificado *) ou Vari\xe1vel (se omitido *)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"pontTable"}),(0,s.jsx)(o.td,{children:"Table"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Ponteiro \xe0 tabela do formul\xe1rio"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"subFormDet"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Nome do formul\xe1rio detalhado do sub-formul\xe1rio"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"subFormList"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Nome do formul\xe1rio listado do sub-formul\xe1rio (formul\xe1rio tabela)"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"OBJECT GET SUBFORM"})," obt\xe9m os nomes dele ou dos formul\xe1rio(s) associado(s) ao objeto sub-formul\xe1rio designado pelos par\xe2metros ",(0,s.jsx)(o.em,{children:"objeto"})," e ",(0,s.jsx)(o.em,{children:"*"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Se passa o par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se n\xe3o passa este par\xe2metro, isto indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, se passa uma referencia de vari\xe1vel em lugar de uma cadeia."]}),"\n",(0,s.jsxs)(o.p,{children:["No par\xe2metro ",(0,s.jsx)(o.em,{children:"pontTabela"}),", o comando devolve um ponteiro \xe0 tabela dele ou dos formul\xe1rio(s) utilizado(s). Se o sub-formul\xe1rio utiliza um formul\xe1rio projeto, o par\xe2metro cont\xe9m ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/is-nil-pointer",children:"Is nil pointer"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["No par\xe2metro ",(0,s.jsx)(o.em,{children:"subFormDet"}),", e (opcionalmente) subFormList ,o comando devolve:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"o nome de formul\xe1rio se o subformul\xe1rio tiver sido criado no editor formul\xe1rio 4D"}),"\n",(0,s.jsx)(o.li,{children:'o atributo de subformul\xe1rio "nome" se o subformul\xe1rio tiver sido criado de um arquivo json ou um objeto 4D.'}),"\n",(0,s.jsx)(o.li,{children:'Em ambos os casos, se o atributo "nome" for indefinido, o comando vai retornar:'}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"para um arquivo json, o nome do arquivo json (sem extens\xe3o)"}),"\n",(0,s.jsx)(o.li,{children:'para um objeto "sem titulo"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Se n\xe3o houver formul\xe1rio lista, uma string vazia \xe9 devolvida no par\xe2metro ",(0,s.jsx)(o.em,{children:"subFormList"}),","]}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-get-subform-container-size",children:"OBJECT GET SUBFORM CONTAINER SIZE"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-set-subform",children:"OBJECT SET SUBFORM"})]}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1139"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return i}});var r=n(667294);let s={},t=r.createContext(s);function i(e){let o=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);