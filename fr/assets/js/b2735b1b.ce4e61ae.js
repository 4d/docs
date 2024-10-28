"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54213],{13455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=n(474848),r=n(28453);const l={id:"vp-get-stylesheets",title:"VP Get stylesheet"},d=void 0,i={id:"ViewPro/commands/vp-get-stylesheets",title:"VP Get stylesheet",description:"VP Get stylesheet ( vpAreaName Text { ; sheet Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-stylesheet.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-stylesheets",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-get-stylesheets",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-stylesheet.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-stylesheets",title:"VP Get stylesheet"},sidebar:"docs",previous:{title:"VP Get stylesheets",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-get-stylesheet"},next:{title:"VP Get column attributes",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-get-table-column-attributes"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP Get stylesheet"})," ( ",(0,s.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(t.em,{children:"styleName"})," : Text { ; ",(0,s.jsx)(t.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tres"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vpAreaName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"styleName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Nom du style"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sheet"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"R\xe9sultat"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"<-"}),(0,s.jsx)(t.td,{children:"Objet feuille de style"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["La commande ",(0,s.jsx)(t.code,{children:"VP Get stylesheet"})," retourne l'objet de la feuille de style ",(0,s.jsx)(t.em,{children:"styleName"})," contenant les valeurs de propri\xe9t\xe9 qui ont \xe9t\xe9 d\xe9finies."]}),"\n",(0,s.jsxs)(t.p,{children:["Dans ",(0,s.jsx)(t.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,s.jsxs)(t.p,{children:["Dans ",(0,s.jsx)(t.em,{children:"styleName"}),", passez le nom de la feuille de style que vous souhaitez lire."]}),"\n",(0,s.jsxs)(t.p,{children:["Vous pouvez d\xe9finir o\xf9 obtenir la feuille de style dans le param\xe8tre optionnel ",(0,s.jsx)(t.em,{children:"sheet"})," en utilisant l'index de la feuille (la num\xe9rotation commence \xe0 partir de 0) ou avec les constantes suivantes :"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"vk current sheet"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(t.p,{children:"Le code suivant :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")\n'})}),"\n",(0,s.jsxs)(t.p,{children:["... retournera l'objet de style ",(0,s.jsx)(t.em,{children:"GreenDashDotStyle"})," de la feuille courante :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"{\nbackColor:green,\nborderBottom:{color:green,style:10},\nborderLeft:{color:green,style:10},\nborderRight:{color:green,style:10},\nborderTop:{color:green,style:10}\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/fr/20-R6/ViewPro/configuring#style-objects--style-sheets",children:"4D View Pro Style Objects and Style Sheets"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-stylesheet",children:"VP Get stylesheets"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var s=n(296540);const r={},l=s.createContext(r);function d(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);