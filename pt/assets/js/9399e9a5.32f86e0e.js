/*! For license information please see 9399e9a5.32f86e0e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46649],{224277:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>t,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>m});var i=r(474848),s=r(28453);const a={id:"forms",title:"Formul\xe1rios"},n=void 0,d={id:"FormEditor/forms",title:"Formul\xe1rios",description:"Os formul\xe1rios constituem a interface atrav\xe9s da qual a informa\xe7\xe3o \xe9 introduzida, modificada e impressa numa aplica\xe7\xe3o de desktop. Os usu\xe1rios interagem com os dados em um banco de dados usando formul\xe1rios e imprimem relat\xf3rios usando formul\xe1rios. Formul\xe1rios podem ser usados para criar caixas de di\xe1logo personalizadas, paletas ou qualquer janela personalizada em destaque.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/FormEditor/forms.md",sourceDirName:"FormEditor",slug:"/FormEditor/forms",permalink:"/docs/pt/20-R5/FormEditor/forms",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fforms.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"forms",title:"Formul\xe1rios"},sidebar:"docs",previous:{title:"Gest\xe3o de usu\xe1rios e grupos 4D",permalink:"/docs/pt/20-R5/Users/editing"},next:{title:"Folhas de estilo",permalink:"/docs/pt/20-R5/FormEditor/stylesheets"}},t={},m=[{value:"Criar formul\xe1rios",id:"criar-formul\xe1rios",level:2},{value:"Formul\xe1rio projeto e formul\xe1rio tabela",id:"formul\xe1rio-projeto-e-formul\xe1rio-tabela",level:2},{value:"P\xe1ginas formul\xe1rio",id:"p\xe1ginas-formul\xe1rio",level:2},{value:"Formul\xe1rios herdados",id:"formul\xe1rios-herdados",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:"Os formul\xe1rios constituem a interface atrav\xe9s da qual a informa\xe7\xe3o \xe9 introduzida, modificada e impressa numa aplica\xe7\xe3o de desktop. Os usu\xe1rios interagem com os dados em um banco de dados usando formul\xe1rios e imprimem relat\xf3rios usando formul\xe1rios. Formul\xe1rios podem ser usados para criar caixas de di\xe1logo personalizadas, paletas ou qualquer janela personalizada em destaque."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:r(571587).A+"",width:"1114",height:"896"})}),"\n",(0,i.jsx)(o.p,{children:"Os formul\xe1rios tamb\xe9m podem conter outros formul\xe1rios atrav\xe9s das seguintes funcionalidades:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormObjects/subformOverview",children:"subform objects"})}),"\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#inherited-forms",children:"inherited forms"})}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"criar-formul\xe1rios",children:"Criar formul\xe1rios"}),"\n",(0,i.jsx)(o.p,{children:"\xc9 poss\xedvel adicionar ou modificar formul\xe1rios 4D usando os seguintes elementos:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"La interfaz 4D Developer:"})," cree nuevos formularios desde el men\xfa ",(0,i.jsx)(o.strong,{children:"Archivo"})," o la ventana del ",(0,i.jsx)(o.strong,{children:"Explorador"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"El editor de formularios"}),": modifique sus formularios utilizando el ",(0,i.jsx)(o.strong,{children:(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/overview",children:"editor de formularios"})}),"."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"El c\xf3digo JSON:"})," cree y dise\xf1e sus formularios utilizando JSON y guarde los archivos de los formularios en la ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/Project/architecture#sources-folder",children:"ubicaci\xf3n adecuada"}),". Exemplo:"]}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:'{\n    "windowTitle": "Hello World",\n    "windowMinWidth": 220,\n    "windowMinHeight": 80,\n    "method": "HWexample",\n    "pages": [\n        null,\n        {\n            "objects": {\n                "text": {\n                "type": "text",\n                "text": "Hello World!",\n                "textAlign": "center",\n                "left": 50,\n                "top": 120,\n                "width": 120,\n                "height": 80\n                },\n                "image": {\n                "type": "picture",\n                "pictureFormat": "scaled",\n                "picture": "/RESOURCES/Images/HW.png",\n                "alignment":"center", \n                "left": 70,\n                "top": 20, \n                "width":75, \n                "height":75        \n                },\n                "button": {\n                "type": "button",\n                "text": "OK",\n                "action": "Cancel",\n                "left": 60,\n                "top": 160,\n\n\n                "width": 100,\n                "height": 20\n                }\n            }\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(o.h2,{id:"formul\xe1rio-projeto-e-formul\xe1rio-tabela",children:"Formul\xe1rio projeto e formul\xe1rio tabela"}),"\n",(0,i.jsx)(o.p,{children:"Existem duas categorias de formul\xe1rios:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Los formularios de proyecto"})," - Formularios independientes que no est\xe1n unidos a ninguna tabla. Eles s\xe3o destinados principalmente para criar caixas de di\xe1logo de interface, bem como componentes. Os formul\xe1rios do projeto podem ser usados para criar interfaces que estejam em conformidade com os padr\xf5es do sistema operacional."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Los formularios tablas"})," - Se adjuntan a tablas espec\xedficas y, por tanto, se benefician de funciones autom\xe1ticas \xfatiles para el desarrollo de aplicaciones basadas en bases de datos. Normalmente, uma tabela tem formul\xe1rios de entrada e sa\xedda separados."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Normalmente, voc\xea seleciona a categoria do formul\xe1rio quando o cria, mas pode alter\xe1-la posteriormente."}),"\n",(0,i.jsx)(o.h2,{id:"p\xe1ginas-formul\xe1rio",children:"P\xe1ginas formul\xe1rio"}),"\n",(0,i.jsx)(o.p,{children:"Cada formul\xe1rio \xe9 composto por, pelo menos, duas p\xe1ginas:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"uma p\xe1gina 1: uma p\xe1gina principal, exibida por defeito"}),"\n",(0,i.jsx)(o.li,{children:"uma p\xe1gina 0: uma p\xe1gina de fundo, cujo conte\xfado \xe9 exibido em todas as outras p\xe1ginas."}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"\xc9 poss\xedvel criar v\xe1rias p\xe1ginas para um formul\xe1rio de entrada. Se voc\xea tiver mais campos ou vari\xe1veis do que cabem em uma tela, voc\xea pode querer criar p\xe1ginas adicionais para exibi-los. As p\xe1ginas m\xfaltiplas permitem-lhe fazer o seguinte:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Coloque as informa\xe7\xf5es mais importantes na primeira p\xe1gina e as informa\xe7\xf5es menos importantes nas outras p\xe1ginas."}),"\n",(0,i.jsx)(o.li,{children:"Organize cada t\xf3pico na sua pr\xf3pria p\xe1gina."}),"\n",(0,i.jsxs)(o.li,{children:["Reducir o eliminar el desplazamiento durante la entrada de datos definiendo el ",(0,i.jsx)(o.a,{href:"../FormEditor/formEditor.html#data-entry-order",children:"orden de entrada"}),"."]}),"\n",(0,i.jsx)(o.li,{children:"Fornece espa\xe7o em torno dos elementos de formul\xe1rio para um design de tela atrativo."}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"As p\xe1ginas m\xfaltiplas s\xe3o uma conveni\xeancia utilizada apenas para formul\xe1rios de introdu\xe7\xe3o. N\xe3o s\xe3o para produ\xe7\xe3o impressa. Quando um formul\xe1rio de v\xe1rias p\xe1ginas \xe9 impresso, apenas a primeira p\xe1gina \xe9 impressa."}),"\n",(0,i.jsx)(o.p,{children:"N\xe3o h\xe1 restri\xe7\xf5es quanto ao n\xfamero de p\xe1ginas que um formul\xe1rio pode ter. O mesmo campo pode aparecer quantas vezes quiser em um formul\xe1rio e em quantas p\xe1ginas desejar. No entanto, quanto mais p\xe1ginas voc\xea tiver em um formul\xe1rio, mais tempo levar\xe1 para exibi-lo."}),"\n",(0,i.jsx)(o.p,{children:"Um formul\xe1rio de m\xfaltiplas p\xe1ginas possui tanto uma p\xe1gina de fundo quanto v\xe1rias p\xe1ginas de exibi\xe7\xe3o. Objetos que s\xe3o colocados na p\xe1gina de fundo podem ser vis\xedveis em todas as p\xe1ginas de exibi\xe7\xe3o, mas s\xf3 podem ser selecionados e editados na p\xe1gina de fundo. Em formul\xe1rios de v\xe1rias p\xe1ginas, voc\xea deve colocar sua paleta de bot\xf5es na p\xe1gina de fundo. Voc\xea tamb\xe9m precisa incluir um ou mais objetos na p\xe1gina de fundo que forne\xe7am ferramentas de navega\xe7\xe3o de p\xe1gina para o usu\xe1rio."}),"\n",(0,i.jsx)(o.h2,{id:"formul\xe1rios-herdados",children:"Formul\xe1rios herdados"}),"\n",(0,i.jsxs)(o.p,{children:['Los formularios 4D pueden utilizar y ser utilizados como "formularios heredados", lo que significa que todos los objetos de ',(0,i.jsx)(o.em,{children:"Formulario A"})," pueden ser utilizados en ",(0,i.jsx)(o.em,{children:"Formulario B"}),". En este caso, ",(0,i.jsx)(o.em,{children:"Formulario B"}),' "hereda" los objetos de ',(0,i.jsx)(o.em,{children:"Formulario A"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"Refer\xeancias a um formul\xe1rio herdado est\xe3o sempre ativas: se um elemento de um formul\xe1rio herdado for modificado (estilos de bot\xe3o, por exemplo), todos os formul\xe1rios que utilizam esse elemento ser\xe3o automaticamente modificados."}),"\n",(0,i.jsx)(o.p,{children:"Todos os formul\xe1rios (formul\xe1rios de tabela e formul\xe1rios de projeto) podem ser designados como um formul\xe1rio herdado. No entanto, os elementos que eles cont\xeam devem ser compat\xedveis com o uso em diferentes tabelas de banco de dados."}),"\n",(0,i.jsx)(o.p,{children:"Quando um formul\xe1rio \xe9 executado, os objetos s\xe3o carregados e combinados na seguinte ordem:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"P\xe1gina zero do formul\xe1rio herdado"}),"\n",(0,i.jsx)(o.li,{children:"P\xe1gina 1 do formul\xe1rio herdado"}),"\n",(0,i.jsx)(o.li,{children:"P\xe1gina zero do formul\xe1rio aberto"}),"\n",(0,i.jsx)(o.li,{children:"P\xe1gina actual do formul\xe1rio aberto."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Este orden determina el ",(0,i.jsx)(o.a,{href:"../FormEditor/formEditor.html#data-entry-order",children:"orden de entrada"})," de los objetos en el formulario."]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"Apenas as p\xe1ginas 0 e 1 de um formul\xe1rio herdado podem aparecer noutros formul\xe1rios."}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"As propriedades e o m\xe9todo de um formul\xe1rio n\xe3o s\xe3o considerados quando esse formul\xe1rio \xe9 usado como um formul\xe1rio herdado. Por outro lado, s\xe3o chamados os m\xe9todos dos objetos que cont\xe9m."}),"\n",(0,i.jsxs)(o.p,{children:["To define an inherited form, the ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#inherited-form-name",children:"Inherited Form Name"})," and ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#inherited-form-table",children:"Inherited Form Table"})," (for table form) properties must be defined in the form that will inherit something from another form."]}),"\n",(0,i.jsxs)(o.p,{children:["Un formulario puede heredar de un formulario proyecto, definiendo la propiedad ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#inherited-form-table",children:"Inherited Form Table"})," en ",(0,i.jsx)(o.code,{children:"\\<None>"}),' en la Lista de propiedades (o " " en JSON).']}),"\n",(0,i.jsxs)(o.p,{children:["Para dejar de heredar un formulario, seleccione ",(0,i.jsx)(o.code,{children:"\\<None>"}),' en la lista de propiedades (o " " en JSON) para la propiedad ',(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#inherited-form-name",children:"Inherited Form Name"}),"."]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"\xc9 poss\xedvel definir um formul\xe1rio herdado em um formul\xe1rio que eventualmente ser\xe1 usado como um formul\xe1rio herdado para um terceiro formul\xe1rio. A combina\xe7\xe3o de objetos \xe9 feita de forma recursiva. 4D detecta loops recursivos (por exemplo, se o formul\xe1rio [table1]form1 \xe9 definido como o formul\xe1rio herdado de [table1]form1, ou seja, ele mesmo) e interrompe a cadeia de formul\xe1rios."}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/menu#associated-menu-bar",children:"Associated Menu Bar"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/windowSize#fixed-height",children:"Fixed Height"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/windowSize#fixed-width",children:"Fixed Width"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/markers#form-break",children:"Form Break"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/markers#form-detail",children:"Form Detail"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/markers#form-footer",children:"Form Footer"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/markers#form-header",children:"Form Header"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#form-name",children:"Form Name"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#form-type",children:"Form Type"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#inherited-form-name",children:"Inherited Form Name"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#inherited-form-table",children:"Inherited Form Table"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/windowSize#maximum-height-minimum-height",children:"Maximum Height"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/windowSize#maximum-width-minimum-width",children:"Maximum Width"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/action#method",children:"Method"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/windowSize#maximum-height-minimum-height",children:"Minimum Height"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/windowSize#maximum-width-minimum-width",children:"Minimum Width"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#pages",children:"Pages"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/print#settings",children:"Print Settings"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#published-as-subform",children:"Published as Subform"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#save-geometry",children:"Save Geometry"})," - ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R5/FormEditor/propertiesForm#window-title",children:"Window Title"})]})]})}function c(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,o,r)=>{var i=r(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function m(e,o,r){var i,a={},m=null,l=null;for(i in void 0!==r&&(m=""+r),void 0!==o.key&&(m=""+o.key),void 0!==o.ref&&(l=o.ref),o)n.call(o,i)&&!t.hasOwnProperty(i)&&(a[i]=o[i]);if(e&&e.defaultProps)for(i in o=e.defaultProps)void 0===a[i]&&(a[i]=o[i]);return{$$typeof:s,type:e,key:m,ref:l,props:a,_owner:d.current}}o.Fragment=a,o.jsx=m,o.jsxs=m},474848:(e,o,r)=>{e.exports=r(221020)},571587:(e,o,r)=>{r.d(o,{A:()=>i});const i=r.p+"assets/images/form1-4cd115e2060b296f638be467d18d7b47.png"},28453:(e,o,r)=>{r.d(o,{R:()=>n,x:()=>d});var i=r(296540);const s={},a=i.createContext(s);function n(e){const o=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(a.Provider,{value:o},e.children)}}}]);