"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82686"],{999426:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>l,contentTitle:()=>r});var i=JSON.parse('{"id":"commands-legacy/get-document-icon","title":"GET DOCUMENT ICON","description":"GET DOCUMENT ICON ( cheminDoc ; ic\xf4ne {; taille} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-document-icon.md","sourceDirName":"commands-legacy","slug":"/commands/get-document-icon","permalink":"/docs/fr/commands/get-document-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-document-icon.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-document-icon","title":"GET DOCUMENT ICON","slug":"/commands/get-document-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FOLDER LIST","permalink":"/docs/fr/commands/folder-list"},"next":{"title":"Get document position","permalink":"/docs/fr/commands/get-document-position"}}'),s=t("785893"),c=t("250065");let d={id:"get-document-icon",title:"GET DOCUMENT ICON",slug:"/commands/get-document-icon",displayed_sidebar:"docs"},r=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET DOCUMENT ICON"})," ( ",(0,s.jsx)(n.em,{children:"cheminDoc"})," ; ",(0,s.jsx)(n.em,{children:"ic\xf4ne"})," {; ",(0,s.jsx)(n.em,{children:"taille"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cheminDoc"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom ou chemin d\u2019acc\xe8s du fichier duquel obtenir l\u2019ic\xf4ne ou cha\xeene vide pour afficher la bo\xeete de dialogue d\u2019ouverture de fichiers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ic\xf4ne"}),(0,s.jsx)(n.td,{children:"Picture, Picture"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Ic\xf4ne du document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"taille"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Taille de l\u2019ic\xf4ne (en pixels)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"GET DOCUMENT ICON"})," retourne dans le champ ou la variable image 4D ",(0,s.jsx)(n.em,{children:"ic\xf4ne"}),", l\u2019ic\xf4ne du document dont vous avez pass\xe9 le nom ou le chemin d\u2019acc\xe8s complet dans ",(0,s.jsx)(n.em,{children:"cheminDoc"}),".peut d\xe9signer un fichier de tout type (document, ex\xe9cutable, raccourci ou alias...) ou un dossier."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"cheminDoc"})," le chemin d\u2019acc\xe8s absolu du document dont vous souhaitez r\xe9cup\xe9rer l\u2019ic\xf4ne. Vous pouvez passer uniquement le nom du document ou un chemin d\u2019acc\xe8s relatif, dans ce cas il doit se trouver dans le dossier courant de la base (g\xe9n\xe9ralement, le dossier contenant le fichier de structure de la base).",(0,s.jsx)(n.br,{}),"\nSi vous passez une cha\xeene vide dans ",(0,s.jsx)(n.em,{children:"cheminDoc"}),", la bo\xeete de dialogue standard d\u2019ouverture de fichiers appara\xeet, permettant \xe0 l\u2019utilisateur de d\xe9signer un fichier. Une fois la bo\xeete de dialogue valid\xe9e, la variable syst\xe8me Document contient le chemin d\u2019acc\xe8s complet du fichier s\xe9lectionn\xe9."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"ic\xf4ne"})," un champ ou une variable image 4D. Apr\xe8s l\u2019ex\xe9cution de la commande, ce param\xe8tre contient l\u2019ic\xf4ne du fichier (au format PICT)."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"taille"})," vous permet d\u2019indiquer les dimensions de l\u2019image que vous souhaitez obtenir. La valeur du param\xe8tre correspond \xe0 la longueur d\u2019un c\xf4t\xe9 du carr\xe9 dans lequel l\u2019image sera incluse. G\xe9n\xe9ralement, les ic\xf4nes sont d\xe9finies en 32x32 pixels (\u201Cgrande ic\xf4ne\u201D) ou 16x16 pixels (\u201Cpetite ic\xf4ne\u201D). Si vous passez 0 ou omettez le param\xe8tre, la commande retourne l\u2019ic\xf4ne dans sa plus grande taille disponible."]}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"700"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"Document, error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var i=t(667294);let s={},c=i.createContext(s);function d(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);