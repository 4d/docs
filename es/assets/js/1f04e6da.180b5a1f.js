"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48021"],{183602:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>a,assets:()=>c,toc:()=>i,contentTitle:()=>o});var a=JSON.parse('{"id":"commands-legacy/set-assert-enabled","title":"SET ASSERT ENABLED","description":"SET ASSERT ENABLED ( aser {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-assert-enabled.md","sourceDirName":"commands-legacy","slug":"/commands/set-assert-enabled","permalink":"/docs/es/commands/set-assert-enabled","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-assert-enabled.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-assert-enabled","title":"SET ASSERT ENABLED","slug":"/commands/set-assert-enabled","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ON EVENT CALL","permalink":"/docs/es/commands/on-event-call"},"next":{"title":"throw","permalink":"/docs/es/commands/throw"}}'),r=n("785893"),d=n("250065");let t={id:"set-assert-enabled",title:"SET ASSERT ENABLED",slug:"/commands/set-assert-enabled",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SET ASSERT ENABLED"})," ( ",(0,r.jsx)(s.em,{children:"aser"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe1metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aser"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"True = activar las aserciones, False = desactivar las aserciones"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operador"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Si se omite = el comando se aplica al conjunto de los procesos, Si se pasa = el comando se aplica al proceso actual \xfanicamente"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(s.p,{children:["El comando ",(0,r.jsx)(s.strong,{children:"SET ASSERT ENABLED"})," se utiliza para desactivar o reactivar las aserciones insertadas en el c\xf3digo 4D de la aplicaci\xf3n. Para mayor informaci\xf3n sobre aseciones, consulte la descripci\xf3n del comando ",(0,r.jsx)(s.a,{href:"/docs/es/commands/assert",children:"ASSERT"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Por defecto, las aserciones a\xf1adidas en el programa est\xe1n activas, en modo interpretado y en modo compilado. Este comando es \xfatil para desactivarlas ya que su evaluaci\xf3n puede ser costosa en t\xe9rminos de tiempo de ejecuci\xf3n y usted tambi\xe9n podr\xeda querer ocultarlas del usuario final de la aplicaci\xf3n. Por lo general, el comando ",(0,r.jsx)(s.strong,{children:"SET ASSERT ENABLED"}),' puede utilizarse en el m\xe9todo base On Startup para activar o desactivar aserciones en funci\xf3n de si la aplicaci\xf3n est\xe1 en modo "Prueba" o en modo "Producci\xf3n".']}),"\n",(0,r.jsxs)(s.p,{children:["Por defecto, el comando ",(0,r.jsx)(s.strong,{children:"SET ASSERT ENABLED"})," afecta todos los procesos de la aplicaci\xf3n. Para restringir el efecto del comando al proceso actual \xfanicamente, pase el par\xe1metro ",(0,r.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Por favor tenga en cuenta que cuando las aserciones est\xe1n desactivadas, las expresiones pasadas a los comandos ",(0,r.jsx)(s.a,{href:"/docs/es/commands/assert",children:"ASSERT"})," no se eval\xfaan. Las l\xedneas de c\xf3digo que llaman a ",(0,r.jsx)(s.a,{href:"/docs/es/commands/assert",children:"ASSERT"})," no tienen m\xe1s efecto en el funcionamiento de la aplicaci\xf3n, ni en t\xe9rminos de comportamiento ni en t\xe9rminos de rendimiento."]}),"\n",(0,r.jsx)(s.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(s.p,{children:"Desactivaci\xf3n de aserciones:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0SET ASSERT ENABLED(False)\n\xa0ASSERT(TestMethod)\xa0// TestMethod no se llamar\xe1 ya que las aserciones est\xe1n desactivadas\n"})}),"\n",(0,r.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/commands/assert",children:"ASSERT"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/asserted",children:"Asserted"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/get-assert-enabled",children:"Get assert enabled"})]}),"\n",(0,r.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero de comando"}),(0,r.jsx)(s.td,{children:"1131"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Hilo seguro"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return t}});var a=n(667294);let r={},d=a.createContext(r);function t(e){let s=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(d.Provider,{value:s},e.children)}}}]);