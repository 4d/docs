"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50115"],{226932:function(e,a,o){o.r(a),o.d(a,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"ViewPro/advanced-programming","title":"Programa\xe7\xe3o avan\xe7ada com Javascript","description":"Un \xc1rea 4D View Pro es un objeto de formulario de \xc1rea Web que utiliza el motor de renderizado web integrado. As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the WA Evaluate Javascript 4D command.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/advanced-programming.md","sourceDirName":"ViewPro","slug":"/ViewPro/advanced-programming","permalink":"/docs/pt/20-R6/ViewPro/advanced-programming","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fadvanced-programming.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"advanced-programming","title":"Programa\xe7\xe3o avan\xe7ada com Javascript"},"sidebar":"docs","previous":{"title":"Classes","permalink":"/docs/pt/20-R6/ViewPro/classes"},"next":{"title":"Comandos","permalink":"/docs/pt/20-R6/ViewPro/commands"}}'),t=o("785893"),n=o("250065");let i={id:"advanced-programming",title:"Programa\xe7\xe3o avan\xe7ada com Javascript"},s=void 0,d={},c=[{value:"Exemplo pr\xe1tico: Esconder a faixa de op\xe7\xf5es",id:"exemplo-pr\xe1tico-esconder-a-faixa-de-op\xe7\xf5es",level:2},{value:"Chamar m\xe9todos Transcriptase do SpreadJS",id:"chamar-m\xe9todos-transcriptase-do-spreadjs",level:2},{value:"Exemplo",id:"exemplo",level:4},{value:"Reposit\xf3rio 4D View Pro Tips",id:"reposit\xf3rio-4d-view-pro-tips",level:2}];function l(e){let a={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["Un \xc1rea 4D View Pro es un ",(0,t.jsx)(a.a,{href:"/docs/pt/20-R6/FormObjects/webAreaOverview",children:"objeto de formulario de \xc1rea Web"})," que utiliza el ",(0,t.jsx)(a.a,{href:"/docs/pt/20-R6/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"motor de renderizado web integrado"}),". As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the ",(0,t.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1029.html",children:(0,t.jsx)(a.code,{children:"WA Evaluate Javascript"})})," 4D command."]}),"\n",(0,t.jsxs)(a.p,{children:["Dado que 4D View Pro es alimentado por la ",(0,t.jsx)(a.a,{href:"https://developer.mescius.com/spreadjs",children:"soluci\xf3n de hoja de c\xe1lculo SpreadJS"}),", tambi\xe9n puede llamar a los m\xe9todos Javascript de SpreadJS en las \xe1reas 4D View Pro."]}),"\n",(0,t.jsx)(a.h2,{id:"exemplo-pr\xe1tico-esconder-a-faixa-de-op\xe7\xf5es",children:"Exemplo pr\xe1tico: Esconder a faixa de op\xe7\xf5es"}),"\n",(0,t.jsxs)(a.p,{children:["Since 4D View Pro is a web area, you can select a webpage element and modify its behavior using Javascript. El siguiente ejemplo oculta la ",(0,t.jsx)(a.a,{href:"/docs/pt/20-R6/ViewPro/configuring#ribbon",children:"cinta"})," spreadJS:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-4d",children:"//M\xe9todo objeto do bot\xe3o\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n"})}),"\n",(0,t.jsx)(a.h2,{id:"chamar-m\xe9todos-transcriptase-do-spreadjs",children:"Chamar m\xe9todos Transcriptase do SpreadJS"}),"\n",(0,t.jsx)(a.p,{children:"You can tap into the SpreadJS library of Javascript methods and call them directly to control your spreadsheets."}),"\n",(0,t.jsxs)(a.p,{children:["4D has a built-in ",(0,t.jsx)(a.code,{children:"Utils.spread"})," property that gives access to the spreadsheet document (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS ",(0,t.jsx)(a.a,{href:"https://developer.mescius.com/spreadjs/api/modules/GC.Data",children:"Workbook methods"}),"."]}),"\n",(0,t.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(a.p,{children:"O c\xf3digo seguinte anula a \xfaltima a\xe7\xe3o na folha de c\xe1lculo:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-4d",children:'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n'})}),"\n",(0,t.jsx)(a.h2,{id:"reposit\xf3rio-4d-view-pro-tips",children:"Reposit\xf3rio 4D View Pro Tips"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://github.com/4d-depot/4D-View-Pro-Tips",children:"4D-View-Pro-Tips"})," es un repositorio GitHub que contiene un proyecto lleno de funciones \xfatiles, que permiten gestionar im\xe1genes flotantes, ordenar columnas o l\xedneas, crear una cultura personalizada, \xa1y mucho m Sinta-se \xe0 vontade para o clonar e experimentar com o projeto."]})]})}function p(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return s},a:function(){return i}});var r=o(667294);let t={},n=r.createContext(t);function i(e){let a=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);