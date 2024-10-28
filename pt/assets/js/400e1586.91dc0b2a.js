"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58730],{386666:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(474848),t=a(28453);const s={id:"wp-paragraph-range",title:"WP Paragraph range",slug:"/WritePro/commands/wp-paragraph-range",displayed_sidebar:"docs"},o=void 0,i={id:"WritePro/commands-legacy/wp-paragraph-range",title:"WP Paragraph range",description:"WP Paragraph range ( faixaObj ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-paragraph-range.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-paragraph-range",permalink:"/docs/pt/WritePro/commands/wp-paragraph-range",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-paragraph-range.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-paragraph-range",title:"WP Paragraph range",slug:"/WritePro/commands/wp-paragraph-range",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP New text box",permalink:"/docs/pt/WritePro/commands/wp-new-text-box"},next:{title:"WP Picture range",permalink:"/docs/pt/WritePro/commands/wp-picture-range"}},d={},c=[{value:"Compatibilidade",id:"compatibilidade",level:4},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"WP Paragraph range"})," ( ",(0,n.jsx)(r.em,{children:"faixaObj"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe2metro"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"faixaObj"}),(0,n.jsx)(r.td,{children:"Object"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Range or element"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Resultado"}),(0,n.jsx)(r.td,{children:"Object"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"Faixa de objeto direcionando apenas par\xe1grafos"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"compatibilidade",children:"Compatibilidade"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"WP Paragraph range"})," era chamado de ",(0,n.jsx)(r.strong,{children:"WP Get paragraphs"})," em vers\xf5es anteriores de 4D Write Pro. Foi renomeado por claridade."]}),"\n",(0,n.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O novo comando ",(0,n.jsx)(r.strong,{children:"WP Paragraph range"})," devolve uma faixa de objetos espec\xedfica que se refere unicamente aos par\xe1grafos contidos em ",(0,n.jsx)(r.em,{children:"rfaixaObj"})," que foi passada como par\xe2metro. A faixa de objetos par\xe1grafo devolvido deve ser utilizado por ",(0,n.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," e ",(0,n.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," para manejar os atributos do par\xe1grafo unicamente."]}),"\n",(0,n.jsxs)(r.p,{children:["Em ",(0,n.jsx)(r.em,{children:"faixaObj"}),", passe:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"uma faixa, ou"}),"\n",(0,n.jsx)(r.li,{children:"um elemento (tabela / fila / par\xe1grafo / cabe\xe7alho / rodap\xe9 / corpo/se\xe7\xe3o/subse\xe7\xe3o)"}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(r.p,{children:"Se quiser definiri a margem interior apenas para os par\xe1grafos:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"\xa0$oParagraphs:=WP Paragraph range($oSelection)\n\xa0WP SET ATTRIBUTES($oParagraphs;wk padding;20)\n"})}),"\n",(0,n.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-picture-range",children:"WP Picture range"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-selection-range",children:"WP Selection range"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>o,x:()=>i});var n=a(296540);const t={},s=n.createContext(t);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);