"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97184"],{878833:function(e,s,t){t.r(s),t.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/get-text-keywords","title":"GET TEXT KEYWORDS","description":"GET TEXT KEYWORDS ( texte ; tabMotsCl\xe9s {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-text-keywords.md","sourceDirName":"commands-legacy","slug":"/commands/get-text-keywords","permalink":"/docs/fr/commands/get-text-keywords","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-text-keywords.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-text-keywords","title":"GET TEXT KEYWORDS","slug":"/commands/get-text-keywords","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Delete string","permalink":"/docs/fr/commands/delete-string"},"next":{"title":"Insert string","permalink":"/docs/fr/commands/insert-string"}}'),r=t("785893"),a=t("250065");let l={id:"get-text-keywords",title:"GET TEXT KEYWORDS",slug:"/commands/get-text-keywords",displayed_sidebar:"docs"},i=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"GET TEXT KEYWORDS"})," ( ",(0,r.jsx)(s.em,{children:"texte"})," ; ",(0,r.jsx)(s.em,{children:"tabMotsCl\xe9s"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"texte"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Texte original"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabMotsCl\xe9s"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Tableau contenant les mots-cl\xe9s"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Op\xe9rateur"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Si pass\xe9 = mots uniques"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"GET TEXT KEYWORDS"})," d\xe9coupe la totalit\xe9 du ",(0,r.jsx)(s.em,{children:"texte"})," en mots et cr\xe9e, pour chaque mot obtenu, un \xe9l\xe9ment dans le tableau texte ",(0,r.jsx)(s.em,{children:"tabMotsCl\xe9s"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Le d\xe9coupage en mots est effectu\xe9 \xe0 l\u2019aide du m\xeame algorithme que celui que 4D utilise pour construire les ",(0,r.jsx)(s.em,{children:"Index de mots-cl\xe9s"}),". Cet algorithme est bas\xe9 sur la librairie ICU. Pour plus d\u2019informations sur les s\xe9parateurs pris en compte, reportez-vous \xe0 l\u2019adresse suivante : ",(0,r.jsx)(s.a,{href:"http://userguide.icu-project.org/boundaryanalysis",children:"http://userguide.icu-project.org/boundaryanalysis"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"}),' A la demande des utilisateurs, une exception a \xe9t\xe9 introduite pour les langages fran\xe7ais et italien : le caract\xe8re apostrophe \' suivi d\u2019une voyelle ou de la lettre h est consid\xe9r\xe9 comme s\xe9parateur de mot. Par exemple, les cha\xeenes "L\'homme" ou "l\'arbre" seront bien d\xe9coup\xe9es en "L\u2019"+"homme" et "l\'"+"arbre".']}),"\n",(0,r.jsxs)(s.p,{children:["L\u2019algorithme utilis\xe9 diff\xe8re si l\u2019option ",(0,r.jsx)(s.strong,{children:"N\u2019utiliser que les caract\xe8res non alphanum\xe9riques pour les mots-cl\xe9s"})," est coch\xe9e ou non dans les ",(0,r.jsx)(s.a,{href:"https://developer.4d.com/docs/fr/settings/database/#comparaison-de-texte",children:"Propri\xe9t\xe9s de la base"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(s.em,{children:"texte"})," le texte original \xe0 d\xe9couper. Ce texte peut \xeatre styl\xe9, dans ce cas les balises de style sont simplement ignor\xe9es."]}),"\n",(0,r.jsxs)(s.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(s.em,{children:"tabMotsCl\xe9s"})," le tableau texte qui sera rempli par la commande avec les mots extraits du texte."]}),"\n",(0,r.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"*"}),", la commande ne stockera chaque mot-cl\xe9 qu\u2019une seule fois dans ",(0,r.jsx)(s.em,{children:"tabMotsCl\xe9s"}),". Par d\xe9faut, si ce param\xe8tre est omis, tous les mots extraits du texte sont stock\xe9s dans le tableau, m\xeame s\u2019ils apparaissent plusieurs fois."]}),"\n",(0,r.jsx)(s.p,{children:'Cette commande permet d\u2019effectuer de fa\xe7on simple des recherches parmi des enregistrements contenant des textes de grande taille, en ayant la garantie d\u2019utiliser les m\xeames mots-cl\xe9s que 4D. Par exemple, soit un texte contenant "10.000 Jean-Pierre BC45". Si le d\xe9coupage en mots-cl\xe9s donne "10.000" + "Jean" + "Pierre" + "BC45", le tableau contiendra 4 \xe9l\xe9ments. Par programmation, il est alors facile d\u2019effectuer une boucle dans ce tableau afin de trouver les enregistrements contenant un ou plusieurs de ces mots-cl\xe9s \xe0 l\u2019aide de l\u2019op\xe9rateur % (voir exemples).'}),"\n",(0,r.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(s.p,{children:["Dans un formulaire contenant une zone de recherche, l\u2019utilisateur peut saisir un ou plusieurs mot(s). Lorsqu\u2019il valide, on recherche les enregistrements dont le champ ",(0,r.jsx)(s.em,{children:"MonChamp"})," contient au moins un des mots saisis par l\u2019utilisateur."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// vSearch est la variable de la zone de saisie dans le formulaire\n\xa0GET TEXT KEYWORDS(vSearch;tSearch;*)\n\xa0\xa0//* pour le cas o\xf9 l\u2019utilisateur saisirait le m\xeame mot plusieurs fois\n\xa0CREATE SET([MaTable];"Globaltrouve")\n\xa0$n:=Size of array(tSearch)\n\xa0For($i;1;$n)\n\xa0\xa0\xa0\xa0QUERY([MaTable];[MaTable]MonChamp% tSearch{$i})\n\xa0\xa0\xa0\xa0CREATE SET(([MaTable];"trouve")\n\xa0\xa0\xa0\xa0UNION("Globaltrouve";"trouve";"Globaltrouve")\n\xa0End for\n\xa0USE SET("Globaltrouve")\n'})}),"\n",(0,r.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsxs)(s.p,{children:["Dans le m\xeame formulaire que pr\xe9c\xe9demment, on recherche les enregistrements dont le champ ",(0,r.jsx)(s.em,{children:"MonChamp"})," contient tous les mots saisis par l\u2019utilisateur."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// vSearch est la variable de la zone de saisie dans le formulaire\n\xa0GET TEXT KEYWORDS(vSearch;tSearch;*)\n\xa0$n:=Size of array(tSearch)\n\xa0QUERY([MaTable];[MaTable]ID >=0;*)\n\xa0\xa0// initialiser la recherche = tous les enregistrements\n\xa0For($i;1;$n)\n\xa0\xa0\xa0\xa0QUERY([MaTable];&;[MaTable]MonChamp% tSearch{$i};*)\n\xa0\xa0// ajouter le crit\xe8re\n\xa0End for\n\xa0QUERY([MaTable])\xa0//recherche\n"})}),"\n",(0,r.jsx)(s.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsx)(s.p,{children:"Pour compter les mots d\u2019un texte :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0GET TEXT KEYWORDS(vTexte;tMots)\xa0// tous les mots\n\xa0$n:=Size of array(tMots)\n\xa0GET TEXT KEYWORDS(vTexte;tMots;*)\xa0// mots diff\xe9rents\n\xa0$m:=Size of array(tMots)\n\xa0ALERT("Ce texte contient "+String($n)+" mots distincts parmi "+Chaine($m))\n'})}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/commands/distinct-values",children:"DISTINCT VALUES"})}),"\n",(0,r.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"1141"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return i},a:function(){return l}});var n=t(667294);let r={},a=n.createContext(r);function l(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);