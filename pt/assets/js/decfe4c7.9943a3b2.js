"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60453"],{165890:function(e,r,s){s.r(r),s.d(r,{default:()=>m,frontMatter:()=>t,metadata:()=>a,assets:()=>i,toc:()=>l,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/web-set-root-folder","title":"WEB SET ROOT FOLDER","description":"WEB SET ROOT FOLDER ( pastaRaiz )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-set-root-folder.md","sourceDirName":"commands-legacy","slug":"/commands/web-set-root-folder","permalink":"/docs/pt/20-R8/commands/web-set-root-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-set-root-folder.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-set-root-folder","title":"WEB SET ROOT FOLDER","slug":"/commands/web-set-root-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SET OPTION","permalink":"/docs/pt/20-R8/commands/web-set-option"},"next":{"title":"WEB START SERVER","permalink":"/docs/pt/20-R8/commands/web-start-server"}}'),o=s("785893"),n=s("250065");let t={id:"web-set-root-folder",title:"WEB SET ROOT FOLDER",slug:"/commands/web-set-root-folder",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"WEB SET ROOT FOLDER"})," ( ",(0,o.jsx)(r.em,{children:"pastaRaiz"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"pastaRaiz"}),(0,o.jsx)(r.td,{children:"Text"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Rota de acesso da pasta raiz do webserver"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(r.p,{children:"O comando WEB SET ROOT FOLDER \xe9 utilizado para modificar a pasta raiz por padr\xe3o na qual 4D procura os arquivos HTML pedidos ao servidor web."}),"\n",(0,o.jsxs)(r.p,{children:["Este comando n\xe3o leva em considera\xe7\xe3o a pasta raiz HTML por padr\xe3o, definida na Propriedades do banco. Para maior informa\xe7\xe3o sobre esta pasta, consulte a se\xe7\xe3o ",(0,o.jsx)(r.em,{children:"Conex\xf5es de Seguran\xe7a"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"A localiza\xe7\xe3o da pasta raiz pode ser expressa em sintaxe HTML (tipo URL), ou em sintaxe sistema (rota absoluta):"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:'Sintaxe HTML: os nomes de pastas s\xe3o separados por uma barra obl\xedqua ("/"), sem importar a plataforma utilizada.'}),"\n",(0,o.jsxs)(r.li,{children:["Sintaxe sistema: rota de acesso absoluta (\u201Cnome longo\u201D) respeitando a sintaxe da plataforma atual, por exemplo:",(0,o.jsx)(r.br,{}),"\n- (macOS) Disco:Aplica\xe7\xf5es:miserv:pasta",(0,o.jsx)(r.br,{}),"\n- (Windows) C:\\Aplica\xe7\xf5es\\miserv\\pasta"]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Notas:"}),"\n",(0,o.jsx)(r.p,{children:"Ser\xe1 necess\xe1rio reiniciar o servidor web para que a nova pasta de raiz seja levada em considera\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["Pode saber a qualquer momento a localiza\xe7\xe3o da pasta raiz utilizando o comando ",(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/get-4d-folder",children:"Get 4D folder"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Se especificar uma rota de acesso inv\xe1lida, ser\xe1 gerado um erro do administrador arquivos do sistema operativo. Pode interceptar o erro com um m\xe9todo ",(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/on-err-call",children:"ON ERR CALL"}),". Se o m\xe9todo mostrar uma caixa de di\xe1logo de alerta ou uma mensagem, aparecer\xe1 do lado do navegador."]}),"\n",(0,o.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/get-4d-folder",children:"Get 4D folder"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/on-err-call",children:"ON ERR CALL"})]}),"\n",(0,o.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"634"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2713"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(r.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return d},a:function(){return t}});var a=s(667294);let o={},n=a.createContext(o);function t(e){let r=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(n.Provider,{value:r},e.children)}}}]);