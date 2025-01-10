"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47303"],{739804:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/sql-set-parameter","title":"SQL SET PARAMETER","description":"SQL SET PARAMETER ( objeto ; paramTipo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-set-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/sql-set-parameter","permalink":"/docs/pt/commands/sql-set-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-set-parameter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-set-parameter","title":"SQL SET PARAMETER","slug":"/commands/sql-set-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL SET OPTION","permalink":"/docs/pt/commands/sql-set-option"},"next":{"title":"START SQL SERVER","permalink":"/docs/pt/commands/start-sql-server"}}'),t=n("785893"),a=n("250065");let s={id:"sql-set-parameter",title:"SQL SET PARAMETER",slug:"/commands/sql-set-parameter",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"SQL SET PARAMETER"})," ( ",(0,t.jsx)(o.em,{children:"objeto"})," ; ",(0,t.jsx)(o.em,{children:"paramTipo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"objeto"}),(0,t.jsx)(o.td,{children:"Object"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Objeto 4D a ser usado (vari\xe1vel, array ou campo)"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"paramTipo"}),(0,t.jsx)(o.td,{children:"Integer"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Tipo de par\xe2metro"})]})]})]}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(o.p,{children:"O comando SQL SET PARAMETER permite o uso do valor de uma vari\xe1vel, array ou campo 4D nas pedidos SQL."}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Nota"}),": tamb\xe9m \xe9 poss\xedvel inserir diretamente o nome de um objeto 4D a utilizar (vari\xe1vel, array ou campo) entre os caracteres << e >> no texto do pedido (ver exemplo 1). Para maior informa\xe7\xe3o, consulte a se\xe7\xe3o ",(0,t.jsx)(o.em,{children:"Introdu\xe7\xe3o aos comandos SQL"})," ."]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["No par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"}),", passe o objeto 4D (vari\xe1vel, array ou campo) a utilizar no pedido"]}),"\n",(0,t.jsxs)(o.li,{children:["No par\xe2metro ",(0,t.jsx)(o.em,{children:"tipoParam"}),", passe o tipo SQL do par\xe2metro. Pode passar um valor ou utilizar uma das seguintes constantes, localizadas no tema \u201C",(0,t.jsx)(o.em,{children:"SQL"}),"\u201D",(0,t.jsx)(o.br,{}),"\n| Constante        | Tipo          | Valor | Coment\xe1rio                                                                                                                         |",(0,t.jsx)(o.br,{}),"\n| ---------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------- |",(0,t.jsx)(o.br,{}),"\n| SQL param in     | Inteiro longo | 1     |                                                                                                                                    |",(0,t.jsx)(o.br,{}),"\n| SQL param in out | Inteiro longo | 2     | Utiliz\xe1vel unicamente no contexto de um procedimento armazenado SQL (entrada-sa\xedda par\xe2metro definido no procedimento armazenado). |",(0,t.jsx)(o.br,{}),"\n| SQL param out    | Inteiro longo | 4     | Utiliz\xe1vel unicamente no contexto de um procedimento armazenado SQL (par\xe2metro sa\xedda definido no procedimento armazenado).         |"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["O valor do objeto 4D substitui ao caractere ",(0,t.jsx)(o.em,{children:"?"})," no pedido SQL (Sintaxe padr\xe3o). Se a solicita\xe7\xe3o contiver mais de um caractere ",(0,t.jsx)(o.em,{children:"?"}),", ser\xe3o necess\xe1rias v\xe1rias chamadas a SQL SET PARAMETER. Os valores dos objetos 4D ser\xe3o atribu\xeddos sequencialmente no pedido, de acordo com a ordem de execu\xe7\xe3o dos comandos."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Aten\xe7\xe3o:"})," Este comando se utiliza para lidar com os ",(0,t.jsx)(o.em,{children:"par\xe2metros"})," passados a peti\xe7\xe3o SQL. N\xe3o \xe9 poss\xedvel utilizar o tipo SQL param out para associar um objeto 4D ao resultado de uma peti\xe7\xe3o SQL. O resultado de uma peti\xe7\xe3o SQL se recupera, por exemplo, utilizando o par\xe2metro ",(0,t.jsx)(o.em,{children:"objAssoc"})," do comando ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/sql-execute",children:"SQL EXECUTE"})," (ver ",(0,t.jsx)(o.em,{children:"Introdu\xe7\xe3o aos comandos SQL"}),"). O comando ",(0,t.jsx)(o.strong,{children:"SQL SET PARAMETER"})," se utiliza geralmente para definir os par\xe2metros passados a peti\xe7\xe3o (SQL param in); os tipos SQL param out e SQL param in out est\xe3o reservados para ser utilizados no contexto dos procedimentos armazenados SQL que podem devolver par\xe2metros."]}),"\n",(0,t.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(o.p,{children:"Este exemplo \xe9 utilizado para executar um pedido SQL ao qual chama diretamente \xe0s vari\xe1veis 4D associadas:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0var MeuTexto : Text\n\xa0var MeuInteiroLongo : Integer\n\xa0\n\xa0SQL LOGIN("mysql";"root";"")\n\xa0SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (<>, <>)"\n\xa0For(vContador;1;10)\n\xa0\xa0\xa0\xa0MeuTexto:="Text"+String(vContador)\n\xa0\xa0\xa0\xa0MeuInteiroLongo:=vContador\n\xa0\xa0\xa0\xa0SQL EXECUTE(SQLStmt)\n\xa0\xa0\xa0\xa0SQL CANCEL LOAD\n\xa0End for\n\xa0SQL LOGOUT\n'})}),"\n",(0,t.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(o.p,{children:"O mesmo exemplo que o anterior, mas utilizando o comando SQL SET PARAMETER :"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0var MeuTexto : Text\n\xa0var MeuInteiroLongo : Integer\n\xa0\n\xa0SQL LOGIN("mysql";"root";"")\n\xa0SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (?,?)"\n\xa0For(vCounter;1;10)\n\xa0\xa0\xa0\xa0MeuTexto:="Text"+String(vContador)\n\xa0\xa0\xa0\xa0MeuInteiroLongo:=vCounter\n\xa0\xa0\xa0\xa0SQL SET PARAMETER(MyText;SQL param in)\n\xa0\xa0\xa0\xa0SQL SET PARAMETER(MyLongint;SQL param in)\n\xa0\xa0\xa0\xa0SQL EXECUTE(SQLStmt)\n\xa0\xa0\xa0\xa0SQL CANCEL LOAD\n\xa0End for\n\xa0SQL LOGOUT\n'})}),"\n",(0,t.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsx)(o.p,{children:"Se o comando tiver sido executado corretamente, a vari\xe1vel Sistema OK retorna 1. Do contr\xe1rio, retorna 0."}),"\n",(0,t.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"N\xfamero do comando"}),(0,t.jsx)(o.td,{children:"823"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Thread-seguro"}),(0,t.jsx)(o.td,{children:"\u2717"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return s}});var r=n(667294);let t={},a=r.createContext(t);function s(e){let o=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);