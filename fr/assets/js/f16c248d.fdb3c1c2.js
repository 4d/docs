"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["333"],{446903:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/json-parse","title":"JSON Parse","description":"JSON Parse ( cha\xeeneJSON {; type}{; *} ) : any","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/json-parse.md","sourceDirName":"commands-legacy","slug":"/commands/json-parse","permalink":"/docs/fr/20-R7/commands/json-parse","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-parse.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"json-parse","title":"JSON Parse","slug":"/commands/json-parse","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON","permalink":"/docs/fr/20-R7/category/json"},"next":{"title":"JSON PARSE ARRAY","permalink":"/docs/fr/20-R7/commands/json-parse-array"}}'),t=s("785893"),a=s("250065");let l={id:"json-parse",title:"JSON Parse",slug:"/commands/json-parse",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"JSON Parse"})," ( ",(0,t.jsx)(n.em,{children:"cha\xeeneJSON"})," {; ",(0,t.jsx)(n.em,{children:"type"}),"}{; *} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cha\xeeneJSON"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cha\xeene en JSON \xe0 analyser"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Type dans lequel convertir les valeurs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Ajouter la ligne et la position de chaque propri\xe9t\xe9 si la valeur retourn\xe9e est un objet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object, any"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valeurs extraites de la cha\xeene JSON"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"JSON Parse"})," analyse (parse) le contenu d\u2019une cha\xeene format\xe9e en JSON et en extrait des valeurs que vous pouvez stocker dans un champ ou une variable 4D. Cette commande d\xe9s\xe9rialise des donn\xe9es JSON ; elle effectue l\u2019action inverse de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/json-stringify",children:"JSON Stringify"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"cha\xeeneJSON"})," la cha\xeene au format JSON dont vous souhaitez analyser le contenu. Cette cha\xeene doit \xeatre correctement format\xe9e, sinon une erreur de parsing est g\xe9n\xe9r\xe9e. ",(0,t.jsx)(n.strong,{children:"JSON Parse"})," peut donc \xeatre utilis\xe9e pour valider du JSON."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si vous utilisez des pointeurs, vous devez appeler la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/json-stringify",children:"JSON Stringify"})," avant ",(0,t.jsx)(n.strong,{children:"JSON Parse"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, si vous omettez le param\xe8tre ",(0,t.jsx)(n.em,{children:"type"}),", 4D tentera de convertir la valeur obtenue dans le type de la variable ou du champ utilis\xe9 pour stocker le r\xe9sultat (s\u2019il est d\xe9fini). Sinon, 4D tentera de d\xe9duire le type. Vous pouvez \xe9galement forcer l\u2019interpr\xe9tation du type en passant le param\xe8tre ",(0,t.jsx)(n.em,{children:"type"})," : passez une des constantes suivantes du th\xe8me ",(0,t.jsx)(n.em,{children:"Types champs et variables"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is Boolean"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"6"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is collection"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"42"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is date"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is longint"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is object"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"38"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is real"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is text"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is time"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Les valeurs de type num\xe9rique doivent \xeatre incluses dans l'intervalle \xb110.421e\xb110"}),"\n",(0,t.jsx)(n.li,{children:"Dans les valeurs de type texte, tous les caract\xe8res sp\xe9ciaux doivent \xeatre \xe9chapp\xe9s, y compris les guillemets (cf. exemples)"}),"\n",(0,t.jsx)(n.li,{children:'Par d\xe9faut lorsque vous utilisez la constante Is date, la commande consid\xe8re que la cha\xeene date contient une heure locale et non GMT. Vous pouvez modifier ce fonctionnement \xe0 l\'aide du s\xe9lecteur Dates inside objects de la commande [#cmd id="642"/].'}),"\n",(0,t.jsxs)(n.li,{children:['A compter de 4D v16 R6, si le param\xe9trage courant de stockage des dates "type date", les cha\xeenes date JSON au format "YYYY-MM-DD" sont automatiquement retourn\xe9es sous forme de valeurs de type date par la commande ',(0,t.jsx)(n.strong,{children:"JSON Parse"}),". Pour plus d'informations sur ce param\xe9trage, veuillez vous reporter \xe0 l'option \"Utiliser le type date au lieu du format date ISO dans les objets\" dans la ",(0,t.jsx)(n.em,{children:"Page Compatibilit\xe9"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Une valeur de type heure peut \xeatre retourn\xe9e \xe0 partir d'un nombre dans une cha\xeene. Par d\xe9faut, 4D consid\xe8re que la valeur est un nombre de secondes."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"})," et si le param\xe8tre ",(0,t.jsx)(n.em,{children:"cha\xeeneJSON"})," repr\xe9sente un objet, l'objet retourn\xe9 contiend une propri\xe9t\xe9 suppl\xe9mentaire nomm\xe9e ",(0,t.jsx)(n.em,{children:"__symbols"})," qui fournit le chemin, l'emplacement de la ligne et la position dans la ligne de chaque propri\xe9t\xe9 et sous-propri\xe9t\xe9 de l'objet. Cette information est utile pour le d\xe9bogage. La structure de la propri\xe9t\xe9 ",(0,t.jsx)(n.em,{children:"__symbols"})," est la suivante :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"__symbols:{//description de l'objet\n\xa0\xa0 myAtt.mySubAtt...:{ //chemin de la propri\xe9t\xe9\n\xa0\xa0\xa0\xa0\xa0 line:10, //num\xe9ro de la ligne de la propri\xe9t\xe9\n\xa0\xa0\xa0\xa0\xa0 offset:35 //position de la propri\xe9t\xe9 \xe0 partir du d\xe9but de la ligne\n\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0 }\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Le param\xe8tre ",(0,t.jsx)(n.em,{children:"*"})," est ignor\xe9 si la valeur retourn\xe9e n'est pas de type objet."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Exemples de conversions simples :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $r : Real\n\xa0$r:=JSON Parse("42.17")\xa0//$r = 42,17 (r\xe9el)\n\xa0\n\xa0var $el : Integer\n\xa0$el:=JSON Parse("120.13";Is longint)\xa0//$el=120\n\xa0\n\xa0var $t : Text\n\xa0$t:=JSON Parse("\\"Ann\xe9e 42\\"";Is text)\xa0//$t="Ann\xe9e 42" (texte)\n\xa0\n\xa0var $o : Object\n\xa0$o:=JSON Parse("{\\"name\\":\\"jean\\"}")\n\xa0\xa0\xa0\xa0\xa0// $o = {"name":"jean"} (objet 4D)\n\xa0\n\xa0var $b : Boolean\n\xa0$b:=JSON Parse("{\\"manager\\":true}";Is Boolean)\xa0//$b=vrai\n\xa0\n\xa0var $h : Time\n\xa0$h:=JSON Parse("5120";Is time)\xa0//$h=01:25:20\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Exemples de conversions de donn\xe9es de type date :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$test:=JSON Parse("\\"1990-12-25T12:00:00Z\\"")\n\xa0\xa0\xa0\xa0\xa0// $test=1990-12-25T12:00:000Z\n\xa0var $date;$date2;$date3 : Date\n\xa0$date:=JSON Parse("\\"2008-01-01T12:00:000Z\\"";Is date)\n\xa0\xa0//$date=01/01/08\n\xa0$date2:=JSON Parse("\\"2017-07-13T23:00:00.000Z\\"";Is date)\n\xa0\xa0//$date2=14/07/17 (fuseau horaire Paris)\n\xa0SET DATABASE PARAMETER(Dates dans objets;String type without time zone)\n\xa0$date3:=JSON Parse("\\"2017-07-13T23:00:00.000Z\\"";Is date)\n\xa0\xa0//$date3=13/07/17\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:'Si le param\xe9trage courant de stockage de date est "type date", vous pouvez \xe9crire :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0var $json : Text\n\xa0var $birthday : Date\n\xa0\n\xa0$json:="{\\"name\\":\\"Marcus\\",\\"birthday\\":\\"2017-10-16\\"}"\n\xa0$o:=JSON Parse($json)\n\xa0$birthday:=$o.birthday\n\xa0\xa0//$birthday=16/10/17\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Pour plus d'informations sur ce param\xe9trage, reportez-vous \xe0 l'option \"Utiliser le type date au lieu du format date ISO dans les objets\" dans le ",(0,t.jsx)(n.em,{children:"Page Compatibilit\xe9"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsxs)(n.p,{children:["Cet exemple montre l\u2019utilisation conjointe des commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/json-stringify",children:"JSON Stringify"})," et ",(0,t.jsx)(n.strong,{children:"JSON Parse"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $JSONContact : Text\n\xa0var $Contact;$Contact2 : Object\n\xa0$Contact:=New object("name";"Monroe";"firstname";"Alan")\n\xa0\n\xa0\xa0// JSON Stringify : conversion d\u2019un objet JSON en cha\xeene JSON\n\xa0$JSONContact:=JSON Stringify($Contact)\n\xa0\n\xa0\xa0// JSON Parse : conversion d\u2019une cha\xeene JSON en nouvel objet\n\xa0$Contact2:=JSON Parse($JSONContact)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez cr\xe9er une collection 4D \xe0 partir d'un tableau JSON :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $myCol : Collection\n\xa0$myCol:=JSON Parse("[\\"Lundi\\",10,\\"Mardi\\",11,\\"Mercredi\\",12,false]")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez analyser la cha\xeene suivante et obtenir le chemin et la position de chaque propri\xe9t\xe9 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "alpha": 4552,\n\xa0\xa0\xa0 "beta": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "echo": 45,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delta": "text1" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "echo": 52,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "golf": "text2" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez \xe9crire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $obInfo : Object\n\xa0$obInfo=JSON Parse("json_string";Is object;*)\xa0//* pour ajouter la propri\xe9t\xe9 __symbols\n\xa0\xa0//dans l\'objet $obInfo retourn\xe9\n'})}),"\n",(0,t.jsxs)(n.p,{children:["L'objet ",(0,t.jsx)(n.em,{children:"$obInfo"})," contient :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{alpha:4552,\nbeta:[{echo:45,delta:text1},{echo:52,golf:text2}],\n__symbols:{alpha:{line:2,offset:4},\nbeta:{line:3,offset:4},\nbeta[0].echo:{line:5,offset:12},\nbeta[0].delta:{line:6,offset:12},\nbeta[1].echo:{line:9,offset:12},\nbeta[1].golf:{line:10,offset:12}}}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/json-parse-array",children:"JSON PARSE ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/json-stringify",children:"JSON Stringify"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/json-validate",children:"JSON Validate"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Types champs et variables"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1218"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let t={},a=r.createContext(t);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);