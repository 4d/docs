"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19068],{603905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>b});var o=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var n=o.createContext({}),c=function(e){var r=o.useContext(n),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},d=function(e){var r=c(e.components);return o.createElement(n.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,n=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),b=a,u=m["".concat(n,".").concat(b)]||m[b]||l[b]||s;return t?o.createElement(u,p(p({ref:r},d),{},{components:t})):o.createElement(u,p({ref:r},d))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,p=new Array(s);p[0]=m;var i={};for(var n in r)hasOwnProperty.call(r,n)&&(i[n]=r[n]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<s;c++)p[c]=t[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27180:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>n,toc:()=>d});t(667294);var o=t(603905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const p={id:"progressIndicator",title:"Indicador de progresso"},i=void 0,n={unversionedId:"FormObjects/progressIndicator",id:"version-20/FormObjects/progressIndicator",title:"Indicador de progresso",description:'A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically.',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/FormObjects/progressIndicator.md",sourceDirName:"FormObjects",slug:"/FormObjects/progressIndicator",permalink:"/docs/pt/20/FormObjects/progressIndicator",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FprogressIndicator.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"progressIndicator",title:"Indicador de progresso"},sidebar:"docs",previous:{title:"\xc1rea Plug-in",permalink:"/docs/pt/20/FormObjects/pluginAreaOverview"},next:{title:"Bot\xe3o r\xe1dio",permalink:"/docs/pt/20/FormObjects/radiobuttonOverview"}},c={},d=[{value:"Utilizar os indicadores",id:"utilizar-os-indicadores",level:2},{value:"Term\xf3metro predefinido",id:"term\xf3metro-predefinido",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:3},{value:"Barber shop",id:"barber-shop",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis-1",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}],l={toc:d};function m(e){var{components:r}=e,p=s(e,["components"]);return(0,o.kt)("wrapper",a({},l,p,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(993831).Z,width:"288",height:"45"})),(0,o.kt)("h2",a({},{id:"utilizar-os-indicadores"}),"Utilizar os indicadores"),(0,o.kt)("p",null,"Os indicadores podem ser utilizados para visualizar ou definir valores. Por exemplo, se um indicador de progresso recebe um valor por um m\xe9todo, ele exibe o valor. Se o usu\xe1rio arrastar o ponto indicador, o valor muda. The value can be used in another object such as a field or an enterable or non-enterable object."),(0,o.kt)("p",null,"A vari\xe1vel associada ao indicador controla a visualiza\xe7\xe3o. O usu\xe1rio coloca valores no c\xf3digo ou utiliza valores do c\xf3digo atrav\xe9s de m\xe9todos. For example, a method for a field or enterable object could be used to control a progress indicator:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-4d"})," $vTherm:=[Employees]Salary\n")),(0,o.kt)("p",null,"Este m\xe9todo atribui o valor do campo Salary \xe0 vari\xe1vel $vTherm. Este m\xe9todo seria anexado ao campo Sal\xe1rio."),(0,o.kt)("p",null,"Por outro lado, \xe9 poss\xedvel utilizar o indicador para controlar o valor num campo. O usu\xe1rio arrasta o indicador para definir o valor. Neste caso, o m\xe9todo torna-se:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-4d"})," [Employees]Salary:=$vTherm\n")),(0,o.kt)("p",null,"O m\xe9todo atribui o valor do c\xf3digo ao campo Salary. \xc0 medida que o usu\xe1rio arrasta o indicador, o valor no campo Sal\xe1rio muda."),(0,o.kt)("h2",a({},{id:"term\xf3metro-predefinido"}),"Term\xf3metro predefinido"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(943671).Z,width:"53",height:"176"})),(0,o.kt)("p",null,"O term\xf3metro \xe9 o indicador b\xe1sico de progresso."),(0,o.kt)("p",null,"\xc9 poss\xedvel apresentar barras de term\xf4metros horizontais ou verticais. Isto \xe9 determinado pela forma do objeto que desenha."),(0,o.kt)("p",null,"Est\xe3o dispon\xedveis v\xe1rias op\xe7\xf5es gr\xe1ficas: valores m\xednimos/m\xe1ximos, gradua\xe7\xf5es, passos."),(0,o.kt)("h3",a({},{id:"propriedades-compat\xedveis"}),"Propriedades compat\xedveis"),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesScale#barber-shop"}),"Barber shop")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesText#bold"}),"Negrito")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Estilo de linha de borda")," -","[","Abaixo","]","(properties_CoordinatesAndSizing. md#bottom) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesObject#css-class"}),"Clase")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesScale#display-graduation"}),"Gradua\xe7\xe3o da tela")," - ","[","Enterable","]","(properties_Entry. md#enterable) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesAction#execute-object-method"}),"Executar m\xe9todo objeto")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesObject#expression-type"}),"Tipo de express\xe3o"),' (s\xf3 "inteiro", "n\xfamero", "data" ou "hora") - ',"[","Altura","]","(properties_CoordinatesAndSizing. md#height) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesScale#graduation-step"}),"Etapa de gradua\xe7\xe3o")," -",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesHelp#help-tip"}),"Conselho de ajuda")," - ","[","Tamanho horizontal","]","(properties_ResizingOptions. md#horizontal-sizing) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesScale#label-location"}),"Lugar da etiqueta")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#left"}),"Esquerda")," - ","[","M\xe1ximo","]","(properties_Scale. md#maximum) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesScale#minimum"}),"M\xednimo")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesDisplay#number-format"}),"Formato num\xe9rico")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesObject#object-name"}),"Nome de objeto")," - ","[","Direita","]","(properties_CoordinatesAndSizing. md#right) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesScale#step"}),"Paso")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#top"}),"Acima")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesObject#type"}),"Tipo")," - ","[","Vari\xe1vel ou express\xe3o","]","(properties_Object. md#variable-or-expression) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Tamanho vertical")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesDisplay#visibility"}),"Visibilidade")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#width"}),"Largura")),(0,o.kt)("h2",a({},{id:"barber-shop"}),"Barber shop"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(301942).Z,width:"280",height:"40"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Barber shop")," \xe9 uma variante do term\xf4metro predefinido. To enable this variant, you need to set the ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesScale#barber-shop"}),"Barber shop")," property."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'In JSON code, just remove "max" property from a default thermometer object to enable the Barber shop variant.')),(0,o.kt)("p",null,"Barber shop displays a continuous animation, like the ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/spinner"}),"spinner"),". These thermometers are generally used to indicate to the user that the program is in the process of carrying out a long operation. When this thermometer variant is selected, ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesScale"}),"graphical Scale properties")," are not available."),(0,o.kt)("p",null,"Quando o formul\xe1rio \xe9 executado, o objeto n\xe3o \xe9 animado. You manage the animation by passing a value to its ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesObject#variable-or-expression"}),"associated variable or expression"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 = Iniciar a anima\xe7\xe3o,"),(0,o.kt)("li",{parentName:"ul"},"0 = Parar a anima\xe7\xe3o.")),(0,o.kt)("h3",a({},{id:"propriedades-compat\xedveis-1"}),"Propriedades compat\xedveis"),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesScale#barber-shop"}),"Barber shop")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," -",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesEntry#enterable"}),"Enterable")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesAction#execute-object-method"}),"Execute object method")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesObject#expression-type"}),"Expression Type"),' (only "integer", "number", "date", or "time") - ',(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesText#font"}),"Font")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesText#font-color"}),"Font Color")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesText#font-size"}),"Font Size")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesObject#type"}),"Type")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")),(0,o.kt)("h2",a({},{id:"veja-tamb\xe9m"}),"Veja tamb\xe9m"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/pt/20/FormObjects/ruler"}),"regras")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/pt/20/FormObjects/stepper"}),"steppers"))))}m.isMDXComponent=!0},301942:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/indicator-4aede0e01bdd9a603abe016a5ec90d03.gif"},943671:(e,r,t)=>{t.d(r,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAACwCAIAAAAg+bFMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAMCSURBVHhe7drBjdswEIVhn7aTtLD1qBsX48sWkBpcxp5dQoacIUVqJNvyk0YK8H4ICE0D8geJOZDYy+Pc0YcV5bsNl8twsw/6MfV9vS/O5AJ89+u32IZh9IlFxzJQj5+xwt5vFXRDsSeOnykd4OsEedrP2Hji+wuna0izm1ob+X6x5A52r2n/j68dmszPlI7wCcHGMpkxfqZ0hE+ST7lxys/kwnwfRh8WfVj0YdGHRR8WfVj0YdGHRR8WfVj0YYX4yt62O8SYzCwU4BOLMtrB/GmBb39fc6Birspzpy2+gOdXDebqTI11to19uqo0u6mUjn9SKjnS9877PZdvRtOYum/n2v/5iaZ5fmkoKAM23y20v29cfs3hnsD6iaUifEj0YdGHRR8WfVj0YdGHRR8WfVj0YdGHRR9WkK/sd5udevd5sQifOyWQiROdH9yGiaHyznL+kv54cnydMydGy23sU4ZmNxVBeYn6Oo/0LTy/Isjjs/vamROsv8RRg2AyrPzbfLVYgE9BufZB9hNLhfiA6MOiD4s+LPqw6MOiD4s+LPqw6MOiD4s+rDhf2gTXzXjZ/77YnQf6ssg4Mj7V+UF+eMO1nLVUXp5/DgzxJd34d2udqbHOtrFPV5VmN3WuI33++Y2ac/rsP2pNaKdbf1q1yMCAIn3OO8QnCSz39N2mAn0fRR8WfVj0YdGHRR/W1Pf18we56HM/ueqiz/3kqos+95OrLvrcT6666HM/ueqiz/3kqmvWVza7zV68TL3YnUf47terbcLraYEMPj0/mPze2mv2+ZXKAULl9WcKs0X6zNWZGutsG/t0VWl201J9l0f6Fp6fkMaFdjafW2ONyX03bX+ff0LpaepUfeeL7e5LmCbjCCz39N2mYtbf59GHRR8WfVj0YdGHRR8WfVj0YdGHRR8WfVghvrLbfbEXnyvAVw8QXp8W+Pb3Vd4bpy2+3X2dqbG+2cY+XWea3nNjH57dq7Slb5c2XH+7JCgDinQtL8AnCSy38t2mQnxA9GGd2/d4/AMvdxxgkVtTAQAAAABJRU5ErkJggg=="},993831:(e,r,t)=>{t.d(r,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAtCAIAAACBCCG9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAF2SURBVHhe7dXBbQIxEEDRnNJJWqAeuqEYLikgNVBGzpQQhwxkycbY4Mwlfk9zACR7pdF+8XQE0ggMEgkMEgkMEgkMEvUFtt8+nWx2h/gFJvH58m/38eW3Fm7W0RNYueDrAeWDxJjHYbcpcW3P73+xbqFRR0dglxtOD1QYk1kEsG6hVUc7sKtji+tgDt8v/bqFZh0Cg9sEBomSA1seu7oOprAIYN1Cq46OwMq5uKNcpi9mc93QjxZadXQEVpSzJ+fnwDwWgRXrFm7W0RcY8BCBQaI7Ait/gvEJ5tbfgsDgbgKDRAKDRH8f2BuwEGG03BHY8+vLP5h3GCaw6sSGYIDAqhMbggECq05sCAYIrDqxIRggsOrEhmCAwKoTG4IBAqtObAgGCKw6sSEYILDqxIZggMCqExuCAQKrTmwIBgisOrEhGCCw6sSGYIDAqhMbggECq05sCAakBAZcRBgtvYEBDxAYJBIYJBIYJBIYJBIYJBIYpDkePwAePMhF3WLIcQAAAABJRU5ErkJggg=="}}]);