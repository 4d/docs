"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55530"],{565045:function(e,n,r){r.r(n),r.d(n,{default:()=>l,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>u,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/user-in-group","title":"User in group","description":"User in group ( usuario ; grupo ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/user-in-group.md","sourceDirName":"commands-legacy","slug":"/commands/user-in-group","permalink":"/docs/pt/commands/user-in-group","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuser-in-group.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"user-in-group","title":"User in group","slug":"/commands/user-in-group","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Set user properties","permalink":"/docs/pt/commands/set-user-properties"},"next":{"title":"USERS TO BLOB","permalink":"/docs/pt/commands/users-to-blob"}}'),o=r("785893"),t=r("250065");let i={id:"user-in-group",title:"User in group",slug:"/commands/user-in-group",displayed_sidebar:"docs"},d=void 0,c={},u=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"User in group"})," ( ",(0,o.jsx)(n.em,{children:"usuario"})," ; ",(0,o.jsx)(n.em,{children:"grupo"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"usuario"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome de usu\xe1rio"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"grupo"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome do grupo"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"TRUE = usu\xe1rio no grupo; FALSE = usu\xe1rio n\xe3o est\xe1 no grupo"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["User in group retorna TRUE se ",(0,o.jsx)(n.em,{children:"user"})," estlver em ",(0,o.jsx)(n.em,{children:"group"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," Este comando espera um nome de conta de usu\xe1rio no par\xe2metro ",(0,o.jsx)(n.em,{children:"user"})," (n\xe3o \xe9 compat\xedvel com aliases/apelidos de usu\xe1rio). Se tiver deffinido aliases de usu\xe1rio em seu aplicativo, passe o par\xe2metro 4D user account ao comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/current-user",children:"Current user"})," para ter certeza que retorna uma conta de usu\xe1rio (ver exemplo)."]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"O exemplo abaixo procura faturas espec\xedficas. Se o usu\xe1rio atual estiver no grupo Executive, poder\xe1 acessar os formul\xe1rios que mostram informa\xe7\xe3o confidencial. Se o usu\xe1rio n\xe3o estiver no grupo Executive, aparecem os formul\xe1rios padr\xe3o"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Invoices];[Invoices]Retail>100)\n\xa0If(User in group(Current user(4D user account);"Executive"))\n\xa0\xa0//parametro 4D user account \xe9 necess\xe1rio se usar\n\xa0\xa0//aliases 4D user na sua aplica\xe7\xe3o\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Invoices];"Executive Output")\n\xa0\xa0\xa0\xa0FORM SET INPUT([Invoices];"Executive Input")\n\xa0Else\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Invoices];"Standard Output")\n\xa0\xa0\xa0\xa0FORM SET INPUT([Invoices];"Standard Input")\n\xa0End if\n\xa0MODIFY SELECTION([Invoices];*)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/commands/current-user",children:"Current user"})}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"338"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var s=r(667294);let o={},t=s.createContext(o);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);