"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21810"],{475195:function(e,s,a){a.r(s),a.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>r});var n=JSON.parse('{"id":"WebServer/templates","title":"P\xe1ginas de modelo","description":"El servidor web de 4D le permite utilizar las p\xe1ginas de plantillas HTML que contengan etiquetas, es decir, una mezcla de c\xf3digo HTML est\xe1tico y de referencias 4D a\xf1adidas mediante etiquetas de transformaci\xf3n como 4DTEXT, Estas etiquetas suelen insertarse como comentarios de tipo HTML (``) en el c\xf3digo fuente HTML.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WebServer/templates.md","sourceDirName":"WebServer","slug":"/WebServer/templates","permalink":"/docs/pt/WebServer/templates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Ftemplates.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"templates","title":"P\xe1ginas de modelo"},"sidebar":"docs","previous":{"title":"Desenvolvimento Web","permalink":"/docs/pt/WebServer/gettingStarted"},"next":{"title":"Processamento de pedidos HTTP","permalink":"/docs/pt/WebServer/httpRequests"}}'),o=a("785893"),i=a("250065");let t={id:"templates",title:"P\xe1ginas de modelo"},r=void 0,d={},c=[{value:"Etiquetas para modelos",id:"etiquetas-para-modelos",level:2},{value:"An\xe1lise de etiquetas",id:"an\xe1lise-de-etiquetas",level:2},{value:"Aceder aos m\xe9todos 4D atrav\xe9s da Web",id:"aceder-aos-m\xe9todos-4d-atrav\xe9s-da-web",level:2},{value:"Preven\xe7\xe3o da inser\xe7\xe3o de c\xf3digo malicioso",id:"preven\xe7\xe3o-da-inser\xe7\xe3o-de-c\xf3digo-malicioso",level:2}];function l(e){let s={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["El servidor web de 4D le permite utilizar las p\xe1ginas de plantillas HTML que contengan etiquetas, es decir, una mezcla de c\xf3digo HTML est\xe1tico y de referencias 4D a\xf1adidas mediante ",(0,o.jsx)(s.a,{href:"/docs/pt/Tags/transformation-tags",children:"etiquetas de transformaci\xf3n"})," como 4DTEXT, Estas etiquetas suelen insertarse como comentarios de tipo HTML (",(0,o.jsx)(s.code,{children:"\x3c!--#4DTagName TagValue--\x3e"}),") en el c\xf3digo fuente HTML."]}),"\n",(0,o.jsx)(s.p,{children:"Quando estas p\xe1ginas s\xe3o enviadas pelo servidor HTTP, elas s\xe3o analisadas e as tags que cont\xeam s\xe3o executadas e substitu\xeddas pelos dados resultantes. As p\xe1ginas recebidas pelos navegadores s\xe3o, portanto, uma combina\xe7\xe3o de elementos est\xe1ticos e valores provenientes do processamento 4D."}),"\n",(0,o.jsx)(s.p,{children:"Por exemplo, se escrever numa p\xe1gina HTML:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-html",children:"<P>Bem-vindo a \x3c!--#4DTEXT vtSiteName--\x3e!</P>\n"})}),"\n",(0,o.jsxs)(s.p,{children:["El valor de la variable 4D ",(0,o.jsx)(s.em,{children:"vtSiteName"})," se insertar\xe1 en la p\xe1gina HTML."]}),"\n",(0,o.jsx)(s.h2,{id:"etiquetas-para-modelos",children:"Etiquetas para modelos"}),"\n",(0,o.jsx)(s.p,{children:"Est\xe3o dispon\xedveis as seguintes etiquetas 4D:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"4DTEXT, para inserir vari\xe1veis e express\xf5es 4D como texto,"}),"\n",(0,o.jsx)(s.li,{children:"4DHTML, para inserir c\xf3digo HTML,"}),"\n",(0,o.jsx)(s.li,{children:"4DEVAL, para avaliar qualquer express\xe3o 4D,"}),"\n",(0,o.jsx)(s.li,{children:"4DSCRIPT, para executar um m\xe9todo 4D,"}),"\n",(0,o.jsx)(s.li,{children:"4DINCLUDE, para incluir uma p\xe1gina dentro de outra,"}),"\n",(0,o.jsx)(s.li,{children:"4DBASE, para modificar a pasta predefinida utilizada pela etiqueta 4DINCLUDE,"}),"\n",(0,o.jsx)(s.li,{children:"4DCODE, para inserir o c\xf3digo 4D,"}),"\n",(0,o.jsx)(s.li,{children:"4DIF, 4DELSE, 4DELSEIF e 4DENDIF, para inserir condi\xe7\xf5es no c\xf3digo HTML,"}),"\n",(0,o.jsx)(s.li,{children:"4DLOOP e 4DENDLOOP, para criar loops no c\xf3digo HTML,"}),"\n",(0,o.jsx)(s.li,{children:"4DEACH e 4DENDEACH, para fazer loop em cole\xe7\xf5es, sele\xe7\xf5es de entidades ou propriedades de objetos."}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Estas etiquetas se describen en la p\xe1gina ",(0,o.jsx)(s.a,{href:"/docs/pt/Tags/transformation-tags",children:"Etiquetas de transformaci\xf3n"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"\xc9 poss\xedvel combinar etiquetas. Por exemplo, \xe9 permitido o seguinte c\xf3digo HTML:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-html",children:"<HTML>\n...\n<BODY>\n\x3c!--#4DSCRIPT/PRE_PROCESS--\x3e   (Method call)\n\x3c!--#4DIF (myvar=1)--\x3e   (If condition)\n   \x3c!--#4DINCLUDE banner1.html--\x3e   (Subpage insertion)\n\x3c!--#4DENDIF--\x3e   (End if)\n\x3c!--#4DIF (myvar=2)--\x3e\n\n   \x3c!--#4DINCLUDE banner2.html--\x3e\n\x3c!--#4DENDIF--\x3e\n \n\x3c!--#4DLOOP [TABLE]--\x3e   (loop on the current selection)\n\x3c!--#4DIF ([TABLE]ValNum>10)--\x3e   (If [TABLE]ValNum>10)\n   \x3c!--#4DINCLUDE subpage.html--\x3e   (subpage insertion)\n\x3c!--#4DELSE--\x3e   (Else)\n   <B>Value: \x3c!--#4DTEXT [TABLE]ValNum--\x3e</B><br/>\n      (Field display)\n\x3c!--#4DENDIF--\x3e\n\x3c!--#4DENDLOOP--\x3e   (End for)\n</BODY>\n</HTML>\n"})}),"\n",(0,o.jsx)(s.h2,{id:"an\xe1lise-de-etiquetas",children:"An\xe1lise de etiquetas"}),"\n",(0,o.jsx)(s.p,{children:'Por motivos de otimiza\xe7\xe3o, a an\xe1lise do c\xf3digo-fonte HTML n\xe3o \xe9 realizada pelo servidor da Web 4D quando as p\xe1ginas HTML s\xe3o chamadas usando URLs simples que s\xe3o sufixadas com ".HTML" ou ".HTM".'}),"\n",(0,o.jsxs)(s.p,{children:["El an\xe1lisis del contenido de las p\xe1ginas plantillas enviadas por el servidor web de 4D tiene lugar cuando se llaman los comandos ",(0,o.jsx)(s.code,{children:"WEB SEND FILE"})," (.htm, .html, .shtm, .shtml), ",(0,o.jsx)(s.code,{children:"WEB SEND BLOB"})," (text/html type BLOB) o ",(0,o.jsx)(s.code,{children:"WEB SEND TEXT"}),', as\xed como cuando se env\xed Nesse \xfaltimo caso, por motivos de otimiza\xe7\xe3o, as p\xe1ginas sufixadas com ".htm" e ".html" N\xc3O s\xe3o analisadas. Para "forzar" el an\xe1lisis de las p\xe1ginas HTML en este caso, debe a\xf1adir el sufijo ".shtm" o ".shtml" (por ejemplo, ',(0,o.jsx)(s.code,{children:"http://www.server.com/dir/page.shtm"}),"). Un ejemplo del uso de este tipo de p\xe1gina se da en la descripci\xf3n del comando ",(0,o.jsx)(s.code,{children:"WEB GET STATISTICS"}),". As p\xe1ginas XML (.xml, .xsl) tamb\xe9m s\xe3o suportadas e sempre analisadas por 4D."]}),"\n",(0,o.jsxs)(s.p,{children:["Tambi\xe9n puede llevar a cabo el an\xe1lisis sint\xe1ctico fuera del contexto web cuando utilice el comando ",(0,o.jsx)(s.code,{children:"PROCESS 4D TAGS"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Internamente, o analisador funciona com strings UTF-16, mas os dados a serem analisados podem ter sido codificados de maneira diferente. Cuando las etiquetas contienen texto (por ejemplo ",(0,o.jsx)(s.code,{children:"4DHTML"}),"), 4D convierte los datos cuando es necesario dependiendo de su origen y de la informaci\xf3n disponible (charset). Abaixo est\xe3o os casos em que 4D analisa as tags contidas nas p\xe1ginas HTML, bem como quaisquer convers\xf5es realizadas:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"A\xe7\xe3o / Comando"}),(0,o.jsx)(s.th,{children:"An\xe1lise de conte\xfado das p\xe1ginas enviadas"}),(0,o.jsx)(s.th,{children:"Suporte da sintaxe $(*)"}),(0,o.jsx)(s.th,{children:"Conjunto de caracteres utilizado para a an\xe1lise de etiquetas"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"P\xe1ginas chamadas atrav\xe9s de URLs"}),(0,o.jsx)(s.td,{children:'X, exceto para p\xe1ginas com extens\xf5es ".htm" ou ".html'}),(0,o.jsx)(s.td,{children:'X, exceto para p\xe1ginas com extens\xf5es ".htm" ou ".html'}),(0,o.jsx)(s.td,{children:'Uso de charset passado como par\xe2metro do cabe\xe7alho "Content-Type" da p\xe1gina. Se n\xe3o houver nenhuma, procure uma etiqueta META-HTTP EQUIV com um conjunto de caracteres. Caso contr\xe1rio, utiliza\xe7\xe3o do conjunto de caracteres predefinido para o servidor HTTP'})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"WEB SEND FILE"})}),(0,o.jsx)(s.td,{children:"X"}),(0,o.jsx)(s.td,{children:"-"}),(0,o.jsx)(s.td,{children:'Uso de charset passado como par\xe2metro do cabe\xe7alho "Content-Type" da p\xe1gina. Se n\xe3o houver nenhuma, procure uma etiqueta META-HTTP EQUIV com um conjunto de caracteres. Caso contr\xe1rio, utiliza\xe7\xe3o do conjunto de caracteres predefinido para o servidor HTTP'})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"WEB SEND TEXT"})}),(0,o.jsx)(s.td,{children:"X"}),(0,o.jsx)(s.td,{children:"-"}),(0,o.jsx)(s.td,{children:"N\xe3o \xe9 necess\xe1ria qualquer convers\xe3o"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"WEB SEND BLOB"})}),(0,o.jsx)(s.td,{children:'X, se o BLOB for do tipo "text/html'}),(0,o.jsx)(s.td,{children:"-"}),(0,o.jsx)(s.td,{children:'Utiliza\xe7\xe3o do conjunto de caracteres definido no cabe\xe7alho "Content-Type" da resposta. Caso contr\xe1rio, utiliza\xe7\xe3o do conjunto de caracteres predefinido para o servidor HTTP'})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsxs)(s.td,{children:["Inclusi\xf3n por la etiqueta ",(0,o.jsx)(s.code,{children:"\x3c!--#4DINCLUDE--\x3e"})]}),(0,o.jsx)(s.td,{children:"X"}),(0,o.jsx)(s.td,{children:"X"}),(0,o.jsx)(s.td,{children:'Uso de charset passado como par\xe2metro do cabe\xe7alho "Content-Type" da p\xe1gina. Se n\xe3o houver nenhuma, procure uma etiqueta META-HTTP EQUIV com um conjunto de caracteres. Caso contr\xe1rio, utiliza\xe7\xe3o do conjunto de caracteres predefinido para o servidor HTTP'})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"PROCESS 4D TAGS"})}),(0,o.jsx)(s.td,{children:"X"}),(0,o.jsx)(s.td,{children:"X"}),(0,o.jsx)(s.td,{children:"Dados de texto: sem convers\xe3o. Dados BLOB: convers\xe3o autom\xe1tica do conjunto de caracteres Mac-Roman para compatibilidade"})]})]})]}),"\n",(0,o.jsx)(s.p,{children:"(*) A sintaxe alternativa baseada em $ est\xe1 dispon\xedvel para as tags 4DHTML, 4DTEXT e 4DEVAL."}),"\n",(0,o.jsx)(s.h2,{id:"aceder-aos-m\xe9todos-4d-atrav\xe9s-da-web",children:"Aceder aos m\xe9todos 4D atrav\xe9s da Web"}),"\n",(0,o.jsxs)(s.p,{children:["Executing a 4D method with ",(0,o.jsx)(s.code,{children:"4DEACH"}),", ",(0,o.jsx)(s.code,{children:"4DELSEIF"}),", ",(0,o.jsx)(s.code,{children:"4DEVAL"}),", ",(0,o.jsx)(s.code,{children:"4DHTML"}),", ",(0,o.jsx)(s.code,{children:"4DIF"}),", ",(0,o.jsx)(s.code,{children:"4DLOOP"}),", ",(0,o.jsx)(s.code,{children:"4DSCRIPT"}),", or ",(0,o.jsx)(s.code,{children:"4DTEXT"})," from a web request is subject to the ",(0,o.jsx)(s.a,{href:"/docs/pt/WebServer/allowProject",children:"Available through 4D tags and URLs (4DACTION...)"})," attribute value defined in the properties of the method. Se o atributo n\xe3o estiver checado para o m\xe9todo, ele n\xe3o pode ser chamado de uma requisi\xe7\xe3o web."]}),"\n",(0,o.jsx)(s.h2,{id:"preven\xe7\xe3o-da-inser\xe7\xe3o-de-c\xf3digo-malicioso",children:"Preven\xe7\xe3o da inser\xe7\xe3o de c\xf3digo malicioso"}),"\n",(0,o.jsx)(s.p,{children:"As tags 4D aceitam diferentes tipos de dados como par\xe2metros: texto, vari\xe1veis, m\xe9todos, nomes de comandos, etc. Quando esses dados forem fornecidos pelo seu pr\xf3prio c\xf3digo, n\xe3o h\xe1 risco de inser\xe7\xe3o de c\xf3digo malicioso pois voc\xea controla a entrada. No entanto, o c\xf3digo do seu banco de dados geralmente trabalha com dados que foram, em algum momento, introduzidos por meio de uma fonte externa (entrada do usu\xe1rio, importa\xe7\xe3o etc.)."}),"\n",(0,o.jsxs)(s.p,{children:["En este caso, es aconsejable ",(0,o.jsx)(s.strong,{children:"no utilizar"})," etiquetas como ",(0,o.jsx)(s.code,{children:"4DEVAL"})," o ",(0,o.jsx)(s.code,{children:"4DSCRIPT"}),", que eval\xfaan par\xe1metros, directamente con este tipo de datos."]}),"\n",(0,o.jsxs)(s.p,{children:["In addition, according to the ",(0,o.jsx)(s.a,{href:"/docs/pt/Tags/transformation-tags#recursive-processing",children:"principle of recursion"}),", malicious code may itself include transformation tags. En este caso, es imprescindible utilizar la etiqueta ",(0,o.jsx)(s.code,{children:"4DTEXT"}),'. Imagine, por exemplo, um campo de formul\xe1rio da Web chamado "Nome", no qual os usu\xe1rios devem digitar seu nome. Este nombre se muestra mediante una etiqueta ',(0,o.jsx)(s.code,{children:"\x3c!--#4DHTML vName--\x3e"}),' en la p\xe1gina. If text of the "\x3c!--#4DEVAL QUIT 4D--\x3e" type is inserted instead of the name, interpreting this tag will cause the application to be exited. Para evitar este riesgo, basta con utilizar sistem\xe1ticamente la etiqueta ',(0,o.jsx)(s.code,{children:"4DTEXT"}),' en este caso. J\xe1 que essa tag escapa dos caracteres HTML especiais, qualquer c\xf3digo recursivo malicioso que possa ter sido inserido n\xe3o ser\xe1 reinterpretado. To refer to the previous example, the "Name" field will contain, in this case, "',(0,o.jsx)(s.code,{children:"&lt;!--#4DEVAL QUIT 4D--&gt;"}),'" which will not be transformed.']})]})}function m(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,a){a.d(s,{Z:function(){return r},a:function(){return t}});var n=a(667294);let o={},i=n.createContext(o);function t(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);