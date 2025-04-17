"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78413"],{763614:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/object-set-filter","title":"OBJECT SET FILTER","description":"OBJECT SET FILTER ( { ;} objeto ; filtroEntrada* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-filter.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-filter","permalink":"/docs/pt/20-R8/commands/object-set-filter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-filter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-filter","title":"OBJECT SET FILTER","slug":"/commands/object-set-filter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET EVENTS","permalink":"/docs/pt/20-R8/commands/object-set-events"},"next":{"title":"OBJECT SET FOCUS RECTANGLE INVISIBLE","permalink":"/docs/pt/20-R8/commands/object-set-focus-rectangle-invisible"}}'),r=n("785893"),s=n("250065");let a={id:"object-set-filter",title:"OBJECT SET FILTER",slug:"/commands/object-set-filter",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"OBJECT SET FILTER"})," ( {* ;} ",(0,r.jsx)(o.em,{children:"objeto"})," ; ",(0,r.jsx)(o.em,{children:"filtroEntrada"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"*"}),(0,r.jsx)(o.td,{children:"Operador"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"objeto"}),(0,r.jsx)(o.td,{children:"any"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Nome de objeto (se* \xe9 especificado) ou Campo ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"filtroEntrada"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Novo filtro de entrada de dados para a \xe1rea edit\xe1vel"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"OBJECT SET FILTER"})," substitui o filtro de entrada para os objetos especificados por ",(0,r.jsx)(o.em,{children:"objeto"})," por ",(0,r.jsx)(o.em,{children:"filtroEntrada"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Se passa o par\xe2metro opcional ",(0,r.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,r.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(o.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, \xe9 passada uma refer\xeancia de campo ou vari\xe1vel (campo ou vari\xe1vel objeto unicamente) ao inv\xe9s de um string.Para mais informa\xe7\xf5es sobre nomes de objetos, consulte a se\xe7\xe3o"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"OBJECT SET FILTER"})," pode ser utilizado em formul\xe1rios de entrada e di\xe1logos e pode ser aplicado aos campos e vari\xe1veis edit\xe1veis que aceitem um filtro de entrada noambiente Desenho"]}),"\n",(0,r.jsxs)(o.p,{children:["Ao passar uma string vazia em ",(0,r.jsx)(o.em,{children:"filtroEntrada"})," \xe9 eliminado o filtro de entrada atual para os objetos."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," este comando n\xe3o pode ser utilizado com campos localizados no formul\xe1rio listado de um subformul\xe1rio."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," em ",(0,r.jsx)(o.em,{children:"filtroEntrada"}),", para utilizar filtros de entrada pr\xe9-definidos utilizando a Caixa de ferramentas, coloque um prefixo no filtro de entrada, uma barra vertical (|)."]}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir define o filtro de entrada para o campo c\xf3digo postal CEP. Se a dire\xe7\xe3o \xe9 de Espanha, o filtro \xe9 definido para os c\xf3digos postais espanh\xf3is. Do contr\xe1rio, pode aceitar todo valor de entrada:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0If([Empresas]Pais ="ES")\xa0// Definir o filtro para um formato do c\xf3digo postal espanhol\n\xa0\xa0\xa0\xa0OBJECT SET FILTER([Empresas]C\xf3digo Postal;"&9###")\n\xa0Else\xa0// Definir o filtro para aceitar todo valor alfanum\xe9rico e mai\xfasculas\n\xa0\xa0\xa0\xa0OBJECT SET FILTER([Empresas]C\xf3digo Postal;"~@")\n\xa0End if\n'})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir permite unicamente a entrada das letras \u201Ca,\u201D \u201Cb,\u201D \u201Cc,\u201D ou \u201Cg\u201D em um campo de duas letras:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0OBJECT SET FILTER([Tabela]Campo ;"&"+Char(Double quote)+"a;b;c;g"+Char(Double quote)+"##")\n'})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," este exemplo define o filtro de entrada ",(0,r.jsx)(o.em,{children:'&"a;b;c;g"##'}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/object-get-filter",children:"OBJECT Get filter"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/object-set-format",children:"OBJECT SET FORMAT"})]}),"\n",(0,r.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"235"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return a}});var t=n(667294);let r={},s=t.createContext(r);function a(e){let o=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);