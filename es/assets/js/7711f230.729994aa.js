"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9440"],{363216:function(e,a,o){o.r(a),o.d(a,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>t});var r=JSON.parse('{"id":"ViewPro/advanced-programming","title":"Programaci\xf3n avanzada con Javascript","description":"Un \xc1rea 4D View Pro es un objeto de formulario de \xc1rea Web que utiliza el motor de renderizado web integrado. Como tal, se comporta como cualquier otra \xe1rea web, y puede ejecutar c\xf3digo Javascript llamando al comando 4D WA Evaluate Javascript.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/advanced-programming.md","sourceDirName":"ViewPro","slug":"/ViewPro/advanced-programming","permalink":"/docs/es/20-R7/ViewPro/advanced-programming","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fadvanced-programming.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"advanced-programming","title":"Programaci\xf3n avanzada con Javascript"},"sidebar":"docs","previous":{"title":"Clases","permalink":"/docs/es/20-R7/ViewPro/classes"},"next":{"title":"Comandos","permalink":"/docs/es/20-R7/ViewPro/commands"}}'),n=o("785893"),i=o("250065");let s={id:"advanced-programming",title:"Programaci\xf3n avanzada con Javascript"},t=void 0,d={},l=[{value:"Ejemplo: ocultar la cinta",id:"ejemplo-ocultar-la-cinta",level:2},{value:"Llamar los m\xe9todos Javascript de SpreadJS",id:"llamar-los-m\xe9todos-javascript-de-spreadjs",level:2},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Repositorio 4D View Pro Tips",id:"repositorio-4d-view-pro-tips",level:2}];function c(e){let a={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Un \xc1rea 4D View Pro es un ",(0,n.jsx)(a.a,{href:"/docs/es/20-R7/FormObjects/webAreaOverview",children:"objeto de formulario de \xc1rea Web"})," que utiliza el ",(0,n.jsx)(a.a,{href:"/docs/es/20-R7/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"motor de renderizado web integrado"}),". Como tal, se comporta como cualquier otra \xe1rea web, y puede ejecutar c\xf3digo Javascript llamando al comando 4D ",(0,n.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1029.html",children:(0,n.jsx)(a.code,{children:"WA Evaluate Javascript"})}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Dado que 4D View Pro es alimentado por la ",(0,n.jsx)(a.a,{href:"https://developer.mescius.com/spreadjs",children:"soluci\xf3n de hoja de c\xe1lculo SpreadJS"}),", tambi\xe9n puede llamar a los m\xe9todos Javascript de SpreadJS en las \xe1reas 4D View Pro."]}),"\n",(0,n.jsx)(a.h2,{id:"ejemplo-ocultar-la-cinta",children:"Ejemplo: ocultar la cinta"}),"\n",(0,n.jsxs)(a.p,{children:["Dado que 4D View Pro es un \xe1rea web, puede seleccionar un elemento de la p\xe1gina web y modificar su comportamiento utilizando Javascript. El siguiente ejemplo oculta la ",(0,n.jsx)(a.a,{href:"/docs/es/20-R7/ViewPro/configuring#ribbon",children:"cinta"})," spreadJS:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"//M\xe9todo objeto del bot\xf3n\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n"})}),"\n",(0,n.jsx)(a.h2,{id:"llamar-los-m\xe9todos-javascript-de-spreadjs",children:"Llamar los m\xe9todos Javascript de SpreadJS"}),"\n",(0,n.jsx)(a.p,{children:"Puede aprovechar la librer\xeda de m\xe9todos Javascript de SpreadJS y llamarlos directamente para controlar sus hojas de c\xe1lculo."}),"\n",(0,n.jsxs)(a.p,{children:["4D has a built-in ",(0,n.jsx)(a.code,{children:"Utils.spread"})," property that gives access to the spreadsheet document (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS ",(0,n.jsx)(a.a,{href:"https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Workbook",children:"Workbook methods"}),"."]}),"\n",(0,n.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(a.p,{children:"El siguiente c\xf3digo deshace la \xfaltima acci\xf3n en la hoja de c\xe1lculo:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n'})}),"\n",(0,n.jsx)(a.h2,{id:"repositorio-4d-view-pro-tips",children:"Repositorio 4D View Pro Tips"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://github.com/4d-depot/4D-View-Pro-Tips",children:"4D-View-Pro-Tips"})," es un repositorio GitHub que contiene un proyecto lleno de funciones \xfatiles, que permiten gestionar im\xe1genes flotantes, ordenar columnas o l\xedneas, crear una cultura personalizada, \xa1y mucho m Si\xe9ntase libre de clonarlo y experimentar con el proyecto."]})]})}function p(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return t},a:function(){return s}});var r=o(667294);let n={},i=r.createContext(n);function s(e){let a=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);