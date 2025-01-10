"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63895"],{423865:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/refresh-license","title":"Refresh license","description":"Refresh license : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/refresh-license.md","sourceDirName":"commands-legacy","slug":"/commands/refresh-license","permalink":"/docs/fr/commands/refresh-license","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frefresh-license.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"refresh-license","title":"Refresh license","slug":"/commands/refresh-license","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"License usage","permalink":"/docs/fr/commands/license-usage"},"next":{"title":"List Box","permalink":"/docs/fr/category/list-box"}}'),r=s("785893"),i=s("250065");let c={id:"refresh-license",title:"Refresh license",slug:"/commands/refresh-license",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function h(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Refresh license"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Objet statut"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Refresh license"})," met \xe0 jour la licence 4D Server courante. Elle vous connecte \xe0 la base cliente de 4D et active automatiquement les nouvelles licences ou les mises \xe0 jour (",(0,r.jsx)(n.em,{children:"ex:"})," suite \xe0 l'achat de nouveaux clients)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Objet retourn\xe9"})}),"\n",(0,r.jsxs)(n.p,{children:["L'objet retourn\xe9 par ",(0,r.jsx)(n.strong,{children:"Refresh license"})," contient les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"bool\xe9en"}),(0,r.jsx)(n.td,{children:"Vrai si l'actualisation est r\xe9ussie, sinon Faux."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"status"}),(0,r.jsx)(n.td,{children:"num\xe9rique"}),(0,r.jsx)(n.td,{children:"Code du statut"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statusText"}),(0,r.jsx)(n.td,{children:"texte"}),(0,r.jsx)(n.td,{children:"Description du statut"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tips"}),(0,r.jsx)(n.td,{children:"texte"}),(0,r.jsx)(n.td,{children:"Suggestions pour r\xe9soudre l'erreur."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," : Cette commande ne peut \xeatre ex\xe9cut\xe9e que sur 4D Server. Si la m\xe9thode appelant la commande est ex\xe9cut\xe9e localement sur un 4D distant ou monoposte, ",(0,r.jsx)(n.strong,{children:"Refresh license"})," ne fait rien."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez mettre \xe0 jour votre licence et recevoir un message \xe0 la fin de l'op\xe9ration :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode \xe0 ex\xe9cuter sur le serveur\n\xa0var $res : Object\n\xa0$res:=Refresh license\n\xa0If($res.success)\n\xa0\xa0\xa0\xa0ALERT("Mise \xe0 jour r\xe9ussie")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT($res.statusText)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1336"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var t=s(667294);let r={},i=t.createContext(r);function c(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);