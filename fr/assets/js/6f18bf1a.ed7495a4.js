"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68119"],{155474:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"Events/onClicked","title":"On Clicked","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | D\xe9finition                          |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/onClicked.md","sourceDirName":"Events","slug":"/Events/onClicked","permalink":"/docs/fr/19/Events/onClicked","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonClicked.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onClicked","title":"On Clicked"},"sidebar":"docs","previous":{"title":"On Bound Variable Change","permalink":"/docs/fr/19/Events/onBoundVariableChange"},"next":{"title":"On Close Box","permalink":"/docs/fr/19/Events/onCloseBox"}}'),t=r("785893"),i=r("250065");let o={id:"onClicked",title:"On Clicked"},c=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"On Clicked et On Double Clicked",id:"on-clicked-et-on-double-clicked",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Exemple",id:"exemple",level:4}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,t.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/tabControl",children:"Tab control"})]}),(0,t.jsx)(n.td,{children:"Un clic a \xe9t\xe9 effectu\xe9 sur un objet"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Clicked"})," est g\xe9n\xe9r\xe9 lorsque l'utilisateur clique sur un objet."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Certains objets de formulaire peuvent \xeatre activ\xe9s avec le clavier. Par exemple, une fois qu'une case \xe0 cocher obtient le focus, elle peut \xeatre saisie \xe0 l'aide de la barre d'espace. Dans ce cas, l'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Clicked"})," est toujours g\xe9n\xe9r\xe9."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Clicked"})," se produit g\xe9n\xe9ralement une fois que le bouton de la souris est rel\xe2ch\xe9. Cependant, il existe plusieurs exceptions :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/propertiesDisplay#not-rendered",children:"Boutons invisibles"}),": l'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Clicked"})," se produit d\xe8s que le clic est effectu\xe9 et n'attend pas que le bouton de la souris soit rel\xe2ch\xe9."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/ruler",children:"R\xe8gles"})," : si l'option de ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/propertiesAction#execute-object-method",children:"m\xe9thode d'ex\xe9cution d'objet"})," est d\xe9finie sur ",(0,t.jsx)(n.strong,{children:"true"}),", l'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Clicked"})," se produit d\xe8s que le clic est effectu\xe9."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/comboBoxOverview",children:"Combo box"})," : l'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Clicked"})," se produit uniquement si l'utilisateur s\xe9lectionne une autre valeur dans le menu associ\xe9. Une ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/comboBoxOverview",children:"combo box"})," doit \xeatre trait\xe9e comme une zone de texte saisissable dont la liste d\xe9roulante associ\xe9e fournit des valeurs par d\xe9faut. Par cons\xe9quent, vous g\xe9rez la saisie de donn\xe9es dans une combo box via les \xe9v\xe9nements ",(0,t.jsx)(n.code,{children:"On Before Keystroke"}),", ",(0,t.jsx)(n.code,{children:"On After Keystroke"})," et ",(0,t.jsx)(n.code,{children:"On Data Change"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/dropdownListOverview",children:"Listes d\xe9roulantes"})," : l'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Clicked"})," se produit uniquement si l'utilisateur s\xe9lectionne une autre valeur dans le menu. L'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Data Change"})," vous permet de d\xe9tecter l'activation de l'objet lorsqu'une valeur diff\xe9rente de la valeur courante est s\xe9lectionn\xe9e"]}),"\n",(0,t.jsxs)(n.li,{children:["Lorsqu'une cellule d'entr\xe9e de list box est ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview#managing-entry",children:"en cours d'\xe9dition"}),", l'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Clicked"})," est g\xe9n\xe9r\xe9 lorsque le bouton de la souris est enfonc\xe9, permettant d'utiliser la commande ",(0,t.jsx)(n.code,{children:"Contextual click"})," par exemple."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Dans le cas d'un \xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Clicked"}),", vous pouvez tester le nombre de clics effectu\xe9s par l'utilisateur \xe0 l'aide de la commande ",(0,t.jsx)(n.code,{children:"Clickcount"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"on-clicked-et-on-double-clicked",children:"On Clicked et On Double Clicked"}),"\n",(0,t.jsxs)(n.p,{children:["Une fois que la propri\xe9t\xe9 d'\xe9v\xe9nement d'objet ",(0,t.jsx)(n.code,{children:"On Clicked"})," ou ",(0,t.jsx)(n.a,{href:"/docs/fr/19/Events/onDoubleClicked",children:(0,t.jsx)(n.code,{children:"On Double Clicked"})})," est s\xe9lectionn\xe9e pour un objet, vous pouvez d\xe9tecter et g\xe9rer les clics dans ou sur l'objet, \xe0 l'aide de la commande ",(0,t.jsx)(n.code,{children:"FORM event"})," qui retourne ",(0,t.jsx)(n.code,{children:"On Clicked"})," ou ",(0,t.jsx)(n.a,{href:"/docs/fr/19/Events/onDoubleClicked",children:(0,t.jsx)(n.code,{children:"On Double Clicked"})}),", selon le cas."]}),"\n",(0,t.jsxs)(n.p,{children:["Si les deux \xe9v\xe9nements sont s\xe9lectionn\xe9s pour un objet, les \xe9v\xe9nements ",(0,t.jsx)(n.code,{children:"On Clicked"})," puis ",(0,t.jsx)(n.code,{children:"On Double Clicked"})," seront g\xe9n\xe9r\xe9s lorsque l'utilisateur double-clique sur l'objet."]}),"\n",(0,t.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,t.jsxs)(n.p,{children:["Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsque l'utilisateur clique n'importe o\xf9 dans un document 4D View Pro. Dans ce contexte, l'",(0,t.jsx)(n.a,{href:"/docs/fr/19/Events/overview#event-object",children:"objet \xe9v\xe9nement"})," retourn\xe9 par la commande ",(0,t.jsx)(n.code,{children:"FORM Event"})," contient :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"code"}),(0,t.jsx)(n.td,{children:"entier long"}),(0,t.jsx)(n.td,{children:"On Clicked"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'"On Clicked"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objectName"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Nom de la zone 4D View Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheetName"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Nom de la feuille de l'\xe9v\xe9nement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"range"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Plage de cellule"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Clicked)\n    VP SET CELL STYLE(FORM Event.range;New object("backColor";"green"))\n End if\n'})})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var s=r(667294);let t={},i=s.createContext(t);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);