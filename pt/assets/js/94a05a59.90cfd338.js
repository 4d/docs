"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76660"],{97459:function(e,t,o){o.r(t),o.d(t,{default:()=>p,frontMatter:()=>c,metadata:()=>n,assets:()=>i,toc:()=>a,contentTitle:()=>d});var n=JSON.parse('{"id":"ViewPro/commands/vp-font-to-object","title":"VP Font to object","description":"VP Font to object (  font Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-font-to-object.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-font-to-object","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-font-to-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-font-to-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-font-to-object","title":"VP Font to object"},"sidebar":"docs","previous":{"title":"VP FLUSH COMMANDS","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-flush-commands"},"next":{"title":"G","permalink":"/docs/pt/20-R7/commands-legacy/G"}}'),s=o("785893"),r=o("250065");let c={id:"vp-font-to-object",title:"VP Font to object"},d=void 0,i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP Font to object"})," (  ",(0,s.jsx)(t.em,{children:"font"})," : Text ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Par\xe2metro"}),(0,s.jsx)(t.th,{children:"Tipo"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"font"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Cadeia de caracteres abreviada da fonte"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resultados"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"<-"}),(0,s.jsx)(t.td,{children:"Objecto letra"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(t.p,{children:["O comando utilit\xe1rio ",(0,s.jsx)(t.code,{children:"VP Font to object"})," retorna um objeto de um texto curto de fonte. Esse objeto pode ser usado para definir ou obter configura\xe7\xf5es de propriedade de fonte por meio de nota\xe7\xe3o de objeto."]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.em,{children:"font"}),' parameter, pass a font shorthand string to specify the different properties of a font (e.g., "12 pt Arial"). You can learn more about font shorthand strings ',(0,s.jsx)(t.a,{href:"https://www.w3schools.com/cssref/pr_font_font.asp",children:"in this page"})," for example."]}),"\n",(0,s.jsxs)(t.p,{children:["O objeto retornado cont\xe9m atributos de fonte definidos como propriedades. Para obter mais informa\xe7\xf5es sobre as propriedades dispon\xedveis, consulte o comando ",(0,s.jsx)(t.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-object-to-font",children:"VP Object to font"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(t.p,{children:"Este c\xf3digo:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'$font:=VP Font to object("16pt arial")\n'})}),"\n",(0,s.jsx)(t.p,{children:"devolver\xe1 o seguinte objeto $font:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"{\n\nfamily:arial\nsize:16pt\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsxs)(t.p,{children:["Veja um exemplo para ",(0,s.jsx)(t.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-object-to-font",children:(0,s.jsx)(t.code,{children:"VP Object to font"})}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/pt/20-R7/ViewPro/configuring#style-objects--style-sheets",children:"4D View Pro Style Objects and Style Sheets"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-object-to-font",children:"VP Object to font"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-cell-style",children:"VP SET CELL STYLE"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-default-style",children:"VP SET DEFAULT STYLE"})]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return d},a:function(){return c}});var n=o(667294);let s={},r=n.createContext(s);function c(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);