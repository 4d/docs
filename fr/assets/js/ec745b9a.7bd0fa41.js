"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63672"],{297143:function(e,r,s){s.r(r),s.d(r,{default:()=>a,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"Events/onMouseMove","title":"On Mouse Move","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | D\xe9finition                                                                                                                                            |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Events/onMouseMove.md","sourceDirName":"Events","slug":"/Events/onMouseMove","permalink":"/docs/fr/20-R7/Events/onMouseMove","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseMove.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onMouseMove","title":"On Mouse Move"},"sidebar":"docs","previous":{"title":"On Mouse Leave","permalink":"/docs/fr/20-R7/Events/onMouseLeave"},"next":{"title":"On Mouse Up","permalink":"/docs/fr/20-R7/Events/onMouseUp"}}'),o=s("785893"),t=s("250065");let i={id:"onMouseMove",title:"On Mouse Move"},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Appeler la pile",id:"appeler-la-pile",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3}];function u(e){let r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,o.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"37"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"Zone 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/buttonGridOverview",children:"Grille de boutons"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/pictureButtonOverview",children:"Bouton image"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/pluginAreaOverview#overview",children:"Zone de Plug-in"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/tabControl",children:"Onglet"})]}),(0,o.jsx)(r.td,{children:"Le curseur de la souris se d\xe9place d'au moins un pixel OU une touche de modification (Shift, Alt/Option, Shift Lock) a \xe9t\xe9 press\xe9e"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(r.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 :"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"lorsque le curseur de la souris se d\xe9place d'au moins un pixel"}),"\n",(0,o.jsxs)(r.li,{children:["OU lorsque l'on presse sur une touche de modification (",(0,o.jsx)(r.strong,{children:"Ctrl"}),", ",(0,o.jsx)(r.strong,{children:"Alt/Option"}),", ",(0,o.jsx)(r.strong,{children:"Verr Maj"}),"). Cela permet de g\xe9rer les op\xe9rations de glisser-d\xe9poser de type copier ou d\xe9placer."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Si l'\xe9v\xe9nement est coch\xe9 pour un objet uniquement, il est g\xe9n\xe9r\xe9 uniquement lorsque le curseur se trouve dans la zone graphique de l'objet."}),"\n",(0,o.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,o.jsx)(r.code,{children:"On Mouse Move"})," met \xe0 jour les variables syst\xe8me ",(0,o.jsx)(r.em,{children:"MouseX"})," et ",(0,o.jsx)(r.em,{children:"MouseY"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Les objets rendus invisibles \xe0 l'aide de la commande ",(0,o.jsx)(r.code,{children:"OBJECT SET VISIBLE"})," ou de la propri\xe9t\xe9 ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," ne g\xe9n\xe8rent pas cet \xe9v\xe9nement."]}),"\n",(0,o.jsx)(r.h3,{id:"appeler-la-pile",children:"Appeler la pile"}),"\n",(0,o.jsxs)(r.p,{children:["Si l'\xe9v\xe9nement ",(0,o.jsx)(r.code,{children:"On Mouse Move"})," a \xe9t\xe9 coch\xe9 pour le formulaire, il est g\xe9n\xe9r\xe9 pour chaque objet de formulaire. S'il est v\xe9rifi\xe9 pour un objet, il n'est g\xe9n\xe9r\xe9 que pour cet objet. Lorsqu'il existe des objets superpos\xe9s, l'\xe9v\xe9nement est g\xe9n\xe9r\xe9 par le premier objet capable de le g\xe9rer qui se trouve en allant de haut en bas."]}),"\n",(0,o.jsx)(r.h3,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/Events/onMouseEnter",children:(0,o.jsx)(r.code,{children:"On Mouse Enter"})})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/fr/20-R7/Events/onMouseLeave",children:(0,o.jsx)(r.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function a(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return l},a:function(){return i}});var n=s(667294);let o={},t=n.createContext(o);function i(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);