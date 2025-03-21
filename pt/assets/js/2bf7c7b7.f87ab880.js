"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51076"],{357449:function(e,s,o){o.r(s),o.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>i,toc:()=>l,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/xml-get-options","title":"XML GET OPTIONS","description":"XML GET OPTIONS ( elemRef|documento ; seletor ; valor {; seletor2 ; valor2 ; ... ; seletorN ; valorN} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/xml-get-options.md","sourceDirName":"commands-legacy","slug":"/commands/xml-get-options","permalink":"/docs/pt/commands/xml-get-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fxml-get-options.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"xml-get-options","title":"XML GET OPTIONS","slug":"/commands/xml-get-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"XML GET ERROR","permalink":"/docs/pt/commands/xml-get-error"},"next":{"title":"XML SET OPTIONS","permalink":"/docs/pt/commands/xml-set-options"}}'),r=o("785893"),a=o("250065");let d={id:"xml-get-options",title:"XML GET OPTIONS",slug:"/commands/xml-get-options",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let s={a:"a",br:"br",date:"date",duration:"duration",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"XML GET OPTIONS"})," ( elemRef|documento ; ",(0,r.jsx)(s.em,{children:"seletor"})," ; ",(0,r.jsx)(s.em,{children:"valor"})," {; ",(0,r.jsx)(s.em,{children:"seletor2"})," ; ",(0,r.jsx)(s.em,{children:"valor2"})," ; ... ; ",(0,r.jsx)(s.em,{children:"seletorN"})," ; ",(0,r.jsx)(s.em,{children:"valorN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"elemRef|documento"}),(0,r.jsx)(s.td,{children:"Texto"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Elemento de refer\xeancia raiz XML ou Refer\xeancia de documento aberto"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"seletor"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Op\xe7\xe3o a conseguir"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"valor"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Valor atual da op\xe7\xe3o"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(s.p,{children:"O comando XML GET OPTIONS \xe9 utilizado para ler o valor atual de um ou mais dos par\xe2metros XML definidos para a sess\xe3o atual e o usu\xe1rio atual."}),"\n",(0,r.jsxs)(s.p,{children:['Em seletor, passe uma das constantes do tema "',(0,r.jsx)(s.em,{children:"XML"}),'" indicando a op\xe7\xe3o a obter. O valor atual da op\xe7\xe3o \xe9 retornado no par\xe2metro ',(0,r.jsx)(s.em,{children:"valor:"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Constante"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Valor"}),(0,r.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"XML binary encoding"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"5"}),(0,r.jsxs)(s.td,{children:["Especifica a maneira como os dados bin\xe1rios s\xe3o convertidos. ",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:"Valores poss\xedveis:"}),' XML Base64 (valor padr\xe3o): os dados bin\xe1rios s\xe3o convertidos simplesmente em base64 XML Data URI scheme: os dados bin\xe1rios s\xe3o convertidos em base64 e s\xe3o adicionados ao cabe\xe7alho "data:;base64". Este formato permite principalmente a um navegador decodificar autom\xe1ticamente uma imagen, e tamb\xe9m \xe9 necess\xe1rio para inserir imagens . Para maior informa\xe7\xe3o, consulte ',(0,r.jsx)(s.a,{href:"http://en.wikipedia.org/wiki/Data%5FURI%5Fscheme",children:"http://en.wikipedia.org/wiki/Data%5FURI%5Fscheme"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"XML BOM"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"9"}),(0,r.jsxs)(s.td,{children:["Especifica se os documentos XML incluem BOM.",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:"Valores poss\xedveis:"})," XML por padr\xe3o (por padr\xe3o): utiliza a configura\xe7\xe3o atual do banco de dados. Por padr\xe3o, BOM n\xe3o \xe9 inclu\xeddo - exceto em bancos de dados/projetos criados com vers\xf5es 4D anteriores a v19.x, nas quais BOM era inclu\xeddo. Veja configura\xe7\xf5es de Compatibilidad. ",(0,r.jsx)(s.em,{children:"XML enabled"}),": inclui BOM ",(0,r.jsx)(s.em,{children:"XML disabled"}),": n\xe3o inclui BOM"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"XML date encoding"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsxs)(s.td,{children:["Especifica a forma na qual se convertes as datas 4D. Por exemplo, !01/01/2003! no fuso hor\xe1ria de Paris.",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:"Valores poss\xedveis:"}),' XML ISO (valor padr\xe3o): uso de formato xs:datetime sem indica\xe7\xe3o de fuso hor\xe1ria. Resultado: "2003-01-01". A parte hora, se estiver presente no valor 4D (via SQL) \xe9 perdida. XML Local: uso de formato xs:date com indicaci\xf3n de fuso hor\xe1rio. Resultado: "2003-01-01 +01:00". A parte hora, se estiver presente no valor 4D (via SQL) \xe9 perdida. XML Datetime local: uso de formato xs:dateTime (ISO 8601). Indica\xe7\xe3o do fuso hor\xe1rio. Este formato permite conservar a parte hora, se estiver presente no valor 4D (via SQL). Resultado: "',(0,r.jsx)(s.date,{children:"2003-01-01T00:00:00 +01:00"}),'". XML UTC: uso de formato xs:date. Resultado: "2003-01-01Z". A parte hora, se estiver presente no valor 4D (via SQL) \xe9 perdida. XML Datetime UTC: uso de formato xs:dateTime (ISO 8601). Este formato permite conservar a parte hora, se estiver presente no valor 4D (via SQL). Resultado: "',(0,r.jsx)(s.date,{children:"2003-01-01T00:00:00Z"}),'".']})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"XML DOM case sensitivity"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"8"}),(0,r.jsxs)(s.td,{children:["Especifica a sensibilidade \xe0 mai\xfasculas e min\xfasculas em rela\xe7\xe3o aos nomes dos elementos dos comandos ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/dom-get-xml-element",children:"DOM Get XML element"})," e ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/dom-count-xml-elements",children:"DOM Count XML elements"}),".",(0,r.jsx)(s.br,{}),"Valores poss\xedveis: XML case sensitive (valor predeterminado): os comandos distinguem entre mai\xfasculas e min\xfasculas XML case insensitive: os comandos n\xe3o distinguen entre mai\xfasculas e min\xfasculas."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"XML external entity resolution"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"7"}),(0,r.jsxs)(s.td,{children:["Controla se as entidades externas s\xe3o resolvidas em documentos XML. De forma pr\xe9-determinada, por raz\xf5es de seguran\xe7a, os analisadores XML DOM e SAX 4D n\xe3o permitem a resolu\xe7\xe3o de entidades externas.",(0,r.jsx)(s.br,{}),(0,r.jsxs)(s.strong,{children:[(0,r.jsx)(s.br,{}),"Valores poss\xedveis:"]}),(0,r.jsx)(s.br,{}),"XML enabled: permite a resolu\xe7\xe3o de entidades externas em documentos XMLXML disabled (valor predeterminado): n\xe3o permite a resolu\xe7\xe3o de entidades externas (uma declara\xe7\xe3o de entidade externa gera um erro de an\xe1lise)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"XML indentation"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"4"}),(0,r.jsxs)(s.td,{children:["Define a indenta\xe7\xe3o de ",(0,r.jsx)(s.em,{children:"document"})," XML. ",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:"Valores poss\xedveis:"})," XML With indentation (valor padr\xe3o): o documento est\xe1 indentado. XML No indentation: o documento n\xe3o est\xe1 indentado; seu conte\xfado se localiza em uma \xfanica linha."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"XML line ending"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"10"}),(0,r.jsxs)(s.td,{children:["Caracteres de final de linha em documentos XML escritos.",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:"Valores poss\xedveis:"})," XML por padr\xe3o (por padr\xe3o): utiliza a configura\xe7\xe3o atual do banco de dados. Por padr\xe3o \xe9 LF em macOS e CRLF em Windows. Entretanto, em macOS, nos bancos/projetos criados com vers\xf5es de 4D antes de v19,x, por padr\xe3o era CR para DOM e CRLF para SAX. Ver tamb\xe9m Par\xe2metros de compatibilidade. XML LF: utiliza LF (quebra de linha) XML CR: utiliza CR (carriage return/retorno de carro) XML CRLF: utiliza CR+LF"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"XML picture encoding"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"6"}),(0,r.jsxs)(s.td,{children:["Especifica a forma na qual as imagens devem ser convertidas (antes de codificar em base64).",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:"Valores poss\xedveis:"})," XML Convert to PNG (valor normal): as imagens s\xe3o convertidas em PNG antes de ser codificadas em base64. XML Native codec: as imagenes s\xe3o convertidas em seu primeiro CODEC nativo de armazenamento antes de ser codificadas em base64. Deve utilizar estas op\xe7\xf5es para codificar imagenes SVG (ver exemplo de comando ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/xml-set-options",title:"XML SET OPTIONS",children:"XML SET OPTIONS"}),")."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"XML string encoding"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsxs)(s.td,{children:["Especifica a forma como as strings 4D s\xe3o convertidas em valores de elementos. N\xe3o se refere \xe0s convers\xf5es em atributos para as quais XML imp\xf5e o uso de caracteres de escape.",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:"Valores poss\xedveis:"})," XML With escaping (valor normal): convers\xe3o das strings 4D em valores de elementos XML com substitui\xe7\xe3o de caracteres. Os dados de tipo texto s\xe3o analisados automaticamente de maneira que os caracteres proibidos (<&>\u2019) s\xe3o substituidos pelas entidades XML ([#&/]amp;[#&/]lt;[#&/]gt; [#&/]apos;[#&/]quot;). XML Raw data: as strings 4D s\xe3o enviadas como dados brutos; 4D n\xe3o efetua codifica\xe7\xe3o nem an\xe1lise. Os valores 4D s\xe3o convertidos se for poss\xedvel em fragmentos XML e s\xe3o inseridos como filho do elemento objetivo. Se um valor n\xe3o puder ser considerado como fragmento XML, se insere em forma de dado bruto em um novo nodo CDATA."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"XML time encoding"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"3"}),(0,r.jsxs)(s.td,{children:["Define a forma como as horas 4D s\xe3o convertidas. Por exemplo, ?02/00/46? (hora de Paris). A codifica\xe7\xe3o difere dependendo de se quiser expressar uma hora ou uma dura\xe7\xe3o.",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:"Valores poss\xedveis para as horas:"}),' XML Datetime UTC: hora expressa em UTC (Universal Time Coordinated). Note que a convers\xe3o a UTC \xe9 autom\xe1tica. Resultado: "',(0,r.jsx)(s.duration,{children:"0000-00-00T01:00:46Z"}),'". XML Datetime local: hora expressa com a diferen\xe3 hor\xe1ria da m\xe1quina de motor de 4D. Resultado: "',(0,r.jsx)(s.duration,{children:"0000-00-00T02:00:46+01:00"}),'". XML Datetime local absolute (valor padr\xe3o): hora expressa sem indica\xe7\xe3o da zona hor\xe1ria. Sem modifica\xe7\xe3o de valor. Resultado: "',(0,r.jsx)(s.duration,{children:"0000-00-00T02:00:46"}),'". ',(0,r.jsx)(s.strong,{children:"Valores poss\xedveis para as dura\xe7\xf5es:"}),' XML Seconds: n\xfamero de segundos desde a meia noite; sem modifica\xe7\xe3o de valor porque expressa uma dura\xe7\xe3o. Resultado: "',(0,r.jsx)(s.duration,{children:"7246"}),'". XML Duration: dura\xe7\xe3o expressa conforme a XML Schema Part 2: Datatypes Second Edition. Sem modifica\xe7\xe3o de valor a que expressa uma dura\xe7\xe3o. Resultado: "',(0,r.jsx)(s.duration,{children:"PT02H00M46S"}),'".']})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/xml-set-options",children:"XML SET OPTIONS"})}),"\n",(0,r.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"1096"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return t},a:function(){return d}});var n=o(667294);let r={},a=n.createContext(r);function d(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);