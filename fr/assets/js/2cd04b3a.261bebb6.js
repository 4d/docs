"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1004],{918621:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var t=s(474848),r=s(28453);const l={id:"object-set-value",title:"OBJECT SET VALUE",slug:"/commands/object-set-value",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/object-set-value",title:"OBJECT SET VALUE",description:"OBJECT SET VALUE ( nomObjet ; valeur )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-value.md",sourceDirName:"commands-legacy",slug:"/commands/object-set-value",permalink:"/docs/fr/commands/object-set-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-set-value",title:"OBJECT SET VALUE",slug:"/commands/object-set-value",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT SET TITLE",permalink:"/docs/fr/commands/object-set-title"},next:{title:"OBJECT SET VERTICAL ALIGNMENT",permalink:"/docs/fr/commands/object-set-vertical-alignment"}},i={},a=[{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET VALUE"})," ( ",(0,t.jsx)(n.em,{children:"nomObjet"})," ; ",(0,t.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomObjet"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de l'objet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valeur"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nouvelle valeur des sources de donn\xe9es de l'objet de formulaire"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET VALUE"})," fixe la ",(0,t.jsx)(n.em,{children:"valeur"})," des sources de donn\xe9es courantes pour les objets formulaires d\xe9sign\xe9s par le param\xe8tre ",(0,t.jsx)(n.em,{children:"nomObjet"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Dans le param\xe8tre nomObjet, passez le nom d'un objet formulaire (une chaine). Vous pouvez d\xe9finir la valeur de plusieurs objets formulaires \xe0 l'aide du caract\xe8re g\xe9n\xe9rique (\u201c@\u201d)."}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"valeur"})," vous permet de passer une nouvelle valeur (de tout type) pour les sources de donn\xe9es de l'objet formulaire."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"})," : Si les sources de donn\xe9es sont une expression non assignable, ",(0,t.jsx)(n.strong,{children:"OBJECT SET VALUE"})," ne fait rien. Pour plus d'informations, consultez ",(0,t.jsx)(n.em,{children:"expressions assignables vs non-assignables"})," ."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez lire la valeur des sources de donn\xe9es d'un objet formulaire, lire son nom et d\xe9finir une nouvelle valeur :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $value : Variant\n\xa0\n\xa0$value:=OBJECT Get value(OBJECT Get name(Object current))\xa0//v\xe9rifier la valeur d\xe9finie\xa0\n\xa0\n\xa0OBJECT SET VALUE(OBJECT Get name(Object current);$value+10)\xa0//trouver le nom de l'objet formulaire et d\xe9finir la valeur \xe0 50\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/object-get-value",children:"OBJECT Get value"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var t=s(296540);const r={},l=t.createContext(r);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);