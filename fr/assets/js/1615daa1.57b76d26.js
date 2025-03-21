"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14795"],{438410:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/json-resolve-pointers","title":"JSON Resolve pointers","description":"JSON Resolve pointers ( objet {; options} ) : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/json-resolve-pointers.md","sourceDirName":"commands-legacy","slug":"/commands/json-resolve-pointers","permalink":"/docs/fr/20-R7/commands/json-resolve-pointers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-resolve-pointers.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"json-resolve-pointers","title":"JSON Resolve pointers","slug":"/commands/json-resolve-pointers","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON PARSE ARRAY","permalink":"/docs/fr/20-R7/commands/json-parse-array"},"next":{"title":"JSON Stringify","permalink":"/docs/fr/20-R7/commands/json-stringify"}}'),t=s("785893"),i=s("250065");let l={id:"json-resolve-pointers",title:"JSON Resolve pointers",slug:"/commands/json-resolve-pointers",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"D\xe9finition des pointeurs JSON",id:"d\xe9finition-des-pointeurs-json",level:2},{value:"R\xe9cursivit\xe9 et r\xe9solution des chemins",id:"r\xe9cursivit\xe9-et-r\xe9solution-des-chemins",level:3},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"JSON Resolve pointers"})," ( ",(0,t.jsx)(n.em,{children:"objet"})," {; ",(0,t.jsx)(n.em,{children:"options"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet contenant des pointeurs JSON \xe0 r\xe9soudre"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Objet avec pointeurs JSON r\xe9solus (uniquement si R\xe9sultat est un objet)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Options pour la r\xe9solution des pointeurs"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Objet contenant le r\xe9sultat du traitement"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"JSON Resolve pointers"})," r\xe9sout tous les pointeurs JSON pr\xe9sents dans ",(0,t.jsx)(n.em,{children:"objet"}),", en tenant compte des ",(0,t.jsx)(n.em,{children:"options"})," d\xe9finies (s'il y en a)."]}),"\n",(0,t.jsx)(n.p,{children:"Les pointeurs JSON sont particuli\xe8rement utiles pour :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"int\xe9grer une partie d'un document JSON externe ou r\xe9utiliser une partie d'un document JSON \xe0 divers endroits dans le m\xeame document JSON, afin de \"factoriser\" l'information,"}),"\n",(0,t.jsx)(n.li,{children:"exprimer une structure cyclique en JSON,"}),"\n",(0,t.jsx)(n.li,{children:"d\xe9finir un objet mod\xe8le contenant des propri\xe9t\xe9s par d\xe9faut stock\xe9es en JSON."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," un objet contenant des pointeurs JSON \xe0 r\xe9soudre (pour une description de la syntaxe des pointeurs JSON, veuillez vous reporter au paragraphe ",(0,t.jsx)(n.em,{children:"Defining JSON Pointers"})," ci-dessous)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," L'",(0,t.jsx)(n.em,{children:"objet"})," source sera mis \xe0 jour avec le r\xe9sultat de la r\xe9solution des pointeurs apr\xe8s l'ex\xe9cution de la commande (sauf si le r\xe9sultat n'est pas un objet, voir ci-dessous). Si vous souhaitez conserver une version originale de ",(0,t.jsx)(n.em,{children:"objet"}),", il sera n\xe9cessaire d'appeler la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/ob-copy",children:"OB Copy"})," au pr\xe9alable."]}),"\n",(0,t.jsxs)(n.p,{children:["Optionnellement, vous pouvez passer dans ",(0,t.jsx)(n.em,{children:"options"})," un objet contenant des propri\xe9t\xe9s sp\xe9cifiques \xe0 utiliser lors de la r\xe9solution des pointeurs. Les propri\xe9t\xe9s suivantes sont prises en charge :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type de valeur"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rootFolder"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsxs)(n.td,{children:["Chemin absolu (en syntaxe 4D standard) du dossier \xe0 utiliser pour r\xe9soudre les pointeurs relatifs dans ",(0,t.jsx)(n.em,{children:"objet"}),". Par d\xe9faut, le dossier Resources de la base est utilis\xe9."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"merge"}),(0,t.jsx)(n.td,{children:"Bool\xe9en"}),(0,t.jsxs)(n.td,{children:["Fusionner les objets avec les objets pointeur (true) au lieu de les remplacer (false). Par d\xe9faut, l'option est \xe0 faux ",(0,t.jsx)(n.img,{src:s(166798).Z+"",width:"769",height:"322"})]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de la commande :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["si le r\xe9sultat de la r\xe9solution des pointeurs est un objet, ",(0,t.jsx)(n.em,{children:"objet"})," est mis \xe0 jour et contient l'objet r\xe9sultant."]}),"\n",(0,t.jsxs)(n.li,{children:["si le r\xe9sultat de la r\xe9solution des pointeurs est une valeur scalaire (i.e. un texte, un num\xe9rique...), ",(0,t.jsx)(n.em,{children:"objet"}),' n\'est pas modifi\xe9 et la valeur r\xe9sultante est retourn\xe9e dans la propri\xe9t\xe9 "value" du r\xe9sultat de la fonction.']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Dans tous les cas, la commande retourne un objet contenant les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type de valeur"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"tous"}),(0,t.jsxs)(n.td,{children:["R\xe9sultat du traitement de la commande sur ",(0,t.jsx)(n.em,{children:"objet"})," ; si le r\xe9sultat est un objet, est \xe9gal \xe0 l'",(0,t.jsx)(n.em,{children:"objet"})," en sortie."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{children:"Bool\xe9en"}),(0,t.jsx)(n.td,{children:"true si tous les pointeurs ont \xe9t\xe9 r\xe9solus avec succ\xe8s"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errors"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"Collection d'erreurs (le cas \xe9ch\xe9ant)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errors[].code"}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsx)(n.td,{children:"Code d'erreur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errors[].message"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Message d'erreur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errors[].pointerURI"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Valeur de pointeur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errors[].referredPath"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Chemin complet de document"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"d\xe9finition-des-pointeurs-json",children:"D\xe9finition des pointeurs JSON"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"JSON Pointer"})," est un standard qui d\xe9finit une syntaxe de cha\xeene qui peut \xeatre utilis\xe9e pour acc\xe9der \xe0 un champ ou une valeur de cl\xe9 particuli\xe8re dans la totalit\xe9 du document JSON. Ce standard a \xe9t\xe9 d\xe9crit dans la ",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc6901",children:"RFC 6901"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Un pointeur JSON est, \xe0 proprement parler, une cha\xeene compos\xe9e de parties s\xe9par\xe9es par des '/'. Un pointeur JSON est g\xe9n\xe9ralement plac\xe9 dans un URI qui sp\xe9cifie le document dans lequel le pointeur sera r\xe9solu. Le caract\xe8re \"#' est utilis\xe9 dans l'URI pour d\xe9signer le fragment contenant le pointeur JSON. Par convention, un URI contenant un pointeur JSON doit \xeatre plac\xe9 dans une propri\xe9t\xe9 d'objet JSON nomm\xe9e \"$ref\"."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0 "$ref":<chemin>#<pointeur_json>\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"}),' 4D ne prend pas en charge le caract\xe8re "-" en tant que r\xe9f\xe9rence d\'\xe9l\xe9ments de tableau non existants.']}),"\n",(0,t.jsx)(n.h3,{id:"r\xe9cursivit\xe9-et-r\xe9solution-des-chemins",children:"R\xe9cursivit\xe9 et r\xe9solution des chemins"}),"\n",(0,t.jsx)(n.p,{children:'Les pointeurs JSON sont r\xe9solus r\xe9cursivement, ce qui signifie que si un pointeur r\xe9solu contient lui-m\xeame des pointeurs, ils sont r\xe9solus et ainsi de suite jusqu\'\xe0 ce que tous les pointeurs soient r\xe9solus. Dans ce contexte, tous les chemins de fichiers situ\xe9s dans les URIs des pointeurs JSON peuvent \xeatre relatifs ou absolus. Ils doivent utiliser le "/" en tant que d\xe9limiteur de chemin et sont r\xe9solus selon les principes suivants :'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Un chemin relatif ne doit pas d\xe9buter par '/'. Il est r\xe9solu relativement au document JSON contenant la cha\xeene du chemin."}),"\n",(0,t.jsxs)(n.li,{children:["Un chemin absolu d\xe9bute par '/'. Seuls les ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/Concepts/paths#chemins-des-filesystem",children:"chemins des filesystem"}),' sont accept\xe9s comme chemins absolus. Par exemple, "/RESOURCES/templates/myfile.json" pointe vers le fichier "myfile.json" situ\xe9 dans le dossier Resources de la base courante.']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La r\xe9solution de nom tient compte des majuscules/minuscules."}),"\n",(0,t.jsx)(n.li,{children:'4D ne r\xe9sout pas les chemins vers des fichiers JSON situ\xe9s sur le r\xe9seau (d\xe9butant par "http/https").'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple basique illustre comment un pointeur JSON peut \xeatre d\xe9fini et remplac\xe9 dans un objet :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// cr\xe9ation d\'un objet avec valeurs\n\xa0var $o : Object\n\xa0$o:=New object("value";42)\n\xa0\n\xa0\xa0// cr\xe9ation de l\'objet pointeur JSON\n\xa0var $ref : Object\n\xa0$ref:=New object("$ref";"#/value")\n\xa0\n\xa0\xa0// ajout de l\'objet pointeur JSON en tant que propri\xe9t\xe9\n\xa0$o.myJSONPointer:=$ref\n\xa0\n\xa0\xa0// r\xe9solution de l\'ensemble et v\xe9rification que le pointeur a \xe9t\xe9 r\xe9solu\n\xa0var $result : Object\n\xa0$options:=New object("rootFolder";Get 4D folder(Current resources folder);"merge";True)\n\xa0$result:=JSON Resolve pointers($o;$options)\n\xa0If($result.success)\n\xa0\xa0\xa0\xa0ALERT(JSON Stringify($result.value))\n\xa0\xa0//{"value":42,"myJSONPointer":42}\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT(JSON Stringify($result.errors))\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:'Vous voulez r\xe9utiliser l\'adresse "billingAddress" comme adresse "shippingAddress" dans l\'objet JSON suivant (nomm\xe9 $oMyConfig):'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "lastname": "Doe",\n\xa0\xa0\xa0 "firstname": "John",\n\xa0\xa0\xa0 "billingAddress": { \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "street": "95 S. Market Street",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city": "San Jose",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "state": "California" \n\xa0\xa0\xa0 },\n\xa0\xa0\xa0 "shippingAddress": { "$ref": "#/billingAddress" }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de ce code :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$oResult:=JSON Resolve pointers($oMyConfig)\n"})}),"\n",(0,t.jsx)(n.p,{children:"... l'objet suivant est retourn\xe9 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "success": true,\n\xa0\xa0\xa0 "value": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "lastname": "Doe",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "firstname": "John",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "billingAddress": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "street": "95 S. Market Street",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city": "San Jose",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "state": "California" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "shippingAddress": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "street": "95 S. Market Street",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "city": "San Jose",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "state": "California" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple illustre l'effet de l'option \"merge\". Vous souhaitez modifier les droits d'un utilisateur, bas\xe9s sur un fichier par d\xe9faut."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "rights": { \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "$ref": "defaultSettings.json#/defaultRights",\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id": 456\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Le fichier ",(0,t.jsx)(n.em,{children:"defaultSettings.json"})," contient :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "defaultRights":\n\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "edit": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "add": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": false\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Si vous ex\xe9cutez :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $options : Object\n\xa0$options:=New object("merge";False)\xa0//remplacer le contenu\n\xa0$oResult:=JSON Resolve pointers($oMyConfig;$options)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["... la valeur r\xe9sultante est exactement le contenu du fichier ",(0,t.jsx)(n.em,{children:"defaultSettings.json"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "success": true,\n\xa0\xa0\xa0 "value": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rights": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "edit": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "add": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": false\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Si vous ex\xe9cutez :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $options : Object\n\xa0$options:=New object("merge";True)\xa0//fusionner les contenus\n\xa0$oResult:=JSON Resolve pointers($oMyConfig;$options)\n'})}),"\n",(0,t.jsx)(n.p,{children:"... la valeur r\xe9sultante est une version modifi\xe9e de l'objet original :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "success": true,\n\xa0\xa0\xa0 "value": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "rights": {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "edit": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "add": false,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delete": true,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "id": 456\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1478"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},166798:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pict3516702.en-cb064ec14e9d4dfe520c789afa171666.png"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);