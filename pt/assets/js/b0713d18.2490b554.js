"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67801"],{848541:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>d,metadata:()=>o,assets:()=>t,toc:()=>l,contentTitle:()=>a});var o=JSON.parse('{"id":"ORDA/privileges","title":"Privil\xe9gios","description":"Proteger dados enquanto permitir acesso r\xe1pido e f\xe1cil para usu\xe1rios autorizados \xe9 um desafio importante para aplica\xe7\xf5es web. A arquitetura de seguran\xe7a ORDA \xe9 implementada no cerne do seu datastore e permite que voc\xea defina privil\xe9gios espec\xedficos para todas as sess\xf5es de usu\xe1rio da web ou REST para os v\xe1rios recursos no seu projeto (datastore, dataclasses, fun\xe7\xf5es, etc.).","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ORDA/privileges.md","sourceDirName":"ORDA","slug":"/ORDA/privileges","permalink":"/docs/pt/ORDA/privileges","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fprivileges.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"privileges","title":"Privil\xe9gios"},"sidebar":"docs","previous":{"title":"Datastores remotos","permalink":"/docs/pt/ORDA/datastores"},"next":{"title":"Otimiza\xe7\xe3o cliente/servidor","permalink":"/docs/pt/ORDA/client-server-optimization"}}'),i=n("785893"),r=n("250065");let d={id:"privileges",title:"Privil\xe9gios"},a=void 0,t={},l=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3},{value:"Resources",id:"resources",level:2},{value:"A\xe7\xf5es de permiss\xe3o",id:"a\xe7\xf5es-de-permiss\xe3o",level:2},{value:"Privil\xe9gios e fun\xe7\xf5es",id:"privil\xe9gios-e-fun\xe7\xf5es",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"arquivo <code>roles.json</code>",id:"arquivo-rolesjson",level:2},{value:"Arquivo padr\xe3o",id:"arquivo-padr\xe3o",level:3},{value:"Sintaxe",id:"sintaxe",level:3},{value:"Arquivo <code>Roles_Errors.json</code>",id:"arquivo-roles_errorsjson",level:3},{value:"Exemplo de configura\xe7\xe3o de privil\xe9gios",id:"exemplo-de-configura\xe7\xe3o-de-privil\xe9gios",level:2}];function c(e){let s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Proteger dados enquanto permitir acesso r\xe1pido e f\xe1cil para usu\xe1rios autorizados \xe9 um desafio importante para aplica\xe7\xf5es web. A arquitetura de seguran\xe7a ORDA \xe9 implementada no cerne do seu datastore e permite que voc\xea defina privil\xe9gios espec\xedficos para todas as sess\xf5es de usu\xe1rio da web ou REST para os v\xe1rios recursos no seu projeto (datastore, dataclasses, fun\xe7\xf5es, etc.)."}),"\n",(0,i.jsx)(s.h2,{id:"vis\xe3o-geral",children:"Vis\xe3o Geral"}),"\n",(0,i.jsx)(s.p,{children:"A arquitetura de seguran\xe7a da ORDA \xe9 baseada nos conceitos de privil\xe9gios, a\xe7\xf5es de permiss\xe3o (ler, criar, etc.) e recursos."}),"\n",(0,i.jsxs)(s.p,{children:["Quando os usu\xe1rios da web ou os usu\xe1rios do REST fazem login, sua sess\xe3o \xe9 automaticamente carregada com a(s) privil\xe9gio(s) associado(s). Os privil\xe9gios s\xe3o atribu\xeddos \xe0 sess\xe3o usando a fun\xe7\xe3o ",(0,i.jsx)(s.a,{href:"/docs/pt/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"session.setPrivileges()"})}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Cada solicita\xe7\xe3o de usu\xe1rio enviada dentro da sess\xe3o \xe9 avaliada em rela\xe7\xe3o aos privil\xe9gios definidos no arquivo ",(0,i.jsx)(s.code,{children:"roles.json"})," do projeto."]}),"\n",(0,i.jsx)(s.p,{children:"Se um usu\xe1rio tentar executar uma a\xe7\xe3o e n\xe3o tiver os direitos de acesso adequados, um erro de privil\xe9gio \xe9 gerado ou, no caso de falta de permiss\xe3o de leitura nos atributos, eles n\xe3o s\xe3o enviados."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"schema",src:n(398041).Z+"",width:"960",height:"540"})}),"\n",(0,i.jsx)(s.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,i.jsxs)(s.p,{children:["Para obter uma vis\xe3o detalhada de toda a arquitetura de permiss\xf5es, por favor leia o post do blog ",(0,i.jsx)(s.a,{href:"https://blog.4d.com/filter-access-to-your-data-with-a-complete-system-of-permissions/",children:(0,i.jsx)(s.strong,{children:"Filtre o acesso aos seus dados com um sistema completo de permiss\xf5es"})}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(s.p,{children:"You can assign specific permission actions to the following resources in your project:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"o datastore"}),"\n",(0,i.jsx)(s.li,{children:"uma classe de dados"}),"\n",(0,i.jsx)(s.li,{children:"um atributo (inclusive calculado e aliases)"}),"\n",(0,i.jsx)(s.li,{children:"uma fun\xe7\xe3o de classe de modelo de dados"}),"\n",(0,i.jsxs)(s.li,{children:["uma fun\xe7\xe3o ",(0,i.jsx)(s.a,{href:"/docs/pt/REST/singleton",children:"singleton"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Each time a resource is accessed within a session (whatever the way it is accessed), 4D checks that the session has the appropriate permissions, and rejects the access if it is not authorized."}),"\n",(0,i.jsx)(s.p,{children:"Uma a\xe7\xe3o de permiss\xe3o definida em um determinado n\xedvel \xe9 herdada por padr\xe3o em n\xedveis inferiores, mas v\xe1rias permiss\xf5es podem ser configuradas:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Uma a\xe7\xe3o de permiss\xe3o definida no n\xedvel do datastore \xe9 automaticamente atribu\xedda a todas as dataclasses."}),"\n",(0,i.jsx)(s.li,{children:"Uma a\xe7\xe3o de permiss\xe3o definida ao n\xedvel da classe de dados substitui a defini\xe7\xe3o do armazenamento de dados (se existir). Por padr\xe3o, todos os atributos do dataclass herdam das permiss\xf5es de banco de dados."}),"\n",(0,i.jsx)(s.li,{children:'Ao contr\xe1rio das permiss\xf5es da classe de dados, uma a\xe7\xe3o de permiss\xe3o definida no n\xedvel do atributo n\xe3o substitui a(s) permiss\xe3o(\xf5es) pai da classe de dados, mas \xe9 adicionada a ela. Por exemplo, se voc\xea atribuiu o privil\xe9gio "geral" a uma classe de dados e o privil\xe9gio "detalhe" a um atributo da classe de dados, ambos os privil\xe9gios "geral" e "detalhe" devem ser definidos na sess\xe3o para acessar o atributo.'}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["Permiss\xf5es controlam o acesso a objetos ou fun\xe7\xf5es de armazenamento de dados. Se voc\xea deseja filtrar os dados lidos de acordo com alguns crit\xe9rios, voc\xea pode considerar ",(0,i.jsx)(s.a,{href:"/docs/pt/ORDA/entities#restricting-entity-selections",children:"restringir as sele\xe7\xf5es de entidades"})," que pode ser mais apropriado neste caso."]})}),"\n",(0,i.jsx)(s.h2,{id:"a\xe7\xf5es-de-permiss\xe3o",children:"A\xe7\xf5es de permiss\xe3o"}),"\n",(0,i.jsx)(s.p,{children:"As a\xe7\xf5es dispon\xedveis est\xe3o relacionadas com o recurso alvo."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Ac\xe7\xf5es"}),(0,i.jsx)(s.th,{children:"armaz\xe9m de dados"}),(0,i.jsx)(s.th,{children:"dataclass"}),(0,i.jsx)(s.th,{children:"atributo"}),(0,i.jsx)(s.th,{children:"fun\xe7\xe3o de modelo de dados ou fun\xe7\xe3o singleton"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"create"})}),(0,i.jsx)(s.td,{children:"Criar entidade em qualquer classe de dados"}),(0,i.jsx)(s.td,{children:"Criar entidade nesta classe de dados"}),(0,i.jsx)(s.td,{children:"Criar uma entidade com um valor diferente do valor padr\xe3o permitido para este atributo (ignorado para atributos alias)."}),(0,i.jsx)(s.td,{children:"n/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"read"})}),(0,i.jsx)(s.td,{children:"Ler atributos em qualquer dataclass"}),(0,i.jsx)(s.td,{children:"Ler atributos nesta classe de dados"}),(0,i.jsx)(s.td,{children:"Leia o conte\xfado desse atributo"}),(0,i.jsx)(s.td,{children:"n/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"update"})}),(0,i.jsx)(s.td,{children:"Atualizar atributos em qualquer classe de dados."}),(0,i.jsx)(s.td,{children:"Atualiza os atributos nesta classe de dados."}),(0,i.jsx)(s.td,{children:"Atualiza o conte\xfado deste atributo (ignorado para atributos alias)."}),(0,i.jsx)(s.td,{children:"n/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"drop"})}),(0,i.jsx)(s.td,{children:"Eliminar dados em qualquer classe de dados."}),(0,i.jsx)(s.td,{children:"Eliminar dados nesta classe de dados."}),(0,i.jsx)(s.td,{children:"Excluir um valor n\xe3o nulo para este atributo (exceto para alias e atributo calculado)."}),(0,i.jsx)(s.td,{children:"n/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"execute"})}),(0,i.jsx)(s.td,{children:"Executar qualquer fun\xe7\xe3o no projeto (datastore, dataclass, sele\xe7\xe3o de entidade, entidade)"}),(0,i.jsx)(s.td,{children:"Executa qualquer fun\xe7\xe3o na classe de dados. Fun\xe7\xf5es de Dataclass e fun\xe7\xf5es de sele\xe7\xe3o de entidades, e fun\xe7\xf5es de sele\xe7\xe3o de entidades s\xe3o tratadas como fun\xe7\xf5es de dataclass"}),(0,i.jsx)(s.td,{children:"n/a"}),(0,i.jsx)(s.td,{children:"Executar esta fun\xe7\xe3o"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"promote"})}),(0,i.jsx)(s.td,{children:"n/a"}),(0,i.jsx)(s.td,{children:"n/a"}),(0,i.jsx)(s.td,{children:"n/a"}),(0,i.jsx)(s.td,{children:"Associa um determinado privil\xe9gio durante a execu\xe7\xe3o da fun\xe7\xe3o. O privil\xe9gio \xe9 temporariamente adicionado \xe0 sess\xe3o e removido no final da execu\xe7\xe3o da fun\xe7\xe3o. Por seguran\xe7a, s\xf3 o processo de execu\xe7\xe3o da fun\xe7\xe3o \xe9 acrescentado o privil\xe9gio, n\xe3o toda a sess\xe3o."})]})]})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Notas:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Um alias pode ser lido assim que os privil\xe9gios de sess\xe3o permitir o acesso ao alias em si, Mesmo que os privil\xe9gios de sess\xe3o n\xe3o permitam o acesso aos atributos que resolvem o alias."}),"\n",(0,i.jsx)(s.li,{children:"Um atributo calculado pode ser acessado mesmo que n\xe3o haja permiss\xf5es sobre os atributos sobre os quais ele \xe9 constru\xeddo."}),"\n",(0,i.jsxs)(s.li,{children:["Voc\xea pode atribuir uma a\xe7\xe3o de permiss\xe3o a uma classe de singleton (tipo ",(0,i.jsx)(s.code,{children:"singleton"}),"), nesse caso ele ser\xe1 aplicado a todas as suas fun\xe7\xf5es expostas, ou a uma fun\xe7\xe3o de singleton (tipo ",(0,i.jsx)(s.code,{children:"singletonMethod"}),")."]}),"\n",(0,i.jsxs)(s.li,{children:["Valores padr\xe3o: na implementa\xe7\xe3o atual, apenas ",(0,i.jsx)(s.em,{children:"Null"})," est\xe1 dispon\xedvel como valor padr\xe3o."]}),"\n",(0,i.jsxs)(s.li,{children:["In REST ",(0,i.jsx)(s.a,{href:"/docs/pt/REST/authUsers#force-login-mode",children:"force login mode"}),", the ",(0,i.jsxs)(s.a,{href:"/docs/pt/REST/authUsers#function-authentify",children:[(0,i.jsx)(s.code,{children:"authentify()"})," function"]})," is always executable by guest users, whatever the permissions configuration."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Setting permissions requires to be consistent, in particular ",(0,i.jsx)(s.strong,{children:"update"})," and ",(0,i.jsx)(s.strong,{children:"drop"})," permissions also need ",(0,i.jsx)(s.strong,{children:"read"})," permission (but ",(0,i.jsx)(s.strong,{children:"create"})," does not need it)."]}),"\n",(0,i.jsx)(s.h2,{id:"privil\xe9gios-e-fun\xe7\xf5es",children:"Privil\xe9gios e fun\xe7\xf5es"}),"\n",(0,i.jsxs)(s.p,{children:["Um ",(0,i.jsx)(s.strong,{children:"privil\xe9gio"})," \xe9 a habilidade t\xe9cnica de executar ",(0,i.jsx)(s.strong,{children:"a\xe7\xf5es"})," em ",(0,i.jsx)(s.strong,{children:"recursos"}),", enquanto um ",(0,i.jsx)(s.strong,{children:"cargo"}),' \xe9 um privil\xe9gio posto de uso por um administrador. Basicamente, uma fun\xe7\xe3o re\xfane v\xe1rios privil\xe9gios para definir um perfil de usu\xe1rio corporativo. Por exemplo, "manageInvoices" poderia ser um privil\xe9gio enquanto "secretary" poderia ser uma fun\xe7\xe3o (que inclui "manageInvoices" e outros privil\xe9gios).']}),"\n",(0,i.jsx)(s.p,{children:'Um privil\xe9gio ou um papel pode ser associado a v\xe1rias combina\xe7\xf5es de "a\xe7\xe3o + recurso". Podem ser associados v\xe1rios privil\xe9gios a uma a\xe7\xe3o. Um privil\xe9gio pode incluir outros privil\xe9gios.'}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Voc\xea cria ",(0,i.jsx)(s.strong,{children:"privil\xe9gios"})," e/ou fun\xe7\xf5es no arquivo ",(0,i.jsx)(s.code,{children:"roles.json"})," (veja abaixo). Voc\xea ",(0,i.jsx)(s.strong,{children:"configurou"})," o escopo dele, atribuindo-lhes a a\xe7\xe3o de permiss\xe3o aplicada aos recursos."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Voc\xea ",(0,i.jsx)(s.strong,{children:"permite"})," privil\xe9gios e/ou fun\xe7\xf5es para cada sess\xe3o do usu\xe1rio usando a fun\xe7\xe3o ",(0,i.jsx)(s.a,{href:"/docs/pt/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:".setPrivileges()"})})," da classe ",(0,i.jsx)(s.code,{children:"Session"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(s.p,{children:"Para permitir uma fun\xe7\xe3o em uma sess\xe3o:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n\n    var $user : cs.UsersEntity\n\n    Session.clearPrivileges()\n\n    $result:="Voc\xea est\xe1 autenticado como Convidado"\n\n    $user:=ds.Users.query("identifier = :1"; $identifier).first()\n\n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Voc\xea est\xe1 autenticado como "+$user.role\n        End if\n    End if\n\n\n'})}),"\n",(0,i.jsxs)(s.h2,{id:"arquivo-rolesjson",children:["arquivo ",(0,i.jsx)(s.code,{children:"roles.json"})]}),"\n",(0,i.jsxs)(s.p,{children:["O arquivo ",(0,i.jsx)(s.code,{children:"roles.json"})," descreve todas as configura\xe7\xf5es de seguran\xe7a do projeto."]}),"\n",(0,i.jsx)(s.h3,{id:"arquivo-padr\xe3o",children:"Arquivo padr\xe3o"}),"\n",(0,i.jsxs)(s.p,{children:["Quando voc\xea cria um projeto, um arquivo ",(0,i.jsx)(s.code,{children:"roles.json"})," padr\xe3o \xe9 criado no seguinte local: ",(0,i.jsx)(s.code,{children:"<project folder>/Project/Sources/"})," (consulte a se\xe7\xe3o ",(0,i.jsx)(s.a,{href:"/docs/pt/Project/architecture#sources",children:"Arquitetura"}),")."]}),"\n",(0,i.jsx)(s.p,{children:"O arquivo padr\xe3o tem o seguinte conte\xfado:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",metastring:'title="/Project/Sources/roles.json"',children:'\n{\n    "privileges": [\n        {\n            "privilege": "none",\n            "includes": []\n        }\n    ],\n\n    "roles": [],\n\n    "permissions": {\n        "allowed": [\n            {\n                "applyTo": "ds",\n                "type": "datastore",\n                "read": ["none"],\n                "create": ["none"],\n                "update": ["none"],\n                "drop": ["none"],\n                "execute": ["none"],\n                "promote": ["none"]                \n            }\n        ]\n    },\n\n    "forceLogin": true\n\n}\n\n'})}),"\n",(0,i.jsxs)(s.p,{children:['Para um n\xedvel m\xe1ximo de seguran\xe7a, o privil\xe9gio "none" \xe9 atribu\xeddo a todas as permiss\xf5es no datastore, assim o acesso aos dados no objeto ',(0,i.jsx)(s.code,{children:"ds"})," inteiro \xe9 desabilitado por padr\xe3o. \xc9 recomendado n\xe3o modificar ou usar esse privil\xe9gio de bloqueio, mas adicionar permiss\xf5es espec\xedficas a cada recurso que voc\xea deseja disponibilizar para solicita\xe7\xf5es da web ou REST (veja o exemplo abaixo)."]}),"\n",(0,i.jsx)(s.admonition,{type:"caution",children:(0,i.jsxs)(s.p,{children:["Quando nenhum par\xe2metro espec\xedfico \xe9 definido no arquivo ",(0,i.jsx)(s.code,{children:"roles.json"}),", os acessos n\xe3o s\xe3o limitados. Esta configura\xe7\xe3o permite que voc\xea desenvolva a aplica\xe7\xe3o sem se preocupar com acessos, mas n\xe3o \xe9 recomendada em ambiente de produ\xe7\xe3o."]})}),"\n",(0,i.jsx)(s.admonition,{title:"Compatibidade",type:"note",children:(0,i.jsxs)(s.p,{children:["Em vers\xf5es anteriores, o arquivo ",(0,i.jsx)(s.code,{children:"roles.json"})," n\xe3o foi criado por padr\xe3o. A partir de 4D 20 R6, ao abrir um projeto existente que n\xe3o cont\xe9m um ",(0,i.jsx)(s.code,{children:"cargos. arquivo son"})," ou as configura\xe7\xf5es ",(0,i.jsx)(s.code,{children:'"forceLogin": true'}),", a ",(0,i.jsx)(s.strong,{children:"Ativar autentica\xe7\xe3o REST atrav\xe9s de d. Fun\xe7\xe3o uthentify()"})," est\xe1 dispon\xedvel na p\xe1gina ",(0,i.jsxs)(s.a,{href:"/docs/pt/settings/web#access",children:[(0,i.jsx)(s.strong,{children:"Recursos Web"})," da caixa de di\xe1logo Configura\xe7\xf5es"]}),". Este bot\xe3o atualiza automaticamente suas configura\xe7\xf5es de seguran\xe7a (voc\xea pode ter que modificar seu c\xf3digo, ",(0,i.jsx)(s.a,{href:"https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/",children:"veja este post de blog"}),")."]})}),"\n",(0,i.jsx)(s.admonition,{title:"Qodly Studio",type:"note",children:(0,i.jsxs)(s.p,{children:["No Qodly Studio para 4D, o modo pode ser definido usando a op\xe7\xe3o ",(0,i.jsx)(s.a,{href:"/docs/pt/WebServer/qodly-studio#force-login",children:(0,i.jsx)(s.strong,{children:"For\xe7ar login"})})," no painel de Privil\xe9gios."]})}),"\n",(0,i.jsx)(s.h3,{id:"sintaxe",children:"Sintaxe"}),"\n",(0,i.jsxs)(s.p,{children:["A sintaxe do arquivo ",(0,i.jsx)(s.code,{children:"roles.json"})," \xe9 a seguinte:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Nome da propriedade"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{children:"Obrigat\xf3rio"}),(0,i.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"privileges"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de objetos de 'privil\xe9gio'"}),(0,i.jsx)(s.td,{children:"X"}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios definidos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].privilege"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Nome do privil\xe9gio"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].includes"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de nomes de privil\xe9gios inclu\xeddos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"roles"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsxs)(s.td,{children:["Cole\xe7\xe3o de objetos ",(0,i.jsx)(s.code,{children:"papel"})]}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de roles definidos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].role"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Nome da role"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].privileges"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de nomes de privil\xe9gios inclu\xeddos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"permissions"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Object"}),(0,i.jsx)(s.td,{children:"X"}),(0,i.jsx)(s.td,{children:"Lista de ac\xe7\xf5es permitidas"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"allowed"}),(0,i.jsx)(s.td,{}),(0,i.jsxs)(s.td,{children:["Colecci\xf3n de objetos ",(0,i.jsx)(s.code,{children:"permission"})]}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de permiss\xf5es permitidas"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].applyTo"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"X"}),(0,i.jsxs)(s.td,{children:["Targeted ",(0,i.jsx)(s.a,{href:"#resources",children:"resource"})," name"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].type"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"X"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"#resources",children:"Resource"}),' type: "datastore", "dataclass", "attribute", "method", "singletonMethod", "singleton"']})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].read"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].create"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].update"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].drop"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].execute"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].promote"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"forceLogin"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Par\xe2metros"}),(0,i.jsx)(s.td,{}),(0,i.jsxs)(s.td,{children:["True para habilitar el ",(0,i.jsx)(s.a,{href:"/docs/pt/REST/authUsers#force-login-mode",children:'modo "forceLogin"'})]})]})]})]}),"\n",(0,i.jsx)(s.admonition,{title:"Lembrete",type:"caution",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'O nome do privil\xe9gio "WebAdmin" est\xe1 reservado \xe0 aplica\xe7\xe3o. N\xe3o se recomenda a utiliza\xe7\xe3o deste nome para privil\xe9gios personalizados.'}),"\n",(0,i.jsxs)(s.li,{children:["Os nomes de ",(0,i.jsx)(s.code,{children:"privil\xe9gios"})," e ",(0,i.jsx)(s.code,{children:"cargos"})," s\xe3o insens\xedveis a mai\xfasculas e min\xfasculas."]}),"\n"]})}),"\n",(0,i.jsxs)(s.h3,{id:"arquivo-roles_errorsjson",children:["Arquivo ",(0,i.jsx)(s.code,{children:"Roles_Errors.json"})]}),"\n",(0,i.jsxs)(s.p,{children:["O arquivo ",(0,i.jsx)(s.code,{children:"roles.json"})," \xe9 analisado pelo 4D na inicializa\xe7\xe3o. Voc\xea precisa reiniciar o aplicativo se quiser que as modifica\xe7\xf5es neste arquivo sejam consideradas."]}),"\n",(0,i.jsxs)(s.p,{children:["Em caso de erro(s) ao analisar o arquivo ",(0,i.jsx)(s.code,{children:"roles.json"}),", o 4D carrega o projeto, mas desabilita a prote\xe7\xe3o de acesso global - isso permite ao desenvolvedor acessar os arquivos e corrigir o erro. Um arquivo de erro chamado ",(0,i.jsx)(s.code,{children:"Roles_Errors.json"})," \xe9 gerado na pasta ",(0,i.jsxs)(s.a,{href:"/docs/pt/Project/architecture#logs",children:[(0,i.jsx)(s.code,{children:"Logs"})," do projeto"]})," e descreve a(s) linha(s) de erro. Este arquivo \xe9 automaticamente exclu\xeddo quando o arquivo ",(0,i.jsx)(s.code,{children:"roles.json"})," n\xe3o cont\xe9m mais erro(s)."]}),"\n",(0,i.jsxs)(s.p,{children:["Se recomienda comprobar al inicio si existe un archivo ",(0,i.jsx)(s.code,{children:"Roles_Errors.json"})," en la carpeta ",(0,i.jsx)(s.a,{href:"/docs/pt/Project/architecture#logs",children:"Logs"}),", lo que significa que se ha producido un error de an\xe1lisis y que los accesos no estar\xe1n limitados. Pode escrever, por exemplo:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',children:'Se (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nSen\xe3o // voc\xea pode impedir o projeto de abrir\n ALERT("Os pap\xe9is. arquivo filho est\xe1 malformado ou cont\xe9m inconsist\xeancias, o aplicativo ser\xe1 encerrado.")\n QUIT 4D\nFinalizado, se\n'})}),"\n",(0,i.jsx)(s.h2,{id:"exemplo-de-configura\xe7\xe3o-de-privil\xe9gios",children:"Exemplo de configura\xe7\xe3o de privil\xe9gios"}),"\n",(0,i.jsxs)(s.p,{children:['A boa pr\xe1tica \xe9 manter todo o acesso aos dados bloqueado por padr\xe3o gra\xe7as ao privil\xe9gio "none" e configurar o arquivo ',(0,i.jsx)(s.code,{children:"roles.json"})," para abrir apenas partes controladas para sess\xf5es autorizadas. Por exemplo, para permitir alguns acessos \xe0s sess\xf5es de convidados:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",metastring:'title="/Project/Sources/roles.json"',children:'\n{\n  "privileges": [\n    {\n      "privilege": "none",\n      "includes": []\n    }\n  ],\n  "roles": [],\n  "permissions": {\n    "allowed": [\n      {\n        "applyTo": "ds",\n        "type": "datastore",\n        "read": [\n          "none"\n        ],\n        "create": [\n          "none"\n        ],\n        "update": [\n          "none"\n        ],\n        "drop": [\n          "none"\n        ],\n        "execute": [\n          "none"\n        ],\n        "promote": [\n          "none"\n        ]\n      },\n      {\n        "applyTo": "ds.loginAs",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.hasPrivilege",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.clearPrivileges",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.isGuest",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.getPrivileges",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.setAllPrivileges",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "mySingletonClass.createID",\n        "type": "singletonMethod",\n        "execute": [\n          "guest"\n        ]\n      }\n    ]\n  },\n  "forceLogin": true\n}\n'})})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},398041:function(e,s,n){n.d(s,{Z:function(){return o}});let o=n.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return d}});var o=n(667294);let i={},r=o.createContext(i);function d(e){let s=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);