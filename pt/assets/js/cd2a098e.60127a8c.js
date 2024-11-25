"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81094"],{871860:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"commands/zip-read-archive","title":"ZIP Read archive","description":"ZIP Read archive ( zipFile Text }) : 4D.ZipArchive","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/zip-read-archive.md","sourceDirName":"commands","slug":"/commands/zip-read-archive","permalink":"/docs/pt/commands/zip-read-archive","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fzip-read-archive.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"zip-read-archive","title":"ZIP Read archive","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ZIP Create archive","permalink":"/docs/pt/commands/zip-create-archive"},"next":{"title":"Form Events","permalink":"/docs/pt/category/form-events"}}'),i=r("785893"),t=r("250065");let d={id:"zip-read-archive",title:"ZIP Read archive",displayed_sidebar:"docs"},o=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ZIP Read archive"})," ( ",(0,i.jsx)(n.em,{children:"zipFile"})," : 4D.File { ; ",(0,i.jsx)(n.em,{children:"password"})," : Text }) : 4D.ZipArchive"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zipFile"}),(0,i.jsx)(n.td,{children:"4D. File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Arquivos Zip"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"senha"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Senha do arquivo ZIP, se houver"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultados"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,i.jsx)(n.td,{children:"Objeto arquivo"})]})]})]}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ZIP Read archive"})," command retrieves the contents of ",(0,i.jsx)(n.em,{children:"zipFile"})," and returns it as a ",(0,i.jsx)(n.code,{children:"4D.ZipArchive"})," object."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["O comando n\xe3o descompacta o arquivo ZIP, apenas oferece uma vis\xe3o de seus conte\xfados. To extract the contents of an archive, you need to use methods such as ",(0,i.jsx)(n.a,{href:"/docs/pt/API/Document#copyto",children:"file.copyTo()"})," or ",(0,i.jsx)(n.a,{href:"/docs/pt/API/Directory#copyto",children:"folder.copyTo()"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Pass a ",(0,i.jsx)(n.code,{children:"4D.File"})," object referencing the compressed ZIP archive in the ",(0,i.jsx)(n.em,{children:"zipFile"})," parameter. The target archive file will be opened until the ",(0,i.jsx)(n.code,{children:"ZIP Read archive"})," has finished executing and all contents/references have been extracted/released, then it will be closed automatically."]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"zipFile"})," is password protected, you need to use the optional ",(0,i.jsx)(n.em,{children:"password"})," parameter to provide a password. Se uma senha for exigida mas n\xe3o for passada, quando tentar ler os conte\xfados do arquivo um erro ser\xe1 gerado."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Objeto arquivo"})}),"\n",(0,i.jsxs)(n.p,{children:["The returned ",(0,i.jsx)(n.code,{children:"4D.ZipArchive"})," object contains a single ",(0,i.jsx)(n.a,{href:"/docs/pt/API/ZipArchiveClass#root",children:(0,i.jsx)(n.code,{children:"root"})})," property whose value is a ",(0,i.jsx)(n.code,{children:"4D.ZipFolder"})," object. Esta pasta descreve todo o conte\xfado do ficheiro ZIP."]}),"\n",(0,i.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(n.p,{children:"Para recuperar e ver os conte\xfados de um objeto ZIP file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Para recuperar a lista dos arquivos e pastas no arquivo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Para extrair da pasta root:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n'})}),"\n",(0,i.jsx)(n.p,{children:"Para ler todos os conte\xfados de um arquivo sem extra\xed-lo da pasta root:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'  //extract a file\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  //extract all files\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n'})}),"\n",(0,i.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/pt/API/ZipArchiveClass",children:"ZipArchive Class"}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/API/ZipFileClass",children:"ZipFile Class"}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/API/ZipFolderClass",children:"ZipFolder Class"}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/commands/zip-create-archive",children:(0,i.jsx)(n.code,{children:"ZIP Create archive"})})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var s=r(667294);let i={},t=s.createContext(i);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);