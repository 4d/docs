"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22156"],{451976:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/selection-to-json","title":"Selection to JSON","description":"Selection to JSON ( laTable {; leChamp}{; leChamp2 ; ... ; leChampN}{; template})  : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/selection-to-json.md","sourceDirName":"commands-legacy","slug":"/commands/selection-to-json","permalink":"/docs/fr/commands/selection-to-json","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselection-to-json.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"selection-to-json","title":"Selection to JSON","slug":"/commands/selection-to-json","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON Validate","permalink":"/docs/fr/commands/json-validate"},"next":{"title":"LDAP","permalink":"/docs/fr/category/ldap"}}'),l=s("785893"),r=s("250065");let i={id:"selection-to-json",title:"Selection to JSON",slug:"/commands/selection-to-json",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Selection to JSON"})," ( ",(0,l.jsx)(n.em,{children:"laTable"})," {; ",(0,l.jsx)(n.em,{children:"leChamp"}),"}{; ",(0,l.jsx)(n.em,{children:"leChamp2"})," ; ... ; ",(0,l.jsx)(n.em,{children:"leChampN"}),"}{; ",(0,l.jsx)(n.em,{children:"template"}),"})  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"laTable"}),(0,l.jsx)(n.td,{children:"Table"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Table \xe0 s\xe9rialiser"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"leField"}),(0,l.jsx)(n.td,{children:"Field"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Champ(s) dont le contenu doit \xeatre s\xe9rialis\xe9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"template"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Objet pour la s\xe9lection de libell\xe9s et de champs"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Cha\xeene contenant le tableau JSON s\xe9rialis\xe9"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"Selection to JSON"})," retourne une cha\xeene qui contient un tableau JSON avec autant d'\xe9l\xe9ments qu'il y a d'enregistrements dans la s\xe9lection courante de ",(0,l.jsx)(n.em,{children:"laTable"}),". Chaque \xe9l\xe9ment du tableau est un objet JSON contenant les libell\xe9s et les valeurs des champs de la s\xe9lection."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous passez uniquement le param\xe8tre ",(0,l.jsx)(n.em,{children:"laTable"}),", la commande inclut dans le tableau JSON les valeurs de tous les champs de la table exprimables en JSON. Les champs de type BLOB et image sont ignor\xe9s."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous ne souhaitez pas inclure tous les champs de ",(0,l.jsx)(n.em,{children:"laTable"}),", vous pouvez utiliser soit le param\xe8tre ",(0,l.jsx)(n.em,{children:"leChamp"})," soit le param\xe8tre ",(0,l.jsx)(n.em,{children:"template"})," :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"leChamp"})," : passez un ou plusieurs champ(s) dans ce param\xe8tre. Seules les valeurs des champs d\xe9finis seront incluses dans le tableau JSON."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"template"})," : passez un objet 4D contenant une ou plusieurs paire(s) ",(0,l.jsx)(n.em,{children:"nom/valeur"})," o\xf9 ",(0,l.jsx)(n.em,{children:"nom"})," peut \xeatre tout nom d'attribut valide et ",(0,l.jsx)(n.em,{children:"valeur"})," est un pointeur vers un champ \xe0 inclure. Cette syntaxe permet de personnaliser les libell\xe9s des champs dans le tableau JSON."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:['Cette commande prend en charge les champs de type objet : les donn\xe9es des champs sont automatiquement converties au format JSON (les valeurs des attributs image sont converties en cha\xeenes "[object Picture]"). A noter que l\'instruction 4D suivante sera interpr\xe9t\xe9e comme "produire du JSON \xe0 partir de toutes les valeurs de ',(0,l.jsx)(n.em,{children:"champObjet"}),' dans la s\xe9lection courante de la table" :']}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0Selection to JSON([uneTable];champObjet)\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Apr\xe8s un appel \xe0 ",(0,l.jsx)(n.strong,{children:"Selection to JSON"}),", la s\xe9lection courante n'est pas modifi\xe9e mais l'enregistrement courant n'est plus charg\xe9 et il peut avoir chang\xe9 (le dernier enregistrement de la s\xe9lection devient l'enregistrement courant). Apr\xe8s un ",(0,l.jsx)(n.strong,{children:"Selection to JSON"}),", utilisez les commandes ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/load-record",children:"LOAD RECORD"})," ainsi que ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/goto-selected-record",children:"GOTO SELECTED RECORD"})," (si n\xe9cessaire) si vous souhaitez utiliser les valeurs des champs de l'enregistrement courant d'origine."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.p,{children:"Vous voulez cr\xe9er une cha\xeene JSON repr\xe9sentant cette s\xe9lection :"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(149752).Z+"",width:"673",height:"186"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Vous souhaitez inclure les valeurs de tous les champs de la table [Adh\xe9rents] :"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0$jsonString :=Selection to JSON([Adh\xe9rents])\n\xa0\xa0\xa0\xa0\xa0// $jsonString = [{"Nom":"Durant","Pr\xe9nom":"Marc","Adresse":"25 rue du\n\xa0\xa0\xa0\xa0\xa0//parc","Code postal":"95000","Ville":"Pontoise"},{"Nom":"Smith",\n\xa0\xa0\xa0\xa0\xa0//"Pr\xe9nom":"John","Adresse":"24, rue Philibert-Delorme ","Code postal":\n\xa0\xa0\xa0\xa0\xa0//"75017","Ville":"Paris"},{"Nom":"Auquart","Pr\xe9nom":"Ad\xe9mart",\n\xa0\xa0\xa0\xa0\xa0//"Adresse":"37, quai de l\xb4Iton","Code postal":"37100","Ville":"Tours"},...]\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Vous souhaitez r\xe9duire la s\xe9lection et n\u2019inclure que deux champs dans la cha\xeene JSON en utilisant la syntaxe bas\xe9e sur les champs :"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Adh\xe9rents];[Adh\xe9rents]Nom="A@")\n\xa0$jsonString :=Selection to JSON([Adh\xe9rents];[Adh\xe9rents]Nom;[Adh\xe9rents]Ville)\n\xa0\xa0\xa0\xa0\xa0// $jsonString = [{"Nom":"Auquart","Ville":"Tours"},{"Nom":"Aubert","Ville":"Paris"}]\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsxs)(n.li,{children:["Vous souhaitez n\u2019inclure qu\u2019un champ dans la cha\xeene JSON et utiliser un autre libell\xe9. Vous utilisez la syntaxe ",(0,l.jsx)(n.em,{children:"template"})," :"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $template : Object\n\xa0OB SET($template;"Membre";->[Adh\xe9rents]Nom)\xa0//libell\xe9 personnalis\xe9 et un seul champ\n\xa0ALL RECORDS([Adh\xe9rents])\n\xa0$jsonString :=Selection to JSON([Adh\xe9rents];$template)\n\xa0\xa0\xa0\xa0\xa0// $jsonString = [{"Membre":"Durant"},{"Membre":"Smith"},{"Membre":"Auquart"},{"Membre":"Aubert"},{"Membre":"Lenuze"},{"Membre":"Pradel"}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsxs)(n.p,{children:["Vous utilisez la syntaxe avec ",(0,l.jsx)(n.em,{children:"template"})," afin d'exporter des champs de diff\xe9rentes tables :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $template : Object\n\xa0var $chaineJSON : Text\n\xa0OB SET($template;"Nom";->[Emp]Nom)\n\xa0OB SET($template;"Pr\xe9nom";->[Emp]Pr\xe9nom)\n\xa0OB SET($template;"Soci\xe9t\xe9";->[Soci\xe9t\xe9]Nom)\xa0//libell\xe9 personnalis\xe9 sinon conflit avec le champ [Emp]Nom\n\xa0ALL RECORDS([Emp])\n\xa0SET FIELD RELATION([Emp]UUID_Societe;Automatic;Do not modify)\n\xa0$chaineJSON:=Selection to JSON([Emp];$template)\n\xa0SET FIELD RELATION([Emp]UUID_Societe;Structure configuration;Do not modify)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/fr/commands/json-to-selection",children:"JSON TO SELECTION"})}),"\n",(0,l.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"1234"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},149752:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict1205203.fr-5a06843ec68b4eda85a0715e9ffc95bd.png"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let l={},r=t.createContext(l);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);