"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52960],{626224:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var n=r(474848),o=r(28453);const t={id:"onHeader",title:"On Header"},d=void 0,i={id:"Events/onHeader",title:"On Header",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Definici\xf3n                                                                    |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onHeader.md",sourceDirName:"Events",slug:"/Events/onHeader",permalink:"/docs/es/19/Events/onHeader",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonHeader.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onHeader",title:"On Header"},sidebar:"docs",previous:{title:"On Getting focus",permalink:"/docs/es/19/Events/onGettingFocus"},next:{title:"On Header Click",permalink:"/docs/es/19/Events/onHeaderClick"}},c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Code"}),(0,n.jsx)(s.th,{children:"Puede ser llamado por"}),(0,n.jsx)(s.th,{children:"Definici\xf3n"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"5"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/checkboxOverview",children:"Casilla de selecci\xf3n"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario (formulario lista \xfanicamente) - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/inputOverview",children:"\xc1rea de entrada"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/pictureButtonOverview",children:"Bot\xf3n imagen"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de plug-in"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/progressIndicator",children:"Indicador de progreso"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/radiobuttonOverview",children:"Bot\xf3n radio"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/ruler",children:"Regla"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/tabControl",children:"Pesta\xf1a"})]}),(0,n.jsx)(s.td,{children:"El \xe1rea del encabezado del formulario est\xe1 a punto de imprimirse o mostrarse."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(s.p,{children:["El evento ",(0,n.jsx)(s.code,{children:"On Header"})," se llama cuando un registro est\xe1 a punto de ser visualizado en un formulario de lista que se muestra v\xeda ",(0,n.jsx)(s.code,{children:"DISPLAY SELECTION"})," y ",(0,n.jsx)(s.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Este evento no se puede seleccionar para los formularios proyecto, s\xf3lo est\xe1 disponible con los ",(0,n.jsx)(s.strong,{children:"formularios tabla"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"En este contexto, se desencadena la siguiente secuencia de llamadas a m\xe9todos y eventos de formulario:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Para cada objeto en el \xe1rea del encabezado:\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["M\xe9todo objeto con el evento ",(0,n.jsx)(s.code,{children:"On Header"})]}),"\n",(0,n.jsxs)(s.li,{children:["M\xe9todo formulario con el evento ",(0,n.jsx)(s.code,{children:"On Header"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Los registros impresos se gestionan mediante el evento ",(0,n.jsx)(s.a,{href:"/docs/es/19/Events/onDisplayDetail",children:(0,n.jsx)(s.code,{children:"On Display Detail"})}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Llamar a un comando 4D que muestra una caja de di\xe1logo desde el evento ",(0,n.jsx)(s.code,{children:"On Header"})," no est\xe1 permitido y provocar\xe1 un error de sintaxis. M\xe1s concretamente, los comandos en cuesti\xf3n son: ",(0,n.jsx)(s.code,{children:"ALERT"}),", ",(0,n.jsx)(s.code,{children:"DIALOG"}),", ",(0,n.jsx)(s.code,{children:"CONFIRM"}),", ",(0,n.jsx)(s.code,{children:"Request"}),", ",(0,n.jsx)(s.code,{children:"ADD RECORD"}),", ",(0,n.jsx)(s.code,{children:"MODIFY RECORD"}),", ",(0,n.jsx)(s.code,{children:"DISPLAY SELECTION"})," y ",(0,n.jsx)(s.code,{children:"MODIFY SELECTION"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>i});var n=r(296540);const o={},t=n.createContext(o);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);