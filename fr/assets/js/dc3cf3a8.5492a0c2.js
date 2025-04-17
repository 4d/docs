"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31944"],{379589:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands/zip-read-archive","title":"ZIP Read archive","description":"ZIP Read archive ( zipFile Text }) : 4D.ZipArchive","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands/zip-read-archive.md","sourceDirName":"commands","slug":"/commands/zip-read-archive","permalink":"/docs/fr/commands/zip-read-archive","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fzip-read-archive.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"zip-read-archive","title":"ZIP Read archive","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ZIP Create archive","permalink":"/docs/fr/commands/zip-create-archive"},"next":{"title":"Ev\xe9nements formulaire","permalink":"/docs/fr/commands/theme/Form-Events"}}'),i=n("785893"),t=n("250065");let d={id:"zip-read-archive",title:"ZIP Read archive",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let r={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"ZIP Read archive"})," ( ",(0,i.jsx)(r.em,{children:"zipFile"})," : 4D.File { ; ",(0,i.jsx)(r.em,{children:"password"})," : Text }) : 4D.ZipArchive"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Param\xe8tres"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{style:{textAlign:"center"}}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"zipFile"}),(0,i.jsx)(r.td,{children:"4D.File"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(r.td,{children:"Fichier archive ZIP"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"password"}),(0,i.jsx)(r.td,{children:"Text"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(r.td,{children:"Mot de passe de l'archive ZIP, le cas \xe9ch\xe9ant"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"R\xe9sultat"}),(0,i.jsx)(r.td,{children:"4D.ZipArchive"}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:"\u2190"}),(0,i.jsx)(r.td,{children:"Objet archive"})]})]})]}),"\n",(0,i.jsxs)(r.details,{children:[(0,i.jsx)(r.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Release"}),(0,i.jsx)(r.th,{children:"Modifications"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"18"}),(0,i.jsx)(r.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:["La commande ",(0,i.jsx)(r.code,{children:"ZIP Read archive"})," r\xe9cup\xe8re le contenu de ",(0,i.jsx)(r.em,{children:"zipFile"})," et le renvoie sous forme d'objet ",(0,i.jsx)(r.code,{children:"4D.ZipArchive"}),"."]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:["Cette commande ne d\xe9compresse pas l'archive ZIP, elle fournit seulement un aper\xe7u de son contenu. Pour extraire le contenu d'une archive, vous devez utiliser des m\xe9thodes telles que ",(0,i.jsx)(r.a,{href:"/docs/fr/API/Document#copyto",children:"file.copyTo()"})," ou ",(0,i.jsx)(r.a,{href:"/docs/fr/API/Directory#copyto",children:"folder.copyTo()"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Passez un objet ",(0,i.jsx)(r.code,{children:"4D.File"})," r\xe9f\xe9ren\xe7ant l'archive ZIP compress\xe9e dans le param\xe8tre ",(0,i.jsx)(r.em,{children:"zipFile"}),". Le fichier d'archive cible est ouvert jusqu'\xe0 la fin de l'ex\xe9cution de la commande ",(0,i.jsx)(r.code,{children:"ZIP Read archive"})," et jusqu'\xe0 ce que tous les contenus/r\xe9f\xe9rences soient extrait(e)s/publi\xe9(e)s ; il est ensuite ferm\xe9 automatiquement."]}),"\n",(0,i.jsxs)(r.p,{children:["Si le ",(0,i.jsx)(r.em,{children:"zipFile"})," est prot\xe9g\xe9 par un mot de passe, vous devez utiliser le param\xe8tre ",(0,i.jsx)(r.em,{children:"password"})," pour fournir un mot de passe. Si un mot de passe est requis mais qu'il n'est pas pass\xe9 lorsque vous tentez de lire le contenu de l'archive, une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Objet archive"})}),"\n",(0,i.jsxs)(r.p,{children:["L'objet ",(0,i.jsx)(r.code,{children:"4D.ZipArchive"})," retourn\xe9 contient une seule propri\xe9t\xe9 ",(0,i.jsx)(r.a,{href:"/docs/fr/API/ZipArchiveClass#root",children:(0,i.jsx)(r.code,{children:"root"})})," dont la valeur est un objet ",(0,i.jsx)(r.code,{children:"4D.ZipFolder"}),". Ce dossier d\xe9crit le contenu de l'archive ZIP."]}),"\n",(0,i.jsx)(r.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(r.p,{children:"Pour r\xe9cup\xe9rer et visualiser le contenu d'un objet ZIP file :"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n'})}),"\n",(0,i.jsx)(r.p,{children:"Pour r\xe9cup\xe9rer la liste des fichiers et dossiers de l'archive :"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:" $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n"})}),"\n",(0,i.jsx)(r.p,{children:"Pour lire le contenu d'un fichier sans l'extraire du dossier root :"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n'})}),"\n",(0,i.jsx)(r.p,{children:"Pour extraire \xe0 partir du dossier root :"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:'  //extraire un fichier\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  //extraire tous les fichiers\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n'})}),"\n",(0,i.jsx)(r.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/fr/API/ZipArchiveClass",children:"ZipArchive Class"}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/API/ZipFileClass",children:"ZipFile Class"}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/API/ZipFolderClass",children:"ZipFolder Class"}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/commands/zip-create-archive",children:(0,i.jsx)(r.code,{children:"ZIP Create archive"})})]}),"\n",(0,i.jsx)(r.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(r.td,{children:"1637"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Thread safe"}),(0,i.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return d}});var s=n(667294);let i={},t=s.createContext(i);function d(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);