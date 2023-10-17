"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79228],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var o=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,g=u["".concat(l,".").concat(c)]||u[c]||m[c]||n;return a?o.createElement(g,i(i({ref:t},p),{},{components:a})):o.createElement(g,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<n;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},775998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});a(667294);var o=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"dropdownListOverview",title:"Lista suspensa ou drop down"},s=void 0,l={unversionedId:"FormObjects/dropdownListOverview",id:"version-19/FormObjects/dropdownListOverview",title:"Lista suspensa ou drop down",description:"Listas drop-down s\xe3o objetos que permitem que os usu\xe1rios selecionem de uma lista. Gerenciar os itens exibidos na lista drop down usando um array, uma lista de escolha ou uma a\xe7\xe3o padr\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/FormObjects/dropdownList_Overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/dropdownListOverview",permalink:"/docs/pt/19/FormObjects/dropdownListOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FdropdownList_Overview.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"dropdownListOverview",title:"Lista suspensa ou drop down"},sidebar:"docs",previous:{title:"Combo Box",permalink:"/docs/pt/19/FormObjects/comboBoxOverview"},next:{title:"\xc1rea de grupo",permalink:"/docs/pt/19/FormObjects/groupBox"}},d={},p=[{value:"Tipos de listas pendentes",id:"tipos-de-listas-pendentes",level:2},{value:"Manuseamento de listas pendentes",id:"manuseamento-de-listas-pendentes",level:2},{value:"Utiliza\xe7\xe3o de um objecto",id:"utiliza\xe7\xe3o-de-um-objecto",level:3},{value:"Usar um array",id:"usar-um-array",level:3},{value:"Utilizar uma lista de sele\xe7\xe3o",id:"utilizar-uma-lista-de-sele\xe7\xe3o",level:3},{value:"Valor do item selecionado ou Refer\xeancia do item selecionado",id:"valor-do-item-selecionado-ou-refer\xeancia-do-item-selecionado",level:4},{value:"Se usar uma lista hier\xe1rquica, s\xf3 o primeiro n\xedvel \xe9 mostrado e pode ser selecionado.",id:"se-usar-uma-lista-hier\xe1rquica-s\xf3-o-primeiro-n\xedvel-\xe9-mostrado-e-pode-ser-selecionado",level:3},{value:"Usar uma a\xe7\xe3o padr\xe3o",id:"usar-uma-a\xe7\xe3o-padr\xe3o",level:3},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}],m={toc:p};function u(e){var{components:t}=e,i=n(e,["components"]);return(0,o.kt)("wrapper",r({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Listas drop-down s\xe3o objetos que permitem que os usu\xe1rios selecionem de uma lista. Gerenciar os itens exibidos na lista drop down usando um array, uma lista de escolha ou uma a\xe7\xe3o padr\xe3o."),(0,o.kt)("p",null,'Em macOS, listas drop down s\xe3o tamb\xe9m chamadas de "menu pop up" Ambos os nomes referem aos mesmos objetos. Ambos os nomes referem aos mesmos objetos. Como no exemplo abaixo, a apar\xeancia desses objetos podem diferenciar levemente de acordo com a plataforma:'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(355506).Z,width:"458",height:"158"})),(0,o.kt)("h2",r({},{id:"tipos-de-listas-pendentes"}),"Tipos de listas pendentes"),(0,o.kt)("p",null,"Pode criar diferentes tipos de listas pendentes com diferentes funcionalidades. Para definir um tipo, selecione os valores adequados ",(0,o.kt)("strong",{parentName:"p"},"Tipo de express\xe3o")," e ",(0,o.kt)("strong",{parentName:"p"}," Tipo de dados")," na lista Propriedade ou utilize o seu equivalente JSON."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Funcionalidades"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Tipo de express\xe3o"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Tipo de dados"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Defini\xe7\xe3o JSON"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Constru\xeddo sobre uma colec\xe7\xe3o"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Numeric, Text, Date, ou Time"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: object")," + ",(0,o.kt)("inlineCode",{parentName:"td"},"numberFormat: <format>")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"textFormat: <format>")," ou ",(0,o.kt)("inlineCode",{parentName:"td"},"dateFormat: <format>")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"timeFormat: <format>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Array"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Constru\xeddo sobre um array"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Array"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Numeric, Text, Date, ou Time"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: arrayNumber")," ou ",(0,o.kt)("inlineCode",{parentName:"td"},"arrayText")," ou ",(0,o.kt)("inlineCode",{parentName:"td"},"arrayDate")," ou ",(0,o.kt)("inlineCode",{parentName:"td"},"arrayTime"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Lista de op\xe7\xf5es guardada como valor"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Constru\xeddo com base numa lista de op\xe7\xf5es (\u201cpadr\xe3o\u201d)"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Lista"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Valor do item seleccionado"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: text")," + ",(0,o.kt)("inlineCode",{parentName:"td"},"saveAs: value"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Salvar como"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Constru\xeddo sobre numa lista de escolha. A posi\xe7\xe3o do item \xe9 guardada"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Lista"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Refer\xeancia do item seleccionado"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: integer")," + ",(0,o.kt)("inlineCode",{parentName:"td"},"saveAs: reference"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Lista de sele\xe7\xe3o hier\xe1rquica"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Pode apresentar conte\xfados hier\xe1rquicos"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Lista"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Refer\xeancia da lista"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"dataSourceTypeHint: integer"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),"A\xe7\xe3o padr\xe3o"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Criado automaticamente pela a\xe7\xe3o"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("em",{parentName:"td"},"any")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("em",{parentName:"td"},"any except List reference")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"any definition + ",(0,o.kt)("inlineCode",{parentName:"td"},"action: <action>")," (+ ",(0,o.kt)("inlineCode",{parentName:"td"},"focusable: false")," for actions applying to other areas)")))),(0,o.kt)("h2",r({},{id:"manuseamento-de-listas-pendentes"}),"Manuseamento de listas pendentes"),(0,o.kt)("h3",r({},{id:"utiliza\xe7\xe3o-de-um-objecto"}),"Utiliza\xe7\xe3o de um objecto"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Esta funcionalidade s\xf3 est\xe1 dispon\xedvel em projectos 4D.")),(0,o.kt)("p",null,"An ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/Concepts/object"}),"object")," encapsulating a ",(0,o.kt)("a",r({parentName:"p"},{href:"Concepts/dt_collection"}),"collection")," can be used as the data source of a drop-down list. O objeto deve conter as seguintes propriedades:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"values")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Obrigat\xf3rio - Cole\xe7\xe3o de valores escalares. Todos os valores devem ser do mesmo tipo. Tipos suportados:",(0,o.kt)("li",null,"strings"),(0,o.kt)("li",null,"n\xfameros"),(0,o.kt)("li",null,"datas"),(0,o.kt)("li",null,"horas"),"Se estiver vazia ou n\xe3o for definida, a lista pendente est\xe1 vazia")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"index")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Index of the currently selected item (value between 0 and ",(0,o.kt)("inlineCode",{parentName:"td"},"collection.length-1"),"). If you set -1, ",(0,o.kt)("inlineCode",{parentName:"td"},"currentValue")," is displayed as a placeholder string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"currentValue")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"igual a Colec\xe7\xe3o"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Item atualmente selecionado (utilizado como valor de marcador de posi\xe7\xe3o se definido por c\xf3digo)")))),(0,o.kt)("p",null,"Se o objeto contiver outras propriedades, estas s\xe3o ignoradas."),(0,o.kt)("p",null,"Objetos lista drop down s\xe3o iniciados ao carregar uma lista de valores em um array. Pode fazer isso de v\xe1rias maneiras:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter a list of default values in the object properties by selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"\\&#060;Static List&#062;")," in the ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesDataSource"}),"Data Source")," theme of the Property List. Os valores por defeito s\xe3o carregados automaticamente para um objeto.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Executar c\xf3digo que cria o objeto e as suas propriedades. For example, if "myList" is the ',(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesObject#variable-or-expression"}),"variable")," associated to the drop-down list, you can write in the ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/Events/onLoad"}),"On Load")," form event:"))),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'// Form.myDrop \xe9 a datasource do objeto do formul\xe1rio\n\nForm.myDrop:=New object\nForm.myDrop.values:=New collection("apples"; "nuts"; "pears"; "oranges"; "carrots")\nForm.myDrop.index:=-1 //currentValue \xe9 um placeholder\nForm.myDrop.currentValue:="Select a fruit" \n')),(0,o.kt)("p",null,"The drop-down list is displayed with the placeholder string:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(423590).Z,width:"230",height:"33"})),(0,o.kt)("p",null,"Depois de o utilizador selecionar um valor:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(783878).Z,width:"234",height:"116"})),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'Form.myDrop.values // ["apples","nuts","pears","oranges","carrots"]\nForm.myDrop.currentValue //"oranges" Form.myDrop.index //3\n')),(0,o.kt)("h3",r({},{id:"usar-um-array"}),"Usar um array"),(0,o.kt)("p",null,"Um ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/Concepts/arrays"}),"array")," \xe9 uma lista de valores na mem\xf3ria que s\xe3o referenciados pelo nome do array. Uma lista drop down exibe um array como lista de valores quando clicar nela."),(0,o.kt)("p",null,"Para inicializar o array associado \xe0 lista pendente, pode:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter a list of default values in the object properties by selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"\\&#060;Static List&#062;")," in the ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesDataSource"}),"Data Source")," theme of the Property List. Os valores padr\xe3o s\xe3o carregados em um array autom\xe1tico. Pode fazer uma refer\xeancia ao array usando o nome da vari\xe1vel associado com o objeto.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Antes que o objeto seja exibido, execute um c\xf3digo que atribua valores aos elementos do array. Por exemplo:"))),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  ARRAY TEXT($aCities;6)\n  $aCities{1}:="Philadelphia"\n  $aCities{2}:="Pittsburg"\n  $aCities{3}:="Grand Blanc"\n  $aCities{4}:="Bad Axe"\n  $aCities{5}:="Frostbite Falls"\n  $aCities{6}:="Green Bay" \n')),(0,o.kt)("p",null,"Neste caso, o nome da vari\xe1vel associada ao objeto de formul\xe1rio deve ser ",(0,o.kt)("em",{parentName:"p"},"$aCities"),". Esse c\xf3digo pode ser colocado no m\xe9todo formul\xe1rio e executado quando o evento de formul\xe1rio ",(0,o.kt)("inlineCode",{parentName:"p"},"On Load")," acontecer."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Antes que o objeto seja exibido, carregue os valores para uma lista em um array usando o comando ",(0,o.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page288.html"}),"LIST TO ARRAY"),". Por exemplo:")),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'   LIST TO ARRAY("Cities";$aCities)\n')),(0,o.kt)("p",null,"Neste caso tamb\xe9m o nome da vari\xe1vel asociada al objeto del formulario debe ser ",(0,o.kt)("em",{parentName:"p"},"$aCities"),". Este c\xf3digo pode ser executado ao inv\xe9s das senten\xe7as de atribui\xe7\xe3o mostradas anteriormente."),(0,o.kt)("p",null,"Se precisar salvar as escolhas do usu\xe1rio em um campo, precisa usar uma declara\xe7\xe3o de atribui\xe7\xe3o que rode depois que o registro seja aceito. O c\xf3digo poderia ser assim:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  Caso de\n    :(Form event=On Load)\n       LIST TO ARRAY("Cities";aCities)\n       If(Record number([People])<0) `novo registo\n          aCities:=3 `apresentar um valor predefinido\n       Else `registo existente, apresentar valor armazenado\n          aCities:=Find in array(aCities;City)\n       End if\n    :(Form event=On Clicked) `o utilizador modificou a selec\xe7\xe3o\n       City:=aCities{aCities} `o campo recebe um novo valor\n    :(Form event=On Validate)\n       City:=aCities{aCities}\n    :(Form event=On Unload)\n       CLEAR VARIABLE(aCities)\n End case\n')),(0,o.kt)("p",null,"Deve selecionar cada event que teste nas estruturas Case. Os arrays sempre cont\xe9m um n\xfamero finito de elementos. A lista de elementos \xe9 din\xe2mica e pode ser modificada por um m\xe9todo. Itens em um array podem ser modificados, ordenados e terem itens adicionados."),(0,o.kt)("h3",r({},{id:"utilizar-uma-lista-de-sele\xe7\xe3o"}),"Utilizar uma lista de sele\xe7\xe3o"),(0,o.kt)("p",null,"Se quiser usar uma lista drop down para gerenciar os valores de um campo ou lista vari\xe1vel, 4D permite referir o campo ou vari\xe1vel diretamente como fonte de dados do objeto. Isso facilita gerenciar vari\xe1veis/campos listados."),(0,o.kt)("p",null,'Por exemplo, no caso de um campo "Cor" que s\xf3 possa conter os valores "White", "Blue", "Green" ou "Red", agora \xe9 poss\xedvel criar uma lista que contenha esses valores e associe-os a um objeto emergente menu que fa\xe7a refer\xeancia ao campo "Color". 4D ent\xe3o se encarrega automaticamente de gerenciar o input e exibir os valores atuais no formul\xe1rio.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Se usar uma lista hier\xe1rquica, s\xf3 o primeiro n\xedvel \xe9 mostrado e pode ser selecionado. Se usar uma lista hier\xe1rquica, s\xf3 o primeiro n\xedvel \xe9 mostrado e pode ser selecionado.")),(0,o.kt)("p",null,"Para associar um menu pop up/lista drop down ou um combo box com um campo ou vari\xe1vel, pode digitar o nome do campo ou vari\xe1vel diretamente no campo ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesObject#variable-or-expression"}),"Vari\xe1vel ou Express\xe3o")," do objeto na Lista Propriedade."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"N\xe3o \xe9 poss\xedvel combinar esse princ\xedpio com o uso de um array para iniciar o objeto. Se digitar um nome de campo na \xe1rea Nome da vari\xe1vel, deve usar uma lista de sele\xe7\xe3o.")),(0,o.kt)("p",null,"Quando o formul\xe1rio for executado, 4D automaticamente gerencia o menu pop up ou com box durante a entrada ou a visualiza\xe7\xe3o: quando um usu\xe1rio escolher um valor, \xe9 salvo no campo; esse valor de campo \xe9 mostrado no menu pop up quando o formul\xe1rio for exibido:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(398287).Z,width:"755",height:"171"})),(0,o.kt)("h4",r({},{id:"valor-do-item-selecionado-ou-refer\xeancia-do-item-selecionado"}),"Valor do item selecionado ou Refer\xeancia do item selecionado"),(0,o.kt)("p",null,"Quando associar um menu pop up/lista drop down com uma lista de escolhas e com um campo, pode usar a propriedade ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesDataSource#save-as"}),"Save as Value/Reference"),". Essa op\xe7\xe3o permite otimizar o tamanho dos dados salvos."),(0,o.kt)("h3",r({},{id:"se-usar-uma-lista-hier\xe1rquica-s\xf3-o-primeiro-n\xedvel-\xe9-mostrado-e-pode-ser-selecionado"}),"Se usar uma lista hier\xe1rquica, s\xf3 o primeiro n\xedvel \xe9 mostrado e pode ser selecionado."),(0,o.kt)("p",null,"A hierarchical drop-down list has a sublist associated with each item in the list. Eis um exemplo de uma lista pendente hier\xe1rquica:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(441069).Z,width:"248",height:"177"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Nos formul\xe1rios, as listas pendentes hier\xe1rquicas est\xe3o limitadas a dois n\xedveis.")),(0,o.kt)("p",null,"You can assign the hierarchical choice list to the drop-down list object using the ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesDataSource#choice-list"}),"Choice List")," field of the Property List."),(0,o.kt)("p",null,"You manage hierarchical drop-down lists using the ",(0,o.kt)("strong",{parentName:"p"},"Hierarchical Lists")," commands of the 4D Language. Todos os comandos que suportam a sintaxe ",(0,o.kt)("inlineCode",{parentName:"p"},'(*; "name")')," podem ser utilizados com listas pendentes hier\xe1rquicas, por exemplo, ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page633.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"List item parent")),"."),(0,o.kt)("h3",r({},{id:"usar-uma-a\xe7\xe3o-padr\xe3o"}),"Usar uma a\xe7\xe3o padr\xe3o"),(0,o.kt)("p",null,"Pode atribuir uma a\xe7\xe3o padr\xe3o a menu pop up ou lista drop down (",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesAction#standard-action"}),"Action")," tema da Lista de Propriedades). Esta funcionalidade \xe9 suportada nos seguintes contextos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Utiliza\xe7\xe3o da a\xe7\xe3o padr\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"gotoPage"),". In this case, 4D will automatically display the ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormEditor/forms#form-pages"}),"page of the form")," that corresponds to the number of the item that is selected. For example, if the user selects the 3rd item, 4D will display the third page of the current form (if it exists). At runtime, by default the drop-down list displays the page numbers (1, 2...).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Por exemplo, se selecionar a a\xe7\xe3o padr\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor"),", no tempo de execu\xe7\xe3o o objeto mostrar\xe1 uma lista autom\xe1tica de cores de fundo. Essa funcionalidade exige que:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"a styled text area (",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/19/FormObjects/writeProAreaOverview"}),"4D Write Pro area")," or ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/19/FormObjects/inputOverview"}),"input")," with ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/19/FormObjects/propertiesText#multi-style"}),"multistyle")," property) is present in the form as the standard action target."),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/19/FormObjects/propertiesEntry#focusable"}),"focusable")," property is not set to the drop-down list. At runtime the drop-down list will display an automatic list of values, e.g. background colors. Pode substituir esta lista autom\xe1tica atribuindo al\xe9m disso uma lista de sele\xe7\xe3o na qual cada elemento tenha atribu\xedda uma a\xe7\xe3o padr\xe3o personalizada.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Esta funcionalidade n\xe3o pode ser utilizada com uma lista pendente hier\xe1rquica.")),(0,o.kt)("h2",r({},{id:"propriedades-compat\xedveis"}),"Propriedades compat\xedveis"),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesDisplay#alpha-format"}),"Formato Alfa")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesText#bold"}),"Negrita")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Inferior")," - ","[","Estilo del bot\xf3n","]","(properties_TextAndPicture. md#button-style) - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesDataSource#choice-list"}),"Lista de opciones")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesObject#css-class"}),"Clase")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesDisplay#date-format"}),"Formato de fecha")," - ","[","Tipo de expresi\xf3n","]","(properties_Object. md#expression-type) - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesEntry#focusable"}),"Focusable")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesText#font"}),"Fuente")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesText#font-color"}),"Color de la fuente")," - ","[","Tama\xf1o de la fuente","]","(properties_Text. md#font-size) - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#height"}),"Altura")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesHelp#help-tip"}),"Consejo de ayuda")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Tama\xf1o horizontal")," - ","[","Italic","]","(properties_Text. md#italic) - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#left"}),"Izquierda")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesDisplay#not-rendered"}),"No renderizado")," - ","[","Nombre del objeto","]","(properties_Object. md#object-name) - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#right"}),"Derecha")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesAction#standard-action"}),"Acci\xf3n est\xe1ndar")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesDataSource#save-as"}),"Guardar como")," - ","[","Formato de tiempo","]","(properties_Display. md#time-format) - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#top"}),"Superior")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesText#underline"}),"Subrayado")," - ","[","Variable o expresi\xf3n","]","(properties_Object. md#variable-or-expression) - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Tama\xf1o vertical")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesDisplay#visibility"}),"Visibilidad")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#width"}),"Ancho")))}u.isMDXComponent=!0},423590:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAAAhCAYAAADNh9e3AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAiJJREFUeF7t2M2xgyAUhmF7spcsaIZCsrGBrFKBRaSAdGAHXA9qggiKeud6Zu67eGb4OUYWfIGx6rrOAdCFYAIKEUxAIYIJKPQJ5uPxAHChbDDf7zeACxBMQCGCCShEMAGFCCagEMEEFCKYgELlwWyMq6pqZFwTzi00zlS1s21q7g9Ma62ta1PzOa119ZXrBkZlwfQbNghj37fN2E46E8yzoZbnK2dW11fi4j8X/GtlwZQTaNfpc3UwfyNQBBPXKQum36SVq20bjI38aRpfcaNNnawRrbP1NC6n3PCeqV+ZZqz7asza/Pz5Yb3DWoyp+zF5d7S2WX9qz38ntQ6g1PP5TI6L3FxhMMU3RN9rYrTJ+5M1DMN8s8c1w+8twx7VZ+Xq4nHph+9JzU/9XBs45vV6udvt5u73+2JOxmROauK5HcEcjaefD+fsJAxPl2BT52r8eOoj0kYgZh+hUnXx83v6uTZwXCqca6EU+4PZa21/LSwNV67mSDBnz8iJm6qLn9/Tz7WBc8JwboVSlAWzscEGDa+gsnm3rqO5mgNX2fAjlA9pqi5+Pu4P7/1cx/0JHK411QbOm8K5FUpReGLKJo2uotOcD0g8F23qZM3yd6ewfD7whO/xhlD5udo4c+jE7IXXYdP/TiaM+XUAx0ggt0IpCoMJ4C8RTEAhggkoRDABhQgmoBDBBBQimIBCBBNQiGACCq0GE8B1ksEEoAfBBNTp3A89HOoPkDBgIQAAAABJRU5ErkJggg=="},783878:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,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"},355506:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/popupDropdown_appearance-be4e6872edee7cab175cf9702b8731e4.png"},398287:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/popupDropdown_choiceList-f3bc797fde9f06db0a718cbc323d678b.png"},441069:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);