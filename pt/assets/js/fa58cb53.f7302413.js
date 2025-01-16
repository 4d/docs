"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63768"],{803942:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/wa-get-last-url-error","title":"WA GET LAST URL ERROR","description":"WA GET LAST URL ERROR ( { ;} objeto ; url ; descri\xe7ao ; codigoErro* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/wa-get-last-url-error.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-last-url-error","permalink":"/docs/pt/commands/wa-get-last-url-error","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-last-url-error.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-get-last-url-error","title":"WA GET LAST URL ERROR","slug":"/commands/wa-get-last-url-error","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Get last filtered URL","permalink":"/docs/pt/commands/wa-get-last-filtered-url"},"next":{"title":"WA Get page content","permalink":"/docs/pt/commands/wa-get-page-content"}}'),t=n("785893"),s=n("250065");let d={id:"wa-get-last-url-error",title:"WA GET LAST URL ERROR",slug:"/commands/wa-get-last-url-error",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"WA GET LAST URL ERROR"})," ( {* ;} ",(0,t.jsx)(r.em,{children:"objeto"})," ; ",(0,t.jsx)(r.em,{children:"url"})," ; ",(0,t.jsx)(r.em,{children:"descri\xe7ao"})," ; ",(0,t.jsx)(r.em,{children:"codigoErro"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"*"}),(0,t.jsx)(r.td,{children:"Operador"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string); se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"objeto"}),(0,t.jsx)(r.td,{children:"any"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"url"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"URL na origem do erro"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"descri\xe7ao"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Description of error (Mac OS)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"codigoErro"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"C\xf3digo de Erro"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["O comando WA GET LAST URL ERROR permite recuperar v\xe1rios elementos de informa\xe7\xe3o relacionados com o \xfaltimo erro ocorrido na \xe1rea Web designada pelos par\xe2metros ",(0,t.jsx)(r.em,{children:"*"})," e ",(0,t.jsx)(r.em,{children:"objeto"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Esta informa\xe7\xe3o se retorna em tr\xeas vari\xe1veis:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.em,{children:"url"}),": URL provoca o erro."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.em,{children:"descrip\xe7\xe3o"}),": (Mac OS unicamente): um texto descreve o erro (se estiver dispon\xedvel). Se n\xe3o for poss\xedvel associar um texto ao erro, se retorna uma cadeia vazia. Em Windows, este par\xe2metro sempre se retorna vazio."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.em,{children:"codErro"}),": c\xf3digo do erro."]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Se o c\xf3digo for >=400, \xe9 um erro relacionado com o protocolo HTTP. Para maior informa\xe7\xe3o sobre este tipo de erro, consulte a seguinte dire\xe7\xe3o:",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.a,{href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html",children:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html"})})]}),"\n",(0,t.jsx)(r.li,{children:"Do contr\xe1rio, \xe9 um erro retornado pelo WebKit (Mac OS) ou ActiveX (Windows).\n\xc9 recomend\xe1vel chamar este comando dentro do marco do evento de formul\xe1rio On URL Loading Error com o objetivo de conhecer a causa do erro que acaba de ocorrer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/pt/commands/form-event-code",children:"Form event code"})}),"\n",(0,t.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero do comando"}),(0,t.jsx)(r.td,{children:"1034"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread-seguro"}),(0,t.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var o=n(667294);let t={},s=o.createContext(t);function d(e){let r=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);