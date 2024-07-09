/*! For license information please see 4f663b92.bcf1bf6d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45715],{520423:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=o(474848),s=o(28453);const a={id:"tabControl",title:"Abas"},n=void 0,i={id:"FormObjects/tabControl",title:"Abas",description:"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. O usu\xe1rio acessa cada tela clicando na guia correspondente.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/FormObjects/tabControl.md",sourceDirName:"FormObjects",slug:"/FormObjects/tabControl",permalink:"/docs/pt/20/FormObjects/tabControl",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FtabControl.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"tabControl",title:"Abas"},sidebar:"docs",previous:{title:"Subformul\xe1rio",permalink:"/docs/pt/20/FormObjects/subformOverview"},next:{title:"Text",permalink:"/docs/pt/20/FormObjects/text"}},c={},d=[{value:"JSON Exemplo",id:"JSON-Exemplo",level:3},{value:"Adicionando etiquetas a um controle de tabula\xe7\xe3o",id:"Adicionando-etiquetas-a-um-controle-de-tabula\xe7\xe3o",level:2},{value:"Utiliza\xe7\xe3o de um objecto",id:"Utiliza\xe7\xe3o-de-um-objecto",level:3},{value:"Utilizar uma lista de sele\xe7\xe3o",id:"Utilizar-uma-lista-de-sele\xe7\xe3o",level:3},{value:"Utilizar um array texto",id:"Utilizar-um-array-texto",level:3},{value:"Funcionalidades do Goto page",id:"Funcionalidades-do-Goto-page",level:2},{value:"Comando FORM GOTO PAGE",id:"Comando-FORM-GOTO-PAGE",level:3},{value:"Ac\xe7\xe3o Goto Page",id:"Ac\xe7\xe3o-Goto-Page",level:3},{value:"Propriedades compat\xedveis",id:"Propriedades-compat\xedveis",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. O usu\xe1rio acessa cada tela clicando na guia correspondente."}),"\n",(0,r.jsx)(t.p,{children:"O seguinte formul\xe1rio de v\xe1rias p\xe1ginas utiliza um objeto de controlo de pestanas:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:o(231545).A+"",width:"600",height:"534"})}),"\n",(0,r.jsx)(t.p,{children:"Para passar de uma tela para outra, o usu\xe1rio simplesmente clica na guia correspondente."}),"\n",(0,r.jsxs)(t.p,{children:["The screens can represent pages in a multi-page form or an object that changes when the user clicks a tab. If the tab control is used as a page navigation tool, then the ",(0,r.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html",children:"FORM GOTO PAGE"})," command or the ",(0,r.jsx)(t.code,{children:"gotoPage"})," standard action would be used when a user clicks a tab."]}),"\n",(0,r.jsx)(t.p,{children:"Outra utiliza\xe7\xe3o do controlo de separadores consiste em controlar os dados apresentados num subformul\xe1rio. Por exemplo, um Rolodex pode ser implementado utilizando um controlo de pestanas. The tabs would display the letters of the alphabet and the tab control\u2019s action would be to load the data corresponding to the letter that the user clicked."}),"\n",(0,r.jsx)(t.p,{children:"Cada pestana pode apresentar etiquetas ou etiquetas e um pequeno \xedcone. Se incluir \xedcones, estes aparecem \xe0 esquerda de cada etiqueta. Aqui est\xe1 um exemplo de um controlo de pestanas que utiliza \xedcones:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:o(375458).A+"",width:"599",height:"510"})}),"\n",(0,r.jsx)(t.p,{children:"When you create a tab control, 4D manages the spacing and placement of the tabs. You only need to supply the labels in the form of an array, or the icons and labels in the form of a hierarchical list."}),"\n",(0,r.jsx)(t.p,{children:"If the tab control is wide enough to display all the tabs with both the labels and icons, it displays both. If the tab control is not wide enough to display both the labels and icons, 4D displays the icons only. If it can\u2019t fit all the icons, it places scroll arrows to the right of the last visible tab. As setas de deslocamento permitem ao usu\xe1rio deslocar os \xedcones para a esquerda ou para a direita."}),"\n",(0,r.jsx)(t.p,{children:"Under macOS, in addition to the standard position (top), the tab controls can also be aligned to the bottom."}),"\n",(0,r.jsx)(t.h3,{id:"JSON-Exemplo",children:"JSON Exemplo"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'    "myTab": {\n  "type": "tab",\n   "left": 60, \n  "top": 160,  \n  "width": 100, \n  "height": 20, \n  "labelsPlacement": "bottom" //define the direction\n }\n'})}),"\n",(0,r.jsx)(t.h2,{id:"Adicionando-etiquetas-a-um-controle-de-tabula\xe7\xe3o",children:"Adicionando etiquetas a um controle de tabula\xe7\xe3o"}),"\n",(0,r.jsx)(t.p,{children:"There are several ways to supply the labels for a tab control:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"um objeto"}),"\n",(0,r.jsx)(t.li,{children:"uma lista de escolha"}),"\n",(0,r.jsx)(t.li,{children:"um array"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"Utiliza\xe7\xe3o-de-um-objecto",children:"Utiliza\xe7\xe3o de um objecto"}),"\n",(0,r.jsxs)(t.p,{children:["You can assign an ",(0,r.jsx)(t.a,{href:"/docs/pt/20/Concepts/object",children:"object"})," encapsulating a ",(0,r.jsx)(t.a,{href:"Concepts/dt_collection",children:"collection"})," as the ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesObject#variable-or-expression",children:"data source"})," of the tab control. O objeto deve conter as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Propriedade"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"values"})}),(0,r.jsx)(t.td,{children:"Collection"}),(0,r.jsx)(t.td,{children:"Obrigat\xf3rio - Cole\xe7\xe3o de valores escalares. S\xf3 s\xe3o suportados valores cadeia. Se for inv\xe1lido, vazio ou n\xe3o definido, o controle de tabula\xe7\xe3o estar\xe1 vazio"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"index"})}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsxs)(t.td,{children:["Index of the currently tab control page (value between 0 and ",(0,r.jsx)(t.code,{children:"collection.length-1"}),")"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"currentValue"})}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"Valor atual selecionado"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"The initialization code must be executed before the form is presented to the user."}),"\n",(0,r.jsxs)(t.p,{children:["In the following example, ",(0,r.jsx)(t.code,{children:"Form.tabControl"})," has been defined as tab control ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesObject#variable-or-expression",children:"expression"}),". You can associate the ",(0,r.jsxs)(t.a,{href:"#goto-page-action",children:[(0,r.jsx)(t.code,{children:"gotoPage"})," standard action"]})," to the form object:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'Form.tabControl:=New object Form.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")\nForm.tabControl.index:=2 //start on page 3\n'})}),"\n",(0,r.jsx)(t.h3,{id:"Utilizar-uma-lista-de-sele\xe7\xe3o",children:"Utilizar uma lista de sele\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["You can assign a ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesDataSource#choice-list-static-list",children:"choice list"}),' to the tab control, either through a collection (static list) or a JSON pointer ("$ref") to a json list. Icons associated with list items in the Lists editor will be displayed in the tob control.']}),"\n",(0,r.jsx)(t.h3,{id:"Utilizar-um-array-texto",children:"Utilizar um array texto"}),"\n",(0,r.jsxs)(t.p,{children:["Voc\xea pode criar um array Text que contenha os nomes de cada p\xe1gina do formul\xe1rio. Este c\xf3digo deve ser executado antes de o formul\xe1rio ser apresentado ao usu\xe1rio. For example, you could place the code in the object method of the tab control and execute it when the ",(0,r.jsx)(t.code,{children:"On Load"})," event occurs."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["You can also store the names of the pages in a hierarchical list and use the ",(0,r.jsx)(t.code,{children:"Load list"})," command to load the values into the array."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"Funcionalidades-do-Goto-page",children:"Funcionalidades do Goto page"}),"\n",(0,r.jsx)(t.h3,{id:"Comando-FORM-GOTO-PAGE",children:"Comando FORM GOTO PAGE"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the ",(0,r.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html",children:"FORM GOTO PAGE"})," command in the tab control\u2019s method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"FORM GOTO PAGE(arrPages)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The command is executed when the ",(0,r.jsx)(t.code,{children:"On Clicked"})," event occurs. You should then clear the array when the ",(0,r.jsx)(t.code,{children:"On Unload"})," event occurs."]}),"\n",(0,r.jsx)(t.p,{children:"Eis um exemplo de m\xe9todo objeto:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n'})}),"\n",(0,r.jsx)(t.h3,{id:"Ac\xe7\xe3o-Goto-Page",children:"Ac\xe7\xe3o Goto Page"}),"\n",(0,r.jsxs)(t.p,{children:["When you assign the ",(0,r.jsx)(t.code,{children:"gotoPage"})," ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesAction#standard-action",children:"standard action"})," to a tab control, 4D will automatically display the page of the form that corresponds to the number of the tab that is selected."]}),"\n",(0,r.jsx)(t.p,{children:"For example, if the user selects the 3rd tab, 4D will display the third page of the current form (if it exists)."}),"\n",(0,r.jsx)(t.h2,{id:"Propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesDataSource#choice-list-static-list",children:"Lista de op\xe7\xf5es"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesObject#css-class",children:"Classe"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesObject#expression-type",children:"Tipo de express\xe3o"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesText#font",children:"Fonte"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesText#font-size",children:"Tamanho de fonte"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesHelp#help-tip",children:"Mensagem de ajuda"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Tamanho horizontal"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesText#italic",children:"It\xe1lico"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Esquerda"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesObject#object-name",children:"Nome de objeto"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Direita"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesAction#standard-action",children:"A\xe7\xe3o padr\xe3o"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesAppearance#tab-control-direction",children:"Dire\xe7\xe3o de controle aba"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesText#underline",children:"Sublinhado"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Tamanho vertical"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesObject#variable-or-expression",children:"Vari\xe1vel ou express\xe3o"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesDisplay#visibility",children:"Visibilidade"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largura"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,o)=>{var r=o(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,a={},d=null,l=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)n.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},474848:(e,t,o)=>{e.exports=o(221020)},231545:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},375458:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"},28453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>i});var r=o(296540);const s={},a=r.createContext(s);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);