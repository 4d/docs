"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(a),u=o,h=p["".concat(d,".").concat(u)]||p[u]||c[u]||r;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},26951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const i={id:"creating-using-macros",title:"Criar e utilizar macros"},l=void 0,d={unversionedId:"code-editor/creating-using-macros",id:"version-20/code-editor/creating-using-macros",title:"Criar e utilizar macros",description:"Pode utilizar macro-comandos nos seus m\xe9todos. A utiliza\xe7\xe3o de macro-comandos poupa muito tempo durante a introdu\xe7\xe3o de c\xf3digo.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/code-editor/creating-using-macros.md",sourceDirName:"code-editor",slug:"/code-editor/creating-using-macros",permalink:"/docs/pt/code-editor/creating-using-macros",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20code-editor%2Fcreating-using-macros.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"creating-using-macros",title:"Criar e utilizar macros"},sidebar:"docs",previous:{title:"Editor de m\xe9todo",permalink:"/docs/pt/code-editor/write-class-method"},next:{title:"Etiquetas de transforma\xe7\xe3o",permalink:"/docs/pt/Tags/tags"}},m={},s=[{value:"O que \xe9 uma macro?",id:"o-que-\xe9-uma-macro",level:2},{value:"Localiza\xe7\xe3o das macros",id:"localiza\xe7\xe3o-das-macros",level:2},{value:"Macros predefinidas",id:"macros-predefinidas",level:2},{value:"Adding customized macros",id:"adding-customized-macros",level:2},{value:"Verificando a sintaxe das macros personalizadas",id:"verificando-a-sintaxe-das-macros-personalizadas",level:3},{value:"Sintaxe das macros 4D",id:"sintaxe-das-macros-4d",level:2},{value:"Acerca da etiqueta <code>&lt;method&gt;</code>",id:"acerca-da-etiqueta-method",level:2},{value:"Chamada de macros",id:"chamada-de-macros",level:2},{value:"Context menu and toolbar",id:"context-menu-and-toolbar",level:3},{value:"Autocompletar",id:"autocompletar",level:3},{value:"Lista do editor de c\xf3digo",id:"lista-do-editor-de-c\xf3digo",level:3},{value:"Notas de compatibilidade",id:"notas-de-compatibilidade",level:2},{value:"Vari\xe1veis de sele\xe7\xe3o de texto para m\xe9todos",id:"vari\xe1veis-de-sele\xe7\xe3o-de-texto-para-m\xe9todos",level:3},{value:"Incompatibilidades relacionadas com a norma XML",id:"incompatibilidades-relacionadas-com-a-norma-xml",level:3}],c={toc:s};function p(e){var{components:t}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",o({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pode utilizar macro-comandos nos seus m\xe9todos. A utiliza\xe7\xe3o de macro-comandos poupa muito tempo durante a introdu\xe7\xe3o de c\xf3digo."),(0,n.kt)("h2",o({},{id:"o-que-\xe9-uma-macro"}),"O que \xe9 uma macro?"),(0,n.kt)("p",null,"Um macro-comando \xe9 uma sec\xe7\xe3o de c\xf3digo 4D que est\xe1 permanentemente acess\xedvel e que pode ser inserida em qualquer lugar nos seus m\xe9todos, qualquer que seja o tipo de base de dados aberta. Macros can contain all types of 4D text, commands and constants, as well as special tags which are replaced at the time of macro insertion by values derived from the method context. For instance, a macro may contain the tag ",(0,n.kt)("inlineCode",{parentName:"p"},"<method_name/>;")," at the time of macro insertion, this tag will be replaced by the name of the current project method."),(0,n.kt)("p",null,"Macros are stored in one or more XML format (text) file(s). They can be placed in a Code Editor list; they can also be called using the context menu of the editor or using the autocomplete function."),(0,n.kt)("p",null,"As macros 4D s\xe3o escritas em formato XML. You can use the 4D default macro file as is or modify it."),(0,n.kt)("h2",o({},{id:"localiza\xe7\xe3o-das-macros"}),"Localiza\xe7\xe3o das macros"),(0,n.kt)("p",null,"4D loads the macros from a folder named ",(0,n.kt)("strong",{parentName:"p"},"Macros v2"),". Macros must be in the form of one or more XML files that are placed in this folder."),(0,n.kt)("p",null,'A pasta "Macros v2" pode ser localizada:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Na pasta 4D ativa da m\xe1quina. As macros s\xe3o ent\xe3o partilhadas para todas as bases de dados. ",(0,n.kt)("strong",{parentName:"li"},"Note:")," The location of the active 4D folder varies according to the operating system used. For more information, refer to the description of the ",(0,n.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html"}),"Get 4D folder")," command in the 4D ",(0,n.kt)("em",{parentName:"li"},"Language Reference")," manual."),(0,n.kt)("li",{parentName:"ul"},"Junto ao ficheiro de estrutura da base de dados. As macros s\xf3 s\xe3o carregadas para esta estrutura."),(0,n.kt)("li",{parentName:"ul"},"For components: in the ",(0,n.kt)("strong",{parentName:"li"},"Components")," folder of the database. Macros are then only loaded if the component is installed.")),(0,n.kt)("p",null,'These three locations can be used simultaneously: it is possible to install a "Macros v2" folder in each location. The macros will be loaded in the following order: 4D folder, structure file, component 1... component X.'),(0,n.kt)("h2",o({},{id:"macros-predefinidas"}),"Macros predefinidas"),(0,n.kt)("p",null,'4D offers a set of default macros containing, for example, control flow keywords. These macros are included in the default "',(0,n.kt)("em",{parentName:"p"},"Macros.xml"),'" file, placed in the "Macros v2" folder that is created in the active 4D folder of the machine during the initial startup of 4D.'),(0,n.kt)("p",null,"You can modify this file or the contents of the folder subsequently as desired (see the following paragraph). In the event of problems with this folder, it can be deleted and 4D will re-create it on the next startup."),(0,n.kt)("h2",o({},{id:"adding-customized-macros"}),"Adding customized macros"),(0,n.kt)("p",null,'You can add customized macros in the "Macros.xml" file using a standard text editor or by programming. You can also add XML files of customized macros in this folder.'),(0,n.kt)("p",null,"In local mode, the macros file can be open while using 4D. The list of available macros is updated on each event activating 4D. For instance, it is possible to bring the text editor to the foreground, modify the macro file, then return to the method: the new macro is then available in the Code Editor."),(0,n.kt)("p",null,"As macros vazias ou incorretas n\xe3o s\xe3o mostradas."),(0,n.kt)("h3",o({},{id:"verificando-a-sintaxe-das-macros-personalizadas"}),"Verificando a sintaxe das macros personalizadas"),(0,n.kt)("p",null,"The macro-command files of 4D must be in conformity with the XML standard. This means more particularly that XML declaration ",(0,n.kt)("inlineCode",{parentName:"p"},'<?xml version="1.0" ...?>')," and document declaration ",(0,n.kt)("inlineCode",{parentName:"p"},'<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">')," statements are mandatory at the beginning of a macro file in order for it to be loaded. The different types of XML encoding are supported. However, it is recommended to use encoding that is Mac/PC (UTF-8) compatible. 4D provides a DTD that can be used to validate the macro files. Este ficheiro encontra-se na seguinte localiza\xe7\xe3o:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows: \\Resources\\DTD\\macros.dtd"),(0,n.kt)("li",{parentName:"ul"},"Mac OS: :Contents:Resources:DTD:macros.dtd")),(0,n.kt)("p",null,"If a macros file does not contain the declaration statements or cannot be validated, it is not loaded."),(0,n.kt)("h2",o({},{id:"sintaxe-das-macros-4d"}),"Sintaxe das macros 4D"),(0,n.kt)("p",null,'4D macros are built using customized XML tags called "elements."'),(0,n.kt)("p",null,"Some tags indicate the start and end of the definition (double tags of the type ",(0,n.kt)("inlineCode",{parentName:"p"},"<tag> </tag>"),"), others are replaced by insertion context values (",(0,n.kt)("inlineCode",{parentName:"p"},"<tag/>"),")."),(0,n.kt)("p",null,"In conformity with XML specifications, some element tags can include attributes. Unless otherwise indicated, these attributes are optional and a default value is used when they are omitted. The syntax of elements with attributes is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Double tags: ",(0,n.kt)("inlineCode",{parentName:"li"},'<tag attribute="value"> </macro>')),(0,n.kt)("li",{parentName:"ul"},"Single tags: ",(0,n.kt)("inlineCode",{parentName:"li"},'<tag attribute="value"/>'))),(0,n.kt)("p",null,"If the element accepts several attributes, you can group them in the same line of command, separated by a space: ",(0,n.kt)("inlineCode",{parentName:"p"},'\\&#060;tag attribute1="value" attribute2="value" attribute3="value"... &#062;')),(0,n.kt)("p",null,"Here is the list of tags and their mode of use:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Etiquetas dos elementos")),(0,n.kt)("th",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Descri\xe7\xe3o")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<macros> </macros>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"In\xedcio e fim do ficheiro macro (etiqueta obrigat\xf3ria).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<macro> </macro>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Start and end of the definition of a macro and its attributes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Attributes"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"- name: Nome**da macro tal como aparece nos menus e nas listas do Editor de c\xf3digo (atributo obrigat\xf3rio).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"- type_ahead_text: Character string*",(0,n.kt)("em",{parentName:"td"}," to be entered to call the macro using the type-ahead (aka autocomplete) function"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'- in_menu: Boolean indicating whether the macro can be called using the context menu*. Valores = "true" (padr\xe3o) ou "false."')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'- type_ahead: Boolean indicating whether the macro can be called using the type-ahead (aka autocomplete) function*. Valores = "true" (padr\xe3o) ou "false."')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'- method_event: Used to trigger the automatic calling of the macro depending on the current handling phase of each method (creation, closing, and so on). Values = "on_load": The macro is triggered on the opening of each method, "on_save": The macro is triggered when each method is saved (closing of a modified method or saving using the File>Save command, "on_create": The macro is triggered when each method is created, "on_close": The macro is triggered when each method is closed.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'"on_save" and "on_close" can be used jointly --- in other words, both of these events are generated when a modified method is closed. On the other hand, "on_create" and "on_load" are never generated in a consecutive manner. This attribute can be used, for example, to preformat methods when they are created (comments in header area) or to record information such as the date and time when they are closed.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'- version: Used to activate the new mode of supporting text selections for the macro (see the "About the ',(0,n.kt)("inlineCode",{parentName:"td"},"<method>"),' Tag" section below). To activate this new mode, pass the value "2". If you omit this attribute or pass version="1", the former mode is kept.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'- in_toolbar: Boolean indicating if the macro must be present in the menu of the Macro button of the toolbar. Valores= "true" (padr\xe3o) ou "false".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<selection/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Tag replaced by the selected text when the macro is inserted. A selec\xe7\xe3o pode estar vazia.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<text> </text>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Start and end of code that must be inserted in the method. A carriage return will be added before and after the code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<method> </method>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'Start and end of the name of the project method and its (optional) parameter. The method is executed when the macro is called. You can pass a parameter in the form ("param1;param2;..."). This parameter will be received in the method using the variables $1, $2, etc. This parameter will be received in the method using the variables $1, $2, etc. For additional information about this tag, refer to the "About the ',(0,n.kt)("inlineCode",{parentName:"td"},"<method>"),' Tag" section below. For additional information about this tag, refer to the "About the ',(0,n.kt)("inlineCode",{parentName:"td"},"<method>"),' Tag" section below.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<caret/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Location of the insertion point in the code after the macro has been inserted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<user_4D/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Tag replaced by the name of the current 4D user.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<user_os/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Etiqueta substitu\xedda pelo nome do usu\xe1rio do sistema atual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<method_name/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Tag substitu\xedda pelo nome do m\xe9todo atual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<method_path/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Tag replaced by path syntax (as returned by ",(0,n.kt)("a",o({parentName:"td"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1164.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"METHOD Get path"))," of the current method.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<date/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Tag substitu\xedda pela data actual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Atributo"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"- format: Formato 4D utilizado para mostrar a data. If no format is set, the default format is used. Valores = n\xfamero do formato 4D (0 a 8).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<time/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Tag substitu\xedda pela hora atual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Atributo"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"- format: Formato 4D utilizado para mostrar a hora. If no format is set, the default format is used. Valores = n\xfamero do formato 4D (0 a 6).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<clipboard/>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Tag replaced by the contents of the clipboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Atributo"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"- index: Clipboard to be pasted. Valores = n\xfamero da \xe1rea de transfer\xeancia (0 a 9).")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Macros can be called using the context menu of the Code Editor or using the type-ahead function (see the following section)."),(0,n.kt)("li",{parentName:"ul"},"If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.).")),(0,n.kt)("p",null,"Aqui est\xe1 um exemplo de defini\xe7\xe3o de macro:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Conte\xfado da macro")),(0,n.kt)("th",o({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Coment\xe1rios")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'<?xml version="1.0"...?>')),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Declara\xe7\xe3o XML")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<!DOCTYPE macros SYSTEM>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Declara\xe7\xe3o do documento")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<macros>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"In\xedcio do ficheiro XML das macros")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'<macro name="RecordLoop">')),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"In\xedcio da defini\xe7\xe3o e nome da macro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<text>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"In\xedcio do c\xf3digo da macro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"For($i;1;Records in selection(",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>"),"))"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"The ",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>")," tag will be replaced by the selected code in the 4D method at the time of macro insertion (for instance, a table name)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"SAVE RECORD(",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>"),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"NEXT RECORD(",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>"),")"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"End for"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"</text>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Fim do c\xf3digo macro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"</macro>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Fim da defini\xe7\xe3o de macro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"</macros>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Fim do ficheiro XML das macros")))),(0,n.kt)("h2",o({},{id:"acerca-da-etiqueta-method"}),"Acerca da etiqueta ",(0,n.kt)("inlineCode",{parentName:"h2"},"<method>")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<method>")," tag allows you to generate and use macro-commands that execute 4D project methods. This allows developers to create sophisticated functions that can be distributed via macro-commands which are associated with components. For example, the following macro will cause the ",(0,n.kt)("em",{parentName:"p"},"MyMethod")," method to be executed with the name of the current method as parameter:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<method>MyMethod("<method_name/>")</method>')),(0,n.kt)("p",null,"The code of a called method is executed in a new process. This process is killed once the method is executed."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The structure process remains frozen until the called method execution is completed. You must make sure that the execution is quick and that there is no risk of it blocking the application. If this occurs, use the ",(0,n.kt)("strong",{parentName:"p"},"Ctrl+F8")," (Windows) or ",(0,n.kt)("strong",{parentName:"p"},"Command+F8"),' (Mac OS) command to "kill" the process.')),(0,n.kt)("h2",o({},{id:"chamada-de-macros"}),"Chamada de macros"),(0,n.kt)("p",null,"By default, macros can be called using the context menu or toolbar of the Code Editor, the autocomplete function, or a specific list at the bottom of the Code Editor window."),(0,n.kt)("p",null,"Note that for each macro it is possible to restrict the possibility of calling it using the context menu and/or the autocomplete function."),(0,n.kt)("h3",o({},{id:"context-menu-and-toolbar"}),"Context menu and toolbar"),(0,n.kt)("p",null,"By default, all macros can be called via the context menu of the Code Editor (using the ",(0,n.kt)("strong",{parentName:"p"},"Insert macro")," hierarchical command) or the ",(0,n.kt)("strong",{parentName:"p"},"Macros")," button of the toolbar."),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"in_menu")," attribute of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<macro>")," tag is used to set whether or not the macro appears in this menu."),(0,n.kt)("p",null,'In the context menu, macros are displayed in the order of the "Macros.xml" file and any additional XML files. It is thus possible to change the order by modifying these files.'),(0,n.kt)("h3",o({},{id:"autocompletar"}),"Autocompletar"),(0,n.kt)("p",null,"By default, all macros are accessible using the autocomplete (aka type-ahead) function (see ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/code-editor/write-class-method"}),"Writing a method"),"). The ",(0,n.kt)("em",{parentName:"p"},"type_ahead")," attribute of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<macro>")," tag can be used to exclude a macro from this type of operation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," If the macro contains the ",(0,n.kt)("inlineCode",{parentName:"p"},"<selection/>")," tag, it will not appear in the autocomplete pop-up window."),(0,n.kt)("h3",o({},{id:"lista-do-editor-de-c\xf3digo"}),"Lista do editor de c\xf3digo"),(0,n.kt)("p",null,"You can display your macros in a list of the Code Editor (see ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/code-editor/write-class-method"}),"Writing a method"),"). Simply double-click on the name of a macro in the list in order to call it. It is not possible to exclude a specific macro from this list."),(0,n.kt)("h2",o({},{id:"notas-de-compatibilidade"}),"Notas de compatibilidade"),(0,n.kt)("p",null,"Macro support can change from one version of 4D to another. In order to keep the different versions compatible while maintaining your customizations, 4D does not remove any previous versions. If you want to use the latest features available, you must adapt your version accordingly."),(0,n.kt)("h3",o({},{id:"vari\xe1veis-de-sele\xe7\xe3o-de-texto-para-m\xe9todos"}),"Vari\xe1veis de sele\xe7\xe3o de texto para m\xe9todos"),(0,n.kt)("p",null,"It is recommended to manage text selections using the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page997.html"}),"GET MACRO PARAMETER")," and ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page998.html"}),"SET MACRO PARAMETER")," commands. These commands can be used to overcome the partitioning of the host project/component execution spaces and thus allow the creation of components dedicated to the management of macros. In order to activate this mode for a macro, you must declare the Version attribute with the value 2 in the Macro element. In this case, 4D no longer manages the predefined variables _textSel,_textReplace, etc. and the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page997.html"}),"GET MACRO PARAMETER")," and ",(0,n.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page998.html"}),"SET MACRO PARAMETER")," commands are used. Este atributo deve ser declarado da seguinte forma:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<macro name="MyMacro" version="2">'),(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"p"},"--- Text of the macro ---"),(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"p"},"</macro>")),(0,n.kt)("p",null,"If you do not pass this attribute, the previous mode is kept."),(0,n.kt)("h3",o({},{id:"incompatibilidades-relacionadas-com-a-norma-xml"}),"Incompatibilidades relacionadas com a norma XML"),(0,n.kt)("p",null,"Strict syntax rules must be observed in order for macros files to respect the XML standard. This may lead to incompatibilities with the code of macros created with previous versions and prevent the loading of XML files. The following are the main sources of malfunctioning:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Comments of the "// my comment" type, allowed inside ',(0,n.kt)("inlineCode",{parentName:"li"},"<macro>")," elements in previous versions of 4D, are not compatible with the XML syntax. The lines of comments must respect the standard ",(0,n.kt)("inlineCode",{parentName:"li"},'"\x3c!-- my comment --\x3e"')," form."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"<>")," symbols used more particularly for interprocess object names must be encoded. For example, the ",(0,n.kt)("inlineCode",{parentName:"li"},"<>params")," variable must be written ",(0,n.kt)("inlineCode",{parentName:"li"},"&lt;>params"),"."),(0,n.kt)("li",{parentName:"ul"},"The initial ",(0,n.kt)("inlineCode",{parentName:"li"},"<macros>")," declaration tag could be omitted in previous versions of 4D. It is now mandatory; otherwise, the file will not be loaded.")))}p.isMDXComponent=!0}}]);