"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82375"],{144517:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"REST/classFunctions","title":"Appeler des fonctions de classe ORDA","description":"Vous pouvez appeler les fonctions de classe d\xe9finies pour le mod\xe8le de donn\xe9es ORDA via vos requ\xeates REST, afin de b\xe9n\xe9ficier de l\'API de l\'application 4D cibl\xe9e.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/ClassFunctions.md","sourceDirName":"REST","slug":"/REST/classFunctions","permalink":"/docs/fr/19/REST/classFunctions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FClassFunctions.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"classFunctions","title":"Appeler des fonctions de classe ORDA"},"sidebar":"docs","previous":{"title":"Manipulation des donn\xe9es","permalink":"/docs/fr/19/REST/manData"},"next":{"title":"A propos des requ\xeates REST","permalink":"/docs/fr/19/REST/REST_requests"}}'),i=t("785893"),r=t("250065");let l={id:"classFunctions",title:"Appeler des fonctions de classe ORDA"},d=void 0,a={},c=[{value:"Appeler des fonctions",id:"appeler-des-fonctions",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Param\xe8tre de valeur scalaire",id:"param\xe8tre-de-valeur-scalaire",level:3},{value:"Param\xe8tre d&#39;entit\xe9",id:"param\xe8tre-dentit\xe9",level:3},{value:"Param\xe8tre d&#39;entit\xe9 associ\xe9",id:"param\xe8tre-dentit\xe9-associ\xe9",level:4},{value:"Param\xe8tre d&#39;entity selection",id:"param\xe8tre-dentity-selection",level:3},{value:"Exemples de requ\xeates",id:"exemples-de-requ\xeates",level:2},{value:"Utiliser une fonction de classe de datastore",id:"utiliser-une-fonction-de-classe-de-datastore",level:3},{value:"R\xe9sultat",id:"r\xe9sultat",level:4},{value:"Utiliser une fonction de classe de dataclass",id:"utiliser-une-fonction-de-classe-de-dataclass",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-1",level:4},{value:"Utiliser une fonction de classe d&#39;entit\xe9",id:"utiliser-une-fonction-de-classe-dentit\xe9",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-2",level:4},{value:"Utiliser une fonction de classe d&#39;entity selection",id:"utiliser-une-fonction-de-classe-dentity-selection",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-3",level:4},{value:"Utiliser une fonction de classe d&#39;entity selection et un entity set",id:"utiliser-une-fonction-de-classe-dentity-selection-et-un-entity-set",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-4",level:4},{value:"Utiliser une fonction de classe d&#39;entity selection et un &quot;orderBy&quot;",id:"utiliser-une-fonction-de-classe-dentity-selection-et-un-orderby",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-5",level:4},{value:"Utiliser une entit\xe9 \xe0 cr\xe9er sur le serveur",id:"utiliser-une-entit\xe9-\xe0-cr\xe9er-sur-le-serveur",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-6",level:4},{value:"Utiliser une entit\xe9 \xe0 mettre \xe0 jour sur le serveur",id:"utiliser-une-entit\xe9-\xe0-mettre-\xe0-jour-sur-le-serveur",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-7",level:4},{value:"Cr\xe9er une entit\xe9 avec une entit\xe9 li\xe9e",id:"cr\xe9er-une-entit\xe9-avec-une-entit\xe9-li\xe9e",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-8",level:4},{value:"Mettre \xe0 jour une entit\xe9 avec une entit\xe9 li\xe9e",id:"mettre-\xe0-jour-une-entit\xe9-avec-une-entit\xe9-li\xe9e",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-9",level:4},{value:"Recevoir une entity selection comme param\xe8tre",id:"recevoir-une-entity-selection-comme-param\xe8tre",level:3},{value:"R\xe9sultat",id:"r\xe9sultat-10",level:4},{value:"Utiliser une entity selection mise \xe0 jour sur le client",id:"utiliser-une-entity-selection-mise-\xe0-jour-sur-le-client",level:3}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Vous pouvez appeler les ",(0,i.jsx)(n.a,{href:"/docs/fr/19/ORDA/ordaClasses",children:"fonctions de classe"})," d\xe9finies pour le mod\xe8le de donn\xe9es ORDA via vos requ\xeates REST, afin de b\xe9n\xe9ficier de l'API de l'application 4D cibl\xe9e."]}),"\n",(0,i.jsxs)(n.p,{children:["Les fonctions sont simplement appel\xe9es dans des requ\xeates POST sur l'interface ORDA appropri\xe9e, sans (). Par exemple, si vous avez d\xe9fini une fonction ",(0,i.jsx)(n.code,{children:"getCity()"})," dans la dataclass City, vous pouvez l'appeler \xe0 l'aide de la requ\xeate suivante :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"/rest/City/getCity"})}),"\n",(0,i.jsxs)(n.p,{children:["avec des donn\xe9es contenues dans le corps de la requ\xeate POST : ",(0,i.jsx)(n.code,{children:'["Aguada"]'})]}),"\n",(0,i.jsx)(n.p,{children:"Dans le langage 4D, cet appel \xe9quivaut \xe0 :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'$city:=ds.City.getCity("Aguada")\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Seules les fonctions contenant le mot-cl\xe9 ",(0,i.jsx)(n.code,{children:"exposed"})," peuvent \xeatre directement appel\xe9es \xe0 partir de requ\xeates REST. Voir la section ",(0,i.jsx)(n.a,{href:"/docs/fr/19/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:"Fonctions expos\xe9es vs non expos\xe9es"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"appeler-des-fonctions",children:"Appeler des fonctions"}),"\n",(0,i.jsxs)(n.p,{children:["Les fonctions doivent toujours \xeatre appel\xe9es \xe0 l'aide des requ\xeates ",(0,i.jsx)(n.strong,{children:"POST"})," (une requ\xeate GET recevra une erreur)."]}),"\n",(0,i.jsx)(n.p,{children:"Les fonctions sont appel\xe9es sur l'objet correspondant au datastore du serveur."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Fonction de classe"}),(0,i.jsx)(n.th,{children:"Syntaxe"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/fr/19/ORDA/ordaClasses#datastore-class",children:"datastore class"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rest/$catalog/DataStoreClassFunction"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/fr/19/ORDA/ordaClasses#dataclass-class",children:"dataclass class"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rest/{dataClass}/DataClassClassFunction"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/fr/19/ORDA/ordaClasses#entityselection-class",children:"entitySelection class"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rest/{dataClass}/EntitySelectionClassFunction"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rest/{dataClass}/EntitySelectionClassFunction/$filter"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rest/{dataClass}/EntitySelectionClassFunction/$orderby"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/fr/19/ORDA/ordaClasses#entity-class",children:"entity class"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rest/\\{dataClass\\}(key)/EntityClassFunction/"})})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"/rest/{dataClass}/Function"})," peut \xeatre utilis\xe9 pour appeler une fonction de dataclass ou d'entity selection (",(0,i.jsx)(n.code,{children:"/rest/{dataClass}"})," renvoie toutes les entit\xe9s de la dataclass en tant qu'entity selection). La fonction est d'abord recherch\xe9e dans la classe Entity selection. Si elle n'est pas trouv\xe9e, elle est recherch\xe9e dans la dataclass. En d'autres termes, si une fonction portant le m\xeame nom est d\xe9finie \xe0 la fois dans la classe DataClass et la classe EntitySelection, la fonction de classe de dataclass ne sera jamais ex\xe9cut\xe9e."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Tout le code 4D appel\xe9 \xe0 partir de requ\xeates REST ",(0,i.jsx)(n.strong,{children:"doit \xeatre thread-safe"})," si le projet fonctionne en mode compil\xe9, car le serveur REST utilise toujours des process pr\xe9emptifs dans ce cas (la valeur du param\xe8tre ",(0,i.jsx)(n.a,{href:"/docs/fr/19/WebServer/webServerConfig#use-preemptive-processes",children:(0,i.jsx)(n.em,{children:"Utiliser des process pr\xe9emptifs"})})," est ignor\xe9e par le serveur REST)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez envoyer des param\xe8tres aux fonctions d\xe9finies dans les classes utilisateurs ORDA. C\xf4t\xe9 serveur, ils seront re\xe7us dans les fonctions de classe dans les param\xe8tres classiques $1, $2, etc."}),"\n",(0,i.jsx)(n.p,{children:"Les r\xe8gles suivantes s'appliquent :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Les param\xe8tres doivent \xeatre pass\xe9s dans le ",(0,i.jsx)(n.strong,{children:"body de la requ\xeate POST"})]}),"\n",(0,i.jsx)(n.li,{children:"Les param\xe8tres doivent \xeatre inclus dans une collection (format JSON)"}),"\n",(0,i.jsx)(n.li,{children:"Tous les types de donn\xe9es scalaires pris en charge dans les collections JSON peuvent \xeatre pass\xe9s en tant que param\xe8tres."}),"\n",(0,i.jsx)(n.li,{children:"L'entity selection et l'entit\xe9 peuvent \xeatre pass\xe9es en tant que param\xe8tres. L'objet JSON doit contenir des attributs sp\xe9cifiques utilis\xe9s par le serveur REST pour affecter des donn\xe9es aux objets ORDA correspondants : __DATACLASS, __ENTITY, __ENTITIES, __DATASET."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Voir ",(0,i.jsx)(n.a,{href:"#receiving-an-entity-selection-as-parameter",children:"cet exemple"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"param\xe8tre-de-valeur-scalaire",children:"Param\xe8tre de valeur scalaire"}),"\n",(0,i.jsxs)(n.p,{children:["Le(s) param\xe8tre(s) doivent simplement \xeatre incluse dans une collection d\xe9finie dans le corps. Par exemple, avec une fonction de dataclass ",(0,i.jsx)(n.code,{children:"getCities()"})," qui re\xe7oit des param\xe8tres de type texte : ",(0,i.jsx)(n.code,{children:"/rest/City/getCities"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Param\xe8tres dans le body :"}),' ["Aguada","Paris"]']}),"\n",(0,i.jsx)(n.p,{children:'Tous les types de donn\xe9es JSON sont pris en charge dans les param\xe8tres, y compris les pointeurs JSON. Les dates peuvent \xeatre pass\xe9es sous forme de cha\xeenes au format de date ISO 8601 (par exemple, "2020-08-22T22:00:000Z").'}),"\n",(0,i.jsx)(n.h3,{id:"param\xe8tre-dentit\xe9",children:"Param\xe8tre d'entit\xe9"}),"\n",(0,i.jsx)(n.p,{children:"Les entit\xe9s pass\xe9es en param\xe8tres sont r\xe9f\xe9renc\xe9es sur le serveur via leur cl\xe9 (c'est-\xe0-dire la propri\xe9t\xe9 __KEY). Si le param\xe8tre cl\xe9 est omis dans une requ\xeate, une nouvelle entit\xe9 est charg\xe9e en m\xe9moire du serveur. Vous pouvez \xe9galement transmettre des valeurs pour tous les attributs de l'entit\xe9. Ces valeurs seront automatiquement utilis\xe9es pour l'entit\xe9 trait\xe9e sur le serveur."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Si la requ\xeate envoie des valeurs d'attribut modifi\xe9es pour une entit\xe9 existante sur le serveur, la fonction de mod\xe8le de donn\xe9es ORDA appel\xe9e sera automatiquement ex\xe9cut\xe9e sur le serveur avec des valeurs modifi\xe9es. Cette fonctionnalit\xe9 vous permet, par exemple, de v\xe9rifier le r\xe9sultat d'une op\xe9ration sur une entit\xe9, apr\xe8s avoir appliqu\xe9 toutes les r\xe8gles m\xe9tier, depuis l'application cliente. Vous pouvez alors d\xe9cider de sauvegarder ou non l'entit\xe9 sur le serveur."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9s"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attributs de l'entit\xe9"}),(0,i.jsx)(n.td,{children:"mixte"}),(0,i.jsx)(n.td,{children:"Optionnelle - Valeurs \xe0 modifier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__DATACLASS"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Obligatoire - Indique la Dataclass de l'entit\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__ENTITY"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"Obligatoire - Vrai pour indiquer au serveur que le param\xe8tre est une entit\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__KEY"}),(0,i.jsx)(n.td,{children:"mixte (type identique \xe0 celui de la cl\xe9 primaire)"}),(0,i.jsx)(n.td,{children:"Optionnel - cl\xe9 primaire de l'entit\xe9"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si __KEY n'est pas fourni, une nouvelle entit\xe9 est cr\xe9\xe9e sur le serveur avec les attributs donn\xe9s."}),"\n",(0,i.jsx)(n.li,{children:"Si __KEY est fourni, l'entit\xe9 correspondant \xe0 _KEY est charg\xe9e sur le serveur avec les attributs pass\xe9s"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Voir les exemples de cr\xe9ation ou de mise \xe0 jour d'entit\xe9s."}),"\n",(0,i.jsx)(n.h4,{id:"param\xe8tre-dentit\xe9-associ\xe9",children:"Param\xe8tre d'entit\xe9 associ\xe9"}),"\n",(0,i.jsxs)(n.p,{children:["M\xeames propri\xe9t\xe9s que pour un ",(0,i.jsx)(n.a,{href:"#entity-parameter",children:"param\xe8tre d'entit\xe9"}),". De plus, l'entit\xe9 associ\xe9e doit exister et est r\xe9f\xe9renc\xe9e par __KEY, qui contient sa cl\xe9 primaire."]}),"\n",(0,i.jsxs)(n.p,{children:["Reportez-vous aux exemples de ",(0,i.jsx)(n.a,{href:"#creating-an-entity-with-a-related-entity",children:"cr\xe9ation"})," ou de ",(0,i.jsx)(n.a,{href:"#updating-an-entity-with-a-related-entity",children:"mise \xe0 jour"})," des entit\xe9s avec des entit\xe9s associ\xe9es."]}),"\n",(0,i.jsx)(n.h3,{id:"param\xe8tre-dentity-selection",children:"Param\xe8tre d'entity selection"}),"\n",(0,i.jsxs)(n.p,{children:["L'entity selection doit avoir \xe9t\xe9 d\xe9finie au pr\xe9alable \xe0 l'aide de ",(0,i.jsx)(n.a,{href:"/docs/fr/19/REST/method#methodentityset",children:"$method=entityset"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Si la requ\xeate envoie une entity selection modifi\xe9e au serveur, la fonction de mod\xe8le de donn\xe9es ORDA appel\xe9e sera automatiquement ex\xe9cut\xe9e sur le serveur avec l'entity selection modifi\xe9e."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9s"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Attributs de l'entit\xe9"}),(0,i.jsx)(n.td,{children:"mixte"}),(0,i.jsx)(n.td,{children:"Optionnelle - Valeurs \xe0 modifier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__DATASET"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Obligatoire - entitySetID (UUID) de l'entity selection"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"__ENTITIES"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"Obligatoire - Vrai pour indiquer au serveur que le param\xe8tre est une s\xe9lection d'entit\xe9"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Reportez-vous aux exemples de ",(0,i.jsx)(n.a,{href:"#receiving-an-entity-selection-as-parameter",children:"r\xe9ception d'une s\xe9lection d'entit\xe9"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"exemples-de-requ\xeates",children:"Exemples de requ\xeates"}),"\n",(0,i.jsx)(n.p,{children:"Cette base de donn\xe9es est expos\xe9e comme un datastore distant sur localhost (port 8111) :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:t(603658).Z+"",width:"882",height:"599"})}),"\n",(0,i.jsx)(n.h3,{id:"utiliser-une-fonction-de-classe-de-datastore",children:"Utiliser une fonction de classe de datastore"}),"\n",(0,i.jsxs)(n.p,{children:["La classe de ",(0,i.jsx)(n.code,{children:"DataStore"})," US_Cities fournit une API :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'// DataStore class\n\nClass extends DataStoreImplementation\n\nexposed Function getName()\n    $0:="US cities and zip codes manager" \n'})}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez lancer cette requ\xeate :"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"127.0.0.1:8111/rest/$catalog/getName"})]}),"\n",(0,i.jsx)(n.h4,{id:"r\xe9sultat",children:"R\xe9sultat"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n"result": "US cities and zip codes manager" \n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"utiliser-une-fonction-de-classe-de-dataclass",children:"Utiliser une fonction de classe de dataclass"}),"\n",(0,i.jsxs)(n.p,{children:["La classe de Dataclass ",(0,i.jsx)(n.code,{children:"City"})," fournit une API qui retourne une entit\xe9 de ville \xe0 partir du nom pass\xe9 en param\xe8tre :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'// City class\n\nClass extends DataClass\n\nexposed Function getCity()\n var $0 : cs.CityEntity\n var $1,$nameParam : text\n $nameParam:=$1\n $0:=This.query("name = :1";$nameParam).first()\n'})}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez lancer cette requ\xeate :"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"127.0.0.1:8111/rest/City/getCity"})]}),"\n",(0,i.jsx)(n.p,{children:'Requ\xeate : ["Paris"]'}),"\n",(0,i.jsx)(n.h4,{id:"r\xe9sultat-1",children:"R\xe9sultat"}),"\n",(0,i.jsx)(n.p,{children:"Le r\xe9sultat est une entit\xe9 :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "__entityModel": "City",\n    "__DATACLASS": "City",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",\n    "__STAMP": 1,\n    "ID": 1,\n    "name": "Paris",\n    "countyFIPS": 72003,\n    "county": {\n        "__deferred": {\n            "uri": "/rest/County(72003)",\n            "__KEY": "72003" \n        }\n    },\n    "zips": {\n        "__deferred": {\n            "uri": "/rest/City(1)/zips?$expand=zips" \n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"utiliser-une-fonction-de-classe-dentit\xe9",children:"Utiliser une fonction de classe d'entit\xe9"}),"\n",(0,i.jsxs)(n.p,{children:["La classe d'entit\xe9 ",(0,i.jsx)(n.code,{children:"CityEntity"})," fournit une API :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'// CityEntity class\n\nClass extends Entity\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n'})}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez lancer cette requ\xeate :"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"127.0.0.1:8111/rest/City(2)/getPopulation"})]}),"\n",(0,i.jsx)(n.h4,{id:"r\xe9sultat-2",children:"R\xe9sultat"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "result": 48814\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"utiliser-une-fonction-de-classe-dentity-selection",children:"Utiliser une fonction de classe d'entity selection"}),"\n",(0,i.jsxs)(n.p,{children:["La classe d'entity selection ",(0,i.jsx)(n.code,{children:"CityEntity"})," fournit une API :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'// CitySelection class\n\nClass extends EntitySelection\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n'})}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez lancer cette requ\xeate :"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:'127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"'})]}),"\n",(0,i.jsx)(n.h4,{id:"r\xe9sultat-3",children:"R\xe9sultat"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "result": 87256\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"utiliser-une-fonction-de-classe-dentity-selection-et-un-entity-set",children:"Utiliser une fonction de classe d'entity selection et un entity set"}),"\n",(0,i.jsxs)(n.p,{children:["La classe ",(0,i.jsx)(n.code,{children:"StudentsSelection"})," a une fonction ",(0,i.jsx)(n.code,{children:"getAgeAverage"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"// StudentsSelection Class\n\nClass extends EntitySelection\n\nexposed Function getAgeAverage\n C_LONGINT($sum;$0)\n C_OBJECT($s)\n\n $sum:=0\n For each ($s;This)\n     $sum:=$sum+$s.age()\n End for each \n $0:=$sum/This.length\n"})}),"\n",(0,i.jsx)(n.p,{children:"Une fois que vous avez cr\xe9\xe9 un ensemble d'entit\xe9, vous pouvez lancer cette requ\xeate :"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532"})]}),"\n",(0,i.jsx)(n.h4,{id:"r\xe9sultat-4",children:"R\xe9sultat"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "result": 34\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"utiliser-une-fonction-de-classe-dentity-selection-et-un-orderby",children:'Utiliser une fonction de classe d\'entity selection et un "orderBy"'}),"\n",(0,i.jsxs)(n.p,{children:["La classe ",(0,i.jsx)(n.code,{children:"StudentsSelection"})," a une fonction ",(0,i.jsx)(n.code,{children:"getLastSummary"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'// StudentsSelection Class\n\n\nClass extends EntitySelection\n\nexposed Function getLastSummary\n C_TEXT($0)\n C_OBJECT($last)\n\n $last:=This.last()\n $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())\n'})}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez lancer cette requ\xeate :"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:'127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"'})]}),"\n",(0,i.jsx)(n.h4,{id:"r\xe9sultat-5",children:"R\xe9sultat"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "result": "Wilbert - Bull is ... 21" \n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"utiliser-une-entit\xe9-\xe0-cr\xe9er-sur-le-serveur",children:"Utiliser une entit\xe9 \xe0 cr\xe9er sur le serveur"}),"\n",(0,i.jsxs)(n.p,{children:["La classe de Dataclass ",(0,i.jsx)(n.code,{children:"Students"})," poss\xe8de la fonction ",(0,i.jsx)(n.code,{children:"pushData()"})," qui re\xe7oit une entit\xe9 contenant les donn\xe9es du client. La m\xe9thode ",(0,i.jsx)(n.code,{children:"checkData()"})," effectue quelques contr\xf4les. Si elles sont valides, l'entit\xe9 est sauvegard\xe9e et retourn\xe9e."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"// Students Class\n\nClass extends DataClass\n\nexposed Function pushData\n var $1, $entity, $status, $0 : Object\n\n $entity:=$1\n\n $status:=checkData($entity) // $status est un objet avec une propri\xe9t\xe9 bool\xe9enne success\n\n $0:=$status\n\n If ($status.success)\n     $status:=$entity.save()\n     If ($status.success)\n         $0:=$entity\n     End if \n End if\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Lancez cette requ\xeate :"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,i.jsx)(n.p,{children:"Body de la requ\xeate :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"Ann",\n"lastname":"Brown" \n}]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Si aucune ",(0,i.jsx)(n.code,{children:"__KEY"})," n'est donn\xe9e, une nouvelle entit\xe9 Students est charg\xe9e sur le serveur ",(0,i.jsx)(n.strong,{children:"avec les attributs du client"}),". Parce que la fonction ",(0,i.jsx)(n.code,{children:"pushData()"})," ex\xe9cute une action ",(0,i.jsx)(n.code,{children:"save()"}),", la nouvelle entit\xe9 est cr\xe9\xe9e."]}),"\n",(0,i.jsx)(n.h4,{id:"r\xe9sultat-6",children:"R\xe9sultat"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",\n    "__STAMP": 1,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWN",\n    "schoolID": null,\n    "school": null\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"utiliser-une-entit\xe9-\xe0-mettre-\xe0-jour-sur-le-serveur",children:"Utiliser une entit\xe9 \xe0 mettre \xe0 jour sur le serveur"}),"\n",(0,i.jsx)(n.p,{children:"Description semblable \xe0 la pr\xe9c\xe9dente, avec l'attribut _KEY"}),"\n",(0,i.jsx)(n.p,{children:"Lancez cette requ\xeate :"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"POST:"}),(0,i.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,i.jsx)(n.p,{children:"Body de la requ\xeate :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"lastname":"Brownie",\n"__KEY":55\n}]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Si aucune ",(0,i.jsx)(n.code,{children:"__KEY"})," n'est donn\xe9e, l'entit\xe9 Students est charg\xe9e avec la cl\xe9 primaire 55 ",(0,i.jsx)(n.strong,{children:"avec la valeur lastname re\xe7ue par le client"}),". Parce que la fonction ex\xe9cute une action ",(0,i.jsx)(n.code,{children:"save()"}),", la nouvelle entit\xe9 est mise \xe0 jour."]}),"\n",(0,i.jsx)(n.h4,{id:"r\xe9sultat-7",children:"R\xe9sultat"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",\n    "__STAMP": 3,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWNIE",\n    "schoolID": null,\n    "school": null \n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"cr\xe9er-une-entit\xe9-avec-une-entit\xe9-li\xe9e",children:"Cr\xe9er une entit\xe9 avec une entit\xe9 li\xe9e"}),"\n",(0,i.jsx)(n.p,{children:"Dans cet exemple, nous cr\xe9ons une nouvelle entit\xe9 Students avec l'entit\xe9 Schools ayant la cl\xe9 primaire 2."}),"\n",(0,i.jsx)(n.p,{children:"Lancez cette requ\xeate :"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"POST:"}),(0,i.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,i.jsx)(n.p,{children:"Body de la requ\xeate :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"John",\n"lastname":"Smith",\n"school":{"__KEY":2}\n}]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"r\xe9sultat-8",children:"R\xe9sultat"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "56",\n    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",\n    "__STAMP": 1,\n    "ID": 56,\n    "firstname": "John",\n    "lastname": "SMITH",\n    "schoolID": 2,\n       "school": {\n        "__deferred": {\n            "uri": "/rest/Schools(2)",\n            "__KEY": "2" \n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"mettre-\xe0-jour-une-entit\xe9-avec-une-entit\xe9-li\xe9e",children:"Mettre \xe0 jour une entit\xe9 avec une entit\xe9 li\xe9e"}),"\n",(0,i.jsxs)(n.p,{children:["Dans cet exemple, nous associons une \xe9cole existante \xe0 l'entit\xe9 Students. La classe ",(0,i.jsx)(n.code,{children:"StudentsEntity"})," poss\xe8de une API :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"// StudentsEntity class\n\nClass extends Entity\n\nexposed Function putToSchool()\n var $1, $school , $0, $status : Object\n\n  //$1 is a Schools entity\n $school:=$1\n  //associe l'entit\xe9 li\xe9e school \xe0 l'entit\xe9 Students courante\n This.school:=$school\n\n $status:=This.save()\n\n $0:=$status\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Vous ex\xe9cutez cette requ\xeate, appel\xe9e sur une entit\xe9 Students : ",(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students(1)/putToSchool"})," Body de la requ\xeate :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[{\n"__DATACLASS":"Schools",\n"__ENTITY":true,\n"__KEY":2\n}]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"r\xe9sultat-9",children:"R\xe9sultat"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "result": {\n        "success": true\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"recevoir-une-entity-selection-comme-param\xe8tre",children:"Recevoir une entity selection comme param\xe8tre"}),"\n",(0,i.jsxs)(n.p,{children:["Dans la classe de Dataclass ",(0,i.jsx)(n.code,{children:"Students"}),", la fonction ",(0,i.jsx)(n.code,{children:"setFinalExam()"})," met \xe0 jour une s\xe9lection d'entit\xe9 re\xe7ue ($1). Elle met \xe0 jour l'attribut ",(0,i.jsx)(n.em,{children:"finalExam"})," avec la valeur re\xe7ue ($2). Elle retourne les cl\xe9s primaires des entit\xe9s mises \xe0 jour."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"// Students class\n\nClass extends DataClass\n\nexposed Function setFinalExam()\n\n    var $1, $es, $student, $status : Object\n    var $2, $examResult : Text\n\n    var $keys, $0 : Collection\n\n      //Entity selection\n    $es:=$1\n\n    $examResult:=$2\n\n    $keys:=New collection()\n\n      //Boucle sur la s\xe9lection d'entit\xe9\n    For each ($student;$es)\n        $student.finalExam:=$examResult\n        $status:=$student.save()\n        If ($status.success)\n            $keys.push($student.ID)\n        End if \n    End for each \n\n    $0:=$keys\n"})}),"\n",(0,i.jsx)(n.p,{children:"Un ensemble d'entit\xe9 est d'abord cr\xe9\xe9 avec cette requ\xeate :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset'})}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez ensuite ex\xe9cuter cette requ\xeate :"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"POST"})," ",(0,i.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/setFinalExam"})]}),"\n",(0,i.jsx)(n.p,{children:"Body de la requ\xeate :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[\n{\n"__ENTITIES":true,\n"__DATASET":"9B9C053A111E4A288E9C1E48965FE671" \n},\n"Passed" \n]\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"r\xe9sultat-10",children:"R\xe9sultat"}),"\n",(0,i.jsx)(n.p,{children:"Les entit\xe9s ayant les cl\xe9s primaires sont 1 et 2 ont \xe9t\xe9 mises \xe0 jour."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "result": [\n        1,\n        2\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"utiliser-une-entity-selection-mise-\xe0-jour-sur-le-client",children:"Utiliser une entity selection mise \xe0 jour sur le client"}),"\n",(0,i.jsxs)(n.p,{children:["A l'aide de la fonction ",(0,i.jsx)(n.code,{children:"getAgeAverage()"})," ",(0,i.jsx)(n.a,{href:"#using-an-entityselection-class-function-and-an-entityset",children:"d\xe9finie ci-dessus"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $remoteDS, $newStudent, $students : Object\nvar $ageAverage : Integer\n\n$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")\n\n// $newStudent est une entit\xe9 "student" \xe0 traiter\n$newStudent:=...\n$students:=$remoteDS.Students.query("school.name = :1";"Math school")\n// Nous avons ajout\xe9 une entit\xe9 \xe0 la s\xe9lection d\'entit\xe9 $students sur le client\n$students.add($newStudent) \n\n// Nous appelons une fonction sur la classe StudentsSelection qui retourne l\'\xe2ge moyen des \xe9tudiants de la s\xe9lection d\'entit\xe9\n// La fonction est utilis\xe9e sur le serveur sur la s\xe9lection d\'entit\xe9 $students mise \xe0 jour, qui inclut l\'\xe9tudiant ajout\xe9 par le client\n$ageAverage:=$students.getAgeAverage()\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},603658:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/ordastructure-64d64d76ce9764a2365629e381bde282.png"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);