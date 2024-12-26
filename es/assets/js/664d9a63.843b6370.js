"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4356"],{421810:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/distinct-attribute-values","title":"DISTINCT ATTRIBUTE VALUES","description":"DISTINCT ATTRIBUTE VALUES ( campoObjeto ; ruta ; arrayValores )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/distinct-attribute-values.md","sourceDirName":"commands-legacy","slug":"/commands/distinct-attribute-values","permalink":"/docs/es/commands/distinct-attribute-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdistinct-attribute-values.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"distinct-attribute-values","title":"DISTINCT ATTRIBUTE VALUES","slug":"/commands/distinct-attribute-values","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DISTINCT ATTRIBUTE PATHS","permalink":"/docs/es/commands/distinct-attribute-paths"},"next":{"title":"DISTINCT VALUES","permalink":"/docs/es/commands/distinct-values"}}'),a=t("785893"),r=t("250065");let i={id:"distinct-attribute-values",title:"DISTINCT ATTRIBUTE VALUES",slug:"/commands/distinct-attribute-values",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Utilizaci\xf3n de la propiedad virtual .length",id:"utilizaci\xf3n-de-la-propiedad-virtual-length",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"DISTINCT ATTRIBUTE VALUES"})," ( ",(0,a.jsx)(n.em,{children:"campoObjeto"})," ; ",(0,a.jsx)(n.em,{children:"ruta"})," ; ",(0,a.jsx)(n.em,{children:"arrayValores"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"campoObjeto"}),(0,a.jsx)(n.td,{children:"Field"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Campo de objeto del que desea obtener la lista de valores de atributos distintos"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ruta"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Ruta de acceso del atributo cuyos valores distintos desea obtener"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrayValores"}),(0,a.jsx)(n.td,{children:"Text array, Integer array, Boolean array, Date array, Time array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Valores distintos en la ruta de atributos"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Tema:"})," Arrays"]}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"DISTINCT ATTRIBUTE VALUES"})," crea y llena el ",(0,a.jsx)(n.em,{children:"arrayValores"})," con valores no repetidos (\xfanicos) procedentes del atributo ",(0,a.jsx)(n.em,{children:"ruta"})," en el campo ",(0,a.jsx)(n.em,{children:"campoObjeto"})," para la selecci\xf3n actual de la tabla a la que pertenece el campo. Si ",(0,a.jsx)(n.em,{children:"campoObjeto"})," no es un campo de objeto indexado, se devuelve un error."]}),"\n",(0,a.jsxs)(n.p,{children:["Pase en ",(0,a.jsx)(n.em,{children:"ruta"}),' una ruta atributo v\xe1lida. Utilice la notaci\xf3n punto est\xe1ndar para definir rutas a atributos anidados, por ejemplo "empresa.direccion.numero". Tenga en cuenta que los nombres de atributos objeto son sensibles a las may\xfasculas y min\xfasculas.']}),"\n",(0,a.jsxs)(n.p,{children:["El array que pas\xf3 en ",(0,a.jsx)(n.em,{children:"arrayValores"})," debe ser del mismo tipo que el atributo ",(0,a.jsx)(n.em,{children:"ruta"})," pasado como par\xe1metro, de lo contrario el array se vuelve a digitar. S\xf3lo se admiten los siguientes tipos de arrays: num\xe9rico, texto, fecha y hora (los valores deben ser escalar: punteros, objetos, blobs o im\xe1genes no son soportados)."]}),"\n",(0,a.jsx)(n.p,{children:"Despu\xe9s de la llamada, el tama\xf1o del array es igual al n\xfamero de valores distintos que se encuentran en la selecci\xf3n. El comando no cambia la selecci\xf3n actual o el registro actual."}),"\n",(0,a.jsx)(n.h5,{id:"utilizaci\xf3n-de-la-propiedad-virtual-length",children:"Utilizaci\xf3n de la propiedad virtual .length"}),"\n",(0,a.jsxs)(n.p,{children:['Puede utilizar la propiedad virtual "longitud" con este comando. Est\xe1 disponible autom\xe1ticamente para todos los atributos de tipo array, y ofrece el tama\xf1o del array, es decir, el n\xfamero de elementos que contiene. Esta propiedad est\xe1 dise\xf1ada para ser utilizada en b\xfasquedas (ver ',(0,a.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"}),(0,a.jsx)(n.a,{href:"/docs/es/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"}),"). Tambi\xe9n se puede utilizar con el comando ",(0,a.jsx)(n.strong,{children:"DISTINCT ATTRIBUTE VALUES"})," para obtener los diferentes tama\xf1os de array para un atributo."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Su base contiene un campo objeto [Customer]full_Data (indexado) con 12 registros:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(571286).Z+"",width:"617",height:"348"})}),"\n",(0,a.jsx)(n.p,{children:"Si ejecuta este c\xf3digo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT(aLAges;0)\n\xa0ALL RECORDS([Customer])\n\xa0\xa0//get the distinct values for the "age" attibute\n\xa0DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"age";aLAges)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["El array ",(0,a.jsx)(n.em,{children:"aLAges"})," obtiene los siguientes 9 elementos:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//aLAges{1}=33\n\xa0\xa0//aLAges{2}=35\n\xa0\xa0//aLAges{3}=36\n\xa0\xa0//aLAges{4}=40\n\xa0\xa0//aLAges{5}=42\n\xa0\xa0//aLAges{6}=44\n\xa0\xa0//aLAges{7}=52\n\xa0\xa0//aLAges{8}=54\n\xa0\xa0//aLAges{9}=60\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/distinct-attribute-paths",children:"DISTINCT ATTRIBUTE PATHS"})}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"1397"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},571286:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict2897927.en-11f4935c55baf79e470a5d456000c727.png"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let a={},r=s.createContext(a);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);