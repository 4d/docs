"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62975"],{238346:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/method-get-path","title":"METHOD Get path","description":"METHOD Get path ( tipoMetodo {; aTabela}{; nomObjeto{; nomObjetoForm}}{; *} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-get-path.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-path","permalink":"/docs/pt/commands/method-get-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-path","title":"METHOD Get path","slug":"/commands/method-get-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET NAMES","permalink":"/docs/pt/commands/method-get-names"},"next":{"title":"METHOD GET PATHS","permalink":"/docs/pt/commands/method-get-paths"}}'),d=n("785893"),s=n("250065");let r={id:"method-get-path",title:"METHOD Get path",slug:"/commands/method-get-path",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"METHOD Get path"})," ( ",(0,d.jsx)(t.em,{children:"tipoMetodo"})," {; ",(0,d.jsx)(t.em,{children:"aTabela"}),"}{; ",(0,d.jsx)(t.em,{children:"nomObjeto"}),"{; ",(0,d.jsx)(t.em,{children:"nomObjetoForm"}),"}}{; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Par\xe2metro"}),(0,d.jsx)(t.th,{children:"Tipo"}),(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tipoMetodo"}),(0,d.jsx)(t.td,{children:"Integer"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Seletor de tipo objeto"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"aTable"}),(0,d.jsx)(t.td,{children:"Table"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Refer\xeancia de tabela"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"nomObjeto"}),(0,d.jsx)(t.td,{children:"Text"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Nome de formul\xe1rio ou m\xe9todo base"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"nomObjetoForm"}),(0,d.jsx)(t.td,{children:"Text"}),(0,d.jsx)(t.td,{children:"\u2190"}),(0,d.jsx)(t.td,{children:"Nome do objeto de formul\xe1rio"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"*"}),(0,d.jsx)(t.td,{children:"Operador"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Se passado = o comando se aplica \xe0 base local quando se executa desde um componente (par\xe2metro ignorado fora deste contexto)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Resultado"}),(0,d.jsx)(t.td,{children:"Text"}),(0,d.jsx)(t.td,{children:"\u2190"}),(0,d.jsx)(t.td,{children:"Rota de acesso completa do objeto"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(t.p,{children:["O comando ",(0,d.jsx)(t.strong,{children:"METHOD Get path"})," devolve a rota de acesso interna completa de um m\xe9todo."]}),"\n",(0,d.jsxs)(t.p,{children:["Passe em ",(0,d.jsx)(t.em,{children:"tipoMetodo"}),", o tipo de m\xe9todo cuja rota quer obter. Pode utilizar as seguintes constantes, do tema ",(0,d.jsx)(t.em,{children:"Design Object Access"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Constante"}),(0,d.jsx)(t.th,{children:"Tipo"}),(0,d.jsx)(t.th,{children:"Valor"}),(0,d.jsx)(t.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path database method"}),(0,d.jsx)(t.td,{children:"Inteiro longo"}),(0,d.jsx)(t.td,{children:"2"}),(0,d.jsxs)(t.td,{children:["Rota de m\xe9todos de banco de dados especificados. Lista desses m\xe9todos:",(0,d.jsx)(t.br,{}),(0,d.jsxs)(t.em,{children:["[databaseMethod]/onStartup",(0,d.jsx)(t.br,{}),"[databaseMethod]/onExit",(0,d.jsx)(t.br,{}),"[databaseMethod]/onDrop",(0,d.jsx)(t.br,{}),"[databaseMethod]/onBackupStartup",(0,d.jsx)(t.br,{}),"[databaseMethod]/onBackupShutdown",(0,d.jsx)(t.br,{}),"[databaseMethod]/onWebConnection",(0,d.jsx)(t.br,{}),"[databaseMethod]/onWebAuthentication",(0,d.jsx)(t.br,{}),"[databaseMethod]/onWebSessionSuspend",(0,d.jsx)(t.br,{}),"[databaseMethod]/onServerStartup",(0,d.jsx)(t.br,{}),"[databaseMethod]/onServerShutdown",(0,d.jsx)(t.br,{}),"[databaseMethod]/onServerOpenConnection",(0,d.jsx)(t.br,{}),"[databaseMethod]/onServerCloseConnection",(0,d.jsx)(t.br,{}),"[databaseMethod]/onSystemEvent",(0,d.jsx)(t.br,{}),"[databaseMethod]/onSqlAuthentication",(0,d.jsx)(t.br,{})]})," ",(0,d.jsx)(t.em,{children:"[databaseMethod]/"})," ",(0,d.jsxs)(t.em,{children:["onHostDatabaseEvent",(0,d.jsx)(t.br,{})]})," ",(0,d.jsx)(t.em,{children:"[databaseMethod]/"})," ",(0,d.jsxs)(t.em,{children:["onRESTAuthentication",(0,d.jsx)(t.br,{})]})," ",(0,d.jsx)(t.em,{children:"[databaseMethod]/"})," ",(0,d.jsxs)(t.em,{children:["onMobileAppAuthentication",(0,d.jsx)(t.br,{})]})," ",(0,d.jsx)(t.em,{children:"[databaseMethod]/"})," ",(0,d.jsx)(t.em,{children:"onMobileAppAction"})," ",(0,d.jsx)(t.em,{children:(0,d.jsx)(t.br,{})})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path project form"}),(0,d.jsx)(t.td,{children:"Inteiro longo"}),(0,d.jsx)(t.td,{children:"4"}),(0,d.jsxs)(t.td,{children:["Rota dos m\xe9todos formul\xe1rio projeto e de todos seus m\xe9todos objeto. Exemplos:",(0,d.jsx)(t.br,{}),(0,d.jsxs)(t.em,{children:["[projectForm]/myForm/{formMethod}",(0,d.jsx)(t.br,{}),"[projectForm]/myForm/button1",(0,d.jsx)(t.br,{}),"[projectForm]/myForm/mylist",(0,d.jsx)(t.br,{}),"[projectForm]/myForm/button1"]})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path project method"}),(0,d.jsx)(t.td,{children:"Inteiro longo"}),(0,d.jsx)(t.td,{children:"1"}),(0,d.jsxs)(t.td,{children:["Nome do m\xe9todo.",(0,d.jsx)(t.br,{}),"Exemplo: MeuM\xe9todoProjeto"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path table form"}),(0,d.jsx)(t.td,{children:"Inteiro longo"}),(0,d.jsx)(t.td,{children:"16"}),(0,d.jsxs)(t.td,{children:["Rota dos m\xe9todos formul\xe1rio tabela e de todos seus m\xe9todos objeto. Exemplos:",(0,d.jsx)(t.br,{}),(0,d.jsxs)(t.em,{children:["[tableForm]/table_1/Form1/{formMethod}",(0,d.jsx)(t.br,{}),"[tableForm]/table_1/Form1/button1",(0,d.jsx)(t.br,{}),"[tableForm]/table_1/Form1/mylist",(0,d.jsx)(t.br,{}),"[tableForm]/table_2/Form1/mylist"]})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path trigger"}),(0,d.jsx)(t.td,{children:"Inteiro longo"}),(0,d.jsx)(t.td,{children:"8"}),(0,d.jsxs)(t.td,{children:["Rota dos triggers da base. Exemplos:",(0,d.jsx)(t.br,{}),(0,d.jsxs)(t.em,{children:["[trigger]/tabela_1",(0,d.jsx)(t.br,{}),"[trigger]/tabela_2"]})]})]})]})]}),"\n",(0,d.jsxs)(t.p,{children:["Passe os valores nos par\xe2metros ",(0,d.jsx)(t.em,{children:"aTabela"}),", ",(0,d.jsx)(t.em,{children:"nomObjeto"})," e ",(0,d.jsx)(t.em,{children:"nomObjetoForm"})," em fun\xe7\xe3o do tipo de objeto o qual quer obter a rota de acesso do m\xe9todo:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Tipo de objeto"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.em,{children:"aTabela"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.em,{children:"nomObjeto"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.em,{children:"nomObjetoForm"})})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Rota Formul\xe1rio projeto"}),(0,d.jsx)(t.td,{children:"X"}),(0,d.jsx)(t.td,{children:"X (opcional)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Rota Formul\xe1rio tabela"}),(0,d.jsx)(t.td,{children:"X"}),(0,d.jsx)(t.td,{children:"X"}),(0,d.jsx)(t.td,{children:"X (opcional)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Rota M\xe9todo base"}),(0,d.jsx)(t.td,{children:"X"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Rota M\xe9todo projeto"}),(0,d.jsx)(t.td,{children:"X"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Rota Trigger"}),(0,d.jsx)(t.td,{children:"X"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Nota:"})," O comando n\xe3o checa se o objeto design alvo realmente existe no banco de dados (exceto se um nome de m\xe9todo de database inv\xe1lido for passado, em cujo caso um erro \xe9 gerado)"]}),"\n",(0,d.jsx)(t.p,{children:"Se o comando for executado desde um componente, retorna como padr\xe3o as rotas dos m\xe9todos de componente. Se passar o par\xe2metro *, o array cont\xe9m as rotas dos m\xe9todos da database host.."}),"\n",(0,d.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0//Recuperar a rota de acesso do m\xe9todo base "On Startup":\n\xa0$path:=METHOD Get path(Path database method;"onStartup")\n\xa0\n\xa0\xa0//Recuperar a rota de acesso do trigger da tabela [Empregados]:\n\xa0$path:=METHOD Get path(Path trigger;[Empregados])\n\xa0\n\xa0\xa0//Recuperar a rota de acesso do m\xe9todo do objeto "OK" do formul\xe1rio "input" da tabela [Empregados]:\n\xa0$path:=METHOD Get path(Path table form;[Empregados];"input";"OK")\n'})}),"\n",(0,d.jsx)(t.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/docs/pt/commands/current-method-path",children:"Current method path"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/pt/commands/method-open-path",children:"METHOD OPEN PATH"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/pt/commands/method-resolve-path",children:"METHOD RESOLVE PATH"})]}),"\n",(0,d.jsx)(t.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"N\xfamero do comando"}),(0,d.jsx)(t.td,{children:"1164"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Thread-seguro"}),(0,d.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var o=n(667294);let d={},s=o.createContext(d);function r(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);