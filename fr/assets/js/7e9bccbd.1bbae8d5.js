"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72227"],{553587:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/test-path-name","title":"Test path name","description":"Test path name ( cheminAcc\xe8s ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/test-path-name.md","sourceDirName":"commands-legacy","slug":"/commands/test-path-name","permalink":"/docs/fr/20-R7/commands/test-path-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftest-path-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"test-path-name","title":"Test path name","slug":"/commands/test-path-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SHOW ON DISK","permalink":"/docs/fr/20-R7/commands/show-on-disk"},"next":{"title":"TEXT TO DOCUMENT","permalink":"/docs/fr/20-R7/commands/text-to-document"}}'),r=s("785893"),d=s("250065");let c={id:"test-path-name",title:"Test path name",slug:"/commands/test-path-name",displayed_sidebar:"docs"},i=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Test path name"})," ( ",(0,r.jsx)(n.em,{children:"cheminAcc\xe8s"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cheminAcc\xe8s"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Chemin d'acc\xe8s \xe0 un dossier ou un document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"1= cheminAcc\xe8s est un document existant 0 = cheminAcc\xe8s est un dossier existant <0 = chemin d'acc\xe8s invalide, code d'erreur du gestionnaire de fichiers du syst\xe8me"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.strong,{children:"Test path name"})," v\xe9rifie si le document ou le dossier dont vous avez pass\xe9 le chemin d'acc\xe8s et le nom dans ",(0,r.jsx)(n.em,{children:"cheminAcc\xe8s"})," est pr\xe9sent sur le disque. Vous pouvez passer un chemin d'acc\xe8s relatif ou absolu, exprim\xe9 dans la syntaxe du syst\xe8me courant."]}),"\n",(0,r.jsxs)(n.p,{children:["Si un document est trouv\xe9, ",(0,r.jsx)(n.strong,{children:"Test path name"})," retourne 1. Si un dossier est trouv\xe9, ",(0,r.jsx)(n.strong,{children:"Test path name"})," retourne 0."]}),"\n",(0,r.jsx)(n.p,{children:"4D propose les constantes pr\xe9d\xe9finies suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is a document"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is a folder"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Si aucun document ou dossier n'est trouv\xe9, ",(0,r.jsx)(n.strong,{children:"Test path name"}),' retourne une valeur n\xe9gative (par exemple -43 pour "Fichier non trouv\xe9").']}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant teste la pr\xe9sence du document \u201CJournal\u201D dans le dossier de la base et le cr\xe9e s'il n'existe pas :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0If(Test path name("Journal")\xa0#\xa0Is a document)\n\xa0\xa0\xa0\xa0$vhDocRef:=Create document("Journal")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/convert-path-system-to-posix",children:"Convert path system to POSIX"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/create-document",children:"Create document"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/create-folder",children:"CREATE FOLDER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/object-to-path",children:"Object to path"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/path-to-object",children:"Path to object"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"476"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var t=s(667294);let r={},d=t.createContext(r);function c(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);