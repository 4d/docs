/*! For license information please see 4e1f6468.806b43ad.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96267],{496166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=t(474848),s=t(28453);const l={id:"onHeaderClick",title:"On Header Click"},i=void 0,d={id:"Events/onHeaderClick",title:"On Header Click",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                            | D\xe9finition                                    |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onHeaderClick.md",sourceDirName:"Events",slug:"/Events/onHeaderClick",permalink:"/docs/fr/20/Events/onHeaderClick",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonHeaderClick.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onHeaderClick",title:"On Header Click"},sidebar:"docs",previous:{title:"Sur ent\xeate",permalink:"/docs/fr/20/Events/onHeader"},next:{title:"On Load",permalink:"/docs/fr/20/Events/onLoad"}},o={},c=[{value:"Description",id:"description",level:2},{value:"List Box",id:"list-box",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Exemple",id:"exemple",level:4}];function a(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,r.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"42"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})," - ",(0,r.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,r.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listboxOverview#list-box-columns",children:"Colonne de List Box"})]}),(0,r.jsx)(n.td,{children:"Un clic se produit dans un en-t\xeate de colonne"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.h3,{id:"list-box",children:"List Box"}),"\n",(0,r.jsxs)(n.p,{children:["Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsqu'un clic se produit sur l'en-t\xeate d'une colonne de list box. Dans ce cas, la commande ",(0,r.jsx)(n.code,{children:"Self"})," vous permet d'identifier l'en-t\xeate de la colonne sur laquelle vous avez cliqu\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Si la propri\xe9t\xe9 ",(0,r.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesAction#sortable",children:"Sortable"})," a \xe9t\xe9 s\xe9lectionn\xe9e pour la list box, vous pouvez d\xe9cider d'autoriser ou non un tri standard de la colonne en passant la valeur 0 ou -1 dans la variable ",(0,r.jsx)(n.code,{children:"$0"})," :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.code,{children:"$0"})," est \xe9gal \xe0 0, un tri standard est effectu\xe9."]}),"\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.code,{children:"$0"})," est \xe9gal \xe0 -1, un tri standard n'est pas effectu\xe9 et l'en-t\xeate n'affiche pas la fl\xe8che de tri. Le d\xe9veloppeur peut toujours g\xe9n\xe9rer un tri de colonne bas\xe9 sur des crit\xe8res de tri personnalis\xe9s \xe0 l'aide du langage 4D."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si la propri\xe9t\xe9 ",(0,r.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesAction#sortable",children:"Sortable"})," n'est pas s\xe9lectionn\xe9e pour la list box, la variable ",(0,r.jsx)(n.code,{children:"$0"})," n'est pas utilis\xe9e."]}),"\n",(0,r.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,r.jsxs)(n.p,{children:["Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsque l'utilisateur clique sur un en-t\xeate de colonne ou de ligne dans un document 4D View Pro. Dans ce contexte, l'",(0,r.jsx)(n.a,{href:"/docs/fr/20/Events/overview#event-object",children:"objet \xe9v\xe9nement"})," retourn\xe9 par la commande ",(0,r.jsx)(n.code,{children:"FORM Event"})," contient :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"entier long"}),(0,r.jsx)(n.td,{children:"42"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On Header Click"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la zone 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la feuille de l'\xe9v\xe9nement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Plage de cellule"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetArea"}),(0,r.jsx)(n.td,{children:"entier long"}),(0,r.jsxs)(n.td,{children:["L'emplacement de la feuille o\xf9 l'\xe9v\xe9nement a eu lieu :",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.li,{children:"0 : la zone de croisement entre le num\xe9ro de colonne/les en-t\xeates de lettre (en haut \xe0 gauche de la feuille)"}),(0,r.jsx)(n.li,{children:"1 : les en-t\xeates de colonne (zone indiquant les num\xe9ros/lettres de colonnes)"}),(0,r.jsx)(n.li,{children:"2 : les en-t\xeates de ligne (zone indiquant les num\xe9ros de ligne)"})]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Header Click)\n    Case of\n       :(FORM Event.sheetArea=1)\n          $values:=VP Get values(FORM Event.range)\n       :(FORM Event.sheetArea=2)\n          VP SET CELL STYLE(FORM Event.range;New object("backColor";"gray"))\n       :(FORM Event.sheetArea=0)\n          VP SET CELL STYLE(FORM Event.range;New object("borderBottom";\\\n          New object("color";"#800080";"style";vk line style thick)))\n    End case\n End if\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,l={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,r)&&!o.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:a,props:l,_owner:d.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(296540);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);