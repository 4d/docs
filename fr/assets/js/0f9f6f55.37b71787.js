"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91881"],{115463:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>m,assets:()=>l,toc:()=>t,frontMatter:()=>o});var i=JSON.parse('{"id":"commands-legacy/copy-document","title":"COPY DOCUMENT","description":"COPY DOCUMENT ( nomSource ; nomDest {; nouvNom} {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/copy-document.md","sourceDirName":"commands-legacy","slug":"/commands/copy-document","permalink":"/docs/fr/commands/copy-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"copy-document","title":"COPY DOCUMENT","slug":"/commands/copy-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Convert path system to POSIX","permalink":"/docs/fr/commands/convert-path-system-to-posix"},"next":{"title":"CREATE ALIAS","permalink":"/docs/fr/commands/create-alias"}}'),r=s("785893"),d=s("250065");let o={id:"copy-document",title:"COPY DOCUMENT",slug:"/commands/copy-document",displayed_sidebar:"docs"},c=void 0,l={},t=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Exemple 7",id:"exemple-7",level:4},{value:"Exemple 8",id:"exemple-8",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"COPY DOCUMENT"})," ( ",(0,r.jsx)(n.em,{children:"nomSource"})," ; ",(0,r.jsx)(n.em,{children:"nomDest"})," {; ",(0,r.jsx)(n.em,{children:"nouvNom"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomSource"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Chemin d\u2019acc\xe8s du fichier ou du dossier \xe0 copier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomDest"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom ou chemin d\u2019acc\xe8s du fichier ou du dossier copi\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nouvNom"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nouveau nom du fichier ou du dossier copi\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Remplacer le document existant le cas \xe9ch\xe9ant"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"COPY DOCUMENT"})," copie le fichier ou dossier d\xe9sign\xe9 par ",(0,r.jsx)(n.em,{children:"nomSource"})," \xe0 l'emplacement d\xe9sign\xe9 par ",(0,r.jsx)(n.em,{children:"nomDest"})," et le renomme optionnellement."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Copie de fichier"}),(0,r.jsx)(n.br,{}),"\nDans ce cas, le param\xe8tre ",(0,r.jsx)(n.em,{children:"nomSource"})," peut contenir :\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"soit un chemin d'acc\xe8s complet de fichier, exprim\xe9 par rapport \xe0 la racine du volume,"}),"\n",(0,r.jsxs)(n.li,{children:["soit un chemin d'acc\xe8s relatif au dossier de la base.",(0,r.jsx)(n.br,{}),"\nLe param\xe8tre ",(0,r.jsx)(n.em,{children:"nomDest"})," peut contenir plusieurs types d'emplacements :"]}),"\n",(0,r.jsx)(n.li,{children:"un chemin d'acc\xe8s complet de fichier exprim\xe9 par rapport \xe0 la racine du volume : le fichier est recopi\xe9 \xe0 cet emplacement"}),"\n",(0,r.jsx)(n.li,{children:"un nom de fichier ou un chemin d'acc\xe8s de fichier relatif au dossier de la base : le fichier est recopi\xe9 dans le dossier de la base (les sous-dossiers doivent exister)"}),"\n",(0,r.jsxs)(n.li,{children:["un chemin d'acc\xe8s de dossier complet ou relatif au dossier de la base (",(0,r.jsx)(n.em,{children:"nomDest"})," doit se terminer par un s\xe9parateur de dossier de la plate-forme) : le fichier est recopi\xe9 dans le dossier d\xe9sign\xe9. Les dossiers doivent d\xe9j\xe0 exister sur le disque, il ne sont pas pas cr\xe9\xe9s.",(0,r.jsx)(n.br,{}),"\nUne erreur est g\xe9n\xe9r\xe9e si un document nomm\xe9 ",(0,r.jsx)(n.em,{children:"nomDest"})," existe d\xe9j\xe0, \xe0 moins que vous n'ayez sp\xe9cifi\xe9 le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", qui indique \xe0 ",(0,r.jsx)(n.strong,{children:"COPY DOCUMENT"})," de supprimer et de remplacer le document \xe0 l\u2019emplacement de destination dans ce cas."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Copie de dossier"}),(0,r.jsx)(n.br,{}),"\nPour indiquer que vous d\xe9signez un dossier, les cha\xeenes pass\xe9es dans ",(0,r.jsx)(n.em,{children:"nomSource"})," et ",(0,r.jsx)(n.em,{children:"nomDest"}),' doivent se terminer par un s\xe9parateur de dossier de la plate-forme. Par exemple, sous Windows "C:\\\\Element\\\\" d\xe9signe un dossier et "C:\\\\Element" d\xe9signe un fichier.',(0,r.jsx)(n.br,{}),"\nPour recopier un dossier, passez son chemin d\u2019acc\xe8s complet dans ",(0,r.jsx)(n.em,{children:"nomSource"}),". Ce dossier doit exister sur le disque.",(0,r.jsx)(n.br,{}),"\nLorsqu\u2019un dossier est d\xe9fini dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"nomSource"}),", un dossier doit \xe9galement \xeatre d\xe9sign\xe9 dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"nomDest"}),". Vous devez passer un chemin d\u2019acc\xe8s complet de dossier (dont chaque \xe9l\xe9ment doit d\xe9j\xe0 exister sur le disque).",(0,r.jsx)(n.br,{}),"\nSi un dossier du m\xeame nom que celui d\xe9sign\xe9 par le param\xe8tre ",(0,r.jsx)(n.em,{children:"nomSource"})," existe d\xe9j\xe0 \xe0 l\u2019emplacement d\xe9fini par ",(0,r.jsx)(n.em,{children:"nomDest"})," et n\u2019est pas vide, 4D v\xe9rifie son contenu avant de copier les \xe9l\xe9ments. Une erreur est g\xe9n\xe9r\xe9e si un fichier du m\xeame nom existe d\xe9j\xe0, \xe0 moins que vous n\u2019ayez sp\xe9cifi\xe9 le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", qui indique \xe0 la commande de supprimer et de remplacer le document \xe0 l\u2019emplacement de destination dans ce cas."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["A noter que vous pouvez passer un fichier dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"nomSource"})," et un dossier dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"nomDest"}),", afin de copier un fichier dans un dossier."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"nouvNom"}),", s'il est pass\xe9, permet de renommer le document copi\xe9 \xe0 son emplacement de destination (fichier ou dossier). Lorsqu\u2019il est pass\xe9 dans le contexte d\u2019une copie de fichier, ce param\xe8tre remplace le nom \xe9ventuellement pass\xe9 via le param\xe8tre ",(0,r.jsx)(n.em,{children:"nomDest"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant duplique un document dans son propre dossier :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\DOSSIER\\\\LeDoc";"C:\\\\DOSSIER\\\\LeDoc2")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant copie un document dans le dossier de la base (dans la mesure o\xf9 C:\\\\DOSSIER n'est pas le dossier de la base) :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\DOSSIER\\\\LeDoc";"LeDoc")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant copie un document d'un volume vers un autre :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\DOSSIER\\\\LeDoc";"F:\\\\Archives\\\\LeDoc.OLD")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant duplique un document dans son propre dossier, \xe9crasant la pr\xe9c\xe9dente copie si elle existe :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\DOSSIER\\\\LeDoc";"C:\\\\DOSSIER\\\\LeDoc2";*)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,r.jsx)(n.p,{children:"Copie d\u2019un fichier dans un dossier sp\xe9cifique en conservant le m\xeame nom :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\Projets\\\\NomDoc";"C:\\\\Projets\\\\")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,r.jsx)(n.p,{children:"Copie d\u2019un fichier dans un dossier sp\xe9cifique en conservant le m\xeame nom et en rempla\xe7ant le document existant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\Projets\\\\NomDoc";"C:\\\\Projets\\\\"; *)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-7",children:"Exemple 7"}),"\n",(0,r.jsx)(n.p,{children:"Copie d\u2019un dossier dans un autre dossier (les deux dossiers doivent exister sur le disque) :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("C:\\\\Projets\\\\";"C\\\\Archives\\\\2011\\\\")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-8",children:"Exemple 8"}),"\n",(0,r.jsx)(n.p,{children:'Les exemples suivants cr\xe9ent diff\xe9rents fichiers et dossiers dans le dossier de la base (exemples Windows). Dans tous le cas, le dossier "dossier2" doit exister :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0COPY DOCUMENT("dossier1\\\\nom1";"dossier2\\\\")\n\xa0\xa0\xa0\xa0\xa0//cr\xe9e le fichier "dossier2/nom1"\n\xa0\n\xa0COPY DOCUMENT("dossier1\\\\nom1";"dossier2\\\\" ; "nouveaut\xe9")\n\xa0\xa0\xa0\xa0\xa0//cr\xe9e le fichier "dossier2/nouveaut\xe9"\n\xa0\n\xa0COPY DOCUMENT("dossier1\\\\nom1";"dossier2\\\\nom2")\n\xa0\xa0\xa0\xa0\xa0//cr\xe9e le fichier "dossier2/nom2"\n\xa0\n\xa0COPY DOCUMENT("dossier1\\\\nom1";"dossier2\\\\nom2";"nouveaut\xe9")\n\xa0\xa0\xa0\xa0\xa0//cr\xe9e le fichier "dossier2/nouveaut\xe9" (nom2 est ignor\xe9)\n\xa0\n\xa0COPY DOCUMENT("dossier1\\\\" ; "dossier2\\\\")\n\xa0\xa0\xa0\xa0\xa0//cr\xe9e le dossier "dossier2/dossier1/"\n\xa0\n\xa0COPY DOCUMENT("dossier1\\\\" ; "dossier2\\\\" ; "nouveaut\xe9")\n\xa0\xa0\xa0\xa0\xa0//cr\xe9e le dossier "dossier2/nouveaut\xe9/"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/move-document",children:"MOVE DOCUMENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Pr\xe9sentation des documents syst\xe8me"})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var i=s(667294);let r={},d=i.createContext(r);function o(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);