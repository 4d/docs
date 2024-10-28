"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12174],{207205:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=r(474848),o=r(28453);const t={id:"vp-row",title:"VP Row"},i=void 0,d={id:"ViewPro/commands/vp-row",title:"VP Row",description:"VP Row ( vpAreaName Integer { ; rowCount Integer } } ) : Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-row.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-row",permalink:"/docs/fr/ViewPro/commands/vp-row",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-row.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"vp-row",title:"VP Row"},sidebar:"docs",previous:{title:"VP RESUME COMPUTING",permalink:"/docs/fr/ViewPro/commands/vp-resume-computing"},next:{title:"VP ROW AUTOFIT",permalink:"/docs/fr/ViewPro/commands/vp-row-autofit"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Row"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text; ",(0,s.jsx)(n.em,{children:"row"})," : Integer { ; ",(0,s.jsx)(n.em,{children:"rowCount"})," : Integer { ; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"row"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Indice de la ligne"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rowCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nombre de lignes"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"|sheet  |Integer|->|Sheet index (current sheet if omitted)|\n|Result |Object|<-|Range object of row(s)|"}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Row"})," command returns a new range object referencing a specific row or rows."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"row"})," parameter defines the first row of the row range. Passez l'indice de la ligne (la num\xe9rotation commence \xe0 z\xe9ro) dans ce param\xe8tre. If the range contains multiple rows, you should also use the optional ",(0,s.jsx)(n.em,{children:"rowCount"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"rowCount"})," parameter allows you to define the total number of rows of the range. ",(0,s.jsx)(n.em,{children:"rowCount"})," doit \xeatre sup\xe9rieur \xe0 0. Passez l'indice de la ligne (la num\xe9rotation commence \xe0 z\xe9ro) dans ce param\xe8tre."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"sheet"}),", vous pouvez d\xe9signer une feuille sp\xe9cifique dans laquelle sera d\xe9finie la plage (la num\xe9rotation commence \xe0 z\xe9ro). Si le param\xe8tre est omis, la feuille courante est utilis\xe9e par d\xe9faut. Vous pouvez s\xe9lectionner explicitement la feuille courante \xe0 l'aide de la constante suivante :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"|"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(349559).A+"",width:"517",height:"317"})}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez \xe9crire :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$row:=VP Row("ViewProArea";9) // row 10\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-all",children:"VP All"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-column",children:"VP Column"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-combine-ranges",children:"VP Combine ranges"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},349559:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/cmd_vpRow-17d159502d78c7ebad52f5f796faa8db.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var s=r(296540);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);