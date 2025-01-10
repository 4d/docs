"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75762"],{934057:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/open-url","title":"OPEN URL","description":"OPEN URL ( rota {; appName}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-url.md","sourceDirName":"commands-legacy","slug":"/commands/open-url","permalink":"/docs/pt/commands/open-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-url.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-url","title":"OPEN URL","slug":"/commands/open-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Monitored activity","permalink":"/docs/pt/commands/monitored-activity"},"next":{"title":"PROCESS 4D TAGS","permalink":"/docs/pt/commands/process-4d-tags"}}'),s=n("785893"),a=n("250065");let t={id:"open-url",title:"OPEN URL",slug:"/commands/open-url",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"OPEN URL"})," ( ",(0,s.jsx)(o.em,{children:"rota"})," {; ",(0,s.jsx)(o.em,{children:"appName"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"rota"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Path of document or URL to open"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"appName"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Name of application to use"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Se especificado = URL n\xe3o \xe9 traduzido, se omitido = URL \xe9 traduzido"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"OPEN URL"})," lan\xe7a seu navegador web por padr\xe3o e o abre com a URL passada no par\xe2metro ",(0,s.jsx)(o.em,{children:"url"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["O par\xe2metro ",(0,s.jsx)(o.em,{children:"rota"})," pode conter bem um URL estandarte ou uma rota de acesso de arquivo. O comando aceita dois pontos (':') Sob Mac OS, barras obl\xedquas ('\\') Sob Windows ou um URL Posix que comece por arquivo://. Se o par\xe2metro ",(0,s.jsx)(o.em,{children:"nomAp"})," se omite, 4D primeiro tenta interpretar o par\xe2metro ",(0,s.jsx)(o.em,{children:"rota"})," como um nome de rota de arquivo. Se este \xe9 o caso, 4D solicitar\xe1 ao sistema abrir o arquivo utilizando a aplica\xe7\xe3o mais apropriada (por exemplo, um navegador para os arquivos .html, Word para os arquivos .doc, etc.). O par\xe2metro ",(0,s.jsx)(o.em,{children:"*"})," se ignora neste caso."]}),"\n",(0,s.jsxs)(o.p,{children:["Se o par\xe2metro ",(0,s.jsx)(o.em,{children:"rota"})," cont\xe9m um URL estandarte (protocolos mailto:, news:, http:, etc.), 4D lan\xe7a o navegador web por padr\xe3o e acessa ao URL. Se n\xe3o h\xe1 navegador nos volumes conectados ao ordenador, o comando n\xe3o t\xeam efeito."]}),"\n",(0,s.jsxs)(o.p,{children:["Quando se passa o par\xe2metro ",(0,s.jsx)(o.em,{children:"nomAp"}),", o comando interroga ao sistema. Caso se instale uma aplica\xe7\xe3o com este nome, que se inicia e o comando lhe pede que abra o endere\xe7o URL ou o documento especificado.",(0,s.jsx)(o.br,{}),'\nEm Windows, o mecanismo para o reconhecimento do nome da aplica\xe7\xe3o \xe9 a mesma que o utilizado pelo comando "Executar" do menu Inicio. Por exemplo, poderia passar:']}),"\n",(0,s.jsxs)(o.p,{children:['"iexplore" para iniciar Internet Explorer.',(0,s.jsx)(o.br,{}),'\n"chrome" para iniciar Chrome (se est\xe1 instalado)',(0,s.jsx)(o.br,{}),'\n"winword" para iniciar MS Word (se est\xe1 instalado)']}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota"}),": encontrar\xe1 a lista de aplica\xe7\xf5es instaladas no ",(0,s.jsx)(o.em,{children:"registry"})," na seguinte chave: HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths",(0,s.jsx)(o.br,{}),"\nSob OS X, o mecanismo utiliza o Finder que indexa automaticamente todas as aplica\xe7\xf5es instaladas. Pode reconhecer toda aplica\xe7\xe3o .app por seu nome de package (com ou sem o sufixo .app). Por exemplo, pode passar:"]}),"\n",(0,s.jsxs)(o.p,{children:['"safari"',(0,s.jsx)(o.br,{}),'\n"FireFox"',(0,s.jsx)(o.br,{}),'\n"TextEdit"']}),"\n",(0,s.jsxs)(o.p,{children:["Se a aplica\xe7\xe3o ",(0,s.jsx)(o.em,{children:"nomAp"})," n\xe3o se encontra, nenhum erro se devolve; o comando se executa como se o par\xe2metro n\xe3o tivesse sido especificado."]}),"\n",(0,s.jsxs)(o.p,{children:["4D codifica automaticamente os caracteres especiais da URL. Se passa o caractere ",(0,s.jsx)(o.em,{children:"*"}),', 4D n\xe3o traduzir\xe1 os caracteres especiais do URL. Esta op\xe7\xe3o lhe permite acessar e enviar as URLS de tipo "',(0,s.jsx)(o.em,{children:(0,s.jsx)(o.a,{href:"http://www.server.net/page.htm?q=something",children:"http://www.server.net/page.htm?q=something"})}),'".']}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota"}),": este comando n\xe3o funciona quando for chamado desde um processo web."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(o.p,{children:"Os seguintes exemplos mostram os diferentes tipos de cadeias que s\xe3o aceitas como URLs pelo comando:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0OPEN URL("http://www.4d.com")\n\xa0OPEN URL("file://C:/Users/Laurent/Documents/pending.htm")\n\xa0OPEN URL("C:\\\\Users\\\\Laurent\\\\Documents\\\\pending.htm")\n\xa0OPEN URL("mailto:jean_martin@4d.fr")\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"Este exemplo pode ser utilizado para lan\xe7ar uma aplica\xe7\xe3o mais conveniente:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0$file:=Select document("";"";0)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0OPEN URL(Document)\n\xa0End if\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(o.p,{children:"Pode abrir um arquivo texto com diferentes aplica\xe7\xf5es:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0OPEN URL("C:\\\\temp\\\\cookies.txt")\xa0//abre o arquivo com o Bloc de notas\n\xa0OPEN URL("C:\\\\temp\\\\cookies.txt";"winword")\xa0//abre o arquivo com MS Word (se est\xe1 instalado)\n\xa0OPEN URL("C:\\\\temp\\\\cookies.txt";"excel")\xa0//abre o arquivo com MS Excel (se est\xe1 instalado)\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"673"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return t}});var r=n(667294);let s={},a=r.createContext(s);function t(e){let o=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);