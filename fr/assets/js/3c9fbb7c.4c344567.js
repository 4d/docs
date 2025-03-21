"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46372"],{749779:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/copy-set","title":"COPY SET","description":"COPY SET ( srcEns ; dstEns )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/copy-set.md","sourceDirName":"commands-legacy","slug":"/commands/copy-set","permalink":"/docs/fr/20-R7/commands/copy-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"copy-set","title":"COPY SET","slug":"/commands/copy-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR SET","permalink":"/docs/fr/20-R7/commands/clear-set"},"next":{"title":"CREATE EMPTY SET","permalink":"/docs/fr/20-R7/commands/create-empty-set"}}'),r=n("785893"),l=n("250065");let d={id:"copy-set",title:"COPY SET",slug:"/commands/copy-set",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let s={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"COPY SET"})," ( ",(0,r.jsx)(s.em,{children:"srcEns"})," ; ",(0,r.jsx)(s.em,{children:"dstEns"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srcEns"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Nom de l'ensemble source"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"dstEns"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Nom de l'ensemble de destination"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"COPY SET"})," copie le contenu de l'ensemble ",(0,r.jsx)(s.em,{children:"srcEns"})," dans l'ensemble ",(0,r.jsx)(s.em,{children:"dstEns"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Chaque ensemble peut \xeatre de type process, interprocess ou local/client. Les deux ensembles peuvent \xeatre de type diff\xe9rent (comme dans les exemples ci-dessous), pourvu qu'ils soient visibles sur le poste. Pour plus d'informations sur ce point, reportez-vous au paragraphe \"",(0,r.jsx)(s.em,{children:"Visibilit\xe9 des ensembles"}),'".']}),"\n",(0,r.jsx)(s.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(s.p,{children:["L'exemple suivant, en client/serveur, copie l'ensemble local \"",(0,r.jsx)(s.em,{children:'$SetA"'}),", conserv\xe9 sur le poste client, vers l'ensemble process ",(0,r.jsx)(s.em,{children:'"SetB"'}),", conserv\xe9 sur le poste serveur :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0COPY SET("$SetA";"SetB")\n'})}),"\n",(0,r.jsx)(s.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsxs)(s.p,{children:["L'exemple suivant, en client/serveur, copie l'ensemble process \"",(0,r.jsx)(s.em,{children:"SetA"}),"\", conserv\xe9 sur le poste serveur, vers l'ensemble local ",(0,r.jsx)(s.em,{children:'"$SetB"'}),", conserv\xe9 sur le poste client :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0COPY SET("SetA";"$SetB")\n'})}),"\n",(0,r.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Pr\xe9sentation des ensembles"})}),"\n",(0,r.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"600"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return d}});var t=n(667294);let r={},l=t.createContext(r);function d(e){let s=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);