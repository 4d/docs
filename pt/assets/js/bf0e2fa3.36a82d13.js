"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77804"],{605505:function(e,s,r){r.r(s),r.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/get-user-list","title":"GET USER LIST","description":"GET USER LIST ( nomUsuarios ; numUsuarios )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-user-list.md","sourceDirName":"commands-legacy","slug":"/commands/get-user-list","permalink":"/docs/pt/commands/get-user-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-user-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-user-list","title":"GET USER LIST","slug":"/commands/get-user-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get plugin access","permalink":"/docs/pt/commands/get-plugin-access"},"next":{"title":"GET USER PROPERTIES","permalink":"/docs/pt/commands/get-user-properties"}}'),o=r("785893"),d=r("250065");let t={id:"get-user-list",title:"GET USER LIST",slug:"/commands/get-user-list",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"GET USER LIST"})," ( ",(0,o.jsx)(s.em,{children:"nomUsuarios"})," ; ",(0,o.jsx)(s.em,{children:"numUsuarios"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"nomUsuarios"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Nomes dos usu\xe1rios como aparecem na janela de editor de senhas"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"numUsuarios"}),(0,o.jsx)(s.td,{children:"Integer array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"N\xfameros correspondentes de refer\xeancias dos usu\xe1rios"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["GET USER LIST preenche os arrays ",(0,o.jsx)(s.em,{children:"nomUsuario"})," e ",(0,o.jsx)(s.em,{children:"numUsuario"})," com os nomes e os n\xfameros de refer\xeancia \xfanicos dos usu\xe1rios tais como aparecem na janela de senhas."]}),"\n",(0,o.jsxs)(s.p,{children:["O array ",(0,o.jsx)(s.em,{children:"nomUsuario"})," se preenche com os nomes de usu\xe1rios mostrados na janela de senhas, incluindo os usu\xe1rios cujas contas est\xe3o desativadas (os nomes dos usu\xe1rios mostrados em verde na janela de senhas)."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota"}),": use o comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/is-user-deleted",children:"Is user deleted"})," para detectar os usu\xe1rios apagados."]}),"\n",(0,o.jsxs)(s.p,{children:["O array ",(0,o.jsx)(s.em,{children:"numUsuario"}),", sincronizado com ",(0,o.jsx)(s.em,{children:"nomUsuario"}),", se preenche com os n\xfameros de refer\xeancia \xfanicos dos usu\xe1rios."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota para bancos de dados bin\xe1rios:"})," Grupos e valores de usu\xe1rios ID dependem do seu criador (Designer, Administrador ou propriet\xe1rio de grupo afiliado). Para saber mais veja o par\xe1grafo ",(0,o.jsx)(s.em,{children:"User and group ID ranges"})," ."]}),"\n",(0,o.jsx)(s.h4,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,o.jsxs)(s.p,{children:["Se n\xe3o tiver privil\xe9gios de acesso para chamar ao comando GET USER LIST ou se outro processo abrir no sistema de senhas, um erro de privil\xe9gios de acesso \xe9 gerado. Pode interceptar este erro com um m\xe9todo de gest\xe3o de erros instalado por ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/commands/get-group-list",children:"GET GROUP LIST"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,o.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"609"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2717"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(s.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return i},a:function(){return t}});var n=r(667294);let o={},d=n.createContext(o);function t(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);