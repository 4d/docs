"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73814"],{851543:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>a,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/printers-list","title":"PRINTERS LIST","description":"PRINTERS LIST ( tabNoms {; tabNomsAlt {; tabMod\xe8les}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/printers-list.md","sourceDirName":"commands-legacy","slug":"/commands/printers-list","permalink":"/docs/fr/commands/printers-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprinters-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"printers-list","title":"PRINTERS LIST","slug":"/commands/printers-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Print settings to BLOB","permalink":"/docs/fr/commands/print-settings-to-blob"},"next":{"title":"Printing page","permalink":"/docs/fr/commands/printing-page"}}'),r=n("785893"),i=n("250065");let l={id:"printers-list",title:"PRINTERS LIST",slug:"/commands/printers-list",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"PRINTERS LIST"})," ( ",(0,r.jsx)(s.em,{children:"tabNoms"})," {; ",(0,r.jsx)(s.em,{children:"tabNomsAlt"})," {; ",(0,r.jsx)(s.em,{children:"tabMod\xe8les"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabNoms"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Noms des imprimantes"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabNomsAlt"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Windows : Emplacements des imprimantes, macOS : Noms personnalis\xe9s des imprimantes"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabMod\xe8les"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Mod\xe8les des imprimantes"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"PRINTERS LIST"})," remplit le ou les tableau(x) pass\xe9(s) en param\xe8tre(s) avec les noms ainsi que, facultativement, les emplacements ou les noms personnalis\xe9s et les mod\xe8les des imprimantes disponibles pour le poste."]}),"\n",(0,r.jsxs)(s.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(s.em,{children:"tabNoms"})," le nom d\u2019un tableau texte. Apr\xe8s l\u2019ex\xe9cution de la commande, ce tableau contiendra la liste des noms d\u2019imprimantes disponibles. Sous Mac OS, il s'agit des noms \u201Csyst\xe8me\u201D fixes."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Si les imprimantes sont g\xe9r\xe9es via un serveur d\u2019impression (\u201Cspouleur\u201D), le chemin d\u2019acc\xe8s complet (sous Windows) ou le nom du spouleur (sous macOS) est retourn\xe9."]}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez passer un deuxi\xe8me tableau facultatif, ",(0,r.jsx)(s.em,{children:"tabNomsAlt"}),". Le contenu de ce tableau d\xe9pend de la plate-forme :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Sous Windows, vous r\xe9cup\xe9rez pour chaque imprimante son emplacement r\xe9seau (ou son port local)."}),"\n",(0,r.jsx)(s.li,{children:"Sous macOS, vous r\xe9cup\xe9rez pour chaque imprimante son nom personnalis\xe9, modifiable par l'utilisateur. Ce nom peut \xeatre utilis\xe9 par exemple dans des bo\xeetes de dialogue."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Le param\xe8tre facultatif ",(0,r.jsx)(s.em,{children:"tabMod\xe8les"})," permet de r\xe9cup\xe9rer le mod\xe8le de chaque imprimante."]}),"\n",(0,r.jsxs)(s.p,{children:["Utilisez les commandes ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-current-printer",children:"SET CURRENT PRINTER"})," et ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/get-current-printer",children:"Get current printer"})," pour modifier ou conna\xeetre l\u2019imprimante s\xe9lectionn\xe9e dans 4D. Vous devez leur passer les noms retourn\xe9s dans le premier tableau (",(0,r.jsx)(s.em,{children:"tabNoms"}),")."]}),"\n",(0,r.jsxs)(s.p,{children:["Sous Windows, le nom d\u2019une imprimante peut \xeatre modifi\xe9 manuellement au niveau du syst\xe8me d\u2019exploitation. En revanche, son emplacement et son mod\xe8le sont li\xe9s \xe0 ses caract\xe9ristiques physiques. Vous pouvez donc utiliser les valeurs des tableaux optionnels pour v\xe9rifier les caract\xe9ristiques de l\u2019imprimante s\xe9lectionn\xe9e \u2014 typiquement, vous pouvez v\xe9rifier que tous les clients utilisent la m\xeame imprimante.",(0,r.jsx)(s.br,{}),"\nSous macOS, cette v\xe9rification peut s\u2019effectuer sur le nom de l\u2019imprimante (nom du serveur d\u2019impression), qui est le m\xeame pour chaque poste connect\xe9."]}),"\n",(0,r.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(s.p,{children:"La variable syst\xe8me OK prend la valeur 1 si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, sinon elle prend la valeur 0 et les tableaux sont retourn\xe9s vides."}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/commands/get-current-printer",children:"Get current printer"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-current-printer",children:"SET CURRENT PRINTER"})]}),"\n",(0,r.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"789"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Modifie les variables"}),(0,r.jsx)(s.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var t=n(667294);let r={},i=t.createContext(r);function l(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);