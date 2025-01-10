"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69227"],{319130:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"WebServer/templates","title":"Pages templates","description":"Le serveur Web de 4D vous permet d\'utiliser des pages de mod\xe8les HTML contenant des balises, c\'est-\xe0-dire un m\xe9lange de code HTML statique et de r\xe9f\xe9rences 4D ajout\xe9es via des balises de transformation telles que 4DTEXT, 4DIF ou 4DINCLUDE. These tags are usually inserted as HTML type comments (``) into the HTML source code.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/WebServer/templates.md","sourceDirName":"WebServer","slug":"/WebServer/templates","permalink":"/docs/fr/20/WebServer/templates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ftemplates.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"templates","title":"Pages templates"},"sidebar":"docs","previous":{"title":"D\xe9veloppement Web","permalink":"/docs/fr/20/WebServer/gettingStarted"},"next":{"title":"Traitement des requ\xeates HTTP","permalink":"/docs/fr/20/WebServer/httpRequests"}}'),r=n("785893"),a=n("250065");let i={id:"templates",title:"Pages templates"},l=void 0,d={},o=[{value:"Balises pour les templates",id:"balises-pour-les-templates",level:2},{value:"Analyse des balises",id:"analyse-des-balises",level:2},{value:"Acc\xe8s aux m\xe9thodes 4D via le Web",id:"acc\xe8s-aux-m\xe9thodes-4d-via-le-web",level:2},{value:"Pr\xe9vention de l&#39;insertion de code malveillant",id:"pr\xe9vention-de-linsertion-de-code-malveillant",level:2}];function c(e){let s={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Le serveur Web de 4D vous permet d'utiliser des pages de mod\xe8les HTML contenant des balises, c'est-\xe0-dire un m\xe9lange de code HTML statique et de r\xe9f\xe9rences 4D ajout\xe9es via des ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Tags/tags",children:"balises de transformation"})," telles que 4DTEXT, 4DIF ou 4DINCLUDE. These tags are usually inserted as HTML type comments (",(0,r.jsx)(s.code,{children:"\x3c!--#4DTagName TagValue--\x3e"}),") into the HTML source code."]}),"\n",(0,r.jsx)(s.p,{children:"Lorsque ces pages sont envoy\xe9es par le serveur HTTP, elles sont analys\xe9es et les balises qu'elles contiennent sont interpr\xe9t\xe9es et remplac\xe9es par les donn\xe9es r\xe9sultantes. Les pages re\xe7ues par les navigateurs sont donc une combinaison d'\xe9l\xe9ments statiques et de valeurs provenant du traitement 4D."}),"\n",(0,r.jsx)(s.p,{children:"Par exemple, si vous \xe9crivez dans une page HTML:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:"<P>Welcome to \x3c!--#4DTEXT vtSiteName--\x3e!</P>\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The value of the 4D variable ",(0,r.jsx)(s.em,{children:"vtSiteName"})," will be inserted in the HTML page."]}),"\n",(0,r.jsx)(s.h2,{id:"balises-pour-les-templates",children:"Balises pour les templates"}),"\n",(0,r.jsx)(s.p,{children:"Les balises 4D suivantes sont disponibles :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"4DTEXT, pour ins\xe9rer des variables et des expressions 4D en tant que texte,"}),"\n",(0,r.jsx)(s.li,{children:"4DHTML, pour ins\xe9rer du code HTML,"}),"\n",(0,r.jsx)(s.li,{children:"4DEVAL, pour \xe9valuer toute expression 4D,"}),"\n",(0,r.jsx)(s.li,{children:"4DSCRIPT, pour ex\xe9cuter une m\xe9thode 4D,"}),"\n",(0,r.jsx)(s.li,{children:"4DINCLUDE, pour inclure une page dans une autre,"}),"\n",(0,r.jsx)(s.li,{children:"4DBASE, pour modifier le dossier par d\xe9faut utilis\xe9 par la balise 4DINCLUDE,"}),"\n",(0,r.jsx)(s.li,{children:"4DCODE, pour ins\xe9rer du code 4D,"}),"\n",(0,r.jsx)(s.li,{children:"4DIF, 4DELSE, 4DELSEIF et 4DENDIF, pour ins\xe9rer des conditions dans le code HTML,"}),"\n",(0,r.jsx)(s.li,{children:"4DLOOP et 4DENDLOOP, pour faire des boucles dans le code HTML,"}),"\n",(0,r.jsx)(s.li,{children:"4DEACH et 4DENDEACH, pour boucler des collections, des entity selections ou des propri\xe9t\xe9s d'objets."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Ces balises sont d\xe9crites dans la page ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Tags/tags",children:"Balises de transformation"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Il est possible de combiner des balises. Par exemple, le code HTML suivant est autoris\xe9 :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:"<HTML>\n...\n<BODY>\n\x3c!--#4DSCRIPT/PRE_PROCESS--\x3e   (Method call)\n\x3c!--#4DIF (myvar=1)--\x3e   (If condition)\n   \x3c!--#4DINCLUDE banner1.html--\x3e   (Subpage insertion)\n\x3c!--#4DENDIF--\x3e   (End if)\n\x3c!--#4DIF (myvar=2)--\x3e\n\n   \x3c!--#4DINCLUDE banner2.html--\x3e\n\x3c!--#4DENDIF--\x3e\n\n\x3c!--#4DLOOP [TABLE]--\x3e   (loop on the current selection)\n\x3c!--#4DIF ([TABLE]ValNum>10)--\x3e   (If [TABLE]ValNum>10)\n   \x3c!--#4DINCLUDE subpage.html--\x3e   (subpage insertion)\n\x3c!--#4DELSE--\x3e   (Else)\n   <B>Value: \x3c!--#4DTEXT [TABLE]ValNum--\x3e</B><br/>\n      (Field display)\n\x3c!--#4DENDIF--\x3e\n\x3c!--#4DENDLOOP--\x3e   (End for)\n</BODY>\n</HTML>\n"})}),"\n",(0,r.jsx)(s.h2,{id:"analyse-des-balises",children:"Analyse des balises"}),"\n",(0,r.jsx)(s.p,{children:"Pour des raisons d'optimisation, l'analyse du code source HTML n'est pas effectu\xe9e par le serveur Web 4D lorsque les pages HTML sont appel\xe9es \xe0 l'aide d'URL simples suffix\xe9es par \".HTML\" ou \".HTM\"."}),"\n",(0,r.jsxs)(s.p,{children:["Parsing of the contents of template pages sent by 4D web server takes place when ",(0,r.jsx)(s.code,{children:"WEB SEND FILE"})," (.htm, .html, .shtm, .shtml), ",(0,r.jsx)(s.code,{children:"WEB SEND BLOB"})," (text/html type BLOB) or ",(0,r.jsx)(s.code,{children:"WEB SEND TEXT"}),' commands are called, as well as when sending pages called using URLs. Dans ce dernier cas, \xe0 des fins d\'optimisation, les pages suffix\xe9es par ".htm" et ".html" ne sont PAS pars\xe9es. In order to "force" the parsing of HTML pages in this case, you must add the suffix \u201C.shtm\u201D or \u201C.shtml\u201D (for example, ',(0,r.jsx)(s.code,{children:"http://www.server.com/dir/page.shtm"}),"). An example of the use of this type of page is given in the description of the ",(0,r.jsx)(s.code,{children:"WEB GET STATISTICS"})," command. Les pages XML (.xml, .xsl) sont \xe9galement prises en charge et toujours analys\xe9es par 4D."]}),"\n",(0,r.jsxs)(s.p,{children:["You can also carry out parsing outside of the Web context when you use the ",(0,r.jsx)(s.code,{children:"PROCESS 4D TAGS"})," command."]}),"\n",(0,r.jsxs)(s.p,{children:["En interne, l'analyseur fonctionne avec des cha\xeenes UTF-16, mais les donn\xe9es \xe0 analyser peuvent avoir \xe9t\xe9 encod\xe9es diff\xe9remment. When tags contain text (for example ",(0,r.jsx)(s.code,{children:"4DHTML"}),"), 4D converts the data when necessary depending on its origin and the information available (charset). Voici les cas o\xf9 4D analyse les balises contenues dans les pages HTML, ainsi que toutes les conversions effectu\xe9es :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Action / Commande"}),(0,r.jsx)(s.th,{children:"Analyse du contenu des pages envoy\xe9es"}),(0,r.jsx)(s.th,{children:"Prise en charge de la syntaxe $(*)"}),(0,r.jsx)(s.th,{children:"Jeu de caract\xe8res utilis\xe9 pour l'analyse des balises"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Pages appel\xe9es via les URLs"}),(0,r.jsx)(s.td,{children:'X, \xe0 l\'exception des pages avec une extension ".htm" ou ".html"'}),(0,r.jsx)(s.td,{children:'X, \xe0 l\'exception des pages avec une extension ".htm" ou ".html"'}),(0,r.jsx)(s.td,{children:"Utilisation du jeu de caract\xe8res pass\xe9 en param\xe8tre de l'en-t\xeate \"Content-Type\" de la page. S'il n'y en a pas, recherche d'une balise META-HTTP EQUIV avec un jeu de caract\xe8res. Sinon, utilisation du jeu de caract\xe8res par d\xe9faut du serveur HTTP"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"WEB SEND FILE"})}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"-"}),(0,r.jsx)(s.td,{children:"Utilisation du jeu de caract\xe8res pass\xe9 en param\xe8tre de l'en-t\xeate \"Content-Type\" de la page. S'il n'y en a pas, recherche d'une balise META-HTTP EQUIV avec un jeu de caract\xe8res. Sinon, utilisation du jeu de caract\xe8res par d\xe9faut du serveur HTTP"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"WEB SEND TEXT"})}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"-"}),(0,r.jsx)(s.td,{children:"Aucune conversion n\xe9cessaire"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"WEB SEND BLOB"})}),(0,r.jsx)(s.td,{children:'X, si le BLOB est de type "text/html"'}),(0,r.jsx)(s.td,{children:"-"}),(0,r.jsx)(s.td,{children:'Utilisation du jeu de caract\xe8res d\xe9fini dans l\'en-t\xeate "Content-Type" de la r\xe9ponse. Sinon, utilisation du jeu de caract\xe8res par d\xe9faut du serveur HTTP'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["Inclusion by the ",(0,r.jsx)(s.code,{children:"\x3c!--#4DINCLUDE--\x3e"})," tag"]}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Utilisation du jeu de caract\xe8res pass\xe9 en param\xe8tre de l'en-t\xeate \"Content-Type\" de la page. S'il n'y en a pas, recherche d'une balise META-HTTP EQUIV avec un jeu de caract\xe8res. Sinon, utilisation du jeu de caract\xe8res par d\xe9faut du serveur HTTP"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"PROCESS 4D TAGS"})}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Donn\xe9es texte : pas de conversion. Donn\xe9es BLOB : conversion automatique \xe0 partir de l'ensemble de caract\xe8res Mac-Roman pour la compatibilit\xe9"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"(*) La syntaxe alternative bas\xe9e sur $ est disponible pour les balises 4DHTML, 4DTEXT et 4DEVAL."}),"\n",(0,r.jsx)(s.h2,{id:"acc\xe8s-aux-m\xe9thodes-4d-via-le-web",children:"Acc\xe8s aux m\xe9thodes 4D via le Web"}),"\n",(0,r.jsxs)(s.p,{children:["L'ex\xe9cution d'une m\xe9thode 4D avec ",(0,r.jsx)(s.code,{children:"4DEACH"}),", ",(0,r.jsx)(s.code,{children:"4DELSEIF"}),", ",(0,r.jsx)(s.code,{children:"4DEVAL"}),", ",(0,r.jsx)(s.code,{children:"4DHTML"}),", ",(0,r.jsx)(s.code,{children:"4DIF"}),", ",(0,r.jsx)(s.code,{children:"4DLOOP"}),", ",(0,r.jsx)(s.code,{children:"4DSCRIPT"}),", ou ",(0,r.jsx)(s.code,{children:"4DTEXT"})," \xe0 partir d'une requ\xeate web est soumise \xe0 la valeur de l'attribut ",(0,r.jsx)(s.a,{href:"/docs/fr/20/WebServer/allowProject",children:"disponible via des balises 4D et des URL (4DACTION...)"})," d\xe9finie dans les propri\xe9t\xe9s de la m\xe9thode. Si cet attribut n'est pas v\xe9rifi\xe9 pour la m\xe9thode, celle-ci ne peut pas \xeatre appel\xe9e \xe0 partir d'une requ\xeate Web."]}),"\n",(0,r.jsx)(s.h2,{id:"pr\xe9vention-de-linsertion-de-code-malveillant",children:"Pr\xe9vention de l'insertion de code malveillant"}),"\n",(0,r.jsx)(s.p,{children:"Les balises 4D acceptent diff\xe9rents types de donn\xe9es en tant que param\xe8tres : texte, variables, m\xe9thodes, noms de commande, etc. Lorsque ces donn\xe9es sont fournies par votre propre code, il n'y a aucun risque d'insertion de code malveillant puisque vous contr\xf4lez l'entr\xe9e. Cependant, votre code de base de donn\xe9es fonctionne souvent avec des donn\xe9es qui ont \xe9t\xe9, \xe0 un moment donn\xe9, introduites par une source externe (saisie de l'utilisateur, importation, etc.)."}),"\n",(0,r.jsxs)(s.p,{children:["In this case, it is advisable to ",(0,r.jsx)(s.strong,{children:"not use"})," tags such as ",(0,r.jsx)(s.code,{children:"4DEVAL"})," or ",(0,r.jsx)(s.code,{children:"4DSCRIPT"}),", which evaluate parameters, directly with this sort of data."]}),"\n",(0,r.jsxs)(s.p,{children:["De plus, selon le ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Tags/tags#recursive-processing",children:"principe de la r\xe9cursivit\xe9"}),", le code malveillant peut lui-m\xeame inclure des balises de transformation. In this case, it is imperative to use the ",(0,r.jsx)(s.code,{children:"4DTEXT"}),' tag. Imaginez, par exemple, un champ de formulaire Web nomm\xe9 "Nom", o\xf9 les utilisateurs doivent entrer leur nom. This name is then displayed using a ',(0,r.jsx)(s.code,{children:"\x3c!--#4DHTML vName--\x3e"}),' tag in the page. If text of the "\x3c!--#4DEVAL QUIT 4D--\x3e" type is inserted instead of the name, interpreting this tag will cause the application to be exited. To avoid this risk, you can just use the ',(0,r.jsx)(s.code,{children:"4DTEXT"}),' tag systematically in this case. \xc9tant donn\xe9 que cette balise \xe9chappe les caract\xe8res sp\xe9ciaux HTML, tout code r\xe9cursif malveillant qui aurait pu \xeatre ins\xe9r\xe9 ne sera pas r\xe9interpr\xe9t\xe9. Pour se r\xe9f\xe9rer \xe0 l\'exemple pr\xe9c\xe9dent, le champ "Name" contiendra, dans ce cas, "',(0,r.jsx)(s.code,{children:"&lt;!--#4DEVAL QUIT 4D--&gt;"}),'" qui ne sera pas transform\xe9.']})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return i}});var t=n(667294);let r={},a=t.createContext(r);function i(e){let s=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);