"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42880"],{906034:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/query","title":"QUERY","description":"QUERY ( {laTable }{;}{ crit\xe8re {; *}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/query.md","sourceDirName":"commands-legacy","slug":"/commands/query","permalink":"/docs/fr/commands/query","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"query","title":"QUERY","slug":"/commands/query","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ORDER BY FORMULA","permalink":"/docs/fr/commands/order-by-formula"},"next":{"title":"QUERY BY ATTRIBUTE","permalink":"/docs/fr/commands/query-by-attribute"}}'),l=r("785893"),i=r("250065");let t={id:"query",title:"QUERY",slug:"/commands/query",displayed_sidebar:"docs"},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Construction d&#39;une ligne de recherche",id:"construction-dune-ligne-de-recherche",level:2},{value:"Exemple 5",id:"exemple-5",level:2},{value:"Exemple 6",id:"exemple-6",level:2},{value:"Exemple 7",id:"exemple-7",level:2},{value:"Exemple 8",id:"exemple-8",level:2},{value:"Exemple 9",id:"exemple-9",level:2},{value:"Exemple 10",id:"exemple-10",level:2},{value:"Exemple 11",id:"exemple-11",level:2},{value:"Exemple 12",id:"exemple-12",level:2},{value:"Exemple 13",id:"exemple-13",level:2},{value:"Exemple 14",id:"exemple-14",level:2},{value:"Exemple 15",id:"exemple-15",level:2},{value:"Exemple 16",id:"exemple-16",level:2},{value:"Exemple 17",id:"exemple-17",level:2},{value:"Exemple 18",id:"exemple-18",level:2},{value:"Exemple 19",id:"exemple-19",level:2},{value:"Exemple 20",id:"exemple-20",level:2},{value:"Exemple 21",id:"exemple-21",level:2},{value:"Exemple 22",id:"exemple-22",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"QUERY"})," ( {",(0,l.jsx)(n.em,{children:"laTable"})," }{;}{ ",(0,l.jsx)(n.em,{children:"crit\xe8re"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"laTable"}),(0,l.jsx)(n.td,{children:"Table"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Table dans laquelle la s\xe9lection est cr\xe9\xe9e ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"crit\xe8re"}),(0,l.jsx)(n.td,{children:"Expression"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Crit\xe8re de recherche"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Op\xe9rateur"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Attente d'ex\xe9cution de la recherche"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"QUERY"})," recherche les enregistrements r\xe9pondant au(x) crit\xe8re(s) de recherche sp\xe9cifi\xe9(s) dans ",(0,l.jsx)(n.em,{children:"crit\xe8re"})," et retourne une s\xe9lection d'enregistrements de ",(0,l.jsx)(n.em,{children:"laTable"}),".modifie la s\xe9lection courante de ",(0,l.jsx)(n.em,{children:"laTable"})," pour le process courant. Le premier enregistrement de la nouvelle s\xe9lection devient l'enregistrement courant."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,l.jsx)(n.em,{children:"laTable"}),", la commande s'applique \xe0 la table par d\xe9faut. Si aucune table par d\xe9faut n'a \xe9t\xe9 d\xe9finie, une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous ne passez ni le param\xe8tre ",(0,l.jsx)(n.em,{children:"crit\xe8re"})," ni le param\xe8tre ",(0,l.jsx)(n.em,{children:"*"}),", ",(0,l.jsx)(n.strong,{children:"QUERY"})," affiche la bo\xeete de dialogue de l'Editeur de recherches de 4D pour ",(0,l.jsx)(n.em,{children:"table"})," (sauf lorsqu'il s'agit de la derni\xe8re ligne d'une recherche complexe, cf. ci-dessous) :"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:r(831481).Z+"",width:"856",height:"164"})}),"\n",(0,l.jsxs)(n.p,{children:["Pour plus d'informations sur l'utilisation de cet \xe9diteur, reportez-vous au manuel ",(0,l.jsx)(n.em,{children:"Mode D\xe9veloppement"}),".",(0,l.jsx)(n.br,{}),"\nL'utilisateur construit la recherche puis clique sur le bouton ",(0,l.jsx)(n.strong,{children:"Chercher"})," ou ",(0,l.jsx)(n.strong,{children:"Chercher dans s\xe9lection"}),". Si la recherche est correctement effectu\xe9e et n'est pas interrompue, la variable syst\xe8me OK prend la valeur ",(0,l.jsx)(n.em,{children:"1"}),". Si l'utilisateur clique sur ",(0,l.jsx)(n.strong,{children:"Annuler"}),", la commande ",(0,l.jsx)(n.strong,{children:"QUERY"})," est interrompue sans effectuer de recherche et la variable OK prend la valeur ",(0,l.jsx)(n.em,{children:"0"})," (z\xe9ro)."]}),"\n",(0,l.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.p,{children:"L'exemple suivant affiche l'Editeur de recherches pour la table [Produits] :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Produits])\n"})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:"L'exemple suivant affiche l'Editeur de recherches pour la table par d\xe9faut (si elle a \xe9t\xe9 d\xe9finie) :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Si vous sp\xe9cifiez le param\xe8tre ",(0,l.jsx)(n.em,{children:"crit\xe8re"}),", l'Editeur de recherches ne s'affiche pas et la recherche est enti\xe8rement d\xe9finie par programmation. Pour des recherches simples (recherches sur un seul champ), vous appelez ",(0,l.jsx)(n.strong,{children:"QUERY"})," une seule fois avec le param\xe8tre ",(0,l.jsx)(n.em,{children:"crit\xe8re"})," construit de la mani\xe8re d\xe9crite plus bas. Pour des recherches complexes (recherches sur de multiples champs ou avec de multiples conditions), vous appelez ",(0,l.jsx)(n.strong,{children:"QUERY"})," autant de fois que n\xe9cessaire avec le param\xe8tre ",(0,l.jsx)(n.em,{children:"crit\xe8re"})," et le param\xe8tre optionnel * sauf pour la derni\xe8re ligne ",(0,l.jsx)(n.strong,{children:"QUERY"})," (qui d\xe9clenche la recherche)."]}),"\n",(0,l.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,l.jsx)(n.p,{children:'L\'exemple suivant recherche les [Personnes] dont le nom commence par "a" :'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personnes];[Personnes]Nom="a@")\n'})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,l.jsx)(n.p,{children:'L\'exemple suivant recherche les [Personnes] dont le nom commence par "a" ou "b" :'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personnes];[Personnes]Nom="a@";*)\xa0// * indique qu\'il y a un autre crit\xe8re de recherche\n\xa0QUERY([Personnes];|;[Personnes]Nom="b@")\n\xa0\xa0// Pas de * : indique la fin de la d\xe9finition des crit\xe8res et lance l\'ex\xe9cution de la recherche\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Le mode d'interpr\xe9tation du caract\xe8re @ dans les recherches peut \xeatre modifi\xe9 via une option des pr\xe9f\xe9rences. Pour plus d'informations, reportez-vous \xe0 la section ",(0,l.jsx)(n.em,{children:"Op\xe9rateurs de comparaison"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"construction-dune-ligne-de-recherche",children:"Construction d'une ligne de recherche"}),"\n",(0,l.jsxs)(n.p,{children:["Le param\xe8tre ",(0,l.jsx)(n.em,{children:"crit\xe8re"})," utilise la syntaxe suivante :"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"{op\xe9rateur ; } champ comparateur valeur"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["L'op\xe9rateur est utilis\xe9 pour lier deux appels \xe0 ",(0,l.jsx)(n.strong,{children:"QUERY"})," lors d'une d\xe9finition de recherche complexe. Les op\xe9rateurs disponibles sont les m\xeames que ceux propos\xe9s dans l'Editeur de recherches :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Op\xe9rateur"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Symbole"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ET"}),(0,l.jsx)(n.td,{children:"&"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"OU"}),(0,l.jsx)(n.td,{children:"|"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Sauf"}),(0,l.jsx)(n.td,{children:"#"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["L'op\xe9rateur est optionnel et n'est pas n\xe9cessaire pour le premier appel \xe0 ",(0,l.jsx)(n.strong,{children:"QUERY"})," lors d'une recherche complexe. Il est \xe9galement inutile si votre recherche s'\xe9crit sur une seule ligne. Si vous l'omettez \xe0 l'int\xe9rieur d'une recherche complexe, le ",(0,l.jsx)(n.strong,{children:"ET"})," (&) est utilis\xe9 par d\xe9faut."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Le ",(0,l.jsx)(n.em,{children:"champ"})," est le champ sur lequel va porter la recherche. Il peut provenir d'une autre table si celle-ci est la table 1 d'une table li\xe9e \xe0 ",(0,l.jsx)(n.em,{children:"table"})," par un lien automatique ou manuel."]}),"\n",(0,l.jsxs)(n.li,{children:["Le ",(0,l.jsx)(n.em,{children:"comparateur"})," est l'\xe9l\xe9ment qui va permettre de confronter ",(0,l.jsx)(n.em,{children:"champ"})," et ",(0,l.jsx)(n.em,{children:"crit\xe8reRecherche"}),". Voici la liste des comparateurs possibles :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Comparateur"})}),(0,l.jsxs)(n.th,{children:[(0,l.jsx)(n.strong,{children:"Symbole \xe0 utiliser avec"})," ",(0,l.jsx)(n.strong,{children:"QUERY"})]})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Egal \xe0"}),(0,l.jsx)(n.td,{children:"="})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Diff\xe9rent de"}),(0,l.jsx)(n.td,{children:"#"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Inf\xe9rieur \xe0"}),(0,l.jsx)(n.td,{children:"<"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Sup\xe9rieur \xe0"}),(0,l.jsx)(n.td,{children:">"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Inf\xe9rieur ou \xe9gal \xe0"}),(0,l.jsx)(n.td,{children:"<="})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Sup\xe9rieur ou \xe9gal \xe0"}),(0,l.jsx)(n.td,{children:">="})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Contient mot-cl\xe9"}),(0,l.jsx)(n.td,{children:"%"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Il est possible de d\xe9finir le comparateur sous la forme d'une expression alphanum\xe9rique au lieu d'un symbole. Dans ce cas, il est obligatoire d'utiliser des points-virgules pour dissocier les \xe9l\xe9ments de la cha\xeene de recherche. Ce principe permet par exemple de cr\xe9er des s\xe9quences de recherches param\xe9trables en faisant varier le comparateur, ou de construire des interfaces de recherche utilisateur personnalis\xe9es. Reportez-vous \xe0 l'exemple 21."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["La ",(0,l.jsx)(n.em,{children:"valeur"})," repr\xe9sente ce qui va \xeatre compar\xe9 au contenu de ",(0,l.jsx)(n.em,{children:"champ"}),". La valeur peut \xeatre toute expression du m\xeame type que ",(0,l.jsx)(n.em,{children:"champ"}),". Le type de la valeur n'est \xe9valu\xe9 qu'une seule fois, au d\xe9marrage de la recherche, et ne l'est donc pas pour chaque enregistrement. Si la recherche porte sur le contenu d'une cha\xeene de caract\xe8res, utilisez dans 'valeur' le symbole \"@\" pour isoler le contenu \xe0 rechercher, par exemple \"@Dupon@\". Il est \xe0 noter, dans ce cas, que la recherche ne tire que partiellement parti de l'index (compacit\xe9 du stockage des donn\xe9es).",(0,l.jsx)(n.br,{}),"\nLa recherche par mots-cl\xe9s n'est disponible qu'avec des champs de type alpha ou texte. Pour plus d'informations sur ce type de recherche, reportez-vous \xe0 la section ",(0,l.jsx)(n.em,{children:"Op\xe9rateurs de comparaison"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Voici les r\xe8gles \xe0 observer pour la construction de s\xe9quences de recherche :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"La premi\xe8re ligne ne doit pas contenir d'op\xe9rateur."}),"\n",(0,l.jsx)(n.li,{children:"Les suivantes peuvent d\xe9buter par un op\xe9rateur de liaison. Si vous l'omettez, l'op\xe9rateur ET (&) est utilis\xe9 par d\xe9faut."}),"\n",(0,l.jsx)(n.li,{children:"Toutes les lignes, \xe0 l'exception de la derni\xe8re, doivent s'achever par le symbole *."}),"\n",(0,l.jsxs)(n.li,{children:["Pour lancer la recherche, ne passez pas le param\xe8tre * lors de la construction de votre derni\xe8re ligne. Autre solution : vous pouvez ex\xe9cuter la commande ",(0,l.jsx)(n.strong,{children:"QUERY"})," sans autre param\xe8tre que la table (l'Editeur de recherches ne s'affiche pas ; au lieu de cela, les lignes de recherche complexes d\xe9finies auparavant sont ex\xe9cut\xe9es)."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Chaque table maintient sa propre construction de recherche courante. Cela signifie que vous pouvez cr\xe9er de multiples recherches simultan\xe9ment, une pour chaque table. Dans ce cas, vous devez passer le param\xe8tre ",(0,l.jsx)(n.em,{children:"table"})," ou sp\xe9cifier une table par d\xe9faut."]}),"\n",(0,l.jsx)(n.p,{children:"Quelle que soit la mani\xe8re dont la recherche a \xe9t\xe9 d\xe9finie :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Si l'ex\xe9cution d'une commande ",(0,l.jsx)(n.strong,{children:"QUERY"})," n\xe9cessite un certain temps, 4D affiche automatiquement un message contenant un thermom\xe8tre de progression. Ces thermom\xe8tres peuvent \xeatre cach\xe9s \xe0 l'aide des commandes ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/messages-on",children:"MESSAGES ON"})," et ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/messages-off",children:"MESSAGES OFF"}),". Si le thermom\xe8tre de progression est affich\xe9, l'utilisateur peut cliquer sur le bouton ",(0,l.jsx)(n.strong,{children:"Stop"})," pour interrompre l'op\xe9ration. Si la recherche s'est correctement d\xe9roul\xe9e, la variable syst\xe8me OK prend la valeur 1. Sinon, si la recherche est interrompue, OK prend la valeur 0 (z\xe9ro)."]}),"\n",(0,l.jsxs)(n.li,{children:["Si des champs index\xe9s sont sp\xe9cifi\xe9s, la recherche est optimis\xe9e \xe0 chaque fois que c'est possible (la recherche commence par les champs index\xe9s), r\xe9duisant au maximum la dur\xe9e de l'op\xe9ration. La commande tire parti des index composites pour les recherches utilisant le ",(0,l.jsx)(n.strong,{children:"ET"})," (&)."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,l.jsx)(n.p,{children:'Nous recherchons tous les enregistrements dont le nom correspond \xe0 "Dupont" :'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personnes];[Personnes]Nom="Dupont")\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Si le champ Nom est index\xe9, nous b\xe9n\xe9ficions donc d'une recherche acc\xe9l\xe9r\xe9e tirant parti de l'index."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Rappel :"}),' Cette recherche trouvera les enregistrements tels que "Dupont", "dupont", "DUPONT", etc. Si vous voulez que la recherche tienne compte des majuscules/minuscules, d\xe9finissez des crit\xe8res suppl\xe9mentaires utilisant les codes de caract\xe8res.']}),"\n",(0,l.jsx)(n.h2,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,l.jsx)(n.p,{children:'Nous recherchons les personnes se nommant "Dupont" et se pr\xe9nommant "Jean". Le champ Nom est index\xe9. En revanche, le champ Pr\xe9nom ne l\'est pas :'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personnes];[Personnes]Nom="Dupont";*)\xa0// Chercher toute personne qui s\'appelle Dupont\n\xa0QUERY([Personnes];&;[Personnes]Pr\xe9nom="Jean")\xa0// dont le pr\xe9nom est Jean\n'})}),"\n",(0,l.jsx)(n.p,{children:"Cet exemple effectue dans un premier temps une recherche rapide sur le champ index\xe9 Nom, ce qui r\xe9duit la s\xe9lection d'enregistrements \xe0 ceux des personnes s'appelant Dupont. La recherche s'effectue ensuite s\xe9quentiellement sur le champ Pr\xe9nom, mais nous serons peu p\xe9nalis\xe9s puisqu'elle s'ex\xe9cute parmi une pr\xe9s\xe9lection d'enregistrements."}),"\n",(0,l.jsx)(n.h2,{id:"exemple-7",children:"Exemple 7"}),"\n",(0,l.jsxs)(n.p,{children:["Cet exemple tirera automatiquement parti de l'index composite incluant les champs ",(0,l.jsx)(n.em,{children:"[Personnes]Pr\xe9nom+[Personnes]Nom"})," (s'il existe) pour trouver les enregistrements de toutes les personnes nomm\xe9es Jean Dupont :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personnes];[Personnes]Pr\xe9nom="john";*)\xa0// Trouver tous les Jean\n\xa0QUERY([Personnes];&;[Personnes]Nom="Dupont")\xa0// dont le nom est Dupont\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Pour plus d'informations, veuillez vous r\xe9f\xe9rer au paragraphe ",(0,l.jsx)(n.em,{children:"Index composites"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"exemple-8",children:"Exemple 8"}),"\n",(0,l.jsx)(n.p,{children:"L'exemple suivant recherche les personnes se nommant Dupont ou Blanc. Le champ Nom est index\xe9 :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Chercher toute personne qui s\'appelle Dupont\u2026\n\xa0QUERY([Personnes];[Personnes]Nom="Dupont";*)\n\xa0QUERY([Personnes];|;[Personnes]Nom="Blanc")\xa0// ou Blanc\n'})}),"\n",(0,l.jsx)(n.p,{children:"La commande utilise l'index du champ Nom pour les deux recherches. Les deux recherches sont effectu\xe9es, et leurs r\xe9sultats sont plac\xe9s dans des ensembles internes qui sont finalement combin\xe9s par l'interm\xe9diaire d'une op\xe9ration Union."}),"\n",(0,l.jsx)(n.h2,{id:"exemple-9",children:"Exemple 9"}),"\n",(0,l.jsx)(n.p,{children:"L'exemple suivant recherche des personnes qui ne travaillent pas pour une soci\xe9t\xe9. La recherche est effectu\xe9e en testant si le nom de la soci\xe9t\xe9 est une cha\xeene vide."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personnes];[Personnes]Soci\xe9t\xe9="")\xa0// Chercher les personnes sans soci\xe9t\xe9\n'})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-10",children:"Exemple 10"}),"\n",(0,l.jsx)(n.p,{children:"L'exemple suivant recherche chaque personne se nommant \"Dupont\" et travaillant dans une soci\xe9t\xe9 bas\xe9e \xe0 Paris. La deuxi\xe8me recherche utilise un champ venant d'une autre table. Cette recherche peut \xeatre effectu\xe9e parce que la table [Personnes] est li\xe9e \xe0 la table [Soci\xe9t\xe9] par un lien de N vers 1 :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personnes];[Personnes]Nom="Dupont";*)\xa0// Chercher toute personne qui s\'appelle Dupont\u2026\n\xa0QUERY([Personnes];&;[Soci\xe9t\xe9]Ville ="Paris")\xa0// ...qui travaille pour une soci\xe9t\xe9 \xe0 Paris\n'})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-11",children:"Exemple 11"}),"\n",(0,l.jsx)(n.p,{children:"L'exemple suivant recherche l'enregistrement de chaque personne dont l'initiale du nom est situ\xe9e entre les lettre A (incluse) et M (incluse) :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personnes];[Personnes]Nom<"n")\xa0// Trouver toute personne entre A et M\n'})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-12",children:"Exemple 12"}),"\n",(0,l.jsx)(n.p,{children:"L'exemple suivant recherche les enregistrements des personnes habitant soit Paris soit Lyon :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personnes];[Personnes]CodePostal="75@";*)\xa0// Trouver ceux qui habitent Paris\u2026\n\xa0QUERY([Personnes];|;[Personnes]CodePostal="6900@")\xa0// ou Lyon\n'})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-13",children:"Exemple 13"}),"\n",(0,l.jsx)(n.p,{children:"Recherche par mot-cl\xe9 : l\u2019exemple suivant recherche dans toute la table [Produits] les enregistrements dont le champ Description contient le mot \u201Cfacile\u201D :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Produits];[Produits]Description%"facile")\n\xa0\xa0// Trouver les produits dont la description contient le mot-cl\xe9 facile\n'})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-14",children:"Exemple 14"}),"\n",(0,l.jsx)(n.p,{children:"Nous recherchons les enregistrements correspondant \xe0 la r\xe9ponse fournie dans une bo\xeete de dialogue :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0vTrouv\xe9:=Request(\"Saisissez un code de facture :\")\xa0//Demander un code de facture \xe0 l'utilisateur\n\xa0If(OK=1)\xa0// Si l'utilisateur clique sur OK\u2026\n\xa0\xa0\xa0\xa0QUERY([Factures];[Factures]Code =vTrouv\xe9)\xa0//Trouver le code qui correspond \xe0 vTrouv\xe9\n\xa0End if\n"})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-15",children:"Exemple 15"}),"\n",(0,l.jsx)(n.p,{children:"Cet exemple recherche tous les enregistrements des factures saisies en 1996. Nous recherchons les dates entre le 31/12/95 et le 1/1/97 :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Factures];[Factures]DateFacture >!31/12/95!;*)\xa0// Trouver des factures apr\xe8s le 31/12/95\u2026\n\xa0QUERY([Factures];&;[Factures]DateFacture \n"})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-16",children:"Exemple 16"}),"\n",(0,l.jsx)(n.p,{children:"L'exemple suivant trouve les employ\xe9s qui ont un salaire entre 20 000 et 40 000 Euros. La recherche inclut les employ\xe9s qui gagnent 20 000 Euros et exclut ceux qui gagnent 40 000 Euros :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Employ\xe9s];[Employ\xe9s]Salaire >=20000;*)\xa0// Trouver les employ\xe9s qui ont un salaire entre\u2026\n\xa0QUERY([Employ\xe9s];&;[Employ\xe9s]Salaire <40000)\xa0// 20 000 et 40 000 Euros\n"})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-17",children:"Exemple 17"}),"\n",(0,l.jsx)(n.p,{children:"L'exemple suivant cherche les employ\xe9s du service Marketing qui ont un salaire sup\xe9rieur \xe0 30 000 Euros. Le champ Salaire est utilis\xe9 dans un premier temps car il est index\xe9. Notez que la seconde recherche utilise un champ venant d'une autre table. Le champ [Service]Nom est li\xe9 \xe0 la table [Employ\xe9s] par un lien automatique de N vers 1."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Employ\xe9s];[Employ\xe9s]Salaire >30000;*)\n\xa0\xa0// Trouver les employ\xe9s qui ont un salaire sup\xe9rieur \xe0 30 000 Euros\n\xa0QUERY([Employ\xe9s];&;[Service]Nom="marketing")\xa0// et qui travaillent dans le service marketing\n'})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-18",children:"Exemple 18"}),"\n",(0,l.jsx)(n.p,{children:'Soient trois tables reli\xe9es par des liens de N vers 1 : [Ville] -> [D\xe9partement] -> [R\xe9gion] . La recherche suivante trouve toutes les r\xe9gions comportant des villes dont le nom d\xe9bute par "Saint" :'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([R\xe9gion];[Ville]Nom="Saint@")\xa0// Trouver toutes les r\xe9gions contenant des villes commen\xe7ant par Saint\n'})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-19",children:"Exemple 19"}),"\n",(0,l.jsxs)(n.p,{children:["La recherche suivante recherche les informations \xe9gales \xe0 la valeur de la variable ",(0,l.jsx)(n.em,{children:"mavar"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Lois];[Lois]Texte =mavar)\xa0// Trouver toutes les lois qui sont \xe9gales \xe0 la valeur de mavar\n"})}),"\n",(0,l.jsxs)(n.p,{children:["La recherche peut avoir des r\xe9sultats diff\xe9rents selon la valeur de ",(0,l.jsx)(n.em,{children:"mavar"}),". Elle sera \xe9galement ex\xe9cut\xe9e diff\xe9rement. Par exemple :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Si ",(0,l.jsx)(n.em,{children:"mavar"}),' est \xe9gale \xe0 "Copyright@", la s\xe9lection contient toutes les lois qui commencent par Copyright.']}),"\n",(0,l.jsxs)(n.li,{children:["Si ",(0,l.jsx)(n.em,{children:"mavar"}),' est \xe9gale \xe0 "@Copyright@", la s\xe9lection contient toutes les lois qui contiennent au moins une occurrence de Copyright.']}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"exemple-20",children:"Exemple 20"}),"\n",(0,l.jsx)(n.p,{children:"L'exemple suivant ajoute ou non les lignes d'une recherche complexe en fonction de la valeur de variables. Ainsi, seuls les crit\xe8res valides sont pris en compte pour la recherche :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Facture];[Facture]Payee=False;*)\n\xa0If($ville#"")\xa0// Si un nom de ville a \xe9t\xe9 sp\xe9cifi\xe9\n\xa0\xa0\xa0\xa0QUERY([Facture];[Facture]Ville_Livraison=$ville;*)\n\xa0End if\n\xa0If($code_postal#"")\xa0// Si un code postal a \xe9t\xe9 sp\xe9cifi\xe9\n\xa0\xa0\xa0\xa0QUERY([Facture];[Facture]Code_Postal=$code_postal;*)\n\xa0End if\n\xa0QUERY([Facture])\xa0// Ex\xe9cution de la recherche sur les crit\xe8res\n'})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-21",children:"Exemple 21"}),"\n",(0,l.jsx)(n.p,{children:"Cet exemple illustre l'utilisation d'un comparateur sous forme d'expression alphanum\xe9rique. La valeur du comparateur est d\xe9finie via un pop up menu plac\xe9 dans une bo\xeete dialogue de recherche personnalis\xe9e :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $ope : Text\n\xa0$ope:=_pup_operateur{_pup_operateur}\xa0//$ope vaut par exemple "#", ou "="\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Facture];[Facture]Montant;$ope;$montant)\n\xa0End if\n'})}),"\n",(0,l.jsx)(n.h2,{id:"exemple-22",children:"Exemple 22"}),"\n",(0,l.jsx)(n.p,{children:"L\u2019utilisation des index de mots-cl\xe9s d\u2019image peut acc\xe9l\xe9rer de fa\xe7on importante vos applications."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([IMAGES];[IMAGES]Photos %"cats")\xa0// cherche les photos contenant le mot-cl\xe9 cats\n'})}),"\n",(0,l.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,l.jsxs)(n.p,{children:["Si la recherche est correctement effectu\xe9e, la variable syst\xe8me OK prend la valeur 1.",(0,l.jsx)(n.br,{}),"\nLa variable OK prend la valeur 0 si :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["l'utilisateur clique sur le bouton ",(0,l.jsx)(n.strong,{children:"Annuler"})," / ",(0,l.jsx)(n.strong,{children:"Stop"}),","]}),"\n",(0,l.jsxs)(n.li,{children:["en mode 'recherche et verrouillage' (cf. commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/set-query-and-lock",children:"SET QUERY AND LOCK"}),"), la recherche a trouv\xe9 au moins un enregistrement verrouill\xe9. Dans ce cas \xe9galement, l'ensemble syst\xe8me LockedSet est mis \xe0 jour."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/fr/commands/query-selection",children:"QUERY SELECTION"})}),"\n",(0,l.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"277"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifie les variables"}),(0,l.jsx)(n.td,{children:"OK"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Change l'enregistrement courant"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,l.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},831481:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict1581957.fr-dbe7b091ca157ce1d8e67972c943ca53.png"},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return t}});var s=r(667294);let l={},i=s.createContext(l);function t(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);