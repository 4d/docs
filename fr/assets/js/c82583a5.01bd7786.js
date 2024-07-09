/*! For license information please see c82583a5.01bd7786.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88400],{750801:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(474848),r=n(28453);const o={id:"onBeforeKeystroke",title:"On Before Keystroke"},i=void 0,l={id:"Events/onBeforeKeystroke",title:"On Before Keystroke",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                       | D\xe9finition                                                                                                                                                                     |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/Events/onBeforeKeystroke.md",sourceDirName:"Events",slug:"/Events/onBeforeKeystroke",permalink:"/docs/fr/Events/onBeforeKeystroke",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeforeKeystroke.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onBeforeKeystroke",title:"On Before Keystroke"},sidebar:"docs",previous:{title:"On Before Data Entry",permalink:"/docs/fr/Events/onBeforeDataEntry"},next:{title:"On Begin Drag Over",permalink:"/docs/fr/Events/onBeginDragOver"}},d={},c=[{value:"Description",id:"Description",level:2},{value:"Objets non saisissables",id:"Objets-non-saisissables",level:3},{value:"S\xe9quence de frappe",id:"S\xe9quence-de-frappe",level:3},{value:"Voir \xe9galement",id:"Voir-\xe9galement",level:3}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Code"}),(0,t.jsx)(s.th,{children:"Peut \xeatre appel\xe9 par"}),(0,t.jsx)(s.th,{children:"D\xe9finition"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"17"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,t.jsx)(s.a,{href:"/docs/fr/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,t.jsx)(s.a,{href:"/docs/fr/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(s.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(s.a,{href:"/docs/fr/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,t.jsxs)(s.td,{children:["Un caract\xe8re est sur le point d'\xeatre saisi dans l'objet qui a le focus. ",(0,t.jsx)(s.code,{children:"Get edited text"})," retourne le texte de l'objet, ",(0,t.jsx)(s.strong,{children:"sans"})," ce caract\xe8re."]})]})})]}),"\n",(0,t.jsxs)(s.details,{children:[(0,t.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Release"}),(0,t.jsx)(s.th,{children:"Modifications"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"18 R5"}),(0,t.jsx)(s.td,{children:"- Support in non-enterable list boxes - The event is now triggered after IME validation"})]})})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"Description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["After the ",(0,t.jsx)(s.code,{children:"On Before Keystroke"})," and ",(0,t.jsx)(s.a,{href:"/docs/fr/Events/onAfterKeystroke",children:(0,t.jsx)(s.code,{children:"On After Keystroke event"})})," events are selected for an object, you can detect and handle the keystrokes within the object, using the ",(0,t.jsx)(s.code,{children:"Form event code"})," command that will return ",(0,t.jsx)(s.code,{children:"On Before Keystroke"})," and then ",(0,t.jsx)(s.a,{href:"/docs/fr/Events/onAfterKeystroke",children:(0,t.jsx)(s.code,{children:"On After Keystroke event"})})," (for more information, please refer to the description of the ",(0,t.jsx)(s.code,{children:"Get edited text"})," command). Dans l'\xe9v\xe9nement ",(0,t.jsx)(s.code,{children:"On Before Keystroke"}),", la commande ",(0,t.jsx)(s.code,{children:"FILTER KEYSTROKE"})," peut \xeatre utilis\xe9e pour filtrer les caract\xe8res typ\xe9s."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Ces \xe9v\xe9nements sont \xe9galement activ\xe9s par des commandes de langage qui simulent une action utilisateur telle que ",(0,t.jsx)(s.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["L'\xe9v\xe9nement ",(0,t.jsx)(s.code,{children:"On Before Keystroke"})," n'est pas g\xe9n\xe9r\xe9 :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["dans une m\xe9thode ",(0,t.jsx)(s.a,{href:"/docs/fr/FormObjects/listboxOverview#list-box-columns",children:"colonnes de list box"}),", sauf lorsqu'une cellule est en cours d'\xe9dition (cependant elle est g\xe9n\xe9r\xe9e dans tous les cas dans la m\xe9thode de ",(0,t.jsx)(s.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"list box"}),"),"]}),"\n",(0,t.jsxs)(s.li,{children:["lorsque les modifications utilisateur ne sont pas effectu\xe9es \xe0 l'aide du clavier (coller, glisser-d\xe9poser, case \xe0 cocher, liste d\xe9roulante, combo box). To process these events, you must use ",(0,t.jsx)(s.a,{href:"/docs/fr/Events/onAfterEdit",children:(0,t.jsx)(s.code,{children:"On After Edit"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"Objets-non-saisissables",children:"Objets non saisissables"}),"\n",(0,t.jsxs)(s.p,{children:["L'\xe9v\xe9nement ",(0,t.jsx)(s.code,{children:"On Before Keystroke"})," peut \xeatre g\xe9n\xe9r\xe9 dans des objets non saisissables, par exemple dans une list box m\xeame si les cellules de la list box ne sont pas saisissables ou si les lignes ne peuvent pas \xeatre s\xe9lectionn\xe9es. Cela vous permet de cr\xe9er des interfaces dans lesquelles l'utilisateur peut faire d\xe9filer dynamiquement jusqu'\xe0 une ligne sp\xe9cifique dans une list box en saisissant les premi\xe8res lettres d'une valeur. Dans le cas o\xf9 les cellules de la list box sont saisissables, vous pouvez utiliser la commande ",(0,t.jsx)(s.code,{children:"Is editing text"})," pour savoir si l'utilisateur saisit r\xe9ellement du texte dans une cellule ou s'il utilise la fonction de saisie pr\xe9dictive, puis ex\xe9cutez le co"]}),"\n",(0,t.jsx)(s.h3,{id:"S\xe9quence-de-frappe",children:"S\xe9quence de frappe"}),"\n",(0,t.jsxs)(s.p,{children:["When an entry requires a sequence of keystrokes, the ",(0,t.jsx)(s.code,{children:"On Before Keystroke"})," and ",(0,t.jsx)(s.a,{href:"/docs/fr/Events/onAfterKeystroke",children:(0,t.jsx)(s.code,{children:"On After Keystroke"})})," events are generated only when the entry is fully validaded by the user. La commande ",(0,t.jsx)(s.code,{children:"Keystroke"})," retourne le caract\xe8re valid\xe9. Ce cas se produit principalement :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'lors de l\'utilisation de touches "mortes" telles que ^ ou ~: les \xe9v\xe9nements ne sont g\xe9n\xe9r\xe9s que lorsque le caract\xe8re \xe9tendu est \xe9ventuellement saisi (par exemple "\xea" ou \xf1),'}),"\n",(0,t.jsx)(s.li,{children:"lorsqu'un IME (Input method editor) affiche une bo\xeete de dialogue interm\xe9diaire o\xf9 l'utilisateur peut saisir une combinaison de caract\xe8res : les \xe9v\xe9nements sont g\xe9n\xe9r\xe9s uniquement lorsque la bo\xeete de dialogue IME est valid\xe9e."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"Voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/Events/onAfterKeystroke",children:"On After Keystroke"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,s,n)=>{var t=n(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var t,o={},c=null,a=null;for(t in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(a=s.ref),s)i.call(s,t)&&!d.hasOwnProperty(t)&&(o[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===o[t]&&(o[t]=s[t]);return{$$typeof:r,type:e,key:c,ref:a,props:o,_owner:l.current}}s.Fragment=o,s.jsx=c,s.jsxs=c},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(296540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);