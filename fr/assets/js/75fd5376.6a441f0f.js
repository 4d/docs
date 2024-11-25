"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64998"],{968866:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/document-to-text","title":"Document to text","description":"Document to text ( nomFichier {; jeuCaract\xe8res {; modeRetour}} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/document-to-text.md","sourceDirName":"commands-legacy","slug":"/commands/document-to-text","permalink":"/docs/fr/commands/document-to-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdocument-to-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"document-to-text","title":"Document to text","slug":"/commands/document-to-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOCUMENT LIST","permalink":"/docs/fr/commands/document-list"},"next":{"title":"FOLDER LIST","permalink":"/docs/fr/commands/folder-list"}}'),r=t("785893"),i=t("250065");let d={id:"document-to-text",title:"Document to text",slug:"/commands/document-to-text",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Document to text"})," ( ",(0,r.jsx)(n.em,{children:"nomFichier"})," {; ",(0,r.jsx)(n.em,{children:"jeuCaract\xe8res"})," {; ",(0,r.jsx)(n.em,{children:"modeRetour"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomFichier"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de document ou Chemin d'acc\xe8s \xe0 un document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jeuCaract\xe8res"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom ou Num\xe9ro de jeu de caract\xe8res"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modeRetour"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Mode de traitement des retours \xe0 la ligne"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Texte issu du document"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Document to text"})," permet de r\xe9cup\xe9rer directement le contenu d\u2019un fichier sur disque dans une variable texte ou un champ texte 4D."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"nomFichier"})," le nom ou le chemin d\u2019acc\xe8s du fichier \xe0 lire. Le fichier doit exister sur le disque, sinon une erreur est g\xe9n\xe9r\xe9e. Vous pouvez passer :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'uniquement le nom du fichier, par exemple "monFichier.txt" : dans ce cas, le fichier doit se trouver \xe0 c\xf4t\xe9 du fichier de structure de l\u2019application.'}),"\n",(0,r.jsx)(n.li,{children:'un chemin d\u2019acc\xe8s relatif au fichier de structure de l\u2019application, par exemple "\\\\docs\\\\monFichier.txt" sous Windows ou "/docs/monFichier.txt" sous macOS.'}),"\n",(0,r.jsx)(n.li,{children:'un chemin d\u2019acc\xe8s absolu, par exemple "c:\\\\app\\\\docs\\\\monFichier.txt" sous Windows ou "MacHD/docs/monFichier.txt" sous macOS.'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,r.jsx)(n.em,{children:"jeuCaract\xe8res"})," le jeu de caract\xe8res \xe0 utiliser pour la lecture. Vous pouvez passer une cha\xeene contenant le nom standard du jeu (par exemple \u201CISO-8859-1\u201D ou \u201CUTF-8\u201D) ou son identifiant MIBEnum (entier long). Pour plus d\u2019informations sur la liste des jeux de caract\xe8res pris en charge par 4D, reportez-vous \xe0 la description de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/convert-from-text",children:"CONVERT FROM TEXT"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si le document contient une BOM (Byte Order Mark), 4D utilise le jeu de caract\xe8res qu\u2019elle d\xe9finit au lieu du jeu de caract\xe8res sp\xe9cifi\xe9 dans ",(0,r.jsx)(n.em,{children:"jeuCaract\xe8res"})," (ce param\xe8tre est alors ignor\xe9)."]}),"\n",(0,r.jsxs)(n.p,{children:["Si le document ne contient pas de BOM et si le param\xe8tre ",(0,r.jsx)(n.em,{children:"jeuCaract\xe8res"})," est omis, 4D utilise par d\xe9faut les jeux de caract\xe8res suivants :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"sous Windows : ANSI"}),"\n",(0,r.jsx)(n.li,{children:"sous OS X : MacRoman"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,r.jsx)(n.em,{children:"modeRetour"}),' un entier long indiquant le traitement \xe0 effectuer sur les caract\xe8res de fin de ligne pr\xe9sents dans le document. Vous pouvez utiliser une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Documents syst\xe8me"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document unchanged"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Aucun traitement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document with CR"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsxs)(n.td,{children:["Les sauts de ligne sont convertis en CR (",(0,r.jsx)(n.em,{children:"carriage return"}),"), le format Classic Mac OS par d\xe9faut."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document with CRLF"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["Les sauts de ligne sont convertis en CRLF (",(0,r.jsx)(n.em,{children:"carriage return + line feed"}),"), au format Windows par d\xe9faut."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document with LF"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsxs)(n.td,{children:["Les sauts de ligne sont convertis en LF (",(0,r.jsx)(n.em,{children:"line feed"}),"), le format Unix et macOS par d\xe9faut."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document with native format"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["(D\xe9faut) Les sauts de ligne sont convertis au format natif de la plate-forme d\u2019ex\xe9cution : LF ",(0,r.jsx)(n.em,{children:"(line feed)"})," sous macOS, CRLF (",(0,r.jsx)(n.em,{children:"carriage return + line feed"}),") sous Windows"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Par d\xe9faut, si le param\xe8tre ",(0,r.jsx)(n.em,{children:"modeRetour"})," est omis, les caract\xe8res de fin de ligne sont trait\xe9s en mode natif (1)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note de compatibilit\xe9"})," : Les options de compatibilit\xe9 sont disponibles pour g\xe9rer EOL et BOM. Voir la ",(0,r.jsx)(n.em,{children:"Page Compatibilit\xe9"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cette commande ne modifie pas la variable OK. En cas d\u2019\xe9chec, une erreur est g\xe9n\xe9r\xe9e, que vous pouvez intercepter \xe0 l\u2019aide d\u2019une m\xe9thode install\xe9es par la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Soit le document texte suivant (les champs sont s\xe9par\xe9s par des tabulations) :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-RAW",children:"id\xa0\xa0\xa0 name\xa0\xa0\xa0 price\xa0\xa0\xa0 vat3\xa0\xa0\xa0 4D Tags\xa0\xa0\xa0 99\xa0\xa0\xa0 19,6\n"})}),"\n",(0,r.jsx)(n.p,{children:"Si vous ex\xe9cutez ce code :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$Text:=Document to text("products.txt")\n'})}),"\n",(0,r.jsx)(n.p,{children:"... vous obtenez :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Text = "id\\tname\\tprice\\tvat\\r\\n3\\t4D Tags\\t99 \\t19,6"\n\xa0\xa0// \\t = tabulation\n\xa0\xa0// \\r = CR\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Documents syst\xe8me"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/text-to-document",children:"TEXT TO DOCUMENT"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);