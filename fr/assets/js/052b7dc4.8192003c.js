"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37914"],{332136:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/array-to-collection","title":"ARRAY TO COLLECTION","description":"ARRAY TO COLLECTION ( collection ; tableau {; nomPropri\xe9t\xe9}{; tableau2 ; nomPropri\xe9t\xe92 ; ... ; tableauN ; nomPropri\xe9t\xe9N} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/array-to-collection.md","sourceDirName":"commands-legacy","slug":"/commands/array-to-collection","permalink":"/docs/fr/commands/array-to-collection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-to-collection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"array-to-collection","title":"ARRAY TO COLLECTION","slug":"/commands/array-to-collection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Collections","permalink":"/docs/fr/category/collections"},"next":{"title":"COLLECTION TO ARRAY","permalink":"/docs/fr/commands/collection-to-array"}}'),s=l("785893"),r=l("250065");let i={id:"array-to-collection",title:"ARRAY TO COLLECTION",slug:"/commands/array-to-collection",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY TO COLLECTION"})," ( ",(0,s.jsx)(n.em,{children:"collection"})," ; ",(0,s.jsx)(n.em,{children:"tableau"})," {; ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"}),"}{; ",(0,s.jsx)(n.em,{children:"tableau2"})," ; ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe92"})," ; ... ; ",(0,s.jsx)(n.em,{children:"tableauN"})," ; ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9N"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"collection"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Collection qui re\xe7oit les donn\xe9es du tableau"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableau"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tableau \xe0 copier vers la collection ; si le param\xe8tre nomPropri\xe9t\xe9 est pass\xe9, sont copi\xe9es les valeurs correspondantes \xe0 la propri\xe9t\xe9 dans la collection"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomPropri\xe9t\xe9"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom de propri\xe9t\xe9 Objet dont les valeurs remplissent les \xe9l\xe9ments du tableau"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"ARRAY TO COLLECTION"})," copie un ou plusieurs ",(0,s.jsx)(n.em,{children:"tableau"}),"(x) dans les \xe9l\xe9ments ou les valeurs ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"})," de ",(0,s.jsx)(n.em,{children:"collection"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Cette commande peut \xeatre utilis\xe9e avec une ",(0,s.jsx)(n.em,{children:"collection"})," qui contient des valeurs ou une ",(0,s.jsx)(n.em,{children:"collection"})," qui contient des objets, dans ce cas le(s) param\xe8tre(s) ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"})," est (sont) obligatoire(s)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si vous omettez le param\xe8tre ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"}),", la commande copie tous les \xe9l\xe9ments du ",(0,s.jsx)(n.em,{children:"tableau"})," vers la ",(0,s.jsx)(n.em,{children:"collection"}),". Si la ",(0,s.jsx)(n.em,{children:"collection"})," n'\xe9tait pas vide, les \xe9l\xe9ments existants sont remplac\xe9s et de nouveaux \xe9l\xe9ments sont ajout\xe9s si la taille du ",(0,s.jsx)(n.em,{children:"tableau"})," est plus grande que la longueur de la ",(0,s.jsx)(n.em,{children:"collection"}),". Apr\xe8s l'ex\xe9cution de cette commande, la longueur de la ",(0,s.jsx)(n.em,{children:"collection"})," est identique \xe0 la taille du ",(0,s.jsx)(n.em,{children:"tableau"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Si vous passez un ou plusieurs param\xe8tres ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"}),"(s), la commande cr\xe9e ou remplace les \xe9l\xe9ments de la ",(0,s.jsx)(n.em,{children:"collection"})," avec des objets. Chaque objet est construit avec une propri\xe9t\xe9 dont le nom est fourni dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"nomPropri\xe9t\xe9"}),", et dont la valeur est l'\xe9l\xe9ment de tableau correspondant. Si la ",(0,s.jsx)(n.em,{children:"collection"})," n'\xe9tait pas vide, les \xe9l\xe9ments existants sont remplac\xe9s et de nouveaux \xe9l\xe9ments sont ajout\xe9s si la taille du ",(0,s.jsx)(n.em,{children:"tableau"})," \xe9tait plus grande que la collection. Apr\xe9s l'ex\xe9cution de la commande, la longueur de la ",(0,s.jsx)(n.em,{children:"collection"})," est identique \xe0 la celle du ",(0,s.jsx)(n.em,{children:"tableau"})," le plus grand."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez copier un tableau texte dans une collection :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $colFruits : Collection\n\xa0$colFruits:=New collection\n\xa0ARRAY TEXT($artFruits;4)\n\xa0$artFruits{1}:="Orange"\n\xa0$artFruits{2}:="Banana"\n\xa0$artFruits{3}:="Apple"\n\xa0$artFruits{4}:="Grape"\n\xa0ARRAY TO COLLECTION($colFruits;$artFruits)\n\xa0\xa0//$colFruits[0]="Orange"\n\xa0\xa0//$colFruits[1]="Banana"\n\xa0\xa0//...\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez copier les valeurs de champs dans une collection d'objets via des tableaux :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $col : Collection\n\xa0$col:=New collection\n\xa0ARRAY TEXT($artCity;0)\n\xa0ARRAY LONGINT($arLZipCode;0)\n\xa0SELECTION TO ARRAY([Customer]City;$artCity)\n\xa0SELECTION TO ARRAY([Customer]Zipcode;$arLZipCode)\n\xa0ARRAY TO COLLECTION($col;$artCity;"cityName";$arLZipCode;"Zip")\n\xa0\xa0//$col[0]={"cityName":"Cleveland","Zip":35049}\n\xa0\xa0//$col[1]={"cityName":"Blountsville","Zip":35031}\n\xa0\xa0//...\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaiter copier un tableau texte dans une collection partag\xe9e :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($at;1)\n\xa0\n\xa0APPEND TO ARRAY($at;"Apple")\n\xa0APPEND TO ARRAY($at;"Orange")\n\xa0APPEND TO ARRAY($at;"Grape")\n\xa0\n\xa0var $sharedCol : Collection\n\xa0$sharedCol:=New shared collection\n\xa0\n\xa0Use($sharedCol)\n\xa0\xa0\xa0\xa0ARRAY TO COLLECTION($sharedCol;$at)\n\xa0End use\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/collection-to-array",children:"COLLECTION TO ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Conversions de type entre les collections et les tableaux 4D"})]}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1563"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return o},a:function(){return i}});var t=l(667294);let s={},r=t.createContext(s);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);