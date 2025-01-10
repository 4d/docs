"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94589"],{46902:function(e,o,t){t.r(o),t.d(o,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"Events/onAfterKeystroke","title":"On After Keystroke","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                            | Defini\xe7\xe3o                                                                                                                                                                       |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Events/onAfterKeystroke.md","sourceDirName":"Events","slug":"/Events/onAfterKeystroke","permalink":"/docs/pt/Events/onAfterKeystroke","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterKeystroke.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onAfterKeystroke","title":"On After Keystroke"},"sidebar":"docs","previous":{"title":"On After Edit","permalink":"/docs/pt/Events/onAfterEdit"},"next":{"title":"On After Sort","permalink":"/docs/pt/Events/onAfterSort"}}'),n=t("785893"),r=t("250065");let d={id:"onAfterKeystroke",title:"On After Keystroke"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Sequ\xeancia de teclas",id:"sequ\xeancia-de-teclas",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Code"}),(0,n.jsx)(o.th,{children:"Pode ser chamado por"}),(0,n.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"28"}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/comboBoxOverview",children:"Caixa de Combina\xe7\xe3o"})," - Formul\xe1rio - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Entrada"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-columns",children:"Coluna de List Box"})]}),(0,n.jsxs)(o.td,{children:["Um car\xe1cter est\xe1 prestes a ser introduzido no objecto que tem o foco. ",(0,n.jsx)(o.code,{children:"Get edited text"})," retorna o texto do objeto ",(0,n.jsx)(o.strong,{children:"incluindo"})," este caractere."]})]})})]}),"\n",(0,n.jsxs)(o.details,{children:[(0,n.jsx)(o.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Release"}),(0,n.jsx)(o.th,{children:"Mudan\xe7as"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"18 R5"}),(0,n.jsx)(o.td,{children:"- Support in non-enterable list boxes- The event is now triggered after IME validation"})]})})]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["O evento ",(0,n.jsx)(o.code,{children:"Ap\xf3s o Teclado"})," pode geralmente ser substitu\xeddo pelo evento ",(0,n.jsx)(o.a,{href:"/docs/pt/Events/onAfterEdit",children:(0,n.jsx)(o.code,{children:"Ap\xf3s a Edi\xe7\xe3o"})})," (veja abaixo)."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Depois que as propriedades de evento ",(0,n.jsx)(o.a,{href:"/docs/pt/Events/onBeforeKeystroke",children:(0,n.jsx)(o.code,{children:"On Before Keystroke"})})," e ",(0,n.jsx)(o.code,{children:"On After Keystroke"})," forem selecionadas para um objeto, voc\xea pode detectar e manipular as teclas pressionadas dentro do objeto, usando o comando ",(0,n.jsx)(o.code,{children:"FORM event"})," que retornar\xe1 ",(0,n.jsx)(o.code,{children:"On Before Keystroke"})," e, em seguida, ",(0,n.jsx)(o.code,{children:"On After Keystroke"})," (para obter mais informa\xe7\xf5es, consulte a descri\xe7\xe3o do comando ",(0,n.jsx)(o.code,{children:"Get edited text"}),")."]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["Esses eventos tamb\xe9m s\xe3o ativados por comandos de linguagem que simulam uma a\xe7\xe3o do usu\xe1rio, como ",(0,n.jsx)(o.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["O evento ",(0,n.jsx)(o.code,{children:"No Depois da tecla"})," n\xe3o \xe9 gerado:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["no m\xe9todo de ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-columns",children:"colunas da list box"})," exceto quando uma c\xe9lula est\xe1 sendo editada (no entanto, \xe9 gerado em todos os casos no m\xe9todo da ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"list box"}),")"]}),"\n",(0,n.jsxs)(o.li,{children:["quando as modifica\xe7\xf5es do usu\xe1rio n\xe3o forem realizadas usando o teclado (colar, arrastar e soltar, caixa de sele\xe7\xe3o, lista suspensa, caixa de sele\xe7\xe3o). Para processar estes eventos, voc\xea deve usar ",(0,n.jsx)(o.a,{href:"/docs/pt/Events/onAfterEdit",children:(0,n.jsx)(o.code,{children:"No After Edit"})}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"sequ\xeancia-de-teclas",children:"Sequ\xeancia de teclas"}),"\n",(0,n.jsxs)(o.p,{children:["Quando uma entrada requer uma sequ\xeancia de pressionamentos de teclas, os eventos ",(0,n.jsx)(o.a,{href:"/docs/pt/Events/onBeforeKeystroke",children:(0,n.jsx)(o.code,{children:"On Before Keystroke"})})," e [",(0,n.jsx)(o.code,{children:"On After Keystroke event"}),"] s\xe3o gerados apenas quando a entrada \xe9 totalmente validada pelo usu\xe1rio. O comando ",(0,n.jsx)(o.code,{children:"Keystroke"})," retorna o caractere validado. Este caso ocorre principalmente:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:'ao usar teclas "mortas", como ^ ou ~: eventos s\xe3o gerados somente quando o caractere ampliado for inserido depois (por exemplo, "e\u251C" ou n^\\),'}),"\n",(0,n.jsx)(o.li,{children:"quando um IME (Input Code Editor) exibir uma caixa de di\xe1logo intermedi\xe1ria na qual o usu\xe1rio pode inserir uma combina\xe7\xe3o de caracteres: os eventos s\xe3o gerados somente quando a caixa de di\xe1logo do IME for validada."}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/pt/Events/onBeforeKeystroke",children:"On Before Keystroke"}),"."]})]})}function u(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,t){t.d(o,{Z:function(){return a},a:function(){return d}});var s=t(667294);let n={},r=s.createContext(n);function d(e){let o=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);