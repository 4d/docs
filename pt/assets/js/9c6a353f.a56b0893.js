"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34640"],{801202:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/st-insert-expression","title":"ST INSERT EXPRESSION","description":"ST INSERT EXPRESSION ( { ;} objeto ; expressao {; inicioSel {; fimSel*}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-insert-expression.md","sourceDirName":"commands-legacy","slug":"/commands/st-insert-expression","permalink":"/docs/pt/20-R7/commands/st-insert-expression","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-insert-expression.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-insert-expression","title":"ST INSERT EXPRESSION","slug":"/commands/st-insert-expression","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST GET URL","permalink":"/docs/pt/20-R7/commands/st-get-url"},"next":{"title":"ST INSERT URL","permalink":"/docs/pt/20-R7/commands/st-insert-url"}}'),r=n("785893"),t=n("250065");let i={id:"st-insert-expression",title:"ST INSERT EXPRESSION",slug:"/commands/st-insert-expression",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"ST INSERT EXPRESSION"})," ( {* ;} ",(0,r.jsx)(s.em,{children:"objeto"})," ; ",(0,r.jsx)(s.em,{children:"expressao"})," {; ",(0,r.jsx)(s.em,{children:"inicioSel"})," {; ",(0,r.jsx)(s.em,{children:"fimSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operador"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"objeto"}),(0,r.jsx)(s.td,{children:"Object"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsxs)(s.td,{children:["Nome de objeto (se * for especificado) ou",(0,r.jsx)(s.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"expressao"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Express\xe3o e (opcional) formato a inserir"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"inicioSel"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"In\xedcio da sele\xe7\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"fimSel"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Fim da sele\xe7\xe3o"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["O comando ",(0,r.jsx)(s.strong,{children:"ST INSERT EXPRESSION"})," insere uma refer\xeancia a express\xe3o no campo ou a vari\xe1vel de texto multi estilo designada pelo par\xe2metro ",(0,r.jsx)(s.em,{children:"objeto"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Se passar o par\xe2metro opcional ",(0,r.jsx)(s.em,{children:"*"})," indica que o par\xe2metro ",(0,r.jsx)(s.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se omitir o par\xe2metro ",(0,r.jsx)(s.em,{children:"*"}),", indica que o par\xe2metro ",(0,r.jsx)(s.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel em vez de uma cadeia (vari\xe1vel ou campo objeto unicamente)."]}),"\n",(0,r.jsxs)(s.p,{children:["No par\xe2metro ",(0,r.jsx)(s.em,{children:"expressao"}),", se passar a express\xe3o 4D a avaliar no ",(0,r.jsx)(s.em,{children:"objeto"}),'. A express\xe3o deve ser posta entre aspas duplas ("").']}),"\n",(0,r.jsxs)(s.p,{children:["Uma express\xe3o v\xe1lida 4D \xe9 uma cadeia que retorna um valor. A ",(0,r.jsx)(s.em,{children:"expressao"})," pode ser um campo, uma vari\xe1vel, um comando 4D, uma instru\xe7\xe3o que retorne um valor, um m\xe9todo de projeto,uma express\xe3o especial 4D Write Pro (ver ",(0,r.jsx)(s.em,{children:"Gest\xe3o de f\xf3rmulas"}),"), etc."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Inserir expres\xf5es de imagem (por exemplo vari\xe1veis do tipo Imagem) \xe9 compat\xedvel com \xe1reas 4D Write Pro (ver ",(0,r.jsx)(s.em,{children:"Inserir express\xf5es de imagem"}),") mas n\xe3o \xe9 compat\xedvel com \xe1reas multi-estilo."]}),"\n",(0,r.jsxs)(s.li,{children:['Este comando espera nomes "reais" para os campos e as tabelas, mesmo se tiver sido definida uma estrutura "virtual" usando os comandos ',(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/set-table-titles",children:"SET TABLE TITLES"})," e ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/set-field-titles",children:"SET FIELD TITLES"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Se ",(0,r.jsx)(s.em,{children:"expressao"})," retorna um valor que cont\xe9m retornos de carro e tabula\xe7\xf5es, 4D formata o texto de acordo ao objeto que alberga a express\xe3o; caracteres de retorno de carro se interpretam como rupturas de linha."]}),"\n",(0,r.jsx)(s.p,{children:"Pode dar formato a express\xe3o mediante a inclus\xe3o de informa\xe7\xe3o de formato no par\xe2metro de express\xe3o. Neste caso, o par\xe2metro deve ser na forma:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-RAW",children:' "String(valor;formato)"\n'})}),"\n",(0,r.jsxs)(s.p,{children:["... onde ",(0,r.jsx)(s.em,{children:"valor"})," cont\xe9m a express\xe3o mesma e ",(0,r.jsx)(s.em,{children:"formato"})," cont\xe9m o formato a aplicar. O par\xe2metro ",(0,r.jsx)(s.em,{children:"formato"})," pode ter os seguintes valores:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'para os n\xfameros: por exemplo "###,##" qualquer formato de visualiza\xe7\xe3o do n\xfamero (existente ou n\xe3o).'}),"\n",(0,r.jsxs)(s.li,{children:['para datas: um n\xfamero que designa um formato de data existente. Pode utilizar as constantes do tema "',(0,r.jsx)(s.em,{children:"Formatos de sa\xedda de datas"}),'" , por exemplo, System date short .']}),"\n",(0,r.jsxs)(s.li,{children:['para os tempos: um n\xfamero que designa um formato de hora existente. Pode utilizar as constantes do tema "',(0,r.jsx)(s.em,{children:"Formatos de sa\xedda de hora"}),'" , por exemplo, System time short .']}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Por exemplo:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0"String ([tabla_1]Campo_1;System date short)"\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Por padr\xe3o, os ",(0,r.jsx)(s.strong,{children:"valores"})," de express\xe3o s\xe3o mostrados nas \xe1reas de texto multiestilo. Pode for\xe7ar a visualiza\xe7\xe3o das ",(0,r.jsx)(s.strong,{children:"refer\xeancias"})," utilizando o comando ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/st-set-options",children:"ST SET OPTIONS"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Os par\xe2metros opcionais ",(0,r.jsx)(s.em,{children:"inicioSel"})," e ",(0,r.jsx)(s.em,{children:"fimSel"})," designam uma sele\xe7\xe3o de texto em ",(0,r.jsx)(s.em,{children:"objeto"}),". Os valores ",(0,r.jsx)(s.em,{children:"inicioSel"})," e ",(0,r.jsx)(s.em,{children:"fimSel"})," expressam uma sele\xe7\xe3o de texto plano, sem ter em conta etiquetas de estilo que podem estar presentes."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Se passar unicamente ",(0,r.jsx)(s.em,{children:"inicioSel"}),", o resultado da express\xe3o se insere na localiza\xe7\xe3o especificada."]}),"\n",(0,r.jsxs)(s.li,{children:["Se omitir ",(0,r.jsx)(s.em,{children:"inicioSel"})," e ",(0,r.jsx)(s.em,{children:"fimSel"}),", o resultado da express\xe3o se insere na localiza\xe7\xe3o do cursor."]}),"\n",(0,r.jsxs)(s.li,{children:["Se passar ",(0,r.jsx)(s.em,{children:"inicioSel"})," e ",(0,r.jsx)(s.em,{children:"fimSel"}),", ",(0,r.jsx)(s.strong,{children:"ST INSERT EXPRESSION"})," substitui o texto nesta sele\xe7\xe3o com o resultado da ",(0,r.jsx)(s.em,{children:"expressao"}),". Se o valor de ",(0,r.jsx)(s.em,{children:"fimSel"})," \xe9 maior que o n\xfamero total de caracteres no objeto, todos os caracteres entre ",(0,r.jsx)(s.em,{children:"inicioSel"})," e o final do texto s\xe3o substitu\xeddos pelo resultado da ",(0,r.jsx)(s.em,{children:"expressao"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["4D oferece constantes predefinidas para que possa designar automaticamente os limites de sele\xe7\xe3o nos par\xe2metros ",(0,r.jsx)(s.em,{children:"inicioSel"})," e ",(0,r.jsx)(s.em,{children:"fimSel"}),'. Estas constantes se encontram no tema "',(0,r.jsx)(s.em,{children:"Texto multi estilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Constante"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Valor"}),(0,r.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ST End highlight"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"-1001"}),(0,r.jsx)(s.td,{children:"Designa o \xfaltimo caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ST End text"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Designa o \xfaltimo caractere do texto contido no objeto"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ST Start highlight"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"-1000"}),(0,r.jsx)(s.td,{children:"Designa o primeiro caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ST Start text"}),(0,r.jsx)(s.td,{children:"Inteiro longo"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"Designa o primeiro caractere do texto contido no objeto"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["(*) Deve passar um nome de objeto em ",(0,r.jsx)(s.em,{children:"objeto"})," para poder utilizar esta constante. Se passar uma refer\xeancia a um campo ou vari\xe1vel, o comando se aplica a todo o texto do objeto."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota"}),": se ",(0,r.jsx)(s.em,{children:"inicioSel"})," \xe9 maior que ",(0,r.jsx)(s.em,{children:"fimSel"})," (exceto quando ",(0,r.jsx)(s.em,{children:"fimSel"})," \xe9 0) , o comando n\xe3o faz nada e a vari\xe1vel OK toma o valor 0.K toma o valor 0."]}),"\n",(0,r.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(s.p,{children:"Deseja substituir o texto selecionado com o resultado de um m\xe9todo projeto:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0ST INSERT EXPRESSION(*;"meuTexto";"meuMetodo";ST Start highlight;ST End highlight)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/st-compute-expressions",children:"ST COMPUTE EXPRESSIONS"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/st-freeze-expressions",children:"ST FREEZE EXPRESSIONS"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/st-get-expression",children:"ST Get expression"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/st-insert-url",children:"ST INSERT URL"})]}),"\n",(0,r.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"1281"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2717"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(s.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return i}});var o=n(667294);let r={},t=o.createContext(r);function i(e){let s=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);