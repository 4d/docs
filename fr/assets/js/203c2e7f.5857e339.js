"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67328"],{236364:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/collection-to-array","title":"COLLECTION TO ARRAY","description":"COLLECTION TO ARRAY ( collection ; tableau {; nomPropri\xe9t\xe9}{; tableau2 ; nomPropri\xe9t\xe92 ; ... ; tableauN ; nomPropri\xe9t\xe9N} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/collection-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/collection-to-array","permalink":"/docs/fr/commands/collection-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcollection-to-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"collection-to-array","title":"COLLECTION TO ARRAY","slug":"/commands/collection-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TO COLLECTION","permalink":"/docs/fr/commands/array-to-collection"},"next":{"title":"New collection","permalink":"/docs/fr/commands/new-collection"}}'),s=l("785893"),r=l("250065");let o={id:"collection-to-array",title:"COLLECTION TO ARRAY",slug:"/commands/collection-to-array",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"COLLECTION TO ARRAY"})," ( ",(0,s.jsx)(n.em,{children:"collection"})," ; ",(0,s.jsx)(n.em,{children:"tableau"})," {; ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"}),"}{; ",(0,s.jsx)(n.em,{children:"tableau2"})," ; ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe92"})," ; ... ; ",(0,s.jsx)(n.em,{children:"tableauN"})," ; ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9N"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"collection"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Collection \xe0 copier dans un ou des tableau(x)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableau"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Tableau re\xe7evant les \xe9l\xe9ments de la collection ; si le param\xe8tre nomPropri\xe9t\xe9 est pass\xe9, le tableau re\xe7oit les valeurs correspondantes \xe0 nomPropri\xe9t\xe9 dans la collection."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomPropri\xe9t\xe9"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:'Nom de la propri\xe9t\xe9 de l\'objet dont les valeurs sont \xe0 copier dans le tableau ("" pour tous les \xe9l\xe9ments)'})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"COLLECTION TO ARRAY"})," remplit un ou plusieurs ",(0,s.jsx)(n.em,{children:"tableau"}),"(x) avec les \xe9l\xe9ments ou les valeurs ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"})," de la ",(0,s.jsx)(n.em,{children:"collection"})," dans le ou les ",(0,s.jsx)(n.em,{children:"tableau"}),"(x)."]}),"\n",(0,s.jsxs)(n.p,{children:["Cette commande peut \xeatre utilis\xe9e avec une ",(0,s.jsx)(n.em,{children:"collection"})," qui contient des valeurs ou une ",(0,s.jsx)(n.em,{children:"collection"})," qui contient des objets, dans ce cas le ou les param\xe8tre(s) ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"})," est (sont) obligatoire(s)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si vous omettez le param\xe8tre ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"}),", la commande copie tous les \xe9l\xe9ments de la ",(0,s.jsx)(n.em,{children:"collection"})," dans le ",(0,s.jsx)(n.em,{children:"tableau"}),". Apr\xe8s l'ex\xe9cution de la commande, la taille du ",(0,s.jsx)(n.em,{children:"tableau"})," est identique \xe0 la longueur de la ",(0,s.jsx)(n.em,{children:"collection"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Si vous passez un ou plusieurs param\xe8tre(s ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"}),", ",(0,s.jsx)(n.em,{children:"collection"})," doit \xeatre une collection d'objets (les autres \xe9l\xe9ments sont ignor\xe9s). Dans ce cas, chaque param\xe8tre ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"})," indique le nom d'une propri\xe9t\xe9 dans chaque objet de la collection dont vous voulez copier la valeur dans le ",(0,s.jsx)(n.em,{children:"tableau"})," correspondant. Vous pouvez passer toutes les paires ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"})," /",(0,s.jsx)(n.em,{children:"tableau"})," que vous voulez, en m\xe9langeant les types de tableau. Apr\xe8s l'ex\xe9cution de la commande, chaque taille de tableau est identique \xe0 la longueur de la collection."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Dans tous les cas, 4D convertit les \xe9l\xe9ments de la collection ou les valeurs selon le type du ",(0,s.jsx)(n.em,{children:"tableau"})," (si n\xe9cessaire). Les r\xe8gles de conversion sont d\xe9taill\xe9es dans la page ",(0,s.jsx)(n.em,{children:"Conversions de type entre les collections et les tableaux 4D"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez copier une collection de cha\xeenes dans un tableau texte :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $fruits : Collection\n\xa0$fruits:=New collection("Orange";"Banana";"Apple";"Grape")\n\xa0ARRAY TEXT($artFruits;0)\n\xa0COLLECTION TO ARRAY($fruits;$artFruits)\n\xa0\xa0//$artFruits{1}="Orange"\n\xa0\xa0//$artFruits{2}="Banana"\n\xa0\xa0//...\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"Vous voulez copier diff\xe9rentes valeurs de propri\xe9t\xe9 d'une collection d'objets dans diff\xe9rents tableaux :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $col : Collection\n\xa0$col:=New collection\n\xa0ARRAY TEXT($city;0)\n\xa0ARRAY LONGINT($zipCode;0)\n\xa0$col.push(New object("name";"Cleveland";"zc";35049))\n\xa0$col.push(New object("name";"Blountsville";"zc";35031))\n\xa0$col.push(New object("name";"Adger";"zc";35006))\n\xa0$col.push(New object("name";"Clanton";"zc";35046))\n\xa0$col.push(New object("name";"Shelby";"zc";35143))\n\xa0\n\xa0COLLECTION TO ARRAY($col;$city;"name";$zipCode;"zc")\n\xa0\xa0//$city{1}="Cleveland", $zipCode{1}=35049\n\xa0\xa0//$city{2}="Blountsville", $zipCode{2}=35031\n\xa0\xa0//...\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/array-to-collection",children:"ARRAY TO COLLECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Conversions de type entre les collections et les tableaux 4D"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1562"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return o}});var t=l(667294);let s={},r=t.createContext(s);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);