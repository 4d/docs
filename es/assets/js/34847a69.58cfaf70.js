"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86000"],{942985:function(e,n,o){o.r(n),o.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>r,toc:()=>s,frontMatter:()=>c});var i=JSON.parse('{"id":"Project/documentation","title":"Documentar un proyecto","description":"En los proyectos aplicaci\xf3n, puede documentar sus m\xe9todos as\xed como sus clases, formularios, tablas o campos. La creaci\xf3n de documentaci\xf3n es especialmente apropiada para proyectos desarrollados por varios programadores y, en general, es una buena pr\xe1ctica de programaci\xf3n. La documentaci\xf3n puede contener una descripci\xf3n de un elemento, as\xed como cualquier informaci\xf3n necesaria para entender c\xf3mo funciona el elemento en la aplicaci\xf3n.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Project/documentation.md","sourceDirName":"Project","slug":"/Project/documentation","permalink":"/docs/es/20-R6/Project/documentation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fdocumentation.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"documentation","title":"Documentar un proyecto"},"sidebar":"docs","previous":{"title":"Formatos fecha y hora","permalink":"/docs/es/20-R6/Project/date-time-formats"},"next":{"title":"M\xe9todos y clases","permalink":"/docs/es/20-R6/Project/code-overview"}}'),l=o("785893"),d=o("250065");let c={id:"documentation",title:"Documentar un proyecto"},a=void 0,r={},s=[{value:"Archivos documentaci\xf3n",id:"archivos-documentaci\xf3n",level:2},{value:"Nombre del archivo de documentaci\xf3n",id:"nombre-del-archivo-de-documentaci\xf3n",level:3},{value:"Arquitectura de los archivos de documentaci\xf3n",id:"arquitectura-de-los-archivos-de-documentaci\xf3n",level:3},{value:"Documentaci\xf3n en el Explorador",id:"documentaci\xf3n-en-el-explorador",level:2},{value:"Ver la documentaci\xf3n",id:"ver-la-documentaci\xf3n",level:3},{value:"Modificar el archivo de documentaci\xf3n",id:"modificar-el-archivo-de-documentaci\xf3n",level:3},{value:"Visualizar la documentaci\xf3n en el editor de c\xf3digo",id:"visualizar-la-documentaci\xf3n-en-el-editor-de-c\xf3digo",level:2},{value:"Definici\xf3n del archivo de documentaci\xf3n",id:"definici\xf3n-del-archivo-de-documentaci\xf3n",level:2},{value:"Markdown soportado",id:"markdown-soportado",level:3},{value:"Ejemplo",id:"ejemplo",level:2}];function t(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"En los proyectos aplicaci\xf3n, puede documentar sus m\xe9todos as\xed como sus clases, formularios, tablas o campos. La creaci\xf3n de documentaci\xf3n es especialmente apropiada para proyectos desarrollados por varios programadores y, en general, es una buena pr\xe1ctica de programaci\xf3n. La documentaci\xf3n puede contener una descripci\xf3n de un elemento, as\xed como cualquier informaci\xf3n necesaria para entender c\xf3mo funciona el elemento en la aplicaci\xf3n."}),"\n",(0,l.jsx)(n.p,{children:"Los siguientes elementos del proyecto aceptan la documentaci\xf3n:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"M\xe9todos (m\xe9todos base, m\xe9todos componente, m\xe9todos proyecto, m\xe9todos formulario, m\xe9todos 4D Mobile y triggers)"}),"\n",(0,l.jsx)(n.li,{children:"Clases"}),"\n",(0,l.jsx)(n.li,{children:"Formularios"}),"\n",(0,l.jsx)(n.li,{children:"Tablas y campos"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Sus archivos de documentaci\xf3n se escriben en la sintaxis Markdown (archivos .md) utilizando cualquier editor que soporte el Markdown. Se almacenan como archivos independientes dentro de la carpeta Proyecto."}),"\n",(0,l.jsx)(n.p,{children:"La documentaci\xf3n se muestra en el \xe1rea de vista previa (panel lateral derecho) del Explorador:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:o(938098).Z+"",width:"841",height:"590"})}),"\n",(0,l.jsxs)(n.p,{children:["Tambi\xe9n se puede exponer parcialmente como ",(0,l.jsx)(n.a,{href:"#viewing-documentation-in-the-code-editor",children:"consejos del editor de c\xf3digo"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"archivos-documentaci\xf3n",children:"Archivos documentaci\xf3n"}),"\n",(0,l.jsx)(n.h3,{id:"nombre-del-archivo-de-documentaci\xf3n",children:"Nombre del archivo de documentaci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:['Los archivos de documentaci\xf3n tienen el mismo nombre que su elemento adjunto, con la extensi\xf3n ".md". Por ejemplo, el archivo de documentaci\xf3n adjunto al m\xe9todo proyecto ',(0,l.jsx)(n.code,{children:"myMethod.4dm"})," se llamar\xe1 ",(0,l.jsx)(n.code,{children:"myMethod.md"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"En el Explorador, 4D muestra autom\xe1ticamente el archivo de documentaci\xf3n con el mismo nombre que el elemento seleccionado (ver abajo)."}),"\n",(0,l.jsx)(n.h3,{id:"arquitectura-de-los-archivos-de-documentaci\xf3n",children:"Arquitectura de los archivos de documentaci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["Todos los archivos de documentaci\xf3n se almacenan en la carpeta ",(0,l.jsx)(n.code,{children:"Documentaci\xf3n"}),", situada en el primer nivel de la carpeta Package."]}),"\n",(0,l.jsxs)(n.p,{children:["La arquitectura de la carpeta ",(0,l.jsx)(n.code,{children:"Documentation"})," es la siguiente:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Documentation"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Clases"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"myClass.md"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"DatabaseMethods"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"onStartup.md"}),"\n",(0,l.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Formularios"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"loginDial.md"}),"\n",(0,l.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"M\xe9todos"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"myMethod.md"}),"\n",(0,l.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"TableForms"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"1"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"input.md"}),"\n",(0,l.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Triggers"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"table1.md"}),"\n",(0,l.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Un formulario proyecto y su m\xe9todo de formulario proyecto comparten el mismo archivo de documentaci\xf3n para el formulario y el m\xe9todo."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Un formulario tabla y su m\xe9todo de formulario tabla comparten el mismo archivo de documentaci\xf3n para el formulario y el m\xe9todo."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Renombrar o eliminar un elemento documentado en su proyecto tambi\xe9n renombrar\xe1 o eliminar\xe1 el archivo Markdown asociado al elemento."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"documentaci\xf3n-en-el-explorador",children:"Documentaci\xf3n en el Explorador"}),"\n",(0,l.jsx)(n.h3,{id:"ver-la-documentaci\xf3n",children:"Ver la documentaci\xf3n"}),"\n",(0,l.jsx)(n.p,{children:"Para ver la documentaci\xf3n en la ventana del Explorador:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Aseg\xfarese de que se muestra el \xe1rea de vista previa."}),"\n",(0,l.jsx)(n.li,{children:"Seleccione el elemento documentado en la lista del Explorador."}),"\n",(0,l.jsxs)(n.li,{children:["Haga clic en el bot\xf3n ",(0,l.jsx)(n.strong,{children:"Documentation"})," situado debajo del \xe1rea de vista previa."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:o(332931).Z+"",width:"218",height:"68"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Si no se ha encontrado ning\xfan archivo de documentaci\xf3n para el elemento seleccionado, se muestra un bot\xf3n ",(0,l.jsx)(n.strong,{children:"Crear"})," (ver m\xe1s abajo)."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"De lo contrario, si existe un archivo de documentaci\xf3n para el elemento seleccionado, el contenido se muestra en el \xe1rea. El contenido no se puede editar directamente en el panel."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"modificar-el-archivo-de-documentaci\xf3n",children:"Modificar el archivo de documentaci\xf3n"}),"\n",(0,l.jsx)(n.p,{children:"Puede crear y/o editar un archivo de documentaci\xf3n Markdown desde la ventana del Explorador para el elemento seleccionado."}),"\n",(0,l.jsx)(n.p,{children:"Si no existe un archivo de documentaci\xf3n para el elemento seleccionado, puede:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["haga clic en el bot\xf3n ",(0,l.jsx)(n.strong,{children:"Crear"})," en el panel ",(0,l.jsx)(n.code,{children:"Documentation"})," o,"]}),"\n",(0,l.jsxs)(n.li,{children:["elija la opci\xf3n ",(0,l.jsx)(n.strong,{children:"Modificar la documentaci\xf3n..."})," en el men\xfa contextual o el men\xfa de opciones del Explorador."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:o(373197).Z+"",width:"277",height:"150"})}),"\n",(0,l.jsx)(n.p,{children:"4D crea autom\xe1ticamente un archivo .md con el nombre adecuado y una plantilla b\xe1sica en la ubicaci\xf3n correspondiente y lo abre con su editor Markdown predeterminado."}),"\n",(0,l.jsxs)(n.p,{children:["Si ya existe un archivo de documentaci\xf3n para el elemento seleccionado, puede abrirlo con su editor de Markdown eligiendo la opci\xf3n ",(0,l.jsx)(n.strong,{children:"Modificar la documentaci\xf3n..."})," del men\xfa contextual o del men\xfa de opciones del Explorador."]}),"\n",(0,l.jsx)(n.h2,{id:"visualizar-la-documentaci\xf3n-en-el-editor-de-c\xf3digo",children:"Visualizar la documentaci\xf3n en el editor de c\xf3digo"}),"\n",(0,l.jsx)(n.p,{children:"El editor de c\xf3digo 4D muestra una parte de la documentaci\xf3n de un m\xe9todo en su consejo de ayuda."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:o(501848).Z+"",width:"737",height:"169"})}),"\n",(0,l.jsxs)(n.p,{children:["Si existe un archivo llamado ",(0,l.jsx)(n.code,{children:"\\<MethodName>.md"})," en la carpeta ",(0,l.jsx)(n.code,{children:"\\<package>/documentation"}),", el editor de c\xf3digo muestra (por prioridad):"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Todo texto introducido en una etiqueta de comentario HTML (",(0,l.jsx)(n.code,{children:"\x3c!-- command documentation --\x3e"}),") en la parte superior del archivo markdown."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["O, si no se usa ninguna etiqueta de comentario html, la primera frase despu\xe9s de una etiqueta ",(0,l.jsx)(n.code,{children:"# Description"})," del archivo markdown.",(0,l.jsx)(n.br,{}),"\nEn este caso, la primera l\xednea contiene el ",(0,l.jsx)(n.strong,{children:"prototipo"})," del m\xe9todo, generado autom\xe1ticamente por el analizador de c\xf3digo de 4D."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["En caso contrario, el editor de c\xf3digo muestra ",(0,l.jsx)(n.a,{href:"/docs/es/20-R6/code-editor/write-class-method#using-help-tips",children:"el comentario del bloque en la parte superior del c\xf3digo del m\xe9todo"}),"."]})}),"\n",(0,l.jsx)(n.h2,{id:"definici\xf3n-del-archivo-de-documentaci\xf3n",children:"Definici\xf3n del archivo de documentaci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["4D utiliza una plantilla b\xe1sica para crear nuevos archivos de documentaci\xf3n. Esta plantilla sugiere las funcionalidades espec\xedficas que permiten ",(0,l.jsx)(n.a,{href:"#viewing-documentation-in-the-code-editor",children:"mostrar la informaci\xf3n en el editor de c\xf3digo"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Sin embargo, puede utilizar todas las ",(0,l.jsx)(n.a,{href:"#supported-markdown",children:"etiquetas Markdown soportadas"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Los nuevos archivos de documentaci\xf3n se crean con el siguiente contenido por defecto:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:o(995463).Z+"",width:"302",height:"204"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"L\xednea"}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"\x3c!-- Escriba aqu\xed su resumen --\x3e"})}),(0,l.jsxs)(n.td,{children:["Comentario HTML. Se utiliza prioritariamente como descripci\xf3n del m\xe9todo en los ",(0,l.jsx)(n.a,{href:"#viewing-documentation-in-the-code-editor",children:"consejos del editor de c\xf3digo"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"## Description"}),(0,l.jsx)(n.td,{children:"T\xedtulo de nivel 2 en Markdown. La primera frase despu\xe9s de esta etiqueta se utiliza como descripci\xf3n del m\xe9todo en las sugerencias del editor de c\xf3digo si no se utiliza el comentario HTML"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"## Ejemplo"}),(0,l.jsx)(n.td,{children:"T\xedtulo de nivel 2, puede utilizar esta \xe1rea para mostrar un ejemplo de c\xf3digo"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"```4d Type here your example```"})}),(0,l.jsx)(n.td,{children:"Se utiliza para dar formato a los ejemplos de c\xf3digo 4D (utiliza la librer\xeda highlight.js)"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"markdown-soportado",children:"Markdown soportado"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"La etiqueta del t\xedtulo es soportada:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-md",children:"# Title 1\n## Title 2\n### Title 3\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Las etiquetas de estilo (cursiva, negrita, tachado) son compatibles:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-md",children:"_italic_\n**bold**\n**_bold/italic_**\n~~strikethrough~~\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"La etiqueta de bloque de c\xf3digo (`4d ... `) es compatible con el resaltado de c\xf3digo 4D:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-md",children:'```4d\n	var $txt : Text\n	$txt:="Hello world!"  \n```\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"La etiqueta de la tabla es soportada:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-md",children:"| Parameter | Type   | Description  |\n| --------- | ------ | ------------ |\n| wpArea    | String |Write pro area|\n| toolbar   | String |Toolbar name  |\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"La etiqueta del enlace es soportada:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-md",children:"// Caso 1\nThe [documentation](https://doc.4d.com) of the command ....\n\n// Caso 2\n[4D blog][1]\n\n[1]: https://blog.4d.com\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Las etiquetas de imagen son soportadas:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-md",children:'![image info](pictures/image.png)\n\n![logo 4D](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")\n\n[![logo 4D blog with link](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")](https://blog.4d.com)\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://blog.4d.com",children:(0,l.jsx)(n.img,{src:"https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png",alt:"logo 4D blog with link",title:"4D blog logo"})})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte la ",(0,l.jsx)(n.a,{href:"https://guides.github.com/features/mastering-markdown/",children:"gu\xeda Markdown de GitHub"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsxs)(n.p,{children:["En el archivo ",(0,l.jsx)(n.code,{children:"WP SwitchToolbar.md"}),", puede escribir:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-md",children:"\x3c!-- Este m\xe9todo devuelve un logo diferente dependiendo del par\xe1metro size --\x3e\n\n\nGetLogo (size) -> logo\n\n\n| Par\xe1metro | Tipo   | Entrada/Salida | Descripci\xf3n |\n| --------- | ------ | -------------- | ----------- |\n| size      | Longint | Entrada | Selector de estilo de logo (1 a 5)  |\n| logo      | Picture | Salida | Logo seleccionado |\n\n\n## Descripci\xf3n\n\nEste m\xe9todo devuelve un logo de un tama\xf1o espec\xedfico, dependiendo del valor del par\xe1metro *size*.\n1 = tama\xf1o m\xe1s peque\xf1o, 5 = tama\xf1o m\xe1s grande.\n\n## Ejemplo\n\n```4d\nC_PICTURE($logo)\nC_LONGINT($size)\n\n//Obtener el logo m\xe1s grande\n$logo:=GetLogo(5)\n```\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Vista del explorador:"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:o(938098).Z+"",width:"841",height:"590"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Vista del editor de c\xf3digo:"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:o(276830).Z+"",width:"447",height:"74"})})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},501848:function(e,n,o){o.d(n,{Z:function(){return i}});let i=o.p+"assets/images/codeEditor_Comments-e5e986df997c051b9a2ce531e8cb17da.png"},332931:function(e,n,o){o.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},373197:function(e,n,o){o.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},995463:function(e,n,o){o.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS4AAADMCAYAAADNu05+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsEAAA7BAbiRa+0AABanSURBVHhe7Z1Lr9zE1ob3X9j/g39BZsxAYhjBGCkzJogx+hRlEiYozCKhHEUJSsJRECAQEtckEMKdCAi3sMnmbBBhkkkG/vqtctnL5XK3293t7up+Hmltt8vlunmtt8vebnvv+++/LzAMw3KyvR9++KHAMAzLyZxw/fjjj25lWcvPP/+8+OCDD4o333xzJabyU+nY9tkqj7V89NatW739muXmLPf0586dO24l2CLrH330UXHt2rXizz//LO7fv790Ozo6SqZj22urOubyUfmqfLbLn1nfzPWGcC26vH37trOUk2DYppp89rvvvuvt5yzXv9zTn59++smtLLrUN1fKMTBs0+3DDz/s7ecs17/c059lmK5F/PHHH0mnwLBNt99++6344osvkr6NbZ454fr5558rG7p+8+bNpENgWC4mH15WPLC+2vU9mzjUPv744+Lvv/9OOgOG5WLyYflyysexzbK9X375pVjEdLHs66+/TjoChuVm8mX5dMrXsc0xJ1y//vqrWxmyfPfdd5MOgGG5mny6r/+zXM9yT390YVLLYH3X9S9kTdtSBx/DcjX5tHw79nfWN2e9IVzzLue9/UEX1h599NHijTfeaG17+eWXi6effro4PDxsbQum/Z977jmXR6bPSkvl7WNqh+oN6ypTbbDt0+e9vb3KUm2f12w/UtuxYfbPP/8Uv//+eytdN7DOO9by7b5xwHL85Z7+3L17163Ms9R/YOa9O14BK2F44YUXGulBMNYpXPr8yCOPFCdOnGgJ1zLEyhrCtRp77bXXiscff7x45513qrR79+4Vzz//fPHMM8+40wybf5rJtz/77LPe8cBy3OWe/gwx3beVOuDTTAF7+vRpJ1yffPJJlS5hUJoNZqWFWY7ERftqtqZ1CYx+Z6b82i+khTJVhkTQ7h/q0ueQrv3ttrB9HuEKbVfbQhtUbig/5FO6titdbbN9xZZjOsXTF89jjz3mxEvfzs8++6xbf/XVV92MLLVfl8nHU76Prd+ccGl6HazPuu4yHnL7Q5hpXLp0qQrqMHP69NNPq2BWkNtZWRA6O1MJ4hSERwISytQypGufJ554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"},276830:function(e,n,o){o.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},938098:function(e,n,o){o.d(n,{Z:function(){return i}});let i=o.p+"assets/images/explorer_Doc-2553e939f64b465e1e4b0f7c84418ff7.png"},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return c}});var i=o(667294);let l={},d=i.createContext(l);function c(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);