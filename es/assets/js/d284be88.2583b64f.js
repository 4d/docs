"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40205"],{848359:function(e,o,s){s.r(o),s.d(o,{default:()=>u,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"FormObjects/formObjectsOverview","title":"Objetos formularios","description":"Usted crea y personaliza los formularios de su aplicaci\xf3n manipulando los objetos que contienen. Puede a\xf1adir objetos, reposicionar objetos, definir propiedades de los objetos, aplicar reglas de negocio especificando restricciones de entrada de datos o escribir m\xe9todos de objetos que se ejecuten autom\xe1ticamente cuando se utilice el objeto.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/FormObjects/formObjects_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/formObjectsOverview","permalink":"/docs/es/20-R8/FormObjects/formObjectsOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FformObjects_overview.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"formObjectsOverview","title":"Objetos formularios"},"sidebar":"docs","previous":{"title":"Tama\xf1o de la ventana","permalink":"/docs/es/20-R8/FormEditor/windowSize"},"next":{"title":"Bot\xf3n","permalink":"/docs/es/20-R8/FormObjects/buttonOverview"}}'),i=s("785893"),n=s("250065");let r={id:"formObjectsOverview",title:"Objetos formularios"},a=void 0,c={},d=[{value:"Objetos activos y est\xe1ticos",id:"objetos-activos-y-est\xe1ticos",level:2},{value:"Gesti\xf3n de objetos de formulario",id:"gesti\xf3n-de-objetos-de-formulario",level:2}];function l(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:"Usted crea y personaliza los formularios de su aplicaci\xf3n manipulando los objetos que contienen. Puede a\xf1adir objetos, reposicionar objetos, definir propiedades de los objetos, aplicar reglas de negocio especificando restricciones de entrada de datos o escribir m\xe9todos de objetos que se ejecuten autom\xe1ticamente cuando se utilice el objeto."}),"\n",(0,i.jsx)(o.h2,{id:"objetos-activos-y-est\xe1ticos",children:"Objetos activos y est\xe1ticos"}),"\n",(0,i.jsxs)(o.p,{children:["Los formularios 4D soportan una gran cantidad de objetos ",(0,i.jsx)(o.strong,{children:"activos"})," y ",(0,i.jsx)(o.strong,{children:"est\xe1ticos"})," integrados:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Los objetos activos"})," realizan una tarea o una funci\xf3n de la interfaz. Los campos son objetos activos. Los otros objetos activos -objetos editable (variables), combo box, listas desplegables, botones imagen, etc.- almacenan los datos temporalmente en la memoria o realizan alguna acci\xf3n, como abrir una caja de di\xe1logo, imprimir un informe o iniciar un proceso en segundo plano."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Los objetos est\xe1ticos"})," se utilizan generalmente para definir la apariencia del formulario y sus etiquetas, as\xed como para la interfaz gr\xe1fica. Los objetos est\xe1ticos no tienen variables asociadas como los objetos activos. Sin embargo, se pueden insertar objetos din\xe1micos en objetos est\xe1ticos."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"gesti\xf3n-de-objetos-de-formulario",children:"Gesti\xf3n de objetos de formulario"}),"\n",(0,i.jsx)(o.p,{children:"Puede a\xf1adir o modificar objetos formulario 4D de las siguientes maneras:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsxs)(o.strong,{children:[(0,i.jsx)(o.a,{href:"/docs/es/20-R8/FormEditor/overview",children:"Editor de formularios"}),":"]})," arrastre un objeto de la barra de herramientas del editor de formularios al formulario. A continuaci\xf3n, utilice la Lista de propiedades para especificar las propiedades del objeto."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Lenguaje ",(0,i.jsx)(o.strong,{children:"4D"}),": los comandos del tema ",(0,i.jsx)(o.code,{children:"Objects (Forms)"})," como ",(0,i.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1111.html",children:(0,i.jsx)(o.code,{children:"OBJECT DUPLICATE"})})," o ",(0,i.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page166.html",children:(0,i.jsx)(o.code,{children:"OBJECT SET FONT STYLE"})})," permiten crear y definir objetos de formulario."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"C\xf3digo JSON en formularios din\xe1micos:"})," define las propiedades utilizando JSON. Utilice la propiedad ",(0,i.jsx)(o.a,{href:"/docs/es/20-R8/FormObjects/propertiesObject#type",children:"type"})," para definir el tipo de objeto y, a continuaci\xf3n, defina sus ",(0,i.jsx)(o.a,{href:"/docs/es/20-R8/FormObjects/propertiesReference",children:"propiedades disponibles"}),".\nEjemplo para un objeto bot\xf3n:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-json",children:'	{\n		"type": "button", \n		"style": "bevel", \n		"text": "OK", \n		"action": "Cancel", \n		"left": 60, \n		"top": 160, \n		"width": 100, \n		"height": 20\n	}\n'})})]})}function u(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return a},a:function(){return r}});var t=s(667294);let i={},n=t.createContext(i);function r(e){let o=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);