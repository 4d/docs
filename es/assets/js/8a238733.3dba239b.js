"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69311"],{200549:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"commands-legacy/equal-pictures","title":"Equal pictures","description":"Equal pictures ( imagen1 ; imagen2 ; mascara ) : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/equal-pictures.md","sourceDirName":"commands-legacy","slug":"/commands/equal-pictures","permalink":"/docs/es/commands/equal-pictures","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fequal-pictures.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"equal-pictures","title":"Equal pictures","slug":"/commands/equal-pictures","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE THUMBNAIL","permalink":"/docs/es/commands/create-thumbnail"},"next":{"title":"Get picture file name","permalink":"/docs/es/commands/get-picture-file-name"}}'),a=s("785893"),r=s("250065");let t={id:"equal-pictures",title:"Equal pictures",slug:"/commands/equal-pictures",displayed_sidebar:"docs"},l=void 0,c={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Equal pictures"})," ( ",(0,a.jsx)(n.em,{children:"imagen1"})," ; ",(0,a.jsx)(n.em,{children:"imagen2"})," ; ",(0,a.jsx)(n.em,{children:"mascara"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"imagen1"}),(0,a.jsx)(n.td,{children:"Picture, Picture"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Imagen fuente original"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"imagen2"}),(0,a.jsx)(n.td,{children:"Picture, Picture"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Imagen a comparar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"mascara"}),(0,a.jsx)(n.td,{children:"Picture, Picture"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"M\xe1scara resultante"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"resultado"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"True si ambas im\xe1genes son id\xe9nticas; de lo contrario, False"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"Equal pictures"})," compara con precisi\xf3n las dimensiones y el contenido de dos im\xe1genes."]}),"\n",(0,a.jsxs)(n.p,{children:["Pase en ",(0,a.jsx)(n.em,{children:"imagen1"})," la imagen fuente y en ",(0,a.jsx)(n.em,{children:"imagen2"})," una imagen comparar con la imagen fuente."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Si las im\xe1genes no son de la misma dimensi\xf3n, el comando devuelve ",(0,a.jsx)(n.strong,{children:"False"})," y el par\xe1metro ",(0,a.jsx)(n.em,{children:"mascara"})," contiene una imagen vac\xeda."]}),"\n",(0,a.jsxs)(n.li,{children:["Si las dos im\xe1genes son del mismo tama\xf1o pero tienen contenidos diferentes, el comando devuelve ",(0,a.jsx)(n.strong,{children:"False"})," y el par\xe1metro ",(0,a.jsx)(n.em,{children:"mascara"})," contiene la imagen mascara resultante de la comparaci\xf3n de las dos im\xe1genes. Esta comparaci\xf3n se realiza p\xedxel por p\xedxel. Cada p\xedxel diferente aparece en blanco sobre un fondo negro."]}),"\n",(0,a.jsxs)(n.li,{children:["Si las dos im\xe1genes son id\xe9nticas, el comando devuelve ",(0,a.jsx)(n.strong,{children:"True"})," y el par\xe1metro ",(0,a.jsx)(n.em,{children:"mascara"})," contiene una imagen completamente negra."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(n.p,{children:"La variable sistema OK toma el valor 1 si se comparan las dos im\xe1genes. En caso de anomal\xeda, particularmente si una de las im\xe1genes no se inicializa (imagen vac\xeda), la variable OK toma el valor 0."}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"En el siguiente ejemplo, comparamos dos im\xe1genes (pict1 y pict2) y mostramos la m\xe1scara resultante:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(210650).Z+"",width:"735",height:"421"})}),"\n",(0,a.jsxs)(n.p,{children:["Este es el c\xf3digo del bot\xf3n ",(0,a.jsx)(n.strong,{children:"Compare"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0$equal :=Equal pictures($pict1;$pict2;$mask)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"1196"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifica variables"}),(0,a.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},210650:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/pict847365.fr-371c587a72091d82fdf973eaf1fc6e05.png"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var i=s(667294);let a={},r=i.createContext(a);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);