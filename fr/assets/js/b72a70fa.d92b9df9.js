"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24936"],{681353:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/list-item-parent","title":"List item parent","description":"List item parent ( { ;} liste ; refEl\xe9ment |  ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/list-item-parent.md","sourceDirName":"commands-legacy","slug":"/commands/list-item-parent","permalink":"/docs/fr/commands/list-item-parent","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-item-parent.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"list-item-parent","title":"List item parent","slug":"/commands/list-item-parent","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is a list","permalink":"/docs/fr/commands/is-a-list"},"next":{"title":"List item position","permalink":"/docs/fr/commands/list-item-position"}}'),r=s("785893"),i=s("250065");let l={id:"list-item-parent",title:"List item parent",slug:"/commands/list-item-parent",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"List item parent"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"liste"})," ; refEl\xe9ment | * ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, liste est un nom d'objet (cha\xeene) Si omis, liste est une r\xe9f\xe9rence de liste"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"liste"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste (si * omis) ou Nom d'objet de type liste (si * pass\xe9)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refEl\xe9ment | *"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur, Entier long"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence d'\xe9l\xe9ment ou 0 pour le dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste ou * pour l'\xe9l\xe9ment courant de la liste"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment parent ou 0 s'il n'y en a pas"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"List item parent"})," retourne le num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment parent."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"liste"})," le num\xe9ro de r\xe9f\xe9rence ou le nom d'objet de la liste."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le premier param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"liste"})," est un nom d\u2019objet (cha\xeene) correspondant \xe0 une repr\xe9sentation de liste dans le formulaire. Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"liste"})," est une r\xe9f\xe9rence de liste hi\xe9rarchique (",(0,r.jsx)(n.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"R\xe9fListe"}),"). Si vous utilisez une seule repr\xe9sentation de liste ou travaillez avec les \xe9l\xe9ments structurels (le second ",(0,r.jsx)(n.em,{children:"*"})," est omis), vous pouvez utiliser indiff\xe9remment l\u2019une ou l\u2019autre syntaxe. En revanche, si vous utilisez plusieurs repr\xe9sentations d\u2019une m\xeame liste et travaillez avec l\u2019\xe9l\xe9ment courant (le second ",(0,r.jsx)(n.em,{children:"*"})," est pass\xe9), la syntaxe bas\xe9e sur le nom d\u2019objet est requise car chaque repr\xe9sentation peut disposer de son propre \xe9l\xe9ment courant."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si vous utilisez le caract\xe8re @ dans le nom d'objet de la liste et que le formulaire contient plusieurs listes r\xe9pondant \xe0 ce nom, la commande ",(0,r.jsx)(n.strong,{children:"List item parent"})," s'appliquera au premier objet dont le nom correspond."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," le num\xe9ro de r\xe9f\xe9rence d'un \xe9l\xe9ment de la liste ou 0, ou encore *. Si vous passez 0, la commande s\u2019applique au dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste. Si vous passez *, la commande s\u2019applique \xe0 l\u2019\xe9l\xe9ment courant de la liste. Si plusieurs \xe9l\xe9ments sont s\xe9lectionn\xe9s, l\u2019\xe9l\xe9ment courant est celui qui a \xe9t\xe9 s\xe9lectionn\xe9 en dernier."]}),"\n",(0,r.jsx)(n.p,{children:"En retour, si un \xe9l\xe9ment correspondant existe bien dans la liste et si cet \xe9l\xe9ment se trouve bien dans une sous-liste (et a donc un \xe9l\xe9ment parent), vous r\xe9cup\xe9rez le num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment parent."}),"\n",(0,r.jsxs)(n.p,{children:["S'il n'existe pas d'\xe9l\xe9ment num\xe9ro ",(0,r.jsx)(n.em,{children:"r\xe9fEl\xe9ment"}),", ou si vous avez pass\xe9 * et qu\u2019aucun \xe9l\xe9ment n\u2019est s\xe9lectionn\xe9, ou si cet \xe9l\xe9ment n'a pas d'\xe9l\xe9ment parent, ",(0,r.jsx)(n.strong,{children:"List item parent"})," retourne ",(0,r.jsx)(n.em,{children:"0"})," (z\xe9ro)."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous travaillez avec les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments, assurez-vous d'utiliser des num\xe9ros uniques, sinon vous ne pourrez pas diff\xe9rencier les \xe9l\xe9ments. Pour plus d'informations sur ce point, reportez-vous \xe0 la description de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/append-to-list",children:"APPEND TO LIST"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Voici une liste ",(0,r.jsx)(n.em,{children:"hList"})," affich\xe9e en mode Application :"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(610801).Z+"",width:"163",height:"152"})}),"\n",(0,r.jsx)(n.p,{children:"Voici les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments de cette liste :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"El\xe9ment"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Num\xe9ro"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"a"}),(0,r.jsx)(n.td,{children:"100"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"a-1"}),(0,r.jsx)(n.td,{children:"101"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"a-2"}),(0,r.jsx)(n.td,{children:"102"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"b"}),(0,r.jsx)(n.td,{children:"200"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"b-1"}),(0,r.jsx)(n.td,{children:"201"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"b-2"}),(0,r.jsx)(n.td,{children:"202"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"b-3"}),(0,r.jsx)(n.td,{children:"203"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Avec le code ci-dessous, si l'\xe9l\xe9ment \u201Cb-3\u201D est s\xe9lectionn\xe9, la variable ",(0,r.jsx)(n.em,{children:"$vlParentEl\xe9mRef"})," prend la valeur 200, c'est-\xe0-dire le num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment \u201Cb\u201D :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$vlEl\xe9mPos:=Selected list items(hList)\n\xa0GET LIST ITEM(hList;$vlEl\xe9mPos;$vlEl\xe9mRef;$vsItemText)\n\xa0$vlParentEl\xe9mRef:=List item parent(hList;$vlEl\xe9mRef)\xa0// $vlParentEl\xe9mRef vaut 200\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si l'\xe9l\xe9ment \u201Ca-1\u201D \xe9tait s\xe9lectionn\xe9, la variable ",(0,r.jsx)(n.em,{children:"$vlParentEl\xe9mRef"})," prendrait la valeur 100, c'est-\xe0-dire le num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment \u201Ca\u201D."]}),"\n",(0,r.jsxs)(n.li,{children:["Si l'\xe9l\xe9ment \u201Ca\u201D ou \u201Cb\u201D \xe9tait s\xe9lectionn\xe9, la variable ",(0,r.jsx)(n.em,{children:"$vlParentEl\xe9mRef"})," prendrait la valeur 0 car ces \xe9l\xe9ments n'ont pas d'\xe9l\xe9ment parent."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-list-item",children:"GET LIST ITEM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/list-item-position",children:"List item position"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/select-list-items-by-reference",children:"SELECT LIST ITEMS BY REFERENCE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-list-item",children:"SET LIST ITEM"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"633"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},610801:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);