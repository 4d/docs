"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59214"],{613457:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>a});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-set-data-context","title":"WP SET DATA CONTEXT","description":"WP SET DATA CONTEXT ( wpDoc ; contextoData )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-set-data-context.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-set-data-context","permalink":"/docs/pt/WritePro/commands/wp-set-data-context","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-set-data-context.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-set-data-context","title":"WP SET DATA CONTEXT","slug":"/WritePro/commands/wp-set-data-context","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SET ATTRIBUTES","permalink":"/docs/pt/WritePro/commands/wp-set-attributes"},"next":{"title":"WP SET FRAME","permalink":"/docs/pt/WritePro/commands/wp-set-frame"}}'),s=o("785893"),r=o("250065");let d={id:"wp-set-data-context",title:"WP SET DATA CONTEXT",slug:"/WritePro/commands/wp-set-data-context",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP SET DATA CONTEXT"})," ( ",(0,s.jsx)(n.em,{children:"wpDoc"})," ; ",(0,s.jsx)(n.em,{children:"contextoData"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wpDoc"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contextoData"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Data a ser colocado em contexto"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O Comando ",(0,s.jsx)(n.strong,{children:"WP SET DATA CONTEXT"})," estabelece o objeto ",(0,s.jsx)(n.em,{children:"contextData"})," como contexto de dados do documento ",(0,s.jsx)(n.em,{children:"wpDoc"})," 4D Write Pro para o processo atual. Estabelecer um novo contexto no mesmo processo substitui qualquer contexto existene para o documento."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"wpDoc"}),", passe o documento 4D Write Pro que vai receber o contexto de dados."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"contextData"}),", passe um objeto que determine os conte\xfados do contexto de dados. Pode passar qualquer tipo de objeto 4D, incluindo objetos pertencentes a classes ORDA, tais como 4D.Entity. Para resetar um contexto, passe um objeto ",(0,s.jsx)(n.em,{children:"null"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Um contexto de dados 4D Write Pro \xe9 vol\xe1til:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"pode ser acessado dentro de um documento 4D Write Pro na execu\xe7\xe3o."}),"\n",(0,s.jsx)(n.li,{children:"Se for salva no documento 4D Write Pro, diferente de outras propriedades 4D Write Pro."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Quando um contexto de dados for estabelecido, seus dados estar\xe3o dispon\xedveis na \xe1rea 4D Write Pro dentro do processo atual atrav\xe9s da f\xf3rmula ",(0,s.jsx)(n.strong,{children:"This.data"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": f\xf3rmulas adicionais est\xe3o dispon\xedveis atrav\xe9s de ",(0,s.jsx)(n.strong,{children:"This"})," quando usar datasources de tabela, ver ",(0,s.jsx)(n.em,{children:"Express\xf5es com This"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Um contexto de dados pode ser usados somente no processo onde foi definido:"}),"\n",(0,s.jsx)(n.p,{children:"Quando usar o contexto de dados em f\xf3rmulas computadas de um processo diferente, se for null e This.data \xe9 indefinido"}),"\n",(0,s.jsx)(n.p,{children:"Se estabelecer um contexto de dados que j\xe1 foi definido para o mesmo documento em outro processo, um erro \xe9 jogado"}),"\n",(0,s.jsxs)(n.p,{children:["Para computar f\xf3rmulas com contextos de dados diferentes em processos diferentes (ou seja, gera faturas diferentes do mesmo documento model), \xe9 recomendado para duplicar o documento usando ",(0,s.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-new",children:"WP New"})," em cada um desses processos para evitar qualquer erro. Note que o contexto de dados n\xe3o \xe9 copiado quando duplicar um documento."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Insere um objeto no contexto de documento 4D Write Pro e exibe sua informa\xe7\xe3o na p\xe1gina:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $person;$info: Object\n\xa0\n\xa0\xa0// Cria o objeto person\n\xa0$person:=New object()\n\xa0$person.firstName:="John"\n\xa0$person.lastName:="Doe"\n\xa0\n\xa0\xa0// Estabelece o contexto usando o objeto person\n\xa0WP SET DATA CONTEXT(WParea;$person)\n\xa0\n\xa0\xa0// Acesse dados de contexto com a palavra chave "This"\n\xa0$info:=Formula(This.data.firstName+" "+This.data.lastName)\n\xa0\n\xa0\xa0// Exibe contexto de dados na p\xe1gina\n\xa0WP INSERT FORMULA(WParea;$info;wk replace)\xa0// exibe "John Doe" na p\xe1gina.\n'})}),"\n",(0,s.jsx)(n.p,{children:"Aqui est\xe1 o resultado:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(724795).Z+"",width:"293",height:"178"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Quando trabalhar com um documento modelo, pode associar um contexto para preencher a p\xe1gina com dados. Isso \xe9 \xfatil por exemplo para campanhas de email."}),"\n",(0,s.jsx)(n.p,{children:"Quando se carregar um modelo e se estabelece o contexto de dados, um modelo de carta poderia ter o aspecto abaixo:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(985945).Z+"",width:"1496",height:"549"})}),"\n",(0,s.jsx)(n.p,{children:"O exemplo abaixo recorre uma sele\xe7\xe3o de entidades e cria uma vista previa de impress\xe3o para cada entidade:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $person: 4D.Entity\n\xa0var $people: 4D.EntitySelection\n\xa0\n\xa0SET PRINT PREVIEW(True)\n\xa0$people:=ds.People.all()\n\xa0For each($person;$people)\n\xa0\xa0\xa0\xa0WP SET DATA CONTEXT(WParea;$person)\n\xa0\xa0\xa0\xa0WP PRINT(WParea)\n\xa0End for each\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-compute-formulas",children:"WP COMPUTE FORMULAS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-get-data-context",children:"WP Get data context"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},724795:function(e,n,o){o.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},985945:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/pict5867835.en-1508c2cd88266337661fe368492ea683.png"},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return d}});var t=o(667294);let s={},r=t.createContext(s);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);