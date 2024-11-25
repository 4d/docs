"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43276"],{924995:function(e,o,s){s.r(o),s.d(o,{metadata:()=>i,contentTitle:()=>n,default:()=>p,assets:()=>d,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"FormObjects/comboBoxOverview","title":"Combo Box","description":"Uma caixa de combina\xe7\xe3o \xe9 semelhante a uma [lista suspensa] (dropdownList_Overview.md#overview), exceto pelo fato de que ela aceita texto digitado pelo teclado e tem op\xe7\xf5es adicionais.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/FormObjects/comboBox_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/comboBoxOverview","permalink":"/docs/pt/20-R6/FormObjects/comboBoxOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FcomboBox_overview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"comboBoxOverview","title":"Combo Box"},"sidebar":"docs","previous":{"title":"Caixa de selec\xe7\xe3o","permalink":"/docs/pt/20-R6/FormObjects/checkboxOverview"},"next":{"title":"Lista suspensa ou drop down","permalink":"/docs/pt/20-R6/FormObjects/dropdownListOverview"}}'),r=s("785893"),t=s("250065");let a={id:"comboBoxOverview",title:"Combo Box"},n=void 0,d={},c=[{value:"Gest\xe3o do combo boxes",id:"gest\xe3o-do-combo-boxes",level:2},{value:"Utiliza\xe7\xe3o de um objecto",id:"utiliza\xe7\xe3o-de-um-objecto",level:3},{value:"Usar um array",id:"usar-um-array",level:3},{value:"Utilizar uma lista de sele\xe7\xe3o",id:"utilizar-uma-lista-de-sele\xe7\xe3o",level:3},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"Uma caixa de combina\xe7\xe3o \xe9 semelhante a uma [lista suspensa] (dropdownList_Overview.md#overview), exceto pelo fato de que ela aceita texto digitado pelo teclado e tem op\xe7\xf5es adicionais."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:s(375033).Z+"",width:"173",height:"106"})}),"\n",(0,r.jsx)(o.p,{children:"Em outros aspectos, voc\xea deve tratar uma combo box como uma \xe1rea edit\xe1vel que usa seu array ou uma lista de escolha como um conjunto de valores padr\xe3o."}),"\n",(0,r.jsx)(o.h2,{id:"gest\xe3o-do-combo-boxes",children:"Gest\xe3o do combo boxes"}),"\n",(0,r.jsxs)(o.p,{children:["Use o evento [",(0,r.jsx)(o.code,{children:"On Data Change"}),"] (Events/onDataChange.md) para gerenciar as entradas na \xe1rea de entrada, como faria com qualquer objeto de formul\xe1rio de entrada."]}),"\n",(0,r.jsx)(o.p,{children:"Voc\xea inicializa uma caixa de combina\xe7\xe3o exatamente da mesma forma que uma [lista suspensa] (dropdownList_Overview.md#overview): usando um objeto, uma matriz ou uma lista de op\xe7\xf5es."}),"\n",(0,r.jsx)(o.h3,{id:"utiliza\xe7\xe3o-de-um-objecto",children:"Utiliza\xe7\xe3o de um objecto"}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Esta funcionalidade s\xf3 est\xe1 dispon\xedvel em projectos 4D."}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Um ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/Concepts/object",children:"objeto"})," encapsulando uma ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/Concepts/collection",children:"cole\xe7\xe3o"})," pode ser usado como a fonte de dados de uma caixa de combina\xe7\xe3o. O objeto deve conter as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Propriedade"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"valores"})}),(0,r.jsx)(o.td,{children:"Collection"}),(0,r.jsxs)(o.td,{children:["Obrigat\xf3rio - Cole\xe7\xe3o de valores escalares. Todos os valores devem ser do mesmo tipo. Tipos suportados",(0,r.jsx)(o.li,{children:":"}),(0,r.jsx)(o.li,{children:"stringsnumbersdatestimesSe"}),"estiver vazia ou n\xe3o for definida, a caixa de combina\xe7\xe3o estar\xe1 vazia"]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"currentValue"})}),(0,r.jsx)(o.td,{children:"igual a Colec\xe7\xe3o"}),(0,r.jsx)(o.td,{children:"Texto introduzido pelo usu\xe1rio"})]})]})]}),"\n",(0,r.jsx)(o.p,{children:"Se o objeto contiver outras propriedades, estas s\xe3o ignoradas."}),"\n",(0,r.jsxs)(o.p,{children:["Quando o usu\xe1rio insere um texto na caixa de combina\xe7\xe3o, a propriedade ",(0,r.jsx)(o.code,{children:"currentValue"})," do objeto obt\xe9m o texto inserido."]}),"\n",(0,r.jsx)(o.h3,{id:"usar-um-array",children:"Usar um array"}),"\n",(0,r.jsxs)(o.p,{children:["Consulte ",(0,r.jsx)(o.strong,{children:"Usando uma matriz"})," na [p\xe1gina da lista suspensa] (dropdownList_Overview.md#using-an-array) para obter informa\xe7\xf5es sobre como inicializar a matriz."]}),"\n",(0,r.jsx)(o.p,{children:"Um combo box \xe9 iniciado em exatamente da mesma forma que uma lista drop down Se o usu\xe1rio digitar texto em uma combo box, preenche o 0imo elemento do array."}),"\n",(0,r.jsx)(o.h3,{id:"utilizar-uma-lista-de-sele\xe7\xe3o",children:"Utilizar uma lista de sele\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:"If you want to use a combo box to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the form object's data source. Isso facilita gerenciar vari\xe1veis/campos listados."}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Se usar uma lista hier\xe1rquica, s\xf3 o primeiro n\xedvel \xe9 mostrado e pode ser selecionado."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Para associar uma caixa de combina\xe7\xe3o a um campo ou vari\xe1vel, basta digitar o nome do campo ou da vari\xe1vel diretamente em [Variable or Expression] (properties_Object.md#variable-or-expression) do objeto do formul\xe1rio na Lista de propriedades."}),"\n",(0,r.jsx)(o.p,{children:"When the form is executed, 4D automatically manages the combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the combo box when the form is displayed:"}),"\n",(0,r.jsxs)(o.p,{children:["Consulte ",(0,r.jsx)(o.strong,{children:"Usando uma escolha"})," na p\xe1gina [lista suspensa] (dropdownList_Overview.md#using-a-choice-list) para obter mais informa\xe7\xf5es."]}),"\n",(0,r.jsx)(o.h2,{id:"op\xe7\xf5es",children:"Op\xe7\xf5es"}),"\n",(0,r.jsx)(o.p,{children:"Objetos do tipo combo box aceitam duas op\xe7\xf5es espec\xedficas referentes a listas de escolhas associadas com elas:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesDataSource#automatic-insertion",children:"Inser\xe7\xe3o autom\xe1tica"}),": permite adicionar automaticamente um valor \xe0 fonte de dados quando um usu\xe1rio insere um valor que n\xe3o \xe9 encontrado na lista associada \xe0 caixa de combina\xe7\xe3o."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesRangeOfValues#excluded-list",children:"Excluded List"})," (lista de valores exclu\xeddos): permite definir uma lista cujos valores n\xe3o podem ser inseridos na caixa de combina\xe7\xe3o. Se um valor exclu\xeddo for digitado, n\xe3o ser\xe1 aceito e uma mensagem de erro \xe9 exibido."]}),"\n"]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"A associa\xe7\xe3o de uma [lista de valores obrigat\xf3rios] (properties_RangeOfValues.md#required-list) n\xe3o est\xe1 dispon\xedvel para caixas de combina\xe7\xe3o. Em uma interface, se um objeto precisar propor uma lista finita de valores necess\xe1rios, voc\xea dever\xe1 usar um objeto [drop-down list] (dropdownList_Overview.md#overview)."}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesDisplay#alpha-format",children:"Alpha Format"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesDisplay#date-format",children:"Date Format"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#expression-type",children:"Expression Type"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesText#font",children:"Font"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesDisplay#time-format",children:"Time Format"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function p(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},375033:function(e,o,s){s.d(o,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,o,s){s.d(o,{Z:function(){return n},a:function(){return a}});var i=s(667294);let r={},t=i.createContext(r);function a(e){let o=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);