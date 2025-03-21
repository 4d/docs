"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19331"],{291392:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>d,assets:()=>l,toc:()=>c,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/execute-method","title":"EXECUTE METHOD","description":"EXECUTE METHOD ( nomMetodo {; result {; param}}{; param2 ; ... ; paramN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/execute-method.md","sourceDirName":"commands-legacy","slug":"/commands/execute-method","permalink":"/docs/es/20-R7/commands/execute-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexecute-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"execute-method","title":"EXECUTE METHOD","slug":"/commands/execute-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current method name","permalink":"/docs/es/20-R7/commands/current-method-name"},"next":{"title":"Get pointer","permalink":"/docs/es/20-R7/commands/get-pointer"}}'),o=t("785893"),s=t("250065");let r={id:"execute-method",title:"EXECUTE METHOD",slug:"/commands/execute-method",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function i(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"EXECUTE METHOD"})," ( ",(0,o.jsx)(n.em,{children:"nomMetodo"})," {; ",(0,o.jsx)(n.em,{children:"result"})," {; ",(0,o.jsx)(n.em,{children:"param"}),"}}{; ",(0,o.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,o.jsx)(n.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomMetodo"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre del m\xe9todo de proyecto a ejecutar"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"result"}),(0,o.jsx)(n.td,{children:"Variable, *"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Variable que recibe el resultado del m\xe9todo * para un m\xe9todo que no devuelve un resultado"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"param"}),(0,o.jsx)(n.td,{children:"Expression"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Par\xe1metro(s) del m\xe9todo"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando EXECUTE METHOD provoca la ejecuci\xf3n del m\xe9todo de proyecto ",(0,o.jsx)(n.em,{children:"nomMetodo"})," pasando los par\xe1metros en ",(0,o.jsx)(n.em,{children:"param1...paramN"}),". Puede pasar el nombre de un m\xe9todo que puede ser llamado desde la base o el componente que ejecuta el comando."]}),"\n",(0,o.jsxs)(n.p,{children:["En ",(0,o.jsx)(n.em,{children:"result"}),", puede pasar una variable que reciba el resultado de la ejecuci\xf3n de ",(0,o.jsx)(n.em,{children:"nomMetodo"})," (valor ubicado en $0 al interior de ",(0,o.jsx)(n.em,{children:"nomMetodo"}),"). Si el m\xe9todo no devuelve un resultado, pase ",(0,o.jsx)(n.em,{children:"*"})," como segundo par\xe1metro."]}),"\n",(0,o.jsx)(n.p,{children:"El contexto de ejecuci\xf3n se conserva en el m\xe9todo llamado, lo que significa que el formulario actual y el evento de formulario actual permanecen definidos."}),"\n",(0,o.jsxs)(n.p,{children:["Si llama este comando desde un componente y pasa un nombre de m\xe9todo que pertenece a la base local en ",(0,o.jsx)(n.em,{children:"nomMetodo"})," (o viceversa), el m\xe9todo debe estar compartido (opci\xf3n \u201CCompartido entre componente y base principal\u201D, en las propiedades del m\xe9todo)."]}),"\n",(0,o.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,o.jsx)(n.p,{children:"Si este comando se ejecuta correctamente, la variable sistema OK toma el valor 1; de lo contrario toma el valor 0."}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/execute-formula",children:"EXECUTE FORMULA"})}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1007"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifica variables"}),(0,o.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var d=t(667294);let o={},s=d.createContext(o);function r(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);