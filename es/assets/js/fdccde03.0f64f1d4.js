"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["855"],{983934:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>d,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>r});var o=JSON.parse('{"id":"commands-legacy/object-set-font","title":"OBJECT SET FONT","description":"OBJECT SET FONT ( { ;} objeto ; fuente* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-font.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-font","permalink":"/docs/es/20-R7/commands/object-set-font","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-font.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-font","title":"OBJECT SET FONT","slug":"/commands/object-set-font","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET FOCUS RECTANGLE INVISIBLE","permalink":"/docs/es/20-R7/commands/object-set-focus-rectangle-invisible"},"next":{"title":"OBJECT SET FONT SIZE","permalink":"/docs/es/20-R7/commands/object-set-font-size"}}'),t=s("785893"),i=s("250065");let d={id:"object-set-font",title:"OBJECT SET FONT",slug:"/commands/object-set-font",displayed_sidebar:"docs"},r=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET FONT"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"fuente"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de objeto (si se especifica *), o Campo o variable (si se omite *)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fuente"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre o n\xfamero de fuente"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["OBJECT SET FONT muestra el ",(0,t.jsx)(n.em,{children:"objeto"})," utilizando la fuente especificada en el par\xe1metro ",(0,t.jsx)(n.em,{children:"fuente"}),". El par\xe1metro ",(0,t.jsx)(n.em,{children:"fuente"})," debe contener un nombre de fuente v\xe1lido."]}),"\n",(0,t.jsxs)(n.p,{children:["Si especifica el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica un nombre de objeto (una cadena) en ",(0,t.jsx)(n.em,{children:"objeto"}),". Si omite el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se especifica una referencia de campo o de variable (campo o variable objeto \xfanicamente) en lugar de una cadena."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," si utiliza este comando en un ",(0,t.jsx)(n.em,{children:"objeto"})," que estaba utilizando una hoja de estilo, la referencia a la hoja de estilo se elimina autom\xe1ticamente del objeto - incluso si asigna los mismos atributos que los de la hoja de estilo."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsxs)(n.p,{children:["El siguiente ejemplo define la fuente de un bot\xf3n llamado ",(0,t.jsx)(n.em,{children:"bOK"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT(bOK;"Arial")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:'El siguiente ejemplo define la fuente para todos los objetos de formulario cuyo nombre contenga "info":'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT(*;"@info@";"Times")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,t.jsxs)(n.p,{children:["El siguiente ejemplo utiliza la opci\xf3n especial ",(0,t.jsx)(n.em,{children:"%password"}),', dise\xf1ada para la entrada y visualizaci\xf3n de campos de tipo \u201Ccontrase\xf1a\u201D. Cuando pase "%password" en el par\xe1metro ',(0,t.jsx)(n.em,{children:"fuente"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"cada car\xe1cter introducido en el objeto se muestra con el mismo simbolo,"}),"\n",(0,t.jsx)(n.li,{children:'las acciones "copiar" y "pegar" se desactivan en el objeto.'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," puede utilizar la opci\xf3n ",(0,t.jsx)(n.em,{children:"%password"})," con los objetos de tipo campo, variable y combo box."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT([Users]Password;"%password")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/font-file",children:"Font file"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/font-list",children:"FONT LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Interacci\xf3n de comandos gen\xe9ricos con textos multiestilos"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-get-font",children:"OBJECT Get font"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-set-font-size",children:"OBJECT SET FONT SIZE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-set-font-style",children:"OBJECT SET FONT STYLE"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"164"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return d}});var o=s(667294);let t={},i=o.createContext(t);function d(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);