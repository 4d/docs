"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14203"],{794126:function(e,a,o){o.r(a),o.d(a,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/sql-execute","title":"SQL EXECUTE","description":"SQL EXECUTE ( instrucaoSQL {; objAssoc}{; objAssoc2 ; ... ; objAssocN} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/sql-execute.md","sourceDirName":"commands-legacy","slug":"/commands/sql-execute","permalink":"/docs/pt/commands/sql-execute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-execute.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"sql-execute","title":"SQL EXECUTE","slug":"/commands/sql-execute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL End selection","permalink":"/docs/pt/commands/sql-end-selection"},"next":{"title":"SQL EXECUTE SCRIPT","permalink":"/docs/pt/commands/sql-execute-script"}}'),n=o("785893"),r=o("250065");let d={id:"sql-execute",title:"SQL EXECUTE",slug:"/commands/sql-execute",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Exemplo 5",id:"exemplo-5",level:2},{value:"Exemplo 6",id:"exemplo-6",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"SQL EXECUTE"})," ( ",(0,n.jsx)(a.em,{children:"instrucaoSQL"})," {; ",(0,n.jsx)(a.em,{children:"objAssoc"}),"}{; ",(0,n.jsx)(a.em,{children:"objAssoc2"})," ; ... ; ",(0,n.jsx)(a.em,{children:"objAssocN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe2metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"instrucaoSQL"}),(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Comando SQL a executar"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"objAssoc"}),(0,n.jsx)(a.td,{children:"Variable, Field"}),(0,n.jsx)(a.td,{children:"\u2190"}),(0,n.jsx)(a.td,{children:"Recebe resultado (se necess\xe1rio)"})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(a.p,{children:"O comando SQL EXECUTE \xe9 utilizado para executar um comando SQL e associar o resultado a objetos 4D (arrays, vari\xe1veis ou campos)."}),"\n",(0,n.jsx)(a.p,{children:"Para que o comando possa ser executado, uma conex\xe3o v\xe1lida precisa ser especificada no processo atual."}),"\n",(0,n.jsxs)(a.p,{children:["O par\xe2metro ",(0,n.jsx)(a.em,{children:"instrucaoSQL"})," contem o comando SQL a executar. ",(0,n.jsx)(a.em,{children:"objAssoc"})," recebe os resultados. As vari\xe1veis est\xe3o associadas na ordem de sequ\xeancia da coluna, o que significa que as colunas restantes s\xe3o ignoradas."]}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["O comando suporta at\xe9 127 par\xe2metros ",(0,n.jsx)(a.em,{children:"boundObj"}),"."]})}),"\n",(0,n.jsxs)(a.p,{children:["Se os campos 4D s\xe3o passados como par\xe2metros em ",(0,n.jsx)(a.em,{children:"objAssoc"}),", o comando criar\xe1 registros e os guardar\xe1 automaticamente. Os campos 4D devem vir da mesma tabela (n\xe3o \xe9 poss\xedvel passar um campo da tabela 1 e um campo da tabela 2 na mesma chamada). Se forem passados campos de diferentes tabelas, um erro \xe9 gerado."]}),"\n",(0,n.jsxs)(a.p,{children:["Aten\xe7\xe3o: Quando passe os campos 4D nos par\xe2metros ",(0,n.jsx)(a.em,{children:"objAssoc"})," e execute o comando ",(0,n.jsx)(a.em,{children:"SELECT"}),", sempre s\xe3o os dados da fonte 4D remota os que se modificam. Se voc\xea quer recuperar dados de uma fonte remota localmente, deve utilizar arrays locais intermedi\xe1rios e chamar ao comando ",(0,n.jsx)(a.em,{children:"INSERT"})," (ver o exemplo 6)."]}),"\n",(0,n.jsxs)(a.p,{children:["Se passa arrays 4D nos par\xe2metros ",(0,n.jsx)(a.em,{children:"objAssoc"}),", \xe9 recomend\xe1vel declarar antes de chamar o comando com o objetivo de controlar o tipo de dados processados. Os arrays s\xe3o redimensionados automaticamente quando for necess\xe1rio."]}),"\n",(0,n.jsx)(a.p,{children:"No caso de uma vari\xe1vel 4D, apenas um registro \xe9 recuperado a cada vez. Os outros resultados s\xe3o ignorados.."}),"\n",(0,n.jsxs)(a.p,{children:["Nota: Para maior informa\xe7\xe3o sobre o referenciado das express\xf5es 4D em pesquisas SQL, consulte a se\xe7\xe3o ",(0,n.jsx)(a.em,{children:"Introdu\xe7\xe3o aos comandos SQL"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(a.p,{children:"Neste exemplo, obteremos a coluna ename da tabela emp da fonte de dados externos. O resultado \xe9 armazenado no campo 4D [Empregados]Nome. Os registros 4D s\xe3o criados automaticamente:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:' SQLStmt:="SELECT ename FROM emp"\n SQL EXECUTE(SQLStmt;[Empregados]Nome)\n SQL LOAD RECORD(SQL all records)\n'})}),"\n",(0,n.jsx)(a.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(a.p,{children:"Para controlar a cria\xe7\xe3o de registros, \xe9 poss\xedvel incluir o c\xf3digo numa transa\xe7\xe3o e confirm\xe1-la unicamente se a opera\xe7\xe3o teste for satisfat\xf3ria:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:' SQL LOGIN("mysql";"root";"")\n SQLStmt:="SELECT campo _alfa FROM ap_Tabela_Testea"\n START TRANSACTION\n SQL EXECUTE(SQLStmt;[Tabela 2]Campo1)\n While(Not(SQL End selection))\n    SQL LOAD RECORD\n    ... //Escrever o c\xf3digo de valida\xe7\xe3o de dados aqui\n End while\n VALIDATE TRANSACTION //Valida\xe7\xe3o da transa\xe7\xe3o\n'})}),"\n",(0,n.jsx)(a.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,n.jsxs)(a.p,{children:["Neste exemplo, queremos obter a coluna ename da tabela emp da fonte de dados externos. O resultado ser\xe1 armazenado em um array ",(0,n.jsx)(a.em,{children:"Nome"}),". Obtemos os registros de 10 em 10."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:' ARRAY STRING(30;Nome;20)\n SQLStmt:="SELECT ename FROM emp"\n SQL EXECUTE(SQLStmt;Nome)\n While(Not(SQL End selection))\n    SQL LOAD RECORD(10)\n End while\n'})}),"\n",(0,n.jsx)(a.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,n.jsxs)(a.p,{children:["Neste exemplo, queremos obter as colunas ename e job da tabela emp para um ID especifico ID (cl\xe1usula WHERE) da fonte de dados externa. O resultado \xe9 armazena nas vari\xe1veis 4D ",(0,n.jsx)(a.em,{children:"vNome"})," e ",(0,n.jsx)(a.em,{children:"vJob"}),". S\xf3 se recupera o primeiro registro."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:' SQLStmt:="SELECT ename, job FROM emp WHERE id = 3"\n SQL EXECUTE(SQLStmt;vNome;vJob)\n SQL LOAD RECORD\n'})}),"\n",(0,n.jsx)(a.h2,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,n.jsx)(a.p,{children:"Neste exemplo, queremos obter a coluna Campo_Blob da tabela Test na fonte de dados. O resultado \xe9 armazenado em uma vari\xe1vel BLOB cujo valor \xe9 atualizado cada vez que um registro for carregado."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:' var MeuBlob : Blob\n SQL LOGIN\n SQL EXECUTE("SELECT Campo_Blob FROM Test";MeuBlob)\n While(Not(SQL End selection))\n  //Buscamos nos resultados\n    SQL LOAD RECORD\n  //O valor de MeuBlob \xe9 atualizado a cada chamada\n'})}),"\n",(0,n.jsx)(a.h2,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,n.jsx)(a.p,{children:"Para recuperar dados localmente de um banco de dados remoto 4D server onde est\xe1 armazenado. Para fazer isso, deve usar arrays intermedi\xe1rios:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'  // Log in ao banco de dados remoto\n SQL LOGIN("IP:192.168.18.15:19812";"user";"password";*)\n If(OK=1)\n  // Come\xe7ando daqui todos os SQL requests ser\xe3o feitas no banco de dados remoto\n    var $LastName_value : Text // 4D variable usada em search statement\n    ARRAY TEXT($a_LastName;0) // Armazenamento Tempor\xe1rio dos valores remotos para LastName\n    ARRAY TEXT($a_FirstName;0) // Armazenamento tempor\xe1rio dos valores remotos para FirstName\n    var $UseSQL : Boolean //Escolha dos modos para armazenamento local de dados do banco de dados remoto\n  // (demo only)\n \n    $LastName_value:="Smith" // Initializa o 4D variable\n \n  // Associa o 4D $LastName_value vari\xe1vel com o primeiro  "?" em SQL request\n    SQL SET PARAMETER($LastName_value;SQL param in)\n \n  // Da tabela remota PERSONS, recupera os valores dos campos LastName e  FirstName\n  // onde "LastName = Smith" e armazena-as em arrays $a_LastName e $a_FirstName\n    SQL EXECUTE("SELECT LastName, FirstName FROM PERSONS WHERE LastName = ?";$a_LastName;$a_FirstName)\n    If(Not(SQL End selection)) // Se ao menos um registro for encontrado\n \n       SQL LOAD RECORD(SQL all records) // Carrega todos os registros\n \n       $UseSQL:=True // Escolhe o modo para integrar os dados (s\xf3 demo)\n \n       If($UseSQL) // Usa SQL requests\n          SQL LOGOUT // Log out do banco de dados remoto\n          SQL LOGIN(SQL_INTERNAL;"user";"password") // Log in ao banco de dados local\n  // A partir daqui todas as requisi\xe7\xf5es  SQL s\xe3o feitas no banco de dados local \n  // Salva os arrays $a_LastName e $a_FirstName na tabela local PERSONS\n          SQL EXECUTE("INSERT INTO PERSONS(LastName, FirstName) VALUES (:$a_LastName, :$a_FirstName);")\n \n       Else // Usa 4D commands\n          For($i;1;Size of array($a_LastName))\n             CREATE RECORD([PERSONS])\n             [PERSONS]LastName:=$a_LastName{$i}\n             [PERSONS]FirstName:=$a_FirstName{$i}\n             SAVE RECORD([PERSONS])\n          End for\n       End if\n    End if\n    SQL LOGOUT // Fecha a conex\xe3o\n End if\n'})}),"\n",(0,n.jsx)(a.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,n.jsx)(a.p,{children:"Se o comando for executado corretamente, a vari\xe1vel sistema OK retorna 1, do contr\xe1rio retorna 0."}),"\n",(0,n.jsx)(a.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"/docs/pt/commands/sql-load-record",children:"SQL LOAD RECORD"})}),"\n",(0,n.jsx)(a.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"N\xfamero do comando"}),(0,n.jsx)(a.td,{children:"820"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Thread-seguro"}),(0,n.jsx)(a.td,{children:"\u2717"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Modificar vari\xe1veis"}),(0,n.jsx)(a.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return t},a:function(){return d}});var s=o(667294);let n={},r=s.createContext(n);function d(e){let a=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);