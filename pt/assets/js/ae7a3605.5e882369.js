"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65586"],{881082:function(e,r,n){n.r(r),n.d(r,{default:()=>p,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/get-group-properties","title":"GET GROUP PROPERTIES","description":"GET GROUP PROPERTIES ( refGrupo ; nome ; proprietario {; membros} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-group-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-group-properties","permalink":"/docs/pt/commands/get-group-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-group-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-group-properties","title":"GET GROUP PROPERTIES","slug":"/commands/get-group-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET GROUP LIST","permalink":"/docs/pt/commands/get-group-list"},"next":{"title":"Get plugin access","permalink":"/docs/pt/commands/get-plugin-access"}}'),o=n("785893"),d=n("250065");let t={id:"get-group-properties",title:"GET GROUP PROPERTIES",slug:"/commands/get-group-properties",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"GET GROUP PROPERTIES"})," ( ",(0,o.jsx)(r.em,{children:"refGrupo"})," ; ",(0,o.jsx)(r.em,{children:"nome"})," ; ",(0,o.jsx)(r.em,{children:"proprietario"})," {; ",(0,o.jsx)(r.em,{children:"membros"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"refGrupo"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"N\xfamero de referencia ID de grupo"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"nome"}),(0,o.jsx)(r.td,{children:"Text"}),(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:"Nome do grupo"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"proprietario"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:"N\xfamero de ID do propriet\xe1rio do grupo"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"membros"}),(0,o.jsx)(r.td,{children:"Integer array"}),(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:"Membros do grupo"})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["GET GROUP PROPERTIES retorna as propriedades do grupo cujo n\xfamero de refer\xeancia \xfanico de ID de grupo pode passar em ",(0,o.jsx)(r.em,{children:"GrupoID"}),". Deve passar o n\xfamero de refer\xeancia do grupo retornado pelo comando ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/get-group-list",children:"GET GROUP LIST"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"Se n\xe3o passar um n\xfamero de refer\xeancia v\xe1lido, GET GROUP PROPERTIES retorna par\xe2metros vazios."}),"\n",(0,o.jsxs)(r.p,{children:["Depois da chamada do comando, recupera o nome do grupo no par\xe2metros ",(0,o.jsx)(r.em,{children:"nome"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Se passar o par\xe2metro opcional ",(0,o.jsx)(r.em,{children:"membros"}),", ele retorna os n\xfameros de refer\xeancia \xfanicos dos usu\xe1rios que pertencem ao grupo."]}),"\n",(0,o.jsxs)(r.p,{children:["Nota para bancos de dados bin\xe1rios: Valores de grupo e ID de usu\xe1rios dependem de seu criador (Designer, Administrador, ou propriet\xe1rio de grupo afiliado). Para saber mais, veja o par\xe1grafo ",(0,o.jsx)(r.em,{children:"User and group ID ranges"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"["}),"\n",(0,o.jsx)(r.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,o.jsxs)(r.p,{children:["Se n\xe3o tiver privil\xe9gios de acesso para chamar ao comando GET GROUP PROPERTIES ou se outro processo abrir no sistema de senhas, um erro de privil\xe9gios de acesso \xe9 gerado. Pode interceptar este erro com um m\xe9todo de gest\xe3o de erros instalado por ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/commands/get-group-list",children:"GET GROUP LIST"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/get-user-list",children:"GET USER LIST"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/set-group-properties",children:"Set group properties"})]}),"\n",(0,o.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"613"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2717"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(r.td,{children:"error"})]})]})]})]})}function p(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return t}});var s=n(667294);let o={},d=s.createContext(o);function t(e){let r=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);