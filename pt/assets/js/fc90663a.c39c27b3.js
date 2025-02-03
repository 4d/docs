"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87238"],{317633:function(e,o,s){s.r(o),s.d(o,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"Events/onBeforeKeystroke","title":"On Before Keystroke","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                   | Defini\xe7\xe3o                                                                                                                                     |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onBeforeKeystroke.md","sourceDirName":"Events","slug":"/Events/onBeforeKeystroke","permalink":"/docs/pt/20/Events/onBeforeKeystroke","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeforeKeystroke.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onBeforeKeystroke","title":"On Before Keystroke"},"sidebar":"docs","previous":{"title":"On Before Data Entry","permalink":"/docs/pt/20/Events/onBeforeDataEntry"},"next":{"title":"On Begin Drag Over","permalink":"/docs/pt/20/Events/onBeginDragOver"}}'),t=s("785893"),n=s("250065");let a={id:"onBeforeKeystroke",title:"On Before Keystroke"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Objectos n\xe3o enterr\xe1veis",id:"objectos-n\xe3o-enterr\xe1veis",level:3},{value:"Sequ\xeancia de teclas",id:"sequ\xeancia-de-teclas",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Code"}),(0,t.jsx)(o.th,{children:"Pode ser chamado por"}),(0,t.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"17"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/20/FormObjects/writeProAreaOverview",children:"\xc1rea 4D Write Pro "})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - Formul\xe1rio - ",(0,t.jsx)(o.a,{href:"/docs/pt/20/FormObjects/inputOverview",children:"Entrada"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"Coluna List box"})]}),(0,t.jsxs)(o.td,{children:["Um car\xe1cter est\xe1 prestes a ser introduzido no objecto que tem o foco. ",(0,t.jsx)(o.code,{children:"Obter texto editado"})," devolve o texto do objecto ",(0,t.jsx)(o.strong,{children:"sem"})," este car\xe1cter."]})]})})]}),"\n",(0,t.jsxs)(o.details,{children:[(0,t.jsx)(o.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Release"}),(0,t.jsx)(o.th,{children:"Mudan\xe7as"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"18 R5"}),(0,t.jsx)(o.td,{children:"- Support in non-enterable list boxes- The event is now triggered after IME validation"})]})})]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["Depois que as propriedades de evento ",(0,t.jsx)(o.code,{children:"On Before Keystroke"})," e ",(0,t.jsx)(o.a,{href:"/docs/pt/20/Events/onAfterKeystroke",children:(0,t.jsx)(o.code,{children:"On After Keystroke"})})," forem selecionadas para um objeto, voc\xea poder\xe1 detectar e manipular as teclas pressionadas no objeto usando o comando ",(0,t.jsx)(o.code,{children:"Form event code"})," que retornar\xe1 ",(0,t.jsx)(o.code,{children:"On Before Keystroke"})," e, em seguida, ",(0,t.jsx)(o.a,{href:"/docs/pt/20/Events/onAfterKeystroke",children:(0,t.jsx)(o.code,{children:"On After Keystroke"})})," (para obter mais informa\xe7\xf5es, consulte a descri\xe7\xe3o do comando ",(0,t.jsx)(o.code,{children:"Get edited text"}),"). No evento ",(0,t.jsx)(o.code,{children:"On Before Keystroke"}),", o comando ",(0,t.jsx)(o.code,{children:"FILTER KEYROKE"})," pode ser usado para filtrar caracteres tipados."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:["Esses eventos tamb\xe9m s\xe3o ativados por comandos de linguagem que simulam uma a\xe7\xe3o do usu\xe1rio, como ",(0,t.jsx)(o.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["O evento ",(0,t.jsx)(o.code,{children:"On Before Keystroke"})," n\xe3o \xe9 gerado:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["no m\xe9todo ",(0,t.jsx)(o.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"colunas de list box"}),", exceto quando uma c\xe9lula est\xe1 sendo editada (entretanto, ela \xe9 gerada em quaisquer casos no m\xe9todo ",(0,t.jsx)(o.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"list box"}),"),"]}),"\n",(0,t.jsxs)(o.li,{children:["quando as modifica\xe7\xf5es do usu\xe1rio n\xe3o forem realizadas usando o teclado (colar, arrastar e soltar, caixa de sele\xe7\xe3o, lista suspensa, caixa de sele\xe7\xe3o). Para processar esses eventos, voc\xea deve usar ",(0,t.jsx)(o.a,{href:"/docs/pt/20/Events/onAfterEdit",children:(0,t.jsx)(o.code,{children:"On After Edit"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"objectos-n\xe3o-enterr\xe1veis",children:"Objectos n\xe3o enterr\xe1veis"}),"\n",(0,t.jsxs)(o.p,{children:["O evento ",(0,t.jsx)(o.code,{children:"On Before Keystroke"})," pode ser gerado em objetos n\xe3o inser\xedveis, por exemplo, em um list box mesmo se as c\xe9lulas do list box n\xe3o forem inser\xedveis, ou as linhas n\xe3o forem selecion\xe1veis. Isso permite que voc\xea construa interfaces onde o usu\xe1rio pode rolar dinamicamente para uma linha espec\xedfica em um list box, digitando as primeiras letras de um valor. No caso em que as c\xe9lulas da caixa de listagem s\xe3o edit\xe1veis, voc\xea pode usar o comando ",(0,t.jsx)(o.code,{children:"Is editing text"})," para saber se o usu\xe1rio est\xe1 realmente digitando texto em uma c\xe9lula ou est\xe1 usando o recurso de preenchimento autom\xe1tico e, em seguida, executar o c\xf3digo apropriado."]}),"\n",(0,t.jsx)(o.h3,{id:"sequ\xeancia-de-teclas",children:"Sequ\xeancia de teclas"}),"\n",(0,t.jsxs)(o.p,{children:["Quando uma entrada exigir uma sequ\xeancia de pressionamentos de teclas, os eventos ",(0,t.jsx)(o.code,{children:"On Before Keystroke"})," e ",(0,t.jsx)(o.a,{href:"/docs/pt/20/Events/onAfterKeystroke",children:(0,t.jsx)(o.code,{children:"On After Keystroke event"})})," s\xe3o gerados somente quando a entrada for totalmente validada pelo usu\xe1rio. O comando ",(0,t.jsx)(o.code,{children:"Keystroke"})," retorna o caractere validado. Este caso ocorre principalmente:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:'ao usar teclas "mortas", como ^ ou ~: eventos s\xe3o gerados somente quando o caractere ampliado for inserido depois (por exemplo, "e\u251C" ou n^\\),'}),"\n",(0,t.jsx)(o.li,{children:"quando um IME (Input Code Editor) exibir uma caixa de di\xe1logo intermedi\xe1ria na qual o usu\xe1rio pode inserir uma combina\xe7\xe3o de caracteres: os eventos s\xe3o gerados somente quando a caixa de di\xe1logo do IME for validada."}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/20/Events/onAfterKeystroke",children:"On After Keystroke"}),"."]})]})}function u(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return d},a:function(){return a}});var r=s(667294);let t={},n=r.createContext(t);function a(e){let o=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);