"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16027"],{202534:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/get-style-sheet-info","title":"GET STYLE SHEET INFO","description":"GET STYLE SHEET INFO ( nomFeuilleStyle ; police ; taille ; styles )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-style-sheet-info.md","sourceDirName":"commands-legacy","slug":"/commands/get-style-sheet-info","permalink":"/docs/fr/20-R8/commands/get-style-sheet-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-style-sheet-info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-style-sheet-info","title":"GET STYLE SHEET INFO","slug":"/commands/get-style-sheet-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Objets (Formulaires)","permalink":"/docs/fr/20-R8/commands/theme/Objects-Forms"},"next":{"title":"LIST OF STYLE SHEETS","permalink":"/docs/fr/20-R8/commands/list-of-style-sheets"}}'),l=t("785893"),i=t("250065");let d={id:"get-style-sheet-info",title:"GET STYLE SHEET INFO",slug:"/commands/get-style-sheet-info",displayed_sidebar:"docs"},r=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Note de compatibilit\xe9",id:"note-de-compatibilit\xe9",level:3},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"GET STYLE SHEET INFO"})," ( ",(0,l.jsx)(n.em,{children:"nomFeuilleStyle"})," ; ",(0,l.jsx)(n.em,{children:"police"})," ; ",(0,l.jsx)(n.em,{children:"taille"})," ; ",(0,l.jsx)(n.em,{children:"styles"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"nomFeuilleStyle"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nom de la feuille de style"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"police"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Police de caract\xe8res"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"taille"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Taille de police"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"styles"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Valeur de style"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"GET STYLE SHEET INFO"})," retourne la configuration courante de la feuille de style ",(0,l.jsx)(n.em,{children:"nomFeuilleStyle"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Passez dans ",(0,l.jsx)(n.em,{children:"nomFeuilleStyle"}),' le nom de la feuille de style tel que d\xe9fini en mode D\xe9veloppement. Pour d\xe9signer une feuille de style automatique, utilisez une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,l.jsx)(n.em,{children:"Styles de caract\xe8res"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constante"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Valeur"}),(0,l.jsx)(n.th,{children:"Comment"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Automatic style sheet"}),(0,l.jsx)(n.td,{children:"Cha\xeene"}),(0,l.jsx)(n.td,{children:"__automatic__"}),(0,l.jsx)(n.td,{children:"Utilis\xe9e par d\xe9faut pour tous les objets"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Automatic style sheet_additional"}),(0,l.jsx)(n.td,{children:"Cha\xeene"}),(0,l.jsx)(n.td,{children:"__automatic_additional_text__"}),(0,l.jsx)(n.td,{children:"Prise en charge par les textes statiques, champs et variables uniquement. Utilis\xe9e pour du texte additionnel dans les bo\xeetes de dialogue."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Automatic style sheet_main"}),(0,l.jsx)(n.td,{children:"Cha\xeene"}),(0,l.jsx)(n.td,{children:"__automatic_main_text__"}),(0,l.jsx)(n.td,{children:"Prise en charge par les textes statiques, champs et variables uniquement. Utilis\xe9e pour le texte principal des bo\xeetes de dialogue."})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["La commande retourne dans ",(0,l.jsx)(n.em,{children:"police"})," le nom de la police de caract\xe8res associ\xe9e \xe0 la feuille de style pour la plate-forme courante."]}),"\n",(0,l.jsxs)(n.p,{children:["La commande retourne dans ",(0,l.jsx)(n.em,{children:"taille"})," la taille en points de la police de caract\xe8res associ\xe9e \xe0 la feuille de style pour la plate-forme courante."]}),"\n",(0,l.jsxs)(n.p,{children:["La commande retourne dans ",(0,l.jsx)(n.em,{children:"styles"}),' une valeur correspondant au(x) style(s) associ\xe9(s) \xe0 la feuille de style pour la plate-forme courante. Vous pouvez comparer la valeur re\xe7ue aux constantes suivantes, plac\xe9es dans le th\xe8me "',(0,l.jsx)(n.em,{children:"Styles de caract\xe8res"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constante"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Valeur"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Bold"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Bold and Italic"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"3"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Bold and Underline"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"5"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Italic"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"2"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Italic and Underline"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"6"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Plain"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"0"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Underline"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["Si la commande est ex\xe9cut\xe9e correctement, la variable syst\xe8me ",(0,l.jsx)(n.em,{children:"OK"})," prend la valeur 1. Dans le cas contraire (par exemple si ",(0,l.jsx)(n.em,{children:"nomFeuilleStyle"})," n\u2019existe pas), elle prend la valeur 0."]}),"\n",(0,l.jsx)(n.h3,{id:"note-de-compatibilit\xe9",children:"Note de compatibilit\xe9"}),"\n",(0,l.jsxs)(n.p,{children:["Dans ",(0,l.jsx)(n.strong,{children:"l'architecture Projet"}),", seules les trois feuilles de style automatiques sont prises en charge par cette commande."]}),"\n",(0,l.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:'Vous souhaitez conna\xeetre la configuration actuelle de la feuille de style "Automatique" :'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0var $taille;$style : Integer\n\xa0var $pol : Text\n\xa0GET STYLE SHEET INFO(Automatic style sheet;$pol;$taille;$style)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/20-R8/commands/list-of-style-sheets",children:"LIST OF STYLE SHEETS"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R8/commands/object-set-style-sheet",children:"OBJECT SET STYLE SHEET"})]}),"\n",(0,l.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"1256"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2717"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifie les variables"}),(0,l.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var s=t(667294);let l={},i=s.createContext(l);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);