"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83019"],{672287:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>o,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/set-list-item-font","title":"SET LIST ITEM FONT","description":"SET LIST ITEM FONT ( { ;} liste ; refEl\xe9ment |  ; police )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-list-item-font.md","sourceDirName":"commands-legacy","slug":"/commands/set-list-item-font","permalink":"/docs/fr/commands/set-list-item-font","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-list-item-font.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-list-item-font","title":"SET LIST ITEM FONT","slug":"/commands/set-list-item-font","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET LIST ITEM","permalink":"/docs/fr/commands/set-list-item"},"next":{"title":"SET LIST ITEM ICON","permalink":"/docs/fr/commands/set-list-item-icon"}}'),i=s("785893"),r=s("250065");let l={id:"set-list-item-font",title:"SET LIST ITEM FONT",slug:"/commands/set-list-item-font",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET LIST ITEM FONT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"liste"})," ; refEl\xe9ment | * ; ",(0,i.jsx)(n.em,{children:"police"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, liste est un nom d\u2019objet (cha\xeene) Si omis, liste est un num\xe9ro de r\xe9f\xe9rence de liste"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"liste"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste (si * omis) ou Nom d'objet de type liste (si * pass\xe9)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"refEl\xe9ment | *"}),(0,i.jsx)(n.td,{children:"Entier long, Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence d\u2019\xe9l\xe9ment ou 0 pour le dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste ou * pour l\u2019\xe9l\xe9ment courant de la liste"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"police"}),(0,i.jsx)(n.td,{children:"Text, Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom ou num\xe9ro de police"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SET LIST ITEM FONT"})," modifie la police de caract\xe8res de l\u2019\xe9l\xe9ment d\xe9sign\xe9 par le param\xe8tre ",(0,i.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," de la liste dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence ou le nom d\u2019objet dans ",(0,i.jsx)(n.em,{children:"liste"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le premier param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"liste"})," est un nom d\u2019objet (cha\xeene) correspondant \xe0 une repr\xe9sentation de liste dans le formulaire. Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"liste"})," est une r\xe9f\xe9rence de liste hi\xe9rarchique (",(0,i.jsx)(n.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"R\xe9fListe"}),"). Si vous utilisez une seule repr\xe9sentation de liste ou travaillez avec les \xe9l\xe9ments structurels (le second ",(0,i.jsx)(n.em,{children:"*"})," est omis), vous pouvez utiliser indiff\xe9remment l\u2019une ou l\u2019autre syntaxe. En revanche, si vous utilisez plusieurs repr\xe9sentations d\u2019une m\xeame liste et travaillez avec l\u2019\xe9l\xe9ment courant (le second ",(0,i.jsx)(n.em,{children:"*"})," est pass\xe9), la syntaxe bas\xe9e sur le nom d\u2019objet est requise car chaque repr\xe9sentation peut disposer de son propre \xe9l\xe9ment courant."]}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez passer un num\xe9ro de r\xe9f\xe9rence dans ",(0,i.jsx)(n.em,{children:"r\xe9fEl\xe9ment"}),". Si ce num\xe9ro ne correspond \xe0 aucun \xe9l\xe9ment de la liste, la commande ne fait rien.Vous pouvez \xe9galement passer 0 dans ",(0,i.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," afin de demander la modification du dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste (\xe0 l\u2019aide de ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/append-to-list",children:"APPEND TO LIST"}),").",(0,i.jsx)(n.br,{}),"\nVous pouvez enfin passer ",(0,i.jsx)(n.em,{children:"*"})," dans ",(0,i.jsx)(n.em,{children:"r\xe9fEl\xe9ment"})," : dans ce cas, la commande s\u2019appliquera \xe0 l\u2019\xe9l\xe9ment courant de la liste. Si plusieurs \xe9l\xe9ments sont s\xe9lectionn\xe9s manuellement, l\u2019\xe9l\xe9ment courant est celui qui a \xe9t\xe9 s\xe9lectionn\xe9 en dernier. Si aucun \xe9l\xe9ment n\u2019est s\xe9lectionn\xe9, la commande ne fait rien."]}),"\n",(0,i.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"police"})," le nom ou le num\xe9ro de la police \xe0 utiliser. Pour r\xe9appliquer la police par d\xe9faut de la liste hi\xe9rarchique, passez une cha\xeene vide dans ",(0,i.jsx)(n.em,{children:"police"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Appliquer la police Times \xe0 l\u2019\xe9l\xe9ment courant de la liste :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SET LIST ITEM FONT(*;"Maliste";*;"Times")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-list-item-font",children:"Get list item font"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/object-set-font",children:"OBJECT SET FONT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-list-item",children:"SET LIST ITEM"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/set-list-item-icon",children:"SET LIST ITEM ICON"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);