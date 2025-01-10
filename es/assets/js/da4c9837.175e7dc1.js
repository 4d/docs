"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43542"],{199883:function(e,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/focus-object","title":"Focus object","description":"Focus object  : Pointer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/focus-object.md","sourceDirName":"commands-legacy","slug":"/commands/focus-object","permalink":"/docs/es/commands/focus-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffocus-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"focus-object","title":"Focus object","slug":"/commands/focus-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Caps lock down","permalink":"/docs/es/commands/caps-lock-down"},"next":{"title":"Get application color scheme","permalink":"/docs/es/commands/get-application-color-scheme"}}'),s=o("785893"),a=o("250065");let c={id:"focus-object",title:"Focus object",slug:"/commands/focus-object",displayed_sidebar:"docs"},i=void 0,l={},d=[{value:"Nota de compatibilidad",id:"nota-de-compatibilidad",level:4},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function r(e){let n={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Focus object"}),"  : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Puntero al objeto que tiene el foco"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"nota-de-compatibilidad",children:"Nota de compatibilidad"}),"\n",(0,s.jsxs)(n.p,{children:["Este comando s\xf3lo se conserva por razones de compatibilidad. A partir de la versi\xf3n 12 de 4D, se recomienda utilizar el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/object-get-pointer",title:"OBJECT Get pointer",children:"OBJECT Get pointer"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Focus object devuelve un puntero al objeto que tiene el foco en el formulario actual. Si ning\xfan objeto tiene el foco, el comando devuelve Nil. Puede utilizar Focus object para realizar una acci\xf3n en un \xe1rea de formulario sin saber cu\xe1l objeto est\xe1 seleccionado actualmente. Aseg\xfarese de probar si el objeto es del tipo correcto, utilizando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/type",title:"Type",children:"Type"}),", antes de realizar una acci\xf3n."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," cuando se utiliza con un list box de tipo array, la funci\xf3n Focus object devuelve un puntero al list box o a la columna del list box que tiene el foco. En el caso de los list boxes de tipo selecci\xf3n, la funci\xf3n devuelve:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"para una columna asociada a un campo, un puntero al campo asociado,"}),"\n",(0,s.jsx)(n.li,{children:"para una columna asociada a una variable, un puntero a la variable,"}),"\n",(0,s.jsx)(n.li,{children:"para una columna asociada a una expresi\xf3n, un puntero a la variable del list box."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Este comando no puede utilizarse con campos en subformularios."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," este comando se utiliza \xfanicamente en el contexto de entrada de datos, de lo contrario se produce un error."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo es un m\xe9todo de objeto para un bot\xf3n. El m\xe9todo de objeto cambia los datos en el objeto actual a may\xfasculas. El objeto debe ser del tipo texto o alfa (tipo 0 \xf3 24):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$vp :=Focus object\xa0//Obtener el puntero al \xfaltimo objeto\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Nil($vp))\xa0//Ning\xfan objeto tiene el foco\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0:((Type($vp->)=Is alpha field)|(Type($vp->)=Is string var))\xa0//Si es un objeto de tipo texto o alfa\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vp->:=Uppercase($vp->)\xa0//Cambiar los datos a may\xfasculas\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/object-get-pointer",children:"OBJECT Get pointer"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"278"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return c}});var t=o(667294);let s={},a=t.createContext(s);function c(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);