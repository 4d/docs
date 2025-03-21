"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87822"],{27049:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/create-thumbnail","title":"CREATE THUMBNAIL","description":"CREATE THUMBNAIL ( fonte ; dest {; largura {; altura {; modo {; profundidade}}}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-thumbnail.md","sourceDirName":"commands-legacy","slug":"/commands/create-thumbnail","permalink":"/docs/pt/20-R7/commands/create-thumbnail","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-thumbnail.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-thumbnail","title":"CREATE THUMBNAIL","slug":"/commands/create-thumbnail","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CONVERT PICTURE","permalink":"/docs/pt/20-R7/commands/convert-picture"},"next":{"title":"Equal pictures","permalink":"/docs/pt/20-R7/commands/equal-pictures"}}'),d=r("785893"),a=r("250065");let s={id:"create-thumbnail",title:"CREATE THUMBNAIL",slug:"/commands/create-thumbnail",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={br:"br",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"CREATE THUMBNAIL"})," ( ",(0,d.jsx)(n.em,{children:"fonte"})," ; ",(0,d.jsx)(n.em,{children:"dest"})," {; ",(0,d.jsx)(n.em,{children:"largura"})," {; ",(0,d.jsx)(n.em,{children:"altura"})," {; ",(0,d.jsx)(n.em,{children:"modo"})," {; ",(0,d.jsx)(n.em,{children:"profundidade"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fonte"}),(0,d.jsx)(n.td,{children:"Picture"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Fonte da imagem 4D ou vari\xe1vel a converter para uma miniatura"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dest"}),(0,d.jsx)(n.td,{children:"Picture"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Miniatura resultante"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"largura"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Largura da miniatura em pixels. Valor padr\xe3o = 48"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"altura"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Altura da miniatura em pixels. Valor padr\xe3o = 48"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"modo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"M\xf3dulo de cria\xe7\xe3o de miniaturas; Valor padr\xe3o= Proporcional centralizado (6)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"profundidade"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Obsoleto, n\xe3o usar"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(n.p,{children:"O comando CREATE THUMBNAIL devolve uma miniatura a partir de uma imagem fonte. As miniaturas s\xe3o utilizadas geralmente para a pr\xe9-visualiza\xe7\xe3o de imagens em software multim\xeddia ou p\xe1ginas web."}),"\n",(0,d.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,d.jsx)(n.em,{children:"fonte"})," a vari\xe1vel ou o campo imagem 4D que cont\xe9m a imagem a reduzir em forma de miniatura e no par\xe2metro ",(0,d.jsx)(n.em,{children:"dest"})," o campo ou vari\xe1vel imagem 4D que deve receber a miniatura resultante."]}),"\n",(0,d.jsxs)(n.p,{children:["Os par\xe2metros opcionais ",(0,d.jsx)(n.em,{children:"largura"})," e ",(0,d.jsx)(n.em,{children:"altura"})," definem o tamanho em p\xedxels da miniatura. Se omite estes par\xe2metros, o tamanho por padr\xe3o da miniatura ser\xe1 de 48 x 48 p\xedxels."]}),"\n",(0,d.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,d.jsx)(n.em,{children:"modo"})," define o modo de cria\xe7\xe3o da miniatura, ou seja a maneira em que ser\xe1 redimensionada. H\xe1 tr\xeas modos dispon\xedveis. As seguintes constantes pr\xe9-definidas s\xe3o fornecidas por 4D no tema \u201C",(0,d.jsx)(n.em,{children:"Formatos de sa\xedda de imagens"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Scaled to fit"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Scaled to fit proportional"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Scaled to fit prop centered"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," S\xf3 estas tr\xeas constantes podem ser utilizadas com CREATE THUMBNAIL. As outras constantes neste tema n\xe3o podem ser aplicadas a este comando."]}),"\n",(0,d.jsx)(n.p,{children:"Se n\xe3o introduz nenhum par\xe2metro, o modo 6 \u201CScaled to fit prop centered\u201D se aplica por padr\xe3o. A continua\xe7\xe3o se ilustram os diferentes modos:"}),"\n",(0,d.jsxs)(n.p,{children:["Imagem fonte",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.img,{src:r(183022).Z+"",width:"294",height:"192"})]}),"\n",(0,d.jsx)(n.p,{children:"Miniaturas resultantes (48x48)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Scaled to fit = 2",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.img,{src:r(25427).Z+"",width:"50",height:"49"})]}),"\n",(0,d.jsxs)(n.li,{children:["Scaled to fit proportional = 5",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.img,{src:r(480006).Z+"",width:"50",height:"49"})]}),"\n",(0,d.jsxs)(n.li,{children:["Scaled to fit prop centered = 6 (modo padr\xe3o)",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.img,{src:r(298270).Z+"",width:"50",height:"49"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," Com os modos \u201CScaled to fit proportional\u201D e \u201CScaled to fit prop centered\u201D, os espa\xe7os vazios aparecer\xe3o em branco. Quando estes modos s\xe3o aplicados a campos ou imagens em formul\xe1rios 4D, o espa\xe7o livre \xe9 transparente."]}),"\n",(0,d.jsxs)(n.p,{children:["O par\xe2metro ",(0,d.jsx)(n.em,{children:"profundidade"})," \xe9 ignorado e portanto deve ser omitido. O comando sempre utiliza a profundidade de tela atual (n\xfamero de cores)."]}),"\n",(0,d.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,d.jsx)(n.em,{children:"profundidade"})," define o n\xfamero de cores em Mac OS (ou seja, a profundidade de tela) a conservar na miniatura resultante. O par\xe2metro \xe9 um inteiro igual ao n\xfamero de bits por p\xedxel: 1, 2, 4, 8, 16 ou 32. Introduza 0 para utilizar a profundidade de tela atual (valor padr\xe3o)."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," Em Windows, se ignora o par\xe2metro ",(0,d.jsx)(n.em,{children:"profundidade"}),"; o comando sempre utiliza a profundidade de tela atual."]}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"679"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},183022:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/pict27911.en-de14420462f86e07f97a6ce54542a352.png"},25427:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},480006:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAIAAAAXyW1IAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFwcvOx0zug0AAAPmSURBVHic7ZdbltsgDIaVbEmzJmdNYU3VmlLQXYCnx0/Ng+kcyjA4lj79EgrA943P5/Po/+EbEJGoz0BEY903AQgIAescZ8AObWYZfNT2ea37ekaOT6P9UDfryY93m8bzalOf9zbxvp35h03jtfZyX9clnh6Bp/zO3hsnTGwKJ14zp6Dl3pcdnGeIfduINQJOB5/mgTHgdT+ja7HJ9jNXnT0Yzi84pdne4nAIKB3JkMMsi50xkx3w2MUOBC2AVWFo7idaiVNg8u2ZX5hlDNKc9ARmGbn3WRRVW7SK5VxbC6dYz9qqnCTqiRNUxUycMkUntDxlTFZOlZZa7ZyytqrOwr9CLjjlGZb1RmdlXWkpj622Kr+N9zUrd5yg0I2/njEbQ8ppCYYE1XdGNFHzET2Jtfj+UktrDTsbS0mNcspst2yilob3kD02X4PZLltnfklJeb2hFdnnb1VmUV0p15HrnH7hl5glWv2tB8fKbW9sSRvRY1lHBKtiwNnUdWaZ+EHM00fsaP0xPflsN7Xcj/qk241VE/s7O+5mqX6hV5oUXGBmbemnhGdiwQFHt7j3Fwc/05BefYbxo+ZVJVGi0sZJapwvxiNrNE56ddxnIq5+mLZcVf1f07sMD7bsSPxAtT/OeC2wz0wdQNwfE7O+//ppU7+VLEi3IdV8VLpSA1l/EV803ehdXqrMTugpk8x/CeIwq0eKaENrtrVkIqlOyeyzG1D49dmyZJYhUZQTPgPRQSG+Hi3MSkEwtW851RH0ye57t1KyW5UUlpk7eYdP2osjiO+Peh/dD4ba9swS/7MaxioM9of1kupQeiBrptIyXhaKRaGLZlNY6jzxkzOkXeR4T9S5uPG8LopZT8tV8QwOc4crVnQT1uPn/dSjTrU+VC/Z2l3nfGd7muRyYpl7YxkWxOQmqntLpsTa9Bd5lzpxr/iQtFz99B5uGMe1hqTWmLa0DeTTIz2HN1O3lHr83O+XHl/rRenxc5+uGaf8/DNJKMrL20+Togjeb5nHUqkPjuxhVTu+7eR+v9QbOP1eZE0DOo/oUxB0fve34fE+PGahLcTkEzso9XpQaRyLNvcRM7P5+yOFqo3oqGeWTwCeE8zPaopqizMxXdO1KuVyHRqK77qpzq1X16Kw+c/LiEzsJ3t2jPnVI6wy5JXbumioQXBKfmfeRWH2jdyUp12FeR5z0OoqEl8Fd8q1+UIqPMDfV+rhxHXOx7M7w/AFLascrk3CWRPKLK+DU67UxgMXbUX+Jk5+7bsWg1a3bhvm/zIej4c3zV83brOujNusK+M268q4zboybrOujNusK+M268r4UrO+cfQ28C99RFb3mR4XnQAAAABJRU5ErkJggg=="},298270:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAIAAAAXyW1IAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFwcvOx0zug0AAAQDSURBVHic7ZhrciMhDITbqb2RcqbxmcyZrDN5h4ekFuDNev8kW2UqUSiGGcSnRkCAn1cej8el//luT6JcLpfTn4/vdmNf3m69Ut5uvVJ+qFu/zt+rfqqqiJwWIuA6VJDbMZ66hQL14Wm+KK1jtuPDYXupeUtuaGP0Z33s/mbzKdnosxvEbC9iztpr1j769O5TKZ868paxQTDY+9Tag+UffQKGH0r1XJWnXZq2GiePEUakOpvEaUQQo79NNnh4i8wW0W4NURfI1PHDZmAMWh2wumsrcwoLlkmeOFsbxeEolDgx5HCL9dsszMIIDYugBawKE5s+0SJOgclBz/zCLV93YUlPQKy+MfuZU1hdxfJcWwunqM/aypz6bIiTz9tJMCemOPekFgSbzClo9QQxPrxJI569fB1YrKnPsgb/onCW4lQRCWLw2Gor89vMPq/KPdHoD3pKnGRL695zXWZmYqmchDhFUn+SUX24v+G3pFSiZT4tbCJ2MXvMPIS0Fe06MVtIbzit2vLV55xZVTrbf+H0nB/rbNGW2HgnnRIRBOf3WTHYsNGJJbV36pgJpTgkWtNKVNpNpX2JPLMHSPXZxt48dJnyXx9xA5Npwc8tw/ej+XqT4yadpl4VpVklTggSsy21p5YagxH9Mbf2VFZ+Kl/TWrRV3+0jqfE75owabAqdL2zO6cRGZzhb9ePt8lnGPdHOW8ubyPU+iLYdQy1GMmZvYRHbsinLZBJe5lNT84GCKMn32BPFNKF0jjjbD5FDa7Y7BpszuPWEW1BKMWm1GcJsyND3QfuyxjnFe1ZaVUBzgtxxWkrQb0ukxq7Ve3yrjbPuaQvGPpuWTPXmiLMx0TqasbDQeStz0jTXqPchpO4Wp0xP2+Ks5XpiPC8K2hwu4Q+JkWJiZ3GndbsHDhPrTIvfSelhPm/FNhYUlfaMrsXRI6ulff96Ka6t+MohdsYKTpHfM0s6o9JWmdbgUX+6CuE5QjtNy9j5+0TrcdCEa7/Sx1tvGYnZQsta8uYkrGgeu6euvoa8kWjV2LcMG2d2LGxiTpp1Fsw0nV1JqXD1IG+MteVcv5+lelAyLbmnU3nsmssOzcyyfXJ/ZGY6sw+wFUzpMT19i3ui3Vv89jL2kGk9xk6iU1Z7cn/0T/YIcDTht4faS25H1d+N89adjsEw90LjnK4xNLfjlHq6gJgW3a8waXSnraSP0mLcI73oDLqsHSKavpMUBjXvQfcrcP6bV2LdE9te1kFZXrZTja385WKx+2+AAXccm/W45WQvMC2+A/reB+Y05gpE1OgWCRoVkhnDtMX6M05YxmVasyRWTms9dBaZmtbjrC27jW4S3UZb73+Av1Lebr1S3m69Ut5u/e/lzFu/AfTOp/kTRY1jAAAAAElFTkSuQmCC"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return s}});var t=r(667294);let d={},a=t.createContext(d);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);