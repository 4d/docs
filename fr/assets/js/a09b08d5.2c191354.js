/*! For license information please see a09b08d5.2c191354.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94068],{467387:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=r(474848),s=r(28453);const o={id:"vp-reset-selection",title:"VP RESET SELECTION"},l=void 0,i={id:"ViewPro/commands/vp-reset-selection",title:"VP RESET SELECTION",description:"VP RESET SELECTION ( vpAreaName Integer } )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-reset-selection.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-reset-selection",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-reset-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-reset-selection.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-reset-selection",title:"VP RESET SELECTION"},sidebar:"docs",previous:{title:"VP REMOVE TABLE ROWS",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-remove-table-rows"},next:{title:"VP RESIZE TABLE",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-resize-table"}},c={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP RESET SELECTION"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"VP RESET SELECTION"})," d\xe9s\xe9lectionne toutes les cellules, ce qui entra\xeene l'absence de s\xe9lection courante ou de cellule active visible."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Une cellule active par d\xe9faut (cellule A1) reste d\xe9finie pour les commandes 4D View Pro."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"sheet"}),", vous pouvez d\xe9signer une feuille sp\xe9cifique dans laquelle sera d\xe9finie la plage (la num\xe9rotation commence \xe0 z\xe9ro). Si le param\xe8tre est omis, la feuille courante est utilis\xe9e par d\xe9faut. Vous pouvez s\xe9lectionner explicitement la feuille courante \xe0 l'aide de la constante suivante :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez d\xe9selectionner toutes les cellules (la cellule active et toute autre cellule s\xe9lection\xe9e) :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'VP RESET SELECTION("myVPArea")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,o={},d=null,a=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,t)&&!c.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:a,props:o,_owner:i.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(296540);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);