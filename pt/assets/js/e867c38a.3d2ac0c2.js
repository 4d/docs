"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98558"],{783674:function(e,o,r){r.r(o),r.d(o,{default:()=>l,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-import-document","title":"WP Import document","description":"WP Import document ( rotaArquivo {; op\xe7\xe3o} ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-import-document.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-import-document","permalink":"/docs/pt/20-R7/WritePro/commands/wp-import-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-import-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-import-document","title":"WP Import document","slug":"/WritePro/commands/wp-import-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get view properties","permalink":"/docs/pt/20-R7/WritePro/commands/wp-get-view-properties"},"next":{"title":"WP IMPORT STYLE SHEETS","permalink":"/docs/pt/20-R7/WritePro/commands/wp-import-style-sheets"}}'),a=r("785893"),n=r("250065");let t={id:"wp-import-document",title:"WP Import document",slug:"/WritePro/commands/wp-import-document",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function m(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"WP Import document"})," ( ",(0,a.jsx)(o.em,{children:"rotaArquivo"})," {; ",(0,a.jsx)(o.em,{children:"op\xe7\xe3o"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"rotaArquivo"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Rota a um documento 4D Write (.4w7 ou .4wt) ou um documento 4D Write Pro (.4wp)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"op\xe7\xe3o"}),(0,a.jsx)(o.td,{children:"Integer, Object"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Op\xe7\xe3o de importa\xe7\xe3o para express\xf5es HTML"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Resultado"}),(0,a.jsx)(o.td,{children:"Object"}),(0,a.jsx)(o.td,{children:"\u2190"}),(0,a.jsx)(o.td,{children:"Objeto 4D Write Pro"})]})]})]}),"\n",(0,a.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["O comando ",(0,a.jsx)(o.strong,{children:"WP Import document"})," [#descv] converte um documento 4D Write ou 4D Write Pro existente (,4wp, .4w7 ou .4wt) ou documento MS Word (.docx) a um novo objeto 4D Write Pro [#descv]."]}),"\n",(0,a.jsxs)(o.p,{children:["No par\xe2metro ",(0,a.jsx)(o.em,{children:"rotaArquivo"}),", passe a rota completa de um documento 4D Write armazenado no disco. Os tipos abaixo s\xe3o compat\xedveis:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["documentos 4D Write anteriores (.4w7 ou .4wt). Para uma lista detalhada de propriedades 4D Write que s\xe3o atualmente suportadas em objetos 4D Write Pro, veja a se\xe7\xe3o ",(0,a.jsx)(o.em,{children:"Importar documentos 4D Write"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:["documentos de formato 4D Write Pro (.4wp). Para saber mais sobre o formato de documento 4D Write Pro document format, veja ",(0,a.jsx)(o.em,{children:"formato de documento .4wp"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:["documentos em formato .docx. Para saber mais sobre isso, veja ",(0,a.jsx)(o.em,{children:"Exportar em formato .docx"}),"."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Deve ser passado uma rota completa, a n\xe3o ser que o documento esteja localizado no mesmo n\xedvel do arquivo de estrutura, em cujo caso voc\xea deve passar seu nome."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"})," Se quiser importar um documento armazenado em um campo 4D BLOB, tamb\xe9m pode usar o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-new",children:"WP New"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Um erro \xe9 retornado se o par\xe2metro ",(0,a.jsx)(o.em,{children:"rotaArquivo"})," for inv\xe1lido, ou se o arquivo estiver faltando ou ainda se o formato do arquivo n\xe3o for compat\xedvel."]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"op\xe7\xe3o"})," permite definir op\xe7\xf5es de importa\xe7\xe3o para:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.strong,{children:"longint"})}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Como padr\xe3o, express\xf5es HTML inseridos em documentos legados 4D Write n\xe3o s\xe3o importados (n\xe3o h\xe1 compatibilidade com 4D Write Pro support). Se passar a constante wk import html expressions as text, express\xf5es HTML ser\xe3o importadas como texto raw dentro das tags ",(0,a.jsx)(o.em,{children:"##htmlBegin##"})," e ",(0,a.jsx)(o.em,{children:"##htmlEnd##"})," -- que exige a\xe7\xf5es de formata\xe7\xe3o depois. Por exemplo:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-RAW",children:"##htmlBegin##Imported titlebold##htmlEnd##  \n"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.strong,{children:"object"})}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Pode passar um objeto para definir como os atributos a seguir s\xe3o manejados durante a opera\xe7\xe3o de importa\xe7\xe3o:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"Atributos"})}),(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"Tipo"})}),(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"anchoredTextAreas"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsxs)(o.td,{children:["Para MS Word (.docx) documentos. Especifica como \xe1reas de texto ancoradas s\xe3o manejadas. Valores dispon\xedveis:",(0,a.jsx)(o.br,{}),(0,a.jsx)(o.br,{})," ",(0,a.jsx)(o.strong,{children:"ancorado (padr\xe3o) - \xe1reas de texto ancoradas s\xe3o tratadas como caixas de texto."})," ",(0,a.jsx)(o.strong,{children:"inline"})," - Imagens ancoradas s\xe3o tratadas como texto inline na posi\xe7\xe3o da \xe2ncora. ",(0,a.jsx)(o.strong,{children:"ignore"})," (padr\xe3o) - \xe1reas de texto ancorado s\xe3o ignoradas. ",(0,a.jsx)(o.strong,{children:"Nota"}),": o layout e o n\xfamero de p\xe1ginas no documento podem mudar. Veja ",(0,a.jsx)(o.em,{children:"Como importar .docx"})]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"anchoredImages"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsxs)(o.td,{children:["Apenas para documentos MS Word (.docx) apenas. Especifica como imagens ancoradas s\xe3o manejadas. Valores poss\xedveis:",(0,a.jsx)(o.br,{}),(0,a.jsx)(o.br,{})," ",(0,a.jsx)(o.strong,{children:"all"})," (padr\xe3o) - todas as imagens ancoradas s\xe3o importadas como imagens ancoradas. Qualquer imagem com quebra de texto \xe9 importada como imagem inline. ",(0,a.jsx)(o.strong,{children:"ignoreWrap"})," - Imagens ancoradas s\xe3o importadas, mas qualquer quebra de texto ao redor da imagem \xe9 ignorado. ",(0,a.jsx)(o.strong,{children:"ignore"})," - Imagens ancoradas n\xe3o s\xe3o importadas."]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"sections"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsxs)(o.td,{children:["Apenas para documentos MS Word (.docx). Especifica como se\xe7\xf5es s\xe3o manejadas. Valores poss\xedveis:",(0,a.jsx)(o.br,{}),(0,a.jsx)(o.br,{})," ",(0,a.jsx)(o.strong,{children:"all"})," (padr\xe3o) - Todas as sess\xf5es s\xe3o importadas. Sess\xf5es cont\xednuas, pares, \xedmpares s\xe3o convertidas para sess\xf5es padr\xe3o. ",(0,a.jsx)(o.strong,{children:"ignore"})," - Se\xe7\xf5es s\xe3o convertidas para se\xe7\xf5es padr\xe3o 4D Write Pro (layout A4 retrato sem cabe\xe7alho ou rodap\xe9). ",(0,a.jsx)(o.strong,{children:"Nota"}),": todas as quebras de se\xe7\xe3o s\xe3o convertidas para quebras de p\xe1gina exceto quebras de se\xe7\xe3o cont\xednua que s\xe3o ignoradas."]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"fields"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsxs)(o.td,{children:["Apenas para documentos MS Word (.docx). Especifica como campos .docx que n\xe3o podem ser converitods a f\xf3rmulas 4D Write Pro s\xe3o manejados. Valores dispon\xedveis:",(0,a.jsx)(o.br,{}),(0,a.jsx)(o.br,{})," ",(0,a.jsx)(o.strong,{children:"ignore"})," - campos .docx s\xe3o ignorados. ",(0,a.jsx)(o.strong,{children:"label"}),' - refer\xeancias de campo .docx s\xe3o importadas como etiquetas dentro de colchetes dobros ("{{ }}"). Ex: O campo "ClientName" poderia ser importado como {{ClientName}}. ',(0,a.jsx)(o.strong,{children:"value"})," (padr\xe3o) - o \xfaltimo valor computado para o campo .docx (se dispon\xedvel) como importado. ",(0,a.jsx)(o.strong,{children:"Nota"}),": se um campo .docx correspondente a uma vari\xe1vel 4D Write Pro, o campo \xe9 importado como uma f\xf3rmula e essa op\xe7\xe3o \xe9 ignorada."]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"borderRules"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsxs)(o.td,{children:["Apenas para documentos MS Word (.docx). Especifica como bordas de par\xe1grafo s\xe3o manejadas. Valores dispon\xedveis:",(0,a.jsx)(o.br,{}),(0,a.jsx)(o.br,{})," ",(0,a.jsx)(o.strong,{children:"collapse"})," - formata\xe7\xe3o de par\xe1grafo \xe9 modificada para imitar automaticamente bordas colapsadas. Note que a propriedade colapso s\xf3 funciona durante a opera\xe7\xe3o de importa\xe7\xe3o. Se uma folha de estilo com uma configura\xe7\xe3o autom\xe1tica de colapso de borda \xe9 reaplicada depois da opera\xe7\xe3o de importa\xe7\xe3o, ent\xe3o a configura\xe7\xe3o \xe9 ignorada. ",(0,a.jsx)(o.strong,{children:"noCollapse"})," (padr\xe3o) - Formata\xe7\xe3o de par\xe1grafo n\xe3o \xe9 modificada."]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"preferredFontScriptType"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsxs)(o.td,{children:["Apenas para documentos MS Word (.docx). Especifica o corpo tipogr\xe1fico a usar quando diferentes tipos estiverem definidos para uma mesma fonte em OOXML. Valores dispon\xedveis:",(0,a.jsx)(o.br,{}),(0,a.jsx)(o.br,{})," ",(0,a.jsx)(o.strong,{children:"latin"})," (padr\xe3o) - script Latino ",(0,a.jsx)(o.strong,{children:"bidi"})," - script bidirecional. Adequado se o documento for principalmente texto bidirecional da esquerda para a direita (left-to-right -LTR) ou direita para a esquerda (RTL) (por exemplo em \xe1rabe ou hebraico). ",(0,a.jsx)(o.strong,{children:"eastAsia"})," - Script para leste asi\xe1tico. Adequado se seu documento estiver majoritariamente em textos asi\xe1ticos."]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"htmlExpressions"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsxs)(o.td,{children:["Apenas para documentos 4D Write (.4w7). Especifica como as express\xf5es HTML s\xe3o manejadas. Valores dispon\xedveis: ",(0,a.jsx)(o.br,{}),(0,a.jsx)(o.br,{})," ",(0,a.jsx)(o.strong,{children:"rawText"})," - Express\xf5es HTML s\xe3o importadas como texto raw dentro das tags ##htmlBegin## e ##htmlEnd## ",(0,a.jsx)(o.strong,{children:"ignore"})," (padr\xe3o) - express\xf5es HTML s\xe3o ignoradas."]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"importDisplayModeTexto"}),(0,a.jsx)(o.td,{}),(0,a.jsxs)(o.td,{children:["S\xf3 para documentos 4D Write (.4w7). Especifica como se gerencia a visualiza\xe7\xe3o da imagem. Valores dispon\xedveis:",(0,a.jsx)(o.br,{}),(0,a.jsx)(o.br,{})," legacy - o modo de visualiza\xe7\xe3o da imagem 4W7 se converte utilizando uma imagem de fundo se for diferente da escala de ajuste. noLegacy (predeterminado): o modo de visualiza\xe7\xe3o da imagem 4W7 se converte no atributo imageDisplayMode se for diferente da escala de ajuste."]})]})]})]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Nota de Compatibilidade:"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.em,{children:'As folhas de estilo de caracteres em documentos herdados de 4D WRite usam um mecanismo patenteado, que n\xe3o \xe9 compat\xedvel mais com 4D Write Pro. Para obter os melhores resultados para textos importados, atributos de folha de estilo devem ser convertidos para atributos de estilo "hard coded/codificados". Folhas de estilo de caractere "legado" n\xe3o s\xe3o importadas e n\xe3o s\xe3o mais referenciadas no documento.'})}),"\n",(0,a.jsxs)(o.li,{children:["A ",(0,a.jsx)(o.em,{children:"Compatibilidde para importa\xe7\xe3o em formato .docx s\xf3 \xe9 ce"})," ",(0,a.jsx)(o.em,{children:"rtificada para Microsoft Word 2010 ou mais recentes. Vers\xf5es anteriores, Microsoft Word 2007 especialmente, podem ter problemas na importa\xe7\xe3o"})]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0var WPDoc : Object\n\xa0WPDoc:=WP Import document("C:\\\\documents\\\\4DWriteDocs\\\\Letter.4w7")\n'})}),"\n",(0,a.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(o.p,{children:"Se quiser importar um documento .docx e quiser que as bordas do par\xe1grafo estejam colapsadas como est\xe3o em MS Word:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0$options:=New object\n\xa0$options.borderRules:="collapse"\xa0//colapsa as bordas de par\xe1grafo enquanto converte\n\xa0\n\xa0wpDoc:=WP Import document(\xabmydoc.docx\xbb;$options)\n'})}),"\n",(0,a.jsx)(o.p,{children:"Se quiser importar campos originais .docx como texto (para campos n\xe3o convertidos para 4D formulas):"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0$options:=New object\n\xa0$options.fields:="label"\xa0//para campos n\xe3o convertidos, importa refer\xeancias campo como texto entre {{ e }}\n\xa0\n\xa0wpDoc:=WP Import document(\xabmydoc.docx\xbb;$options)\n'})}),"\n",(0,a.jsx)(o.p,{children:"Se quiser importar um documento .docx cujo texto \xe9 principalmente em japon\xeas:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0$options:=New object\n\xa0$options.preferredFontScriptType:="eastAsia"\xa0//for\xe7a a convers\xe3o para scripts fonte eastAsia\n\xa0\n\xa0wpDoc:=WP Import document(\xabmydoc.docx\xbb;$options)\n'})}),"\n",(0,a.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-new",children:"WP New"})})]})}function l(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return d},a:function(){return t}});var s=r(667294);let a={},n=s.createContext(a);function t(e){let o=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);