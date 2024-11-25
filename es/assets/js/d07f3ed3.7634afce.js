"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81495"],{237996:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>c,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/get-registered-clients","title":"GET REGISTERED CLIENTS","description":"GET REGISTERED CLIENTS ( listaClientes ; metodos )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-registered-clients.md","sourceDirName":"commands-legacy","slug":"/commands/get-registered-clients","permalink":"/docs/es/commands/get-registered-clients","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-registered-clients.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-registered-clients","title":"GET REGISTERED CLIENTS","slug":"/commands/get-registered-clients","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Execute on server","permalink":"/docs/es/commands/execute-on-server"},"next":{"title":"New process","permalink":"/docs/es/commands/new-process"}}'),i=s("785893"),r=s("250065");let l={id:"get-registered-clients",title:"GET REGISTERED CLIENTS",slug:"/commands/get-registered-clients",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET REGISTERED CLIENTS"})," ( ",(0,i.jsx)(n.em,{children:"listaClientes"})," ; ",(0,i.jsx)(n.em,{children:"metodos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"listaClientes"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Lista de 4D Clients registrados"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"metodos"}),(0,i.jsx)(n.td,{children:"Integer array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Lista de los m\xe9todos a ejecutar"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"El comando GET REGISTERED CLIENTS llena dos arrays:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"listaClients"})," contiene la lista de los clientes \u201Cregistrados\u201D utilizando el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/register-client",title:"REGISTER CLIENT",children:"REGISTER CLIENT"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"metodos"})," proporciona la lista de \u201Ccargas de trabajo\u201D de cada cliente. La carga de trabajo es el n\xfamero de m\xe9todos que un cliente 4D debe ejecutar llamando el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/execute-on-client",title:"EXECUTE ON CLIENT",children:"EXECUTE ON CLIENT"})," (para mayor informaci\xf3n, por favor consulte la descripci\xf3n del comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/execute-on-client",title:"EXECUTE ON CLIENT",children:"EXECUTE ON CLIENT"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," si la operaci\xf3n fue exitosa, la variable sistema OK es igual a 1."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"Asumamos que quiere obtener una lista de todos los clientes registrados y los m\xe9todos que falta ejecutar:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($clientes;0)\n\xa0ARRAY LONGINT($metodos;0)\n\xa0GET REGISTERED CLIENTS($clientes;$metodos)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsxs)(n.p,{children:["Consulte el ejemplo del comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/register-client",title:"REGISTER CLIENT",children:"REGISTER CLIENT"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,i.jsx)(n.p,{children:"Si la operaci\xf3n se realiza correctemente, la variable sistema OK toma el valor 1."}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/execute-on-client",children:"EXECUTE ON CLIENT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/register-client",children:"REGISTER CLIENT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/unregister-client",children:"UNREGISTER CLIENT"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);