"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20771"],{694704:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-list-item-font","title":"Get list item font","description":"Get list item font ( { ;} liste ; refEl\xe9ment |  ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-list-item-font.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-font","permalink":"/docs/fr/commands/get-list-item-font","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-font.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-list-item-font","title":"Get list item font","slug":"/commands/get-list-item-font","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM","permalink":"/docs/fr/commands/get-list-item"},"next":{"title":"GET LIST ITEM ICON","permalink":"/docs/fr/commands/get-list-item-icon"}}'),i=t("785893"),r=t("250065");let l={id:"get-list-item-font",title:"Get list item font",slug:"/commands/get-list-item-font",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Get list item font"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"liste"})," ; refEl\xe9ment | * ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, liste est un nom d\u2019objet (cha\xeene) Si omis, liste est un num\xe9ro de r\xe9f\xe9rence de liste"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"liste"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste (si * omis) ou Nom d'objet de type liste (si * pass\xe9)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"refEl\xe9ment | *"}),(0,i.jsx)(n.td,{children:"Entier long, Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence d\u2019\xe9l\xe9ment ou 0 pour le dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste ou * pour l\u2019\xe9l\xe9ment courant de la liste"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Nom de police"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"Get list item font"})," retourne le nom de la police de caract\xe8res courante de l\u2019\xe9l\xe9ment d\xe9sign\xe9 par le param\xe8tre ",(0,i.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," de la liste dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence ou le nom d\u2019objet dans ",(0,i.jsx)(n.em,{children:"liste"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le premier param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"liste"})," est un nom d\u2019objet (cha\xeene) correspondant \xe0 une repr\xe9sentation de liste dans le formulaire. Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"liste"})," est une r\xe9f\xe9rence de liste hi\xe9rarchique (",(0,i.jsx)(n.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"R\xe9fListe"}),"). Si vous utilisez une seule repr\xe9sentation de liste ou travaillez avec les \xe9l\xe9ments structurels (le second ",(0,i.jsx)(n.em,{children:"*"})," est omis), vous pouvez utiliser indiff\xe9remment l\u2019une ou l\u2019autre syntaxe. En revanche, si vous utilisez plusieurs repr\xe9sentations d\u2019une m\xeame liste et travaillez avec l\u2019\xe9l\xe9ment courant (le second ",(0,i.jsx)(n.em,{children:"*"})," est pass\xe9), la syntaxe bas\xe9e sur le nom d\u2019objet est requise car chaque repr\xe9sentation peut disposer de son propre \xe9l\xe9ment courant."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Si vous utilisez le caract\xe8re @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes r\xe9pondant \xe0 ce nom, la commande ",(0,i.jsx)(n.strong,{children:"Get list item font"})," s'appliquera au premier objet dont le nom correspond."]}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez passer un num\xe9ro de r\xe9f\xe9rence dans ",(0,i.jsx)(n.em,{children:"r\xe9fEl\xe9ment"}),". Si ce num\xe9ro ne correspond \xe0 aucun \xe9l\xe9ment de la liste, la commande ne fait rien. Vous pouvez \xe9galement passer 0 dans ",(0,i.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," afin de d\xe9signer le dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste (\xe0 l\u2019aide de ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/append-to-list",children:"APPEND TO LIST"}),").",(0,i.jsx)(n.br,{}),"\nVous pouvez enfin passer ",(0,i.jsx)(n.em,{children:"*"})," dans ",(0,i.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," : dans ce cas, la commande s\u2019appliquera \xe0 l\u2019\xe9l\xe9ment courant de la liste. Si plusieurs \xe9l\xe9ments sont s\xe9lectionn\xe9s manuellement, l\u2019\xe9l\xe9ment courant est celui qui a \xe9t\xe9 s\xe9lectionn\xe9 en dernier. Si aucun \xe9l\xe9ment n\u2019est s\xe9lectionn\xe9, la commande ne fait rien."]}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-list-item-font",children:"SET LIST ITEM FONT"})}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"954"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);