"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81176"],{315238:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/svg-set-attribute","title":"SVG SET ATTRIBUTE","description":"SVG SET ATTRIBUTE ( { ;} objetoImagem ; id_Elemento ; nomeAtrib ; valorAtributo {; nomeAtrib2 ; valorAtributo2 ; ... ; nomeAtribN ; valorAtributoN} {; })","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/svg-set-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/svg-set-attribute","permalink":"/docs/pt/20-R8/commands/svg-set-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-set-attribute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"svg-set-attribute","title":"SVG SET ATTRIBUTE","slug":"/commands/svg-set-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SVG GET ATTRIBUTE","permalink":"/docs/pt/20-R8/commands/svg-get-attribute"},"next":{"title":"SVG SHOW ELEMENT","permalink":"/docs/pt/20-R8/commands/svg-show-element"}}'),r=s("785893"),t=s("250065");let d={id:"svg-set-attribute",title:"SVG SET ATTRIBUTE",slug:"/commands/svg-set-attribute",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SVG SET ATTRIBUTE"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objetoImagem"})," ; id_Elemento ; ",(0,r.jsx)(n.em,{children:"nomeAtrib"})," ; ",(0,r.jsx)(n.em,{children:"valorAtributo"})," {; ",(0,r.jsx)(n.em,{children:"nomeAtrib2"})," ; ",(0,r.jsx)(n.em,{children:"valorAtributo2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"nomeAtribN"})," ; ",(0,r.jsx)(n.em,{children:"valorAtributoN"}),"} {; *})"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Se especificado, objImagem \xe9 um nome objeto (string). Se omitido, objImagem \xe9 uma vari\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objetoPicture"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome de objeto (se * for especificado) ou vari\xe1vel ou campo (se * for otimido)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id_Elemento"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"ID do elemento onde um ou mais atributos s\xe3o estabelecidos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomeAtrib"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Atributo a estabelecer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valorAtributo"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Novo valor do atributo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Se passado = modifica a pr\xf3pria imagem SVG"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"O comando SVG SET ATTRIBUTE"})," \xe9 usado para modificar o valor de um atributo existente na \xe1rvore de renderiza\xe7\xe3o SVG de uma imagem exibida ou na \xe1rvore interna DOM de uma imagem."]}),"\n",(0,r.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional *, indica que o par\xe2metro objImagem \xe9 um nome de objeto (string). Neste caso, o comando aplica aos par\xe2metros da imagem renderizada anexada ao objeto (note que os par\xe2metros, e portanto a imagem renderizada do objeto, s\xe3o criados apenas se o comando ",(0,r.jsx)(n.strong,{children:"SVG SET ATTRIBUTE"})," for chamado pelo menos uma vez).",(0,r.jsx)(n.br,{}),"\nSe n\xe3o passar o par\xe2metro *, indica que o par\xe2metro objImagem \xe9 uma vari\xe1vel ou campo. Portanto, passa uma vari\xe1vel (apenas vari\xe1vel objeto) ou refer\xeancia de campo ao inv\xe9s de uma string. Neste caso, o comando se aplica \xe0s imagens renderizadas de todos os objetos que usam a vari\xe1vel ou o campo."]}),"\n",(0,r.jsx)(n.p,{children:"Como padr\xe3o, este comando modifica apenas a imagem renderizada nos objetos formul\xe1rio correspondentes a objImagem no contexto do formul\xe1rio, e n\xe3o faz nada se nenhum objeto o usar. Se passar o segundo * como \xfaltimo par\xe2metro, o comando modifica a pr\xf3pria imagem SVG, mesmo se nenhum objeto formul\xe1rio o usar. Neste caso, todos os objetos formul\xe1rio existentes ou futuros que usam a imagem SVG ser\xe3o modificados, em todos os contextos."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["O \xfaltimo * n\xe3o serve pra nada se o par\xe2metro ",(0,r.jsx)(n.em,{children:"objImagem"})," referenciar um objeto formul\xe1rio."]}),"\n",(0,r.jsxs)(n.li,{children:["Para mudar a data source de uma imagem SVG, tamb\xe9m pode usar os comandos ",(0,r.jsx)(n.em,{children:"XML DOM"})," ou ",(0,r.jsx)(n.strong,{children:"4D SVG component"})," fornecido por 4D."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro ",(0,r.jsx)(n.em,{children:"element_ID"}),' \xe9 usado para especificar o ID (atributo "id" ou "xml:id") do elemento cujos atributos quer modificar.']}),"\n",(0,r.jsxs)(n.p,{children:["Nos par\xe2metros ",(0,r.jsx)(n.em,{children:"attribName"})," e ",(0,r.jsx)(n.em,{children:"attribValue"}),", passe, respectivamente, o atributo a estabelecer e seu valor (como vari\xe1veis, campos ou valores literais). Pode passar quantos pares de atributo/valor quantos quiser."]}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"SVG SET ATTRIBUTE"})," \xe9 usado para modificar (mas n\xe3o para adicionar ou apagar) a maioria dos atributos SVG, como por exemplo, 'fill', 'opacity', 'font-family', e assim por diante. Para uma defini\xe7\xe3o completa dos atributos SVG, veja os documentos de refer\xeancia dispon\xedveis na Internet, por exemplo: ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"http://www.w3.org/TR/SVG11/attindex.html",children:"http://www.w3.org/TR/SVG11/attindex.html"})}),". A imagem renderizada \xe9 atualizada imediatamente, as modifica\xe7\xf5es s\xe3o transferidas para os elementos filhos para estilos herdados."]}),"\n",(0,r.jsx)(n.p,{children:"Note que por raz\xf5es t\xe9cnicas, os atributos de certos elementos, e tamb\xe9m certos atributos, n\xe3o podem ser modificados. A tabela abaixo lista os elementos que podem ou n\xe3o ser modificados, assim como os atributos que n\xe3o podem ser mudados."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Elementos cujos atributos podem ser modificados"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"svg"}),(0,r.jsx)(n.th,{children:"Restri\xe7\xf5es :"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'- "width" e "height" n\xe3o podem ser modificados(1)'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'- "viewBox" s\xf3 pode ser modificado se "width" e "height" forem especificados no documento original'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"g"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"defs"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"use"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filter"}),(0,r.jsx)(n.td,{children:"Restri\xe7\xe3o: elementos filhos fe_xxx n\xe3o podem ser modificados"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"circle"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ellipse"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"line"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"polyline"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"polygon"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"path"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rect"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"text, tspan, textArea"}),(0,r.jsx)(n.td,{children:'O atributo especifico specific "4d-text" \xe9 usado para modificar o texto de um elemento "text", "tspan" ou "textArea" (ver exemplo)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Image"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Elementos cujos atributos n\xe3o podem ser modificados"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"linearGradient, radialGradient, Stop, solidColor, marker, symbol, clipPath, filter e elementos que come\xe7am por fe, style, pattern"}),(0,r.jsx)(n.th,{children:"Este grupo designa todos os elementos que podem ser referenciados ou contidos em um elemento que pode ser referenciado. Isso significa que n\xe3o \xe9 poss\xedvel, por exemplo, redefinir os atributos de um gradiente (mas \xe9 poss\xedvel mudar o gradiente usado). Da mesma forma, para mudar um marcador de cor preto para um marcador velho, precisa definir ambos marcadores no documento SVG (um preto e outro vermelho) e selecionar um deles. N\xe3o \xe9 poss\xedvel por exemplo modificar a cor do ret\xe2ngulo se seu objeto pai for um s\xedmbolo ou elemento marker"})]})})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Atributos que n\xe3o podem ser modificados"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"id ou xml:id"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lang ou xml:lang"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"class ou xml:class"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"width, height"}),(0,r.jsx)(n.td,{children:"Apenas em rela\xe7\xe3o aos atributos do elemento 'svg'(1)"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(1) Estes atributos n\xe3o podem ser modificados porque eles definem e estruturam a imagem resultante. Os atributos ",(0,r.jsx)(n.em,{children:"width"})," e ",(0,r.jsx)(n.em,{children:"height do elemento"})," ",(0,r.jsx)(n.em,{children:"svg"})," s\xe3o usados para definir as dimens\xf5es iniciais da imagem em 4D e estas dimens\xf5es devem se manter constantes depois que a imagem for criada (\xe9 poss\xedvel entretanto modificar as dimens\xf5es da imagem resultado com o comando 4D",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/transform-picture",children:"TRANSFORM PICTURE"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Tamb\xe9m pode referenciar a descri\xe7\xe3o do comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/svg-get-attribute",children:"SVG GET ATTRIBUTE"})," para ver a lista de atributos 4D que s\xe3o reservados e dedicados \xe0 anima\xe7\xe3o"]}),"\n",(0,r.jsx)(n.p,{children:"Se tentar modificar o atributo de um elemento que n\xe3o for compat\xedvel ou um de seus elementos filhos, o comando n\xe3o faz nada e nenhum erro \xe9 gerado"}),"\n",(0,r.jsxs)(n.p,{children:["Se o comando n\xe3o for executado no contexto de um formul\xe1rio ou se um ",(0,r.jsx)(n.em,{children:"objImagem"})," for passado, a vari\xe1vel OK \xe9 estabelecida em 0. Se o comando for executado corretamente, \xe9 estabelecido em 1 ."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Modifica\xe7\xe3o do conte\xfado de um elemento de tipo texto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SVG SET ATTRIBUTE(*;picture_object_name;text_element_ID;"4d-text";"Este \xe9 um texto")\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," n\xe3o h\xe1 nenhum namespace para que o atributo possa ser utilizado em uma folha de estilo CSS sem risco de conflito."]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/svg-get-attribute",children:"SVG GET ATTRIBUTE"})}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1055"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var o=s(667294);let r={},t=o.createContext(r);function d(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);