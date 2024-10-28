"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40762],{660191:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var t=n(474848),r=n(28453);const c={id:"copy-set",title:"COPY SET",slug:"/commands/copy-set",displayed_sidebar:"docs"},l=void 0,d={id:"commands-legacy/copy-set",title:"COPY SET",description:"COPY SET ( srcEns ; dstEns )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/copy-set.md",sourceDirName:"commands-legacy",slug:"/commands/copy-set",permalink:"/docs/fr/commands/copy-set",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"copy-set",title:"COPY SET",slug:"/commands/copy-set",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"CLEAR SET",permalink:"/docs/fr/commands/clear-set"},next:{title:"CREATE EMPTY SET",permalink:"/docs/fr/commands/create-empty-set"}},i={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const s={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"COPY SET"})," ( ",(0,t.jsx)(s.em,{children:"srcEns"})," ; ",(0,t.jsx)(s.em,{children:"dstEns"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"srcEns"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Nom de l'ensemble source"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"dstEns"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Nom de l'ensemble de destination"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"COPY SET"})," copie le contenu de l'ensemble ",(0,t.jsx)(s.em,{children:"srcEns"})," dans l'ensemble ",(0,t.jsx)(s.em,{children:"dstEns"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Chaque ensemble peut \xeatre de type process, interprocess ou local/client. Les deux ensembles peuvent \xeatre de type diff\xe9rent (comme dans les exemples ci-dessous), pourvu qu'ils soient visibles sur le poste. Pour plus d'informations sur ce point, reportez-vous au paragraphe \"",(0,t.jsx)(s.em,{children:"Visibilit\xe9 des ensembles"}),'".']}),"\n",(0,t.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(s.p,{children:["L'exemple suivant, en client/serveur, copie l'ensemble local \"",(0,t.jsx)(s.em,{children:'$SetA"'}),", conserv\xe9 sur le poste client, vers l'ensemble process ",(0,t.jsx)(s.em,{children:'"SetB"'}),", conserv\xe9 sur le poste serveur :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0COPY SET("$SetA";"SetB")\n'})}),"\n",(0,t.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(s.p,{children:["L'exemple suivant, en client/serveur, copie l'ensemble process \"",(0,t.jsx)(s.em,{children:"SetA"}),"\", conserv\xe9 sur le poste serveur, vers l'ensemble local ",(0,t.jsx)(s.em,{children:'"$SetB"'}),", conserv\xe9 sur le poste client :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0COPY SET("SetA";"$SetB")\n'})}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Pr\xe9sentation des ensembles"})})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var t=n(296540);const r={},c=t.createContext(r);function l(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);