"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85087"],{300356:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/ob-set","title":"OB SET","description":"OB SET ( objet ; propri\xe9t\xe9 ; valeur {; propri\xe9t\xe92 ; valeur2 ; ... ; propri\xe9t\xe9N ; valeurN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/ob-set.md","sourceDirName":"commands-legacy","slug":"/commands/ob-set","permalink":"/docs/fr/commands/ob-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-set.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-set","title":"OB SET","slug":"/commands/ob-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB REMOVE","permalink":"/docs/fr/commands/ob-remove"},"next":{"title":"OB SET ARRAY","permalink":"/docs/fr/commands/ob-set-array"}}'),t=r("785893"),l=r("250065");let i={id:"ob-set",title:"OB SET",slug:"/commands/ob-set",displayed_sidebar:"docs"},o=void 0,a={},d=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Exemple 7",id:"exemple-7",level:4},{value:"Exemple 8",id:"exemple-8",level:4},{value:"Exemple 9",id:"exemple-9",level:4},{value:"Exemple 10",id:"exemple-10",level:4},{value:"Exemple 11",id:"exemple-11",level:4},{value:"Exemple 12",id:"exemple-12",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OB SET"})," ( ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," ; ",(0,t.jsx)(n.em,{children:"valeur"})," {; ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe92"})," ; ",(0,t.jsx)(n.em,{children:"valeur2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9N"})," ; ",(0,t.jsx)(n.em,{children:"valeurN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"Object, Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet structur\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de la propri\xe9t\xe9 \xe0 d\xe9finir"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valeur"}),(0,t.jsx)(n.td,{children:"Expression"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nouvelle valeur de la propri\xe9t\xe9"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OB SET"})," permet de cr\xe9er ou de modifier une ou plusieurs paires propri\xe9t\xe9/valeur dans l\u2019objet de langage d\xe9sign\xe9 par le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"}),".doit avoir \xe9t\xe9 d\xe9fini via la commande ",(0,t.jsx)(n.em,{children:"C_OBJECT"})," ou d\xe9signer un champ objet 4D."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cette commande prend en charge les d\xe9finitions d'attributs dans les ",(0,t.jsx)(n.em,{children:"objets"})," 4D Write Pro, comme la commande ",(0,t.jsx)(n.em,{children:"WP SET ATTRIBUTES"})," (cf. exemple 11). Toutefois, \xe0 la diff\xe9rence de ",(0,t.jsx)(n.em,{children:"WP SET ATTRIBUTES"}),", ",(0,t.jsx)(n.strong,{children:"OB SET"})," ne permet pas de manipuler directement une variable ou un champ image comme valeur d'attribut."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," le libell\xe9 de la propri\xe9t\xe9 \xe0 cr\xe9er ou \xe0 modifier. Si la propri\xe9t\xe9 existe d\xe9j\xe0 dans ",(0,t.jsx)(n.em,{children:"objet"}),", sa valeur sera mise \xe0 jour. Si elle n\u2019existe pas, elle est cr\xe9\xe9e.",(0,t.jsx)(n.br,{}),"\nAttention, le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," tient compte des majuscules/minuscules."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"valeur"})," la valeur de la propri\xe9t\xe9 \xe0 d\xe9finir. Plusieurs types de donn\xe9es sont pris en charge. A noter que :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["si vous passez un pointeur, il est conserv\xe9 tel quel, il est \xe9valu\xe9 \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/json-stringify",children:"JSON Stringify"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["les dates sont stock\xe9es au format \"YYYY-MM-DDTHH:mm:ss.SSSZ\". Lors de la conversion d'une date 4D en texte avant stockage dans l'objet, par d\xe9faut le programme tient compte du fuseau horaire local. Vous pouvez modifier ce fonctionnement \xe0 l'aide du s\xe9lecteur JSON use local time de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["si vous passez une heure, elle est stock\xe9e sous la forme d'un nombre de millisecondes (r\xe9el) dans ",(0,t.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"si vous passez un objet de langage, la commande utilise la r\xe9f\xe9rence de l\u2019objet et non une copie."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Cr\xe9ation d\u2019un objet et ajout d\u2019une propri\xe9t\xe9 de type texte :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0OB SET($Object ;"pr\xe9nom";"John";"nom";"Smith")\n\xa0\xa0\xa0\xa0\xa0//$Object = {"pr\xe9nom":"John","nom":"Smith"}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Cr\xe9ation d\u2019un objet et ajout d\u2019une propri\xe9t\xe9 de type bool\xe9en :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0OB SET($Object ;"nom";"smith";"age";42;"client";True)\n\xa0\xa0\xa0\xa0\xa0//$Object = {"nom":"smith","age":42,"client":true}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Modification d\u2019une propri\xe9t\xe9 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0\xa0\xa0\xa0//$Object = {"pr\xe9nom":"John","nom":"Smith"}\n\xa0OB SET($Object ;"pr\xe9nom";"Paul")\n\xa0\xa0\xa0\xa0\xa0//$Object = {"pr\xe9nom":"Paul","nom":"Smith"}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsx)(n.p,{children:"Ajout d\u2019une propri\xe9t\xe9 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0\xa0\xa0\xa0//$Object = {"pr\xe9nom":"John","nom":"Smith"}\n\xa0OB SET($Object ;"service";"Comptabilit\xe9")\n\xa0\xa0\xa0\xa0\xa0//$Object = {"pr\xe9nom":"Paul","nom":"Smith","service":"Comptabilit\xe9"}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,t.jsx)(n.p,{children:"Renommage d\u2019une propri\xe9t\xe9 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0OB SET($Object ;"nom";"James";"age";35)\n\xa0\xa0\xa0\xa0\xa0//$Object = {"nom":"James","age":35}\n\xa0OB SET($Object ;"pr\xe9nom";OB Get($Object ;"nom"))\n\xa0\xa0\xa0\xa0\xa0//$Object = {"pr\xe9nom":""James","nom":"James","age":35}\n\xa0OB REMOVE($Object ;"nom")\n\xa0\xa0\xa0\xa0\xa0//$Object = {"pr\xe9nom":""James","age":35}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,t.jsx)(n.p,{children:"Utilisation d\u2019un pointeur :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0\xa0\xa0\xa0//$Object = {"pr\xe9nom":"Paul","nom":"Smith"}\n\xa0var $nom : Text\n\xa0OB SET($Object ;"nom";->$nom)\n\xa0\xa0\xa0\xa0\xa0//$Object = {"pr\xe9nom":"Paul","nom":"->$nom"}\n\xa0$JsonString:=JSON Stringify($Object)\n\xa0\xa0\xa0\xa0\xa0//$JsonString="{"pr\xe9nom":"Paul","nom":""}\n\xa0$nom:="Wesson"\n\xa0$JsonString:=JSON Stringify($Object)\n\xa0\xa0\xa0\xa0\xa0//$JsonString="{"pr\xe9nom":"Paul","nom":"Wesson"}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-7",children:"Exemple 7"}),"\n",(0,t.jsx)(n.p,{children:"Utilisation d\u2019un objet :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref_smith : Object\n\xa0OB SET($ref_smith ;"nom";"Smith")\n\xa0var $ref_emp : Object\n\xa0OB SET($ref_emp ;"employ\xe9";$ref_smith)\n\xa0$Json_string :=JSON Stringify($ref_emp)\n\xa0\xa0\xa0\xa0\xa0// $ref_emp = {"employ\xe9":{"nom":"Smith"}} (objet)\n\xa0\xa0\xa0\xa0\xa0// $Json_string = "{"employ\xe9":{"nom":"Smith"}}" (cha\xeene)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez \xe9galement changer une valeur \xe0 la vol\xe9e :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OB SET($ref_smith ;"nom";"Smyth")\n\xa0\xa0\xa0\xa0\xa0// $ref_smith = {"employ\xe9":{"nom":"Smyth"}}\n\xa0$string :=JSON Stringify($ref_emp)\xa0\n\xa0\xa0\xa0\xa0\xa0// $string = "{"employee":{"nom":"Smyth"}}"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-8",children:"Exemple 8"}),"\n",(0,t.jsx)(n.p,{children:"Si vous avez d\xe9fini le champ [Rect]Desc en tant que champ objet, vous pouvez \xe9crire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE RECORD([Rect])\n\xa0[Rect]Name:="Blue square"\n\xa0OB SET([Rect]Desc;"x";"50";"y";"50";"color";"blue")\n\xa0SAVE RECORD([Rect])\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-9",children:"Exemple 9"}),"\n",(0,t.jsxs)(n.p,{children:["Vous souhaitez exporter des donn\xe9es en JSON contenant une date 4D que vous souhaitez convertir en cha\xeene sans fuseau horaire. A noter que la conversion a lieu au moment du stockage de la date dans l\u2019objet, il faut donc appeler la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," avant ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-set",children:"OB SET"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$vDateParam:=Get database parameter(Dates dans objets)\xa0//on garde le param\xe9trage courant\n\xa0SET DATABASE PARAMETER(Dates dans objets;String type without time zone)\n\xa0OB SET($o ;"maDate";Current date)\xa0// conversion JSON\n\xa0$json:=JSON Stringify($o)\n\xa0SET DATABASE PARAMETER(Dates dans objets;$vDateParam)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-10",children:"Exemple 10"}),"\n",(0,t.jsx)(n.p,{children:"Dans la m\xe9thode d'un formulaire contenant une zone 4D Write Pro, vous pouvez \xe9crire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0If(FORM Event=On Validate)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez \xe9galement lire les attributs personnalis\xe9s des documents :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Last edition by")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-11",children:"Exemple 11"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez assigner une collection en tant que valeur d'une propri\xe9t\xe9. Vous pouvez \xe9crire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $person : Object\n\xa0var $myCol : Collection\n\xa0\n\xa0$person:=New object\n\xa0$myCol:=New collection("Mike";25;"Denis";12;"Henry";4;True)\n\xa0OB SET($person;"Name";"Jones";"Children";$myCol)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-12",children:"Exemple 12"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez stocker une image dans un champ objet. Vous pouvez \xe9crire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPict : Picture\n\xa0READ PICTURE FILE("photo.jpg";$vPict)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0OB SET([Emp]Children;"photo";$vPict)\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-get",children:"OB Get"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-remove",children:"OB REMOVE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-set-array",children:"OB SET ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-set-null",children:"OB SET NULL"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1220"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var s=r(667294);let t={},l=s.createContext(t);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);