"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86079"],{66587:function(e,a,s){s.r(a),s.d(a,{default:()=>m,frontMatter:()=>i,metadata:()=>n,assets:()=>o,toc:()=>t,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/open-settings-window","title":"OPEN SETTINGS WINDOW","description":"OPEN SETTINGS WINDOW ( selector {; acceso {; tipoParam}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-settings-window.md","sourceDirName":"commands-legacy","slug":"/commands/open-settings-window","permalink":"/docs/es/commands/open-settings-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-settings-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-settings-window","title":"OPEN SETTINGS WINDOW","slug":"/commands/open-settings-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN SECURITY CENTER","permalink":"/docs/es/commands/open-security-center"},"next":{"title":"PLUGIN LIST","permalink":"/docs/es/commands/plugin-list"}}'),r=s("785893"),d=s("250065");let i={id:"open-settings-window",title:"OPEN SETTINGS WINDOW",slug:"/commands/open-settings-window",displayed_sidebar:"docs"},l=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Llaves de rutas (modo est\xe1ndar)",id:"llaves-de-rutas-modo-est\xe1ndar",level:5},{value:"Llaves de rutas (modo Propiedades Usuario)",id:"llaves-de-rutas-modo-propiedades-usuario",level:5},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let a={br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"OPEN SETTINGS WINDOW"})," ( ",(0,r.jsx)(a.em,{children:"selector"})," {; ",(0,r.jsx)(a.em,{children:"acceso"})," {; ",(0,r.jsx)(a.em,{children:"tipoParam"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe1metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"selector"}),(0,r.jsx)(a.td,{children:"Text"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Llave que designa un tema o p\xe1gina o un grupo de par\xe1metros de la caja de di\xe1logo Preferencias"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"acceso"}),(0,r.jsx)(a.td,{children:"Boolean"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"True=Bloquear las otras p\xe1ginas de la caja de di\xe1logo, False o si se omite=Dejar activas las otras p\xe1ginas de la caja de di\xe1logo"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"tipoParam"}),(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"0 o si se omite = Par\xe1metros de estructura, 1 = Par\xe1metros de usuario, 2 = Configuraci\xf3n usuario para archivo de datos"})]})]})]}),"\n",(0,r.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:["El comando ",(0,r.jsx)(a.strong,{children:"OPEN SETTINGS WINDOW"})," abre la caja de di\xe1logo de Preferencias 4D o las Propiedades de la base actual y muestra los par\xe1metros o la p\xe1gina correspondiente a la llave pasada en el par\xe1metro ",(0,r.jsx)(a.em,{children:"selector"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["El par\xe1metro ",(0,r.jsx)(a.em,{children:"selector"})," debe contener una llave indicando la caja de di\xe1logo y la p\xe1gina a abrir. Esta llave se crea de esta forma: ",(0,r.jsx)(a.em,{children:"/Dialogo{/Pagina{/Parametros}}"}),". ",(0,r.jsx)(a.em,{children:"Di\xe1logo"}),' indica la caja de di\xe1logo a mostrar: puede pasar "4D" (para las Preferencias) o "Database" (Propiedades de la base). Por ejemplo, para indicar la p\xe1gina Compilador de las Propiedades de la base, ',(0,r.jsx)(a.em,{children:"selector"}),' debe contener "',(0,r.jsx)(a.em,{children:"/Database/Compiler"}),'". La lista de llave que puede utilizar se ofrece a continuaci\xf3n. Si pasa una barra oblicua ("/") en ',(0,r.jsx)(a.em,{children:"selector"}),", el comando muestra la primera p\xe1gina de la caja de di\xe1logo de las Propiedades de la base."]}),"\n",(0,r.jsxs)(a.p,{children:["El par\xe1metro ",(0,r.jsx)(a.em,{children:"acceso"})," le permite controlar las acciones del usuario en la caja de di\xe1logo de Preferencias o de las Propiedades de la base bloqueando las otras p\xe1ginas. Usted podr\xeda querer que el usuario pueda personalizar algunos par\xe1metros pero evitar que otros puedan modificarse. En este caso, pasar True en el par\xe1metro ",(0,r.jsx)(a.em,{children:"acceso"})," significa que s\xf3lo la p\xe1gina especificada por el par\xe1metro ",(0,r.jsx)(a.em,{children:"selector"})," estar\xe1 activa y modificable, mientras que el acceso a todas las otras p\xe1ginas estar\xe1 bloqueado (hacer clic en los botones de la barra de navegaci\xf3n no tendr\xe1 ning\xfan efecto). Si pasa False u omite el par\xe1metro ",(0,r.jsx)(a.em,{children:"acceso"}),", todas las p\xe1ginas de la caja de di\xe1logo ser\xe1n accesibles sin restricci\xf3n."]}),"\n",(0,r.jsxs)(a.p,{children:["El par\xe1metro ",(0,r.jsx)(a.em,{children:"tipoPropiedades"}),' se tiene en cuenta en las bases configuradas en modo "Propiedades usuario" \xfanicamente (en este modo, las "Propiedades usuario" personalizadas o "Propiedades usuario para el archivo de datos" se generan en un archivo externo y son utilizadas en lugar de las propiedades est\xe1ndar, ver la secci\xf3n ',(0,r.jsx)(a.em,{children:"Utilizar las propiedades usuario"})," en el manual de ",(0,r.jsx)(a.em,{children:"Dise\xf1o"}),'). En este contexto, este par\xe1metro le permite indicar si quiere acceder a la caja de di\xe1logo de las "Propiedades de estructura", "Propiedades usuario", "Propiedades usuario para el archivo de datos". Puede pasar una de las siguientes constantes, del tema "',(0,r.jsx)(a.em,{children:"Entorno 4D"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Constante"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{children:"Valor"}),(0,r.jsx)(a.th,{children:"Comentario"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Structure settings"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"0"}),(0,r.jsxs)(a.td,{children:['Acceso a las "propiedades estructura" (valor por defecto si el par\xe1metro se omite). En este modo, los valores de ',(0,r.jsx)(a.em,{children:"selector"})," utilizables son id\xe9nticos a los del modo est\xe1ndar.",(0,r.jsx)(a.em,{children:(0,r.jsx)(a.br,{})})]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"User settings"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"1"}),(0,r.jsxs)(a.td,{children:['Acceso a las "propiedades usuario". En este modo, s\xf3lo ciertas llaves son utilizables en el par\xe1metro ',(0,r.jsx)(a.em,{children:"selector"}),".",(0,r.jsx)(a.em,{children:(0,r.jsx)(a.br,{})})]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"User settings for data"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"2"}),(0,r.jsxs)(a.td,{children:['Acceso a "Configuraci\xf3n usuario para archivo de datos, que es, configuraci\xf3n usuario almacenada en el mismo nivel que el archivo de datos. En este modo, s\xf3lo ciertas llaves se pueden utilizar con el par\xe1metro ',(0,r.jsx)(a.em,{children:"selector"})," (mismo subconjunto que la configuraci\xf3n usuario)"]})]})]})]}),"\n",(0,r.jsx)(a.p,{children:"Si pasa una llave invalida, se muestra la primera p\xe1gina de la caja de di\xe1logo de Propiedades de la base."}),"\n",(0,r.jsx)(a.h5,{id:"llaves-de-rutas-modo-est\xe1ndar",children:"Llaves de rutas (modo est\xe1ndar)"}),"\n",(0,r.jsxs)(a.p,{children:["La siguiente es una lista de llaves que puede utilizarse en el par\xe1metro ",(0,r.jsx)(a.em,{children:"selector"}),' en modo est\xe1ndar, es decir con las "propiedades estructura":']}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.em,{children:"/4D"}),"\n",(0,r.jsx)(a.em,{children:"/4D/General"}),"\n",(0,r.jsx)(a.em,{children:"/4D/Structure"}),"\n",(0,r.jsx)(a.em,{children:"/4D/Form editor"}),"\n",(0,r.jsx)(a.em,{children:"/4D/Method editor"}),"\n",(0,r.jsx)(a.em,{children:"/4D/Shortcuts"}),"\n",(0,r.jsx)(a.em,{children:"/Database"}),"\n",(0,r.jsx)(a.em,{children:"/Database/General"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Mover"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Interface"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Interface/Developper"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Interface/User"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Interface/Shortcuts"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Compiler"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Database"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Database/Data storage"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Database/Memory and cpu"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Database/International"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Backup"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Backup/Scheduler"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Backup/Configuration"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Backup/Backup and restore"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Client-Server"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Client-Server/Network"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Client-Server/IP configuration"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web/Config"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web/Options 1"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web/Options 2"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web/Log format"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web/Log scheduler"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web/Webservices"}),"\n",(0,r.jsx)(a.em,{children:"/Database/SQL"}),"\n",(0,r.jsx)(a.em,{children:"/Database/php"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Compatibility"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Security"})]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota de compatibilidad:"})," el comando contin\xfaa funcionando con las llaves definidas para las versiones 11; la correspondencia es establecida autom\xe1ticamente por 4D. Sin embargo se recomienda reemplazar las llamadas antiguas por las llaves descritas anteriormente."]}),"\n",(0,r.jsx)(a.h5,{id:"llaves-de-rutas-modo-propiedades-usuario",children:"Llaves de rutas (modo Propiedades Usuario)"}),"\n",(0,r.jsxs)(a.p,{children:["Estas son las llaves que se pueden utilizar en el par\xe1metro ",(0,r.jsx)(a.em,{children:"selector"}),' en los modos "Propiedades usuario" y "Propiedades usuario para archivo de datos":']}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.em,{children:"/Database"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Interface"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Database/Memory and cpu"}),"\n*",(0,r.jsx)(a.em,{children:"/Database/Client-Server"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Client-Server/Network"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Client-Server/IP configuration"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web/Config"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web/Options 1"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web/Options 2"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web/Log format"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web/Log scheduler"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Web/Webservices"}),"\n",(0,r.jsx)(a.em,{children:"/Database/SQL"}),"\n",(0,r.jsx)(a.em,{children:"/Database/php"})]}),"\n",(0,r.jsx)(a.p,{children:'Llaves adicionales en modo "Propiedades usuario para archivo de datos":'}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.em,{children:"/Database/Backup"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Backup/Scheduler"})," ",(0,r.jsx)(a.em,{children:"/Database/Backup/Configuration"}),"\n",(0,r.jsx)(a.em,{children:"/Database/Backup/Backup and restore"})]}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(a.p,{children:"Apertura de la p\xe1gina \u201CM\xe9todos\u201D de las Preferencias 4D\u201D:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0OPEN SETTINGS WINDOW("/4D/Method editor")\n'})}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(a.p,{children:"Acceso a los par\xe1metros de los atajos de teclado en las Propiedades de la base con bloqueo de otras propiedades:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0OPEN SETTINGS WINDOW("/Database/Interface/Shortcuts";True)\n'})}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(a.p,{children:"Apertura de las Propiedades de la base en la primera p\xe1gina:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0OPEN SETTINGS WINDOW("/")\n'})}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,r.jsx)(a.p,{children:'Acceso a la p\xe1gina interfaz de las Propiedades de la base en modo "Propiedades usuario":'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0OPEN SETTINGS WINDOW("/Database/Interface";False;1)\n'})}),"\n",(0,r.jsx)(a.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(a.p,{children:"Si la caja de di\xe1logo Preferencias/Propiedades se valida, la variable sistema OK devuelve 1; si se anula, OK devuelve 0."}),"\n",(0,r.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"N\xfamero de comando"}),(0,r.jsx)(a.td,{children:"903"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Hilo seguro"}),(0,r.jsx)(a.td,{children:"\u2717"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Modifica variables"}),(0,r.jsx)(a.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,d.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,a,s){s.d(a,{Z:function(){return l},a:function(){return i}});var n=s(667294);let r={},d=n.createContext(r);function i(e){let a=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);