"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18211"],{832975:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/pop-record","title":"POP RECORD","description":"POP RECORD {( tabla )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/pop-record.md","sourceDirName":"commands-legacy","slug":"/commands/pop-record","permalink":"/docs/es/commands/pop-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpop-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pop-record","title":"POP RECORD","slug":"/commands/pop-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Modified record","permalink":"/docs/es/commands/modified-record"},"next":{"title":"PUSH RECORD","permalink":"/docs/es/commands/push-record"}}'),t=r("785893"),d=r("250065");let i={id:"pop-record",title:"POP RECORD",slug:"/commands/pop-record",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"POP RECORD"})," {( ",(0,t.jsx)(n.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabla"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tabla de la cual desapilar el registro actual o Tabla por defecto, si se omite"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"POP RECORD carga el primer registro de la pila de registros de la tabla y lo vuelve el registro actual."}),"\n",(0,t.jsxs)(n.p,{children:["Si apila un registro, luego crea una nueva selecci\xf3n actual que no incluye el registro apilado, y finalmente desapila el registro, entonces el registro actual no se encuentra en la selecci\xf3n actual. Para que el registro apilado est\xe9 en la selecci\xf3n actual, utilice ",(0,t.jsx)(n.a,{href:"/docs/es/commands/one-record-select",title:"ONE RECORD SELECT",children:"ONE RECORD SELECT"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Si utiliza un comando que mueva el puntero del registro actual antes de guardar el registro, perder\xe1 la copia apilada en memoria."}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"El siguiente ejemplo recupera el registro de un cliente en la pila:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0POP RECORD([Clientes])\xa0// Desapilar el registro\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/push-record",children:"PUSH RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Uso de la pila de registros"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"177"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica el registro actual"}),(0,t.jsx)(n.td,{})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);