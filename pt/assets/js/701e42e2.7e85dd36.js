"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57519"],{173013:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/object-set-data-source","title":"OBJECT SET DATA SOURCE","description":"OBJECT SET DATA SOURCE ( { ;} objeto ; fonteDados* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-data-source.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-data-source","permalink":"/docs/pt/commands/object-set-data-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-data-source.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-data-source","title":"OBJECT SET DATA SOURCE","slug":"/commands/object-set-data-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET CORNER RADIUS","permalink":"/docs/pt/commands/object-set-corner-radius"},"next":{"title":"OBJECT SET DRAG AND DROP OPTIONS","permalink":"/docs/pt/commands/object-set-drag-and-drop-options"}}'),d=o("785893"),t=o("250065");let a={id:"object-set-data-source",title:"OBJECT SET DATA SOURCE",slug:"/commands/object-set-data-source",displayed_sidebar:"docs"},r=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"OBJECT SET DATA SOURCE"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objeto"})," ; ",(0,d.jsx)(n.em,{children:"fonteDados"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objeto"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["Nome de objeto (se * for especificado) o",(0,d.jsx)(n.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fonteDados"}),(0,d.jsx)(n.td,{children:"Pointer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Ponteiro a nova fonte de dados do objeto"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando ",(0,d.jsx)(n.strong,{children:"OBJECT SET DATA SOURCE"})," modifica a fonte de dados dos objetos designados pelos par\xe2metros ",(0,d.jsx)(n.em,{children:"objeto"})," e ",(0,d.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,d.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,d.jsx)(n.em,{children:"*"})," indica que o par\xe2metro ",(0,d.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro objeto \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel no lugar de uma cadeia (campo ou vari\xe1vel objeto unicamente)."]}),"\n",(0,d.jsx)(n.p,{children:"A fonte de dados \xe9 o campo ou a vari\xe1vel cujo valor \xe9 representado pelo objeto quando se executa o formul\xe1rio. Em modo Desenho, a fonte de dados se define na lista de propriedades, geralmente atrav\xe9s das linhas Fonte e Campo fonte (campos) ou Nome de vari\xe1vel (vari\xe1veis):"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:o(951360).Z+"",width:"508",height:"271"})}),"\n",(0,d.jsx)(n.p,{children:"A exce\xe7\xe3o dos list box (ver mais adiante), todas as fontes de dados do formul\xe1rio podem ser modificadas por este comando. \xc9 responsabilidade do desenvolvedor assegurar a consist\xeancia das mudan\xe7as realizadas."}),"\n",(0,d.jsx)(n.p,{children:"En el caso de los list box, se deben tener en cuenta los siguientes puntos:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Los cambios de fuentes de datos deben tener en cuenta el tipo de list box: por ejemplo, no es posible utilizar un campo como fuente de datos de una columna de en un list box de tipo array."}),"\n",(0,d.jsx)(n.li,{children:"Para los list box de tipo selecci\xf3n, no es posible modificar o leer la fuente de datos del objeto list box en s\xed: \u200B\u200Ben este caso, se trata de una referencia interna y no de una fuente de datos."}),"\n",(0,d.jsxs)(n.li,{children:["Este comando se utiliza en el contexto de los list box de tipo array. Para los list box de tipo selecci\xf3n, puede en vez utilizar el comando [",(0,d.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-column-formula",children:"LISTBOX SET COLUMN FORMULA"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Si este comando se aplica a una fuente de datos que no se puede editar, no hace nada."}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Mudan\xe7a da fonte de dados para uma \xe1rea de entrada:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $ptrField : Pointer\n\xa0$ptrField:=Field(3;2)\n\xa0OBJECT SET DATA SOURCE(*;"Input";$ptrField)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-column-formula",children:"LISTBOX SET COLUMN FORMULA"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/object-get-data-source",children:"OBJECT Get data source"})]}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1264"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},951360:function(e,n,o){o.d(n,{Z:function(){return s}});let s=o.p+"assets/images/pict1208291.pt-5dcb16e15e77773d0102ec347b3a3b5f.png"},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return a}});var s=o(667294);let d={},t=s.createContext(d);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);