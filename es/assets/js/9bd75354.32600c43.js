"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14653"],{221463:function(e,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/abort","title":"ABORT","description":"ABORT","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/abort.md","sourceDirName":"commands-legacy","slug":"/commands/abort","permalink":"/docs/es/commands/abort","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fabort.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"abort","title":"ABORT","slug":"/commands/abort","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Interrupciones","permalink":"/docs/es/commands/theme/Interruptions"},"next":{"title":"ASSERT","permalink":"/docs/es/commands/assert"}}'),t=o("785893"),d=o("250065");let s={id:"abort",title:"ABORT",slug:"/commands/abort",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Nota hist\xf3rica",id:"nota-hist\xf3rica",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"ABORT"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ABORT se utiliza en un m\xe9todo de proyecto de gesti\xf3n de errores instalado por el comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Si no instala un m\xe9todo de proyecto de gesti\xf3n de errores, cuando ocurra un error (por ejemplo, un error de la base de datos) 4D mostrar\xe1 su caja de di\xe1logo de error est\xe1ndar y luego interrumpir\xe1 la ejecuci\xf3n de su c\xf3digo. Si el c\xf3digo en ejecuci\xf3n es:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Un m\xe9todo de objeto, m\xe9todo de formulario (o un m\xe9todo de proyecto llamado por un m\xe9todo de formulario o de objeto), el control vuelve al formulario que se muestra actualmente."}),"\n",(0,t.jsx)(n.li,{children:"Un m\xe9todo llamado desde un men\xfa, el control vuelve a la barra de men\xfas o formulario que se muestra actualmente."}),"\n",(0,t.jsx)(n.li,{children:"El m\xe9todo maestro de un proceso, entonces el proceso termina."}),"\n",(0,t.jsx)(n.li,{children:"Un m\xe9todo llamado directa o indirectamente por una operaci\xf3n de importaci\xf3n o exportaci\xf3n, la operaci\xf3n se detiene. Lo mismo para las b\xfasquedas secuenciales u ordenaciones."}),"\n",(0,t.jsx)(n.li,{children:"Etc."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Si utiliza un m\xe9todo de proyecto de intercepci\xf3n de errores, 4D no muestra m\xe1s su caja de di\xe1logo de errores est\xe1ndar y no interrumpe la ejecuci\xf3n de su c\xf3digo. En lugar de eso, 4D llama a su m\xe9todo de proyecto de intercepci\xf3n de errores (que puede ver como un manejador de excepciones), y reasume la ejecuci\xf3n de la l\xednea de c\xf3digo siguiente en el m\xe9todo que dispar\xf3 el error."}),"\n",(0,t.jsx)(n.p,{children:"Hay errores que puede tratar por programaci\xf3n; por ejemplo, durante una operaci\xf3n de importaci\xf3n, si intercepta un error de la base de datos que se\xf1ala un valor duplicado, puede \u201Ccubrir\u201D el error y seguir con la importaci\xf3n. Sin embargo, hay errores que no puede procesar y errores que no debe \u201Ccubrir.\u201D En estos casos, necesita detener la ejecuci\xf3n llamando ABORT desde el m\xe9todo de proyecto de intercepci\xf3n de errores."}),"\n",(0,t.jsx)(n.h2,{id:"nota-hist\xf3rica",children:"Nota hist\xf3rica"}),"\n",(0,t.jsx)(n.p,{children:"Aunque el comando ABORT est\xe1 destinado a ser utilizado s\xf3lo desde un m\xe9todo de proyecto de intercepci\xf3n de errores, algunos miembros de la comunidad 4D tambi\xe9n lo utilizan en otros m\xe9todos para interrumpir su ejecuci\xf3n. El hecho de que funcione es s\xf3lo un efecto secundario. No recomendamos utilizar este comando en m\xe9todos diferentes a los m\xe9todos de proyecto de intercepci\xf3n de errores."}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"156"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return s}});var r=o(667294);let t={},d=r.createContext(t);function s(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);