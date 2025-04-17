"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54940"],{768168:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/method-get-code","title":"METHOD GET CODE","description":"METHOD GET CODE ( chemin ; code {; option} {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-get-code.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-code","permalink":"/docs/fr/20-R8/commands/method-get-code","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-code.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-code","title":"METHOD GET CODE","slug":"/commands/method-get-code","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET ATTRIBUTES","permalink":"/docs/fr/20-R8/commands/method-get-attributes"},"next":{"title":"METHOD GET COMMENTS","permalink":"/docs/fr/20-R8/commands/method-get-comments"}}'),r=s("785893"),d=s("250065");let i={id:"method-get-code",title:"METHOD GET CODE",slug:"/commands/method-get-code",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"METHOD GET CODE"})," ( ",(0,r.jsx)(n.em,{children:"chemin"})," ; ",(0,r.jsx)(n.em,{children:"code"})," {; ",(0,r.jsx)(n.em,{children:"option"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"chemin"}),(0,r.jsx)(n.td,{children:"Text, Text array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Texte ou Tableau texte contenant un ou plusieurs chemin(s) de m\xe9thode(s)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"Text, Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Code de(s) m\xe9thode(s) d\xe9sign\xe9e(s)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"option"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0 ou omis = export simple (sans tokens), 1 = export avec tokens"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si pass\xe9 = la commande s\u2019applique \xe0 la base h\xf4te lorsqu\u2019elle est ex\xe9cut\xe9e depuis un composant (param\xe8tre ignor\xe9 hors de ce contexte)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"METHOD GET CODE"})," retourne dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"code"})," le contenu de la ou des m\xe9thode(s) d\xe9sign\xe9e(s) par le param\xe8tre ",(0,r.jsx)(n.em,{children:"chemin"}),". La commande peut retourner le code de tous les types de m\xe9thodes : m\xe9thodes base, d\xe9finitions de classes, triggers, m\xe9thodes projet, m\xe9thodes formulaire et m\xe9thodes objet."]}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez utiliser deux types de syntaxes, bas\xe9es soit sur des tableaux texte, soit sur des variables texte :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var vTchemin : Text\xa0// variables texte\n\xa0var vTcode : Text\n\xa0METHOD GET CODE(vTchemin;vTcode)\xa0// code d\u2019une seule m\xe9thode\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(tabChemins;0)\xa0// tableaux texte\n\xa0ARRAY TEXT(tabCodes;0)\n\xa0METHOD GET CODE(tabChemins;tabCodes)\xa0// codes de plusieurs m\xe9thodes\n"})}),"\n",(0,r.jsx)(n.p,{children:"Il n\u2019est pas possible de mixer les deux syntaxes."}),"\n",(0,r.jsxs)(n.p,{children:["Si un chemin d\u2019acc\xe8s pass\xe9 est invalide, le param\xe8tre ",(0,r.jsx)(n.em,{children:"code"})," est laiss\xe9 vide et une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans le texte du ",(0,r.jsx)(n.em,{children:"code"})," g\xe9n\xe9r\xe9 par la commande :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Les noms des commandes sont \xe9crits en anglais, hormis si vous utilisez une version fran\xe7aise de 4D et avez coch\xe9 la pr\xe9f\xe9rence "Utiliser langage fran\xe7ais et param\xe8tres r\xe9gionaux syst\xe8me" (cf. ',(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/is-a-list",children:"Is a list"}),"). Le code peut contenir les ",(0,r.jsx)(n.em,{children:"tokens"})," du langage afin de le rendre ind\xe9pendant de la langue et de la version, si vous utilisez le param\xe8tre ",(0,r.jsx)(n.em,{children:"option"})," (cf. ci-dessous)."]}),"\n",(0,r.jsx)(n.li,{children:"Le texte est indent\xe9 avec des caract\xe8res de tabulation en fonction des structures de programmation, \xe0 l'instar de l'\xe9diteur de m\xe9thodes, afin d'augmenter la lisibilit\xe9 du code."}),"\n",(0,r.jsx)(n.li,{children:"Une ligne est ajout\xe9e en en-t\xeate du code g\xe9n\xe9r\xe9, contenant des m\xe9tadonn\xe9es utilis\xe9es lors de l\u2019import du code, par exemple :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// %attributes = {"lang":"fr","invisible":true,"folder":"Web3"}  \n'})}),"\n",(0,r.jsxs)(n.p,{children:['En cas d\u2019import, cette ligne n\u2019est pas import\xe9e, elle est utilis\xe9e pour d\xe9finir les attributs \xe0 appliquer (les attributs non sp\xe9cifi\xe9s sont remis \xe0 leur valeur par d\xe9faut). L\u2019attribut "lang" d\xe9finit la langue d\u2019export, il permet d\u2019emp\xeacher un import dans une application en langue diff\xe9rente (dans ce cas, une erreur est g\xe9n\xe9r\xe9e). L\'attribut "folder" contient le nom du dossier parent de la m\xe9thode, il n\u2019appara\xeet pas si la m\xe9thode n\u2019a pas de dossier parent.',(0,r.jsx)(n.br,{}),"\nDes attributs suppl\xe9mentaires peuvent \xeatre d\xe9finis. Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"option"}),' vous permet de s\xe9lectionner le mode d\'exportation du code concernant les \xe9l\xe9ments "tokenis\xe9s" de la ou des m\xe9thode(s) :']}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si vous passez 0 ou omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"option"}),", le code de la m\xe9thode est export\xe9 sans tokens, c'est-\xe0-dire exactement comme affich\xe9 dans l'\xe9diteur de m\xe9thodes."]}),"\n",(0,r.jsxs)(n.li,{children:['Si vous passez 1 ou la constante Code with tokens, le code de la m\xe9thode est export\xe9 avec des tokens, c\'est-\xe0-dire que les \xe9l\xe9ments "tokenis\xe9s" sont suivis de leur r\xe9f\xe9rence interne dans le contenu du ',(0,r.jsx)(n.em,{children:"code"})," export\xe9. Par exemple, l'expression \"",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/string",children:"String"}),'(a)" est export\xe9e "',(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/string",children:"String"}),':C10(a)", o\xf9 "C10" est la r\xe9f\xe9rence interne de la commande ',(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/string",children:"String"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Les \xe9l\xe9ments tokenis\xe9s du langage sont :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"les commandes et constantes 4D,"}),"\n",(0,r.jsx)(n.li,{children:"les noms de tables et de champs,"}),"\n",(0,r.jsx)(n.li,{children:"les commandes des plug-ins 4D."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Le code export\xe9 avec ses tokens est ind\xe9pendant de tout renommage ult\xe9rieur des \xe9l\xe9ments du langage. Gr\xe2ce aux tokens, le code fourni sous forme de texte sera toujours correctement interpr\xe9t\xe9 par 4D, que ce soit via la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/method-set-code",children:"METHOD SET CODE"})," ou m\xeame le copier-coller. Pour plus d'informations sur la syntaxe tokens 4D, veuillez vous reporter \xe0 la section ",(0,r.jsx)(n.em,{children:"Utiliser des tokens dans les formules"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si la commande est ex\xe9cut\xe9e depuis un composant, elle s\u2019applique par d\xe9faut aux m\xe9thodes du composant. Si vous passez le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"}),", elle acc\xe8de aux m\xe9thodes de la base h\xf4te."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/method-set-code",children:"METHOD SET CODE"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsxs)(n.p,{children:["Cet exemple illustre les effets du param\xe8tre ",(0,r.jsx)(n.em,{children:"option"}),"."]}),"\n",(0,r.jsx)(n.p,{children:'Vous voulez importer le code de la m\xe9thode "simple_init" suivante :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALL RECORDS([Customer])\n\xa0End case\n"})}),"\n",(0,r.jsx)(n.p,{children:"Si vous ex\xe9cutez le code suivant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $path : Text\n\xa0var $contents : Text\n\xa0$code:=METHOD Get path(Chemin m\xe9thode projet;"simple_init")\n\xa0METHOD GET CODE($path;$contents;0)\xa0//pas de tokens\n\xa0TEXT TO DOCUMENT("simple_init.txt";$contents)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Le document r\xe9sultant contient :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-RAW",children:'\xa0 //%attributes = {"lang":"fr"} commentaire r\xe9serv\xe9, ajout\xe9 par 4DAu cas ou\xa0\xa0\xa0 : (Evenement formulaire code=Sur chargement)\xa0\xa0\xa0 \xa0\xa0\xa0 TOUT SELECTIONNER([Customer])Fin de cas\n'})}),"\n",(0,r.jsx)(n.p,{children:"Si vous ex\xe9cutez le code suivant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $path : Text\n\xa0var $contents : Text\n\xa0$code:=METHOD Get path(Chemin m\xe9thode projet;"simple_init")\n\xa0METHOD GET CODE($path;$contents;Code with tokens)\xa0//ajouter tokens\n\xa0TEXT TO DOCUMENT("simple_init.txt";$contents)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Le document r\xe9sultant contient alors :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-RAW",children:'\xa0 //%attributes = {"lang":"fr"} commentaire r\xe9serv\xe9, ajout\xe9 par 4DAu cas ou\xa0\xa0\xa0 : (Evenement formulaire code:C388=Sur chargement:K2:1)\xa0\xa0\xa0 \xa0\xa0\xa0 TOUT SELECTIONNER:C47([Customer:1])Fin de cas\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/method-set-code",children:"METHOD SET CODE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Utiliser des tokens dans les formules"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1190"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);