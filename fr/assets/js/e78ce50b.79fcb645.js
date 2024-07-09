/*! For license information please see e78ce50b.79fcb645.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10076],{793283:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=s(474848),o=s(28453);const r={id:"onMouseUp",title:"On Mouse Up"},i=void 0,l={id:"Events/onMouseUp",title:"On Mouse Up",description:"| Code | Peut \xeatre appel\xe9 par                                                                                     | D\xe9finition                                                                        |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/onMouseUp.md",sourceDirName:"Events",slug:"/Events/onMouseUp",permalink:"/docs/fr/19/Events/onMouseUp",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseUp.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onMouseUp",title:"On Mouse Up"},sidebar:"docs",previous:{title:"On Mouse Move",permalink:"/docs/fr/19/Events/onMouseMove"},next:{title:"On Open Detail",permalink:"/docs/fr/19/Events/onOpenDetail"}},u={},d=[{value:"Description",id:"Description",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,t.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/inputOverview",children:"Zone de saisie"})," de ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/propertiesObject#type",children:"type"})," ",(0,t.jsx)(n.code,{children:"image"})]}),(0,t.jsx)(n.td,{children:"L'utilisateur vient de rel\xe2cher le bouton gauche de la souris dans un objet Image"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"Description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Mouse Up"})," est g\xe9n\xe9r\xe9 lorsque l'utilisateur vient de rel\xe2cher le bouton gauche de la souris tout en faisant glisser une image. Cet \xe9v\xe9nement est utile, par exemple, lorsque vous souhaitez que l'utilisateur puisse d\xe9placer, redimensionner ou dessiner des objets dans une zone SVG."]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque l'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Mouse Up"})," est g\xe9n\xe9r\xe9, vous pouvez obtenir les coordonn\xe9es locales o\xf9 le bouton de la souris a \xe9t\xe9 rel\xe2ch\xe9. Ces coordonn\xe9es sont retourn\xe9es dans les variables syst\xe8me ",(0,t.jsx)(n.code,{children:"MouseX"})," et ",(0,t.jsx)(n.code,{children:"MouseY"}),". Les coordonn\xe9es sont exprim\xe9es en pixels par rapport \xe0 l'angle sup\xe9rieur gauche de l'image (0,0)."]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque vous utilisez cet \xe9v\xe9nement, vous devez \xe9galement utiliser la commande ",(0,t.jsx)(n.code,{children:"Is waiting mouse up"})," pour g\xe9rer les cas o\xf9 le \"gestionnaire d'\xe9tat\" du formulaire est d\xe9synchronis\xe9, c'est-\xe0-dire lorsque l'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Mouse Up"})," n'est pas re\xe7u apr\xe8s un clic. C'est le cas par exemple lorsqu'une bo\xeete de dialogue d'alerte s'affiche au-dessus du formulaire alors que le bouton de la souris n'a pas \xe9t\xe9 rel\xe2ch\xe9. Pour plus d'informations et pour voir un exemple d'utilisation de l'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Mouse Up"}),", veuillez vous r\xe9f\xe9rer \xe0 la description de la commande ",(0,t.jsx)(n.code,{children:"Is waiting mouse up"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Si l'option ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/propertiesAction#draggable",children:"Draggable"})," est activ\xe9e pour l'objet image, l'\xe9v\xe9nement ",(0,t.jsx)(n.code,{children:"On Mouse Up"})," n'est jamais g\xe9n\xe9r\xe9."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var t=s(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,r={},d=null,c=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,t)&&!u.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:o,type:e,key:d,ref:c,props:r,_owner:l.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(296540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);