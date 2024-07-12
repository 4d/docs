/*! For license information please see f2eab8ae.9cb08720.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5921],{565040:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var s=r(474848),t=r(28453);const i={id:"comboBoxOverview",title:"Combo Box"},a=void 0,n={id:"FormObjects/comboBoxOverview",title:"Combo Box",description:"Um combo box \xe9 parecido com uma lista drop-down, exceto que aceita texto digitado do teclado e tem op\xe7\xf5es adicionais.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/FormObjects/comboBox_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/comboBoxOverview",permalink:"/docs/pt/20/FormObjects/comboBoxOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FcomboBox_overview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"comboBoxOverview",title:"Combo Box"},sidebar:"docs",previous:{title:"Caixa de selec\xe7\xe3o",permalink:"/docs/pt/20/FormObjects/checkboxOverview"},next:{title:"Lista suspensa ou drop down",permalink:"/docs/pt/20/FormObjects/dropdownListOverview"}},d={},c=[{value:"Gest\xe3o do combo boxes",id:"gest\xe3o-do-combo-boxes",level:2},{value:"Utiliza\xe7\xe3o de um objecto",id:"utiliza\xe7\xe3o-de-um-objecto",level:3},{value:"Usar um array",id:"usar-um-array",level:3},{value:"Utilizar uma lista de sele\xe7\xe3o",id:"utilizar-uma-lista-de-sele\xe7\xe3o",level:3},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:["Um combo box \xe9 parecido com uma lista ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/dropdownListOverview#overview",children:"drop-down"}),", exceto que aceita texto digitado do teclado e tem op\xe7\xf5es adicionais."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:r(768328).A+"",width:"173",height:"106"})}),"\n",(0,s.jsx)(o.p,{children:"Em outros aspectos, voc\xea deve tratar uma combo box como uma \xe1rea edit\xe1vel que usa seu array ou uma lista de escolha como um conjunto de valores padr\xe3o."}),"\n",(0,s.jsx)(o.h2,{id:"gest\xe3o-do-combo-boxes",children:"Gest\xe3o do combo boxes"}),"\n",(0,s.jsxs)(o.p,{children:["Use o evento ",(0,s.jsx)(o.code,{children:"On Data Change"})," para gerenciar entradas em uma \xe1rea edit\xe1vel, como faria em qualquer objeto \xe1rea edit\xe1vel."]}),"\n",(0,s.jsxs)(o.p,{children:["You initialize a combo box in exactly the same way as a ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/dropdownListOverview#overview",children:"drop-down list"}),": using an object, an array, or a choice list."]}),"\n",(0,s.jsx)(o.h3,{id:"utiliza\xe7\xe3o-de-um-objecto",children:"Utiliza\xe7\xe3o de um objecto"}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Esta funcionalidade s\xf3 est\xe1 dispon\xedvel em projectos 4D."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["An ",(0,s.jsx)(o.a,{href:"/docs/pt/20/Concepts/object",children:"object"})," encapsulating a ",(0,s.jsx)(o.a,{href:"Concepts/dt_collection",children:"collection"})," can be used as the data source of a combo box. O objeto deve conter as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Propriedade"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"values"})}),(0,s.jsx)(o.td,{children:"Collection"}),(0,s.jsxs)(o.td,{children:["Obrigat\xf3rio - Cole\xe7\xe3o de valores escalares. Todos os valores devem ser do mesmo tipo. Tipos suportados:",(0,s.jsx)(o.li,{children:"strings"}),(0,s.jsx)(o.li,{children:"n\xfameros"}),(0,s.jsx)(o.li,{children:"datas"}),(0,s.jsx)(o.li,{children:"horas"}),"Se estiver vazia ou n\xe3o for definida, a caixa combinada est\xe1 vazia"]})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"currentValue"})}),(0,s.jsx)(o.td,{children:"igual a Colec\xe7\xe3o"}),(0,s.jsx)(o.td,{children:"Texto introduzido pelo usu\xe1rio"})]})]})]}),"\n",(0,s.jsx)(o.p,{children:"Se o objeto contiver outras propriedades, estas s\xe3o ignoradas."}),"\n",(0,s.jsxs)(o.p,{children:["When the user enters text into the combo box, the ",(0,s.jsx)(o.code,{children:"currentValue"})," property of the object gets the entered text."]}),"\n",(0,s.jsx)(o.h3,{id:"usar-um-array",children:"Usar um array"}),"\n",(0,s.jsxs)(o.p,{children:["Please refer to ",(0,s.jsx)(o.strong,{children:"Using an array"})," in the ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/dropdownListOverview#using-an-array",children:"drop-down list page"})," for information about how to initialize the array."]}),"\n",(0,s.jsx)(o.p,{children:"Um combo box \xe9 iniciado em exatamente da mesma forma que uma lista drop down Se o usu\xe1rio digitar texto em uma combo box, preenche o 0imo elemento do array."}),"\n",(0,s.jsx)(o.h3,{id:"utilizar-uma-lista-de-sele\xe7\xe3o",children:"Utilizar uma lista de sele\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"If you want to use a combo box to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the form object's data source. Isso facilita gerenciar vari\xe1veis/campos listados."}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Se usar uma lista hier\xe1rquica, s\xf3 o primeiro n\xedvel \xe9 mostrado e pode ser selecionado."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["To associate a combo box with a field or variable, you can just enter the name of the field or variable directly in the ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," of the form object in the Property List."]}),"\n",(0,s.jsx)(o.p,{children:"When the form is executed, 4D automatically manages the combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the combo box when the form is displayed:"}),"\n",(0,s.jsxs)(o.p,{children:["Please refer to ",(0,s.jsx)(o.strong,{children:"Using a choice"})," in the ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/dropdownListOverview#using-a-choice-list",children:"drop-down list page"})," for more information."]}),"\n",(0,s.jsx)(o.h2,{id:"op\xe7\xf5es",children:"Op\xe7\xf5es"}),"\n",(0,s.jsx)(o.p,{children:"Objetos do tipo combo box aceitam duas op\xe7\xf5es espec\xedficas referentes a listas de escolhas associadas com elas:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesDataSource#automatic-insertion",children:"Inser\xe7\xe3o autom\xe1tica"}),": permite adicionar um valor automaticamente a uma lista armazenada na mem\xf3ria quando um usu\xe1rio digitar um valor que n\xe3o \xe9 encontraddo na lista de escolhas associadas com uma combo box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesRangeOfValues#excluded-list",children:"Excluded List"})," (lista de valores exclu\xeddos): permite estabelecer uma lista cujos valores n\xe3o podem ser digitados na combo box. Se um valor exclu\xeddo for digitado, n\xe3o ser\xe1 aceito e uma mensagem de erro \xe9 exibido."]}),"\n"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["Associating a ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesRangeOfValues#required-list",children:"list of required values"})," is not available for combo boxes. Em uma interface, se um objeto precisar propor uma lista finita de valores exigidos, ent\xe3o deve usar um objeto  ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/dropdownListOverview#overview",children:"do tipo menu Pop-up"})," ."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesDisplay#alpha-format",children:"Formato Alfa"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesText#bold",children:"Negrito"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - [Estilo de bot\xe3o](properties_TextAndPicture. md#button-style) - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesDataSource#choice-list",children:"Lista de op\xe7\xf5es"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesObject#css-class",children:"Classe"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesDisplay#date-format",children:"Formato de data"})," - [Foc\xe1vel](properties_Entry. md#focusable) - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesText#font",children:"Fonte"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesText#font-color",children:"Cor da fonte"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesText#font-size",children:"Tamanho da fonte"})," - [Altura](properties_CoordinatesAndSizing. md#height) - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesHelp#help-tip",children:"Conselho de ajuda"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Tamanho horizontal"})," - [It\xe1lica](properties_Text. md#italic) - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Esquerda"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesDisplay#not-rendered",children:"N\xe3o renderizado"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesObject#object-name",children:"Nome de objeto"})," - [Direita](properties_CoordinatesAndSizing. md#right) - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesAction#standard-action",children:"A\xe7\xe3o padr\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesDisplay#time-format",children:"Formato de hora"})," - [Top](properties_CoordinatesAndSizing. md#top) - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesText#underline",children:"Sublinhado"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesObject#variable-or-expression",children:"Vari\xe1vel ou Express\xe3o"})," - [Tamanho vertical](properties_ResizingOptions. md#vertical-sizing) - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesDisplay#visibility",children:"Visibilidade"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largura"})]})]})}function p(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,o,r)=>{var s=r(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,n=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,r){var s,i={},c=null,l=null;for(s in void 0!==r&&(c=""+r),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)a.call(o,s)&&!d.hasOwnProperty(s)&&(i[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps)void 0===i[s]&&(i[s]=o[s]);return{$$typeof:t,type:e,key:c,ref:l,props:i,_owner:n.current}}o.Fragment=i,o.jsx=c,o.jsxs=c},474848:(e,o,r)=>{e.exports=r(221020)},768328:(e,o,r)=>{r.d(o,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,o,r)=>{r.d(o,{R:()=>a,x:()=>n});var s=r(296540);const t={},i=s.createContext(t);function a(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);