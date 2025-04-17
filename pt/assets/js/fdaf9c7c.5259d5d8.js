"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23165"],{796357:function(e,s,n){n.r(s),n.d(s,{default:()=>x,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/st-freeze-expressions","title":"ST FREEZE EXPRESSIONS","description":"ST FREEZE EXPRESSIONS ( { ;} objeto {; inicioSel {; fimSel}}{; } )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/st-freeze-expressions.md","sourceDirName":"commands-legacy","slug":"/commands/st-freeze-expressions","permalink":"/docs/pt/20-R8/commands/st-freeze-expressions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-freeze-expressions.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"st-freeze-expressions","title":"ST FREEZE EXPRESSIONS","slug":"/commands/st-freeze-expressions","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST COMPUTE EXPRESSIONS","permalink":"/docs/pt/20-R8/commands/st-compute-expressions"},"next":{"title":"ST GET ATTRIBUTES","permalink":"/docs/pt/20-R8/commands/st-get-attributes"}}'),o=n("785893"),t=n("250065");let d={id:"st-freeze-expressions",title:"ST FREEZE EXPRESSIONS",slug:"/commands/st-freeze-expressions",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"ST FREEZE EXPRESSIONS"})," ( {* ;} ",(0,o.jsx)(s.em,{children:"objeto"})," {; ",(0,o.jsx)(s.em,{children:"inicioSel"})," {; ",(0,o.jsx)(s.em,{children:"fimSel"}),"}}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"*"}),(0,o.jsx)(s.td,{children:"Operador"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"objeto"}),(0,o.jsx)(s.td,{children:"any"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsxs)(s.td,{children:["Nome de objeto (se * for especificado) ou",(0,o.jsx)(s.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"inicioSel"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Inicio da sele\xe7\xe3o"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"fimSel"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Fim da sele\xe7\xe3o"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"*"}),(0,o.jsx)(s.td,{children:"Operador"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Se passar = atualizar as express\xf5es antes de congelar elas"})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando ",(0,o.jsx)(s.strong,{children:"ST FREEZE EXPRESSIONS"}),' "congela" o conte\xfado das express\xf5es encontradas em texto mult-estilo ou no campo ou vari\xe1vel 4D Write Pro com estilo definido pelo par\xe2metro ',(0,o.jsx)(s.em,{children:"objeto"}),". Esta a\xe7\xe3o converte express\xf5es din\xe2micas em texto est\xe1tico ou (apenas para \xe1reas 4D Write Pro) converte imagens e remove as refer\xeancias associadas ao ",(0,o.jsx)(s.em,{children:"objeto"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Para mais informa\xe7\xe3o sobre express\xf5es 4D usadas em \xe1reas de texto multi estilo, ou \xe1reas 4D Write Pro, veja a descri\xe7\xe3o do comando ",(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/commands/st-insert-expression",children:"ST INSERT EXPRESSION"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["O comando ",(0,o.jsx)(s.strong,{children:"ST FREEZE EXPRESSIONS"})," armazena os valores computados de uma express\xe3o num dado momento. Esta opera\xe7\xe3o \xe9 particuarlmente necess\xe1ria antes de cada uso de ",(0,o.jsx)(s.em,{children:"objeto"})," fora da ar\xe9a (exporta\xe7\xe3o, armazenagem em um arquivo disco, impress\xe3o) j\xe1 que a refer\xeancia da express\xe3o \xe9 mantida na pr\xf3pria \xe1rea."]}),"\n",(0,o.jsxs)(s.p,{children:["Passar o par\xe2metro opcional ",(0,o.jsx)(s.em,{children:"*"})," indica que o par\xe2metro ",(0,o.jsx)(s.em,{children:"objeto"})," \xe9 um nome objeto (string). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,o.jsx)(s.em,{children:"objeto"})," \xe9 um campo ou vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel ao inv\xe9s de uma string (apenas campo ou objeto vari\xe1vel)."]}),"\n",(0,o.jsxs)(s.p,{children:["Os par\xe2metros opcionais ",(0,o.jsx)(s.em,{children:"startSel"})," e ",(0,o.jsx)(s.em,{children:"endSel"})," designam uma sele\xe7\xe3o de texto em ",(0,o.jsx)(s.em,{children:"objeto"}),". Os valores ",(0,o.jsx)(s.em,{children:"startSel"})," e ",(0,o.jsx)(s.em,{children:"endSel"})," expresam uma sele\xe7\xe3o de texto simples, sem levar em considera\xe7\xe3o tags de estilo ou refer\xeancias presentes."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["se passar ",(0,o.jsx)(s.em,{children:"startSel"})," e ",(0,o.jsx)(s.em,{children:"endSel"}),", ",(0,o.jsx)(s.strong,{children:"ST FREEZE EXPRESSIONS"})," congela apenas as express\xf5es localizadas dentro da sele\xe7\xe3o."]}),"\n",(0,o.jsxs)(s.li,{children:["Se passr apenas ",(0,o.jsx)(s.em,{children:"startSel"})," ou se o valor de ",(0,o.jsx)(s.em,{children:"endSel"})," for maior que o n\xfamero total de caracteres no ",(0,o.jsx)(s.em,{children:"objeto"}),", todas as express\xf5es entre",(0,o.jsx)(s.em,{children:"startSel"})," e o final do texto s\xe3o congeladas."]}),"\n",(0,o.jsxs)(s.li,{children:["Se omitir ",(0,o.jsx)(s.em,{children:"startSel"})," e ",(0,o.jsx)(s.em,{children:"endSel"}),", todas as express\xf5es inclu\xeddas na sele\xe7\xe3o de usu\xe1rio do ",(0,o.jsx)(s.em,{children:"objeto"})," s\xe3o congeladas."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["4D oferece constantes pr\xe9-definidas para que possa designar a sele\xe7\xe3o de limites automaticamente nos par\xe2metros ",(0,o.jsx)(s.em,{children:"startSel"})," e ",(0,o.jsx)(s.em,{children:"endSel"}),".",(0,o.jsx)(s.br,{}),'\nEstas constantes s\xe3o encontradas no tema"',(0,o.jsx)(s.em,{children:"Texto multi estilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Constante"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{children:"Valor"}),(0,o.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"ST End highlight"}),(0,o.jsx)(s.td,{children:"Inteiro longo"}),(0,o.jsx)(s.td,{children:"-1001"}),(0,o.jsx)(s.td,{children:"Designa o \xfaltimo caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"ST End text"}),(0,o.jsx)(s.td,{children:"Inteiro longo"}),(0,o.jsx)(s.td,{children:"0"}),(0,o.jsx)(s.td,{children:"Designa o \xfaltimo caractere do texto contido no objeto"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"ST Start highlight"}),(0,o.jsx)(s.td,{children:"Inteiro longo"}),(0,o.jsx)(s.td,{children:"-1000"}),(0,o.jsx)(s.td,{children:"Designa o primeiro caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"ST Start text"}),(0,o.jsx)(s.td,{children:"Inteiro longo"}),(0,o.jsx)(s.td,{children:"1"}),(0,o.jsx)(s.td,{children:"Designa o primeiro caractere do texto contido no objeto"})]})]})]}),"\n",(0,o.jsxs)(s.p,{children:["(*) Deve passar um nome objteo em ",(0,o.jsx)(s.em,{children:"objeto"})," para poder usar esta constante. Se passar uma refer\xeancia para um campo ou vari\xe1vel, o comando \xe9 aplic\xe1vel a todos os textos do objeto."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota:"})," Se ",(0,o.jsx)(s.em,{children:"startSel"})," for maior que ",(0,o.jsx)(s.em,{children:"endSel"})," (exceto quando ",(0,o.jsx)(s.em,{children:"endSel for"})," 0), o comando n\xe3o faz nada e a vari\xe1vel ",(0,o.jsx)(s.em,{children:"OK"})," \xe9 estabelecida para 0."]}),"\n",(0,o.jsxs)(s.p,{children:["Como padr\xe3o, express\xf5es n\xe3o s\xe3o reavaliadas antes de serem congeladas. Se quiser que a express\xe3o seja recalculada e depois congelada, pode passar o segundo par\xe3metro ",(0,o.jsx)(s.em,{children:"*"})," ."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota:"})," ",(0,o.jsx)(s.strong,{children:"ST FREEZE EXPRESSIONS"})," n\xe3o congela as express\xf5es ",(0,o.jsx)(s.em,{children:"4D Write Pro $wp_pageNumber"})," e ",(0,o.jsx)(s.em,{children:"$wp_pageCount"}),". Para saber mais, veja a se\xe7\xe3o ",(0,o.jsx)(s.em,{children:"Gest\xe3o de f\xf3rmulas"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.p,{children:"Voc\xea quer inserir a hora atual ao in\xedcio do texto e logo congelar ela antes de guardar o registro:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//Inserir a hora ao \xednicio do texto\n\xa0ST INSERT EXPRESSION(*;StyledText_t;"Current time";1)\n\xa0\xa0//Congelamos a express\xe3o\n\xa0ST FREEZE EXPRESSIONS(*;"StyledText_t";1)\n'})}),"\n",(0,o.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/commands/st-compute-expressions",children:"ST COMPUTE EXPRESSIONS"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})]}),"\n",(0,o.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"1282"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return d}});var r=n(667294);let o={},t=r.createContext(o);function d(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);