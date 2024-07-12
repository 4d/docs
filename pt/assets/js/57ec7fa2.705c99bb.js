/*! For license information please see 57ec7fa2.705c99bb.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[325],{87508:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var r=n(474848),d=n(28453);const o={id:"architecture",title:"Arquitetura de um projeto 4D"},i=void 0,t={id:"Project/architecture",title:"Arquitetura de um projeto 4D",description:"Um projeto 4D \xe9 composto por v\xe1rias pastas e arquivos, armazenados numa pasta raiz do projeto (pasta de pacotes). Por exemplo:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Project/architecture.md",sourceDirName:"Project",slug:"/Project/architecture",permalink:"/docs/pt/Project/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Farchitecture.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"architecture",title:"Arquitetura de um projeto 4D"},sidebar:"docs",previous:{title:"Vis\xe3o Geral",permalink:"/docs/pt/Project/overview"},next:{title:"Settings",permalink:"/docs/pt/settings/overview"}},a={},c=[{value:"Carpeta <code>Project</code>",id:"carpeta-project",level:2},{value:"archivo <code>&lt;applicationName&gt;.4DProject</code>",id:"archivo-applicationname4dproject",level:3},{value:"<code>Sources</code>",id:"sources",level:3},{value:"<code>DatabaseMethods</code>",id:"databasemethods",level:4},{value:"<code>P\xe1gina M\xe9todos</code>",id:"p\xe1gina-m\xe9todos",level:4},{value:"<code>Classes</code>",id:"classes",level:4},{value:"<code>Formul\xe1rios</code>",id:"formul\xe1rios",level:4},{value:"<code>TableForms</code>",id:"tableforms",level:4},{value:"<code>Triggers</code>",id:"triggers",level:4},{value:"<code>Trash</code>",id:"trash",level:3},{value:"<code>DerivedData</code>",id:"deriveddata",level:3},{value:"<code>Libraries</code>",id:"libraries",level:2},{value:"<code>Resources</code>",id:"resources",level:2},{value:"<code>Data</code>",id:"data",level:2},{value:"<code>Settings</code> (datos del usuario)",id:"settings-datos-del-usuario",level:3},{value:"<code>Logs</code>",id:"logs",level:3},{value:"<code>Settings</code> (usuario)",id:"settings-usuario",level:2},{value:"<code>userPreferences.&lt;userName&gt;</code>",id:"userpreferencesusername",level:2},{value:"<code>Componentes</code>",id:"componentes",level:2},{value:"<code>Plugins</code>",id:"plugins",level:2},{value:"<code>Documentation</code>",id:"documentation",level:2},{value:"<code>WebFolder</code>",id:"webfolder",level:2},{value:"Archivo <code>.gitignore</code> (opcional)",id:"archivo-gitignore-opcional",level:2}];function l(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Um projeto 4D \xe9 composto por v\xe1rias pastas e arquivos, armazenados numa pasta raiz do projeto (pasta de pacotes). Por exemplo:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["MyPackage (",(0,r.jsx)(s.em,{children:"carpeta ra\xedz del proyecto"}),")\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Componentes"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Data"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Logs"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Par\xe2metros"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Documentation"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Plugins"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Project"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"DerivedData"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Sources"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Trash"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Resources"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Par\xe2metros"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"userPreferences.username"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"WebFolder"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:['Se o seu projeto tiver sido convertido a partir de uma base de dados bin\xe1ria, poder\xe3o existir pastas adicionais. Ver "Conversi\xf3n de bases en proyectos" en ',(0,r.jsx)(s.a,{href:"https://doc.4d.com",children:"doc.4d.com"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"carpeta-project",children:["Carpeta ",(0,r.jsx)(s.code,{children:"Project"})]}),"\n",(0,r.jsx)(s.p,{children:"A pasta Project cont\xe9m normalmente a seguinte hierarquia:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["archivo ",(0,r.jsx)(s.code,{children:"<applicationName>.4DProject"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Sources"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Classes"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"DatabaseMethods"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"P\xe1gina M\xe9todos"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Formul\xe1rios"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"TableForms"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Triggers"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"DerivedData"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Trash"})," (si hay)"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"archivo-applicationname4dproject",children:["archivo ",(0,r.jsx)(s.code,{children:"<applicationName>.4DProject"})]}),"\n",(0,r.jsx)(s.p,{children:"Arquivo de desenvolvimento do projeto, utilizado para designar e lan\xe7ar o projeto. Esse arquivo pode ser aberto por:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"4D"}),"\n",(0,r.jsxs)(s.li,{children:["4D Server (s\xf3lo lectura, ver ",(0,r.jsx)(s.a,{href:"/docs/pt/Desktop/clientServer#opening-a-remote-project",children:"Abrir un proyecto remoto"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{"x-id":"1",children:"Nota:"})," nos projetos 4D, o desenvolvimento se realiza com 4D Developer e o desenvolvimento multiusu\xe1rios se gerencia atrav\xe9s das ferramentas de controle de vers\xe3o. 4D Server pode abrir arquivos .4DProject para fins de teste."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["This text file can also contain configuration keys, in particular ",(0,r.jsx)(s.a,{href:"/docs/pt/Preferences/general#excluding-tokens-in-existing-projects",children:(0,r.jsx)(s.code,{children:'"tokenizedText": false'})}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"sources",children:(0,r.jsx)(s.code,{children:"Sources"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"catalog.4DCatalog"}),(0,r.jsx)(s.td,{children:"Defini\xe7\xf5es de tabelas e campos"}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"catalog_editor.json"}),(0,r.jsxs)(s.td,{children:["Custom positions and colors of tables, fields, and links in the Structure editor. Depende de un ",(0,r.jsx)(s.a,{href:"/docs/pt/settings/compatibility",children:"par\xe1metro de compatibilidad"})," en los proyectos convertidos"]}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"folders.json"}),(0,r.jsx)(s.td,{children:"Defini\xe7\xf5es de pasta do Explorer"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"menus.json"}),(0,r.jsx)(s.td,{children:"Defini\xe7\xf5es de menus"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"roles.json"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/ORDA/privileges#rolesjson-files",children:"Privileges, permissions"})," and other security settings for the project"]}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"settings.4DSettings"}),(0,r.jsxs)(s.td,{children:["Propiedades de la base ",(0,r.jsx)(s.em,{children:"Structure"}),". No se tienen en cuenta si se definen ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.a,{href:"#settings-user",children:"par\xe1metros de usuario"})})," o ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.a,{href:"#settings-user-data",children:"par\xe1metros de usuario para datos"})})," (ver tambi\xe9n ",(0,r.jsx)(s.a,{href:"/docs/pt/Desktop/user-settings#priority-of-settings",children:"Prioridad de los par\xe1metros"}),". ",(0,r.jsx)(s.strong,{children:"Atenci\xf3n"}),": en las aplicaciones compiladas, la configuraci\xf3n de la estructura se almacena en el archivo .4dz (de s\xf3lo lectura). Para las necesidades de despliegue, es necesario ",(0,r.jsx)(s.a,{href:"/docs/pt/Desktop/user-settings#enabling-user-settings",children:"habilitar"})," y utilizar ",(0,r.jsx)(s.em,{children:"par\xe1metros usuario"})," o ",(0,r.jsx)(s.em,{children:"par\xe1metros usuario para datos"})," para definir par\xe1metros personalizados."]}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tips.json"}),(0,r.jsx)(s.td,{children:"Dicas definidas"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"lists.json"}),(0,r.jsx)(s.td,{children:"Listas definidas"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"filters.json"}),(0,r.jsx)(s.td,{children:"Filtros definidos"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"dependencies.json"}),(0,r.jsxs)(s.td,{children:["Names of ",(0,r.jsx)(s.a,{href:"/docs/pt/Project/components",children:"components to load"})," in the project"]}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"styleSheets.css"}),(0,r.jsx)(s.td,{children:"Folhas de estilo CSS"}),(0,r.jsx)(s.td,{children:"CSS"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"styleSheets_mac.css"}),(0,r.jsx)(s.td,{children:"Folhas de estilo css para Mac (de um banco de dados bin\xe1rio convertido)"}),(0,r.jsx)(s.td,{children:"CSS"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"styleSheets_windows.css"}),(0,r.jsx)(s.td,{children:"Folhas de estilo css em Windows (de um banco de dados bin\xe1rio convertido)"}),(0,r.jsx)(s.td,{children:"CSS"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"databasemethods",children:(0,r.jsx)(s.code,{children:"DatabaseMethods"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"databaseMethodName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todos de projeto definidos na database. Um ficheiro por m\xe9todo base de dados"}),(0,r.jsx)(s.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"p\xe1gina-m\xe9todos",children:(0,r.jsx)(s.code,{children:"P\xe1gina M\xe9todos"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"methodName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todos de banco definidos na database. One file per database method"}),(0,r.jsx)(s.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"classes",children:(0,r.jsx)(s.code,{children:"Classes"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"className"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todo de defini\xe7\xe3o de classe usu\xe1rio, que permite instanciar objetos espec\xedficos. Um arquivo por classe, o nome do arquivo \xe9 o nome da classe"}),(0,r.jsx)(s.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"formul\xe1rios",children:(0,r.jsx)(s.code,{children:"Formul\xe1rios"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(s.td,{children:"Descri\xe7\xe3o do formul\xe1rio projeto"}),(0,r.jsx)(s.td,{children:"json"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todo formul\xe1rio projecto"}),(0,r.jsx)(s.td,{children:"text"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"formName"}),"/Images/",(0,r.jsx)(s.em,{children:"pictureName"})]}),(0,r.jsx)(s.td,{children:"Imagem est\xe1tica do formul\xe1rio projeto"}),(0,r.jsx)(s.td,{children:"picture"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(s.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todos objecto. Um arquivo por m\xe9todo objeto"}),(0,r.jsx)(s.td,{children:"text"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"tableforms",children:(0,r.jsx)(s.code,{children:"TableForms"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Input/",(0,r.jsx)(s.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(s.td,{children:"Descri\xe7\xe3o do formul\xe1rio de entrada da tabela (n \xe9 o n\xfamero da tabela)"}),(0,r.jsx)(s.td,{children:"json"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Input/",(0,r.jsx)(s.em,{children:"formName"}),"/Images/",(0,r.jsx)(s.em,{children:"pictureName"})]}),(0,r.jsx)(s.td,{children:"Imagens est\xe1ticas do formul\xe1rio de entrada da tabela"}),(0,r.jsx)(s.td,{children:"picture"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Input/",(0,r.jsx)(s.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todo do formul\xe1rio de entrada da tabela"}),(0,r.jsx)(s.td,{children:"text"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Input/",(0,r.jsx)(s.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(s.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todos objeto do formul\xe1rio de entrada. Um arquivo por m\xe9todo objeto"}),(0,r.jsx)(s.td,{children:"text"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Output/",(0,r.jsx)(s.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(s.td,{children:"Descri\xe7\xe3o do formul\xe1rio de sa\xedda da tabela (n \xe9 o n\xfamero da tabela)"}),(0,r.jsx)(s.td,{children:"json"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Output/",(0,r.jsx)(s.em,{children:"formName"}),"/Images/",(0,r.jsx)(s.em,{children:"pictureName"})]}),(0,r.jsx)(s.td,{children:"Imagens est\xe1ticas do formul\xe1rio de sa\xedda da tabela"}),(0,r.jsx)(s.td,{children:"picture"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Output/",(0,r.jsx)(s.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todo do formul\xe1rio de sa\xedda da tabela"}),(0,r.jsx)(s.td,{children:"text"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Output/",(0,r.jsx)(s.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(s.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todos objeto do formul\xe1rio de sa\xedda. Um arquivo por m\xe9todo objeto"}),(0,r.jsx)(s.td,{children:"text"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"triggers",children:(0,r.jsx)(s.code,{children:"Triggers"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["table_",(0,r.jsx)(s.em,{children:"n"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todos trigger definidos na database. Um arquivo de acionamento por tabela (n \xe9 o n\xfamero da tabela)"}),(0,r.jsx)(s.td,{children:"text"})]})})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," The .4dm file extension is a text-based file format, containing the code of a 4D method. \xc9 compat\xedvel com as ferramentas de controlo da vers\xe3o."]}),"\n",(0,r.jsx)(s.h3,{id:"trash",children:(0,r.jsx)(s.code,{children:"Trash"})}),"\n",(0,r.jsx)(s.p,{children:"A pasta Trash cont\xe9m m\xe9todos e formul\xe1rios eliminados do projeto (se existirem). Pode conter as seguintes pastas:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"P\xe1gina M\xe9todos"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Formul\xe1rios"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"TableForms"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:['Dentro destas pastas, os nomes dos elementos eliminados est\xe3o entre par\xeanteses, por exemplo, "(myMethod).4dm". La organizaci\xf3n de las carpetas es id\xe9ntica a la carpeta ',(0,r.jsx)(s.a,{href:"#sources",children:"Sources"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"deriveddata",children:(0,r.jsx)(s.code,{children:"DerivedData"})}),"\n",(0,r.jsx)(s.p,{children:"A pasta DerivedData cont\xe9m dados em cache usados internamente por 4D para otimizar o processamento. \xc9 criado ou recriado automaticamente quando necess\xe1rio. Voc\xea pode ignorar essa pasta."}),"\n",(0,r.jsx)(s.h2,{id:"libraries",children:(0,r.jsx)(s.code,{children:"Libraries"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Esta pasta \xe9 utilizada apenas no macOS."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["La carpeta Librairies contiene el archivo resultante de una compilaci\xf3n con el ",(0,r.jsx)(s.a,{href:"/docs/pt/Project/compiler#silicon-compiler",children:"compilador Silicon"})," en macOS."]}),"\n",(0,r.jsx)(s.h2,{id:"resources",children:(0,r.jsx)(s.code,{children:"Resources"})}),"\n",(0,r.jsxs)(s.p,{children:["A pasta Resources cont\xe9m todos os arquivos e pastas de recursos personalizados do projeto. Nesta pasta, pode colocar todos os ficheiros necess\xe1rios para a tradu\xe7\xe3o ou personaliza\xe7\xe3o da interface da aplica\xe7\xe3o (arquivo imagem, arquivo texto, arquivo XLIFF, etc.). 4D usa mecanismos autom\xe1ticos para trabalhar com o conte\xfado desta pasta, em particular para a manipula\xe7\xe3o de ficheiros XLIFF e imagens est\xe1ticas. Para utilizar no modo remoto, a pasta Recursos permite-lhe partilhar arquivo entre o servidor e todas as m\xe1quinas clientes. Ver el ",(0,r.jsx)(s.em,{children:"manual 4D Server"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.em,{children:"elemento"})}),(0,r.jsx)(s.td,{children:"Arquivos e pastas dos recursos do banco de dados"}),(0,r.jsx)(s.td,{children:"v\xe1rios"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["Images/Library/",(0,r.jsx)(s.em,{children:"item"})]}),(0,r.jsx)(s.td,{children:"Imagens da biblioteca de imagens como arquivo separados(*). Os nomes destes itens tornam-se nomes de arquivo. Se existir uma duplica\xe7\xe3o, \xe9 acrescentado um n\xfamero ao nome."}),(0,r.jsx)(s.td,{children:"picture"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"(*) apenas se o projeto tiver sido exportado de um banco de dados bin\xe1rio .4db."}),"\n",(0,r.jsx)(s.h2,{id:"data",children:(0,r.jsx)(s.code,{children:"Data"})}),"\n",(0,r.jsx)(s.p,{children:"A pasta Data cont\xe9m o ficheiro de dados e todos os arquivo e pastas relacionados com os dados."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"data.4dd(*)"}),(0,r.jsxs)(s.td,{children:["arquivo de dados que cont\xe9m os dados introduzidos nos registos e todos os dados pertencentes aos registos. Quando abre um projeto 4D, a aplica\xe7\xe3o abre o arquivo de dados atual por defeito. Si cambia el nombre o la ubicaci\xf3n de este archivo, aparecer\xe1 la caja de di\xe1logo ",(0,r.jsx)(s.em,{children:"Abrir un archivo de datos"})," para que pueda seleccionar el archivo de datos a utilizar o crear uno nuevo"]}),(0,r.jsx)(s.td,{children:"binary"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"data.journal"}),(0,r.jsx)(s.td,{children:"Criado apenas quando a base de dados utiliza um ficheiro de registo. O arquivo de registo \xe9 utilizado para garantir a seguran\xe7a dos dados entre c\xf3pias de seguran\xe7a. Todas as opera\xe7\xf5es efectuadas sobre os dados s\xe3o registadas sequencialmente neste arquivo. Por conseguinte, cada opera\xe7\xe3o sobre os dados provoca duas ac\xe7\xf5es simult\xe2neas: a primeira sobre os dados (a express\xe3o \xe9 executada normalmente) e a segunda no ficheiro de registo (\xe9 registada uma descri\xe7\xe3o da opera\xe7\xe3o). O arquivo de registo \xe9 constru\xeddo de forma independente, sem perturbar ou atrasar o trabalho do utilizador. Uma base de dados s\xf3 pode trabalhar com um \xfanico arquivo de registo de cada vez. O arquivo de registo regista opera\xe7\xf5es como adi\xe7\xf5es, modifica\xe7\xf5es ou elimina\xe7\xf5es de registos, transac\xe7\xf5es, etc. \xc9 gerado por defeito quando \xe9 criada uma base de dados."}),(0,r.jsx)(s.td,{children:"binary"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"data.match"}),(0,r.jsx)(s.td,{children:"(interno) UUID correspondente ao n\xfamero da tabela"}),(0,r.jsx)(s.td,{children:"XML"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"(*) Quando o projeto \xe9 criado a partir de uma base de dados bin\xe1ria .4db, o arquivo de dados n\xe3o \xe9 alterado. Assim, pode ter um nome diferente e ser colocado noutro local."}),"\n",(0,r.jsxs)(s.h3,{id:"settings-datos-del-usuario",children:[(0,r.jsx)(s.code,{children:"Settings"})," (datos del usuario)"]}),"\n",(0,r.jsxs)(s.p,{children:["This folder contains ",(0,r.jsx)(s.a,{href:"/docs/pt/Desktop/user-settings#user-settings-for-data-file",children:(0,r.jsx)(s.strong,{children:"user settings for data"})})," used for application administration."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Estos par\xe1metros tienen prioridad sobre los ",(0,r.jsx)(s.a,{href:"#settings-user",children:"par\xe1metros de usuario"})," y los ",(0,r.jsx)(s.a,{href:"#sources",children:"par\xe1metros de estructura"}),". Ver tambi\xe9n ",(0,r.jsx)(s.a,{href:"/docs/pt/Desktop/user-settings#priority-of-settings",children:"Prioridad de los par\xe1metros"}),"."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"directory.json"}),(0,r.jsx)(s.td,{children:"Descri\xe7\xe3o de os grupos e usu\xe1rios de 4D e seus direitos de acesso quando o banco for lan\xe7ado com este arquivo de dados."}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Backup.4DSettings"}),(0,r.jsxs)(s.td,{children:["Par\xe1metros de copia de seguridad de la base de datos, utilizados para definir las ",(0,r.jsx)(s.a,{href:"/docs/pt/Backup/settings",children:"opciones de copia de seguridad"})," cuando la base se lanza con este archivo de datos. Las llaves relativas a la configuraci\xf3n de la copia de seguridad se describen en el manual ",(0,r.jsx)(s.em,{children:"Backup de las llaves XML 4D"}),"."]}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"settings.4DSettings"}),(0,r.jsx)(s.td,{children:"Propriedades personalizadas de o banco de dados para este arquivo de dados."}),(0,r.jsx)(s.td,{children:"XML"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"logs",children:(0,r.jsx)(s.code,{children:"Logs"})}),"\n",(0,r.jsx)(s.p,{children:"A pasta Logs cont\xe9m todos os arquivos de registo utilizados pelo projeto. Os arquivos de registro incluem, em particular:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"convers\xe3o da base de dados,"}),"\n",(0,r.jsx)(s.li,{children:"pedidos do servidor Web,"}),"\n",(0,r.jsxs)(s.li,{children:["registro de actividades de backup/restituci\xf3n (",(0,r.jsx)(s.em,{children:"Backup Journal[xxx].txt"}),", ver ",(0,r.jsx)(s.a,{href:"/docs/pt/Backup/backup#backup-journal",children:"Historial de backup"}),")"]}),"\n",(0,r.jsx)(s.li,{children:"depura\xe7\xe3o de comandos,"}),"\n",(0,r.jsx)(s.li,{children:"4D Pedidos do servidor (gerados em m\xe1quinas clientes e no servidor)."}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Una carpeta Logs adicional est\xe1 disponible en la carpeta de preferencias del usuario del sistema (carpeta 4D activa, ver el comando ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page485.html",children:"Get 4D folder"}),") para los archivos de registro de mantenimiento y e"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"settings-usuario",children:[(0,r.jsx)(s.code,{children:"Settings"})," (usuario)"]}),"\n",(0,r.jsxs)(s.p,{children:["This folder contains ",(0,r.jsx)(s.a,{href:"/docs/pt/Desktop/user-settings#user-settings",children:(0,r.jsx)(s.strong,{children:"user settings"})})," used for application administration."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Estos par\xe1metros tienen prioridad sobre el archivo de ",(0,r.jsx)(s.a,{href:"#sources",children:"par\xe1metros de estructura"}),". Sin embargo, si existen ",(0,r.jsx)(s.a,{href:"#settings-user-data",children:"par\xe1metros de usuario para los datos"}),", tienen prioridad sobre los par\xe1metros de usuario. Ver tambi\xe9n ",(0,r.jsx)(s.a,{href:"/docs/pt/Desktop/user-settings#priority-of-settings",children:"Prioridad de los par\xe1metros"}),"."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"directory.json"}),(0,r.jsx)(s.td,{children:"Descri\xe7\xe3o dos grupos e usu\xe1rios de 4D para o banco de dados, assim como seus direitos de acesso"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Backup.4DSettings"}),(0,r.jsxs)(s.td,{children:["Par\xe1metros de copia de seguridad de la base de datos, utilizados para definir las ",(0,r.jsx)(s.a,{href:"/docs/pt/Backup/settings",children:"opciones de copia de seguridad"}),") cuando se lanza cada copia de seguridad. Este archivo tambi\xe9n puede utilizarse para leer o definir opciones adicionales, como la cantidad de informaci\xf3n almacenada en el ",(0,r.jsx)(s.em,{children:"diario de backup"}),". Las llaves relativas a la configuraci\xf3n de la copia de seguridad se describen en el manual ",(0,r.jsx)(s.em,{children:"Backup de las llaves XML 4D"}),"."]}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BuildApp.4DSettings"}),(0,r.jsxs)(s.td,{children:["Archivo de par\xe1metros de generaci\xf3n, creado autom\xe1ticamente cuando se utiliza la caja de di\xe1logo del generador de aplicaciones o del comando ",(0,r.jsx)(s.code,{children:"BUILD APPLICATION"})]}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"settings.4DSettings"}),(0,r.jsx)(s.td,{children:"Defini\xe7\xf5es personalizadas para este projeto (todos os arquivos de dados)"}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"logConfig.json"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/Debugging/debugLogFiles#using-a-log-configuration-file",children:"Archivo de configuraci\xf3n de historial"})," personalizado"]}),(0,r.jsx)(s.td,{children:"json"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"userpreferencesusername",children:(0,r.jsx)(s.code,{children:"userPreferences.<userName>"})}),"\n",(0,r.jsx)(s.p,{children:"Esta pasta cont\xe9m arquivos que memorizam as configura\xe7\xf5es do usu\xe1rio, por exemplo, o ponto de ruptura ou as posi\xe7\xf5es das janelas. Pode simplesmente ignorar esta pasta. Cont\xe9m, por exemplo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"methodPreferences.json"}),(0,r.jsx)(s.td,{children:"Prefer\xeancias do utilizador atual do Editor de c\xf3digo"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"methodWindowPositions.json"}),(0,r.jsx)(s.td,{children:"Posi\xe7\xe3o da janela do usu\xe1rio atual para os m\xe9todos"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"formWindowPositions.json"}),(0,r.jsx)(s.td,{children:"Posi\xe7\xe3o da janela do usu\xe1rio atual para os formul\xe1rios"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"workspace.json"}),(0,r.jsx)(s.td,{children:"Lista de janelas abertas; no macOS, ordem das janelas do separador"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"debuggerCatches.json"}),(0,r.jsx)(s.td,{children:"Chamadas aos comandos"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"recentTables.json"}),(0,r.jsx)(s.td,{children:"Lista ordenada de tabelas"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"preferences.4DPreferences"}),(0,r.jsx)(s.td,{children:"Rota de dados atual e posi\xe7\xf5es da janela principal"}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CompilerIntermediateFiles"}),(0,r.jsx)(s.td,{children:"arquivos interm\xe9dios resultantes da compila\xe7\xe3o do Apple Silicon"}),(0,r.jsx)(s.td,{children:"Folder"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"componentes",children:(0,r.jsx)(s.code,{children:"Componentes"})}),"\n",(0,r.jsx)(s.p,{children:"Folder containing components that are embedded in the project (must be stored at the same level as the Project folder). These components have priority over any other locations."}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["You can also use the ",(0,r.jsxs)(s.a,{href:"/docs/pt/Project/components",children:[(0,r.jsx)(s.strong,{children:"dependencies.json"})," and (optionnally) ",(0,r.jsx)(s.strong,{children:"environment4d.json"})," files"]})," to declare components."]})}),"\n",(0,r.jsx)(s.h2,{id:"plugins",children:(0,r.jsx)(s.code,{children:"Plugins"})}),"\n",(0,r.jsx)(s.p,{children:"Esta pasta cont\xe9m os plug-ins que devem estar dispon\xedveis no projeto de aplica\xe7\xe3o. Deve ser armazenado ao mesmo n\xedvel que a pasta Project."}),"\n",(0,r.jsx)(s.h2,{id:"documentation",children:(0,r.jsx)(s.code,{children:"Documentation"})}),"\n",(0,r.jsx)(s.p,{children:"Esta pasta cont\xe9m todos os arquivo de documenta\xe7\xe3o (.md) criados para os elementos do projeto, tais como classes, m\xe9todos ou formul\xe1rios. Os arquivo de documenta\xe7\xe3o s\xe3o geridos e apresentados no Explorer 4D."}),"\n",(0,r.jsxs)(s.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,r.jsx)(s.a,{href:"/docs/pt/Project/documentation",children:"Documentar un proyecto"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"webfolder",children:(0,r.jsx)(s.code,{children:"WebFolder"})}),"\n",(0,r.jsx)(s.p,{children:"Pasta raiz padr\xe3o do servidor Web 4D para p\xe1ginas, imagens, etc. \xc9 criado automaticamente quando o servidor Web \xe9 iniciado pela primeira vez."}),"\n",(0,r.jsxs)(s.h2,{id:"archivo-gitignore-opcional",children:["Archivo ",(0,r.jsx)(s.code,{children:".gitignore"})," (opcional)"]}),"\n",(0,r.jsxs)(s.p,{children:["Ficheiro que especifica quais os ficheiros que ser\xe3o ignorados pelo git. Puede incluir un archivo gitignore en sus proyectos utilizando la opci\xf3n ",(0,r.jsx)(s.strong,{children:"Crear un archivo .gitignore"})," en la p\xe1gina ",(0,r.jsx)(s.strong,{children:"General"})," de las preferencias. To configure the contents of that file, see ",(0,r.jsxs)(s.a,{href:"/docs/pt/Preferences/general#create-gitignore-file",children:["Create ",(0,r.jsx)(s.code,{children:".gitignore"})," file"]}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,s,n)=>{var r=n(296540),d=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var r,o={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(l=s.ref),s)i.call(s,r)&&!a.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:d,type:e,key:c,ref:l,props:o,_owner:t.current}}s.Fragment=o,s.jsx=c,s.jsxs=c},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var r=n(296540);const d={},o=r.createContext(d);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);