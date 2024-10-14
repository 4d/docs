"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29044],{990374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var s=t(474848),r=t(28453);const c={id:"vp-get-active-cell",title:"VP Get active cell"},i=void 0,l={id:"ViewPro/commands/vp-get-active-cell",title:"VP Get active cell",description:"VP Get active cell (  vpAreaName Integer } ) : Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-active-cell.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-active-cell",permalink:"/docs/fr/ViewPro/commands/vp-get-active-cell",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-active-cell.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-active-cell",title:"VP Get active cell"},sidebar:"docs",previous:{title:"G",permalink:"/docs/fr/commands/G"},next:{title:"VP Get binding path",permalink:"/docs/fr/ViewPro/commands/vp-get-binding-path"}},d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get active cell"})," (  ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Objet plage d'une seule cellule"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get active cell"})," command returns a new range object referencing the cell which has the focus and where new data will be entered (the active cell)."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"sheet"}),", vous pouvez d\xe9signer une feuille sp\xe9cifique dans laquelle sera d\xe9finie la plage (la num\xe9rotation commence \xe0 z\xe9ro). Si le param\xe8tre est omis ou si vous passez ",(0,s.jsx)(n.code,{children:"vk current sheet"}),", la feuille courante est utilis\xe9e."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(438104).A+"",width:"548",height:"359"})}),"\n",(0,s.jsx)(n.p,{children:"Le code suivant r\xe9cup\xe8rera les coordonn\xe9es de la cellule active :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$activeCell:=VP Get active cell("myVPArea")\n \n  //returns a range object containing: \n  //$activeCell.ranges[0].column=3\n  //$activeCell.ranges[0].row=4\n  //$activeCell.ranges[0].sheet=0\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},438104:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/cmd_vpGetActiveCell-8ebb4e93425aab7ecfcd2a337e26e6a9.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(296540);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);