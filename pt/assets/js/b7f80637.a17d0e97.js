"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81483"],{835760:function(e,r,o){o.r(r),o.d(r,{default:()=>m,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>d,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/current-form-table","title":"Current form table","description":"Current form table  : Pointer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/current-form-table.md","sourceDirName":"commands-legacy","slug":"/commands/current-form-table","permalink":"/docs/pt/commands/current-form-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-form-table.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"current-form-table","title":"Current form table","slug":"/commands/current-form-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current default table","permalink":"/docs/pt/commands/current-default-table"},"next":{"title":"DEFAULT TABLE","permalink":"/docs/pt/commands/default-table"}}'),t=o("785893"),s=o("250065");let a={id:"current-form-table",title:"Current form table",slug:"/commands/current-form-table",displayed_sidebar:"docs"},i=void 0,l={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Current form table"}),"  : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"Pointer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Ponteiro a tabela do formul\xe1rio atualmente exibido"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(r.p,{children:"O comando Current form table retorna o ponteiro para a tabela do formul\xe1rio em tela ou impresso no processo atual."}),"\n",(0,t.jsxs)(r.p,{children:["A fun\xe7\xe3o retorna ",(0,t.jsx)(r.a,{href:"/docs/pt/commands/is-nil-pointer",children:"Is nil pointer"})," nos seguintes casos:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"N\xe3o h\xe1 formul\xe1rio mostrado ou impresso no processo atual,"}),"\n",(0,t.jsx)(r.li,{children:"O formul\xe1rio atual \xe9 um formul\xe1rio de projeto.\nSe houver v\xe1rias janelas abertas no processo atual (significa que a \xfaltima janela aberta \xe9 a janela ativa atual), o comando retorna um ponteiro at\xe9 a tabela do formul\xe1rio que aparece na janela ativa."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Se o formul\xe1rio mostrado atualmente \xe9 o formul\xe1rio detalhado de uma \xe1rea de subformul\xe1rio, voc\xea se encontra em entrada de dados e fez um duplo clique em um registro ou subregistro em uma \xe1rea de subformul\xe1rio de duplo clique. Neste caso, o comando retorna:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"O ponteiro em dire\xe7\xe3o a tabela mostrada no \xe1rea do subformul\xe1rio, se o subformul\xe1rio mostra uma tabela."}),"\n",(0,t.jsx)(r.li,{children:"Um ponteiro n\xe3o significativo, se a \xe1rea de subformul\xe1rio mostrar uma subtabela."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsxs)(r.p,{children:["Em su aplica\xe7\xe3o, utiliza a seguinte conven\xe7\xe3o quando visualiza um registro:",(0,t.jsx)(r.br,{}),"\nSe a vari\xe1vel ",(0,t.jsx)(r.em,{children:"vsCurrentRecord"})," estiver presente em um formul\xe1rio, mostra \u201CNovo registro\u201D se estiver trabalhando com um novo registro. Se estiver trabalhando com o registro 56 de uma sele\xe7\xe3o composta por 5200 registros, mostra \u201C56 de 5200\u201D."]}),"\n",(0,t.jsxs)(r.p,{children:["Para isso, utilize o m\xe9todo de objeto para criar a vari\xe1vel ",(0,t.jsx)(r.em,{children:"vstRegistroAtual"}),", depois copie-o e cole-o em todos seus formul\xe1rios:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto da vari\xe1vel n\xe3o edit\xe1vel vstRegistroAtual\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0C_STRING(31;vstRegistroAtual)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $vpTabelaPai : Pointer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $vlNumRegistro : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpTabelaPai:=Current form table\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNumRegistro:=Record number($vpTabelaPai->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNumRegistro=-3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vstRegistroAtual:="Novo registro"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNumRegistro=-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vstRegistroActual:="Ning\xfan registro"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNumRegistro>=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vstRegistroAtual:=String(Selected record number($vpTabelaPai->))+" de "+\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vstRegistroAtual:=vstRegistroAtual+String(Records in selection($vpTabelaPai->))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n'})}),"\n",(0,t.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/commands/dialog",children:"DIALOG"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/commands/form-set-output",children:"FORM SET OUTPUT"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/commands/form-set-input",children:"FORM SET INPUT"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,t.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero do comando"}),(0,t.jsx)(r.td,{children:"627"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread-seguro"}),(0,t.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return i},a:function(){return a}});var n=o(667294);let t={},s=n.createContext(t);function a(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);