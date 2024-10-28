"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40044],{445550:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var t=s(474848),i=s(28453);const n={id:"formObjectsOverview",title:"Objetos formularios"},r=void 0,a={id:"FormObjects/formObjectsOverview",title:"Objetos formularios",description:"Usted crea y personaliza los formularios de su aplicaci\xf3n manipulando los objetos que contienen. Puede a\xf1adir objetos, reposicionar objetos, definir propiedades de los objetos, aplicar reglas de negocio especificando restricciones de entrada de datos o escribir m\xe9todos de objetos que se ejecuten autom\xe1ticamente cuando se utilice el objeto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/FormObjects/formObjects_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/formObjectsOverview",permalink:"/docs/es/20-R6/FormObjects/formObjectsOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FformObjects_overview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"formObjectsOverview",title:"Objetos formularios"},sidebar:"docs",previous:{title:"Tama\xf1o de la ventana",permalink:"/docs/es/20-R6/FormEditor/windowSize"},next:{title:"Bot\xf3n",permalink:"/docs/es/20-R6/FormObjects/buttonOverview"}},c={},d=[{value:"Objetos activos y est\xe1ticos",id:"objetos-activos-y-est\xe1ticos",level:2},{value:"Gesti\xf3n de objetos de formulario",id:"gesti\xf3n-de-objetos-de-formulario",level:2}];function l(e){const o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"Usted crea y personaliza los formularios de su aplicaci\xf3n manipulando los objetos que contienen. Puede a\xf1adir objetos, reposicionar objetos, definir propiedades de los objetos, aplicar reglas de negocio especificando restricciones de entrada de datos o escribir m\xe9todos de objetos que se ejecuten autom\xe1ticamente cuando se utilice el objeto."}),"\n",(0,t.jsx)(o.h2,{id:"objetos-activos-y-est\xe1ticos",children:"Objetos activos y est\xe1ticos"}),"\n",(0,t.jsxs)(o.p,{children:["Los formularios 4D soportan una gran cantidad de objetos ",(0,t.jsx)(o.strong,{children:"activos"})," y ",(0,t.jsx)(o.strong,{children:"est\xe1ticos"})," integrados:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Los objetos activos"})," realizan una tarea o una funci\xf3n de la interfaz. Los campos son objetos activos. Los otros objetos activos -objetos editable (variables), combo box, listas desplegables, botones imagen, etc.- almacenan los datos temporalmente en la memoria o realizan alguna acci\xf3n, como abrir una caja de di\xe1logo, imprimir un informe o iniciar un proceso en segundo plano."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Los objetos est\xe1ticos"})," se utilizan generalmente para definir la apariencia del formulario y sus etiquetas, as\xed como para la interfaz gr\xe1fica. Los objetos est\xe1ticos no tienen variables asociadas como los objetos activos. Sin embargo, se pueden insertar objetos din\xe1micos en objetos est\xe1ticos."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"gesti\xf3n-de-objetos-de-formulario",children:"Gesti\xf3n de objetos de formulario"}),"\n",(0,t.jsx)(o.p,{children:"Puede a\xf1adir o modificar objetos formulario 4D de las siguientes maneras:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsxs)(o.strong,{children:[(0,t.jsx)(o.a,{href:"/docs/es/20-R6/FormEditor/overview",children:"Editor de formularios"}),":"]})," arrastre un objeto de la barra de herramientas del editor de formularios al formulario. A continuaci\xf3n, utilice la Lista de propiedades para especificar las propiedades del objeto."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Lenguaje ",(0,t.jsx)(o.strong,{children:"4D"}),": los comandos del tema ",(0,t.jsx)(o.code,{children:"Objects (Forms)"})," como ",(0,t.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1111.html",children:(0,t.jsx)(o.code,{children:"OBJECT DUPLICATE"})})," o ",(0,t.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page166.html",children:(0,t.jsx)(o.code,{children:"OBJECT SET FONT STYLE"})})," permiten crear y definir objetos de formulario."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"C\xf3digo JSON en formularios din\xe1micos:"})," define las propiedades utilizando JSON. Utilice la propiedad ",(0,t.jsx)(o.a,{href:"/docs/es/20-R6/FormObjects/propertiesObject#type",children:"type"})," para definir el tipo de objeto y, a continuaci\xf3n, defina sus ",(0,t.jsx)(o.a,{href:"/docs/es/20-R6/FormObjects/propertiesReference",children:"propiedades disponibles"}),".\nEjemplo para un objeto bot\xf3n:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'\t{\n\t\t"type": "button", \n\t\t"style": "bevel", \n\t\t"text": "OK", \n\t\t"action": "Cancel", \n\t\t"left": 60, \n\t\t"top": 160, \n\t\t"width": 100, \n\t\t"height": 20\n\t}\n'})})]})}function m(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>a});var t=s(296540);const i={},n=t.createContext(i);function r(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);