"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75820"],{655742:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/folder-list","title":"FOLDER LIST","description":"FOLDER LIST ( cheminAcc\xe8s ; dossiers )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/folder-list.md","sourceDirName":"commands-legacy","slug":"/commands/folder-list","permalink":"/docs/fr/20-R7/commands/folder-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffolder-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"folder-list","title":"FOLDER LIST","slug":"/commands/folder-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Document to text","permalink":"/docs/fr/20-R7/commands/document-to-text"},"next":{"title":"GET DOCUMENT ICON","permalink":"/docs/fr/20-R7/commands/get-document-icon"}}'),t=s("785893"),d=s("250065");let i={id:"folder-list",title:"FOLDER LIST",slug:"/commands/folder-list",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FOLDER LIST"})," ( ",(0,t.jsx)(n.em,{children:"cheminAcc\xe8s"})," ; ",(0,t.jsx)(n.em,{children:"dossiers"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cheminAcc\xe8s"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Chemin d'acc\xe8s de volume, r\xe9pertoire ou dossier"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dossiers"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Noms des dossiers situ\xe9s \xe0 cet endroit"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"FOLDER LIST"})," remplit le tableau de type Texte ou Alpha ",(0,t.jsx)(n.em,{children:"dossiers"})," avec les noms des dossiers (r\xe9pertoires sous Windows) situ\xe9s \xe0 l'endroit que vous avez indiqu\xe9 avec le param\xe8tre ",(0,t.jsx)(n.em,{children:"cheminAcc\xe8s"}),".Vous devez passer un chemin d'acc\xe8s absolu dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"cheminAcc\xe8s"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["S'il n'y pas de dossier \xe0 cet endroit, la commande retourne un tableau vide. Si le chemin d'acc\xe8s que vous avez pass\xe9 dans ",(0,t.jsx)(n.em,{children:"cheminAcc\xe8s"})," est invalide, ",(0,t.jsx)(n.strong,{children:"FOLDER LIST"})," g\xe9n\xe8re une erreur de gestionnaire de fichiers que vous pouvez intercepter \xe0 l'aide d'une m\xe9thode install\xe9e par ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/document-list",children:"DOCUMENT LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/volume-list",children:"VOLUME LIST"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"473"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);