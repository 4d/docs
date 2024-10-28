"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4436],{646842:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(474848),r=t(28453);const s={id:"tabControl",title:"Controles Abas"},n=void 0,i={id:"FormObjects/tabControl",title:"Controles Abas",description:"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. O usu\xe1rio acessa cada tela clicando na guia correspondente.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/FormObjects/tabControl.md",sourceDirName:"FormObjects",slug:"/FormObjects/tabControl",permalink:"/docs/pt/20-R6/FormObjects/tabControl",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FtabControl.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"tabControl",title:"Controles Abas"},sidebar:"docs",previous:{title:"Subformul\xe1rio",permalink:"/docs/pt/20-R6/FormObjects/subformOverview"},next:{title:"Text",permalink:"/docs/pt/20-R6/FormObjects/text"}},d={},c=[{value:"JSON Exemplo",id:"json-exemplo",level:3},{value:"Adicionando etiquetas a um controle de tabula\xe7\xe3o",id:"adicionando-etiquetas-a-um-controle-de-tabula\xe7\xe3o",level:2},{value:"Utiliza\xe7\xe3o de um objecto",id:"utiliza\xe7\xe3o-de-um-objecto",level:3},{value:"Utilizar uma lista de sele\xe7\xe3o",id:"utilizar-uma-lista-de-sele\xe7\xe3o",level:3},{value:"Utilizar um array texto",id:"utilizar-um-array-texto",level:3},{value:"Funcionalidades do Goto page",id:"funcionalidades-do-goto-page",level:2},{value:"Comando FORM GOTO PAGE",id:"comando-form-goto-page",level:3},{value:"Ac\xe7\xe3o Goto Page",id:"ac\xe7\xe3o-goto-page",level:3},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. O usu\xe1rio acessa cada tela clicando na guia correspondente."}),"\n",(0,a.jsx)(o.p,{children:"O seguinte formul\xe1rio de v\xe1rias p\xe1ginas utiliza um objeto de controlo de pestanas:"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:t(584030).A+"",width:"600",height:"534"})}),"\n",(0,a.jsx)(o.p,{children:"Para passar de uma tela para outra, o usu\xe1rio simplesmente clica na guia correspondente."}),"\n",(0,a.jsxs)(o.p,{children:["The screens can represent pages in a multi-page form or an object that changes when the user clicks a tab. Se o controle de guias \xe9 usado como uma ferramenta de navega\xe7\xe3o de p\xe1gina, ent\xe3o o ",(0,a.jsx)(o.a,{href:"https://doc.4d.comando/4dv19/help/command/en/page247.html",children:(0,a.jsx)(o.code,{children:"FORM GOTO PAGE"})})," ou a a\xe7\xe3o padr\xe3o ",(0,a.jsx)(o.code,{children:"gotoPage"})," seria usada quando um usu\xe1rio clica em uma aba."]}),"\n",(0,a.jsx)(o.p,{children:"Outra utiliza\xe7\xe3o do controlo de separadores consiste em controlar os dados apresentados num subformul\xe1rio. Por exemplo, um Rolodex pode ser implementado utilizando um controlo de pestanas. The tabs would display the letters of the alphabet and the tab control\u2019s action would be to load the data corresponding to the letter that the user clicked."}),"\n",(0,a.jsx)(o.p,{children:"Cada pestana pode apresentar etiquetas ou etiquetas e um pequeno \xedcone. Se incluir \xedcones, estes aparecem \xe0 esquerda de cada etiqueta. Aqui est\xe1 um exemplo de um controlo de pestanas que utiliza \xedcones:"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:t(751381).A+"",width:"599",height:"510"})}),"\n",(0,a.jsx)(o.p,{children:"When you create a tab control, 4D manages the spacing and placement of the tabs. You only need to supply the labels in the form of an array, or the icons and labels in the form of a hierarchical list."}),"\n",(0,a.jsx)(o.p,{children:"If the tab control is wide enough to display all the tabs with both the labels and icons, it displays both. If the tab control is not wide enough to display both the labels and icons, 4D displays the icons only. If it can\u2019t fit all the icons, it places scroll arrows to the right of the last visible tab. As setas de deslocamento permitem ao usu\xe1rio deslocar os \xedcones para a esquerda ou para a direita."}),"\n",(0,a.jsx)(o.p,{children:"Under macOS, in addition to the standard position (top), the tab controls can also be aligned to the bottom."}),"\n",(0,a.jsx)(o.h3,{id:"json-exemplo",children:"JSON Exemplo"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\t"myTab": {\n\t\t"type": "tab",\n \t\t"left": 60,\t\n\t\t"top": 160,\t \n\t\t"width": 100,\t\n\t\t"height": 20,\t\n\t\t"labelsPlacement": "bottom"\t//define a dire\xe7\xe3o\n\t}\n'})}),"\n",(0,a.jsx)(o.h2,{id:"adicionando-etiquetas-a-um-controle-de-tabula\xe7\xe3o",children:"Adicionando etiquetas a um controle de tabula\xe7\xe3o"}),"\n",(0,a.jsx)(o.p,{children:"To supply the labels for a tab control, you can use:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"um objeto"}),"\n",(0,a.jsx)(o.li,{children:"uma lista de escolha"}),"\n",(0,a.jsx)(o.li,{children:"um array"}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"utiliza\xe7\xe3o-de-um-objecto",children:"Utiliza\xe7\xe3o de um objecto"}),"\n",(0,a.jsxs)(o.p,{children:["Voc\xea pode atribuir um ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Concepts/object",children:"objeto"})," encapsulando uma ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Concepts/collection",children:"collection"})," como a ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#variable-or-expression",children:"fonte de dados"})," do controle de abas. O objeto deve conter as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Propriedade"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"valores"})}),(0,a.jsx)(o.td,{children:"Collection"}),(0,a.jsx)(o.td,{children:"Obrigat\xf3rio - Cole\xe7\xe3o de valores escalares. S\xf3 s\xe3o suportados valores cadeia. Se for inv\xe1lido, vazio ou n\xe3o definido, o controle de tabula\xe7\xe3o estar\xe1 vazio"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"index"})}),(0,a.jsx)(o.td,{children:"number"}),(0,a.jsxs)(o.td,{children:["\xcdndice da p\xe1gina de controle de guia atualmente (valor entre 0 e ",(0,a.jsx)(o.code,{children:"collection.length-1"}),")"]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.code,{children:"currentValue"})}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"Valor atual selecionado"})]})]})]}),"\n",(0,a.jsx)(o.p,{children:"The initialization code must be executed before the form is presented to the user."}),"\n",(0,a.jsxs)(o.p,{children:["En el siguiente ejemplo, ",(0,a.jsx)(o.code,{children:"Form.tabControl"})," se ha definido como ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#variable-or-expression",children:"expresi\xf3n"})," del control de pesta\xf1as. Voc\xea pode associar a ",(0,a.jsxs)(o.a,{href:"#goto-page-action",children:["a\xe7\xe3o padr\xe3o ",(0,a.jsx)(o.code,{children:"gotoPage"})]})," ao objeto do formul\xe1rio:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'Form.tabControl:=New object Form.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")\nForm.tabControl.index:=2 //start on page 3\n'})}),"\n",(0,a.jsx)(o.h3,{id:"utilizar-uma-lista-de-sele\xe7\xe3o",children:"Utilizar uma lista de sele\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["Puede asignar una ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesDataSource#choice-list-static-list",children:"lista de opciones"}),' al control de pesta\xf1as, ya sea a trav\xe9s de una colecci\xf3n (lista est\xe1tica) o un puntero JSON a una lista json ("$ref"). Icons associated with list items in the Lists editor will be displayed in the tob control.']}),"\n",(0,a.jsx)(o.h3,{id:"utilizar-um-array-texto",children:"Utilizar um array texto"}),"\n",(0,a.jsxs)(o.p,{children:["Voc\xea pode criar um array Text que contenha os nomes de cada p\xe1gina do formul\xe1rio. Este c\xf3digo deve ser executado antes de o formul\xe1rio ser apresentado ao usu\xe1rio. Por exemplo, voc\xea poderia colocar o c\xf3digo no m\xe9todo objeto do controle de guia e execut\xe1-lo quando o evento ",(0,a.jsx)(o.code,{children:"On Load"})," ocorrer."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n'})}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["Voc\xea tamb\xe9m pode armazenar os nomes das p\xe1ginas em uma lista hier\xe1rquica e usar o comando ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page288.html",children:"LIST TO ARRAY"})," para carregar os valores no array."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"funcionalidades-do-goto-page",children:"Funcionalidades do Goto page"}),"\n",(0,a.jsx)(o.h3,{id:"comando-form-goto-page",children:"Comando FORM GOTO PAGE"}),"\n",(0,a.jsxs)(o.p,{children:["Voc\xea pode usar o comando ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page247.html",children:(0,a.jsx)(o.code,{children:"FORM GOTO PAGE"})})," no m\xe9todo do controle de aba:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"FORM GOTO PAGE(arrPages)\n"})}),"\n",(0,a.jsxs)(o.p,{children:["O comando \xe9 executado quando o evento ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onClicked",children:(0,a.jsx)(o.code,{children:"On Clicked"})})," ocorre. Em seguida, voc\xea deve limpar o array quando o evento ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onUnload",children:(0,a.jsx)(o.code,{children:"No Unload"})})," ocorrer."]}),"\n",(0,a.jsx)(o.p,{children:"Eis um exemplo de m\xe9todo objeto:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n'})}),"\n",(0,a.jsx)(o.h3,{id:"ac\xe7\xe3o-goto-page",children:"Ac\xe7\xe3o Goto Page"}),"\n",(0,a.jsxs)(o.p,{children:["Quando voc\xea atribuir a ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesAction#padrao",children:"a\xe7\xe3o padr\xe3o"})," ",(0,a.jsx)(o.code,{children:"gotoPage"})," para o controle de abas, o 4D exibir\xe1 automaticamente a p\xe1gina do formul\xe1rio que corresponde ao n\xfamero da guia selecionada."]}),"\n",(0,a.jsx)(o.p,{children:"For example, if the user selects the 3rd tab, 4D will display the third page of the current form (if it exists)."}),"\n",(0,a.jsx)(o.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesDataSource#choice-list-static-list",children:"Lista de op\xe7\xf5es"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#expression-type",children:"Tipo de express\xe3o"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesText#font",children:"Fonte"})," -  - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesHelp#help-tip",children:"Mensagem de ajuda"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamento horizontal"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesText#italic",children:"It\xe1lico"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#left",children:"Esquerda"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#object-name",children:"Nome do objeto"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#right",children:"Direita"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#save-value",children:"Guardar valor"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesAction#standard-action",children:"A\xe7\xe3o padr\xe3o"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesAppearance#tab-control-direction",children:"Dire\xe7\xe3o do controle de tabula\xe7\xe3o"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesText#underline",children:"Sublinhado"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionamiento vertical"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#variable-or-expression",children:"Variable ou express\xe3o"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesDisplay#visibility",children:"Visibilidade"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largura"})]})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},584030:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},751381:(e,o,t)=>{t.d(o,{A:()=>a});const a=t.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"},28453:(e,o,t)=>{t.d(o,{R:()=>n,x:()=>i});var a=t(296540);const r={},s=a.createContext(r);function n(e){const o=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(s.Provider,{value:o},e.children)}}}]);