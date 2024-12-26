"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3204"],{576238:function(e,n,o){o.r(n),o.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>r,toc:()=>c,frontMatter:()=>t});var i=JSON.parse('{"id":"commands-legacy/set-default-century","title":"SET DEFAULT CENTURY","description":"SET DEFAULT CENTURY ( seculo {; anoPivo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-default-century.md","sourceDirName":"commands-legacy","slug":"/commands/set-default-century","permalink":"/docs/pt/commands/set-default-century","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-default-century.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-default-century","title":"SET DEFAULT CENTURY","slug":"/commands/set-default-century","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Month of","permalink":"/docs/pt/commands/month-of"},"next":{"title":"Tickcount","permalink":"/docs/pt/commands/tickcount"}}'),s=o("785893"),d=o("250065");let t={id:"set-default-century",title:"SET DEFAULT CENTURY",slug:"/commands/set-default-century",displayed_sidebar:"docs"},a=void 0,r={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET DEFAULT CENTURY"})," ( ",(0,s.jsx)(n.em,{children:"seculo"})," {; ",(0,s.jsx)(n.em,{children:"anoPivo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"seculo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"S\xe9culo por padr\xe3o (menos um) para a entrada de anos com dois d\xedgitos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"anoPivo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Ano piv\xf4 para a entrada de anos com dois d\xedgitos"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"O comando SET DEFAULT CENTURY permite especificar o s\xe9culo por padr\xe3o e o ano piv\xf4 utilizado por 4D quando introduz uma data com s\xf3 dois d\xedgitos para o ano."}),"\n",(0,s.jsx)(n.p,{children:"O valor do ano piv\xf4 define a forma como 4D interpretar\xe1 a entrada de dados de uma data com um ano de dois d\xedgitos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Se o ano \xe9 maior ou igual ao ano piv\xf4, 4D utiliza o s\xe9culo atual automaticamente."}),"\n",(0,s.jsx)(n.li,{children:"Se o ano \xe9 menor que o ano piv\xf4, 4D utiliza o seguinte s\xe9culo (relativo ao s\xe9culo atual automaticamente)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Automaticamente, 4D estabelece o s\xe9culo 20 como o s\xe9culo automaticamente e utiliza 30 como ano piv\xf4. Por exemplo:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"25/01/97 significa 25 de janeiro de 1997."}),"\n",(0,s.jsx)(n.li,{children:"25/01/30 significa 25 de janeiro de 1930."}),"\n",(0,s.jsx)(n.li,{children:"25/01/29 significa 25 de janeiro de 2029."}),"\n",(0,s.jsx)(n.li,{children:"25/01/07 significa 25 de janeiro de 2007."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Para mudar este comportamento por padr\xe3o, execute o comando SET DEFAULT CENTURY. O efeito do comando \xe9 imediato. Pode passar unicamente um novo s\xe9culo por padr\xe3o, ou um novo s\xe9culo por padr\xe3o e um ano piv\xf4."}),"\n",(0,s.jsxs)(n.p,{children:["Se passar s\xf3 um novo s\xe9culo por padr\xe3o menos um em ",(0,s.jsx)(n.em,{children:"seculo"}),", 4D interpretar\xe1 todos os anos introduzidos com dois d\xedgitos como que pertencem a este s\xe9culo."]}),"\n",(0,s.jsx)(n.p,{children:"Por exemplo, depois de chamar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET DEFAULT CENTURY(20)\xa0// Fixar o s\xe9culo 21 como s\xe9culo por padr\xe3o\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"25/01/97 significa 25 de janeiro de 2097"}),"\n",(0,s.jsx)(n.li,{children:"25/01/07 significa 25 de janeiro de 2007"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Adicionalmente, pode especificar o par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"anoPivo"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Por exemplo, depois deste chamado, no qual o ano piv\xf4 \xe9 1995:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET DEFAULT CENTURY(19;95)\xa0// Fixar o s\xe9culo 21 como s\xe9culo automaticamente se o ano for menor que 95\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"25/01/97 significa 25 de janeiro de 1997"}),"\n",(0,s.jsx)(n.li,{children:"25/01/07 significa 25 de janeiro de, 2007"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," este comando afeta unicamente como 4D interpreta as datas introduzidas com anos de dois d\xedgitos."]}),"\n",(0,s.jsx)(n.p,{children:"Em todos os casos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"25/01/1997 significa janeiro 25, 1997"}),"\n",(0,s.jsx)(n.li,{children:"25/01/2097 significa janeiro 25, 2097"}),"\n",(0,s.jsx)(n.li,{children:"25/01/1907 significa janeiro 25, 1907"}),"\n",(0,s.jsx)(n.li,{children:"25/01/2007 significa janeiro 25, 2007"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Este comando afeta s\xf3 a entrada de dados. N\xe3o tem nenhum efeito no armazenamento de dados, c\xe1lculos, etc."}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"392"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return t}});var i=o(667294);let s={},d=i.createContext(s);function t(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);