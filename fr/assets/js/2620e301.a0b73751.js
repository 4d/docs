"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51639"],{498773:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>h,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/method-get-path","title":"METHOD Get path","description":"METHOD Get path ( typeM\xe9thode {; laTable}{; nomObjet{; nomObjetForm}}{; *} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-get-path.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-path","permalink":"/docs/fr/commands/method-get-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-path","title":"METHOD Get path","slug":"/commands/method-get-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET NAMES","permalink":"/docs/fr/commands/method-get-names"},"next":{"title":"METHOD GET PATHS","permalink":"/docs/fr/commands/method-get-paths"}}'),d=t("785893"),r=t("250065");let o={id:"method-get-path",title:"METHOD Get path",slug:"/commands/method-get-path",displayed_sidebar:"docs"},l=void 0,i={},h=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD Get path"})," ( ",(0,d.jsx)(n.em,{children:"typeM\xe9thode"})," {; ",(0,d.jsx)(n.em,{children:"laTable"}),"}{; ",(0,d.jsx)(n.em,{children:"nomObjet"}),"{; ",(0,d.jsx)(n.em,{children:"nomObjetForm"}),"}}{; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"typeM\xe9thode"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"S\xe9lecteur de type d\u2019objet du d\xe9veloppement"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"laTable"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"R\xe9f\xe9rence de table"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nomObjet"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nom de formulaire ou de m\xe9thode"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nomObjetForm"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Nom d\u2019objet du formulaire"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Op\xe9rateur"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si pass\xe9 = la commande s\u2019applique \xe0 la base h\xf4te lorsqu\u2019elle est ex\xe9cut\xe9e depuis un composant (param\xe8tre ignor\xe9 hors de ce contexte)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"R\xe9sultat"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Chemin complet de l\u2019objet"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"METHOD Get path"})," retourne le chemin d\u2019acc\xe8s interne complet d\u2019une m\xe9thode."]}),"\n",(0,d.jsxs)(n.p,{children:["Passez dans ",(0,d.jsx)(n.em,{children:"typeM\xe9thode"})," le type de m\xe9thode dont vous souhaitez obtenir le chemin. Vous pouvez utiliser les constantes suivantes, plac\xe9es dans le th\xe8me ",(0,d.jsx)(n.em,{children:"Acc\xe8s objets d\xe9veloppement"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Path database method"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsxs)(n.td,{children:["Chemin des m\xe9thodes base d\xe9finies (nom anglais). Liste de ces m\xe9thodes :",(0,d.jsx)(n.br,{}),(0,d.jsxs)(n.em,{children:["[databaseMethod]/onStartup",(0,d.jsx)(n.br,{}),"[databaseMethod]/onExit",(0,d.jsx)(n.br,{}),"[databaseMethod]/onDrop",(0,d.jsx)(n.br,{}),"[databaseMethod]/onBackupStartup",(0,d.jsx)(n.br,{}),"[databaseMethod]/onBackupShutdown",(0,d.jsx)(n.br,{}),"[databaseMethod]/onWebConnection",(0,d.jsx)(n.br,{}),"[databaseMethod]/onWebAuthentication",(0,d.jsx)(n.br,{}),"[databaseMethod]/onWebSessionSuspend",(0,d.jsx)(n.br,{}),"[databaseMethod]/onServerStartup",(0,d.jsx)(n.br,{}),"[databaseMethod]/onServerShutdown",(0,d.jsx)(n.br,{}),"[databaseMethod]/onServerOpenConnection",(0,d.jsx)(n.br,{}),"[databaseMethod]/onServerCloseConnection",(0,d.jsx)(n.br,{}),"[databaseMethod]/onSystemEvent",(0,d.jsx)(n.br,{}),"[databaseMethod]/onSqlAuthentication",(0,d.jsx)(n.br,{})]})," ",(0,d.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,d.jsxs)(n.em,{children:["onHostDatabaseEvent",(0,d.jsx)(n.br,{})]})," ",(0,d.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,d.jsxs)(n.em,{children:["onRESTAuthentication",(0,d.jsx)(n.br,{})]})," ",(0,d.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,d.jsxs)(n.em,{children:["onMobileAppAuthentication",(0,d.jsx)(n.br,{})]})," ",(0,d.jsx)(n.em,{children:"[databaseMethod]/"})," ",(0,d.jsx)(n.em,{children:"onMobileAppAction"})," ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.br,{})})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Path project form"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsxs)(n.td,{children:["Chemin des m\xe9thodes formulaire projet et de toutes leurs m\xe9thodes objet. Exemples :",(0,d.jsx)(n.br,{}),(0,d.jsxs)(n.em,{children:["[projectForm]/monForm/{formMethod}",(0,d.jsx)(n.br,{}),"[projectForm]/monForm/bouton1",(0,d.jsx)(n.br,{}),"[projectForm]/monForm/maliste",(0,d.jsx)(n.br,{}),"[projectForm]/monForm2/bouton1"]})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Path project method"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsxs)(n.td,{children:["Nom de la m\xe9thode. ",(0,d.jsx)(n.br,{}),"Exemple : ",(0,d.jsx)(n.em,{children:"MaMethodeProjet"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Path table form"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"16"}),(0,d.jsxs)(n.td,{children:["Chemin des m\xe9thodes formulaire table et de toutes leurs m\xe9thodes objet. Exemples :",(0,d.jsx)(n.br,{}),(0,d.jsxs)(n.em,{children:["[tableForm]/table_1/Form1/{formMethod}",(0,d.jsx)(n.br,{}),"[tableForm]/table_1/Form1/bouton1",(0,d.jsx)(n.br,{}),"[tableForm]/table_1/Form1/maliste",(0,d.jsx)(n.br,{}),"[tableForm]/table_2/Form1/maliste"]})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Path trigger"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsxs)(n.td,{children:["Chemin des triggers de la base. Exemples :",(0,d.jsx)(n.br,{}),(0,d.jsxs)(n.em,{children:["[trigger]/table_1",(0,d.jsx)(n.br,{}),"[trigger]/table_2"]})]})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Passez des valeurs dans les param\xe8tres ",(0,d.jsx)(n.em,{children:"laTable"}),", ",(0,d.jsx)(n.em,{children:"nomObjet"})," et ",(0,d.jsx)(n.em,{children:"nomObjetForm"})," en fonction du type d\u2019objet dont vous souhaitez r\xe9cup\xe9rer le chemin d\u2019acc\xe8s de la m\xe9thode :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Type d\u2019objet"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.em,{children:"table"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.em,{children:"nomObjet"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.em,{children:"nomObjetForm"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Chemin Formulaire projet"}),(0,d.jsx)(n.td,{children:"X"}),(0,d.jsx)(n.td,{children:"X (optionnel)"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Chemin Formulaire table"}),(0,d.jsx)(n.td,{children:"X"}),(0,d.jsx)(n.td,{children:"X"}),(0,d.jsx)(n.td,{children:"X (optionnel)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Chemin M\xe9thode base"}),(0,d.jsx)(n.td,{children:"X"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Chemin M\xe9thode projet"}),(0,d.jsx)(n.td,{children:"X"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Chemin Trigger"}),(0,d.jsx)(n.td,{children:"X"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note :"})," La commande ne v\xe9rifie pas l'existence r\xe9elle de la m\xe9thode dans la base. Une erreur est g\xe9n\xe9r\xe9e uniquement si un nom de m\xe9thode base invalide est pass\xe9 avec le s\xe9lecteur Path database method."]}),"\n",(0,d.jsxs)(n.p,{children:["Si la commande est ex\xe9cut\xe9e depuis un composant, elle retourne par d\xe9faut les chemins des m\xe9thodes du composant. Si vous passez le param\xe8tre ",(0,d.jsx)(n.em,{children:"*"}),", le tableau contiendra les chemins des m\xe9thodes de la base h\xf4te."]}),"\n",(0,d.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//R\xe9cup\xe9rer le chemin d\u2019acc\xe8s de la m\xe9thode base "Sur ouverture"\n\xa0$chemin:=METHOD Get path(Path database method;"onStartup")\n\xa0\n\xa0\xa0//R\xe9cup\xe9rer le chemin d\u2019acc\xe8s du trigger de la table [Emp] :\n\xa0$chemin:=METHOD Get path(Path trigger;[Emp])\n\xa0\n\xa0\xa0//R\xe9cup\xe9rer le chemin d\u2019acc\xe8s de la m\xe9thode de l\u2019objet "OK" du formulaire "input" de la table [Emp] :\n\xa0$chemin:=METHOD Get path(Path table form;[Emp];"input";"OK")\n'})}),"\n",(0,d.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/commands/current-method-path",children:"Current method path"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/method-open-path",children:"METHOD OPEN PATH"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/method-resolve-path",children:"METHOD RESOLVE PATH"})]}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"1164"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var s=t(667294);let d={},r=s.createContext(d);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);