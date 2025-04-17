"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13957"],{323271:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/set-file-to-pasteboard","title":"SET FILE TO PASTEBOARD","description":"SET FILE TO PASTEBOARD ( fichier {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/set-file-to-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/set-file-to-pasteboard","permalink":"/docs/fr/commands/set-file-to-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-file-to-pasteboard.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-file-to-pasteboard","title":"SET FILE TO PASTEBOARD","slug":"/commands/set-file-to-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Pasteboard data size","permalink":"/docs/fr/commands/pasteboard-data-size"},"next":{"title":"SET PICTURE TO PASTEBOARD","permalink":"/docs/fr/commands/set-picture-to-pasteboard"}}'),r=s("785893"),i=s("250065");let d={id:"set-file-to-pasteboard",title:"SET FILE TO PASTEBOARD",slug:"/commands/set-file-to-pasteboard",displayed_sidebar:"docs"},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET FILE TO PASTEBOARD"})," ( ",(0,r.jsx)(n.em,{children:"fichier"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fichier"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de fichier ou Chemin d'acc\xe8s complet de fichier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si pass\xe9 = ajouter, Si omis = remplacer"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SET FILE TO PASTEBOARD"})," ajoute dans le conteneur de donn\xe9es le chemin d\u2019acc\xe8s complet du fichier pass\xe9 dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"fichier"}),". Cette commande permet de mettre en place des interfaces autorisant le glisser-d\xe9poser d\u2019objets 4D vers des fichiers sur le bureau par exemple."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,r.jsx)(n.em,{children:"fichier"})," soit un chemin d'acc\xe8s complet, soit un nom de fichier simple (sans chemin d'acc\xe8s). Dans ce dernier cas, le fichier doit \xeatre situ\xe9 \xe0 c\xf4t\xe9 du fichier de structure de la base."]}),"\n",(0,r.jsxs)(n.p,{children:["La commande admet l\u2019\xe9toile ",(0,r.jsx)(n.em,{children:"*"})," en param\xe8tre optionnel. Par d\xe9faut, lorsque ce param\xe8tre est omis, la commande remplace le contenu du conteneur de donn\xe9es par le dernier chemin d\u2019acc\xe8s d\xe9fini par ",(0,r.jsx)(n.em,{children:"fichier"}),". Si vous passez ce param\xe8tre, la commande ajoute le ",(0,r.jsx)(n.em,{children:"fichier"}),' au conteneur de donn\xe9es. Il peut ainsi contenir une "pile" de chemins d\u2019acc\xe8s de fichiers. Dans les deux cas, si des donn\xe9es autres que des chemins d\u2019acc\xe8s \xe9taient pr\xe9sentes dans le conteneur, elles sont effac\xe9es.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Le conteneur de donn\xe9es est en lecture seule pendant l\u2019\xe9v\xe9nement formulaire On Drag Over. Il n\u2019est pas possible d\u2019utiliser cette commande dans ce contexte."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-file-from-pasteboard",children:"Get file from pasteboard"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"975"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);