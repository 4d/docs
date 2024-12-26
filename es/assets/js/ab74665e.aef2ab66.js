"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58036"],{709603:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/set-timer","title":"SET TIMER","description":"SET TIMER ( ticCont )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-timer.md","sourceDirName":"commands-legacy","slug":"/commands/set-timer","permalink":"/docs/es/commands/set-timer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-timer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-timer","title":"SET TIMER","slug":"/commands/set-timer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Right click","permalink":"/docs/es/commands/right-click"},"next":{"title":"Forms","permalink":"/docs/es/category/forms"}}'),o=r("785893"),s=r("250065");let i={id:"set-timer",title:"SET TIMER",slug:"/commands/set-timer",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SET TIMER"})," ( ",(0,o.jsx)(n.em,{children:"ticCont"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ticCont"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de tics"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsx)(n.p,{children:"El comando SET TIMER permite activar el evento de formulario On Timer y fijar, para el proceso y formulario actual, el n\xfamero de tics (1 tic = 1/60 de segundo) entre cada evento de formulario On Timer."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," para mayor informaci\xf3n sobre este evento de formulario, consulte la descripci\xf3n del comando ",(0,o.jsx)(n.a,{href:"form-event.md",title:"Form event",children:"Form event"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Este comando no tendr\xe1 efecto si se llama en un contexto en el que no muestra un formulario."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," cuando el comando SET TIMER se ejecuta en el contexto de un subformulario (m\xe9todo de formulario del subformulario), se genera el evento On Timer en el subformulario y no al nivel del formulario padre."]}),"\n",(0,o.jsxs)(n.p,{children:["Si pasa -1 en el par\xe1metro ",(0,o.jsx)(n.em,{children:"tickCount"}),', el comando activar\xe1 el evento de formulario On Timer "tan pronto como sea posible", en otras palabras, tan pronto como la aplicaci\xf3n 4D tome el control del administrador de eventos. Este principio permite asegurar que un formulario se muestre completamente antes de iniciar un proceso (fluidez de la aplicaci\xf3n).']}),"\n",(0,o.jsxs)(n.p,{children:["Para desactivar por programaci\xf3n el disparador del evento de formulario On Timer, llame nuevamente a SET TIMER y pase 0 en ",(0,o.jsx)(n.em,{children:"ticCont"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"Imaginemos que usted quiere, cuando un formulario aparece en pantalla, que el ordenador haga bip cada tres segundos. Para hacer esto, escriba el siguiente m\xe9todo de formulario:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=On Load)\n\xa0\xa0\xa0\xa0SET TIMER(60*3)\n\xa0End if\n\xa0\n\xa0If(Form event code=On Timer)\n\xa0\xa0\xa0\xa0BEEP\n\xa0End if\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/redraw",children:"REDRAW"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"645"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let o={},s=t.createContext(o);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);