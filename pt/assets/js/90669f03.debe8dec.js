"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49317"],{597259:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>t,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/svg-find-element-id-by-coordinates","title":"SVG Find element ID by coordinates","description":"SVG Find element ID by coordinates ( { ;} objetoImagem ; X ; Y* ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/svg-find-element-id-by-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/svg-find-element-id-by-coordinates","permalink":"/docs/pt/20-R7/commands/svg-find-element-id-by-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-find-element-id-by-coordinates.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"svg-find-element-id-by-coordinates","title":"SVG Find element ID by coordinates","slug":"/commands/svg-find-element-id-by-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SVG EXPORT TO PICTURE","permalink":"/docs/pt/20-R7/commands/svg-export-to-picture"},"next":{"title":"SVG Find element IDs by rect","permalink":"/docs/pt/20-R7/commands/svg-find-element-ids-by-rect"}}'),d=o("785893"),r=o("250065");let i={id:"svg-find-element-id-by-coordinates",title:"SVG Find element ID by coordinates",slug:"/commands/svg-find-element-id-by-coordinates",displayed_sidebar:"docs"},a=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SVG Find element ID by coordinates"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objetoImagem"})," ; ",(0,d.jsx)(n.em,{children:"X"})," ; ",(0,d.jsx)(n.em,{children:"Y"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Se especificado, objetoImagem \xe9 um nome de objeto (string), se omitido, objetoImagem \xe9 um campo ou vari\xe1vel"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objetoPicture"}),(0,d.jsx)(n.td,{children:"Picture"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome de objeto (Se * for especificado) ou Campo ou Vari\xe1vel (se * for omitido)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"X"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordenadas X em p\xedxels"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Y"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordenadas Y em p\xedxels"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"ID do elemento encontrado na localiza\xe7\xe3o X, Y"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:['O comando SVG Find element ID by coordinates retorna a identifica\xe7\xe3o ("id" ou atributo "xml:id") do elemento XML encontrado na localiza\xe7\xe3o definida pelas coordenadas (x,y) na imagem SVG designada pelo par\xe2metro ',(0,d.jsx)(n.em,{children:"objetoImagem"}),". Este comando pode ser utilizado particularmente para criar interfaces gr\xe1ficas interativas utilizando objetos SVG."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota"}),": para maior informa\xe7\xe3o sobre o formato SVG, por favor consulte a se\xe7\xe3o ",(0,d.jsx)(n.em,{children:"Introdu\xe7\xe3o aos comandos de XML Utilities"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional *, indique que o par\xe2metro ",(0,d.jsx)(n.em,{children:"pictureObject"})," \xe9 um nome de objeto (string). Se n\xe3o passa este par\xe2metro, indique que o par\xe2metro ",(0,d.jsx)(n.em,{children:"pictureObject"})," \xe9 um campo ou vari\xe1vel. Neste caso, n\xe3o passe uma string, e sim uma referencia de campo ou vari\xe1vel (campo ou vari\xe1vel objeto apenas).",(0,d.jsx)(n.br,{}),'\nNote que n\xe3o \xe9 obrigatorio que a imagem em um formul\xe1rio seja mostrada. Neste caso, a sintaxe de tipo "object name" n\xe3o \xe9 v\xe1lida e deve passar um nome de campo ou vari\xe1vel.']}),"\n",(0,d.jsxs)(n.p,{children:["As coordenadas passadas nos par\xe2metros ",(0,d.jsx)(n.em,{children:"x"})," e ",(0,d.jsx)(n.em,{children:"y"})," devem estar expressadas em p\xedxeis relativos a esquina superior esquerda da imagem (0,0). No contexto de uma imagem mostrada em um formul\xe1rio, pode utilizar os valores devolvidos pelas vari\xe1veis sistema MouseX e MouseY. Estas vari\xe1veis s\xe3o atualizadas nos eventos de formul\xe1rio On Clicked e On Double Clicked, assim como nos eventos de formul\xe1rio On Mouse Enter e On Mouse Move."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota"}),': no sistema de coordenadas da imagem, MouseX e MouseY sempre especifica o mesmo ponto, independentemente do formato de visualiza\xe7\xe3o da imagem (excepto no caso do formato "Replicated"), mesmo quando a imagem for rolada ou receber um zoom.']}),"\n",(0,d.jsx)(n.p,{children:"O ponto a ser considerado \xe9 o primeiro ponto alcan\xe7ado. Por exemplo, no seguinte caso, o comando devolver\xe1 a identifica\xe7\xe3o do c\xedrculo se as coordenadas do ponto A forem passadas, e a do ret\xe2ngulo se as coordenadas do ponto B forem passadas:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:o(864782).Z+"",width:"200",height:"76"})}),"\n",(0,d.jsx)(n.p,{children:"Quando as coordenadas corresponderem a um objeto superposto ou composto, o comando retorna a identifica\xe7\xe3o do primeiro objeto com um identificador de atributo v\xe1lido, se for necess\xe1rio, entre os elementos pai."}),"\n",(0,d.jsx)(n.p,{children:"O comando retorna uma string vazia se:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:'a raiz \xe9 alcan\xe7ada sem encontrar um atributo "id",'}),"\n",(0,d.jsx)(n.li,{children:"o ponto de coordenadas n\xe3o pertence a nenhum objeto,"}),"\n",(0,d.jsx)(n.li,{children:'o atributo "id" \xe9 uma string vazia.'}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota"}),': este comando n\xe3o pode detectar objetos cujo valor de opacidade (atributo "fill-opacity") seja inferior a 0.01.']}),"\n",(0,d.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,d.jsxs)(n.p,{children:["Se ",(0,d.jsx)(n.em,{children:"objetoImagem"})," n\xe3o contiver uma imagem SVG v\xe1lida, o comando retorna uma cadeia vazia e a vari\xe1vel sistema OK toma o valor 0. Do contr\xe1rio, se o comando for executado corretamente, a vari\xe1vel sistema OK toma o valor 1."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/svg-find-element-ids-by-rect",children:"SVG Find element IDs by rect"})}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1054"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},864782:function(e,n,o){o.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return i}});var s=o(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);