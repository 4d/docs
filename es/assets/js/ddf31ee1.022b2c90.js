"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66958"],{884403:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/method-open-path","title":"METHOD OPEN PATH","description":"METHOD OPEN PATH ( ruta {; line}{; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-open-path.md","sourceDirName":"commands-legacy","slug":"/commands/method-open-path","permalink":"/docs/es/20-R7/commands/method-open-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-open-path.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-open-path","title":"METHOD OPEN PATH","slug":"/commands/method-open-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET PATHS FORM","permalink":"/docs/es/20-R7/commands/method-get-paths-form"},"next":{"title":"METHOD RESOLVE PATH","permalink":"/docs/es/20-R7/commands/method-resolve-path"}}'),s=t("785893"),o=t("250065");let r={id:"method-open-path",title:"METHOD OPEN PATH",slug:"/commands/method-open-path",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"METHOD OPEN PATH"})," ( ",(0,s.jsx)(n.em,{children:"ruta"})," {; ",(0,s.jsx)(n.em,{children:"line"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ruta"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Ruta del m\xe9todo a abrir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"line"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Line number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente(par\xe1metro ignorado fuera de este contexto)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"METHOD OPEN PATH"})," abre, en el editor de m\xe9todos de 4D, el m\xe9todo cuya ruta de acceso interna se pasa en el par\xe1metro ",(0,s.jsx)(n.em,{children:"ruta"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"El comando es as\xedncrono: vuelve inmediatamente al m\xe9todo llamante y no espera a que se abra el editor de m\xe9todos."}),"\n",(0,s.jsxs)(n.p,{children:["Este comando puede abrir todo tipo de m\xe9todos (objeto, formulario, trigger, proyecto o base); sin embargo. el m\xe9todo ya debe existir. Si el par\xe1metro ",(0,s.jsx)(n.em,{children:"ruta"}),' no corresponde a un m\xe9todo existente, se devuelve el error -9801 "Imposible abrir el m\xe9todo".']}),"\n",(0,s.jsxs)(n.p,{children:["Puede ejecutar este comando desde un componente, pero en este caso, debe pasar el par\xe1metro ",(0,s.jsx)(n.em,{children:"*"})," ya que el acceso al c\xf3digo del componente es de s\xf3lo lectura. Si omite el par\xe1metro ",(0,s.jsx)(n.em,{children:"*"})," en este contexto, se genera el error -9763."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Comandos del tema Acceso objetos dise\xf1o"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/method-get-path",children:"METHOD Get path"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1213"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var d=t(667294);let s={},o=d.createContext(s);function r(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);