"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30876"],{645486:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>o,assets:()=>c,toc:()=>i,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/object-to-path","title":"Object to path","description":"Object to path ( objRota ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-to-path.md","sourceDirName":"commands-legacy","slug":"/commands/object-to-path","permalink":"/docs/pt/20-R7/commands/object-to-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-to-path.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-to-path","title":"Object to path","slug":"/commands/object-to-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MOVE DOCUMENT","permalink":"/docs/pt/20-R7/commands/move-document"},"next":{"title":"Open document","permalink":"/docs/pt/20-R7/commands/open-document"}}'),r=n("785893"),s=n("250065");let a={id:"object-to-path",title:"Object to path",slug:"/commands/object-to-path",displayed_sidebar:"docs"},d=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Object to path"})," ( ",(0,r.jsx)(t.em,{children:"objRota"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe2metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objRota"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Objeto que descreve os conte\xfados da rota"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resultado"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Nome da rota"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["O comando ",(0,r.jsx)(t.strong,{children:"Object to path"})," devolve um nome de rota (string) em fun\xe7\xe3o da informa\xe7\xe3o de rota que passou no par\xe2metro ",(0,r.jsx)(t.em,{children:"objRota"}),". As rotas abaixo s\xe3o suportadas:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Rota de sistema (Windows ou macOS) ou rota Posix. O tipo de rota est\xe1 definido pelo \xfaltimo caractere da propriedade parentFolder (ver a seguir)."}),"\n",(0,r.jsxs)(t.li,{children:["Rota relativa ou rota absoluta (ver ",(0,r.jsx)(t.em,{children:"Via de acesso absoluta ou relativa"})," para saber mais)."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Em ",(0,r.jsx)(t.em,{children:"objRota"}),", passe um objeto que define a rota que deseja gerar. Deve conter as propriedades abaixo:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Propriedade"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Tipo"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"parentFolder"}),(0,r.jsx)(t.td,{children:"Texto"}),(0,r.jsx)(t.td,{children:'Informa\xe7\xe3o de diret\xf3rio para a rota. P \xfaltimo caractere deve ser um separador de pasta. O comando usa este caractere para conhecer o tipo de rota. Se se tratar de um separador Posix ("/"), a rota \xe9 criada com os separadores Posix; do contr\xe1rio, se usar o separador de sistema.'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"Texto"}),(0,r.jsx)(t.td,{children:"Nome final de arquivo ou pasta da rota especificada sem extens\xe3o."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"extension"}),(0,r.jsx)(t.td,{children:"Texto"}),(0,r.jsx)(t.td,{children:'Extens\xe3o de nome final de arquivo ou pasta. Come\xe7a com "." (pode ser omitido). String vazia "" se n\xe3o houver extens\xe3o.'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"isFolder"}),(0,r.jsx)(t.td,{children:"Booleano"}),(0,r.jsx)(t.td,{children:"True se o nome for um nome de pasta, do contr\xe1rio, false (o valor pr\xe9-determinado for false)"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Geralmente, ",(0,r.jsx)(t.em,{children:"objRota"})," ser\xe1 gerado com o comando ",(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/commands/path-to-object",children:"Path to object "}),", entretanto, o objeto pode ser gerado com qualquer meio. Lembre que ",(0,r.jsx)(t.strong,{children:"Object to path"})," s\xf3 maneja strings. Tampouco comprova se a rota \xe9 v\xe1lida com respeito ao tipo de rota, nem a exist\xeancia real de nenhum arquivo ou pasta."]}),"\n",(0,r.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(t.p,{children:"Se quisermos duplicar e mudar o nome de um arquivo em sua pr\xf3pria pasta"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=New object\n\xa0var $path : Text\n\xa0$path:="C:\\\\MyDocs\\\\file.txt"\n\xa0\n\xa0$o:=Path to object($path)\n\xa0$o.name:=$o.name+"_copy"\n\xa0COPY DOCUMENT($path;Object to path($o))\n'})}),"\n",(0,r.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/commands/convert-path-posix-to-system",children:"Convert path POSIX to system"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/commands/convert-path-system-to-posix",children:"Convert path system to POSIX"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/commands/file",children:"File"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"folder.md",children:"Folder "}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/commands/path-to-object",children:"Path to object "}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R7/commands/test-path-name",children:"Test path name"})]}),"\n",(0,r.jsx)(t.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"N\xfamero do comando"}),(0,r.jsx)(t.td,{children:"1548"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread-seguro"}),(0,r.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var o=n(667294);let r={},s=o.createContext(r);function a(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);