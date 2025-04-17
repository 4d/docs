"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5969"],{817878:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/on-web-connection-database-method","title":"On Web Connection database method","description":"On Web Connection($url Text ; $ipBrowser Text ; $user Text) -> $result : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/on-web-connection-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-web-connection-database-method","permalink":"/docs/pt/commands/on-web-connection-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-web-connection-database-method.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"on-web-connection-database-method","title":"On Web Connection database method","slug":"/commands/on-web-connection-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Web Authentication database method","permalink":"/docs/pt/commands/on-web-authentication-database-method"},"next":{"title":"On Web Legacy Close Session database method","permalink":"/docs/pt/commands/on-web-legacy-close-session-database-method"}}'),r=o("785893"),a=o("250065");let d={id:"on-web-connection-database-method",title:"On Web Connection database method",slug:"/commands/on-web-connection-database-method",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"On Web Connection Database Method Calls",id:"on-web-connection-database-method-calls",level:2}];function l(e){let n={a:"a",arquivo:"arquivo",br:"br",code:"code",em:"em",file:"file",h2:"h2",li:"li",p:"p",pre:"pre",rota:"rota",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"On Web Connection($url : Text ; $http : Text ; $ipBrowser : Text ; $ipServer : Text ; $user : Text ; $pw : Text) -> $result : Boolean"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$url"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$http"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"cabe\xe7alho HTTP + corpo HTTP"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$ipBrowser"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Endere\xe7o IP do navegador"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$ipServer"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Endere\xe7o IP do servidor"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$user"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nome de usu\xe1rio"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$pw"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Senha"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:""}),"\n",(0,r.jsx)(n.p,{children:"O On Web Connection database method pode ser chamado nos seguintes casos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["o servidor web recebe uma peti\xe7\xe3o que come\xe7a pelo URL ",(0,r.jsx)(n.em,{children:"4DCGI"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"o servidor web recebe uma peti\xe7\xe3o inv\xe1lida."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Para maior informa\xe7\xe3o, consulte a continua\xe7\xe3o o par\xe1grafo \u201CChamadas ao M\xe9todo de banco On Web Connection\u201D."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota de compatibilidade"}),": o m\xe9todo banco tamb\xe9m se chama em caso de cria\xe7\xe3o de um contexto em modo contextual (modo obsoleto pode ser utilizado em bancos 4D convertidos."]}),"\n",(0,r.jsxs)(n.p,{children:["A peti\xe7\xe3o deve ter sido aceita previamente pelo ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/on-web-authentication-database-method",children:"On Web Authentication database method"})," (se existir) e o servidor web deve ser lan\xe7ado."]}),"\n",(0,r.jsx)(n.p,{children:"O m\xe9todo de banco On Web Connection database method recebe seis par\xe2metros de tipo texto, passados por 4D ($url, $http, $ipBrowser, $ipServer, $user e $pw). Os conte\xfados desses par\xe2metros s\xe3o os seguintes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Par\xe2metros"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Tipo"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$url"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$http"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"Cabe\xe7alho HTTP + corpo HTTP (at\xe9 o limite de 32 kb)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$ipBrowser"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"endere\xe7o IP do Web client (browser)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$ipServer"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"endere\xe7o IP do servidor"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$user"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"nome de usu\xe1rio"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$pw"}),(0,r.jsx)(n.td,{children:"Texto"}),(0,r.jsx)(n.td,{children:"Senha"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Voc\xea deve declarar esses par\xe2metros da seguinte maneira:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// On Web Connection Database Method\n\xa0\n#DECLARE($url : Text ; $http : Text ; $ipBrowser : Text ; $ipServer : Text ;\\ $user : Text ; $pw : Text) -> $result : Boolean\n\xa0\n\xa0\xa0// C\xf3digo para o m\xe9todo\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Dados extra da URL"}),(0,r.jsx)(n.br,{}),"\nO primeiro par\xe2metro (",(0,r.jsx)(n.em,{children:"$url"}),") \xe9 a URL introduzida pelo usu\xe1rio na \xe1rea de localiza\xe7\xe3o de seu navegador web, menos a dire\xe7\xe3o local.",(0,r.jsx)(n.br,{}),"\nUsemos o exemplo de uma conex\xe3o de Intranet. Suponhamos que o endere\xe7o IP de sua m\xe1quina servidor web 4D \xe9 ",(0,r.jsx)(n.em,{children:"123.45.67.89"}),". A tabela seguinte mostra os valores de ",(0,r.jsx)(n.em,{children:"$url"})," dependendo da URL introduzida no navegador web:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"URL introduzida no navegador"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Valor do par\xe2metro $url"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"123.45.67.89"}),(0,r.jsx)(n.td,{children:"/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"http://123.45.67.89",children:"http://123.45.67.89"})}),(0,r.jsx)(n.td,{children:"/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"123.45.67.89/Clientes"}),(0,r.jsx)(n.td,{children:"/Clientes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"http://123.45.67.89/Clientes",children:"http://123.45.67.89/Clientes"})}),(0,r.jsx)(n.td,{children:"/Clientes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"http://123.45.67.89/Clientes/Adicionar",children:"http://123.45.67.89/Clientes/Adicionar"})}),(0,r.jsx)(n.td,{children:"/Clientes/Adicionar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"123.45.67.89/Fa\xe7a_Isso/Se_OK/Fa\xe7a_Aquilo"}),(0,r.jsx)(n.td,{children:"/Fa\xe7a_Isso/Se_OK/Fa\xe7a_Aquilo"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Note que voc\xea \xe9 livre para usar este par\xe2metro quando quiser. 4D simplesmente ignora os valores passados al\xe9m da parte local da URL.",(0,r.jsx)(n.br,{}),'\nPor exemplo, pode estabelecer uma conven\xe7\xe3o onde o valor "',(0,r.jsx)(n.em,{children:"/Clientes/Adicionar"}),'" signifique \u201Cir diretamente a adicionar um novo registro na tabela ',(0,r.jsx)(n.em,{children:"[Clientes]"}),".\u201D Fornecendo aos usu\xe1rios web de seu banco uma lista de poss\xedveis valores e/ou marcadores por padr\xe3o, pode oferecer atalhos as diferentes partes de sua aplica\xe7\xe3o. Desta forma, os usu\xe1rios web podem acessar rapidamente aos recursos de seu site sem ter que navegar cada vez que se conectem a seu banco."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Advert\xeancia"}),": para evitar que um usu\xe1rio acesse diretamente a um banco com um marcador criado durante uma sess\xe3o anterior, 4D intercepta toda URL que corresponda a uma das URLs padr\xe3o de 4D."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cabe\xe7alho de peti\xe7\xe3o de HTTP seguida por corpo HTTP"}),(0,r.jsx)(n.br,{}),"\nO segundo par\xe2metro (",(0,r.jsx)(n.em,{children:"$http"}),") \xe9 o cabe\xe7alho e o corpo da peti\xe7\xe3o HTTP enviada pelo navegador web. Note que esta informa\xe7\xe3o se passa a seu ",(0,r.jsx)(n.strong,{children:"On Web Connection database method"})," tal como est\xe1. O conte\xfado varia em fun\xe7\xe3o do tipo de navegador web que estiver tentando a conex\xe3o."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Com Safari rodando em Mac OS, pode receber um cabe\xe7alho similar a este:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-RAW",children:"GET /favicon.ico HTTP/1.1Referer: http://123.45.67.89/4dcgi/testUser-Agent:  Mozilla/5.0 (Macintosh; U; Intel macOS; fr-fr) AppleWebKit/523.10.3  (KHTML, like Gecko) Version/3.0.4 Safari/523.10Cache-Control: max-age=0Accept: */*Accept-Language: fr-frAccept-Encoding: gzip, deflateConnection: keep-aliveHost: 123.45.67.89  \n"})}),"\n",(0,r.jsx)(n.p,{children:"Com Microsoft Internet Explorer 8 rodando em Windows, pode receber um cabe\xe7alho similar a este:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-RAW",children:"GET / HTTP/1.1Accept: image/jpeg, application/x-ms-application,  image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap,  application/vnd.ms-powerpoint, application/vnd.ms-excel,  application/msword, */*Accept-Language: fr-FRUser-Agent:  Mozilla/4.0 (compat\xedvel; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2;  .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center  PC 6.0; .NET4.0C)Accept-Encoding: gzip, deflateHost: 123.45.67.89Connection: Keep-Alive  \n"})}),"\n",(0,r.jsxs)(n.p,{children:["Se sua aplica\xe7\xe3o manipula esta informa\xe7\xe3o, \xe9 sua decis\xe3o analizar o cabe\xe7alho e o corpo.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Nota"}),": por raz\xf5es de rendimento, o tamanho desses dados n\xe3o pode ser maior que 32 KB. Se o tamanho for maior, os dados s\xe3o truncados pelo servidor 4D HTTP."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Endere\xe7o IP do Web client"}),(0,r.jsx)(n.br,{}),"\nO par\xe2metro ",(0,r.jsx)(n.em,{children:"$ipBrowser"})," recebe o endere\xe7o IP da m\xe1qina de navegador. Esta informa\xe7\xe3o pode permitir que diferencie entre conex\xf5es Internet e Intranet."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Endere\xe7o IP do servidor"}),(0,r.jsx)(n.br,{}),"\nO par\xe2metro ",(0,r.jsx)(n.em,{children:"$ipServer"})," recebe o endere\xe7o IP para o qual a peti\xe7\xe3o HTTP foi enviada. 4D permite para multi-homing, o que permite explorar m\xe1quinas com mais de um endere\xe7o IP. Para maior informa\xe7\xe3o, consulte ",(0,r.jsx)(n.em,{children:"Web Server Settings"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Nome de usu\xe1rio e Senha"}),(0,r.jsx)(n.br,{}),"\nOs par\xe2metros ",(0,r.jsx)(n.em,{children:"$user"})," e ",(0,r.jsx)(n.em,{children:"$pw"})," recebem o nome de usu\xe1rio e senha inseridos pelo usu\xe1rio na caixa de di\xe1logo de identifica\xe7\xe3o exibida pelo navegador. Essa caixa de di\xe1logo aparece para qualquer conex\xe3o, se a op\xe7\xe3o Usar Senhas tiver sido selecionada na caixa de di\xe1logo Prefer\xeancias de Banco, ver ",(0,r.jsx)(n.em,{children:"Conex\xf5es de Seguran\xe7a"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," se o nome de usu\xe1rio enviado pelo navegador existir em 4D, o par\xe2metro ",(0,r.jsx)(n.em,{children:"$pw"})," (a senha do usu\xe1rio) n\xe3o \xe9 retornado por raz\xf5es de seguran\xe7a."]}),"\n",(0,r.jsx)(n.h2,{id:"on-web-connection-database-method-calls",children:"On Web Connection Database Method Calls"}),"\n",(0,r.jsxs)(n.p,{children:["O On Web Connection database method pode ser utilizado como ponto de entrada para o servidor web 4D, seja para usar a URL especial ",(0,r.jsx)(n.em,{children:"4DCGI"}),", ou utilizando as URLs de comando personalizados."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Advert\xeancia"}),": a chamada de um comando 4D que mostra um elemento de interface (",(0,r.jsx)(n.a,{href:"/docs/pt/commands/dialog",children:"DIALOG"}),", ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/alert",children:"ALERT"}),"...) termina o processamento do m\xe9todo."]}),"\n",(0,r.jsx)(n.p,{children:"O On Web Connection database method \xe9 chamado nos seguintes casos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Quando 4D recebe a ",(0,r.jsx)(n.em,{children:"URL /4DCGI"}),". O m\xe9todo banco se chama com a URL ",(0,r.jsx)(n.em,{children:"/4DCGI/"})," em ",(0,r.jsx)(n.em,{children:"$url"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Quando uma p\xe1gina web chamada com uma URL de tipo ",(0,r.jsx)(n.em,{children:(0,r.jsxs)(n.rota,{children:["/",(0,r.jsx)(n.arquivo,{})]})})," n\xe3o for encontrada. O m\xe9todo de banco se chama com a URL (*)."]}),"\n",(0,r.jsxs)(n.li,{children:["Quando uma p\xe1gina web for chama com uma URL do tipo ",(0,r.jsx)(n.file,{children:"/ e nenhuma p\xe1gina tiver sido definida como padr\xe3o. O m\xe9todo de banco se chama com a URL"})]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return d}});var s=o(667294);let r={},a=s.createContext(r);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);