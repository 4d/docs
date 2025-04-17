"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49179"],{418878:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>t,toc:()=>c,contentTitle:()=>n});var r=JSON.parse('{"id":"Project/code-overview","title":"M\xe9todos e classes","description":"El c\xf3digo 4D utilizado en todo el proyecto est\xe1 escrito en m\xe9todos y clases.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/Project/code-overview.md","sourceDirName":"Project","slug":"/Project/code-overview","permalink":"/docs/pt/Project/code-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fcode-overview.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"code-overview","title":"M\xe9todos e classes"},"sidebar":"docs","previous":{"title":"Documentar um projecto","permalink":"/docs/pt/Project/documentation"},"next":{"title":"Editor de m\xe9todo","permalink":"/docs/pt/code-editor/write-class-method"}}'),d=s("785893"),a=s("250065");let i={id:"code-overview",title:"M\xe9todos e classes"},n=void 0,t={},c=[{value:"Cria\xe7\xe3o de m\xe9todos",id:"cria\xe7\xe3o-de-m\xe9todos",level:2},{value:"Cria\xe7\xe3o de classes",id:"cria\xe7\xe3o-de-classes",level:2},{value:"Excluir os m\xe9todos ou as classes",id:"excluir-os-m\xe9todos-ou-as-classes",level:2},{value:"Importa\xe7\xe3o e exporta\xe7\xe3o de c\xf3digo",id:"importa\xe7\xe3o-e-exporta\xe7\xe3o-de-c\xf3digo",level:2},{value:"Propriedades do m\xe9todo projeto",id:"propriedades-do-m\xe9todo-projeto",level:2},{value:"Nome",id:"nome",level:3},{value:"Atributos",id:"atributos",level:3},{value:"Invis\xedvel",id:"invis\xedvel",level:4},{value:"Partilhada pelos componentes e pela base de dados host",id:"partilhada-pelos-componentes-e-pela-base-de-dados-host",level:4},{value:"Executar no servidor",id:"executar-no-servidor",level:4},{value:"Modo Execu\xe7\xe3o",id:"modo-execu\xe7\xe3o",level:3},{value:"Dispon\xedvel atrav\xe9s de",id:"dispon\xedvel-atrav\xe9s-de",level:3},{value:"Servi\xe7os Web",id:"servi\xe7os-web",level:4},{value:"Publicado em WSDL",id:"publicado-em-wsdl",level:4},{value:"Etiquetas 4D e URLs (4DACTION...)",id:"etiquetas-4d-e-urls-4daction",level:4},{value:"SQL",id:"sql",level:4},{value:"Servidor REST",id:"servidor-rest",level:4},{value:"Defini\xe7\xe3o de lotes para atributos de m\xe9todos",id:"defini\xe7\xe3o-de-lotes-para-atributos-de-m\xe9todos",level:4}];function l(e){let o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:["El c\xf3digo 4D utilizado en todo el proyecto est\xe1 escrito en ",(0,d.jsx)(o.a,{href:"/docs/pt/Concepts/methods",children:"m\xe9todos"})," y ",(0,d.jsx)(o.a,{href:"/docs/pt/Concepts/classes",children:"clases"}),"."]}),"\n",(0,d.jsxs)(o.p,{children:["O IDE 4D fornece v\xe1rios recursos para criar, editar, exportar ou excluir seu c\xf3digo. Normalmente, voc\xea usar\xe1 o ",(0,d.jsx)(o.a,{href:"/docs/pt/code-editor/write-class-method",children:"editor de c\xf3digo"})," 4D inclu\xeddo para trabalhar com seu c\xf3digo. You can also use other editors such as ",(0,d.jsx)(o.strong,{children:"VS Code"}),", for which the ",(0,d.jsx)(o.a,{href:"https://github.com/4d/4D-Analyzer-VSCode",children:"4D-Analyzer extension"})," is available."]}),"\n",(0,d.jsx)(o.h2,{id:"cria\xe7\xe3o-de-m\xe9todos",children:"Cria\xe7\xe3o de m\xe9todos"}),"\n",(0,d.jsxs)(o.p,{children:["Um m\xe9todo em 4D \xe9 armazenado em um arquivo ",(0,d.jsx)(o.strong,{children:".4dm"})," localizado na pasta apropriada da pasta ",(0,d.jsx)(o.a,{href:"/docs/pt/Project/architecture#sources",children:(0,d.jsx)(o.code,{children:"/Project/Sources/"})}),"."]}),"\n",(0,d.jsxs)(o.p,{children:["Puede crear ",(0,d.jsx)(o.a,{href:"/docs/pt/Concepts/methods",children:"varios tipos de m\xe9todos"}),":"]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["Todos los tipos de m\xe9todos pueden crearse o abrirse desde la ventana del ",(0,d.jsx)(o.strong,{children:"Explorador"})," (excepto los m\xe9todos Objeto que se gestionan desde el ",(0,d.jsx)(o.a,{href:"/docs/pt/FormEditor/overview",children:"editor de formularios"}),")."]}),"\n",(0,d.jsxs)(o.li,{children:["Los m\xe9todos proyecto tambi\xe9n pueden crearse o abrirse desde el men\xfa ",(0,d.jsx)(o.strong,{children:"Archivo"})," o la barra de herramientas (",(0,d.jsx)(o.strong,{children:"Nuevo/M\xe9todo..."})," o ",(0,d.jsx)(o.strong,{children:"Abrir/M\xe9todo..."}),") o utilizando los accesos directos de la ventana del [editor de c\xf3digo](../code-editor/write-class-method"]}),"\n",(0,d.jsx)(o.li,{children:"Os triggers tamb\xe9m podem ser criados ou abertos a partir do editor de Estrutura."}),"\n",(0,d.jsxs)(o.li,{children:["Los m\xe9todos formulario tambi\xe9n pueden crearse o abrirse desde el ",(0,d.jsx)(o.a,{href:"/docs/pt/FormEditor/overview",children:"editor de formularios"}),"."]}),"\n"]}),"\n",(0,d.jsx)(o.h2,{id:"cria\xe7\xe3o-de-classes",children:"Cria\xe7\xe3o de classes"}),"\n",(0,d.jsxs)(o.p,{children:["Uma classe usu\xe1rio no 4D \xe9 definida por um arquivo de m\xe9todo espec\xedfico (",(0,d.jsx)(o.strong,{children:".4dm"}),"), armazenado na pasta ",(0,d.jsx)(o.a,{href:"/docs/pt/Project/architecture#sources",children:(0,d.jsx)(o.code,{children:"/Project/Sources/Classes/"})}),". O nome do arquivo \xe9 o nome da classe."]}),"\n",(0,d.jsxs)(o.p,{children:["Puede crear un archivo de clase desde el men\xfa ",(0,d.jsx)(o.strong,{children:"Archivo"})," o la barra de herramientas (",(0,d.jsx)(o.strong,{children:"Nuevo/Clase..."}),") o en la p\xe1gina ",(0,d.jsx)(o.strong,{children:"M\xe9todos"})," de la ventana ",(0,d.jsx)(o.strong,{children:"Explorador"}),"."]}),"\n",(0,d.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,d.jsx)(o.a,{href:"/docs/pt/Concepts/classes",children:"Clases"}),"."]}),"\n",(0,d.jsx)(o.h2,{id:"excluir-os-m\xe9todos-ou-as-classes",children:"Excluir os m\xe9todos ou as classes"}),"\n",(0,d.jsx)(o.p,{children:"Para eliminar um m\xe9todo ou classe existente, pode:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["en su disco, elimine el archivo ",(0,d.jsx)(o.em,{children:".4dm"}),' de la carpeta "Sources",']}),"\n",(0,d.jsxs)(o.li,{children:["in the 4D Explorer, select the method or class and click ",(0,d.jsx)(o.img,{src:s(391034).Z+"",width:"19",height:"18"})," or choose ",(0,d.jsx)(o.strong,{children:"Move to Trash"})," from the contextual menu."]}),"\n"]}),"\n",(0,d.jsxs)(o.blockquote,{children:["\n",(0,d.jsxs)(o.p,{children:["Para eliminar un m\xe9todo objeto, seleccione ",(0,d.jsx)(o.strong,{children:"Borrar el m\xe9todo de objeto"})," en el ",(0,d.jsx)(o.a,{href:"/docs/pt/FormEditor/overview",children:"editor de formularios"})," (men\xfa ",(0,d.jsx)(o.strong,{children:"Objeto"})," o men\xfa contextual)."]}),"\n"]}),"\n",(0,d.jsx)(o.h2,{id:"importa\xe7\xe3o-e-exporta\xe7\xe3o-de-c\xf3digo",children:"Importa\xe7\xe3o e exporta\xe7\xe3o de c\xf3digo"}),"\n",(0,d.jsxs)(o.p,{children:["\xc9 poss\xedvel importar e exportar um m\xe9todo ou o c\xf3digo de uma classe sob a forma de um ficheiro. Estos comandos se encuentran en el men\xfa ",(0,d.jsx)(o.strong,{children:"M\xe9todo"})," del editor de c\xf3digo ",(0,d.jsx)(o.a,{href:"/docs/pt/code-editor/write-class-method"}),"."]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["Cuando se selecciona el comando ",(0,d.jsx)(o.strong,{children:"Exportar el m\xe9todo..."}),", aparece una caja de di\xe1logo est\xe1ndar para guardar archivos, que permite elegir el nombre, la ubicaci\xf3n y el formato del archivo de exportaci\xf3n (ver abajo). Tal como acontece com a impress\xe3o, a exporta\xe7\xe3o n\xe3o tem em conta o estado colapsado das estruturas de c\xf3digo e todo o c\xf3digo \xe9 exportado."]}),"\n",(0,d.jsxs)(o.li,{children:["Cuando se selecciona el comando ",(0,d.jsx)(o.strong,{children:"Importar el m\xe9todo..."}),", aparece una caja de di\xe1logo est\xe1ndar de apertura de archivos que permite designar el archivo a importar. A importa\xe7\xe3o substitui o texto selecionado no m\xe9todo. Para substituir um m\xe9todo existente por um m\xe9todo importado, selecionar todo o conte\xfado do m\xe9todo antes de efetuar a importa\xe7\xe3o."]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"A fun\xe7\xe3o de importa\xe7\xe3o/exporta\xe7\xe3o \xe9 multiplataforma: um m\xe9todo exportado para Mac OS pode ser importado para Windows e vice-versa; 4D lida com a convers\xe3o de caracteres quando necess\xe1rio."}),"\n",(0,d.jsx)(o.p,{children:"4D pode exportar e importar m\xe9todos em dois formatos:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["M\xe9todo 4D (extensi\xf3n ",(0,d.jsx)(o.em,{children:".c4d"}),"): en este formato, los m\xe9todos se exportan codificados. Os nomes dos objectos s\xe3o tokenizados. Este formato \xe9 utilizado em particular para o interc\xe2mbio de m\xe9todos entre aplica\xe7\xf5es 4D e plug-ins em diferentes l\xednguas. Por outro lado, n\xe3o \xe9 poss\xedvel visualiz\xe1-los num editor de texto."]}),"\n",(0,d.jsxs)(o.li,{children:["Texto (extensi\xf3n ",(0,d.jsx)(o.em,{children:".txt"}),"): en este formato, los m\xe9todos se exportan en forma de texto. Neste caso, os m\xe9todos podem ser lidos utilizando um editor de texto normal ou uma ferramenta de controlo da fonte."]}),"\n"]}),"\n",(0,d.jsx)(o.h2,{id:"propriedades-do-m\xe9todo-projeto",children:"Propriedades do m\xe9todo projeto"}),"\n",(0,d.jsx)(o.p,{children:"Ap\xf3s criar um m\xe9todo projeto, pode mudar-lhe o nome e modificar as suas propriedades. As propriedades dos m\xe9todos projeto referem-se principalmente \xe0s suas condi\xe7\xf5es de acesso e seguran\xe7a (acesso de usu\xe1rios, servidores integrados ou servi\xe7os), bem como ao seu modo de execu\xe7\xe3o."}),"\n",(0,d.jsx)(o.p,{children:"Os outros tipos de m\xe9todos n\xe3o t\xeam propriedades espec\xedficas. As suas propriedades est\xe3o relacionadas com as dos objetos a que est\xe3o ligados."}),"\n",(0,d.jsxs)(o.p,{children:["Para mostrar la caja de di\xe1logo ",(0,d.jsx)(o.strong,{children:"Propiedades del m\xe9todo"})," para un m\xe9todo proyecto, puede:"]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["en el ",(0,d.jsx)(o.a,{href:"/docs/pt/code-editor/write-class-method",children:"editor de c\xf3digo"}),", seleccione el comando ",(0,d.jsx)(o.strong,{children:"Propiedades del m\xe9todo..."})," en el men\xfa ",(0,d.jsx)(o.strong,{children:"M\xe9todo"}),","]}),"\n",(0,d.jsxs)(o.li,{children:["o en la p\xe1gina ",(0,d.jsx)(o.strong,{children:"M\xe9todos"})," del Explorador, ",(0,d.jsx)(o.strong,{children:"haga clic derecho"})," en el m\xe9todo proyecto y seleccione ",(0,d.jsx)(o.strong,{children:"Propiedades del m\xe9todo..."})," en el men\xfa contextual o en el men\xfa de opciones."]}),"\n"]}),"\n",(0,d.jsxs)(o.blockquote,{children:["\n",(0,d.jsxs)(o.p,{children:["Una funci\xf3n de par\xe1metrizaci\xf3n global permite modificar una propiedad para todos o parte de los m\xe9todos proyecto de la base en una sola operaci\xf3n (ver ",(0,d.jsx)(o.a,{href:"#batch-setting-for-method-attributes",children:"Modificar atributos de los m\xe9todos globalmente"}),")."]}),"\n"]}),"\n",(0,d.jsx)(o.h3,{id:"nome",children:"Nome"}),"\n",(0,d.jsxs)(o.p,{children:["Puede cambiar el nombre de un m\xe9todo proyecto en el \xe1rea ",(0,d.jsx)(o.strong,{children:"Nombre"})," de la ventana ",(0,d.jsx)(o.strong,{children:"Propiedades del m\xe9todo"})," o en el Explorador."]}),"\n",(0,d.jsxs)(o.p,{children:["El nuevo nombre debe cumplir con las reglas de denominaci\xf3n de 4D (ver ",(0,d.jsx)(o.a,{href:"/docs/pt/Concepts/identifiers",children:"Identificadores"}),"). Se um m\xe9todo com o mesmo nome j\xe1 existe, 4D mostra uma mensagem dizendo que o nome do m\xe9todo j\xe1 foi usado. Se necess\xe1rio, 4D ordena a lista de m\xe9todos novamente."]}),"\n",(0,d.jsxs)(o.admonition,{type:"caution",children:[(0,d.jsxs)(o.p,{children:["Alterar o nome de um m\xe9todo j\xe1 utilizado na base de dados pode invalidar quaisquer m\xe9todos ou f\xf3rmulas que utilizem o nome do m\xe9todo antigo e arrisca perturbar o funcionamento da aplica\xe7\xe3o. Puede cambiar el nombre del m\xe9todo manualmente, pero se recomienda utilizar la funci\xf3n de cambio de nombre de los m\xe9todos proyecto, descrita en ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Renaming.300-6750165.en.html",children:"Renombrar"}),". Com esta fun\xe7\xe3o, \xe9 poss\xedvel atualizar automaticamente o nome sempre que o m\xe9todo for chamado em todo o ambiente de Desenho."]}),(0,d.jsx)(o.p,{children:"Com 4D Server, o nome do m\xe9todo \xe9 alterado no servidor quando termina de o editar. Se mais do que um usu\xe1rio estiver a modificar o nome do m\xe9todo em simult\xe2neo, o nome final do m\xe9todo ser\xe1 o nome especificado pelo \xfaltimo usu\xe1rio a terminar a edi\xe7\xe3o. Pode ser necess\xe1rio especificar um propriet\xe1rio do m\xe9todo para que apenas determinados usu\xe1rios possam alterar o nome do m\xe9todo"})]}),"\n",(0,d.jsx)(o.admonition,{type:"info",children:(0,d.jsx)(o.p,{children:"Os m\xe9todos base de dados n\xe3o podem ser renomeados. O mesmo se aplica aos triggers, m\xe9todos formul\xe1rio e m\xe9todos objeto, que est\xe3o ligados a objetos e recebem os seus nomes do objeto em quest\xe3o."})}),"\n",(0,d.jsx)(o.h3,{id:"atributos",children:"Atributos"}),"\n",(0,d.jsx)(o.p,{children:"\xc9 poss\xedvel controlar como os m\xe9todos projeto s\xe3o utilizados e/ou chamados em diferentes contextos utilizando atributos. Note-se que \xe9 poss\xedvel definir atributos para toda uma sele\xe7\xe3o de m\xe9todos projeto utilizando o Explorador (ver sec\xe7\xe3o seguinte)."}),"\n",(0,d.jsx)(o.h4,{id:"invis\xedvel",children:"Invis\xedvel"}),"\n",(0,d.jsxs)(o.p,{children:["Si no quiere que los usuarios puedan ejecutar un m\xe9todo proyecto utilizando el comando ",(0,d.jsx)(o.strong,{children:"M\xe9todo..."})," del men\xfa ",(0,d.jsx)(o.strong,{children:"Ejecuci\xf3n"}),", puede hacerlo Invisible marcando esta opci\xf3n. Um m\xe9todo invis\xedvel n\xe3o aparece na caixa de di\xe1logo de execu\xe7\xe3o do m\xe9todo."]}),"\n",(0,d.jsx)(o.p,{children:"Quando se torna invis\xedvel um m\xe9todo projeto, este continua a estar dispon\xedvel para os programadores da base de dados. Permanece listado na lista de m\xe9todos do Explorador e do Editor de C\xf3digo."}),"\n",(0,d.jsx)(o.h4,{id:"partilhada-pelos-componentes-e-pela-base-de-dados-host",children:"Partilhada pelos componentes e pela base de dados host"}),"\n",(0,d.jsx)(o.p,{children:"Este atributo \xe9 utilizado no \xe2mbito dos componentes. Quando estiver selecionada, indica que o m\xe9todo estar\xe1 dispon\xedvel para os componentes quando a aplica\xe7\xe3o for utilizada como base de dados do anfitri\xe3o. Por outro lado, quando a aplica\xe7\xe3o for utilizada como um componente, o m\xe9todo estar\xe1 dispon\xedvel para as bases de dados do anfitri\xe3o."}),"\n",(0,d.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n sobre los componentes, consulte el cap\xedtulo ",(0,d.jsx)(o.a,{href:"/docs/pt/Extensions/develop-components",children:"Desarrollo e instalaci\xf3n de componentes 4D"}),"."]}),"\n",(0,d.jsx)(o.h4,{id:"executar-no-servidor",children:"Executar no servidor"}),"\n",(0,d.jsx)(o.p,{children:"Este atributo s\xf3 \xe9 levado em considera\xe7\xe3o para uma aplica\xe7\xe3o 4D em modo cliente-servidor. Quando esta op\xe7\xe3o estiver selecionada, o m\xe9todo do projeto \xe9 sempre executado no servidor, independentemente da forma como \xe9 chamado."}),"\n",(0,d.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n sobre esta opci\xf3n, consulte ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/4D/20/Execute-on-Server-attribute.300-6330555.en.html",children:"Atributo Ejecutar en el servidor"}),"."]}),"\n",(0,d.jsx)(o.h3,{id:"modo-execu\xe7\xe3o",children:"Modo Execu\xe7\xe3o"}),"\n",(0,d.jsxs)(o.p,{children:["Esta op\xe7\xe3o permite-lhe declarar o m\xe9todo eleg\xedvel para execu\xe7\xe3o em modo preemptivo. Se describe en la ",(0,d.jsx)(o.a,{href:"/docs/pt/Develop/preemptive-processes",children:"secci\xf3n Procesos apropiativos"}),"."]}),"\n",(0,d.jsx)(o.h3,{id:"dispon\xedvel-atrav\xe9s-de",children:"Dispon\xedvel atrav\xe9s de"}),"\n",(0,d.jsx)(o.p,{children:"Os atributos de disponibilidade especificam os servi\xe7os externos que est\xe3o autorizados a chamar explicitamente o m\xe9todo."}),"\n",(0,d.jsx)(o.h4,{id:"servi\xe7os-web",children:"Servi\xe7os Web"}),"\n",(0,d.jsxs)(o.p,{children:["Este atributo permite-lhe publicar o m\xe9todo atual como um servi\xe7o Web acess\xedvel atrav\xe9s de pedidos SOAP. Para m\xe1s informaci\xf3n, consulte el cap\xedtulo ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Publication-and-use-of-Web-Services.200-6750103.en.html",children:"Publicaci\xf3n y uso de los servicios web"}),". Cuando esta opci\xf3n est\xe1 marcada, se activa la opci\xf3n ",(0,d.jsx)(o.strong,{children:"Publicado en WSDL"}),"."]}),"\n",(0,d.jsx)(o.p,{children:"In the Explorer, project methods that are offered as a Web Service are given a specific icon."}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Nota:"})," no es posible publicar un m\xe9todo como servicio web si su nombre incluye caracteres que no cumplen con la nomenclatura XML (por ejemplo espacios). Se o nome do m\xe9todo n\xe3o estiver de acordo com isso, 4D n\xe3o atribui a propriedade."]}),"\n",(0,d.jsx)(o.h4,{id:"publicado-em-wsdl",children:"Publicado em WSDL"}),"\n",(0,d.jsxs)(o.p,{children:['Este atributo s\xf3 est\xe1 dispon\xedvel quando o atributo "Servi\xe7o Web" est\xe1 selecionado. Permite-lhe incluir o m\xe9todo atual no WSDL da aplica\xe7\xe3o 4D. Para obtener m\xe1s informaci\xf3n al respecto, consulte ',(0,d.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html#502689",children:"Generaci\xf3n del WSDL"}),"."]}),"\n",(0,d.jsx)(o.p,{children:"In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon."}),"\n",(0,d.jsx)(o.h4,{id:"etiquetas-4d-e-urls-4daction",children:"Etiquetas 4D e URLs (4DACTION...)"}),"\n",(0,d.jsxs)(o.p,{children:["This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special ",(0,d.jsx)(o.a,{href:"/docs/pt/WebServer/httpRequests#4daction",children:"4DACTION URL"})," used for calling 4D methods, nor the special ",(0,d.jsx)(o.a,{href:"/docs/pt/Tags/transformation-tags",children:"4DSCRIPT, 4DTEXT and 4DHTML tags"}),"."]}),"\n",(0,d.jsx)(o.p,{children:"In the Explorer, project methods with this attribute are given a specific icon."}),"\n",(0,d.jsx)(o.p,{children:"Por raz\xf5es de seguran\xe7a, esta op\xe7\xe3o est\xe1 desmarcada por padr\xe3o. Cada m\xe9todo que pode ser executado utilizando o URL ou as etiquetas especiais da Web deve ser indicado individualmente."}),"\n",(0,d.jsx)(o.h4,{id:"sql",children:"SQL"}),"\n",(0,d.jsx)(o.p,{children:"Quando est\xe1 marcada, esta op\xe7\xe3o permite que o m\xe9todo do projeto seja executado pelo motor SQL de 4D. Por padr\xe3o, n\xe3o est\xe1 selecionado, o que significa que, a menos que explicitamente autorizado, os m\xe9todos do projeto 4D s\xe3o protegidos e n\xe3o podem ser chamados pelo motor SQL de 4D."}),"\n",(0,d.jsxs)(o.p,{children:["This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/begin-sql",children:"Begin SQL"}),"/",(0,d.jsx)(o.a,{href:"/docs/pt/commands/end-sql",children:"End SQL"}),"  tags or the ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/query-by-sql",children:"QUERY BY SQL"})," command."]}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:'Mesmo que um m\xe9todo tenha o atributo "SQL", os direitos de acesso definidos ao n\xedvel das defini\xe7\xf5es da base de dados e das propriedades do m\xe9todo s\xe3o tidos em conta para a execu\xe7\xe3o do m\xe9todo.'}),"\n",(0,d.jsxs)(o.li,{children:["La funci\xf3n ODBC ",(0,d.jsx)(o.strong,{children:"SQLProcedure"}),' s\xf3lo devuelve los m\xe9todos proyecto con el atributo "SQL".']}),"\n"]}),"\n",(0,d.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/4D/20/4D-SQL-engine-implementation.300-6342089.en.html",children:"Implementaci\xf3n del motor SQL de 4D"})," en el manual SQL de 4D."]}),"\n",(0,d.jsx)(o.h4,{id:"servidor-rest",children:"Servidor REST"}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsxs)(o.em,{children:["Esta op\xe7\xe3o est\xe1 obsoleta. Calling code through REST calls is only supported with ",(0,d.jsx)(o.a,{href:"/docs/pt/REST/classFunctions",children:"ORDA data model class functions"}),"."]})}),"\n",(0,d.jsx)(o.h4,{id:"defini\xe7\xe3o-de-lotes-para-atributos-de-m\xe9todos",children:"Defini\xe7\xe3o de lotes para atributos de m\xe9todos"}),"\n",(0,d.jsx)(o.p,{children:'Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. Esta carater\xedstica \xe9 especialmente \xfatil para modificar os atributos de um grande n\xfamero de m\xe9todos de projeto. Tamb\xe9m pode ser utilizado durante o desenvolvimento para aplicar rapidamente atributos comuns a grupos de m\xe9todos semelhantes.'}),"\n",(0,d.jsx)(o.p,{children:"Para a defini\xe7\xe3o em lote dos atributos do m\xe9todo:"}),"\n",(0,d.jsxs)(o.ol,{children:["\n",(0,d.jsxs)(o.li,{children:["\n",(0,d.jsxs)(o.p,{children:["En la p\xe1gina ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Methods-Page.300-6750119.en.html",children:"M\xe9todos"})," del Explorador 4D, despliegue el men\xfa de opciones y elija el comando ",(0,d.jsx)(o.strong,{children:"Modificar atributos globalmente..."}),". Aparece la caja de di\xe1logo ",(0,d.jsx)(o.strong,{children:"Atributos de los m\xe9todos"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(o.li,{children:["\n",(0,d.jsx)(o.p,{children:'Na \xe1rea "Nome do m\xe9todo correspondente:", introduza uma string que lhe permita designar os m\xe9todos que pretende modificar como um lote.\nA cadeia de caracteres \xe9 utilizada como crit\xe9rio de pesquisa para os nomes dos m\xe9todos.'}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"Utilize o car\xe1cter curinga @ para ajudar a definir grupos de m\xe9todos:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["Para designar m\xe9todos cujos nomes come\xe7am por..., digite @ no final da string. Por ejemplo: ",(0,d.jsx)(o.code,{children:"web@"})]}),"\n",(0,d.jsxs)(o.li,{children:["Para designar m\xe9todos cujos nomes cont\xeam..., digite @ no meio da string. Por ejemplo: ",(0,d.jsx)(o.code,{children:"web@write"})]}),"\n",(0,d.jsxs)(o.li,{children:["Para designar m\xe9todos cujos nomes terminam com..., digite @ no in\xedcio da string. Por ejemplo: ",(0,d.jsx)(o.code,{children:"web@write"})]}),"\n",(0,d.jsx)(o.li,{children:"Para designar todos os m\xe9todos, basta escrever @ na \xe1rea."}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"A pesquisa n\xe3o tem em conta as mai\xfasculas e min\xfasculas."}),"\n",(0,d.jsxs)(o.li,{children:["Puede introducir varios caracteres @ en la cadena, por ejemplo ",(0,d.jsx)(o.code,{children:"dtro_@web@pro.@"})]}),"\n"]}),"\n",(0,d.jsxs)(o.ol,{start:"3",children:["\n",(0,d.jsxs)(o.li,{children:['En el \xe1rea "Atributo a modificar", elija un atributo de la lista desplegable y, a continuaci\xf3n, haga clic en el bot\xf3n radio ',(0,d.jsx)(o.strong,{children:"True"})," o ",(0,d.jsx)(o.strong,{children:"False"})," correspondiente al valor que debe aplicarse."]}),"\n"]}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Nota:"}),' si el atributo "Publicado en WSDL" se establece como True, s\xf3lo se aplicar\xe1 a los m\xe9todos proyecto que ya contengan el atributo "Ofrecido como servicio web".']}),"\n",(0,d.jsxs)(o.ol,{start:"4",children:["\n",(0,d.jsxs)(o.li,{children:["Haga clic en ",(0,d.jsx)(o.strong,{children:"Aplicar"}),". A modifica\xe7\xe3o \xe9 aplicada instantaneamente a todos os m\xe9todos de projeto designados pela cadeia de caracteres introduzida."]}),"\n"]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},391034:function(e,o,s){s.d(o,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg=="},250065:function(e,o,s){s.d(o,{Z:function(){return n},a:function(){return i}});var r=s(667294);let d={},a=r.createContext(d);function i(e){let o=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);