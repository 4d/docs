"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41855"],{418917:function(e,n,d){d.r(n),d.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>s});var r=JSON.parse('{"id":"Events/onAfterEdit","title":"On After Edit","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                  | Defini\xe7\xe3o                                                               |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onAfterEdit.md","sourceDirName":"Events","slug":"/Events/onAfterEdit","permalink":"/docs/pt/20/Events/onAfterEdit","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterEdit.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onAfterEdit","title":"On After Edit"},"sidebar":"docs","previous":{"title":"On Activate","permalink":"/docs/pt/20/Events/onActivate"},"next":{"title":"On After Keystroke","permalink":"/docs/pt/20/Events/onAfterKeystroke"}}'),t=d("785893"),i=d("250065");let s={id:"onAfterEdit",title:"On After Edit"},l=void 0,o={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Caso geral",id:"caso-geral",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"action = editChange",id:"action--editchange",level:4},{value:"action = valueChanged",id:"action--valuechanged",level:4},{value:"action = DragDropBlock",id:"action--dragdropblock",level:4},{value:"action = DragFillBlock",id:"action--dragfillblock",level:4},{value:"action = formulaChanged",id:"action--formulachanged",level:4},{value:"action = clipboardPasted",id:"action--clipboardpasted",level:4},{value:"Exemplo",id:"exemplo",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Pode ser chamado por"}),(0,t.jsx)(n.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"45"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"FormObjects/viewProArea_overview",children:"4D View Pro area"})," - ",(0,t.jsx)(n.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,t.jsx)(n.a,{href:"/docs/pt/20/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,t.jsx)(n.td,{children:"O conte\xfado do objecto inser\xedvel que tem o foco acabou de ser modificado"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(n.h3,{id:"caso-geral",children:"Caso geral"}),"\n",(0,t.jsx)(n.p,{children:"This event can be used filter the data entry in keyboard enterable objects at the lowest level."}),"\n",(0,t.jsxs)(n.p,{children:["When it is used, this event is generated after each change made to the contents of an enterable object, regardless of the action that caused the change, ",(0,t.jsx)(n.em,{children:"i.e."}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Standard editing actions which modify content like paste, cut, delete or cancel;"}),"\n",(0,t.jsx)(n.li,{children:"Eliminar um valor (a\xe7\xe3o semelhante a colar);"}),"\n",(0,t.jsxs)(n.li,{children:["Any keyboard entry made by the user; in this case, the ",(0,t.jsx)(n.code,{children:"On After Edit"})," event is generated after the ",(0,t.jsx)(n.a,{href:"/docs/pt/20/Events/onBeforeKeystroke",children:(0,t.jsx)(n.code,{children:"On Before Keystroke"})})," and ",(0,t.jsx)(n.a,{href:"/docs/pt/20/Events/onAfterKeystroke",children:(0,t.jsx)(n.code,{children:"On After Keystroke"})})," events, if they are used."]}),"\n",(0,t.jsxs)(n.li,{children:["Any modification made using a language command that simulates a user action (i.e., ",(0,t.jsx)(n.code,{children:"POST KEY"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["No evento ",(0,t.jsx)(n.code,{children:"On After Edit"}),", os dados texto introduzidos s\xe3o devolvidos pelo comando ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page655.html",children:(0,t.jsx)(n.code,{children:"Get edited text"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,t.jsxs)(n.p,{children:["O objecto devolvido pelo comando ",(0,t.jsx)(n.code,{children:"FORM Event"})," cont\xe9m:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"code"}),(0,t.jsx)(n.td,{children:"inteiro longo"}),(0,t.jsx)(n.td,{children:"On After Edit"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"description"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'"On After Edit"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objectName"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheetName"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Nome da folha do evento"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"action"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'"editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted"'})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Dependendo do valor da propriedade ",(0,t.jsx)(n.code,{children:"action"}),", o ",(0,t.jsx)(n.a,{href:"/docs/pt/20/Events/overview#event-object",children:"objeto de evento"})," conter\xe1 propriedades adicionais."]}),"\n",(0,t.jsx)(n.h4,{id:"action--editchange",children:"action = editChange"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"range"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Intervalo de c\xe9lulas"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"editingText"}),(0,t.jsx)(n.td,{children:"variant"}),(0,t.jsx)(n.td,{children:"O valor do editor actual"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"action--valuechanged",children:"action = valueChanged"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"range"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Intervalo de c\xe9lulas"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oldValue"}),(0,t.jsx)(n.td,{children:"variant"}),(0,t.jsx)(n.td,{children:"Valor da c\xe9lula antes da altera\xe7\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"newValue"}),(0,t.jsx)(n.td,{children:"variant"}),(0,t.jsx)(n.td,{children:"Valor da c\xe9lula ap\xf3s a altera\xe7\xe3o"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"action--dragdropblock",children:"action = DragDropBlock"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fromRange"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Intervalo do c\xe9lulas de origem (a ser arrastado)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"toRange"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Intervalo de c\xe9lulas de destino (local de largada)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"copy"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Especifica se o intervalo fonte \xe9 copiado ou n\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"insert"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Especifica se o intervalo fonte \xe9 inserido ou n\xe3o"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"action--dragfillblock",children:"action = DragFillBlock"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fillRange"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Intervalo utilizado para o preenchimento"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"autoFillType"}),(0,t.jsx)(n.td,{children:"longint"}),(0,t.jsxs)(n.td,{children:["Valor utilizado para o enchimento.",(0,t.jsx)(n.li,{children:"0: as c\xe9lulas s\xe3o preenchidas com todos os dados (valores, formata\xe7\xe3o e f\xf3rmulas)"}),(0,t.jsx)(n.li,{children:"1: as c\xe9lulas s\xe3o preenchidas com dados autom\xe1ticos sequenciais"}),(0,t.jsx)(n.li,{children:"2: As c\xe9lulas s\xe3o preenchidas apenas com formata\xe7\xe3o"}),(0,t.jsx)(n.li,{children:"3: as c\xe9lulas s\xe3o preenchidas com valores, mas n\xe3o com formata\xe7\xe3o"}),(0,t.jsx)(n.li,{children:"4: Os valores s\xe3o removidos das c\xe9lulas"}),(0,t.jsx)(n.li,{children:"5: As c\xe9lulas s\xe3o preenchidas automaticamente"})]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"action--formulachanged",children:"action = formulaChanged"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"range"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Intervalo de c\xe9lulas"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formula"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"A f\xf3rmula introduzida"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"action--clipboardpasted",children:"action = clipboardPasted"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"range"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Intervalo de c\xe9lulas"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pasteOption"}),(0,t.jsx)(n.td,{children:"inteiro longo"}),(0,t.jsxs)(n.td,{children:["Especifica o que \xe9 colado da \xe1rea de transfer\xeancia:",(0,t.jsx)(n.li,{children:"0: tudo \xe9 colado (valores, formata\xe7\xe3o e f\xf3rmulas)"}),(0,t.jsx)(n.li,{children:"1: apenas os valores s\xe3o colados"}),(0,t.jsx)(n.li,{children:"2: Apenas a formata\xe7\xe3o \xe9 colada"}),(0,t.jsx)(n.li,{children:"3: somente as f\xf3rmulas s\xe3o coladas"}),(0,t.jsx)(n.li,{children:"4: os valores e a formata\xe7\xe3o s\xe3o colados (n\xe3o as f\xf3rmulas)"}),(0,t.jsx)(n.li,{children:"5: as f\xf3rmulas e a formata\xe7\xe3o s\xe3o coladas (n\xe3o os valores)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pasteData"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["Os dados da \xe1rea de transfer\xeancia a serem colados",(0,t.jsx)(n.li,{children:'"text" (texto): O texto da \xe1rea de transfer\xeancia'}),(0,t.jsx)(n.li,{children:'"html" (texto): O HTML da \xe1rea de transfer\xeancia'})]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Eis um exemplo de tratamento de um evento ",(0,t.jsx)(n.code,{children:"On After Edit"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On After Edit)\n    If(FORM Event.action="valueChanged")\n       ALERT("WARNING: You are currently changing the value\\  \n       from "+String(FORM Event.oldValue)+\\  \n       " to "+String(FORM Event.newValue)+"!")\n    End if\n End if\n    End if\n End if\n    End if\n End if\n'})}),"\n",(0,t.jsx)(n.p,{children:"O exemplo acima poderia gerar um objeto evento como este:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n\n"code":45;\n"description":"On After Edit";\n"objectName":"ViewProArea"\n"sheetname":"Sheet1";\n"action":"valueChanged";\n"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};\n"oldValue":"The quick brown fox";\n"newValue":"jumped over the lazy dog";\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return s}});var r=d(667294);let t={},i=r.createContext(t);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);