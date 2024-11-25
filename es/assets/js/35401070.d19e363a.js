"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24898"],{493705:function(e,n,d){d.r(n),d.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>t,frontMatter:()=>c});var s=JSON.parse('{"id":"Admin/data-collect","title":"Recopilaci\xf3n de datos","description":"Para que nuestros productos sean siempre mejores, recogemos autom\xe1ticamente los datos relativos a las estad\xedsticas de uso de las aplicaciones 4D Server en funcionamiento. Los datos recogidos son completamente an\xf3nimos y se transfieren sin afectar la experiencia del usuario.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Admin/data-collect.md","sourceDirName":"Admin","slug":"/Admin/data-collect","permalink":"/docs/es/20/Admin/data-collect","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fdata-collect.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"data-collect","title":"Recopilaci\xf3n de datos"},"sidebar":"docs","previous":{"title":"Restaurar","permalink":"/docs/es/20/Backup/restore"},"next":{"title":"Extensiones","permalink":"/docs/es/20/Extensions/overview"}}'),i=d("785893"),r=d("250065");let c={id:"data-collect",title:"Recopilaci\xf3n de datos"},l=void 0,a={},t=[{value:"Informaci\xf3n recopilada",id:"informaci\xf3n-recopilada",level:2},{value:"Recogidos al iniciar la base de datos",id:"recogidos-al-iniciar-la-base-de-datos",level:3},{value:"Recogidos al inicio del servidor web y en el env\xedo de la recolecci\xf3n de datos",id:"recogidos-al-inicio-del-servidor-web-y-en-el-env\xedo-de-la-recolecci\xf3n-de-datos",level:3},{value:"Recogidas a intervalos regulares",id:"recogidas-a-intervalos-regulares",level:3},{value:"Recogida en el env\xedo de datos",id:"recogida-en-el-env\xedo-de-datos",level:3},{value:"Recolecci\xf3n al cierre de la base y env\xedo de los datos",id:"recolecci\xf3n-al-cierre-de-la-base-y-env\xedo-de-los-datos",level:3},{value:"Recolecci\xf3n cada vez que se llama a PHP execute",id:"recolecci\xf3n-cada-vez-que-se-llama-a-php-execute",level:3},{value:"Recolecci\xf3n en la conexi\xf3n del cliente",id:"recolecci\xf3n-en-la-conexi\xf3n-del-cliente",level:3},{value:"\xbfD\xf3nde se almacena y env\xeda?",id:"d\xf3nde-se-almacena-y-env\xeda",level:2},{value:"Desactivar la recopilaci\xf3n de datos en las aplicaciones cliente/servidor integradas",id:"desactivar-la-recopilaci\xf3n-de-datos-en-las-aplicaciones-clienteservidor-integradas",level:2}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Para que nuestros productos sean siempre mejores, recogemos autom\xe1ticamente los datos relativos a las estad\xedsticas de uso de las aplicaciones 4D Server en funcionamiento. Los datos recogidos son completamente an\xf3nimos y se transfieren sin afectar la experiencia del usuario."}),"\n",(0,i.jsx)(n.p,{children:"Esta p\xe1gina explica:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"qu\xe9 informaci\xf3n se recoge,"}),"\n",(0,i.jsx)(n.li,{children:"d\xf3nde se almacena la informaci\xf3n y cu\xe1ndo se env\xeda a 4D,"}),"\n",(0,i.jsx)(n.li,{children:"c\xf3mo desactivar la recopilaci\xf3n autom\xe1tica de datos en las aplicaciones integradas cliente/servidor."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"informaci\xf3n-recopilada",children:"Informaci\xf3n recopilada"}),"\n",(0,i.jsx)(n.p,{children:"Los datos se recogen durante los siguientes eventos:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"inicio de la base de datos,"}),"\n",(0,i.jsx)(n.li,{children:"cierre de base de datos,"}),"\n",(0,i.jsx)(n.li,{children:"inicio del servidor web,"}),"\n",(0,i.jsx)(n.li,{children:"ejecuci\xf3n php,"}),"\n",(0,i.jsx)(n.li,{children:"conexi\xf3n con el cliente,"}),"\n",(0,i.jsx)(n.li,{children:"env\xedo de recolecci\xf3n de datos."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Tambi\xe9n se recogen algunos datos a intervalos regulares."}),"\n",(0,i.jsx)(n.h3,{id:"recogidos-al-iniciar-la-base-de-datos",children:"Recogidos al iniciar la base de datos"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Datos"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Notas"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CPU"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Nombre, tipo y velocidad del procesador"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numberOfCores"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"N\xfamero total de n\xfacleos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"memory"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Volumen de almacenamiento de memoria (en bytes) disponible en la m\xe1quina"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"system"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Versi\xf3n del sistema operativo y n\xfamero de build"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"headless"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"True si la aplicaci\xf3n se ejecuta en modo sin interfaz"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"version"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"N\xfamero de lanzamiento de la aplicaci\xf3n 4D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"buildNumber"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"N\xfamero de build de la aplicaci\xf3n 4D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"license"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"Nombre comercial y descripci\xf3n de las licencias de los productos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"isRosetta"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"True si 4D es emulado a trav\xe9s de Rosetta en macOS, False en caso contrario (no emulado o en Windows)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uniqueID"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"ID \xfanico de 4D Server"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"Texto (cadena con hash)"}),(0,i.jsxs)(n.td,{children:["Identificador \xfanico asociado a la base de datos (",(0,i.jsx)(n.em,{children:"Polinomio Rolling hash del nombre de la base"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dataFileSize"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Tama\xf1o del archivo de datos en bytes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"indexesSize"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Tama\xf1o del \xedndice en bytes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cacheSize"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Tama\xf1o de cach\xe9 en bytes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"usingLegacyNetworkLayer"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"True si se utiliza la capa de red heredada para el servidor de aplicaciones"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"usingQUICNetworkLayer"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"True si la base utiliza la capa de red QUIC"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encryptedConnections"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"True si las conexiones cliente/servidor est\xe1n encriptadas"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encrypted"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"True si el archivo de datos est\xe1 encriptado"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"compiled"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"True si la aplicaci\xf3n est\xe1 compilada"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"isEngined"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"True si la aplicaci\xf3n se fusiona con 4D Volume Desktop"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"projectMode"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"True si la aplicaci\xf3n es un proyecto"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mobile"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsx)(n.td,{children:"Informaci\xf3n sobre sesiones m\xf3viles"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"recogidos-al-inicio-del-servidor-web-y-en-el-env\xedo-de-la-recolecci\xf3n-de-datos",children:"Recogidos al inicio del servidor web y en el env\xedo de la recolecci\xf3n de datos"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Datos"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Notas"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"webServer"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:'"started":true si el servidor web est\xe1 arrancando o iniciado'})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"recogidas-a-intervalos-regulares",children:"Recogidas a intervalos regulares"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Datos"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Notas"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maximumNumberOfWebProcesses"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"N\xfamero m\xe1ximo de procesos web simult\xe1neos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maximumUsedPhysicalMemory"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Uso m\xe1ximo de la memoria f\xedsica"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maximumUsedVirtualMemory"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Uso m\xe1ximo de la memoria virtual"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"recogida-en-el-env\xedo-de-datos",children:"Recogida en el env\xedo de datos"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Datos"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Notas"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"uptime"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Tiempo transcurrido (en segundos) desde que se abri\xf3 la base 4D local"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cacheReadBytes"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"N\xfamero de bytes le\xeddos de la cach\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cacheMissBytes"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"N\xfamero de bytes perdidos de la cach\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cacheReadCount"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"N\xfamero de lecturas en la cach\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cacheMissCount"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"N\xfamero de lecturas perdidas en la cach\xe9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dataSegment1.diskReadBytes"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"N\xfamero de bytes le\xeddos en el archivo de datos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dataSegment1.diskWriteBytes"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"N\xfamero de bytes escritos en el archivo de datos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dataSegment1.diskReadCount"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"N\xfamero de lecturas en el archivo de datos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dataSegment1.diskWriteCount"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"N\xfamero de escrituras en el archivo de datos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"indexSegment.diskReadBytes"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"N\xfamero de bytes le\xeddos en el archivo \xedndice"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"indexSegment.diskWriteBytes"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"N\xfamero de bytes escritos en el archivo \xedndice"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"indexSegment.diskReadCount"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"N\xfamero de lecturas en el archivo \xedndice"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"indexSegment.diskWriteCount"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"N\xfamero de escrituras en el archivo \xedndice"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"recolecci\xf3n-al-cierre-de-la-base-y-env\xedo-de-los-datos",children:"Recolecci\xf3n al cierre de la base y env\xedo de los datos"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Datos"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Notas"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"webserverHits"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"N\xfamero de visitas al servidor web durante la recolecci\xf3n de datos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"restHits"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"N\xfamero de accesos al servidor REST durante la recolecci\xf3n de datos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"webserverBytesIn"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Bytes recibidos por el servidor web durante la recolecci\xf3n de datos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"webserverBytesOut"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Bytes enviados por el servidor web durante la recolecci\xf3n de datos"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"recolecci\xf3n-cada-vez-que-se-llama-a-php-execute",children:"Recolecci\xf3n cada vez que se llama a PHP execute"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Datos"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Notas"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"phpCall"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsxs)(n.td,{children:["N\xf9mero de llamadas a ",(0,i.jsx)(n.code,{children:"PHP execute"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"externalPHP"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsxs)(n.td,{children:["True si el cliente realiza una llamada a ",(0,i.jsx)(n.code,{children:"PHP execute"})," y utiliza su propia versi\xf3n de php"]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"recolecci\xf3n-en-la-conexi\xf3n-del-cliente",children:"Recolecci\xf3n en la conexi\xf3n del cliente"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Datos"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Notas"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maximum4DClientConnections"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"N\xfamero m\xe1ximo de conexiones 4D Client al servidor"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"connectionSystems"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsx)(n.td,{children:"Sistema operativo del cliente sin el n\xfamero de compilaci\xf3n (entre par\xe9ntesis) y n\xfamero de clientes que lo utilizan"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"d\xf3nde-se-almacena-y-env\xeda",children:"\xbfD\xf3nde se almacena y env\xeda?"}),"\n",(0,i.jsxs)(n.p,{children:["Los datos recolectados se escriben en un archivo de texto (formato JSON) por base de datos cuando 4D Server cierra. El archivo se almacena dentro de la ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page485.html",children:"carpeta 4D activa"}),", es decir.:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["en Windows: ",(0,i.jsx)(n.code,{children:"Users\\[userName]\\AppData\\Roaming\\4D Server"})]}),"\n",(0,i.jsxs)(n.li,{children:["en macOS: ",(0,i.jsx)(n.code,{children:"/Users/[userName]/Library/ApplicationSupport/4D Server"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Una vez a la semana, el archivo se env\xeda autom\xe1ticamente por la red a 4D. A continuaci\xf3n, el archivo se elimina de la carpeta activa de 4D."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(615427).Z+"",width:"1261",height:"398"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Si el archivo no ha podido ser enviado por alguna raz\xf3n, no obstante se elimina y no se muestra ning\xfan mensaje de error del lado de 4D Server."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["El archivo se env\xeda a la siguiente direcci\xf3n del servidor: ",(0,i.jsx)(n.code,{children:"https://dcollector.4d.com"})," (ip: 195.68.52.83)."]}),"\n",(0,i.jsx)(n.h2,{id:"desactivar-la-recopilaci\xf3n-de-datos-en-las-aplicaciones-clienteservidor-integradas",children:"Desactivar la recopilaci\xf3n de datos en las aplicaciones cliente/servidor integradas"}),"\n",(0,i.jsxs)(n.p,{children:["Puede desactivar la recolecci\xf3n autom\xe1tica de datos en ",(0,i.jsx)(n.a,{href:"/docs/es/20/Desktop/building#clientserver-page",children:"aplicaciones integradas cliente/servidor"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Para desactivar la colecci\xf3n, pasar el valor ",(0,i.jsx)(n.strong,{children:"False"})," a la llave ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.en.html",children:(0,i.jsx)(n.code,{children:"ServerDataCollection"})})," en el archivo ",(0,i.jsx)(n.code,{children:"buildApp. Archivo Dsettings"}),", utilizado para crear la aplicaci\xf3n cliente/servidor."]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},615427:function(e,n,d){d.d(n,{Z:function(){return s}});let s=d.p+"assets/images/data-collect-3bbbbcb5b54d82cae14ce1aa89e842eb.png"},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return c}});var s=d(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);