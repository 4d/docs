"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42013"],{337514:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/data-file-encryption-status","title":"Data file encryption status","description":"Data file encryption status ( rutaEstruct , rutaDatos ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/data-file-encryption-status.md","sourceDirName":"commands-legacy","slug":"/commands/data-file-encryption-status","permalink":"/docs/es/commands/data-file-encryption-status","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdata-file-encryption-status.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"data-file-encryption-status","title":"Data file encryption status","slug":"/commands/data-file-encryption-status","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Seguridad de los datos","permalink":"/docs/es/commands/theme/Data-Security"},"next":{"title":"Decrypt data BLOB","permalink":"/docs/es/commands/decrypt-data-blob"}}'),d=t("785893"),r=t("250065");let a={id:"data-file-encryption-status",title:"Data file encryption status",slug:"/commands/data-file-encryption-status",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Data file encryption status"})," ( rutaEstruct , rutaDatos ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"rutaEstruct"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nombre de ruta del archivo de estructura 4D a verificar"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"rutaDatos"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nombre de ruta del archivo de datos 4D a verificar"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Informaci\xf3n sobre el cifrado del archivo de datos y de cada tabla"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"Data file encryption status"})," devuelve un objeto que suministra el estado de cifrado para el archivo de datos designado por los par\xe1metros ",(0,d.jsx)(n.em,{children:"rutaEstruct"})," y ",(0,d.jsx)(n.em,{children:"rutaDatos"}),". Tambi\xe9n se proporciona el estado de cada tabla."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"rutaDatos"})," designa un archivo de datos 4D (.4dd). Debe corresponder al archivo de estructura definido por el par\xe1metro ",(0,d.jsx)(n.em,{children:"rutaEstruct"}),". Puede designar el archivo de estructura actual, pero el archivo de datos no debe ser el archivo actual (abierto)."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," utilice el m\xe9todo ",(0,d.jsx)(n.em,{children:"ds.encryptionStatus( )"})," para determinar el estado de cifrado del archivo de datos actual."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Valor devuelto"})}),"\n",(0,d.jsx)(n.p,{children:"El objeto devuelto contiene las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Propiedad"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Tipo"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"isEncrypted"}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"True si el archivo de datos est\xe1 cifrado"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"keyProvided"}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"True si la llave de cifrado que coincide con el archivo de datos cifrados est\xe1 en el llavero 4D (*)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tables"}),(0,d.jsx)(n.td,{children:"Objeto"}),(0,d.jsxs)(n.td,{children:["Objeto que contiene tantas propiedades como tablas ",(0,d.jsx)(n.em,{children:"encriptables"})," o ",(0,d.jsx)(n.em,{children:"encriptadas"}),"."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["<",(0,d.jsx)(n.em,{children:"table name"}),">"]}),(0,d.jsx)(n.td,{children:"Objeto"}),(0,d.jsx)(n.td,{children:"Tabla Encriptable o Encriptada"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"name"}),(0,d.jsx)(n.td,{children:"Texto"}),(0,d.jsx)(n.td,{children:"Nombre de la tabla"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"num"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"N\xfamero de tabla"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"isEncryptable"}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"True si la tabla se declara encriptable en el archivo de estructura"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"isEncrypted"}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"True si los registros de la tabla est\xe1n cifrados en el archivo de datos"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"(*) La llave de cifrado puede haber sido suministrada:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["previamente:\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"antes de abrir este archivo de datos, utilizando un dispositivo conectado,"}),"\n",(0,d.jsxs)(n.li,{children:["con el comando ",(0,d.jsx)(n.em,{children:"ds.provideDataKey( )"})," cuando se abre este archivo de datos,"]}),"\n",(0,d.jsxs)(n.li,{children:["despu\xe9s de abrir el archivo de datos, con el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/discover-data-key",children:"Discover data key"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["utilizando el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/register-data-key",children:"Register data key"})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Desea conocer el estado de cifrado de un archivo de datos que corresponde al archivo de estructura actual:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $status : Object\n\xa0\n\xa0$status:=Data file encryption status(Structure file;"D:\\\\Invoices\\\\Data_2019\\\\Invoices.4dd")\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Not($status.isEncrypted))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("El archivo de datos no est\xe1 encriptado")\n\xa0\xa0\xa0\xa0:($status.isEncrypted&(Not($status.keyProvided))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("El archivo de datos est\xe1 cifrado y la llave de cifrado no est\xe1 en el llavero. No tendr\xe1 acceso a los datos cifrados.")\n\xa0\xa0\xa0\xa0:($status.isEncrypted&$status.keyProvided)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("El archivo de datos est\xe1 cifrado y la llave de cifrado est\xe1 en el llavero. Tendr\xe1 acceso a los datos cifrados.")\n\xa0End case\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/commands/encrypt-data-file",children:"Encrypt data file"})}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1609"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var s=t(667294);let d={},r=s.createContext(d);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);