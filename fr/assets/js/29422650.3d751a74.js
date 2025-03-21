"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94293"],{565513:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/set-external-data-path","title":"SET EXTERNAL DATA PATH","description":"SET EXTERNAL DATA PATH ( leChamp ; chemin )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-external-data-path.md","sourceDirName":"commands-legacy","slug":"/commands/set-external-data-path","permalink":"/docs/fr/commands/set-external-data-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-external-data-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-external-data-path","title":"SET EXTERNAL DATA PATH","slug":"/commands/set-external-data-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME INDEXES","permalink":"/docs/fr/commands/resume-indexes"},"next":{"title":"SET INDEX","permalink":"/docs/fr/commands/set-index"}}'),r=s("785893"),i=s("250065");let d={id:"set-external-data-path",title:"SET EXTERNAL DATA PATH",slug:"/commands/set-external-data-path",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET EXTERNAL DATA PATH"})," ( ",(0,r.jsx)(n.em,{children:"leChamp"})," ; ",(0,r.jsx)(n.em,{children:"chemin"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"leChamp"}),(0,r.jsx)(n.td,{children:"Text, Blob, Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Champ pour lequel d\xe9finir le lieu de stockage"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"chemin"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Chemin d\u2019acc\xe8s et nom du fichier de stockage externe ou",(0,r.jsx)(n.br,{}),"0 = utiliser la d\xe9finition en structure",(0,r.jsx)(n.br,{}),"1 = utiliser le dossier par d\xe9faut"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SET EXTERNAL DATA PATH"})," permet de d\xe9finir ou de modifier, pour l\u2019enregistrement courant, l\u2019emplacement de stockage externe du champ ",(0,r.jsx)(n.em,{children:"leChamp"})," pass\xe9 en param\xe8tre."]}),"\n",(0,r.jsxs)(n.p,{children:["4D autorise le stockage des donn\xe9es des champs de type Texte, Blob et Image ",(0,r.jsx)(n.em,{children:"\xe0 l'ext\xe9rieur"})," du fichier de donn\xe9es. Pour une description compl\xe8te de cette fonctionnalit\xe9, reportez-vous au manuel ",(0,r.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Le param\xe9trage d\xe9fini par cette commande sera appliqu\xe9 uniquement lors du stockage sur disque de l\u2019enregistrement courant. Si l\u2019enregistrement courant est annul\xe9, la commande ne fait rien. Les param\xe8tres de stockage d\xe9finis dans la structure de l\u2019application ne sont pas modifi\xe9s."}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,r.jsx)(n.em,{children:"chemin"})," soit un chemin d\u2019acc\xe8s personnalis\xe9, soit une constante d\xe9signant un emplacement automatique :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"chemin d\u2019acc\xe8s personnalis\xe9 au fichier"}),(0,r.jsx)(n.br,{}),'\nDans ce cas, vous utilisez le stockage externe en "mode personnalis\xe9". Dans ce mode, certaines fonctions de base de donn\xe9es de 4D ne sont pas disponibles automatiquement (cf. manuel ',(0,r.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"). En particulier, vous devez g\xe9rer vous-m\xeame la cr\xe9ation ou la modification des fichiers.",(0,r.jsx)(n.br,{}),'\nVous pouvez passer un chemin relatif au fichier de donn\xe9es ou un chemin absolu, incluant obligatoirement le nom du fichier de stockage et son extension. Vous devez utiliser la syntaxe syst\xe8me. Pour d\xe9finir un chemin relatif au fichier de donn\xe9es, passez "../" (Windows) ou "..:" (macOS) au d\xe9but de la cha\xeene. Vous pouvez d\xe9signer tout dossier, y compris le dossier par d\xe9faut des fichiers externes de la base (',(0,r.jsx)(n.em,{children:"nomBase"}),".ExternalData) - dans ce cas, les fichiers seront inclus lors de la sauvegarde de la base.",(0,r.jsx)(n.br,{}),"\nLe fichier d\xe9sign\xe9 par le param\xe8tre ",(0,r.jsx)(n.em,{children:"chemin"})," doit exister et \xeatre accessible au moment de l'ex\xe9cution de la commande. A noter que si le chemin est invalide (fichier ou dossier manquant), une erreur est retourn\xe9e uniquement dans le cas o\xf9 ",(0,r.jsx)(n.em,{children:"chemin"})," a \xe9t\xe9 d\xe9fini en absolu. Dans le cas o\xf9 ",(0,r.jsx)(n.em,{children:"chemin"})," a \xe9t\xe9 d\xe9fini en relatif, vous devez vous assurer de sa validit\xe9, aucune erreur n'est g\xe9n\xe9r\xe9e si le fichier n'est pas trouv\xe9.",(0,r.jsx)(n.br,{}),"\nSi vous stockez le fichier externe dans le m\xeame dossier que le fichier de donn\xe9es ou un de ses sous-dossiers, 4D consid\xe9rera que le chemin d\xe9fini est relatif au fichier de donn\xe9es et maintiendra le lien m\xeame si le dossier du fichier de donn\xe9es est d\xe9plac\xe9 ou renomm\xe9.",(0,r.jsx)(n.br,{}),'\nA noter que ce principe permet de "partager" un m\xeame fichier externe entre plusieurs enregistrements. Toute modification effectu\xe9e sur ce fichier externe est disponible dans tous les enregistrements. Attention dans ce cas, si plusieurs process peuvent \xe9crire simultan\xe9ment les m\xeames champs, vous devez emp\xeacher les acc\xe8s concurrents via des s\xe9maphores afin de ne pas risque d\u2019endommager les fichiers externes.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"emplacement automatique"}),(0,r.jsx)(n.br,{}),"\nVous pouvez d\xe9signer deux emplacements automatiques, \xe0 l\u2019aide des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,r.jsx)(n.em,{children:"Maintenance fichier de donn\xe9es"})," :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Use default folder"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["Les donn\xe9es du champ pass\xe9 en param\xe8tre seront stock\xe9es dans le dossier par d\xe9faut, nomm\xe9 ",(0,r.jsx)(n.em,{children:"nomBase"}),".ExternalData et plac\xe9 \xe0 c\xf4t\xe9 du fichier de donn\xe9es. Dans ce mode, les donn\xe9es externes sont g\xe9r\xe9es par 4D comme si elles \xe9taient \xe0 l\u2019int\xe9rieur du fichier de donn\xe9es."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Use structure definition"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["4D utilisera les param\xe8tres d\xe9finis dans la structure pour le stockage du champ (cf. manuel ",(0,r.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"). Si vous passez d\u2019un stockage externe \xe0 un stockage interne, le fichier externe n\u2019est pas supprim\xe9."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Une fois la commande ex\xe9cut\xe9e, 4D maintient automatiquement le lien entre le champ de l\u2019enregistrement et le fichier sur disque, il n\u2019est pas n\xe9cessaire de r\xe9ex\xe9cuter la commande (hormis si le ",(0,r.jsx)(n.em,{children:"chemin"})," doit \xeatre modifi\xe9). Si 4D ne peut plus acc\xe9der aux donn\xe9es du champ (fichier de stockage renomm\xe9 ou supprim\xe9, chemin modifi\xe9...), le champ est vide mais aucune erreur n'est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," La commande ",(0,r.jsx)(n.strong,{children:"SET EXTERNAL DATA PATH"})," peut uniquement \xeatre ex\xe9cut\xe9e sur 4D local ou 4D Server. Si elle est ex\xe9cut\xe9e sur un 4D distant, elle ne fait rien."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez enregistrer dans le champ image un fichier existant, stock\xe9 \xe0 l'ext\xe9rieur des donn\xe9es, dans le dossier de la base :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE RECORD([Photos])\n\xa0[Photos]Nom:="Paris.png"\n\xa0SET EXTERNAL DATA PATH([Photos]Vignette;Get 4D folder(Database folder)+"custom"+Folder separator+[Photos]Nom)\n\xa0\xa0//"/custom/Paris.png" doit exister \xe0 c\xf4t\xe9 du fichier de structure\n\xa0SAVE RECORD([Photos])\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-external-data-path",children:"Get external data path"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/reload-external-data",children:"RELOAD EXTERNAL DATA"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1134"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);