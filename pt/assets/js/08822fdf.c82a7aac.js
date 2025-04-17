"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61262"],{88095:function(e,n,d){d.r(n),d.d(n,{default:()=>j,frontMatter:()=>t,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/listbox-get-cell-coordinates","title":"LISTBOX GET CELL COORDINATES","description":"LISTBOX GET CELL COORDINATES ( { ;} objeto ; coluna ; linha ; esquerda ; superior ; direita ; inferior* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-get-cell-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-cell-coordinates","permalink":"/docs/pt/20-R8/commands/listbox-get-cell-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-cell-coordinates.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-get-cell-coordinates","title":"LISTBOX GET CELL COORDINATES","slug":"/commands/listbox-get-cell-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get auto row height","permalink":"/docs/pt/20-R8/commands/listbox-get-auto-row-height"},"next":{"title":"LISTBOX GET CELL POSITION","permalink":"/docs/pt/20-R8/commands/listbox-get-cell-position"}}'),s=d("785893"),r=d("250065");let t={id:"listbox-get-cell-coordinates",title:"LISTBOX GET CELL COORDINATES",slug:"/commands/listbox-get-cell-coordinates",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX GET CELL COORDINATES"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"coluna"})," ; ",(0,s.jsx)(n.em,{children:"linha"})," ; ",(0,s.jsx)(n.em,{children:"esquerda"})," ; ",(0,s.jsx)(n.em,{children:"superior"})," ; ",(0,s.jsx)(n.em,{children:"direita"})," ; ",(0,s.jsx)(n.em,{children:"inferior"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Se especificado = objeto \xe9 um nome de objeto (cadeia)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome de objeto (se * for especificado) ou vari\xe1vel (se * for omitido)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"coluna"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de coluna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"linha"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de linha"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"esquerda"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordenada esquerda do objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"superior"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordenada superior do objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"direita"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordenada direita do objeto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inferior"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordenada inferior do objeto"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando LISTBOX GET CELL COORDINATES devolve nas vari\xe1veis ou campos ",(0,s.jsx)(n.em,{children:"esq"}),", ",(0,s.jsx)(n.em,{children:"sup"}),", ",(0,s.jsx)(n.em,{children:"dir"})," e ",(0,s.jsx)(n.em,{children:"inf"})," as coordenadas (em pontos) da c\xe9lula designada pelos par\xe2metros ",(0,s.jsx)(n.em,{children:"coluna"})," e ",(0,s.jsx)(n.em,{children:"linha"}),", no list box definido por ",(0,s.jsx)(n.em,{children:"*"})," e ",(0,s.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,s.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se n\xe3o passar o par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", indica que o objeto \xe9 um campo ou uma vari\xe1vel. Neste caso, passa uma refer\xeancia de campo ou vari\xe1vel (campo ou vari\xe1vel de tipo de objeto unicamente) em vez de uma cadeia."]}),"\n",(0,s.jsxs)(n.p,{children:["Por coer\xeancia com o comando ",(0,s.jsx)(n.em,{children:"OBJECT GET COORDINATES"}),", a origem \xe9 a esquina superior esquerda do formul\xe1rio que cont\xe9m a c\xe9lula. Al\xe9m disso, as coordenadas devolvidas s\xe3o te\xf3ricas; que levam em conta o estado de deslocamento do list box antes de que ocorra qualquer recorte. Como resultado, a c\xe9lula pode ser n\xe3o vis\xedvel (ou s\xf3 parcialmente) em suas coordenadas, e estas coordenadas podem estar fora dos limites do formul\xe1rio (ou inclusive negativas). Para saber se a c\xe9lula \xe9 vis\xedvel (e que parte dela \xe9 vis\xedvel) \xe9 necess\xe1rio comparar as coordenadas devolvidas com as coordenadas do listbox, levando em conta as seguintes regras:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Todas as c\xe9lulas se cortam com as coordenadas de seu list box pai (como os devolvidos por ",(0,s.jsx)(n.em,{children:"OBJECT GET COORDINATES"})," no list box)."]}),"\n",(0,s.jsx)(n.li,{children:"Os Sub-objetos cabe\xe7alho e rodap\xe9 de p\xe1gina se mostram sobre o conte\xfado da coluna: quando as coordenadas de uma c\xe9lula se cruzam as coordenadas das linhas de cabe\xe7alho ou rodap\xe9 de p\xe1gina, a c\xe9lula n\xe3o \xe9 mostrada nesta interse\xe7\xe3o."}),"\n",(0,s.jsx)(n.li,{children:"Os elementos das colunas bloqueadas s\xe3o mostradas sobre os elementos das colunas desloc\xe1veis: quando as coordenadas de um elemento em uma coluna desloc\xe1vel cruzam as coordenadas de uma coluna bloqueada, ent\xe3o que n\xe3o \xe9 mostrada nesta interse\xe7\xe3o."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Para mais informa\xe7\xe3o, consulte a descri\xe7\xe3o do comando ",(0,s.jsx)(n.em,{children:"OBJECT GET COORDINATES"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Voc\xea quer desenhar um ret\xe2ngulo vermelho arredor da c\xe9lula selecionada de um listbox:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET VISIBLE(*;"RedRect";False)\xa0//inicializar um ret\xe2ngulo vermelho\n\xa0\xa0//o rect\xe2ngulo \xe9 definido em algum lugar j\xe1 sob a forma\n\xa0LISTBOX GET CELL POSITION(*;"LB1";$col;$row)\n\xa0LISTBOX GET CELL COORDINATES(*;"LB1";$col;$row;$x1;$y1;$x2;$y2)\n\xa0OBJECT SET VISIBLE(*;"RedRect";True)\n\xa0OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(97331).Z+"",width:"549",height:"203"})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/listbox-get-cell-position",children:"LISTBOX GET CELL POSITION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/object-get-coordinates",children:"OBJECT GET COORDINATES"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"1330"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},97331:function(e,n,d){d.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},250065:function(e,n,d){d.d(n,{Z:function(){return a},a:function(){return t}});var o=d(667294);let s={},r=o.createContext(s);function t(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);