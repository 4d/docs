"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76591"],{197648:function(e,n,a){a.r(n),a.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>t});var o=JSON.parse('{"id":"commands-legacy/trace","title":"TRACE","description":"TRACE","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/trace.md","sourceDirName":"commands-legacy","slug":"/commands/trace","permalink":"/docs/es/commands/trace","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrace.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"trace","title":"TRACE","slug":"/commands/trace","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"This","permalink":"/docs/es/commands/this"},"next":{"title":"Type","permalink":"/docs/es/commands/type"}}'),s=a("785893"),r=a("250065");let t={id:"trace",title:"TRACE",slug:"/commands/trace",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4}];function i(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"TRACE"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,s.jsx)(n.th,{})]})})}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"TRACE"})," se utiliza para ejecutar paso a paso m\xe9todos durante el desarrollo de una base."]}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"TRACE"})," muestra el depurador de 4D en el proceso actual. La ventana del ",(0,s.jsx)(n.em,{children:"Depurador"})," aparece antes de la ejecuci\xf3n de la l\xednea de c\xf3digo siguiente, y contin\xfaa para cada l\xednea de c\xf3digo que se ejecuta. Igualmente puede llamar manualmente al depurador presionando ",(0,s.jsx)(n.strong,{children:"Alt+May\xfas+clic derecho"})," (Windows) o ",(0,s.jsx)(n.strong,{children:"Control+Opci\xf3n+comando+clic"})," (Macintosh) durante la ejecuci\xf3n del c\xf3digo."]}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"TRACE"})," se ignora en bases compiladas."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server:"})," si llama ",(0,s.jsx)(n.strong,{children:"TRACE"})," desde un m\xe9todo proyecto ejecutado en el contexto de un Procedimiento almacenado, la ventana del depurador aparece en el equipo servidor."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Consejo:"})," no llame ",(0,s.jsx)(n.strong,{children:"TRACE"})," cuando utilice un formulario para el cual los eventos On Activate y On Deactivate hayan sido activados. Cada vez que la ventana del depurador aparezca, estos eventos ser\xe1n invocados; esto crear\xe1 un bucle infinito entre estos eventos y la ventana del depurador. Si termina en esta situaci\xf3n, utilice la combinaci\xf3n ",(0,s.jsx)(n.strong,{children:"May\xfas+clic"})," en el bot\xf3n ",(0,s.jsx)(n.strong,{children:"Reanudar"})," del depurador para salir de ah\xed. Cualquier llamada posterior a ",(0,s.jsx)(n.strong,{children:"TRACE"})," dentro del proceso ser\xe1 ignorada."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente c\xf3digo espera que la variable proceso CREAR_LENG sea igual a \u201CUS\u201D o \u201CFR\u201D. Si no es el caso, llama al m\xe9todo de proyecto DEBUG:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0Case of\n\xa0\xa0\xa0\xa0:(CREAR_LENG="US")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsBHCmdNom:=[Comandos]CM US Nom\n\xa0\xa0\xa0\xa0:(CREAR_LENG="FR")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsBHCmdNom:=[Comandos]CM FR Nom\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DEBUG("Valor de CREAR_LENG")\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.p,{children:"El m\xe9todo de proyecto DEBUG se lista aqu\xed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto DEBUG\n\xa0\xa0// DEBUG (Texto)\n\xa0\xa0// DEBUG (Informaci\xf3n opcional de depuraci\xf3n)\n\xa0\n\xa0var $1 : Text\n\xa0\n\xa0If(\u25CAvbDebugOn)\xa0// Variable interproceso definida en el M\xe9todo On Startup\n\xa0\xa0\xa0\xa0If(Compiled application)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Count parameters>=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT($1+Char(13)+"Llamar al dise\xf1ador al x911")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return t}});var o=a(667294);let s={},r=o.createContext(s);function t(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);