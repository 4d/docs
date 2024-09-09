/*! For license information please see c5225d2f.50e821c0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83676],{148774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(474848),o=t(28453);const i={id:"vp-get-print-info",title:"VP Get print info"},s=void 0,a={id:"ViewPro/commands/vp-get-print-info",title:"VP Get print info",description:"VP Get print info ( vpAreaName Integer } ) : Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-print-info.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-print-info",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-print-info",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-print-info.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-print-info",title:"VP Get print info"},sidebar:"docs",previous:{title:"VP Get names",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-names"},next:{title:"VP Get row attributes",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-row-attributes"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get print info"})," ( vpAreaName : Text { ; sheet : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objet contenant les informations d'impression"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"VP Get print info"})," retourne un objet contenant les attributs d'impression de ",(0,r.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez le nom de la zone 4D View Pro dans ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"sheet"}),", vous pouvez d\xe9signer une feuille sp\xe9cifique (la num\xe9rotation commence \xe0 z\xe9ro) dont vous souhaitez retourner les attributs d'impression.  Si le param\xe8tre est omis ou si vous passez ",(0,r.jsx)(n.code,{children:"vk current sheet"}),", la feuille courante est utilis\xe9e."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Le code suivant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$pinfo:=VP Get print info("ViewProArea")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["... retourne les attributs d'impression de la zone 4D View Pro d\xe9finie dans la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'{\nbestFitColumns:false,\nbestFitRows:false,\nblackAndWhite:false,\ncentering:0,\ncolumnEnd:8,\ncolumnStart:0,\nfirstPageNumber:1,\nfitPagesTall:1,\nfitPagesWide:1,\nfooterCenter:"&BS.H.I.E.L.D. &A Sales Per Region",\nfooterCenterImage:,\nfooterLeft:,\nfooterLeftImage:,\nfooterRight:"page &P of &N",\nfooterRightImage:,\nheaderCenter:,\nheaderCenterImage:,\nheaderLeft:"&G",\nheaderLeftImage:logo.png,\nheaderRight:,\nheaderRightImage:,\nmargin:{top:75,bottom:75,left:70,right:70,header:30,footer:30},\norientation:2,\npageOrder:0,\npageRange:,\npaperSize:{width:850,height:1100,kind:1},\nqualityFactor:2,\nrepeatColumnEnd:-1,\nrepeatColumnStart:-1,\nrepeatRowEnd:-1,\nrepeatRowStart:-1,\nrowEnd:24,\nrowStart:0,\nshowBorder:false,\nshowColumnHeader:0,\nshowGridLine:false,\nshowRowHeader:0,\nuseMax:true,\nwatermark:[],\nzoomFactor:1\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/configuring#print-attributes",children:"4D View Pro Print Attributes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,c=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:a.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(296540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);