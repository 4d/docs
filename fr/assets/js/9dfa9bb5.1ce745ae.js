"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82733"],{993557:function(e,t,s){s.r(t),s.d(t,{default:()=>m,frontMatter:()=>o,metadata:()=>n,assets:()=>d,toc:()=>a,contentTitle:()=>c});var n=JSON.parse('{"id":"commands-legacy/convert-path-system-to-posix","title":"Convert path system to POSIX","description":"Convert path system to POSIX ( cheminSyst\xe8me {; *} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/convert-path-system-to-posix.md","sourceDirName":"commands-legacy","slug":"/commands/convert-path-system-to-posix","permalink":"/docs/fr/20-R8/commands/convert-path-system-to-posix","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-path-system-to-posix.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"convert-path-system-to-posix","title":"Convert path system to POSIX","slug":"/commands/convert-path-system-to-posix","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Convert path POSIX to system","permalink":"/docs/fr/20-R8/commands/convert-path-posix-to-system"},"next":{"title":"COPY DOCUMENT","permalink":"/docs/fr/20-R8/commands/copy-document"}}'),r=s("785893"),i=s("250065");let o={id:"convert-path-system-to-posix",title:"Convert path system to POSIX",slug:"/commands/convert-path-system-to-posix",displayed_sidebar:"docs"},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Convert path system to POSIX"})," ( ",(0,r.jsx)(t.em,{children:"cheminSyst\xe8me"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tre"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cheminSyst\xe8me"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Chemin d\u2019acc\xe8s relatif ou absolu exprim\xe9 en syntaxe syst\xe8me"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Op\xe9rateur"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Option d\u2019encodage"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"R\xe9sultat"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Chemin d\u2019acc\xe8s absolu exprim\xe9 en syntaxe POSIX"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["La commande ",(0,r.jsx)(t.strong,{children:"Convert path system to POSIX"})," convertit un chemin d\u2019acc\xe8s exprim\xe9 avec la syntaxe syst\xe8me en chemin d\u2019acc\xe8s exprim\xe9 avec la syntaxe POSIX (Unix)."]}),"\n",(0,r.jsxs)(t.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(t.em,{children:"cheminSyst\xe8me"})," le chemin d\u2019acc\xe8s \xe0 un fichier ou un dossier, exprim\xe9 avec la syntaxe syst\xe8me (Mac OS ou Windows). Ce chemin peut \xeatre absolu ou relatif au dossier de la base (dossier contenant le fichier de structure de la base). Il n\u2019est pas obligatoire que les \xe9l\xe9ments du chemin existent r\xe9ellement sur le disque au moment de l\u2019ex\xe9cution de la commande (la commande ne teste pas la validit\xe9 du chemin d\u2019acc\xe8s)."]}),"\n",(0,r.jsxs)(t.p,{children:["La commande retourne le chemin d\u2019acc\xe8s complet du fichier ou du dossier exprim\xe9 dans la syntaxe POSIX. La commande retourne toujours un chemin d\u2019acc\xe8s absolu, quel que soit le type de chemin pass\xe9 dans ",(0,r.jsx)(t.em,{children:"cheminSyst\xe8me"}),". Si vous avez pass\xe9 un chemin relatif dans ",(0,r.jsx)(t.em,{children:"cheminSyst\xe8me"}),", 4D compl\xe8te la valeur retourn\xe9e en ajoutant le chemin d\u2019acc\xe8s au dossier de la base."]}),"\n",(0,r.jsxs)(t.p,{children:["Le param\xe8tre optionnel ",(0,r.jsx)(t.em,{children:"*"})," permet de d\xe9finir l\u2019encodage du chemin POSIX. Par d\xe9faut, ",(0,r.jsx)(t.strong,{children:"Convert path system to POSIX"})," n\u2019encode pas les caract\xe8res sp\xe9ciaux du chemin POSIX. Si vous passez le param\xe8tre ",(0,r.jsx)(t.em,{children:"*"}),', les caract\xe8res seront traduits (par exemple, "Mon dossier" devient "Mon%20dossier").']}),"\n",(0,r.jsx)(t.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(t.p,{children:"Exemples sous macOS"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0$chemin:=Convert path system to POSIX("machd:file 2.txt")\n\xa0\xa0\xa0\xa0\xa0//machd est le disque de d\xe9marrage\n\xa0\xa0\xa0\xa0\xa0//retourne "/file 2.txt"\n\xa0$chemin:=Convert path system to POSIX("disk2:file 2.txt")\n\xa0\xa0\xa0\xa0\xa0//disk2 est un disque additionnel (pas de d\xe9marrage)\n\xa0\xa0\xa0\xa0\xa0//retourne "/Volumes/disk2/file 2.txt"\n\xa0$chemin:=Convert path system to POSIX("machd:file 2.txt";*)\n\xa0\xa0\xa0\xa0\xa0//retourne "/file%202.txt"\n\xa0$chemin:=Convert path system to POSIX(":resources:images")\xa0//chemin relatif\n\xa0\xa0\xa0\xa0\xa0//retourne "/User/marc/Documents/basevideo/resources/images"\n\xa0$chemin:=Convert path system to POSIX("resources:images")\xa0//chemin absolu\n\xa0\xa0\xa0\xa0\xa0//retourne "/resources/images"\n'})}),"\n",(0,r.jsx)(t.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(t.p,{children:"Exemple sous Windows"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0$chemin:=Convert path system to POSIX("c:\\docs\\file 2.txt")\n\xa0\xa0\xa0\xa0\xa0//retourne "c:/docs/file 2.txt"\n\xa0$chemin:=Convert path system to POSIX("\\\\srv\\tempo\\file.txt")\n\xa0\xa0\xa0\xa0\xa0//retourne "//srv/tempo/file.txt"\n'})}),"\n",(0,r.jsx)(t.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/convert-path-posix-to-system",children:"Convert path POSIX to system"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/object-to-path",children:"Object to path"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/path-to-object",children:"Path to object"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/test-path-name",children:"Test path name"})]}),"\n",(0,r.jsx)(t.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(t.td,{children:"1106"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return c},a:function(){return o}});var n=s(667294);let r={},i=n.createContext(r);function o(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);