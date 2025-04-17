"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75229"],{797158:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"commands-legacy/web-send-blob","title":"WEB SEND BLOB","description":"WEB SEND BLOB ( BLOB ; tipo )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-send-blob.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-blob","permalink":"/docs/es/20-R8/commands/web-send-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-send-blob","title":"WEB SEND BLOB","slug":"/commands/web-send-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB LEGACY GET SESSION EXPIRATION","permalink":"/docs/es/20-R8/commands/web-legacy-get-session-expiration"},"next":{"title":"WEB SEND FILE","permalink":"/docs/es/20-R8/commands/web-send-file"}}'),t=s("785893"),d=s("250065");let r={id:"web-send-blob",title:"WEB SEND BLOB",slug:"/commands/web-send-blob",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(n){let e={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"WEB SEND BLOB"})," ( ",(0,t.jsx)(e.em,{children:"BLOB"})," ; ",(0,t.jsx)(e.em,{children:"tipo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Par\xe1metro"}),(0,t.jsx)(e.th,{children:"Tipo"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Blob"}),(0,t.jsx)(e.td,{children:"Blob"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"BLOB a enviar al navegador"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"tipo"}),(0,t.jsx)(e.td,{children:"Text"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"Tipo de datos del BLOB"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(e.p,{children:["El comando ",(0,t.jsx)(e.strong,{children:"WEB SEND BLOB"})," permite enviar el BLOB ",(0,t.jsx)(e.em,{children:"blob"})," al navegador."]}),"\n",(0,t.jsxs)(e.p,{children:["El tipo de datos contenidos en el BLOB es indicado por ",(0,t.jsx)(e.em,{children:"tipo"}),". Este par\xe1metro puede contener los siguientes valores:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"tipo"})," = ",(0,t.jsx)(e.strong,{children:"Cadena vac\xeda"}),' (""): en este caso, no necesita dar m\xe1s informaci\xf3n en el BLOB. El navegador intentar\xe1 interpretar los contenidos del BLOB.']}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"tipo"})," = ",(0,t.jsx)(e.strong,{children:"Extensi\xf3n de archivo"}),' (Ejemplo: ".HTM", ".GIF", ".JPEG", etc.): en este caso, especifique el navegador, por intermedio de su extensi\xf3n, el tipo MIME de los datos contenidos en el BLOB. El BLOB ser\xe1 interpretado de acuerdo a su extensi\xf3n. Sin embargo, la extensi\xf3n debe ser est\xe1ndar para que el navegador pueda interpretarla correctamente.']}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"tipo"})," = ",(0,t.jsx)(e.strong,{children:"Mime/Tipo"})," (Ejemplo: \u201Ctext/html\u201D, \u201Cimage/tiff\u201D, etc.): en este caso, especifique directamente al navegador el tipo MIME de los datos contenidos en el BLOB. Esta soluci\xf3n ofrece m\xe1s libertad. Adem\xe1s, los tipos est\xe1ndar, puede pasar un tipo MIME personalizado para enviar los documentos propietarios en Intranet. Para hacerlo, s\xf3lo necesita configurar los navegadores con el fin de reconocer el tipo enviado y ejecutar la aplicaci\xf3n correspondiente. El valor a pasar en el par\xe1metro ",(0,t.jsx)(e.em,{children:"tipo"})," es, en este caso, \u201Capplication/x-[NombreTipo]\u201D. En los navegadores de los equipos clientes, usted referencia este tipo y lo asocia a la acci\xf3n \u201CLaunch the application\u201D. El comando ",(0,t.jsx)(e.strong,{children:"WEB SEND BLOB"})," permite entonces enviar documentos de todo tipo, los clientes Intranet abren autom\xe1ticamente la aplicaci\xf3n asociada."]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Nota:"})," para mayor informaci\xf3n sobre los tipos MIME, consulte la p\xe1gina: ",(0,t.jsx)(e.a,{href:"http://www.iana.org/assignments/media-types",children:"http://www.iana.org/assignments/media-types"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"Esta es una lista de los tipos MIME m\xe1s comunes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"Extensi\xf3n"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"Mime/Tipo"})})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".htm"}),(0,t.jsx)(e.td,{children:"text/html"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".html"}),(0,t.jsx)(e.td,{children:"text/html"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".shtml"}),(0,t.jsx)(e.td,{children:"text/html"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".shtm"}),(0,t.jsx)(e.td,{children:"text/html"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".css"}),(0,t.jsx)(e.td,{children:"text/css"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".pdf"}),(0,t.jsx)(e.td,{children:"application/pdf"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".rtf"}),(0,t.jsx)(e.td,{children:"application/rtf"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".ps"}),(0,t.jsx)(e.td,{children:"application/postscript"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".eps"}),(0,t.jsx)(e.td,{children:"application/postscript"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".hqx"}),(0,t.jsx)(e.td,{children:"application/mac-binhex40"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".js"}),(0,t.jsx)(e.td,{children:"application/javascript"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".json"}),(0,t.jsx)(e.td,{children:"application/json"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".txt"}),(0,t.jsx)(e.td,{children:"text/plain"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".text"}),(0,t.jsx)(e.td,{children:"text/plain"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".gif"}),(0,t.jsx)(e.td,{children:"image/gif"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".jpg"}),(0,t.jsx)(e.td,{children:"image/jpeg"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".jpeg"}),(0,t.jsx)(e.td,{children:"image/jpeg"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".jpe"}),(0,t.jsx)(e.td,{children:"image/jpeg"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".jfif"}),(0,t.jsx)(e.td,{children:"image/jpeg"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".pic"}),(0,t.jsx)(e.td,{children:"image/pict"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".pict"}),(0,t.jsx)(e.td,{children:"image/pict"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".tif"}),(0,t.jsx)(e.td,{children:"image/tiff"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".tiff"}),(0,t.jsx)(e.td,{children:"image/tiff"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".mpeg"}),(0,t.jsx)(e.td,{children:"video/mpeg"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".mpg"}),(0,t.jsx)(e.td,{children:"video/mpeg"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".mov"}),(0,t.jsx)(e.td,{children:"video/quicktime"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".moov"}),(0,t.jsx)(e.td,{children:"video/quicktime"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".aif"}),(0,t.jsx)(e.td,{children:"audio/aiff"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".aiff"}),(0,t.jsx)(e.td,{children:"audio/aiff"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".wav"}),(0,t.jsx)(e.td,{children:"audio/wav"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".ram"}),(0,t.jsx)(e.td,{children:"audio/x-pn-realaudio"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".sit"}),(0,t.jsx)(e.td,{children:"application/x-stuffit"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".bin"}),(0,t.jsx)(e.td,{children:"application/x-stuffit"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".xml"}),(0,t.jsx)(e.td,{children:"application/xml"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".z"}),(0,t.jsx)(e.td,{children:"application/x-zip"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".zip"}),(0,t.jsx)(e.td,{children:"application/x-zip"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".gz"}),(0,t.jsx)(e.td,{children:"application/x-gzip"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".tar"}),(0,t.jsx)(e.td,{children:"application/x-tar"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Nota:"}),' la lista de tipos MIME soportada por el servidor 4D HTTP se guarda en el archivo "MimeTypes.xml" que se encuentra en la siguiente carpta de la aplicaci\xf3n 4D: ',(0,t.jsx)(e.em,{children:"[Contents]\\Native components\\HTTPServer.bundle\\Contents\\Resources"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Las referencias a las variables 4D y etiquetas de tipo ",(0,t.jsx)(e.em,{children:"4DSCRIPT"})," en la p\xe1gina siempre se analizan."]}),"\n",(0,t.jsx)(e.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(e.p,{children:["Consulte el ejemplo de la rutina ",(0,t.jsx)(e.a,{href:"/docs/es/20-R8/commands/picture-to-blob",children:"PICTURE TO BLOB"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/es/20-R8/commands/web-send-file",children:"WEB SEND FILE"})}),"\n",(0,t.jsx)(e.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"N\xfamero de comando"}),(0,t.jsx)(e.td,{children:"654"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Hilo seguro"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return r}});var i=s(667294);let t={},d=i.createContext(t);function r(n){let e=i.useContext(d);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);