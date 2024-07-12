/*! For license information please see ec4f88a1.c748c10c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63463],{205967:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>t,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=s(474848),n=s(28453);const r={id:"templates",title:"P\xe1ginas de modelo"},d=void 0,i={id:"WebServer/templates",title:"P\xe1ginas de modelo",description:"O servidor Web 4D permite que voc\xea use p\xe1ginas de modelo HTML contendo tags, ou seja, uma mistura de c\xf3digo HTML est\xe1tico e refer\xeancias 4D adicionadas por meio de tags de transforma\xe7\xe3o como 4DTEXT, 4DIF, ou 4DINCLUDE. Essas tags geralmente s\xe3o inseridas como coment\xe1rios do tipo HTML (``) no c\xf3digo-fonte HTML.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/WebServer/templates.md",sourceDirName:"WebServer",slug:"/WebServer/templates",permalink:"/docs/pt/19/WebServer/templates",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ftemplates.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"templates",title:"P\xe1ginas de modelo"},sidebar:"docs",previous:{title:"Come\xe7ando",permalink:"/docs/pt/19/WebServer/gettingStarted"},next:{title:"Processamento de pedidos HTTP",permalink:"/docs/pt/19/WebServer/httpRequests"}},t={},c=[{value:"Etiquetas para modelos",id:"etiquetas-para-modelos",level:2},{value:"An\xe1lise de etiquetas",id:"an\xe1lise-de-etiquetas",level:2},{value:"Aceder aos m\xe9todos 4D atrav\xe9s da Web",id:"aceder-aos-m\xe9todos-4d-atrav\xe9s-da-web",level:2},{value:"Preven\xe7\xe3o da inser\xe7\xe3o de c\xf3digo malicioso",id:"preven\xe7\xe3o-da-inser\xe7\xe3o-de-c\xf3digo-malicioso",level:2}];function l(e){const o={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:["O servidor Web 4D permite que voc\xea use p\xe1ginas de modelo HTML contendo tags, ou seja, uma mistura de c\xf3digo HTML est\xe1tico e refer\xeancias 4D adicionadas por meio de ",(0,a.jsx)(o.a,{href:"/docs/pt/19/Tags/tags",children:"tags de transforma\xe7\xe3o"})," como 4DTEXT, 4DIF, ou 4DINCLUDE. Essas tags geralmente s\xe3o inseridas como coment\xe1rios do tipo HTML (",(0,a.jsx)(o.code,{children:"\x3c!--#4DTagName TagValue--\x3e"}),") no c\xf3digo-fonte HTML."]}),"\n",(0,a.jsx)(o.p,{children:"Quando estas p\xe1ginas s\xe3o enviadas pelo servidor HTTP, elas s\xe3o analisadas e as tags que cont\xeam s\xe3o executadas e substitu\xeddas pelos dados resultantes. As p\xe1ginas recebidas pelos navegadores s\xe3o, portanto, uma combina\xe7\xe3o de elementos est\xe1ticos e valores provenientes do processamento 4D."}),"\n",(0,a.jsx)(o.p,{children:"Por exemplo, se escrever numa p\xe1gina HTML:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-html",children:"Bem-vindo a \x3c!--#4DTEXT vtSiteName--\x3e!</P>\n"})}),"\n",(0,a.jsxs)(o.p,{children:["O valor da vari\xe1vel 4D ",(0,a.jsx)(o.em,{children:"vtSiteName"})," ser\xe1 inserido na p\xe1gina HTML."]}),"\n",(0,a.jsx)(o.h2,{id:"etiquetas-para-modelos",children:"Etiquetas para modelos"}),"\n",(0,a.jsx)(o.p,{children:"Est\xe3o dispon\xedveis as seguintes etiquetas 4D:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"4DTEXT, para inserir vari\xe1veis e express\xf5es 4D como texto,"}),"\n",(0,a.jsx)(o.li,{children:"4DHTML, para inserir c\xf3digo HTML,"}),"\n",(0,a.jsx)(o.li,{children:"4DEVAL, para avaliar qualquer express\xe3o 4D,"}),"\n",(0,a.jsx)(o.li,{children:"4DSCRIPT, para executar um m\xe9todo 4D,"}),"\n",(0,a.jsx)(o.li,{children:"4DINCLUDE, para incluir uma p\xe1gina dentro de outra,"}),"\n",(0,a.jsx)(o.li,{children:"4DBASE, para modificar a pasta predefinida utilizada pela etiqueta 4DINCLUDE,"}),"\n",(0,a.jsx)(o.li,{children:"4DCODE, para inserir o c\xf3digo 4D,"}),"\n",(0,a.jsx)(o.li,{children:"4DIF, 4DELSE, 4DELSEIF e 4DENDIF, para inserir condi\xe7\xf5es no c\xf3digo HTML,"}),"\n",(0,a.jsx)(o.li,{children:"4DLOOP e 4DENDLOOP, para criar loops no c\xf3digo HTML,"}),"\n",(0,a.jsx)(o.li,{children:"4DEACH e 4DENDEACH, para fazer loop em cole\xe7\xf5es, sele\xe7\xf5es de entidades ou propriedades de objetos."}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Essas tags s\xe3o descritas na p\xe1gina ",(0,a.jsx)(o.a,{href:"/docs/pt/19/Tags/tags",children:"Transformation Tags"})," ."]}),"\n",(0,a.jsx)(o.p,{children:"\xc9 poss\xedvel combinar etiquetas. Por exemplo, \xe9 permitido o seguinte c\xf3digo HTML:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-html",children:"<HTML>\n...\n<BODY>\n\x3c!--#4DSCRIPT/PRE_PROCESS--\x3e   (Chamada de m\xe9todo)\n\x3c!--#4DIF (myvar=1)--\x3e   (Condi\xe7\xe3o if)\n   \x3c!--#4DINCLUDE banner1.html--\x3e   (Inser\xe7\xe3o de subp\xe1gina)\n\x3c!--#4DENDIF--\x3e   (End if)\n\x3c!--#4DIF (myvar=2)--\x3e\n\n   \x3c!--#4DINCLUDE banner2.html--\x3e\n\x3c!--#4DENDIF--\x3e\n\n\x3c!--#4DLOOP [TABLE]--\x3e   (loop na sele\xe7\xe3o atual)\n\x3c!--#4DIF ([TABLE]ValNum>10)--\x3e   (If [TABLE]ValNum>10)\n   \x3c!--#4DINCLUDE subpage.html--\x3e   (inser\xe7\xe3o de subp\xe1gina)\n\x3c!--#4DELSE--\x3e   (Else)\n   <B>Valor: \x3c!--#4DTEXT [TABLE]ValNum--\x3e</B><br/>\n      (Exibi\xe7\xe3o do campo)\n\x3c!--#4DENDIF--\x3e\n\x3c!--#4DENDLOOP--\x3e   (Fim para)\n</BODY>\n</HTML>\n"})}),"\n",(0,a.jsx)(o.h2,{id:"an\xe1lise-de-etiquetas",children:"An\xe1lise de etiquetas"}),"\n",(0,a.jsx)(o.p,{children:'Por motivos de otimiza\xe7\xe3o, a an\xe1lise do c\xf3digo-fonte HTML n\xe3o \xe9 realizada pelo servidor da Web 4D quando as p\xe1ginas HTML s\xe3o chamadas usando URLs simples que s\xe3o sufixadas com ".HTML" ou ".HTM".'}),"\n",(0,a.jsxs)(o.p,{children:["Analisar o conte\xfado das p\xe1ginas de modelo enviadas pelo servidor da web 4D ocorre quando o ",(0,a.jsx)(o.code,{children:"ARQUIVO ENVIAR"})," (. tm, .html, .shtm, . html), ",(0,a.jsx)(o.code,{children:"WEB SEND BLOB"})," (text/html tipo BLOB) ou ",(0,a.jsx)(o.code,{children:"WEB SEND TEXT"}),' s\xe3o chamados, bem como ao enviar p\xe1ginas chamadas usando URLs. Nesse \xfaltimo caso, por motivos de otimiza\xe7\xe3o, as p\xe1ginas sufixadas com ".htm" e ".html" N\xc3O s\xe3o analisadas. Para "for\xe7ar" a an\xe1lise de p\xe1ginas HTML nesse caso, voc\xea deve adicionar o sufixo ".shtm" ou ".shtml" (por exemplo, ',(0,a.jsx)(o.code,{children:"http://www.server.com/dir/page.shtm"}),"). Um exemplo do uso desse tipo de p\xe1gina \xe9 dado na descri\xe7\xe3o do comando ",(0,a.jsx)(o.code,{children:"WEB GET STATISTICS"})," . As p\xe1ginas XML (.xml, .xsl) tamb\xe9m s\xe3o suportadas e sempre analisadas por 4D."]}),"\n",(0,a.jsxs)(o.p,{children:["Voc\xea tamb\xe9m pode realizar a an\xe1lise fora do contexto da Web ao usar o comando ",(0,a.jsx)(o.code,{children:"PROCESS 4D TAGS"})," ."]}),"\n",(0,a.jsxs)(o.p,{children:["Internamente, o analisador funciona com strings UTF-16, mas os dados a serem analisados podem ter sido codificados de maneira diferente. Quando as tags contiverem texto (por exemplo, ",(0,a.jsx)(o.code,{children:"4DHTML"}),"), a 4D converte os dados quando necess\xe1rio, dependendo da origem e das informa\xe7\xf5es dispon\xedveis (charset). Abaixo est\xe3o os casos em que 4D analisa as tags contidas nas p\xe1ginas HTML, bem como quaisquer convers\xf5es realizadas:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"A\xe7\xe3o / Comando"}),(0,a.jsx)(o.th,{children:"An\xe1lise de conte\xfado das p\xe1ginas enviadas"}),(0,a.jsx)(o.th,{children:"Suporte da sintaxe $(*)"}),(0,a.jsx)(o.th,{children:"Conjunto de caracteres utilizado para a an\xe1lise de etiquetas"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"P\xe1ginas chamadas atrav\xe9s de URLs"}),(0,a.jsx)(o.td,{children:'X, exceto para p\xe1ginas com extens\xf5es ".htm" ou ".html'}),(0,a.jsx)(o.td,{children:'X, exceto para p\xe1ginas com extens\xf5es ".htm" ou ".html'}),(0,a.jsx)(o.td,{children:'Uso de charset passado como par\xe2metro do cabe\xe7alho "Content-Type" da p\xe1gina. Se n\xe3o houver nenhuma, procure uma etiqueta META-HTTP EQUIV com um conjunto de caracteres. Caso contr\xe1rio, utiliza\xe7\xe3o do conjunto de caracteres predefinido para o servidor HTTP'})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"WEB SEND FILE"})}),(0,a.jsx)(o.td,{children:"X"}),(0,a.jsx)(o.td,{children:"-"}),(0,a.jsx)(o.td,{children:'Uso de charset passado como par\xe2metro do cabe\xe7alho "Content-Type" da p\xe1gina. Se n\xe3o houver nenhuma, procure uma etiqueta META-HTTP EQUIV com um conjunto de caracteres. Caso contr\xe1rio, utiliza\xe7\xe3o do conjunto de caracteres predefinido para o servidor HTTP'})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"WEB SEND TEXT"})}),(0,a.jsx)(o.td,{children:"X"}),(0,a.jsx)(o.td,{children:"-"}),(0,a.jsx)(o.td,{children:"N\xe3o \xe9 necess\xe1ria qualquer convers\xe3o"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"WEB SEND BLOB"})}),(0,a.jsx)(o.td,{children:'X, se o BLOB for do tipo "text/html'}),(0,a.jsx)(o.td,{children:"-"}),(0,a.jsx)(o.td,{children:'Utiliza\xe7\xe3o do conjunto de caracteres definido no cabe\xe7alho "Content-Type" da resposta. Caso contr\xe1rio, utiliza\xe7\xe3o do conjunto de caracteres predefinido para o servidor HTTP'})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsxs)(o.td,{children:["Inclus\xe3o pela etiqueta ",(0,a.jsx)(o.code,{children:"\x3c!--#4DINCLUDE--\x3e"})]}),(0,a.jsx)(o.td,{children:"X"}),(0,a.jsx)(o.td,{children:"X"}),(0,a.jsx)(o.td,{children:'Uso de charset passado como par\xe2metro do cabe\xe7alho "Content-Type" da p\xe1gina. Se n\xe3o houver nenhuma, procure uma etiqueta META-HTTP EQUIV com um conjunto de caracteres. Caso contr\xe1rio, utiliza\xe7\xe3o do conjunto de caracteres predefinido para o servidor HTTP'})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"PROCESS 4D TAGS"})}),(0,a.jsx)(o.td,{children:"X"}),(0,a.jsx)(o.td,{children:"X"}),(0,a.jsx)(o.td,{children:"Dados de texto: sem convers\xe3o. Dados BLOB: convers\xe3o autom\xe1tica do conjunto de caracteres Mac-Roman para compatibilidade"})]})]})]}),"\n",(0,a.jsx)(o.p,{children:"(*) A sintaxe alternativa baseada em $ est\xe1 dispon\xedvel para as tags 4DHTML, 4DTEXT e 4DEVAL."}),"\n",(0,a.jsx)(o.h2,{id:"aceder-aos-m\xe9todos-4d-atrav\xe9s-da-web",children:"Aceder aos m\xe9todos 4D atrav\xe9s da Web"}),"\n",(0,a.jsxs)(o.p,{children:["Executando um m\xe9todo 4D com ",(0,a.jsx)(o.code,{children:"4DEACH"}),", ",(0,a.jsx)(o.code,{children:"4DELSEIF"}),", ",(0,a.jsx)(o.code,{children:"4DEVAL"}),", ",(0,a.jsx)(o.code,{children:"4DHTML"}),", ",(0,a.jsx)(o.code,{children:"4DIF"}),", ",(0,a.jsx)(o.code,{children:"4DLOOP"}),", ",(0,a.jsx)(o.code,{children:"4DSCRIPT"}),", ou ",(0,a.jsx)(o.code,{children:"4DTEXT"})," de uma solicita\xe7\xe3o da web est\xe1 sujeito ao ",(0,a.jsx)(o.a,{href:"/docs/pt/19/WebServer/allowProject",children:"Dispon\xedvel atrav\xe9s de tags 4D e URLs (4DACTION. .)"})," valor do atributo definido nas propriedades do m\xe9todo. Se o atributo n\xe3o estiver checado para o m\xe9todo, ele n\xe3o pode ser chamado de uma requisi\xe7\xe3o web."]}),"\n",(0,a.jsx)(o.h2,{id:"preven\xe7\xe3o-da-inser\xe7\xe3o-de-c\xf3digo-malicioso",children:"Preven\xe7\xe3o da inser\xe7\xe3o de c\xf3digo malicioso"}),"\n",(0,a.jsx)(o.p,{children:"As tags 4D aceitam diferentes tipos de dados como par\xe2metros: texto, vari\xe1veis, m\xe9todos, nomes de comandos, etc. Quando esses dados forem fornecidos pelo seu pr\xf3prio c\xf3digo, n\xe3o h\xe1 risco de inser\xe7\xe3o de c\xf3digo malicioso pois voc\xea controla a entrada. No entanto, o c\xf3digo do seu banco de dados geralmente trabalha com dados que foram, em algum momento, introduzidos por meio de uma fonte externa (entrada do usu\xe1rio, importa\xe7\xe3o etc.)."}),"\n",(0,a.jsxs)(o.p,{children:["Neste caso, aconselh\xe1vel n\xe3o usar ",(0,a.jsx)(o.strong,{children:"tags"})," como ",(0,a.jsx)(o.code,{children:"4DEVAL"})," ou ",(0,a.jsx)(o.code,{children:"4DSCRIPT"}),", que avaliam os par\xe2metros, directamente com este tipo de dados."]}),"\n",(0,a.jsxs)(o.p,{children:["Al\xe9m disso, de acordo com o princ\xedpio ",(0,a.jsx)(o.a,{href:"/docs/pt/19/Tags/tags#recursive-processing",children:"de recurs\xe3o"}),", o c\xf3digo malicioso pode incluir tags de transforma\xe7\xe3o. Nesse caso, \xe9 imperativo usar a tag ",(0,a.jsx)(o.code,{children:"4DTEXT"}),' . Imagine, por exemplo, um campo de formul\xe1rio da Web chamado "Nome", no qual os usu\xe1rios devem digitar seu nome. Esse nome \xe9 ent\xe3o exibido usando uma tag ',(0,a.jsx)(o.code,{children:"\x3c!--#4DHTML vName--\x3e"}),' na p\xe1gina. Se o texto do tipo "\x3c!--#4DEVAL QUIT 4D--\x3e" for inserido em vez do nome, a interpreta\xe7\xe3o dessa tag far\xe1 com que o aplicativo seja encerrado. Para evitar esse risco, voc\xea pode simplesmente usar a tag ',(0,a.jsx)(o.code,{children:"4DTEXT"}),' sistematicamente nesse caso. J\xe1 que essa tag escapa dos caracteres HTML especiais, qualquer c\xf3digo recursivo malicioso que possa ter sido inserido n\xe3o ser\xe1 reinterpretado. Para fazer refer\xeancia ao exemplo anterior, o campo "Name" conter\xe1, nesse caso, "',(0,a.jsx)(o.code,{children:"&lt;!--#4DEVAL QUIT 4D--&gt;"}),'", que n\xe3o ser\xe1 transformado.']})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},221020:(e,o,s)=>{var a=s(296540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,s){var a,r={},c=null,l=null;for(a in void 0!==s&&(c=""+s),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)d.call(o,a)&&!t.hasOwnProperty(a)&&(r[a]=o[a]);if(e&&e.defaultProps)for(a in o=e.defaultProps)void 0===r[a]&&(r[a]=o[a]);return{$$typeof:n,type:e,key:c,ref:l,props:r,_owner:i.current}}o.Fragment=r,o.jsx=c,o.jsxs=c},474848:(e,o,s)=>{e.exports=s(221020)},28453:(e,o,s)=>{s.d(o,{R:()=>d,x:()=>i});var a=s(296540);const n={},r=a.createContext(n);function d(e){const o=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(r.Provider,{value:o},e.children)}}}]);