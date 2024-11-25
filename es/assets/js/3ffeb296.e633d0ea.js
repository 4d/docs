"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51457"],{450409:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>t,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/set-channel","title":"SET CHANNEL","description":"SET CHANNEL ( puerto ; param )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-channel.md","sourceDirName":"commands-legacy","slug":"/commands/set-channel","permalink":"/docs/es/commands/set-channel","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-channel.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-channel","title":"SET CHANNEL","slug":"/commands/set-channel","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND VARIABLE","permalink":"/docs/es/commands/send-variable"},"next":{"title":"SET TIMEOUT","permalink":"/docs/es/commands/set-timeout"}}'),d=s("785893"),o=s("250065");let i={id:"set-channel",title:"SET CHANNEL",slug:"/commands/set-channel",displayed_sidebar:"docs"},c=void 0,a={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Trabajar con los puertos seriales - SET CHANNEL (puerto;parametros)",id:"trabajar-con-los-puertos-seriales---set-channel-puertoparametros",level:4},{value:"Nota sobre los puertos seriales",id:"nota-sobre-los-puertos-seriales",level:5},{value:"Ejemplo 1",id:"ejemplo-1",level:5},{value:"Ejemplo 2",id:"ejemplo-2",level:5},{value:"Ejemplo 3",id:"ejemplo-3",level:5},{value:"Trabajar con documentos en disco - SET CHANNEL(operacion;documento)",id:"trabajar-con-documentos-en-disco---set-channeloperaciondocumento",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:5},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," ( ",(0,d.jsx)(n.em,{children:"puerto"})," ; ",(0,d.jsx)(n.em,{children:"param"})," )\xa0",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," ( ",(0,d.jsx)(n.em,{children:"operacion"})," ; ",(0,d.jsx)(n.em,{children:"doc"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"puerto"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de puerto serial"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"param"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Par\xe1metros de puerto serial"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SET CHANNEL ( operacion ; doc )"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Par\xe1metro"}),(0,d.jsx)(n.td,{children:"Tipo"}),(0,d.jsx)(n.td,{children:"Descripci\xf3n"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"operacion"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Operaci\xf3n a efectuar en el documento"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"doc"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nombre del documento"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsx)(n.p,{children:"El comando SET CHANNEL abre un puerto serial o un documento. S\xf3lo puede abrir un puerto serial o un documento al tiempo con este comando. Para cerrar un puerto serial abierto, pase SET CHANNEL (11)."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota hist\xf3rica:"})," este comando fue originalmente el primer comando 4D utilizado para trabajar con puertos seriales y documentos en discos. Desde entonces, se han a\xf1adido nuevos comandos. Hoy en d\xeda, se trabaja generalmente con documentos en disco utilizando los comandos ",(0,d.jsx)(n.a,{href:"/docs/es/commands/open-document",title:"Open document",children:"Open document"}),", ",(0,d.jsx)(n.a,{href:"/docs/es/commands/create-document",title:"Create document",children:"Create document"})," y ",(0,d.jsx)(n.a,{href:"/docs/es/commands/append-document",title:"Append document",children:"Append document"}),". Con estos comandos, puede leer y escribir caracteres en los documentos utilizando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/send-packet",title:"SEND PACKET",children:"SEND PACKET"})," o ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-packet",title:"RECEIVE PACKET",children:"RECEIVE PACKET"})," (estos comandos trabajan tambi\xe9n con SET CHANNEL). Sin embargo, si quiere utilizar los comandos ",(0,d.jsx)(n.a,{href:"/docs/es/commands/send-variable",title:"SEND VARIABLE",children:"SEND VARIABLE"}),", ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"}),", ",(0,d.jsx)(n.a,{href:"/docs/es/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"})," y ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),", debe utilizar SET CHANNEL para acceder a los documentos en el disco."]}),"\n",(0,d.jsx)(n.p,{children:"La descripci\xf3n de SET CHANNEL est\xe1 compuesta de dos secciones:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Trabajar con los puertos seriales"}),"\n",(0,d.jsx)(n.li,{children:"Trabajar con documentos"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"trabajar-con-los-puertos-seriales---set-channel-puertoparametros",children:"Trabajar con los puertos seriales - SET CHANNEL (puerto;parametros)"}),"\n",(0,d.jsxs)(n.p,{children:["La primera forma del comando SET CHANNEL abre un puerto serial, define el protocolo de comunicaci\xf3n as\xed como otra informaci\xf3n del puerto. Los datos pueden ser enviados por los comandos ",(0,d.jsx)(n.a,{href:"/docs/es/commands/send-packet",title:"SEND PACKET",children:"SEND PACKET"}),", ",(0,d.jsx)(n.a,{href:"/docs/es/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"})," o ",(0,d.jsx)(n.a,{href:"/docs/es/commands/send-variable",title:"SEND VARIABLE",children:"SEND VARIABLE"}),", y recibidos con ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-buffer",title:"RECEIVE BUFFER",children:"RECEIVE BUFFER"}),", ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-packet",title:"RECEIVE PACKET",children:"RECEIVE PACKET"}),", ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"})," o ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"}),"."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["El primer par\xe1metro, ",(0,d.jsx)(n.em,{children:"puerto"}),", selecciona el puerto y el protocolo. Puede direccionar hasta 99 puertos seriales (uno a la vez). La siguiente tabla lista los valores para ",(0,d.jsx)(n.em,{children:"puerto"}),":"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Valores puerto"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Descripci\xf3n"})}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Puerto impresora (Macintosh) o COM2 (PC) sin protocolo"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Puerto modem (Macintosh) o COM1 (PC) sin protocolo"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"20"}),(0,d.jsx)(n.td,{children:"Puerto impresora (Macintosh) o COM2 (PC) con protocolo de sofware tal"}),(0,d.jsx)(n.td,{children:"como XON/XOFF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"21"}),(0,d.jsx)(n.td,{children:"Puerto modem (Macintosh) o COM1 (PC) con protocolo de sofware tal como XON/XOFF"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"30"}),(0,d.jsx)(n.td,{children:"Puerto impresora (Macintosh) o COM2 (PC) con protocolo de hardware tal como RTS/CTS"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"31"}),(0,d.jsx)(n.td,{children:"Puerto modem (Macintosh) o COM1 (PC) con protocolo de hardware tal como RTS/CTS"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"101 a 199"}),(0,d.jsx)(n.td,{children:"Comunicaci\xf3n serial sin protocolo"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"201 a 299"}),(0,d.jsx)(n.td,{children:"Comunicaci\xf3n serial con protocolo de software tal como XON/XOFF"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"301 a 399"}),(0,d.jsx)(n.td,{children:"Comunicaci\xf3n serial con protocolo de hardware tal como RTS/CTS"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Importante:"})," el valor que pasa en ",(0,d.jsx)(n.em,{children:"puerto"})," se refiere a un puerto serial COM existente reconocido por el sistema operativo. Por ejemplo, para que pueda utilizar los valores 101, 103 y 125, los puertos seriales COM1, COM3 y COM25 deben haber sido configurados correctamente."]}),"\n",(0,d.jsx)(n.h5,{id:"nota-sobre-los-puertos-seriales",children:"Nota sobre los puertos seriales"}),"\n",(0,d.jsxs)(n.p,{children:["En una configuraci\xf3n est\xe1ndar, Mac OS y Windows reconocen dos puertos seriales: en Mac OS, el puerto modem y el puerto impresora; en Windows, los puertos COM1 y COM2. Sin embargo, se pueden a\xf1adir puertos seriales adicionales por medio de tableros de extensi\xf3n. Inicialmente, 4D s\xf3lo direccionaba dos puertos seriales est\xe1ndar y m\xe1s adelante se implement\xf3 el soporte de puertos adicionales. Por razones de compatibilidad, se conservan ambos sistemas de direccionamiento.",(0,d.jsx)(n.br,{}),"\n- Si quiere direccionar un puerto serial est\xe1ndar (impresora/COM2 o modem/COM1), puede pasar en el par\xe1metro ",(0,d.jsx)(n.em,{children:"puerto"})," uno de los siguientes valores 0, 1, 20, 21, 30 y 31 (que corresponde al m\xe9todo de direccionamiento antiguo), o un valor mayor a 100 (por favor vea la siguiente explicaci\xf3n).",(0,d.jsx)(n.br,{}),"\n- Si quiere direccionar puertos seriales adicionales, debe pasar el valor N+100 (donde N es el valor del puerto a direccionar). Tambi\xe9n puede considerar a\xf1adir 100 o 200 al valor menciondo anteriormente (N+100), si quiere seleccionar respectivamente un protocolo de software o de hardware."]}),"\n",(0,d.jsx)(n.h5,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,d.jsx)(n.p,{children:"Si quiere utilizar el puerto impresora/COM2 sin protocolo, puede utilizar una de las siguientes sintaxis:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(0;param)\n"})}),"\n",(0,d.jsx)(n.p,{children:"o"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(102;param)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,d.jsx)(n.p,{children:"Si quiere utilizar el puerto modem/COM1 con el protocolo XON/XOFF, puede utilizar una de las siguientes sintaxis:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(21;param)\n"})}),"\n",(0,d.jsx)(n.p,{children:"o"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(201;param)\n"})}),"\n",(0,d.jsx)(n.h5,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,d.jsx)(n.p,{children:"Si quiere utilizar el puerto COM 25 con el protocolo RTS/CTS, debe utilizar las siguientes sintaxis:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(325;param)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 El par\xe1metro ",(0,d.jsx)(n.em,{children:"param"})," fija la velocidad, el n\xfamero de bits de datos, el n\xfamero de bits de stop y la paridad. Puede determinar el valor para los ",(0,d.jsx)(n.em,{children:"param"})," a\xf1adiendo los valores de velocidad, bits de datos, bits de stop y paridad, como se listan en la siguiente tabla. Por ejemplo, para definir 1200 baud, 8 bits de datos, 1 bit de stop y ninguno de paridad, usted sumar\xeda 94 + 3072 + 16384 + 0 = 19550. Entonces pasar\xeda 19550 como el valor del par\xe1metro ",(0,d.jsx)(n.em,{children:"param."})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.th,{children:[(0,d.jsx)(n.strong,{children:"Valor a acumular"})," ",(0,d.jsx)(n.strong,{children:"en param"})]}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Descripci\xf3n"})}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Velocidad"}),(0,d.jsx)(n.td,{children:"380"}),(0,d.jsx)(n.td,{children:"300"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"(en baud)"}),(0,d.jsx)(n.td,{children:"189"}),(0,d.jsx)(n.td,{children:"600"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"94"}),(0,d.jsx)(n.td,{children:"1200"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"62"}),(0,d.jsx)(n.td,{children:"1800"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"46"}),(0,d.jsx)(n.td,{children:"2400"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"30"}),(0,d.jsx)(n.td,{children:"3600"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"22"}),(0,d.jsx)(n.td,{children:"4800"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"14"}),(0,d.jsx)(n.td,{children:"7200"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{children:"9600"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"19200"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"28800"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"38400"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"57600"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1022"}),(0,d.jsx)(n.td,{children:"115200"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1021"}),(0,d.jsx)(n.td,{children:"230400"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bits de datos"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2048"}),(0,d.jsx)(n.td,{children:"6"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1024"}),(0,d.jsx)(n.td,{children:"7"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"3072"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bits de stop"}),(0,d.jsx)(n.td,{children:"16384"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u201332768"}),(0,d.jsx)(n.td,{children:"1.5"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u201316384"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Paridad"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Ninguno"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4096"}),(0,d.jsx)(n.td,{children:"Impar"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"12288"}),(0,d.jsx)(n.td,{children:"Par"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Truco:"})," los diferentes valores num\xe9ricos a acumular y pasar en ",(0,d.jsx)(n.em,{children:"puerto"})," y ",(0,d.jsx)(n.em,{children:"param"})," (a excepci\xf3n de los valores de COM1...COM99) est\xe1n disponibles como constantes predefinidas en el tema Comunicaciones del explorador en el entorno Dise\xf1o. Para los valores COM1...COM99, utilice los valores num\xe9ricos literales."]}),"\n",(0,d.jsx)(n.h4,{id:"trabajar-con-documentos-en-disco---set-channeloperaciondocumento",children:"Trabajar con documentos en disco - SET CHANNEL(operacion;documento)"}),"\n",(0,d.jsx)(n.p,{children:"La segunda forma del comando SET CHANNEL le permite crear, abrir, y cerrar un documento. A diferencia de los comandos del tema Documentos del sistema, SET CHANNEL s\xf3lo puede abrir un documento a la vez. El documento puede leerse o escribirse. Consulte la secci\xf3n  para mayor informaci\xf3n al respecto."}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"operacion"})," especifica la operaci\xf3n a realizar en el documento especificado por ",(0,d.jsx)(n.em,{children:"documento"}),". La siguientes tabla lista los valores de ",(0,d.jsx)(n.em,{children:"operacion"})," y el resultado obtenido, en funci\xf3n del valor de ",(0,d.jsx)(n.em,{children:"documento"}),". La primera columna lista los valores posibles de ",(0,d.jsx)(n.em,{children:"operacion"}),". La segunda columna lista los valores posibles de ",(0,d.jsx)(n.em,{children:"documento"}),". La tercera columna lista la operaci\xf3n resultante."]}),"\n",(0,d.jsx)(n.p,{children:"Por ejemplo, para visualizar una caja de di\xe1logo de abrir un archivo, puede utilizar la siguiente l\xednea:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SET CHANNEL(13;"")\n'})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Operaci\xf3n"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Documento"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Resultado"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{children:"Cadena"}),(0,d.jsx)(n.td,{children:"Abre el documento especificado por Cadena."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Si el documento no existe, se crea y abre el documento."}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{children:'"" (cadena vac\xeda)'}),(0,d.jsx)(n.td,{children:"Muestra la ventana de abrir archivo."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Todos los tipos de archivos se presentan."}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"11"}),(0,d.jsx)(n.td,{children:"ninguno"}),(0,d.jsx)(n.td,{children:"Cierra un archivo abierto."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"12"}),(0,d.jsx)(n.td,{children:'"" (cadena vac\xeda)'}),(0,d.jsx)(n.td,{children:"Muestra la ventana de guardar archivo para crear un nuevo archivo."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"13"}),(0,d.jsx)(n.td,{children:'"" (cadena vac\xeda)'}),(0,d.jsx)(n.td,{children:"Muestra la ventana de abrir archivo. S\xf3lo se presentan los archivos de tipo texto."})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Todas las operaciones en esta tabla modifican la variable sistema Document si es necesario. Igualmente la variable sistema OK toma el valor 1 si la operaci\xf3n fue exitosa. De lo contrario, la variable sistema OK toma el valor 0."}),"\n",(0,d.jsx)(n.h5,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,d.jsxs)(n.p,{children:["Ver los ejemplos de los comandos ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-buffer",title:"RECEIVE BUFFER",children:"RECEIVE BUFFER"}),", ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-timeout",title:"SET TIMEOUT",children:"SET TIMEOUT"})," y ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/append-document",children:"Append document"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"Comunicaciones"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/create-document",children:"Create document"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/get-serial-port-mapping",children:"GET SERIAL PORT MAPPING"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/open-document",children:"Open document"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-packet",children:"RECEIVE PACKET"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-record",children:"RECEIVE RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/send-packet",children:"SEND PACKET"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/send-record",children:"SEND RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/send-variable",children:"SEND VARIABLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-timeout",children:"SET TIMEOUT"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var r=s(667294);let d={},o=r.createContext(d);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);