"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41766"],{719438:function(e,r,n){n.r(r),n.d(r,{metadata:()=>o,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>i});var o=JSON.parse('{"id":"commands-legacy/throw","title":"throw","description":"throw ( errorCode {; descripcion} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/throw.md","sourceDirName":"commands-legacy","slug":"/commands/throw","permalink":"/docs/es/commands/throw","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fthrow.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"throw","title":"throw","slug":"/commands/throw","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET ASSERT ENABLED","permalink":"/docs/es/commands/set-assert-enabled"},"next":{"title":"JSON","permalink":"/docs/es/category/json"}}'),s=n("785893"),d=n("250065");let i={id:"throw",title:"throw",slug:"/commands/throw",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"<strong>throw(errorCode{; description})</strong>",id:"throwerrorcode-description",level:5},{value:"<strong>throw(errorObj)</strong>",id:"throwerrorobj",level:5},{value:"<strong>throw</strong>",id:"throw",level:5},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ejemplo 6",id:"ejemplo-6",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"throw"})," ( ",(0,s.jsx)(r.em,{children:"errorCode"})," {; ",(0,s.jsx)(r.em,{children:"descripcion"}),"} )\xa0",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.em,{children:"throw"})," {( ",(0,s.jsx)(r.em,{children:"errorObj"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe1metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"errorCode"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Un entero largo que representa el c\xf3digo de error."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"descripcion"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Texto que describe el error."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"throw {( errorObj )}"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Par\xe1metro"}),(0,s.jsx)(r.td,{children:"Tipo"}),(0,s.jsx)(r.td,{children:"Descripci\xf3n"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"errorObj"}),(0,s.jsx)(r.td,{children:"Object"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Un objeto que contiene propiedades para construir el error"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(r.p,{children:["El comando ",(0,s.jsx)(r.strong,{children:"throw"})," crea un error que ser\xe1 lanzado inmediatamente o cuando el m\xe9todo que lo llama devuelva a su llamador (modo diferido)."]}),"\n",(0,s.jsx)(r.p,{children:"Cuando se encuentre con una situaci\xf3n en su c\xf3digo 4D en la que surja una condici\xf3n de error, puede utilizar el comando throw para lanzar expl\xedcitamente un error y dar un mensaje de error espec\xedfico o un n\xfamero de error. Esto puede ser \xfatil para se\xf1alar condiciones excepcionales o entradas inv\xe1lidas."}),"\n",(0,s.jsxs)(r.p,{children:["Los errores lanzados utilizando el comando ",(0,s.jsx)(r.strong,{children:"throw"})," son gestionados por el runtime de 4D como cualquier error normal: se muestra el di\xe1logo de error est\xe1ndar a menos que se haya instalado un m\xe9todo de intercepci\xf3n utilizando el comando ",(0,s.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"El comando admite tres sintaxis:"}),"\n",(0,s.jsx)(r.h5,{id:"throwerrorcode-description",children:(0,s.jsx)(r.strong,{children:"throw(errorCode{; description})"})}),"\n",(0,s.jsxs)(r.p,{children:["Especifica el c\xf3digo de error y un texto de descripci\xf3n opcional, el error se lanza inmediatamente.",(0,s.jsx)(r.br,{}),"\nSi no se indica ninguna descripci\xf3n: se llena con:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"C\xf3digo de error (errorCode): (host) en la aplicaci\xf3n local"}),"\n",(0,s.jsx)(r.li,{children:"C\xf3digo de error (errorCode): (C00x) en un componente"}),"\n"]}),"\n",(0,s.jsx)(r.h5,{id:"throwerrorobj",children:(0,s.jsx)(r.strong,{children:"throw(errorObj)"})}),"\n",(0,s.jsxs)(r.p,{children:["El objeto ",(0,s.jsx)(r.em,{children:"errorObj"})," permite obtener informaci\xf3n de error m\xe1s detallada y controlar la gesti\xf3n de errores. Puede contener las siguientes propiedades, as\xed como toda propiedad personalizada a la que pueda hacer referencia la propiedad ",(0,s.jsx)(r.strong,{children:"message"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Puede contener las siguientes propiedades, as\xed como toda propiedad personalizada a la que pueda hacer referencia utilizando marcadores de posici\xf3n dentro de la propiedad message."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"propiedad"})}),(0,s.jsx)(r.th,{children:(0,s.jsxs)(r.strong,{children:["tipo",(0,s.jsx)(r.br,{})]})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"descripci\xf3n"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"componentSignature"}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsxs)(r.td,{children:["Firma de cuatro letras latinas para identificar de forma \xfanica el origen del error. Si no se indica ",(0,s.jsx)(r.strong,{children:"componentSignature"}),', el comando utiliza "host" para la base de datos host, y "C001", "C002", ... para los componentes.']})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"errCode"}),(0,s.jsx)(r.td,{children:"number"}),(0,s.jsxs)(r.td,{children:["C\xf3digo de error.",(0,s.jsx)(r.br,{})," Si no se indica el ",(0,s.jsx)(r.strong,{children:"errCode"}),", el comando utiliza -1."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"message"}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsxs)(r.td,{children:["Descripci\xf3n del error.",(0,s.jsx)(r.br,{})," El ",(0,s.jsx)(r.strong,{children:"mensaje"})," puede contener marcadores de posici\xf3n que ser\xe1n sustituidos por propiedades personalizadas a\xf1adidas al objeto errorObj. Cada marcador de posici\xf3n debe especificarse utilizando llaves {} encerrando el nombre de la propiedad a utilizar. Si el ",(0,s.jsx)(r.strong,{children:"mensaje"}),' no se indica o es una cadena vac\xeda, el comando buscar\xe1 una descripci\xf3n en los archivos xliff de la base de datos actual con un renombre construido as\xed: ERR_{component}_{code}".']})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"deferred"}),(0,s.jsx)(r.td,{children:"boolean"}),(0,s.jsxs)(r.td,{children:["True si el error debe diferirse cuando vuelva al m\xe9todo actual o al final del ",(0,s.jsx)(r.a,{href:"developer.4d.com/docs/Concepts/error-handling#trycatchend-try",children:"Try block"}),". El valor por defecto es false."]})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Cuando se utiliza esta sintaxis, el objeto ",(0,s.jsx)(r.em,{children:"errorObj"})," se devuelve en \xdaltimos errores."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota:"})," es posible llamar al comando varias veces en el mismo m\xe9todo proyecto para generar varios errores. Puede utilizar la opci\xf3n diferido para enviar todos los errores a la vez."]}),"\n",(0,s.jsx)(r.h5,{id:"throw",children:(0,s.jsx)(r.strong,{children:"throw"})}),"\n",(0,s.jsxs)(r.p,{children:["Lanza todos los errores actuales en ",(0,s.jsx)(r.strong,{children:"modo diferido"}),", lo que significa que se a\xf1adir\xe1n a una pila y se gestionar\xe1n cuando vuelva el m\xe9todo que los llama. Esto se hace t\xedpicamente desde dentro de una retrollamada ",(0,s.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"En una aplicaci\xf3n"}),": cuando se produce un error, se a\xf1ade a la pila de errores y se llama al m\xe9todo ",(0,s.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"})," de la aplicaci\xf3n al final del m\xe9todo actual. La funci\xf3n ",(0,s.jsx)(r.a,{href:"/docs/es/commands/last-errors",children:"Last errors"})," devuelve la pila de errores."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Como consecuencia, en un componente:"})," la pila de errores se puede enviar a la aplicaci\xf3n local y se llama al m\xe9todo ",(0,s.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"})," de la aplicaci\xf3n local."]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0var $code : Integer\n\xa0var $description : text\n\xa0$code:=50042\xa0//C\xf3digo personalizado\n\xa0$description:=\u201CThis is a custom error\u201D\n\xa0throw($code ;$description)\xa0//\xa0 Lanza un error con el mensaje "This is a custom error" y errCode = 50042\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'throw({errCode: 1; message: "This an error"}) // Lanza un error con el mensaje errCode = 1 y mensaje "This an error"\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'throw({errCode: 1}) // Lanza un error con errCode = 1 y el mensaje "Error code: 1 (host)"\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'throw({message: "This an error"}) //\xa0Lanza un error con errCode = -1 y el mensaje "This is my error"\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'throw({message: "This is my error"; deferred: True}) // Lanza un error con el mensaje "This is my error" y errCode = -1 en modo diferido\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'throw({componentSignature: "xbox"; errCode: 600; name: "myFileName"; path: "myFilePath"; deferred: True})// Lanza un error con el mensaje "File myFileName not found (myFilePath)" en modo diferido.\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/es/commands/assert",children:"ASSERT"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/es/commands/last-errors",children:"Last errors"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"})]}),"\n",(0,s.jsx)(r.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero de comando"}),(0,s.jsx)(r.td,{children:"1805"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Hilo seguro"}),(0,s.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return i}});var o=n(667294);let s={},d=o.createContext(s);function i(e){let r=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(d.Provider,{value:r},e.children)}}}]);