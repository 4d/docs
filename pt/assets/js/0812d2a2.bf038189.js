"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68331"],{271275:function(e,o,r){r.r(o),r.d(o,{default:()=>c,frontMatter:()=>s,metadata:()=>n,assets:()=>a,toc:()=>t,contentTitle:()=>A});var n=JSON.parse('{"id":"commands-legacy/form","title":"Form","description":"Form  : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form.md","sourceDirName":"commands-legacy","slug":"/commands/form","permalink":"/docs/pt/20-R7/commands/form","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form","title":"Form","slug":"/commands/form","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current form name","permalink":"/docs/pt/20-R7/commands/current-form-name"},"next":{"title":"FORM Convert to dynamic","permalink":"/docs/pt/20-R7/commands/form-convert-to-dynamic"}}'),d=r("785893"),i=r("250065");let s={id:"form",title:"Form",slug:"/commands/form",displayed_sidebar:"docs"},A=void 0,a={},t=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"formul\xe1rio DIALOG",id:"formul\xe1rio-dialog",level:5},{value:"Subformul\xe1rio",id:"subformul\xe1rio",level:5},{value:"Formul\xe1rio tabela",id:"formul\xe1rio-tabela",level:5},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Form"}),"  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Par\xe2metro"}),(0,d.jsx)(o.th,{children:"Tipo"}),(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsx)(o.tbody,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Resultado"}),(0,d.jsx)(o.td,{children:"Object"}),(0,d.jsx)(o.td,{children:"\u2190"}),(0,d.jsx)(o.td,{children:"Formul\xe1rio de dados associado ao formul\xe1rio atual"})]})})]}),"\n",(0,d.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(o.p,{children:["O comando ",(0,d.jsx)(o.strong,{children:"Form"})," devolve o objeto associado com o formul\xe1rio atual, se houver. 4D associa automaticamente um objeto ao formul\xe1rio atual nos casos abaixo:"]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["o formul\xe1rio atual tiver sido mostrado pelo comando ",(0,d.jsx)(o.a,{href:"/docs/pt/20-R7/commands/dialog",children:"DIALOG"}),","]}),"\n",(0,d.jsx)(o.li,{children:"o formul\xe1rio atual for um subformul\xe1rio."}),"\n",(0,d.jsx)(o.li,{children:"um formul\xe1rio tabela estiver exibido atualmente na tela."}),"\n"]}),"\n",(0,d.jsx)(o.h5,{id:"formul\xe1rio-dialog",children:"formul\xe1rio DIALOG"}),"\n",(0,d.jsxs)(o.p,{children:["Se o formul\xe1rio atual for mostrado mediante uma chamada ao comando ",(0,d.jsx)(o.a,{href:"/docs/pt/20-R7/commands/dialog",children:"DIALOG"}),", ",(0,d.jsx)(o.strong,{children:"Form"})," devolve ou um objeto vazio, ou o objeto ",(0,d.jsx)(o.em,{children:"formData"})," passado como par\xe2metro a este comando, se houver."]}),"\n",(0,d.jsx)(o.h5,{id:"subformul\xe1rio",children:"Subformul\xe1rio"}),"\n",(0,d.jsx)(o.p,{children:"Se o formul\xe0rio atual for um subformul\xe1rio, o objeto devolvido depende da vari\xe1vel container pai:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["Se a vari\xe1vel associada ao container principal tiver sido escrita como um objeto (",(0,d.jsx)(o.em,{children:"C_OBJECT"}),"), ",(0,d.jsx)(o.strong,{children:"Form"})," devolve o valor desta vari\xe1vel.",(0,d.jsx)(o.br,{}),"\nNeste caso, o objeto devolvido por ",(0,d.jsx)(o.strong,{children:"Form"})," \xe9 o mesmo que o devolvido pela express\xe3o abaixo:"]}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:"\xa0(OBJECT Get pointer(Object subform container))->  \n"})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["Se a vari\xe1vel associada ao container pai n\xe3o tiver sido escrita como um objeto, ",(0,d.jsx)(o.strong,{children:"Form"})," devolve um objeto criado automaticamente, mantido por 4D no contexto de subformul\xe1rio."]}),"\n"]}),"\n",(0,d.jsxs)(o.p,{children:["Para mais informa\xe7\xe3o, consulte a se\xe7\xe3o ",(0,d.jsx)(o.em,{children:"Subformul\xe1rios em modo p\xe1gina"}),"."]}),"\n",(0,d.jsx)(o.h5,{id:"formul\xe1rio-tabela",children:"Formul\xe1rio tabela"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Form"})," retorna o objeto associado com o formul\xe1rio tabela exibido na tela. No contexto de um formul\xe1rio input exibido a partir de um formul\xe1rio output (ou seja, depois de um duplo clique em um registro), o objeto retornado cont\xe9m as propriedades abaixo:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:(0,d.jsx)(o.strong,{children:"Propriedade"})}),(0,d.jsx)(o.th,{children:(0,d.jsx)(o.strong,{children:"Tipo"})}),(0,d.jsx)(o.th,{children:(0,d.jsx)(o.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,d.jsx)(o.tbody,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"parentForm"}),(0,d.jsx)(o.td,{children:"object"}),(0,d.jsxs)(o.td,{children:[(0,d.jsx)(o.strong,{children:"Form"})," objeto do formul\xe1rio output pai"]})]})})]}),"\n",(0,d.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(o.p,{children:'Em um formul\xe1rio exibindo o registro de uma pessoa, um bot\xe3o "Check children" abre um di\xe1logo para verificar/modificar os nomes e idades dos filhos:'}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.img,{src:r(206381).Z+"",width:"748",height:"423"})}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Nota:"}),' O campo objeto "Children" \xe9 representado apenas para mostrar sua estrutura para esse exemplo.']}),"\n",(0,d.jsxs)(o.p,{children:["No formul\xe1rio de verifica\xe7\xe3o, se tiver atribuido algumas propriedades de objeto a vari\xe1veis ",(0,d.jsx)(o.a,{href:"/docs/pt/20-R7/commands/form",children:"Form"}),":"]}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.img,{src:r(585745).Z+"",width:"744",height:"275"})}),"\n",(0,d.jsx)(o.p,{children:'Abaixo o c\xf3digo para o bot\xe3o "Check children":'}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'\xa0var $win;$n;$i : Integer\n\xa0var $save : Boolean\n\xa0ARRAY OBJECT($children;0)\n\xa0OB GET ARRAY([Person]Children;"children";$children)\xa0//obt\xe9m a cole\xe7\xe3o children\n\xa0$save:=False\xa0//initializa a vari\xe1vel save\n\xa0\n\xa0$n:=Size of array($children)\n\xa0If($n>0)\n\xa0\xa0\xa0\xa0$win:=Open form window("Edit_Children";Movable form dialog box)\n\xa0\xa0\xa0\xa0SET WINDOW TITLE("Check children for "+[Person]Name)\n\xa0\xa0\xa0\xa0For($i;1;$n)\xa0//para cada child\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DIALOG("Edit_Children";$children{$i})\xa0//exibe di\xe1logo preenchido com valores\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\xa0//o usu\xe1rio clica OK\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$save:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0If($save=True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Person]Children:=[Person]Children\xa0//for\xe7a a atualiza\xe7\xe3o do campo objeto\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0CLOSE WINDOW($win)\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("No child to check.")\n\xa0End if\n'})}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Nota:"})," Esse exemplo exige que a nota\xe7\xe3o de objeto esteja ativada no banco de dados (ver ",(0,d.jsx)(o.em,{children:"P\xe1gina Compatibilidade"}),")."]}),"\n",(0,d.jsx)(o.p,{children:"O formul\xe1rio exibe informa\xe7\xe3o para cada campo:"}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.img,{src:r(309313).Z+"",width:"522",height:"268"})}),"\n",(0,d.jsx)(o.p,{children:"Se os valores forem editados e o bot\xe3o OK button for clicaod, o campo \xe9 atualizado (o registro pai deve ser salvo depois)."}),"\n",(0,d.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.a,{href:"/docs/pt/20-R7/commands/dialog",children:"DIALOG"})}),"\n",(0,d.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"N\xfamero do comando"}),(0,d.jsx)(o.td,{children:"1466"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Thread-seguro"}),(0,d.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},309313:function(e,o,r){r.d(o,{Z:function(){return n}});let n="data:image/png;base64,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"},585745:function(e,o,r){r.d(o,{Z:function(){return n}});let n=r.p+"assets/images/pict3541682.en-ab83dd431b22f336d46bb1e38b0e80aa.png"},206381:function(e,o,r){r.d(o,{Z:function(){return n}});let n=r.p+"assets/images/pict3542015.en-70421813b1ccd4fa2f297bcd1aedfc54.png"},250065:function(e,o,r){r.d(o,{Z:function(){return A},a:function(){return s}});var n=r(667294);let d={},i=n.createContext(d);function s(e){let o=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function A(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);