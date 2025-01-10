"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31427"],{304968:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"ViewPro/commands/vp-suspend-computing","title":"VP SUSPEND COMPUTING","description":"VP SUSPEND COMPUTING ( vpAreaName : Text )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-suspend-computing.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-suspend-computing","permalink":"/docs/pt/ViewPro/commands/vp-suspend-computing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-suspend-computing.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-suspend-computing","title":"VP SUSPEND COMPUTING"},"sidebar":"docs","previous":{"title":"VP SHOW CELL","permalink":"/docs/pt/ViewPro/commands/vp-show-cell"},"next":{"title":"4D Write Pro","permalink":"/docs/pt/category/4d-write-pro"}}'),s=o("785893"),r=o("250065");let d={id:"vp-suspend-computing",title:"VP SUSPEND COMPUTING"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SUSPEND COMPUTING"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," command stops the calculation of all formulas in ",(0,s.jsx)(n.em,{children:"vpAreaName"}),". This command is useful when you want to suspend calculations in this 4D View Pro area so you can manually make modifications to formulas without encountering errors before you've finished making the changes."]}),"\n",(0,s.jsxs)(n.p,{children:["O comando pausa o servi\xe7o de c\xe1lculo no 4D View Pro. Formulas that have already been calculated remain unchanged, however any formulas added after ",(0,s.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," command  is executed are not calculated."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["O servi\xe7o de c\xe1lculo de 4D View Pro mant\xe9m um contador de a\xe7\xf5es de sugastar/retomar. Portanto, cada execu\xe7\xe3o do comando ",(0,s.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," deve ser equilibrada por uma execu\xe7\xe3o correspondente do comando ",(0,s.jsx)(n.code,{children:"VP RESUME COMPUTING"}),". Any formula impacted by modifications made while calculations are suspended will be recalculated when the command is executed."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"You've added two buttons to the form so that the user can suspend/resume calculations:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(607479).Z+"",width:"526",height:"226"})}),"\n",(0,s.jsx)(n.p,{children:"O c\xf3digo do bot\xe3o Suspend Computing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' //pause calculations while users enter information\n If(FORM Event.code=On Clicked)\n \n    VP SUSPEND COMPUTING("ViewProArea")\n \n End if\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'If(FORM Event.code=On Clicked)\n \n    VP RESUME COMPUTING("ViewProArea")\n \nEnd if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-recompute-formulas",children:"VP RECOMPUTE FORMULAS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-resume-computing",children:"VP RESUME COMPUTING"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},607479:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/cmd_vpStopCalculations-3e947019a84a2b9023514cbb8d15780f.PNG"},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var t=o(667294);let s={},r=t.createContext(s);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);