/*! For license information please see a8d8059f.f4f117dc.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47412],{515351:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>t});var i=o(474848),s=o(28453);const n={id:"webAdmin",title:"Web Administration"},r=void 0,d={id:"Admin/webAdmin",title:"Web Administration",description:"Um componente de servidor web integrado, chamado WebAdmin, \xe9 utilizado por 4D e 4D Server para dar um acesso web seguro a fun\xe7\xf5es de gest\xe3o espec\xedficas como Explorador de dados. Pode conectar localmente ou remotamente ao servidor web de um navegador ou uma aplica\xe7\xe3o web e acessar a aplica\xe7\xe3o 4D associada.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Admin/webAdmin.md",sourceDirName:"Admin",slug:"/Admin/webAdmin",permalink:"/docs/pt/20-R5/Admin/webAdmin",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2FwebAdmin.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"webAdmin",title:"Web Administration"},sidebar:"docs",previous:{title:"Web Administration",permalink:"/docs/pt/20-R5/category/web-administration"},next:{title:"Web Data Explorer",permalink:"/docs/pt/20-R5/Admin/dataExplorer"}},c={},t=[{value:"Iniciar o web server WebAdmin",id:"iniciar-o-web-server-webadmin",level:2},{value:"Lan\xe7ar ao in\xedcio",id:"lan\xe7ar-ao-in\xedcio",level:3},{value:"Iniciar e parar",id:"iniciar-e-parar",level:3},{value:"Propriedades WebAdmin",id:"propriedades-webadmin",level:2},{value:"Caixa de di\xe1logos de configura\xe7\xf5es",id:"caixa-de-di\xe1logos-de-configura\xe7\xf5es",level:3},{value:"Iniciar o servidor WebAdmin na inicializa\xe7\xe3o",id:"iniciar-o-servidor-webadmin-na-inicializa\xe7\xe3o",level:4},{value:"Conex\xf5es HTTP em localhost aceitas",id:"conex\xf5es-http-em-localhost-aceitas",level:4},{value:"Porta HTTP",id:"porta-http",level:4},{value:"Aceitar HTTPS",id:"aceitar-https",level:4},{value:"Porta HTTPS",id:"porta-https",level:4},{value:"Rota da pasta de certificados",id:"rota-da-pasta-de-certificados",level:4},{value:"Modo de registro de depura\xe7\xe3o/debug",id:"modo-de-registro-de-depura\xe7\xe3odebug",level:4},{value:"Chave de acesso",id:"chave-de-acesso",level:4},{value:"Ativar o acesso a Qodly Studio",id:"ativar-o-acesso-a-qodly-studio",level:4},{value:"Configura\xe7\xe3o de WebAdmin sem interface",id:"configura\xe7\xe3o-de-webadmin-sem-interface",level:2},{value:"Autentica\xe7\xe3o e sess\xe3o",id:"autentica\xe7\xe3o-e-sess\xe3o",level:2}];function l(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["Um componente de servidor web integrado, chamado ",(0,i.jsx)(a.code,{children:"WebAdmin"}),", \xe9 utilizado por 4D e 4D Server para dar um acesso web seguro a fun\xe7\xf5es de gest\xe3o espec\xedficas como ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R5/Admin/dataExplorer",children:"Explorador de dados"}),". Pode conectar localmente ou remotamente ao servidor web de um navegador ou uma aplica\xe7\xe3o web e acessar a aplica\xe7\xe3o 4D associada."]}),"\n",(0,i.jsx)(a.p,{children:'O webAdmin maneja a autentica\xe7\xe3o de usu\xe1rios com privil\xe9gios "WebAdmin" de forma que possa abrir sess\xf5es administrativas e acessar interfaces dedicadas.'}),"\n",(0,i.jsx)(a.p,{children:"Essa funcionalidade pode ser usada em aplica\xe7\xf5es 4D rodando headless (sem monitor e perif\xe9ricos) assim como aplica\xe7\xf5es 4D rodando sem interfaces."}),"\n",(0,i.jsx)(a.h2,{id:"iniciar-o-web-server-webadmin",children:"Iniciar o web server WebAdmin"}),"\n",(0,i.jsxs)(a.p,{children:["Por defecto, el\nservidor web ",(0,i.jsx)(a.code,{children:"WebAdmin"})," no se lanza. Precisa configurar o lan\xe7amento ao in\xedcio ou (em vers\xf5es com interface) lan\xe7ar manualmente usando um item de menu."]}),"\n",(0,i.jsx)(a.h3,{id:"lan\xe7ar-ao-in\xedcio",children:"Lan\xe7ar ao in\xedcio"}),"\n",(0,i.jsxs)(a.p,{children:["Pode configurar o servidor web ",(0,i.jsx)(a.code,{children:"WebAdmin"})," para que se lance ao in\xedcio da aplica\xe7\xe3o 4D ou 4D Server (antes de que se carregue qualquer projeto)."]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Se utilizar uma aplica\xe7\xe3o 4D con interface, selecione a op\xe7\xe3o de menu ",(0,i.jsx)(a.strong,{children:"Arquivo > Administra\xe7\xe3o web > Propriedades..."}),"."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"alt-text",src:o(992901).A+"",width:"470",height:"294"})}),"\n",(0,i.jsxs)(a.p,{children:["Selecione a op\xe7\xe3o ",(0,i.jsx)(a.strong,{children:"Iniciar WebAdmin ao iniciar"})," na caixa de di\xe1logo de par\xe2metros:"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"alt-text",src:o(578212).A+"",width:"702",height:"205"})}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Se usar uma aplica\xe7\xe3o 4D que tenha ou n\xe3o interface, pode habilitar o modo de inicio autom\xe1tico utilizando o argumento abaixo ",(0,i.jsx)(a.em,{children:"Interface de linha de comandos"}),":"]}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"open ~/Desktop/4D.app --webadmin-auto-start true\n"})}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["Se a porta TCP usada pelo  ",(0,i.jsx)(a.code,{children:"WebAdmin"})," servidor web (",(0,i.jsx)(a.a,{href:"#https-port",children:"HTTPS"})," ou ",(0,i.jsx)(a.a,{href:"#http-port",children:"HTTP"}),", dependendo das configura\xe7\xf5es) n\xe3o estiver dispon\xedvel ao in\xedcio, 4D vai tentar repetidademente os 20 portos a seguintes, e usar o primeiro que estiver dispon\xedve Se nenhum porto estiver dispon\xedvel, o servidor web n\xe3o \xe9 lan\xe7ado e um erro \xe9 exibido (ou em aplica\xe7\xe3o headless, aparece no console)"]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"iniciar-e-parar",children:"Iniciar e parar"}),"\n",(0,i.jsxs)(a.p,{children:["Se utilizar uma aplica\xe7\xe3o 4D com interface, pode iniciar ou parar o servidor web ",(0,i.jsx)(a.code,{children:"WebAdmin"})," de seu projeto a qualquer momento:"]}),"\n",(0,i.jsxs)(a.p,{children:["Selecione a op\xe7\xe3o de menu ",(0,i.jsx)(a.strong,{children:"Arquivo > Administra\xe7\xe3o web > Iniciar o servidor"}),"."]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"alt-text",src:o(274126).A+"",width:"473",height:"354"})}),"\n",(0,i.jsxs)(a.p,{children:["O item de menu vira ",(0,i.jsx)(a.strong,{children:"Stop Server"})," quando o servidor for lan\xe7ado; selecione ",(0,i.jsx)(a.strong,{children:"Parar o servidor"})," para parar o ",(0,i.jsx)(a.code,{children:"WebAdmin"})," servidor web."]}),"\n",(0,i.jsx)(a.h2,{id:"propriedades-webadmin",children:"Propriedades WebAdmin"}),"\n",(0,i.jsxs)(a.p,{children:["Configurar o componente ",(0,i.jsx)(a.code,{children:"WebAdmin"})," \xe9 obrigat\xf3rio em particular para definir a ",(0,i.jsx)(a.a,{href:"#access-key",children:(0,i.jsx)(a.strong,{children:"chave de acesso"})}),". Como padr\xe3o, quando a chave de acesso n\xe3o for estabelecida, o acesso via uma url n\xe3o \xe9 permitido."]}),"\n",(0,i.jsxs)(a.p,{children:["Pode configurar o componente ",(0,i.jsx)(a.code,{children:"WebAdmin"})," usando ",(0,i.jsx)(a.a,{href:"#settings-dialog-box",children:"Web Administration a caixa de di\xe1logo de configura\xe7\xf5es"})," (ver abaixo)."]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["Se voc\xea usar uma aplica\xe7\xe3o 4D headless, voc\xea pode usar os ",(0,i.jsxs)(a.a,{href:"#webadmin-headless-configuration",children:["argumentos da ",(0,i.jsx)(a.em,{children:"Interface de Linha de Comando"})]})," para definir as configura\xe7\xf5es b\xe1sicas. Se quiser personalizar o arquivo de configura\xe7\xf5es para definir os par\xe2metros avan\xe7ados."]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"caixa-de-di\xe1logos-de-configura\xe7\xf5es",children:"Caixa de di\xe1logos de configura\xe7\xf5es"}),"\n",(0,i.jsxs)(a.p,{children:["Para abrir a caixa de di\xe1logo de configura\xe7\xf5es de administra\xe7\xe3o web, selecione o item de menu ",(0,i.jsx)(a.strong,{children:"File > Web Administration > Configura\xe7\xf5es..."}),"."]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"alt-text",src:o(992901).A+"",width:"470",height:"294"})}),"\n",(0,i.jsx)(a.p,{children:"A caixa de di\xe1logo abaixo \xe9 mostrada:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"alt-text",src:o(220716).A+"",width:"702",height:"462"})}),"\n",(0,i.jsx)(a.h4,{id:"iniciar-o-servidor-webadmin-na-inicializa\xe7\xe3o",children:"Iniciar o servidor WebAdmin na inicializa\xe7\xe3o"}),"\n",(0,i.jsxs)(a.p,{children:["Marque esta op\xe7\xe3o para lan\xe7ar o servidor web ",(0,i.jsx)(a.code,{children:"WebAdmin"})," automaticamente quando iniciar a aplica\xe7\xe3o 4D ou 4D Server (ver (",(0,i.jsx)(a.a,{href:"#launching-at-startup",children:"acima"}),"). Como padr\xe3o essa op\xe7\xe3o n\xe3o \xe9 marcada."]}),"\n",(0,i.jsx)(a.h4,{id:"conex\xf5es-http-em-localhost-aceitas",children:"Conex\xf5es HTTP em localhost aceitas"}),"\n",(0,i.jsxs)(a.p,{children:["Quando esta op\xe7\xe3o for marcada, pode conectar ao servidor web ",(0,i.jsx)(a.code,{children:"WebAdmin"})," atrav\xe9s de HTTP na mesma m\xe1quina que a aplica\xe7\xe3o 4D. Como padr\xe3o, essa op\xe7\xe3o \xe9 marcada."]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Notas:"})}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Conex\xf5es com HTTP outras que localhost nunca s\xe3o aceitas."}),"\n",(0,i.jsxs)(a.li,{children:["Mesmo se esta op\xe7\xe3o for marcada, quando ",(0,i.jsx)(a.a,{href:"#accept-https",children:"Accept HTTPS"})," for marcado e a configura\xe7\xe3o  TLS for v\xe1lida, as conex\xf5es localhost v\xe3o usar HTTPS."]}),"\n"]}),"\n",(0,i.jsx)(a.h4,{id:"porta-http",children:"Porta HTTP"}),"\n",(0,i.jsxs)(a.p,{children:["N\xfamero de porta a usar para conex\xf5es com HTTP para o servidor web ",(0,i.jsx)(a.code,{children:"WebAdmin"})," web server quando a op\xe7\xe3o ",(0,i.jsx)(a.strong,{children:"Accept HTTP connections on localhost"})," estiver marcada. Valor normal padr\xe3o \xe9 7080"]}),"\n",(0,i.jsx)(a.h4,{id:"aceitar-https",children:"Aceitar HTTPS"}),"\n",(0,i.jsxs)(a.p,{children:["Quando esta op\xe7\xe3o for marcada, pode se conectar ao servidor web ",(0,i.jsx)(a.code,{children:"WebAdmin"})," atrav\xe9s de HTTPS. Como padr\xe3o, essa op\xe7\xe3o \xe9 marcada."]}),"\n",(0,i.jsx)(a.h4,{id:"porta-https",children:"Porta HTTPS"}),"\n",(0,i.jsxs)(a.p,{children:["N\xfamero de porta a utilizar para as conex\xf4es ao servidor web ",(0,i.jsx)(a.code,{children:"WebAdmin"})," atrav\xe9s de HTTPS quando a op\xe7\xe3o ",(0,i.jsx)(a.strong,{children:"HTTPS aceita"})," estiver marcada. Valor normal padr\xe3o \xe9 7443"]}),"\n",(0,i.jsx)(a.h4,{id:"rota-da-pasta-de-certificados",children:"Rota da pasta de certificados"}),"\n",(0,i.jsx)(a.p,{children:"Rota da pasta onde o certificado TLS est\xe1 localizado. Como padr\xe3o, a rota da pasta de certificados est\xe1 vazia e 4D ou Servidor 4D usa os arquivos de certificados contidos na apica\xe7\xe3o 4D (certificados personalizados devem ser armazenados do lado da pasta projeto)."}),"\n",(0,i.jsx)(a.h4,{id:"modo-de-registro-de-depura\xe7\xe3odebug",children:"Modo de registro de depura\xe7\xe3o/debug"}),"\n",(0,i.jsxs)(a.p,{children:['O estado ou formato do arquivo de registro da peti\xe7\xe3o HTTP (HTTPDebugLog__nn_.txt, armazenada na pasta "Logs" da aplica\xe7\xe3o -- ',(0,i.jsx)(a.em,{children:"nn"})," \xe9 o n\xfamero do arquivo). As op\xe7\xf5es abaixo est\xe3o dispon\xedveis:"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Desactivado"})," (por defecto)"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Com todas as partes do corpo"})," - habilitado com partes do cuerpo das peti\xe7\xf5es e respostas"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Sem as partes do corpo"})," - ativado sem partes do corpo (se indica o tamanho do corpo)"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Com os corpos das peti\xe7\xf5es"})," - ativado com as partes do corpo unicamente nas peti\xe7\xf5es"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Com a resposta corpos"})," - ativado com as partes do corpo unicamente nas respostas"]}),"\n"]}),"\n",(0,i.jsx)(a.h4,{id:"chave-de-acesso",children:"Chave de acesso"}),"\n",(0,i.jsxs)(a.p,{children:["A configura\xe7\xe3o de uma chave de acesso \xe9 obrigat\xf3ria para desbloquear o acesso ao servidor web ",(0,i.jsx)(a.code,{children:"WebAdmin"})," atrav\xe9s de uma URL (o acesso atrav\xe9s de um comando do menu 4D n\xe3o exige uma chave de acesso). Quando nenhuma chave de acesso for definida, n\xe3o \xe9 permitido que nenhum cliente web se conecte atrav\xe9s de uma URL a uma interfaz de administra\xe7\xe3o web como a p\xe1gina ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R5/Admin/dataExplorer",children:"Explorador de dados"}),". Uma p\xe1gina de erro \xe9 retornada no caso uma solicita\xe7\xe3o de conex\xe3o:"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"alt-text",src:o(86876).A+"",width:"193",height:"126"})}),"\n",(0,i.jsx)(a.p,{children:"Uma chave de acesso \xe9 parecida a uma senha, mas n\xe3o est\xe1 associada com um login."}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Para definir uma nova chave de acesso: clique no bot\xe3o ",(0,i.jsx)(a.strong,{children:"Definir"}),", introduza a string da chave de acesso na caixa de di\xe1logo e clique em ",(0,i.jsx)(a.strong,{children:"OK"}),". La etiqueta del\nbot\xf3n se convierte en ",(0,i.jsx)(a.strong,{children:"Modificar"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:["Para modificar a chave de acesso: clique no bot\xe3o ",(0,i.jsx)(a.strong,{children:"Modificar"}),", introduza a nova string da chave de acesso na caixa de di\xe1logo e clique em ",(0,i.jsx)(a.strong,{children:"OK"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:["Para eliminar a chave de acesso: clique no bot\xe3o",(0,i.jsx)(a.strong,{children:"Modificar"}),", deixe vazia a \xe1rea daa chave de acesso e clique em ",(0,i.jsx)(a.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,i.jsx)(a.h4,{id:"ativar-o-acesso-a-qodly-studio",children:"Ativar o acesso a Qodly Studio"}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsx)(a.p,{children:"Essa op\xe7\xe3o s\xf3 aparece se a licen\xe7a do Qodly Studio estiver ativada."})}),"\n",(0,i.jsxs)(a.p,{children:["Essa op\xe7\xe3o permite o acesso do usu\xe1rio a ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R5/WebServer/qodly-studio",children:"Qodly Studio"})," no n\xedvel da aplica\xe7\xe3o 4D. Observe que voc\xea tamb\xe9m precisa ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R5/settings/web#enable-access-to-qodly-studio",children:"habilitar o acesso em cada n\xedvel de projeto"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"configura\xe7\xe3o-de-webadmin-sem-interface",children:"Configura\xe7\xe3o de WebAdmin sem interface"}),"\n",(0,i.jsxs)(a.p,{children:["Todos ",(0,i.jsx)(a.a,{href:"#webadmin-settings",children:"os par\xe2metros de WebAdmin"})," s\xe3o armazenados no arquivo ",(0,i.jsx)(a.code,{children:"WebAdmin.4DSettings"}),". Ha un arquivo ",(0,i.jsx)(a.code,{children:"WebAdmin.4DSettings"})," por padr\xe3o para cada aplica\xe7\xe3o 4D e 4D Server, pelo qual \xe9 poss\xedvel lan\xe7ar v\xe1rias aplica\xe7\xf5es na mesma m\xe1quina local."]}),"\n",(0,i.jsxs)(a.p,{children:["Quando rodar uma aplica\xe7\xe3o sem interface 4D ou 4D Servidor, pode estabelecer e usar o arquivo padr\xe3o ",(0,i.jsx)(a.code,{children:"WebAdmin.4DSettings"})," , ou determinar um arquivo personalizado ",(0,i.jsx)(a.code,{children:".4DSettings"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["Para estabelecer o conte\xfado do arquivo, pode utilizar a ",(0,i.jsx)(a.a,{href:"#settings-dialog-box",children:"janela de par\xe2metros WebAdmin"})," da aplica\xe7\xe3o 4D com uma interface e ejecut\xe1-la depois sem interface. Se utiliza ent\xe3o o arquivo padr\xe3o ",(0,i.jsx)(a.code,{children:"WebAdmin.4DSettings"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["Ou, pode estabelecer um arquivo personalizado ",(0,i.jsx)(a.code,{children:".4DSettings"})," (formato xml) e usar ao inv\xe9s do arquivo padr\xe3o. Na ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R5/Admin/cli",children:"Interfaz de linha de comandos"})," h\xe1 v\xe1rios argumentos dedicados para compatibilidade com esta funcionalidade."]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["A chave de acesso n\xe3o \xe9 armazenada de forma transparente no arquivo ",(0,i.jsx)(a.code,{children:".4DSettings"}),"."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Exemplo:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n\t"my Fabulous AccessKey" --webadmin-auto-start true   \n\t--webadmin-store-settings\n\n'})}),"\n",(0,i.jsx)(a.h2,{id:"autentica\xe7\xe3o-e-sess\xe3o",children:"Autentica\xe7\xe3o e sess\xe3o"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Quando acessar uma p\xe1gina de gest\xe3o entrando uma URL e sem identifica\xe7\xe3o pr\xe9via, uma autentica\xe7\xe3o \xe9 exigida. O usu\xe1rio deve introduzir a ",(0,i.jsx)(a.a,{href:"#access-key",children:"chave-de-acesso"})," em uma janela de autentica\xe7\xe3o. Se a chave de acesso n\xe2o foi definida na configura\xe7\xe3o de ",(0,i.jsx)(a.code,{children:"WebAdmin"}),", n\xe3o \xe9 poss\xedvel o acesso via URL."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Quando uma p\xe1gina de gerenciamento \xe9 acessada diretamentee de um item menu 4D ou 4D Servidor (tal como ",(0,i.jsx)(a.strong,{children:"Records > Data Explorer"})," ou ",(0,i.jsx)(a.strong,{children:"Window > Data Explorer"})," (4D Server)), o acesso \xe9 garantido sem autentica\xe7\xe3o, e o usu\xe1rio \xe9 autenticado automaticamente"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["Quando o acesso \xe9 concedido, uma  ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R5/WebServer/sessions",children:"sess\xe3o web"}),' com o privil\xe9gio "WebAdmin" \xe9 criado na aplica\xe7\xe3o 4D. Enquanto a sess\xe3o atual tiver o privil\xe9gio "WebAdmin", o componente ',(0,i.jsx)(a.code,{children:"WebAdmin"})," entrega p\xe1ginas  solicitadas."]})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,a,o)=>{var i=o(296540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function t(e,a,o){var i,n={},t=null,l=null;for(i in void 0!==o&&(t=""+o),void 0!==a.key&&(t=""+a.key),void 0!==a.ref&&(l=a.ref),a)r.call(a,i)&&!c.hasOwnProperty(i)&&(n[i]=a[i]);if(e&&e.defaultProps)for(i in a=e.defaultProps)void 0===n[i]&&(n[i]=a[i]);return{$$typeof:s,type:e,key:t,ref:l,props:n,_owner:d.current}}a.Fragment=n,a.jsx=t,a.jsxs=t},474848:(e,a,o)=>{e.exports=o(221020)},86876:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},992901:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},274126:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},578212:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png"},220716:(e,a,o)=>{o.d(a,{A:()=>i});const i=o.p+"assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png"},28453:(e,a,o)=>{o.d(a,{R:()=>r,x:()=>d});var i=o(296540);const s={},n=i.createContext(s);function r(e){const a=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:a},e.children)}}}]);