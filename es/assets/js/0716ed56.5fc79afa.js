"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15003"],{434602:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>t,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/get-resource","title":"GET RESOURCE","description":"GET RESOURCE ( resTipo ; resNum ; resDatos {; resArchivo} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-resource.md","sourceDirName":"commands-legacy","slug":"/commands/get-resource","permalink":"/docs/es/commands/get-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-resource.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-resource","title":"GET RESOURCE","slug":"/commands/get-resource","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE RESOURCE","permalink":"/docs/es/commands/get-picture-resource"},"next":{"title":"Get resource name","permalink":"/docs/es/commands/get-resource-name"}}'),o=r("785893"),d=r("250065");let i={id:"get-resource",title:"GET RESOURCE",slug:"/commands/get-resource",displayed_sidebar:"docs"},a=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Independencia de plataforma",id:"independencia-de-plataforma",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"GET RESOURCE"})," ( ",(0,o.jsx)(n.em,{children:"resTipo"})," ; ",(0,o.jsx)(n.em,{children:"resNum"})," ; ",(0,o.jsx)(n.em,{children:"resDatos"})," {; ",(0,o.jsx)(n.em,{children:"resArchivo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"resTipo"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tipo de recurso (4 caracteres)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"resNum"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de recurso"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"resDatos"}),(0,o.jsx)(n.td,{children:"Blob"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Campo o variable BLOB a recibir los datos"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Contenido del recurso"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"resArchivo"}),(0,o.jsx)(n.td,{children:"Time"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de referencia del archivo de recursos o todos los archivos de recursos abiertos, si se omite"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando GET RESOURCE devuelve en el campo o la variable BLOB ",(0,o.jsx)(n.em,{children:"resDatos"})," el contenido del recurso cuyo tipo y n\xfamero se pasa en ",(0,o.jsx)(n.em,{children:"resTipo"})," y ",(0,o.jsx)(n.em,{children:"resNum"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Importante:"})," debe pasar una cadena de 4 caracteres en ",(0,o.jsx)(n.em,{children:"resTipo"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si no se encuentra el recurso, el par\xe1metro ",(0,o.jsx)(n.em,{children:"resDatos"})," no cambia y la variable OK toma el valor 0 (cero)."]}),"\n",(0,o.jsxs)(n.p,{children:["Si pasa un n\xfamero de referencia de archivo de recursos v\xe1lido en ",(0,o.jsx)(n.em,{children:"resArchivo"}),", el recurso se busca en ese archivo \xfanicamente. Si no pasa ",(0,o.jsx)(n.em,{children:"resArchivo"}),", se devuelve la primera ocurrencia del recurso encontrada en la cadena de archivos de recursos."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," el tama\xf1o de un recurso puede ser de varios megabytes."]}),"\n",(0,o.jsx)(n.h2,{id:"independencia-de-plataforma",children:"Independencia de plataforma"}),"\n",(0,o.jsxs)(n.p,{children:['Recuerde que trabaja con recursos basados en Mac OS. Sin importar la plataforma, los valores internos de los recursos como los Enteros largos son almacenados utilizando ordenaci\xf3n de bytes ("byte ordering") Macintosh. En Windows, para los datos de los recursos est\xe1ndar (tales como los recursos listas de cadenas y los recursos im\xe1genes) la ordenaci\xf3n de bytes es autom\xe1ticamente inversa ("byte swapping") cuando es necesario. Por otra parte, si crea y utiliza sus propias estructuras de datos internas, usted decide si aplica la ordenaci\xf3n inversa a los datos que extrajo del BLOB (por ejemplo, al pasar Macintosh byte ordering a un comando como ',(0,o.jsx)(n.a,{href:"/docs/es/commands/blob-to-longint",title:"BLOB to longint",children:"BLOB to longint"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"Ver el ejemplo del comando SET RESOURCE."}),"\n",(0,o.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,o.jsx)(n.p,{children:"La variable sistema OK toma el valor 1 si se encuentra el recurso, de lo contrario toma el valor 0 (cero)."}),"\n",(0,o.jsx)(n.h2,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,o.jsxs)(n.p,{children:["Si no hay suficiente memoria para cargar la imagen, se genera un error. Puede interceptar este error con la ayuda de un m\xe9todo de gesti\xf3n de errores instalado por el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Recursos"})}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"508"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifica variables"}),(0,o.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var s=r(667294);let o={},d=s.createContext(o);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);