"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80248"],{186407:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/web-send-blob","title":"WEB SEND BLOB","description":"WEB SEND BLOB ( blob ; type )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-send-blob.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-blob","permalink":"/docs/fr/commands/web-send-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-send-blob","title":"WEB SEND BLOB","slug":"/commands/web-send-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB LEGACY GET SESSION EXPIRATION","permalink":"/docs/fr/commands/web-legacy-get-session-expiration"},"next":{"title":"WEB SEND FILE","permalink":"/docs/fr/commands/web-send-file"}}'),i=s("785893"),r=s("250065");let d={id:"web-send-blob",title:"WEB SEND BLOB",slug:"/commands/web-send-blob",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(n){let e={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"WEB SEND BLOB"})," ( ",(0,i.jsx)(e.em,{children:"blob"})," ; ",(0,i.jsx)(e.em,{children:"type"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Param\xe8tre"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"blob"}),(0,i.jsx)(e.td,{children:"Blob"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"BLOB \xe0 envoyer au browser"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"type"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"Type de donn\xe9es du BLOB"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["La commande ",(0,i.jsx)(e.strong,{children:"WEB SEND BLOB"})," permet d\u2019envoyer le BLOB ",(0,i.jsx)(e.em,{children:"blob"})," au navigateur."]}),"\n",(0,i.jsxs)(e.p,{children:["Le type de donn\xe9es contenues dans le BLOB est indiqu\xe9 par le param\xe8tre ",(0,i.jsx)(e.em,{children:"type"}),". Ce param\xe8tre peut contenir les valeurs suivantes :"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"type"})," = ",(0,i.jsx)(e.strong,{children:"Cha\xeene vide"}),' ("") : dans ce cas, vous ne fournissez aucune information sur le BLOB. Le navigateur tentera alors d\u2019interpr\xe9ter lui-m\xeame le contenu du BLOB.']}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"type"})," = ",(0,i.jsx)(e.strong,{children:"Extension de fichier"})," (ex. : \u201C.HTM\u201D, \u201C.GIF\u201D, \u201C.JPEG\u201D, etc.) : dans ce cas, vous fournissez au navigateur, par l\u2019interm\xe9diaire de son extension, le type MIME des donn\xe9es contenues dans le BLOB. Le BLOB sera interpr\xe9t\xe9 en fonction de cette extension. Toutefois, l\u2019extension doit \xeatre standard afin que le navigateur puisse l\u2019interpr\xe9ter correctement. Une liste des types MIME les plus courants et de leurs extensions est fournie ci-dessous."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"type"})," = ",(0,i.jsx)(e.strong,{children:"Mime/Type"})," (ex. : \u201Ctext/html\u201D, \u201Cimage/tiff\u201D, etc.) : dans ce cas, vous fournissez directement au navigateur le type MIME des donn\xe9es contenues dans le BLOB. Cette solution est celle qui vous offre le plus de latitude. En effet, outre les types standard, vous pouvez passer un type MIME personnalis\xe9 pour envoyer des documents propri\xe9taires en Intranet. Il vous suffit pour cela de configurer les navigateurs afin qu\u2019ils reconnaissent le type envoy\xe9 et, par exemple, ex\xe9cutent l\u2019application correspondante. La valeur \xe0 passer dans le param\xe8tre ",(0,i.jsx)(e.em,{children:"type"})," est, dans ce cas \u201Capplication/x-[NomDuType]\u201D). Dans les navigateurs des postes clients, vous r\xe9f\xe9rencez ce type et lui associez l\u2019action \u201CEx\xe9cuter l\u2019application\u201D. La commande ",(0,i.jsx)(e.strong,{children:"WEB SEND BLOB"})," vous permet alors d\u2019envoyer des documents de tout type, les clients Intranet ouvrant automatiquement l\u2019application associ\xe9e.",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.strong,{children:"Note :"})," Pour plus d'informations sur les types MIME, reportez-vous \xe0 la page ",(0,i.jsx)(e.a,{href:"http://www.iana.org/assignments/media-types",children:"http://www.iana.org/assignments/media-types"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Voici une liste des types MIME les plus courants :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Extension"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"Mime/Type"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".htm"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".html"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".shtml"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".shtm"}),(0,i.jsx)(e.td,{children:"text/html"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".css"}),(0,i.jsx)(e.td,{children:"text/css"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".pdf"}),(0,i.jsx)(e.td,{children:"application/pdf"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".rtf"}),(0,i.jsx)(e.td,{children:"application/rtf"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".ps"}),(0,i.jsx)(e.td,{children:"application/postscript"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".eps"}),(0,i.jsx)(e.td,{children:"application/postscript"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".hqx"}),(0,i.jsx)(e.td,{children:"application/mac-binhex40"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".js"}),(0,i.jsx)(e.td,{children:"application/javascript"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".json"}),(0,i.jsx)(e.td,{children:"application/json"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".txt"}),(0,i.jsx)(e.td,{children:"text/plain"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".text"}),(0,i.jsx)(e.td,{children:"text/plain"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".gif"}),(0,i.jsx)(e.td,{children:"image/gif"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".jpg"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".jpeg"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".jpe"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".jfif"}),(0,i.jsx)(e.td,{children:"image/jpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".pic"}),(0,i.jsx)(e.td,{children:"image/pict"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".pict"}),(0,i.jsx)(e.td,{children:"image/pict"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".tif"}),(0,i.jsx)(e.td,{children:"image/tiff"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".tiff"}),(0,i.jsx)(e.td,{children:"image/tiff"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".mpeg"}),(0,i.jsx)(e.td,{children:"video/mpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".mpg"}),(0,i.jsx)(e.td,{children:"video/mpeg"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".mov"}),(0,i.jsx)(e.td,{children:"video/quicktime"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".moov"}),(0,i.jsx)(e.td,{children:"video/quicktime"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".aif"}),(0,i.jsx)(e.td,{children:"audio/aiff"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".aiff"}),(0,i.jsx)(e.td,{children:"audio/aiff"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".wav"}),(0,i.jsx)(e.td,{children:"audio/wav"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".ram"}),(0,i.jsx)(e.td,{children:"audio/x-pn-realaudio"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".sit"}),(0,i.jsx)(e.td,{children:"application/x-stuffit"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".bin"}),(0,i.jsx)(e.td,{children:"application/x-stuffit"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".xml"}),(0,i.jsx)(e.td,{children:"application/xml"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".z"}),(0,i.jsx)(e.td,{children:"application/x-zip"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".zip"}),(0,i.jsx)(e.td,{children:"application/x-zip"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".gz"}),(0,i.jsx)(e.td,{children:"application/x-gzip"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:".tar"}),(0,i.jsx)(e.td,{children:"application/x-tar"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Note :"}),' La liste des types MIME pris en charge par le serveur HTTP de 4D est stock\xe9e dans le fichier "MimeTypes.xml" situ\xe9 dans le dossier suivant de l\'application 4D : ',(0,i.jsx)(e.em,{children:"[Contents]\\Native components\\HTTPServer.bundle\\Contents\\Resources"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Les \xe9ventuelles r\xe9f\xe9rences aux variables 4D et balises de type ",(0,i.jsx)(e.em,{children:"4DSCRIPT"})," dans la page sont toujours analys\xe9es."]}),"\n",(0,i.jsx)(e.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(e.p,{children:["Reportez-vous \xe0 l\u2019exemple de la routine ",(0,i.jsx)(e.a,{href:"/docs/fr/commands/picture-to-blob",children:"PICTURE TO BLOB"}),"."]}),"\n",(0,i.jsx)(e.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"/docs/fr/commands/web-send-file",children:"WEB SEND FILE"})}),"\n",(0,i.jsx)(e.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(e.td,{children:"654"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Thread safe"}),(0,i.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);