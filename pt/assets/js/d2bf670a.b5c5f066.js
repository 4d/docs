"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46692"],{468769:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>t,metadata:()=>d,assets:()=>o,toc:()=>l,contentTitle:()=>i});var d=JSON.parse('{"id":"Project/architecture","title":"Arquitectura de um projecto 4D","description":"A 4D project is made of several folders and files, stored within a single parent database folder (package folder). Por exemplo:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Project/architecture.md","sourceDirName":"Project","slug":"/Project/architecture","permalink":"/docs/pt/18/Project/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Farchitecture.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"architecture","title":"Arquitectura de um projecto 4D"},"sidebar":"docs","previous":{"title":"Criar um projeto 4D","permalink":"/docs/pt/18/Project/creating"},"next":{"title":"Desenvolver um projeto","permalink":"/docs/pt/18/Project/developing"}}'),r=n("785893"),a=n("250065");let t={id:"architecture",title:"Arquitectura de um projecto 4D"},i=void 0,o={},l=[{value:"Pasta Project",id:"pasta-project",level:2},{value:"Arquivo <em>databaseName</em>.4DProject",id:"arquivo-databasename4dproject",level:3},{value:"Pasta Sources",id:"sources-folder",level:3},{value:"Pasta DatabaseMethods",id:"pasta-databasemethods",level:4},{value:"Pasta Methods",id:"pasta-methods",level:4},{value:"Pasta Classes",id:"pasta-classes",level:4},{value:"Pasta Forms",id:"pasta-forms",level:4},{value:"Pasta TableForms",id:"pasta-tableforms",level:4},{value:"Pasta Triggers",id:"pasta-triggers",level:4},{value:"Pasta Trash",id:"pasta-trash",level:3},{value:"Pasta DerivedData",id:"pasta-deriveddata",level:3},{value:"Pasta Resources",id:"pasta-resources",level:2},{value:"Pasta Data",id:"pasta-data",level:2},{value:"Pasta Settings",id:"pasta-settings",level:3},{value:"Pasta Logs",id:"pasta-logs",level:3},{value:"Pasta Settings",id:"pasta-settings-1",level:2},{value:"Pasta userPreferences.<em>userName</em>",id:"pasta-userpreferencesusername",level:2},{value:"Pasta Components",id:"pasta-components",level:2},{value:"Pasta Plugins",id:"pasta-plugins",level:2}];function c(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"A 4D project is made of several folders and files, stored within a single parent database folder (package folder). Por exemplo:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["MyProject\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Componentes"}),"\n",(0,r.jsxs)(s.li,{children:["Dados\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Logs"}),"\n",(0,r.jsx)(s.li,{children:"Settings"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:"Documentation"}),"\n",(0,r.jsx)(s.li,{children:"Plugins"}),"\n",(0,r.jsxs)(s.li,{children:["Project\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"DerivedData"}),"\n",(0,r.jsx)(s.li,{children:"Sources"}),"\n",(0,r.jsx)(s.li,{children:"Trash"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:"Resources"}),"\n",(0,r.jsx)(s.li,{children:"Settings"}),"\n",(0,r.jsx)(s.li,{children:"userPreferences.username"}),"\n",(0,r.jsx)(s.li,{children:"WebFolder"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:['Se o seu projeto tiver sido convertido a partir de uma base de dados bin\xe1ria, poder\xe3o existir pastas adicionais. Consulte "Convers\xe3o de bases de dados em projetos" em ',(0,r.jsx)(s.a,{href:"https://doc.4d.com",children:"doc.4d.com"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"pasta-project",children:"Pasta Project"}),"\n",(0,r.jsx)(s.p,{children:"A pasta Project cont\xe9m normalmente a seguinte hierarquia:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Arquivo ",(0,r.jsx)(s.em,{children:"databaseName"}),".4DProject"]}),"\n",(0,r.jsxs)(s.li,{children:["Sources\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Classes"}),"\n",(0,r.jsx)(s.li,{children:"DatabaseMethods"}),"\n",(0,r.jsx)(s.li,{children:"P\xe1gina M\xe9todos"}),"\n",(0,r.jsx)(s.li,{children:"Formul\xe1rios"}),"\n",(0,r.jsx)(s.li,{children:"TableForms"}),"\n",(0,r.jsx)(s.li,{children:"Triggers"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:"DerivedData"}),"\n",(0,r.jsx)(s.li,{children:"Trash (se houver)"}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"arquivo-databasename4dproject",children:["Arquivo ",(0,r.jsx)(s.em,{children:"databaseName"}),".4DProject"]}),"\n",(0,r.jsx)(s.p,{children:"Arquivo de desenvolvimento do projeto, utilizado para designar e lan\xe7ar o projeto. Esse arquivo pode ser aberto por:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"4D Developer"}),"\n",(0,r.jsxs)(s.li,{children:["4D Server (somente leitura, consulte ",(0,r.jsx)(s.a,{href:"/docs/pt/18/Project/developing",children:"Desenvolver um projeto"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," In 4D projects, development is done with 4D Developer and multi-user development is managed through source control tools. 4D Server pode abrir arquivos .4DProject para fins de teste."]}),"\n",(0,r.jsx)(s.h3,{id:"sources-folder",children:"Pasta Sources"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"catalog.4DCatalog"}),(0,r.jsx)(s.td,{children:"Defini\xe7\xf5es de tabelas e campos"}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"folders.json"}),(0,r.jsx)(s.td,{children:"Defini\xe7\xf5es de pasta do Explorer"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"menus.json"}),(0,r.jsx)(s.td,{children:"Defini\xe7\xf5es de menus"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"settings.4DSettings"}),(0,r.jsxs)(s.td,{children:["Propriedades de la base ",(0,r.jsx)(s.em,{children:"Structure"}),". They are not taken into account if ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.a,{href:"#settings-folder-1",children:"user settings"})})," or ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.a,{href:"#settings-folder",children:"user settings for data"})})," are defined. ",(0,r.jsx)(s.strong,{children:"Aviso"}),": nas aplica\xe7\xf5es compiladas, os par\xe2metros de estrutura s\xe3o armazenadas no ficheiro .4dz (s\xf3 de leitura). For deployment needs, it is necessary to use ",(0,r.jsx)(s.em,{children:"user settings"})," or ",(0,r.jsx)(s.em,{children:"user settings for data"})," to define custom settings."]}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tips.json"}),(0,r.jsx)(s.td,{children:"Dicas definidas"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"lists.json"}),(0,r.jsx)(s.td,{children:"Listas definidas"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"filters.json"}),(0,r.jsx)(s.td,{children:"Filtros definidos"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"styleSheets.css"}),(0,r.jsx)(s.td,{children:"Folhas de estilo CSS"}),(0,r.jsx)(s.td,{children:"CSS"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"styleSheets_mac.css"}),(0,r.jsx)(s.td,{children:"Folhas de estilo css para Mac (de um banco de dados bin\xe1rio convertido)"}),(0,r.jsx)(s.td,{children:"CSS"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"styleSheets_windows.css"}),(0,r.jsx)(s.td,{children:"Folhas de estilo css em Windows (de um banco de dados bin\xe1rio convertido)"}),(0,r.jsx)(s.td,{children:"CSS"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"pasta-databasemethods",children:"Pasta DatabaseMethods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"databaseMethodName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todos base definidos na base de dados. Um ficheiro por m\xe9todo base de dados"}),(0,r.jsx)(s.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"pasta-methods",children:"Pasta Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"methodName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todos projeto definidos na base de dados. One file per database method"}),(0,r.jsx)(s.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"pasta-classes",children:"Pasta Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"className"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todo de defini\xe7\xe3o de classe usu\xe1rio, que permite instanciar objetos espec\xedficos. Um arquivo por classe, o nome do arquivo \xe9 o nome da classe"}),(0,r.jsx)(s.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"pasta-forms",children:"Pasta Forms"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(s.td,{children:"Descri\xe7\xe3o do formul\xe1rio projeto"}),(0,r.jsx)(s.td,{children:"json"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todo formul\xe1rio projecto"}),(0,r.jsx)(s.td,{children:"text"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"formName"}),"/Images/",(0,r.jsx)(s.em,{children:"pictureName"})]}),(0,r.jsx)(s.td,{children:"Imagem est\xe1tica do formul\xe1rio projeto"}),(0,r.jsx)(s.td,{children:"picture"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(s.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todos objecto. Um arquivo por m\xe9todo objeto"}),(0,r.jsx)(s.td,{children:"text"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"pasta-tableforms",children:"Pasta TableForms"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Input/",(0,r.jsx)(s.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(s.td,{children:"Descri\xe7\xe3o do formul\xe1rio de entrada da tabela (n \xe9 o n\xfamero da tabela)"}),(0,r.jsx)(s.td,{children:"json"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Input/",(0,r.jsx)(s.em,{children:"formName"}),"/Images/",(0,r.jsx)(s.em,{children:"pictureName"})]}),(0,r.jsx)(s.td,{children:"Imagens est\xe1ticas do formul\xe1rio de entrada da tabela"}),(0,r.jsx)(s.td,{children:"picture"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Input/",(0,r.jsx)(s.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todo do formul\xe1rio de entrada da tabela"}),(0,r.jsx)(s.td,{children:"text"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Input/",(0,r.jsx)(s.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(s.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todos objeto do formul\xe1rio de entrada. Um arquivo por m\xe9todo objeto"}),(0,r.jsx)(s.td,{children:"text"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Output/",(0,r.jsx)(s.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(s.td,{children:"Descri\xe7\xe3o do formul\xe1rio de sa\xedda da tabela (n \xe9 o n\xfamero da tabela)"}),(0,r.jsx)(s.td,{children:"json"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Output/",(0,r.jsx)(s.em,{children:"formName"}),"/Images/",(0,r.jsx)(s.em,{children:"pictureName"})]}),(0,r.jsx)(s.td,{children:"Imagens est\xe1ticas do formul\xe1rio de sa\xedda da tabela"}),(0,r.jsx)(s.td,{children:"picture"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Output/",(0,r.jsx)(s.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todo do formul\xe1rio de sa\xedda da tabela"}),(0,r.jsx)(s.td,{children:"text"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"n"}),"/Output/",(0,r.jsx)(s.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(s.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todos objeto do formul\xe1rio de sa\xedda. Um arquivo por m\xe9todo objeto"}),(0,r.jsx)(s.td,{children:"text"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"pasta-triggers",children:"Pasta Triggers"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["table_",(0,r.jsx)(s.em,{children:"n"}),".4dm"]}),(0,r.jsx)(s.td,{children:"M\xe9todos trigger definidos na database. Um arquivo de acionamento por tabela (n \xe9 o n\xfamero da tabela)"}),(0,r.jsx)(s.td,{children:"text"})]})})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"})," A extens\xe3o de arquivo .4dm \xe9 um formato de arquivo baseado em texto, que cont\xe9m o c\xf3digo de um m\xe9todo 4D. \xc9 compat\xedvel com as ferramentas de controlo da vers\xe3o."]}),"\n",(0,r.jsx)(s.h3,{id:"pasta-trash",children:"Pasta Trash"}),"\n",(0,r.jsx)(s.p,{children:"A pasta Trash cont\xe9m m\xe9todos e formul\xe1rios eliminados do projeto (se existirem). Pode conter as seguintes pastas:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"P\xe1gina M\xe9todos"}),"\n",(0,r.jsx)(s.li,{children:"Formul\xe1rios"}),"\n",(0,r.jsx)(s.li,{children:"TableForms"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:['Dentro destas pastas, os nomes dos elementos eliminados est\xe3o entre par\xeanteses, por exemplo, "(myMethod).4dm". The folder organization is identical to the ',(0,r.jsx)(s.a,{href:"#sources-folder",children:"Sources"})," folder."]}),"\n",(0,r.jsx)(s.h3,{id:"pasta-deriveddata",children:"Pasta DerivedData"}),"\n",(0,r.jsx)(s.p,{children:"A pasta DerivedData cont\xe9m dados em cache usados internamente por 4D para otimizar o processamento. \xc9 criado ou recriado automaticamente quando necess\xe1rio. Voc\xea pode ignorar essa pasta."}),"\n",(0,r.jsx)(s.h2,{id:"pasta-resources",children:"Pasta Resources"}),"\n",(0,r.jsxs)(s.p,{children:["A pasta Resources cont\xe9m todos os arquivos e pastas de recursos personalizados do banco de dados. Nesta pasta, pode colocar todos os ficheiros necess\xe1rios para a tradu\xe7\xe3o ou personaliza\xe7\xe3o da interface da aplica\xe7\xe3o (arquivo imagem, arquivo texto, arquivo XLIFF, etc.). 4D usa mecanismos autom\xe1ticos para trabalhar com o conte\xfado desta pasta, em particular para a manipula\xe7\xe3o de ficheiros XLIFF e imagens est\xe1ticas. Para utilizar no modo remoto, a pasta Recursos permite-lhe partilhar arquivo entre o servidor e todas as m\xe1quinas clientes. Consulte o ",(0,r.jsx)(s.em,{children:"Manual 4D Server"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.em,{children:"item"})}),(0,r.jsx)(s.td,{children:"Ficheiros e pastas de recursos da base de dados"}),(0,r.jsx)(s.td,{children:"v\xe1rios"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["Images/Library/",(0,r.jsx)(s.em,{children:"item"})]}),(0,r.jsx)(s.td,{children:"Imagens da biblioteca de imagens como arquivo separados(*). Os nomes destes itens tornam-se nomes de arquivo. Se existir uma duplica\xe7\xe3o, \xe9 acrescentado um n\xfamero ao nome."}),(0,r.jsx)(s.td,{children:"picture"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"(*) apenas se o projeto tiver sido exportado de um banco de dados bin\xe1rio .4db."}),"\n",(0,r.jsx)(s.h2,{id:"pasta-data",children:"Pasta Data"}),"\n",(0,r.jsx)(s.p,{children:"A pasta Data cont\xe9m o ficheiro de dados e todos os arquivo e pastas relacionados com os dados."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"data.4dd(*)"}),(0,r.jsxs)(s.td,{children:["arquivo de dados que cont\xe9m os dados introduzidos nos registos e todos os dados pertencentes aos registos. Quando abre um projeto 4D, a aplica\xe7\xe3o abre o arquivo de dados atual por defeito. Se alterar o nome ou a localiza\xe7\xe3o deste arquivo, aparecer\xe1 a caixa de di\xe1logo ",(0,r.jsx)(s.em,{children:"Abrir arquivo de dados"})," para que possa selecionar o arquivo de dados a utilizar ou criar um novo"]}),(0,r.jsx)(s.td,{children:"binary"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"data.journal"}),(0,r.jsx)(s.td,{children:"Criado apenas quando a base de dados utiliza um ficheiro de registo. O arquivo de registo \xe9 utilizado para garantir a seguran\xe7a dos dados entre c\xf3pias de seguran\xe7a. Todas as opera\xe7\xf5es efectuadas sobre os dados s\xe3o registadas sequencialmente neste arquivo. Por conseguinte, cada opera\xe7\xe3o sobre os dados provoca duas ac\xe7\xf5es simult\xe2neas: a primeira sobre os dados (a express\xe3o \xe9 executada normalmente) e a segunda no ficheiro de registo (\xe9 registada uma descri\xe7\xe3o da opera\xe7\xe3o). O arquivo de registo \xe9 constru\xeddo de forma independente, sem perturbar ou atrasar o trabalho do utilizador. Uma base de dados s\xf3 pode trabalhar com um \xfanico arquivo de registo de cada vez. O arquivo de registo regista opera\xe7\xf5es como adi\xe7\xf5es, modifica\xe7\xf5es ou elimina\xe7\xf5es de registos, transac\xe7\xf5es, etc. \xc9 gerado por defeito quando \xe9 criada uma base de dados."}),(0,r.jsx)(s.td,{children:"binary"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"data.match"}),(0,r.jsx)(s.td,{children:"(interno) UUID correspondente ao n\xfamero da tabela"}),(0,r.jsx)(s.td,{children:"XML"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"(*) Quando o projeto \xe9 criado a partir de uma base de dados bin\xe1ria .4db, o arquivo de dados n\xe3o \xe9 alterado. Assim, pode ter um nome diferente e ser colocado noutro local."}),"\n",(0,r.jsx)(s.h3,{id:"pasta-settings",children:"Pasta Settings"}),"\n",(0,r.jsxs)(s.p,{children:["This folder contains ",(0,r.jsx)(s.strong,{children:"user settings files for data"})," used for database administration."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["These settings take priority over ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"#settings-folder-1",children:"user settings files"})})," and ",(0,r.jsx)(s.strong,{children:"structure settings"})," files."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Backup.4DSettings"}),(0,r.jsxs)(s.td,{children:["Database backup settings, used to set the ",(0,r.jsx)(s.a,{href:"/docs/pt/18/Backup/settings",children:"backup options"}),") when the database is run with this data file. As teclas relativas \xe0 configura\xe7\xe3o da c\xf3pia de seguran\xe7a s\xe3o descritas no manual ",(0,r.jsx)(s.em,{children:"4D XML Keys Backup"})," ."]}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"settings.4DSettings"}),(0,r.jsx)(s.td,{children:"Propriedades personalizadas de o banco de dados para este arquivo de dados"}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"directory.json"}),(0,r.jsx)(s.td,{children:"Description of 4D groups, users, and their access rights when the database is run with this data file."}),(0,r.jsx)(s.td,{children:"JSON"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"pasta-logs",children:"Pasta Logs"}),"\n",(0,r.jsx)(s.p,{children:"A pasta Logs cont\xe9m todos os arquivos de registo utilizados pelo projeto. Os arquivos de registro incluem, em particular:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"convers\xe3o da base de dados,"}),"\n",(0,r.jsx)(s.li,{children:"pedidos do servidor Web,"}),"\n",(0,r.jsxs)(s.li,{children:["Di\xe1rio de actividades de c\xf3pia de seguran\xe7a/restauro (",(0,r.jsx)(s.em,{children:"Di\xe1rio de c\xf3pia de seguran\xe7a[xxx].txt"}),", ver ",(0,r.jsx)(s.a,{href:"/docs/pt/18/Backup/backup#backup-journal",children:"Di\xe1rio de c\xf3pia de seguran\xe7a"}),")"]}),"\n",(0,r.jsx)(s.li,{children:"depura\xe7\xe3o de comandos,"}),"\n",(0,r.jsx)(s.li,{children:"4D Pedidos do servidor (gerados em m\xe1quinas clientes e no servidor)."}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["An additional Logs folder is available in the system user preferences folder (active 4D folder, see ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html",children:"Get 4D folder"})," command) for maintenance log files and in cases where data folder is read-only."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"pasta-settings-1",children:"Pasta Settings"}),"\n",(0,r.jsxs)(s.p,{children:["This folder contains ",(0,r.jsx)(s.strong,{children:"user settings files"})," used for database administration. Os ficheiros s\xe3o adicionados \xe0 pasta quando necess\xe1rio."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["If a data settings file exists in a Settings folder ",(0,r.jsx)(s.a,{href:"#settings-folder",children:"in the data folder"}),", it takes priority over user settings file."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"directory.json"}),(0,r.jsx)(s.td,{children:"Description of 4D groups and users for the database, as well as their access rights"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BuildApp.4DSettings"}),(0,r.jsxs)(s.td,{children:["arquivos de defini\xe7\xf5es de constru\xe7\xe3o, criado automaticamente quando se utiliza a caixa de di\xe1logo do construtor de aplica\xe7\xf5es ou o comando ",(0,r.jsx)(s.code,{children:"BUILD APPLICATION"})]}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Backup.4DSettings"}),(0,r.jsxs)(s.td,{children:["Defini\xe7\xf5es de c\xf3pia de seguran\xe7a da base de dados, utilizadas para definir as op\xe7\xf5es de  ",(0,r.jsx)(s.a,{href:"/docs/pt/18/Backup/settings",children:"backup"}),") quando cada c\xf3pia de seguran\xe7a \xe9 iniciada. Este ficheiro tamb\xe9m pode ser utilizado para ler ou definir op\xe7\xf5es adicionais, tais como a quantidade de informa\xe7\xf5es armazenadas no  ",(0,r.jsx)(s.em,{children:"di\xe1rio de c\xf3pia de seguran\xe7a"}),". As teclas relativas \xe0 configura\xe7\xe3o da c\xf3pia de seguran\xe7a s\xe3o descritas no manual ",(0,r.jsx)(s.em,{children:"4D XML Keys Backup"})," ."]}),(0,r.jsx)(s.td,{children:"XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BuildApp.4DSettings"}),(0,r.jsxs)(s.td,{children:["arquivos de defini\xe7\xf5es de constru\xe7\xe3o, criado automaticamente quando se utiliza a caixa de di\xe1logo do construtor de aplica\xe7\xf5es ou o comando ",(0,r.jsx)(s.code,{children:"BUILD APPLICATION"})]}),(0,r.jsx)(s.td,{children:"XML"})]})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"pasta-userpreferencesusername",children:["Pasta userPreferences.",(0,r.jsx)(s.em,{children:"userName"})]}),"\n",(0,r.jsx)(s.p,{children:"Esta pasta cont\xe9m arquivos que memorizam as configura\xe7\xf5es do usu\xe1rio, por exemplo, o ponto de ruptura ou as posi\xe7\xf5es das janelas. Pode simplesmente ignorar esta pasta. Cont\xe9m, por exemplo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Conte\xfados"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(s.th,{children:"Formato"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"methodPreferences.json"}),(0,r.jsx)(s.td,{children:"Prefer\xeancias do editor dos m\xe9todos do usu\xe1rio atual"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"methodWindowPositions.json"}),(0,r.jsx)(s.td,{children:"Posi\xe7\xe3o da janela do usu\xe1rio atual para os m\xe9todos"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"formWindowPositions.json"}),(0,r.jsx)(s.td,{children:"Posi\xe7\xe3o da janela do usu\xe1rio atual para os formul\xe1rios"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"workspace.json"}),(0,r.jsx)(s.td,{children:"Lista de janelas abertas; no macOS, ordem das janelas do separador"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"debuggerCatches.json"}),(0,r.jsx)(s.td,{children:"Chamadas aos comandos"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"recentTables.json"}),(0,r.jsx)(s.td,{children:"Lista ordenada de tabelas"}),(0,r.jsx)(s.td,{children:"JSON"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"preferences.4DPreferences"}),(0,r.jsx)(s.td,{children:"Rota de dados atual e posi\xe7\xf5es da janela principal"}),(0,r.jsx)(s.td,{children:"XML"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"pasta-components",children:"Pasta Components"}),"\n",(0,r.jsx)(s.p,{children:"This folder contains the components to be available in the project database only. Deve ser armazenado ao mesmo n\xedvel que a pasta Project."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Um banco de dados projeto pode ser usada como um componente:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"for development: put an alias of the .4dproject file in the Components folder of the host database."}),"\n",(0,r.jsxs)(s.li,{children:["for deployment: build the component (see ",(0,r.jsx)(s.a,{href:"/docs/pt/18/Project/building",children:"Building a project package"}),") and put the resulting .4dz file in a .4dbase folder in the Components folder of the host database."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"pasta-plugins",children:"Pasta Plugins"}),"\n",(0,r.jsx)(s.p,{children:"This folder contains the plug-ins to be available in the project database only. Deve ser armazenado ao mesmo n\xedvel que a pasta Project."})]})}function h(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return t}});var d=n(667294);let r={},a=d.createContext(r);function t(e){let s=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(a.Provider,{value:s},e.children)}}}]);