"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2736"],{901555:function(e,o,s){s.r(o),s.d(o,{default:()=>l,frontMatter:()=>d,metadata:()=>r,assets:()=>u,toc:()=>t,contentTitle:()=>n});var r=JSON.parse('{"id":"Users/editing","title":"Gest\xe3o de usu\xe1rios e grupos 4D","description":"4D fornece aos usu\xe1rios privil\xe9gios de acesso standard e certos poderes. Quando o usu\xe1rio e sistema de grupos tiver sido iniciado, esses privil\xe9gios come\xe7am a funcionar.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Users/handling_users_groups.md","sourceDirName":"Users","slug":"/Users/editing","permalink":"/docs/pt/19/Users/editing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Users%2Fhandling_users_groups.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"editing","title":"Gest\xe3o de usu\xe1rios e grupos 4D"},"sidebar":"docs","previous":{"title":"Vis\xe3o Geral","permalink":"/docs/pt/19/Users/overview"},"next":{"title":"Vis\xe3o Geral","permalink":"/docs/pt/19/MSC/overview"}}'),a=s("785893"),i=s("250065");let d={id:"editing",title:"Gest\xe3o de usu\xe1rios e grupos 4D"},n=void 0,u={},t=[{value:"Designer e Administrador",id:"designer-e-administrador",level:2},{value:"Editor de grupos",id:"editor-de-grupos",level:2},{value:"Adicionar e modificar usu\xe1rios",id:"adicionar-e-modificar-usu\xe1rios",level:3},{value:"Apagar um usu\xe1rio",id:"apagar-um-usu\xe1rio",level:3},{value:"Propriedades de usu\xe1rio",id:"propriedades-de-usu\xe1rio",level:3},{value:"Editor de usu\xe1rios",id:"editor-de-usu\xe1rios",level:2},{value:"Grupos de configura\xe7\xe3o",id:"grupos-de-configura\xe7\xe3o",level:3},{value:"Colocar usu\xe1rios ou grupos dentro de grupos",id:"colocar-usu\xe1rios-ou-grupos-dentro-de-grupos",level:3},{value:"Atribui\xe7\xe3o de um grupo a um plug-in ou a um servidor",id:"atribui\xe7\xe3o-de-um-grupo-a-um-plug-in-ou-a-um-servidor",level:3},{value:"Um esquema de acesso hier\xe1rquico",id:"um-esquema-de-acesso-hier\xe1rquico",level:3}];function c(e){let o={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"4D fornece aos usu\xe1rios privil\xe9gios de acesso standard e certos poderes. Quando o usu\xe1rio e sistema de grupos tiver sido iniciado, esses privil\xe9gios come\xe7am a funcionar."}),"\n",(0,a.jsx)(o.h2,{id:"designer-e-administrador",children:"Designer e Administrador"}),"\n",(0,a.jsxs)(o.p,{children:["O usu\xe1rio mais poderoso \xe9 chamado ",(0,a.jsx)(o.strong,{children:"Designer"}),". Nenhum aspecto do banco de dados \xe9 fechado ao Designer. O Designer pode:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"acessar todos os servidores de banco de dados sem restri\xe7\xe3o,"}),"\n",(0,a.jsx)(o.li,{children:"criar usu\xe1rios e grupos,"}),"\n",(0,a.jsx)(o.li,{children:"atribuir privil\xe9gios de acesso a grupos,"}),"\n",(0,a.jsx)(o.li,{children:"acessar o ambiente Design. Em ambiente monousu\xe1rio, direitos de acesso de Designer s\xe3o sempre usados. Em ambiente cliente/servidor, atribuir uma senha ao Designer ativa a exibi\xe7\xe3o do di\xe1logo de login de usu\xe1rio 4D.  Acesso ao ambiente Design \xe9 apenas leitura."}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Depois do Designer, o usu\xe1rio mais poderoso \xe9 o ",(0,a.jsx)(o.strong,{children:"Administrador"}),", ao qual \xe9 geralmente dada a tarefa de gerenciamento de acesso ao sistema e administra\xe7\xe3o de funcionalidades."]}),"\n",(0,a.jsx)(o.p,{children:"O Administrador n\xe3o pode:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"criar usu\xe1rios e grupos,"}),"\n",(0,a.jsx)(o.li,{children:"acessar ao monitor e janela de Administra\xe7\xe3o 4D Server"}),"\n",(0,a.jsx)(o.li,{children:"acessar a janela MSC para gerenciar c\xf3pias de seguran\xe7a, restaura\xe7\xf5es ou servidor."}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"O administrador pode:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"editar o usu\xe1rio Designer"}),"\n",(0,a.jsx)(o.li,{children:"como padr\xe3o, acessar as partes protegidas do banco de dados. O Administrador n\xe3o pode acessar o modo Design se for restringido. In particular, the Administrator cannot access to the Design mode if it is restricted. O administrador \xe9 inscrito em todo novo grupo, mas \xe9 poss\xedvel remover o nome do Administrador de qualquer grupo."}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Tanto o Designer quanto o Administrador est\xe3o dispon\xedveis como padr\xe3o em todos os bancos de dados. No di\xe1logo de gest\xe3o de usu\xe1rios, os \xedcones de Designer e Administrator s\xe3o exibidos em verde e vermelho, respectivamentes:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["\xcdcone Designer: ",(0,a.jsx)(o.img,{src:s(626032).Z+"",width:"15",height:"15"})]}),"\n",(0,a.jsxs)(o.li,{children:["\xcdcone de Administrador: ",(0,a.jsx)(o.img,{src:s(567099).Z+"",width:"15",height:"15"})]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Pode renomear os usu\xe1rios Designer e Administardor. Na linguagem, o ID de Designer \xe9 sempre 1 e a ID de Administrador \xe9 sempre 2."}),"\n",(0,a.jsx)(o.p,{children:"O Designer e Administrador podem cada um criar at\xe9 16.000 grupos e 16 mil usu\xe1rios."}),"\n",(0,a.jsx)(o.h2,{id:"editor-de-grupos",children:"Editor de grupos"}),"\n",(0,a.jsx)(o.p,{children:"O editor de usu\xe1rios est\xe1 na Barra de Ferramentas de 4D."}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:s(267350).Z+"",width:"778",height:"276"})}),"\n",(0,a.jsx)(o.h3,{id:"adicionar-e-modificar-usu\xe1rios",children:"Adicionar e modificar usu\xe1rios"}),"\n",(0,a.jsx)(o.p,{children:"Para usar o editor de usu\xe1rios para criar contas de usu\xe1rio, estabele\xe7a as propriedades e atribua aos v\xe1rios grupos."}),"\n",(0,a.jsx)(o.p,{children:"Para adicionar um usu\xe1rio da Barra de Ferramentas:"}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsxs)(o.li,{children:["Selecione ",(0,a.jsx)(o.strong,{children:"Tool Box > Users"})," do menu",(0,a.jsx)(o.strong,{children:"Design"})," ou clique no bot\xe3o ",(0,a.jsx)(o.strong,{children:"Tool Box"})," da barra 4D. 4D exibe o editor de usu\xe1rios."]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["A lista de usu\xe1rios exibe todos os usu\xe1rios, incluindo o",(0,a.jsx)(o.a,{href:"#designer-and-administrator",children:"Designer and the Administrator"}),"."]}),"\n",(0,a.jsxs)(o.ol,{start:"2",children:["\n",(0,a.jsxs)(o.li,{children:["Clique no bot\xe3o ",(0,a.jsx)(o.img,{src:s(362095).Z+"",width:"20",height:"16"})," que est\xe1 abaixo da lista de usu\xe1rios. OR Right-click in the list of users and choose ",(0,a.jsx)(o.strong,{children:"Add"})," or ",(0,a.jsx)(o.strong,{children:"Duplicate"})," in the context menu."]}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["O comando ",(0,a.jsx)(o.strong,{children:"Duplicate"})," pode ser usado para criar rapidamente v\xe1rios usu\xe1rios com as mesmas caracter\xedsticas."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:'4D adiciona um novo usu\xe1rio para a lista, chamado "Novo usu\xe1rioX" como padr\xe3o.'}),"\n",(0,a.jsxs)(o.ol,{start:"3",children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Digite o nome de usu\xe1rio. Enter the user name. Pode renomear um usu\xe1rio a qualquer momento usando o comando ",(0,a.jsx)(o.strong,{children:"Rename"})," do menu contextual ou usando os atalhos Alt+clique (Windows) ou Op\xe7\xe3o+clique (macOS), ou ainda clicando duas vezes no nome que quiser mudar."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Para digitar uma senha para o usu\xe1rio, clique o bot\xe3o ",(0,a.jsx)(o.strong,{children:"Edit..."})," na \xe1rea de propriedades de usu\xe1rio e digite a senha daus vezes na caixa de di\xe1logo. Pode usar at\xe9 15 caracteres alfanum\xe9ricos para a senha. O editor de senhas \xe9 sens\xedvel a mai\xfasculas ou min\xfasculas."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:['Os usu\xe1rios podem mudar suas senhas a qualquer momento de acordo com as op\xe7\xf5es na p\xe1gina "Seguran\xe7a" das configura\xe7\xf5es de banco de dados ou usando o comando ',(0,a.jsx)(o.code,{children:"CHANGE PASSWORD"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(o.ol,{start:"5",children:["\n",(0,a.jsx)(o.li,{children:'Estabele\xe7a os grupos aos quais o usu\xe1rio vai pertencer com a tabela "Membro de Grupos". Pode adicionar ou remover os usu\xe1rios selecionados de ou para um grupo marcando a op\xe7\xe3o correspondente na coluna Membro.'}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["A ades\xe3o do usu\xe1rio aos diferentes grupos tamb\xe9m pode ser estabelecida por grupo na ",(0,a.jsx)(o.a,{href:"#configuring-groups",children:"p\xe1gina Grupos"}),"."]}),"\n",(0,a.jsx)(o.h3,{id:"apagar-um-usu\xe1rio",children:"Apagar um usu\xe1rio"}),"\n",(0,a.jsxs)(o.p,{children:["Para apagar um usu\xe1rio, selecione-o e clique no bot\xe3o apagar ou use o comando ",(0,a.jsx)(o.strong,{children:"Delete"})," no menu contextual. ",(0,a.jsx)(o.img,{src:s(153576).Z+"",width:"19",height:"18"})]}),"\n",(0,a.jsx)(o.p,{children:"Usu\xe1rios deletados n\xe3o aparecem mais no editor de Usu\xe1rios. Note que as IDs de usu\xe1rios deletados s\xe3o retribu\xeddas quando novas contas de usu\xe1rio forem criadas."}),"\n",(0,a.jsx)(o.h3,{id:"propriedades-de-usu\xe1rio",children:"Propriedades de usu\xe1rio"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Tipo de usu\xe1rio"}),': o campo Tipo de usu\xe1rio cont\xe9m "Designer", "Administrador", ou (para todos os outros usu\xe1rios) "Usu\xe1rio".']}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"M\xe9todo de inicializa\xe7\xe3o"}),": nome do m\xe9todo associado que ser\xe1 executado automaticamente quando o usu\xe1rio abrir a aplica\xe7\xe3o (opcional). Esse m\xe9todo pode ser usado por exemplo para carregar as prefer\xeancias de usu\xe1rio."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"editor-de-usu\xe1rios",children:"Editor de usu\xe1rios"}),"\n",(0,a.jsx)(o.p,{children:"O editor para grupos est\xe1 na Barra de ferramentas de 4D."}),"\n",(0,a.jsx)(o.h3,{id:"grupos-de-configura\xe7\xe3o",children:"Grupos de configura\xe7\xe3o"}),"\n",(0,a.jsx)(o.p,{children:"Pode usar o editor de grupos para estabelecer os elementos que cada grupo conter (usu\xe1rios ou outros grupos) e distribuir acesso aos plug-ins."}),"\n",(0,a.jsx)(o.p,{children:"Lembre que se um grupo for criado n\xe3o pode ser apagado. Se quiser desativar um grupo, precisa remover primeiro todos seus usu\xe1rios."}),"\n",(0,a.jsx)(o.p,{children:"Para criar um gurpo:"}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Selecione ",(0,a.jsx)(o.strong,{children:"Caixa de Ferramentas > Grupos"})," no menu ",(0,a.jsx)(o.strong,{children:"Design"})," ou clique no bot\xe3o ",(0,a.jsx)(o.strong,{children:"Caixa de Ferramentas"})," da barra de ferramentas de 4D e depois no bot\xe3o ",(0,a.jsx)(o.strong,{children:"Grupos"}),". 4D exibe a janela de editor de grupos. A lista de grupos exibe todos os grupos do banco de dados."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Clique no bot\xe3o ",(0,a.jsx)(o.img,{src:s(362095).Z+"",width:"20",height:"16"})," abaixo da lista de grupos",(0,a.jsx)(o.br,{}),"\n. OU",(0,a.jsx)(o.br,{}),"\nClique com o bot\xe3o direito do mouse na lista de grupos e escolha o comando ",(0,a.jsx)(o.strong,{children:"Adicionar"})," ou ",(0,a.jsx)(o.strong,{children:"Duplicar"})," no menu de contexto."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"O comando Duplicar pode ser usado para criar v\xe1rios grupos tendo as mesmas caracter\xedsticas."}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:'4D adiciona um novo grupo para a lista, chamado "Novo grupoX".'}),"\n",(0,a.jsxs)(o.ol,{start:"3",children:["\n",(0,a.jsxs)(o.li,{children:["Digite o nome do novo grupo. O nome de grupo pode ter at\xe9 15 caracteres. Pode renomear um grupo a qualquer momento usando o comando ",(0,a.jsx)(o.strong,{children:"Renomear"})," do menu contextual ou usando os atalhos Alt+clique (Windows) ou Op\xe7\xe3o+clique (macOS), ou ainda clicando duas vezes no nome que quiser mudar."]}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"colocar-usu\xe1rios-ou-grupos-dentro-de-grupos",children:"Colocar usu\xe1rios ou grupos dentro de grupos"}),"\n",(0,a.jsx)(o.p,{children:"Pode colocar qualquer usu\xe1rio ou grupo dentro de um grupo, e pode tamb\xe9m colocar um grupo dentro de v\xe1rios outros grupos. N\xe3o \xe9 obrigat\xf3rio colocar um usu\xe1rio em um grupo."}),"\n",(0,a.jsx)(o.p,{children:'Para colocar um usu\xe1rio ou grupo em um grupo, precisa marcar a op\xe7\xe3o "Membro" para cada usu\xe1rio ou grupo na \xe1rea de atribui\xe7\xe3o de membros:'}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:s(107311).Z+"",width:"450",height:"263"})}),"\n",(0,a.jsx)(o.p,{children:"Se marcar o nome de usu\xe1rio, esse usu\xe1rio \xe9 adicionado ao grupo. Se marcar o nome de um grupo, todos os usu\xe1rios do grupo ser\xe3o adicionados ao novo grupo. O usu\xe1rio ou grupo afiliado ter\xe1 ent\xe3o os mesmos privil\xe9gios de acesso que os que foram atribu\xeddos ao novo grupo."}),"\n",(0,a.jsxs)(o.p,{children:['A coloca\xe7\xe3o de grupos noutros grupos permite-lhe criar uma hierarquia de usu\xe1rios. Os usu\xe1rios de um grupo colocado em outro grupo ter\xe3o privil\xe9gios de acesso de ambos os grupos. Veja "',(0,a.jsx)(o.a,{href:"#an-access-hierarchy-scheme",children:"Um esquema de hierarquia de acesso"}),'" abaixo.']}),"\n",(0,a.jsx)(o.p,{children:"Para remover um usu\xe1rio ou grupo de outro grupo, voc\xea s\xf3 precisa desmarcar a op\xe7\xe3o correspondente na \xe1rea de atribui\xe7\xe3o de membros."}),"\n",(0,a.jsx)(o.h3,{id:"atribui\xe7\xe3o-de-um-grupo-a-um-plug-in-ou-a-um-servidor",children:"Atribui\xe7\xe3o de um grupo a um plug-in ou a um servidor"}),"\n",(0,a.jsx)(o.p,{children:"Voc\xea pode atribuir privil\xe9gios de grupo a qualquer plug-in instalado no projeto. Isto inclui todos os plug-ins 4D e de terceiros."}),"\n",(0,a.jsx)(o.p,{children:"A distribui\xe7\xe3o de acesso ao plug-ins permite que voc\xea controle o uso das licen\xe7as que voc\xea possui para esses plug-ins. Qualquer usu\xe1rio que n\xe3o pertence ao grupo de acesso de um plug-in n\xe3o pode carregar este plug-in."}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Licen\xe7as utilizadas permanecem anexadas a contas de usu\xe1rio 4D no grupo para toda a sess\xe3o 4D."}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:'A \xe1rea "Plug-in" na p\xe1gina de grupos da caixa de ferramentas lista todos os plug-ins carregados pela aplica\xe7\xe3o 4D. Para dar acesso a um grupo a um plug-in, voc\xea precisa simplesmente marcar a op\xe7\xe3o correspondente.'}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:s(288078).Z+"",width:"450",height:"139"})}),"\n",(0,a.jsxs)(o.p,{children:["As linhas ",(0,a.jsx)(o.strong,{children:"4D Client Web Server"})," e ",(0,a.jsx)(o.strong,{children:"4D Client SOAP Server"})," controlam a capacidade de publica\xe7\xe3o Web e SOAP (Web Services) de cada 4D no modo remoto. Essas licen\xe7as s\xe3o consideradas como licen\xe7as de plug-in por 4D Server. Portanto, da mesma forma que para plug-ins, voc\xea pode restringir o direito de utilizar essas licen\xe7as para um grupo espec\xedfico de usu\xe1rios."]}),"\n",(0,a.jsx)(o.h3,{id:"um-esquema-de-acesso-hier\xe1rquico",children:"Um esquema de acesso hier\xe1rquico"}),"\n",(0,a.jsx)(o.p,{children:"A melhor maneira de garantir a seguran\xe7a da sua aplica\xe7\xe3o e fornecer aos usu\xe1rios diferentes n\xedveis de acesso \xe9 usar um esquema de hierarquia de acesso. Os usu\xe1rios podem ser atribu\xeddos a grupos e grupos apropriados podem ser aninhados para criar uma hierarquia de direitos de acesso. Esta sec\xe7\xe3o discute v\xe1rias abordagens a esse esquema."}),"\n",(0,a.jsx)(o.p,{children:"Neste exemplo, um usu\xe1rio \xe9 atribu\xeddo a um dos tr\xeas grupos consoante o seu n\xedvel de responsabilidade. Usu\xe1rios atribu\xeddos ao grupo Accounting s\xe3o respons\xe1veis pela entrada de dados. Os usu\xe1rios designados ao grupo Finan\xe7as s\xe3o respons\xe1veis por manter os dados, incluindo atualiza\xe7\xf5es de registros e exclus\xe3o de registros desatualizados. Os usu\xe1rios designados ao grupo geral de gerenciamento s\xe3o respons\xe1veis por analisar os dados, incluindo a realiza\xe7\xe3o de pesquisas e a impress\xe3o de relat\xf3rios anal\xedticos."}),"\n",(0,a.jsx)(o.p,{children:"Os grupos s\xe3o ent\xe3o aninhados para que os privil\xe9gios sejam distribu\xeddos corretamente para os usu\xe1rios de cada grupo."}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:['O grupo geral de gerenciamento cont\xe9m apenas usu\xe1rios de "alto n\xedvel". ',(0,a.jsx)(o.img,{src:s(197409).Z+"",width:"778",height:"575"})]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["O grupo Finan\xe7as cont\xe9m usu\xe1rios de atualiza\xe7\xe3o de dados, bem como usu\xe1rios da Administra\xe7\xe3o geral, de modo que os usu\xe1rios da Administra\xe7\xe3o geral tamb\xe9m t\xeam os privil\xe9gios do grupo Finan\xe7as. ",(0,a.jsx)(o.img,{src:s(207918).Z+"",width:"778",height:"575"})]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["O grupo Contabilidade cont\xe9m usu\xe1rios de entrada de dados, bem como usu\xe1rios do grupo Finan\xe7as, de modo que os usu\xe1rios pertencentes ao grupo Finan\xe7as e ao grupo Administra\xe7\xe3o geral tamb\xe9m desfrutam dos privil\xe9gios do grupo Contabilidade. ",(0,a.jsx)(o.img,{src:s(865188).Z+"",width:"778",height:"575"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Voc\xea pode decidir quais privil\xe9gios de acesso atribuir a cada grupo com base no n\xedvel de responsabilidade dos usu\xe1rios que ele inclui."}),"\n",(0,a.jsx)(o.p,{children:"Tal sistema hier\xe1rquico facilita lembrar para qual grupo um novo usu\xe1rio deve ser atribu\xeddo. Voc\xea s\xf3 tem que atribuir cada usu\xe1rio para um grupo e usar a hierarquia de grupos para determinar o acesso."})]})}function l(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},153576:function(e,o,s){s.d(o,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg=="},362095:function(e,o,s){s.d(o,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAADxSURBVDhPnY9Pa8JAFMTfF6wpTbS99HN6EhEVEbTmUEiplWBETbKatv6renJ4C491Gz3s8DsMOzPsLm32Z2foZ3tyhorfkzM3x6o4vLJgrEgg9X0sJVkUzywYKxIoW/+VMpnmQRD4vg9jRQIt1aGUcZzpMYwVCTTP90Ky3Lyw8FosKywY/X6co2D2r8ZfU4WrHlme5z2wYPQJIhTMPs3SnfAZ5/23j1Y3BM32ENdiCaNPEKFg9mkUKWH4nvZGSWcQg0YnemLB6BNEKJj9q7EJ2lUWjBUJ98Y1lssYj6w3QwBjRcLNsf7//3+aUBitHIlWFwd0H5oG1DOiAAAAAElFTkSuQmCC"},267350:function(e,o,s){s.d(o,{Z:function(){return r}});let r=s.p+"assets/images/editor-6e2ecb71f363782241b995d8f6130a20.png"},107311:function(e,o,s){s.d(o,{Z:function(){return r}});let r="data:image/png;base64,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"},567099:function(e,o,s){s.d(o,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAD6SURBVChTlZCxS8NQEIffP9tYHVycMlscdXURxLFU0mqhZkqGdhFFaA0FQ15bCLGWpppgqaZ5Lx7JS+AOMvjxm+73DXfHMowV8SN+1/It88vdikRNS5AdJPGB1214RpEz35aZVF0Osjvha6UWGW+XqstB9vXqmdh2xFWXg+yrj6d/2A+fb8R2d2vV5SB7LwV8o1Ivl4+qKEE28C1+m7wH6sl8kEqhpiXUBo5nfbDh6wK/D6A2/9lo5SbkREDZUbqDEy+CUbFGlVPfug2d9yQuNJbI1AidQyyRaF63vZ7AD9jN6oV0dbnfTJm+MMm0LufBkMHtZFoXfWH+AfQdLr4l7+k0AAAAAElFTkSuQmCC"},626032:function(e,o,s){s.d(o,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAADmSURBVChTlZA/C0FhFMbfb+FPYjIafQPKF5AvYDMYfAAlmYzMFG4GZWK6k0RKV4kBq4UUFrm6PN57nRfvqzv49UzP+Q3nHAaFVQ1aEL04llWYJyoFsn1ao+lHw0PpJ/C408hBto3CR31lq9PIQbZHWdXmi30h28PMPza/TLH3Exo5yLZl2t94q4M09QLZ5phHtAK22ongfqNS8GNz2mHb1kJ4WNQIfuyDgYaXNlnVqRQI+7LDogI9RWu804vBKOK8eVkM1hWzkiopafowzfMzGMY5deaWeZmhG1Vbt+hJZt+utG7pRp+KuBb6s9xHMQAAAABJRU5ErkJggg=="},288078:function(e,o,s){s.d(o,{Z:function(){return r}});let r="data:image/png;base64,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"},197409:function(e,o,s){s.d(o,{Z:function(){return r}});let r=s.p+"assets/images/schema1-84178d2d3287349910a9a1a80a34f272.png"},207918:function(e,o,s){s.d(o,{Z:function(){return r}});let r=s.p+"assets/images/schema2-fc09440a4cb7bfbc55f3f0aeae5c5ed0.png"},865188:function(e,o,s){s.d(o,{Z:function(){return r}});let r=s.p+"assets/images/schema3-b83a7c0eb98fa319eeb7c0e32a5f6749.png"},250065:function(e,o,s){s.d(o,{Z:function(){return n},a:function(){return d}});var r=s(667294);let a={},i=r.createContext(a);function d(e){let o=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);