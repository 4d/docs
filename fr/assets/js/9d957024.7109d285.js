"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66517"],{648901:function(e,r,s){s.r(r),s.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"Events/onLosingFocus","title":"On Losing focus","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | D\xe9finition                        |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/Events/onLosingFocus.md","sourceDirName":"Events","slug":"/Events/onLosingFocus","permalink":"/docs/fr/Events/onLosingFocus","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLosingFocus.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onLosingFocus","title":"On Losing focus"},"sidebar":"docs","previous":{"title":"On Long Click","permalink":"/docs/fr/Events/onLongClick"},"next":{"title":"On Menu Selected","permalink":"/docs/fr/Events/onMenuSelected"}}'),n=s("785893"),t=s("250065");let i={id:"onLosingFocus",title:"On Losing focus"},c=void 0,d={},l=[{value:"Description",id:"description",level:2}];function a(e){let r={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Code"}),(0,n.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,n.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"14"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/buttonOverview",children:"Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/subformOverview",children:"Subform"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/webAreaOverview",children:"Web area"})]}),(0,n.jsx)(r.td,{children:"Un objet formulaire perd le focus"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,n.jsx)(r.code,{children:"On Losing Focus"}),", ainsi que l'\xe9v\xe9nement ",(0,n.jsx)(r.a,{href:"/docs/fr/Events/onGettingFocus",children:(0,n.jsx)(r.code,{children:"On Getting Focus"})}),", sont utilis\xe9s pour d\xe9tecter et g\xe9rer le changement de focus des objets ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesEntry#focusable",children:"focusables"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Avec les ",(0,n.jsx)(r.a,{href:"/docs/fr/FormObjects/subformOverview",children:"objets sous-formulaire"}),", cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 dans la m\xe9thode de l'objet sous-formulaire lorsqu'il est v\xe9rifi\xe9. Il est envoy\xe9 \xe0 la m\xe9thode formulaire du sous-formulaire, ce qui signifie, par exemple, que vous pouvez g\xe9rer l'affichage des boutons de navigation dans le sous-formulaire en fonction du focus. A noter que les objets de sous-formulaire peuvent eux-m\xeames avoir le focus."]})]})}function u(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return i}});var o=s(667294);let n={},t=o.createContext(n);function i(e){let r=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);