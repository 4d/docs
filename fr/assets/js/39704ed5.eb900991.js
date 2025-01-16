"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23949"],{675532:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/array-to-selection","title":"ARRAY TO SELECTION","description":"ARRAY TO SELECTION {( tableau ; leChamp {; tableau2 ; leChamp2 ; ... ; tableauN ; leChampN}{; *} )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/array-to-selection.md","sourceDirName":"commands-legacy","slug":"/commands/array-to-selection","permalink":"/docs/fr/commands/array-to-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-to-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"array-to-selection","title":"ARRAY TO SELECTION","slug":"/commands/array-to-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TO LIST","permalink":"/docs/fr/commands/array-to-list"},"next":{"title":"BOOLEAN ARRAY FROM SET","permalink":"/docs/fr/commands/boolean-array-from-set"}}'),r=s("785893"),i=s("250065");let l={id:"array-to-selection",title:"ARRAY TO SELECTION",slug:"/commands/array-to-selection",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ARRAY TO SELECTION"})," {( ",(0,r.jsx)(n.em,{children:"tableau"})," ; ",(0,r.jsx)(n.em,{children:"leChamp"})," {; ",(0,r.jsx)(n.em,{children:"tableau2"})," ; ",(0,r.jsx)(n.em,{children:"leChamp2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"tableauN"})," ; ",(0,r.jsx)(n.em,{children:"leChampN"}),"}{; *} )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableau"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tableau \xe0 copier dans la s\xe9lection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"leField"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Champ recevant les valeurs du tableau"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Attente d\u2019ex\xe9cution"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"ARRAY TO SELECTION"})," copie un ou plusieurs tableau(x) vers une s\xe9lection d'enregistrements. Tous les champs list\xe9s doivent appartenir \xe0 la m\xeame table."]}),"\n",(0,r.jsx)(n.p,{children:"Si une s\xe9lection existe au moment de l'appel, les \xe9l\xe9ments du tableau sont copi\xe9s dans les enregistrements en fonction de l'ordre du tableau et de l'ordre des enregistrements. Si le nombre d'\xe9l\xe9ments du tableau est sup\xe9rieur au nombre d'enregistrements de la s\xe9lection courante, de nouveaux enregistrements sont cr\xe9\xe9s. Les enregistrements, qu'ils soient nouveaux ou existants, sont automatiquement sauvegard\xe9s."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Comme elle permet de cr\xe9er de nouveaux enregistrements, cette commande ne tient pas compte de l'\xe9tat lecture seulement \xe9ventuel de la table (cf. ",(0,r.jsx)(n.em,{children:"Verrouillage d'enregistrements"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"Tous les tableaux doivent avoir le m\xeame nombre d'\xe9l\xe9ments. Si des tableaux ont des tailles diff\xe9rentes, une erreur de syntaxe est g\xe9n\xe9r\xe9e."}),"\n",(0,r.jsxs)(n.p,{children:["Cette commande effectue l'op\xe9ration inverse de ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/selection-to-array",children:"SELECTION TO ARRAY"}),". Cependant, ",(0,r.jsx)(n.strong,{children:"ARRAY TO SELECTION"})," ne permet pas d'utiliser de champs en provenance de tables diff\xe9rentes ni de tables li\xe9es, m\xeame si un lien automatique existe."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez un ",(0,r.jsx)(n.em,{children:"*"})," en dernier param\xe8tre, 4D n\u2019ex\xe9cute pas imm\xe9diatement la ligne d\u2019instruction correspondante mais la stocke en m\xe9moire ; vous pouvez ainsi empiler plusieurs lignes se terminant par un ",(0,r.jsx)(n.em,{children:"*"}),". L\u2019ensemble des lignes en attente sera ex\xe9cut\xe9 par une instruction ",(0,r.jsx)(n.strong,{children:"ARRAY TO SELECTION"})," finale sans param\xe8tre ",(0,r.jsx)(n.em,{children:"*"}),". A cette fin, la commande peut \xeatre appel\xe9e sans aucun param\xe8tre.",(0,r.jsx)(n.br,{}),"\nA l\u2019image de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/query",children:"QUERY"}),", ce principe vous permet de scinder une instruction complexe en un ensemble de lignes, plus lisibles et plus faciles \xe0 maintenir. Il est \xe9galement possible d\u2019ins\xe9rer des instructions interm\xe9diaires."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ATTENTION :"})," Comme ",(0,r.jsx)(n.strong,{children:"ARRAY TO SELECTION"})," remplace les informations \xe9ventuellement pr\xe9sentes dans les enregistrements existants, cette commande doit \xeatre utilis\xe9e avec prudence. Si un enregistrement est verrouill\xe9 par un autre process pendant l'ex\xe9cution de la commande ",(0,r.jsx)(n.strong,{children:"ARRAY TO SELECTION"}),", il n'est pas modifi\xe9. Tous les enregistrements verrouill\xe9s sont plac\xe9s dans l'ensemble LockedSet. Apr\xe8s l'ex\xe9cution de ",(0,r.jsx)(n.strong,{children:"ARRAY TO SELECTION"}),", vous pouvez tester si l'ensemble LockedSet contient des enregistrements qui \xe9taient verrouill\xe9s."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D Server :"})," Cette commande est optimis\xe9e pour 4D Server. Le tableau est envoy\xe9 au serveur depuis le poste client. Les enregistrements sont modifi\xe9s ou cr\xe9\xe9s sur le serveur. Comme une telle requ\xeate est g\xe9r\xe9e de fa\xe7on synchrone, le poste client doit attendre que l'op\xe9ration se soit correctement d\xe9roul\xe9e. Dans les environnements multi-utilisateurs et multi-process, aucun enregistrement verrouill\xe9 ne sera r\xe9\xe9crit."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(n.p,{children:["Dans l'exemple suivant, les deux tableaux ",(0,r.jsx)(n.em,{children:"tabNoms"})," et ",(0,r.jsx)(n.em,{children:"tabSoci\xe9t\xe9s"})," \xe9crivent des donn\xe9es dans la table ",(0,r.jsx)(n.em,{children:"[Personnes]"}),". Les valeurs du tableau ",(0,r.jsx)(n.em,{children:"tabNoms"})," sont plac\xe9es dans le champ ",(0,r.jsx)(n.em,{children:"[Personnes]Nom"})," et les valeurs du tableau ",(0,r.jsx)(n.em,{children:"tabSoci\xe9t\xe9s"})," sont plac\xe9es dans le champ ",(0,r.jsx)(n.em,{children:"[Personnes]Soci\xe9t\xe9"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TO SELECTION(tabNoms;[Personnes]Nom;tabSoci\xe9t\xe9s;[Personnes]Soci\xe9t\xe9)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez recopier la s\xe9lection d'enregistrements vers une table d'archive en s\xe9lectionnant les champs en fonction de la valeur d'options :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($_nom;0)\n\xa0ARRAY TEXT($_prenom;0)\n\xa0ARRAY TEXT($_cv;0)\n\xa0ARRAY PICTURE($_photo;0)\n\xa0\n\xa0SELECTION TO ARRAY([Candidat]Nom;$_nom;*)\n\xa0SELECTION TO ARRAY([Candidat]Prenom;$_prenom;*)\n\xa0If(avecCV)\xa0//on embarque le champ cv\n\xa0\xa0\xa0\xa0SELECTION TO ARRAY([Candidat]cv;$_cv;*)\n\xa0End if\n\xa0If(avecPhoto)\xa0//on embarque le champ photo\n\xa0\xa0\xa0\xa0SELECTION TO ARRAY([Candidat]photo;$_photo;*)\n\xa0End if\n\xa0SELECTION TO ARRAY\xa0//ex\xe9cution de la copie\n\xa0\n\xa0REDUCE SELECTION([Candidat_Archive];0)\n\xa0ARRAY TO SELECTION($_nom;[Candidat_Archive]Nom;*)\n\xa0ARRAY TO SELECTION($_prenom;[Candidat_Archive]Prenom;*)\n\xa0If(avecCV)\n\xa0\xa0\xa0\xa0ARRAY TO SELECTION($_cv;[Candidat_Archive]cv;*)\n\xa0End if\n\xa0If(avecPhoto)\n\xa0\xa0\xa0\xa0ARRAY TO SELECTION($_photo;[Candidat_Archive]photo;*)\n\xa0End if\n\xa0ARRAY TO SELECTION\n"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Variables syst\xe8me"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"261"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Change la s\xe9lection courante"}),(0,r.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);