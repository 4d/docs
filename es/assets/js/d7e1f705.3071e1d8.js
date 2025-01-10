"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72883"],{531600:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>a,assets:()=>t,toc:()=>l,contentTitle:()=>c});var a=JSON.parse('{"id":"commands-legacy/open-url","title":"OPEN URL","description":"OPEN URL ( ruta {; nomAp}{; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-url.md","sourceDirName":"commands-legacy","slug":"/commands/open-url","permalink":"/docs/es/commands/open-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-url.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-url","title":"OPEN URL","slug":"/commands/open-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Monitored activity","permalink":"/docs/es/commands/monitored-activity"},"next":{"title":"PROCESS 4D TAGS","permalink":"/docs/es/commands/process-4d-tags"}}'),s=r("785893"),i=r("250065");let o={id:"open-url",title:"OPEN URL",slug:"/commands/open-url",displayed_sidebar:"docs"},c=void 0,t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OPEN URL"})," ( ",(0,s.jsx)(n.em,{children:"ruta"})," {; ",(0,s.jsx)(n.em,{children:"nomAp"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ruta"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Ruta del documento o URL a abrir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomAp"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre de la aplicaci\xf3n a utilizar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si se especifica = la URL no est\xe1 traducida, Si se omite = la URL est\xe1 traducida"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando OPEN URL abre el archivo o URL pasado en el par\xe1metro ",(0,s.jsx)(n.em,{children:"ruta"})," con la aplicaci\xf3n indicada en ",(0,s.jsx)(n.em,{children:"nomAp"})," (si hay)."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"ruta"})," puede contener bien un URL est\xe1ndar o una ruta de acceso de archivo. El comando acepta dos puntos (':') bajo Mac OS, barras oblicuas ('\\') bajo Windows o un URL Posix que comience por archivo://. Si el par\xe1metro ",(0,s.jsx)(n.em,{children:"nomAp"})," se omite, 4D primero intenta interpretar el par\xe1metro ",(0,s.jsx)(n.em,{children:"ruta"})," como un nombre de ruta de archivo. Si este es el caso, 4D solicitar\xe1 al sistema abrir el archivo utilizando la aplicaci\xf3n m\xe1s apropiada (por ejemplo, un navegador para los archivos .html, Word para los archivos .doc, etc.). El par\xe1metro ",(0,s.jsx)(n.em,{children:"*"})," se ignora en este caso."]}),"\n",(0,s.jsxs)(n.p,{children:["Si el par\xe1metro ",(0,s.jsx)(n.em,{children:"ruta"})," contiene un URL est\xe1ndar (protocolos mailto:, news:, http:, etc.), 4D lanza el navegador web por defecto y accede al URL. Si no hay navegador en los vol\xfamenes conectados al ordenador, el comando no tiene efecto."]}),"\n",(0,s.jsxs)(n.p,{children:["Cuando se pasa el par\xe1metro ",(0,s.jsx)(n.em,{children:"nomAp"})," , el comando interroga al sistema. Si se instala una aplicaci\xf3n con este nombre, que se inicia y el comando le pide que abra la direcci\xf3n URL o el documento especificado.",(0,s.jsx)(n.br,{}),'\nEn Windows, el mecanismo para el reconocimiento del nombre de la aplicaci\xf3n es la misma que el utilizado por el comando "Ejecutar" del men\xfa Inicio. Por ejemplo, podr\xeda pasar:']}),"\n",(0,s.jsxs)(n.p,{children:['"iexplore" para iniciar Internet Explorer.',(0,s.jsx)(n.br,{}),'\n"chrome" para iniciar Chrome (si est\xe1 instalado)',(0,s.jsx)(n.br,{}),'\n"winword" para iniciar MS Word (si est\xe1 instalado)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": encontrar\xe1 la lista de aplicaciones instaladas en el ",(0,s.jsx)(n.em,{children:"registry"})," en la siguiente llave: HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths"]}),"\n",(0,s.jsx)(n.p,{children:"Bajo OS X, el mecanismo utiliza el Finder que indexa autom\xe1ticamente todas las aplicaciones instaladas. Puede reconocer toda aplicaci\xf3n .app por su nombre de package (con o sin el sufijo .app). Por ejemplo, puede pasar:"}),"\n",(0,s.jsxs)(n.p,{children:['"safari"',(0,s.jsx)(n.br,{}),'\n"FireFox"',(0,s.jsx)(n.br,{}),'\n"TextEdit"']}),"\n",(0,s.jsxs)(n.p,{children:["Si la aplicaci\xf3n ",(0,s.jsx)(n.em,{children:"nomAp"})," no se encuentra, ning\xfan error se devuelve; el comando se ejecuta como si el par\xe1metro no hubiera sido especificado."]}),"\n",(0,s.jsxs)(n.p,{children:["4D codifica autom\xe1ticamente los caracteres especiales de la URL. Si pasa el car\xe1cter ",(0,s.jsx)(n.em,{children:"*"}),', 4D no traducir\xe1 los caracteres especiales del URL. Esta opci\xf3n le permite acceder y enviar las URLS de tipo "',(0,s.jsx)(n.em,{children:(0,s.jsx)(n.a,{href:"http://www.server.net/page.htm?q=something",children:"http://www.server.net/page.htm?q=something"})}),'".']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," este comando no funciona cuando se llama desde un proceso web."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Los siguientes ejemplos muestran los diferentes tipos de cadenas que son aceptadas como URLs por el comando:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN URL("http://www.4d.com")\n\xa0OPEN URL("file://C:/Users/Laurent/Documents/pending.htm")\n\xa0OPEN URL("C:\\\\Users\\\\Laurent\\\\Documents\\\\pending.htm")\n\xa0OPEN URL("mailto:jean_martin@4d.fr")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Este ejemplo puede utilizarse para lanzar la aplicaci\xf3n m\xe1s conveniente:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$file:=Select document("";"";0)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0OPEN URL(Document)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["Puede abrir un mismo archivo texto con diferentes aplicaciones utilizando el par\xe1metro ",(0,s.jsx)(n.em,{children:"nomAp"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN URL("C:\\\\temp\\\\cookies.txt")\xa0//abre el archivo con el Bloc de notas\n\xa0OPEN URL("C:\\\\temp\\\\cookies.txt";"winword")\xa0//abre el archivo con MS Word (si est\xe1 instalado)\n\xa0OPEN URL("C:\\\\temp\\\\cookies.txt";"excel")\xa0//abre el archivo con MS Excel (si est\xe1 instalado)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"673"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var a=r(667294);let s={},i=a.createContext(s);function o(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);