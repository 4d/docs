"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24348"],{164181:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>r,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/is-waiting-mouse-up","title":"Is waiting mouse up","description":"Is waiting mouse up  : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/is-waiting-mouse-up.md","sourceDirName":"commands-legacy","slug":"/commands/is-waiting-mouse-up","permalink":"/docs/pt/commands/is-waiting-mouse-up","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-waiting-mouse-up.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"is-waiting-mouse-up","title":"Is waiting mouse up","slug":"/commands/is-waiting-mouse-up","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"In header","permalink":"/docs/pt/commands/in-header"},"next":{"title":"Outside call","permalink":"/docs/pt/commands/outside-call"}}'),i=n("785893"),a=n("250065");let d={id:"is-waiting-mouse-up",title:"Is waiting mouse up",slug:"/commands/is-waiting-mouse-up",displayed_sidebar:"docs"},t=void 0,r={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Is waiting mouse up"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Par\xe2metro"}),(0,i.jsx)(o.th,{children:"Tipo"}),(0,i.jsx)(o.th,{}),(0,i.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsx)(o.tbody,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Resultado"}),(0,i.jsx)(o.td,{children:"Boolean"}),(0,i.jsx)(o.td,{children:"\u2190"}),(0,i.jsx)(o.td,{children:"TRUE se o objeto estiver esperando por um evento mouse up. De outro modo, false."})]})})]}),"\n",(0,i.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Tema:"})," Eventos formul\xe1rio"]}),"\n",(0,i.jsxs)(o.p,{children:["O comando ",(0,i.jsx)(o.strong,{children:"Is waiting mouse up"})," devolve ",(0,i.jsx)(o.strong,{children:"True"})," depois de que o objeto atual tenha sido clicado e o bot\xe3o do mouse n\xe3o tenha sido liberado, e quando o di\xe1logo ainda tem o foco. Deve ser chamado desde o m\xe9todo de objeto do objeto atual."]}),"\n",(0,i.jsxs)(o.p,{children:["O comando devolve ",(0,i.jsx)(o.strong,{children:"False"})," nos seguintes casos:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"n\xe3o se chama a partir de um m\xe9todo de objeto"}),"\n",(0,i.jsx)(o.li,{children:"ou n\xe3o foi disparado o evento On Clicked no objeto"}),"\n",(0,i.jsx)(o.li,{children:"ou a caixa de di\xe1logo perdeu o foco."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Este comando deve ser utilizado junto com . Lhe permite sincronizar o estado interno do objeto de formul\xe1rio com a aplica\xe7\xe3o global. Basicamente, permite a seu c\xf3digo manejar o caso onde o usuario clicou e come\xe7ou a mover algo dentro de uma imagem objeto de formul\xe1rio, e esta a\xe7\xe3o \xe9 interrompida por um evento externo, como um quadro de di\xe1logo de alerta. Neste caso, o estado interno do objeto pode ser suspenso de forma indefinida devido a que se espera um evento mouse up que n\xe3o ocorrer\xe1. Para abordar este problema, deve proteger o c\xf3digo de movimento do mouse com um comando ",(0,i.jsx)(o.strong,{children:"Is waiting mouse up"})," o que assegura que seja executado em um contexto v\xe1lido."]}),"\n",(0,i.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(o.p,{children:"O c\xf3digo abaixo pode ser usado para gerenciar uma propriedade de tracking de mouse em um objeto imagem:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0//M\xe9todo objeto do objeto imagem\n\xa0var vLtracking : Integer\xa0//marque para modo tracking\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is waiting mouse up)\xa0//o bot\xe3o mouse ainda n\xe3o foi liberado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLtracking:=1\xa0//estamos em modo tracking\n\xa0\xa0//... Escrever aqui o c\xf3digo de inicializa\xe7\xe3o para a propriedade tracking\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:(Form event code=On Mouse Move)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(vLtracking=1)\xa0//estamos em modo tracking\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not(Is waiting mouse up))\xa0//nunca ter\xe1 o mouse up\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLtracking:=0\xa0//pare o modo tracking\n\xa0\xa0//... Escrever aqui o c\xf3digo para manejar ou cancelar a a\xe7\xe3o de tracking do usu\xe1rio\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\xa0//o objeto ainda espera por um mouse up\n\xa0\xa0//... Escrever aqui o c\xf3digo para tracking\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:(Form event code=On Mouse Up)\xa0//o bot\xe3o mouse foi liberado\n\xa0\xa0//... Escrever aqui o c\xf3digo para completar a a\xe7\xe3o tracking\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLtracking:=0\xa0//fim do modo tracking\n\xa0End case\n"})}),"\n",(0,i.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"/docs/pt/commands/form-event-code",children:"Form event code"})}),"\n",(0,i.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{}),(0,i.jsx)(o.th,{})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"N\xfamero do comando"}),(0,i.jsx)(o.td,{children:"1422"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Thread-seguro"}),(0,i.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return t},a:function(){return d}});var s=n(667294);let i={},a=s.createContext(i);function d(e){let o=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);