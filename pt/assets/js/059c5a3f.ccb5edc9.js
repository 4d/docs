"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47611],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=i(r),d=o,b=c["".concat(u,".").concat(d)]||c[d]||s[d]||a;return r?n.createElement(b,l(l({ref:t},m),{},{components:r})):n.createElement(b,l({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},738663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>m});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"compute",title:"$compute"},p=void 0,u={unversionedId:"REST/compute",id:"version-20-R4/REST/compute",title:"$compute",description:"Calcular em atributos espec\xedficos (por exemplo, Employee/salary/?$compute=sum) ou no caso de um atributo de objeto (por exemplo., Employee/objectAtt.property1/?$compute=sum)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/REST/$compute.md",sourceDirName:"REST",slug:"/REST/compute",permalink:"/docs/pt/REST/compute",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24compute.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"compute",title:"$compute"},sidebar:"docs",previous:{title:"$binary",permalink:"/docs/pt/REST/binary"},next:{title:"$distinct",permalink:"/docs/pt/REST/distinct"}},i={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}],s={toc:m};function c(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Calcular em atributos espec\xedficos (",(0,n.kt)("em",{parentName:"p"},"por exemplo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Employee/salary/?$compute=sum)")," ou no caso de um atributo de objeto (",(0,n.kt)("em",{parentName:"p"},"por exemplo."),", Employee/objectAtt.property1/?$compute=sum)"),(0,n.kt)("h2",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Este par\xe2metro permite-lhe efetuar c\xe1lculos sobre os seus dados."),(0,n.kt)("p",null,"Para efetuar um c\xe1lculo sobre um atributo, escreve-se o seguinte:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=$all")),(0,n.kt)("p",null,"Se quiser passar um atributo de Objeto, tem de passar uma das suas propriedades. Por exemplo:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/objectAtt.property1/?$compute=$all")),(0,n.kt)("p",null,"Pode utilizar qualquer uma das seguintes palavras-chave:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Palavra-chave"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"$all"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Um objeto JSON que define todas as fun\xe7\xf5es para o atributo (m\xe9dia, contagem, m\xednimo, m\xe1ximo e soma para atributos do tipo N\xfamero e contagem, m\xednimo e m\xe1ximo para atributos do tipo Cadeia")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"average"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Obter a m\xe9dia de um atributo num\xe9rico")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"count"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Obter o n\xfamero total na cole\xe7\xe3o ou na classe de dados (em ambos os casos h\xe1 que especificar um atributo)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"min"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Obter o valor m\xednimo num atributo num\xe9rico ou o valor mais baixo num atributo do tipo String")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"max"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Obter o valor m\xe1ximo num atributo num\xe9rico ou o valor mais alto num atributo do tipo String")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"sum"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Obter a soma de um atributo num\xe9rico")))),(0,n.kt)("h2",o({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"Se quiser obter todos os c\xe1lculos para um atributo do tipo N\xfamero, pode escrever:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=$all")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resposta"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    "salary": {\n        "count": 4,\n        "sum": 335000,\n        "average": 83750,\n        "min": 70000,\n        "max": 99000\n    }\n}\n')),(0,n.kt)("p",null,"Se quiser obter todos os c\xe1lculos para um atributo do tipo String, pode escrever:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/firstName/?$compute=$all")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resposta"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    "salary": {\n        "count": 4,\n        "min": Anne,\n        "max": Victor\n    }\n}\n')),(0,n.kt)("p",null,"Se pretender obter apenas um c\xe1lculo num atributo, pode escrever o seguinte:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/salary/?$compute=sum")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resposta"),":"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"235000")),(0,n.kt)("p",null,"Se pretender efetuar um c\xe1lculo num atributo de um objeto, pode escrever o seguinte:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/objectAttribute.property1/?$compute=sum")),(0,n.kt)("p",null,"Responsa:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"45")))}c.isMDXComponent=!0}}]);