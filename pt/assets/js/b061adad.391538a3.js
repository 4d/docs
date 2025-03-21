"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89511"],{405145:function(e,o,r){r.r(o),r.d(o,{default:()=>l,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/form-convert-to-dynamic","title":"FORM Convert to dynamic","description":"FORM Convert to dynamic ( {Tabela ;} nomeForm ) : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-convert-to-dynamic.md","sourceDirName":"commands-legacy","slug":"/commands/form-convert-to-dynamic","permalink":"/docs/pt/20-R7/commands/form-convert-to-dynamic","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-convert-to-dynamic.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-convert-to-dynamic","title":"FORM Convert to dynamic","slug":"/commands/form-convert-to-dynamic","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Form","permalink":"/docs/pt/20-R7/commands/form"},"next":{"title":"FORM FIRST PAGE","permalink":"/docs/pt/20-R7/commands/form-first-page"}}'),s=r("785893"),d=r("250065");let i={id:"form-convert-to-dynamic",title:"FORM Convert to dynamic",slug:"/commands/form-convert-to-dynamic",displayed_sidebar:"docs"},t=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function A(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"FORM Convert to dynamic"})," ( {",(0,s.jsx)(o.em,{children:"Tabela"})," ;} ",(0,s.jsx)(o.em,{children:"nomeForm"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Table"}),(0,s.jsx)(o.td,{children:"Table"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Tabela formul\xe1rio"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"nomeForm"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:'Nome do formul\xe1rio "cl\xe1ssico" projeto ou tabela'})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Resultado"}),(0,s.jsx)(o.td,{children:"Object"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"nomeForm \xe9 convertido a um formul\xe1rio din\xe2mico"})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"FORM Convert to dynamic"})," converte o ",(0,s.jsx)(o.em,{children:"nomeFormulario"})," (formul\xe1rio cl\xe1ssico) a um formul\xe1rio din\xe2mico e o devolve em um objeto."]}),"\n",(0,s.jsxs)(o.p,{children:["Os ",(0,s.jsx)(o.em,{children:"formul\xe1rios cl\xe1ssicos"})," s\xe3o formul\xe1rios 4D armazenados dentro do arquivo de estrutura em formato bin\xe1rio. Os ",(0,s.jsx)(o.em,{children:"formul\xe1rios din\xe2micos"})," s\xe3o formul\xe1rios cujas estruturas s\xe3o definidas em um objeto 4D (ou um arquivo .json). Para saber mais, consulte ",(0,s.jsx)(o.em,{children:"Formul\xe1rios Din\xe2micos"})," ."]}),"\n",(0,s.jsxs)(o.p,{children:["Se quiser converter um formul\xe1rio de tabela, passe a tabela de formul\xe1rio no par\xe2metro ",(0,s.jsx)(o.em,{children:"tabela"})," e depois passe seu nome como uma string em ",(0,s.jsx)(o.em,{children:"nomFormulario"}),". Para um formul\xe1rio de projeto, passe o nome do formul\xe1rio diretamente em ",(0,s.jsx)(o.em,{children:"nomeFormulario"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Para poder executar o formul\xe1rio diretamente passando o objeto resultante ao comando ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/dialog",children:"DIALOG"}),", ",(0,s.jsx)(o.strong,{children:"FORM Convert to dynamic"})," aplica regras espec\xedficas ao converter o formul\xe1rio:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"As refer\xeancias ao m\xe9todo de formul\xe1rio e aos m\xe9todos de objeto de formul\xe1rio s\xe3o ignoradas. Deve associar os nomes dos m\xe9todos de projeto para chamar a cada evento de formul\xe1rio gerenciado."}),"\n",(0,s.jsx)(o.li,{children:"As refer\xeancias a listas s\xe3o exportadas por nome ao inv\xe9s de um ponteiro JSON que faz refer\xeancia ao arquivo lists.json."}),"\n",(0,s.jsx)(o.li,{children:"As refer\xeancias aos filtros com nome e aos formatos de visualiza\xe7\xe3o com nome (utilizando o caractere prefixo '|') s\xe3o exportados por valor ao inv\xe9s de um ponteiro JSON que faz refer\xeancia ao arquivo filters.json."}),"\n",(0,s.jsxs)(o.li,{children:['Dado que as imagens da biblioteca de imagens n\xe3o s\xe3o exportadas pelo comando, os objetos que fazem refer\xeancia a uma imagem da biblioteca de imagens ainda fazem refer\xeancia \xe0 biblioteca depois da convers\xe3o. Em sua propriedade "icon", utilizam uma url "pictlib: xx" especial, onde ',(0,s.jsx)(o.em,{children:"xx"})," \xe9 o ID na biblioteca.",(0,s.jsx)(o.br,{}),"\nAs imagens est\xe1ticas s\xe3o convertidas como propriedades objeto tipo imagem."]}),"\n",(0,s.jsx)(o.li,{children:"Objetos obsoletos s\xe3o ignorados. Veja o par\xe1grafo para ver a lista de objetos ou propriedades que n\xe3o s\xe3o compat\xedveis com formul\xe1rios din\xe2micos."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," as refer\xeancias ao m\xe9todo de formul\xe1rio e os m\xe9todos objeto de formul\xe1rio s\xe3o exportadas com identificadores internos, que ser\xe3o v\xe1lidos apenas no banco de dados atual enquanto que os m\xe9todos ",(0,s.jsx)(o.em,{children:"nomeFormulario"}),' n\xe3o s\xe3o modificados. Se quiser utilizar o formul\xe1rio exportado em outro contexto, deve atribuir nomes de m\xe9todo de projeto \xe0 propriedade "m\xe9todo" do formul\xe1rio ou objeto de formul\xe1rio (ver exemplo).']}),"\n",(0,s.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"Se quiser converter um formul\xe1rio cl\xe1ssico, modific\xe1-lo e mostr\xe1-lo."}),"\n",(0,s.jsx)(o.p,{children:"O formul\xe1rio original:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:r(40177).Z+"",width:"499",height:"253"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $dynForm : Object\n\xa0$dynForm:=FORM Convert to dynamic("FormToConvert")\n\xa0$dynForm.pages[1].objects.TitleArea.stroke:="red"\n\xa0$dynForm.pages[1].objects.bOK.method:="myMethod"\xa0//associa a um m\xe9todo de projeto\n\xa0DIALOG($dynForm)\n'})}),"\n",(0,s.jsx)(o.p,{children:"Se executar o c\xf3digo:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:r(580094).Z+"",width:"424",height:"251"})}),"\n",(0,s.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/dialog",children:"DIALOG"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/export-structure-file",children:"Export structure file"})]}),"\n",(0,s.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1570"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(A,{...e})}):A(e)}},40177:function(e,o,r){r.d(o,{Z:function(){return n}});let n=r.p+"assets/images/pict3977360.en-0c0d5ff744828490012f7ba86aee899b.png"},580094:function(e,o,r){r.d(o,{Z:function(){return n}});let n="data:image/png;base64,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"},250065:function(e,o,r){r.d(o,{Z:function(){return t},a:function(){return i}});var n=r(667294);let s={},d=n.createContext(s);function i(e){let o=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:o},e.children)}}}]);