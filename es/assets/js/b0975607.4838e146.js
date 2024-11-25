"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48073"],{315532:function(e,a,s){s.r(a),s.d(a,{metadata:()=>r,contentTitle:()=>d,default:()=>t,assets:()=>l,toc:()=>u,frontMatter:()=>i});var r=JSON.parse('{"id":"Users/editing","title":"Gesti\xf3n de usuarios y grupos 4D","description":"Dise\xf1ador y administrador","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-18/Users/handling_users_groups.md","sourceDirName":"Users","slug":"/Users/editing","permalink":"/docs/es/18/Users/editing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Users%2Fhandling_users_groups.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"editing","title":"Gesti\xf3n de usuarios y grupos 4D"},"sidebar":"docs","previous":{"title":"Generalidades","permalink":"/docs/es/18/Users/overview"},"next":{"title":"Comencemos","permalink":"/docs/es/18/REST/gettingStarted"}}'),o=s("785893"),n=s("250065");let i={id:"editing",title:"Gesti\xf3n de usuarios y grupos 4D"},d=void 0,l={},u=[{value:"Dise\xf1ador y administrador",id:"dise\xf1ador-y-administrador",level:2},{value:"Editor de usuarios",id:"editor-de-usuarios",level:2},{value:"A\xf1adir y modificar usuarios",id:"a\xf1adir-y-modificar-usuarios",level:3},{value:"Eliminar un usuario",id:"eliminar-un-usuario",level:3},{value:"Propiedades de los usuarios",id:"propiedades-de-los-usuarios",level:3},{value:"Editor de grupos",id:"editor-de-grupos",level:2},{value:"Configurar grupos",id:"configurar-grupos",level:3},{value:"Colocar los usuarios o los grupos en grupos",id:"colocar-los-usuarios-o-los-grupos-en-grupos",level:3},{value:"Asignar un grupo a un plug-in o a un servidor",id:"asignar-un-grupo-a-un-plug-in-o-a-un-servidor",level:3},{value:"Un esquema de acceso jer\xe1rquico",id:"un-esquema-de-acceso-jer\xe1rquico",level:3}];function c(e){let a={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"dise\xf1ador-y-administrador",children:"Dise\xf1ador y administrador"}),"\n",(0,o.jsx)(a.p,{children:"4D ofrece a los usuarios ciertos privilegios de acceso est\xe1ndar y ciertas prerrogativas espec\xedficas. Una vez iniciado un sistema de usuarios y grupos, estos privilegios est\xe1ndar toman efecto."}),"\n",(0,o.jsxs)(a.p,{children:["El usuario m\xe1s poderoso se llama el ",(0,o.jsx)(a.strong,{children:"Dise\xf1ador"}),". Ninguna parte de la base de datos es inaccesible al Dise\xf1ador. El dise\xf1ador puede:"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"acceder a todos los servidores de la base sin restricciones,"}),"\n",(0,o.jsx)(a.li,{children:"crear usuarios y grupos,"}),"\n",(0,o.jsx)(a.li,{children:"asignar privilegios de acceso a los grupos,"}),"\n",(0,o.jsx)(a.li,{children:"acceder al entorno Dise\xf1o. En un entorno monopuesto, siempre se utilizan los derechos de acceso del Dise\xf1ador. En el entorno cliente/servidor, la asignaci\xf3n de una contrase\xf1a al Dise\xf1ador activa la visualizaci\xf3n del di\xe1logo de inicio de sesi\xf3n del usuario 4D.  El acceso al entorno Dise\xf1o es de s\xf3lo lectura."}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Despu\xe9s del Dise\xf1ador, el siguiente usuario m\xe1s poderoso es el ",(0,o.jsx)(a.strong,{children:"Administrador"}),", al que se le suelen encomendar las tareas de gesti\xf3n del sistema de acceso y las funciones de administraci\xf3n."]}),"\n",(0,o.jsx)(a.p,{children:"El administrador puede:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"crear usuarios y grupos,"}),"\n",(0,o.jsx)(a.li,{children:"acceder al monitor y a la ventana de administraci\xf3n de 4D Server"}),"\n",(0,o.jsx)(a.li,{children:"acceder a la ventana CSM para supervisar la copia de seguridad, la restauraci\xf3n o el servidor."}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"El administrador no puede:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"modificar el usuario Dise\xf1ador"}),"\n",(0,o.jsx)(a.li,{children:"por defecto, acceder a las partes protegidas de la base. En particular, el administrador no puede acceder al modo Dise\xf1o si est\xe1 restringido. El Administrador debe formar parte de uno o varios grupos para tener privilegios de acceso en la base de datos. El administrador se coloca en todos los grupos nuevos, pero puede eliminar el nombre del administrador de cualquier grupo."}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Tanto el Dise\xf1ador como el Administrador est\xe1n disponibles por defecto en todas las bases. In the ",(0,o.jsx)(a.a,{href:"#users-editor",children:"user management dialog box"}),", the icons of the Designer and Administrator are displayed in red and green respectively:"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["Icono Dise\xf1ador: ",(0,o.jsx)(a.img,{src:s(345152).Z+"",width:"15",height:"15"})]}),"\n",(0,o.jsxs)(a.li,{children:["Icono del Administrador: ",(0,o.jsx)(a.img,{src:s(415282).Z+"",width:"15",height:"15"})]}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Puede cambiar el nombre de los usuarios Dise\xf1ador y Administrador. En el lenguaje, el ID del dise\xf1ador es siempre 1 y el ID del administrador es siempre 2."}),"\n",(0,o.jsx)(a.p,{children:"El Dise\xf1ador y el Administrador pueden crear hasta 16.000 grupos y 16.000 usuarios cada uno."}),"\n",(0,o.jsx)(a.h2,{id:"editor-de-usuarios",children:"Editor de usuarios"}),"\n",(0,o.jsx)(a.p,{children:"El editor de usuarios se encuentran en la caja de herramientas de 4D."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:s(756902).Z+"",width:"778",height:"276"})}),"\n",(0,o.jsx)(a.h3,{id:"a\xf1adir-y-modificar-usuarios",children:"A\xf1adir y modificar usuarios"}),"\n",(0,o.jsx)(a.p,{children:"El editor de usuarios permite crear cuentas de usuario, definir sus propiedades y asignarlas a distintos grupos."}),"\n",(0,o.jsx)(a.p,{children:"Para a\xf1adir un usuario desde la caja de herramientas :"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsxs)(a.li,{children:["Seleccione ",(0,o.jsx)(a.strong,{children:"Caja de herramientas > Usuarios"})," en el men\xfa ",(0,o.jsx)(a.strong,{children:"Dise\xf1o"})," o haga clic en el bot\xf3n ",(0,o.jsx)(a.strong,{children:"Caja de herramientas"})," de la barra de herramientas de 4D. 4D muestra el editor de usuarios."]}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["La lista de usuarios muestra todos los usuarios, incluyendo el ",(0,o.jsx)(a.a,{href:"#designer-and-administrator",children:"Dise\xf1ador y el Administrador"}),"."]}),"\n",(0,o.jsxs)(a.ol,{start:"2",children:["\n",(0,o.jsxs)(a.li,{children:["Haga clic en el bot\xf3n ",(0,o.jsx)(a.img,{src:s(211691).Z+"",width:"20",height:"16"})," situado debajo de la lista de usuarios. OR Right-click in the list of users and choose ",(0,o.jsx)(a.strong,{children:"Add"})," or ",(0,o.jsx)(a.strong,{children:"Duplicate"})," in the context menu."]}),"\n"]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsxs)(a.p,{children:["El comando ",(0,o.jsx)(a.strong,{children:"Duplicar"})," se puede utilizar para crear varios usuarios que tengan las mismas caracter\xedsticas r\xe1pidamente."]}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:'4D a\xf1ade un nuevo usuario a la lista, llamado por defecto "Nuevo usuarioX".'}),"\n",(0,o.jsxs)(a.ol,{start:"3",children:["\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:["Introduzca el nombre de usuario. Este nombre ser\xe1 utilizado por el usuario para abrir la base. Puede renombrar un usuario en cualquier momento utilizando el comando ",(0,o.jsx)(a.strong,{children:"Renombrar"})," del men\xfa contextual, o utilizando los atajos Alt+clic (Windows) u Opci\xf3n+clic (macOS), o haciendo dos veces clic en el nombre que quiera cambiar."]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:["Para introducir una contrase\xf1a del usuario, haga clic en el bot\xf3n ",(0,o.jsx)(a.strong,{children:"Editar..."})," en el \xe1rea de propiedades del usuario e introduzca la contrase\xf1a dos veces en la caja de di\xe1logo. Puede utilizar hasta 15 caracteres alfanum\xe9ricos para una contrase\xf1a. El editor de contrase\xf1as es sensible a las may\xfasculas y min\xfasculas."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsxs)(a.p,{children:['Los usuarios pueden cambiar su contrase\xf1a en cualquier momento seg\xfan las opciones de la p\xe1gina "Seguridad" de las propiedades de la base, o utilizando el comando ',(0,o.jsx)(a.code,{children:"CHANGE PASSWORD"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.ol,{start:"5",children:["\n",(0,o.jsx)(a.li,{children:'Defina el grupo o los grupos a los que pertenece el usuario mediante la tabla "Miembro de los grupos". Puede a\xf1adir o eliminar el usuario seleccionado a un grupo marcando la opci\xf3n correspondiente en la columna Miembro.'}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["The membership of users to different groups can also be set by group on the ",(0,o.jsx)(a.a,{href:"#configuring-groups",children:"Groups page"}),"."]}),"\n",(0,o.jsx)(a.h3,{id:"eliminar-un-usuario",children:"Eliminar un usuario"}),"\n",(0,o.jsxs)(a.p,{children:["Para eliminar un usuario, selecci\xf3nelo y haga clic en el bot\xf3n de eliminaci\xf3n o utilice el comando ",(0,o.jsx)(a.strong,{children:"Suprimir"})," del men\xfa contextual. ",(0,o.jsx)(a.img,{src:s(918672).Z+"",width:"19",height:"18"})]}),"\n",(0,o.jsx)(a.p,{children:"Los nombres de usuario borrados ya no aparecen en el editor de usuarios. Tenga en cuenta que los ID de los usuarios eliminados se reasignan cuando se crean nuevas cuentas de usuario."}),"\n",(0,o.jsx)(a.h3,{id:"propiedades-de-los-usuarios",children:"Propiedades de los usuarios"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:["El campo ",(0,o.jsx)(a.strong,{children:"Tipo de usuario"}),': el campo Tipo de usuario contiene "Dise\xf1ador", "Administrador" o (para todos los dem\xe1s usuarios) "Usuario".']}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"M\xe9todo de inicio"}),": nombre de un m\xe9todo asociado que se ejecutar\xe1 autom\xe1ticamente cuando el usuario abra la base (opcional). Este m\xe9todo puede utilizarse, por ejemplo, para cargar las preferencias usuario."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"editor-de-grupos",children:"Editor de grupos"}),"\n",(0,o.jsx)(a.p,{children:"El editor de grupos se encuentra en la caja de herramientas de 4D."}),"\n",(0,o.jsx)(a.h3,{id:"configurar-grupos",children:"Configurar grupos"}),"\n",(0,o.jsx)(a.p,{children:"El editor de grupos sirve para definir los elementos que contiene cada grupo (usuarios y/o otros grupos) y para distribuir los accesos a los plug-ins."}),"\n",(0,o.jsx)(a.p,{children:"Tenga en cuenta que una vez que se ha creado un grupo, no se puede eliminar. Si desea desactivar un grupo, s\xf3lo tiene que eliminar los usuarios que contiene."}),"\n",(0,o.jsx)(a.p,{children:"Para crear un grupo:"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:["Seleccione ",(0,o.jsx)(a.strong,{children:"Caja de herramientas > Grupos"})," en el men\xfa ",(0,o.jsx)(a.strong,{children:"Dise\xf1o"})," o haga clic en el bot\xf3n ",(0,o.jsx)(a.strong,{children:"Caja de herramientas"})," de la barra de herramientas de 4D luego haga clic en el bot\xf3n ",(0,o.jsx)(a.strong,{children:"Grupos"}),". 4D muestra la ventana del editor de grupos. La lista de grupos muestra todos los grupos de la base."]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:["Haga clic en el bot\xf3n ",(0,o.jsx)(a.img,{src:s(211691).Z+"",width:"20",height:"16"}),"ubicado debajo de la lista de grupos.",(0,o.jsx)(a.br,{}),"\nO",(0,o.jsx)(a.br,{}),"\nHaga clic derecho en la lista de grupos y elija el comando ",(0,o.jsx)(a.strong,{children:"A\xf1adir"})," o ",(0,o.jsx)(a.strong,{children:"Duplicar"})," en el men\xfa contextual."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"El comando Duplicar se puede utilizar para crear varios grupos que tengan las mismas caracter\xedsticas r\xe1pidamente."}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:'4D a\xf1ade un nuevo grupo a la lista, llamado por defecto "Nuevo grupoX".'}),"\n",(0,o.jsxs)(a.ol,{start:"3",children:["\n",(0,o.jsxs)(a.li,{children:["Introduzca el nombre del nuevo grupo. El nombre del grupo puede tener hasta 15 caracteres. Puede renombrar un grupo en cualquier momento utilizando el comando ",(0,o.jsx)(a.strong,{children:"Renombrar"})," del men\xfa contextual, o utilizando los atajos Alt+clic (Windows) u Opci\xf3n+clic (macOS), o haciendo dos veces clic en el nombre que quiera cambiar."]}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"colocar-los-usuarios-o-los-grupos-en-grupos",children:"Colocar los usuarios o los grupos en grupos"}),"\n",(0,o.jsx)(a.p,{children:"Puede colocar cualquier usuario o grupo en un grupo, y tambi\xe9n puede colocar el propio grupo en varios otros grupos. No es obligatorio colocar a un usuario en un grupo."}),"\n",(0,o.jsx)(a.p,{children:'Para incluir a un usuario o grupo en un grupo, basta con marcar la opci\xf3n "Miembro" para cada usuario o grupo en el \xe1rea de atribuci\xf3n de los miembros:'}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:s(312397).Z+"",width:"450",height:"263"})}),"\n",(0,o.jsx)(a.p,{children:"Si se marca el nombre de un usuario, \xe9ste se a\xf1ade al grupo. Si marca el nombre de un grupo, todos los usuarios del grupo se a\xf1aden al nuevo grupo. El usuario o grupo afiliado tendr\xe1 entonces los mismos privilegios de acceso que los asignados al nuevo grupo."}),"\n",(0,o.jsxs)(a.p,{children:['La colocaci\xf3n de grupos dentro de otros grupos permite crear una jerarqu\xeda de usuarios. Los usuarios de un grupo colocados en otro grupo tendr\xe1n los privilegios de acceso de ambos grupos. Ver "',(0,o.jsx)(a.a,{href:"#an-access-hierarchy-scheme",children:"Un esquema de jerarqu\xeda de acceso"}),'" abajo.']}),"\n",(0,o.jsx)(a.p,{children:"Para eliminar un usuario o grupo de otro grupo, basta con deseleccionar la opci\xf3n correspondiente en el \xe1rea de asignaci\xf3n de miembros."}),"\n",(0,o.jsx)(a.h3,{id:"asignar-un-grupo-a-un-plug-in-o-a-un-servidor",children:"Asignar un grupo a un plug-in o a un servidor"}),"\n",(0,o.jsx)(a.p,{children:"Puede asignar privilegios de grupo a todo plug-in instalado en la base. Esto incluye todos los plug-ins de 4D y los de terceros."}),"\n",(0,o.jsx)(a.p,{children:"Distribuir los accesos a los plug-ins le permite controlar el uso de las licencias que posee para estos plug-ins. Todo usuario que no pertenezca al grupo de acceso de un plug-in no puede cargar este plug-in."}),"\n",(0,o.jsx)(a.p,{children:"Tambi\xe9n puede controlar el uso del servidor Web y del servidor SOAP de 4D en modo remoto a trav\xe9s del \xe1rea de acceso a los plug-ins."}),"\n",(0,o.jsx)(a.p,{children:'El \xe1rea "Plug-in" de la p\xe1gina Grupos de la caja de herramientas lista todos los plug-ins cargados por la aplicaci\xf3n 4D. Para dar acceso a un grupo a un complemento, basta con marcar la opci\xf3n correspondiente.'}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:s(527927).Z+"",width:"450",height:"139"})}),"\n",(0,o.jsxs)(a.p,{children:["Las l\xedneas ",(0,o.jsx)(a.strong,{children:"4D Client Web Server"})," y ",(0,o.jsx)(a.strong,{children:"4D Client SOAP Server"})," permiten controlar la posibilidad de publicaci\xf3n Web y SOAP (Web Services) de cada 4D en modo remoto. Estas licencias son consideradas por 4D Server como licencias de plug-in. Por lo tanto, al igual que en el caso de los plug-ins, puede restringir el derecho de uso de estas licencias a un grupo espec\xedfico de usuarios."]}),"\n",(0,o.jsx)(a.h3,{id:"un-esquema-de-acceso-jer\xe1rquico",children:"Un esquema de acceso jer\xe1rquico"}),"\n",(0,o.jsx)(a.p,{children:"La mejor manera de garantizar la seguridad de su base de datos y de ofrecer a los usuarios diferentes niveles de acceso es utilizar un esquema jer\xe1rquico de acceso. Los usuarios pueden ser asignados a los grupos apropiados y los grupos pueden ser anidados para crear una jerarqu\xeda de derechos de acceso. Esta secci\xf3n describe varios enfoques de este esquema."}),"\n",(0,o.jsx)(a.p,{children:"En este ejemplo, un usuario es asignado a uno de los tres grupos en funci\xf3n de su nivel de responsabilidad. Los usuarios asignados al grupo Contabilidad son responsables de la entrada de datos. Los usuarios asignados al grupo Finanzas son responsables de mantener los datos, incluyendo la actualizaci\xf3n de los registros y la eliminaci\xf3n de los registros obsoletos. Los usuarios asignados al grupo de Gesti\xf3n General se encargan de analizar los datos, incluyendo la realizaci\xf3n de b\xfasquedas y la impresi\xf3n de informes anal\xedticos."}),"\n",(0,o.jsx)(a.p,{children:"A continuaci\xf3n, los grupos se anidan para que los privilegios se distribuyan correctamente entre los usuarios de cada grupo."}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:['El grupo de Direcci\xf3n General s\xf3lo contiene usuarios de "alto nivel". ',(0,o.jsx)(a.img,{src:s(413537).Z+"",width:"778",height:"575"})]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:["El grupo Finanzas contiene usuarios de mantenimiento de datos, as\xed como tambi\xe9n usuarios de Direcci\xf3n General, por lo que los usuarios de Direcci\xf3n General tambi\xe9n tienen los privilegios del grupo Finanzas. ",(0,o.jsx)(a.img,{src:s(153018).Z+"",width:"778",height:"575"})]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:["El grupo Contabilidad contiene usuarios de entrada de datos as\xed como usuarios del grupo Finanzas, por lo que los usuarios que pertenecen al grupo Finanzas y al grupo Direcci\xf3n General disfrutan tambi\xe9n de los privilegios del grupo Contabilidad. ",(0,o.jsx)(a.img,{src:s(356876).Z+"",width:"778",height:"575"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Puede decidir qu\xe9 privilegios de acceso asignar a cada grupo en funci\xf3n del nivel de responsabilidad de los usuarios que contiene."}),"\n",(0,o.jsx)(a.p,{children:"Este sistema jer\xe1rquico permite recordar f\xe1cilmente a qu\xe9 grupo debe asignarse un nuevo usuario. S\xf3lo tiene que asignar cada usuario a un grupo y utilizar la jerarqu\xeda de grupos para determinar los accesos."})]})}function t(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},918672:function(e,a,s){s.d(a,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg=="},211691:function(e,a,s){s.d(a,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAADxSURBVDhPnY9Pa8JAFMTfF6wpTbS99HN6EhEVEbTmUEiplWBETbKatv6renJ4C491Gz3s8DsMOzPsLm32Z2foZ3tyhorfkzM3x6o4vLJgrEgg9X0sJVkUzywYKxIoW/+VMpnmQRD4vg9jRQIt1aGUcZzpMYwVCTTP90Ky3Lyw8FosKywY/X6co2D2r8ZfU4WrHlme5z2wYPQJIhTMPs3SnfAZ5/23j1Y3BM32ENdiCaNPEKFg9mkUKWH4nvZGSWcQg0YnemLB6BNEKJj9q7EJ2lUWjBUJ98Y1lssYj6w3QwBjRcLNsf7//3+aUBitHIlWFwd0H5oG1DOiAAAAAElFTkSuQmCC"},756902:function(e,a,s){s.d(a,{Z:function(){return r}});let r=s.p+"assets/images/editor-6e2ecb71f363782241b995d8f6130a20.png"},312397:function(e,a,s){s.d(a,{Z:function(){return r}});let r="data:image/png;base64,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"},415282:function(e,a,s){s.d(a,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAD6SURBVChTlZCxS8NQEIffP9tYHVycMlscdXURxLFU0mqhZkqGdhFFaA0FQ15bCLGWpppgqaZ5Lx7JS+AOMvjxm+73DXfHMowV8SN+1/It88vdikRNS5AdJPGB1214RpEz35aZVF0Osjvha6UWGW+XqstB9vXqmdh2xFWXg+yrj6d/2A+fb8R2d2vV5SB7LwV8o1Ivl4+qKEE28C1+m7wH6sl8kEqhpiXUBo5nfbDh6wK/D6A2/9lo5SbkREDZUbqDEy+CUbFGlVPfug2d9yQuNJbI1AidQyyRaF63vZ7AD9jN6oV0dbnfTJm+MMm0LufBkMHtZFoXfWH+AfQdLr4l7+k0AAAAAElFTkSuQmCC"},345152:function(e,a,s){s.d(a,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAADmSURBVChTlZA/C0FhFMbfb+FPYjIafQPKF5AvYDMYfAAlmYzMFG4GZWK6k0RKV4kBq4UUFrm6PN57nRfvqzv49UzP+Q3nHAaFVQ1aEL04llWYJyoFsn1ao+lHw0PpJ/C408hBto3CR31lq9PIQbZHWdXmi30h28PMPza/TLH3Exo5yLZl2t94q4M09QLZ5phHtAK22ongfqNS8GNz2mHb1kJ4WNQIfuyDgYaXNlnVqRQI+7LDogI9RWu804vBKOK8eVkM1hWzkiopafowzfMzGMY5deaWeZmhG1Vbt+hJZt+utG7pRp+KuBb6s9xHMQAAAABJRU5ErkJggg=="},527927:function(e,a,s){s.d(a,{Z:function(){return r}});let r="data:image/png;base64,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"},413537:function(e,a,s){s.d(a,{Z:function(){return r}});let r=s.p+"assets/images/schema1-84178d2d3287349910a9a1a80a34f272.png"},153018:function(e,a,s){s.d(a,{Z:function(){return r}});let r=s.p+"assets/images/schema2-fc09440a4cb7bfbc55f3f0aeae5c5ed0.png"},356876:function(e,a,s){s.d(a,{Z:function(){return r}});let r=s.p+"assets/images/schema3-b83a7c0eb98fa319eeb7c0e32a5f6749.png"},250065:function(e,a,s){s.d(a,{Z:function(){return d},a:function(){return i}});var r=s(667294);let o={},n=r.createContext(o);function i(e){let a=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);