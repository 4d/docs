"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39060"],{666773:function(e,s,r){r.r(s),r.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/use-character-set","title":"USE CHARACTER SET","description":"USE CHARACTER SET ( filtre {; typeFiltre} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/use-character-set.md","sourceDirName":"commands-legacy","slug":"/commands/use-character-set","permalink":"/docs/fr/20-R7/commands/use-character-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuse-character-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"use-character-set","title":"USE CHARACTER SET","slug":"/commands/use-character-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET TIMEOUT","permalink":"/docs/fr/20-R7/commands/set-timeout"},"next":{"title":"Compiler","permalink":"/docs/fr/20-R7/category/compiler"}}'),t=r("785893"),a=r("250065");let d={id:"use-character-set",title:"USE CHARACTER SET",slug:"/commands/use-character-set",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"USE CHARACTER SET"})," ( ",(0,t.jsx)(s.em,{children:"filtre"})," {; ",(0,t.jsx)(s.em,{children:"typeFiltre"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"filtre"}),(0,t.jsx)(s.td,{children:"Text, *"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Nom du jeu de caract\xe8res \xe0 utiliser ou * pour restaurer le jeu par d\xe9faut"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"typeFiltre"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"0 = Filtre d'exportation, 1 = Filtre d'importation"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"USE CHARACTER SET"})," permet de modifier le jeu de caract\xe8res utilis\xe9 par 4D pour toutes les op\xe9rations de transfert entre la base et un document ou un port s\xe9rie pour le process courant. Cela inclut les donn\xe9es transf\xe9r\xe9es par les commandes d'import/export Texte, SYLK et DIF, ainsi que celles envoy\xe9es par les commandes ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/send-packet",children:"SEND PACKET"})," et ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/receive-packet",children:"RECEIVE PACKET"})," (paquets de type texte) et ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/receive-buffer",children:"RECEIVE BUFFER"}),". Les filtres n'ont pas d'effet sur les donn\xe9es transf\xe9r\xe9es par les commandes ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/send-record",children:"SEND RECORD"}),", ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/send-variable",children:"SEND VARIABLE"}),", ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/receive-record",children:"RECEIVE RECORD"}),", ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/send-packet",children:"SEND PACKET"}),", et ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/receive-packet",children:"RECEIVE PACKET"})," (paquets de type BLOB) et ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/receive-variable",children:"RECEIVE VARIABLE"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre ",(0,t.jsx)(s.em,{children:"filtre"})," doit correspondre au nom \u201CIANA\u201D du jeu de caract\xe8res \xe0 utiliser, ou l\u2019un de ses alias. Par exemple, les noms \u201Ciso-8859-1\u201D ou \u201Cutf-8\u201D sont des noms valides, ainsi que les alias \u201Clatin1\u201D ou \u201Cl1\u201D. Pour plus d\u2019informations sur ces noms, reportez-vous \xe0 l\u2019adresse ",(0,t.jsx)(s.a,{href:"http://www.iana.org/assignments/character-sets",children:"http://www.iana.org/assignments/character-sets"}),". Des exemples de noms IANA sont \xe9galement fournis dans la description de la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/convert-from-text",children:"CONVERT FROM TEXT"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Si ",(0,t.jsx)(s.em,{children:"typeFiltre"})," est \xe9gal \xe0 0, le filtre est d\xe9fini pour l'exportation. Si ",(0,t.jsx)(s.em,{children:"typeFiltre"})," est \xe9gal \xe0 1, il est d\xe9fini pour l'importation. Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(s.em,{children:"typeFiltre"}),", le filtre d'exportation est utilis\xe9 par d\xe9faut."]}),"\n",(0,t.jsxs)(s.p,{children:["Lorsque le param\xe8tre ",(0,t.jsx)(s.em,{children:"*"})," est pass\xe9, le jeu de caract\xe8res par d\xe9faut est r\xe9tabli (filtre d'importation ou d'exportation, en fonction de la valeur de ",(0,t.jsx)(s.em,{children:"typeFiltre"}),". Dans 4D, le jeu de caract\xe8res par d\xe9faut est UTF-8."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"L'exemple suivant (mode Unicode) utilise le jeu de caract\xe8res UTF-16 pour exporter un texte, puis le jeu de caract\xe8res par d\xe9faut est r\xe9tabli :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0USE CHARACTER SET("UTF-16LE";0)\xa0// Use le jeu de caract\xe8res UTF-16 \'Little Endian\'\n\xa0EXPORT TEXT([Ma Table];"Mon Texte")\xa0// Exporter les donn\xe9es avec le filtre\n\xa0USE CHARACTER SET(*;0)\xa0// R\xe9tablir le jeu par d\xe9faut\n'})}),"\n",(0,t.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(s.p,{children:"La variable syst\xe8me OK prend la valeur 1 si le filtre est correctement charg\xe9, sinon elle prend la valeur 0."}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/export-dif",children:"EXPORT DIF"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/export-sylk",children:"EXPORT SYLK"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/export-text",children:"EXPORT TEXT"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/import-dif",children:"IMPORT DIF"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/import-sylk",children:"IMPORT SYLK"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/import-text",children:"IMPORT TEXT"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/receive-packet",children:"RECEIVE PACKET"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/send-packet",children:"SEND PACKET"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"205"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return i},a:function(){return d}});var n=r(667294);let t={},a=n.createContext(t);function d(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);