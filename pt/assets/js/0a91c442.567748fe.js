"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41846"],{769159:function(e,r,s){s.r(r),s.d(r,{default:()=>u,frontMatter:()=>a,metadata:()=>o,assets:()=>t,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/set-user-properties","title":"Set user properties","description":"Set user properties ( refUsuario ; nome ; inicio ; senha ; numLogin ; ultLogin {; adesao {; propGrupo}} ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-user-properties.md","sourceDirName":"commands-legacy","slug":"/commands/set-user-properties","permalink":"/docs/pt/20-R7/commands/set-user-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-user-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-user-properties","title":"Set user properties","slug":"/commands/set-user-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET USER ALIAS","permalink":"/docs/pt/20-R7/commands/set-user-alias"},"next":{"title":"User in group","permalink":"/docs/pt/20-R7/commands/user-in-group"}}'),n=s("785893"),d=s("250065");let a={id:"set-user-properties",title:"Set user properties",slug:"/commands/set-user-properties",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Set user properties"})," ( ",(0,n.jsx)(r.em,{children:"refUsuario"})," ; ",(0,n.jsx)(r.em,{children:"nome"})," ; ",(0,n.jsx)(r.em,{children:"inicio"})," ; ",(0,n.jsx)(r.em,{children:"senha"})," ; ",(0,n.jsx)(r.em,{children:"numLogin"})," ; ",(0,n.jsx)(r.em,{children:"ultLogin"})," {; ",(0,n.jsx)(r.em,{children:"adesao"})," {; ",(0,n.jsx)(r.em,{children:"propGrupo"}),"}} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe2metro"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"refUsuario"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"N\xfamero de ID de conta de usu\xe1rio; -1 para adicionar um usu\xe1rio"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"N\xfamero de ID de conta de usu\xe1rio adicionado (se houver)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"nome"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Novo nome de usu\xe1rio"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"inicio"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Novo m\xe9todo de in\xedcio"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"senha"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Nova senha (n\xe3o criptografada); ou * para deixar a senha intocada"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"numLogin"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Novo n\xfamero de logins do banco de dados"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ultLogin"}),(0,n.jsx)(r.td,{children:"Date"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Nova data do \xfaltimo login ao banco de dados"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"adesao"}),(0,n.jsx)(r.td,{children:"Integer array"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"N\xfameros de IDs dos grupos aos quais pertence o usu\xe1rio"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"propGrupo"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"N\xfamero de refer\xeancia de usu\xe1rio do propriet\xe1rio do grupo"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Resultado"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"N\xfamero de ID de refer\xeancia do novo usu\xe1rio"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["Set user properties permite modificar e atualizar as propriedades de uma conta ativa de usu\xe1rio existente cujo n\xfamero de refer\xeancia se passa no par\xe2metro ",(0,n.jsx)(r.em,{children:"refUsuario"})," ou para adicionar um novo usu\xe1rio."]}),"\n",(0,n.jsxs)(r.p,{children:["Se muda as propriedades de um usu\xe1rio existente, deve passar o n\xfamero de refer\xeancia retornado pelo comando ",(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/get-user-list",children:"GET USER LIST"}),". Se a conta de usu\xe1rio n\xe3o existir ou se tiver sido apagada, o erro -9979 \xe9 gerado. Pode interceptar este erro com um m\xe9todo de gest\xe3o de erros instalado por ",(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/on-err-call",children:"ON ERR CALL"}),". De lo contr\xe1rio, pode chamar ",(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/is-user-deleted",children:"Is user deleted"})," para testar a conta de usu\xe1rio antes de chamar Set user properties."]}),"\n",(0,n.jsx)(r.p,{children:"Os n\xfameros de refer\xeancia para os usu\xe1rios podem ser os seguintes:"}),"\n",(0,n.jsxs)(r.p,{children:["Para adicionar um novo usu\xe1rio afiliado ao Desenhador passe -1 em ",(0,n.jsx)(r.em,{children:"refUsuario"})," (ver notas para Bancos de Dados Bin\xe1rios)"]}),"\n",(0,n.jsxs)(r.p,{children:["Depois da chamada, se o usu\xe1rio for adicionado ou modifica com sucesso, seu n\xfamero de refer\xeancia \xfanico \xe9 retornado em ",(0,n.jsx)(r.em,{children:"refUsuario"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Se n\xe3o passa -1, -2 ou um n\xfamero de refer\xeancia de usu\xe1rio v\xe1lido, Set user properties n\xe3o faz nada."}),"\n",(0,n.jsxs)(r.p,{children:["Antes de chamar este comando, passe o novo nome, m\xe9todo de inicio, senha, n\xfamero de usos e a data do \xfaltimo uso do usu\xe1rio, em ",(0,n.jsx)(r.em,{children:"nome, inicio, senha, numLogin"})," e ",(0,n.jsx)(r.em,{children:"ultLogin"}),". Passe uma senha n\xe3o criptografada no par\xe2metro ",(0,n.jsx)(r.em,{children:"senha"}),". 4D a criptografar\xe1 por voc\xea antes de guard\xe1-la na conta de usu\xe1rio.",(0,n.jsx)(r.br,{}),"\nSe o novo nome de usu\xe1rio passado em ",(0,n.jsx)(r.em,{children:"nome"})," n\xe3o for \xfanico (existe um usu\xe1rio com o mesmo nome), o comando n\xe3o faz nada e se retorna o erro -9979. Pode interceptar este erro com um m\xe9todo de gest\xe3o de erros instalado por ",(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Nota"}),": Os par\xe2metros numLogin e ultimoLogin s\xe3o usados apenas em bancos de dados bin\xe1rios e s\xe3o ignorados em bancos de dados projeto."]}),"\n",(0,n.jsxs)(r.p,{children:["Se n\xe3o deseja mudar todas as propriedades do usu\xe1rio (al\xe9m de suas ades\xf5es, ver abaixo), primeiro chame ",(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/get-user-properties",children:"GET USER PROPERTIES"})," e passe os valores retornados para as propriedades que n\xe3o deseja mudar."]}),"\n",(0,n.jsxs)(r.p,{children:["Se n\xe3o deseja modificar a senha de uma conta, passe o s\xedmbolo * no par\xe2metro ",(0,n.jsx)(r.em,{children:"senha"}),". Isto permite mudar outras propriedades da conta do usu\xe1rio sem mudar a senha da conta."]}),"\n",(0,n.jsxs)(r.p,{children:["Se n\xe3o passar o par\xe2metro opcional ",(0,n.jsx)(r.em,{children:"adesao"}),", as ades\xf5es atuais do usu\xe1rio permanecem iguais. Se n\xe3o passar ",(0,n.jsx)(r.em,{children:"adesao"})," quando adiciona um usu\xe1rio, o usu\xe1rio n\xe3o formar\xe1 parte de nenhum grupo.",(0,n.jsx)(r.br,{}),"\nSe passar o par\xe2metro opcional ",(0,n.jsx)(r.em,{children:"adesao"}),", muda todas as ades\xf5es para o usu\xe1rio. Antes de chamar este comando, deve preencher o array ",(0,n.jsx)(r.em,{children:"adesao"})," com os n\xfameros de refer\xeancia \xfanicos dos grupos cujos usu\xe1rios far\xe3o parte."]}),"\n",(0,n.jsxs)(r.p,{children:["(Apenas Bancos de Dados Bin\xe1rios) Se passra o par\xe2metro opcional ",(0,n.jsx)(r.em,{children:"propGrupo"}),", indica o n\xfamero de refer\xeancia do \u201Cpropriet\xe1rio\u201D do grupo, ou seja propriet\xe1rio de grupo dos objetos criados por este usu\xe1rio. Para anular todas as ades\xf5es de um usu\xe1rio, passe um array vazio no par\xe2metro ",(0,n.jsx)(r.em,{children:"adesao"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Nota para bancos de dados bin\xe1rios"}),": Valores de ID de grupos e usu\xe1rios dependem do criador (Designer, Administrador ou propriet\xe1rio de grupo afiliado). Para saber mais veja o par\xe1grafo ",(0,n.jsx)(r.em,{children:"User and group ID ranges"})," Para criar um usu\xe1rio afiliado com o Designer, passe -1 em refUsuario. Para criar um usu\xe1rio afiliado com o Administrador, passe -2 em refUsuario."]}),"\n",(0,n.jsx)(r.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,n.jsxs)(r.p,{children:["Se voc\xea n\xe3o tiver os acessos de privil\xe9gio para chamar Set user properties ou se o sistema de senhas j\xe1 estiver acessado para outro processo, um erro de privil\xe9gio de acesso \xe9 gerado. Voc\xea pode interceptar o erro com um m\xe9todo de gest\xe3o de erros instalado usando ",(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/delete-user",children:"DELETE USER"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/get-group-list",children:"GET GROUP LIST"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/get-user-list",children:"GET USER LIST"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/is-user-deleted",children:"Is user deleted"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/20-R7/commands/validate-password",children:"Validate password"})]}),"\n",(0,n.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"N\xfamero do comando"}),(0,n.jsx)(r.td,{children:"612"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Thread-seguro"}),(0,n.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return i},a:function(){return a}});var o=s(667294);let n={},d=o.createContext(n);function a(e){let r=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(d.Provider,{value:r},e.children)}}}]);