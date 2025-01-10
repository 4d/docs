"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51036"],{684584:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>i,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/drop-remote-user","title":"DROP REMOTE USER","description":"DROP REMOTE USER ( sessaoUsuario )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/drop-remote-user.md","sourceDirName":"commands-legacy","slug":"/commands/drop-remote-user","permalink":"/docs/pt/commands/drop-remote-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdrop-remote-user.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"drop-remote-user","title":"DROP REMOTE USER","slug":"/commands/drop-remote-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Database measures","permalink":"/docs/pt/commands/database-measures"},"next":{"title":"ds","permalink":"/docs/pt/commands/ds"}}'),o=n("785893"),t=n("250065");let d={id:"drop-remote-user",title:"DROP REMOTE USER",slug:"/commands/drop-remote-user",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"DROP REMOTE USER"})," ( ",(0,o.jsx)(s.em,{children:"sessaoUsuario"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"sessaoUsuario"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"ID de sess\xe3o do usu\xe1rio"})]})})]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando ",(0,o.jsx)(s.strong,{children:"DROP REMOTE USER"})," desconecta a um usu\xe1rio espec\xedfico conectado remotamente ao servidor 4D."]}),"\n",(0,o.jsxs)(s.p,{children:["Em ",(0,o.jsx)(s.em,{children:"sesionUsuario"}),", passe o ID de sess\xe3o do usu\xe1rio que quiser desconectar do servidor. Pode recuperar a ID de sess\xe3o com o comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/process-activity",children:"Process activity"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota:"})," este comando se executa de forma ass\xedncrona e apenas pode ser executada em 4D Server. Se o m\xe9todo que chamar ao comando for executado localmente em 4D remoto ou monousuario, ",(0,o.jsx)(s.strong,{children:"DROP REMOTE USER"})," n\xe3o faz nada."]}),"\n",(0,o.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.p,{children:"Se quiser eliminar um usu[ario remoto espec\xedfico:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo a executar no servidor\n\xa0var $userCol : Collection\n\xa0var $element : Object\n\xa0\n\xa0\xa0//desconectar ao usu\xe1rio remoto Vanessa\n\xa0$userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")\n\xa0For each($element;$userCol)\n\xa0\xa0\xa0\xa0DROP REMOTE USER($element.ID)\n\xa0End for each\n'})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/commands/reject-new-remote-connections",children:"REJECT NEW REMOTE CONNECTIONS"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/send-message-to-remote-user",children:"SEND MESSAGE TO REMOTE USER"})]}),"\n",(0,o.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"1633"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return d}});var r=n(667294);let o={},t=r.createContext(o);function d(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);