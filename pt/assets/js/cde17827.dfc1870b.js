"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52625],{603905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>b});var r=o(667294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(o),b=n,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return o?r.createElement(d,s(s({ref:t},p),{},{components:o})):r.createElement(d,s({ref:t},p))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},698053:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});o(667294);var r=o(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const s={id:"formObjectsOverview",title:"Sobre objetos formul\xe1rio 4D"},i=void 0,c={unversionedId:"FormObjects/formObjectsOverview",id:"version-19/FormObjects/formObjectsOverview",title:"Sobre objetos formul\xe1rio 4D",description:"O usu\xe1rio constr\xf3i e personaliza os seus formul\xe1rios de aplica\xe7\xe3o manipulando os objetos neles contidos. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/FormObjects/formObjects_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/formObjectsOverview",permalink:"/docs/pt/19/FormObjects/formObjectsOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FformObjects_overview.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"formObjectsOverview",title:"Sobre objetos formul\xe1rio 4D"},sidebar:"docs",previous:{title:"Tamanho da janela",permalink:"/docs/pt/19/FormEditor/windowSize"},next:{title:"Bot\xe3o",permalink:"/docs/pt/19/FormObjects/buttonOverview"}},l={},p=[{value:"Objectos activos e est\xe1ticos",id:"objectos-activos-e-est\xe1ticos",level:2},{value:"Manipula\xe7\xe3o de objectos de formul\xe1rio",id:"manipula\xe7\xe3o-de-objectos-de-formul\xe1rio",level:2}],m={toc:p};function u(e){var{components:t}=e,o=a(e,["components"]);return(0,r.kt)("wrapper",n({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"O usu\xe1rio constr\xf3i e personaliza os seus formul\xe1rios de aplica\xe7\xe3o manipulando os objetos neles contidos. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used."),(0,r.kt)("h2",n({},{id:"objectos-activos-e-est\xe1ticos"}),"Objectos activos e est\xe1ticos"),(0,r.kt)("p",null,"4D forms support a large number of built-in ",(0,r.kt)("strong",{parentName:"p"},"active")," and ",(0,r.kt)("strong",{parentName:"p"},"static")," objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"active objects")," perform a database task or an interface function. Os campos s\xe3o objetos ativos. Other active objects \u2014 enterable objects (variables), combo boxes, drop-down lists, picture buttons, and so on \u2014 store data temporarily in memory or perform some action such as opening a dialog box, printing a report, or starting a background process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"static objects")," are generally used for setting the appearance of the form and its labels as well as for the graphic interface. Os objetos est\xe1ticos n\xe3o t\xeam vari\xe1veis associadas como os objetos ativos. No entanto, \xe9 poss\xedvel inserir objetos din\xe2micos em objetos est\xe1ticos.")),(0,r.kt)("h2",n({},{id:"manipula\xe7\xe3o-de-objectos-de-formul\xe1rio"}),"Manipula\xe7\xe3o de objectos de formul\xe1rio"),(0,r.kt)("p",null,"Pode adicionar ou modificar objetos de formul\xe1rios 4D das seguintes formas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",n({parentName:"strong"},{href:"/docs/pt/19/FormEditor/overview"}),"Form Editor"),":")," Drag an object from the Form Editor toolbar onto the form. Then use the Property List to specify the object's properties.",(0,r.kt)("br",{parentName:"p"}),"\n","See the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Building-forms.200-4354618.en.html"}),"Building Forms")," chapter for more information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"4D language"),": Commands from the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Objects-Forms.201-4127128.en.html"}),"Objects (Forms)")," theme such as ",(0,r.kt)("inlineCode",{parentName:"p"},"OBJECT DUPLICATE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"OBJECT SET FONT STYLE")," allow to create and define form objects.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Editor de formul\xe1rios:")," arraste um objeto da barra de ferramentas do editor de formul\xe1rios ao formul\xe1rio. Then use the Property List to specify the object's properties.",(0,r.kt)("br",{parentName:"p"}),"\n","See the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292"}),"Dynamic Forms")," page for information."))))}u.isMDXComponent=!0}}]);