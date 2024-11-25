"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95522"],{213098:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>r});var i=JSON.parse('{"id":"commands-legacy/listbox-set-row-height","title":"LISTBOX SET ROW HEIGHT","description":"LISTBOX SET ROW HEIGHT ( { ;} objet ; ligne ; hauteur* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-row-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-row-height","permalink":"/docs/fr/commands/listbox-set-row-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-row-height.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-row-height","title":"LISTBOX SET ROW HEIGHT","slug":"/commands/listbox-set-row-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET ROW FONT STYLE","permalink":"/docs/fr/commands/listbox-set-row-font-style"},"next":{"title":"LISTBOX SET ROWS HEIGHT","permalink":"/docs/fr/commands/listbox-set-rows-height"}}'),t=s("785893"),l=s("250065");let r={id:"listbox-set-row-height",title:"LISTBOX SET ROW HEIGHT",slug:"/commands/listbox-set-row-height",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"ligne"})," ; ",(0,t.jsx)(n.em,{children:"hauteur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ligne"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Ligne de la List box dont la hauteur doit \xeatre fix\xe9e."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hauteur"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Hauteur de la ligne de la List box"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," permet de modifier la hauteur de la ligne sp\xe9cifi\xe9e dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"ligne"})," dans la List box d\xe9sign\xe9e par les param\xe8tres ",(0,t.jsx)(n.em,{children:"objet"})," et \xe9ventuellement ",(0,t.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", vous pr\xe9cisez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un nom d'objet (cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous passez une r\xe9f\xe9rence de variable \xe0 la place d'une cha\xeene. Pour plus d'information sur les noms d'objet, reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si la ",(0,t.jsx)(n.em,{children:"ligne"})," sp\xe9cifi\xe9e n'existe pas dans la List box, la commande ne fait rien."]}),"\n",(0,t.jsxs)(n.p,{children:["L'unit\xe9 utilis\xe9e par ",(0,t.jsx)(n.em,{children:"hauteur"})," correspond \xe0 celle d\xe9finie globalement pour les lignes de la List box, soit dans la Liste des propri\xe9t\xe9s, soit par un appel ant\xe9rieur \xe0 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," modifie le tableau de hauteur de lignes sp\xe9cifi\xe9 dans la Liste des propri\xe9t\xe9s, le cas \xe9ch\xe9ant (cf. section ",(0,t.jsx)(n.em,{children:"Tableau hauteurs de lignes"})," dans le manuel ",(0,t.jsx)(n.em,{children:"Mode D\xe9veloppement"}),". Sinon, la commande cr\xe9e dynamiquement un tableau de hauteurs de lignes. Utiliser cette commande pour d\xe9finir individuellement les hauteurs de lignes produit le m\xeame r\xe9sultat qu'utiliser un tableau de hauteurs de lignes ; toutefois, remplir un tableau de hauteurs de lignes est plus rapide qu'appeler cette commande dans une boucle pour fixer les hauteurs de lignes une par une."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important :"})," Si la commande globale ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})," est appel\xe9e par la suite avec une unit\xe9 diff\xe9rente de celle d\xe9finie pr\xe9c\xe9demment, la valeur par d\xe9faut de cette commande remplacera et r\xe9initialisera toute hauteur de ligne d\xe9finie \xe0 l'aide de ",(0,t.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," (voir exemple 2)."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez modifier la hauteur de quelques lignes de la list box suivante :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(707166).Z+"",width:"364",height:"237"})}),"\n",(0,t.jsx)(n.p,{children:"Si vous ex\xe9cutez ce code :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//unit\xe9 courante en pixels\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";3;40)\xa0//Kuwait\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";7;14)\xa0//Serbia\n'})}),"\n",(0,t.jsx)(n.p,{children:"... vous obtenez le r\xe9sultat suivant :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(974598).Z+"",width:"365",height:"255"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(n.p,{children:["Vous devez fixer une hauteur de ligne par d\xe9faut puis mettre en place individuellement des hauteurs de lignes sp\xe9cifiques pour certaines d'entre elles en utilisant la commande ",(0,t.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROWS HEIGHT(*;"listboxname";25;lk pixels)\xa0// la hauteur est globalement fix\xe9e \xe0 25 pixels\n\xa0\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";1;30)\xa0// ligne 1: 30 pixels\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";5;40)\xa0// ligne 5: 40 pixels\n\xa0LISTBOX SET ROW HEIGHT(*;"listboxname";11;50)\xa0// ligne 11: 50 pixels\n'})}),"\n",(0,t.jsx)(n.p,{children:"Par la suite, si le code suivant est ex\xe9cut\xe9 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROWS HEIGHT(*;"listboxname";18;lk pixels)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u2026 la hauteur des lignes est globalement fix\xe9e \xe0 18 pixels ; toutefois, \xe9tant donn\xe9 que l'unit\xe9 n'a pas chang\xe9, les lignes 1, 5 et 11 garderont leur hauteur personnalis\xe9e, \xe0 savoir, 30, 40 et 50 pixels tel que d\xe9fini ci-dessus par la commande ",(0,t.jsx)(n.strong,{children:"LISTBOX SET ROW HEIGHT"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"En revanche, si le code suivant est ex\xe9cut\xe9 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROWS HEIGHT(*;"listboxname";2;lk lines)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u2026 alors les lignes 1, 5 et 11 sont r\xe9initialis\xe9es \xe0 la valeur globale par d\xe9faut mise en place par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})," (c'est-\xe0-dire 2 lignes) car l'unit\xe9 est pass\xe9e de \"pixels\" \xe0 \"lignes\". Comme il n'y a pas de conversion automatique, le changement d'unit\xe9 aboutit toujours \xe0 la r\xe9initialisation des hauteurs de lignes avec la nouvelle valeur par d\xe9faut."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-row-height",children:"LISTBOX Get row height"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-auto-row-height",children:"LISTBOX SET AUTO ROW HEIGHT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},707166:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/pict3071133.en-e78628dcc538f55089829111cb2916e3.png"},974598:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/pict3071135.en-eff2870c9485b09ce7d9e5526af4895b.png"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var i=s(667294);let t={},l=i.createContext(t);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);