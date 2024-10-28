"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5519],{756431:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var t=n(474848),o=n(28453);const l={id:"ob-class",title:"OB Class",slug:"/commands/ob-class",displayed_sidebar:"docs"},c=void 0,r={id:"commands-legacy/ob-class",title:"OB Class",description:"OB Class ( objet ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-class.md",sourceDirName:"commands-legacy",slug:"/commands/ob-class",permalink:"/docs/fr/commands/ob-class",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-class.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"ob-class",title:"OB Class",slug:"/commands/ob-class",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"New shared object",permalink:"/docs/fr/commands/new-shared-object"},next:{title:"OB Copy",permalink:"/docs/fr/commands/ob-copy"}},d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function i(e){const s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"OB Class"})," ( ",(0,t.jsx)(s.em,{children:"objet"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"objet"}),(0,t.jsx)(s.td,{children:"Object"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Objet dont la classe doit \xeatre retourn\xe9e"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"R\xe9sultat"}),(0,t.jsx)(s.td,{children:"Null, Object"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Classe de l'objet"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"OB Class"})," retourne la classe de l'",(0,t.jsx)(s.em,{children:"objet"})," pass\xe9 en param\xe8tre. Dans 4D, tous les objets sont h\xe9rit\xe9s de l'objet classe. Si ",(0,t.jsx)(s.em,{children:"objet"})," est un objet inexistant, ",(0,t.jsx)(s.strong,{children:"OB Class"})," retourne null."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Vous avez cr\xe9\xe9 la classe Polygone :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0//Classe : Polygone\n\xa0Class constructor\n\xa0var $1;$2 : Integer\n\xa0This.area:=$1*$2\n"})}),"\n",(0,t.jsx)(s.p,{children:"Puis, dans une m\xe9thode, vous pouvez saisir :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0var $poly;$class : Object\n\xa0$poly:=cs.Polygone.new(4;3)\n\xa0$class:=OB Class($poly)\xa0//$class contient Classe : Polygone\n"})}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/fr/commands/ob-instance-of",children:"OB Instance of"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>r});var t=n(296540);const o={},l=t.createContext(o);function c(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);