"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9115],{668547:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>t,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>p});var s=o(474848),n=o(28453);const d={id:"set-group-properties",title:"Set group properties",slug:"/commands/set-group-properties",displayed_sidebar:"docs"},i=void 0,a={id:"commands-legacy/set-group-properties",title:"Set group properties",description:"Set group properties ( refGrupo ; nome ; proprietario {; membros} )  -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-group-properties.md",sourceDirName:"commands-legacy",slug:"/commands/set-group-properties",permalink:"/docs/pt/commands/set-group-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-group-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-group-properties",title:"Set group properties",slug:"/commands/set-group-properties",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET GROUP ACCESS",permalink:"/docs/pt/commands/set-group-access"},next:{title:"SET PLUGIN ACCESS",permalink:"/docs/pt/commands/set-plugin-access"}},t={},p=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){const r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Set group properties"})," ( ",(0,s.jsx)(r.em,{children:"refGrupo"})," ; ",(0,s.jsx)(r.em,{children:"nome"})," ; ",(0,s.jsx)(r.em,{children:"proprietario"})," {; ",(0,s.jsx)(r.em,{children:"membros"}),"} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"refGrupo"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"N\xfamero de ID do grupo; ou -1 para adicionar um grupo Designer, ou -2 para adicionar um grupo Administrador"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"N\xfamero de ID \xfanica do grupo adicionado (se houver)"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"nome"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Novo nome do grupo"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"proprietario"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"N\xfamero de ID do novo propriet\xe1rio do grupo"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"membros"}),(0,s.jsx)(r.td,{children:"Integer array"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Novos membros do grupo"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Resultado"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"N\xba de ID do novo grupo"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["Set group properties permite modificar e atualizar as propriedades de um grupo existente cujo n\xfamero de refer\xeancia \xfanico se passa em ",(0,s.jsx)(r.em,{children:"refGrupo"}),", ou para adicionar um novo grupo"]}),"\n",(0,s.jsxs)(r.p,{children:["Se modificar as propriedades de um grupo existente, deve passar um n\xfamero de refer\xeancia v\xe1lido retornado pelo comando ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/get-group-list",children:"GET GROUP LIST"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Para adicionar um novo grupo passe -1 em ",(0,s.jsx)(r.em,{children:"refGrupo"})," (veja as notas para bancos de dados bin\xe1rios)."]}),"\n",(0,s.jsxs)(r.p,{children:["Depois da chamada, se o grupo for adicionado com sucesso, retorna seu n\xfamero de refer\xeancia \xfanico em ",(0,s.jsx)(r.em,{children:"refGrupo"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Se n\xe3o passa -1, -2 ou um n\xfamero de refer\xeancia de grupo v\xe1lido, Set group properties n\xe3o faz nada."}),"\n",(0,s.jsxs)(r.p,{children:["Passe o novo nome do grupo no par\xe2metro ",(0,s.jsx)(r.em,{children:"nome"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["(Apenas para Bancos de Dados Bin\xe1rios) Passe o n\xfamero da ID de refer\xeancia do novo propriet\xe1rio do grupo no par\xe2metro ",(0,s.jsx)(r.em,{children:"propriet\xe1rio"}),". Este par\xe2metro \xe9 ignorado em bancos de dados projeto."]}),"\n",(0,s.jsxs)(r.p,{children:["Se n\xe3o quiser mudar todas as propriedades do grupo (al\xe9m dos membros, ver abaixo) primeiro chame ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/get-group-properties",children:"GET GROUP PROPERTIES"})," e passe os valores retornados para as propriedades que quiser deixar intactas."]}),"\n",(0,s.jsxs)(r.p,{children:["Se n\xe3o passar o par\xe2metro opcional ",(0,s.jsx)(r.em,{children:"membros"}),", a lista atual de membros do grupo permanece sem mudan\xe7as. Se n\xe3o passar ",(0,s.jsx)(r.em,{children:"membros"})," enquanto adiciona um grupo, o grupo n\xe3o ter\xe1 membros."]}),"\n",(0,s.jsxs)(r.p,{children:["Se passa o par\xe2metro opcional ",(0,s.jsx)(r.em,{children:"membros"}),", modifica toda a lista de membros para este grupo. Antes de chamar esta rotina, deve preencher o array ",(0,s.jsx)(r.em,{children:"membros"})," com os n\xfameros de refer\xeancia \xfanicos dos usu\xe1rios e grupos que o grupo ter\xe1 como membros."]}),"\n",(0,s.jsxs)(r.p,{children:["Para eliminar todos os membros de um grupo, passe um array vazio no par\xe2metro ",(0,s.jsx)(r.em,{children:"membros"}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Nota para bancos de dados bin\xe1rios:"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Valores de ID de Grupo e Usu\xe1rio dependem do criador (Designer, Administrador ou propriet\xe1rio de grupo afiliado). Para saber mais veja o par\xe1grafo ",(0,s.jsx)(r.em,{children:"User and group ID ranges"}),". Para criar um grupo afiliado com o Designer, passe -1 em grupoID. Para criar um grupo afiliado com o Administrador, passe -2 em grupoID."]}),"\n",(0,s.jsxs)(r.li,{children:["o propriet\xe1rio de um grupo n\xe3o est\xe1 definido automaticamente como membro do grupo que possuir. \xc9 sua decis\xe3o incluir ao propriet\xe1rio do grupo no grupo, utilizando o par\xe2metro ",(0,s.jsx)(r.em,{children:"membros"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,s.jsxs)(r.p,{children:["Se voc\xea n\xe3o tiver os acessos de privil\xe9gio para chamar Set group properties ou se o sistema de senhas j\xe1 estiver acessado para outro processo, um erro de privil\xe9gio de acesso \xe9 gerado. Voc\xea pode interceptar o erro com um m\xe9todo de gest\xe3o de erros instalado usando ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/commands/get-group-list",children:"GET GROUP LIST"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/commands/get-group-properties",children:"GET GROUP PROPERTIES"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/commands/get-user-list",children:"GET USER LIST"})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>a});var s=o(296540);const n={},d=s.createContext(n);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);