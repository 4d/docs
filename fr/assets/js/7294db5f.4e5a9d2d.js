"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44206"],{56490:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/list-to-array","title":"LIST TO ARRAY","description":"LIST TO ARRAY ( liste ; tableau {; r\xe9fEl\xe9ments} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/list-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/list-to-array","permalink":"/docs/fr/20-R8/commands/list-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-to-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"list-to-array","title":"LIST TO ARRAY","slug":"/commands/list-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INSERT IN ARRAY","permalink":"/docs/fr/20-R8/commands/insert-in-array"},"next":{"title":"LONGINT ARRAY FROM SELECTION","permalink":"/docs/fr/20-R8/commands/longint-array-from-selection"}}'),r=s("785893"),i=s("250065");let l={id:"list-to-array",title:"LIST TO ARRAY",slug:"/commands/list-to-array",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LIST TO ARRAY"})," ( ",(0,r.jsx)(n.em,{children:"liste"})," ; ",(0,r.jsx)(n.em,{children:"tableau"})," {; ",(0,r.jsx)(n.em,{children:"r\xe9fEl\xe9ments"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"liste"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom ou r\xe9f\xe9rence de la liste de laquelle copier les \xe9l\xe9ments du premier niveau"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableau"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tableau dans lequel copier les \xe9l\xe9ments de la liste"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"r\xe9fEl\xe9ments"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments de la liste"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"LIST TO ARRAY"})," cr\xe9e ou remplace le tableau ",(0,r.jsx)(n.em,{children:"tableau"})," avec les \xe9l\xe9ments du premier niveau de la liste ou de l'\xe9num\xe9ration ",(0,r.jsx)(n.em,{children:"liste"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"liste"})," soit un nom d'\xe9num\xe9ration (une cha\xeene) soit une r\xe9f\xe9rence de liste hi\xe9rarchique (",(0,r.jsx)(n.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"RefListe"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous n'avez pas pr\xe9alablement d\xe9fini le tableau comme tableau de type Alpha ou Texte, ",(0,r.jsx)(n.strong,{children:"LIST TO ARRAY"})," cr\xe9e un tableau de type Texte par d\xe9faut."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," En mode compil\xe9, le ",(0,r.jsx)(n.em,{children:"tableau"})," doit avoir \xe9t\xe9 pr\xe9alablement d\xe9fini et ne peut pas \xeatre retyp\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"r\xe9fEl\xe9ments"})," (un tableau de type num\xe9rique) retourne les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments de la liste."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez utiliser ",(0,r.jsx)(n.strong,{children:"LIST TO ARRAY"})," pour construire un tableau bas\xe9 sur les \xe9l\xe9ments de premier niveau d'une liste. Cependant, cette commande ne vous donne pas les moyens de travailler avec les \xe9l\xe9ments des sous-listes. Pour exploiter pleinement les listes hi\xe9rarchiques, il est pr\xe9f\xe9rable d'utiliser les commandes de listes hi\xe9rarchiques, notamment ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/load-list",children:"Load list"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(n.p,{children:["L'exemple suivant recopie les \xe9l\xe9ments de l'\xe9num\xe9ration R\xe9gions dans le tableau ",(0,r.jsx)(n.em,{children:"tabR\xe9gions"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LIST TO ARRAY("R\xe9gions";tabR\xe9gions)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Soit une liste hi\xe9rarchique cr\xe9\xe9e de la mani\xe8re suivante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0MyList2:=New list\n\xa0APPEND TO LIST(myList2;"Ecosse";1)\n\xa0APPEND TO LIST(myList2;"Angleterre";2)\n\xa0APPEND TO LIST(myList2;"Pays de Galles";3)\n\xa0myList1:=New list\n\xa0APPEND TO LIST(myList1;"France";1)\n\xa0APPEND TO LIST(myList1;"Allemagne";2)\n\xa0APPEND TO LIST(myList1;"Espagne";3)\n\xa0APPEND TO LIST(myList1;"Grande-Bretagne";4;MyList2;True)\n\xa0APPEND TO LIST(myList1;"Portugal";5)\n\xa0APPEND TO LIST(myList1;"Belgique";6)\n\xa0APPEND TO LIST(myList1;"Italie";7)\n\xa0APPEND TO LIST(myList1;"Pays-Bas";8)\n\xa0APPEND TO LIST(myList1;"Irlande";9)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Cette liste peut \xeatre repr\xe9sent\xe9e ainsi :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(222913).Z+"",width:"246",height:"242"})}),"\n",(0,r.jsx)(n.p,{children:"Si vous ex\xe9cutez l\u2019instruction :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0LIST TO ARRAY(myList1;$MonTab)\n"})}),"\n",(0,r.jsx)(n.p,{children:"...vous obtenez :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$MonTab{1}="France"\n\xa0$MonTab{2}="Allemagne"\n\xa0$MonTab{3}="Espagne"\n\xa0$MonTab{4}="Grande-Bretagne"\n\xa0$MonTab{5}="Portugal"\n\xa0...\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/array-to-list",children:"ARRAY TO LIST"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/load-list",children:"Load list"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/save-list",children:"SAVE LIST"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"288"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},222913:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);