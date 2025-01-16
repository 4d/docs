"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40953"],{857559:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/read-picture-file","title":"READ PICTURE FILE","description":"READ PICTURE FILE ( nomFichier ; image {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/read-picture-file.md","sourceDirName":"commands-legacy","slug":"/commands/read-picture-file","permalink":"/docs/fr/20-R7/commands/read-picture-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-picture-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"read-picture-file","title":"READ PICTURE FILE","slug":"/commands/read-picture-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PICTURE TO BLOB","permalink":"/docs/fr/20-R7/commands/picture-to-blob"},"next":{"title":"REMOVE PICTURE FROM LIBRARY","permalink":"/docs/fr/20-R7/commands/remove-picture-from-library"}}'),i=s("785893"),t=s("250065");let d={id:"read-picture-file",title:"READ PICTURE FILE",slug:"/commands/read-picture-file",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"READ PICTURE FILE"})," ( ",(0,i.jsx)(n.em,{children:"nomFichier"})," ; ",(0,i.jsx)(n.em,{children:"image"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nomFichier"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom ou chemin d\u2019acc\xe8s complet du fichier \xe0 lire, ou cha\xeene vide"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"image"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Champ ou variable recevant l\u2019image"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si pass\xe9 = accepter tout type de fichier"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"READ PICTURE FILE"})," vous permet d\u2019ouvrir l\u2019image stock\xe9e dans le fichier disque d\xe9sign\xe9 par ",(0,i.jsx)(n.em,{children:"nomFichier"})," et de la placer dans le champ ou la variable 4D ",(0,i.jsx)(n.em,{children:"image"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,i.jsx)(n.em,{children:"nomFichier"})," le chemin d\u2019acc\xe8s complet du fichier \xe0 lire, ou uniquement le nom du fichier \u2014 auquel cas il doit se trouver \xe0 c\xf4t\xe9 du fichier de structure de la base. Sous Windows, vous devez \xe9galement passer l\u2019extension du fichier.",(0,i.jsx)(n.br,{}),'\nSi vous passez une cha\xeene vide ("") dans ',(0,i.jsx)(n.em,{children:"nomFichier"}),", la bo\xeete de dialogue standard d\u2019ouverture de documents appara\xeet, permettant \xe0 l\u2019utilisateur de s\xe9lectionner le fichier \xe0 lire, ainsi que les formats disponibles."]}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez obtenir la liste des formats disponibles \xe0 l\u2019aide de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Passez dans ",(0,i.jsx)(n.em,{children:"image"})," la variable ou le champ image devant recevoir l\u2019image lue."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Le format interne de l\u2019image est conserv\xe9 au sein de la variable ou du champ 4D."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre facultatif ",(0,i.jsx)(n.em,{children:"*"}),", la commande acceptera tout type de fichier. Ce principe permet de manipuler des images sans n\xe9cessairement disposer des codecs ad\xe9quats (cf. description de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/blob-to-picture",children:"BLOB TO PICTURE"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,i.jsx)(n.p,{children:"Si l\u2019ex\xe9cution de la commande est correcte, la variable syst\xe8me Document contient le chemin d\u2019acc\xe8s complet du fichier ouvert et la variable syst\xe8me OK prend la valeur 1. En cas d\u2019\xe9chec, OK prend la valeur 0."}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/blob-to-picture",children:"BLOB TO PICTURE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"Introduction aux images"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/write-picture-file",children:"WRITE PICTURE FILE"})]}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"678"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifie les variables"}),(0,i.jsx)(n.td,{children:"OK, Document"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let i={},t=r.createContext(i);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);