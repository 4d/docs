"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51807"],{468501:function(e,r,t){t.r(r),t.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>c});var n=JSON.parse('{"id":"Events/onPrintingDetail","title":"On Printing Detail","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Definici\xf3n                                                  |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/Events/onPrintingDetail.md","sourceDirName":"Events","slug":"/Events/onPrintingDetail","permalink":"/docs/es/Events/onPrintingDetail","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPrintingDetail.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onPrintingDetail","title":"On Printing Detail"},"sidebar":"docs","previous":{"title":"On Printing Break","permalink":"/docs/es/Events/onPrintingBreak"},"next":{"title":"On Printing Footer","permalink":"/docs/es/Events/onPrintingFooter"}}'),o=t("785893"),s=t("250065");let i={id:"onPrintingDetail",title:"On Printing Detail"},c=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function a(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Puede ser llamado por"}),(0,o.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"23"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/tabControl",children:"Tab control"})]}),(0,o.jsx)(r.td,{children:"El \xe1rea detallada del formulario est\xe1 a punto de imprimirse"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(r.p,{children:["El evento ",(0,o.jsx)(r.code,{children:"On Printing Detail"})," s\xf3lo puede utilizarse en el contexto de un ",(0,o.jsx)(r.strong,{children:"formulario de salida"}),". Se activa cuando el \xe1rea de detalle del formulario de salida est\xe1 a punto de imprimirse, por ejemplo tras una llamada al comando ",(0,o.jsx)(r.code,{children:"Print form"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["El comando ",(0,o.jsx)(r.code,{children:"Print form"})," genera s\xf3lo un evento ",(0,o.jsx)(r.code,{children:"On Printing Detail"})," para el m\xe9todo formulario."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Este evento no se puede seleccionar para los formularios proyecto, s\xf3lo est\xe1 disponible con los ",(0,o.jsx)(r.strong,{children:"formularios tabla"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,r,t){t.d(r,{Z:function(){return c},a:function(){return i}});var n=t(667294);let o={},s=n.createContext(o);function i(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);