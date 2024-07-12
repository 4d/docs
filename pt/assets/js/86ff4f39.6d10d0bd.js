/*! For license information please see 86ff4f39.6d10d0bd.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91191],{747507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=n(474848),o=n(28453);const s={id:"onBeforeKeystroke",title:"On Before Keystroke"},i=void 0,d={id:"Events/onBeforeKeystroke",title:"On Before Keystroke",description:"| Code | Pode ser chamado por                                                                                                                                                                                                                                                       | Defini\xe7\xe3o                                                                                                                                     |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onBeforeKeystroke.md",sourceDirName:"Events",slug:"/Events/onBeforeKeystroke",permalink:"/docs/pt/19/Events/onBeforeKeystroke",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeforeKeystroke.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onBeforeKeystroke",title:"On Before Keystroke"},sidebar:"docs",previous:{title:"On Before Data Entry",permalink:"/docs/pt/19/Events/onBeforeDataEntry"},next:{title:"On Begin Drag Over",permalink:"/docs/pt/19/Events/onBeginDragOver"}},c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Objectos n\xe3o enterr\xe1veis",id:"objectos-n\xe3o-enterr\xe1veis",level:3},{value:"Sequ\xeancia de teclas",id:"sequ\xeancia-de-teclas",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Code"}),(0,r.jsx)(t.th,{children:"Pode ser chamado por"}),(0,r.jsx)(t.th,{children:"Defini\xe7\xe3o"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"17"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,r.jsx)(t.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"Input"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,r.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,r.jsxs)(t.td,{children:["Um car\xe1cter est\xe1 prestes a ser introduzido no objecto que tem o foco. ",(0,r.jsx)(t.code,{children:"Obter texto editado"})," devolve o texto do objecto ",(0,r.jsx)(t.strong,{children:"sem"})," este car\xe1cter."]})]})})]}),"\n",(0,r.jsxs)(t.details,{children:[(0,r.jsx)(t.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Release"}),(0,r.jsx)(t.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"18 R5"}),(0,r.jsx)(t.td,{children:"- Support in non-enterable list boxes- The event is now triggered after IME validation"})]})})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["After the ",(0,r.jsx)(t.code,{children:"On Before Keystroke"})," and ",(0,r.jsx)(t.a,{href:"/docs/pt/19/Events/onAfterKeystroke",children:(0,r.jsx)(t.code,{children:"On After Keystroke event"})})," events are selected for an object, you can detect and handle the keystrokes within the object, using the ",(0,r.jsx)(t.code,{children:"Form event code"})," command that will return ",(0,r.jsx)(t.code,{children:"On Before Keystroke"})," and then ",(0,r.jsx)(t.a,{href:"/docs/pt/19/Events/onAfterKeystroke",children:(0,r.jsx)(t.code,{children:"On After Keystroke event"})})," (for more information, please refer to the description of the ",(0,r.jsx)(t.code,{children:"Get edited text"})," command). Within the ",(0,r.jsx)(t.code,{children:"On Before Keystroke"})," event, the ",(0,r.jsx)(t.code,{children:"FILTER KEYSTROKE"})," command can be used to filter typed chars."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Esses eventos tamb\xe9m s\xe3o ativados por comandos de linguagem que simulam uma a\xe7\xe3o do usu\xe1rio, como ",(0,r.jsx)(t.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["O evento ",(0,r.jsx)(t.code,{children:"On Before Keystroke"})," n\xe3o \xe9 gerado:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["in a ",(0,r.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listboxOverview#list-box-columns",children:"list box column"})," method except when a cell is being edited (however it is generated in any cases in the ",(0,r.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listboxOverview",children:"list box"})," method),"]}),"\n",(0,r.jsxs)(t.li,{children:["quando as modifica\xe7\xf5es do usu\xe1rio n\xe3o forem realizadas usando o teclado (colar, arrastar e soltar, caixa de sele\xe7\xe3o, lista suspensa, caixa de sele\xe7\xe3o). Para processar esses eventos, voc\xea deve usar ",(0,r.jsx)(t.a,{href:"/docs/pt/19/Events/onAfterEdit",children:(0,r.jsx)(t.code,{children:"On After Edit"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"objectos-n\xe3o-enterr\xe1veis",children:"Objectos n\xe3o enterr\xe1veis"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"On Before Keystroke"})," event can be generated in non-enterable objects, e.g. in a list box even if the list box cells are not enterable, or rows are not selectable. This allows you to build interfaces where the user can scroll dynamically to a specific row in a list box by entering the first letters of a value. In case where the list box cells are enterable, you can use the ",(0,r.jsx)(t.code,{children:"Is editing text"})," command to know if the user is actually entering text in a cell or is using the type-ahead feature and then, execute appropriate code."]}),"\n",(0,r.jsx)(t.h3,{id:"sequ\xeancia-de-teclas",children:"Sequ\xeancia de teclas"}),"\n",(0,r.jsxs)(t.p,{children:["When an entry requires a sequence of keystrokes, the ",(0,r.jsx)(t.code,{children:"On Before Keystroke"})," and ",(0,r.jsx)(t.a,{href:"/docs/pt/19/Events/onAfterKeystroke",children:(0,r.jsx)(t.code,{children:"On After Keystroke"})})," events are generated only when the entry is fully validaded by the user. O comando ",(0,r.jsx)(t.code,{children:"Keystroke"})," retorna o caractere validado. Este caso ocorre principalmente:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'ao usar teclas "mortas", como ^ ou ~: eventos s\xe3o gerados somente quando o caractere ampliado for inserido depois (por exemplo, "e\u251c" ou n^\\),'}),"\n",(0,r.jsx)(t.li,{children:"when an IME (Input method editor) displays an intermediary dialog box where the user can enter a combination of characters: events are generated only when the IME dialog is validated."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/pt/19/Events/onAfterKeystroke",children:"On After Keystroke"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,s={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:d.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);