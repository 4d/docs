"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31635"],{225496:function(e,r,s){s.r(r),s.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"Events/onLosingFocus","title":"On Losing focus","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | D\xe9finition                        |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onLosingFocus.md","sourceDirName":"Events","slug":"/Events/onLosingFocus","permalink":"/docs/fr/20/Events/onLosingFocus","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLosingFocus.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onLosingFocus","title":"On Losing focus"},"sidebar":"docs","previous":{"title":"On Long Click","permalink":"/docs/fr/20/Events/onLongClick"},"next":{"title":"On Menu Selected","permalink":"/docs/fr/20/Events/onMenuSelected"}}'),t=s("785893"),n=s("250065");let i={id:"onLosingFocus",title:"On Losing focus"},c=void 0,d={},l=[{value:"Description",id:"description",level:2}];function a(e){let r={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Code"}),(0,t.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,t.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"14"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/subformOverview",children:"Subform"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/webAreaOverview",children:"Web area"})]}),(0,t.jsx)(r.td,{children:"Un objet formulaire perd le focus"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["Les \xe9v\xe9nements ",(0,t.jsx)(r.code,{children:"On Losing Focus"})," et ",(0,t.jsx)(r.a,{href:"/docs/fr/20/Events/onGettingFocus",children:(0,t.jsx)(r.code,{children:"On Getting Focus"})})," permettent de d\xe9tecter et de g\xe9rer le changement de focus pour les objets ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesEntry#focusable",children:"focalisables"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Avec les ",(0,t.jsx)(r.a,{href:"/docs/fr/20/FormObjects/subformOverview",children:"objets sous-formulaire"}),", cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 dans la m\xe9thode de l'objet sous-formulaire lorsqu'il est v\xe9rifi\xe9. Il est envoy\xe9 \xe0 la m\xe9thode formulaire du sous-formulaire, ce qui signifie, par exemple, que vous pouvez g\xe9rer l'affichage des boutons de navigation dans le sous-formulaire en fonction du focus. A noter que les objets de sous-formulaire peuvent eux-m\xeames avoir le focus."]})]})}function u(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return i}});var o=s(667294);let t={},n=o.createContext(t);function i(e){let r=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);