"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91729"],{789314:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/structure-file","title":"Structure file","description":"Structure file {( * )} : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/structure-file.md","sourceDirName":"commands-legacy","slug":"/commands/structure-file","permalink":"/docs/fr/commands/structure-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstructure-file.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"structure-file","title":"Structure file","slug":"/commands/structure-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET UPDATE FOLDER","permalink":"/docs/fr/commands/set-update-folder"},"next":{"title":"Table fragmentation","permalink":"/docs/fr/commands/table-fragmentation"}}'),r=t("785893"),i=t("250065");let c={id:"structure-file",title:"Structure file",slug:"/commands/structure-file",displayed_sidebar:"docs"},l=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Structure file"})," {( * )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Retourner le fichier de structure de la base h\xf4te"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nom long du fichier de structure de la base"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.strong,{children:"Structure file"})," retourne le chemin d'acc\xe8s du fichier de structure de la base en cours d'utilisation.* Avec les bases projets, la commande retourne le chemin d'acc\xe8s du fichier ",(0,r.jsx)(n.strong,{children:".4dproject."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Dans le cas particulier d'une base compil\xe9e et fusionn\xe9e avec 4D Volume Desktop, cette commande retourne le chemin d'acc\xe8s du fichier de l'application (fichier ex\xe9cutable) sous Windows et macOS. Sous macOS, ce fichier est situ\xe9 \xe0 l\u2019int\xe9rieur du progiciel, dans le dossier [Contents:MacOS]. Ce fonctionnement provient d\u2019un ancien m\xe9canisme, conserv\xe9 pour des raisons de compatibilit\xe9. Si vous souhaitez obtenir le nom long du progiciel lui-m\xeame, il est pr\xe9f\xe9rable d\u2019utiliser la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/application-file",children:"Application file"}),". L\u2019astuce consiste \xe0 tester l\u2019application \xe0 l\u2019aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/application-type",children:"Application type"})," puis \xe0 ex\xe9cuter ",(0,r.jsx)(n.strong,{children:"Structure file"})," ou ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/application-file",children:"Application file"})," en fonction du contexte."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ATTENTION :"})," Si vous appelez cette commande lorsque vous utilisez 4D en mode distant, seul le nom du fichier de structure est renvoy\xe9, pas le nom long."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,r.jsx)(n.em,{children:"*"})," est utile dans le cadre d'une architecture utilisant des composants : il permet de d\xe9terminer la structure (h\xf4te ou composant) dont vous souhaitez obtenir le chemin d'acc\xe8s en fonction du contexte d'appel de la commande :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Lorsque la commande est appel\xe9e depuis un composant :\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["si le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"})," est pass\xe9, la commande retourne le chemin d'acc\xe8s du fichier de structure de la base h\xf4te"]}),"\n",(0,r.jsxs)(n.li,{children:["si le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"})," n\u2019est pas pass\xe9, la commande retourne le chemin d'acc\xe8s du fichier de structure du composant.",(0,r.jsx)(n.br,{}),"\nLe fichier de structure d\u2019un composant correspond au fichier de stucture (.4db, .4dc, .4dproject, .4dz) du composant situ\xe9 dans le dossier \u201CComponents\u201D de la base. Cependant, un composant peut \xe9galement \xeatre install\xe9 sous la forme d\u2019un alias/raccourci ou d\u2019un dossier/package .4dbase :",(0,r.jsx)(n.br,{}),"\n* dans le cas d\u2019un composant install\xe9 sous forme d\u2019alias/raccourci, la commande retourne le chemin d\u2019acc\xe8s du fichier original (l\u2019alias ou le raccourci est r\xe9solu).",(0,r.jsx)(n.br,{}),"\n* dans le cas d\u2019un composant install\xe9 sous forme de dossier/package .4dbase, la commande retourne le chemin d\u2019acc\xe8s du fichier \xe0 l\u2019int\xe9rieur de ce dossier/package."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Lorsque la commande est appel\xe9e depuis une m\xe9thode d\u2019une base h\xf4te, elle retourne toujours le chemin d'acc\xe8s du fichier de structure/projet de la base h\xf4te, que le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"})," soit pass\xe9 ou non."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Cet exemple affiche le nom et l'emplacement du fichier de structure que vous utilisez :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $fullpath : Object\n\xa0var $name;$path : Text\n\xa0If(Application type#4D mode distant)\n\xa0\xa0\xa0\xa0$fullpath:=Path to object(Structure file)\n\xa0\xa0\xa0\xa0$name:=$fullpath.name\n\xa0\xa0\xa0\xa0$path:=$fullpath.parentFolder\n\xa0\xa0\xa0\xa0ALERT("Vous \xeates en train d\'utiliser la base "+Char(34)+$name+Char(34)+" qui se trouve au "+Char(34)+$path+Char(34)+".")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Vous \xeates connect\xe9 \xe0 la base "+Char(34)+Structure file+Char(34))\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"L\u2019exemple suivant permet de savoir si la m\xe9thode est appel\xe9e depuis un composant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var $0 : Boolean\n\xa0$0:=(Structure file#Structure file(*))\n\xa0\xa0// $0=Vrai si la m\xe9thode est appel\xe9e depuis un composant\n"})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/application-file",children:"Application file"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/component-list",children:"COMPONENT LIST"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/data-file",children:"Data file"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"489"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var s=t(667294);let r={},i=s.createContext(r);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);