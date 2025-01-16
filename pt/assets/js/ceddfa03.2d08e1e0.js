"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99006"],{920099:function(e,o,r){r.r(o),r.d(o,{default:()=>m,frontMatter:()=>n,metadata:()=>a,assets:()=>c,toc:()=>t,contentTitle:()=>d});var a=JSON.parse('{"id":"Admin/tls","title":"Protocolo TLS (HTTPS)","description":"Todos os servidores 4D podem se comunicar em modo seguro atrav\xe9s do protocolo TLS (Transport Layer Security):","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Admin/tls.md","sourceDirName":"Admin","slug":"/Admin/tls","permalink":"/docs/pt/20-R7/Admin/tls","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Ftls.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"tls","title":"Protocolo TLS (HTTPS)"},"sidebar":"docs","previous":{"title":"Command Line Interface","permalink":"/docs/pt/20-R7/Admin/cli"},"next":{"title":"Managing 4D Licenses","permalink":"/docs/pt/20-R7/Admin/licenses"}}'),i=r("785893"),s=r("250065");let n={id:"tls",title:"Protocolo TLS (HTTPS)"},d=void 0,c={},t=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Vers\xe3o m\xednima",id:"vers\xe3o-m\xednima",level:2},{value:"Habilitando TLS com o servidor HTTP",id:"habilitando-tls-com-o-servidor-http",level:2},{value:"Certificados",id:"certificados",level:3},{value:"Formato",id:"formato",level:4},{value:"Criptografia",id:"criptografia",level:4},{value:"Instala\xe7\xe3o de arquivos de certificado",id:"instala\xe7\xe3o-de-arquivos-de-certificado",level:3},{value:"Ativar TLS",id:"ativar-tls",level:3},{value:"Perfect Forward Secrecy (PFS)",id:"perfect-forward-secrecy-pfs",level:3},{value:"Ativando TLS com os outros servidores",id:"ativando-tls-com-os-outros-servidores",level:2},{value:"Como obter o certificado RSA? (tutorial)",id:"como-obter-o-certificado-rsa-tutorial",level:2}];function l(e){let o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:"Todos os servidores 4D podem se comunicar em modo seguro atrav\xe9s do protocolo TLS (Transport Layer Security):"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"o servidor HTTP"}),"\n",(0,i.jsx)(o.li,{children:"o servidor de aplica\xe7\xe3o (aplica\xe7\xf5es desktop cliente-servidor)"}),"\n",(0,i.jsx)(o.li,{children:"o servidor SQL"}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Al\xe9m disso, o cliente HTTP (comando ",(0,i.jsx)(o.code,{children:"HTTP get"})," por exemplo) tamb\xe9m \xe9 compat\xedvel com o protocolo TLS."]}),"\n",(0,i.jsx)(o.h2,{id:"vis\xe3o-geral",children:"Vis\xe3o Geral"}),"\n",(0,i.jsx)(o.p,{children:"O protocolo TLS (sucessor de SSL) foi criado para assegurar trocas de dados entre duas aplica\xe7\xf5es - principalmente entre servidor web e um navegador. Esse protocolo \xe9 amplamente usado e \xe9 compat\xedvel com a maioria dos navegadores."}),"\n",(0,i.jsx)(o.p,{children:"No n\xedvel de rede, o protocolo de seguran\xe7a \xe9 inserido entre a capa TCP/IP (baixo n\xedvel) e o protocolo de alto n\xedvel HTTP. Foi criado principalmente para trabalhar com HTTP."}),"\n",(0,i.jsx)(o.p,{children:"Configura\xe7\xe3o de rede usando TSL:"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:r(508298).Z+"",width:"318",height:"174"})}),"\n",(0,i.jsx)(o.p,{children:"O protocolo TLS foi criado para autenticar o emissor e o recipiente e assim garantir a confidencialidade e integridade da troca de informa\xe7\xf5es:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Autentica\xe7\xe3o"}),": As identidades do emissor e do receptor s\xe3o confirmadas."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Confidencialidade"}),": O dado enviado \xe9 criptografado para que um terceiro n\xe3o possa entender a mensagem."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Integridade"}),": Os dados recebidos n\xe3o foram modificados, seja por acidente ou com m\xe1 inten\xe7\xe3o."]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"TLS usa uma t\xe9cnica de criptografia de chave p\xfablica baseado em duas chaves assim\xe9tricas para criptografia e descriptografia: uma chave p\xfablica e outra privada. A chave privada \xe9 usada para criptografar os dados. O emissor (o website) n\xe3o d\xe1 essa chave para ningu\xe9m."}),"\n",(0,i.jsxs)(o.p,{children:["A chave p\xfablica \xe9 usada para decriptografar a informa\xe7\xe3o e envi\xe1-la para os recipientes (navegadores web) atrav\xe9s de um ",(0,i.jsx)(o.strong,{children:"certificado"}),". O certificado \xe9 fornecido atrav\xe9s de uma autoridade de certifica\xe7\xe3o. O site paga ao provedor de certificados para fornecer um certificado que garanta a autentica\xe7\xe3o do servidor e contenha a chave p\xfablica que permita a troca de dados em um modo seguro."]}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"Os navegadores web autorizam apenas os certificados emitidos por uma autoridade de certifica\xe7\xe3o referenciada em suas propriedades."})}),"\n",(0,i.jsx)(o.h2,{id:"vers\xe3o-m\xednima",children:"Vers\xe3o m\xednima"}),"\n",(0,i.jsxs)(o.p,{children:["Como padr\xe3o, a vers\xe3o m\xednima de um protocolo de seguran\xe7a aceito pelos servidores 4D \xe9 TLS 1.3. Pode modificar esse valor usando o seletor ",(0,i.jsx)(o.code,{children:"Min TLS version"})," do comando ",(0,i.jsx)(o.code,{children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsxs)(o.p,{children:["Voc\xea pode controlar separadamente a ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R7/WebServer/webServerConfig#minimum-tls-version",children:"vers\xe3o m\xednima do TLS"})," para ",(0,i.jsx)(o.strong,{children:"objetos do webServer"}),"."]})}),"\n",(0,i.jsx)(o.h2,{id:"habilitando-tls-com-o-servidor-http",children:"Habilitando TLS com o servidor HTTP"}),"\n",(0,i.jsx)(o.p,{children:"Para poder usar o protocolo TLS com o servidor HTTP 4D, voc\xea deve:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"Obtenha seus arquivos de certificado."}),"\n",(0,i.jsx)(o.li,{children:"Instale seus arquivos de certificado no(s) local(is) apropriado(s)"}),"\n",(0,i.jsx)(o.li,{children:"Habilitar TLS."}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"certificados",children:"Certificados"}),"\n",(0,i.jsx)(o.h4,{id:"formato",children:"Formato"}),"\n",(0,i.jsxs)(o.p,{children:["Certificados TLS gerenciados por 4D devem ser no ",(0,i.jsx)(o.strong,{children:"PEM format"}),". Se seu fornecedor de certificado envia um certificado que est\xe1 no formato bin\xe1rio tais como .crt, .pfx ou .p12, tem que converter para o formato PEM para poder us\xe1-lo. H\xe1 sites em que voc\xea pode fazer essa convers\xe3o on-line."]}),"\n",(0,i.jsx)(o.h4,{id:"criptografia",children:"Criptografia"}),"\n",(0,i.jsx)(o.p,{children:"4D fornece certificados nos formatos de criptografia abaixo:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/RSA_(cryptosystem)",children:(0,i.jsx)(o.strong,{children:"RSA"})})}),"\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm",children:(0,i.jsx)(o.strong,{children:"ECDSA"})})}),"\n"]}),"\n",(0,i.jsx)(o.admonition,{title:"Compatibidade",type:"info",children:(0,i.jsxs)(o.p,{children:["O formato de criptografia ECDSA n\xe3o \xe9 compat\xedvel com ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R7/settings/client-server#network-layer",children:"a camada de rede legado 4D"}),"."]})}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsxs)(o.p,{children:["4D oferece dois comandos para ajudar a peticionar um certificado RSA, ",(0,i.jsx)(o.a,{href:"#how-to-get-a-rsa-certificate-tutorial",children:"veja o tutorial abaixo"}),"."]})}),"\n",(0,i.jsx)(o.h3,{id:"instala\xe7\xe3o-de-arquivos-de-certificado",children:"Instala\xe7\xe3o de arquivos de certificado"}),"\n",(0,i.jsx)(o.p,{children:"Os arquivos de certificado incluem:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"key.pem"}),": um documento que cont\xe9m a chave de criptografia privada,"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"cert.pem"}),": um documento que cont\xe9m o certificado."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Os arquivos ",(0,i.jsx)(o.strong,{children:"key.pem"})," e ",(0,i.jsx)(o.strong,{children:"cert.pem"})," devem estar localizados:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["com 4D Server ou 4D no modo local, ao lado da ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R7/Project/architecture#project-folder",children:"pasta do projeto"})]}),"\n",(0,i.jsxs)(o.li,{children:["com 4D em modo remoto, na pasta do banco de dados cliente na m\xe1quina remota (para obter mais informa\xe7\xf5es sobre a localiza\xe7\xe3o dessa pasta, consulte o comando ",(0,i.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page485.html",children:(0,i.jsx)(o.code,{children:"Get 4D folder"})}),"). Deve copiar esses arquivos manualmente na m\xe1quina remota."]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"ativar-tls",children:"Ativar TLS"}),"\n",(0,i.jsxs)(o.p,{children:["Para que as conex\xf5es TLS sejam aceitas pelo servidor HTTP, voc\xea deve ativar HTTPS. Consulte o par\xe1grafo ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R7/WebServer/webServerConfig#enable-https",children:(0,i.jsx)(o.strong,{children:"Habilitar HTTPS"})})," para saber as diferentes maneiras de habilitar o TLS para o servidor HTTP."]}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"O servidor 4D web \xe9 compat\xedvel com a op\xe7\xe3o HSTS para prevenir um navegador de"})}),"\n",(0,i.jsx)(o.h3,{id:"perfect-forward-secrecy-pfs",children:"Perfect Forward Secrecy (PFS)"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Forward_secrecy",children:"PFS"}),' adiciona mais um n\xedvel de seguran\xe7a para suas comunica\xe7\xf5es. Ao inv\xe9s de usar chaves de troca pr\xe9-estabelecidas, PFS cria chaves de sess\xe3o cooperativamente entre as partes que se comunicam usando os algoritmos Difie-Hellman (DH). A maneira conjunta com a qual essas chaves s\xe3o constru\xeddas cria um "segredo compartilhado" que impede partes externas de as comprometerem.']}),"\n",(0,i.jsxs)(o.p,{children:["Quando TLS estiver ativado no servidor, PFS \xe9 ativado automaticamente. Se o arquivo ",(0,i.jsx)(o.em,{children:"dhparams.pem"})," (documento que cont\xe9m a chave privada DH do servidor) ainda n\xe3o existir, 4D vai gerar o arquivo automaticamente com um tamanho de chave de  2048. A gera\xe7\xe3o inicial deste arquivo pode levar v\xe1rios minutos. O arquivo \xe9 colocado com os arquivos ",(0,i.jsxs)(o.a,{href:"#instalando-arquivos-de-certificado",children:[(0,i.jsx)(o.em,{children:"key.pem"})," e ",(0,i.jsx)(o.em,{children:"cert.pem"})]}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["Se utilizar uma ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R7/WebServer/webServerConfig##cipher-list",children:"lista de cifrado personalizada"})," e quiser habilitar o PFS, deve comprovar que contenha entradas com algoritmos DH ou ECDH (Elliptic-curve Diffie-Hellman)."]}),"\n",(0,i.jsx)(o.h2,{id:"ativando-tls-com-os-outros-servidores",children:"Ativando TLS com os outros servidores"}),"\n",(0,i.jsx)(o.p,{children:"Para usar TLS com o servidor de aplica\xe7\xf5es 4D (aplica\xe7\xf5es cliente-servidor de desktop) ou o servidor SQL, voc\xea s\xf3 precisa ativar comunica\xe7\xf5es TLS e o servidor automaticamente configura as conex\xf5es na inicializa\xe7\xe3o."}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Com o servidor de aplica\xe7\xf5es, selecione a op\xe7\xe3o ",(0,i.jsx)(o.strong,{children:"Encriptar comunica\xe7\xf5es cliente-servidor"})," na p\xe1gina ",(0,i.jsx)(o.a,{href:".../settings/client-server#encrypt-client-server-communications",children:'"Op\xe7\xf5es cliente-servidor/rede" da caixa de di\xe1logo Par\xe2metros'}),"."]}),"\n",(0,i.jsxs)(o.li,{children:["Com o servidor SQL, selecione a op\xe7\xe3o ",(0,i.jsx)(o.strong,{children:"Habilitar TLS"})," na p\xe1gina ",(0,i.jsx)(o.a,{href:"../settings/sql#sql-server-publishing",children:'"SQL" na caixa de di\xe1logo Par\xe2metros'}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"como-obter-o-certificado-rsa-tutorial",children:"Como obter o certificado RSA? (tutorial)"}),"\n",(0,i.jsx)(o.p,{children:"Um servidor trabalhando em modo seguro significa que precisa de um certificado digital de uma autoridade de certifica\xe7\xf5es. Esse certificado cont\xe9m v\xe1rias informa\xe7\xf5es tais como a ID do site assim como a chave p\xfablica usada para comunicar com o servidor. Esse certificado \xe9 transmitido aos clientes (por exemplo os navegadores Web) conectando a esse servidor. Quando o certificado tiver sido identificado e aceito, a comunica\xe7\xe3o \xe9 feita em modo seguro."}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"Navegadores web autorizam apenas os certificados emitidos por autoridades de certifica\xe7\xe3o referenciados em suas propriedades."}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:r(220635).Z+"",width:"394",height:"227"})}),"\n",(0,i.jsx)(o.p,{children:"A autoridade de certifica\xe7\xe3o \xe9 escolhida de acordo com v\xe1rios crit\xe9rios. Se a autoridade de certifica\xe7\xe3o for bem reconhecida, o certificado ser\xe1 autorizado por v\xe1rios navegadores, mas o pre\xe7o pode ser caro."}),"\n",(0,i.jsx)(o.p,{children:"Para obter um certificado digital:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Crie uma chave privada usando o comando ",(0,i.jsx)(o.code,{children:"GENERATE ENCRYPTION KEYPAIR"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Aviso"}),": por raz\xf5es de seguran\xe7a, a chave privada deve ser sempre mantida em segredo. Na verdade deve ser mantida sempre na m\xe1quina servidor. Para o servidor web, o arquivo Key.pem deve ser localizado na pasta Project."]}),"\n"]}),"\n",(0,i.jsxs)(o.ol,{start:"2",children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Use o comando ",(0,i.jsx)(o.code,{children:"GENERATE CERTIFICATE REQUEST"})," para emitir uma peti\xe7\xe3o de certificado."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Envie a peti\xe7\xe3o de certificado \xe0 autoridade de certifica\xe7\xe3o escolhida.\nPara preencher uma peti\xe7\xe3o de certificado, pode ser necess\xe1rio entrar em contato com a autoridade de certifica\xe7\xe3o. A autoridade checa que a informa\xe7\xe3o transmitida seja correta. A peti\xe7\xe3o de certificado \xe9 gerada em um BLOB usando o formato PKCS codificado em base64 (formato PEM). Esse princ\xedpio permite que copie e cole as chaves como texto e as envie via E-mail sem modificar o conte\xfado da chave. Por exemplo pode salvar o BLOB que cont\xe9m a peti\xe7\xe3o de certificado em um documento texto (usando o comando ",(0,i.jsx)(o.code,{children:"BLOB TO DOCUMENT"}),"), e ent\xe3o abrir e copiar e colar seu conte\xfado em um mail ou um formul\xe1rio web a ser enviado para a autoridade de certifica\xe7\xe3o."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:['Quando tiver o certificado, crie um arquivo texto chamado "cert.pem" e cole seu conte\xfado do certificado dentro dele.\nPode receber um certificado de v\xe1rias maneiras (geralmente por email ou formul\xe1rio HTML). 4D aceita todos os formatos de texto relacionados \xe0 plataformas para certificados (OS X, PC, Linux, etc). No entanto, o certificado deve estar no formato ',(0,i.jsx)(o.a,{href:"#format",children:"PEM"}),", ",(0,i.jsx)(o.em,{children:"ou seja,"}),", PKCS codificado em base64."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"Caracteres CR final de linha n\xe3o s\xe3o compat\xedveis em si; deve usar ou CRLF ou LF."}),"\n"]}),"\n",(0,i.jsxs)(o.ol,{start:"5",children:["\n",(0,i.jsxs)(o.li,{children:["Coloque o arquivo \u201Ccert.pem\u201D no ",(0,i.jsx)(o.a,{href:"#installing-certificate-files",children:"local apropriado"}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"O servidor 4D pode trabalhar em modo seguro. Um certificado \xe9 normalmente v\xe1lido entre 3 meses e um ano."})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},508298:function(e,o,r){r.d(o,{Z:function(){return a}});let a="data:image/png;base64,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"},220635:function(e,o,r){r.d(o,{Z:function(){return a}});let a=r.p+"assets/images/tls2-654d4965c78986e1ff3061d0686d7943.png"},250065:function(e,o,r){r.d(o,{Z:function(){return d},a:function(){return n}});var a=r(667294);let i={},s=a.createContext(i);function n(e){let o=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(s.Provider,{value:o},e.children)}}}]);