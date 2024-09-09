/*! For license information please see 8b012ed1.cc3c5c09.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89634],{516976:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=s(474848),t=s(28453);const i={id:"vp-set-frozen-panes",title:"VP SET FROZEN PANES"},l=void 0,o={id:"ViewPro/commands/vp-set-frozen-panes",title:"VP SET FROZEN PANES",description:"VP SET FROZEN PANES ( vpAreaName Object { ; sheet : Integer } )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-set-frozen-panes.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-frozen-panes",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-frozen-panes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-frozen-panes.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-frozen-panes",title:"VP SET FROZEN PANES"},sidebar:"docs",previous:{title:"VP SET FORMULAS",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-formulas"},next:{title:"VP SET NUM VALUE",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-set-num-value"}},d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET FROZEN PANES"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"paneObj"})," : Object { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paneObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet contenant des informations sur les colonnes et lignes fig\xe9es"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET FROZEN PANES"})," command sets the frozen status of the columns and rows in the ",(0,r.jsx)(n.em,{children:"paneObj"})," so they are always displayed in the ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". . Un trait continu s'affiche pour indiquer que des lignes et colonnes sont fig\xe9es. L'emplacement du trait d\xe9pend de l'emplacement de la ligne ou colonne fig\xe9e dans la feuille :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Columns on the left or right"}),": For columns on the left of the sheet, the line is displayed on the right side of the last frozen column. Pour les colonnes situ\xe9es \xe0 droite de la feuille, le trait s'affiche sur le c\xf4t\xe9 gauche de la prmei\xe8re colonne fig\xe9e."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Rows on the top or bottom"}),": For rows at the top of the sheet, the line is displayed below the last frozen row. Pour les lignes situ\xe9es en bas de la feuille, le trait s'affiche au-dessus de la premi\xe8re ligne fig\xe9e."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["You can pass an object defining the columns and rows to freeze in the ",(0,r.jsx)(n.em,{children:"paneObj"})," parameter. Si vous fixez la valeur d'une propri\xe9t\xe9 de colonne ou de ligne \xe0 z\xe9ro, cela r\xe9initialise (ne fige plus) la propri\xe9t\xe9. Si une propri\xe9t\xe9 est d\xe9finie sur une valeur inf\xe9rieure \xe0 z\xe9ro, la commande ne fait rien. Vous pouvez passer :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"columnCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"Le nombre de colonnes fig\xe9es sur la gauche de la feuille"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trailingColumnCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"Le nombre de colonnes fig\xe9es sur la droite de la feuille"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rowCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"Le nombre de lignes fig\xe9es en haut de la feuille"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trailingRowCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"Le nombre de lignes fig\xe9es en bas de la feuille"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Dans le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"sheet"}),", vous pouvez d\xe9signer une feuille sp\xe9cifique dans laquelle sera d\xe9finie la plage (la num\xe9rotation commence \xe0 z\xe9ro). Si le param\xe8tre est omis, la feuille courante est utilis\xe9e par d\xe9faut. Vous pouvez s\xe9lectionner explicitement la feuille courante \xe0 l'aide de la constante suivante :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez figer les trois premi\xe8res colonnes de gauche, deux colonnes de droite et la premi\xe8re ligne :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_OBJECT($panes)\n \n$panes:=New object\n$panes.columnCount:=3\n$panes.trailingColumnCount:=2\n$panes.rowCount:=1\n \nVP SET FROZEN PANES("ViewProArea";$panes)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(266066).A+"",width:"897",height:"234"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-get-frozen-panes",children:"VP Get frozen panes"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var r=s(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,i={},a=null,c=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:a,ref:c,props:i,_owner:o.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},266066:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/cmd_vpSetFrozenPanes-96df239cfd6abd118d629eff64976791.PNG"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(296540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);