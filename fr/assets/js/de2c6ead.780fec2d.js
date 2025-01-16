"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57619"],{790670:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/json-stringify","title":"JSON Stringify","description":"JSON Stringify ( valeur {; *} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/json-stringify.md","sourceDirName":"commands-legacy","slug":"/commands/json-stringify","permalink":"/docs/fr/commands/json-stringify","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-stringify.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"json-stringify","title":"JSON Stringify","slug":"/commands/json-stringify","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON Resolve pointers","permalink":"/docs/fr/commands/json-resolve-pointers"},"next":{"title":"JSON Stringify array","permalink":"/docs/fr/commands/json-stringify-array"}}'),r=s("785893"),i=s("250065");let a={id:"json-stringify",title:"JSON Stringify",slug:"/commands/json-stringify",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Exemple 7",id:"exemple-7",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JSON Stringify"})," ( ",(0,r.jsx)(n.em,{children:"valeur"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeur"}),(0,r.jsx)(n.td,{children:"Object, any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Donn\xe9es \xe0 convertir en cha\xeene JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Am\xe9liorer la pr\xe9sentation"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Cha\xeene contenant le texte JSON s\xe9rialis\xe9"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"JSON Stringify"})," convertit le param\xe8tre ",(0,r.jsx)(n.em,{children:"valeur"})," en une cha\xeene JSON. Cette commande effectue l\u2019action inverse de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/json-parse",children:"JSON Parse"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"valeur"})," les donn\xe9es \xe0 s\xe9rialiser. Elles peuvent \xeatre exprim\xe9es sous forme scalaire (cha\xeene, num\xe9rique, date ou heure) ou via un objet 4D ou une collection."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"}),' Les dates 4D seront converties au format "yyyy-mm-dd" ou "YYYY-MM-DDThh:mm:sssZ" en fonction du param\xe9trage courant de la base (voir l\'option "Utiliser le type date au lieu du format date ISO dans les objets" dans la ',(0,r.jsx)(n.em,{children:"Page Compatibilit\xe9"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans le cas d\u2019un objet ou d'une collection, vous pouvez inclure tout type de valeurs (cf. paragraphe ",(0,r.jsx)(n.em,{children:"Types de donn\xe9es JSON"}),"), en respectant les r\xe8gles suivantes du JSON :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"les valeurs de type cha\xeene doivent \xeatre encadr\xe9es de guillemets. Tous les caract\xe8res Unicode peuvent \xeatre utilis\xe9s \xe0 l\u2019exception des caract\xe8res sp\xe9ciaux, devant \xeatre pr\xe9c\xe9d\xe9s par une barre oblique invers\xe9e."}),"\n",(0,r.jsx)(n.li,{children:"num\xe9rique : intervalle \xb110.421e\xb110"}),"\n",(0,r.jsx)(n.li,{children:'bool\xe9en : cha\xeene "true" ou "false"'}),"\n",(0,r.jsx)(n.li,{children:'date : type texte au format "aaaa-mm-jj" ou "\\"AAAA-MM-JJTHH:mm:ssZ"\\", en fonction des param\xe8tres courants de la base (voir ci-dessus)'}),"\n",(0,r.jsx)(n.li,{children:"heure : type r\xe9el (nombre de secondes par d\xe9faut)"}),"\n",(0,r.jsxs)(n.li,{children:["pointeur vers un champ, une variable ou un tableau (le pointeur est \xe9valu\xe9 au moment du stringify)",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Notes :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Les attributs image sont convertis en cha\xeene "[object Picture]"'}),"\n",(0,r.jsx)(n.li,{children:"les pointeurs vers des champs, variables ou tableaux sont \xe9valu\xe9s au moment du stringify."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"})," afin d\u2019inclure des caract\xe8res de formatage dans la cha\xeene r\xe9sultante. Cette option permet d\u2019am\xe9liorer la pr\xe9sentation des donn\xe9es JSON (",(0,r.jsx)(n.em,{children:"pretty formatting"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Conversions de valeurs scalaires :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vc:=JSON Stringify("Saperlipopette")\xa0// "Saperlipopette"\n\xa0$vel:=JSON Stringify(120)\xa0// "120"\n\xa0\n\xa0$vh:=JSON Stringify(?20:00:00?)\xa0// "72000" secondes depuis minuit\n\xa0SET DATABASE PARAMETER(Heures dans objets;Heures en milliseconds)\n\xa0$vhms:=JSON Stringify(?20:00:00?)\xa0// "72000000" millisecondes depuis minuit\n\xa0\n\xa0$vd:=JSON Stringify(!28/08/2013!)\xa0//\xa0 "2013-08-27T22:00:000Z" (fuseau horaire Paris)\n\xa0SET DATABASE PARAMETER(Dates dans objets;String type without time zone)\n\xa0$vdd:=JSON Stringify(!28/08/2013!)\xa0// "2013-08-28T00:00:00.000Z"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Conversion d\u2019une cha\xeene contenant des caract\xe8res sp\xe9ciaux :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$s:=JSON Stringify("{\\"name\\":\\"john\\"}")\n\xa0\xa0\xa0\xa0\xa0// $s="{\\\\"name\\\\":\\\\"john\\\\"}"\n\xa0$p:=JSON Parse($s)\n\xa0\xa0\xa0\xa0\xa0// $p={"name":"john"}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsxs)(n.p,{children:["Exemples de s\xe9rialisation d\u2019un objet 4D avec et sans le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $MyContact : Text\n\xa0var $MyPContact : Text\n\xa0var $Contact;$Children : Object\n\xa0OB SET($Contact;"lastname";"Monroe";"firstname";"Alan")\n\xa0OB SET($Children;"firstname";"Jim";"age";"12")\n\xa0OB SET($Contact;"children";$Children)\n\xa0$MyContact:=JSON Stringify($Contact)\n\xa0$MyPContact:=JSON Stringify($Contact;*)\n\xa0\xa0\xa0\xa0\xa0//$MyContact= {"lastname":"Monroe","firstname":"Alan","children":{"firstname":"John","age":"12"}}\n\xa0\xa0\xa0\xa0\xa0//$MyPContact= {\\n\\t"lastname": "Monroe",\\n\\t"firstname": "Alan",\\n\\t"children": {\\n\\t\\t"firstname": "John",\\n\\t\\t"age": "12"\\n\\t}\\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"L\u2019int\xe9r\xeat de ce formatage appara\xeet clairement lorsque le JSON est repr\xe9sent\xe9 dans une zone Web :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Formatage standard :",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{src:s(159777).Z+"",width:"424",height:"30"})]}),"\n",(0,r.jsxs)(n.li,{children:["Formatage am\xe9lior\xe9 :",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{src:s(664726).Z+"",width:"234",height:"123"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,r.jsx)(n.p,{children:"Exemple utilisant un pointeur vers une variable :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $MaVarTest : Object\n\xa0var $name ;$jsonstring  : Text\n\xa0OB SET($MaVarTest;"name";->$name)\xa0// d\xe9finition de l\u2019objet\n\xa0\xa0\xa0\xa0\xa0// $MaVarTest = {"name":"->$name"}\n\xa0\n\xa0$jsonstring :=JSON Stringify($MaVarTest)\n\xa0\xa0\xa0\xa0\xa0// $jsonstring ="{"name":""}"\n\xa0\xa0\xa0\xa0\xa0//...\n\xa0\n\xa0$name:="Smith"\n\xa0$jsonstring :=JSON Stringify($MaVarTest)\xa0\n\xa0\xa0\xa0\xa0\xa0//$jsonstring = "{"name" : "Smith"}"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,r.jsx)(n.p,{children:"S\xe9rialisation d\u2019un objet 4D :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $varjsonTextserialized : Text\n\xa0var $Contact : Object\n\xa0OB SET($Contact;"firstname";"Alan")\n\xa0OB SET($Contact;"lastname";"Monroe")\n\xa0OB SET($Contact;"age";40)\n\xa0OB SET($Contact;"phone";"[555-0100,555-0120]")\n\xa0\n\xa0$varjsonTextserialized:=JSON Stringify($Contact)\n\xa0\n\xa0\xa0\xa0\xa0\xa0// $varjsonTextserialized = "{"lastname":"Monroe","phone":"[555-0100,\n\xa0\xa0\xa0\xa0\xa0// 555-0120]","age":40,"firstname":"Alan"}"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,r.jsx)(n.p,{children:"S\xe9rialisation d'un objet 4D contenant une valeur de date (Fuseau horaire de Paris). La cha\xeene r\xe9sultante d\xe9pend du param\xe9trage courant de la base."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $varjsonTextserialized : Text\n\xa0var $Contact : Object\n\xa0OB SET($Contact;"name";"Smith";"birthday";!22/10/1975!)\n\xa0$varjsonTextserialized:=JSON Stringify($Contact)\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si l'option \"Utiliser le type date au lieu du format date ISO dans les objets\" n'est pas coch\xe9e :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"name":"Smith","birthday":"1975-10-21T22:00:00.000Z"  \n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Si l\'option "Utiliser le type date au lieu du format date ISO dans les objets" est coch\xe9e :'}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"name":"Smith","birthday":"1975-10-22"  \n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Pour plus d'informations sur cette option, reportez-vous \xe0 la ",(0,r.jsx)(n.em,{children:"Page Compatibilit\xe9"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-7",children:"Exemple 7"}),"\n",(0,r.jsx)(n.p,{children:"Conversion d'une collection (fuseau horaire Paris). La cha\xeene r\xe9sultante d\xe9pend du param\xe9trage courant de la base."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $myCol : Collection\n\xa0var $myTxtCol : Text\n\xa0$myCol:=New collection(33;"mike";!28/08/2017!;False)\n\xa0$myTxtCol:=JSON Stringify($myCol)\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si l'option \"Utiliser le type date au lieu du format date ISO dans les objets\" n'est pas coch\xe9e :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'$myTxtCol="[33,"mike","2017-08-27T22:00:00.000Z",false]"  \n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Si l\'option "Utiliser le type date au lieu du format date ISO dans les objets" est coch\xe9e :'}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'$myTxtCol="[33,"mike","2017-08-28",false]"  \n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Pour plus d'informations sur cette option, reportez-vous \xe0 la ",(0,r.jsx)(n.em,{children:"Page Compatibilit\xe9"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/json-parse",children:"JSON Parse"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/json-stringify-array",children:"JSON Stringify array"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1217"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},664726:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},159777:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var t=s(667294);let r={},i=t.createContext(r);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);