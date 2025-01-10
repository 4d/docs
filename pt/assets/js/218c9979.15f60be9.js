"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96946"],{965168:function(e,o,r){r.r(o),r.d(o,{default:()=>l,frontMatter:()=>a,metadata:()=>s,assets:()=>t,toc:()=>A,contentTitle:()=>d});var s=JSON.parse('{"id":"Project/creating","title":"Trabalhar com um projecto","description":"Projetos 4D s\xe3o criados e desenvolvidos usando a aplica\xe7\xe3o 4D , que fornece um abrangente Ambiente Integrado de Desenvolvimento (IDE). 4D Server tamb\xe9m pode criar novos projetos vazios.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Project/creating.md","sourceDirName":"Project","slug":"/Project/creating","permalink":"/docs/pt/19/Project/creating","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fcreating.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"creating","title":"Trabalhar com um projecto"},"sidebar":"docs","previous":{"title":"Vis\xe3o Geral","permalink":"/docs/pt/19/Project/overview"},"next":{"title":"Arquitetura de um projeto 4D","permalink":"/docs/pt/19/Project/architecture"}}'),n=r("785893"),i=r("250065");let a={id:"creating",title:"Trabalhar com um projecto"},d=void 0,t={},A=[{value:"Criar arquivos de projeto",id:"criar-arquivos-de-projeto",level:2},{value:"Abrir projeto",id:"abrir-projeto",level:2},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:3},{value:"Atalhos de abertura de projectos",id:"atalhos-de-abertura-de-projectos",level:2},{value:"Abrir um projeto com um ficheiro 4DLink",id:"abrir-um-projeto-com-um-ficheiro-4dlink",level:3},{value:"Sobre 4DLink Files",id:"sobre-4dlink-files",level:2},{value:"Guardar arquivos",id:"guardar-arquivos",level:2}];function c(e){let o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["Projetos 4D s\xe3o criados e desenvolvidos usando a aplica\xe7\xe3o ",(0,n.jsx)(o.strong,{children:"4D"})," , que fornece um abrangente Ambiente Integrado de Desenvolvimento (IDE). ",(0,n.jsx)(o.strong,{children:"4D Server"})," tamb\xe9m pode criar novos projetos vazios."]}),"\n",(0,n.jsxs)(o.p,{children:["O desenvolvimento multi-usu\xe1rio \xe9 gerido atrav\xe9s de ferramentas de ",(0,n.jsx)(o.strong,{children:"source control"})," padr\xe3o (Perforce, Git, SVN, etc.), que permitem aos programadores trabalhar em ramos diferentes e comparar, fundir ou reverter modifica\xe7\xf5es."]}),"\n",(0,n.jsx)(o.h2,{id:"criar-arquivos-de-projeto",children:"Criar arquivos de projeto"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"})," Servidor 4D pode abrir arquivos .4DProject em modo apenas leitura, mas apenas para prop\xf3sitos de teste. Para lan\xe7amento, projetos 4D s\xe3o oferecidos como arquivos .4dz (arquivos compactados zipados). Para saber mais, consulte ",(0,n.jsx)(o.a,{href:"building.md",children:"Construir um pacote de projetos"}),". Em qualquer caso, os ficheiros de projeto s\xe3o armazenados na m\xe1quina local."]}),"\n",(0,n.jsx)(o.p,{children:"Para criar um novo projeto de banco de dados:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Inicie 4D ou 4D Server."}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Select ",(0,n.jsx)(o.strong,{children:"New > Project..."})," from the ",(0,n.jsx)(o.strong,{children:"File"})," menu: ",(0,n.jsx)(o.img,{src:r(155194).Z+"",width:"558",height:"199"}),"OR(4D only) Select ",(0,n.jsx)(o.strong,{children:"Project..."})," from the ",(0,n.jsx)(o.strong,{children:"New"})," toolbar button:",(0,n.jsx)(o.img,{src:r(849235).Z+"",width:"285",height:"251"}),"A standard ",(0,n.jsx)(o.strong,{children:"Save"})," dialog appears so you can choose the name and location of the 4D project's main folder."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Coloque o nome de sua pasta de projeto e clique ",(0,n.jsx)(o.strong,{children:"Save"}),". Este nome ser\xe1 utilizado:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:'as the name of the .4DProject file at the first level of the "Project" folder.'}),"\n",(0,n.jsx)(o.li,{children:'as the name of the .4DProject file at the first level of the "Project" folder.'}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Pode escolher qualquer nome permitido pelo seu sistema operacional. ",(0,n.jsx)(o.em,{children:"Aten\xe7\xe3o:"})," se seu banco projeto estiver destinado a funcionar em outros sistemas ou a ser guardada atrav\xe9s de uma ferramenta de controle de c\xf3digo fonte, deve levar em considera\xe7\xe3o suas recomenda\xe7\xf5es espec\xedficas de denomina\xe7\xe3o."]}),"\n",(0,n.jsxs)(o.p,{children:['Quando validar a caixa de di\xe1logo, 4D fecha o banco de dados atual (se houver) e cria uma pasta "Project" no local indicado e coloca nela todos os arquivos necess\xe1rios para o funcioanamento correto do banco de dados projeto. Para saber mais, consulte ',(0,n.jsx)(o.a,{href:"/docs/pt/19/Project/architecture",children:"Arquitetura de um projeto 4D"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Pode ent\xe3o come\xe7ar a desenvolver o seu projeto."}),"\n",(0,n.jsx)(o.h2,{id:"abrir-projeto",children:"Abrir projeto"}),"\n",(0,n.jsx)(o.p,{children:"Lance uma aplica\xe7\xe3o 4D Developer."}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Select ",(0,n.jsx)(o.strong,{children:"Open a local application project"})," in the Welcome Wizard dialog, OR Select ",(0,n.jsx)(o.strong,{children:"Open/Local Project..."})," from the ",(0,n.jsx)(o.strong,{children:"File"})," menu or the ",(0,n.jsx)(o.strong,{children:"Open"})," toolbar button. Aparece a caixa de di\xe1logo padr\xe3o Abrir."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Select the project's ",(0,n.jsx)(o.code,{children:".4dproject"})," file and click ",(0,n.jsx)(o.strong,{children:"Open"}),". Por padr\xe3o, o projeto \xe9 aberto com seu arquivo de dados atual. Outros tipos de arquivo s\xe3o sugeridos:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Arquivos de projeto empacotados"}),": ",(0,n.jsx)(o.code,{children:".4dz"})," extens\xe3o - projetos de implanta\xe7\xe3o"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Arquivos de atalho"}),": ",(0,n.jsx)(o.code,{children:".4DLink"})," extens\xe3o - armazenar par\xe2metros adicionais necess\xe1rios para a abertura de projetos ou aplicativos (endere\xe7os, identificadores, etc.)"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Arquivos bin\xe1rios"}),": ",(0,n.jsx)(o.code,{children:".4db"})," ou ",(0,n.jsx)(o.code,{children:".4dc"})," extens\xe3o - formatos de banco de dados legacy 4D"]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"op\xe7\xf5es",children:"Op\xe7\xf5es"}),"\n",(0,n.jsxs)(o.p,{children:["Al\xe9m das op\xe7\xf5es padr\xe3o do sistema, o di\xe1logo ",(0,n.jsx)(o.em,{children:"Abrir"})," em 4D fornece dois menus com op\xe7\xf5es espec\xedficas que est\xe3o dispon\xedveis usando o bot\xe3o ",(0,n.jsx)(o.strong,{children:"Abrir"})," e o menu ",(0,n.jsx)(o.strong,{children:"Arquivo de Dados"}),"."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Abrir"})," - Modo de abertura do projeto:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Interpretado"})," ou ",(0,n.jsx)(o.strong,{children:"Compilado"}),": Essas op\xe7\xf5es est\xe3o dispon\xedveis quando o projeto selecionado cont\xe9m ambos ",(0,n.jsx)(o.a,{href:"/docs/pt/19/Concepts/interpreted-compiled",children:"interpretados e compilados c\xf3digo"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"/docs/pt/19/MSC/overview",children:"Manuten\xe7\xe3o do Centro de Seguran\xe7a"})}),": Abrir em modo seguro permitindo acesso a projetos danificados a fim de realizar os reparos necess\xe1rios."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Arquivo de dados"})," - especifica o arquivo de dados a ser usado com o projeto. Por predefini\xe7\xe3o, a op\xe7\xe3o ",(0,n.jsx)(o.strong,{children:"Current data file"})," est\xe1 selecionada."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"atalhos-de-abertura-de-projectos",children:"Atalhos de abertura de projectos"}),"\n",(0,n.jsx)(o.p,{children:"4D oferece v\xe1rias maneiras de abrir projetos diretamente e ignorar o di\xe1logo Aberto:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"atrav\xe9s de op\xe7\xf5es de menu:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Barra de Menu"})," - ",(0,n.jsx)(o.strong,{children:"Arquivo"})," > ",(0,n.jsx)(o.strong,{children:"Abrir Projetos Recentes / {project name}"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"4D Tool bar"})," - Selecione o projeto no menu associado ao bot\xe3o ",(0,n.jsx)(o.strong,{children:"Abrir"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"atrav\xe9s das prefer\xeancias:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Defina a prefer\xeancia geral ",(0,n.jsx)(o.strong,{children:"Na inicializa\xe7\xe3o"})," para ",(0,n.jsx)(o.strong,{children:"Abrir o \xfaltimo projeto utilizado"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["usando o arquivo ",(0,n.jsx)(o.code,{children:".4DLink"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"abrir-um-projeto-com-um-ficheiro-4dlink",children:"Abrir um projeto com um ficheiro 4DLink"}),"\n",(0,n.jsxs)(o.p,{children:["Voc\xea pode usar um arquivo ",(0,n.jsx)(o.a,{href:"#about-4DLink-files",children:(0,n.jsx)(o.code,{children:".4DLink"})})," para iniciar o aplicativo 4D e abrir o projeto 4D de destino. H\xe1 duas formas de o fazer:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["duplo-clique ou arraste e solte o arquivo ",(0,n.jsx)(o.code,{children:".4DLink"})," no aplicativo 4D"]}),"\n",(0,n.jsxs)(o.li,{children:["ir para ",(0,n.jsx)(o.strong,{children:"Arquivo"})," > ",(0,n.jsx)(o.strong,{children:"Abrir Projetos Recentes"})," e selecionar um projeto"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"open-recent-projects",src:r(713540).Z+"",width:"500",height:"225"})}),"\n",(0,n.jsx)(o.p,{children:'Um arquivo .4DLink do tipo "projeto remoto" pode ser copiado e usado em v\xe1rias m\xe1quinas.'}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Tamb\xe9m \xe9 poss\xedvel selecionar um arquivo 4DLink na caixa de di\xe1logo 4D e 4D Server de abertura (abrindo apenas projeto local)."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"sobre-4dlink-files",children:"Sobre 4DLink Files"}),"\n",(0,n.jsxs)(o.p,{children:["Arquivos com a extens\xe3o ",(0,n.jsx)(o.code,{children:".4DLink"})," s\xe3o arquivos XML que cont\xeam par\xe2metros destinados a automatizar e simplificar a abertura de projetos 4D locais ou remotos."]}),"\n",(0,n.jsxs)(o.p,{children:["Arquivos",(0,n.jsx)(o.code,{children:".4DLink"})," podem salvar o endere\xe7o de um projeto 4D assim como seus identificadores de conex\xe3o e modo de abertura, poupando tempo quando abrir projetos."]}),"\n",(0,n.jsxs)(o.p,{children:["4D gera automaticamente um ",(0,n.jsx)(o.code,{children:".4DLink"})," arquivo quando um projeto local \xe9 aberto pela primeira vez ou quando se conecta a um servidor pela primeira vez. O arquivo \xe9 armazenado na pasta de prefer\xeancias locais no seguinte local:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Windows 7 e superior: C:\\Users\\UserName\\AppData\\Roaming\\4D\\Favorites vXX\\"}),"\n",(0,n.jsx)(o.li,{children:"OS X: Users/UserName/Library/Application Support/4D/Favorites vXX/"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:'XX representa o n\xfamero da vers\xe3o da aplica\xe7\xe3o. Por exemplo, "Favorites v19" para 4D v19.'}),"\n",(0,n.jsx)(o.p,{children:"Esta pasta est\xe1 dividida em duas subpastas:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["a pasta ",(0,n.jsx)(o.strong,{children:"Local"})," cont\xe9m os arquivos ",(0,n.jsx)(o.code,{children:".4DLink"})," que podem ser usados para abrir projetos locais"]}),"\n",(0,n.jsxs)(o.li,{children:["a pasta ",(0,n.jsx)(o.strong,{children:"Remote"})," cont\xe9m os arquivos ",(0,n.jsx)(o.code,{children:".4DLink"})," dos projetos remotos recentes"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Os arquivos ",(0,n.jsx)(o.code,{children:".4DLink"})," podem tamb\xe9m ser criados com um editor XML."]}),"\n",(0,n.jsxs)(o.p,{children:["4D fornece um DTD descrevendo as chaves XML que podem ser usadas para construir um arquivo ",(0,n.jsx)(o.code,{children:".4DLink"}),". Este DTD \xe9 nomeado database_link.dtd e \xe9 encontrado na subpasta \\Resources\\DTD\\ da aplica\xe7\xe3o 4D."]}),"\n",(0,n.jsx)(o.h2,{id:"guardar-arquivos",children:"Guardar arquivos"}),"\n",(0,n.jsxs)(o.p,{children:["Ao trabalhar em um projeto em 4D, voc\xea pode usar editores 4D integrados para criar, modificar ou salvar itens de estrutura, m\xe9todos, formul\xe1rios, etc. Modifica\xe7\xf5es s\xe3o salvas no disco quando selecionar um item de menu ",(0,n.jsx)(o.strong,{children:"Salvar"})," ou quando a janela do editor perder ou ficar com o foco."]}),"\n",(0,n.jsxs)(o.p,{children:["J\xe0 que os editores usam arquivos no disco, podem ocorrer conflitos potenciais se o mesmo arquivo for modificado ou at\xe9 mesmo exclu\xeddo de locais diferentes. For example, if the same method is edited in a method editor window ",(0,n.jsx)(o.em,{children:"and"})," in a text editor, saving both modifications will result in a conflict."]}),"\n",(0,n.jsx)(o.p,{children:"A estrutura de desenvolvimento 4D inclui um gerenciador de acesso a ficheiros para controlar o acesso simult\xe2neo:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["se um arquivo aberto for somente leitura no n\xedvel do SO, um \xedcone bloqueado ser\xe1 exibido no editor: ",(0,n.jsx)(o.img,{src:r(171682).Z+"",width:"22",height:"31"})]}),"\n",(0,n.jsx)(o.li,{children:"se um arquivo aberto for editado simultaneamente a partir de diferentes locais, 4D exibe uma caixa de di\xe1logo de alerta ao tentar salvar as altera\xe7\xf5es:"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:r(251503).Z+"",width:"352",height:"185"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Sim"}),": descartar as altera\xe7\xf5es do editor e recarregar a vers\xe3o modificada"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"N\xe3o"}),": salve as altera\xe7\xf5es e substitui a outra vers\xe3o"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Cancelar"}),": n\xe3o guardar"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Esta funcionalidade est\xe1 ativada para todos os editores 4D incorporados (Estrutura, Formul\xe1rio, M\xe9todo, Defini\xe7\xf5es e Caixa de Ferramentas)."})]})}function l(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},713540:function(e,o,r){r.d(o,{Z:function(){return s}});let s=r.p+"assets/images/4Dlinkfiles-96f51627e9276395742d3cb918b30a6b.png"},171682:function(e,o,r){r.d(o,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAfCAIAAABs2aqkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAE1SURBVEhL7ZQ9DoMwDEZ7ScaOPQMTDEhcgw1xAK7BIcoBUNmRaF9iKwk/EVLbAVV9U2x//uJEkMv4Mae1aNs2TdOrhQWhFiIsLPq+z/M8y7Ku6x4WFoQkKalow8ICadM08zw/AwhJUlLRBm/BwGxIwzRNdV3fLCwISVKKnchbcGzGZlvaiqK4W1gQkqSEQKVLvAWXx+FRsznNkmRBSJISAkmu8BZJkiAFFpqyxPKOv4XnSxbDMFRVheIQZIil02EsKJRlSU12i4EAGWLpdBgLPp7DfgEZYul0GAsmVEmATK5BAEnpdJzHwv1gIbsWuz+bsXC/+SG7v7yxcI+NCiPEHh5jAdS2T14IJQTIRB+iFryulIFRV/dCSFKqu4+wWggMyVG5MLlLgZBk7OGEhcV7/IjFOL4AhB3iYxYMqdEAAAAASUVORK5CYII="},251503:function(e,o,r){r.d(o,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWAAAAC5CAIAAACZRXJIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABSsSURBVHhe7Z29biTHEcc3MexXUKZ3YEYYSg0YEHCAEpvJQbzjkkdSwIXO+ApMFflywSkBA5cwly8TFBxwggDHgh9Asl3Vn9XdVT2zy5ndneX/h8Gpt7ururq6+8/e5YdWb8GTOb+8rZ4317cnJydfPXtevnx5fn5+cXFxeXl5fX19c3Pzjcat4+rqivrQv+v1mmypM9g7LBD/AwCABggEAMAEAgEAMIFAAABMIBAAABMIBADABAIBADCBQAAATCAQAAATCAQAR85qtfr+++/DCwFVUlN4YTBWIB7Wq9X6IbxgqOL0/mN4AQA4WEgIfvf7P1QaoVa2jBOIj/enp+v1qVSEkQIBHQFg/1RyMFIdiFECwfpw/9H/G6ogEAAsiiQKqRAauowRiI9BGeJ/HeLkUz29lWH8mxBuovtGqPMUb08AAHvAS8N4dSBGCETWBakQSSCEUjysXYlqRBVuEAAcBrMIhFQFKse7QDz5XCXgVikKEAgADgKvDvRvKoSGLoMCwdeBkvw+IgpE9f4BAgHAYVGJwniNGBKI+oAnPUgNVKg0AAIBwAGhysFIjRgQiPZ8R4UQLVwVqd9i8ItYDwDYA3T+VCGgSmoKLwxGfEgJAHiuQCAAACYQCACACQQCAGACgQAAmEAgAAAmEAgAgAkEAgBgAoEAAJhAIAAAJhAIAIAJBAIAYAKBAACYQCAAACYQCACACQQCAGACgQAAmEAgAAAmEAgAgAkEAgBgAoEAAJjMIBD//js/AIDlM4NAPH7ODwBg+UwtEHR3eL/iB5cIAJbP1ALx+Pl//7WiB5cIAI6ASQXCXR9+/YkfXCIAOAImFQh3ffj1Z352c4l4uPv29N0v4cV2/Pzh9OTb1cm360f2tjr74P+fgVy+++SKo5ggkppf7s8m97kHPr77rshqLDNG8kciPQsOOm8z7JN5mU4g0vXBCcSElwjeOm4blc97/r+APjXdn9Zud3rkHuUyBGIKbIEwkz8SCMQOmE4gxPXBP5NfItpD+9R081ew7+5/Dq8k7Vh9Zlj4IxSIAjv5I1mEQFRBPleBqK4P/pn6kwgIxBKBQEAglOuDf6a9RFgCwWsg3nckRL2yEUVrMJT+q7H6roheJPGddq/e3uibzk6tr8NTT2ycde7mMjAiAGVdQv3ZhwfqFodLWS1sm+QTokMxO8uzwMxbNQTBfVoPxnqReSeHxYzCKBxJrnT9aycj1jQE+fi+7b8DphAI9frgn0kvEe0C++1CGXev+D1t6sBNaQk5uVpmyy9i0n9dHnLVieTju/faEOU78HfNNo3bK/oswrBC6tUb4UmUbvmli0fmJOfBbvKHTYadxu0n35yF7llg561eu2IJEsZ6+dH1HBaBldkIx9u/GHSizTqoRuy2Y6YQCOP64J8JLxFytTxVTV6McvP5NWu3wiiBGOfKjKQiLXzttqXYZ0wysUKyQx0ZHnerd3M+UWV6yyTkoetTJ8cqwiijzU3mLHqeBXbeXFMSDl4LLQkFlTypOexlow6y60SdtesjVmHHPFkgmuuDJ72c8BJRJZegmrzeRFpOLrBUy6fo6SlXRfrP5XGuzEgcbo2Tudhw9NLco+VuZuIJsUKyQ+2Hl5AZIKrNzVb+pWIuYyuapJPCv5V8axZdzwI7b00wZbeMtV56DjvZaILsOkkjhsf3NKa5I54sEM31oRaI6S4RxfZybLJmGmMFYtiVGYnbK3mBG288EHUo5+XoC4QWkh2qHV6BzABRb02y8i8V82kFYtTsjJPTEwhX9oOmQgV3VtfLzKEScB5xE4GonASWLBDapw+tQEx1iai2L2Gmmzdf2hM2YwRinKuRC8+L3e6DMowIb/RivqmbFZIdqhleicwAUW9NsvIv24GK2Iq5sM/opPBf9sxN1iy6ngV23hxkxamgucg+CXu9gmEi9WwDFiOOFQhr1ssWCO3TB0UgJrpE5D0UMdPtO+eV/uX+Tktxs3WS/7o85MqMRC68K6f6derPnYut73AbPW+aYt9bIXXqrURJ2Fxk2BSIdqAcmysnKx5oQ4FonYdZ9DwLenljeBbv19oHSYy1Xi6qsZtNjii6ERs4iWu3WIHQrg/0qAIxySWCMyhXuptuwmU8PEW3RH+PirEGXXUicV+FnC0tc6oPm88/rToQvM9O333y252fZu7RvBhare+EJ2FbMUpHIIg8rzon4Yjy479pGq0K/3byCXUWHc+CgbwFJ4phQF+voRwOZ8ON2HeiztqY5o54gkAY37zQBWKGH6wEYCu8gsgzDEy2FQjj+kCPJRBTfRIBwJPgm4tyewIq2wqE/bMPpkDgEgH2D64Pm7GVQNjXB3o6AoFLBNgj4WOC+iMJ0GMrgej+6GRPIHCJAGBRbC4Q3esDPX2BwCUCgAWxuUB0rw/0DAgELhEALIcNBWLo+jDqwSUCgIWwoUAMXR9GPrhEALAINhGIcdeHwbcY/OASAXZI9WOaT8T60UYeZX8/8jgTmwjEuOvDKIF4xpcI+TO5/sG35edm7wIhF31Zyz1aICb59EE+z/US0Wwv9/vFz+Bn+6xzRXSaJmE3AiEp+3xap9H5ly/UX705UEYLxESfPsjneV4itO3lfp/n2H+A5xkLhMT6OxQHyjiBoK/z/1z99sPqtx8nfX5YkdsRl4jw47Gc9HBPK3+LjlaChTnXi571zuC94uvLv3qq+Cl+4TKP6HdbHsL5V2NTCQOFV5HyC0snfk+746Vbw5zTKH/Hmbs1zivP/FJEm1vt5BQrFWydAqb+xfT1psEMEGHK5tKbvypqOjcmRbAHX2/+sdw0SmeydSSHzziBoK/zdJJneoYvESHj6c0bZ7naSSLpbi3T6jrb2Fo0+d1g+9ngj5fml8VwKmFbh1cRF4w/vZ34M3wq5A7Of8LINufyoECUnv3s0knLo2zxl131iTuqplEZ8FblkrFh8iMm0kSoO+9OKpqU20YiTbTJmhM5ZDb5kHJvNJnlRQq71u2StN7FSQvkznl/e+Qq1n4qqt1m7mZ1ZxQYHWJsvfglnJOkmBye99kzZ5N6+sp+FVlybu/TnzBgV1qKjKNI1Bk2MlM0jc2As5Lx1N3yfHNUo52LSfW2jaQvEFyjZPvQWYxA5MPA5DWrV0Js1kjs3DRJW3XVudJdENwzfAYYd6gqPxJ1oLxNO/GXSD8UUshPz3ykQOQJUgd2G2dU9eeXWnKKlRLxyIAriqatMsCwYYonPD6YvGRDzpVJNSbWROTGaPtwjZbtAwcCEWybFWWrXCNs5T4glAAKPzXNQI7kvxN/DdX7L32p0DcfKxBxCtTfuWXxIp/SvJecvQpEZRgYJxDGpBoTayJ9gVgoR/EWQ65E5w4prDy8otG2v9u4Nb6cQSB4a4Zz1Ym/IZxGGjHF0zOvdbaaiIDi+e7+8cNpiNNLg6v0YXST81SBGJ2B2mFrGMkz7Ti3JtWMzt60ich8dia7LJYjEHldC71oV4LXKa+07OzKqTNvCFsg5E5yZXkG5LmqDcmtf9nuRYc6kHRox9/AY9V/f7VjzkOnJj993TNbnZ659xcOMqSXOexuciyBKMoVZdPIDNSZbA3l3/KNHkzn5qRcnzSQz1s5rkeOokyWaxSZO3AW9BZD/zOk7S4h3EkInYv96hc7OpG2rZ/shOrFehf7oDWknv6l3HACGZt7jK+NsUMZf0W5dyO2eTN9MRGJ8yACc3ORrvIQTXJMgUijNwG3TWMywH0aV+7814bKkmnOrUl1to2kHKWZLDuEQMwC59raJU/BWunlMFdmAPA8Z4FY/uniL+zlPRaASXlWAkF+8nFy98nlXfkEuD6A2XleNwj55rP+DGlRhIkYnyAAMBWLEAgAwH6AQAAATCAQAAATCAQAwAQCAQAwgUAAAEwgEAAAEwgEAMAEAgEAMIFAAABMIBAAABMIBADABAIBADCBQAAATCAQAAATCAQAwAQCAQAwgUAAAEwWIRAP69Vqta7/QNzH+9PV6vR++I9Sk/mYbhWlFYfQRBDhSJQRthsXgANiKQJxSpSHjY+sLRDycG53UJOVE6L1em0KhItEGWG7cQE4IBYjEOt1qRBUx4fWOoHycG53UCsrHk8VCNKP9f19LV/MduMCcEAsRiDuP8ojSqfS18QT6L7MO6gP1UfYwnV7CB3ykc0m4ujHytP7+1ECwfLwEMJJNbWHIgDf3RWLAQA4QK6vr5ciEOKMhgMZ6lMH5mHtSqKGy/EsctH7yCV3Xutmd4aTB4KaQndBiCP91/DAlW1R9AXgQFmSQKRzSK/dwRL1/PU4wm2xSZrLMpvkwxkc5nPu6/KL1EWSu6eS7kG6ssoAHCKLEgh//uiuHo5VrKfq+vQOncnShGo3FwiqKaHuEAhwXLx582ZBAuGK+eqf6rm2PGry7KllNgknPotFruS6wiU1JYGQDh1ZF1QPsr9VBuAQWZpA8LnTDqo7jgHXTm2xbJzJbCJOaTCjqs6HlNKhIwuE6kH2t8oAHCKLEAgAwH64urqCQAAAdC4vLyEQAAAd/mlECAQAQOXi4gICAQDQef36NQQCAKDz6tWrwxeI+J1DR/pm4/7hb5Tu9/uUc3yj9Ok+l/vt2xGRb7Po0yYketvJ9js/P1+EQMREcFL2KxEHtfunCkb6ebrPg0rRRkwY+bQplbTeZkz4ixcvFiUQc+ZiHHsPQDJVMNNm+KBStBETRj5tSiWttxkTTuKwKIGgIl8gyotEkx+qCORObFLWNTV1hfNb/J54duy6pIFd4T79DGWMJTpsfi7TiD8HkFpTW1X2iBrFtp5PW+EgJxGudj57vx0vbT1Vm+4hDxMcuG4jk1aPbkVTDE1NqZ8dxsgRE24I7mPEz+RBnHURVe5pDqE1KUH6SKqxpG0y5p7rNVU3Aw2xFIFIiCkrxQrOi0sl56xcwrYmdeaiK7lxaweiWy67nj4ILtYlt2TJykGNdfy5/9BwiVSj2VJdHMIhzMMEE9Izu2q8dmzVTLYeEsmV65bcNyWRtGTCRS5RReU14HwK98Ese00kn7mtN2KmMGyiTggPvmc2SjaDQ6SmbKYFKfqLnmJluDL12Iil3SCKOcdEt1PnhHhcG1uV66fXCLhRjJvHk5WprFWSw8I6v3BQTRl/GVJs1jxnYo1q62aUDZQJJqxRpH+BtC2HdhjeqBjwNcZAqU5WBkMHjeZqcseM5rMqUzEQnWdH9oiZ5MrwH7BaY7kzhDrf7D55awveNvuiBvdCdNiQpQmESIBPWpE6T92lzhozpkYfV1amslYZBy8qBb499yoDIAN7uIQYS7FluMVvv7JPiTWK7r9Aaep7oJJvNbqluqHRubo6vKpPWW7D2GRER3JrjeWxWmO5M0TbpAapFGpbanAvRIcNWe4Nwmet/lOVTOqeO0szT1tDZnYNd/d5l7lOZasy2LB17hCh2iL+3F8Ml0uuvXKijCUtPDwOd1LsI8mPVe7Y8nhlk+Yh1eXuWjcuiJmLytRVEqeWUH2KcqorwthgROEiFaqyx2qV5rVNpG3iGi3IquDL7U6oOpS+uyxFIBLF3EQyJC6H3Lc+fp5o0dREO4arOJXuo51Y4QhmsYPznwplOXSl1+LTLwG3J79EDkB0jk60P9Irxmptk2Eao55gJvQtJuWrW/+1bTOS6iHa50UxBorOjI8M3RixTxOK4TOX2zDGjZhJrqyxAsEr2xo9Oyltm4I7Mq4+pBSNvme21QYtysMsQiBMaK5VYidls1T24DVTIp05/oVjJA3skiULBG2gic6vwWQCQY4UT7PHv2z0pIHdslCB8LeoubfPEwXCB+mpvhLuJv4l0kka2ANLvkEAAGYGAgEAMIFAAABMIBAAABMIBADA5O3bBfyftQAA++H65VcQCACAzl+//BICAQDQwWcQAAATCAQAwAQCAQAwgUAAAEwgEAAAEwgEAMAEAgEAMAkC8RMAADQEgfgPAAA0QCAAACYQCACACQQCAGACgQAAmEAgAAAmEAgAgAkEAgBgAoEAAJhAIIZZ/e3Ho3/CVBv+8QwIU20IzUdNmKoNBGKY6iwd5ROm2kB76OejpnNInvPcExCIYfwRCkk9OiAQYaoNEAgCAjEMBOKIgUD0eXv1FwjEABCIIwYC0efFF19AIAaAQBwxEIg+f/riBQRigBkF4t3ZKnJy9xgqVR7vToa6bMduBcJN+OxdeMVQzSzzGslMAsHzLKb5RGbJEgRiGuYSCN5EadVnE4Ahdi4QJycn8uwco0DQYp6cnZ1MOK+9CQTeYgwzj0CwIhRfY5qK3bB7gbh7R+cn7fYjFAjWh7tH/2+oeip7Ewh8SDnMLAKhyEHaUXI3pPJcB2kPAvEoJyOKnJNATI1rvQtvxOaY/wwCEdexUAh1InZlMEtlUZmz5JPETXRd2eItzSiBwLc5B5lLINI2CPDKu0Ue2iKTsheBMApxj3MmcmU+CJufgUGmF4i8snKN1YlYldIq5aEqcNGV2DIZbAQEYhrmEoh6u6f91N8iE7MngXBFTkCsKRMSGotZy/JkTC4QUhXEnNSJbF7JHgUygZsDgZiGWQSiOhBEruhukanZm0CECceaMh9U617I/rNkYGqBoCArRq7puMpm15T9NwMCMQ3zCIRb2bzY/CKus9gFuXr7fdBnfwLhJ0qkCcZZ5wTI/rNkYGKBqGNMM1Enolb2Vz9XRaSTzRgjELe3txCIAeYSCIKXOxD2hCfVn51pm2lK9ikQQSJiTdALIvWR/WfJwLQC0YYYj7s6EWN2VPSoq5+z5DeNdLIZYwTi5uYGAjHAjAJxAOxWIA6OaQViWYwRCLzFGAYCccRAIPpAIIaBQBwxEIg+EIhhIBBHDASiDwRiGH+EjvsJU22AQBwxEIhpqM7SUT5hqg20h46eMNWG0HzUhKnaQCAAACYQCACACQQCAGACgQAAmEAgAAAmEAgAgAkEAgBg8vb1nyEQAACdzz77IwQCAKCDtxgAAJMgEOCJnF/eVs+b69uTk5Ovnj0vX748Pz+/uLi4vLy8vr6+ubn5RuPWcXV1RX3o3/V6TbbUeTfQoJ43EYqBAqYwKPLXr1+/evXq66+/fvHiRVjv58Pbt/8H0Btl0Ys5KvoAAAAASUVORK5CYII="},155194:function(e,o,r){r.d(o,{Z:function(){return s}});let s=r.p+"assets/images/projectCreate1-2b4b8620d716caed56f0b5edbc72d0e9.png"},849235:function(e,o,r){r.d(o,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,o,r){r.d(o,{Z:function(){return d},a:function(){return a}});var s=r(667294);let n={},i=s.createContext(n);function a(e){let o=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);