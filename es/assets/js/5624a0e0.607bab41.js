"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27548"],{765797:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>t,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/convert-picture","title":"CONVERT PICTURE","description":"CONVERT PICTURE ( imagen ; codec {; compresion} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/convert-picture.md","sourceDirName":"commands-legacy","slug":"/commands/convert-picture","permalink":"/docs/es/commands/convert-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-picture.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"convert-picture","title":"CONVERT PICTURE","slug":"/commands/convert-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COMBINE PICTURES","permalink":"/docs/es/commands/combine-pictures"},"next":{"title":"CREATE THUMBNAIL","permalink":"/docs/es/commands/create-thumbnail"}}'),r=i("785893"),c=i("250065");let o={id:"convert-picture",title:"CONVERT PICTURE",slug:"/commands/convert-picture",displayed_sidebar:"docs"},d=void 0,t={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CONVERT PICTURE"})," ( ",(0,r.jsx)(n.em,{children:"imagen"})," ; ",(0,r.jsx)(n.em,{children:"codec"})," {; ",(0,r.jsx)(n.em,{children:"compresion"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"imagen"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Imagen a convertir"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Imagen convertida"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codec"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Identificador de codec de imagen"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"compresion"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Calidad de compresi\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando CONVERT PICTURE convierte ",(0,r.jsx)(n.em,{children:"imagen"})," en un nuevo tipo."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"codec"})," indica el tipo de imagen a generar. Un codec puede ser una extensi\xf3n (por ejemplo, \u201C.gif\u201D) o un tipo Mime (por ejemplo, \u201Cimage/jpg\u201D).",(0,r.jsx)(n.br,{}),"\nPuede obtener una lista de codecs disponibles utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si el campo o variable ",(0,r.jsx)(n.em,{children:"imagen"})," es de tipo compuesto (si por ejemplo es el resultado de la acci\xf3n copiar -pegar), s\xf3lo la informaci\xf3n correspondiente al tipo codec se conserva en la imagen resultante."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," si el tipo de ",(0,r.jsx)(n.em,{children:"codec"})," solicitado es el mismo que el tipo original de la ",(0,r.jsx)(n.em,{children:"imagen"}),', no se efect\xfaa ninguna conversi\xf3n y la imagen se devuelve "tal cual" (excepto cuando se utiliza el par\xe1metro ',(0,r.jsx)(n.em,{children:"compresion"}),", ver a continuaci\xf3n)."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"compresion"}),", si se pasa, permite definir la calidad de compresi\xf3n a aplicar a la imagen resultante cuando se utiliza un Codec compatible. En ",(0,r.jsx)(n.em,{children:"compresion"}),", pase un valor entre 0 y 1 para especificar la calidad de la compresi\xf3n, donde 0 es la calidad m\xe1s mediocre (alta compresi\xf3n) y 1 la mejor calidad (compresi\xf3n baja). Este par\xe1metro s\xf3lo se tiene en cuenta cuando el codec soporta la compresi\xf3n (por ejemplo JPEG o HDPhoto) y es soportado por los APIs WIC y ImageIO.",(0,r.jsx)(n.br,{}),"\nPara mayor informaci\xf3n sobre los APIs de gesti\xf3n de imagen en 4D, consulte la secci\xf3n ",(0,r.jsx)(n.em,{children:"Im\xe1genes"}),". Por defecto, si omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"compresion"}),", se aplica la mejor calidad (compresion =1)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," si desea llamar a ",(0,r.jsx)(n.strong,{children:"CONVERT PICTURE"})," con un tipo de imagen que no es compatible con las versiones 64 bits de 4D (como PICT), aseg\xfarese de que la conversi\xf3n se realice en una versi\xf3n 32 bits de 4D, donde el tipo original es soportado. Para m\xe1s informaci\xf3n, consulte la p\xe1gina ",(0,r.jsx)(n.em,{children:"Pasar de 32 bits a 64 bits"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Conversi\xf3n de la imagen vpFoto al formato jpeg:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CONVERT PICTURE(vpFoto;".jpg")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Conversi\xf3n de una imagen con calidad del 60%:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CONVERT PICTURE(vPicture;".JPG";0.6)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/picture-codec-list",children:"PICTURE CODEC LIST"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return o}});var s=i(667294);let r={},c=s.createContext(r);function o(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);