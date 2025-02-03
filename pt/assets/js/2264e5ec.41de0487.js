"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81534"],{697169:function(e,o,a){a.r(o),a.d(o,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>n});var r=JSON.parse('{"id":"FormObjects/tabControl","title":"Controles Abas","description":"Uma guia cria um objeto que permite que o usu\xe1rio escolha entre v\xe1rias telas virtuais exibidas nos limites da guia. O usu\xe1rio acessa cada tela clicando na guia correspondente.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/FormObjects/tabControl.md","sourceDirName":"FormObjects","slug":"/FormObjects/tabControl","permalink":"/docs/pt/19/FormObjects/tabControl","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FtabControl.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"tabControl","title":"Controles Abas"},"sidebar":"docs","previous":{"title":"Subformul\xe1rio","permalink":"/docs/pt/19/FormObjects/subformOverview"},"next":{"title":"Text","permalink":"/docs/pt/19/FormObjects/text"}}'),s=a("785893"),t=a("250065");let i={id:"tabControl",title:"Controles Abas"},n=void 0,d={},c=[{value:"Exemplo JSON",id:"exemplo-json",level:3},{value:"Adicionando etiquetas a um controle de tabula\xe7\xe3o",id:"adicionando-etiquetas-a-um-controle-de-tabula\xe7\xe3o",level:2},{value:"Utiliza\xe7\xe3o de um objecto",id:"utiliza\xe7\xe3o-de-um-objecto",level:3},{value:"Utilizar uma lista de sele\xe7\xe3o",id:"utilizar-uma-lista-de-sele\xe7\xe3o",level:3},{value:"Utilizar um array texto",id:"utilizar-um-array-texto",level:3},{value:"Funcionalidades do Goto page",id:"funcionalidades-do-goto-page",level:2},{value:"Comando FORM GOTO PAGE",id:"comando-form-goto-page",level:3},{value:"Ac\xe7\xe3o Goto Page",id:"ac\xe7\xe3o-goto-page",level:3},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Uma guia cria um objeto que permite que o usu\xe1rio escolha entre v\xe1rias telas virtuais exibidas nos limites da guia. O usu\xe1rio acessa cada tela clicando na guia correspondente."}),"\n",(0,s.jsx)(o.p,{children:"O seguinte formul\xe1rio de v\xe1rias p\xe1ginas utiliza um objeto de controlo de pestanas:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:a(832011).Z+"",width:"600",height:"534"})}),"\n",(0,s.jsx)(o.p,{children:"Para passar de uma tela para outra, o usu\xe1rio simplesmente clica na guia correspondente."}),"\n",(0,s.jsxs)(o.p,{children:["As telas podem representar p\xe1ginas em um formul\xe1rio de v\xe1rias p\xe1ginas ou um objeto que muda quando o usu\xe1rio clica em uma guia. Se o controle de tabula\xe7\xe3o for usado como uma ferramenta de navega\xe7\xe3o de p\xe1gina, o comando ",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page247.html",children:(0,s.jsx)(o.code,{children:"FORM GOTO PAGE"})})," ou a a\xe7\xe3o padr\xe3o ",(0,s.jsx)(o.code,{children:"gotoPage"})," ser\xe1 usada quando um usu\xe1rio clicar em uma tabula\xe7\xe3o."]}),"\n",(0,s.jsx)(o.p,{children:"Outra utiliza\xe7\xe3o do controlo de separadores consiste em controlar os dados apresentados num subformul\xe1rio. Por exemplo, um Rolodex pode ser implementado utilizando um controlo de pestanas. As guias mostrariam as letras do alfabeto e a a\xe7\xe3o do controle do guia seria carregar os dados correspondentes \xe0 letra que o usu\xe1rio clicou."}),"\n",(0,s.jsx)(o.p,{children:"Cada pestana pode apresentar etiquetas ou etiquetas e um pequeno \xedcone. Se incluir \xedcones, estes aparecem \xe0 esquerda de cada etiqueta. Aqui est\xe1 um exemplo de um controlo de pestanas que utiliza \xedcones:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:a(855850).Z+"",width:"599",height:"510"})}),"\n",(0,s.jsx)(o.p,{children:"Quando voc\xea cria um controle de abas, 4D gerencia o espa\xe7amento e posicionamento das abas. Voc\xea s\xf3 precisa fornecer as etiquetas na forma de um array, ou os \xedcones e etiquetas na forma de uma lista hier\xe1rquica."}),"\n",(0,s.jsx)(o.p,{children:"Se o controle de tabula\xe7\xf5es \xe9 largo o suficiente para exibir todas as abas com r\xf3tulos e \xedcones, isso exibe ambos. Se o controle de guias n\xe3o for suficientemente amplo para exibir ambos os r\xf3tulos e \xedcones, 4D exibe apenas os \xedcones. Se ele n\xe3o serve todos os \xedcones, coloca as setas de rolagem \xe0 direita da \xfaltima aba vis\xedvel. As setas de deslocamento permitem ao usu\xe1rio deslocar os \xedcones para a esquerda ou para a direita."}),"\n",(0,s.jsx)(o.p,{children:"No macOS, al\xe9m da posi\xe7\xe3o padr\xe3o (superior), os controles de aba tamb\xe9m podem ser alinhados ao fundo."}),"\n",(0,s.jsx)(o.h3,{id:"exemplo-json",children:"Exemplo JSON"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' "myTab": {\n  "type": "tab",\n   "left": 60, \n  "top": 160,  \n  "width": 100, \n  "height": 20, \n  "labelsPlacement": "bottom" //define a dire\xe7\xe3o\n}\n'})}),"\n",(0,s.jsx)(o.h2,{id:"adicionando-etiquetas-a-um-controle-de-tabula\xe7\xe3o",children:"Adicionando etiquetas a um controle de tabula\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"Para fornecer as etiquetas para o controle de abas, voc\xea pode usar:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"um objeto"}),"\n",(0,s.jsx)(o.li,{children:"uma lista de escolha"}),"\n",(0,s.jsx)(o.li,{children:"um array"}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"utiliza\xe7\xe3o-de-um-objecto",children:"Utiliza\xe7\xe3o de um objecto"}),"\n",(0,s.jsxs)(o.p,{children:["\xc9 poss\xedvel atribuir um ",(0,s.jsx)(o.a,{href:"/docs/pt/19/Concepts/object",children:"objeto"})," que encapsula uma ",(0,s.jsx)(o.a,{href:"/docs/pt/19/Concepts/collection",children:"cole\xe7\xe3o"})," como a ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesObject#variable-or-expression",children:"fonte de dados"})," do controle de tabula\xe7\xe3o. O objeto deve conter as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Propriedade"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"values"})}),(0,s.jsx)(o.td,{children:"Collection"}),(0,s.jsx)(o.td,{children:"Obrigat\xf3rio - Cole\xe7\xe3o de valores escalares. S\xf3 s\xe3o suportados valores cadeia. Se for inv\xe1lido, vazio ou n\xe3o definido, o controle de tabula\xe7\xe3o estar\xe1 vazio"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"index"})}),(0,s.jsx)(o.td,{children:"number"}),(0,s.jsxs)(o.td,{children:["\xcdndice da p\xe1gina de controle de guia atualmente (valor entre 0 e ",(0,s.jsx)(o.code,{children:"collection.length-1"}),")"]})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"currentValue"})}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"Valor atual selecionado"})]})]})]}),"\n",(0,s.jsx)(o.p,{children:"O c\xf3digo de inicializa\xe7\xe3o deve ser executado antes que o formul\xe1rio seja apresentado ao usu\xe1rio."}),"\n",(0,s.jsxs)(o.p,{children:["No exemplo a seguir, ",(0,s.jsx)(o.code,{children:"Form.tabControl"})," foi definido como ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesObject#variable-or-expression",children:"express\xe3o"})," de controle de tabula\xe7\xe3o. Voc\xea pode associar a a\xe7\xe3o padr\xe3o ",(0,s.jsx)(o.a,{href:"#goto-page-action",children:(0,s.jsx)(o.code,{children:"gotoPage"})})," ao objeto formul\xe1rio:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'Form.tabControl:=New object Form.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")\nForm.tabControl.index:=2 //start on page 3\n'})}),"\n",(0,s.jsx)(o.h3,{id:"utilizar-uma-lista-de-sele\xe7\xe3o",children:"Utilizar uma lista de sele\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["Voc\xea pode atribuir uma ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesDataSource#choice-list-static-list",children:"lista de valores"}),' ao controle de abas atrav\xe9s de uma cole\xe7\xe3o (lista est\xe1tica) ou um ponteiro JSON ("$ref") para uma lista de json"). Icons associated with list items in the Lists editor will be displayed in the tob control.']}),"\n",(0,s.jsx)(o.h3,{id:"utilizar-um-array-texto",children:"Utilizar um array texto"}),"\n",(0,s.jsxs)(o.p,{children:["Voc\xea pode criar um array Text que contenha os nomes de cada p\xe1gina do formul\xe1rio. Este c\xf3digo deve ser executado antes de o formul\xe1rio ser apresentado ao usu\xe1rio. Por exemplo, voc\xea poderia colocar o c\xf3digo no m\xe9todo objeto do controle de guia e execut\xe1-lo quando o evento ",(0,s.jsx)(o.code,{children:"On Load"})," ocorrer."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n'})}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["Voc\xea tamb\xe9m pode armazenar os nomes das p\xe1ginas em uma lista hier\xe1rquica e usar o comando ",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page288.html",children:"LIST TO ARRAY"})," para carregar os valores no array."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"funcionalidades-do-goto-page",children:"Funcionalidades do Goto page"}),"\n",(0,s.jsx)(o.h3,{id:"comando-form-goto-page",children:"Comando FORM GOTO PAGE"}),"\n",(0,s.jsxs)(o.p,{children:["Voc\xea pode usar o ",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page247.html",children:(0,s.jsx)(o.code,{children:"FORM GOTO PAGE"})})," no m\xe9todo do controle de tabula\xe7\xe3o:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"FORM GOTO PAGE(arrPages)\n"})}),"\n",(0,s.jsxs)(o.p,{children:["O comando \xe9 executado quando o bot\xe3o ",(0,s.jsx)(o.a,{href:"/docs/pt/19/Events/onClicked",children:(0,s.jsx)(o.code,{children:"On Clicked"})})," ocorre. Em seguida, voc\xea deve excluir o array quando ocorrer o evento ",(0,s.jsx)(o.a,{href:"/docs/pt/19/Events/onUnload",children:(0,s.jsx)(o.code,{children:"On Unload"})}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Eis um exemplo de m\xe9todo objeto:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n'})}),"\n",(0,s.jsx)(o.h3,{id:"ac\xe7\xe3o-goto-page",children:"Ac\xe7\xe3o Goto Page"}),"\n",(0,s.jsxs)(o.p,{children:["Quando voc\xea atribuir a ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesAction#standard-action",children:"a\xe7\xe3o padr\xe3o"})," ",(0,s.jsx)(o.code,{children:"gotoPage"})," para um objeto do tipo Tab, 4D ir\xe1 exibir automaticamente a p\xe1gina do formul\xe1rio que corresponde ao n\xfamero da guia selecionada."]}),"\n",(0,s.jsx)(o.p,{children:"Por exemplo, se o usu\xe1rio selecionar a terceira aba, 4D exibir\xe1 a terceira p\xe1gina do formul\xe1rio atual (se existir)."}),"\n",(0,s.jsx)(o.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesDataSource#choice-list-static-list",children:"Lista de op\xe7\xf5es"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesObject#css-class",children:"Classe"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesObject#expression-type",children:"Tipo de express\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesText#font",children:"Fonte"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesText#font-size",children:"Tamanho de fonte"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesHelp#help-tip",children:"Mensagem de ajuda"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Tamanho horizontal"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesText#italic",children:"It\xe1lico"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#left",children:"Esquerda"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesObject#object-name",children:"Nome de objeto"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#right",children:"Direita"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesAction#standard-action",children:"A\xe7\xe3o padr\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesAppearance#tab-control-direction",children:"Dire\xe7\xe3o de controle aba"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesText#underline",children:"Sublinhado"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Tamanho vertical"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesObject#variable-or-expression",children:"Vari\xe1vel ou express\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesDisplay#visibility",children:"Visibilidade"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largura"})]})]})}function p(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},832011:function(e,o,a){a.d(o,{Z:function(){return r}});let r=a.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},855850:function(e,o,a){a.d(o,{Z:function(){return r}});let r=a.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"},250065:function(e,o,a){a.d(o,{Z:function(){return n},a:function(){return i}});var r=a(667294);let s={},t=r.createContext(s);function i(e){let o=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);