"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63836"],{762785:function(e,t,s){s.r(t),s.d(t,{default:()=>m,frontMatter:()=>a,metadata:()=>o,assets:()=>c,toc:()=>i,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/convert-path-posix-to-system","title":"Convert path POSIX to system","description":"Convert path POSIX to system ( rotaPosix {; *} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/convert-path-posix-to-system.md","sourceDirName":"commands-legacy","slug":"/commands/convert-path-posix-to-system","permalink":"/docs/pt/commands/convert-path-posix-to-system","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-path-posix-to-system.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"convert-path-posix-to-system","title":"Convert path POSIX to system","slug":"/commands/convert-path-posix-to-system","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLOSE DOCUMENT","permalink":"/docs/pt/commands/close-document"},"next":{"title":"Convert path system to POSIX","permalink":"/docs/pt/commands/convert-path-system-to-posix"}}'),n=s("785893"),r=s("250065");let a={id:"convert-path-posix-to-system",title:"Convert path POSIX to system",slug:"/commands/convert-path-posix-to-system",displayed_sidebar:"docs"},d=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Convert path POSIX to system"})," ( ",(0,n.jsx)(t.em,{children:"rotaPosix"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Par\xe2metro"}),(0,n.jsx)(t.th,{children:"Tipo"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rotaPosix"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Nome de rota POSIX"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"*"}),(0,n.jsx)(t.td,{children:"Operador"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Op\xe7\xe3o de codifica\xe7\xe3o"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resultado"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"\u2190"}),(0,n.jsx)(t.td,{children:"Rota de acesso expressa em sintaxe de sistema"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(t.p,{children:"O comando Convert path POSIX to system converte uma rota de acesso expressa com a sintaxe POSIX (Unix) em uma rota expressa com a sintaxe sistema."}),"\n",(0,n.jsxs)(t.p,{children:["Passe no par\xe2metro ",(0,n.jsx)(t.em,{children:"rotaPosix"}),' a rota de acesso completa a um arquivo ou pasta, expressa com a sintaxe POSIX. Esta rota deve ser absoluta (deve come\xe7ar com o caractere "/"). Deve passar uma rota disco; n\xe3o \xe9 poss\xedvel passar uma rota rede (come\xe7ando, por exemplo com ftp://ftp.mysite.fr).']}),"\n",(0,n.jsx)(t.p,{children:"O comando retorna a rota de acesso completa do arquivo ou do arquivo expresso na sintaxe do sistema atual."}),"\n",(0,n.jsxs)(t.p,{children:["O par\xe2metro opcional * permite indicar se o par\xe2metro ",(0,n.jsx)(t.em,{children:"rotaPosix"})," estiver codificado. Se este for o caso, deve passar este par\xe2metro, do contr\xe1rio a convers\xe3o n\xe3o ser\xe1 v\xe1lida. O comando retorna a rota de acesso sem codifica\xe7\xe3o."]}),"\n",(0,n.jsx)(t.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(t.p,{children:"Exemplos em Mac OS:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'\xa0$path:=Convert path POSIX to system("/Volumes/machd/file 2.txt")\n\xa0\xa0//retorna "machd:file 2.txt"\n\xa0$path:=Convert path POSIX to system("/Volumes/machd/file%202.txt";*)\n\xa0\xa0//retorna "machd:file 2.txt"\n\xa0$path:=Convert path POSIX to system("/file 2.txt")\n\xa0\xa0//retorna "machd:file 2.txt" si machd for o disco de inicio\n'})}),"\n",(0,n.jsx)(t.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(t.p,{children:"Exemplos em Windows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'\xa0$path:=Convert path POSIX to system("c:/docs/file 2.txt")\n\xa0\xa0//retorna "c:\\\\docs\\\\file 2.txt"\n\xa0$path:=Convert path POSIX to system("c:/docs/file%202.txt";*)\n\xa0\xa0//retorna "c:\\\\docs\\\\file 2.txt"\n'})}),"\n",(0,n.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/pt/commands/convert-path-system-to-posix",children:"Convert path system to POSIX"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/pt/commands/object-to-path",children:"Object to path"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/pt/commands/path-to-object",children:"Path to object "})]}),"\n",(0,n.jsx)(t.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"N\xfamero do comando"}),(0,n.jsx)(t.td,{children:"1107"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Thread-seguro"}),(0,n.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return a}});var o=s(667294);let n={},r=o.createContext(n);function a(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);