"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29825"],{327769:function(e,s,r){r.r(s),r.d(s,{default:()=>m,frontMatter:()=>a,metadata:()=>i,assets:()=>t,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-view-properties","title":"WP Get view properties","description":"WP Get view properties (  ; wpArea* ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-get-view-properties.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-view-properties","permalink":"/docs/pt/20-R8/WritePro/commands/wp-get-view-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-view-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-view-properties","title":"WP Get view properties","slug":"/WritePro/commands/wp-get-view-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get text","permalink":"/docs/pt/20-R8/WritePro/commands/wp-get-text"},"next":{"title":"WP Import document","permalink":"/docs/pt/20-R8/WritePro/commands/wp-import-document"}}'),o=r("785893"),n=r("250065");let a={id:"wp-get-view-properties",title:"WP Get view properties",slug:"/WritePro/commands/wp-get-view-properties",displayed_sidebar:"docs"},d=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function c(e){let s={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"WP Get view properties"})," ( * ; ",(0,o.jsx)(s.em,{children:"wpArea"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"*"}),(0,o.jsx)(s.td,{children:"Operador"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Se especificado, wpArea \xe9 um nome de objeto formul\xe1rio (string). Se omitido, wpArea \xe9 um campo objeto ou vari\xe1vel (documento)"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wpArea"}),(0,o.jsx)(s.td,{children:"Text, Object"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Nome objeto formul\xe1rio (se * for especificado) ou vari\xe1vel objeto ou campo 4D Write Pro (se * for omitido)"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Resultado"}),(0,o.jsx)(s.td,{children:"Object"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Propriedades vista atual"})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando ",(0,o.jsx)(s.strong,{children:"WP Get view properties"})," devolve as propriedades da vista atual para a \xe1rea 4D Write Pro designada por ",(0,o.jsx)(s.em,{children:"wpArea"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Se passar o par\xe2metro opcional ",(0,o.jsx)(s.em,{children:"*"}),", indica que ",(0,o.jsx)(s.em,{children:"wpArea"})," \xe9 um nome de objeto de formul\xe1rio (string). Se n\xe3o passar este par\xe2metro, indica que ",(0,o.jsx)(s.em,{children:"wpArea"})," \xe9 um documento 4D Write Pro (vari\xe1vel objeto ou campo). Este comando s\xf3 pode ser utilizado se ",(0,o.jsx)(s.em,{children:"wpArea"})," estiver associada com um objeto de formul\xe1rio (ou seja, \xe9 mostrado no formul\xe1rio), em qualquer p\xe1gina de formul\xe1rio. Se o documento 4D Write for exibido em v\xe1rios objetos formul\xe1rios, \xe9 necess\xe1rio usar o par\xe2metro * para definir qual vista ser\xe1 afetada."]}),"\n",(0,o.jsx)(s.p,{children:"As propriedades vista da \xe1rea 4D Write Pro podem ser definidas:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"a nivel de formul\xe1rio na Lista de propriedades,"}),"\n",(0,o.jsxs)(s.li,{children:["dinamicamente durante a sess\xe3o utilizando o comando ",(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-set-view-properties",children:"WP SET VIEW PROPERTIES"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Objeto devolvido"})}),"\n",(0,o.jsx)(s.p,{children:"O objeto devolvido cont\xe9m todas as propriedades de vista da \xe1rea 4D Write Pro, junto com seu valor atual:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Constante"}),(0,o.jsx)(s.th,{children:"Valor"}),(0,o.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk display formula as symbol"}),(0,o.jsx)(s.td,{children:"displayFormulaAsSymbol"}),(0,o.jsxs)(s.td,{children:["Mostra as refer\xeancias das f\xf3rmulas como um s\xedmbolo ",(0,o.jsx)(s.img,{src:r(229680).Z+"",width:"14",height:"19"}),". S\xf3 funciona se as f\xf3rmulas forem mostradas como refer\xeancias (ver wk visible references). Valores possiveis: True/False"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk formula highlight"}),(0,o.jsx)(s.td,{children:"formulaHighlight"}),(0,o.jsx)(s.td,{children:"Modo de vista ressaltar f\xf3rmula. Valores poss\xedveis: wk references (padr\xe3o): F\xf3rmulas exibidas como refer\xeancias s\xe3o ressaltadas wk values: F\xf3rmulas exibidas como valores s\xe3o ressaltados wk always: F\xf3rmulas s\xe3o sempre ressaltadas, qualquer que seja seu modo exibi\xe7\xe3o wk never: F\xf3rmulas nunca s\xe3o ressaltadas, n\xe3o importa o modo de exibi\xe7\xe3o Cor de f\xf3rmula ressaltada pode ser estabelecida como wk formula highlight color."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk formula highlight color"}),(0,o.jsx)(s.td,{children:"formulaHighlightColor"}),(0,o.jsx)(s.td,{children:'Cor de f\xf3rmulas ressaltadas (ver wk formula highlight). Valores poss\xedveis: uma string CSS cor ("#010101" ou "#FFFFFF" ou "red"). um valor 4D cor longint'})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk page view mode"}),(0,o.jsx)(s.td,{children:"pageMode"}),(0,o.jsx)(s.td,{children:'Modo para exibi\xe7\xe3o do documento 4D Write Pro na \xe1rea de formul\xe1rio onscreen. Valores poss\xedveis (string): "draft": modo esbo\xe7o com propriedades de documento b\xe1sicas "page": modo de vista completo, que inclui sum\xe1rios de p\xe1ginas, margens, quebras, cabe\xe7alhos e rodap\xe9s, etc. "embedded": modo de vista compat\xedvel para \xe1reas embebidas'})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk resolution"}),(0,o.jsx)(s.td,{children:"dpi"}),(0,o.jsx)(s.td,{children:"Resolu\xe7\xe3o de tela para os conte\xfados da \xe1rea 4D Write Pro. Valores poss\xedveis: wk auto (0) N\xfamero maior que 1"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk spell enable"}),(0,o.jsx)(s.td,{children:"spellEnabled"}),(0,o.jsx)(s.td,{children:"Ativa o corretor autogr\xe1fico. Valores poss\xedveis: True/False"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk visible background"}),(0,o.jsx)(s.td,{children:"visibleBackground"}),(0,o.jsx)(s.td,{children:"Exibe tanto as imagens de fundo quanto a cor de fundo (efeito vis\xedvel apenas nos modos de P\xe1gina e Vista Embebida). Valores Poss\xedveis: True/False"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk visible empty images"}),(0,o.jsx)(s.td,{children:"visibleEmptyImages"}),(0,o.jsx)(s.td,{children:"Mostra um ret\xe2ngulo negro como padr\xe3o para as imagens que n\xe3o podem ser carregadas ou calculadas (imagens vazias ou em um formato n\xe3o compat\xedvel). Valores poss\xedveis: True/False. Valor padr\xe3o: True Se o valor for False, os elementos imagem que faltem n\xe3o s\xe3o mostrados em absoluto mesmo que tenham bordas, largura, altura ou fundo; isso pode afetar o design da p\xe1gina para as imagens inline."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk visible footers"}),(0,o.jsx)(s.td,{children:"visibleFooters"}),(0,o.jsx)(s.td,{children:"Exibe os cabe\xe7alhos (efeito vis\xedvel apenas em modo P\xe1gina). Valores poss\xedveis: True/False"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk visible headers"}),(0,o.jsx)(s.td,{children:"visibleHeaders"}),(0,o.jsx)(s.td,{children:"Exibe o cabe\xe7alho (efeito vis\xedvel apenas em modo P\xe1gina). Valores poss\xedveis: True/False"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk visible hidden characters"}),(0,o.jsx)(s.td,{children:"visibleHiddenChars"}),(0,o.jsx)(s.td,{children:"Exibe caracteres invis\xedveis. Valores poss\xedveis: True/False"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk visible horizontal ruler"}),(0,o.jsx)(s.td,{children:"visibleHorizontalRuler"}),(0,o.jsx)(s.td,{children:"Exibe a r\xe9gua horizontal. Valores poss\xedveis: True/False"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk visible HTML WYSIWYG"}),(0,o.jsx)(s.td,{children:"htmlWYSIWIGEnabled"}),(0,o.jsx)(s.td,{children:"Ativa a vis\xe3o HTML WYSIWYG Valores poss\xedveis: True/False"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk visible page frames"}),(0,o.jsx)(s.td,{children:"visiblePageFrames"}),(0,o.jsx)(s.td,{children:"Exibe a frame da p\xe1gina (efeitos vis\xedveis apenas no modo P\xe1gina). Valores poss\xedveis: True/False"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk visible references"}),(0,o.jsx)(s.td,{children:"visibleReferences"}),(0,o.jsx)(s.td,{children:"Exibe todas as express\xf5es 4D inseridas no documento como refer\xeancia. Valores poss\xedveis: True/False"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk visible vertical ruler"}),(0,o.jsx)(s.td,{children:"visibleVerticalRuler"}),(0,o.jsx)(s.td,{children:"Exibe a r\xe9gua vertical (efeito vis\xedvel no modo P\xe1gina apenas). Valores poss\xedveis: True/False"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk zoom"}),(0,o.jsx)(s.td,{children:"zoom"}),(0,o.jsx)(s.td,{children:"Porcentagem de Zoom para exibir os conte\xfados da \xe1rea 4D Write Pro. Valores poss\xedveis: N\xfamero maior que 1"})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.p,{children:"Na \xe1rea de 4D Write Pro, se quiser mostrar as regras s\xf3 no modo p\xe1gina:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0var $viewProps : Object\n\xa0$viewProps:=WP Get view properties(*;"4DWPArea")\n\xa0If($viewProps.pageMode="page")\n\xa0\xa0\xa0\xa0$viewProps.visibleHorizontalRuler:=True\n\xa0\xa0\xa0\xa0$viewProps.visibleVerticalRuler:=True\n\xa0Else\n\xa0\xa0\xa0\xa0$viewProps.visibleHorizontalRuler:=False\n\xa0End if\n\xa0WP SET VIEW PROPERTIES(*;"4DWPArea";$viewProps)\n'})}),"\n",(0,o.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-set-view-properties",children:"WP SET VIEW PROPERTIES"})})]})}function m(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},229680:function(e,s,r){r.d(s,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAATCAIAAAAvYqvDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGTSURBVDhPY3z27BkDcYAJShMBSFCK5oDfX57dvnL79U92USVNZVl+dqgwGCBM/XBlWaGjkWVC76YjR47snVXmaKIbPOnkm99QabjSD0frXRLOui08c3nX3MZEW3EG0ejlZ/YU/651jF95D6Ya6IBn52Z4SCWsuAZiPnt2cYaH39xrDx8+BHGurU6V0qzdC2aDTL21deKvqjw7AZDOnx+fP3vJy/jr008Qj0HAuqTLoH/O4c9ANlDpgzObeLyMJMBSDA8OL9n76Nza2ZuufIAI8Nr6h+w6fwfIgrhVW0YaTDMwqPtkBSrZJFQnWohCRViZWd9++gZkAJUyM7NdfPAYIo4FfP72XllCCMgAKpU1D2RZuPM6IlRQwIvdC/f7mKkAWSAHKPhWOi6uWw0PFAT4fW9ZbgVba7wxK4gHCoZnzx4e6XcQ1slaevQWOFxA4P6JpbnGwjrFm6GB+AwRsb/fXFzdWtCw/o2IrAAzw9eXL/ltcxqbM+2kwCYCAUYi/P3l7ftvf5m5BIV5YGqgYIDTKwMDAJVMvdE9VEl9AAAAAElFTkSuQmCC"},250065:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return a}});var i=r(667294);let o={},n=i.createContext(o);function a(e){let s=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);