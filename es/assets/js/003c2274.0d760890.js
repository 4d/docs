"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99336"],{457133:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/post-click","title":"POST CLICK","description":"POST CLICK ( ratonX ; ratonY {; proceso} {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/post-click.md","sourceDirName":"commands-legacy","slug":"/commands/post-click","permalink":"/docs/es/commands/post-click","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpost-click.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"post-click","title":"POST CLICK","slug":"/commands/post-click","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Pop up menu","permalink":"/docs/es/commands/pop-up-menu"},"next":{"title":"POST EVENT","permalink":"/docs/es/commands/post-event"}}'),c=s("785893"),t=s("250065");let i={id:"post-click",title:"POST CLICK",slug:"/commands/post-click",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"POST CLICK"})," ( ",(0,c.jsx)(n.em,{children:"ratonX"})," ; ",(0,c.jsx)(n.em,{children:"ratonY"})," {; ",(0,c.jsx)(n.em,{children:"proceso"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ratonX"}),(0,c.jsx)(n.td,{children:"Integer"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Coordenada horizontal"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ratonY"}),(0,c.jsx)(n.td,{children:"Integer"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Coordenada vertical"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"proceso"}),(0,c.jsx)(n.td,{children:"Integer"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"N\xfamero de referencia del proceso de destino o fila de atenci\xf3n de eventos de la aplicaci\xf3n, si se omite o si se pasa 0"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"*"}),(0,c.jsx)(n.td,{children:"Operator"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Si se especifica, utilizar el sistema de coordenadas globales Si se omite, utilizar el sistema de coordenadas locales"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsx)(n.p,{children:"El comando POST CLICK simula un clic del rat\xf3n. Tiene el mismo efecto que cuando el usuario hace clic en el bot\xf3n del rat\xf3n."}),"\n",(0,c.jsxs)(n.p,{children:["Pase las coordenadas horizontal y vertical del clic en ",(0,c.jsx)(n.em,{children:"ratonX"})," y ",(0,c.jsx)(n.em,{children:"ratonY"}),". Si pasa el par\xe1metro ",(0,c.jsx)(n.em,{children:"*"}),", expresa estas coordenadas con respecto a la pantalla. Si omite el par\xe1metro ",(0,c.jsx)(n.em,{children:"*"}),", expresa estas coordenadas con relaci\xf3n a la ventana del primer plano del proceso cuyo n\xfamero de proceso se pasa en ",(0,c.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Si especifica el par\xe1metro proceso ",(0,c.jsx)(n.em,{children:"proceso"}),", el clic se env\xeda al proceso cuyo n\xfamero de proceso se pasa en ",(0,c.jsx)(n.em,{children:"proceso"}),". Si pasa ",(0,c.jsx)(n.em,{children:"0"})," (cero) o si omite el par\xe1metro, el clic se env\xeda a nivel de la aplicaci\xf3n y el planificador 4D la enviar\xe1 al proceso apropiado."]}),"\n",(0,c.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/commands/post-event",children:"POST EVENT"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/commands/post-key",children:"POST KEY"})]}),"\n",(0,c.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"N\xfamero de comando"}),(0,c.jsx)(n.td,{children:"466"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Hilo seguro"}),(0,c.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let c={},t=r.createContext(c);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);