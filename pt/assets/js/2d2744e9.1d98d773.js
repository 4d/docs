"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55751],{603905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>u});var o=t(667294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),m=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},l=function(e){var a=m(e.components);return o.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=m(t),u=r,k=p["".concat(s,".").concat(u)]||p[u]||c[u]||n;return t?o.createElement(k,d(d({ref:a},l),{},{components:t})):o.createElement(k,d({ref:a},l))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,d=new Array(n);d[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var m=2;m<n;m++)d[m]=t[m];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},980061:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>l});t(667294);var o=t(603905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const d={id:"creating-using-macros",title:"Criar e utilizar macros"},i=void 0,s={unversionedId:"code-editor/creating-using-macros",id:"version-20-R2/code-editor/creating-using-macros",title:"Criar e utilizar macros",description:"Pode utilizar macro-comandos nos seus m\xe9todos. A utiliza\xe7\xe3o de macro-comandos poupa muito tempo durante a introdu\xe7\xe3o de c\xf3digo.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R2/code-editor/creating-using-macros.md",sourceDirName:"code-editor",slug:"/code-editor/creating-using-macros",permalink:"/docs/pt/20-R2/code-editor/creating-using-macros",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20code-editor%2Fcreating-using-macros.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"creating-using-macros",title:"Criar e utilizar macros"},sidebar:"docs",previous:{title:"Editor de m\xe9todo",permalink:"/docs/pt/20-R2/code-editor/write-class-method"},next:{title:"Etiquetas de transforma\xe7\xe3o",permalink:"/docs/pt/20-R2/Tags/tags"}},m={},l=[{value:"O que \xe9 uma macro?",id:"o-que-\xe9-uma-macro",level:2},{value:"Localiza\xe7\xe3o das macros",id:"localiza\xe7\xe3o-das-macros",level:2},{value:"Macros predefinidas",id:"macros-predefinidas",level:2},{value:"Adicionar macros personalizadas",id:"adicionar-macros-personalizadas",level:2},{value:"Verificando a sintaxe das macros personalizadas",id:"verificando-a-sintaxe-das-macros-personalizadas",level:3},{value:"Sintaxe das macros 4D",id:"sintaxe-das-macros-4d",level:2},{value:"Acerca da etiqueta <code>&lt;method&gt;</code>",id:"acerca-da-etiqueta-method",level:2},{value:"Chamada de macros",id:"chamada-de-macros",level:2},{value:"Menu contextual e barra de ferramentas",id:"menu-contextual-e-barra-de-ferramentas",level:3},{value:"Autocompletar",id:"autocompletar",level:3},{value:"Lista do editor de c\xf3digo",id:"lista-do-editor-de-c\xf3digo",level:3},{value:"Notas de compatibilidade",id:"notas-de-compatibilidade",level:2},{value:"Vari\xe1veis de sele\xe7\xe3o de texto para m\xe9todos",id:"vari\xe1veis-de-sele\xe7\xe3o-de-texto-para-m\xe9todos",level:3},{value:"Incompatibilidades relacionadas com a norma XML",id:"incompatibilidades-relacionadas-com-a-norma-xml",level:3}],c={toc:l};function p(e){var{components:a}=e,t=n(e,["components"]);return(0,o.kt)("wrapper",r({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pode utilizar macro-comandos nos seus m\xe9todos. A utiliza\xe7\xe3o de macro-comandos poupa muito tempo durante a introdu\xe7\xe3o de c\xf3digo."),(0,o.kt)("h2",r({},{id:"o-que-\xe9-uma-macro"}),"O que \xe9 uma macro?"),(0,o.kt)("p",null,"Um macro-comando \xe9 uma sec\xe7\xe3o de c\xf3digo 4D que est\xe1 permanentemente acess\xedvel e que pode ser inserida em qualquer lugar nos seus m\xe9todos, qualquer que seja o tipo de base de dados aberta. As macros podem conter todos os tipos de texto, comandos e constantes 4D, bem como etiquetas especiais que s\xe3o substitu\xeddas no momento da inser\xe7\xe3o da macro por valores derivados do contexto do m\xe9todo. Por exemplo, uma macro pode conter a etiqueta ",(0,o.kt)("inlineCode",{parentName:"p"},"<method_name/>;")," no momento da inser\xe7\xe3o da macro, esta etiqueta ser\xe1 substitu\xedda pelo nome do m\xe9todo projeto atual."),(0,o.kt)("p",null,"As macros s\xe3o armazenadas num ou mais ficheiros de formato XML (texto). Podem ser colocados numa lista do editor de c\xf3digo; tamb\xe9m podem ser chamados atrav\xe9s do menu de contexto do editor ou atrav\xe9s da fun\xe7\xe3o de preenchimento autom\xe1tico."),(0,o.kt)("p",null,"As macros 4D s\xe3o escritas em formato XML. Pode usar o ficheiro macro padr\xe3o 4D como est\xe1 ou modific\xe1-lo."),(0,o.kt)("h2",r({},{id:"localiza\xe7\xe3o-das-macros"}),"Localiza\xe7\xe3o das macros"),(0,o.kt)("p",null,"4D carrega as macros a partir de uma pasta chamada ",(0,o.kt)("strong",{parentName:"p"},"Macros v2"),". As macros devem estar na forma de um ou mais ficheiros XML que s\xe3o colocados nesta pasta."),(0,o.kt)("p",null,'A pasta "Macros v2" pode ser localizada:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Na pasta 4D ativa da m\xe1quina. As macros s\xe3o ent\xe3o partilhadas para todas as bases de dados. ",(0,o.kt)("strong",{parentName:"li"},"Nota:")," a localiza\xe7\xe3o da pasta 4D ativa varia conforme a sistema operacional utilizado. Para mais informa\xe7\xf5es, consulte a descri\xe7\xe3o do comando ",(0,o.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html"}),"Get 4D folder")," no manual 4D ",(0,o.kt)("em",{parentName:"li"},"Linguagem"),"."),(0,o.kt)("li",{parentName:"ul"},"Junto ao ficheiro de estrutura da base de dados. As macros s\xf3 s\xe3o carregadas para esta estrutura."),(0,o.kt)("li",{parentName:"ul"},"Para componentes: na pasta ",(0,o.kt)("strong",{parentName:"li"},"Components")," da base de dados. As macros s\xf3 s\xe3o carregadas se o componente estiver instalado.")),(0,o.kt)("p",null,'Estas tr\xeas localiza\xe7\xf5es podem ser utilizadas simultaneamente: \xe9 poss\xedvel instalar uma pasta "Macros v2" em cada localiza\xe7\xe3o. As macros ser\xe3o carregadas na seguinte ordem: pasta 4D, ficheiro de estrutura, componente 1... componente X.'),(0,o.kt)("h2",r({},{id:"macros-predefinidas"}),"Macros predefinidas"),(0,o.kt)("p",null,'4D oferece um conjunto de macros padr\xe3o contendo, por exemplo, palavras-chave de fluxo de controlo. Estas macros est\xe3o inclu\xeddas no ficheiro predefinido "',(0,o.kt)("em",{parentName:"p"},"Macros.xml"),'", colocado na pasta "Macros v2" criada na pasta 4D ativa da m\xe1quina durante o arranque inicial de 4D.'),(0,o.kt)("p",null,"Pode modificar este ficheiro ou o conte\xfado da pasta posteriormente, como desejar (ver o par\xe1grafo seguinte). No caso de problemas com essa pasta, ela pode ser apagada e 4D a recriar\xe1 na pr\xf3xima inicializa\xe7\xe3o."),(0,o.kt)("h2",r({},{id:"adicionar-macros-personalizadas"}),"Adicionar macros personalizadas"),(0,o.kt)("p",null,'Pode adicionar macros personalizadas no ficheiro "Macros.xml" utilizando um editor de texto padr\xe3o ou atrav\xe9s de programa\xe7\xe3o. Tamb\xe9m \xe9 poss\xedvel adicionar ficheiros XML de macros personalizadas nesta pasta.'),(0,o.kt)("p",null,"No modo local, o arquivo de macros pode ser aberto enquanto se usa 4D. A lista de macros dispon\xedveis \xe9 atualizada em cada evento que ativa 4D. Por exemplo, \xe9 poss\xedvel colocar o editor de texto em primeiro plano, modificar o ficheiro de macros e depois voltar ao m\xe9todo: a nova macro fica ent\xe3o dispon\xedvel no editor de c\xf3digo."),(0,o.kt)("p",null,"As macros vazias ou incorretas n\xe3o s\xe3o mostradas."),(0,o.kt)("h3",r({},{id:"verificando-a-sintaxe-das-macros-personalizadas"}),"Verificando a sintaxe das macros personalizadas"),(0,o.kt)("p",null,"Os arquivos de macro-comandos de 4D devem estar em conformidade com o padr\xe3o XML. Isto significa mais particularmente que a declara\xe7\xe3o XML ",(0,o.kt)("inlineCode",{parentName:"p"},'<?xml version="1.0" ...?>')," e a declara\xe7\xe3o de documento ",(0,o.kt)("inlineCode",{parentName:"p"},'<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">')," s\xe3o obrigat\xf3rias no in\xedcio de um ficheiro macro para que este seja carregado. S\xe3o suportados os diferentes tipos de codifica\xe7\xe3o XML. No entanto, recomenda-se a utiliza\xe7\xe3o de uma codifica\xe7\xe3o compat\xedvel com Mac/PC (UTF-8). 4D fornece uma DTD que pode ser usada para validar os ficheiros macro. Este ficheiro encontra-se na seguinte localiza\xe7\xe3o:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows: \\Resources\\DTD\\macros.dtd"),(0,o.kt)("li",{parentName:"ul"},"Mac OS: :Contents:Resources:DTD:macros.dtd")),(0,o.kt)("p",null,"Se um ficheiro de macros n\xe3o contiver os comandos de declara\xe7\xe3o ou n\xe3o puder ser validado, n\xe3o \xe9 carregado."),(0,o.kt)("h2",r({},{id:"sintaxe-das-macros-4d"}),"Sintaxe das macros 4D"),(0,o.kt)("p",null,'As macros 4D s\xe3o constru\xeddas usando etiquetas XML personalizadas chamadas "elementos".'),(0,o.kt)("p",null,"Algumas etiquetas indicam o in\xedcio e o fim da defini\xe7\xe3o (etiquetas duplas do tipo ",(0,o.kt)("inlineCode",{parentName:"p"},"<tag> </tag>"),"), outras s\xe3o substitu\xeddas por valores de contexto de inser\xe7\xe3o (",(0,o.kt)("inlineCode",{parentName:"p"},"<tag/>"),")."),(0,o.kt)("p",null,"Em conformidade com as especifica\xe7\xf5es XML, algumas etiquetas de elementos podem incluir atributos. Salvo indica\xe7\xe3o em contr\xe1rio, estes atributos s\xe3o facultativos sendo utilizado um valor por defeito quando s\xe3o omissos. A sintaxe dos elementos com atributos \xe9 a seguinte:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Etiquetas duplas: ",(0,o.kt)("inlineCode",{parentName:"li"},'<tag attribute="value"> </macro>')),(0,o.kt)("li",{parentName:"ul"},"Etiquetas individuais: ",(0,o.kt)("inlineCode",{parentName:"li"},'<tag attribute="value"/>'))),(0,o.kt)("p",null,"If the element accepts several attributes, you can group them in the same line of command, separated by a space: ",(0,o.kt)("inlineCode",{parentName:"p"},'\\&#060;tag attribute1="value" attribute2="value" attribute3="value"... &#062;')),(0,o.kt)("p",null,"Eis a lista de etiquetas e o seu modo de utiliza\xe7\xe3o:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),(0,o.kt)("strong",{parentName:"th"},"Etiquetas dos elementos")),(0,o.kt)("th",r({parentName:"tr"},{align:null}),(0,o.kt)("strong",{parentName:"th"},"Descri\xe7\xe3o")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<macros> </macros>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"In\xedcio e fim do ficheiro macro (etiqueta obrigat\xf3ria).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<macro> </macro>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"In\xedcio e fim da defini\xe7\xe3o de uma macro e dos seus atributos.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("em",{parentName:"td"},"Atributos"),":")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"- name: Nome**da macro tal como aparece nos menus e nas listas do Editor de c\xf3digo (atributo obrigat\xf3rio).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"- type_ahead_text: Cadeia de caracteres*",(0,o.kt)("em",{parentName:"td"}," a introduzir para chamar a macro utilizando a fun\xe7\xe3o type-ahead (tamb\xe9m conhecida como autocomplete)"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),'- in_menu: Booleano que indica se a macro pode ser chamada utilizando o menu de contexto*. Valores = "true" (padr\xe3o) ou "false."')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),'- type_ahead: Booleano que indica se a macro pode ser chamada utilizando a fun\xe7\xe3o type-ahead (tamb\xe9m conhecida como autocomplete)*. Valores = "true" (padr\xe3o) ou "false."')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),'- method_event: Utilizado para acionar a chamada autom\xe1tica da macro em fun\xe7\xe3o da fase de tratamento atual de cada m\xe9todo (cria\xe7\xe3o, encerramento, etc.). Values = "on_load": A macro \xe9 acionada na abertura de cada m\xe9todo, "on_save": A macro \xe9 acionada quando cada m\xe9todo \xe9 guardado (fecho de um m\xe9todo modificado ou guardar utilizando o comando Ficheiro>Guardar, "on_create": A macro \xe9 acionada quando cada m\xe9todo \xe9 criado, "on_close": A macro \xe9 acionada quando cada m\xe9todo \xe9 encerrado.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),'"on_save" e "on_close" podem ser utilizados em conjunto --- por outras palavras, ambos os eventos s\xe3o gerados quando um m\xe9todo modificado \xe9 fechado. Por outro lado, "on_create" e "on_load" nunca s\xe3o gerados de forma consecutiva. Este atributo pode ser utilizado, por exemplo, para pr\xe9-formatar m\xe9todos quando estes s\xe3o criados (coment\xe1rios na \xe1rea do cabe\xe7alho) ou para registar informa\xe7\xf5es como a data e a hora em que s\xe3o encerrados.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),'- version: Utilizado para ativar o novo modo de suporte de sele\xe7\xf5es de texto para a macro (consulte a se\xe7\xe3o "Acerca da etiqueta ',(0,o.kt)("inlineCode",{parentName:"td"},"<method>"),' " abaixo). Para ativar este novo modo, passe o valor "2". Se omitir este atributo ou passar version="1", o modo anterior \xe9 mantido.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),'- in_toolbar: Booleano que indica se a macro deve estar presente no menu do bot\xe3o Macro da barra de ferramentas. Valores= "true" (padr\xe3o) ou "false".')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<selection/>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta substitu\xedda pelo texto selecionado quando a macro \xe9 inserida. A selec\xe7\xe3o pode estar vazia.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<text> </text>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"In\xedcio e fim do c\xf3digo que deve ser inserido no m\xe9todo. Um retorno de carro ser\xe1 adicionado antes e depois do c\xf3digo.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<method> </method>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),'In\xedcio e fim do nome do m\xe9todo do projeto e do seu par\xe2metro (opcional). O m\xe9todo \xe9 executado quando a macro \xe9 chamada. Pode passar um par\xe2metro na forma ("param1;param2;..."). This parameter will be received in the method using the variables $1, $2, etc. This parameter will be received in the method using the variables $1, $2, etc. For additional information about this tag, refer to the "About the ',(0,o.kt)("inlineCode",{parentName:"td"},"<method>"),' Tag" section below. Para obter informa\xe7\xf5es adicionais sobre esta etiqueta, consulte a se\xe7\xe3o "Sobre a etiqueta ',(0,o.kt)("inlineCode",{parentName:"td"},"<method>"),' " abaixo.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<caret/>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Localiza\xe7\xe3o do ponto de inser\xe7\xe3o no c\xf3digo ap\xf3s a macro ter sido inserida.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<user_4D/>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta substitu\xedda pelo nome do usu\xe1rio 4D atual.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<user_os/>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta substitu\xedda pelo nome do usu\xe1rio do sistema atual.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<method_name/>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Tag substitu\xedda pelo nome do m\xe9todo atual.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<method_path/>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta substitu\xedda pela sintaxe do caminho (como devolvido por ",(0,o.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1164.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"METHOD Get path"))," do m\xe9todo atual.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<date/>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Tag substitu\xedda pela data actual.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("em",{parentName:"td"},"Atributo"),":")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"- format: Formato 4D utilizado para mostrar a data. Se nenhum formato for definido, ser\xe1 usado o formato padr\xe3o. Valores = n\xfamero do formato 4D (0 a 8).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<time/>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Tag substitu\xedda pela hora atual.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("em",{parentName:"td"},"Atributo"),":")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"- format: Formato 4D utilizado para mostrar a hora. Se nenhum formato for definido, ser\xe1 usado o formato padr\xe3o. Valores = n\xfamero do formato 4D (0 a 6).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<clipboard/>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta substitu\xedda pelo conte\xfado da \xe1rea de transfer\xeancia.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("em",{parentName:"td"},"Atributo"),":")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null})),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"- index: \xc1rea de transfer\xeancia a ser colada. Valores = n\xfamero da \xe1rea de transfer\xeancia (0 a 9).")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As macros podem ser chamadas utilizando o menu de contexto do editor de c\xf3digo ou utilizando a fun\xe7\xe3o de antecipa\xe7\xe3o de digita\xe7\xe3o (ver a se\xe7\xe3o seguinte)."),(0,o.kt)("li",{parentName:"ul"},"Se quiser estar em conformidade com as especifica\xe7\xf5es da linguagem XML, n\xe3o deve utilizar caracteres alargados (caracteres acentuados, aspas, etc.).")),(0,o.kt)("p",null,"Aqui est\xe1 um exemplo de defini\xe7\xe3o de macro:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),(0,o.kt)("strong",{parentName:"th"},"Conte\xfado da macro")),(0,o.kt)("th",r({parentName:"tr"},{align:null}),(0,o.kt)("strong",{parentName:"th"},"Coment\xe1rios")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},'<?xml version="1.0"...?>')),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Declara\xe7\xe3o XML")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<!DOCTYPE macros SYSTEM>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Declara\xe7\xe3o do documento")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<macros>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"In\xedcio do ficheiro XML das macros")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},'<macro name="RecordLoop">')),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"In\xedcio da defini\xe7\xe3o e nome da macro")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"<text>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"In\xedcio do c\xf3digo da macro")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"For($i;1;Records in selection(",(0,o.kt)("inlineCode",{parentName:"td"},"<Selection/>"),"))"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"A etiqueta ",(0,o.kt)("inlineCode",{parentName:"td"},"<Selection/>")," ser\xe1 substitu\xedda pelo c\xf3digo selecionado no m\xe9todo 4D no momento da inser\xe7\xe3o da macro (por exemplo, um nome de tabela)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"SAVE RECORD(",(0,o.kt)("inlineCode",{parentName:"td"},"<Selection/>"),")"),(0,o.kt)("td",r({parentName:"tr"},{align:null}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"NEXT RECORD(",(0,o.kt)("inlineCode",{parentName:"td"},"<Selection/>"),")"),(0,o.kt)("td",r({parentName:"tr"},{align:null}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"End for"),(0,o.kt)("td",r({parentName:"tr"},{align:null}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"</text>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Fim do c\xf3digo macro")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"</macro>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Fim da defini\xe7\xe3o de macro")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"</macros>")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Fim do ficheiro XML das macros")))),(0,o.kt)("h2",r({},{id:"acerca-da-etiqueta-method"}),"Acerca da etiqueta ",(0,o.kt)("inlineCode",{parentName:"h2"},"<method>")),(0,o.kt)("p",null,"A etiqueta ",(0,o.kt)("inlineCode",{parentName:"p"},"<method>")," permite-lhe gerar e utilizar macro-comandos que executam m\xe9todos de projeto 4D. Isto permite aos programadores criar fun\xe7\xf5es sofisticadas que podem ser distribu\xeddas atrav\xe9s de macro-comandos associados a componentes. Por exemplo, a macro seguinte far\xe1 com que o m\xe9todo ",(0,o.kt)("em",{parentName:"p"},"MyMethod")," seja executado com o nome do m\xe9todo atual como par\xe2metro:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'<method>MyMethod("<method_name/>")</method>')),(0,o.kt)("p",null,"O c\xf3digo de um m\xe9todo chamado \xe9 executado num novo processo. Este processo \xe9 encerrado quando o m\xe9todo \xe9 executado."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"O processo da estrutura permanece congelado at\xe9 que a execu\xe7\xe3o do m\xe9todo chamado seja conclu\xedda. Deve certificar-se de que a execu\xe7\xe3o \xe9 r\xe1pida e que n\xe3o h\xe1 risco de bloquear a aplica\xe7\xe3o. Se isso ocorrer, use o comando ",(0,o.kt)("strong",{parentName:"p"},"Ctrl+F8")," (Windows) ou ",(0,o.kt)("strong",{parentName:"p"},"Command+F8"),' (Mac OS) para "matar" o processo.')),(0,o.kt)("h2",r({},{id:"chamada-de-macros"}),"Chamada de macros"),(0,o.kt)("p",null,"Por predefini\xe7\xe3o, as macros podem ser chamadas utilizando o menu de contexto ou a barra de ferramentas do Editor de c\xf3digo, a fun\xe7\xe3o de preenchimento autom\xe1tico ou uma lista espec\xedfica na parte inferior da janela do Editor de c\xf3digo."),(0,o.kt)("p",null,"Note-se que, para cada macro, \xe9 poss\xedvel restringir a possibilidade de a chamar utilizando o menu de contexto e/ou a fun\xe7\xe3o de preenchimento autom\xe1tico."),(0,o.kt)("h3",r({},{id:"menu-contextual-e-barra-de-ferramentas"}),"Menu contextual e barra de ferramentas"),(0,o.kt)("p",null,"Por predefini\xe7\xe3o, todas as macros podem ser chamadas atrav\xe9s do menu de contexto do Editor de c\xf3digo (utilizando o comando hier\xe1rquico ",(0,o.kt)("strong",{parentName:"p"},"Inserir macro")," ) ou o bot\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Macros")," da barra de ferramentas."),(0,o.kt)("p",null,"O atributo ",(0,o.kt)("em",{parentName:"p"},"in_menu")," da etiqueta ",(0,o.kt)("inlineCode",{parentName:"p"},"<macro>")," \xe9 utilizado para definir se a macro aparece ou n\xe3o neste menu."),(0,o.kt)("p",null,'No menu de contexto, as macros s\xe3o apresentadas pela ordem do ficheiro "Macros.xml" e de quaisquer ficheiros XML adicionais. Assim, \xe9 poss\xedvel alterar a ordem modificando estes arquivos.'),(0,o.kt)("h3",r({},{id:"autocompletar"}),"Autocompletar"),(0,o.kt)("p",null,"Por defeito, todas as macros s\xe3o acess\xedveis utilizando a fun\xe7\xe3o autocompletar (tamb\xe9m conhecida como type-ahead) (ver ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R2/code-editor/write-class-method"}),"Escrever um m\xe9todo"),"). O atributo ",(0,o.kt)("em",{parentName:"p"},"type_ahead")," da etiqueta ",(0,o.kt)("inlineCode",{parentName:"p"},"<macro>")," pode ser utilizado para excluir uma macro deste tipo de opera\xe7\xe3o."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nota:")," Se a macro contiver a etiqueta ",(0,o.kt)("inlineCode",{parentName:"p"},"<selection/>")," , n\xe3o aparecer\xe1 na janela pop-up de preenchimento autom\xe1tico."),(0,o.kt)("h3",r({},{id:"lista-do-editor-de-c\xf3digo"}),"Lista do editor de c\xf3digo"),(0,o.kt)("p",null,"Pode apresentar as suas macros numa lista do Editor de C\xf3digo (ver ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R2/code-editor/write-class-method"}),"Escrever um m\xe9todo"),"). Basta fazer duplo clique no nome de uma macro na lista para a chamar. N\xe3o \xe9 poss\xedvel excluir uma macro espec\xedfica desta lista."),(0,o.kt)("h2",r({},{id:"notas-de-compatibilidade"}),"Notas de compatibilidade"),(0,o.kt)("p",null,"O suporte de macro pode mudar de uma vers\xe3o de 4D para outra. Para manter as diferentes vers\xf5es compat\xedveis enquanto mant\xe9m suas personaliza\xe7\xf5es, 4D n\xe3o remove nenhuma vers\xe3o anterior. Se quiser utilizar as \xfaltimas funcionalidades dispon\xedveis, tem de adaptar a sua vers\xe3o em conformidade."),(0,o.kt)("h3",r({},{id:"vari\xe1veis-de-sele\xe7\xe3o-de-texto-para-m\xe9todos"}),"Vari\xe1veis de sele\xe7\xe3o de texto para m\xe9todos"),(0,o.kt)("p",null,"Recomenda-se a gest\xe3o das selec\xe7\xf5es de texto atrav\xe9s dos comandos ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page997.html"}),"GET MACRO PARAMETER")," e ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page998.html"}),"SET MACRO PARAMETER")," . Estes comandos podem ser utilizados para ultrapassar o particionamento dos espa\xe7os de execu\xe7\xe3o do projeto/componente anfitri\xe3o, permitindo assim a cria\xe7\xe3o de componentes dedicados \xe0 gest\xe3o de macros. Para ativar este modo para uma macro, \xe9 necess\xe1rio declarar o atributo Vers\xe3o com o valor 2 no elemento Macro. Neste caso, 4D n\xe3o gere mais as vari\xe1veis predefinidas _textSel,_textReplace, etc. e os comandos ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page997.html"}),"GET MACRO PARAMETER")," e ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page998.html"}),"SET MACRO PARAMETER")," s\xe3o utilizados. Este atributo deve ser declarado da seguinte forma:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'<macro name="MyMacro" version="2">'),(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"p"},"--- Text of the macro ---"),(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"p"},"</macro>")),(0,o.kt)("p",null,"Se este atributo n\xe3o for indicado, \xe9 mantido o modo anterior."),(0,o.kt)("h3",r({},{id:"incompatibilidades-relacionadas-com-a-norma-xml"}),"Incompatibilidades relacionadas com a norma XML"),(0,o.kt)("p",null,"Devem ser observadas regras de sintaxe rigorosas para que os arquivos de macros respeitem a norma XML. Isto pode levar a incompatibilidades com o c\xf3digo das macros criadas com vers\xf5es anteriores e impedir o carregamento de ficheiros XML. As principais causas de mau funcionamento s\xe3o as seguintes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Coment\xe1rios do tipo "// my comment", permitidos dentro de elementos ',(0,o.kt)("inlineCode",{parentName:"li"},"<macro>")," em vers\xf5es anteriores de 4D, n\xe3o s\xe3o compat\xedveis com a sintaxe XML. As linhas de coment\xe1rios devem respeitar a forma normalizada ",(0,o.kt)("inlineCode",{parentName:"li"},'"\x3c!-- o meu coment\xe1rio --\x3e"')," ."),(0,o.kt)("li",{parentName:"ul"},"Os s\xedmbolos ",(0,o.kt)("inlineCode",{parentName:"li"},"<>")," utilizados mais particularmente para nomes de objectos entre processos devem ser codificados. Por exemplo, a vari\xe1vel ",(0,o.kt)("inlineCode",{parentName:"li"},"<>params")," deve ser escrita ",(0,o.kt)("inlineCode",{parentName:"li"},"&lt;>params"),"."),(0,o.kt)("li",{parentName:"ul"},"A etiqueta de declara\xe7\xe3o inicial ",(0,o.kt)("inlineCode",{parentName:"li"},"<macros>")," podia ser omitida em vers\xf5es anteriores de 4D. Agora \xe9 obrigat\xf3rio; caso contr\xe1rio, o ficheiro n\xe3o ser\xe1 carregado.")))}p.isMDXComponent=!0}}]);