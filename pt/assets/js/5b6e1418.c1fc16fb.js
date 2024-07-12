/*! For license information please see 5b6e1418.c1fc16fb.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66753],{549189:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=r(474848),t=r(28453);const n={id:"advanced-programming",title:"Programa\xe7\xe3o avan\xe7ada com Javascript"},s=void 0,i={id:"ViewPro/advanced-programming",title:"Programa\xe7\xe3o avan\xe7ada com Javascript",description:"Un \xc1rea 4D View Pro es un objeto de formulario de \xc1rea Web que utiliza el motor de renderizado web integrado. As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the WA Evaluate Javascript 4D command.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/advanced-programming.md",sourceDirName:"ViewPro",slug:"/ViewPro/advanced-programming",permalink:"/docs/pt/20-R5/ViewPro/advanced-programming",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fadvanced-programming.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"advanced-programming",title:"Programa\xe7\xe3o avan\xe7ada com Javascript"},sidebar:"docs",previous:{title:"Classes",permalink:"/docs/pt/20-R5/ViewPro/classes"},next:{title:"Comandos",permalink:"/docs/pt/20-R5/ViewPro/commands"}},d={},c=[{value:"Exemplo pr\xe1tico: Esconder a faixa de op\xe7\xf5es",id:"exemplo-pr\xe1tico-esconder-a-faixa-de-op\xe7\xf5es",level:2},{value:"Chamar m\xe9todos Transcriptase do SpreadJS",id:"chamar-m\xe9todos-transcriptase-do-spreadjs",level:2},{value:"Exemplo",id:"exemplo",level:4},{value:"Reposit\xf3rio 4D View Pro Tips",id:"reposit\xf3rio-4d-view-pro-tips",level:2}];function l(e){const a={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:["Un \xc1rea 4D View Pro es un ",(0,o.jsx)(a.a,{href:"/docs/pt/20-R5/FormObjects/webAreaOverview",children:"objeto de formulario de \xc1rea Web"})," que utiliza el ",(0,o.jsx)(a.a,{href:"/docs/pt/20-R5/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"motor de renderizado web integrado"}),". As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the ",(0,o.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1029.html",children:(0,o.jsx)(a.code,{children:"WA Evaluate Javascript"})})," 4D command."]}),"\n",(0,o.jsxs)(a.p,{children:["Dado que 4D View Pro es alimentado por la ",(0,o.jsx)(a.a,{href:"https://developer.mescius.com/spreadjs",children:"soluci\xf3n de hoja de c\xe1lculo SpreadJS"}),", tambi\xe9n puede llamar a los m\xe9todos Javascript de SpreadJS en las \xe1reas 4D View Pro."]}),"\n",(0,o.jsx)(a.h2,{id:"exemplo-pr\xe1tico-esconder-a-faixa-de-op\xe7\xf5es",children:"Exemplo pr\xe1tico: Esconder a faixa de op\xe7\xf5es"}),"\n",(0,o.jsxs)(a.p,{children:["Since 4D View Pro is a web area, you can select a webpage element and modify its behavior using Javascript. El siguiente ejemplo oculta la ",(0,o.jsx)(a.a,{href:"/docs/pt/20-R5/ViewPro/configuring#ribbon",children:"cinta"})," spreadJS:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"//Button's object method\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n"})}),"\n",(0,o.jsx)(a.h2,{id:"chamar-m\xe9todos-transcriptase-do-spreadjs",children:"Chamar m\xe9todos Transcriptase do SpreadJS"}),"\n",(0,o.jsx)(a.p,{children:"You can tap into the SpreadJS library of Javascript methods and call them directly to control your spreadsheets."}),"\n",(0,o.jsxs)(a.p,{children:["4D has a built-in ",(0,o.jsx)(a.code,{children:"Utils.spread"})," property that gives access to the spreadsheet document (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS ",(0,o.jsx)(a.a,{href:"https://developer.mescius.com/spreadjs/api/modules/GC.Data",children:"Workbook methods"}),"."]}),"\n",(0,o.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(a.p,{children:"O c\xf3digo seguinte anula a \xfaltima a\xe7\xe3o na folha de c\xe1lculo:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n'})}),"\n",(0,o.jsx)(a.h2,{id:"reposit\xf3rio-4d-view-pro-tips",children:"Reposit\xf3rio 4D View Pro Tips"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"https://github.com/4d-depot/4D-View-Pro-Tips",children:"4D-View-Pro-Tips"})," es un repositorio GitHub que contiene un proyecto lleno de funciones \xfatiles, que permiten gestionar im\xe1genes flotantes, ordenar columnas o l\xedneas, crear una cultura personalizada, \xa1y mucho m Sinta-se \xe0 vontade para o clonar e experimentar com o projeto."]})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,a,r)=>{var o=r(296540),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,r){var o,n={},c=null,l=null;for(o in void 0!==r&&(c=""+r),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(l=a.ref),a)s.call(a,o)&&!d.hasOwnProperty(o)&&(n[o]=a[o]);if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===n[o]&&(n[o]=a[o]);return{$$typeof:t,type:e,key:c,ref:l,props:n,_owner:i.current}}a.Fragment=n,a.jsx=c,a.jsxs=c},474848:(e,a,r)=>{e.exports=r(221020)},28453:(e,a,r)=>{r.d(a,{R:()=>s,x:()=>i});var o=r(296540);const t={},n=o.createContext(t);function s(e){const a=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);