"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1378"],{454684:function(e,o,r){r.r(o),r.d(o,{metadata:()=>t,contentTitle:()=>i,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/object-get-pointer","title":"OBJECT Get pointer","description":"OBJECT Get pointer {( seletor {; nomeObjeto {; nomeSubformulario}})} : Pointer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-pointer.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-pointer","permalink":"/docs/pt/commands/object-get-pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-pointer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-pointer","title":"OBJECT Get pointer","slug":"/commands/object-get-pointer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get placeholder","permalink":"/docs/pt/commands/object-get-placeholder"},"next":{"title":"OBJECT GET PRINT VARIABLE FRAME","permalink":"/docs/pt/commands/object-get-print-variable-frame"}}'),n=r("785893"),s=r("250065");let a={id:"object-get-pointer",title:"OBJECT Get pointer",slug:"/commands/object-get-pointer",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"OBJECT Get pointer"})," {( ",(0,n.jsx)(o.em,{children:"seletor"})," {; ",(0,n.jsx)(o.em,{children:"nomeObjeto"})," {; ",(0,n.jsx)(o.em,{children:"nomeSubformulario"}),"}})} : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"seletor"}),(0,n.jsx)(o.td,{children:"Integer"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Categoria objeto"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"nomeObjeto"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Nome do objeto"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"nomeSubformulario"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Nome de objeto de subformul\xe1rio"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Resultado"}),(0,n.jsx)(o.td,{children:"Pointer"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Ponteiro \xe0 vari\xe1vel de objeto"})]})]})]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"O comando OBJECT Get pointer retorna um ponteiro \xe0 vari\xe1vel de um objeto de formul\xe1rio."}),"\n",(0,n.jsxs)(o.p,{children:["Este comando pode ser utilizado para designar diferentes tipos de objetos em fun\xe7\xe3o do valor do par\xe2metro ",(0,n.jsx)(o.em,{children:"seletor"}),'. Pode passar neste par\xe2metro uma das pr\xf3ximas constantes (do tema "',(0,n.jsx)(o.em,{children:"Objetos de formul\xe1rio (Acesso)"}),'"):']}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Object current ou ",(0,n.jsx)(o.em,{children:"seletor"})," omitido: se for omitido o par\xe2metro seletor ou passar este seletor, o comando retorna um ponteiro a a vari\xe1vel associada ao objeto atual (objeto cuyo m\xe9todo est\xe1 em execu\xe7\xe3o).",(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.strong,{children:"Nota"}),": este funcionamento \xe9 estritamente equivalente ao funcionamento previo do comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/self",children:"Self"}),". O comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/self",children:"Self"})," se conserva apenas por raz\xf5es de compatibilidade."]}),"\n",(0,n.jsxs)(o.li,{children:["Object with focus: se passar este seletor, o comando retorna um ponteiro a vari\xe1vel associada ao objeto que tem o foco no formul\xe1rio. Os \xfaltimos dos par\xe2metros opcionais s\xe3o ignorados se forem passados.",(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.strong,{children:"Nota"}),": este funcionamento \xe9 estritamente equivalente ao comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/focus-object",children:"Focus object"}),". Esse comando agora \xe9 obsoleto a partir de 4D v12."]}),"\n",(0,n.jsx)(o.li,{children:"Object subform container: se passar este seletor, o comando retorna um ponteiro a vari\xe1vel vinculada com o container do subformul\xe1rio. Os \xfaltimos dois par\xe2metros opcionais s\xe3o ignorados se forem passados. Este seletor portanto s\xf3 pode ser utilizado no contexto de um formul\xe1rio que \xe9 utilizado como um subformul\xe1rio, com o objetivo de acessar \xe0 vari\xe1vel associada ao objeto contentor."}),"\n",(0,n.jsxs)(o.li,{children:["Object named: se passar este seletor, tamb\xe9m deve passar o segundo par\xe2metro, ",(0,n.jsx)(o.em,{children:"nomObjeto"}),". Neste caso, o comando retorna um ponteiro \xe0 vari\xe1vel associada ao objeto cujo nome foi passado neste par\xe2metro.",(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.strong,{children:"Nota"}),": se ",(0,n.jsx)(o.em,{children:"nomObjeto"}),' corresponde a um subformul\xe1rio e a op\xe7\xe3o "Subformul\xe1rio sa\xedda" estiver selecionada, o comando retorna um ponteiro a tabela do sub-formul\xe1rio se uma tabela fonte estiver especificada, do contr\xe1rio retorna Nil.']}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"})," Quando usado no contexto de uma list box, ",(0,n.jsx)(o.strong,{children:"OBJECT Get pointer"})," com Object current ou Object with focus seletor retorna um ponteiro ao list box, a coluna, ou o cabe\xe7alho dependendo do contexto. Para saber mais veja ",(0,n.jsx)(o.em,{children:"Gest\xe3o de objetos List Box"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,n.jsx)(o.em,{children:"nomeSubform"})," permite recuperar um ponteiro a um objeto ",(0,n.jsx)(o.em,{children:"nomObjeto"})," que n\xe3o pertence ao contexto atual, ou seja, ao formul\xe1rio pai. Para poder utilizar este par\xe2metro, deve ter passado o seletor Object named.",(0,n.jsx)(o.br,{}),"\nQuando for passado o par\xe2metro ",(0,n.jsx)(o.em,{children:"nomSubForm"}),", o comando OBJECT Get pointer primeiro procura o objeto subformul\xe1rio objeto chamado ",(0,n.jsx)(o.em,{children:"nomSubForm"})," no formul\xe1rio atual, depois busca no interior deste subformul\xe1rio um objeto chamado ",(0,n.jsx)(o.em,{children:"nomObjeto"}),". Se este objeto for encontrado, um ponteiro \xe9 retornado \xe0 vari\xe1vel deste objeto."]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(o.p,{children:'Dado um formul\xe1rio "SF" utilizado duas vezes como sub-formul\xe1rio no mesmo formul\xe1rio pai. Os objetos sub-formul\xe1rios s\xe3o chamados "SF1" e "SF2". O formul\xe1rio "SF" cont\xe9m um objeto chamado ValorAtual. No evento "On Load" do m\xe9todo de formul\xe1rio do formul\xe1rio pai, queremos inicializar o objeto Valor Atual de SF1 em "Janeiro" e o de SF2 em "Fevereiro":'}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0var $Ptr : Pointer\n\xa0$Ptr:=OBJECT Get pointer(Object named;"Valor atual";"SF1")\n\xa0$Ptr->:="Janeiro"\n\xa0$Ptr:=OBJECT Get pointer(Object named;"Valor atual";"SF2")\n\xa0$Ptr->:="Fevereiro"\n'})}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/pt/commands/focus-object",children:"Focus object"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/object-get-name",children:"OBJECT Get name"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/object-get-subform-container-value",children:"OBJECT Get subform container value"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.em,{children:"Objetos (Formul\xe1rios)"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.em,{children:"Objetos de formul\xe1rio (Acesso)"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/self",children:"Self"})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return i},a:function(){return a}});var t=r(667294);let n={},s=t.createContext(n);function a(e){let o=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);