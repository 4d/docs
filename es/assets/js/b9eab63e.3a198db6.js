"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57813"],{793285:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/form-get-color-scheme","title":"FORM Get color scheme","description":"FORM Get color scheme  : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-get-color-scheme.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-color-scheme","permalink":"/docs/es/20-R7/commands/form-get-color-scheme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-color-scheme.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-get-color-scheme","title":"FORM Get color scheme","slug":"/commands/form-get-color-scheme","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM FIRST PAGE","permalink":"/docs/es/20-R7/commands/form-first-page"},"next":{"title":"FORM Get current page","permalink":"/docs/es/20-R7/commands/form-get-current-page"}}'),r=o("785893"),c=o("250065");let l={id:"form-get-color-scheme",title:"FORM Get color scheme",slug:"/commands/form-get-color-scheme",displayed_sidebar:"docs"},t=void 0,d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"FORM Get color scheme"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:'Esquema de colores del formulario actual: "claro" u "oscuro"'})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"FORM Get color scheme"})," devuelve el nombre de la combinaci\xf3n de colores actual del formulario mostrado actualmente. Si no hay un formulario actual, el comando devuelve una cadena vac\xeda."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),': en Windows, este comando siempre devuelve "light".']}),"\n",(0,r.jsx)(n.p,{children:"El esquema de color real de un formulario se define por:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['la propiedad del formulario "Color Scheme" (ver ',(0,r.jsx)(n.em,{children:"colorScheme"}),");"]}),"\n",(0,r.jsxs)(n.li,{children:['si "Color Scheme" es "heredado", una llamada al comando ',(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["si ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"}),' no se llama o se llama con el valor del par\xe1metro "heredado", la Configuraci\xf3n (configuraci\xf3n de la base local en caso de un componente);']}),"\n",(0,r.jsx)(n.li,{children:'si si la configuraci\xf3n se define como "heredada", las preferencias del usuario del sistema operativo.'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Consulte el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})," para obtener detalles sobre los nombres de las combinaciones de colores."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Desea cargar una imagen seg\xfan el esquema actual del formulario:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$txt_suffix:=Choose((FORM Get color scheme="dark");"_dark";"")\n\xa0READ PICTURE FILE(Get 4D folder(Current resources folder)+"myPict"+$txt_suffix+".png";$Pic_icon)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," se recomienda utilizar ",(0,r.jsx)(n.em,{children:"css"})," para adaptar el dise\xf1o de objetos formulario al esquema actual."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-application-color-scheme",children:"Get application color scheme"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1761"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return l}});var s=o(667294);let r={},c=s.createContext(r);function l(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);