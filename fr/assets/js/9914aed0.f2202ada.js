"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63712],{49382:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(474848),r=s(28453);const i={id:"object-get-resizing-options",title:"OBJECT GET RESIZING OPTIONS",slug:"/commands/object-get-resizing-options",displayed_sidebar:"docs"},d=void 0,o={id:"commands-legacy/object-get-resizing-options",title:"OBJECT GET RESIZING OPTIONS",description:"OBJECT GET RESIZING OPTIONS ( { ;} objet ; horizontal ; vertical* )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-resizing-options.md",sourceDirName:"commands-legacy",slug:"/commands/object-get-resizing-options",permalink:"/docs/fr/commands/object-get-resizing-options",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-resizing-options.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-get-resizing-options",title:"OBJECT GET RESIZING OPTIONS",slug:"/commands/object-get-resizing-options",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT GET PRINT VARIABLE FRAME",permalink:"/docs/fr/commands/object-get-print-variable-frame"},next:{title:"OBJECT GET RGB COLORS",permalink:"/docs/fr/commands/object-get-rgb-colors"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT GET RESIZING OPTIONS"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"horizontal"})," ; ",(0,t.jsx)(n.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,t.jsx)(n.br,{}),"Si omis, objet est une variable ou un champ"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,t.jsx)(n.br,{}),"Variable (si * est omis)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"horizontal"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Option de redimensionnement horizontal"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vertical"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Option de redimensionnement vertical"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OBJECT GET RESIZING OPTIONS"})," retourne les options de redimensionnement courantes de l\u2019objet ou des objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,t.jsx)(n.em,{children:"objet"})," et ",(0,t.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,t.jsxs)(n.p,{children:["La commande retourne les options de redimensionnement courantes, qu\u2019elles aient \xe9t\xe9 d\xe9finies en mode D\xe9veloppement ou pour le process \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/object-set-resizing-options",children:"OBJECT SET RESIZING OPTIONS"}),". Ces options d\xe9finissent l\u2019affichage de l\u2019objet en cas de redimensionnement de la fen\xeatre du formulaire."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"horizontal"})," retourne une valeur indiquant l\u2019option de redimensionnement horizontal d\xe9finie pour l\u2019objet. Vous pouvez comparer la valeur re\xe7ue aux constantes suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"Objets de formulaire (Propri\xe9t\xe9s)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize horizontal grow"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Si la fen\xeatre s\u2019agrandit de 50% en largeur, l\u2019objet s\u2019\xe9largit de 50% vers la droite"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize horizontal move"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Si la fen\xeatre s\u2019agrandit de 100 pixels en largeur, l\u2019objet se d\xe9place de 100 pixels vers la droite"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize horizontal none"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Si la fen\xeatre s\u2019agrandit en largeur, ni la largeur ni la position de l\u2019objet ne varient"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"vertical"})," retourne une valeur indiquant l\u2019option de redimensionnement vertical d\xe9finie pour l\u2019objet. Vous pouvez comparer la valeur re\xe7ue aux constantes suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"Objets de formulaire (Propri\xe9t\xe9s)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize vertical grow"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Si la fen\xeatre s\u2019agrandit de 50% en hauteur, l\u2019objet s\u2019allonge de 50% vers le bas"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize vertical move"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Si la fen\xeatre s\u2019agrandit de 100 pixels en hauteur, l\u2019objet se d\xe9place de 100 pixels vers le bas"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize vertical none"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Si la fen\xeatre s\u2019agrandit en hauteur, ni la hauteur ni la position de l\u2019objet ne varient"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/object-set-resizing-options",children:"OBJECT SET RESIZING OPTIONS"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var t=s(296540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);