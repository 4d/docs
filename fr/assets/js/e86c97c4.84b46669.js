"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11335"],{206816:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"Events/onBeginDragOver","title":"On Begin Drag Over","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | D\xe9finition                           |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/Events/onBeginDragOver.md","sourceDirName":"Events","slug":"/Events/onBeginDragOver","permalink":"/docs/fr/Events/onBeginDragOver","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeginDragOver.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"onBeginDragOver","title":"On Begin Drag Over"},"sidebar":"docs","previous":{"title":"On Before Keystroke","permalink":"/docs/fr/Events/onBeforeKeystroke"},"next":{"title":"On Begin URL Loading","permalink":"/docs/fr/Events/onBeginUrlLoading"}}'),s=n("785893"),o=n("250065");let i={id:"onBeginDragOver",title:"On Begin Drag Over"},c=void 0,d={},l=[{value:"Description",id:"description",level:2}];function a(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Code"}),(0,s.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,s.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"17"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/tabControl",children:"Tab control"})]}),(0,s.jsx)(r.td,{children:"Un objet est en cours de d\xe9placement"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["L'\xe9v\xe9nement de formulaire ",(0,s.jsx)(r.code,{children:"On Begin Drag Over"})," peut \xeatre s\xe9lectionn\xe9 pour tous les objets formulaire pouvant \xeatre d\xe9plac\xe9s. Il est g\xe9n\xe9r\xe9 dans tous les cas o\xf9 l'objet a la propri\xe9t\xe9 ",(0,s.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesAction#draggable",children:"Draggable"}),". Il peut \xeatre appel\xe9 \xe0 partir de la m\xe9thode de l'objet source ou de la m\xe9thode formulaire de l'objet source."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Contrairement \xe0 l'\xe9v\xe9nement formulaire ",(0,s.jsx)(r.a,{href:"/docs/fr/Events/onDragOver",children:(0,s.jsx)(r.code,{children:"On Drag Over"})}),", ",(0,s.jsx)(r.code,{children:"On Begin Drag Over"})," est appel\xe9 dans le contexte de l'",(0,s.jsx)(r.strong,{children:"objet source"})," de l'action de glisser."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(r.code,{children:"On Begin Drag Over"})," est utile pour pr\xe9parer l'action de glisser. Il peut \xeatre utilis\xe9 pour :"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Ajouter des donn\xe9es et des signatures au conteneur (via la commande ",(0,s.jsx)(r.code,{children:"APPEND DATA TO PASTEBOARD"}),")."]}),"\n",(0,s.jsxs)(r.li,{children:["Utiliser une ic\xf4ne personnalis\xe9e pendant l'action de glissement (via la commande ",(0,s.jsx)(r.code,{children:"SET DRAG ICON"}),")."]}),"\n",(0,s.jsxs)(r.li,{children:["Accept or refuse dragging via the result of the method of the dragged object.\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"To indicate that drag actions are accepted, the method of the source object must return 0 (zero)."}),"\n",(0,s.jsx)(r.li,{children:"To indicate that drag actions are refused, the method of the source object must return -1 (minus one)."}),"\n",(0,s.jsx)(r.li,{children:"Si aucun r\xe9sultat n'est retourn\xe9, 4D consid\xe8re que les actions de glissement sont accept\xe9es."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Les donn\xe9es 4D sont plac\xe9es dans le presse-papiers avant d'appeler l'\xe9v\xe9nement. Par exemple, dans le cas d'un glissement sans l'action de ",(0,s.jsx)(r.strong,{children:"glissement automatique"}),", le texte gliss\xe9 se trouve d\xe9j\xe0 dans le conteneur lorsque l'\xe9v\xe9nement est appel\xe9."]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return i}});var t=n(667294);let s={},o=t.createContext(s);function i(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);