"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66153"],{579683:function(e,s,t){t.r(s),t.d(s,{default:()=>c,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>r});var n=JSON.parse('{"id":"ORDA/glossary","title":"Glossaire","description":"Aper\xe7u des principaux concepts","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/ORDA/glossary.md","sourceDirName":"ORDA","slug":"/ORDA/glossary","permalink":"/docs/fr/19/ORDA/glossary","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fglossary.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"glossary","title":"Glossaire"},"sidebar":"docs","previous":{"title":"Utiliser un datastore distant","permalink":"/docs/fr/19/ORDA/datastores"},"next":{"title":"Fonctions de classe et commandes","permalink":"/docs/fr/19/API/overview"}}'),i=t("785893"),a=t("250065");let l={id:"glossary",title:"Glossaire"},r=void 0,o={},d=[{value:"Aper\xe7u des principaux concepts",id:"aper\xe7u-des-principaux-concepts",level:2},{value:"Attribut",id:"attribut",level:2},{value:"AttributePath",id:"attributepath",level:2},{value:"Class code",id:"class-code",level:2},{value:"Data model class",id:"data-model-class",level:2},{value:"Data model object",id:"data-model-object",level:2},{value:"Data model function",id:"data-model-function",level:2},{value:"Dataclass",id:"dataclass",level:2},{value:"DataClass class",id:"dataclass-class",level:2},{value:"Datastore",id:"datastore",level:2},{value:"DataStore class",id:"datastore-class",level:2},{value:"DataStoreImplementation",id:"datastoreimplementation",level:2},{value:"Copie profonde",id:"copie-profonde",level:2},{value:"ds",id:"ds",level:2},{value:"Entity",id:"entity",level:2},{value:"Entity selection",id:"entity-selection",level:2},{value:"Classe g\xe9n\xe9rique",id:"classe-g\xe9n\xe9rique",level:2},{value:"Lazy loading",id:"lazy-loading",level:2},{value:"Datastore principal",id:"datastore-principal",level:2},{value:"M\xe9thode",id:"m\xe9thode",level:2},{value:"Type de donn\xe9es &quot;Mixte&quot;",id:"type-de-donn\xe9es-mixte",level:2},{value:"Verrouillage optimiste",id:"verrouillage-optimiste",level:2},{value:"Verrouillage pessimiste",id:"verrouillage-pessimiste",level:2},{value:"Propri\xe9t\xe9",id:"propri\xe9t\xe9",level:2},{value:"PropertyPath",id:"propertypath",level:2},{value:"Regular class",id:"regular-class",level:2},{value:"Related dataclass",id:"related-dataclass",level:2},{value:"Attribut relationnel",id:"attribut-relationnel",level:2},{value:"Entit\xe9s li\xe9es",id:"entit\xe9s-li\xe9es",level:2},{value:"Remote datastore",id:"remote-datastore",level:2},{value:"Session",id:"session",level:2},{value:"Copie superficielle (Shallow copy)",id:"copie-superficielle-shallow-copy",level:2},{value:"Stamp",id:"stamp",level:2}];function u(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"aper\xe7u-des-principaux-concepts",children:"Aper\xe7u des principaux concepts"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(632641).Z+"",width:"478",height:"433"})}),"\n",(0,i.jsx)(s.h2,{id:"attribut",children:"Attribut"}),"\n",(0,i.jsxs)(s.p,{children:["Un attribut est la plus petite cellule de stockage dans une base de donn\xe9es relationnelle (voir aussi ",(0,i.jsx)(s.a,{href:"#relation-attribute",children:"Attribut relationnel"}),"). Ne confondez pas les attributs de la dataclass et les attributs d'entit\xe9s :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Dans un objet dataclass, chaque propri\xe9t\xe9 est un attribut de dataclass qui correspond \xe0 un champ dans la table correspondante (m\xeame nom et m\xeame type)."}),"\n",(0,i.jsx)(s.li,{children:"Dans un objet entity, les attributs d'entit\xe9s sont des propri\xe9t\xe9s qui contiennent les valeurs pour les attributs du datastore correspondants."}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:'Attributes and properties are similar concepts. "Attribut" est utilis\xe9 pour d\xe9signer les propri\xe9t\xe9s de la dataclass qui stockent les donn\xe9es, tandis que "propri\xe9t\xe9" est plus g\xe9n\xe9rique et d\xe9finit une donn\xe9e stock\xe9e dans un objet.'}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"attributepath",children:"AttributePath"}),"\n",(0,i.jsxs)(s.p,{children:["Un attributePath est le chemin d'un attribut \xe0 l'int\xe9rieur d'une dataclass ou d'une entit\xe9 donn\xe9e. See also ",(0,i.jsx)(s.a,{href:"#propertypath",children:"PropertyPath"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"class-code",children:"Class code"}),"\n",(0,i.jsx)(s.p,{children:"Code pour la (les) fonction(s) de classe utilisateurs."}),"\n",(0,i.jsx)(s.h2,{id:"data-model-class",children:"Data model class"}),"\n",(0,i.jsx)(s.p,{children:"Classe \xe9tendue disponible pour un objet mod\xe8le de donn\xe9es."}),"\n",(0,i.jsx)(s.h2,{id:"data-model-object",children:"Data model object"}),"\n",(0,i.jsx)(s.p,{children:"Objets de base de donn\xe9es disponibles via le concept ORDA, c'est-\xe0-dire datastore, dataclasses, entities (entit\xe9s) et entity selections (s\xe9lections d'entit\xe9s)."}),"\n",(0,i.jsx)(s.h2,{id:"data-model-function",children:"Data model function"}),"\n",(0,i.jsx)(s.p,{children:"Fonction d'une classe de mod\xe8le de donn\xe9es ORDA."}),"\n",(0,i.jsx)(s.h2,{id:"dataclass",children:"Dataclass"}),"\n",(0,i.jsx)(s.p,{children:"Une dataclass est un objet qui d\xe9crit les donn\xe9es. Les tables de la base de donn\xe9es fournies par le datastore sont g\xe9r\xe9es via des dataclasses. Chaque table de la base de donn\xe9es fournie par le datastore poss\xe8de une dataclass correspondante portant le m\xeame nom. Chaque champ de la table est un attribut de la dataclass."}),"\n",(0,i.jsx)(s.p,{children:"Une dataclass est reli\xe9e \xe0 un seul datastore."}),"\n",(0,i.jsx)(s.h2,{id:"dataclass-class",children:"DataClass class"}),"\n",(0,i.jsx)(s.p,{children:"Classe pour des objets dataclass sp\xe9cifiques, dans laquelle vous pouvez ajouter des fonctions personnalis\xe9es."}),"\n",(0,i.jsx)(s.h2,{id:"datastore",children:"Datastore"}),"\n",(0,i.jsxs)(s.p,{children:["Un datastore est l'objet d'interface fourni par ORDA pour r\xe9f\xe9rencer une structure et acc\xe9der \xe0 ses donn\xe9es. La base de donn\xe9es principale, retourn\xe9e par la commande ",(0,i.jsx)(s.code,{children:"ds"}),", est disponible en tant que datastore (le datastore principal)."]}),"\n",(0,i.jsx)(s.p,{children:"Un datastore fournit :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"une connexion \xe0 la base de donn\xe9es 4D"}),"\n",(0,i.jsx)(s.li,{children:"un ensemble de dataclasses pour travailler avec la base de donn\xe9es"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"La base peut \xeatre une base locale 4D (le datastore principal), ou une base 4D Server expos\xe9e en ressource REST (un datastore distant)."}),"\n",(0,i.jsx)(s.p,{children:"Un datastore ne r\xe9f\xe9rence qu'une seule base de donn\xe9es. Il est toutefois possible d'ouvrir plusieurs datastores pour acc\xe9der \xe0 plusieurs bases."}),"\n",(0,i.jsx)(s.h2,{id:"datastore-class",children:"DataStore class"}),"\n",(0,i.jsx)(s.p,{children:"Classe pour des objets datastore sp\xe9cifiques, dans laquelle vous pouvez ajouter des fonctions personnalis\xe9es."}),"\n",(0,i.jsx)(s.h2,{id:"datastoreimplementation",children:"DataStoreImplementation"}),"\n",(0,i.jsxs)(s.p,{children:["Nom interne de la classe g\xe9n\xe9rique DataStore dans le class store ",(0,i.jsx)(s.code,{children:"4D"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"copie-profonde",children:"Copie profonde"}),"\n",(0,i.jsx)(s.p,{children:"Une copie profonde (deep copy) duplique un objet et toutes les r\xe9f\xe9rences qu'il contient. Apr\xe8s une deep copy, une collection copi\xe9e contient des \xe9l\xe9ments dupliqu\xe9s et donc de nouvelles r\xe9f\xe9rences de tous les \xe9l\xe9ments originaux. Voir \xe9galement Copie superficielle."}),"\n",(0,i.jsx)(s.h2,{id:"ds",children:"ds"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"ds"})," est la commande de langage 4D qui retourne une r\xe9f\xe9rence d'objet ",(0,i.jsx)(s.a,{href:"/docs/fr/19/ORDA/dsmapping#datastore",children:"datastore"}),". Elle correspond au datastore disponible sur la base de donn\xe9es principale 4D."]}),"\n",(0,i.jsx)(s.h2,{id:"entity",children:"Entity"}),"\n",(0,i.jsx)(s.p,{children:"Une entit\xe9 est un objet qui correspond \xe0 un mod\xe8le de dataclass. Une entit\xe9 contient les m\xeames attributs que la dataclass."}),"\n",(0,i.jsx)(s.p,{children:"Une entit\xe9 peut \xeatre vue comme une instance de la dataclass, comme un enregistrement de la table correspondante \xe0 la dataclass dans son datastore associ\xe9. Cependant, une entit\xe9 contient \xe9galement des donn\xe9es connexes. Le but de l'entit\xe9 est de g\xe9rer les donn\xe9es (cr\xe9er, mettre \xe0 jour, supprimer)."}),"\n",(0,i.jsx)(s.p,{children:"Pour plus d'informations, voir le chapitre Entit\xe9s."}),"\n",(0,i.jsx)(s.h2,{id:"entity-selection",children:"Entity selection"}),"\n",(0,i.jsx)(s.p,{children:"Une s\xe9lection d'entit\xe9s (entity selection) est un objet. Lorsqu'une requ\xeate est envoy\xe9e au datastore, une s\xe9lection d'entit\xe9s est retourn\xe9e. Une s\xe9lection d'entit\xe9 est un ensemble de r\xe9f\xe9rences \xe0 des entit\xe9s li\xe9es \xe0 la m\xeame dataclass."}),"\n",(0,i.jsx)(s.p,{children:"Une s\xe9lection d'entit\xe9s contient :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"un ensemble de 0 \xe0 X r\xe9f\xe9rences d'entit\xe9s,"}),"\n",(0,i.jsx)(s.li,{children:"une propri\xe9t\xe9 length (toujours),"}),"\n",(0,i.jsx)(s.li,{children:"les propri\xe9t\xe9s queryPlan et queryPath (si demand\xe9es lors de la requ\xeate)."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Une s\xe9lection d'entit\xe9s peut \xe9galement \xeatre vide."}),"\n",(0,i.jsx)(s.h2,{id:"classe-g\xe9n\xe9rique",children:"Classe g\xe9n\xe9rique"}),"\n",(0,i.jsxs)(s.p,{children:["Classe int\xe9gr\xe9e pour les objets ORDA tels que les entit\xe9s ou les dataclasses. Les fonctions et propri\xe9t\xe9s des classes g\xe9n\xe9riques sont automatiquement disponibles dans les classes utilisateur \xe9tendues, telles que ",(0,i.jsx)(s.code,{children:"EmployeeEntity"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"lazy-loading",children:"Lazy loading"}),"\n",(0,i.jsx)(s.p,{children:"Commes les entit\xe9s sont g\xe9r\xe9es comme des r\xe9f\xe9rences, les donn\xe9es sont charg\xe9es uniquement lorsque cela est n\xe9cessaire, c'est-\xe0-dire lorsqu'on y acc\xe8de dans le code ou via des widgets d'interface. Ce principe d'optimisation est appel\xe9 lazy loading."}),"\n",(0,i.jsx)(s.h2,{id:"datastore-principal",children:"Datastore principal"}),"\n",(0,i.jsx)(s.p,{children:"L'objet Datastore correspondant \xe0 la base 4D ouverte (autonome ou client/serveur). Le datastore principal est retourn\xe9 par la commande ds."}),"\n",(0,i.jsx)(s.h2,{id:"m\xe9thode",children:"M\xe9thode"}),"\n",(0,i.jsx)(s.p,{children:'Les objets ORDA tels que les "datastores", "dataclasses", "entity selections" et "entities" d\xe9finissent les classes d\'objets. Ils fournissent des m\xe9thodes sp\xe9cifiques pour interagir directement avec eux. Ces m\xe9thodes sont aussi appel\xe9es des fonctions membres (member functions). Ces m\xe9thodes sont utilis\xe9es en \xe9tant appel\xe9es sur une instance de l\'objet.'}),"\n",(0,i.jsxs)(s.p,{children:["Par exemple, la m\xe9thode ",(0,i.jsx)(s.code,{children:"query()"}),' est une "member function" de dataclass. Si vous avez stock\xe9 un objet dataclass dans la variable ',(0,i.jsx)(s.code,{children:"$myClass"}),", vous pouvez \xe9crire :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-code4d",children:'$myClass.query("name = smith")\n'})}),"\n",(0,i.jsx)(s.h2,{id:"type-de-donn\xe9es-mixte",children:'Type de donn\xe9es "Mixte"'}),"\n",(0,i.jsx)(s.p,{children:'Dans cette documentation, le type de donn\xe9es "Mixte" est utilis\xe9 pour d\xe9signer les diff\xe9rents types de valeurs qui peuvent \xeatre stock\xe9s dans les attributs d\'une dataclass. Cela inclut :'}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"number"}),"\n",(0,i.jsx)(s.li,{children:"text"}),"\n",(0,i.jsx)(s.li,{children:"Null"}),"\n",(0,i.jsx)(s.li,{children:"boolean"}),"\n",(0,i.jsx)(s.li,{children:"date"}),"\n",(0,i.jsx)(s.li,{children:"object"}),"\n",(0,i.jsx)(s.li,{children:"collection"}),"\n",(0,i.jsx)(s.li,{children:"image(*)"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"(*) le type Image n'est pas support\xe9 par des m\xe9thodes statistiques telles que dans"})," ",(0,i.jsx)(s.code,{children:"entitySelection.max()"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"verrouillage-optimiste",children:"Verrouillage optimiste"}),"\n",(0,i.jsx)(s.p,{children:"En mode \"verrouillage optimiste\", les entit\xe9s ne sont pas verrouill\xe9es explicitement avant d'\xeatre mises \xe0 jour. Chaque entit\xe9 a un marqueur interne qui est automatiquement incr\xe9ment\xe9 chaque fois que l'entit\xe9 est enregistr\xe9e sur le disque. Les m\xe9thodes entity.save( ) ou entity.drop( ) retourneront une erreur si le marqueur de l'entit\xe9 charg\xe9e en m\xe9moire et le marqueur de l'entit\xe9 sur le disque ne correspondent pas, ou si l'entit\xe9 a \xe9t\xe9 supprim\xe9e. Le verrouillage optimiste est uniquement disponible dans l'impl\xe9mentation ORDA. Voir aussi \"verrouillage pessimiste\"."}),"\n",(0,i.jsx)(s.h2,{id:"verrouillage-pessimiste",children:"Verrouillage pessimiste"}),"\n",(0,i.jsx)(s.p,{children:"Un \"verrouillage pessimiste\" signifie qu'une entit\xe9 est verrouill\xe9e avant que l'on y acc\xe8de, en utilisant la m\xe9thode entity.lock( ). Les autres process ne peuvent ni mettre \xe0 jour ni supprimer l'entit\xe9 tant qu'elle n'est pas d\xe9verrouill\xe9e. Le langage 4D classique n'autorise que les verrouillages pessimistes. Voir \"Verrouillage optimiste\"."}),"\n",(0,i.jsx)(s.h2,{id:"propri\xe9t\xe9",children:"Propri\xe9t\xe9"}),"\n",(0,i.jsxs)(s.p,{children:["Voir ",(0,i.jsx)(s.a,{href:"#attribute",children:"Attribut"}),"."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:'Attributes and properties are similar concepts. "Attribut" est utilis\xe9 pour d\xe9signer les propri\xe9t\xe9s de la dataclass qui stockent les donn\xe9es, tandis que "propri\xe9t\xe9" est plus g\xe9n\xe9rique et d\xe9finit une donn\xe9e stock\xe9e dans un objet.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"propertypath",children:"PropertyPath"}),"\n",(0,i.jsx)(s.p,{children:'Un propertyPath est le chemin vers une propri\xe9t\xe9 dans un objet donn\xe9. Si la propri\xe9t\xe9 est imbriqu\xe9e \xe0 plusieurs niveaux, chaque niveau est s\xe9par\xe9 par un point (".").'}),"\n",(0,i.jsx)(s.h2,{id:"regular-class",children:"Regular class"}),"\n",(0,i.jsx)(s.p,{children:"Classe utilisateur non li\xe9e \xe0 un objet ORDA."}),"\n",(0,i.jsx)(s.h2,{id:"related-dataclass",children:"Related dataclass"}),"\n",(0,i.jsx)(s.p,{children:"Ce sont des dataclasses li\xe9es par des attributs de relation."}),"\n",(0,i.jsx)(s.h2,{id:"attribut-relationnel",children:"Attribut relationnel"}),"\n",(0,i.jsx)(s.p,{children:"Les attributs de relation sont utilis\xe9s pour conceptualiser les relations entre les dataclasses (N vers 1 et 1 vers N)."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Relation N vers 1 (la dataclassA fait r\xe9f\xe9rence \xe0 une occurrence de la dataclassB) : un attribut de relation est disponible dans dataclassA et fait r\xe9f\xe9rence \xe0 une instance de dataclassB."}),"\n",(0,i.jsx)(s.li,{children:"Relation 1 vers N (une occurrence de dataclassB fait r\xe9f\xe9rence \xe0 plusieurs occurrences de dataclassA) : un attribut de relation est disponible dans la dataclassB et fait r\xe9f\xe9rence \xe0 plusieurs instances de la dataclassA."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Une dataclass peut avoir des attributs de relation r\xe9cursifs."}),"\n",(0,i.jsx)(s.p,{children:"Dans une entit\xe9, la valeur d'un attribut de relation peut \xeatre une entit\xe9 ou une s\xe9lection d'entit\xe9."}),"\n",(0,i.jsx)(s.h2,{id:"entit\xe9s-li\xe9es",children:"Entit\xe9s li\xe9es"}),"\n",(0,i.jsx)(s.p,{children:"Une entit\xe9 associ\xe9e peut \xeatre consid\xe9r\xe9e comme l'instance d'un attribut de relation dans une dataclass."}),"\n",(0,i.jsx)(s.p,{children:"Les s\xe9lections d'entit\xe9s peuvent faire r\xe9f\xe9rence \xe0 des entit\xe9s relatives selon les attributs de relation d\xe9finis dans les dataclasses correspondantes."}),"\n",(0,i.jsx)(s.h2,{id:"remote-datastore",children:"Remote datastore"}),"\n",(0,i.jsx)(s.p,{children:"Une base de donn\xe9es 4D ouverte sur 4D ou 4D Server (disponible via HTTP) et expos\xe9e en tant que ressource REST. Cette base de donn\xe9es peut \xeatre r\xe9f\xe9renc\xe9e localement en tant que Datastore \xe0 partir d'autres postes de travail, o\xf9 un locaID lui est attribu\xe9. Le datastore distant peut \xeatre utilis\xe9 \xe0 travers les concepts ORDA (datastore, dataclass, s\xe9lection d'entit\xe9s, etc.). Cette utilisation est soumise \xe0 un syst\xe8me de licence."}),"\n",(0,i.jsx)(s.h2,{id:"session",children:"Session"}),"\n",(0,i.jsx)(s.p,{children:"Lorsque l'application 4D se connecte \xe0 un datastore distant, une session est cr\xe9\xe9e sur le 4D Server (HTTP). Un cookie de session est g\xe9n\xe9r\xe9 et associ\xe9 \xe0 l'ID du datastore local."}),"\n",(0,i.jsx)(s.p,{children:"Chaque fois qu'une nouvelle session est ouverte, une licence est utilis\xe9e. Chaque fois qu'une session est ferm\xe9e, la licence est lib\xe9r\xe9e."}),"\n",(0,i.jsx)(s.p,{children:"Les sessions inactives sont automatiquement ferm\xe9es apr\xe8s un d\xe9lai. Le timeout par d\xe9faut est de 48 heures, il peut \xeatre d\xe9fini par le d\xe9veloppeur (il doit \xeatre >= 60 minutes)."}),"\n",(0,i.jsx)(s.h2,{id:"copie-superficielle-shallow-copy",children:"Copie superficielle (Shallow copy)"}),"\n",(0,i.jsx)(s.p,{children:"Une copie superficielle (shallow copy) ne fait que dupliquer la structure des \xe9l\xe9ments et conserve les m\xeames r\xe9f\xe9rences internes. Apr\xe8s une copie superficielle, deux collections partageront les \xe9l\xe9ments individuels. Voir \xe9galement Copie profonde."}),"\n",(0,i.jsx)(s.h2,{id:"stamp",children:"Stamp"}),"\n",(0,i.jsx)(s.p,{children:'Utilis\xe9 dans la technologie du verrouillage "optimiste". Toutes les entit\xe9s ont un compteur interne, le marqueur, qui est incr\xe9ment\xe9 chaque fois que l\'entit\xe9 est sauvegard\xe9e. En comparant automatiquement les marqueurs entre une entit\xe9 sauvegard\xe9e et sa version stock\xe9e sur disque, 4D peut emp\xeacher les modifications simultan\xe9es sur les m\xeames entit\xe9s.'})]})}function c(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},632641:function(e,s,t){t.d(s,{Z:function(){return n}});let n=t.p+"assets/images/mainConcepts-f749b0303b2e0c0e718d1b7cb8374126.png"},250065:function(e,s,t){t.d(s,{Z:function(){return r},a:function(){return l}});var n=t(667294);let i={},a=n.createContext(i);function l(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);