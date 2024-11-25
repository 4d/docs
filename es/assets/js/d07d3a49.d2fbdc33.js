"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37893"],{305131:function(e,n,o){o.r(n),o.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>s});var r=JSON.parse('{"id":"ViewPro/commands/vp-convert-to-picture","title":"VP Convert to picture","description":"VP Convert to picture ( vpObject Object} ) : Picture","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-convert-to-picture.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-convert-to-picture","permalink":"/docs/es/ViewPro/commands/vp-convert-to-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-convert-to-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-convert-to-picture","title":"VP Convert to picture"},"sidebar":"docs","previous":{"title":"VP Convert from 4D View","permalink":"/docs/es/ViewPro/commands/vp-convert-from-4d-view"},"next":{"title":"VP Copy to object","permalink":"/docs/es/ViewPro/commands/vp-copy-to-object"}}'),t=o("785893"),i=o("250065");let s={id:"vp-convert-to-picture",title:"VP Convert to picture"},c=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Resultado",id:"resultado",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Convert to picture"})," ( ",(0,t.jsx)(n.em,{children:"vpObject"})," : Object {; ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object} ) : Picture"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpObject"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto 4D View Pro que contiene el \xe1rea a convertir"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto rango"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Imagen SVG del \xe1rea"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"VP Convert to picture"})," convierte el objeto ",(0,t.jsx)(n.em,{children:"vpObject"})," de 4D View Pro (o el rango ",(0,t.jsx)(n.em,{children:"rangeObj"})," dentro de ",(0,t.jsx)(n.em,{children:"vpObject"}),") en una imagen SVG."]}),"\n",(0,t.jsx)(n.p,{children:"Este comando es \xfatil, por ejemplo:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"para integrar un documento de 4D View Pro en otro documento, como un documento de 4D Write Pro"}),"\n",(0,t.jsx)(n.li,{children:"para imprimir un documento 4D View Pro sin tener que cargarlo en un \xe1rea de 4D View Pro."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"vpObject"}),", pase el objeto 4D View Pro a convertir. Este objeto debe haber sido analizado previamente utilizando ",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-export-to-object",children:"VP Export to object"})," o guardado utilizando ",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["El proceso de conversi\xf3n a SVG requiere que las expresiones y formatos (ver ",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#cell-format",children:"Formato de celdas"}),") incluidos en el \xe1rea 4D View Pro se eval\xfaen al menos una vez, para que puedan exportarse correctamente. Si convierte un documento que no ha sido evaluado previamente, las expresiones o los formatos pueden aparecer de forma inesperada."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pase un rango de celdas a convertir. Por defecto, si se omite este par\xe1metro, se convierte todo el contenido del documento."]}),"\n",(0,t.jsx)(n.p,{children:"El contenido del documento se convierte con respecto a sus atributos de visualizaci\xf3n, incluidos los formatos (ver la nota anterior), la visibilidad de los encabezados, las columnas y las l\xedneas. La conversi\xf3n de los siguientes elementos es soportada:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Texto: estilo / fuente / tama\xf1o / alineaci\xf3n / orientaci\xf3n / rotaci\xf3n / formato"}),"\n",(0,t.jsx)(n.li,{children:"Fondo de la celda : color / imagen"}),"\n",(0,t.jsx)(n.li,{children:"Bordes de las celdas : grosor / color / estilo"}),"\n",(0,t.jsx)(n.li,{children:"Fusi\xf3n de celdas"}),"\n",(0,t.jsx)(n.li,{children:"Im\xe1genes"}),"\n",(0,t.jsx)(n.li,{children:"Altura de l\xedneas"}),"\n",(0,t.jsx)(n.li,{children:"Ancho de columnas"}),"\n",(0,t.jsx)(n.li,{children:"Columnas / l\xedneas ocultas."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["La visibilidad de la l\xednea de la rejilla depende del atributo del documento definido con ",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"resultado",children:"Resultado"}),"\n",(0,t.jsx)(n.p,{children:"El comando devuelve una imagen en formato SVG."}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Quiere convertir un \xe1rea 4D View Pro en SVG, previsualizar el resultado y enviarlo a una variable imagen:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'C_OBJECT($vpAreaObj)\nC_PICTURE($vPict)\n$vpAreaObj:=VP Export to object("ViewProArea")\n$vPict:=VP Convert to picture($vpAreaObj) //exportar toda el \xe1rea\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-export-to-object",children:"VP Export to object"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return s}});var r=o(667294);let t={},i=r.createContext(t);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);