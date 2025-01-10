"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42766"],{294567:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/get-list-item-parameter","title":"GET LIST ITEM PARAMETER","description":"GET LIST ITEM PARAMETER ( { ;} liste ; refEl\xe9ment |  ; s\xe9lecteur ; valeur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-list-item-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-parameter","permalink":"/docs/fr/commands/get-list-item-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-parameter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-list-item-parameter","title":"GET LIST ITEM PARAMETER","slug":"/commands/get-list-item-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM ICON","permalink":"/docs/fr/commands/get-list-item-icon"},"next":{"title":"GET LIST ITEM PARAMETER ARRAYS","permalink":"/docs/fr/commands/get-list-item-parameter-arrays"}}'),r=s("785893"),i=s("250065");let l={id:"get-list-item-parameter",title:"GET LIST ITEM PARAMETER",slug:"/commands/get-list-item-parameter",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET LIST ITEM PARAMETER"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"liste"})," ; refEl\xe9ment | * ; ",(0,r.jsx)(n.em,{children:"s\xe9lecteur"})," ; ",(0,r.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, liste est un nom d\u2019objet (cha\xeene) Si omis, liste est un num\xe9ro de r\xe9f\xe9rence de liste"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"liste"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste (si * omis) ou Nom d'objet de type liste (si * pass\xe9)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refEl\xe9ment | *"}),(0,r.jsx)(n.td,{children:"Entier long, Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence d\u2019\xe9l\xe9ment ou 0 pour le dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste ou * pour l\u2019\xe9l\xe9ment courant de la liste"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"s\xe9lecteur"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Constante de param\xe8tre"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeur"}),(0,r.jsx)(n.td,{children:"Text, Boolean, Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeur courante du param\xe8tre"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"GET LIST ITEM PARAMETER"})," permet de conna\xeetre la ",(0,r.jsx)(n.em,{children:"valeur"})," courante du param\xe8tre ",(0,r.jsx)(n.em,{children:"s\xe9lecteur"})," pour l\u2019\xe9l\xe9ment ",(0,r.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," de la liste hi\xe9rarchique dont vous avez pass\xe9 la r\xe9f\xe9rence ou le nom d\u2019objet dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"liste"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le premier param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"liste"})," est un nom d\u2019objet (cha\xeene) correspondant \xe0 une repr\xe9sentation de liste dans le formulaire. Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"liste"})," est une r\xe9f\xe9rence de liste hi\xe9rarchique (",(0,r.jsx)(n.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"R\xe9fListe"}),"). Si vous utilisez une seule repr\xe9sentation de liste ou travaillez avec les \xe9l\xe9ments structurels (le second ",(0,r.jsx)(n.em,{children:"*"})," est omis), vous pouvez utiliser indiff\xe9remment l\u2019une ou l\u2019autre syntaxe. En revanche, si vous utilisez plusieurs repr\xe9sentations d\u2019une m\xeame liste et travaillez avec l\u2019\xe9l\xe9ment courant (le second ",(0,r.jsx)(n.em,{children:"*"})," est pass\xe9), la syntaxe bas\xe9e sur le nom d\u2019objet est requise car chaque repr\xe9sentation peut disposer de son propre \xe9l\xe9ment courant."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si vous utilisez le caract\xe8re @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes r\xe9pondant \xe0 ce nom, la commande ",(0,r.jsx)(n.strong,{children:"GET LIST ITEM PARAMETER"})," s'appliquera au premier objet dont le nom correspond."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer un num\xe9ro de r\xe9f\xe9rence dans ",(0,r.jsx)(n.em,{children:"r\xe9fEl\xe9ment"}),". Si ce num\xe9ro ne correspond \xe0 aucun \xe9l\xe9ment de la liste, la commande ne fait rien. Vous pouvez \xe9galement passer 0 dans ",(0,r.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," afin de d\xe9signer le dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste (\xe0 l\u2019aide de ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/append-to-list",children:"APPEND TO LIST"}),").",(0,r.jsx)(n.br,{}),"\nVous pouvez enfin passer ",(0,r.jsx)(n.em,{children:"*"})," dans ",(0,r.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," : dans ce cas, la commande s\u2019appliquera \xe0 l\u2019\xe9l\xe9ment courant de la liste. Si plusieurs \xe9l\xe9ments sont s\xe9lectionn\xe9s manuellement, l\u2019\xe9l\xe9ment courant est celui qui a \xe9t\xe9 s\xe9lectionn\xe9 en dernier. Si aucun \xe9l\xe9ment n\u2019est s\xe9lectionn\xe9, la commande ne fait rien."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,r.jsx)(n.em,{children:"s\xe9lecteur"})," la constante Additional text ou Associated standard action (plac\xe9es dans le th\xe8me \u201C",(0,r.jsx)(n.em,{children:"Listes hi\xe9rarchiques"}),"\u201D) ou toute valeur personnalis\xe9e. Pour plus d\u2019informations sur les param\xe8tres ",(0,r.jsx)(n.em,{children:"s\xe9lecteur"})," et ",(0,r.jsx)(n.em,{children:"valeur"}),", reportez-vous \xe0 la description de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Listes hi\xe9rarchiques"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"985"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);