"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44513"],{7462:function(e,a,n){n.r(a),n.d(a,{metadata:()=>t,contentTitle:()=>o,default:()=>m,assets:()=>d,toc:()=>r,frontMatter:()=>s});var t=JSON.parse('{"id":"ORDA/global-stamp","title":"Usando o selo global","description":"Vis\xe3o Geral","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ORDA/global-stamp.md","sourceDirName":"ORDA","slug":"/ORDA/global-stamp","permalink":"/docs/pt/ORDA/global-stamp","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fglobal-stamp.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"global-stamp","title":"Usando o selo global"},"sidebar":"docs","previous":{"title":"Trabalhar com dados","permalink":"/docs/pt/ORDA/entities"},"next":{"title":"Datastores remotos","permalink":"/docs/pt/ORDA/datastores"}}'),i=n("785893"),l=n("250065");let s={id:"global-stamp",title:"Usando o selo global"},o=void 0,d={},r=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Configurando rastreamento de altera\xe7\xf5es de dados",id:"configurando-rastreamento-de-altera\xe7\xf5es-de-dados",level:2},{value:"Requisitos de estrutura",id:"requisitos-de-estrutura",level:3},{value:"Usando o Editor de estruturas",id:"usando-o-editor-de-estruturas",level:3},{value:"Exemplo",id:"exemplo",level:2}];function c(e){let a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h2,{id:"vis\xe3o-geral",children:"Vis\xe3o Geral"}),"\n",(0,i.jsxs)(a.p,{children:["4D gestiona autom\xe1ticamente un ",(0,i.jsx)(a.strong,{children:"sello de modificaci\xf3n global"})," interno, \xfatil para manejar implementaciones de seguimiento de cambios de datos, por ejemplo para monitorear la actividad, realizar copias de seguridad, ejecutar sincronizaciones incrementales"]}),"\n",(0,i.jsxs)(a.p,{children:["The global modification stamp is a number, always maintained by 4D, even in case of database restoration, import, etc. Note however that the stamp can be modified using the ",(0,i.jsx)(a.a,{href:"/docs/pt/API/DataStoreClass#setglobalstamp",children:(0,i.jsx)(a.code,{children:".setGlobalStamp()"})})," function."]}),"\n",(0,i.jsxs)(a.p,{children:["Una vez ",(0,i.jsx)(a.a,{href:"#configuring-data-change-tracking",children:"configurado y habilitado el seguimiento de cambios de datos"}),", las siguientes acciones son ejecutadas autom\xe1ticamente por 4D en cada modificaci\xf3n de registro (a\xf1adir, modificar, borrar):"]}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:['The current global modification stamp value is saved in the special "__GlobalStamp" attribute of the involved entity.\nEn caso de eliminaci\xf3n, una nueva entidad tambi\xe9n se a\xf1ade a la tabla ',(0,i.jsx)(a.code,{children:"__DeletedRecords"}),' con informaci\xf3n sobre la entidad eliminada y el valor actual del sello de modificaci\xf3n global se guarda en el atributo "__Stamp".']}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"The global modification stamp value is incremented."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"This mechanism allows you to identify entities that have been modified, added, or deleted since a point in time, and to implement any appropriate action (see example)."}),"\n",(0,i.jsx)(a.admonition,{type:"info",children:(0,i.jsxs)(a.p,{children:["No confunda el ",(0,i.jsx)(a.strong,{children:"sello de modificaci\xf3n global"})," con el ",(0,i.jsx)(a.strong,{children:"sello de entidad"})," interna, utilizado para la ",(0,i.jsx)(a.a,{href:"/docs/pt/ORDA/entities#automatic-optimistic-lock",children:"funcionalidad bloqueo optimista"}),"."]})}),"\n",(0,i.jsx)(a.h2,{id:"configurando-rastreamento-de-altera\xe7\xf5es-de-dados",children:"Configurando rastreamento de altera\xe7\xf5es de dados"}),"\n",(0,i.jsxs)(a.p,{children:["Por padr\xe3o, o carimbo de modifica\xe7\xe3o global n\xe3o \xe9 criado (a fun\xe7\xe3o ",(0,i.jsx)(a.a,{href:"/docs/pt/API/DataStoreClass#getglobalstamp",children:(0,i.jsx)(a.code,{children:".getGlobalStamp()"})})," retorna 0. To enable data change tracking, you need to add special fields and a table to your structure. You can use the contextual menu of the Structure Editor to create automatically all necessary elements."]}),"\n",(0,i.jsx)(a.h3,{id:"requisitos-de-estrutura",children:"Requisitos de estrutura"}),"\n",(0,i.jsxs)(a.p,{children:["Para habilitar el seguimiento de cambios de datos, la estructura de la aplicaci\xf3n debe contener al menos una tabla con un campo ",(0,i.jsx)(a.code,{children:"__GlobalStamp"}),"."]}),"\n",(0,i.jsx)(a.p,{children:"In addition, to ensure proper operation of the feature, the following conditions are required:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["El campo ",(0,i.jsx)(a.code,{children:"__GlobalStamp"})," debe ser del tipo ",(0,i.jsx)(a.em,{children:"Entero 64 bits"}),", con las propiedades ",(0,i.jsx)(a.em,{children:"\xedndice autom\xe1tico"}),", ",(0,i.jsx)(a.em,{children:"Exponer como recurso REST"})," e ",(0,i.jsx)(a.em,{children:"Invisible"})," seleccionadas."]}),"\n",(0,i.jsxs)(a.li,{children:["Debe a\xf1adirse una tabla ",(0,i.jsx)(a.code,{children:"__DeletedRecords"}),", con los siguientes campos:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(a.table,{children:[(0,i.jsx)(a.thead,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.th,{children:"Campo"}),(0,i.jsx)(a.th,{children:"Tipo"}),(0,i.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(a.tbody,{children:[(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"__PrimaryKey"}),(0,i.jsx)(a.td,{children:"Text"}),(0,i.jsx)(a.td,{children:"Chave prim\xe1ria da entidade exclu\xedda"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"__Stamp"}),(0,i.jsx)(a.td,{children:"Integer 64 bits"}),(0,i.jsx)(a.td,{children:"Global stamp just before the deletion"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"__TableName"}),(0,i.jsx)(a.td,{children:"Text"}),(0,i.jsx)(a.td,{children:"Nome da tabela de entidades exclu\xedda"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"__TableNumber"}),(0,i.jsx)(a.td,{children:"Long Integer"}),(0,i.jsx)(a.td,{children:"N\xfamero da tabela da entidade exclu\xedda"})]})]})]}),"\n",(0,i.jsxs)(a.p,{children:["S\xf3lo puede realizar un seguimiento de los cambios de los datos de las tablas que tengan el campo ",(0,i.jsx)(a.code,{children:"__GlobalStamp"}),"."]}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsxs)(a.p,{children:["En el lenguaje 4D, el valor del campo ",(0,i.jsx)(a.code,{children:"__GlobalStamp"})," debe manejarse a trav\xe9s de una variable de tipo ",(0,i.jsx)(a.code,{children:"Real"}),"."]})}),"\n",(0,i.jsx)(a.h3,{id:"usando-o-editor-de-estruturas",children:"Usando o Editor de estruturas"}),"\n",(0,i.jsx)(a.p,{children:"The 4D Structure Editor allows you to enable or disable data change tracking using a single menu item."}),"\n",(0,i.jsx)(a.p,{children:"Para ativar o rastreamento de altera\xe7\xf5es de dados:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Selecione a(s) tabela(s) para as quais voc\xea deseja habilitar o rastreamento de altera\xe7\xf5es nos dados."}),"\n",(0,i.jsxs)(a.li,{children:["Haga clic derecho en una tabla seleccionada y seleccione ",(0,i.jsx)(a.strong,{children:"Enable data change tracking"})," en el men\xfa contextual."]}),"\n",(0,i.jsxs)(a.li,{children:["\xc9 exibida uma caixa de di\xe1logo de confirma\xe7\xe3o. Clique em ",(0,i.jsx)(a.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Em seguida, 4D faz as seguintes altera\xe7\xf5es:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Se a\xf1ade un campo preconfigurado ",(0,i.jsx)(a.code,{children:"__GlobalStamp"})," a la(s) tabla(s)."]}),"\n",(0,i.jsxs)(a.li,{children:["Si no existe ya, se a\xf1ade a la estructura una tabla ",(0,i.jsx)(a.code,{children:"__DeletedRecords"}),"."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Para desativar o rastreamento de altera\xe7\xf5es de dados:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Selecione a(s) tabela(s) para as quais voc\xea deseja remover o rastreamento de altera\xe7\xf5es nos dados."}),"\n",(0,i.jsxs)(a.li,{children:["Haga clic derecho en una tabla seleccionada y seleccione ",(0,i.jsx)(a.strong,{children:"Disable data change tracking"})," en el men\xfa contextual."]}),"\n",(0,i.jsxs)(a.li,{children:["\xc9 exibida uma caixa de di\xe1logo de confirma\xe7\xe3o. Clique em ",(0,i.jsx)(a.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["4D elimina entonces el campo ",(0,i.jsx)(a.code,{children:"__GlobalStamp"})," de la(s) tabla(s). Tenga en cuenta que si desea eliminar la tabla ",(0,i.jsx)(a.code,{children:"__DeletedRecords"}),", deber\xe1 hacerlo manualmente."]}),"\n",(0,i.jsx)(a.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-4d",children:'var $oldStamp : Real\nvar $tableName : Text\nvar $modifiedEmps : cs.EmployeeSelection\nvar $deletedEmpsInfo : cs.__DeletedRecordsSelection\n\n$tableName:="Employee"\n$oldStamp:=... //load the previous stamp value  \n	//from which you want to compare the current stamp\n\nIf ($oldStamp # ds.getGlobalStamp())\n		//get all new or modified entities\n	$modifiedEmps:=ds[$tableName].query("__GlobalStamp > :1"; $oldStamp)\n		//get all deleted entities\n	$deletedEmpsInfo:=ds.__DeletedRecords.query("__Stamp > :1 and __TableName = :2";\\\n	$oldStamp; $tableName)\nEnd if\n'})})]})}function m(e={}){let{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return o},a:function(){return s}});var t=n(667294);let i={},l=t.createContext(i);function s(e){let a=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);