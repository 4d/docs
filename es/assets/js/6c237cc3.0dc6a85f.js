/*! For license information please see 6c237cc3.0dc6a85f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74479],{430571:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var r=a(474848),n=a(28453);const t={id:"advanced-programming",title:"Programaci\xf3n avanzada con Javascript"},i=void 0,s={id:"ViewPro/advanced-programming",title:"Programaci\xf3n avanzada con Javascript",description:"Un \xc1rea 4D View Pro es un objeto de formulario de \xc1rea Web que utiliza el motor de renderizado web integrado. Como tal, se comporta como cualquier otra \xe1rea web, y puede hacer ejecutar c\xf3digo Javascript llamando al comando 4D WA Evaluate Javascript.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/ViewPro/advanced-programming.md",sourceDirName:"ViewPro",slug:"/ViewPro/advanced-programming",permalink:"/docs/es/20/ViewPro/advanced-programming",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fadvanced-programming.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"advanced-programming",title:"Programaci\xf3n avanzada con Javascript"},sidebar:"docs",previous:{title:"Clases",permalink:"/docs/es/20/ViewPro/classes"},next:{title:"Componentes de desarrollo",permalink:"/docs/es/20/Extensions/develop-components"}},d={},l=[{value:"Ejemplo: ocultar la cinta",id:"Ejemplo-ocultar-la-cinta",level:2},{value:"Llamar los m\xe9todos Javascript de SpreadJS",id:"Llamar-los-m\xe9todos-Javascript-de-SpreadJS",level:2},{value:"Ejemplo",id:"Ejemplo",level:4},{value:"Repositorio 4D View Pro Tips",id:"Repositorio-4D-View-Pro-Tips",level:2}];function c(e){const o={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["Un \xc1rea 4D View Pro es un ",(0,r.jsx)(o.a,{href:"/docs/es/20/FormObjects/webAreaOverview",children:"objeto de formulario de \xc1rea Web"})," que utiliza el ",(0,r.jsx)(o.a,{href:"/docs/es/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"motor de renderizado web integrado"}),". Como tal, se comporta como cualquier otra \xe1rea web, y puede hacer ejecutar c\xf3digo Javascript llamando al comando 4D ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1029.html",children:(0,r.jsx)(o.code,{children:"WA Evaluate Javascript"})}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Dado que 4D View Pro es alimentado por la ",(0,r.jsx)(o.a,{href:"https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html",children:"soluci\xf3n de hoja de c\xe1lculo SpreadJS"}),", tambi\xe9n puede llamar a los m\xe9todos Javascript de SpreadJS en las \xe1reas 4D View Pro."]}),"\n",(0,r.jsx)(o.h2,{id:"Ejemplo-ocultar-la-cinta",children:"Ejemplo: ocultar la cinta"}),"\n",(0,r.jsxs)(o.p,{children:["Dado que 4D View Pro es un \xe1rea web, puede seleccionar un elemento de la p\xe1gina web y modificar su comportamiento utilizando Javascript. El siguiente ejemplo oculta la ",(0,r.jsx)(o.a,{href:"/docs/es/20/ViewPro/configuring#ribbon",children:"cinta"})," spreadJS:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"//M\xe9todo objeto del bot\xf3n\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n"})}),"\n",(0,r.jsx)(o.h2,{id:"Llamar-los-m\xe9todos-Javascript-de-SpreadJS",children:"Llamar los m\xe9todos Javascript de SpreadJS"}),"\n",(0,r.jsx)(o.p,{children:"Puede aprovechar la librer\xeda de m\xe9todos Javascript de SpreadJS y llamarlos directamente para controlar sus hojas de c\xe1lculo."}),"\n",(0,r.jsxs)(o.p,{children:["4D tiene una propiedad ",(0,r.jsx)(o.code,{children:"Utils.spread"})," integrada que da acceso al documento de la hoja de c\xe1lculo (tambi\xe9n llamado libro de trabajo) dentro del \xe1rea 4D View Pro, haciendo m\xe1s sencillo llamar a los ",(0,r.jsx)(o.a,{href:"https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Workbook.html",children:"m\xe9todos de Workbook"})," SpreadJS."]}),"\n",(0,r.jsx)(o.h4,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(o.p,{children:"El siguiente c\xf3digo deshace la \xfaltima acci\xf3n en la hoja de c\xe1lculo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n'})}),"\n",(0,r.jsx)(o.h2,{id:"Repositorio-4D-View-Pro-Tips",children:"Repositorio 4D View Pro Tips"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"https://github.com/4d-depot/4D-View-Pro-Tips",children:"4D-View-Pro-Tips"})," es un repositorio GitHub que contiene un proyecto lleno de funciones \xfatiles, que permiten gestionar im\xe1genes flotantes, ordenar columnas o l\xedneas, crear una cultura personalizada, \xa1y mucho m\xe1s! Si\xe9ntase libre de clonarlo y experimentar con el proyecto."]})]})}function p(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,o,a)=>{var r=a(296540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,o,a){var r,t={},l=null,c=null;for(r in void 0!==a&&(l=""+a),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(c=o.ref),o)i.call(o,r)&&!d.hasOwnProperty(r)&&(t[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===t[r]&&(t[r]=o[r]);return{$$typeof:n,type:e,key:l,ref:c,props:t,_owner:s.current}}o.Fragment=t,o.jsx=l,o.jsxs=l},474848:(e,o,a)=>{e.exports=a(221020)},28453:(e,o,a)=>{a.d(o,{R:()=>i,x:()=>s});var r=a(296540);const n={},t=r.createContext(n);function i(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);