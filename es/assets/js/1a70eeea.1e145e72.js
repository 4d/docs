"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37493"],{757933:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>i,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/method-resolve-path","title":"METHOD RESOLVE PATH","description":"METHOD RESOLVE PATH ( ruta ; tipoMetodo ; prtTabla ; nomObjeto ; nomObjForm {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-resolve-path.md","sourceDirName":"commands-legacy","slug":"/commands/method-resolve-path","permalink":"/docs/es/20-R8/commands/method-resolve-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-resolve-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-resolve-path","title":"METHOD RESOLVE PATH","slug":"/commands/method-resolve-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD OPEN PATH","permalink":"/docs/es/20-R8/commands/method-open-path"},"next":{"title":"METHOD SET ACCESS MODE","permalink":"/docs/es/20-R8/commands/method-set-access-mode"}}'),o=t("785893"),d=t("250065");let s={id:"method-resolve-path",title:"METHOD RESOLVE PATH",slug:"/commands/method-resolve-path",displayed_sidebar:"docs"},a=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"METHOD RESOLVE PATH"})," ( ",(0,o.jsx)(n.em,{children:"ruta"})," ; ",(0,o.jsx)(n.em,{children:"tipoMetodo"})," ; ",(0,o.jsx)(n.em,{children:"prtTabla"})," ; ",(0,o.jsx)(n.em,{children:"nomObjeto"})," ; ",(0,o.jsx)(n.em,{children:"nomObjForm"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ruta"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Ruta a resolver"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tipoMetodo"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Selector de tipo de objeto"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"prtTabla"}),(0,o.jsx)(n.td,{children:"Pointer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Referencia de tabla"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomObjeto"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nombre de formulario o de m\xe9todo base"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomObjForm"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nombre de objeto del formulario"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (par\xe1metro ignorado fuera de este contexto)"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"METHOD RESOLVE PATH"})," analiza la ruta de acceso interna pasada en el par\xe1metro ",(0,o.jsx)(n.em,{children:"ruta"})," y devuelve sus diferentes componentes en los par\xe1metros ",(0,o.jsx)(n.em,{children:"tipoMetodo"}),", ",(0,o.jsx)(n.em,{children:"ptrTabla"}),", ",(0,o.jsx)(n.em,{children:"nomObjeto"})," y ",(0,o.jsx)(n.em,{children:"nomObjetoForm"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["En el par\xe1metro ",(0,o.jsx)(n.em,{children:"tipoMetodo"})," devuelve un valor que indica el tipo del m\xe9todo. Puede comparar este valor con las siguientes constantes del tema ",(0,o.jsx)(n.em,{children:"Acceso objetos dise\xf1o"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"}),(0,o.jsx)(n.th,{children:"Comentario"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Path database method"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"2"}),(0,o.jsxs)(n.td,{children:["Ruta de los m\xe9todos base definidos. Lista de estos m\xe9todos:",(0,o.jsx)(n.br,{}),(0,o.jsxs)(n.em,{children:["[databaseMethod]/onStartup",(0,o.jsx)(n.br,{}),"[databaseMethod]/onExit",(0,o.jsx)(n.br,{}),"[databaseMethod]/onDrop",(0,o.jsx)(n.br,{}),"[databaseMethod]/onBackupStartup",(0,o.jsx)(n.br,{}),"[databaseMethod]/onBackupShutdown",(0,o.jsx)(n.br,{}),"[databaseMethod]/onWebConnection",(0,o.jsx)(n.br,{}),"[databaseMethod]/onWebAuthentication",(0,o.jsx)(n.br,{}),"[databaseMethod]/onWebSessionSuspend",(0,o.jsx)(n.br,{}),"[databaseMethod]/onServerStartup",(0,o.jsx)(n.br,{}),"[databaseMethod]/onServerShutdown",(0,o.jsx)(n.br,{}),"[databaseMethod]/onServerOpenConnection",(0,o.jsx)(n.br,{}),"[databaseMethod]/onServerCloseConnection",(0,o.jsx)(n.br,{}),"[databaseMethod]/onSystemEvent",(0,o.jsx)(n.br,{}),"[databaseMethod]/onSqlAuthentication",(0,o.jsx)(n.br,{})]})," ",(0,o.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,o.jsxs)(n.em,{children:["onHostDatabaseEvent",(0,o.jsx)(n.br,{})]})," ",(0,o.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,o.jsxs)(n.em,{children:["onRESTAuthentication",(0,o.jsx)(n.br,{})]})," ",(0,o.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,o.jsxs)(n.em,{children:["onMobileAppAuthentication",(0,o.jsx)(n.br,{})]})," ",(0,o.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,o.jsx)(n.em,{children:"onMobileAppAction"})," ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.br,{})})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Path project form"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"4"}),(0,o.jsxs)(n.td,{children:["Ruta de los m\xe9todos formularo proyecto y de todos su m\xe9todos objeto. Ejemplos:",(0,o.jsx)(n.br,{}),(0,o.jsxs)(n.em,{children:["[projectForm]/myForm/{formMethod}",(0,o.jsx)(n.br,{}),"[projectForm]/myForm/button1",(0,o.jsx)(n.br,{}),"[projectForm]/myForm/mylist",(0,o.jsx)(n.br,{}),"[projectForm]/myForm/button1"]})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Path project method"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsxs)(n.td,{children:["Nombre del m\xe9todo.",(0,o.jsx)(n.br,{}),"Ejemplo: MiMetodoProyecto"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Path table form"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"16"}),(0,o.jsxs)(n.td,{children:["Ruta de los m\xe9todos formulario tabla y de todos sus m\xe9todos objeto. Ejemplos:",(0,o.jsx)(n.br,{}),(0,o.jsxs)(n.em,{children:["[tableForm]/table_1/Form1/{formMethod}",(0,o.jsx)(n.br,{}),"[tableForm]/table_1/Form1/button1",(0,o.jsx)(n.br,{}),"[tableForm]/table_1/Form1/mylist",(0,o.jsx)(n.br,{}),"[tableForm]/table_2/Form1/mylist"]})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Path trigger"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"8"}),(0,o.jsxs)(n.td,{children:["Ruta de los triggers de la base. Ejemplos:",(0,o.jsx)(n.br,{}),(0,o.jsxs)(n.em,{children:["[trigger]/tabla_1",(0,o.jsx)(n.br,{}),"[trigger]/tabla_2"]})]})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," el comando no comprueba si el m\xe9todo existe realmente en la base de datos/proyecto. S\xf3lo se genera un error cuando se pasa un nombre de tabla inv\xe1lido."]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"ptrTabla"})," contiene un puntero a una tabla de la base cuando la ruta referencia un m\xe9todo formulario tabla o un trigger."]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"nomObjeto"})," contiene:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"un nombre de formulario si la ruta referencia un formulario tabla o proyecto."}),"\n",(0,o.jsx)(n.li,{children:"un nombre de m\xe9todo base si la ruta referencia un m\xe9todo base."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"nomObjetoForm"})," contiene un nombre de objeto de formulario si la ruta referencia un m\xe9todo objeto."]}),"\n",(0,o.jsxs)(n.p,{children:["Si el comando se ejecuta desde un componente, considera por defecto que ",(0,o.jsx)(n.em,{children:"ruta"})," designa un m\xe9todo del componente. Si pasa el par\xe1metro ",(0,o.jsx)(n.em,{children:"*"}),", considera que ",(0,o.jsx)(n.em,{children:"ruta"})," designa un m\xe9todo de la base local."]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"Resoluci\xf3n de una ruta de m\xe9todo base:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $methodType : Integer\n\xa0var $tablePtr : Pointer\n\xa0var $objectName : Text\n\xa0var $formObjectName : Text\n\xa0\n\xa0METHOD RESOLVE PATH("[databaseMethod]/onStartup";$methodType;$tablePtr;$objectName;$formObjectName)\n\xa0\xa0// $methodType: 2\n\xa0\xa0// $tablePtr: Nil pointer\n\xa0\xa0// $objectName: "onStartup"\n\xa0\xa0// $formObjectName: ""\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Resoluci\xf3n de una ruta de objeto de m\xe9todo formulario tabla:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $methodType : Integer\n\xa0var $tablePtr : Pointer\n\xa0var $objectName : Text\n\xa0var $formObjectName : Text\n\xa0\n\xa0METHOD RESOLVE PATH("[tableForm]/Table1/output%2A1/myVar%2A1";$methodType;$tablePtr;$objectName;$formObjectName)\n\xa0\xa0// $methodType: 16\n\xa0\xa0// $tablePtr: -> [Table1]\n\xa0\xa0// $objectName: "output1"\n\xa0\xa0// $formObjectName: "Btn1"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/method-get-path",children:"METHOD Get path"})}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1165"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(667294);let o={},d=r.createContext(o);function s(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);