"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4598"],{963356:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/listbox-insert-rows","title":"LISTBOX INSERT ROWS","description":"LISTBOX INSERT ROWS ( { ;} objet ; positionLigne {; nbLignes*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-insert-rows.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-insert-rows","permalink":"/docs/fr/commands/listbox-insert-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-insert-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-insert-rows","title":"LISTBOX INSERT ROWS","slug":"/commands/listbox-insert-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX INSERT COLUMN FORMULA","permalink":"/docs/fr/commands/listbox-insert-column-formula"},"next":{"title":"LISTBOX MOVE COLUMN","permalink":"/docs/fr/commands/listbox-move-column"}}'),i=s("785893"),r=s("250065");let l={id:"listbox-insert-rows",title:"LISTBOX INSERT ROWS",slug:"/commands/listbox-insert-rows",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX INSERT ROWS"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"positionLigne"})," {; ",(0,i.jsx)(n.em,{children:"nbLignes"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d\u2019objet (cha\xeene) Si omis, objet est une variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom d\u2019objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"positionLigne"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Emplacement de la ligne \xe0 ins\xe9rer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nbLignes"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre de lignes \xe0 ins\xe9rer"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"LISTBOX INSERT ROWS"})," ins\xe8re une ou plusieurs nouvelle(s) ligne(s) dans l\u2019objet list box d\xe9sign\xe9 par les param\xe8tres ",(0,i.jsx)(n.em,{children:"objet"})," et ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Cette commande fonctionne uniquement avec les list box bas\xe9es sur des tableaux. Lorsque cette commande est utilis\xe9e avec une list box bas\xe9e sur une s\xe9lection d'entit\xe9s/d'enregistrements ou une collection, elle ne fait rien et la variable syst\xe8me OK retourne 0."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Pour plus d'informations sur les noms d\u2019objets, reportez-vous \xe0 la section ",(0,i.jsx)(n.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Par d\xe9faut, si le param\xe8tre ",(0,i.jsx)(n.em,{children:"nbLignes"})," est omis, une seule ligne est ins\xe9r\xe9e. Sinon, la commande ins\xe8re le nombre de lignes d\xe9fini dans ce param\xe8tre."]}),"\n",(0,i.jsxs)(n.p,{children:["La ou les ligne(s) est (sont) ins\xe9r\xe9e(s) \xe0 l\u2019emplacement d\xe9fini par le param\xe8tre ",(0,i.jsx)(n.em,{children:"positionLigne"})," et est (sont) automatiquement ajout\xe9e(s) \xe0 cet emplacement dans tous les tableaux composant la list box, quel que soit leur type, y compris dans les tableaux (colonnes) masqu\xe9s."]}),"\n",(0,i.jsxs)(n.p,{children:["Si le param\xe8tre ",(0,i.jsx)(n.em,{children:"positionLigne"})," est sup\xe9rieur au nombre de lignes des tableaux de la list box, la commande effectue l'ajout \xe0 la fin de chaque tableau. S'il est \xe9gal \xe0 0, la commande effectue l'ajout au d\xe9but de chaque tableau. S'il contient une valeur n\xe9gative, la commande ne fait rien."]}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/listbox-delete-rows",children:"LISTBOX DELETE ROWS"})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"913"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifie les variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);