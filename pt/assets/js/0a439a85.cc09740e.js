"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89184"],{334984:function(e,a,n){n.r(a),n.d(a,{metadata:()=>o,contentTitle:()=>s,default:()=>m,assets:()=>r,toc:()=>c,frontMatter:()=>t});var o=JSON.parse('{"id":"commands-legacy/get-database-localization","title":"Get database localization","description":"Get database localization {( {;}{*} )} : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-database-localization.md","sourceDirName":"commands-legacy","slug":"/commands/get-database-localization","permalink":"/docs/pt/commands/get-database-localization","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-database-localization.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-database-localization","title":"Get database localization","slug":"/commands/get-database-localization","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get 4D folder","permalink":"/docs/pt/commands/get-4d-folder"},"next":{"title":"Get database parameter","permalink":"/docs/pt/commands/get-database-parameter"}}'),d=n("785893"),i=n("250065");let t={id:"get-database-localization",title:"Get database localization",slug:"/commands/get-database-localization",displayed_sidebar:"docs"},s=void 0,r={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let a={a:"a",br:"br",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.strong,{children:"Get database localization"})," {( {",(0,d.jsx)(a.em,{children:"tipoIdioma"}),"}{;}{*} )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(a.table,{children:[(0,d.jsx)(a.thead,{children:(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.th,{children:"Par\xe2metro"}),(0,d.jsx)(a.th,{children:"Tipo"}),(0,d.jsx)(a.th,{}),(0,d.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(a.tbody,{children:[(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"tipoIdioma"}),(0,d.jsx)(a.td,{children:"Integer"}),(0,d.jsx)(a.td,{children:"\u2192"}),(0,d.jsx)(a.td,{children:"Tipo de idioma"})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"*"}),(0,d.jsx)(a.td,{children:"Operador"}),(0,d.jsx)(a.td,{children:"\u2192"}),(0,d.jsx)(a.td,{children:"Retorna informa\xe7\xe3o sobre banco de dados host"})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"Resultado"}),(0,d.jsx)(a.td,{children:"Text"}),(0,d.jsx)(a.td,{children:"\u2190"}),(0,d.jsx)(a.td,{children:"Idioma atual do banco"})]})]})]}),"\n",(0,d.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(a.p,{children:["O comando Get database localization [#descv] retorna o idioma padr\xe3o ou a linguagem do banco de dados especificado pelo ",(0,d.jsx)(a.em,{children:"tipoLinguagem"}),', expresso no padr\xe3o definido pela RFC 3066. [#descv] Normalmente, o comando retorna "en" para Ingl\xeas, "es" para o espanhol, etc Para mais informa\xe7\xf5es sobre esta norma e os valores retornados por este comando, consulte o manual de refer\xeancia de design.']}),"\n",(0,d.jsxs)(a.p,{children:["Diversas configura\xe7\xf5es de idioma podem ser usados simultaneamente no aplicativo. Para designar a configura\xe7\xe3o a ser obtida, em ",(0,d.jsx)(a.em,{children:"tipoLinguagem"})," voc\xea pode passar uma das seguintes constantes, encontrada no tema ",(0,d.jsx)(a.em,{children:"Ambiente 4D"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(a.table,{children:[(0,d.jsx)(a.thead,{children:(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.th,{children:"Constante"}),(0,d.jsx)(a.th,{children:"Tipo"}),(0,d.jsx)(a.th,{children:"Valor"}),(0,d.jsx)(a.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(a.tbody,{children:[(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"Current localization"}),(0,d.jsx)(a.td,{children:"Inteiro longo"}),(0,d.jsx)(a.td,{children:"1"}),(0,d.jsxs)(a.td,{children:["Linguagem atual da aplica\xe7\xe3o: linguagem padr\xe3o ou linguagem definida atrav\xe9s dos comandos ",(0,d.jsx)(a.em,{children:"SET DATABASE LOCALIZATION"}),"."]})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"Default localization"}),(0,d.jsx)(a.td,{children:"Inteiro longo"}),(0,d.jsx)(a.td,{children:"0"}),(0,d.jsx)(a.td,{children:"Linguagem determinada automaticamente por 4D no in\xedcio de acordo com a pasta Resources e o ambiente de sistema (n\xe3o modific\xe1vel)."})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"Internal 4D localization"}),(0,d.jsx)(a.td,{children:"Inteiro longo"}),(0,d.jsx)(a.td,{children:"3"}),(0,d.jsx)(a.td,{children:"Linguagem usada por 4D para ordenar e comparar textos (definido nas Prefer\xeancias da aplica\xe7\xe3o)."})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"User system localization"}),(0,d.jsx)(a.td,{children:"Inteiro longo"}),(0,d.jsx)(a.td,{children:"2"}),(0,d.jsx)(a.td,{children:"Linguagem definida pelo usu\xe1rio atual do sistema."})]})]})]}),"\n",(0,d.jsxs)(a.p,{children:["Por padr\xe3o, se voc\xea omitir o par\xe2metro ",(0,d.jsx)(a.em,{children:"tipoIdioma"}),", o comando retorna o idioma padr\xe3o (0)."]}),"\n",(0,d.jsxs)(a.p,{children:["O par\xe2metro opcional ",(0,d.jsx)(a.em,{children:"*"})," \xe9 \xfatil no caso de uma arquitetura que utiliza componentes: pode ser utilizado para determinar o banco de dados (local ou componente) para o qual quer averiguar o idioma."]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:["Quando chamar ao comando desde um componente:\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:["Se passar o pa\xe2\xe1metro ",(0,d.jsx)(a.em,{children:"*"}),", o comando devolve a configura\xe7\xe3o de idioma do banco de dados local."]}),"\n",(0,d.jsxs)(a.li,{children:["Se n\xe3o passar o par\xe2metro ",(0,d.jsx)(a.em,{children:"*"}),", o comando devolve a configura\xe7\xe3o de idioma do banco de dados componente."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(a.p,{children:["Quando chamar ao comando desde um m\xe9todo do banco de dados local, sempre devolve a configura\xe7\xe3o de idioma do banco de dados local (",(0,d.jsx)(a.em,{children:"*"})," se ignora)."]}),"\n",(0,d.jsx)(a.p,{children:"O idioma atual do banco de dados pode ser usada para determinar a pasta. lproj onde o programa ir\xe1 procurar os itens localizados do banco de dados. 4D determina automaticamente a linguagem corrente na inicializa\xe7\xe3o do banco de dados de acordo com o conte\xfado da pasta de  e do ambiente do sistema. Como funciona: 4D carrega a primeira pasta .lproj do banco de dados que corresponde a refer\xeancia do idioma, com a seguinte ordem de prioridade:"}),"\n",(0,d.jsxs)(a.ol,{children:["\n",(0,d.jsx)(a.li,{children:"Idioma do Sistema (no Mac OS, v\xe1rios idiomas podem ser definidos por ordem de prefer\xeancia, 4D usa essa configura\xe7\xe3o )."}),"\n",(0,d.jsx)(a.li,{children:"Idioma da aplica\xe7\xe3o 4D."}),"\n",(0,d.jsx)(a.li,{children:"Ingl\xeas"}),"\n",(0,d.jsx)(a.li,{children:"Primeiro idioma encontrado na pasta ."}),"\n"]}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.strong,{children:"Nota:"})," Se o banco n\xe3o tem uma pasta .lproj, 4D aplica a seguinte ordem de prioridade: 1. Idioma do Sistema, 2. Ingl\xeas (caso o idioma do sistema n\xe3o possa ser identificado)."]}),"\n",(0,d.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/docs/pt/commands/localized-document-path",children:"Localized document path"}),(0,d.jsx)(a.br,{}),"\n",(0,d.jsx)(a.a,{href:"/docs/pt/commands/set-database-localization",children:"SET DATABASE LOCALIZATION"})]})]})}function m(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return s},a:function(){return t}});var o=n(667294);let d={},i=o.createContext(d);function t(e){let a=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),o.createElement(i.Provider,{value:a},e.children)}}}]);