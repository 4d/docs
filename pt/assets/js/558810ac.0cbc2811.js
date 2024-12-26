"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79490"],{152714:function(e,o,n){n.r(o),n.d(o,{metadata:()=>r,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>l,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/object-get-rgb-colors","title":"OBJECT GET RGB COLORS","description":"OBJECT GET RGB COLORS ( { ;} objeto ; corPrimeiroPlano {; corFundo {; corFundoAlternativo*}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-rgb-colors.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-rgb-colors","permalink":"/docs/pt/commands/object-get-rgb-colors","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-rgb-colors.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-rgb-colors","title":"OBJECT GET RGB COLORS","slug":"/commands/object-get-rgb-colors","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET RESIZING OPTIONS","permalink":"/docs/pt/commands/object-get-resizing-options"},"next":{"title":"OBJECT GET SCROLL POSITION","permalink":"/docs/pt/commands/object-get-scroll-position"}}'),t=n("785893"),s=n("250065");let d={id:"object-get-rgb-colors",title:"OBJECT GET RGB COLORS",slug:"/commands/object-get-rgb-colors",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let o={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"OBJECT GET RGB COLORS"})," ( {* ;} ",(0,t.jsx)(o.em,{children:"objeto"})," ; ",(0,t.jsx)(o.em,{children:"corPrimeiroPlano"})," {; ",(0,t.jsx)(o.em,{children:"corFundo"})," {; ",(0,t.jsx)(o.em,{children:"corFundoAlternativo"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"*"}),(0,t.jsx)(o.td,{children:"Operador"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Se especificar, objeto \xe9 um nome de objeto (string) se omitido, objeto \xe9 uma vari\xe1vel ou campo."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"objeto"}),(0,t.jsx)(o.td,{children:"any"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Nome do objeto (se * \xe9 especificado) ou Vari\xe1vel ou Campo (se * \xe9 omitido)"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"corPrimeiroPlano"}),(0,t.jsx)(o.td,{children:"Text, Integer"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"Valor da cor RGB do primeiro plano"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"corFundo"}),(0,t.jsx)(o.td,{children:"Text, Integer"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"Valor da cor do RGB para segundo plano (fundo)"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"corFundoAlternativo"}),(0,t.jsx)(o.td,{children:"Text, Integer"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"Valor da cor RGB do fundo alternativo"})]})]})]}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O comando OBJECT GET RGB COLORS devolve as cores de fundo e primeiro plano do objeto ou grupo de objetos designados por ",(0,t.jsx)(o.em,{children:"objeto"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Se passa o par\xe2metro opcional ",(0,t.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, \xe9 passada uma refer\xeancia de campo ou vari\xe1vel (campo ou vari\xe1vel objeto unicamente) ao inv\xe9s de um string."]}),"\n",(0,t.jsxs)(o.p,{children:["Quando o comando \xe9 aplicado a um objeto de tipo List box, a cor de fundo alternativo das filas podem ser devolvidos no par\xe2metro ",(0,t.jsx)(o.em,{children:"corFundoAlternativo"}),". Neste caso, o valor de ",(0,t.jsx)(o.em,{children:"corFundo"})," \xe9 utilizado para o fundo das linhas \xedmpares."]}),"\n",(0,t.jsxs)(o.p,{children:["Os valores de cores RGB devolvidos nos par\xe2metros a ",(0,t.jsx)(o.em,{children:"corPrimerPlano"}),", ",(0,t.jsx)(o.em,{children:"corFundo"})," e ",(0,t.jsx)(o.em,{children:"corFundoAlternativo"})," dependem do tipo de par\xe2metro:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:'se passar um par\xe2metro de tipo texto, a cor \xe9 devolvida em formato CSS com a sintaxe "#rrggbb" (por exemplo: "# 0000FF")'}),"\n",(0,t.jsxs)(o.li,{children:["Se passar um par\xe2metro de tipo ",(0,t.jsx)(o.a,{href:"#",title:"Number between -2^31..(2^31)-1 (4-byte Integer)",children:"inteiro longo"}),', a cor pode ser um inteiro longo de 4 bytes de formato (0x00RRGGBB) ou valores negativos correspondentes \xe0s cores de "sistema".']}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Para obter mais informa\xe7\xe3o sobre do formato dos par\xe2metros ",(0,t.jsx)(o.em,{children:"corPrimeiroPlano"}),", ",(0,t.jsx)(o.em,{children:"corFundo"})," e ",(0,t.jsx)(o.em,{children:"corFundoAlt"}),", consulte a descri\xe7\xe3o do comando ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),"."]}),"\n",(0,t.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs/pt/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"})}),"\n",(0,t.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"N\xfamero do comando"}),(0,t.jsx)(o.td,{children:"1074"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Thread-seguro"}),(0,t.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return d}});var r=n(667294);let t={},s=r.createContext(t);function d(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);