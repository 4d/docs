"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57090],{981807:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=s(474848),t=s(28453);const o={id:"object-get-scroll-position",title:"OBJECT GET SCROLL POSITION",slug:"/commands/object-get-scroll-position",displayed_sidebar:"docs"},r=void 0,l={id:"commands-legacy/object-get-scroll-position",title:"OBJECT GET SCROLL POSITION",description:"OBJECT GET SCROLL POSITION ( { ;} objet ; positionLigne {; positionH*} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-scroll-position.md",sourceDirName:"commands-legacy",slug:"/commands/object-get-scroll-position",permalink:"/docs/fr/commands/object-get-scroll-position",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-scroll-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-get-scroll-position",title:"OBJECT GET SCROLL POSITION",slug:"/commands/object-get-scroll-position",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT GET RGB COLORS",permalink:"/docs/fr/commands/object-get-rgb-colors"},next:{title:"OBJECT GET SCROLLBAR",permalink:"/docs/fr/commands/object-get-scrollbar"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT GET SCROLL POSITION"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"positionLigne"})," {; ",(0,i.jsx)(n.em,{children:"positionH"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)Si omis, objet est une variable ou un champ"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,i.jsx)(n.br,{}),"Variable ou champ (si * est omis)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"positionLigne"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de la premi\xe8re ligne affich\xe9e ou D\xe9filement vertical en pixels (images)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"positionH"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsxs)(n.td,{children:["Num\xe9ro de la premi\xe8re colonne affich\xe9e (list box) ou",(0,i.jsx)(n.br,{}),"D\xe9filement horizontal en pixels (images)"]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"OBJECT GET SCROLL POSITION"})," retourne dans les param\xe8tres ",(0,i.jsx)(n.em,{children:"positionLigne"})," et ",(0,i.jsx)(n.em,{children:"positionH"})," des informations relatives \xe0 la position des barres de d\xe9filement de l\u2019objet de formulaire d\xe9sign\xe9 par les param\xe8tres ",(0,i.jsx)(n.em,{children:"*"})," et ",(0,i.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le premier param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est le nom d\u2019un objet de type sous-formulaire, liste hi\xe9rarchique, zone de d\xe9filement, list box ou image (dans ce cas, passez une cha\xeene dans objet). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est une variable (",(0,i.jsx)(n.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"RefListe"})," de liste hi\xe9rarchique, image ou list box) ou un champ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Avec les objets de type sous-formulaire, seule la syntaxe avec ",(0,i.jsx)(n.em,{children:"*"})," est prise en charge."]}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"objet"})," d\xe9signe un objet de type liste (sous-formulaire, liste hi\xe9rarchique, zone de d\xe9filement ou list box), ",(0,i.jsx)(n.em,{children:"positionLigne"})," retourne le num\xe9ro de la premi\xe8re ligne affich\xe9e dans l\u2019objet. ",(0,i.jsx)(n.em,{children:"positionH"})," (list box uniquement) retourne le num\xe9ro de la premi\xe8re colonne affich\xe9e dans la partie gauche de la list box. Avec les autres types d\u2019objets, ce param\xe8tre retourne 0."]}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"objet"})," d\xe9signe une image (variable ou champ), ",(0,i.jsx)(n.em,{children:"positionLigne"})," retourne le d\xe9calage vertical et ",(0,i.jsx)(n.em,{children:"positionH"})," le d\xe9calage horizontal de l\u2019image. Ces valeurs sont exprim\xe9es en pixels par rapport \xe0 l\u2019origine de l\u2019image dans le syst\xe8me de coordonn\xe9es locales."]}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(296540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);