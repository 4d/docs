"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60026"],{156191:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>i,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/parse-formula","title":"Parse formula","description":"Parse formula ( formula {; op\xe7\xf5es}{; mensagemErro} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/parse-formula.md","sourceDirName":"commands-legacy","slug":"/commands/parse-formula","permalink":"/docs/pt/20-R7/commands/parse-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fparse-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"parse-formula","title":"Parse formula","slug":"/commands/parse-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET ALLOWED METHODS","permalink":"/docs/pt/20-R7/commands/get-allowed-methods"},"next":{"title":"SET ALLOWED METHODS","permalink":"/docs/pt/20-R7/commands/set-allowed-methods"}}'),a=n("785893"),t=n("250065");let o={id:"parse-formula",title:"Parse formula",slug:"/commands/parse-formula",displayed_sidebar:"docs"},l=void 0,d={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Parse formula"})," ( ",(0,a.jsx)(r.em,{children:"formula"})," {; ",(0,a.jsx)(r.em,{children:"op\xe7\xf5es"}),"}{; ",(0,a.jsx)(r.em,{children:"mensagemErro"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe2metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"formula"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"F\xf3rmula de texto simples"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"op\xe7\xf5es"}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Instru\xe7\xf5es para input/output"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"mensagemErro"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"Mensagem de erro (string vazia se n\xe3o houver erro)"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Resultado"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"F\xf3rmula transformada (texto simples)"})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["A fun\xe7\xe3o ",(0,a.jsx)(r.strong,{children:"Parse formula"})," analisa a ",(0,a.jsx)(r.em,{children:"f\xf3rmula"})," 4D, verifica sua sintaxe e devolve seu formul\xe1rio normalizado. Isto permite que a f\xf3rmula continue sendo v\xe1lida no caso de que se mude o nome de uma linguagem 4D ou elemento de estrutura (comando, constante, tabela, campo ou0 Plugin 4D)."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Parse formula"})," pode ser usada para avaliar e traduzir f\xf3rmulas da maneira abaixo:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Os nomes reais de tabela/campo podem ser convertidos a nomes de estrutura* virtual (nomes personalizados) ou equivalentes tokenizados **"}),"\n",(0,a.jsx)(r.li,{children:"Os equivalentes de tabela/campo tokenizados podem ser convertidos a nomes de estrutura virtual ou nomes reais de tabela/campo"}),"\n",(0,a.jsx)(r.li,{children:"As estruturas virtuais podem ser convertidas a nomes reais de tabela/campo ou equivalentes simb\xf3licos"}),"\n",(0,a.jsx)(r.li,{children:"Os elementos de linguagem 4D podem ser convertidos a equivalentes de linguagem 4D tokenizados"}),"\n",(0,a.jsx)(r.li,{children:"Os equivalentes da linguagem 4D tokenizados podem ser convertidos a elementos de linguagem 4D"}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"*"})," *",(0,a.jsxs)(r.em,{children:["As estruturas virtuais s\xe3o definidas utilizando os comandos ",(0,a.jsx)(r.a,{href:"/docs/pt/20-R7/commands/set-table-titles",children:"SET TABLE TITLES"})," e ",(0,a.jsx)(r.a,{href:"/docs/pt/20-R7/commands/set-field-titles",children:"SET FIELD TITLES"})," (*"]})," *",(0,a.jsx)(r.em,{children:"par\xe2metro requerido)."})]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"**"})," *",(0,a.jsx)(r.em,{children:"Os equivalentes tokenizados s\xe3o elementos"})," *",(0,a.jsx)(r.em,{children:"de estrutura"})," ",(0,a.jsx)(r.em,{children:"e da linguagem 4D em texto sem formato expressos \u200B\u200Bcom a sintaxe do token, como \xe9 mostrado abaixo (consulte tamb\xe9m"})," ",(0,a.jsx)(r.em,{children:"Usar tokens em f\xf3rmulas):"})]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-RAW",children:"[Table:1]Field:1+String:C10(1)\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Em ",(0,a.jsx)(r.em,{children:"f\xf3rmula"}),", passe uma f\xf3rmula em texto sem formato. Pode usar nomes de estruturas reais ou virtuais, assim como equivalentes tokenizados."]}),"\n",(0,a.jsxs)(r.p,{children:["Sem importar os tipos de nome utilizados em ",(0,a.jsx)(r.em,{children:"f\xf3rmula"}),", como padr\xe3o ",(0,a.jsx)(r.strong,{children:"Parse formula"})," devolve a linguagem 4D real ou os nomes dos elementos da estrutura sem tokens de texto."]}),"\n",(0,a.jsxs)(r.p,{children:["O par\xe2metro opcional ",(0,a.jsx)(r.em,{children:"op\xe7\xf5es"})," lhe permite especificar como se expressa ou se devolve ",(0,a.jsx)(r.em,{children:"f\xf3rmula"})," utilizando as constantes abaixo do tema ",(0,a.jsx)(r.em,{children:"F\xf3rmulas"}),". Pode combinar constantes para designar tanto o formato de entrada como o de sa\xedda da f\xf3rmula devolvida."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Constante"}),(0,a.jsx)(r.th,{children:"Valor"}),(0,a.jsx)(r.th,{children:"Coment\xe1rio"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Formula in with virtual structure"}),(0,a.jsx)(r.td,{children:"1"}),(0,a.jsx)(r.td,{children:"A f\xf3rmula \xe9 expressa utilizando uma estrutura virtual (nomes personalizados). Como padr\xe3o, a f\xf3rmula devolvida cont\xe9m nomes reais."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Formula out with virtual structure"}),(0,a.jsx)(r.td,{children:"2"}),(0,a.jsx)(r.td,{children:"A f\xf3rmula devolvida deve conter nomes personalizados (virtual)."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Formula out with tokens"}),(0,a.jsx)(r.td,{children:"4"}),(0,a.jsx)(r.td,{children:"A f\xf3rmula devolvida deve conter texto tokenizado (por exemplo: Cxx)."})]})]})]}),"\n",(0,a.jsxs)(r.p,{children:["O par\xe2metro opcional ",(0,a.jsx)(r.em,{children:"mensagemE"})," ",(0,a.jsx)(r.em,{children:"rro"})," receber\xe1 uma mensagem de erro se houver um erro de sintaxe em ",(0,a.jsx)(r.em,{children:"f\xf3rmula"}),". Se n\xe3o houver nenhum erro, ser\xe1 devolvido uma string vazia."]}),"\n",(0,a.jsx)(r.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($t1;1)\n\xa0ARRAY LONGINT($t2;1)\n\xa0$t1{1}:="Virtual table"\n\xa0$t2{1}:=1\n\xa0SET TABLE TITLES($t1;$t2;*)\n\xa0\n\xa0ARRAY TEXT($tf1;1)\n\xa0ARRAY LONGINT($tf2;1)\n\xa0$tf1{1}:="Virtual field"\n\xa0$tf2{1}:=2\n\xa0SET FIELD TITLES([Table_1];$tf1;$tf2;*)\n\xa0\n\xa0\xa0//Estrutura virtual para tabela e nome de campo equivalente\n\xa0$parsedFormula:=Parse formula("[Virtual table]Virtual field";Formula in with virtual structure;$errorMessage)\n\xa0\xa0//return [Table_1]Field_2\n\xa0\n\xa0\xa0//Nome de tabela e campo para equivalente de estrutura virtual\n\xa0$parsedFormula:=Parse formula("[Table_1]Field_2";Formula out with virtual structure;$errorMessage)\n\xa0\xa0//return [Virtual table]Virtual field\n\xa0\n\xa0\xa0//Tabela e nome de campo para o formul\xe1rio tokenizado equivalente\n\xa0$parsedFormula:=Parse formula("String([Table_1]Field_2)";Formula out with tokens;$errorMessage)\n\xa0\xa0//return String:C10([Table_1:1]Field_2:2)\n\xa0\n\xa0\n'})}),"\n",(0,a.jsx)(r.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0//pede ao usu\xe1rio para digitar sua f\xf3rmula favorita\n\xa0$formula:=""\n\xa0EDIT FORMULA([Table_1];$formula)\n\xa0\n\xa0\xa0//salva a f\xf3rmula do usu\xe1rio para uso posterior\n\xa0CREATE RECORD([users_preferences])\n\xa0$persistentFormula:=Parse formula($formula;Formula out with tokens)\n\xa0[users_preferences]formula:=$persistentFormula\n\xa0SAVE RECORD([users_preferences])\n\xa0\n\xa0\xa0//later: executa a f\xf3rmula previamente salva\n\xa0CREATE RECORD([Table_1])\n\xa0EXECUTE FORMULA([users_preferences]formula)\n'})}),"\n",(0,a.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/pt/20-R7/commands/formula-from-string",children:"Formula from string"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/20-R7/commands/set-field-titles",children:"SET FIELD TITLES"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/20-R7/commands/set-table-titles",children:"SET TABLE TITLES"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.em,{children:"Usar tokens em f\xf3rmulas"})]}),"\n",(0,a.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero do comando"}),(0,a.jsx)(r.td,{children:"1576"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Thread-seguro"}),(0,a.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return o}});var s=n(667294);let a={},t=s.createContext(a);function o(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);