"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39274"],{329606:function(e,o,t){t.r(o),t.d(o,{default:()=>m,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>i,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/focus-object","title":"Focus object","description":"Focus object  : Pointer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/focus-object.md","sourceDirName":"commands-legacy","slug":"/commands/focus-object","permalink":"/docs/pt/commands/focus-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffocus-object.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"focus-object","title":"Focus object","slug":"/commands/focus-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Caps lock down","permalink":"/docs/pt/commands/caps-lock-down"},"next":{"title":"Get Application color scheme","permalink":"/docs/pt/commands/get-application-color-scheme"}}'),s=t("785893"),d=t("250065");let r={id:"focus-object",title:"Focus object",slug:"/commands/focus-object",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Nota de compatibilidade",id:"nota-de-compatibilidade",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Focus object"}),"  : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Resultado"}),(0,s.jsx)(o.td,{children:"Pointer"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Ponteiro ao objeto que tem o foco"})]})})]}),"\n",(0,s.jsx)(o.h2,{id:"nota-de-compatibilidade",children:"Nota de compatibilidade"}),"\n",(0,s.jsxs)(o.p,{children:["Este comando s\xf3 \xe9 conservado por raz\xf5es de compatibilidade. Come\xe7a com a vers\xe3o 12 de 4D, recomenda-se que se use o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-get-pointer",children:"OBJECT Get pointer"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["Focus object retorna um ponteiro ao objeto que tem o foco no formul\xe1rio atual. Se nenhum objeto tiver o foco, o comando retorna ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/is-nil-pointer",children:"Is nil pointer"}),".. Pode utilizar Focus object para realizar uma a\xe7\xe3o em um \xe1rea de formul\xe1rio sem saber qual objeto est\xe1 selecionado atualmente. Tenha certeza de testar se o objeto \xe9 do tipo correto, utilizando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/type",children:"Type"}),",, antes de realizar uma a\xe7\xe3o."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota"}),": quando se utiliza com um list box de tipo array, a fun\xe7\xe3o Focus object retorna um ponteiro ao list box ou \xe0 coluna do list box dependendo do contexto. Para mais informa\xe7\xe3o, veja a se\xe7\xe3o ",(0,s.jsx)(o.em,{children:"Gest\xe3o de objetos List Box"})]}),"\n",(0,s.jsx)(o.p,{children:"Este comando n\xe3o pode ser utilizado com campos em sub-formul\xe1rios."}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota"}),": este comando \xe9 utilizado apenas no contexto de entrada de dados, do contr\xe1rio um erro \xe9 produzido"]}),"\n",(0,s.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"O exemplo abaixo \xe9 um m\xe9todo de objeto para um bot\xe3o. O m\xe9todo de objeto modifica os dados no objeto atual a mai\xfasculas. O objeto deve ser do tipo texto ou alfa (tipo 0 ou 24):"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\xa0$vp :=Focus object\xa0//Obter o ponteiro ao \xfaltimo objeto\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Nil($vp))\xa0//Nenhum objeto tem o foco\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0:((Type($vp->)=Is alpha field)|(Type($vp->)=Is string var))\xa0//Se for um objeto de tipo texto ou alfa\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vp->:=Uppercase($vp->)\xa0//Mudar os dados a mai\xfasculas\n\xa0End case\n"})}),"\n",(0,s.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-get-pointer",children:"OBJECT Get pointer"})}),"\n",(0,s.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"278"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,t){t.d(o,{Z:function(){return a},a:function(){return r}});var n=t(667294);let s={},d=n.createContext(s);function r(e){let o=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(d.Provider,{value:o},e.children)}}}]);