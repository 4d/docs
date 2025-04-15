"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2400"],{744123:function(e,a,s){s.r(a),s.d(a,{default:()=>p,frontMatter:()=>t,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"FormObjects/tabControl","title":"Pesta\xf1as","description":"Un control de pesta\xf1as crea un objeto que permite al usuario elegir entre un conjunto de pantallas virtuales que est\xe1n encerradas por el objeto de control de pesta\xf1as. Se accede a cada pantalla haciendo clic en su pesta\xf1a.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/FormObjects/tabControl.md","sourceDirName":"FormObjects","slug":"/FormObjects/tabControl","permalink":"/docs/es/FormObjects/tabControl","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FtabControl.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"tabControl","title":"Pesta\xf1as"},"sidebar":"docs","previous":{"title":"Subformulario","permalink":"/docs/es/FormObjects/subformOverview"},"next":{"title":"Text","permalink":"/docs/es/FormObjects/text"}}'),n=s("785893"),r=s("250065");let t={id:"tabControl",title:"Pesta\xf1as"},i=void 0,l={},c=[{value:"Ejemplo JSON:",id:"ejemplo-json",level:3},{value:"A\xf1adir etiquetas a un control de pesta\xf1as",id:"a\xf1adir-etiquetas-a-un-control-de-pesta\xf1as",level:2},{value:"Utilizar un objeto",id:"utilizar-un-objeto",level:3},{value:"Utilizar una lista de selecci\xf3n",id:"utilizar-una-lista-de-selecci\xf3n",level:3},{value:"Utilizar un array Text",id:"utilizar-un-array-text",level:3},{value:"Funcionalidades de Goto page",id:"funcionalidades-de-goto-page",level:2},{value:"Comando FORM GOTO PAGE",id:"comando-form-goto-page",level:3},{value:"Acci\xf3n Goto Page",id:"acci\xf3n-goto-page",level:3},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}];function d(e){let a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Un control de pesta\xf1as crea un objeto que permite al usuario elegir entre un conjunto de pantallas virtuales que est\xe1n encerradas por el objeto de control de pesta\xf1as. Se accede a cada pantalla haciendo clic en su pesta\xf1a."}),"\n",(0,n.jsx)(a.p,{children:"El siguiente formulario multip\xe1gina utiliza un objeto de control de pesta\xf1as:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:s(953915).Z+"",width:"600",height:"534"})}),"\n",(0,n.jsx)(a.p,{children:"Para navegar de una pantalla a otra, el usuario s\xf3lo tiene que hacer clic en la pesta\xf1a deseada."}),"\n",(0,n.jsxs)(a.p,{children:["Las pantallas pueden representar p\xe1ginas en un formulario de varias p\xe1ginas o un objeto que cambia cuando el usuario hace clic en una pesta\xf1a. If the tab control is used as a page navigation tool, then the ",(0,n.jsx)(a.a,{href:"https://doc.4d.com/4dv19/help/command/en/page247.html",children:(0,n.jsx)(a.code,{children:"FORM GOTO PAGE"})})," command or the ",(0,n.jsx)(a.code,{children:"gotoPage"})," standard action would be used when a user clicks a tab."]}),"\n",(0,n.jsx)(a.p,{children:"Otro uso del control de pesta\xf1as es para controlar los datos que se muestran en un subformulario. Por ejemplo, se podr\xeda implementar un Rolodex utilizando un control de pesta\xf1as. Las pesta\xf1as mostrar\xedan las letras del alfabeto y la acci\xf3n del control de pesta\xf1as ser\xeda cargar los datos correspondientes a la letra que el usuario pulsara."}),"\n",(0,n.jsx)(a.p,{children:"Cada pesta\xf1a puede mostrar etiquetas o r\xf3tulos y un peque\xf1o icono. Si incluye iconos, \xe9stos aparecen a la izquierda de cada etiqueta. Este es un ejemplo de un control de pesta\xf1as que utiliza iconos:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:s(873159).Z+"",width:"599",height:"510"})}),"\n",(0,n.jsx)(a.p,{children:"Cuando se crea un control de pesta\xf1as, 4D gestiona el espaciado y la colocaci\xf3n de las mismas. S\xf3lo tiene que suministrar las etiquetas en forma de array, o los iconos y etiquetas en forma de lista jer\xe1rquica."}),"\n",(0,n.jsx)(a.p,{children:"Si el control de pesta\xf1as es lo suficientemente amplio como para mostrar todas las pesta\xf1as con las etiquetas y los iconos, muestra ambos. Si el control de pesta\xf1as no es lo suficientemente ancho para mostrar tanto las etiquetas como los iconos, 4D muestra s\xf3lo los iconos. Si no caben todos los iconos, coloca flechas de desplazamiento a la derecha de la \xfaltima pesta\xf1a visible. Las flechas de desplazamiento permiten al usuario desplazar los iconos hacia la izquierda o la derecha."}),"\n",(0,n.jsx)(a.p,{children:"En macOS, adem\xe1s de la posici\xf3n est\xe1ndar (arriba), los controles de las pesta\xf1as tambi\xe9n pueden alinearse en la parte inferior."}),"\n",(0,n.jsx)(a.h3,{id:"ejemplo-json",children:"Ejemplo JSON:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'	"myTab": {\n		"type": "tab",\n 		"left": 60,	\n		"top": 160,	 \n		"width": 100,	\n		"height": 20,	\n		"labelsPlacement": "bottom"/define la direcci\xf3n\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"a\xf1adir-etiquetas-a-un-control-de-pesta\xf1as",children:"A\xf1adir etiquetas a un control de pesta\xf1as"}),"\n",(0,n.jsx)(a.p,{children:"Para suministrar las etiquetas de un control de pesta\xf1as, puede utilizar:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"un objeto"}),"\n",(0,n.jsx)(a.li,{children:"una lista de selecci\xf3n"}),"\n",(0,n.jsx)(a.li,{children:"un array"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"utilizar-un-objeto",children:"Utilizar un objeto"}),"\n",(0,n.jsxs)(a.p,{children:["Puede asignar un ",(0,n.jsx)(a.a,{href:"/docs/es/Concepts/object",children:"objeto"})," que encapsule una ",(0,n.jsx)(a.a,{href:"/docs/es/Concepts/collection",children:"colecci\xf3n"})," como ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression",children:"fuente de datos"})," del control de pesta\xf1as. El objeto debe contener las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Propiedad"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:"valores"})}),(0,n.jsx)(a.td,{children:"Collection"}),(0,n.jsx)(a.td,{children:"Obligatorio - Colecci\xf3n de valores escalares. S\xf3lo se admiten valores de tipo cadena. Si es inv\xe1lido, vac\xedo o no definido, el control de pesta\xf1as est\xe1 vac\xedo"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:"index"})}),(0,n.jsx)(a.td,{children:"number"}),(0,n.jsxs)(a.td,{children:["\xcdndice de la p\xe1gina de la etiqueta actual (valor entre 0 y ",(0,n.jsx)(a.code,{children:"collection.length-1"}),")"]})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.code,{children:"currentValue"})}),(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"Valor actual seleccionado"})]})]})]}),"\n",(0,n.jsx)(a.p,{children:"El c\xf3digo de inicializaci\xf3n debe ejecutarse antes de que el formulario se presente al usuario."}),"\n",(0,n.jsxs)(a.p,{children:["En el siguiente ejemplo, ",(0,n.jsx)(a.code,{children:"Form.tabControl"})," se ha definido como ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression",children:"expresi\xf3n"})," del control de pesta\xf1as. Puede asociar la ",(0,n.jsxs)(a.a,{href:"#goto-page-action",children:["acci\xf3n est\xe1ndar ",(0,n.jsx)(a.code,{children:"gotoPage"})]})," al objeto del formulario:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'Form.tabControl:=New object\nForm.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")\nForm.tabControl.index:=2 //inicio en la p\xe1gina 3\n'})}),"\n",(0,n.jsx)(a.h3,{id:"utilizar-una-lista-de-selecci\xf3n",children:"Utilizar una lista de selecci\xf3n"}),"\n",(0,n.jsxs)(a.p,{children:["Puede asignar una ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesDataSource#choice-list-static-list",children:"lista de opciones"}),' al control de pesta\xf1as, ya sea a trav\xe9s de una colecci\xf3n (lista est\xe1tica) o un puntero JSON a una lista json ("$ref"). Los iconos asociados a los elementos de la lista en el editor de listas se mostrar\xe1n en el control de pesta\xf1as.']}),"\n",(0,n.jsx)(a.h3,{id:"utilizar-un-array-text",children:"Utilizar un array Text"}),"\n",(0,n.jsxs)(a.p,{children:["Puede crear un array Texto que contenga los nombres de cada p\xe1gina del formulario. Este c\xf3digo debe ejecutarse antes de que el formulario se presente al usuario. Por ejemplo, podr\xeda colocar el c\xf3digo en el m\xe9todo del objeto del control de la pesta\xf1a y ejecutarlo cuando se produzca el evento ",(0,n.jsx)(a.code,{children:"On Load"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n'})}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["Tambi\xe9n puede almacenar los nombres de las p\xe1ginas en una lista jer\xe1rquica y utilizar el comando ",(0,n.jsx)(a.a,{href:"/docs/es/commands/list-to-array",children:"LIST TO ARRAY"})," para cargar los valores en el array."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"funcionalidades-de-goto-page",children:"Funcionalidades de Goto page"}),"\n",(0,n.jsx)(a.h3,{id:"comando-form-goto-page",children:"Comando FORM GOTO PAGE"}),"\n",(0,n.jsxs)(a.p,{children:["Puede utilizar el comando ",(0,n.jsx)(a.a,{href:"https://doc.4d.com/4dv19/help/command/en/page247.html",children:(0,n.jsx)(a.code,{children:"FORM GOTO PAGE"})})," en el m\xe9todo del control de tabulaci\xf3n:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"FORM GOTO PAGE(arrPages)\n"})}),"\n",(0,n.jsxs)(a.p,{children:["El comando se ejecuta cuando se produce el evento ",(0,n.jsx)(a.a,{href:"/docs/es/Events/onClicked",children:(0,n.jsx)(a.code,{children:"On Clicked"})}),". A continuaci\xf3n, debe borrar el array cuando se produzca el evento ",(0,n.jsx)(a.a,{href:"/docs/es/Events/onUnload",children:(0,n.jsx)(a.code,{children:"On Unload"})}),"."]}),"\n",(0,n.jsx)(a.p,{children:"He aqu\xed un ejemplo de m\xe9todo objeto:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n'})}),"\n",(0,n.jsx)(a.h3,{id:"acci\xf3n-goto-page",children:"Acci\xf3n Goto Page"}),"\n",(0,n.jsxs)(a.p,{children:["Cuando se asigna la acci\xf3n ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesAction#standard-action",children:"acci\xf3n est\xe1ndar"})," ",(0,n.jsx)(a.code,{children:"gotoPage"})," a un control de pesta\xf1as, 4D mostrar\xe1 autom\xe1ticamente la p\xe1gina del formulario que corresponde al n\xfamero de la pesta\xf1a que est\xe1 seleccionada."]}),"\n",(0,n.jsx)(a.p,{children:"Por ejemplo, si el usuario selecciona la tercera pesta\xf1a, 4D mostrar\xe1 la p\xe1gina 3 del formulario actual (si existe)."}),"\n",(0,n.jsx)(a.h2,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesDataSource#choice-list-static-list",children:"Lista de opciones"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesObject#expression-type",children:"Tipo de expresi\xf3n"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesText#font",children:"Fuente"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesText#font-size",children:"Tama\xf1o de fuente"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesHelp#help-tip",children:"Mensaje de ayuda"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamiento horizontal"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesText#italic",children:"Cursiva"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesObject#save-value",children:"Guardar valor"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesAction#standard-action",children:"Acci\xf3n est\xe1ndar"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesAppearance#tab-control-direction",children:"Direcci\xf3n del control de pesta\xf1as"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesText#underline",children:"Subrayado"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionamiento vertical"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression",children:"Variable o expresi\xf3n"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,n.jsx)(a.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})]})]})}function p(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},953915:function(e,a,s){s.d(a,{Z:function(){return o}});let o=s.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},873159:function(e,a,s){s.d(a,{Z:function(){return o}});let o=s.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"},250065:function(e,a,s){s.d(a,{Z:function(){return i},a:function(){return t}});var o=s(667294);let n={},r=o.createContext(n);function t(e){let a=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(r.Provider,{value:a},e.children)}}}]);