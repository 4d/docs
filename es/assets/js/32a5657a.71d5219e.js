"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58143"],{760364:function(e,a,t){t.r(a),t.d(a,{default:()=>m,frontMatter:()=>r,metadata:()=>n,assets:()=>i,toc:()=>l,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/on-startup-database-method","title":"On Startup database method","description":"M\xe9todo base On Startup","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/on-startup-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-startup-database-method","permalink":"/docs/es/commands/on-startup-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-startup-database-method.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"on-startup-database-method","title":"On Startup database method","slug":"/commands/on-startup-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On SQL Authentication database method","permalink":"/docs/es/commands/on-sql-authentication-database-method"},"next":{"title":"On System Event database method","permalink":"/docs/es/commands/on-system-event-database-method"}}'),s=t("785893"),o=t("250065");let r={id:"on-startup-database-method",title:"On Startup database method",slug:"/commands/on-startup-database-method",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function c(e){let a={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"M\xe9todo base On Startup"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(a.table,{children:(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Este comando no requiere par\xe1metros"}),(0,s.jsx)(a.th,{})]})})}),"\n",(0,s.jsx)(a.h2,{id:""}),"\n",(0,s.jsx)(a.p,{children:"El M\xe9todo base On Startup se ejecuta una sola vez, al momento de la apertura de la base."}),"\n",(0,s.jsx)(a.p,{children:"Esto ocurre en los siguientes entornos 4D:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"4D en modo local"}),"\n",(0,s.jsx)(a.li,{children:"4D en modo remoto (del lado del cliente, una vez la conexi\xf3n haya sido aceptada por 4D Server)"}),"\n",(0,s.jsx)(a.li,{children:"Aplicaci\xf3n 4D compilada y fusionada con 4D Volume Desktop"}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota"}),": el M\xe9todo base On Startup NO es ejecutado por 4D Server."]}),"\n",(0,s.jsx)(a.p,{children:"El M\xe9todo base On Startup es invocado autom\xe1ticamente por 4D; a diferencia de los m\xe9todos proyecto, usted no puede llamar este m\xe9todo base por programaci\xf3n. Sin embargo, puede ejecutarlo desde el editor de m\xe9todos. Tambi\xe9n puede utilizar subrutinas."}),"\n",(0,s.jsx)(a.p,{children:"El M\xe9todo base On Startup es perfecto para:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Inicializar variables interproceso que utilizar\xe1 durante toda la sesi\xf3n de trabajo."}),"\n",(0,s.jsx)(a.li,{children:"Iniciar procesos autom\xe1ticamente cuando abre una base."}),"\n",(0,s.jsx)(a.li,{children:"Cargar preferencias o par\xe1metros guardados durante la sesi\xf3n de trabajo anterior."}),"\n",(0,s.jsxs)(a.li,{children:["Evitar la apertura de la base si no se cumple una condici\xf3n (por ejemplo, si falta un recurso del sistema) llamando expl\xedcitamente ",(0,s.jsx)(a.a,{href:"/docs/es/commands/quit-4d",children:"QUIT 4D"}),"."]}),"\n",(0,s.jsx)(a.li,{children:"Realizar otras acciones que quiera ejecutar autom\xe1ticamente cada vez que abra una base."}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Sin embargo, le recomendamos NO lanzar trabajos de impresi\xf3n desde el ",(0,s.jsx)(a.strong,{children:"M\xe9todo base On Startup"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(a.p,{children:["Vea el ejemplo en la secci\xf3n ",(0,s.jsx)(a.a,{href:"metodo-base-on-exit.md",children:"M\xe9todo base On Exit"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"metodo-base-on-exit.md",children:"M\xe9todo base On Exit"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.em,{children:"M\xe9todos de base de datos"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/quit-4d",children:"QUIT 4D"})]})]})}function m(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,a,t){t.d(a,{Z:function(){return d},a:function(){return r}});var n=t(667294);let s={},o=n.createContext(s);function r(e){let a=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);