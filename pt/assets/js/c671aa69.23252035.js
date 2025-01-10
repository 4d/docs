"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69526"],{628456:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>d,assets:()=>c,toc:()=>l,contentTitle:()=>o});var d=JSON.parse('{"id":"commands/folder","title":"Folder","description":"Hist\xf3ria","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/folder.md","sourceDirName":"commands","slug":"/commands/folder","permalink":"/docs/pt/commands/folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ffolder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"folder","title":"Folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"File","permalink":"/docs/pt/commands/file"},"next":{"title":"ZIP Create archive","permalink":"/docs/pt/commands/zip-create-archive"}}'),r=s("785893"),t=s("250065");let i={id:"folder",title:"Folder",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R8"}),(0,r.jsxs)(n.td,{children:["Suporte de ",(0,r.jsx)(n.code,{children:"fk home folder"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Folder"})," ( ",(0,r.jsx)(n.em,{children:"path"})," : Text { ; ",(0,r.jsx)(n.em,{children:"pathType"})," : Integer }{ ; * } ) : 4D.Folder",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Folder"})," ( ",(0,r.jsx)(n.em,{children:"folderConstant"})," : Integer { ; * } ) : 4D.Folder"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"path"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(n.td,{children:"Folder path"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"folderConstant"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(n.td,{children:"Constante Pasta 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pathType"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"fk posix path"})," (padr\xe3o) ou ",(0,r.jsx)(n.code,{children:"fk platform path"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"operator"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(n.td,{children:"* para devolver a pasta da base de dados do anfitri\xe3o"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"4D. Folder"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,r.jsx)(n.td,{children:"Novo Objeto Folder"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"Par\xe2metro O comando aceita duas sintaxes:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Folder ( path { ; pathType } { ; * } )"})}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"path"}),", passe uma string de rotas de pasta. Voc\xea pode usar uma cadeia de caracteres personalizada ou um ",(0,r.jsx)(n.a,{href:"/docs/pt/Concepts/paths#filesystem-pathnames",children:"sistema de arquivos"}),' (por exemplo, "/DATA").']}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Apenas s\xe3o compat\xedveis com os nomes de caminho absolutos com o comando ",(0,r.jsx)(n.code,{children:"Folder"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Como padr\xe3o, 4D espera um caminho expresso com a sintaxe POSIX. If you work with platform pathnames (Windows or macOS), you must declare it using the ",(0,r.jsx)(n.em,{children:"pathType"})," parameter. Est\xe3o dispon\xedveis as seguintes constantes:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metros"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk platform path"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Caminho expresso com uma sintaxe espec\xedfica da plataforma (obrigat\xf3ria em caso de caminho de plataforma)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk posix path"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Caminho expresso com a sintaxe POSIX (por padr\xe3o)"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Folder ( folderConstant { ; * } )"})}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"folderConstant"}),", passe uma pasta 4D incorporada ou de sistema, utilizando uma das seguintes constantes:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metros"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk applications folder"}),(0,r.jsx)(n.td,{children:"116"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk data folder"}),(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:'Sistema de ficheiros associado: "/DATA"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk database folder"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:'Sistema de arquivos associado: "/PACKAGE"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk desktop folder"}),(0,r.jsx)(n.td,{children:"115"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk documents folder"}),(0,r.jsx)(n.td,{children:"117"}),(0,r.jsx)(n.td,{children:"Pasta de documentos do utilizador"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk home folder"}),(0,r.jsx)(n.td,{children:"118"}),(0,r.jsxs)(n.td,{children:["Pasta atual do usu\xe1rio (normalmente ",(0,r.jsx)(n.code,{children:"/Users/<username>/"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk licenses folder"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Pasta contendo os arquivos de licen\xe7a 4D da m\xe1quina"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk logs folder"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:'Sistema de arquivos associado: "/LOGS"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk mobileApps folder"}),(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk remote database folder"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"Pasta de base de dados 4D criada em cada m\xe1quina 4D remota"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk resources folder"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:'Sistema de arquivos associado: "/DATA"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk system folder"}),(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk user preferences folder"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["4D folder that stores user preference files within the ",(0,r.jsx)(n.code,{children:"<userName>"})," directory."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fk web root folder"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:'Pasta raiz atual da Web da base de dados: se estiver dentro do pacote "/PACKAGE/percurso", caso contr\xe1rio, caminho completo'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If the command is called from a component, pass the optional ",(0,r.jsx)(n.code,{children:"*"})," parameter to get the path of the host database. Caso contr\xe1rio, se omitir o par\xe2metro ",(0,r.jsx)(n.code,{children:"*"}),", um objecto nulo \xe9 sempre devolvido."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["No Windows, em clientes mesclados, o local das pastas incorporadas \xe9 modificado se a chave ",(0,r.jsx)(n.code,{children:"ShareLocalResourcesOnWindowsClient"})," ",(0,r.jsx)(n.a,{href:"/docs/pt/Desktop/building#buildapp4dsettings",children:"BuildApp key"})," for usada."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/file",children:"File"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/object-to-path",children:"Object to path"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/path-to-object",children:"Path to object"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1567"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"&check;"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var d=s(667294);let r={},t=d.createContext(r);function i(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);