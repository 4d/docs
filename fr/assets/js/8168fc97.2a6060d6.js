"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13988"],{512097:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>a});var r=JSON.parse('{"id":"commands-legacy/sort-array","title":"SORT ARRAY","description":"SORT ARRAY ( tableau {; tableau2 ; ... ; tableauN}{; > ou <} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sort-array.md","sourceDirName":"commands-legacy","slug":"/commands/sort-array","permalink":"/docs/fr/commands/sort-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsort-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sort-array","title":"SORT ARRAY","slug":"/commands/sort-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Size of array","permalink":"/docs/fr/commands/size-of-array"},"next":{"title":"TEXT TO ARRAY","permalink":"/docs/fr/commands/text-to-array"}}'),t=s("785893"),o=s("250065");let a={id:"sort-array",title:"SORT ARRAY",slug:"/commands/sort-array",displayed_sidebar:"docs"},i=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SORT ARRAY"})," ( ",(0,t.jsx)(n.em,{children:"tableau"})," {; ",(0,t.jsx)(n.em,{children:"tableau2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"tableauN"}),"}{; > ou <} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableau"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tableau(x) \xe0 trier"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"> ou <"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:'">" pour effectuer un tri par ordre croissant ou "<" pour effectuer un tri par ordre d\xe9croissant (tri croissant si omis)'})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SORT ARRAY"})," trie un ou plusieurs tableau(x) par ordre croissant ou d\xe9croissant."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Vous ne pouvez pas trier de tableaux de type ",(0,t.jsx)(n.a,{href:"#",title:"A reference to another variable (including arrays and array elements), table, or field",children:"Pointeur"})," ou ",(0,t.jsx)(n.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Image"}),". Vous pouvez trier un \xe9l\xe9ment d'un tableau \xe0 deux dimensions (c'est-\xe0-dire ",(0,t.jsx)(n.em,{children:"t2DTableau{$vlCetEl\xe9ment}"}),"), mais vous ne pouvez pas trier le tableau 2D lui-m\xeame (c'est-\xe0-dire ",(0,t.jsx)(n.em,{children:"t2DTableau"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"Vous pouvez trier les tableaux de type Object. Les \xe9l\xe9ments Null sont regroup\xe9s et les \xe9l\xe9ments du tableau sont tri\xe9s selon un ordre interne."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Le second param\xe8tre sp\xe9cifie l'ordre du tri : croissant ou d\xe9croissant. Si ce param\xe8tre est \xe9gal au symbole \u201Csup\xe9rieur \xe0\u201D (>), l'ordre du tri est croissant. S'il est \xe9gal au symbole \u201Cinf\xe9rieur \xe0\u201D (<), l'ordre du tri est d\xe9croissant. S'il est omis, l'ordre du tri est croissant."}),"\n",(0,t.jsxs)(n.p,{children:["Si plus d'un tableau est sp\xe9cifi\xe9, les tableaux sont tri\xe9s en fonction de l'ordre d\xe9fini pour le premier tableau (les tris multi-niveaux ne sont pas possibles dans ce cas). Utilisez plut\xf4t la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/multi-sort-array",children:"MULTI SORT ARRAY"})," si vous souhaitez effectuer des tris de tableaux synchronis\xe9s."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant cr\xe9e deux tableaux et les trie en fonction du nom de la soci\xe9t\xe9 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([Personnes])\n\xa0SELECTION TO ARRAY([Personnes]Noms;tabNoms;[Personnes]Soci\xe9t\xe9s;tabSoci\xe9t\xe9s)\n\xa0SORT ARRAY(tabSoci\xe9t\xe9s;tabNoms;>)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Cependant, comme ",(0,t.jsx)(n.strong,{children:"SORT ARRAY"})," n'effectue pas de tris multi-niveaux, les noms des personnes appara\xeetront en d\xe9sordre \xe0 l'int\xe9rieur de chaque soci\xe9t\xe9. Pour que les noms des personnes soient tri\xe9s pour chaque soci\xe9t\xe9, vous devrez plut\xf4t \xe9crire :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([Personnes])\n\xa0ORDER BY([Personnes];[Personnes]Soci\xe9t\xe9s;>;[Personnes]Noms;>)\n\xa0SELECTION TO ARRAY([Personnes]Noms;tabNoms;[Personnes]Soci\xe9t\xe9s;tabSoci\xe9t\xe9s)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(n.p,{children:["Vous affichez les noms d'une table [Personnes] dans une fen\xeatre flottante. Cette liste de noms peut \xeatre tri\xe9e de A vers Z ou de Z vers A en fonction du bouton sur lequel vous cliquez, dans la fen\xeatre. Comme il se peut que certaines personnes portent le m\xeame nom, vous avez \xe9galement cr\xe9\xe9 un champ ",(0,t.jsx)(n.em,{children:"[Personnes]Num\xe9ro ID"})," qui est un champ index\xe9 unique. Lorsque vous cliquez sur un nom dans la liste, vous voulez r\xe9cup\xe9rer l'enregistrement correspondant. En utilisant un tableau synchronis\xe9 et cach\xe9 des num\xe9ros d'ID, vous \xeates certain d'acc\xe9der \xe0 l'enregistrement correspondant au nom s\xe9lectionn\xe9 :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode objet du tableau tabNoms\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALL RECORDS([Personnes])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECTION TO ARRAY([Personnes]Noms;tabNoms;[Personnes]Num\xe9ro ID;tabIDs)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SORT ARRAY(tabNoms;tabIDs;>)\n\xa0\xa0\xa0\xa0:(Form event code=Sur lib\xe9ration)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(tabNoms)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(tabIDs)\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(tabNoms#0)\n\xa0\xa0// Use le tableau tabIDs pour r\xe9cup\xe9rer le bon enregistrement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Personnes];[Personnes]Num\xe9ro IDr=tabIDs{tabNoms})\n\xa0\xa0// Traiter ici l'enregistrement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n\xa0\n\xa0\xa0// M\xe9thode objet du bouton bAversZ\n\xa0\xa0// Tri croissant des tableaux en conservant la synchronisation\n\xa0SORT ARRAY(tabNoms;tabIDs;>)\n\xa0\n\xa0\xa0// M\xe9thode objet du bouton bZversA\n\xa0\xa0// Tri d\xe9croissant des tableaux en conservant la synchronisation\n\xa0SORT ARRAY(tabNoms;tabIDs;<)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/find-in-sorted-array",children:"Find in sorted array"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/multi-sort-array",children:"MULTI SORT ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/order-by",children:"ORDER BY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/selection-to-array",children:"SELECTION TO ARRAY"})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var r=s(667294);let t={},o=r.createContext(t);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);