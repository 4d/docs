"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90778"],{590362:function(e,s,r){r.r(s),r.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/get-group-list","title":"GET GROUP LIST","description":"GET GROUP LIST ( nomGrupos ; numGrupos )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-group-list.md","sourceDirName":"commands-legacy","slug":"/commands/get-group-list","permalink":"/docs/pt/20-R8/commands/get-group-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-group-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-group-list","title":"GET GROUP LIST","slug":"/commands/get-group-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get group access","permalink":"/docs/pt/20-R8/commands/get-group-access"},"next":{"title":"GET GROUP PROPERTIES","permalink":"/docs/pt/20-R8/commands/get-group-properties"}}'),o=r("785893"),t=r("250065");let d={id:"get-group-list",title:"GET GROUP LIST",slug:"/commands/get-group-list",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"GET GROUP LIST"})," ( ",(0,o.jsx)(s.em,{children:"nomGrupos"})," ; ",(0,o.jsx)(s.em,{children:"numGrupos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"nomGrupos"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Nomes dos grupos como aparecem na janela de editor de senhas"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"numGrupos"}),(0,o.jsx)(s.td,{children:"Integer array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"N\xfameros de ID de grupo correspondentes"})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["GET GROUP LIST preenche os arrays ",(0,o.jsx)(s.em,{children:"nomGrupos e numGrupos"})," com os nomes e os n\xfameros de refer\xeancia \xfanicos dos grupos tais como aparecem no editor de senhas."]}),"\n",(0,o.jsxs)(s.p,{children:["O array ",(0,o.jsx)(s.em,{children:"numGrupos"}),", sincronizado com o array ",(0,o.jsx)(s.em,{children:"nomGrupos"}),", se preenche com os n\xfameros de refer\xeancia \xfanicos dos grupos."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Nos bancos de dados projeto, esses n\xfameros come\xe7am em 15001 e s\xe3o atribuidos dinamicamente ao in\xedcio e s\xe3o mantidos durante a sess\xe3o."}),"\n",(0,o.jsxs)(s.li,{children:["Nos bancos de dados bin\xe1rios, esses n\xfameros s\xe3o armazenados e pertencem a uma faixa espec\xedfica, segundo o criador do grupo. Para saber mais consulte o par\xe1grafo ",(0,o.jsx)(s.em,{children:"User and group ID ranges"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,o.jsxs)(s.p,{children:["Se n\xe3o tiver privil\xe9gios de acesso para chamar ao comando GET GROUP LIST ou se outro processo j\xe1 estiver aberto no sistema de senhas, um erro de privil\xe9gios de acesso \xe9 gerado. Pode interceptar este erro com um m\xe9todo de gest\xe3o de erros instalado por ",(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/commands/get-group-properties",children:"GET GROUP PROPERTIES"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/commands/get-user-list",children:"GET USER LIST"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/commands/set-group-properties",children:"Set group properties"})]}),"\n",(0,o.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"610"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2717"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(s.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return i},a:function(){return d}});var n=r(667294);let o={},t=n.createContext(o);function d(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);