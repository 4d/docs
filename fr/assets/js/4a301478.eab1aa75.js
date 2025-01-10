"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95973"],{800585:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/method-resolve-path","title":"METHOD RESOLVE PATH","description":"METHOD RESOLVE PATH ( chemin ; typeM\xe9thode ; ptrTable ; nomObjet ; nomObjetForm {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-resolve-path.md","sourceDirName":"commands-legacy","slug":"/commands/method-resolve-path","permalink":"/docs/fr/commands/method-resolve-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-resolve-path.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-resolve-path","title":"METHOD RESOLVE PATH","slug":"/commands/method-resolve-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD OPEN PATH","permalink":"/docs/fr/commands/method-open-path"},"next":{"title":"METHOD SET ACCESS MODE","permalink":"/docs/fr/commands/method-set-access-mode"}}'),s=t("785893"),d=t("250065");let o={id:"method-resolve-path",title:"METHOD RESOLVE PATH",slug:"/commands/method-resolve-path",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"METHOD RESOLVE PATH"})," ( ",(0,s.jsx)(n.em,{children:"chemin"})," ; ",(0,s.jsx)(n.em,{children:"typeM\xe9thode"})," ; ",(0,s.jsx)(n.em,{children:"ptrTable"})," ; ",(0,s.jsx)(n.em,{children:"nomObjet"})," ; ",(0,s.jsx)(n.em,{children:"nomObjetForm"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"chemin"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Chemin \xe0 r\xe9soudre"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"typeM\xe9thode"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"S\xe9lecteur de type d\u2019objet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ptrTable"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence de table"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomObjet"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nom de formulaire ou de m\xe9thode base"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomObjetForm"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nom d\u2019objet du formulaire"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si pass\xe9 = la commande s\u2019applique \xe0 la base h\xf4te lorsqu\u2019elle est ex\xe9cut\xe9e depuis un composant (param\xe8tre ignor\xe9 hors de ce contexte)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"METHOD RESOLVE PATH"})," analyse le chemin d\u2019acc\xe8s interne pass\xe9 dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"chemin"})," et retourne ses diff\xe9rentes composantes dans les param\xe8tres ",(0,s.jsx)(n.em,{children:"typeM\xe9thode"}),", ",(0,s.jsx)(n.em,{children:"ptrTable"}),", ",(0,s.jsx)(n.em,{children:"nomObjet"})," et ",(0,s.jsx)(n.em,{children:"nomObjetForm"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"typeM\xe9thode"})," retourne une valeur indiquant le type de la m\xe9thode. Vous pouvez comparer cette valeur aux constantes suivantes du th\xe8me ",(0,s.jsx)(n.em,{children:"Acc\xe8s objets d\xe9veloppement"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Path database method"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:["Chemin des m\xe9thodes base d\xe9finies (nom anglais). Liste de ces m\xe9thodes :",(0,s.jsx)(n.br,{}),(0,s.jsxs)(n.em,{children:["[databaseMethod]/onStartup",(0,s.jsx)(n.br,{}),"[databaseMethod]/onExit",(0,s.jsx)(n.br,{}),"[databaseMethod]/onDrop",(0,s.jsx)(n.br,{}),"[databaseMethod]/onBackupStartup",(0,s.jsx)(n.br,{}),"[databaseMethod]/onBackupShutdown",(0,s.jsx)(n.br,{}),"[databaseMethod]/onWebConnection",(0,s.jsx)(n.br,{}),"[databaseMethod]/onWebAuthentication",(0,s.jsx)(n.br,{}),"[databaseMethod]/onWebSessionSuspend",(0,s.jsx)(n.br,{}),"[databaseMethod]/onServerStartup",(0,s.jsx)(n.br,{}),"[databaseMethod]/onServerShutdown",(0,s.jsx)(n.br,{}),"[databaseMethod]/onServerOpenConnection",(0,s.jsx)(n.br,{}),"[databaseMethod]/onServerCloseConnection",(0,s.jsx)(n.br,{}),"[databaseMethod]/onSystemEvent",(0,s.jsx)(n.br,{}),"[databaseMethod]/onSqlAuthentication",(0,s.jsx)(n.br,{})]})," ",(0,s.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,s.jsxs)(n.em,{children:["onHostDatabaseEvent",(0,s.jsx)(n.br,{})]})," ",(0,s.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,s.jsxs)(n.em,{children:["onRESTAuthentication",(0,s.jsx)(n.br,{})]})," ",(0,s.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,s.jsxs)(n.em,{children:["onMobileAppAuthentication",(0,s.jsx)(n.br,{})]})," ",(0,s.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,s.jsx)(n.em,{children:"onMobileAppAction"})," ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.br,{})})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Path project form"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsxs)(n.td,{children:["Chemin des m\xe9thodes formulaire projet et de toutes leurs m\xe9thodes objet. Exemples :",(0,s.jsx)(n.br,{}),(0,s.jsxs)(n.em,{children:["[projectForm]/monForm/{formMethod}",(0,s.jsx)(n.br,{}),"[projectForm]/monForm/bouton1",(0,s.jsx)(n.br,{}),"[projectForm]/monForm/maliste",(0,s.jsx)(n.br,{}),"[projectForm]/monForm2/bouton1"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Path project method"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["Nom de la m\xe9thode. ",(0,s.jsx)(n.br,{}),"Exemple : ",(0,s.jsx)(n.em,{children:"MaMethodeProjet"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Path table form"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsxs)(n.td,{children:["Chemin des m\xe9thodes formulaire table et de toutes leurs m\xe9thodes objet. Exemples :",(0,s.jsx)(n.br,{}),(0,s.jsxs)(n.em,{children:["[tableForm]/table_1/Form1/{formMethod}",(0,s.jsx)(n.br,{}),"[tableForm]/table_1/Form1/bouton1",(0,s.jsx)(n.br,{}),"[tableForm]/table_1/Form1/maliste",(0,s.jsx)(n.br,{}),"[tableForm]/table_2/Form1/maliste"]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Path trigger"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsxs)(n.td,{children:["Chemin des triggers de la base. Exemples :",(0,s.jsx)(n.br,{}),(0,s.jsxs)(n.em,{children:["[trigger]/table_1",(0,s.jsx)(n.br,{}),"[trigger]/table_2"]})]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," La commande ne v\xe9rifie pas si la m\xe9thode existe vraiment dans la base de donn\xe9es/le projet. Une erreur n'est g\xe9n\xe9r\xe9e que si un nom de table non valide est pass\xe9."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"ptrTable"})," contient un pointeur sur une table de la base si le chemin r\xe9f\xe9rence une m\xe9thode formulaire table ou un trigger."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"nomObjet"})," contient soit :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"un nom de formulaire si le chemin r\xe9f\xe9rence un formulaire table ou projet"}),"\n",(0,s.jsx)(n.li,{children:"un nom de m\xe9thode base si le chemin r\xe9f\xe9rence une m\xe9thode base."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"nomObjetForm"})," contient un nom d\u2019objet de formulaire si le chemin r\xe9f\xe9rence une m\xe9thode objet."]}),"\n",(0,s.jsxs)(n.p,{children:["Si la commande est ex\xe9cut\xe9e depuis un composant, elle consid\xe8re par d\xe9faut que ",(0,s.jsx)(n.em,{children:"chemin"})," d\xe9signe une m\xe9thode du composant. Si vous passez le param\xe8tre ",(0,s.jsx)(n.em,{children:"*"}),", elle consid\xe8re que ",(0,s.jsx)(n.em,{children:"chemin"})," d\xe9signe une m\xe9thode de la base h\xf4te."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"R\xe9solution d\u2019un chemin de m\xe9thode base :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $methodType : Integer\n\xa0var $tablePtr : Pointer\n\xa0var $objectName : Text\n\xa0var $objectFormName : Text\n\xa0\n\xa0METHOD RESOLVE PATH("[databaseMethod]/onStartup";$methodType;$tablePtr;$objectName;$objectFormName)\n\xa0\xa0// $methodType: 2\n\xa0\xa0// $tablePtr: pointeur Nil\n\xa0\xa0// $objectName: "onStartup"\n\xa0\xa0// $objectFormName: ""\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"R\xe9solution d\u2019un chemin d\u2019objet de m\xe9thode formulaire table :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $methodType : Integer\n\xa0var $tablePtr : Pointer\n\xa0var $objectName : Text\n\xa0var $objectFormName : Text\n\xa0\n\xa0METHOD RESOLVE PATH("[tableForm]/Table1/output1/myVar1";$methodType;$tablePtr;$objectName;$objectFormName)\n\xa0\xa0// $methodType: 16\n\xa0\xa0// $tablePtr: -> [Table1]\n\xa0\xa0// $objectName: "output1"\n\xa0\xa0// $objectFormName: "Btn1"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/method-get-path",children:"METHOD Get path"})}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1165"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(667294);let s={},d=r.createContext(s);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);