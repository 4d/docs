"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6852],{603905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var a=o(667294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(o),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||n;return o?a.createElement(h,s(s({ref:t},c),{},{components:o})):a.createElement(h,s({ref:t},c))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<n;p++)s[p]=o[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},974647:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});o(667294);var a=o(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},r.apply(this,arguments)}function n(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const s={id:"tabControl",title:"Tab Controls"},i=void 0,l={unversionedId:"FormObjects/tabControl",id:"version-18/FormObjects/tabControl",title:"Tab Controls",description:"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. O usu\xe1rio acessa cada tela clicando na guia correspondente.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/FormObjects/tabControl.md",sourceDirName:"FormObjects",slug:"/FormObjects/tabControl",permalink:"/docs/pt/18/FormObjects/tabControl",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FtabControl.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"tabControl",title:"Tab Controls"},sidebar:"docs",previous:{title:"Subformul\xe1rio",permalink:"/docs/pt/18/FormObjects/subformOverview"},next:{title:"Text",permalink:"/docs/pt/18/FormObjects/text"}},p={},c=[{value:"JSON Exemplo",id:"json-exemplo",level:3},{value:"Adding labels to a tab control",id:"adding-labels-to-a-tab-control",level:2},{value:"Managing tabs programmatically",id:"managing-tabs-programmatically",level:2},{value:"Comando FORM GOTO PAGE",id:"comando-form-goto-page",level:3},{value:"Ac\xe7\xe3o Goto Page",id:"ac\xe7\xe3o-goto-page",level:3},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}],d={toc:c};function m(e){var{components:t}=e,s=n(e,["components"]);return(0,a.kt)("wrapper",r({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. O usu\xe1rio acessa cada tela clicando na guia correspondente."),(0,a.kt)("p",null,"O seguinte formul\xe1rio de v\xe1rias p\xe1ginas utiliza um objeto de controlo de pestanas:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(518622).Z,width:"600",height:"534"})),(0,a.kt)("p",null,"To navigate from screen to screen, the user simply clicks the desired tab."),(0,a.kt)("p",null,"The screens can represent pages in a multi-page form or an object that changes when the user clicks a tab. If the tab control is used as a page navigation tool, then the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html"}),"FORM GOTO PAGE")," command or the ",(0,a.kt)("inlineCode",{parentName:"p"},"gotoPage")," standard action would be used when a user clicks a tab."),(0,a.kt)("p",null,"Outra utiliza\xe7\xe3o do controlo de separadores consiste em controlar os dados apresentados num subformul\xe1rio. Por exemplo, um Rolodex pode ser implementado utilizando um controlo de pestanas. The tabs would display the letters of the alphabet and the tab control\u2019s action would be to load the data corresponding to the letter that the user clicked."),(0,a.kt)("p",null,"Cada pestana pode apresentar etiquetas ou etiquetas e um pequeno \xedcone. Se incluir \xedcones, estes aparecem \xe0 esquerda de cada etiqueta. Aqui est\xe1 um exemplo de um controlo de pestanas que utiliza \xedcones:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(713023).Z,width:"599",height:"510"})),(0,a.kt)("p",null,"When you create a tab control, 4D manages the spacing and placement of the tabs. You only need to supply the labels in the form of an array, or the icons and labels in the form of a hierarchical list."),(0,a.kt)("p",null,"If the tab control is wide enough to display all the tabs with both the labels and icons, it displays both. If the tab control is not wide enough to display both the labels and icons, 4D displays the icons only. If it can\u2019t fit all the icons, it places scroll arrows to the right of the last visible tab. As setas de deslocamento permitem ao usu\xe1rio deslocar os \xedcones para a esquerda ou para a direita."),(0,a.kt)("p",null,"Under macOS, in addition to the standard position (top), the tab controls can also be aligned to the bottom."),(0,a.kt)("h3",r({},{id:"json-exemplo"}),"JSON Exemplo"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' "myTab": {\n  "type": "tab",\n   "left": 60, \n  "top": 160,  \n  "width": 100, \n  "height": 20, \n  "labelsPlacement": "bottom" //define the direction\n }\n')),(0,a.kt)("h2",r({},{id:"adding-labels-to-a-tab-control"}),"Adding labels to a tab control"),(0,a.kt)("p",null,"There are several ways to supply the labels for a tab control:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can assign a ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/18/FormObjects/propertiesDataSource#choice-list-static-list"}),"choice list"),' to the tab control, either through a collection (static list) or a JSON pointer ("$ref") to a json list. Os \xedcones associados aos itens da lista no editor de listas ser\xe3o apresentados no controle de pestanas.'),(0,a.kt)("li",{parentName:"ul"},"You can create a Text array that contains the names of each page of the form. Este c\xf3digo deve ser executado antes de o formul\xe1rio ser apresentado ao usu\xe1rio. For example, you could place the code in the object method of the tab control and execute it when the ",(0,a.kt)("inlineCode",{parentName:"li"},"On Load")," event occurs.")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can also store the names of the pages in a hierarchical list and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Load list")," command to load the values into the array.")),(0,a.kt)("h2",r({},{id:"managing-tabs-programmatically"}),"Managing tabs programmatically"),(0,a.kt)("h3",r({},{id:"comando-form-goto-page"}),"Comando FORM GOTO PAGE"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html"}),"FORM GOTO PAGE")," command in the tab control\u2019s method:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"FORM GOTO PAGE(arrPages)\n")),(0,a.kt)("p",null,"The command is executed when the ",(0,a.kt)("inlineCode",{parentName:"p"},"On Clicked")," event occurs. You should then clear the array when the ",(0,a.kt)("inlineCode",{parentName:"p"},"On Unload")," event occurs."),(0,a.kt)("p",null,"Eis um exemplo de m\xe9todo objeto:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n')),(0,a.kt)("h3",r({},{id:"ac\xe7\xe3o-goto-page"}),"Ac\xe7\xe3o Goto Page"),(0,a.kt)("p",null,"When you assign the ",(0,a.kt)("inlineCode",{parentName:"p"},"gotoPage")," ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesAction#standard-action"}),"standard action")," to a tab control, 4D will automatically display the page of the form that corresponds to the number of the tab that is selected."),(0,a.kt)("p",null,"For example, if the user selects the 3rd tab, 4D will display the third page of the current form (if it exists)."),(0,a.kt)("h2",r({},{id:"propriedades-compat\xedveis"}),"Propriedades compat\xedveis"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#bold"}),"Bold")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDataSource#choice-list-static-list"}),"Choice List")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#expression-type"}),"Expression Type")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#font"}),"Font")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#font-size"}),"Font Size"),"  - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesHelp#help-tip"}),"Help Tip")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#italic"}),"Italic")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesAction#standard-action"}),"Standard action")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesAppearance#tab-control-direction"}),"Tab Control Direction")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#type"}),"Type")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesText#underline"}),"Underline")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}m.isMDXComponent=!0},518622:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},713023:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"}}]);