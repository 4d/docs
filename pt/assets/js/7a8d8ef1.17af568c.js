"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2444"],{815482:function(o,e,r){r.r(e),r.d(e,{metadata:()=>i,contentTitle:()=>n,default:()=>u,assets:()=>t,toc:()=>m,frontMatter:()=>d});var i=JSON.parse('{"id":"FormEditor/forms","title":"Formul\xe1rios","description":"Os formul\xe1rios constituem a interface atrav\xe9s da qual a informa\xe7\xe3o \xe9 introduzida, modificada e impressa numa aplica\xe7\xe3o de desktop. Os usu\xe1rios interagem com os dados em um banco de dados usando formul\xe1rios e imprimem relat\xf3rios usando formul\xe1rios. Formul\xe1rios podem ser usados para criar caixas de di\xe1logo personalizadas, paletas ou qualquer janela personalizada em destaque.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/FormEditor/forms.md","sourceDirName":"FormEditor","slug":"/FormEditor/forms","permalink":"/docs/pt/20-R6/FormEditor/forms","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fforms.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"forms","title":"Formul\xe1rios"},"sidebar":"docs","previous":{"title":"Gest\xe3o de usu\xe1rios e grupos 4D","permalink":"/docs/pt/20-R6/Users/editing"},"next":{"title":"Folhas de estilo","permalink":"/docs/pt/20-R6/FormEditor/stylesheets"}}'),s=r("785893"),a=r("250065");let d={id:"forms",title:"Formul\xe1rios"},n=void 0,t={},m=[{value:"Criar formul\xe1rios",id:"criar-formul\xe1rios",level:2},{value:"Formul\xe1rio projeto e formul\xe1rio tabela",id:"formul\xe1rio-projeto-e-formul\xe1rio-tabela",level:2},{value:"P\xe1ginas formul\xe1rio",id:"p\xe1ginas-formul\xe1rio",level:2},{value:"Formul\xe1rios herdados",id:"formul\xe1rios-herdados",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}];function l(o){let e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...o.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Os formul\xe1rios constituem a interface atrav\xe9s da qual a informa\xe7\xe3o \xe9 introduzida, modificada e impressa numa aplica\xe7\xe3o de desktop. Os usu\xe1rios interagem com os dados em um banco de dados usando formul\xe1rios e imprimem relat\xf3rios usando formul\xe1rios. Formul\xe1rios podem ser usados para criar caixas de di\xe1logo personalizadas, paletas ou qualquer janela personalizada em destaque."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(130459).Z+"",width:"1114",height:"896"})}),"\n",(0,s.jsx)(e.p,{children:"Os formul\xe1rios tamb\xe9m podem conter outros formul\xe1rios atrav\xe9s das seguintes funcionalidades:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormObjects/subformOverview",children:"objetos de subformul\xe1rio"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/propertiesForm#inherited-forms",children:"formul\xe1rios herdados"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"criar-formul\xe1rios",children:"Criar formul\xe1rios"}),"\n",(0,s.jsx)(e.p,{children:"\xc9 poss\xedvel adicionar ou modificar formul\xe1rios 4D usando os seguintes elementos:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Interface de Desenvolvedor 4D:"})," Crie novos formul\xe1rios a partir do menu ",(0,s.jsx)(e.strong,{children:"Arquivo"})," ou da janela ",(0,s.jsx)(e.strong,{children:"Explorador"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Form Editor"}),": Modifique seus formul\xe1rios usando o ",(0,s.jsx)(e.strong,{children:"[Form Editor] (FormEditor/formEditor.md)"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"C\xf3digo JSON:"})," Crie e projete seus formul\xe1rios usando JSON e salve os arquivos de formul\xe1rio no [local apropriado] (Project/architecture.md#sources-folder). Exemplo:"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'{\n    "windowTitle": "Hello World",\n    "windowMinWidth": 220,\n    "windowMinHeight": 80,\n    "method": "HWexample",\n    "pages": [\n        null,\n        {\n            "objects": {\n                "text": {\n                "type": "text",\n                "text": "Hello World!",\n                "textAlign": "center",\n                "left": 50,\n                "top": 120,\n                "width": 120,\n                "height": 80\n                },\n                "image": {\n                "type": "picture",\n                "pictureFormat": "scaled",\n                "picture": "/RESOURCES/Images/HW.png",\n                "alignment":"center", \n                "left": 70,\n                "top": 20, \n                "width":75, \n                "height":75        \n                },\n                "button": {\n                "type": "button",\n                "text": "OK",\n                "action": "Cancel",\n                "left": 60,\n                "top": 160,\n\n\n                "width": 100,\n                "height": 20\n                }\n            }\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"formul\xe1rio-projeto-e-formul\xe1rio-tabela",children:"Formul\xe1rio projeto e formul\xe1rio tabela"}),"\n",(0,s.jsx)(e.p,{children:"Existem duas categorias de formul\xe1rios:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Formul\xe1rios de projeto"})," - Formul\xe1rios independentes que n\xe3o est\xe3o anexados a nenhuma tabela. Eles s\xe3o destinados principalmente para criar caixas de di\xe1logo de interface, bem como componentes. Os formul\xe1rios do projeto podem ser usados para criar interfaces que estejam em conformidade com os padr\xf5es do sistema operacional."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Formul\xe1rios de tabela"})," - Vinculados a tabelas espec\xedficas e, portanto, beneficiam-se de fun\xe7\xf5es autom\xe1ticas \xfateis para o desenvolvimento de aplicativos baseados em bancos de dados. Normalmente, uma tabela tem formul\xe1rios de entrada e sa\xedda separados."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Normalmente, voc\xea seleciona a categoria do formul\xe1rio quando o cria, mas pode alter\xe1-la posteriormente."}),"\n",(0,s.jsx)(e.h2,{id:"p\xe1ginas-formul\xe1rio",children:"P\xe1ginas formul\xe1rio"}),"\n",(0,s.jsx)(e.p,{children:"Cada formul\xe1rio \xe9 composto por, pelo menos, duas p\xe1ginas:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"uma p\xe1gina 1: uma p\xe1gina principal, exibida por defeito"}),"\n",(0,s.jsx)(e.li,{children:"uma p\xe1gina 0: uma p\xe1gina de fundo, cujo conte\xfado \xe9 exibido em todas as outras p\xe1ginas."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\xc9 poss\xedvel criar v\xe1rias p\xe1ginas para um formul\xe1rio de entrada. Se voc\xea tiver mais campos ou vari\xe1veis do que cabem em uma tela, voc\xea pode querer criar p\xe1ginas adicionais para exibi-los. As p\xe1ginas m\xfaltiplas permitem-lhe fazer o seguinte:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Coloque as informa\xe7\xf5es mais importantes na primeira p\xe1gina e as informa\xe7\xf5es menos importantes nas outras p\xe1ginas."}),"\n",(0,s.jsx)(e.li,{children:"Organize cada t\xf3pico na sua pr\xf3pria p\xe1gina."}),"\n",(0,s.jsxs)(e.li,{children:["Reduza ou elimine a rolagem durante a entrada de dados definindo a ",(0,s.jsx)(e.a,{href:"../FormEditor/formEditor.html#data-entry-order",children:"ordem de entrada"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"Fornece espa\xe7o em torno dos elementos de formul\xe1rio para um design de tela atrativo."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"As p\xe1ginas m\xfaltiplas s\xe3o uma conveni\xeancia utilizada apenas para formul\xe1rios de introdu\xe7\xe3o. N\xe3o s\xe3o para produ\xe7\xe3o impressa. Quando um formul\xe1rio de v\xe1rias p\xe1ginas \xe9 impresso, apenas a primeira p\xe1gina \xe9 impressa."}),"\n",(0,s.jsx)(e.p,{children:"N\xe3o h\xe1 restri\xe7\xf5es quanto ao n\xfamero de p\xe1ginas que um formul\xe1rio pode ter. O mesmo campo pode aparecer quantas vezes quiser em um formul\xe1rio e em quantas p\xe1ginas desejar. No entanto, quanto mais p\xe1ginas voc\xea tiver em um formul\xe1rio, mais tempo levar\xe1 para exibi-lo."}),"\n",(0,s.jsx)(e.p,{children:"Um formul\xe1rio de m\xfaltiplas p\xe1ginas possui tanto uma p\xe1gina de fundo quanto v\xe1rias p\xe1ginas de exibi\xe7\xe3o. Objetos que s\xe3o colocados na p\xe1gina de fundo podem ser vis\xedveis em todas as p\xe1ginas de exibi\xe7\xe3o, mas s\xf3 podem ser selecionados e editados na p\xe1gina de fundo. Em formul\xe1rios de v\xe1rias p\xe1ginas, voc\xea deve colocar sua paleta de bot\xf5es na p\xe1gina de fundo. Voc\xea tamb\xe9m precisa incluir um ou mais objetos na p\xe1gina de fundo que forne\xe7am ferramentas de navega\xe7\xe3o de p\xe1gina para o usu\xe1rio."}),"\n",(0,s.jsx)(e.h2,{id:"formul\xe1rios-herdados",children:"Formul\xe1rios herdados"}),"\n",(0,s.jsxs)(e.p,{children:['Formul\xe1rios 4D podem usar e ser usados como "formul\xe1rios herdados," o que significa que todos os objetos do ',(0,s.jsx)(e.em,{children:"Formul\xe1rio A"})," podem ser usados no ",(0,s.jsx)(e.em,{children:"Formul\xe1rio B"}),". Neste caso, ",(0,s.jsx)(e.em,{children:"Formul\xe1rio B"}),' "herda" os objetos do ',(0,s.jsx)(e.em,{children:"Formul\xe1rio A"}),"."]}),"\n",(0,s.jsx)(e.p,{children:"Refer\xeancias a um formul\xe1rio herdado est\xe3o sempre ativas: se um elemento de um formul\xe1rio herdado for modificado (estilos de bot\xe3o, por exemplo), todos os formul\xe1rios que utilizam esse elemento ser\xe3o automaticamente modificados."}),"\n",(0,s.jsx)(e.p,{children:"Todos os formul\xe1rios (formul\xe1rios de tabela e formul\xe1rios de projeto) podem ser designados como um formul\xe1rio herdado. No entanto, os elementos que eles cont\xeam devem ser compat\xedveis com o uso em diferentes tabelas de banco de dados."}),"\n",(0,s.jsx)(e.p,{children:"Quando um formul\xe1rio \xe9 executado, os objetos s\xe3o carregados e combinados na seguinte ordem:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"P\xe1gina zero do formul\xe1rio herdado"}),"\n",(0,s.jsx)(e.li,{children:"P\xe1gina 1 do formul\xe1rio herdado"}),"\n",(0,s.jsx)(e.li,{children:"P\xe1gina zero do formul\xe1rio aberto"}),"\n",(0,s.jsx)(e.li,{children:"P\xe1gina actual do formul\xe1rio aberto."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Essa ordem determina a [ordem de entrada] padr\xe3o (../FormEditor/formEditor.html#data-entry-order) dos objetos no formul\xe1rio."}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"Apenas as p\xe1ginas 0 e 1 de um formul\xe1rio herdado podem aparecer noutros formul\xe1rios."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"As propriedades e o m\xe9todo de um formul\xe1rio n\xe3o s\xe3o considerados quando esse formul\xe1rio \xe9 usado como um formul\xe1rio herdado. Por outro lado, s\xe3o chamados os m\xe9todos dos objetos que cont\xe9m."}),"\n",(0,s.jsxs)(e.p,{children:["Para definir um formul\xe1rio herdado, as propriedades ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/propertiesForm#inherited-form-name",children:"Inherited Form Name"})," e ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/propertiesForm#inherited-form-table",children:"Inherited Form Table"})," (para formul\xe1rio de tabela) devem ser definidas no formul\xe1rio que herdar\xe1 algo de outro formul\xe1rio."]}),"\n",(0,s.jsxs)(e.p,{children:["Um formul\xe1rio pode herdar de um formul\xe1rio de projeto, definindo a propriedade [Inherited Form Table] (properties_FormProperties.md#inherited-form-table) como ",(0,s.jsx)(e.code,{children:"\\<None>"}),' na Property List (ou " " em JSON).']}),"\n",(0,s.jsxs)(e.p,{children:["Para interromper a heran\xe7a de um formul\xe1rio, selecione ",(0,s.jsx)(e.code,{children:"\\<None>"}),' na Property List (ou " " em JSON) para a propriedade [Inherited Form Name] (properties_FormProperties.md#inherited-form-name).']}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\xc9 poss\xedvel definir um formul\xe1rio herdado em um formul\xe1rio que eventualmente ser\xe1 usado como um formul\xe1rio herdado para um terceiro formul\xe1rio. A combina\xe7\xe3o de objetos \xe9 feita de forma recursiva. 4D detecta loops recursivos (por exemplo, se o formul\xe1rio [table1]form1 \xe9 definido como o formul\xe1rio herdado de [table1]form1, ou seja, ele mesmo) e interrompe a cadeia de formul\xe1rios."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/menu#associated-menu-bar",children:"Barra de Menu Associado"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/windowSize#fixed-height",children:"Altura fixa"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/markers#fixed-width",children:"Largura fixa"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/markers#form-break",children:"Quebra de forma"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/markers#form-detail",children:"Formul\xe1rio detalhado"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/markers#form-footer",children:"Form Footer"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/markers#form-header",children:"Cabe\xe7alho do formul\xe1rio"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/propertiesForm#form-name",children:"Nome do formul\xe1rio"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/propertiesForm#form-type",children:"Tipo de Formul\xe1rio"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/propertiesForm#inherited-form-name",children:"Nome do formul\xe1rio herdado"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/propertiesForm#hererited-form-table",children:"Tabela de formul\xe1rio herdades"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/windowSize#maximum-height-minimum-height",children:"Altura M\xe1xima"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/windowSize#maximum-width-minimum-width",children:"Largura M\xe1xima"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/action#method",children:"M\xe9todo"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/windowSize#maximum-height-minimum-height",children:"Altura m\xednima"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/windowSize#maximum-width-minimum-width",children:"Widget m\xednimo"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/propertiesForm#pages",children:"P\xe1ginas"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/print#settings",children:"Configura\xe7\xf5es de impress\xe3o"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/propertiesForm#published-as-subform",children:"Publicado como subform"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/propertiesForm#save-geometry",children:"Salvar Geometry"})," - ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R6/FormEditor/propertiesForm#window-title",children:"T\xedtulo da Janela"})]})]})}function u(o={}){let{wrapper:e}={...(0,a.a)(),...o.components};return e?(0,s.jsx)(e,{...o,children:(0,s.jsx)(l,{...o})}):l(o)}},130459:function(o,e,r){r.d(e,{Z:function(){return i}});let i=r.p+"assets/images/form1-4cd115e2060b296f638be467d18d7b47.png"},250065:function(o,e,r){r.d(e,{Z:function(){return n},a:function(){return d}});var i=r(667294);let s={},a=i.createContext(s);function d(o){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof o?o(e):{...e,...o}},[e,o])}function n(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:d(o.components),i.createElement(a.Provider,{value:e},o.children)}}}]);