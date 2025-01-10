"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51244"],{730583:function(e,a,r){r.r(a),r.d(a,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>t,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/edit-formula","title":"EDIT FORMULA","description":"EDIT FORMULA ( tabela ; formula )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/edit-formula.md","sourceDirName":"commands-legacy","slug":"/commands/edit-formula","permalink":"/docs/pt/commands/edit-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fedit-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"edit-formula","title":"EDIT FORMULA","slug":"/commands/edit-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Formulas","permalink":"/docs/pt/category/formulas"},"next":{"title":"EXECUTE FORMULA","permalink":"/docs/pt/commands/execute-formula"}}'),s=r("785893"),n=r("250065");let d={id:"edit-formula",title:"EDIT FORMULA",slug:"/commands/edit-formula",displayed_sidebar:"docs"},i=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"EDIT FORMULA"})," ( ",(0,s.jsx)(a.em,{children:"tabela"})," ; ",(0,s.jsx)(a.em,{children:"formula"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe2metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"tabela"}),(0,s.jsx)(a.td,{children:"Table"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Tabela a mostrar por padr\xe3o no editor de f\xf3rmulas"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"formula"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:'Vari\xe1vel que contem a f\xf3rmula a mostrar no editor de f\xf3rmulas ou "" somente para mostrar o editor'})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"\u2190"}),(0,s.jsx)(a.td,{children:"F\xf3rmula validada pelo usu\xe1rio"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]})]})]}),"\n",(0,s.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(a.p,{children:["O comando ",(0,s.jsx)(a.strong,{children:"EDIT FORMULA"})," mostra o editor de f\xf3rmulas com o prop\xf3sito de permitir ao usu\xe1rio escrever ou modificar uma f\xf3rmula. O editor cont\xe9m ao abrir:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["na lista da esquerda, os campos da tabela passados no par\xe2metro ",(0,s.jsx)(a.em,{children:"tabela"}),","]}),"\n",(0,s.jsxs)(a.li,{children:["na \xe1rea de f\xf3rmula, a f\xf3rmula contida na vari\xe1vel ",(0,s.jsx)(a.em,{children:"formula"}),". Se passa uma cadeia vazia em ",(0,s.jsx)(a.em,{children:"formula"}),", o editor \xe9 mostrado sem f\xf3rmula."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["O usu\xe1rio pode modificar e guardar a ",(0,s.jsx)(a.em,{children:"formula"})," mostrada. Tamb\xe9m \xe9 poss\xedvel escrever ou carregar uma nova f\xf3rmula. Entretanto, se o usu\xe1rio valida a caixa de di\xe1logo, a vari\xe1vel de sistema OK toma o valor 1 e a vari\xe1vel ",(0,s.jsx)(a.em,{children:"formula"})," cont\xe9m a f\xf3rmula definida pelo usu\xe1rio. Se o usu\xe1rio cancela a f\xf3rmula, a vari\xe1vel sistema OK toma o valor 0 e a vari\xe1vel ",(0,s.jsx)(a.em,{children:"formula"})," n\xe3o muda."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Nota:"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["por padr\xe3o, o acesso aos m\xe9todos e aos comandos est\xe1 restrito para os usu\xe1rios (exceto para o Desenhista (designer) e Administrador, em bancos de dados criadas com 4D 2004.4 e posteriores). Quando este mecanismo estiver ativado, voc\xea deve designar explicitamente os elementos acess\xedveis aos usu\xe1rios utilizando o comando ",(0,s.jsx)(a.a,{href:"/docs/pt/commands/set-allowed-methods",children:"SET ALLOWED METHODS"}),". Se a ",(0,s.jsx)(a.em,{children:"formula"})," chama m\xe9todos que n\xe3o foram autorizados previamente no editor de f\xf3rmulas utilizando o comando ",(0,s.jsx)(a.a,{href:"/docs/pt/commands/set-allowed-methods",children:"SET ALLOWED METHODS"}),", \xe9 gerado um erro de sintaxe e n\xe3o poder\xe1 validar a caixa de di\xe1logo."]}),"\n",(0,s.jsx)(a.li,{children:"O editor de f\xf3rmula n\xe3o est\xe1 associado com qualquer barra de menu por padr\xe3o. \xc9 preciso instalar um menu padr\xe3o Edit no processo de chamada se quiser que os usu\xe1rios possam se beneficiar de atalhos cortar/copiar/pegar no editor de f\xf3rmula."}),"\n",(0,s.jsxs)(a.li,{children:["A estrutura virtual definida pelos comandos ",(0,s.jsx)(a.a,{href:"/docs/pt/commands/set-table-titles",children:"SET TABLE TITLES"})," e ",(0,s.jsx)(a.a,{href:"/docs/pt/commands/set-field-titles",children:"SET FIELD TITLES"})," (se houver) n\xe3o pode ser usada na vari\xe1vel f\xf3rmula - nem ser\xe1 usada por 4D na vari\xe1vel retornada. A estrutura virtual \xe9 usada apenas na caixa de di\xe1logo editor F\xf3rmula."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Lembre que quando se valida a caixa de di\xe1logo, o comando n\xe3o executa a ",(0,s.jsx)(a.em,{children:"formula"}),"; s\xf3 valida e atualiza o conte\xfado da vari\xe1vel. Se quer executar a ",(0,s.jsx)(a.em,{children:"formula"}),", deve utilizar o comando ",(0,s.jsx)(a.a,{href:"/docs/pt/commands/execute-formula",children:"EXECUTE FORMULA"})," ."]}),"\n",(0,s.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(a.p,{children:"Visualiza\xe7\xe3o do editor de f\xf3rmulas com a tabela [Empregados] e sem uma f\xf3rmula introduzida previamente:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0$minhaFormula:=""\n\xa0EDIT FORMULA([Empregados];$minhaFormula)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0APPLY TO SELECTION([Empregados];EXECUTE FORMULA($minhaFormula))\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(a.p,{children:"Se o usu\xe1rio valida a caixa de di\xe1logo, a vari\xe1vel de sistema OK toma o valor 1. Se o usu\xe1rio anula a caixa de di\xe1logo, a vari\xe1vel sistema OK toma o valor 0."}),"\n",(0,s.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/pt/commands/apply-to-selection",children:"APPLY TO SELECTION"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/pt/commands/execute-formula",children:"EXECUTE FORMULA"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/pt/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})]}),"\n",(0,s.jsx)(a.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"N\xfamero do comando"}),(0,s.jsx)(a.td,{children:"806"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Thread-seguro"}),(0,s.jsx)(a.td,{children:"\u2717"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(a.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return i},a:function(){return d}});var o=r(667294);let s={},n=o.createContext(s);function d(e){let a=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);