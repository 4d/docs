"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13784"],{373059:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/web-send-blob","title":"WEB SEND BLOB","description":"WEB SEND BLOB ( BLOB ; tipo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-send-blob.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-blob","permalink":"/docs/pt/20-R7/commands/web-send-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-send-blob","title":"WEB SEND BLOB","slug":"/commands/web-send-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB LEGACY GET SESSION EXPIRATION","permalink":"/docs/pt/20-R7/commands/web-legacy-get-session-expiration"},"next":{"title":"WEB SEND FILE","permalink":"/docs/pt/20-R7/commands/web-send-file"}}'),i=s("785893"),d=s("250065");let r={id:"web-send-blob",title:"WEB SEND BLOB",slug:"/commands/web-send-blob",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(n){let e={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"WEB SEND BLOB"})," ( ",(0,i.jsx)(e.em,{children:"BLOB"})," ; ",(0,i.jsx)(e.em,{children:"tipo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Par\xe2metro"}),(0,i.jsx)(e.th,{children:"Tipo"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Blob"}),(0,i.jsx)(e.td,{children:"Blob"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"Blob a enviar ao browser"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"tipo"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"Tipo de dados do BLOB"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(e.p,{children:["O comando ",(0,i.jsx)(e.strong,{children:"WEB SEND BLOB"})," permite enviar o BLOB ",(0,i.jsx)(e.em,{children:"blob"})," ao navegador."]}),"\n",(0,i.jsxs)(e.p,{children:["O tipo de dados contidos no BLOB \xe9 indicado por ",(0,i.jsx)(e.em,{children:"tipo"}),". Este par\xe2metro pode conter os seguintes valores:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"tipo"})," = ",(0,i.jsx)(e.strong,{children:"String vazia"}),' (""): neste caso, n\xe3o necessita dar mais informa\xe7\xe3o no BLOB. O navegador tentar\xe1 interpretar os conte\xfados do BLOB.']}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"tipo"})," = ",(0,i.jsx)(e.strong,{children:"Extens\xe3o de arquivo"}),' (Exemplo: ".HTM", ".GIF", ".JPEG", etc.): neste caso, especifique o navegador, por sua extens\xe3o, o tipo MIME dos dados contidos no BLOB. O BLOB ser\xe1 interpretado de acordo com sua extens\xe3o. Entretanto, a extens\xe3o deve ser padr\xe3o para que o navegador possaa interpret\xe1-lo corretamente.']}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"tipo"})," = ",(0,i.jsx)(e.strong,{children:"Mime/Tipo"})," (Exemplo: \u201Ctext/html\u201D, \u201Cimage/tiff\u201D, etc.): neste caso, especifique diretamente ao navegador o tipo MIME dos dados contidos no BLOB. Esta solu\xe7\xe3o oferece mais liberdade. Al\xe9m disso, os tipos padr\xe3o, pode passar um tipo MIME personalizado para enviar os documentos proprietarios em Intranet. Para fazer isso, s\xf3 necessita configurar os navegadores com o fim de reconhecer o tipo enviado e executar a aplica\xe7\xe3o correspondente. O valor a passar no par\xe2metro tipo \xe9, neste caso, \u201Capplication/x-[NomeTipo]\u201D. No navegador da m\xe1quina cliente, voc\xea referencia este tipo e o associa \xe0 a\xe7\xe3o \u201CLaunch the application\u201D. O comando ",(0,i.jsx)(e.strong,{children:"WEB SEND BLOB"})," permite ent\xe3o enviar documentos de todo tipo, os clientes Intranet abrem automaticamente a aplica\xe7\xe3o associada."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Nota:"})," Para maior informa\xe7\xe3o sobre os tipos MIME, consulte a p\xe1gina: ",(0,i.jsx)(e.a,{href:"http://www.iana.org/assignments/media-types",children:"http://www.iana.org/assignments/media-types"}),"."]}),"\n",(0,i.jsx)(e.p,{children:"Esta \xe9 uma lista dos tipos MIME mais comuns:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Extens\xe3o"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Mime/Tipo"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".htm"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".html"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".shtml"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".shtm"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".css"}),(0,i.jsx)(e.td,{children:"text/css"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".pdf"}),(0,i.jsx)(e.td,{children:"application/pdf"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".rtf"}),(0,i.jsx)(e.td,{children:"application/rtf"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".ps"}),(0,i.jsx)(e.td,{children:"application/postscript"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".eps"}),(0,i.jsx)(e.td,{children:"application/postscript"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".hqx"}),(0,i.jsx)(e.td,{children:"application/mac-binhex40"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".js"}),(0,i.jsx)(e.td,{children:"application/javascript"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".json"}),(0,i.jsx)(e.td,{children:"application/json"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".txt"}),(0,i.jsx)(e.td,{children:"text/plain"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".text"}),(0,i.jsx)(e.td,{children:"text/plain"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".gif"}),(0,i.jsx)(e.td,{children:"image/gif"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".jpg"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".jpeg"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".jpe"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".jfif"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".pic"}),(0,i.jsx)(e.td,{children:"image/pict"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".pict"}),(0,i.jsx)(e.td,{children:"image/pict"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".tif"}),(0,i.jsx)(e.td,{children:"image/tiff"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".tiff"}),(0,i.jsx)(e.td,{children:"image/tiff"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".mpeg"}),(0,i.jsx)(e.td,{children:"video/mpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".mpg"}),(0,i.jsx)(e.td,{children:"video/mpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".mov"}),(0,i.jsx)(e.td,{children:"video/quicktime"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".moov"}),(0,i.jsx)(e.td,{children:"video/quicktime"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".aif"}),(0,i.jsx)(e.td,{children:"audio/aiff"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".aiff"}),(0,i.jsx)(e.td,{children:"audio/aiff"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".wav"}),(0,i.jsx)(e.td,{children:"audio/wav"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".ram"}),(0,i.jsx)(e.td,{children:"audio/x-pn-realaudio"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".sit"}),(0,i.jsx)(e.td,{children:"application/x-stuffit"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".bin"}),(0,i.jsx)(e.td,{children:"application/x-stuffit"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".xml"}),(0,i.jsx)(e.td,{children:"application/xml"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".z"}),(0,i.jsx)(e.td,{children:"application/x-zip"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".zip"}),(0,i.jsx)(e.td,{children:"application/x-zip"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".gz"}),(0,i.jsx)(e.td,{children:"application/x-gzip"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".tar"}),(0,i.jsx)(e.td,{children:"application/x-tar"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Nota:"}),' A lista de tipos MIME suportada pelo servidor 4D HTTP \xe9 salva no arquivo "MimeTypes.xml" que se encontra na seguinte pasta da aplica\xe7\xe3o 4D: ',(0,i.jsx)(e.em,{children:"[Contents]\\Native components\\HTTPServer.bundle\\Contents\\Resources"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["As refer\xeancias \xe0s vari\xe1veis 4D e etiquetas de tipo ",(0,i.jsx)(e.em,{children:"4DSCRIPT"})," na p\xe1gina sempre s\xe3o analisadas."]}),"\n",(0,i.jsx)(e.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsxs)(e.p,{children:["Consulte o exemplo da rotina ",(0,i.jsx)(e.a,{href:"/docs/pt/20-R7/commands/picture-to-blob",children:"PICTURE TO BLOB"}),"."]}),"\n",(0,i.jsx)(e.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"/docs/pt/20-R7/commands/web-send-file",children:"WEB SEND FILE"})}),"\n",(0,i.jsx)(e.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"N\xfamero do comando"}),(0,i.jsx)(e.td,{children:"654"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Thread-seguro"}),(0,i.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var t=s(667294);let i={},d=t.createContext(i);function r(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);