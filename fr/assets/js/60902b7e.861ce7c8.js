"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50673"],{169266:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/xml-get-options","title":"XML GET OPTIONS","description":"XML GET OPTIONS ( refEl\xe9ment | document ; s\xe9lecteur ; valeur {; s\xe9lecteur2 ; valeur2 ; ... ; s\xe9lecteurN ; valeurN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/xml-get-options.md","sourceDirName":"commands-legacy","slug":"/commands/xml-get-options","permalink":"/docs/fr/20-R7/commands/xml-get-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fxml-get-options.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"xml-get-options","title":"XML GET OPTIONS","slug":"/commands/xml-get-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"XML GET ERROR","permalink":"/docs/fr/20-R7/commands/xml-get-error"},"next":{"title":"XML SET OPTIONS","permalink":"/docs/fr/20-R7/commands/xml-set-options"}}'),r=s("785893"),i=s("250065");let d={id:"xml-get-options",title:"XML GET OPTIONS",slug:"/commands/xml-get-options",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",date:"date",duree:"duree",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"XML GET OPTIONS"})," ( refEl\xe9ment | document ; ",(0,r.jsx)(n.em,{children:"s\xe9lecteur"})," ; ",(0,r.jsx)(n.em,{children:"valeur"})," {; ",(0,r.jsx)(n.em,{children:"s\xe9lecteur2"})," ; ",(0,r.jsx)(n.em,{children:"valeur2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"s\xe9lecteurN"})," ; ",(0,r.jsx)(n.em,{children:"valeurN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refEl\xe9ment | document"}),(0,r.jsx)(n.td,{children:"Texte"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML racine ou",(0,r.jsx)(n.br,{}),"R\xe9f\xe9rence de document ouvert"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"s\xe9lecteur"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Option \xe0 lire"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeur"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeur courante de l\u2019option"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"XML GET OPTIONS"})," permet de lire la valeur d\u2019un ou plusieurs param\xe8tre(s) XML d\xe9finis pour la session courante et l\u2019utilisateur courant."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"s\xe9lecteur"})," une des constantes du th\xe8me ",(0,r.jsx)(n.em,{children:"XML"})," ci-dessous, indiquant l\u2019option \xe0 conna\xeetre. La valeur courante de l\u2019option est retourn\xe9e dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"valeur"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML binary encoding"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsxs)(n.td,{children:["D\xe9finit la mani\xe8re dont les donn\xe9es binaires seront converties. ",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valeurs possibles :"}),(0,r.jsx)(n.br,{}),'XML Base64 (valeur par d\xe9faut) : les donn\xe9es binaires sont simplement converties en base64.XML data URI scheme : les donn\xe9es binaires sont converties en base64 et l\u2019en-t\xeate "data:;base64" est ajout\xe9. Ce format permet principalement \xe0 un navigateur de d\xe9coder automatiquement une image, et est \xe9galement requis pour l\u2019insertion d\u2019images . Pour plus d\u2019informations, voir ',(0,r.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Data%5FURI%5Fscheme",children:"http://en.wikipedia.org/wiki/Data%5FURI%5Fscheme"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML BOM"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"9"}),(0,r.jsxs)(n.td,{children:["Indique si les documents XML incluent les BOM. ",(0,r.jsx)(n.strong,{children:"Valeurs p"})," ",(0,r.jsx)(n.strong,{children:"ossibles"})," ",(0,r.jsx)(n.strong,{children:":"})," XML valeur par d\xe9faut (par d\xe9faut) : utilise les param\xe8tres de la base. Par d\xe9faut, BOM n'est pas inclus - sauf dans les bases/projets cr\xe9\xe9s avec des versions de 4D jusqu'\xe0 la v19.x, o\xf9 BOM est inclus. Voir aussi les param\xe8tres de Compatibilit\xe9. XML activ\xe9 : inclure BOM XML d\xe9sactiv\xe9 : ne pas inclure de BOM"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML date encoding"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["D\xe9finit la mani\xe8re dont les dates 4D seront converties. Par exemple, le !01/01/2003! dans le fuseau horaire de Paris.",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valeurs possibles :"}),(0,r.jsx)(n.br,{}),'XML ISO (valeur par d\xe9faut) : utilisation du format xs:datetime sans indication de fuseau horaire. R\xe9sultat : "2003-01-01". La partie heure, si elle est pr\xe9sente dans la valeur 4D (via le SQL), est perdue. XML local : utilisation du format xs:date avec indication de fuseau horaire. R\xe9sultat : "2003-01-01 +01:00". La partie heure, si elle est pr\xe9sente dans la valeur 4D (via le SQL), est perdue. XML datetime local : utilisation du format xs:dateTime (ISO 8601). Indication de fuseau horaire. Ce format permet de conserver la partie heure, si elle est pr\xe9sente dans la valeur 4D (via le SQL). R\xe9sultat : "',(0,r.jsx)(n.date,{children:"2003-01-01T00:00:00 +01:00"}),'". XML UTC : utilisation du format xs:date. R\xe9sultat : "2003-01-01Z". La partie heure, si elle est pr\xe9sente dans la valeur 4D (via le SQL), est perdue. XML datetime UTC : utilisation du format xs:dateTime (ISO 8601). Ce format permet de conserver la partie heure, si elle est pr\xe9sente dans la valeur 4D (via le SQL). R\xe9sultat : "',(0,r.jsx)(n.date,{children:"2003-01-01T00:00:00Z"}),'".']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML DOM case sensitivity"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsxs)(n.td,{children:["Sp\xe9cifie la prise en compte de la casse des caract\xe8res pour les noms d'\xe9l\xe9ments par les commandes ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/dom-get-xml-element",children:"DOM Get XML element"})," et ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/dom-count-xml-elements",children:"DOM Count XML elements"}),".",(0,r.jsx)(n.br,{}),"Valeurs possibles :",(0,r.jsx)(n.br,{}),"XML case sensitive (valeur par d\xe9faut) : les commandes tiennent compte de la casse.XML case insensitive : les commandes ne tiennent pas compte de la casse."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML external entity resolution"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsxs)(n.td,{children:["Permet de contr\xf4ler la r\xe9solution des entit\xe9s externes dans les documents XML. Par d\xe9faut pour des raisons de s\xe9curit\xe9, les ",(0,r.jsx)(n.em,{children:"parsers"})," XML DOM et SAX de 4D n'autorisent pas la r\xe9solution d'entit\xe9 externes. Notez que la port\xe9e de ce s\xe9lecteur est le process appelant (s'il est pr\xe9emptif) ou tous les process coop\xe9ratifs (s'il est appel\xe9 depuis un process coop\xe9ratif). Il s'applique globalement \xe0 tous les documents XML (le premier param\xe8tre est ignor\xe9, vous pouvez passer une cha\xeene vide). ",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valeurs possibles :"}),(0,r.jsx)(n.br,{}),"XML enabled : la r\xe9solution d'entit\xe9s externes est autoris\xe9e dans les documents XMLXML disabled (valeur par d\xe9faut) : la r\xe9solution d'entit\xe9s externes est interdite dans les documents XML (la d\xe9claration d'une entit\xe9 externe g\xe9n\xe8re une erreur d'analyse)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML indentation"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsxs)(n.td,{children:["D\xe9finit l\u2019indentation du ",(0,r.jsx)(n.em,{children:"document"})," XML. ",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valeurs possibles :"}),(0,r.jsx)(n.br,{}),"XML with indentation (valeur par d\xe9faut) : le document est indent\xe9.XML no indentation : le document n\u2019est pas indent\xe9, son contenu est plac\xe9 sur une seule ligne."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML line ending"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"10"}),(0,r.jsxs)(n.td,{children:["Caract\xe8res de fin de ligne dans les documents XML.",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valeurs p"})," ",(0,r.jsx)(n.strong,{children:"ossibles"})," ",(0,r.jsx)(n.strong,{children:":"})," XML valeur par d\xe9faut (par d\xe9faut) : utiliser les param\xe8tres de la base. La valeur par d\xe9faut est LF sous macOS et CRLF sous Windows. Toutefois, sous macOS, dans les bases/projets cr\xe9\xe9s avec des versions de 4D jusqu'\xe0 la v19.x, la valeur par d\xe9faut est CR pour DOM et CRLF pour SAX. Voir aussi les param\xe8tres de Compatibilit\xe9. XML LF : Utilise LF (line feed) XML CR : Utilise CR (carriage return) XML CRLF : Utilise CR+LF"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML picture encoding"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsxs)(n.td,{children:["D\xe9finit la mani\xe8re dont les images doivent converties (avant l\u2019encodage en base64).",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valeurs possibles :"}),(0,r.jsx)(n.br,{}),"XML convert to PNG (valeur par d\xe9faut) : les images sont converties en PNG avant d\u2019\xeatre encod\xe9es en base64.XML native codec : les images sont converties dans leur premier CODEC natif de stockage avant d\u2019\xeatre encod\xe9es en base64. Vous devez utiliser ces options pour encoder des images SVG (voir exemple de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/xml-set-options",children:"XML SET OPTIONS"}),")."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML string encoding"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["D\xe9finit la mani\xe8re dont les cha\xeenes 4D sont converties en valeurs d\u2019\xe9l\xe9ments. Il ne concerne pas les conversions en attributs pour lesquelles le XML impose l\u2019utilisation de caract\xe8res d\u2019\xe9chappement.",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valeurs possibles :"}),(0,r.jsx)(n.br,{}),"XML with escaping (valeur par d\xe9faut) : conversion des cha\xeenes 4D en valeurs d\u2019\xe9l\xe9ments XML avec remplacement des caract\xe8res. Les donn\xe9es de type texte sont automatiquement analys\xe9es de mani\xe8re \xe0 ce que les caract\xe8res interdits (<&>\u2019) soient remplac\xe9s par des entit\xe9s XML (&<> '\").XML raw data : les cha\xeenes 4D sont envoy\xe9es en tant que donn\xe9es brutes, 4D n\u2019effectue ni encodage ni analyse. Les valeurs 4D seront converties si possible en fragments XML et ins\xe9r\xe9es en tant qu\u2019enfant de l\u2019\xe9l\xe9ment cible. Si une valeur ne peut pas \xeatre consid\xe9r\xe9e comme fragment XML, elle est ins\xe9r\xe9e sous forme de donn\xe9e brute dans un nouveau noeud CDATA"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"XML time encoding"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsxs)(n.td,{children:["D\xe9finit la mani\xe8re dont les heures 4D seront converties. Par exemple, ?02/00/46? (heure de Paris). L\u2019encodage diff\xe8re suivant que vous souhaitez exprimer une heure ou une dur\xe9e.",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Valeurs possibles pour les heures :"}),(0,r.jsx)(n.br,{}),'XML datetime UTC : heure exprim\xe9e en UTC (Temps Universel Coordonn\xe9). A noter que la conversion en UTC est automatique. R\xe9sultat : "',(0,r.jsx)(n.duree,{children:"0000-00-00T01:00:46Z"}),'". XML datetime local : heure exprim\xe9e avec le d\xe9calage horaire de la machine du moteur de 4D. R\xe9sultat : "',(0,r.jsx)(n.duree,{children:"0000-00-00T02:00:46+01:00"}),'". XML datetime local absolute (valeur par d\xe9faut) : heure exprim\xe9e sans indication de fuseau horaire. Pas de modification de la valeur. R\xe9sultat : "',(0,r.jsx)(n.duree,{children:"0000-00-00T02:00:46"}),'". ',(0,r.jsx)(n.strong,{children:"Valeurs possibles pour les dur\xe9es :"}),(0,r.jsx)(n.br,{}),'XML seconds : nombre de secondes depuis minuit, pas de modification de la valeur puisqu\u2019elle exprime une dur\xe9e. R\xe9sultat : "',(0,r.jsx)(n.duree,{children:"7246"}),'". XML duration : dur\xe9e exprim\xe9e de mani\xe8re conforme au XML Schema Part 2: Datatypes Second Edition. Pas de modification de la valeur puisqu\u2019elle exprime une dur\xe9e. R\xe9sultat : "',(0,r.jsx)(n.duree,{children:"PT02H00M46S"}),'".']})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/xml-set-options",children:"XML SET OPTIONS"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1096"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);