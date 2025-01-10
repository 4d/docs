"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7582"],{688449:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>t});var i=JSON.parse('{"id":"WritePro/commands-legacy/wp-select","title":"WP SELECT","description":"WP SELECT ( {{ ;} wpArea;}  {; faixaInicio ; faixaFim*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-select.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-select","permalink":"/docs/pt/WritePro/commands/wp-select","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-select.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-select","title":"WP SELECT","slug":"/WritePro/commands/wp-select","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP RESET ATTRIBUTES","permalink":"/docs/pt/WritePro/commands/wp-reset-attributes"},"next":{"title":"WP Selection range","permalink":"/docs/pt/WritePro/commands/wp-selection-range"}}'),o=r("785893"),a=r("250065");let s={id:"wp-select",title:"WP SELECT",slug:"/WritePro/commands/wp-select",displayed_sidebar:"docs"},t=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WP SELECT"})," ( {{* ;} ",(0,o.jsx)(n.em,{children:"wpArea"}),";} {",(0,o.jsx)(n.em,{children:"wpArea"}),"} {; ",(0,o.jsx)(n.em,{children:"faixaInicio"})," ; ",(0,o.jsx)(n.em,{children:"faixaFim"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Se especificado, wpArea \xe9 um formul\xe1rio nome objeto (string). Se omitido, wpArea \xe9 um campo objeto ou vari\xe1vel"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wpArea"}),(0,o.jsx)(n.td,{children:"Text, Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome de objeto formul\xe1rio (se * for especificado) ou objeto vari\xe1vel ou campo 4D Write Pro (se * for omitido)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wpArea"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome de objeto de formul\xe1rio (se * for especificado) ou 4D Write Pro vari\xe1vel objeto ou campo (se * for omitido)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"faixaInicio"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"In\xedcio offset da faixa de texto"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"faixaFim"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Final offset da faixa de texto"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O novo comando ",(0,o.jsx)(n.strong,{children:"WP SELECT"})," cria uma nova sele\xe7\xe3o de texto na \xe1rea 4D Write Pro ",(0,o.jsx)(n.em,{children:"wpArea"}),", baseado na ",(0,o.jsx)(n.em,{children:"faixaObj"})," de um nova faixa definida por ",(0,o.jsx)(n.em,{children:"faixaInicio"})," e ",(0,o.jsx)(n.em,{children:"faixaFinal"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que ",(0,o.jsx)(n.em,{children:"wpArea"})," \xe9 um nome de objeto de formul\xe1rio (string). Se n\xe3o passar este par\xe2metro, indica que ",(0,o.jsx)(n.em,{children:"wpArea"})," \xe9 um campo objeto ou vari\xe1vel 4D Write Pro. Se houver uma \xe1rea 4D Write Pro se passa no par\xe2metro ",(0,o.jsx)(n.em,{children:"wpArea"}),", o comando n\xe3o faz nada."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": este comando s\xf3 pode ser utilizada se ",(0,o.jsx)(n.em,{children:"wpArea"})," estiver associada com um objeto de formul\xe1rio (ou seja, se mostra no formul\xe1rio)."]}),"\n",(0,o.jsxs)(n.p,{children:["Para definir a faixa de sele\xe7\xe3o, pode passar uma faixa objeto existente em ",(0,o.jsx)(n.em,{children:"faixaObj"}),", ou passar um par de limites f",(0,o.jsx)(n.em,{children:"aixaInicio"})," / ",(0,o.jsx)(n.em,{children:"faixaFinal"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"WP SELECT({* ;} wpArea ; faixaObj)"}),(0,o.jsx)(n.br,{}),"\nUm ",(0,o.jsx)(n.em,{children:"faixaObj"})," pode ser:"]}),"\n",(0,o.jsx)(n.li,{children:"uma faixa, ou"}),"\n",(0,o.jsx)(n.li,{children:"uma refer\xeancia de elemento (tabela / fila / par\xe1grafo / imagem ancorada ou em linha / cabe\xe7alho / rodap\xe9/se\xe7\xe3o/subse\xe7\xe3o) ou"}),"\n",(0,o.jsx)(n.li,{children:"um documento 4D Write Pro (s\xf3 o elemento corpo utilizado)"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.em,{children:"WP SELECT({* ;} wpArea ; startRange ; endRange)"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"WP SELECT( alvoObj {; startRange ; endRange} )"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["onde ",(0,o.jsx)(n.em,{children:"alvoObj"})," pode ser:\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"uma range (faixa ou sele\xe7\xe3o de objetos), ou"}),"\n",(0,o.jsx)(n.li,{children:"uma refer\xeancia de elemento (tabela/linha/par\xe1grafo/imagem ancorada ou inline/corpo/cabe\xe7alho/rodap\xe9/se\xe7\xe3o/subse\xe7\xe3o)"}),"\n",(0,o.jsxs)(n.li,{children:["onde ",(0,o.jsx)(n.em,{children:"faixaInicio"})," e ",(0,o.jsx)(n.em,{children:"faixaFinal"})," est\xe3o permitidas para as refer\xeancias de elemento a seguir: corpo/cabe\xe7alho/rodap\xe9/se\xe7\xe3o/subse\xe7\xe3o."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Neste caso em ",(0,o.jsx)(n.em,{children:"faixaInicio"})," e ",(0,o.jsx)(n.em,{children:"faixaFinal"})," passe os valores correspondentes a posi\xe7\xe3o dos primeiros e \xfaltimos caracteres a selecionar no documento. Pode passar wk start text em ",(0,o.jsx)(n.em,{children:"faixaInicio"})," para definir o come\xe7o do documento e wk end text em ",(0,o.jsx)(n.em,{children:"faixaFinal"})," para definir o final do documento. Lembre que um documento 4D Write Pro n\xe3o s\xf3 cont\xe9m texto vis\xedvel mas tamb\xe9m las etiquetas de formato incluidas na range"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"O c\xf3digo abaixo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0$range:=WP Text range([SAMPLE]WP;wk start text;12)\n\xa0WP SELECT(*;"WParea";$range)\n'})}),"\n",(0,o.jsx)(n.p,{children:"... ter\xe1 o mesmo resultado que:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0WP SELECT(*;"WParea";wk start text;12)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-text-range",children:"WP Text range"})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return s}});var i=r(667294);let o={},a=i.createContext(o);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);