"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62456"],{771940:function(e,s,t){t.r(s),t.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"ORDA/dsmapping","title":"Objets Data Model","description":"La technologie ORDA est fond\xe9e sur une cartographie automatique d\'une structure de base sous-jacente. Elle permet \xe9galement d\'acc\xe9der aux donn\xe9es via des objets s\xe9lection d\'entit\xe9s (entity selection) et entit\xe9 (entity). Par cons\xe9quent, ORDA expose la base de donn\xe9es enti\xe8re comme un ensemble d\'objets de mod\xe8le de donn\xe9es.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ORDA/dsMapping.md","sourceDirName":"ORDA","slug":"/ORDA/dsmapping","permalink":"/docs/fr/20-R7/ORDA/dsmapping","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FdsMapping.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dsmapping","title":"Objets Data Model"},"sidebar":"docs","previous":{"title":"ORDA","permalink":"/docs/fr/20-R7/ORDA/overview"},"next":{"title":"Classes du mod\xe8le de donn\xe9es","permalink":"/docs/fr/20-R7/ORDA/ordaClasses"}}'),r=t("785893"),a=t("250065");let i={id:"dsmapping",title:"Objets Data Model"},l=void 0,d={},o=[{value:"Correspondance de la structure",id:"correspondance-de-la-structure",level:2},{value:"R\xe8gles g\xe9n\xe9rales",id:"r\xe8gles-g\xe9n\xe9rales",level:3},{value:"R\xe8gles de contr\xf4le d&#39;acc\xe8s \xe0 distance",id:"r\xe8gles-de-contr\xf4le-dacc\xe8s-\xe0-distance",level:3},{value:"Mise \xe0 jour des donn\xe9es",id:"mise-\xe0-jour-des-donn\xe9es",level:3},{value:"D\xe9finitions des objets",id:"d\xe9finitions-des-objets",level:2},{value:"Datastore",id:"datastore",level:3},{value:"Dataclass",id:"dataclass",level:3},{value:"Attribut",id:"attribut",level:3},{value:"Attributs de stockage et relationnels",id:"attributs-de-stockage-et-relationnels",level:4},{value:"Attributs calcul\xe9s et Alias",id:"attributs-calcul\xe9s-et-alias",level:4},{value:"Entity",id:"entity",level:3},{value:"Entity selection",id:"entity-selection",level:3},{value:"Entity selections tri\xe9es vs Entity selections non-tri\xe9es",id:"entity-selections-tri\xe9es-vs-entity-selections-non-tri\xe9es",level:4}];function c(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"La technologie ORDA est fond\xe9e sur une cartographie automatique d'une structure de base sous-jacente. Elle permet \xe9galement d'acc\xe9der aux donn\xe9es via des objets s\xe9lection d'entit\xe9s (entity selection) et entit\xe9 (entity). Par cons\xe9quent, ORDA expose la base de donn\xe9es enti\xe8re comme un ensemble d'objets de mod\xe8le de donn\xe9es."}),"\n",(0,r.jsx)(s.h2,{id:"correspondance-de-la-structure",children:"Correspondance de la structure"}),"\n",(0,r.jsxs)(s.p,{children:["When you call a datastore using the ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/ds",children:(0,r.jsx)(s.code,{children:"ds"})})," or the ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/open-datastore",children:(0,r.jsx)(s.code,{children:"Open datastore"})})," command, 4D automatically references tables and fields of the corresponding 4D structure as properties of the returned ",(0,r.jsx)(s.a,{href:"#datastore",children:"datastore"})," object:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Les tables correspondent \xe0 des dataclasses."}),"\n",(0,r.jsx)(s.li,{children:"Les champs correspondent \xe0 des attributs de stockage."}),"\n",(0,r.jsx)(s.li,{children:"Les relations correspondent \xe0 des attributs de relation - les noms de relation, d\xe9finis dans l'\xe9diteur de structure, sont utilis\xe9s comme noms d'attribut de relation."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:t(767543).Z+"",width:"961",height:"480"})}),"\n",(0,r.jsx)(s.h3,{id:"r\xe8gles-g\xe9n\xe9rales",children:"R\xe8gles g\xe9n\xe9rales"}),"\n",(0,r.jsx)(s.p,{children:"Les r\xe8gles suivantes s'appliquent \xe0 toutes les conversions :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Les noms de table, de champ et de relation correspondent \xe0 des noms de propri\xe9t\xe9 d'objet. Assurez-vous que ces noms sont conformes aux r\xe8gles g\xe9n\xe9rales de d\xe9nomination des objets, comme expliqu\xe9 dans la section ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/Concepts/identifiers",children:"Conventions de d\xe9nomination des objets"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Un datastore ne r\xe9f\xe9rence que les tables avec une seule cl\xe9 primaire. Les tables suivantes ne sont pas r\xe9f\xe9renc\xe9es :\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Tables sans cl\xe9 primaire"}),"\n",(0,r.jsx)(s.li,{children:"Tables avec cl\xe9s primaires composites."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Les champs BLOB sont automatiquement disponibles comme attributs de type ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/Concepts/blob#blob-types",children:"objet Blob"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"La correspondance ORDA ne prend pas en compte :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'l\'option "Invisible" pour les tables ou les champs,'}),"\n",(0,r.jsxs)(s.li,{children:["la structure virtuelle d\xe9finie par ",(0,r.jsx)(s.code,{children:"SET TABLE TITLES"})," ou ",(0,r.jsx)(s.code,{children:"SET FIELD TITLES"}),","]}),"\n",(0,r.jsx)(s.li,{children:'la propri\xe9t\xe9 "manuelle" ou "automatique" des relations.'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"r\xe8gles-de-contr\xf4le-dacc\xe8s-\xe0-distance",children:"R\xe8gles de contr\xf4le d'acc\xe8s \xe0 distance"}),"\n",(0,r.jsxs)(s.p,{children:["Lorsque vous acc\xe9dez \xe0 un datastore distant via la commande ",(0,r.jsx)(s.code,{children:"Ouvrir datastore"})," ou des ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/REST/gettingStarted",children:"requ\xeates REST"}),", seules les tables et les champs avec la propri\xe9t\xe9 de ressource ",(0,r.jsx)(s.strong,{children:"Expose as REST resource"})," sont disponibles \xe0 distance."]}),"\n",(0,r.jsx)(s.p,{children:"Cette option doit \xeatre choisie au niveau de la structure 4D pour chaque table et chaque champ que vous souhaitez voir appara\xeetre comme dataclass et attribut dans le datastore :"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:t(329458).Z+"",width:"279",height:"362"})}),"\n",(0,r.jsx)(s.h3,{id:"mise-\xe0-jour-des-donn\xe9es",children:"Mise \xe0 jour des donn\xe9es"}),"\n",(0,r.jsx)(s.p,{children:"Toute modification apport\xe9e \xe0 la structure de la base invalide la couche courante de donn\xe9es ORDA. Ces modifications incluent :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"l'ajout ou la suppression d'une table, d'un champ ou d'une relation"}),"\n",(0,r.jsx)(s.li,{children:"le renommage d'une table, d'un champ ou d'une relation"}),"\n",(0,r.jsx)(s.li,{children:"la modification d'une propri\xe9t\xe9 principale d'un champ (type, unique, index, autoincrement, valeur null)"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Lorsque la couche courante de donn\xe9es ORDA est invalid\xe9e, elle est automatiquement recharg\xe9e et mise \xe0 jour dans les prochains appels du datastore local ",(0,r.jsx)(s.code,{children:"ds"})," vers 4D et 4D Server. A noter que les r\xe9f\xe9rences existantes vers des objets ORDA tels que des entit\xe9s ou des s\xe9lections d'entit\xe9s continueront d'utiliser les donn\xe9es \xe0 partir desquelles elles ont \xe9t\xe9 cr\xe9\xe9es, et ce jusqu'\xe0 ce qu'elles soient reg\xe9n\xe9r\xe9es."]}),"\n",(0,r.jsx)(s.p,{children:"Toutefois, la couche de donn\xe9es ORDA mise \xe0 jour n'est pas automatiquement disponible dans les contextes suivants :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"une application 4D distante connect\xe9e \xe0 4D Server -- l'application distante doit \xeatre reconnect\xe9e au serveur."}),"\n",(0,r.jsxs)(s.li,{children:["un datastore distant ouvert \xe0 l'aide de ",(0,r.jsx)(s.code,{children:"Ouvrir datastore"})," ou des ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/REST/gettingStarted",children:"appels REST"})," -- une nouvelle session doit \xeatre ouverte."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"d\xe9finitions-des-objets",children:"D\xe9finitions des objets"}),"\n",(0,r.jsx)(s.h3,{id:"datastore",children:"Datastore"}),"\n",(0,r.jsxs)(s.p,{children:["Un datastore est l'objet d'interface d'une base de donn\xe9es. Il cr\xe9e une repr\xe9sentation de toute la base sous forme d'objet. Un datastore est constitu\xe9 d'un ",(0,r.jsx)(s.strong,{children:"mod\xe8le"})," et \xe0 de ",(0,r.jsx)(s.strong,{children:"donn\xe9es"})," :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Le mod\xe8le contient et d\xe9crit toutes les dataclasses qui composent le datastore. Il est ind\xe9pendant de la base de donn\xe9es sous-jacente."}),"\n",(0,r.jsx)(s.li,{children:"Les donn\xe9es se r\xe9f\xe8rent \xe0 l'information qui va \xeatre utilis\xe9e et stock\xe9e dans ce mod\xe8le. Par exemple, les noms, adresses et dates de naissance des employ\xe9s sont des \xe9l\xe9ments de donn\xe9es que vous pouvez utiliser dans un datastore."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Lorsqu'il est g\xe9r\xe9 via le code, le datastore est un objet dont les propri\xe9t\xe9s sont toutes les ",(0,r.jsx)(s.a,{href:"#dataclass",children:"dataclasses"})," ayant \xe9t\xe9 sp\xe9cifiquement expos\xe9es."]}),"\n",(0,r.jsx)(s.p,{children:"4d vous permet de g\xe9rer les datastores suivants :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["le datastore local, fond\xe9 sur la base 4D courante, retourn\xe9 par la commande ",(0,r.jsx)(s.code,{children:"ds"})," (le datastore principal)."]}),"\n",(0,r.jsxs)(s.li,{children:["un ou plusieurs datastores distants, expos\xe9s en tant que ressources RESET dans des bases 4D distantes, retourn\xe9s par la commande ",(0,r.jsx)(s.code,{children:"Ouvrir datastore"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Un datastore ne r\xe9f\xe9rence qu'une seule base de donn\xe9es locale ou distante."}),"\n",(0,r.jsx)(s.p,{children:"L'objet datastore lui-m\xeame ne peut pas \xeatre copi\xe9 en tant qu'objet :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"$mydatastore:=OB Copy(ds) //retourne null\n"})}),"\n",(0,r.jsx)(s.p,{children:"Les propri\xe9t\xe9s du datastore sont toutefois \xe9num\xe9rables :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:" ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds;$prop)\n  //$prop contient les noms de toutes les dataclasses\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Le datastore principal (par d\xe9faut) est toujours disponible via la commande ",(0,r.jsx)(s.code,{children:"ds"}),", mais la commande ",(0,r.jsx)(s.code,{children:"Ouvrir datastore"})," permet de r\xe9f\xe9rencer n'importe quel datastore distant."]}),"\n",(0,r.jsx)(s.h3,{id:"dataclass",children:"Dataclass"}),"\n",(0,r.jsx)(s.p,{children:"Une dataclasse est l'\xe9quivalent d'une table. Elle est utilis\xe9e comme mod\xe8le d'objet et r\xe9f\xe9rence tous les champs comme attributs, y compris les attributs relationnels (attributs construits \xe0 partir des relations entre les dataclasses). Les attributs relationnels peuvent \xeatre utilis\xe9s dans les requ\xeates comme tout autre attribut."}),"\n",(0,r.jsxs)(s.p,{children:["Toutes les dataclasses d'un projet 4D sont disponibles en tant que propri\xe9t\xe9 du datastore ",(0,r.jsx)(s.code,{children:"ds"}),". Pour les datastores distants acc\xe9d\xe9s via ",(0,r.jsx)(s.code,{children:"Open datastore"})," ou les ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/REST/gettingStarted",children:"requ\xeates REST"}),", l'option ",(0,r.jsx)(s.strong,{children:"Exposer comme ressource REST"})," doit \xeatre s\xe9lectionn\xe9e au niveau de la structure 4D pour chaque table que vous souhaitez exposer en tant que dataclass du datastore."]}),"\n",(0,r.jsx)(s.p,{children:"Par exemple, consid\xe9rons cette table dans la structure suivante :"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:t(263374).Z+"",width:"137",height:"188"})}),"\n",(0,r.jsxs)(s.p,{children:["La table ",(0,r.jsx)(s.code,{children:"Company"})," est automatiquement disponible en tant que dataclasse dans la banque de donn\xe9es ",(0,r.jsx)(s.code,{children:"ds"}),". Vous pouvez \xe9crire :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"var $compClass : cs.Company //d\xe9clare une variable objet $compClass de la classe Company\n$compClass:=ds.Company //affecte la r\xe9f\xe9rence de dataclasse Company \xe0 $compClass\n"})}),"\n",(0,r.jsx)(s.p,{children:"Un objet dataclass peut contenir :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"attributes"}),"\n",(0,r.jsx)(s.li,{children:"des attributs relationnels"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"La dataclass offre une abstraction de la base de donn\xe9es physique et permet de g\xe9rer un mod\xe8le de donn\xe9es conceptuel. La dataclass est le seul moyen d'interroger le datastore. Une requ\xeate est effectu\xe9e \xe0 partir d'une seule dataclass. Les requ\xeates sont construites autour des attributs et des noms d'attributs relationnels des dataclasses. Les attributs relationnels sont ainsi les moyens d'impliquer plusieurs tables li\xe9es dans une requ\xeate."}),"\n",(0,r.jsx)(s.p,{children:"L'objet dataclass lui-m\xeame ne peut pas \xeatre copi\xe9 en tant qu'objet :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"$mydataclass:=OB Copy(ds.Employee) //retourne null\n"})}),"\n",(0,r.jsx)(s.p,{children:"Les propri\xe9t\xe9s de la dataclass sont toutefois \xe9num\xe9rables :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-code4d",children:"ARRAY TEXT($prop;0)\nOB GET PROPERTY NAMES(ds.Employee;$prop)\n//$prop contient les noms de tous les attributs de dataclass\n"})}),"\n",(0,r.jsx)(s.h3,{id:"attribut",children:"Attribut"}),"\n",(0,r.jsx)(s.p,{children:"Les propri\xe9t\xe9s de dataclass sont des objets attribut d\xe9crivant les champs ou relations sous-jacents. Par exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:' $nameAttribute:=ds.Company.name //r\xe9f\xe9rence \xe0 un attribut de classe\n $revenuesAttribute:=ds.Company["revenues"] //m\xe9thode alternative\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Ce code attribue \xe0 ",(0,r.jsx)(s.code,{children:"$nameAttribute"})," et ",(0,r.jsx)(s.code,{children:"$revenuesAttribute"})," des r\xe9f\xe9rences aux attributs name et revenues de la classe ",(0,r.jsx)(s.code,{children:"Company"}),". Cette syntaxe ne retourne PAS les valeurs contenues dans l'attribut, mais retourne plut\xf4t des r\xe9f\xe9rences aux attributs eux-m\xeames. Pour g\xe9rer les valeurs, vous devez passer par les ",(0,r.jsx)(s.a,{href:"#entite",children:"Entit\xe9s"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Tous les fichiers \xe9ligibles d'une table sont disponibles en tant qu'attributs de leur ",(0,r.jsx)(s.a,{href:"#dataclass",children:"dataclass"})," parente. Pour les datastores distants accessibles via ",(0,r.jsx)(s.code,{children:"Open datastore"})," ou les ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/REST/gettingStarted",children:"requ\xeates REST"}),", l'option ",(0,r.jsx)(s.strong,{children:"Exposer comme ressource REST"})," doit \xeatre s\xe9lectionn\xe9e au niveau de la structure 4D pour chaque champ que vous souhaitez exposer en tant qu'attribut de dataclass."]}),"\n",(0,r.jsx)(s.h4,{id:"attributs-de-stockage-et-relationnels",children:"Attributs de stockage et relationnels"}),"\n",(0,r.jsx)(s.p,{children:"Les attributs de la Dataclass sont de plusieurs types : storage, relatedEntity et relatedEntities. Les attributs scalaires (c'est-\xe0-dire qui ne fournissent qu'une seule valeur) prennent en charge tous les types de donn\xe9es standard 4D (Entier, texte, objet, etc.)."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Un ",(0,r.jsx)(s.strong,{children:"attribut de stockage"})," (storage) est \xe9quivalent \xe0 un champ dans la base de donn\xe9es 4D et peut \xeatre index\xe9. Les valeurs affect\xe9es \xe0 un attribut de stockage sont stock\xe9es en tant que partie de l'entit\xe9 lors de son enregistrement. Lorsqu'on acc\xe8de \xe0 un attribut de stockage, sa valeur provient directement du datastore. Les attributs de stockage sont le bloc de construction le plus \xe9l\xe9mentaire d'une entit\xe9 et sont d\xe9finis par un nom et un type de donn\xe9es."]}),"\n",(0,r.jsxs)(s.li,{children:["Un ",(0,r.jsx)(s.strong,{children:"attribut relationnel"})," (relatedEntity et relatedEntities) donne acc\xe8s \xe0 d'autres entit\xe9s. Les attributs relationnels peuvent aboutir soit \xe0 une entit\xe9 unique (ou \xe0 aucune entit\xe9), soit \xe0 une s\xe9lection d'entit\xe9 (0 \xe0 N entit\xe9s). Les attributs relationnels s'appuient sur les relations \"classiques\" dans la structure relationnelle pour fournir un acc\xe8s direct \xe0 une entit\xe9 ou \xe0 des entit\xe9s reli\xe9es. Tous les attributs relationnels sont directement disponibles dans ORDA si vous utilisez leurs noms."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Prenons l'exemple de la structure de base de donn\xe9es partielle suivante et les propri\xe9t\xe9s relationnelles :"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:t(117490).Z+"",width:"690",height:"533"})}),"\n",(0,r.jsx)(s.p,{children:"Tous les attributs relationnels seront disponibles automatiquement :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'dans la dataclass Project : "ID", "name", et "companyID"'}),"\n",(0,r.jsx)(s.li,{children:'dans la dataclass Company : "ID", "name", et "discount"'}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"En outre, les attributs relationnels suivant seront \xe9galement disponibles automatiquement :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["dans la dataclass Project : l'attribut ",(0,r.jsx)(s.strong,{children:"theClient"}),', du type "relatedEntity" ; il y a au plus une compagnie pour chaque projet (le client)']}),"\n",(0,r.jsxs)(s.li,{children:["dans la dataclass Company : l'attribut ",(0,r.jsx)(s.strong,{children:"companyProjects"}),', du type "relatedEntities" ; pour chaque compagnie, il existe un certain nombre de projets reli\xe9s.']}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"La propri\xe9t\xe9 manuelle ou automatique d'une relation de base de donn\xe9es n'a aucun effet dans ORDA."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Tous les attributs de la dataclass sont expos\xe9s en tant que propri\xe9t\xe9s de la dataclass :"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:t(475696).Z+"",width:"1049",height:"288"})}),"\n",(0,r.jsxs)(s.p,{children:["Gardez \xe0 l'esprit que ces objets d\xe9crivent des attributs, mais ne donnent pas acc\xe8s aux donn\xe9es. La lecture ou l'\xe9criture des donn\xe9es se fait \xe0 travers des ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/ORDA/entities#using-entity-attributes",children:"objets entit\xe9"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"attributs-calcul\xe9s-et-alias",children:"Attributs calcul\xe9s et Alias"}),"\n",(0,r.jsxs)(s.p,{children:["Les ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/ORDA/ordaClasses#computed-attributes",children:"attributs calcul\xe9s"})," et les",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/ORDA/ordaClasses#alias-attributes",children:"attributs alias"})," sont des attributs \"virtuels\". Leur valeur n'est pas stock\xe9e mais \xe9valu\xe9e \xe0 chaque fois qu'on y acc\xe8de. Ils n'appartiennent pas \xe0 la structure sous-jacente de la base, mais ils se basent sur elle et peuvent \xeatre utilis\xe9s comme n'importe quel champ du mod\xe8le de donn\xe9es."]}),"\n",(0,r.jsx)(s.h3,{id:"entity",children:"Entity"}),"\n",(0,r.jsxs)(s.p,{children:["Une entit\xe9 est l'\xe9quivalent d'un enregistrement. Il s'agit d'un objet qui fait r\xe9f\xe9rence \xe0 un enregistrement de la base de donn\xe9es. Elle peut \xeatre per\xe7ue comme une instance de la ",(0,r.jsx)(s.a,{href:"#dataclass",children:"dataclass"}),", comme un enregistrement de la table correspondante \xe0 la dataclass. Toutefois, une entit\xe9 contient \xe9galement des donn\xe9es corr\xe9l\xe9es \xe0 la base de donn\xe9es li\xe9e au datastore."]}),"\n",(0,r.jsx)(s.p,{children:"Le but de l'entit\xe9 est de g\xe9rer les donn\xe9es (cr\xe9er, mettre \xe0 jour, supprimer). Lorsqu'une r\xe9f\xe9rence d'entit\xe9 est obtenue au moyen d'une s\xe9lection d'entit\xe9, elle conserve \xe9galement des informations sur la s\xe9lection d'entit\xe9 qui permet une it\xe9ration \xe0 travers la s\xe9lection."}),"\n",(0,r.jsx)(s.p,{children:"L'objet entit\xe9 lui-m\xeame ne peut pas \xeatre copi\xe9 en tant qu'objet :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:" $myentity:=OB Copy(ds.Employee.get(1)) //retourne null\n"})}),"\n",(0,r.jsx)(s.p,{children:"Les propri\xe9t\xe9s de l'entit\xe9 sont toutefois \xe9num\xe9rables :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:" ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)\n  //$prop contient les noms de tous les attributs de l'entit\xe9\n"})}),"\n",(0,r.jsx)(s.h3,{id:"entity-selection",children:"Entity selection"}),"\n",(0,r.jsx)(s.p,{children:"Une s\xe9lection d'entit\xe9 est un objet contenant une ou plusieurs r\xe9f\xe9rence(s) \xe0 des entit\xe9s appartenant \xe0 la m\xeame dataclasse. Elle est g\xe9n\xe9ralement cr\xe9\xe9e \xe0 la suite d'une requ\xeate ou retourn\xe9e \xe0 partir d'un attribut relationnel. Une entity selection peut contenir 0, 1 ou X entit\xe9s de la dataclass - o\xf9 X peut repr\xe9senter le nombre total d'entit\xe9s contenues dans la dataclass."}),"\n",(0,r.jsx)(s.p,{children:"Voici un exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"var $e : cs.EmployeeSelection //d\xe9clare une variable objet $e de type de classe EmployeeSelection\n$e:=ds.Employee.all() //assigne la r\xe9f\xe9rence de la s\xe9lection d'entit\xe9 r\xe9sultante \xe0 la variable $e\n"})}),"\n",(0,r.jsxs)(s.p,{children:['Les entity selections peuvent \xeatre "tri\xe9es" ou "non tri\xe9es" (',(0,r.jsx)(s.a,{href:"#ordered-or-unordered-entity-selection",children:"voir ci-dessous"}),")."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:['Les entity selections peuvent \xe9galement \xeatre "partageables" ou "non partageables", selon ',(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/ORDA/entities#shareable-or-alterable-entity-selections",children:"la fa\xe7on dont elles ont \xe9t\xe9 cr\xe9\xe9es"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"L'objet s\xe9lection d'entit\xe9s lui-m\xeame ne peut pas \xeatre copi\xe9 en tant qu'objet :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:" $myentitysel:=OB Copy(ds.Employee.all()) //retourne null\n"})}),"\n",(0,r.jsx)(s.p,{children:"Les propri\xe9t\xe9s des s\xe9lections d'entit\xe9s sont toutefois \xe9num\xe9rables :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:' ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.all();$prop)\n  //$prop contient les noms des propri\xe9t\xe9s des s\xe9lections d\'entit\xe9s\n  //("length", "00", "01"...)\n'})}),"\n",(0,r.jsx)(s.h4,{id:"entity-selections-tri\xe9es-vs-entity-selections-non-tri\xe9es",children:"Entity selections tri\xe9es vs Entity selections non-tri\xe9es"}),"\n",(0,r.jsxs)(s.p,{children:["Pour des raisons d'optimisation, par d\xe9faut, 4D ORDA cr\xe9e g\xe9n\xe9ralement des s\xe9lections d'entit\xe9s non-ordonn\xe9es, sauf lorsque vous utilisez la m\xe9thode ",(0,r.jsx)(s.code,{children:"orderBy( )"}),' ou si vous utilisez les options appropri\xe9es. Dans cette documentation, sauf indication contraire, "s\xe9lection d\'entit\xe9s" fait g\xe9n\xe9ralement r\xe9f\xe9rence \xe0 une "s\xe9lection d\'entit\xe9s non-ordonn\xe9e".']}),"\n",(0,r.jsx)(s.p,{children:"Les s\xe9lections d'entit\xe9s ordonn\xe9es sont cr\xe9\xe9es uniquement lorsque cela est n\xe9cessaire ou lorsqu'elles sont sp\xe9cifiquement demand\xe9es \xe0 l'aide d'options, c'est-\xe0-dire dans les cas suivants :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["r\xe9sultat d'un ",(0,r.jsx)(s.code,{children:"orderBy( )"})," sur une s\xe9lection (de n'importe quel type) ou un ",(0,r.jsx)(s.code,{children:"orderBy( )"})," sur une dataclass,"]}),"\n",(0,r.jsxs)(s.li,{children:["r\xe9sultat de la m\xe9thode ",(0,r.jsx)(s.code,{children:"newSelection( )"})," avec l'option ",(0,r.jsx)(s.code,{children:"dk keep ordered"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Les s\xe9lections d'entit\xe9s non-tri\xe9es sont cr\xe9\xe9es dans les cas suivants :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["r\xe9sultat d'un ",(0,r.jsx)(s.code,{children:"query()"})," standard sur une s\xe9lection (de n'importe quel type) ou un ",(0,r.jsx)(s.code,{children:"query()"})," sur une dataclass,"]}),"\n",(0,r.jsxs)(s.li,{children:["r\xe9sultat de la m\xe9thode ",(0,r.jsx)(s.code,{children:"newSelection()"})," sans option,"]}),"\n",(0,r.jsxs)(s.li,{children:["r\xe9sultat de l'une des m\xe9thodes de comparaison, quel que soit le type de s\xe9lection saisi : ",(0,r.jsx)(s.code,{children:"or()"}),", ",(0,r.jsx)(s.code,{children:"and()"}),", ",(0,r.jsx)(s.code,{children:"minus()"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Les entity selections suivantes sont toujours ",(0,r.jsx)(s.strong,{children:"tri\xe9es"})," :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"entity selections retourn\xe9es par 4D Server vers un client distant"}),"\n",(0,r.jsx)(s.li,{children:"entity selections bas\xe9es sur des datastores distants."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Notez que lorsqu'une s\xe9lection d'entit\xe9s ordonn\xe9e devient une s\xe9lection non-ordonn\xe9e, toute r\xe9f\xe9rence d'entit\xe9 r\xe9p\xe9t\xe9e est supprim\xe9e."})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},329458:function(e,s,t){t.d(s,{Z:function(){return n}});let n=t.p+"assets/images/ExposeDataclass-493afc3bdbd30cb758f171009c9d11bb.png"},263374:function(e,s,t){t.d(s,{Z:function(){return n}});let n=t.p+"assets/images/companyTable-15e8c71e579a6392b89a8e3f45aa8536.png"},475696:function(e,s,t){t.d(s,{Z:function(){return n}});let n=t.p+"assets/images/dataclassProperties-b0e6524ae14723315b5d45435df82853.png"},767543:function(e,s,t){t.d(s,{Z:function(){return n}});let n=t.p+"assets/images/datastoreMapping-833be12255d9e7b9cde49426a0cc902f.png"},117490:function(e,s,t){t.d(s,{Z:function(){return n}});let n=t.p+"assets/images/relationProperties-f7d9bc6fc793e2bae76ea2164c37ffe3.png"},250065:function(e,s,t){t.d(s,{Z:function(){return l},a:function(){return i}});var n=t(667294);let r={},a=n.createContext(r);function i(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);