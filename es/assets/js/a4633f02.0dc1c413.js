"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24378"],{57400:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"commands-legacy/create-thumbnail","title":"CREATE THUMBNAIL","description":"CREATE THUMBNAIL ( fuente ; dest {; ancho {; altura {; modo {; profundidad}}}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-thumbnail.md","sourceDirName":"commands-legacy","slug":"/commands/create-thumbnail","permalink":"/docs/es/20-R7/commands/create-thumbnail","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-thumbnail.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-thumbnail","title":"CREATE THUMBNAIL","slug":"/commands/create-thumbnail","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CONVERT PICTURE","permalink":"/docs/es/20-R7/commands/convert-picture"},"next":{"title":"Equal pictures","permalink":"/docs/es/20-R7/commands/equal-pictures"}}'),d=t("785893"),a=t("250065");let i={id:"create-thumbnail",title:"CREATE THUMBNAIL",slug:"/commands/create-thumbnail",displayed_sidebar:"docs"},s=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={br:"br",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"CREATE THUMBNAIL"})," ( ",(0,d.jsx)(n.em,{children:"fuente"})," ; ",(0,d.jsx)(n.em,{children:"dest"})," {; ",(0,d.jsx)(n.em,{children:"ancho"})," {; ",(0,d.jsx)(n.em,{children:"altura"})," {; ",(0,d.jsx)(n.em,{children:"modo"})," {; ",(0,d.jsx)(n.em,{children:"profundidad"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fuente"}),(0,d.jsx)(n.td,{children:"Picture"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Campo o variable imagen 4D a convertir en miniatura"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dest"}),(0,d.jsx)(n.td,{children:"Picture"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Miniatura resultante"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ancho"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Largo de la miniatura en p\xedxeles, Valor por defecto = 48"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"altura"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Alto de la miniatura en p\xedxeles, Valor por defecto = 48"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"modo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Modo de creaci\xf3n de la miniatura Valor por defecto = Proporcional centrado (6)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"profundidad"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Colores de la miniatura en bits/p\xedxeles Valor por defecto = Profundidad de pantalla actual (0)"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsx)(n.p,{children:"El comando CREATE THUMBNAILdevuelve una miniatura a partir de una imagen fuente. Las miniaturas se utilizan generalmente para la previsualizaci\xf3n de im\xe1genes en software multimedia o sitios web."}),"\n",(0,d.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,d.jsx)(n.em,{children:"fuente"})," la variable o el campo imagen 4D que contiene la imagen a reducir en forma de miniatura y en el par\xe1metro ",(0,d.jsx)(n.em,{children:"dest"})," el campo o variable imagen 4D que debe recibir la miniatura resultante."]}),"\n",(0,d.jsxs)(n.p,{children:["Los par\xe1metros opcionales ",(0,d.jsx)(n.em,{children:"largo"})," y ",(0,d.jsx)(n.em,{children:"alto"})," definen el tama\xf1o en p\xedxeles de la miniatura. si omite estos par\xe1metros, el tama\xf1o por defecto de la miniatura ser\xe1 de 48 x 48 p\xedxeles."]}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"modo"})," define el modo de creaci\xf3n de la miniatura, es decir la manera en que ser\xe1 redimensionada. Hay tres modos disponibles. Las siguientes constantes predefinidas son suministradas por 4D en el tema ",(0,d.jsx)(n.em,{children:"Formatos de salida de im\xe1genes"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Scaled to fit"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Scaled to fit proportional"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Scaled to fit prop centered"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," s\xf3lo estas tres constantes pueden ser utilizadas con CREATE THUMBNAIL. Las otras constantes en este tema no pueden aplicarse a este comando."]}),"\n",(0,d.jsx)(n.p,{children:"Si no introduce ning\xfan par\xe1metro, el modo 6 \u201CScaled to fit prop centered\u201D se aplica por defecto. A continuaci\xf3n se ilustran los diferentes modos:"}),"\n",(0,d.jsxs)(n.p,{children:["Imagen fuente",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.img,{src:t(217995).Z+"",width:"294",height:"192"})]}),"\n",(0,d.jsx)(n.p,{children:"Miniaturas resultantes (48x48)"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Scaled to fit = 2",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.img,{src:t(210620).Z+"",width:"50",height:"49"})]}),"\n",(0,d.jsxs)(n.li,{children:["Scaled to fit proportional = 5",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.img,{src:t(725447).Z+"",width:"50",height:"49"})]}),"\n",(0,d.jsxs)(n.li,{children:["Scaled to fit prop centered = 6 (modo por defecto)",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.img,{src:t(31825).Z+"",width:"50",height:"49"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," con los modos \u201CScaled to fit proportional\u201D y \u201CScaled to fit prop centered\u201D, los espacios vac\xedos aparecer\xe1n en blanco. Cuando estos modos se aplican a campos o im\xe1genes en formularios 4D, el espacio libre es transparente."]}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"profundidad"})," se ignora y por lo tanto debe omitirse. El comando siempre utiliza la profundidad de pantalla actual (n\xfamero de colores)."]}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"profundidad"})," define el n\xfamero de colores bajo Mac OS (es decir, la profundidad de pantalla) a conservar en la miniatura resultante. El par\xe1metro es un entero igual al n\xfamero de bits por p\xedxel: 1, 2, 4, 8, 16 \xf3 32. Introduzca 0 para utilizar la profundidad de pantalla actual (valor por defecto)."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," bajo Windows, se ignora el par\xe1metro ",(0,d.jsx)(n.em,{children:"profundidad"}),"; el comando siempre utiliza la profundidad de pantalla actual."]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"679"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},217995:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict27911.es-119137ccc97fe9000e7664519896e52a.png"},210620:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},725447:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAIAAAAXyW1IAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFxEDEecSx7cAAAPmSURBVHic7ZdbltsgDIaVbEmzJmdNYU3VmlLQXYCnx0/Ng+kcyjA4lj79EgrA943P5/Po/+EbEJGoz0BEY903AQgIAescZ8AObWYZfNT2ea37ekaOT6P9UDfryY93m8bzalOf9zbxvp35h03jtfZyX9clnh6Bp/zO3hsnTGwKJ14zp6Dl3pcdnGeIfduINQJOB5/mgTHgdT+ja7HJ9jNXnT0Yzi84pdne4nAIKB3JkMMsi50xkx3w2MUOBC2AVWFo7idaiVNg8u2ZX5hlDNKc9ARmGbn3WRRVW7SK5VxbC6dYz9qqnCTqiRNUxUycMkUntDxlTFZOlZZa7ZyytqrOwr9CLjjlGZb1RmdlXWkpj622Kr+N9zUrd5yg0I2/njEbQ8ppCYYE1XdGNFHzET2Jtfj+UktrDTsbS0mNcspst2yilob3kD02X4PZLltnfklJeb2hFdnnb1VmUV0p15HrnH7hl5glWv2tB8fKbW9sSRvRY1lHBKtiwNnUdWaZ+EHM00fsaP0xPflsN7Xcj/qk241VE/s7O+5mqX6hV5oUXGBmbemnhGdiwQFHt7j3Fwc/05BefYbxo+ZVJVGi0sZJapwvxiNrNE56ddxnIq5+mLZcVf1f07sMD7bsSPxAtT/OeC2wz0wdQNwfE7O+//ppU7+VLEi3IdV8VLpSA1l/EV803ehdXqrMTugpk8x/CeIwq0eKaENrtrVkIqlOyeyzG1D49dmyZJYhUZQTPgPRQSG+Hi3MSkEwtW851RH0ye57t1KyW5UUlpk7eYdP2osjiO+Peh/dD4ba9swS/7MaxioM9of1kupQeiBrptIyXhaKRaGLZlNY6jzxkzOkXeR4T9S5uPG8LopZT8tV8QwOc4crVnQT1uPn/dSjTrU+VC/Z2l3nfGd7muRyYpl7YxkWxOQmqntLpsTa9Bd5lzpxr/iQtFz99B5uGMe1hqTWmLa0DeTTIz2HN1O3lHr83O+XHl/rRenxc5+uGaf8/DNJKMrL20+Togjeb5nHUqkPjuxhVTu+7eR+v9QbOP1eZE0DOo/oUxB0fve34fE+PGahLcTkEzso9XpQaRyLNvcRM7P5+yOFqo3oqGeWTwCeE8zPaopqizMxXdO1KuVyHRqK77qpzq1X16Kw+c/LiEzsJ3t2jPnVI6wy5JXbumioQXBKfmfeRWH2jdyUp12FeR5z0OoqEl8Fd8q1+UIqPMDfV+rhxHXOx7M7w/AFLascrk3CWRPKLK+DU67UxgMXbUX+Jk5+7bsWg1a3bhvm/zIej4c3zV83brOujNusK+M268q4zboybrOujNusK+M268r4UrO+cfQ28C99RFb3mR4XnQAAAABJRU5ErkJggg=="},31825:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAIAAAAXyW1IAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFxEDEecSx7cAAAQDSURBVHic7ZhrciMhDITbqb2RcqbxmcyZrDN5h4ekFuDNev8kW2UqUSiGGcSnRkCAn1cej8el//luT6JcLpfTn4/vdmNf3m69Ut5uvVJ+qFu/zt+rfqqqiJwWIuA6VJDbMZ66hQL14Wm+KK1jtuPDYXupeUtuaGP0Z33s/mbzKdnosxvEbC9iztpr1j769O5TKZ868paxQTDY+9Tag+UffQKGH0r1XJWnXZq2GiePEUakOpvEaUQQo79NNnh4i8wW0W4NURfI1PHDZmAMWh2wumsrcwoLlkmeOFsbxeEolDgx5HCL9dsszMIIDYugBawKE5s+0SJOgclBz/zCLV93YUlPQKy+MfuZU1hdxfJcWwunqM/aypz6bIiTz9tJMCemOPekFgSbzClo9QQxPrxJI569fB1YrKnPsgb/onCW4lQRCWLw2Gor89vMPq/KPdHoD3pKnGRL695zXWZmYqmchDhFUn+SUX24v+G3pFSiZT4tbCJ2MXvMPIS0Fe06MVtIbzit2vLV55xZVTrbf+H0nB/rbNGW2HgnnRIRBOf3WTHYsNGJJbV36pgJpTgkWtNKVNpNpX2JPLMHSPXZxt48dJnyXx9xA5Npwc8tw/ej+XqT4yadpl4VpVklTggSsy21p5YagxH9Mbf2VFZ+Kl/TWrRV3+0jqfE75owabAqdL2zO6cRGZzhb9ePt8lnGPdHOW8ubyPU+iLYdQy1GMmZvYRHbsinLZBJe5lNT84GCKMn32BPFNKF0jjjbD5FDa7Y7BpszuPWEW1BKMWm1GcJsyND3QfuyxjnFe1ZaVUBzgtxxWkrQb0ukxq7Ve3yrjbPuaQvGPpuWTPXmiLMx0TqasbDQeStz0jTXqPchpO4Wp0xP2+Ks5XpiPC8K2hwu4Q+JkWJiZ3GndbsHDhPrTIvfSelhPm/FNhYUlfaMrsXRI6ulff96Ka6t+MohdsYKTpHfM0s6o9JWmdbgUX+6CuE5QjtNy9j5+0TrcdCEa7/Sx1tvGYnZQsta8uYkrGgeu6euvoa8kWjV2LcMG2d2LGxiTpp1Fsw0nV1JqXD1IG+MteVcv5+lelAyLbmnU3nsmssOzcyyfXJ/ZGY6sw+wFUzpMT19i3ui3Vv89jL2kGk9xk6iU1Z7cn/0T/YIcDTht4faS25H1d+N89adjsEw90LjnK4xNLfjlHq6gJgW3a8waXSnraSP0mLcI73oDLqsHSKavpMUBjXvQfcrcP6bV2LdE9te1kFZXrZTja385WKx+2+AAXccm/W45WQvMC2+A/reB+Y05gpE1OgWCRoVkhnDtMX6M05YxmVasyRWTms9dBaZmtbjrC27jW4S3UZb73+Av1Lebr1S3m69Ut5u/e/lzFu/AfTOp/kTRY1jAAAAAElFTkSuQmCC"},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var r=t(667294);let d={},a=r.createContext(d);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);