"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98428"],{974823:function(e,t,o){o.r(t),o.d(t,{default:()=>m,frontMatter:()=>s,metadata:()=>a,assets:()=>d,toc:()=>c,contentTitle:()=>r});var a=JSON.parse('{"id":"settings/compatibility","title":"P\xe1gina de compatibilidade","description":"Os grupos de p\xe1ginas de compatibilidade juntam par\xe2metros relacionados com a manuten\xe7\xe3o da compatibilidade com vers\xf5es anteriores do 4D.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/settings/compatibility.md","sourceDirName":"settings","slug":"/settings/compatibility","permalink":"/docs/pt/settings/compatibility","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fcompatibility.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"compatibility","title":"P\xe1gina de compatibilidade"},"sidebar":"docs","previous":{"title":"P\xe1gina seguran\xe7a","permalink":"/docs/pt/settings/security"},"next":{"title":"Componentes","permalink":"/docs/pt/Project/components"}}'),n=o("785893"),i=o("250065");let s={id:"compatibility",title:"P\xe1gina de compatibilidade"},r=void 0,d={},c=[];function l(e){let t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Os grupos de p\xe1ginas de compatibilidade juntam par\xe2metros relacionados com a manuten\xe7\xe3o da compatibilidade com vers\xf5es anteriores do 4D."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The number of options displayed depends on the version of 4D with which the original database/project was created, as well as the settings modified in this database/project.",(0,n.jsx)(t.br,{}),"\nThis page lists the compatibility options available for database/projects converted from 4D v18 onwards. Para op\xe7\xf5es de compatibilidade mais antigas, consulte a [P\xe1gina de compatibilidade] (",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Compatibility-page.300-6750362.en.html",children:"https://doc.4d.com/4Dv20/4D/20.2/Compatibility-page.300-6750362.en.html"}),") em ",(0,n.jsx)(t.strong,{children:"doc.4d.com"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Use legacy network layer"}),": Starting with 4D v15, 4D applications propose a new network layer, named ",(0,n.jsx)(t.em,{children:"ServerNet"}),", to handle communications between 4D Server and remote 4D machines (clients). A antiga camada de rede tornou-se obsoleta, mas \xe9 mantida para garantir a compatibilidade com as bases de dados existentes. Usando esta op\xe7\xe3o, voc\xea pode ativar a antiga camada de rede a qualquer momento nos seus aplicativos do servidor 4D dependendo das suas necessidades. ",(0,n.jsx)(t.em,{children:"ServerNet"})," is used automatically for new databases and databases converted from a v15 release or later. Observe que, em caso de modifica\xe7\xe3o, voc\xea precisa reiniciar o aplicativo para que a mudan\xe7a seja levada em conta. Todos os aplicativos clientes que foram conectados tamb\xe9m devem ser reiniciados para poderem se conectar \xe0 nova camada de rede.\n",(0,n.jsx)(t.strong,{children:"Nota:"})," esta op\xe7\xe3o tamb\xe9m pode ser gerenciada programando usando o comando ",(0,n.jsx)(t.code,{children:"SET DATABASE PARAMETER"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Usar XPath padr\xe3o:"})," oor padr\xe3o, essa op\xe7\xe3o est\xe1 desmarcada para bancos de dados convertidos de uma vers\xe3o 4D anterior \xe0 v18 R3 e marcada para bancos de dados criados com 4D v18 R3 e superior. A partir da v18 R3, a implementa\xe7\xe3o do XPath no 4D foi modificada para ser mais compat\xedvel e suportar mais previs\xf5es. Consequentemente, as caracter\xedsticas n\xe3o convencionais da anterior implementa\xe7\xe3o j\xe1 n\xe3o funcionam. Estes incluem:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'inicial "/" n\xe3o \xe9 apenas o n\xf3 raiz - usar um / como primeiro caractere em uma express\xe3o XPath n\xe3o declara um caminho absoluto do n\xf3 raiz'}),"\n",(0,n.jsx)(t.li,{children:"n\xe3o h\xe1 n\xf3 atual impl\xedcito - o n\xf3 atual tem que ser inclu\xeddo na express\xe3o XPath"}),"\n",(0,n.jsx)(t.li,{children:"n\xe3o h\xe1 pesquisa recursiva em estruturas repetidas - apenas o primeiro elemento \xe9 analisado.\\"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Although not standard, you might want to keep using these features so that your code continues to work as before -- in this case, just set the option ",(0,n.jsx)(t.em,{children:"unchecked"}),". On the other hand, if your code does not rely on the non-standard implementation and if you want to benefit from the extended XPath features in your databases (as described in the ",(0,n.jsx)(t.a,{href:"/docs/pt/commands/dom-find-xml-element",children:(0,n.jsx)(t.code,{children:"DOM Find XML element"})})," command), make sure the ",(0,n.jsx)(t.strong,{children:"Use standard XPath"})," option is ",(0,n.jsx)(t.em,{children:"checked"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Use LF for end of line on macOS:"})," Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. Se voc\xea deseja se beneficiar deste novo comportamento em projetos convertidos de vers\xf5es anteriores da 4D, marque esta op\xe7\xe3o. See ",(0,n.jsx)(t.a,{href:"/docs/pt/commands/text-to-document",children:(0,n.jsx)(t.code,{children:"TEXT TO DOCUMENT"})}),", ",(0,n.jsx)(t.a,{href:"/docs/pt/commands/document-to-text",children:(0,n.jsx)(t.code,{children:"Document to text"})}),", and ",(0,n.jsx)(t.a,{href:"/docs/pt/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Don't add a BOM when writing a unicode text file by default:"})," Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. Nas vers\xf5es anteriores, os arquivos texto eram gravados com um BOM por padr\xe3o. Selecione esta op\xe7\xe3o se quiser ativar o novo comportamento nos projetos convertidos. See ",(0,n.jsx)(t.a,{href:"/docs/pt/commands/text-to-document",children:(0,n.jsx)(t.code,{children:"TEXT TO DOCUMENT"})}),", ",(0,n.jsx)(t.a,{href:"/docs/pt/commands/document-to-text",children:(0,n.jsx)(t.code,{children:"Document to text"})}),", and ",(0,n.jsx)(t.a,{href:"/docs/pt/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Map NULL values to blank values unchecked by default a field creation"}),": For better compliance with ORDA specifications, in databases created with 4D v19 R4 and higher the ",(0,n.jsx)(t.strong,{children:"Map NULL values to blank values"})," field property is unchecked by default when you create fields. You can apply this default behavior to your converted databases by checking this option (working with Null values is recommended since they are fully supported by ",(0,n.jsx)(t.a,{href:"/docs/pt/ORDA/overview",children:"ORDA"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Non-blocking printing"}),": Starting with 4D v20 R4, each process has its own printing settings (print options, current printer, etc.), thus allowing you to run multiple printing jobs simultaneously. Check this option if you want to benefit from this new implementation in your converted 4D projects or databases converted from binary mode to project mode. ",(0,n.jsx)(t.strong,{children:"When left unchecked"}),', the previous implementation is applied: the current 4D printing settings are applied globally, the printer is placed in "busy" mode when one printing job is running, you must call ',(0,n.jsx)(t.code,{children:"CLOSE PRINTING JOB"})," for the printer to be available for the next print job (check previous 4D documentations for more information)."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Save structure color and coordinates in separate catalog_editor.json file"}),": Starting with 4D v20 R5, changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) s\xe3o salvos em um arquivo separado chamado ",(0,n.jsx)(t.code,{children:"catalog_editor.json"}),", armazenado na ",(0,n.jsx)(t.a,{href:"/docs/pt/Project/architecture#sources",children:"pasta de c\xf3digos"}),". Esta nueva arquitectura de archivos facilita la gesti\xf3n de conflictos en aplicaciones VCS, ya que el archivo ",(0,n.jsx)(t.code,{children:"catalog.4DCatalog"})," ahora contiene s\xf3lo cambios cruciales en la estructura de la base de datos. For compatibility reasons, this feature is not enabled by default in projects converted from previous 4D versions, you need to check this option. Cuando la funci\xf3n est\xe1 habilitada, el archivo ",(0,n.jsx)(t.code,{children:"catalog_editor.json"})," se crea en la primera modificaci\xf3n en el editor de estructuras."]}),"\n"]}),"\n"]})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return r},a:function(){return s}});var a=o(667294);let n={},i=a.createContext(n);function s(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);