"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8805"],{257642:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-pasteboard-data","title":"GET PASTEBOARD DATA","description":"GET PASTEBOARD DATA ( tipoDatos ; datos )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-pasteboard-data.md","sourceDirName":"commands-legacy","slug":"/commands/get-pasteboard-data","permalink":"/docs/es/commands/get-pasteboard-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-pasteboard-data.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-pasteboard-data","title":"GET PASTEBOARD DATA","slug":"/commands/get-pasteboard-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get file from pasteboard","permalink":"/docs/es/commands/get-file-from-pasteboard"},"next":{"title":"GET PASTEBOARD DATA TYPE","permalink":"/docs/es/commands/get-pasteboard-data-type"}}'),t=a("785893"),o=a("250065");let r={id:"get-pasteboard-data",title:"GET PASTEBOARD DATA",slug:"/commands/get-pasteboard-data",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET PASTEBOARD DATA"})," ( ",(0,t.jsx)(n.em,{children:"tipoDatos"})," ; ",(0,t.jsx)(n.em,{children:"datos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tipoDatos"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tipo de datos a extraer del contenedor"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"datos"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Datos extra\xeddos del portapapeles"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando GET PASTEBOARD DATA devuelve en el campo o variable de tipo BLOB ",(0,t.jsx)(n.em,{children:"datos"})," que se encuentran en el portapapeles y cuyo tipo se pasa en ",(0,t.jsx)(n.em,{children:"tipoDatos"}),". (Si el portapapeles contiene texto copiado en 4D, entonces el conjunto de caracteres del BLOB ser\xe1 probablemente UTF-16.)"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," en el contexto de las operaciones de copiar/pegar, el contenedor corresponde al portapapeles."]}),"\n",(0,t.jsxs)(n.p,{children:["Pase ",(0,t.jsx)(n.em,{children:"tipoDatos"}),", pase un valor que defina el tipo de datos a extraer. Puede pasar una firma 4D, un tipo UTI (Mac OS), un nombre/n\xfamero de formato (Windows), o un tipo de 4 caracteres (compatibilidad). Para mayor informaci\xf3n sobre estos tipos, consulte la secci\xf3n ",(0,t.jsx)(n.em,{children:"Gesti\xf3n de portapapeles"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," no puede leer datos de tipo archivo con este comando; para hacer esto, debe utilizar el comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/get-file-from-pasteboard",children:"Get file from pasteboard"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Los m\xe9todos de objeto siguientes son los de dos botones que copian y pegan datos en el array ",(0,t.jsx)(n.em,{children:"asOpciones"})," (men\xfa pop-up, lista desplegable,...) ubicado en un formulario:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto bCopiar_asOpciones\n\xa0If(Size of array(asOpciones)>0)\xa0// \xbfHay algo para copiar?\n\xa0\xa0\xa0\xa0VARIABLE TO BLOB(asOpciones;$vxClipData)\xa0// Acumular los elementos del array en un BLOB\n\xa0\xa0\xa0\xa0CLEAR PASTEBOARD\xa0// Vaciar el portapapeles\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("artx";$vxClipData)\xa0// Note que el tipo de datos se elige arbitrariamente\n\xa0End if\n\xa0\n\xa0\xa0// M\xe9todo de objeto bPegar_asOpciones\n\xa0If(Pasteboard data size("artx")>0)\xa0// Hay datos de tipo "artx" en el portapapeles?\n\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("artx";$vxClipData)\xa0// Extraer los datos del portapapeles\n\xa0\xa0\xa0\xa0BLOB TO VARIABLE($vxClipData;asOpciones)\xa0// Llenar el array con los datos del BLOB\n\xa0\xa0\xa0\xa0asOpciones:=0\xa0// Reinicializar el elemento seleccionado del array\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,t.jsx)(n.p,{children:"Si los datos se extraen correctamente, la variable OK toma el valor 1; de lo contrario OK toma el valor 0 y se genera un error."}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/get-text-from-pasteboard",children:"Get text from pasteboard"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"401"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return r}});var s=a(667294);let t={},o=s.createContext(t);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);