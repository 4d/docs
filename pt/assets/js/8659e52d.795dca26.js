"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78749"],{206837:function(e,a,r){r.r(a),r.d(a,{metadata:()=>o,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>t});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-compute-formulas","title":"WP COMPUTE FORMULAS","description":"WP COMPUTE FORMULAS ( objTarget )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-compute-formulas.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-compute-formulas","permalink":"/docs/pt/WritePro/commands/wp-compute-formulas","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-compute-formulas.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-compute-formulas","title":"WP COMPUTE FORMULAS","slug":"/WritePro/commands/wp-compute-formulas","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Bookmark range","permalink":"/docs/pt/WritePro/commands/wp-bookmark-range"},"next":{"title":"WP DELETE BOOKMARK","permalink":"/docs/pt/WritePro/commands/wp-delete-bookmark"}}'),s=r("785893"),n=r("250065");let t={id:"wp-compute-formulas",title:"WP COMPUTE FORMULAS",slug:"/WritePro/commands/wp-compute-formulas",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function i(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"WP COMPUTE FORMULAS"})," ( ",(0,s.jsx)(a.em,{children:"objTarget"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe2metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(a.tbody,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"objTarget"}),(0,s.jsx)(a.td,{children:"Object"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Range ou elemento ou documento 4D Write Pro"})]})})]}),"\n",(0,s.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(a.p,{children:["O comando ",(0,s.jsx)(a.strong,{children:"WP COMPUTE FORMULAS"})," avalia as f\xf3rmulas em ",(0,s.jsx)(a.em,{children:"objTarget"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["O comando calcula ou atualiza o resultado das f\xf3rmulas encontradas em ",(0,s.jsx)(a.em,{children:"objTarget"})," em fun\xe7\xe3o do contexto atual e mostra o resultado obtido. Por exemplo, se a f\xf3rmula inserida for a hora, o valor se modificar\xe1 cada vez que se chame ao comando ",(0,s.jsx)(a.strong,{children:"WP COMPUTE FORMULAS"}),". Para mais informa\xe7\xe3o sobre a avalia\xe7\xe3o de f\xf3rmulas, consulte a se\xe7\xe3o ",(0,s.jsx)(a.em,{children:"Gest\xe3o de f\xf3rmulas"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["No par\xe2metro ",(0,s.jsx)(a.em,{children:"objTarget"}),", pode passar:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"uma range, ou"}),"\n",(0,s.jsx)(a.li,{children:"um elemento (tabela / linha / c\xe9lulas / par\xe1grafo / corpo / cabe\xe7alho / rodap\xe9 / se\xe7\xe3o / subse\xe7\xe3o / imagem inline ou ancorada / caixa de texto), ou"}),"\n",(0,s.jsx)(a.li,{children:"um documento 4D Write Pro."}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota"}),": quando se passa uma se\xe7\xe3o em targetObj, s\xf3 s\xe3o calculadas as f\xf3rmulas das imagens ou as f\xf3rmulas das caixas de texto ancoradas a esta se\xe7\xe3o ou a todas as se\xe7\xf5es. Se estiverem ancoradas a uma p\xe1gina ou a vista aninhada, suas f\xf3rmulas n\xe3o s\xe3o calculadas. Passe o documento em targetObj para calcular todas as f\xf3rmulas dos elementos ancorados."]}),"\n",(0,s.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(a.p,{children:"Para atualizar as f\xf3rmulas em um documento:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"\xa0WP COMPUTE FORMULAS(WriteProArea)\n"})}),"\n",(0,s.jsx)(a.p,{children:"Para atualizar todas as f\xf3rmulas na primeira se\xe7\xe3o de um documento:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"\xa0WP COMPUTE FORMULAS(WP Get section(WriteProArea;1))\n"})}),"\n",(0,s.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"Gest\xe3o de f\xf3rmulas"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/pt/WritePro/commands/wp-freeze-formulas",children:"WP FREEZE FORMULAS"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/pt/WritePro/commands/wp-get-formulas",children:"WP Get formulas"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/pt/WritePro/commands/wp-insert-formula",children:"WP INSERT FORMULA"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/pt/WritePro/commands/wp-set-data-context",children:"WP SET DATA CONTEXT"})]})]})}function m(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return d},a:function(){return t}});var o=r(667294);let s={},n=o.createContext(s);function t(e){let a=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);