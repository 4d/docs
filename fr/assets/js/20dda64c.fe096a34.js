"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51636"],{253158:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"Events/onMouseEnter","title":"On Mouse Enter","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | D\xe9finition                                                      |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/Events/onMouseEnter.md","sourceDirName":"Events","slug":"/Events/onMouseEnter","permalink":"/docs/fr/Events/onMouseEnter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseEnter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onMouseEnter","title":"On Mouse Enter"},"sidebar":"docs","previous":{"title":"On Menu Selected","permalink":"/docs/fr/Events/onMenuSelected"},"next":{"title":"On Mouse Leave","permalink":"/docs/fr/Events/onMouseLeave"}}'),s=n("785893"),o=n("250065");let i={id:"onMouseEnter",title:"On Mouse Enter"},c=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Appeler la pile",id:"appeler-la-pile",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3}];function a(e){let r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Code"}),(0,s.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,s.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"35"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/tabControl",children:"Tab control"})]}),(0,s.jsx)(r.td,{children:"Le curseur de la souris entre dans la zone graphique d'un objet"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 une fois, lorsque le curseur de la souris entre dans la zone graphique d'un objet du formulaire."}),"\n",(0,s.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Mouse Enter"})," met \xe0 jour les variables syst\xe8me ",(0,s.jsx)(r.em,{children:"MouseX"})," et ",(0,s.jsx)(r.em,{children:"MouseY"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Les objets rendus invisibles \xe0 l'aide de la commande ",(0,s.jsx)(r.code,{children:"OBJECT SET VISIBLE"})," ou de la propri\xe9t\xe9 ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," ne g\xe9n\xe8rent pas cet \xe9v\xe9nement."]}),"\n",(0,s.jsx)(r.h3,{id:"appeler-la-pile",children:"Appeler la pile"}),"\n",(0,s.jsxs)(r.p,{children:["Si l'\xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Mouse Enter"})," a \xe9t\xe9 coch\xe9 pour le formulaire, il est g\xe9n\xe9r\xe9 pour chaque objet de formulaire. S'il est v\xe9rifi\xe9 pour un objet, il n'est g\xe9n\xe9r\xe9 que pour cet objet. Lorsqu'il existe des objets superpos\xe9s, l'\xe9v\xe9nement est g\xe9n\xe9r\xe9 par le premier objet capable de le g\xe9rer qui se trouve en allant de haut en bas."]}),"\n",(0,s.jsx)(r.h3,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/fr/Events/onMouseMove",children:(0,s.jsx)(r.code,{children:"On Mouse Move"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/fr/Events/onMouseLeave",children:(0,s.jsx)(r.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return i}});var t=n(667294);let s={},o=t.createContext(s);function i(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);