"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47449"],{45788:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>c});var r=JSON.parse('{"id":"commands-legacy/refresh-license","title":"Refresh license","description":"Refresh license : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/refresh-license.md","sourceDirName":"commands-legacy","slug":"/commands/refresh-license","permalink":"/docs/pt/commands/refresh-license","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frefresh-license.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"refresh-license","title":"Refresh license","slug":"/commands/refresh-license","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"License usage","permalink":"/docs/pt/commands/license-usage"},"next":{"title":"List Box","permalink":"/docs/pt/category/list-box"}}'),t=s("785893"),d=s("250065");let c={id:"refresh-license",title:"Refresh license",slug:"/commands/refresh-license",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Refresh license"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Status object"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"Refresh license"})," atualiza a licen\xe7a atual de servidor 4D. Conecta o servidor com o banco de dados de clientes 4D e ativa automaticamente qualquer licen\xe7a nova ou atualizada (por exemplo, clientes comprados adicionais) relacionada com a licen\xe7a atual."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Objeto devolvido"})}),"\n",(0,t.jsxs)(n.p,{children:["O objeto devolvido por ",(0,t.jsx)(n.strong,{children:"Refresh license"})," cont\xe9m as propriedades abaixo:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:[(0,t.jsx)(n.strong,{children:"Propriedad"}),"e"]}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Tipo"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{children:"booleano"}),(0,t.jsx)(n.td,{children:"True se a a\xe7\xe3o de atualiza\xe7\xe3o for exitosa, do contr\xe1rio False."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"status"}),(0,t.jsx)(n.td,{children:"n\xfamero"}),(0,t.jsx)(n.td,{children:"C\xf3digo de estado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statusText"}),(0,t.jsx)(n.td,{children:"texto"}),(0,t.jsx)(n.td,{children:"Descri\xe7\xe3o de estado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tips"}),(0,t.jsx)(n.td,{children:"texto"}),(0,t.jsx)(n.td,{children:"Sugest\xf5es para resolver o erro."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": este comando s\xf3 pode ser executado em 4D Server. Se o m\xe9todo que chamar ao comando for executado localmente em um cliente remoto ou em um s\xf3 usu\xe1rio 4D, ",(0,t.jsx)(n.strong,{children:"Refresh license"})," n\xe3o faz nada."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Se quiser atualizar sua licen\xe7a e receber uma mensagem quando se completar:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo ao executar no servidor\n\xa0var $res : Object\n\xa0$res:=Refresh license\n\xa0If($res.success)\n\xa0\xa0\xa0\xa0ALERT("Success")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT($res.statusText)\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1336"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var r=s(667294);let t={},d=r.createContext(t);function c(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);