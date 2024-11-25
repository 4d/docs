"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28510"],{489829:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>a,assets:()=>c,toc:()=>o,frontMatter:()=>i});var r=JSON.parse('{"id":"commands/folder","title":"Folder","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/folder.md","sourceDirName":"commands","slug":"/commands/folder","permalink":"/docs/fr/commands/folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ffolder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"folder","title":"Folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"File","permalink":"/docs/fr/commands/file"},"next":{"title":"ZIP Create archive","permalink":"/docs/fr/commands/zip-create-archive"}}'),d=s("785893"),t=s("250065");let i={id:"folder",title:"Folder",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function h(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.details,{children:[(0,d.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Release"}),(0,d.jsx)(n.th,{children:"Modifications"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"19 R8"}),(0,d.jsxs)(n.td,{children:["Prise en charge de ",(0,d.jsx)(n.code,{children:"fk home folder"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"17 R5"}),(0,d.jsx)(n.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Folder"})," ( ",(0,d.jsx)(n.em,{children:"path"})," : Text { ; ",(0,d.jsx)(n.em,{children:"pathType"})," : Integer }{ ; * } ) : 4D.Folder",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.strong,{children:"Folder"})," ( ",(0,d.jsx)(n.em,{children:"folderConstant"})," : Integer { ; * } ) : 4D.Folder"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tres"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{style:{textAlign:"center"}}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"path"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsx)(n.td,{children:"Chemin du dossier"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"folderConstant"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsx)(n.td,{children:"Constante de dossier 4D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"pathType"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"fk posix path"})," (par d\xe9faut) ou ",(0,d.jsx)(n.code,{children:"fk platform path"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"operator"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsx)(n.td,{children:"* pour retourner le dossier de la base h\xf4te"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"R\xe9sultat"}),(0,d.jsx)(n.td,{children:"4D.Folder"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,d.jsx)(n.td,{children:"Nouvel objet dossier"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.code,{children:"Folder"})," cr\xe9e et retourne un nouvel objet de type ",(0,d.jsx)(n.code,{children:"4D.Folder"}),". La commande accepte deux syntaxes :"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Folder ( path { ; pathType } { ; * } )"})}),"\n",(0,d.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"path"}),", passez un chemin de dossier. Vous pouvez utiliser une chaine personnalis\xe9e ou un ",(0,d.jsx)(n.a,{href:"/docs/fr/Concepts/paths#filesystem-pathnames",children:"filesystem"}),' (ex : "/DATA").']}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["Seuls les noms de chemin absolus sont pris en charge par la commande ",(0,d.jsx)(n.code,{children:"Folder"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Par d\xe9faut, 4D attend un chemin exprim\xe9 avec la syntaxe POSIX. Si vous travaillez avec des chemins de plate-forme (Windows ou macOS), vous devez les d\xe9clarer \xe0 l'aide du param\xe8tre ",(0,d.jsx)(n.em,{children:"pathType"}),". Les constantes suivantes sont disponibles :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Commentaire"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk platform path"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Chemin exprim\xe9 dans une syntaxe sp\xe9cifique \xe0 la plate-forme (obligatoire en cas de chemin de plate-forme)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk posix path"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Chemin exprim\xe9 avec la syntaxe POSIX (par d\xe9faut)"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Folder ( folderConstant { ; * } )"})}),"\n",(0,d.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"folderConstant"}),", passez un dossier 4D interne ou un dossier syst\xe8me, \xe0 l'aide d'une des constantes suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Commentaire"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk applications folder"}),(0,d.jsx)(n.td,{children:"116"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk data folder"}),(0,d.jsx)(n.td,{children:"9"}),(0,d.jsx)(n.td,{children:'Filesystem associ\xe9 : "/DATA"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk database folder"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:'Filesystem associ\xe9 : "/PACKAGE"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk desktop folder"}),(0,d.jsx)(n.td,{children:"115"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk documents folder"}),(0,d.jsx)(n.td,{children:"117"}),(0,d.jsx)(n.td,{children:"Dossier Documents de l'utilisateur"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk home folder"}),(0,d.jsx)(n.td,{children:"118"}),(0,d.jsxs)(n.td,{children:["Dossier personnel actuel de l'utilisateur (g\xe9n\xe9ralement ",(0,d.jsx)(n.code,{children:"/Users/<username>/"}),")"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk licenses folder"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Dossier contenant les fichiers de licence 4D de la machine"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk logs folder"}),(0,d.jsx)(n.td,{children:"7"}),(0,d.jsx)(n.td,{children:'Filesystem associ\xe9 : "/LOGS"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk mobileApps folder"}),(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk remote database folder"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{children:"Dossier de la base de donn\xe9es 4D cr\xe9\xe9 sur chaque machine 4D distante"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk resources folder"}),(0,d.jsx)(n.td,{children:"6"}),(0,d.jsx)(n.td,{children:'Filesystem associ\xe9 : "/RESOURCES"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk system folder"}),(0,d.jsx)(n.td,{children:"100"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk user preferences folder"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Dossier 4D qui stocke les fichiers de pr\xe9f\xe9rences de l'utilisateur dans le dossier personnel de l'utilisateur"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fk web root folder"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsx)(n.td,{children:'Dossier racine web courant du projet : "/PACKAGE/chemin" si son emplacement se trouve dans le package, sinon chemin complet'})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Si la commande est appel\xe9e \xe0 partir d'un composant, passez le param\xe8tre optionnel ",(0,d.jsx)(n.code,{children:"*"})," pour lire le chemin de la base h\xf4te. Sinon, si vous omettez le param\xe8tre ",(0,d.jsx)(n.code,{children:"*"}),", un objet null est syst\xe9matiquement retourn\xe9."]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["Sous Windows, dans les clients fusionn\xe9s, l'emplacement des dossiers int\xe9gr\xe9s est modifi\xe9 si la ",(0,d.jsx)(n.a,{href:"/docs/fr/Desktop/building#buildapp4dsettings",children:"cl\xe9 BuildApp"})," ",(0,d.jsx)(n.code,{children:"ShareLocalResourcesOnWindowsClient"})," est utilis\xe9e."]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/commands/file",children:"File"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/object-to-path",children:"Object to path"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/path-to-object",children:"Path to object"})]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let d={},t=r.createContext(d);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);