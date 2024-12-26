"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35788"],{277625:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>m,assets:()=>a,toc:()=>l,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/self","title":"Self","description":"Self  : Pointer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/self.md","sourceDirName":"commands-legacy","slug":"/commands/self","permalink":"/docs/pt/commands/self","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fself.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"self","title":"Self","slug":"/commands/self","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOLVE POINTER","permalink":"/docs/pt/commands/resolve-pointer"},"next":{"title":"Super","permalink":"/docs/pt/commands/super"}}'),s=o("785893"),d=o("250065");let r={id:"self",title:"Self",slug:"/commands/self",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Nota de compatibilidade",id:"nota-de-compatibilidade",level:4},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Self"}),"  : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Pointer to form object (if any) whose method is currently being executed. Otherwise Nil (->[]) if outside of context"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"nota-de-compatibilidade",children:"Nota de compatibilidade"}),"\n",(0,s.jsx)(n.p,{children:"Este comando s\xf3 \xe9 conservada por raz\xf5es de compatibilidade. A partir da vers\xe3o 12 de 4D, \xe9 recomendado utilizar o comando OBJECT Get pointer."}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"O comando Self devolve um ponteiro at\xe9 o objeto cujo m\xe9todo de objeto se est\xe1 executando."}),"\n",(0,s.jsx)(n.p,{children:"Self se utiliza para referenciar uma vari\xe1vel em seu pr\xf3prio m\xe9todo de objeto. Devolve um ponteiro v\xe1lido s\xf3 quando \xe9 chamada desde dentro de um m\xe9todo de objeto ou desde um m\xe9todo de projeto que se chama direta ou indiretamente por um m\xe9todo de objeto."}),"\n",(0,s.jsxs)(n.p,{children:["Se Self \xe9 chamada fora de contexto, devolve um ponteiro ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/is-nil-pointer",children:"Is nil pointer"})," (",(0,s.jsx)(n.em,{children:"->[]"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Dica:"})," Self \xe9 muito \xfatil quando v\xe1rios objetos em um formul\xe1rio devem efetuar a mesma a\xe7\xe3o, operada sobre eles mesmos."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," quando se utiliza no contexto de um list box, a fun\xe7\xe3o devolve:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Para uma coluna associada a um campo, um ponteiro ao campo associado,"}),"\n",(0,s.jsx)(n.li,{children:"Para uma coluna associada a uma vari\xe1vel, um ponteiro a vari\xe1vel,"}),"\n",(0,s.jsx)(n.li,{children:"Para uma coluna associada a uma express\xe3o, um ponteiro Nil."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:["Ver o exemplo do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/resolve-pointer",title:"RESOLVE POINTER",children:"RESOLVE POINTER"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/object-get-pointer",children:"OBJECT Get pointer"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/resolve-pointer",children:"RESOLVE POINTER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"this.md",children:"This "})]}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"308"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return r}});var t=o(667294);let s={},d=t.createContext(s);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);