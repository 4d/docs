"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72971"],{618532:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/dom-find-xml-element","title":"DOM Find XML element","description":"DOM Find XML element ( refEl\xe9ment ; xPath {; tabRefEl\xe9ments} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-find-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-find-xml-element","permalink":"/docs/fr/commands/dom-find-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-find-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-find-xml-element","title":"DOM Find XML element","slug":"/commands/dom-find-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM EXPORT TO VAR","permalink":"/docs/fr/commands/dom-export-to-var"},"next":{"title":"DOM Find XML element by ID","permalink":"/docs/fr/commands/dom-find-xml-element-by-id"}}'),r=t("785893"),l=t("250065");let d={id:"dom-find-xml-element",title:"DOM Find XML element",slug:"/commands/dom-find-xml-element",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM Find XML element"})," ( ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"})," ; ",(0,r.jsx)(n.em,{children:"xPath"})," {; ",(0,r.jsx)(n.em,{children:"tabRefEl\xe9ments"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refEl\xe9ment"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"xPath"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Chemin XPath de l\u2019\xe9l\xe9ment \xe0 chercher"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabRefEl\xe9ments"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Liste des r\xe9f\xe9rences d\u2019\xe9l\xe9ments trouv\xe9s (le cas \xe9ch\xe9ant)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de l\u2019\xe9l\xe9ment trouv\xe9 (le cas \xe9ch\xe9ant)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"DOM Find XML element"})," vous permet de rechercher des \xe9l\xe9ments XML sp\xe9cifiques dans une structure XML. La recherche d\xe9bute \xe0 l\u2019\xe9l\xe9ment d\xe9sign\xe9 par le param\xe8tre ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Le noeud XML \xe0 chercher est d\xe9fini et exprim\xe9 en notation XPath \xe0 l'aide du param\xe8tre ",(0,r.jsx)(n.em,{children:"xPath"})," (pour plus d'informations, reportez-vous \xe0 la section ",(0,r.jsx)(n.em,{children:"Utilisation de la notation XPath"})," section). Les expressions de chemin suivantes sont prises en charge :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Expression"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Action"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"nodename"})}),(0,r.jsxs)(n.td,{children:['S\xe9lectionne tous les noeuds enfants du noeud contextuel avec le nom "',(0,r.jsx)(n.em,{children:"nodename"}),'"']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/"}),(0,r.jsx)(n.td,{children:"S\xe9lectionne des noeuds \xe0 partir du noeud racine (chemin absolu)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"//"}),(0,r.jsx)(n.td,{children:"S\xe9lectionne les noeuds du document \xe0 partir du noeud courant qui correspond \xe0 la s\xe9lection, quelle que soit leur emplacement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"@"}),(0,r.jsx)(n.td,{children:"S\xe9lectionne les attributs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"."}),(0,r.jsx)(n.td,{children:"S\xe9lectionne le noeud courant"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:".."}),(0,r.jsx)(n.td,{children:"S\xe9lectionne le parent du noeud courant"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"S\xe9lectionne tous les \xe9l\xe9ments enfants du noeud contextuel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"@*"}),(0,r.jsx)(n.td,{children:"S\xe9lectionne tous les attributs du noeud contextuel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"text()"}),(0,r.jsx)(n.td,{children:"S\xe9lectionne tous les enfants du noeud de type texte du noeud contextuel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"node()"}),(0,r.jsx)(n.td,{children:"S\xe9lectionne tous les enfants de l'\xe9l\xe9ment du noeud contextuel, quel que soit le type de noeud"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"local-name()"}),(0,r.jsx)(n.td,{children:"Retourne une cha\xeene repr\xe9sentant le nom local du premier noeud d'un ensemble de noeuds"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"para[1]"}),(0,r.jsx)(n.td,{children:"S\xe9lectionne le premier para enfant du noeud contextuel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"para[last()]"}),(0,r.jsx)(n.td,{children:"S\xe9lectionne le dernier para enfant du noeud contextuel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'chapitre[titre="Introduction"]'}),(0,r.jsx)(n.td,{children:"S\xe9lectionne les chapitre enfants du noeud contextuel ayant un ou plusieurs titre enfant(s) avec la cha\xeene-valeur \xe9quivalente \xe0 Introduction"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"chapitre[titre]"}),(0,r.jsx)(n.td,{children:"S\xe9lectionne les chapitre enfants du noeud contextuel ayant un ou plusieurs titre enfant(s)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'para[@type="attention"]'}),(0,r.jsx)(n.td,{children:'S\xe9lectionne tous les para enfants du noeud contextuel dont l\'attribut est "type" et la valeur est "warning"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'para[@type="warning"][5]'}),(0,r.jsx)(n.td,{children:'S\xe9lectionne le cinqui\xe8me para enfant du noeud contextuel dont l\'attribut est "type" et la valeur est "warning"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'para[5][@type="warning"]'}),(0,r.jsx)(n.td,{children:'S\xe9lectionne le cinqui\xe8me para enfant du noeud contextuel si cet enfant a un attribut "type" et une valeur \xe9gale \xe0 "warning"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"para[contains(@type,'bg')]"}),(0,r.jsx)(n.td,{children:'S\xe9lectionne tous les para enfants du noeud contextuel ayant un attribut "type"contenant la cha\xeene "bg"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"//titre | //prix"}),(0,r.jsx)(n.td,{children:"S\xe9lectionne tous les \xe9l\xe9ments titre et prix du document"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note de compatibilit\xe9 :"})," ",(0,r.jsxs)(n.em,{children:["A compter de v18 R3, le niveau de conformit\xe9 de l'impl\xe9mentation de XPath dans 4D est nettement plus \xe9lev\xe9 et permet la prise en charge des expressions ci-dessus. Pour des raisons de compatibilit\xe9, l'impl\xe9mentation ant\xe9rieure non standard est maintenue par d\xe9faut dans les bases converties. Si vous souhaitez obtenir les fonctionnalit\xe9s avanc\xe9es dans vos bases converties, vous devez cocher l'option de compatibilit\xe9 ",(0,r.jsx)(n.em,{children:"Utiliser XPath standard"})," de la"]})," *",(0,r.jsx)(n.em,{children:"Page Compatibilit\xe9."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Les requ\xeates sont sensibles \xe0 la casse."]}),"\n",(0,r.jsxs)(n.p,{children:["La commande retourne la r\xe9f\xe9rence XML de(s) \xe9l\xe9ment(s) trouv\xe9(s). Lorsque le tableau cha\xeene ",(0,r.jsx)(n.em,{children:"tabRefEl\xe9ments"})," est pass\xe9, la commande le remplit avec la liste des r\xe9f\xe9rences XML trouv\xe9es. Dans ce cas, la commande retourne en r\xe9sultat le premier \xe9l\xe9ment du tableau ",(0,r.jsx)(n.em,{children:"tabRefEl\xe9ments"}),". Ce param\xe8tre est utile lorsque plusieurs \xe9l\xe9ments de m\xeame nom existent \xe0 l\u2019emplacement d\xe9sign\xe9 par le param\xe8tre ",(0,r.jsx)(n.em,{children:"xPath"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Soit la structure XML suivante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-RAW",children:"\xa0 Harry Potter\xa0 29.99\xa0 Apprendre le XML\xa0 39.95\n"})}),"\n",(0,r.jsx)(n.p,{children:"Cet exemple permet de rechercher rapidement un \xe9l\xe9ment XML et d\u2019afficher sa valeur :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vRefElem:=DOM Parse XML source("books.xml")\n\xa0vTrouv\xe9:=DOM Find XML element(vRefElem;"book[2]/title")\xa0// chemin relatif du noeud courant\n\xa0DOM GET XML ELEMENT VALUE(vTrouv\xe9;valeur)\n\xa0ALERT("La valeur de l\u2019\xe9l\xe9ment est : \\""+valeur+"\\"")\xa0// Apprendre le XML\n'})}),"\n",(0,r.jsx)(n.p,{children:"La m\xeame recherche peut \xe9galement \xeatre effectu\xe9e ainsi :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vRefElem:=DOM Parse XML source("books.xml")\n\xa0vTrouv\xe9:=DOM Find XML element(vRefElem;"book[2]/title")\xa0// chemin relatif du noeud courant\n\xa0DOM GET XML ELEMENT VALUE(vTrouv\xe9;valeur)\n\xa0ALERT("La valeur de l\u2019\xe9l\xe9ment est : \\""+valeur+"\\"")\xa0// Apprendre le XML\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Soit la structure XML suivante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-RAW",children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0aaa\xa0\xa0\xa0\xa0\xa0\xa0bbb\xa0\xa0\xa0\xa0\xa0\xa0ccc\xa0\xa0\xa0\n"})}),"\n",(0,r.jsx)(n.p,{children:"Le code suivant permet de r\xe9cup\xe9rer la r\xe9f\xe9rence de chaque \xe9l\xe9ment Elem2 dans le tableau tAtrouv\xe9s :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vRefElem:=DOM Parse XML source("exemple.xml")\n\xa0ARRAY TEXT(tAtrouves;0)\n\xa0vTrouv\xe9:=DOM Find XML element(vRefElem;"/Racine/Elem1/Elem2";tAtrouv\xe9s)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsx)(n.p,{children:'Vous souhaitez s\xe9lectionner tous les \xe9l\xe9ments "rect" avec des attributs "class" contenant la cha\xeene "bgcontainer" :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$node:=DOM Find XML element($root;\"\xa0//rect[contains(@class,'bgcontainer')\")\n"})}),"\n",(0,r.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,r.jsx)(n.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,r.jsx)(n.p,{children:"Une erreur est g\xe9n\xe9r\xe9e lorsque :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"la r\xe9f\xe9rence de l\u2019\xe9l\xe9ment n\u2019est pas valide"}),"\n",(0,r.jsx)(n.li,{children:"le chemin xPath pass\xe9 n\u2019est pas valide."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/dom-count-xml-elements",children:"DOM Count XML elements"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/dom-create-xml-element",children:"DOM Create XML element"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"864"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let r={},l=s.createContext(r);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);