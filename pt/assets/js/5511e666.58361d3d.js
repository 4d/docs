"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85040"],{422791:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-suspend-computing","title":"VP SUSPEND COMPUTING","description":"VP SUSPEND COMPUTING ( vpAreaName : Text )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-suspend-computing.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-suspend-computing","permalink":"/docs/pt/ViewPro/commands/vp-suspend-computing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-suspend-computing.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-suspend-computing","title":"VP SUSPEND COMPUTING"},"sidebar":"docs","previous":{"title":"VP SHOW CELL","permalink":"/docs/pt/ViewPro/commands/vp-show-cell"},"next":{"title":"4D Write Pro","permalink":"/docs/pt/category/4d-write-pro"}}'),r=o("785893"),t=o("250065");let a={id:"vp-suspend-computing",title:"VP SUSPEND COMPUTING"},d=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SUSPEND COMPUTING"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," command stops the calculation of all formulas in ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". Esse comando \xe9 \xfatil quando voc\xea deseja suspender os c\xe1lculos nessa \xe1rea do 4D View Pro para que possa fazer modifica\xe7\xf5es manuais nas f\xf3rmulas sem encontrar erros antes de terminar de fazer as altera\xe7\xf5es."]}),"\n",(0,r.jsxs)(n.p,{children:["O comando pausa o servi\xe7o de c\xe1lculo no 4D View Pro. Formulas that have already been calculated remain unchanged, however any formulas added after ",(0,r.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," command  is executed are not calculated."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["O servi\xe7o de c\xe1lculo de 4D View Pro mant\xe9m um contador de a\xe7\xf5es de sugastar/retomar. Portanto, cada execu\xe7\xe3o do comando ",(0,r.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," deve ser equilibrada por uma execu\xe7\xe3o correspondente do comando ",(0,r.jsx)(n.code,{children:"VP RESUME COMPUTING"}),". Qualquer f\xf3rmula afetada por modifica\xe7\xf5es feitas enquanto os c\xe1lculos s\xe3o suspensos ser\xe1 recalculada quando o comando for executado."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Voc\xea adicionou dois bot\xf5es ao formul\xe1rio para que o usu\xe1rio possa suspender/retomar os c\xe1lculos:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(724796).Z+"",width:"526",height:"226"})}),"\n",(0,r.jsx)(n.p,{children:"O c\xf3digo do bot\xe3o Suspend Computing:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //pause calculations while users enter information\n If(FORM Event.code=On Clicked)\n \n    VP SUSPEND COMPUTING("ViewProArea")\n \n End if\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'If(FORM Event.code=On Clicked)\n \n    VP RESUME COMPUTING("ViewProArea")\n \nEnd if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-recompute-formulas",children:"VP RECOMPUTE FORMULAS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-resume-computing",children:"VP RESUME COMPUTING"})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},724796:function(e,n,o){o.d(n,{Z:function(){return s}});let s=o.p+"assets/images/cmd_vpStopCalculations-3e947019a84a2b9023514cbb8d15780f.PNG"},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return a}});var s=o(667294);let r={},t=s.createContext(r);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);