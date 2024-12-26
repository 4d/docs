"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77492"],{795167:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>l,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/get-list-item-parameter-arrays","title":"GET LIST ITEM PARAMETER ARRAYS","description":"GET LIST ITEM PARAMETER ARRAYS ( { ;} liste ; refEl\xe9ment |  ; tabS\xe9lecteurs {; tabValeurs} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-list-item-parameter-arrays.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-parameter-arrays","permalink":"/docs/fr/commands/get-list-item-parameter-arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-parameter-arrays.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-list-item-parameter-arrays","title":"GET LIST ITEM PARAMETER ARRAYS","slug":"/commands/get-list-item-parameter-arrays","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM PARAMETER","permalink":"/docs/fr/commands/get-list-item-parameter"},"next":{"title":"GET LIST ITEM PROPERTIES","permalink":"/docs/fr/commands/get-list-item-properties"}}'),r=n("785893"),a=n("250065");let i={id:"get-list-item-parameter-arrays",title:"GET LIST ITEM PARAMETER ARRAYS",slug:"/commands/get-list-item-parameter-arrays",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"GET LIST ITEM PARAMETER ARRAYS"})," ( {* ;} ",(0,r.jsx)(s.em,{children:"liste"})," ; refEl\xe9ment | * ; ",(0,r.jsx)(s.em,{children:"tabS\xe9lecteurs"})," {; ",(0,r.jsx)(s.em,{children:"tabValeurs"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Op\xe9rateur"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Si sp\xe9cifi\xe9, liste est un nom d\u2019objet (cha\xeene)Si omis, liste est un num\xe9ro de r\xe9f\xe9rence de liste"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"liste"}),(0,r.jsx)(s.td,{children:"Integer, Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de liste (si * omis) ouNom d'objet de type liste (si * pass\xe9)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"refEl\xe9ment | *"}),(0,r.jsx)(s.td,{children:"Entier long, Op\xe9rateur"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence d\u2019\xe9l\xe9ment ou0 pour le dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste ou* pour l\u2019\xe9l\xe9ment courant de la liste"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabS\xe9lecteurs"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Tableau des noms de param\xe8tres"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabValeurs"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Tableau des valeurs de param\xe8tres"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"GET LIST ITEM PARAMETER ARRAYS"})," permet de r\xe9cup\xe9rer en un seul appel l\u2019ensemble des param\xe8tres (ainsi que, optionnellement, leurs valeurs) associ\xe9s \xe0 l\u2019\xe9l\xe9ment ",(0,r.jsx)(s.em,{children:"refEl\xe9ment"})," de la liste hi\xe9rarchique dont vous avez pass\xe9 la r\xe9f\xe9rence ou le nom d\u2019objet dans le param\xe8tre ",(0,r.jsx)(s.em,{children:"liste"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Les param\xe8tres associ\xe9s aux \xe9l\xe9ments permettent de stocker des informations suppl\xe9mentaires sur chaque \xe9l\xe9ment. Ils sont d\xe9finis \xe0 l\u2019aide de la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Si vous passez le premier param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(s.em,{children:"liste"})," est un nom d\u2019objet (cha\xeene) correspondant \xe0 une repr\xe9sentation de liste dans le formulaire. Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(s.em,{children:"liste"})," est une r\xe9f\xe9rence de liste hi\xe9rarchique (",(0,r.jsx)(s.a,{href:"#",title:"Expression de type Entier long identifiant de fa\xe7on unique une liste hi\xe9rarchique",children:"RefListe"}),"). Si vous utilisez une seule repr\xe9sentation de liste ou travaillez avec les \xe9l\xe9ments structurels (le second ",(0,r.jsx)(s.em,{children:"*"})," est omis), vous pouvez utiliser indiff\xe9remment l\u2019une ou l\u2019autre syntaxe. En revanche, si vous utilisez plusieurs repr\xe9sentations d\u2019une m\xeame liste et travaillez avec l\u2019\xe9l\xe9ment courant (le second ",(0,r.jsx)(s.em,{children:"*"})," est pass\xe9), la syntaxe bas\xe9e sur le nom d\u2019objet est requise car chaque repr\xe9sentation peut disposer de son propre \xe9l\xe9ment courant."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"GET LIST ITEM PARAMETER ARRAYS"})," retourne les param\xe8tres d\xe9finis pour l\u2019\xe9l\xe9ment ",(0,r.jsx)(s.em,{children:"r\xe9fEl\xe9ment"})," dans le tableau texte ",(0,r.jsx)(s.em,{children:"tabS\xe9lecteurs"}),". Si le tableau texte ",(0,r.jsx)(s.em,{children:"tabValeurs"})," est pass\xe9, la commande retourne les valeurs associ\xe9es \xe0 chaque param\xe8tre dans ce tableau."]}),"\n",(0,r.jsxs)(s.p,{children:["Le tableau ",(0,r.jsx)(s.em,{children:"tabValeur"}),' doit \xeatre de type texte. Si vous avez associ\xe9 des valeurs non-textuelles (type num\xe9rique ou bool\xe9en), elles sont converties en cha\xeenes (vrai="1", faux="0").']}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.p,{children:"Soit la liste hi\xe9rarchique suivante :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0<>HL:=New list\n\xa0$ID:=30\n\xa0APPEND TO LIST(<>HL;"Martin";$ID)\n\xa0\xa0\xa0\xa0\xa0//5 param\xe8tres\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Firstname";"Phil")\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Birthday";"15/02/1978")\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Male";True)\xa0\xa0\xa0//bool\xe9en\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Age";32)\xa0\xa0\xa0//num\xe9rique\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"City";"Nantes")\n'})}),"\n",(0,r.jsxs)(s.p,{children:['Pour plus de simplicit\xe9, la liste a \xe9t\xe9 associ\xe9e \xe0 un objet liste de m\xeame nom ("<>HL").',(0,r.jsx)(s.br,{}),'\nLorsque l\u2019\xe9l\xe9ment "Martin" est s\xe9lectionn\xe9 dans la liste, on peut lire ses param\xe8tres en ex\xe9cutant le code suivant :']}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0ARRAY TEXT(tNomsParams;0)\n\xa0GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";*;tNomsParams)\n\xa0\xa0\xa0\xa0\xa0// tNomsParams{1} contient "Firstname"\n\xa0\xa0\xa0\xa0\xa0// tNomsParams{2} contient "Birthday"\n\xa0\xa0\xa0\xa0\xa0// tNomsParams{3} contient "Male"\n\xa0\xa0\xa0\xa0\xa0// tNomsParams{4} contient "Age"\n\xa0\xa0\xa0\xa0\xa0// tNomsParams{5} contient "City"\n'})}),"\n",(0,r.jsx)(s.p,{children:"Si on souhaite r\xe9cup\xe9rer \xe9galement les valeurs des param\xe8tres, on peut \xe9crire :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0ARRAY TEXT(tNomsParams;0)\n\xa0ARRAY TEXT(tValeursParams;0)\n\xa0GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";*;tNomsParams;tValeursParams)\n\xa0\xa0\xa0\xa0\xa0// tValeursParams{1} contient "Phil"\n\xa0\xa0\xa0\xa0\xa0// tValeursParams{2} contient "15/02/1978"\n\xa0\xa0\xa0\xa0\xa0// tValeursParams{3} contient "1"\n\xa0\xa0\xa0\xa0\xa0// tValeursParams{4} contient "32"\n\xa0\xa0\xa0\xa0\xa0// tValeursParams{5} contient "Nantes"\n'})}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})}),"\n",(0,r.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"1195"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return i}});var t=n(667294);let r={},a=t.createContext(r);function i(e){let s=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);