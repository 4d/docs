"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81692"],{522569:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>d,assets:()=>a,toc:()=>c,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/begin-sql","title":"Begin SQL","description":"Begin SQL","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/begin-sql.md","sourceDirName":"commands-legacy","slug":"/commands/begin-sql","permalink":"/docs/pt/20-R8/commands/begin-sql","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbegin-sql.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"begin-sql","title":"Begin SQL","slug":"/commands/begin-sql","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL","permalink":"/docs/pt/20-R8/commands/theme/SQL"},"next":{"title":"End SQL","permalink":"/docs/pt/20-R8/commands/end-sql"}}'),r=s("785893"),o=s("250065");let t={id:"begin-sql",title:"Begin SQL",slug:"/commands/begin-sql",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Begin SQL"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,r.jsx)(n.th,{})]})})}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["Begin SQL \xe9 uma palavra chave que permite indicar no editor de m\xe9todos o inicio de uma sequ\xeancia de comandos SQL que deve ser interpretada pela fonte de dados atual do processo (o motor SQL integrado de 4D ou toda fonte especificada atrav\xe9s o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/sql-login",title:"SQL LOGIN",children:"SQL LOGIN"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Uma sequ\xeancia de comandos SQL come\xe7a por Begin SQL e deve terminar com a palavra chave ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/end-sql",title:"End SQL",children:"End SQL"})]}),"\n",(0,r.jsx)(n.p,{children:"Estas palavras chaves funcionam dessa forma:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Pode colocar uno ou mais blocos de etiquetas ",(0,r.jsx)(n.strong,{children:"Begin SQL/End SQL"})," no mesmo m\xe9todo. Pode gerar m\xe9todos totalmente compostos por c\xf3digo SQL ou misturar c\xf3digo 4D e c\xf3digo SQL no mesmo m\xe9todo."]}),"\n",(0,r.jsxs)(n.li,{children:["Pode escrever varias ",(0,r.jsx)(n.em,{children:"instru\xe7\xf5es SQL"})," na mesma linha ou em diferentes linhas separando as instru\xe7\xf5es com um ponto-e-v\xedrgula \u201C;\u201D. Por exemplo, pode escrever:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Begin SQL\n\xa0\xa0\xa0\xa0INSERT INTO SALESREPS (NOME, IDADE) VALUES (\u2018Henry\u2019,40);\n\xa0\xa0\xa0\xa0INSERT INTO SALESREPS (NOME, IDADE) VALUES (\u2018Bill\u2019,35)\n\xa0End SQL\n"})}),"\n",(0,r.jsx)(n.p,{children:"ou:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Begin SQL\n\xa0\xa0\xa0\xa0INSERT INTO SALESREPS (NOME, IDADE) VALUES (\u2018Henry\u2019,40);INSERT INTO SALESREPS (NOME, IDADE) VALUES (\u2018Bill\u2019,35)\n\xa0End SQL\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note que o ",(0,r.jsx)(n.em,{children:"Depurador"})," 4D avaliar\xe1 o c\xf3digo SQL linha por linha. Em alguns casos, pode ser melhor utilizar mais de uma linha."]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/end-sql",children:"End SQL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/sql-get-current-data-source",children:"SQL Get current data source"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/sql-login",children:"SQL LOGIN"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"948"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var d=s(667294);let r={},o=d.createContext(r);function t(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);