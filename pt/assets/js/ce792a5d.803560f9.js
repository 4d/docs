"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16744"],{9938:function(e,o,s){s.r(o),s.d(o,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"Events/onAfterKeystroke","title":"On After Keystroke","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                       | Defini\xe7\xe3o                                                                                                                                       |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onAfterKeystroke.md","sourceDirName":"Events","slug":"/Events/onAfterKeystroke","permalink":"/docs/pt/20/Events/onAfterKeystroke","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterKeystroke.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onAfterKeystroke","title":"On After Keystroke"},"sidebar":"docs","previous":{"title":"On After Edit","permalink":"/docs/pt/20/Events/onAfterEdit"},"next":{"title":"On After Sort","permalink":"/docs/pt/20/Events/onAfterSort"}}'),n=s("785893"),r=s("250065");let d={id:"onAfterKeystroke",title:"On After Keystroke"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Sequ\xeancia de teclas",id:"sequ\xeancia-de-teclas",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Code"}),(0,n.jsx)(o.th,{children:"Pode ser chamado por"}),(0,n.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"28"}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,n.jsx)(o.a,{href:"/docs/pt/20/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,n.jsxs)(o.td,{children:["Um car\xe1cter est\xe1 prestes a ser introduzido no objecto que tem o foco. ",(0,n.jsx)(o.code,{children:"Get edited text"})," devolve o texto do objecto ",(0,n.jsx)(o.strong,{children:"incluindo"})," este car\xe1cter."]})]})})]}),"\n",(0,n.jsxs)(o.details,{children:[(0,n.jsx)(o.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Release"}),(0,n.jsx)(o.th,{children:"Mudan\xe7as"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"18 R5"}),(0,n.jsx)(o.td,{children:"- Support in non-enterable list boxes- The event is now triggered after IME validation"})]})})]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["O evento ",(0,n.jsx)(o.code,{children:"Ap\xf3s o Teclado"})," pode ser substitu\xeddo pelo evento ",(0,n.jsx)(o.a,{href:"/docs/pt/20/Events/onAfterEdit",children:(0,n.jsx)(o.code,{children:"Ap\xf3s a Edi\xe7\xe3o"})})," (veja abaixo)."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Depois que as propriedades de evento ",(0,n.jsx)(o.a,{href:"/docs/pt/20/Events/onBeforeKeystroke",children:(0,n.jsx)(o.code,{children:"On Before Keystroke"})})," e ",(0,n.jsx)(o.code,{children:"On After Keystroke"})," forem selecionadas para um objeto, voc\xea poder\xe1 detectar e manipular as teclas pressionadas dentro do objeto usando o comando ",(0,n.jsx)(o.code,{children:"FORM event"})," que retornar\xe1 ",(0,n.jsx)(o.code,{children:"On Before Keystroke"})," e, em seguida, ",(0,n.jsx)(o.code,{children:"On After Keystroke"})," (para obter mais informa\xe7\xf5es, consulte a descri\xe7\xe3o do comando ",(0,n.jsx)(o.code,{children:"Get edited text"}),")."]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["Esses eventos tamb\xe9m s\xe3o ativados por comandos de linguagem que simulam uma a\xe7\xe3o do usu\xe1rio, como ",(0,n.jsx)(o.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["O evento ",(0,n.jsx)(o.code,{children:"No Depois da tecla"})," n\xe3o \xe9 gerado:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["no ",(0,n.jsx)(o.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"lista colunas"})," m\xe9todo, exceto quando uma c\xe9lula est\xe1 sendo editada (entretanto, ela \xe9 gerada em quaisquer casos no m\xe9todo ",(0,n.jsx)(o.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"lista caixa"}),"),"]}),"\n",(0,n.jsxs)(o.li,{children:["quando as modifica\xe7\xf5es do usu\xe1rio n\xe3o forem realizadas usando o teclado (colar, arrastar e soltar, caixa de sele\xe7\xe3o, lista suspensa, caixa de sele\xe7\xe3o). Para processar esses eventos, voc\xea deve usar ",(0,n.jsx)(o.a,{href:"/docs/pt/20/Events/onAfterEdit",children:(0,n.jsx)(o.code,{children:"On After Edit"})}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"sequ\xeancia-de-teclas",children:"Sequ\xeancia de teclas"}),"\n",(0,n.jsxs)(o.p,{children:["Quando uma entrada exigir uma sequ\xeancia de pressionamentos de teclas, os eventos ",(0,n.jsx)(o.a,{href:"/docs/pt/20/Events/onBeforeKeystroke",children:(0,n.jsx)(o.code,{children:"On Before Keystroke"})})," e [",(0,n.jsx)(o.code,{children:"On After Keystroke event"}),"] s\xe3o gerados somente quando a entrada for totalmente validada pelo usu\xe1rio. O comando ",(0,n.jsx)(o.code,{children:"Keystroke"})," retorna o caractere validado. Este caso ocorre principalmente:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:'ao usar teclas "mortas", como ^ ou ~: eventos s\xe3o gerados somente quando o caractere ampliado for inserido depois (por exemplo, "e\u251C" ou n^\\),'}),"\n",(0,n.jsx)(o.li,{children:"quando um IME (Input Code Editor) exibir uma caixa de di\xe1logo intermedi\xe1ria na qual o usu\xe1rio pode inserir uma combina\xe7\xe3o de caracteres: os eventos s\xe3o gerados somente quando a caixa de di\xe1logo do IME for validada."}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/pt/20/Events/onBeforeKeystroke",children:"On Before Keystroke"}),"."]})]})}function u(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return i},a:function(){return d}});var t=s(667294);let n={},r=t.createContext(n);function d(e){let o=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);