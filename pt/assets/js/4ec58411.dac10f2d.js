"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55473"],{165283:function(e,a,t){t.r(a),t.d(a,{metadata:()=>n,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>i,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/on-host-database-event-database-method","title":"On Host Database Event database method","description":"$1 -> On Host Database Event database method","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-host-database-event-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-host-database-event-database-method","permalink":"/docs/pt/commands/on-host-database-event-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-host-database-event-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-host-database-event-database-method","title":"On Host Database Event database method","slug":"/commands/on-host-database-event-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Exit database method","permalink":"/docs/pt/commands/on-exit-database-method"},"next":{"title":"On Mobile App Action database method","permalink":"/docs/pt/commands/on-mobile-app-action-database-method"}}'),s=t("785893"),o=t("250065");let d={id:"on-host-database-event-database-method",title:"On Host Database Event database method",slug:"/commands/on-host-database-event-database-method",displayed_sidebar:"docs"},r=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4}];function l(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"$1 -> On Host Database Event database method"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe2metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(a.tbody,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"$1"}),(0,s.jsx)(a.td,{children:"Integer"}),(0,s.jsx)(a.td,{children:"\u2190"}),(0,s.jsx)(a.td,{children:"C\xf3digo do evento"})]})})]}),"\n",(0,s.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(a.p,{children:["O ",(0,s.jsx)(a.strong,{children:"On Host Database Event database method"})," permite aos recipientes 4D executar c\xf3digo quando se abre e fecha a base local."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota"}),": Por raz\xf5es de seguran\xe7a, a execu\xe7\xe3o deste m\xe9todo base deve ser autorizado explicitamente na base local. Para obter mais informa\xe7\xe3o sobre este ponto, consulte o manual de ",(0,s.jsx)(a.em,{children:"Desenho"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["O ",(0,s.jsx)(a.strong,{children:"On Host Database Event database method"})," se executa automaticamente somente em bases utilizadas como recipientes de bases locais (quando se autoriza nas propriedades da base local). Se chama quando se produzem eventos relacionados com a abertura e feche da base local."]}),"\n",(0,s.jsxs)(a.p,{children:['Para processar um evento, deve provar o valor do par\xe2metro $1 no m\xe9todo, e comparar ele com uma das seguintes constantes, dispon\xedveis no tema "',(0,s.jsx)(a.em,{children:"Eventos da base de dados"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Constante"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{children:"Valor"}),(0,s.jsx)(a.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"On after host database exit"}),(0,s.jsx)(a.td,{children:"Inteiro longo"}),(0,s.jsx)(a.td,{children:"4"}),(0,s.jsxs)(a.td,{children:["O ",(0,s.jsx)(a.a,{href:"/docs/pt/commands/semaphore",children:"Semaphore"})," da base local acaba de terminar sua execu\xe7\xe3o"]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"On after host database startup"}),(0,s.jsx)(a.td,{children:"Inteiro longo"}),(0,s.jsx)(a.td,{children:"2"}),(0,s.jsx)(a.td,{children:"O da base local acaba de terminar sua execu\xe7\xe3o"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"On before host database exit"}),(0,s.jsx)(a.td,{children:"Inteiro longo"}),(0,s.jsx)(a.td,{children:"3"}),(0,s.jsxs)(a.td,{children:["A base local est\xe1 fechando. O ",(0,s.jsx)(a.a,{href:"/docs/pt/commands/semaphore",children:"Semaphore"})," da base local ainda n\xe3o foi chamado. ",(0,s.jsx)(a.br,{}),"O ",(0,s.jsx)(a.a,{href:"/docs/pt/commands/semaphore",children:"Semaphore"})," da base local n\xe3o \xe9 chamado enquanto o ",(0,s.jsx)(a.a,{href:"/docs/pt/commands/on-host-database-event-database-method",children:"On Host Database Event database method"})," do recipiente esteja executando"]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"On before host database startup"}),(0,s.jsx)(a.td,{children:"Inteiro longo"}),(0,s.jsx)(a.td,{children:"1"}),(0,s.jsxs)(a.td,{children:["A base local foi iniciada. O da base local ainda n\xe3o foi chamado. ",(0,s.jsx)(a.br,{}),"O m\xe9todo base On Startup da base local n\xe3o \xe9 chamado enquanto o ",(0,s.jsx)(a.a,{href:"/docs/pt/commands/on-host-database-event-database-method",children:"On Host Database Event database method"})," do recipiente esteja executando"]})]})]})]}),"\n",(0,s.jsx)(a.p,{children:"Isto permite aos recipientes 4D carregar e guardar prefer\xeancias ou estados de usu\xe1rio relacionados com o funcionamento da base local."}),"\n",(0,s.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(a.p,{children:"Exemplo de estrutura tipo de um m\xe9todo base On Host Database Event:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo base On Host Database Event\n\xa0var $1 : Integer\n\xa0Case of\n\xa0\xa0\xa0\xa0:($1=On before host database startup)\n\xa0\xa0// colocar aqui o c\xf3digo a executar antes do m\xe9todo base "On Startup"\n\xa0\xa0// da base local\n\xa0\xa0\xa0\xa0:($1=On after host database startup)\n\xa0\xa0// colocar aqui o c\xf3digo a executar antes do m\xe9todo base "On Startup"\n\xa0\xa0// da base local\n\xa0\xa0\xa0\xa0:($1=On before host database exit)\n\xa0\xa0// colocar aqui o c\xf3digo a executar antes do m\xe9todo base "On Exit"\n\xa0\xa0// da base local\n\xa0\xa0\xa0\xa0:($1=On after host database exit)\n\xa0\xa0// colocar aqui o c\xf3digo a executar antes do m\xe9todo base "On Exit"\n\xa0\xa0// da base local\n\xa0End case\n'})})]})}function h(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,a,t){t.d(a,{Z:function(){return r},a:function(){return d}});var n=t(667294);let s={},o=n.createContext(s);function d(e){let a=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);