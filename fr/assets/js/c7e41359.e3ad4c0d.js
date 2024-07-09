/*! For license information please see c7e41359.e3ad4c0d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13844],{805841:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var r=t(474848),o=t(28453);const n={id:"code-overview",title:"Methods and classes"},i=void 0,d={id:"Project/code-overview",title:"Methods and classes",description:"The 4D code used across your project is written in methods and classes.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/Project/code-overview.md",sourceDirName:"Project",slug:"/Project/code-overview",permalink:"/docs/fr/Project/code-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fcode-overview.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"code-overview",title:"Methods and classes"},sidebar:"docs",previous:{title:"Documenter un projet",permalink:"/docs/fr/Project/documentation"},next:{title:"\xc9diteur de code",permalink:"/docs/fr/code-editor/write-class-method"}},l={},c=[{value:"Cr\xe9er des m\xe9thodes",id:"Cr\xe9er-des-m\xe9thodes",level:2},{value:"Cr\xe9er des classes",id:"Cr\xe9er-des-classes",level:2},{value:"Supprimer des m\xe9thodes ou des classes",id:"Supprimer-des-m\xe9thodes-ou-des-classes",level:2},{value:"Importer et exporter le code",id:"Importer-et-exporter-le-code",level:2},{value:"Propri\xe9t\xe9s des m\xe9thodes projet",id:"Propri\xe9t\xe9s-des-m\xe9thodes-projet",level:2},{value:"Nom",id:"Nom",level:3},{value:"Attributs",id:"Attributs",level:3},{value:"Invisible",id:"Invisible",level:4},{value:"Partag\xe9e entre composants et projet h\xf4te",id:"Partag\xe9e-entre-composants-et-projet-h\xf4te",level:4},{value:"Ex\xe9cuter sur serveur",id:"Ex\xe9cuter-sur-serveur",level:4},{value:"Mode d\u2019ex\xe9cution",id:"Mode-dex\xe9cution",level:3},{value:"Disponibilit\xe9",id:"Disponibilit\xe9",level:3},{value:"Web Services",id:"Web-Services",level:4},{value:"Publi\xe9 dans WSDL",id:"Publi\xe9-dans-WSDL",level:4},{value:"Balises HTML et URLs 4D (4DACTION...)",id:"Balises-HTML-et-URLs-4D-4DACTION",level:4},{value:"SQL",id:"SQL",level:4},{value:"Serveur REST",id:"Serveur-REST",level:4},{value:"Modifier attributs globalement",id:"Modifier-attributs-globalement",level:4}];function a(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["The 4D code used across your project is written in ",(0,r.jsx)(s.a,{href:"/docs/fr/Concepts/methods",children:"methods"})," and ",(0,r.jsx)(s.a,{href:"/docs/fr/Concepts/classes",children:"classes"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["L'IDE de 4D vous offre diverses fonctionnalit\xe9s pour cr\xe9er, modifier, exporter ou supprimer votre code. You will usually use the 4D ",(0,r.jsx)(s.a,{href:"/docs/fr/code-editor/write-class-method",children:"code editor"})," to work with your code."]}),"\n",(0,r.jsx)(s.h2,{id:"Cr\xe9er-des-m\xe9thodes",children:"Cr\xe9er des m\xe9thodes"}),"\n",(0,r.jsxs)(s.p,{children:["A method in 4D is stored in a ",(0,r.jsx)(s.strong,{children:".4dm"})," file located in the appropriate folder of the ",(0,r.jsx)(s.a,{href:"/docs/fr/Project/architecture#sources",children:(0,r.jsx)(s.code,{children:"/Project/Sources/"})})," folder."]}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez cr\xe9er ",(0,r.jsx)(s.a,{href:"/docs/fr/Concepts/methods",children:"plusieurs types de m\xe9thodes"})," :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Tous les types de m\xe9thodes peuvent \xeatre cr\xe9\xe9s ou ouverts \xe0 partir de la fen\xeatre de l'",(0,r.jsx)(s.strong,{children:"Explorateur"})," (\xe0 l'exception des m\xe9thodes Objet qui sont g\xe9r\xe9es \xe0 partir de l'",(0,r.jsx)(s.a,{href:"/docs/fr/FormEditor/overview",children:"\xe9diteur de formulaires"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:["Project methods can also be created or opened from the ",(0,r.jsx)(s.strong,{children:"File"})," menu or toolbar (",(0,r.jsx)(s.strong,{children:"New/Method..."})," or ",(0,r.jsx)(s.strong,{children:"Open/Method..."}),") or using shortcuts in the ",(0,r.jsx)(s.a,{href:"/docs/fr/code-editor/write-class-method#shortcuts",children:"Code editor window"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"Les triggers peuvent \xe9galement \xeatre cr\xe9\xe9s ou ouverts \xe0 partir de l'\xe9diteur de Structure."}),"\n",(0,r.jsxs)(s.li,{children:["Les m\xe9thodes formulaire peuvent \xe9galement \xeatre cr\xe9\xe9es ou ouvertes \xe0 partir de l'",(0,r.jsx)(s.a,{href:"/docs/fr/FormEditor/overview",children:"\xe9diteur de formulaires"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"Cr\xe9er-des-classes",children:"Cr\xe9er des classes"}),"\n",(0,r.jsxs)(s.p,{children:["A user class in 4D is defined by a specific method file (",(0,r.jsx)(s.strong,{children:".4dm"}),"), stored in the ",(0,r.jsx)(s.a,{href:"/docs/fr/Project/architecture#sources",children:(0,r.jsx)(s.code,{children:"/Project/Sources/Classes/"})})," folder. Le nom du fichier est le nom de la classe."]}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez cr\xe9er un fichier de classe \xe0 partir du menu ou de la barre d'outils ",(0,r.jsx)(s.strong,{children:"Fichier"})," (",(0,r.jsx)(s.strong,{children:"Nouveau/Classe..."}),") ou dans la page ",(0,r.jsx)(s.strong,{children:"M\xe9thodes"})," de la fen\xeatre de l'",(0,r.jsx)(s.strong,{children:"Explorateur"})," ."]}),"\n",(0,r.jsxs)(s.p,{children:["Pour plus d'informations, reportez-vous \xe0 la section ",(0,r.jsx)(s.a,{href:"/docs/fr/Concepts/classes",children:"Classes"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"Supprimer-des-m\xe9thodes-ou-des-classes",children:"Supprimer des m\xe9thodes ou des classes"}),"\n",(0,r.jsx)(s.p,{children:"Pour supprimer une m\xe9thode ou une classe existante, vous pouvez :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["sur votre disque, supprimer le fichier ",(0,r.jsx)(s.em,{children:".4dm"}),' du dossier "Sources",']}),"\n",(0,r.jsxs)(s.li,{children:["in the 4D Explorer, select the method or class and click ",(0,r.jsx)(s.img,{src:t(949237).A+"",width:"19",height:"18"})," or choose ",(0,r.jsx)(s.strong,{children:"Move to Trash"})," from the contextual menu."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Pour supprimer une m\xe9thode objet, choisissez ",(0,r.jsx)(s.strong,{children:"Supprimer la m\xe9thode objet"})," dans l'",(0,r.jsx)(s.a,{href:"/docs/fr/FormEditor/overview",children:"\xe9diteur de formulaires"})," (menu ",(0,r.jsx)(s.strong,{children:"Objet"})," ou menu contextuel)."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"Importer-et-exporter-le-code",children:"Importer et exporter le code"}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez importer et exporter une m\xe9thode ou le code d'une classe sous la forme d'un fichier. These commands are found in the ",(0,r.jsx)(s.strong,{children:"Method"})," menu of the ",(0,r.jsx)(s.a,{href:"/docs/fr/code-editor/write-class-method",children:"Code editor"}),"."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Lorsque vous s\xe9lectionnez la commande ",(0,r.jsx)(s.strong,{children:"Exporter la m\xe9thode..."})," , une bo\xeete de dialogue standard d'enregistrement de fichier appara\xeet, vous permettant de choisir le nom, l'emplacement et le format du fichier d'export (voir ci-dessous). Comme pour l'impression, l'export ne tient pas compte de l'\xe9tat contract\xe9 des structures de code et le code entier est export\xe9."]}),"\n",(0,r.jsxs)(s.li,{children:["Lorsque vous s\xe9lectionnez la commande ",(0,r.jsx)(s.strong,{children:"Importer la m\xe9thode..."}),", une bo\xeete de dialogue standard d'ouverture de fichier standard appara\xeet, vous permettant de d\xe9signer le fichier \xe0 importer. L'importation remplace le texte s\xe9lectionn\xe9 dans la m\xe9thode. Pour remplacer une m\xe9thode existante par une m\xe9thode import\xe9e, il suffit de s\xe9lectionner l\u2019ensemble du contenu de la m\xe9thode avant d\u2019effectuer l\u2019importation."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"La fonction d\u2019import/export est multi-plate-forme : une m\xe9thode export\xe9e sous macOS peut \xeatre import\xe9e sous Windows et inversement, 4D se charge de la conversion des caract\xe8res si n\xe9cessaire."}),"\n",(0,r.jsx)(s.p,{children:"4D peut exporter et importer les m\xe9thodes dans deux formats :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["M\xe9thode 4D (extension ",(0,r.jsx)(s.em,{children:".c4d"}),") : Dans ce format, les m\xe9thodes sont export\xe9es sous forme encod\xe9e. Les noms d\u2019objets sont transform\xe9s en r\xe9f\xe9rences (tokens). Ce format permet notamment d\u2019\xe9changer des m\xe9thodes entre des applications 4D et des plug-ins dans langues diff\xe9rentes. En revanche, il n\u2019est pas possible de les visualiser dans un \xe9diteur de texte."]}),"\n",(0,r.jsxs)(s.li,{children:["Texte (extension ",(0,r.jsx)(s.em,{children:".txt"}),") : Dans ce format, les m\xe9thodes sont export\xe9es sous forme de texte uniquement. Dans ce cas, les m\xe9thodes sont lisibles \xe0 l'aide d'un \xe9diteur de texte standard ou d'un outil de contr\xf4le de sources."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"Propri\xe9t\xe9s-des-m\xe9thodes-projet",children:"Propri\xe9t\xe9s des m\xe9thodes projet"}),"\n",(0,r.jsx)(s.p,{children:"Apr\xe8s avoir cr\xe9\xe9 une m\xe9thode projet, vous pouvez la renommer et modifier ses propri\xe9t\xe9s. Les propri\xe9t\xe9s des m\xe9thodes projet d\xe9finissent principalement leurs conditions d\u2019acc\xe8s et de s\xe9curit\xe9 (acc\xe8s par les utilisateurs, les serveurs int\xe9gr\xe9s ou les services) ainsi que leur mode d'ex\xe9cution."}),"\n",(0,r.jsx)(s.p,{children:"Les autres types de m\xe9thodes n'ont pas de propri\xe9t\xe9s sp\xe9cifiques. Leurs propri\xe9t\xe9s sont li\xe9es \xe0 celles des objets auxquels elles sont attach\xe9es."}),"\n",(0,r.jsxs)(s.p,{children:["Pour afficher la bo\xeete de dialogue ",(0,r.jsx)(s.strong,{children:"Propri\xe9t\xe9s de la m\xe9thode"})," pour une m\xe9thode projet, vous pouvez soit :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["in the ",(0,r.jsx)(s.a,{href:"/docs/fr/code-editor/write-class-method",children:"Code Editor"}),", select the ",(0,r.jsx)(s.strong,{children:"Method Properties..."})," command in the ",(0,r.jsx)(s.strong,{children:"Method"})," menu,"]}),"\n",(0,r.jsxs)(s.li,{children:["ou dans la page ",(0,r.jsx)(s.strong,{children:"M\xe9thodes"})," de l'Explorateur, ",(0,r.jsx)(s.strong,{children:"clic droit"})," sur la m\xe9thode projet et s\xe9lectionner ",(0,r.jsx)(s.strong,{children:"Propri\xe9t\xe9s de la m\xe9thode."})," dans le menu contextuel ou dans le menu d'options."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Une fonction de param\xe9trage global vous permet de modifier une propri\xe9t\xe9 pour tout ou partie des m\xe9thodes projet en une seule op\xe9ration (voir ",(0,r.jsx)(s.a,{href:"#modifier-attributs-globalement",children:"Modifier attributs globalement"}),")."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"Nom",children:"Nom"}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez changer le nom d'une m\xe9thode projet dans la zone ",(0,r.jsx)(s.strong,{children:"Nom"})," de la fen\xeatre ",(0,r.jsx)(s.strong,{children:"Propri\xe9t\xe9s de la m\xe9thode"})," ou dans l'Explorateur."]}),"\n",(0,r.jsxs)(s.p,{children:["Le nouveau nom doit respecter les r\xe8gles de nommage 4D (voir ",(0,r.jsx)(s.a,{href:"/docs/fr/Concepts/identifiers",children:"Identifiants"}),"). Si une m\xe9thode portant le m\xeame nom existe d\xe9j\xe0, 4D affiche un message indiquant que ce nom de m\xe9thode est d\xe9j\xe0 utilis\xe9. Si n\xe9cessaire, 4D trie \xe0 nouveau la liste des m\xe9thodes."]}),"\n",(0,r.jsxs)(s.admonition,{type:"caution",children:[(0,r.jsxs)(s.p,{children:["Changer le nom d'une m\xe9thode d\xe9j\xe0 utilis\xe9e dans la base de donn\xe9es peut invalider toutes les m\xe9thodes ou formules qui utilisent l'ancien nom de m\xe9thode et risque de perturber le fonctionnement de l'application. Vous pouvez renommer la m\xe9thode manuellement mais il est fortement recommand\xe9 d'utiliser la fonction de renommage des m\xe9thodes projet, d\xe9crite dans la section ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html",children:"Renommer"}),". Avec cette fonction, vous pouvez mettre \xe0 jour automatiquement le nom o\xf9 la m\xe9thode partout o\xf9 elle est appel\xe9e dans l'environnement de d\xe9veloppement."]}),(0,r.jsx)(s.p,{children:"Avec 4D Server, le nom de la m\xe9thode est chang\xe9 sur le serveur lorsque vous avez fini de le modifier. Si plus d'un utilisateur modifie le nom de la m\xe9thode en m\xeame temps, le nom final de la m\xe9thode sera le nom sp\xe9cifi\xe9 par le dernier utilisateur ayant termin\xe9 de l'\xe9diter. Vous pouvez d\xe9signer un propri\xe9taire de la m\xe9thode pour que seuls certains utilisateurs puissent changer son nom."})]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.p,{children:"Les m\xe9thodes base ne peuvent pas \xeatre renomm\xe9es. Il en va de m\xeame pour les triggers, les m\xe9thodes formulaire et les m\xe9thodes objet, qui sont li\xe9s \xe0 des objets et tirent leur nom de l'objet concern\xe9."})}),"\n",(0,r.jsx)(s.h3,{id:"Attributs",children:"Attributs"}),"\n",(0,r.jsx)(s.p,{children:"Vous pouvez contr\xf4ler comment les m\xe9thodes projet sont utilis\xe9es et/ou appel\xe9es dans diff\xe9rents contextes en utilisant des attributs. Notez que vous pouvez d\xe9finir des attributs globalement pour une s\xe9lection de m\xe9thodes projet en utilisant l'Explorateur (voir la section suivante)."}),"\n",(0,r.jsx)(s.h4,{id:"Invisible",children:"Invisible"}),"\n",(0,r.jsxs)(s.p,{children:["Si vous ne voulez pas que les utilisateurs puissent ex\xe9cuter une m\xe9thode projet \xe0 l'aide de la commande ",(0,r.jsx)(s.strong,{children:"M\xe9thode..."})," du menu ",(0,r.jsx)(s.strong,{children:"Ex\xe9cution"}),", vous pouvez la rendre invisible en cochant cette option. Une m\xe9thode invisible n'appara\xeet pas dans la bo\xeete de dialogue d'ex\xe9cution de m\xe9thode."]}),"\n",(0,r.jsx)(s.p,{children:"Lorsque vous rendez une m\xe9thode projet invisible, elle est toujours disponible pour le d\xe9veloppeur. Elle reste list\xe9e dans l'Explorateur et de l'\xe9diteur de code."}),"\n",(0,r.jsx)(s.h4,{id:"Partag\xe9e-entre-composants-et-projet-h\xf4te",children:"Partag\xe9e entre composants et projet h\xf4te"}),"\n",(0,r.jsx)(s.p,{children:"Cet attribut est utilis\xe9 dans le cadre des composants. Quand il est coch\xe9, il indique que la m\xe9thode sera disponible pour les composants lorsque l'application sera utilis\xe9e comme projet h\xf4te. A l'inverse, lorsque l'application sera utilis\xe9e en tant que composant, la m\xe9thode sera disponible pour les projets h\xf4tes."}),"\n",(0,r.jsxs)(s.p,{children:["Pour plus d'informations sur les composants, reportez-vous au chapitre ",(0,r.jsx)(s.a,{href:"/docs/fr/Extensions/develop-components",children:"D\xe9velopper et installer des composants 4D"})," ."]}),"\n",(0,r.jsx)(s.h4,{id:"Ex\xe9cuter-sur-serveur",children:"Ex\xe9cuter sur serveur"}),"\n",(0,r.jsx)(s.p,{children:"Cet attribut est pris en compte uniquement dans le cadre d\u2019une application 4D en client/serveur. Lorsque cette option est coch\xe9e, la m\xe9thode du projet est toujours ex\xe9cut\xe9e sur le serveur, quelle que soit la mani\xe8re dont elle est appel\xe9e."}),"\n",(0,r.jsxs)(s.p,{children:["Pour plus d'informations sur cette option, reportez-vous \xe0 ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html",children:"Attribut Ex\xe9cuter sur serveur"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"Mode-dex\xe9cution",children:"Mode d\u2019ex\xe9cution"}),"\n",(0,r.jsxs)(s.p,{children:["Cette option vous permet de d\xe9clarer la m\xe9thode \xe9ligible \xe0 l'ex\xe9cution en mode pr\xe9emptif. It is described in the ",(0,r.jsx)(s.a,{href:"/docs/fr/Develop/processes#preemptive-processes",children:"Preemptive processes section"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"Disponibilit\xe9",children:"Disponibilit\xe9"}),"\n",(0,r.jsx)(s.p,{children:"Les attributs de disponibilit\xe9 pr\xe9cisent les services externes autoris\xe9s \xe0 appeler explicitement la m\xe9thode."}),"\n",(0,r.jsx)(s.h4,{id:"Web-Services",children:"Web Services"}),"\n",(0,r.jsxs)(s.p,{children:["Cet attribut vous permet de publier la m\xe9thode courante comme service Web accessible via des requ\xeates SOAP. Pour plus d\u2019informations, reportez-vous au chapitre ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html",children:"Publication et utilisation de Services Web"}),". Lorsque cette option est coch\xe9e, l\u2019option ",(0,r.jsx)(s.strong,{children:"Publi\xe9 dans WSDL"})," est active."]}),"\n",(0,r.jsxs)(s.p,{children:["In the Explorer, project methods that are offered as a Web Service are given a specific icon ",(0,r.jsx)(s.img,{src:"https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png",alt:""}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Il n'est pas possible de publier en tant que Web service une m\xe9thode dont le nom comporte des caract\xe8res non conformes \xe0 la nomenclature XML (par exemple des espaces). Si le nom de la m\xe9thode n'est pas conforme, 4D refuse l'affectation de la propri\xe9t\xe9."]}),"\n",(0,r.jsx)(s.h4,{id:"Publi\xe9-dans-WSDL",children:"Publi\xe9 dans WSDL"}),"\n",(0,r.jsxs)(s.p,{children:['Cet attribut est actif uniquement si l\'attribut "Web service" est coch\xe9. Il permet d\u2019inclure la m\xe9thode courante dans le fichier WSDL de l\u2019application 4D. Pour plus d\u2019informations sur ce point, reportez-vous au paragraphe ',(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689",children:"G\xe9n\xe9ration du WSDL"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ",(0,r.jsx)(s.img,{src:"https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png",alt:""}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Balises-HTML-et-URLs-4D-4DACTION",children:"Balises HTML et URLs 4D (4DACTION...)"}),"\n",(0,r.jsxs)(s.p,{children:["This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special ",(0,r.jsx)(s.a,{href:"/docs/fr/WebServer/httpRequests#4daction",children:"4DACTION URL"})," used for calling 4D methods, nor the special ",(0,r.jsx)(s.a,{href:"/docs/fr/Tags/transformation-tags",children:"4DSCRIPT, 4DTEXT and 4DHTML tags"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["In the Explorer, project methods with this attribute are given a specific icon ",(0,r.jsx)(s.img,{src:"https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png",alt:""}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Pour des raisons de s\xe9curit\xe9, cette option est d\xe9s\xe9lectionn\xe9e par d\xe9faut. Vous devez d\xe9signer individuellement chaque m\xe9thode pouvant \xeatre ex\xe9cut\xe9e via les URLs et les balises sp\xe9ciales."}),"\n",(0,r.jsx)(s.h4,{id:"SQL",children:"SQL"}),"\n",(0,r.jsx)(s.p,{children:"Lorsqu\u2019elle est coch\xe9e, cette option autorise l\u2019ex\xe9cution de la m\xe9thode projet par le moteur SQL de 4D. Elle est d\xe9s\xe9lectionn\xe9e par d\xe9faut, ce qui signifie que, sauf autorisation explicite, les m\xe9thodes projet de 4D sont prot\xe9g\xe9es et ne peuvent pas \xeatre appel\xe9es par le moteur SQL de 4D."}),"\n",(0,r.jsxs)(s.p,{children:["This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html",children:"Begin SQL"}),"/",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html",children:"End SQL"}),"  tags or the ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html",children:"QUERY BY SQL"})," command."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Notes :"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"M\xeame si une m\xe9thode dispose de l\u2019attribut \u201cSQL\u201d, les acc\xe8s d\xe9finis au niveau des propri\xe9t\xe9s de la base et des propri\xe9t\xe9s de la m\xe9thode sont pris en compte pour l\u2019ex\xe9cution de la m\xe9thode."}),"\n",(0,r.jsxs)(s.li,{children:["La fonction ODBC ",(0,r.jsx)(s.strong,{children:"SQLProcedure"}),' retourne uniquement les m\xe9thodes projet disposant de l\u2019attribut "SQL".']}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Pour plus d\u2019informations, reportez-vous \xe0 la section ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html",children:"Impl\xe9mentations du moteur SQL de 4D"})," in dans le manuel SQL de 4D."]}),"\n",(0,r.jsx)(s.h4,{id:"Serveur-REST",children:"Serveur REST"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.em,{children:["Cette option est obsol\xe8te. Calling code through REST calls is only supported with ",(0,r.jsx)(s.a,{href:"/docs/fr/REST/classFunctions",children:"ORDA data model class functions"}),"."]})}),"\n",(0,r.jsx)(s.h4,{id:"Modifier-attributs-globalement",children:"Modifier attributs globalement"}),"\n",(0,r.jsx)(s.p,{children:'Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. Cette fonction est tr\xe8s utile pour modifier les attributs d\u2019un grand nombre de m\xe9thodes projet. Elle peut \xe9galement \xeatre utilis\xe9e en cours de d\xe9veloppement pour appliquer rapidement des attributs communs \xe0 des groupes homog\xe8nes de m\xe9thodes.'}),"\n",(0,r.jsx)(s.p,{children:"Pour modifier globalement les attributs des m\xe9thodes :"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Dans la Page M\xe9thodes de l'Explorateur de 4D, d\xe9ployez le menu d'options puis choisissez la commande ",(0,r.jsx)(s.strong,{children:"Modifier attributs globalement..."})," La bo\xeete de dialogue ",(0,r.jsx)(s.strong,{children:"Attributs des m\xe9thodes"})," appara\xeet. La bo\xeete de dialogue ",(0,r.jsx)(s.strong,{children:"Attributs des m\xe9thodes"})," appara\xeet."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Dans la zone \u201cM\xe9thodes \xe0 modifier\u201d, saisissez une cha\xeene de caract\xe8res permettant de d\xe9signer les m\xe9thodes que vous souhaitez modifier globalement.\nLa cha\xeene de caract\xe8res est utilis\xe9e comme crit\xe8re de recherche des noms de m\xe9thodes."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Utilisez le caract\xe8re g\xe9n\xe9rique @ pour vous aider \xe0 d\xe9finir des groupes de m\xe9thodes :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["pour d\xe9signer les m\xe9thodes dont le nom d\xe9bute par..., saisissez @ en fin de cha\xeene. Par exemple : ",(0,r.jsx)(s.code,{children:"web@"})]}),"\n",(0,r.jsxs)(s.li,{children:["pour d\xe9signer les m\xe9thodes dont le nom contient..., saisissez @ en milieu de cha\xeene. Par exemple : ",(0,r.jsx)(s.code,{children:"web@write"})]}),"\n",(0,r.jsxs)(s.li,{children:["pour d\xe9signer les m\xe9thodes dont le nom se termine par..., saisissez @ en d\xe9but de cha\xeene. Par exemple : ",(0,r.jsx)(s.code,{children:"web@write"})]}),"\n",(0,r.jsx)(s.li,{children:"Pour d\xe9signer toutes les m\xe9thodes, il suffit de taper @ dans la zone."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Notes :"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"La recherche ne tient pas compte des majuscules et des minuscules."}),"\n",(0,r.jsxs)(s.li,{children:["Vous pouvez saisir plusieurs caract\xe8res @ dans la cha\xeene, par exemple ",(0,r.jsx)(s.code,{children:"dtro_@web@pro.@"})]}),"\n"]}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsxs)(s.li,{children:['Dans la zone "Attribut \xe0 modifier", choisissez un attribut dans la liste d\xe9roulante puis cliquez sur le bouton radio ',(0,r.jsx)(s.strong,{children:"Vrai"})," ou ",(0,r.jsx)(s.strong,{children:"Faux"})," correspondant \xe0 la valeur \xe0 appliquer."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"}),' Si l\'attribut "Publi\xe9 dans WSDL" est d\xe9fini \xe0 Vrai, il ne sera appliqu\xe9 qu\'aux m\xe9thodes projet qui contiennent d\xe9j\xe0 l\'attribut "Web Service".']}),"\n",(0,r.jsxs)(s.ol,{start:"4",children:["\n",(0,r.jsxs)(s.li,{children:["Cliquez sur ",(0,r.jsx)(s.strong,{children:"Appliquer"}),". La modification est appliqu\xe9e instantan\xe9ment \xe0 toutes les m\xe9thodes projet d\xe9sign\xe9es par la cha\xeene de caract\xe8res saisie."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,s,t)=>{var r=t(296540),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var r,n={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(a=s.ref),s)i.call(s,r)&&!l.hasOwnProperty(r)&&(n[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===n[r]&&(n[r]=s[r]);return{$$typeof:o,type:e,key:c,ref:a,props:n,_owner:d.current}}s.Fragment=n,s.jsx=c,s.jsxs=c},474848:(e,s,t)=>{e.exports=t(221020)},949237:(e,s,t)=>{t.d(s,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg=="},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>d});var r=t(296540);const o={},n=r.createContext(o);function i(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);