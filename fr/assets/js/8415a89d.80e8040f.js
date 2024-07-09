/*! For license information please see 8415a89d.80e8040f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1881],{868829:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(474848),s=t(28453);const o={id:"onAfterKeystroke",title:"On After Keystroke"},i=void 0,l={id:"Events/onAfterKeystroke",title:"On After Keystroke",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                       | D\xe9finition                                                                                                                                          |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Events/onAfterKeystroke.md",sourceDirName:"Events",slug:"/Events/onAfterKeystroke",permalink:"/docs/fr/20-R4/Events/onAfterKeystroke",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterKeystroke.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"onAfterKeystroke",title:"On After Keystroke"},sidebar:"docs",previous:{title:"On After Edit",permalink:"/docs/fr/20-R4/Events/onAfterEdit"},next:{title:"On After Sort",permalink:"/docs/fr/20-R4/Events/onAfterSort"}},d={},c=[{value:"Description",id:"Description",level:2},{value:"S\xe9quence de frappe",id:"S\xe9quence-de-frappe",level:3},{value:"Voir \xe9galement",id:"Voir-\xe9galement",level:3}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Code"}),(0,n.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,n.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"28"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,n.jsxs)(r.td,{children:["Un caract\xe8re est sur le point d'\xeatre saisi dans l'objet qui a le focus. ",(0,n.jsx)(r.code,{children:"Get edited text"})," retourne le texte de l'objet, ",(0,n.jsx)(r.strong,{children:"y compris"})," ce caract\xe8re."]})]})})]}),"\n",(0,n.jsxs)(r.details,{children:[(0,n.jsx)(r.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Release"}),(0,n.jsx)(r.th,{children:"Modifications"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"18 R5"}),(0,n.jsx)(r.td,{children:"- Support in non-enterable list boxes - The event is now triggered after IME validation"})]})})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"Description",children:"Description"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,n.jsx)(r.code,{children:"On After Keystroke"})," peut g\xe9n\xe9ralement \xeatre remplac\xe9 par l'\xe9v\xe9nement ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R4/Events/onAfterEdit",children:(0,n.jsx)(r.code,{children:"On After Edit"})})," (voir ci-dessous)."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Apr\xe8s avoir s\xe9lectionn\xe9 les propri\xe9t\xe9s d'\xe9v\xe9nement ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R4/Events/onBeforeKeystroke",children:(0,n.jsx)(r.code,{children:"On Before Keystroke"})})," et ",(0,n.jsx)(r.code,{children:"On After Keystroke"})," pour un objet, vous pouvez d\xe9tecter et g\xe9rer les frappes au sein de l'objet, en utilisant la commande ",(0,n.jsx)(r.code,{children:"FORM event"})," qui renverra ",(0,n.jsx)(r.code,{children:"On Before Keystroke"})," puis ",(0,n.jsx)(r.code,{children:"On After Keystroke"})," (pour plus d'informations, veuillez reportez-vous \xe0 la description de la commande ",(0,n.jsx)(r.code,{children:"Get edited text"}),")."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Ces \xe9v\xe9nements sont \xe9galement activ\xe9s par des commandes de langage qui simulent une action utilisateur telle que ",(0,n.jsx)(r.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,n.jsx)(r.code,{children:"On After Keystroke"})," n'est pas g\xe9n\xe9r\xe9 :"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["dans la m\xe9thode ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/listboxOverview#list-box-columns",children:"des colonnes de list box"}),", sauf lorsqu'une cellule est en cours d'\xe9dition (cependant elle est g\xe9n\xe9r\xe9e dans tous les cas dans la m\xe9thode de ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/listboxOverview",children:"list box"}),"),"]}),"\n",(0,n.jsxs)(r.li,{children:["lorsque les modifications utilisateur ne sont pas effectu\xe9es \xe0 l'aide du clavier (coller, glisser-d\xe9poser, case \xe0 cocher, liste d\xe9roulante, combo box). Pour traiter ces \xe9v\xe9nements, vous devez utiliser ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R4/Events/onAfterEdit",children:(0,n.jsx)(r.code,{children:"On After Edit"})}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"S\xe9quence-de-frappe",children:"S\xe9quence de frappe"}),"\n",(0,n.jsxs)(r.p,{children:["Lorsqu'une entr\xe9e n\xe9cessite une s\xe9quence de frappes clavier, les \xe9v\xe9nements ",(0,n.jsx)(r.a,{href:"/docs/fr/20-R4/Events/onBeforeKeystroke",children:(0,n.jsx)(r.code,{children:"On Before Keystroke"})})," et [",(0,n.jsx)(r.code,{children:"On After Keystroke event"}),"] sont g\xe9n\xe9r\xe9s uniquement lorsque l'entr\xe9e est enti\xe8rement valid\xe9e par l'utilisateur. La commande ",(0,n.jsx)(r.code,{children:"Keystroke"})," retourne le caract\xe8re valid\xe9. Ce cas se produit principalement :"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:'lors de l\'utilisation de touches "mortes" telles que ^ ou ~: les \xe9v\xe9nements ne sont g\xe9n\xe9r\xe9s que lorsque le caract\xe8re \xe9tendu est \xe9ventuellement saisi (par exemple "\xea" ou \xf1),'}),"\n",(0,n.jsx)(r.li,{children:"lorsqu'un IME (Input method editor) affiche une bo\xeete de dialogue interm\xe9diaire o\xf9 l'utilisateur peut saisir une combinaison de caract\xe8res : les \xe9v\xe9nements sont g\xe9n\xe9r\xe9s uniquement lorsque la bo\xeete de dialogue IME est valid\xe9e."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"Voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/fr/20-R4/Events/onBeforeKeystroke",children:"On Before Keystroke"}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},221020:(e,r,t)=>{var n=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,o={},c=null,a=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,n)&&!d.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:a,props:o,_owner:l.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(296540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);