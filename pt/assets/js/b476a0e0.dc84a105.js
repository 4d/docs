"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84815"],{893173:function(e,s,t){t.r(s),t.d(s,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>n});var r=JSON.parse('{"id":"commands-legacy/http-set-certificates-folder","title":"HTTP SET CERTIFICATES FOLDER","description":"HTTP SET CERTIFICATES FOLDER ( pastaCertificados )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/http-set-certificates-folder.md","sourceDirName":"commands-legacy","slug":"/commands/http-set-certificates-folder","permalink":"/docs/pt/20-R7/commands/http-set-certificates-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-set-certificates-folder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"http-set-certificates-folder","title":"HTTP SET CERTIFICATES FOLDER","slug":"/commands/http-set-certificates-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP Request","permalink":"/docs/pt/20-R7/commands/http-request"},"next":{"title":"HTTP SET OPTION","permalink":"/docs/pt/20-R7/commands/http-set-option"}}'),a=t("785893"),o=t("250065");let i={id:"http-set-certificates-folder",title:"HTTP SET CERTIFICATES FOLDER",slug:"/commands/http-set-certificates-folder",displayed_sidebar:"docs"},n=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Sobre certificados SSL",id:"sobre-certificados-ssl",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"HTTP SET CERTIFICATES FOLDER"})," ( ",(0,a.jsx)(s.em,{children:"pastaCertificados"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Par\xe2metro"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"pastaCertificados"}),(0,a.jsx)(s.td,{children:"Text"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Caminho e nome da pasta de certificados do cliente"})]})})]}),"\n",(0,a.jsx)(s.admonition,{title:"Compatibilidade",type:"info",children:(0,a.jsxs)(s.p,{children:["Esse comando \xe9 mantido apenas por motivos de compatibilidade. Agora \xe9 recomend\xe1vel usar ",(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/API/HTTPRequestClass",children:(0,a.jsx)(s.code,{children:"4D.HTTPRequest class"})}),"."]})}),"\n",(0,a.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(s.p,{children:["O comando ",(0,a.jsx)(s.strong,{children:"HTTP SET CERTIFICATES FOLDER"})," permite modificar a pasta de certificados cliente ativa para o conjunto dos processos na sess\xe3o atual."]}),"\n",(0,a.jsxs)(s.p,{children:["A pasta de certificados cliente \xe9 na qual 4D busca os arquivos de certificados cliente que s\xe3o requeridos pelos servidores web. Por padr\xe3o, sempre e quando o comando ",(0,a.jsx)(s.strong,{children:"HTTP SET CERTIFICATES FOLDER"}),' n\xe3o se execute, 4D utiliza uma pasta chamada "ClientCertificatesFolder " que \xe9 criado junto ao arquivo de estrutura. Esta pasta \xe9 criada unicamente quando \xe9 necess\xe1rio.']}),"\n",(0,a.jsx)(s.p,{children:"Em 4D v14, agora \xe9 poss\xedvel utilizar v\xe1rios certificados clientes."}),"\n",(0,a.jsxs)(s.p,{children:["Em ",(0,a.jsx)(s.em,{children:"pastaCertificados"}),", passe a rota de acesso da pasta personalizada que cont\xe9m os certificados clientes. Pode passar uma rota de acesso relativa ao arquivo de estrutura da aplica\xe7\xe3o, ou uma rota de acesso absoluta. A rota deve ser expressada com a sintaxe do sistema, por exemplo:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"(macOS): Disk:Applications:myserv:folder"}),"\n",(0,a.jsx)(s.li,{children:"(Windows): C:\\Applications\\myserv\\folder"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Uma vez executado este comando, a nova rota \xe9 levada em conta imediatamente (n\xe3o \xe9 necess\xe1rio reiniciar a aplica\xe7\xe3o). Se utiliza em todos os processos da base."}),"\n",(0,a.jsxs)(s.p,{children:["Se a pasta especificada n\xe3o existe na localiza\xe7\xe3o definida, ou se a rota de acesso passada em ",(0,a.jsx)(s.em,{children:"pastaCertificados"})," n\xe3o \xe9 v\xe1lida, \xe9 gerado um erro. Pode interceptar este erro utilizando um m\xe9todo de gest\xe3o de erros instalado pelo comando ",(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"sobre-certificados-ssl",children:"Sobre certificados SSL"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/Admin/tls",children:"Como descrito nesta p\xe1gina"}),", certificados SSL gerenciado por 4D deve ser no ",(0,a.jsx)(s.strong,{children:"PEM format"}),". Se seu provedor de certificado (por exemplo, ",(0,a.jsx)(s.a,{href:"https://www.startssl.com/",children:"startssl"}),") enviar para voc\xea um certificado que esteja no formato bin\xe1rio, como .crt, .pfx ou .p12 (o formato tamb\xe9m depende de seu navegador), voc\xea ter\xe1 que converter o formato para o PEM format antes de poder utiliz\xe3-lo. H\xe1 web sites como ",(0,a.jsx)(s.em,{children:"sslshopper"})," onde se pode fazer essa convers\xe3o on-line."]}),"\n",(0,a.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(s.p,{children:"Voc\xea quer mudar temporalmente a pasta de certificados:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'\xa0var $certifFolder : Text\n\xa0$certifFolder :=HTTP Get certificates folder\xa0//guardar pasta atual\n\xa0HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")\n\xa0...\xa0// Execu\xe7\xe3o de peti\xe7\xf5es espec\xedficas\n\xa0HTTP SET CERTIFICATES FOLDER($certifFolder)\xa0//restabelecer a pasta anterior\n'})}),"\n",(0,a.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/commands/generate-certificate-request",children:"GENERATE CERTIFICATE REQUEST"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/commands/http-get-certificates-folder",children:"HTTP Get certificates folder"})]}),"\n",(0,a.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"N\xfamero do comando"}),(0,a.jsx)(s.td,{children:"1306"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Thread-seguro"}),(0,a.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return n},a:function(){return i}});var r=t(667294);let a={},o=r.createContext(a);function i(e){let s=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);