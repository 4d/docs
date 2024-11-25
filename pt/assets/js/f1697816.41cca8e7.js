"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52612"],{313704:function(e,t,o){o.r(t),o.d(t,{metadata:()=>a,contentTitle:()=>i,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>n});var a=JSON.parse('{"id":"FormObjects/tabControl","title":"Controles Abas","description":"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. O usu\xe1rio acessa cada tela clicando na guia correspondente.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/FormObjects/tabControl.md","sourceDirName":"FormObjects","slug":"/FormObjects/tabControl","permalink":"/docs/pt/18/FormObjects/tabControl","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FtabControl.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"tabControl","title":"Controles Abas"},"sidebar":"docs","previous":{"title":"Subformul\xe1rio","permalink":"/docs/pt/18/FormObjects/subformOverview"},"next":{"title":"Text","permalink":"/docs/pt/18/FormObjects/text"}}'),s=o("785893"),r=o("250065");let n={id:"tabControl",title:"Controles Abas"},i=void 0,c={},d=[{value:"JSON Exemplo",id:"json-exemplo",level:3},{value:"Adicionando etiquetas a um controle de tabula\xe7\xe3o",id:"adicionando-etiquetas-a-um-controle-de-tabula\xe7\xe3o",level:2},{value:"Gerenciamento programada das abas",id:"gerenciamento-programada-das-abas",level:2},{value:"Comando FORM GOTO PAGE",id:"comando-form-goto-page",level:3},{value:"Ac\xe7\xe3o Goto Page",id:"ac\xe7\xe3o-goto-page",level:3},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}];function l(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. O usu\xe1rio acessa cada tela clicando na guia correspondente."}),"\n",(0,s.jsx)(t.p,{children:"O seguinte formul\xe1rio de v\xe1rias p\xe1ginas utiliza um objeto de controlo de pestanas:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:o(301524).Z+"",width:"600",height:"534"})}),"\n",(0,s.jsx)(t.p,{children:"Para passar de uma tela para outra, o usu\xe1rio simplesmente clica na guia correspondente."}),"\n",(0,s.jsxs)(t.p,{children:["The screens can represent pages in a multi-page form or an object that changes when the user clicks a tab. If the tab control is used as a page navigation tool, then the ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html",children:"FORM GOTO PAGE"})," command or the ",(0,s.jsx)(t.code,{children:"gotoPage"})," standard action would be used when a user clicks a tab."]}),"\n",(0,s.jsx)(t.p,{children:"Outra utiliza\xe7\xe3o do controlo de separadores consiste em controlar os dados apresentados num subformul\xe1rio. Por exemplo, um Rolodex pode ser implementado utilizando um controlo de pestanas. The tabs would display the letters of the alphabet and the tab control\u2019s action would be to load the data corresponding to the letter that the user clicked."}),"\n",(0,s.jsx)(t.p,{children:"Cada pestana pode apresentar etiquetas ou etiquetas e um pequeno \xedcone. Se incluir \xedcones, estes aparecem \xe0 esquerda de cada etiqueta. Aqui est\xe1 um exemplo de um controlo de pestanas que utiliza \xedcones:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:o(599575).Z+"",width:"599",height:"510"})}),"\n",(0,s.jsx)(t.p,{children:"When you create a tab control, 4D manages the spacing and placement of the tabs. You only need to supply the labels in the form of an array, or the icons and labels in the form of a hierarchical list."}),"\n",(0,s.jsx)(t.p,{children:"If the tab control is wide enough to display all the tabs with both the labels and icons, it displays both. If the tab control is not wide enough to display both the labels and icons, 4D displays the icons only. If it can\u2019t fit all the icons, it places scroll arrows to the right of the last visible tab. As setas de deslocamento permitem ao usu\xe1rio deslocar os \xedcones para a esquerda ou para a direita."}),"\n",(0,s.jsx)(t.p,{children:"Under macOS, in addition to the standard position (top), the tab controls can also be aligned to the bottom."}),"\n",(0,s.jsx)(t.h3,{id:"json-exemplo",children:"JSON Exemplo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:' "myTab": {\n  "type": "tab",\n   "left": 60, \n  "top": 160,  \n  "width": 100, \n  "height": 20, \n  "labelsPlacement": "bottom" //define the direction\n }\n'})}),"\n",(0,s.jsx)(t.h2,{id:"adicionando-etiquetas-a-um-controle-de-tabula\xe7\xe3o",children:"Adicionando etiquetas a um controle de tabula\xe7\xe3o"}),"\n",(0,s.jsx)(t.p,{children:"H\xe1 v\xe1rias maneiras de fornecer as etiquetas para um controle de tabula\xe7\xe3o:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["You can assign a ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesDataSource#choice-list-static-list",children:"choice list"}),' to the tab control, either through a collection (static list) or a JSON pointer ("$ref") to a json list. Os \xedcones associados aos itens da lista no editor de listas ser\xe3o apresentados no controle de pestanas.']}),"\n",(0,s.jsxs)(t.li,{children:["Voc\xea pode criar um array Text que contenha os nomes de cada p\xe1gina do formul\xe1rio. Este c\xf3digo deve ser executado antes de o formul\xe1rio ser apresentado ao usu\xe1rio. For example, you could place the code in the object method of the tab control and execute it when the ",(0,s.jsx)(t.code,{children:"On Load"})," event occurs."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n'})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["You can also store the names of the pages in a hierarchical list and use the ",(0,s.jsx)(t.code,{children:"Load list"})," command to load the values into the array."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"gerenciamento-programada-das-abas",children:"Gerenciamento programada das abas"}),"\n",(0,s.jsx)(t.h3,{id:"comando-form-goto-page",children:"Comando FORM GOTO PAGE"}),"\n",(0,s.jsxs)(t.p,{children:["You can use the ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html",children:"FORM GOTO PAGE"})," command in the tab control\u2019s method:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"FORM GOTO PAGE(arrPages)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["O comando \xe9 executado quando ocorre o evento ",(0,s.jsx)(t.code,{children:"On Clicked"}),". Em seguida, voc\xea deve excluir o array quando ocorrer o evento ",(0,s.jsx)(t.code,{children:"On Unload"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Eis um exemplo de m\xe9todo objeto:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n'})}),"\n",(0,s.jsx)(t.h3,{id:"ac\xe7\xe3o-goto-page",children:"Ac\xe7\xe3o Goto Page"}),"\n",(0,s.jsxs)(t.p,{children:["When you assign the ",(0,s.jsx)(t.code,{children:"gotoPage"})," ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesAction#standard-action",children:"standard action"})," to a tab control, 4D will automatically display the page of the form that corresponds to the number of the tab that is selected."]}),"\n",(0,s.jsx)(t.p,{children:"For example, if the user selects the 3rd tab, 4D will display the third page of the current form (if it exists)."}),"\n",(0,s.jsx)(t.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesDataSource#choice-list-static-list",children:"Choice List"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesObject#expression-type",children:"Expression Type"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesText#font",children:"Font"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesText#font-size",children:"Font Size"}),"  - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesAction#standard-action",children:"Standard action"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesAppearance#tab-control-direction",children:"Tab Control Direction"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},301524:function(e,t,o){o.d(t,{Z:function(){return a}});let a=o.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},599575:function(e,t,o){o.d(t,{Z:function(){return a}});let a=o.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"},250065:function(e,t,o){o.d(t,{Z:function(){return i},a:function(){return n}});var a=o(667294);let s={},r=a.createContext(s);function n(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);