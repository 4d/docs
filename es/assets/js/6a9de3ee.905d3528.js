"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5129],{940491:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var o=s(474848),r=s(28453);const t={id:"bring-to-front",title:"BRING TO FRONT",slug:"/commands/bring-to-front",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/bring-to-front",title:"BRING TO FRONT",description:"BRING TO FRONT ( proceso )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/bring-to-front.md",sourceDirName:"commands-legacy",slug:"/commands/bring-to-front",permalink:"/docs/es/commands/bring-to-front",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbring-to-front.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"bring-to-front",title:"BRING TO FRONT",slug:"/commands/bring-to-front",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"VARIABLE TO VARIABLE",permalink:"/docs/es/commands/variable-to-variable"},next:{title:"Frontmost process",permalink:"/docs/es/commands/frontmost-process"}},d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"BRING TO FRONT"})," ( ",(0,o.jsx)(n.em,{children:"proceso"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"proceso"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero del proceso a pasar al primer plano"})]})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["BRING TO FRONT pasa todas las ventanas que pertenecen a ",(0,o.jsx)(n.em,{children:"process"})," al primer plano. Si el proceso ya est\xe1 en el primer plano, el comando no hace nada. Si el proceso est\xe1 oculto, debe utilizar ",(0,o.jsx)(n.a,{href:"/docs/es/commands/show-process",children:"SHOW PROCESS"})," para mostrar el proceso, de lo contrario BRING TO FRONT no tiene efecto."]}),"\n",(0,o.jsx)(n.p,{children:"Los procesos Principal y Dise\xf1o pueden pasarse al primer plano utilizando este comando."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," cuando el proceso contiene varias ventanas y quiere pasar al primer plano una ventana espec\xedfica, es preferible utilizar por ejemplo, el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-window-rect",children:"SET WINDOW RECT"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(n.p,{children:["El siguiente ejemplo es un m\xe9todo que puede ser ejecutado desde un men\xfa. \xc9l verifica si el proceso del primer plano es el proceso ",(0,o.jsx)(n.em,{children:"<>Clientes"}),". Si no, el m\xe9todo lo pasa al primer plano:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0If(Frontmost process(\u25caClientes)\n\xa0\xa0\xa0\xa0BRING TO FRONT(\u25caClientes)\n\xa0End if\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/hide-process",children:"HIDE PROCESS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/process-state",children:"Process state"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/show-process",children:"SHOW PROCESS"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var o=s(296540);const r={},t=o.createContext(r);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);