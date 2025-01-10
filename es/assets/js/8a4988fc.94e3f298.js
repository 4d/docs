"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16665"],{696442:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/web-get-http-body","title":"WEB GET HTTP BODY","description":"WEB GET HTTP BODY ( cuerpo )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-http-body.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-http-body","permalink":"/docs/es/commands/web-get-http-body","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-http-body.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-get-http-body","title":"WEB GET HTTP BODY","slug":"/commands/web-get-http-body","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Get Current Session ID","permalink":"/docs/es/commands/web-get-current-session-id"},"next":{"title":"WEB GET HTTP HEADER","permalink":"/docs/es/commands/web-get-http-header"}}'),d=t("785893"),o=t("250065");let i={id:"web-get-http-body",title:"WEB GET HTTP BODY",slug:"/commands/web-get-http-body",displayed_sidebar:"docs"},r=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WEB GET HTTP BODY"})," ( ",(0,d.jsx)(n.em,{children:"cuerpo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"cuerpo"}),(0,d.jsx)(n.td,{children:"Blob, Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Cuerpo (Body) de la petici\xf3n HTTP"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"WEB GET HTTP BODY"})," devuelve el cuerpo de la solicitud HTTP que esta siendo procesada. El cuerpo HTTP se devuelve tal cual, sin proceso ni an\xe1lisis."]}),"\n",(0,d.jsxs)(n.p,{children:["Este comando puede llamarse utilizando un m\xe9todo de base web (",(0,d.jsx)(n.em,{children:"M\xe9todo de base On Web Authentication"}),", ",(0,d.jsx)(n.a,{href:"/docs/es/commands/qr-set-destination",children:"QR SET DESTINATION"}),") o todo m\xe9todo web."]}),"\n",(0,d.jsxs)(n.p,{children:["Puede pasar en el par\xe1metro ",(0,d.jsx)(n.em,{children:"cuerpo"}),", una variable o un campo de tipo BLOB o Texto. El tipo Texto, por lo general ser\xe1 suficiente (el par\xe1metro ",(0,d.jsx)(n.em,{children:"cuerpo"})," puede recibir hasta 2GB de texto)"]}),"\n",(0,d.jsx)(n.p,{children:"Este comando permite por ejemplo efectuar las b\xfasquedas en el cuerpo de las solicitudes. Tambi\xe9n permite a los usuarios avanzados configurar un servidor WebDAV dentro de una base 4D."}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"En este ejemplo, una solicitud simple se env\xeda al servidor web de 4D y el contenido del campo HTTP cuerpo se visualiza en el depurador. Este es el formulario enviado al servidor web de 4D, as\xed como tambi\xe9n el c\xf3digo HTML correspondiente:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(772607).Z+"",width:"943",height:"337"})}),"\n",(0,d.jsx)(n.p,{children:"Este es el m\xe9todo Test4D2004:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $peticion : Blob\n\xa0var $textoPeticion : Text\n\xa0\n\xa0WEB GET HTTP BODY($peticion)\n\xa0$textoSolicitud:=BLOB to text($peticion;UTF8 text without length)\n\xa0WEB SEND FILE("pagina.html")\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," este m\xe9todo se declara \u201CDisponible v\xeda las etiquetas HTML y los URLs 4D (4DACTION...)\u201D en sus propiedades."]}),"\n",(0,d.jsx)(n.p,{children:"Cuando el formulario se envia al servidor web, la variable $textoSolicitud recibe el texto del campo cuerpo de la petici\xf3n HTTP."}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/web-get-body-part",children:"WEB GET BODY PART"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/web-get-http-header",children:"WEB GET HTTP HEADER"})]}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"814"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},772607:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict38463.es-411f7e913fb26213dddda3fb4e4a3967.png"},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let d={},o=s.createContext(d);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);