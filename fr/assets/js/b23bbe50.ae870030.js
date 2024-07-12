/*! For license information please see b23bbe50.ae870030.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31476],{186917:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=r(474848),i=r(28453);const o={id:"vp-print",title:"VP PRINT"},s=void 0,d={id:"ViewPro/commands/vp-print",title:"VP PRINT",description:"VP PRINT ( vpAreaName Integer } )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-print.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-print",permalink:"/docs/fr/ViewPro/commands/vp-print",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-print.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-print",title:"VP PRINT"},sidebar:"docs",previous:{title:"VP PASTE FROM OBJECT",permalink:"/docs/fr/ViewPro/commands/vp-paste-from-object"},next:{title:"R",permalink:"/docs/fr/commands/R"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP PRINT"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text  { ; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP PRINT"})," command opens a print dialog window to print ",(0,t.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pass the 4D View Pro area to be printed in ",(0,t.jsx)(n.em,{children:"vpAreaName"}),". La commande ouvrira la fen\xeatre de dialogue d'impression permettant de d\xe9finir l'imprimante et les propri\xe9t\xe9s de la page."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The properties defined in the print dialog window are for the printer paper, they are not the printing properties for the 4D View Pro area. Printing properties for 4D View Pro areas are defined using the ",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})," command. It is highly recommended that the properties for both the printer and the 4D View Pro area match, otherwise the printed document may not correspond to your expectations."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the optional ",(0,t.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet to print (counting begins at 0). S'il est omis, la feuille courante est utilis\xe9e par d\xe9faut. Vous pouvez s\xe9lectionner explicitement la feuille courante ou le workbook entier \xe0 l'aide des constantes suivantes :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["4D View Pro areas can only be printed with the ",(0,t.jsx)(n.code,{children:"VP PRINT"})," command."]}),"\n",(0,t.jsxs)(n.li,{children:["Commands from the 4D ",(0,t.jsx)(n.strong,{children:"Printing"})," language theme are not supported by ",(0,t.jsx)(n.code,{children:"VP PRINT"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["This command is intended for individual printing by the final end user. For automated print jobs, it is advised to export the 4D View Pro area as a PDF with the ",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"})," method."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Le code suivant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' VP PRINT("myVPArea")\n'})}),"\n",(0,t.jsx)(n.p,{children:"... will open a print dialog window:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(88923).A+"",width:"747",height:"660"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var t=r(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,a=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)s.call(n,t)&&!c.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:a,props:o,_owner:d.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},88923:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cmd_vpPrint-2d4304e96d5c2169b69457627cd893fc.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var t=r(296540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);