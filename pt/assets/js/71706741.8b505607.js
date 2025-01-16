"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41650"],{307273:function(e,o,a){a.r(o),a.d(o,{default:()=>l,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>s});var t=JSON.parse('{"id":"commands-legacy/on-backup-shutdown-database-method","title":"On Backup Shutdown database method","description":"$1 -> On Backup Shutdown database method","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-backup-shutdown-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-backup-shutdown-database-method","permalink":"/docs/pt/20-R7/commands/on-backup-shutdown-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-backup-shutdown-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-backup-shutdown-database-method","title":"On Backup Shutdown database method","slug":"/commands/on-backup-shutdown-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Database Methods","permalink":"/docs/pt/20-R7/category/database-methods"},"next":{"title":"On Backup Startup database method","permalink":"/docs/pt/20-R7/commands/on-backup-startup-database-method"}}'),n=a("785893"),d=a("250065");let r={id:"on-backup-shutdown-database-method",title:"On Backup Shutdown database method",slug:"/commands/on-backup-shutdown-database-method",displayed_sidebar:"docs"},s=void 0,c={},i=[];function u(e){let o={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"$1 -> On Backup Shutdown database method"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"$1"}),(0,n.jsx)(o.td,{children:"Integer"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"0 = backup executed correctly; other value = error, interrupted by user or code returned by On Backup Startup"})]})})]}),"\n",(0,n.jsx)(o.h4,{id:""}),"\n",(0,n.jsx)(o.p,{children:"O On Backup Shutdown database method \xe9 chamado a cada vez que o backup do banco de dados termina. As raz\xf5es para deter um backup podem ser o fim da c\xf3pia, interrup\xe7\xe3o por parte do usu\xe1rio ou um erro."}),"\n",(0,n.jsx)(o.p,{children:"Isto envolve todos os ambientes 4D (todos os modos), 4D Server, bem como os aplicativos 4D compilados e fusionados com 4D Volume Desktop."}),"\n",(0,n.jsxs)(o.p,{children:["O On Backup Shutdown database method permite verificar que o backup foi executado corretamente. Ele recebe o par\xe2metro ",(0,n.jsx)(o.em,{children:"$1"}),", um valor representando o status do backup uma vez que ele tenha sido finalizado:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Se o backup foi executado corretamente, ",(0,n.jsx)(o.em,{children:"$1"})," \xe9 igual a 0."]}),"\n",(0,n.jsx)(o.li,{children:"Se o backup foi interrompido pelo usu\xe1rio ou ocorreu um erro, $1 \xe9 diferente de 0."}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Se o backup foi parado pelo ",(0,n.jsx)(o.em,{children:"M\xe9todo de Banco de Dados On Backup Startup"})," (",(0,n.jsx)(o.em,{children:"$0"})," # 0), ",(0,n.jsx)(o.em,{children:"$1"})," obt\xe9m o valor devolvido no par\xe2metro $0. Isto lhe permite implementar um sistema de gerenciamento de erros personalizados"]}),"\n",(0,n.jsxs)(o.li,{children:["Se o backup foi parado por um erro, o c\xf3digo do erro \xe9 devolvido em ",(0,n.jsx)(o.em,{children:"$1."}),"\nEm todos os casos, pode obter informa\xe7\xe3o sobre o erro utilizando o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/backup-info",children:"BACKUP INFO"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota"}),": Voc\xea deve declarar o par\xe2metro ",(0,n.jsx)(o.em,{children:"$1"})," (inteiro longo) no m\xe9todo do banco de dados:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"\xa0var $1 : Integer\n"})}),"\n",(0,n.jsxs)(o.p,{children:["\xc9 importante notar que no caso de erro durante o backup (disco cheio, suporte inacess\xedvel, etc.), a informa\xe7\xe3o relativa ao erro \xe9 mostrada unicamente no monitor de 4D Server ou no CSM, e \xe9 copiado no hist\xf3rico de backups. N\xe3o \xe9 mostrada uma caixa de di\xe1logo de alerta e a vari\xe1vel ",(0,n.jsx)(o.em,{children:"erro"})," n\xe3o se modifica. Se deseja notificar ao administrador que se produziu um erro, particularmente no contexto de uma aplica\xe7\xe3o em modo cliente/servidor, \xe9 necess\xe1rio utilizar o ",(0,n.jsx)(o.strong,{children:"On Backup Shutdown database method"}),"."]})]})}function l(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return s},a:function(){return r}});var t=a(667294);let n={},d=t.createContext(n);function r(e){let o=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(d.Provider,{value:o},e.children)}}}]);