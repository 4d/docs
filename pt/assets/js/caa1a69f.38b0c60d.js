"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79614"],{217475:function(e,a,o){o.r(a),o.d(a,{metadata:()=>s,contentTitle:()=>r,default:()=>l,assets:()=>i,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/process-4d-tags","title":"PROCESS 4D TAGS","description":"PROCESS 4D TAGS ( dadosEntrada ; dadosSaida {; param}{; param2 ; ... ; paramN} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/process-4d-tags.md","sourceDirName":"commands-legacy","slug":"/commands/process-4d-tags","permalink":"/docs/pt/commands/process-4d-tags","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprocess-4d-tags.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"process-4d-tags","title":"PROCESS 4D TAGS","slug":"/commands/process-4d-tags","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN URL","permalink":"/docs/pt/commands/open-url"},"next":{"title":"SET ENVIRONMENT VARIABLE","permalink":"/docs/pt/commands/set-environment-variable"}}'),t=o("785893"),n=o("250065");let d={id:"process-4d-tags",title:"PROCESS 4D TAGS",slug:"/commands/process-4d-tags",displayed_sidebar:"docs"},r=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){let a={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"PROCESS 4D TAGS"})," ( ",(0,t.jsx)(a.em,{children:"dadosEntrada"})," ; ",(0,t.jsx)(a.em,{children:"dadosSaida"})," {; ",(0,t.jsx)(a.em,{children:"param"}),"}{; ",(0,t.jsx)(a.em,{children:"param2"})," ; ... ; ",(0,t.jsx)(a.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Par\xe2metro"}),(0,t.jsx)(a.th,{children:"Tipo"}),(0,t.jsx)(a.th,{}),(0,t.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"dadosEntrada"}),(0,t.jsx)(a.td,{children:"Text"}),(0,t.jsx)(a.td,{children:"\u2192"}),(0,t.jsx)(a.td,{children:"Dados que cont\xe9m as etiquetas HTML a processar"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"dadosSaida"}),(0,t.jsx)(a.td,{children:"Text"}),(0,t.jsx)(a.td,{children:"\u2190"}),(0,t.jsx)(a.td,{children:"Dados processados"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"param"}),(0,t.jsx)(a.td,{children:"Expression"}),(0,t.jsx)(a.td,{children:"\u2192"}),(0,t.jsx)(a.td,{children:"Par\xe2metros passados ao template sendo executado"})]})]})]}),"\n",(0,t.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(a.p,{children:["O comando PROCESS 4D TAGS provoca o processamento das etiquetas de transforma\xe7\xe3o 4D contidas em ",(0,t.jsx)(a.em,{children:"dadosEntrada"})," (campo ou vari\xe1vel de tipo Texto ou BLOB) enquanto opcionalmente insere valores utilizando os valores via os par\xe2metros ",(0,t.jsx)(a.em,{children:"param"})," e retorna os dados resultantes em ",(0,t.jsx)(a.em,{children:"dadosSaida"}),". Para uma descri\xe7\xe3o completa das etiquetas, veja ",(0,t.jsx)(a.em,{children:"Etiquetas HTML 4D"})]}),"\n",(0,t.jsx)(a.p,{children:'Este comando permite executar um texto de tipo "template" que cont\xe9m as etiquetas e as refer\xeancias as express\xf5es ou vari\xe1veis 4D e produz um resultado dependendo do contexto de execu\xe7\xe3o e/ou dos valores passados em par\xe2metro.'}),"\n",(0,t.jsxs)(a.p,{children:["Por exemplo, pode utilizar este comando para gerar e guardar as p\xe1ginas HTML baseadas em ",(0,t.jsx)(a.strong,{children:"p\xe1ginas"})," ",(0,t.jsx)(a.strong,{children:"semi-din\xe2micas"})," que cont\xe9m as etiquetas de transforma\xe7\xe3o 4D (sem que seja necess\xe1rio que o servidor Web de 4D se inicie). Pode utilizar para enviar mensagens de e-mail em formato HTML que contenham processamentos e/ou refer\xeancias aos dados contidos na base atrav\xe9s de 4D Internet Commands. \xc9 poss\xedvel processar qualquer tipo de dados baseados \u200B\u200Bem texto, tais como XML, SVG ou texto multi-estilo."]}),"\n",(0,t.jsxs)(a.p,{children:["Passe os dados que cont\xe9m as etiquetas a processar no par\xe2metro ",(0,t.jsx)(a.em,{children:"dadosEntrada"}),". Este par\xe2metro pode ser um campo ou uma vari\xe1vel de tipo Texto."]}),"\n",(0,t.jsx)(a.p,{children:"Todas as etiquetas de transforma\xe7\xe3o de 4D s\xe3o compat\xedveis (4DTEXT, 4DHTML, 4DSCRIPT, 4DLOOP, 4DEVAL, etc.),"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Nota de compatibilidade"}),": A partir da vers\xe3o 12 de 4D, quando utilizar par\xe2metros de tipo BLOB, o comando considera automaticamente que o conjunto de caracteres utilizado por os BLOBs \xe9 MacRomam. Para maior efici\xeancia, se recomenda utilizar os par\xe2metros de tipo Texto para os quais os processos se realizam em modo Unicode."]}),"\n",(0,t.jsxs)(a.p,{children:["Todas as etiquetas de transforma\xe7\xe3o de 4D s\xe3o compat\xedveis (",(0,t.jsx)(a.em,{children:"4DTEXT, 4DHTML, 4DSCRIPT, 4DLOOP"}),", ",(0,t.jsx)(a.em,{children:"4DEVAL,"})," etc.),,"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Nota"}),": Quando utilizar a etiqueta ",(0,t.jsx)(a.em,{children:"4DINCLUDE"})," fora do marco do servidor web (processo web):"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Com 4D em modo local ou 4D Server, a pasta por padr\xe3o \xe9 a pasta que cont\xe9m o arquivo de estrutura do banco,"}),"\n",(0,t.jsx)(a.li,{children:"Com 4D em modo remoto, a pasta por padr\xe3o \xe9 a pasta que cont\xe9m a aplica\xe7\xe3o 4D."}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["O comando ",(0,t.jsx)(a.strong,{children:"PROCESS 4D TAGS"})," suporta um n\xfamero indefinido de par\xe2metros ",(0,t.jsx)(a.em,{children:"param"})," que podem ser inseridos no c\xf3digo que se executa. Igualmente com os m\xe9todos projeto, tais par\xe2metros podem conter valores escalares de tipos variados (texto, data, hora, inteiro longo, real, etc) al\xe9m de objetos ou cole\xe7\xf5es. Tamb\xe9m pode utilizar os arrays, por meio de ponteiros de arrays. Dentro do c\xf3digo processado pelas etiquetas 4D, estes par\xe2metros s\xe3o acess\xedveis por meio de argumentos padr\xe3o ($1, $2, etc.), igual que nos m\xe9todos 4D (ver exemplo)."]}),"\n",(0,t.jsxs)(a.p,{children:["Um conjunto dedicado de vari\xe1veis locais se define no contexto de execu\xe7\xe3o do comando ",(0,t.jsx)(a.strong,{children:"PROCESS 4D TAGS"}),". Estas vari\xe1veis podem ser escritas ou lidas durante o processamento."]}),"\n",(0,t.jsxs)(a.p,{children:["Depois da execu\xe7\xe3o do comando, o par\xe2metro ",(0,t.jsx)(a.em,{children:"dadosSaida"})," recebe os dados do par\xe2metro ",(0,t.jsx)(a.em,{children:"dadosEntrada"}),", junto com o resultado do processo das etiquetas HTML 4D que cont\xe9m, quando aplic\xe1vel. Se ",(0,t.jsx)(a.em,{children:"dadosEntrada"})," n\xe3o conter etiquetas 4D ou produzir uma etiqueta vazia, o conte\xfado de ",(0,t.jsx)(a.em,{children:"dadosSaida"})," \xe9 id\xeantico ao de ",(0,t.jsx)(a.em,{children:"dadosEntrada"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["O par\xe2metro ",(0,t.jsx)(a.em,{children:"dadosSaida"})," pode ser um campo ou uma vari\xe1vel de tipo Texto."]}),"\n",(0,t.jsxs)(a.p,{children:["Nota: este comando nunca chama a ",(0,t.jsx)(a.a,{href:"/docs/pt/commands/on-web-authentication-database-method",children:"On Web Authentication database method"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Nota"}),": este comando j\xe1 n\xe3o chama ao ",(0,t.jsx)(a.a,{href:"/docs/pt/commands/on-web-authentication-database-method",children:"On Web Authentication database method"}),"."]}),"\n",(0,t.jsx)(a.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(a.p,{children:'Este exemplo carrega um documento de tipo "planilha", processa as etiquetas que contenha e depois o armazena:'}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-4d",children:'\xa0var $inputText_t : Text\n\xa0var $outputText_t : Text\n\xa0\n\xa0$inputText_t:=Document to text(File("/PACKAGE/mytemplate.txt").platformPath)\n\xa0PROCESS 4D TAGS($inputText_t;$outputText_t)\n\xa0TEXT TO DOCUMENT(File("/PACKAGE/myfile.txt").platformPath;$outputText_t)\n'})}),"\n",(0,t.jsx)(a.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(a.p,{children:"Este exemplo gera um texto utilizando os dados dos arrays:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-4d",children:'\xa0ARRAY TEXT($array;2)\n\xa0$array{1}:="hello"\n\xa0$array{2}:="world"\n\xa0$input:=""\n\xa0$input:=$input+""\n\xa0$input:=$input+" "\n\xa0$input:=$input+""\n\xa0PROCESS 4D TAGS($input;$output;"elements = ";->$array)\n\xa0\xa0// $output = "elements = hello world"\n'})}),"\n",(0,t.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.em,{children:"Etiquetas HTML 4D"})})]})}function l(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return r},a:function(){return d}});var s=o(667294);let t={},n=s.createContext(t);function d(e){let a=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);