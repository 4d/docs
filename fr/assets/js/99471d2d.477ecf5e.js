"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10651],{74491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=t(474848),s=t(28453);const i={id:"ob-remove",title:"OB REMOVE",slug:"/commands/ob-remove",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/ob-remove",title:"OB REMOVE",description:"OB REMOVE ( objet ; propri\xe9t\xe9 )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-remove.md",sourceDirName:"commands-legacy",slug:"/commands/ob-remove",permalink:"/docs/fr/commands/ob-remove",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-remove.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"ob-remove",title:"OB REMOVE",slug:"/commands/ob-remove",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OB Keys",permalink:"/docs/fr/commands/ob-keys"},next:{title:"OB SET",permalink:"/docs/fr/commands/ob-set"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OB REMOVE"})," ( ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"propri\xe9t\xe9"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"Object, Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Objet structur\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de la propri\xe9t\xe9 \xe0 supprimer"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"OB REMOVE"})," permet de supprimer la ",(0,r.jsx)(n.em,{children:"propri\xe9t\xe9"})," de l\u2019objet de langage d\xe9sign\xe9 par le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"}),". Cette commande supprime la ",(0,r.jsx)(n.em,{children:"propri\xe9t\xe9"})," ainsi que sa valeur courante."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"objet"})," doit avoir \xe9t\xe9 d\xe9fini via la commande ",(0,r.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," ou d\xe9signer un champ objet 4D."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"propri\xe9t\xe9"})," le libell\xe9 de la propri\xe9t\xe9 \xe0 lire. Attention, le param\xe8tre ",(0,r.jsx)(n.em,{children:"propri\xe9t\xe9"})," tient compte des majuscules/minuscules."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:'Vous souhaitez supprimer la propri\xe9t\xe9 "age" d\u2019un objet :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $Objet : Object\n\xa0OB SET($Objet;"nom";"smith";"age";42;"client";True)\n\xa0\xa0\xa0\xa0\xa0//$Objet={"nom":"smith","age":42,"client":true}\n\xa0OB REMOVE($Objet;"age")\n\xa0\xa0\xa0\xa0\xa0//$Objet={"nom":"smith","client":true}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/ob-set",children:"OB SET"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(296540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);