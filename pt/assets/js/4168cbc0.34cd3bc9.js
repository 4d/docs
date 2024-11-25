"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72719"],{833052:function(e,o,s){s.r(o),s.d(o,{metadata:()=>n,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>t});var n=JSON.parse('{"id":"FormEditor/stylesheets","title":"Folhas de estilo","description":"Vis\xe3o Geral","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/FormEditor/createStylesheet.md","sourceDirName":"FormEditor","slug":"/FormEditor/stylesheets","permalink":"/docs/pt/18/FormEditor/stylesheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2FcreateStylesheet.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"stylesheets","title":"Folhas de estilo"},"sidebar":"docs","previous":{"title":"Bibliotecas de objetos","permalink":"/docs/pt/18/FormEditor/objectLibrary"},"next":{"title":"Imagens","permalink":"/docs/pt/18/FormEditor/pictures"}}'),i=s("785893"),r=s("250065");let t={id:"stylesheets",title:"Folhas de estilo"},l=void 0,d={},a=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Seletores de folhas de estilo",id:"seletores-de-folhas-de-estilo",level:3},{value:"Declara\xe7\xf5es de folhas de estilo",id:"declara\xe7\xf5es-de-folhas-de-estilo",level:3},{value:"Declara\xe7\xf5es de folhas de estilo",id:"declara\xe7\xf5es-de-folhas-de-estilo-1",level:2},{value:"Tipo de objeto",id:"tipo-de-objeto",level:3},{value:"Nome de objeto",id:"nome-de-objeto",level:3},{value:"Class",id:"class",level:3},{value:"Todos os objetos",id:"todos-os-objetos",level:3},{value:"Sintaxes compat\xedveis",id:"sintaxes-compat\xedveis",level:3},{value:"Sintaxes compat\xedveis",id:"sintaxes-compat\xedveis-1",level:4},{value:"Exemplos",id:"exemplos",level:4},{value:"Seletores de folhas de estilo",id:"seletores-de-folhas-de-estilo-1",level:2},{value:"Mapa de atributos",id:"mapa-de-atributos",level:3},{value:"Valores de atributos espec\xedficos",id:"valores-de-atributos-espec\xedficos",level:3},{value:"Ordem de prioridade",id:"ordem-de-prioridade",level:2},{value:"JSON vs Folha de estilo",id:"json-vs-folha-de-estilo",level:3},{value:"Folhas de estilo m\xfaltiplas",id:"folhas-de-estilo-m\xfaltiplas",level:3},{value:"Cria\xe7\xe3o ou modifica\xe7\xe3o de folhas de estilo",id:"cria\xe7\xe3o-ou-modifica\xe7\xe3o-de-folhas-de-estilo",level:2}];function c(e){let o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h2,{id:"vis\xe3o-geral",children:"Vis\xe3o Geral"}),"\n",(0,i.jsx)(o.p,{children:"Uma folha de estilo agrupa junto uma combina\xe7\xe3o de atributos para objetos formul\xe1rio - de atributos de texto a quase qualquer atributo de objeto dispon\xedvel."}),"\n",(0,i.jsx)(o.p,{children:"Al\xe9m de harmonizar uma interface de aplica\xe7\xe3o, folhas de estilo oferecem tr\xeas vantagens principais:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Poupa tempo durante o desenvolvimento: cada objeto tem agrupamentos de configura\xe7\xf5es espec\xedficos dentro de uma \xfanica opera\xe7\xe3o."}),"\n",(0,i.jsx)(o.li,{children:"Manuten\xe7\xe3o facilitada: folhas de estilo modificam a apar\xeancia de qualquer objeto que as usa, ent\xe3o mudar o tamanho de fonte em uma folha de estilo vai mudar o estilo de fonte para todos os objetos que usarem essa mesma folha de estilo."}),"\n",(0,i.jsx)(o.li,{children:"Controle de desenvolvimento multiplataforma: as folhas de estilo podem ser aplicadas para plataformas macOS e Windows, apenas macOS ou s\xf3 Windows. Quando uma folha de estilo for aplicada, 4D automaticamente usa a folha de estilo apropriada."}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"seletores-de-folhas-de-estilo",children:"Seletores de folhas de estilo"}),"\n",(0,i.jsx)(o.p,{children:"4D aceita tr\xeas arquivos espec\xedficos de folhas de estilo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Folha de estilo"}),(0,i.jsx)(o.th,{children:"Plataforma"})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"styleSheets.css"}),(0,i.jsx)(o.td,{children:"Folha de estilo global para macOS e Windows"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"styleSheets_mac.css"}),(0,i.jsx)(o.td,{children:"Para definir os estilos de atributos espec\xedficos de macOS unicamente"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"styleSheets_windows.css"}),(0,i.jsx)(o.td,{children:"Para definir os estilos de atributos espec\xedficos para Windows unicamente"})]})]})]}),"\n",(0,i.jsx)(o.p,{children:'Estes arquivos se armazenam na pasta "/SOURCES" do projeto.'}),"\n",(0,i.jsx)(o.h3,{id:"declara\xe7\xf5es-de-folhas-de-estilo",children:"Declara\xe7\xf5es de folhas de estilo"}),"\n",(0,i.jsx)(o.p,{children:"Embora adaptadas para atender \xe0s necessidades espec\xedficas dos formul\xe1rios 4D, as folhas de estilo para bancos de dados de projetos geralmente seguem a sintaxe e a gram\xe1tica CSS2."}),"\n",(0,i.jsx)(o.p,{children:"Cada r\xe9gua de estilo em uma folha de estilo cont\xe9m duas partes:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["a ",(0,i.jsx)(o.em,{children:"Selector"}),' - Um seletor define onde aplicar o estilo. 4D \xe9 compat\xedvel com os seletores "object type", "object name", "class", "all objects" e "attribute value".']}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["uma ",(0,i.jsx)(o.em,{children:"declara\xe7\xe3o"})," - A declara\xe7\xe3o define o estilo real a aplicar. Podem ser agrupadas v\xe1rias linhas de declara\xe7\xe3o para formar um bloco de declara\xe7\xe3o. Cada linha de um bloco de declara\xe7\xe3o CSS deve terminar com um ponto e linha, e o bloco inteiro deve ser rodeado por chaves."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"declara\xe7\xf5es-de-folhas-de-estilo-1",children:"Declara\xe7\xf5es de folhas de estilo"}),"\n",(0,i.jsx)(o.h3,{id:"tipo-de-objeto",children:"Tipo de objeto"}),"\n",(0,i.jsx)(o.p,{children:"O tipo de objeto define o tipo de objeto ao que vai aplicar o estilo, e corresponde ao seletor de elementos CSS."}),"\n",(0,i.jsx)(o.p,{children:'Para aplicar o mesmo estilo para m\xfaltiplos tipos de objetos, especifique o tipo de objeto separado por um "," ent\xe3o em chaves, declare os estilos a aplicar:'}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:["O tipo de objeto corresponde ao JSON ",(0,i.jsx)(o.a,{href:"/docs/pt/18/FormObjects/propertiesObject#type",children:"tipo"})," propriedade de objetos formul\xe1rios."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["No exemplo abaixo, todos os objetos do tipo ",(0,i.jsx)(o.em,{children:"button"})," vai exibir texto na fonte Helvetica Neue, com um tamanho de 20 p\xedxels:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"button {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n"})}),"\n",(0,i.jsx)(o.p,{children:"Especifique o tipo de objeto, depois entre chaves, declare os estilos a aplicar."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"text, input {\n  text-align: left;\n  stroke: grey;\n}\n"})}),"\n",(0,i.jsx)(o.h3,{id:"nome-de-objeto",children:"Nome de objeto"}),"\n",(0,i.jsxs)(o.p,{children:["O nome de objeto corresponde ao ",(0,i.jsx)(o.strong,{children:"seletor de ID"})," CSS e define um objeto espec\xedfico ao que h\xe1 que dar estilo, j\xe1 que o nome do objeto \xe9 \xfanico dentro do formul\xe1rio."]}),"\n",(0,i.jsx)(o.p,{children:"Determine o objeto com um caractere '#' antes do nome de objeto, depois entre chaves, declare os estilos a aplicar."}),"\n",(0,i.jsx)(o.p,{children:'No exemplo abaio, o texto de objeto com o nome "okButton" ser\xe1 exibido em fonte Helvetica Neue, com um tamanho de 20 p\xedxels:'}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"#okButton {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n"})}),"\n",(0,i.jsx)(o.h3,{id:"class",children:"Class"}),"\n",(0,i.jsxs)(o.p,{children:["Class corresponde ao ",(0,i.jsx)(o.strong,{children:"selector class"})," CSS e define o estilo para todos os objetos formul\xe1rio com o atributo ",(0,i.jsx)(o.code,{children:"class"}),"."]}),"\n",(0,i.jsx)(o.p,{children:'Para indicar que um estilo deve aplicar-se s\xf3 aos objetos de um tipo determinado, especifique o tipo seguido de "." e o nome da classe, e depois, entre chaves, declare o estilo ou os estilos a aplicar.'}),"\n",(0,i.jsxs)(o.p,{children:["No exemplo abaixo, o texto de todos os objetos com o nome da classe ",(0,i.jsx)(o.code,{children:"okButtons"})," se mostrar\xe1 na fonte Helvetica Neue, com um tamanho de 20 p\xedxels, alinhado ao centro:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:".okButtons {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n    text-align: center;\n}\n"})}),"\n",(0,i.jsx)(o.p,{children:'Pode especificar as classes a usar com um caractere "." seguido pelo nome da classe, e entre chaves, declare os estilos a aplicar.'}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"text.center {\n  text-align: center;\n  stroke: red;\n}\n"})}),"\n",(0,i.jsxs)(o.p,{children:["Na descri\xe7\xe3o do formul\xe1rio 4D, se associa um nome de classe a um objeto mediante o atributo ",(0,i.jsx)(o.code,{children:"class"}),". Este atributo cont\xe9m um ou v\xe1rios nomes de classe, separados por um espa\xe7o:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:'class: "okButtons important"       \n'})}),"\n",(0,i.jsx)(o.h3,{id:"todos-os-objetos",children:"Todos os objetos"}),"\n",(0,i.jsxs)(o.p,{children:["Em correspond\xeancia com o seletor CSS ",(0,i.jsx)(o.strong,{children:"universal"}),', o caractere "*" indica que o seguinte estilo se aplicar\xe1 a todos os objetos do formul\xe1rio.']}),"\n",(0,i.jsx)(o.p,{children:'Indique que um estilo deve aplicar-se a todos os objetos formul\xe1rio com o car\xe1cter "*" e, a seguir, entre chaves, declare os estilos que devem aplicar-se.'}),"\n",(0,i.jsx)(o.p,{children:"No seguinte exemplo, todos os objetos ter\xe3o um fundo cinza:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"* {\n  fill: gray;\n}\n"})}),"\n",(0,i.jsx)(o.h3,{id:"sintaxes-compat\xedveis",children:"Sintaxes compat\xedveis"}),"\n",(0,i.jsxs)(o.p,{children:["Os estilos correspondentes aos ",(0,i.jsx)(o.strong,{children:"seletores de atributos"})," CSS se pedem aplicar a todos os objetos formul\xe1rio com um atributo espec\xedfico."]}),"\n",(0,i.jsx)(o.p,{children:"Especifique o tipo de atributo entre colchetes, depois entre chaves, declare os estilos a aplicar."}),"\n",(0,i.jsx)(o.h4,{id:"sintaxes-compat\xedveis-1",children:"Sintaxes compat\xedveis"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Sintaxe"}),(0,i.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"[attribute]"}),(0,i.jsxs)(o.td,{children:["coincide com objetos com o ",(0,i.jsx)(o.code,{children:"attribute"})]})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:'[attribute="value"]'}),(0,i.jsxs)(o.td,{children:["coincide com objetos cujo valor do ",(0,i.jsx)(o.code,{children:"attribute"}),' conteha exatamente o "valor" especificado']})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:'[attribute~="value"]'}),(0,i.jsxs)(o.td,{children:["coincide com os objetos com o valor do ",(0,i.jsx)(o.code,{children:"attribute"}),' que cont\xe9m o "valor" entre uma lista de palavras separadas por espa\xe7os']})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:'[attribute|="value"]'}),(0,i.jsxs)(o.td,{children:["coincide com objetos com um ",(0,i.jsx)(o.code,{children:"attribute"}),' cujo valor come\xe7a por "valor"']})]})]})]}),"\n",(0,i.jsx)(o.h4,{id:"exemplos",children:"Exemplos"}),"\n",(0,i.jsxs)(o.p,{children:["Todos os objetos com o atributo ",(0,i.jsx)(o.code,{children:"borderStyle"})," ter\xe3o l\xednhas roxas:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"[borderStyle]\n{\n     stroke: purple;\n}\n"})}),"\n",(0,i.jsx)(o.p,{children:'Todos os objetos do tipo texto com um atributo de texto cujo valor comece com "Hello" ter\xe3o as letras amarelas:'}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"text[text=Hello]\n{\n     stroke: blue;\n}\n"})}),"\n",(0,i.jsx)(o.p,{children:'Todos os objetos de tipo texto cujos valores contenham "hello" ter\xe3o linhas azuis:'}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"[text~=Hello]\n{\n     stroke: blue;\n}\n\n"})}),"\n",(0,i.jsx)(o.p,{children:'Todos os objetos de tipo texto com um atributo texto cujo valor seja "Hello" ter\xe3o letras azuis:'}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"text[text|=Hello]\n{\n     stroke: yellow;\n}\n"})}),"\n",(0,i.jsx)(o.h2,{id:"seletores-de-folhas-de-estilo-1",children:"Seletores de folhas de estilo"}),"\n",(0,i.jsx)(o.p,{children:"A maioria dos atributos do objeto formul\xe1rio podem ser definidos dentro de uma folha de estilo, exceto os seguintes atributos:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:'"method"'}),"\n",(0,i.jsx)(o.li,{children:'"type"'}),"\n",(0,i.jsx)(o.li,{children:'"class"'}),"\n",(0,i.jsx)(o.li,{children:'"event"'}),"\n",(0,i.jsx)(o.li,{children:"choiceList, excludedList, labels, list, requiredList (list type)"}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Os atributos de objeto de formul\xe1rio podem ser declarados com seu nome JSON como atributos CSS (n\xe3o incluindo tipos de objeto, m\xe9todos, eventos e listas). Para obter mais informa\xe7\xf5es, consulte a p\xe1gina ",(0,i.jsx)(o.strong,{children:"Formul\xe1rios Din\xe2micos"})," na Refer\xeancia de Design."]}),"\n",(0,i.jsx)(o.h3,{id:"mapa-de-atributos",children:"Mapa de atributos"}),"\n",(0,i.jsx)(o.p,{children:"Os atributos listados a continua\xe7\xe3o podem aceitar o nome 4D ou o nome CSS."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"4D"}),(0,i.jsx)(o.th,{children:"CSS"})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"borderStyle"}),(0,i.jsx)(o.td,{children:"border-style"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"fill"}),(0,i.jsx)(o.td,{children:"background-color"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"fontFamily"}),(0,i.jsx)(o.td,{children:"font-family"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"fontSize"}),(0,i.jsx)(o.td,{children:"font-size"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"fontStyle"}),(0,i.jsx)(o.td,{children:"font-style"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"fontWeight"}),(0,i.jsx)(o.td,{children:"font-weight"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"stroke"}),(0,i.jsx)(o.td,{children:"color"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"textAlign"}),(0,i.jsx)(o.td,{children:"text-align"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"textDecoration"}),(0,i.jsx)(o.td,{children:"text-decoration"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"verticalAlign"}),(0,i.jsx)(o.td,{children:"vertical-align"})]})]})]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:'Valores espec\xedficos de 4D*(por* exemplo, "sunken") n\xe3o s\xe3o suportados ao usar nomes de atributos CSS.'}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"valores-de-atributos-espec\xedficos",children:"Valores de atributos espec\xedficos"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Para os atributos ",(0,i.jsx)(o.code,{children:"icon"}),", ",(0,i.jsx)(o.code,{children:"picture"})," e ",(0,i.jsx)(o.code,{children:"customBackgroundPicture"})," que s\xe3o compat\xedveis com uma rota a uma imagem, a sintaxe \xe9:"]}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:'icon: url("/RESOURCES/Images/Buttons/edit.png"); /* rota absoluta */\nicon: url("edit.png"); /* rota relativa ao arquivo de formul\xe1rio */\n'})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Para ",(0,i.jsx)(o.code,{children:"fill"}),", ",(0,i.jsx)(o.code,{children:"stroke"})," , ",(0,i.jsx)(o.code,{children:"alternateFill"})," , ",(0,i.jsx)(o.code,{children:"horizontalLineStroke"})," e ",(0,i.jsx)(o.code,{children:"verticalLineStroke"}),", tr\xeas sintaxes s\xe3o compat\xedveis:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["nome da cor css: ",(0,i.jsx)(o.code,{children:"fill: red;"})]}),"\n",(0,i.jsxs)(o.li,{children:["valor hexad\xe9cimal: ",(0,i.jsx)(o.code,{children:"fill: #FF0000;"})]}),"\n",(0,i.jsxs)(o.li,{children:["funci\xf3n ",(0,i.jsx)(o.code,{children:"rgb()"}),": ",(0,i.jsx)(o.code,{children:"fill:rgb(255,0,0)"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"Se uma string utilizar caracteres proibidos em CSS, pode rodear a string com aspas simples ou duplas. Por exemplo:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["uma referencia xliff: ",(0,i.jsx)(o.code,{children:'tooltip: ":xliff:CommonMenuFile";'})]}),"\n",(0,i.jsxs)(o.li,{children:["um datasource com a express\xe3o de campo: ",(0,i.jsx)(o.code,{children:'dataSource: "[Table_1:1]ID:1";'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"ordem-de-prioridade",children:"Ordem de prioridade"}),"\n",(0,i.jsx)(o.p,{children:"Os projetos 4D priorizam as defini\xe7\xf5es de estilo em conflito, primeiro pela defini\xe7\xe3o do formul\xe1rio e depois pelas folhas de estilo."}),"\n",(0,i.jsx)(o.h3,{id:"json-vs-folha-de-estilo",children:"JSON vs Folha de estilo"}),"\n",(0,i.jsx)(o.p,{children:"Se um atributo estiver definido na descri\xe7\xe3o do formul\xe1rio JSON e em uma folha de estilo, 4D utilizar\xe1 o valor do arquivo JSON."}),"\n",(0,i.jsxs)(o.p,{children:["Para anular este comportamento, o valor do estilo deve ir seguido de uma declara\xe7\xe3o ",(0,i.jsx)(o.code,{children:"!important"}),"."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Exemplo 1:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Descripci\xf3n do formul\xe1rio JSON"}),(0,i.jsx)(o.th,{children:"Folha de estilo"}),(0,i.jsx)(o.th,{children:"4D exibe"})]})}),(0,i.jsx)(o.tbody,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:'"text": "Button",'})}),(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:"text: Edit;"})}),(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:'"Button"'})})]})})]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Exemplo 2:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Descripci\xf3n do formul\xe1rio JSON"}),(0,i.jsx)(o.th,{children:"Folha de estilo"}),(0,i.jsx)(o.th,{children:"4D exibe"})]})}),(0,i.jsx)(o.tbody,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:'"text": "Button",'})}),(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:"text: Edit !important;"})}),(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:'"Edit"'})})]})})]}),"\n",(0,i.jsx)(o.h3,{id:"folhas-de-estilo-m\xfaltiplas",children:"Folhas de estilo m\xfaltiplas"}),"\n",(0,i.jsx)(o.p,{children:"Durante a execu\xe7\xe3o, 4D prioriza automaticamente as folhas de estilo na seguinte ordem:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["O formul\xe1rio 4D carregar\xe1 primeiro o arquivo CSS por padr\xe3o ",(0,i.jsx)(o.code,{children:"/SOURCES/styleSheets.css"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:["Depois carregar\xe1 o arquivo CSS para a plataforma atual ",(0,i.jsx)(o.code,{children:"/SOURCES/styleSheets_mac.css"})," o ",(0,i.jsx)(o.code,{children:"/SOURCES/styleSheets_windows.css"}),"."]}),"\n",(0,i.jsx)(o.li,{children:"Se existir, ent\xe3o carregar\xe1 um arquivo CSS espec\xedfico definido no formul\xe1rio  JSON:"}),"\n"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"ou uma lista de arquivos por plataforma:"}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:'"css": "<path>"\n'})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"um arquivo para ambas plataformas:"}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:'"css": [\n     "<path1>",\n     "<path2>"\n      ],\n'})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"ou uma lista de arquivos para ambas plataformas:"}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:' "css": [\n        {"path": "<path>", "media": "mac"},\n        {"path": "<path>", "media": "windows"},\n    ],\n'})}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"As rotas dos arquivos pedem ser relativas ou absolutas."}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"As rotas relativas se resolvem em rela\xe7\xe3o com o arquivo de descri\xe7\xe3o do formul\xe1rio JSON."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Por raz\xf5es de seguran\xe7a, s\xf3 se aceitam as rotas do sistema de arquivos para as rotas absolutas. (",(0,i.jsx)(o.em,{children:"e.g."}),', "/RESOURCES", "/DATA")']}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"cria\xe7\xe3o-ou-modifica\xe7\xe3o-de-folhas-de-estilo",children:"Cria\xe7\xe3o ou modifica\xe7\xe3o de folhas de estilo"}),"\n",(0,i.jsx)(o.p,{children:'Pode criar folhas de estilo utilizando seu editor de texto preferido e salvando o arquivo com extens\xe3o ".css" na pasta "/SOURCES" do projeto.'}),"\n",(0,i.jsxs)(o.p,{children:["A caixa de ferramentas de 4D oferece uma p\xe1gina ",(0,i.jsx)(o.strong,{children:"Hojas de estilo"})," como op\xe7\xe3o de acesso direto para criar e editar uma das tr\xeas folhas de estilo com nomes espec\xedficas da plataforma."]}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Abra a p\xe1gina ",(0,i.jsx)(o.strong,{children:"Estilos"})," escolhendo a ",(0,i.jsx)(o.strong,{children:"Caixa de ferramentas > Styles"})," do menu Design ou clique no \xedcone ",(0,i.jsx)(o.strong,{children:"Caixa de ferramentas"})," da barra de ferramentas do editor de formul\xe1rios."]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:s(742178).Z+"",width:"787",height:"582"})}),"\n",(0,i.jsxs)(o.ol,{start:"2",children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Selecione o tipo de folha de estilo que deseja criar E cliquer no bot\xe3o ",(0,i.jsx)(o.strong,{children:"Criar"})," ou ",(0,i.jsx)(o.strong,{children:"Editar"}),": ",(0,i.jsx)(o.img,{src:s(12431).Z+"",width:"116",height:"23"})]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"A folha de estilo se abrir\xe1 em seu editor de texto predeterminado."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},12431:function(e,o,s){s.d(o,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAXCAIAAABVmPyEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEFSURBVGhD7ZbBDYMwDEXZiW0ySW+swipM0XMnoTF17IBDpVYYI/SffIjj30MfFm03AzdIbvd4olwKch1L5L7AcUCuI5DrSKzcaeg7ph8mvrwPcXIXsWnkLreDnH9gTBd+LFFySa2a/R/Itey6JVkplZ3W1waH85ihC+14bvKxxMltLxz5KpNqK8e0jsuoynzLxxAnt71clSBdw4VPPM8ZI7eZDyVI7q7djax1RG/yqSn3AkYrouTyDqoM/rdQyVoS0hAyJI9Grs2Lbns4hTi5GfqqBbZSy1oHyEnp6TdPP0B8jG3yotIeTiFU7t2BXEcg1xHIdWQrF3V8Qa5jZbnACch1Y57fiJdV2WNWgUcAAAAASUVORK5CYII="},742178:function(e,o,s){s.d(o,{Z:function(){return n}});let n=s.p+"assets/images/stylesheets-566a8cb29cc275a6544f20ce64e0118e.png"},250065:function(e,o,s){s.d(o,{Z:function(){return l},a:function(){return t}});var n=s(667294);let i={},r=n.createContext(i);function t(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);