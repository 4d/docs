"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16785"],{439574:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>s});var i=JSON.parse('{"id":"Events/onWindowOpeningDenied","title":"On Window Opening Denied","description":"| Code | Puede ser llamado por                          | Definici\xf3n                            |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Events/onWindowOpeningDenied.md","sourceDirName":"Events","slug":"/Events/onWindowOpeningDenied","permalink":"/docs/es/Events/onWindowOpeningDenied","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonWindowOpeningDenied.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onWindowOpeningDenied","title":"On Window Opening Denied"},"sidebar":"docs","previous":{"title":"On VP Ready","permalink":"/docs/es/Events/onVpReady"},"next":{"title":"Men\xfas","permalink":"/docs/es/Menus/overview"}}'),r=t("785893"),d=t("250065");let s={id:"onWindowOpeningDenied",title:"On Window Opening Denied"},a=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}];function c(e){let n={a:"a",code:"code",details:"details",h2:"h2",h3:"h3",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Puede ser llamado por"}),(0,r.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"53"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/webAreaOverview",children:"\xc1rea web"})}),(0,r.jsx)(n.td,{children:"Se ha bloqueado una ventana emergente"})]})})]}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R5"}),(0,r.jsx)(n.td,{children:"Activado al soltar"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Este evento se genera cuando la apertura de una ventana emergente es bloqueada por el \xe1rea web. Los \xe1reas web de 4D no permiten la apertura de ventanas emergentes."}),"\n",(0,r.jsxs)(n.p,{children:["Puede identificar la URL bloqueada utilizando el comando ",(0,r.jsx)(n.code,{children:"WA Get last filtered URL"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Este evento tambi\xe9n se activa cuando se ha realizado una operaci\xf3n de arrastrar y soltar en el \xe1rea Web (con motores ",(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"integrados"})," y del sistema Windows) si la opci\xf3n de ",(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/webAreaOverview#user-interface",children:"Arrastrar y soltar"})," tambi\xe9n est\xe1 habilitada para el \xe1rea. Puede aceptar la acci\xf3n de soltar llamando:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'//m\xe9todo objeto \xe1rea web\nIf (FORM Event.code=On Window Opening Denied)\n	WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  \n	// o UrlVariable:=WA Get last filtered URL(*; "WebArea")  \n	// donde UrlVariable es la variable URL asociada al \xe1rea web\nEnd if \n'})}),"\n",(0,r.jsx)(n.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/Events/onOpenExternalLink",children:(0,r.jsx)(n.code,{children:"On Open External Link"})})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(667294);let r={},d=i.createContext(r);function s(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);