/*! For license information please see 08126f2d.3d9ae4e0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80808],{980507:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=t(474848),r=t(28453);const n={id:"onAfterKeystroke",title:"On After Keystroke"},d=void 0,a={id:"Events/onAfterKeystroke",title:"On After Keystroke",description:"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                            | Defini\xe7\xe3o                                                                                                                                                                       |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Events/onAfterKeystroke.md",sourceDirName:"Events",slug:"/Events/onAfterKeystroke",permalink:"/docs/pt/Events/onAfterKeystroke",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterKeystroke.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onAfterKeystroke",title:"On After Keystroke"},sidebar:"docs",previous:{title:"On After Edit",permalink:"/docs/pt/Events/onAfterEdit"},next:{title:"On After Sort",permalink:"/docs/pt/Events/onAfterSort"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Sequ\xeancia de teclas",id:"sequ\xeancia-de-teclas",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Code"}),(0,s.jsx)(o.th,{children:"Pode ser chamado por"}),(0,s.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"28"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/comboBoxOverview",children:"Caixa de Combina\xe7\xe3o"})," - Formul\xe1rio - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Entrada"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-columns",children:"Coluna de List Box"})]}),(0,s.jsxs)(o.td,{children:["Um car\xe1cter est\xe1 prestes a ser introduzido no objecto que tem o foco. ",(0,s.jsx)(o.code,{children:"Get edited text"})," retorna o texto do objeto ",(0,s.jsx)(o.strong,{children:"incluindo"})," este caractere."]})]})})]}),"\n",(0,s.jsxs)(o.details,{children:[(0,s.jsx)(o.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Release"}),(0,s.jsx)(o.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"18 R5"}),(0,s.jsx)(o.td,{children:"- Support in non-enterable list boxes- The event is now triggered after IME validation"})]})})]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["O evento ",(0,s.jsx)(o.code,{children:"Ap\xf3s o Teclado"})," pode geralmente ser substitu\xeddo pelo evento ",(0,s.jsx)(o.a,{href:"/docs/pt/Events/onAfterEdit",children:(0,s.jsx)(o.code,{children:"Ap\xf3s a Edi\xe7\xe3o"})})," (veja abaixo)."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Depois que as propriedades de evento ",(0,s.jsx)(o.a,{href:"/docs/pt/Events/onBeforeKeystroke",children:(0,s.jsx)(o.code,{children:"On Before Keystroke"})})," e ",(0,s.jsx)(o.code,{children:"On After Keystroke"})," forem selecionadas para um objeto, voc\xea pode detectar e manipular as teclas pressionadas dentro do objeto, usando o comando ",(0,s.jsx)(o.code,{children:"FORM event"})," que retornar\xe1 ",(0,s.jsx)(o.code,{children:"On Before Keystroke"})," e, em seguida, ",(0,s.jsx)(o.code,{children:"On After Keystroke"})," (para obter mais informa\xe7\xf5es, consulte a descri\xe7\xe3o do comando ",(0,s.jsx)(o.code,{children:"Get edited text"}),")."]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["Esses eventos tamb\xe9m s\xe3o ativados por comandos de linguagem que simulam uma a\xe7\xe3o do usu\xe1rio, como ",(0,s.jsx)(o.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["O evento ",(0,s.jsx)(o.code,{children:"No Depois da tecla"})," n\xe3o \xe9 gerado:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["no m\xe9todo de ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-columns",children:"colunas da list box"})," exceto quando uma c\xe9lula est\xe1 sendo editada (no entanto, \xe9 gerado em todos os casos no m\xe9todo da ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"list box"}),")"]}),"\n",(0,s.jsxs)(o.li,{children:["quando as modifica\xe7\xf5es do usu\xe1rio n\xe3o forem realizadas usando o teclado (colar, arrastar e soltar, caixa de sele\xe7\xe3o, lista suspensa, caixa de sele\xe7\xe3o). Para processar estes eventos, voc\xea deve usar ",(0,s.jsx)(o.a,{href:"/docs/pt/Events/onAfterEdit",children:(0,s.jsx)(o.code,{children:"No After Edit"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"sequ\xeancia-de-teclas",children:"Sequ\xeancia de teclas"}),"\n",(0,s.jsxs)(o.p,{children:["Quando uma entrada requer uma sequ\xeancia de pressionamentos de teclas, os eventos ",(0,s.jsx)(o.a,{href:"/docs/pt/Events/onBeforeKeystroke",children:(0,s.jsx)(o.code,{children:"On Before Keystroke"})})," e [",(0,s.jsx)(o.code,{children:"On After Keystroke event"}),"] s\xe3o gerados apenas quando a entrada \xe9 totalmente validada pelo usu\xe1rio. O comando ",(0,s.jsx)(o.code,{children:"Keystroke"})," retorna o caractere validado. Este caso ocorre principalmente:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:'ao usar teclas "mortas", como ^ ou ~: eventos s\xe3o gerados somente quando o caractere ampliado for inserido depois (por exemplo, "e\u251c" ou n^\\),'}),"\n",(0,s.jsx)(o.li,{children:"quando um IME (Input Code Editor) exibir uma caixa de di\xe1logo intermedi\xe1ria na qual o usu\xe1rio pode inserir uma combina\xe7\xe3o de caracteres: os eventos s\xe3o gerados somente quando a caixa de di\xe1logo do IME for validada."}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/Events/onBeforeKeystroke",children:"On Before Keystroke"}),"."]})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,o,t)=>{var s=t(296540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,t){var s,n={},c=null,l=null;for(s in void 0!==t&&(c=""+t),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)d.call(o,s)&&!i.hasOwnProperty(s)&&(n[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps)void 0===n[s]&&(n[s]=o[s]);return{$$typeof:r,type:e,key:c,ref:l,props:n,_owner:a.current}}o.Fragment=n,o.jsx=c,o.jsxs=c},474848:(e,o,t)=>{e.exports=t(221020)},28453:(e,o,t)=>{t.d(o,{R:()=>d,x:()=>a});var s=t(296540);const r={},n=s.createContext(r);function d(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);