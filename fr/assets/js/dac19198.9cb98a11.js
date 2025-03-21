"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88086"],{535349:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/ob-copy","title":"OB Copy","description":"OB Copy ( objet {; r\xe9soudrePtrs | {; option {; grouperAvec}}} )  : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-copy.md","sourceDirName":"commands-legacy","slug":"/commands/ob-copy","permalink":"/docs/fr/20-R7/commands/ob-copy","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-copy.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-copy","title":"OB Copy","slug":"/commands/ob-copy","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Class","permalink":"/docs/fr/20-R7/commands/ob-class"},"next":{"title":"OB Entries","permalink":"/docs/fr/20-R7/commands/ob-entries"}}'),t=s("785893"),o=s("250065");let a={id:"ob-copy",title:"OB Copy",slug:"/commands/ob-copy",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Exemple 5",id:"exemple-5",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OB Copy"})," ( ",(0,t.jsx)(n.em,{children:"objet"})," {; r\xe9soudrePtrs | {; ",(0,t.jsx)(n.em,{children:"option"})," {; ",(0,t.jsx)(n.em,{children:"grouperAvec"}),"}}} )  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"Object, Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet structur\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"r\xe9soudrePtrs"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Vrai = r\xe9soudre les pointeurs, Faux ou omis = ne pas les r\xe9soudre"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"option"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"ck shared: return a shared object,ck resolve pointers: resolve pointers before copying"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"grouperAvec"}),(0,t.jsx)(n.td,{children:"Collection, Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Collection ou objet partag\xe9(e) \xe0 grouper avec l'objet r\xe9sultant"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Copie de objet"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OB Copy"})," retourne un objet contenant une copie compl\xe8te des propri\xe9t\xe9s, sous-objets et valeurs de ",(0,t.jsx)(n.em,{children:"objet"}),".\nSi ",(0,t.jsx)(n.em,{children:"objet"})," contient des valeurs de type pointeur, par d\xe9faut la copie contient \xe9galement les pointeurs. Vous pouvez cependant r\xe9soudre les pointeurs au moment de la copie : pour cela, passez ",(0,t.jsx)(n.strong,{children:"Vrai"})," dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"r\xe9soudrePtrs"}),". Dans ce cas, chaque pointeur pr\xe9sent comme valeur dans ",(0,t.jsx)(n.em,{children:"objet"})," sera \xe9valu\xe9 au moment de la copie et sa valeur d\xe9point\xe9e sera utilis\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si les propri\xe9t\xe9s de ",(0,t.jsx)(n.em,{children:"objet"})," sont des objets partag\xe9s ou des collections partag\xe9es, elles sont transform\xe9es en objets ou collections standard (non partag\xe9s) dans la copie. Utilisez la deuxi\xe8me syntaxe si vous souhaitez retourner des \xe9l\xe9ments partag\xe9s (voir ci-dessous)."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Deuxi\xe8me syntaxe : ",(0,t.jsx)(n.strong,{children:"OB Copy(objet{; option{; grouperAvec}})"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["S'il est pass\xe9, le param\xe8tre ",(0,t.jsx)(n.em,{children:"option"})," peut contenir l'une des constantes suivantes (ou les deux) :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"option"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ck resolve pointers"}),(0,t.jsx)(n.td,{children:"Si l'objet d'origine contient des valeurs de type pointeur, par d\xe9faut la copie contient \xe9galement les pointeurs. Toutefois, vous pouvez r\xe9soudre les pointeurs au moment de la copie, en passant ck resolve pointers. Dans ce cas, chaque pointeur contenu dans l'objet est \xe9valu\xe9 lors de la copie et sa valeur d\xe9r\xe9f\xe9renc\xe9e est utilis\xe9e."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ck shared"}),(0,t.jsxs)(n.td,{children:["Par d\xe9faut, ",(0,t.jsx)(n.strong,{children:"OB Copy"})," retourne un objet standard (non partag\xe9), m\xeame si la commande s'applique \xe0 un objet partag\xe9. Passez la constante ck shared pour cr\xe9er un objet partag\xe9. Dans ce cas, vous pouvez utiliser le param\xe8tre ",(0,t.jsx)(n.em,{children:"grouperAvec"})," pour associer l'objet partag\xe9 avec un(e) autre collection/objet (voir ci-sessous)."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"grouperAvec"})," vous permet de d\xe9signer une collection ou un objet auquel/\xe0 laquelle l'objet r\xe9sultant sera associ\xe9."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OB Copy"})," peut \xeatre utilis\xe9e avec un objet s\xe9lection d'entit\xe9. Par d\xe9faut, si ck shared est omis, une s\xe9lection d'entit\xe9 ",(0,t.jsx)(n.em,{children:"non partageable"})," est retourn\xe9e. Si ck shared est pass\xe9, une s\xe9lection d'entit\xe9 ",(0,t.jsx)(n.em,{children:"partageable"})," est retourn\xe9e. Dans ce contexte, l'option ",(0,t.jsx)(n.em,{children:"grouperAvec"})," est inutile car une s\xe9lection d'entit\xe9 n'a pas d'i",(0,t.jsx)(n.em,{children:"dentifiant de verrouillage."})]}),"\n",(0,t.jsxs)(n.li,{children:["Le m\xeame principe s'applique aux s\xe9lections d'entit\xe9s stock\xe9es \xe0 l'int\xe9rieur des propri\xe9t\xe9s de ",(0,t.jsx)(n.em,{children:"objet"}),". Cependant, la commande est optimis\xe9e lorsque ck shared est pass\xe9 et qu'une s\xe9lection d'entit\xe9 imbriqu\xe9e est ",(0,t.jsx)(n.em,{children:"partageable"}),": la m\xeame r\xe9f\xe9rence de s\xe9lection d'entit\xe9 est retourn\xe9e dans l'objet r\xe9sultant."]}),"\n",(0,t.jsxs)(n.li,{children:["Les objets datastore, dataclass et entity ne sont pas copiables. Si la commande ",(0,t.jsx)(n.strong,{children:"OB Copy"})," est appel\xe9e avec eux, une valeur Null est retourn\xe9e."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez dupliquer un objet contenant des valeurs simples :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0var $JsonString : Text\n\xa0\n\xa0ARRAY OBJECT($arraySel;0)\n\xa0ALL RECORDS([Product])\n\xa0While(Not(End selection([Product])))\n\xa0\xa0\xa0\xa0OB SET($Object;"id";[Product]ID_Product)\n\xa0\xa0\xa0\xa0OB SET($Object;"Product Name";[Product]Product_Name)\n\xa0\xa0\xa0\xa0OB SET($Object;"Price";[Product]Price)\n\xa0\xa0\xa0\xa0OB SET($Object;"Tax rate";[Product]Tax_rate)\n\xa0\xa0\xa0\xa0$ref_value:=OB Copy($Object)\xa0//copie directe\n\xa0\xa0\xa0\xa0APPEND TO ARRAY($arraySel;$ref_value)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0//le contenu de $ref_value est identique \xe0 celui de $Object\n\xa0\xa0\xa0\xa0NEXT RECORD([Product])\n\xa0End while\n\xa0\xa0\xa0\xa0\xa0//le contenu de $ref_value\n\xa0$JsonString:=JSON Stringify array($arraySel)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Vous dupliquez un objet contenant des pointeurs (premi\xe8re syntaxe) :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0\n\xa0OB SET($ref;"name";->[Company]name)\xa0//objet avec pointeurs\n\xa0OB SET($ref;"country";->[Company]country)\n\xa0ARRAY OBJECT($sel;0)\n\xa0ARRAY OBJECT($sel2;0)\n\xa0\n\xa0ALL RECORDS([Company])\n\xa0\n\xa0While(Not(End selection([Company])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$ref_comp:=OB Copy($ref)\xa0// copie sans \xe9valuation des pointeurs\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0//$ref_comp={"name":"->[Company]name","country":"->[Company]Country"}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$ref_comp2:=OB Copy($ref;True)\xa0//copie avec \xe9valuation des pointeurs\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0//$ref_comp={"name":"4D SAS","country":"France"}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO ARRAY($sel;$ref_comp)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO ARRAY($sel2;$ref_comp2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Company])\n\xa0End while\n\xa0\n\xa0$Object:=JSON Stringify array($sel)\n\xa0$Object2:=JSON Stringify array($sel2)\n\xa0\n\xa0\xa0\xa0\xa0\xa0// $Object = [{"name":"","country":""},{"name":"","country":""},...]\n\xa0\xa0\xa0\xa0\xa0// $Object2 = [{"name":"4D SAS","country":"France"},{"name":"4D, Inc","country":"USA"},{"name":"Catalan","country":"France"}...]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsxs)(n.p,{children:["Nous souhaitons copier l'objet standard (non partag\xe9) ",(0,t.jsx)(n.em,{children:"$"})," ",(0,t.jsx)(n.em,{children:"person"})," dans l'objet partag\xe9 ",(0,t.jsx)(n.em,{children:"$sharedObject."})," Pour ce faire, nous devons cr\xe9er une copie partag\xe9e de l'objet (",(0,t.jsx)(n.em,{children:"$sharedObject)."})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $person;$copy;$sharedObject : Object\n\xa0var $text : Text\n\xa0\n\xa0$text:=Document to text(Get 4D folder(Current resources folder)+"person.txt")\n\xa0$person:=JSON Parse($text)\xa0//$person est un objet standard\n\xa0$sharedObject:=New shared object()\n\xa0$copy:=OB Copy($person;ck shared)\xa0//$copy est un objet partag\xe9\n\xa0\n\xa0\xa0//Il peut alors \xeatre ins\xe9r\xe9 dans $sharedObject\xa0\n\xa0Use($sharedObject)\n\xa0\xa0\xa0\xa0$sharedObject.person:=$copy\n\xa0End use\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"$obj"}),' contient un pointeur (propri\xe9t\xe9 "name") sur le champ "name" de l\'enregistrement courant.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $obj;$objWithPtr;$sharedObjWithPtr : Object\n\xa0$obj:=New object()\n\xa0\n\xa0\xa0//$obj est un objet avec un pointeur\n\xa0OB SET($obj;"name";->[Persons]name)\n\xa0\n\xa0ALL RECORDS([Persons])\n\xa0\xa0//Il existe maintenant un enregistrement courant sur la table [Persons] donc [Persons]name est rempli\n\xa0\xa0//\n\xa0\xa0// Si nous voulons copier $obj comme objet standard avec \xe9valuation des pointeurs\n\xa0\xa0// Nous faisons comme suit :\n\xa0$objWithPtr:=OB Copy($obj;True)\n\xa0\xa0//\n\xa0\xa0// Si nous voulons copier $obj comme objet partag\xe9 avec \xe9valuation des pointeurs\n\xa0\xa0// Nous faisons comme suit :\n\xa0$sharedObjWithPtr:=OB Copy($obj;ck resolve pointers+ck shared)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,t.jsxs)(n.p,{children:["Nous souhaitons copier ",(0,t.jsx)(n.em,{children:"$sharedObj"})," dans ",(0,t.jsx)(n.em,{children:"$sharedColl."})," Etant donn\xe9 qu'ils appartiennent \xe0 diff\xe9rents groupes partag\xe9s, une copie directe pourrait g\xe9n\xe9rer une erreur. Nous devons effectuer une copie de ",(0,t.jsx)(n.em,{children:"$sharedObj"})," et d\xe9signeR ",(0,t.jsx)(n.em,{children:"$sharedColl"})," comme \xe9tant un groupe partag\xe9 de la copie."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $sharedObj;$objCopy : Object\n\xa0var $sharedColl : Collection\n\xa0\n\xa0\xa0//$sharedObj appartient \xe0 un groupe partag\xe9\n\xa0$sharedObj:=New shared object("lastname";"Smith";"address";New shared object("city";"New York"))\n\xa0\xa0//$sharedColl appartient \xe0 un autre groupe partag\xe9\n\xa0$sharedColl:=New shared collection(New shared object("lastname";"Brown"))\n\xa0\n\xa0$objCopy:=OB Copy($sharedObj;ck shared;$sharedColl)\n\xa0\xa0//$objCopy est maintenant dans le m\xeame groupe partag\xe9 que $sharedColl\n\xa0\n\xa0\xa0//$objCopy peut alors \xeatre ins\xe9r\xe9 dans $sharedColl sans erreur\n\xa0Use($sharedColl)\n\xa0\xa0\xa0\xa0$sharedColl.push($objCopy)\n\xa0End use\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/ob-get",children:"OB Get"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Objets partag\xe9s et collections partag\xe9es"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1225"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var r=s(667294);let t={},o=r.createContext(t);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);