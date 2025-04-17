"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40848"],{965174:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/open-data-file","title":"OPEN DATA FILE","description":"OPEN DATA FILE ( cheminAcc\xe8s )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/open-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/open-data-file","permalink":"/docs/fr/commands/open-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-data-file.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"open-data-file","title":"OPEN DATA FILE","slug":"/commands/open-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN ADMINISTRATION WINDOW","permalink":"/docs/fr/commands/open-administration-window"},"next":{"title":"OPEN DATABASE","permalink":"/docs/fr/commands/open-database"}}'),i=t("785893"),d=t("250065");let a={id:"open-data-file",title:"OPEN DATA FILE",slug:"/commands/open-data-file",displayed_sidebar:"docs"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OPEN DATA FILE"})," ( ",(0,i.jsx)(n.em,{children:"cheminAcc\xe8s"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cheminAcc\xe8s"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom ou chemin d\u2019acc\xe8s complet du fichier de donn\xe9es \xe0 ouvrir"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"OPEN DATA FILE"})," permet de changer \xe0 la vol\xe9e le fichier de donn\xe9es ouvert par l\u2019application 4D."]}),"\n",(0,i.jsxs)(n.p,{children:["Vous passez dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"cheminAcc\xe8s"}),' le nom ou le chemin d\u2019acc\xe8s complet du fichier de donn\xe9es \xe0 ouvrir (fichier suffix\xe9 ".4DD"). Si vous passez uniquement un nom de fichier, il doit \xeatre plac\xe9 \xe0 c\xf4t\xe9 du fichier de structure de la base.']}),"\n",(0,i.jsxs)(n.p,{children:["Si ce chemin d\u2019acc\xe8s d\xe9signe un fichier de donn\xe9es valide, 4D quitte la base en cours et la rouvre avec le fichier de donn\xe9es sp\xe9cifi\xe9. En mode monoposte, la ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/on-exit-database-method",children:"On Exit database method"})," et la ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/on-startup-database-method",children:"On Startup database method"})," sont successivement appel\xe9es."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Attention :"})," Comme cette commande provoque la fermeture pr\xe9alable de l'application, elle doit \xeatre utilis\xe9e avec pr\xe9caution dans la ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/on-exit-database-method",children:"On Exit database method"})," ou une m\xe9thode appel\xe9e par cette m\xe9thode base afin de ne pas g\xe9n\xe9rer de boucle sans fin."]}),"\n",(0,i.jsxs)(n.p,{children:["La commande est ex\xe9cut\xe9e de mani\xe8re asynchrone : apr\xe8s son appel, 4D continue d\u2019ex\xe9cuter le reste de la m\xe9thode. Ensuite, l\u2019application se comporte comme si la commande ",(0,i.jsx)(n.strong,{children:"Quitter"})," avait \xe9t\xe9 s\xe9lectionn\xe9e dans le menu ",(0,i.jsx)(n.strong,{children:"Fichier"})," : les bo\xeetes de dialogue ouvertes sont annul\xe9es, les process ouverts ont 10 secondes pour se terminer avant d\u2019\xeatre tu\xe9s, etc."]}),"\n",(0,i.jsx)(n.p,{children:"Avant de lancer l\u2019op\xe9ration, la commande teste la validit\xe9 du fichier de donn\xe9es sp\xe9cifi\xe9. En outre, si le fichier a d\xe9j\xe0 \xe9t\xe9 ouvert, la commande v\xe9rifie qu\u2019il correspond bien \xe0 la structure courante."}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez une cha\xeene vide dans ",(0,i.jsx)(n.em,{children:"cheminAcc\xe8s"}),", la commande rouvre la base sans changer de fichier de donn\xe9es."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D Server :"})," A compter de 4D v13, cette commande peut \xeatre ex\xe9cut\xe9e avec 4D Server. Dans ce contexte, elle effectue en interne un appel \xe0 ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/quit-4d",children:"QUIT 4D"})," sur le serveur (entra\xeenant l\u2019apparition, sur chaque poste distant, d\u2019une bo\xeete de dialogue signalant que le serveur est en train de quitter) avant d'ouvrir le fichier d\xe9sign\xe9."]}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(n.p,{children:["Dans le contexte du d\xe9ploiement d'une application fusionn\xe9e, vous souhaitez ouvrir ou cr\xe9er le fichier de donn\xe9es utilisateur dans la m\xe9thode base Sur ouverture. Cet exemple utilise le fichier de donn\xe9es par d\xe9faut (cf. ",(0,i.jsx)(n.em,{children:"Gestion du fichier de donn\xe9es dans les applications finales"}),") :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0If(Data file="@default.4dd")\n\xa0\xa0\xa0\xa0If(Version type?? Application fusionn\xe9e)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is data file locked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$dataPath:=Get 4D folder(Active 4D Folder)+"data.4dd"\n\xa0\xa0//Si un fichier de donn\xe9es local existe d\xe9j\xe0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Test path name($dataPath)=Is a document)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OPEN DATA FILE($dataPath)\xa0// on l\'ouvre\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE DATA FILE($dataPath)\xa0//on le cr\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/create-data-file",children:"CREATE DATA FILE"})}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"312"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let i={},d=s.createContext(i);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);