"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58796"],{986143:function(e,r,o){o.r(r),o.d(r,{default:()=>c,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>t,contentTitle:()=>d});var i=JSON.parse('{"id":"FormEditor/forms","title":"Formularios","description":"Los formularios ofrecen la interfaz a trav\xe9s de la cual se introduce, modifica e imprime la informaci\xf3n en una aplicaci\xf3n de escritorio. Los usuarios interact\xfaan con los datos de una base de datos mediante formularios e imprimen informes utilizando formularios. Los formularios pueden utilizarse para crear cajas de di\xe1logo personalizadas, paletas o toda ventana personalizada.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/FormEditor/forms.md","sourceDirName":"FormEditor","slug":"/FormEditor/forms","permalink":"/docs/es/20-R7/FormEditor/forms","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fforms.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"forms","title":"Formularios"},"sidebar":"docs","previous":{"title":"Gesti\xf3n de usuarios y grupos 4D","permalink":"/docs/es/20-R7/Users/editing"},"next":{"title":"Hojas de estilo","permalink":"/docs/es/20-R7/FormEditor/stylesheets"}}'),a=o("785893"),n=o("250065");let s={id:"forms",title:"Formularios"},d=void 0,l={},t=[{value:"Creaci\xf3n de formularios",id:"creaci\xf3n-de-formularios",level:2},{value:"Formulario proyecto y formulario tabla",id:"formulario-proyecto-y-formulario-tabla",level:2},{value:"P\xe1ginas formulario",id:"p\xe1ginas-formulario",level:2},{value:"Formularios heredados",id:"formularios-heredados",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}];function m(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Los formularios ofrecen la interfaz a trav\xe9s de la cual se introduce, modifica e imprime la informaci\xf3n en una aplicaci\xf3n de escritorio. Los usuarios interact\xfaan con los datos de una base de datos mediante formularios e imprimen informes utilizando formularios. Los formularios pueden utilizarse para crear cajas de di\xe1logo personalizadas, paletas o toda ventana personalizada."}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:o(736962).Z+"",width:"1114",height:"896"})}),"\n",(0,a.jsx)(r.p,{children:"Los formularios tambi\xe9n pueden contener otros formularios a trav\xe9s de las siguientes funcionalidades:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/subformOverview",children:"objetos de subformulario"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#inherited-forms",children:"formularios heredados"})}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"creaci\xf3n-de-formularios",children:"Creaci\xf3n de formularios"}),"\n",(0,a.jsx)(r.p,{children:"Puede a\xf1adir o modificar formularios 4D utilizando los siguientes elementos:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"La interfaz 4D Developer:"})," cree nuevos formularios desde el men\xfa ",(0,a.jsx)(r.strong,{children:"Archivo"})," o la ventana del ",(0,a.jsx)(r.strong,{children:"Explorador"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"El editor de formularios"}),": modifique sus formularios utilizando el ",(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/overview",children:"editor de formularios"})}),"."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"El c\xf3digo JSON:"})," cree y dise\xf1e sus formularios utilizando JSON y guarde los archivos de los formularios en la ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/Project/architecture#sources-folder",children:"ubicaci\xf3n adecuada"}),". Ejemplo:"]}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:'{\n    "windowTitle": "Hello World",\n    "windowMinWidth": 220,\n    "windowMinHeight": 80,\n    "method": "HWexample",\n    "pages": [\n        null,\n        {\n            "objects": {\n                "text": {\n                "type": "text",\n                "text": "Hello World!",\n                "textAlign": "center",\n                "left": 50,\n                "top": 120,\n                "width": 120,\n                "height": 80\n                },\n                "image": {\n                "type": "picture",\n                "pictureFormat": "scaled",\n                "picture": "/RESOURCES/Images/HW.png",\n                "alignment":"center", \n                "left": 70,\n                "top": 20, \n                "width":75, \n                "height":75        \n                },\n                "button": {\n                "type": "button",\n                "text": "OK",\n                "action": "Cancel",\n                "left": 60,\n                "top": 160,\n\n\n                "width": 100,\n                "height": 20\n                }\n            }\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"formulario-proyecto-y-formulario-tabla",children:"Formulario proyecto y formulario tabla"}),"\n",(0,a.jsx)(r.p,{children:"Hay dos categor\xedas de formularios:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Los formularios de proyecto"})," - Formularios independientes que no est\xe1n unidos a ninguna tabla. Est\xe1n pensados, sobre todo, para crear cajas de di\xe1logo de interfaz, al igual que componentes. Los formularios proyecto pueden utilizarse para crear interfaces que cumplan f\xe1cilmente con los est\xe1ndares del sistema operativo."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Los formularios tablas"})," - Se adjuntan a tablas espec\xedficas y, por tanto, se benefician de funciones autom\xe1ticas \xfatiles para el desarrollo de aplicaciones basadas en bases de datos. Normalmente, una tabla tiene formularios de entrada y salida separados."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Normalmente, se selecciona la categor\xeda del formulario al crearlo, pero se puede cambiar despu\xe9s."}),"\n",(0,a.jsx)(r.h2,{id:"p\xe1ginas-formulario",children:"P\xe1ginas formulario"}),"\n",(0,a.jsx)(r.p,{children:"Cada formulario consta de al menos dos p\xe1ginas:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"una p\xe1gina 1: una p\xe1gina principal, mostrada por defecto"}),"\n",(0,a.jsx)(r.li,{children:"una p\xe1gina 0: una p\xe1gina de fondo, cuyo contenido se muestra en todas las dem\xe1s p\xe1ginas."}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Puede crear varias p\xe1ginas para un formulario de entrada. Si tiene m\xe1s campos o variables de los que caben en una pantalla, puede crear p\xe1ginas adicionales para mostrarlos. Las p\xe1ginas m\xfaltiples le permiten hacer lo siguiente:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Coloque la informaci\xf3n m\xe1s importante en la primera p\xe1gina y la menos importante en otras."}),"\n",(0,a.jsx)(r.li,{children:"Organice cada tema en su propia p\xe1gina."}),"\n",(0,a.jsxs)(r.li,{children:["Reducir o eliminar el desplazamiento durante la entrada de datos definiendo el ",(0,a.jsx)(r.a,{href:"../FormEditor/formEditor.html#data-entry-order",children:"orden de entrada"}),"."]}),"\n",(0,a.jsx)(r.li,{children:"Deje espacio alrededor de los elementos del formulario para lograr un dise\xf1o de pantalla atractivo."}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Las p\xe1ginas m\xfaltiples son \xfatiles s\xf3lo para los formularios de entrada. No son para imprimir. Cuando se imprime un formulario de varias p\xe1ginas, s\xf3lo se imprime la primera."}),"\n",(0,a.jsx)(r.p,{children:"No hay restricciones en el n\xfamero de p\xe1ginas que puede tener un formulario. El mismo campo puede aparecer un n\xfamero ilimitado de veces en un formulario y en todas las p\xe1ginas que desee. Sin embargo, cuantas m\xe1s p\xe1ginas tenga un formulario, m\xe1s tiempo tardar\xe1 en mostrarse."}),"\n",(0,a.jsx)(r.p,{children:"Un formulario multip\xe1ginas tiene una p\xe1gina de fondo y varias p\xe1ginas de visualizaci\xf3n. Los objetos que se colocan en la p\xe1gina de fondo pueden ser visibles en todas las p\xe1ginas de visualizaci\xf3n, pero s\xf3lo se pueden seleccionar y editar en la p\xe1gina de fondo. En los formularios multip\xe1gina, debe colocar su paleta de botones en la p\xe1gina de fondo. Tambi\xe9n es necesario incluir uno o m\xe1s objetos en la p\xe1gina de fondo que ofrezcan las herramientas de navegaci\xf3n para el usuario."}),"\n",(0,a.jsx)(r.h2,{id:"formularios-heredados",children:"Formularios heredados"}),"\n",(0,a.jsxs)(r.p,{children:['Los formularios 4D pueden utilizar y ser utilizados como "formularios heredados", lo que significa que todos los objetos de ',(0,a.jsx)(r.em,{children:"Formulario A"})," pueden ser utilizados en ",(0,a.jsx)(r.em,{children:"Formulario B"}),". En este caso, ",(0,a.jsx)(r.em,{children:"Formulario B"}),' "hereda" los objetos de ',(0,a.jsx)(r.em,{children:"Formulario A"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Las referencias a un formulario heredado est\xe1n siempre activas: si se modifica un elemento de un formulario heredado (estilos de bot\xf3n, por ejemplo), se modificar\xe1n autom\xe1ticamente todos los formularios que utilicen este elemento."}),"\n",(0,a.jsx)(r.p,{children:"Todos los formularios (formularios tabla y formularios proyecto) pueden ser designados como un formulario heredado. Sin embargo, los elementos que contienen deben ser compatibles con el uso en diferentes tablas de la base de datos."}),"\n",(0,a.jsx)(r.p,{children:"Cuando se ejecuta un formulario, los objetos se cargan y combinan en el siguiente orden:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"P\xe1gina cero del formulario heredado"}),"\n",(0,a.jsx)(r.li,{children:"P\xe1gina 1 del formulario heredado"}),"\n",(0,a.jsx)(r.li,{children:"P\xe1gina cero del formulario abierto"}),"\n",(0,a.jsx)(r.li,{children:"P\xe1gina actual del formulario abierto."}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Este orden determina el ",(0,a.jsx)(r.a,{href:"../FormEditor/formEditor.html#data-entry-order",children:"orden de entrada"})," de los objetos en el formulario."]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"S\xf3lo las p\xe1ginas 0 y 1 del formulario heredado pueden aparecer en otros formularios."}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Las propiedades y el m\xe9todo de un formulario no se tienen en cuenta cuando ese formulario se utiliza como formulario heredado. Por otro lado, se llaman los m\xe9todos de los objetos que contiene."}),"\n",(0,a.jsxs)(r.p,{children:["Para definir un formulario heredado, el ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#inherited-form-name",children:"nombre del formulario heredado"})," y la ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#inherited-form-table",children:"Tabla de formularios heredada"})," (para el formulario tabla) las propiedades deben definirse en la forma que heredar\xe1 algo de otro formulario."]}),"\n",(0,a.jsxs)(r.p,{children:["Un formulario puede heredar de un formulario proyecto, definiendo la propiedad ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#inherited-form-table",children:"Inherited Form Table"})," en ",(0,a.jsx)(r.code,{children:"\\<None>"}),' en la Lista de propiedades (o " " en JSON).']}),"\n",(0,a.jsxs)(r.p,{children:["Para dejar de heredar un formulario, seleccione ",(0,a.jsx)(r.code,{children:"\\<None>"}),' en la lista de propiedades (o " " en JSON) para la propiedad ',(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#inherited-form-name",children:"Inherited Form Name"}),"."]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Es posible definir un formulario heredado en un formulario que eventualmente se utilizar\xe1 como formulario heredado para un tercer formulario. La combinaci\xf3n de objetos se realiza de forma recursiva. 4D detecta los bucles recursivos (por ejemplo, si el formulario [table1]form1 se define como el formulario heredado de [table1]form1, es decir, \xe9l mismo) e interrumpe la cadena de formularios."}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/menu#associated-menu-bar",children:"Barra de men\xfa asociada"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/windowSize#fixed-height",children:"Altura fija"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/windowSize#fixed-width",children:"Ancho fijo"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/markers#form-break",children:"Divisor de formulario"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/markers#form-detail",children:"Detalle de formulario"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/markers#form-footer",children:"Pie de formulario"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/markers#form-header",children:"Encabezado de formulario"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#form-name",children:"Nombre de formulario"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#form-type",children:"Tipo de formulario"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#inherited-form-name",children:"Nombre de formulario heredado"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#inherited-form-table",children:"Tabla de formulario heredado"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/windowSize#maximum-height-minimum-height",children:"Altura m\xe1xima"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/windowSize#maximum-width-minimum-width",children:"Ancho m\xe1ximo"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/action#method",children:"M\xe9todo"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/windowSize#maximum-height-minimum-height",children:"Altura m\xednima"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/windowSize#maximum-width-minimum-width",children:"Ancho m\xednimo"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#pages",children:"P\xe1ginas"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/print#settings",children:"Configuraci\xf3n de impresi\xf3n"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#published-as-subform",children:"Publicado como subformulario"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#save-geometry",children:"Guardar geometr\xeda"})," - ",(0,a.jsx)(r.a,{href:"/docs/es/20-R7/FormEditor/propertiesForm#window-title",children:"T\xedtulo de ventana"})]})]})}function c(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},736962:function(e,r,o){o.d(r,{Z:function(){return i}});let i=o.p+"assets/images/form1-4cd115e2060b296f638be467d18d7b47.png"},250065:function(e,r,o){o.d(r,{Z:function(){return d},a:function(){return s}});var i=o(667294);let a={},n=i.createContext(a);function s(e){let r=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);