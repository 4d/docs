"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3512],{978885:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var t=s(474848),c=s(28453);const o={id:"close-document",title:"CLOSE DOCUMENT",slug:"/commands/close-document",displayed_sidebar:"docs"},d=void 0,r={id:"commands-legacy/close-document",title:"CLOSE DOCUMENT",description:"CLOSE DOCUMENT ( docRef )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/close-document.md",sourceDirName:"commands-legacy",slug:"/commands/close-document",permalink:"/docs/fr/commands/close-document",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclose-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"close-document",title:"CLOSE DOCUMENT",slug:"/commands/close-document",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Append document",permalink:"/docs/fr/commands/append-document"},next:{title:"Convert path POSIX to system",permalink:"/docs/fr/commands/convert-path-posix-to-system"}},i={},m=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CLOSE DOCUMENT"})," ( ",(0,t.jsx)(n.em,{children:"docRef"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"docRef"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence du document"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CLOSE DOCUMENT"})," ferme le document sp\xe9cifi\xe9 par ",(0,t.jsx)(n.em,{children:"docRef"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Fermer un document est le seul moyen de s'assurer que les donn\xe9es \xe9crites dans le fichier sont sauvegard\xe9es. Vous devez fermer tous les documents ouverts par les commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/open-document",children:"Open document"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/create-document",children:"Create document"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/append-document",children:"Append document"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant permet \xe0 l'utilisateur de cr\xe9er un nouveau document, \xe9crit la cha\xeene \u201cBonjour\u201d, puis le referme :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var vDoc : Time\n\xa0vDoc:=Create document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vDoc;"Bonjour")\xa0// Ecrire un mot dans le document\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vDoc)\xa0// Fermer le document\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/append-document",children:"Append document"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/create-document",children:"Create document"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/open-document",children:"Open document"})]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var t=s(296540);const c={},o=t.createContext(c);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);