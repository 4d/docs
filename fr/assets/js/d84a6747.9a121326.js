"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23296],{74886:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=t(474848),r=t(28453);const i={id:"vp-get-frozen-panes",title:"VP Get frozen panes"},o=void 0,d={id:"ViewPro/commands/vp-get-frozen-panes",title:"VP Get frozen panes",description:"VP Get frozen panes ( vpAreaName Integer } ) : Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-get-frozen-panes.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-frozen-panes",permalink:"/docs/fr/ViewPro/commands/vp-get-frozen-panes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-frozen-panes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"vp-get-frozen-panes",title:"VP Get frozen panes"},sidebar:"docs",previous:{title:"VP Get formulas",permalink:"/docs/fr/ViewPro/commands/vp-get-formulas"},next:{title:"VP Get names",permalink:"/docs/fr/ViewPro/commands/vp-get-names"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Objet retourn\xe9",id:"objet-retourn\xe9",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get frozen panes"})," ( vpAreaName : Text { ; sheet : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Objet contenant des informations sur les colonnes et lignes fig\xe9es"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get frozen panes"})," command returns an object with information about the frozen columns and rows in ",(0,s.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"sheet"}),", vous pouvez d\xe9signer une feuille sp\xe9cifique dans laquelle sera d\xe9finie la plage (la num\xe9rotation commence \xe0 z\xe9ro). Si le param\xe8tre est omis ou si vous passez ",(0,s.jsx)(n.code,{children:"vk current sheet"}),", la feuille courante est utilis\xe9e."]}),"\n",(0,s.jsx)(n.h5,{id:"objet-retourn\xe9",children:"Objet retourn\xe9"}),"\n",(0,s.jsx)(n.p,{children:"La commande retourne un objet d\xe9crivant les lignes et colonnes fig\xe9es. Cet objet peut avoir les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"columnCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"Le nombre de colonnes fig\xe9es sur la gauche de la feuille"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"trailingColumnCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"Le nombre de colonnes fig\xe9es sur la droite de la feuille"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rowCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"Le nombre de lignes fig\xe9es en haut de la feuille"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"trailingRowCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"Le nombre de lignes fig\xe9es en bas de la feuille"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez r\xe9cup\xe9rer des informations sur le nombre de colonnes et de lignes fig\xe9es :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $panesObj : Object\n\n \n$panesObj:=VP Get frozen panes("ViewProArea")\n'})}),"\n",(0,s.jsx)(n.p,{children:"L'objet retourn\xe9 contient, par exemple :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(912488).A+"",width:"1123",height:"210"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-frozen-panes",children:"VP SET FROZEN PANES"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},912488:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/cmd_vpGetFrozenpanes-398acd4f3af923b58c396d0fa808b53c.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(296540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);