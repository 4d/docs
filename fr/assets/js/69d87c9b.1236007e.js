"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60759],{121722:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=r(474848),t=r(28453);const l={id:"vp-column",title:"VP Column"},o=void 0,i={id:"ViewPro/commands/vp-column",title:"VP Column",description:"VP Column ( vpAreaName Integer ; columnCount Integer } ) : Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-column.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-column",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-column",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-column.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-column",title:"VP Column"},sidebar:"docs",previous:{title:"VP Cells",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-cells"},next:{title:"VP COLUMN AUTOFIT",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-column-autofit"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Column"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"column"}),": Integer ; ",(0,s.jsx)(n.em,{children:"columnCount"})," : Integer { ; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"column"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Indice de la colonne"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"columnCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nombre de colonnes"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Objet plage de toutes les cellules"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.code,{children:"VP Column"})," retourne un nouvel objet de plage r\xe9f\xe9rencant une ou des colonnes sp\xe9cifiques."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"column"})," d\xe9finit la premi\xe8re colonne de la plage de colonnes. Passez l'indice de la colonne (la num\xe9rotation commence \xe0 z\xe9ro) dans ce param\xe8tre. Si la plage contient plusieurs colonnes, vous devez \xe9galement utiliser le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"columnCount"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"columnCount"})," permet de d\xe9finir le nombre total de colonnes de la plage. ",(0,s.jsx)(n.em,{children:"columnCount"})," doit \xeatre sup\xe9rieur \xe0 0. Si le param\xe8tre est omis, la valeur 1 sera d\xe9finie par d\xe9faut et une plage de type colonne sera cr\xe9\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"sheet"}),", vous pouvez d\xe9signer une feuille sp\xe9cifique dans laquelle sera d\xe9finie la plage (la num\xe9rotation commence \xe0 z\xe9ro). Si le param\xe8tre est omis ou si vous passez ",(0,s.jsx)(n.code,{children:"vk current sheet"}),", la feuille courante est utilis\xe9e par d\xe9faut."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez d\xe9finir une plage pour la colonne ci-dessous (dans la feuille courante) :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(286302).A+"",width:"379",height:"195"})}),"\n",(0,s.jsx)(n.p,{children:"Le code est le suivant :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $column:=VP Column("ViewProArea";3) // colonne D\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-all",children:"VP All"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-combine-ranges",children:"VP Combine ranges"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-name",children:"VP Name"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-row",children:"VP Row"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},286302:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/cmd_vpColumn-ae7b6c9ee31383d694ba627d58f6842f.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var s=r(296540);const t={},l=s.createContext(t);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);