"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63960"],{914968:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/create-thumbnail","title":"CREATE THUMBNAIL","description":"CREATE THUMBNAIL ( source ; dest {; width {; height {; mode {; depth}}}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/create-thumbnail.md","sourceDirName":"commands-legacy","slug":"/commands/create-thumbnail","permalink":"/docs/20-R7/commands/create-thumbnail","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-thumbnail.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-thumbnail","title":"CREATE THUMBNAIL","slug":"/commands/create-thumbnail","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CONVERT PICTURE","permalink":"/docs/20-R7/commands/convert-picture"},"next":{"title":"Equal pictures","permalink":"/docs/20-R7/commands/equal-pictures"}}'),i=t("785893"),s=t("250065");let d={id:"create-thumbnail",title:"CREATE THUMBNAIL",slug:"/commands/create-thumbnail",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"Description",id:"description",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={br:"br",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CREATE THUMBNAIL"})," ( ",(0,i.jsx)(n.em,{children:"source"})," ; ",(0,i.jsx)(n.em,{children:"dest"})," {; ",(0,i.jsx)(n.em,{children:"width"})," {; ",(0,i.jsx)(n.em,{children:"height"})," {; ",(0,i.jsx)(n.em,{children:"mode"})," {; ",(0,i.jsx)(n.em,{children:"depth"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"source"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"4D picture field or variable to convert as a thumbnail"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dest"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Resulting thumbnail"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"width"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Thumbnail width in pixels, Default value = 48"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"height"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Thumbnail height in pixels, Default value = 48"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mode"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Thumbnail creation mode Default value = Scaled to fit prop centered (6)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"depth"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Obsolete, do not use"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"CREATE THUMBNAIL"})," command returns a thumbnail from a given source picture. Thumbnails are usually used for picture preview within multimedia software or Web sites."]}),"\n",(0,i.jsxs)(n.p,{children:["You pass in the ",(0,i.jsx)(n.em,{children:"source"})," parameter the 4D variable or field containing the picture to reduce to a thumbnail. You pass in the ",(0,i.jsx)(n.em,{children:"dest"})," parameter the 4D picture field or variable which should host the resulting thumbnail."]}),"\n",(0,i.jsxs)(n.p,{children:["The optional parameters ",(0,i.jsx)(n.em,{children:"width"})," and ",(0,i.jsx)(n.em,{children:"height"})," define the required thumbnail size (in pixels). If you omit these parameters, the thumbnail default size will be 48 x 48 pixels."]}),"\n",(0,i.jsxs)(n.p,{children:["The optional parameter ",(0,i.jsx)(n.em,{children:"mode"})," defines the thumbnail creation mode, i.e. the resizing mode. Three modes are available. The following predefined constants are provided by 4D in the \u201C",(0,i.jsx)(n.em,{children:"Picture Display Formats"}),"\u201D constant theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Scaled to fit"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Scaled to fit prop centered"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Scaled to fit proportional"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Only these constants can be used with ",(0,i.jsx)(n.strong,{children:"CREATE THUMBNAIL"}),". The other constants in this theme cannot be applied to this command."]}),"\n",(0,i.jsx)(n.p,{children:"If you do not enter any parameter, the \u201CScaled to fit prop centered\u201D mode (6) is applied by default. Below is an illustration of the various modes:"}),"\n",(0,i.jsxs)(n.p,{children:["Source picture",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:t(136173).Z+"",width:"294",height:"192"})]}),"\n",(0,i.jsx)(n.p,{children:"Resulting thumbnails (48x48)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Scaled to fit = 2",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:t(284789).Z+"",width:"50",height:"49"})]}),"\n",(0,i.jsxs)(n.li,{children:["Scaled to fit proportional = 5",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:t(40026).Z+"",width:"50",height:"49"})]}),"\n",(0,i.jsxs)(n.li,{children:["Scaled to fit prop centered = 6 (default mode)",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:t(5288).Z+"",width:"50",height:"49"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," With the \u201CScaled to fit proportional\u201D and the \u201CScaled to fit prop centered\u201D, the free space will be displayed in white. When these modes are applied to picture field or variable in 4D forms, the free space is transparent."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"depth"})," parameter is ignored and must be omitted. The command always uses the current screen depth (number of colors)."]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"679"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},136173:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict27911.en-de14420462f86e07f97a6ce54542a352.png"},284789:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},40026:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAIAAAAXyW1IAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFwcvOx0zug0AAAPmSURBVHic7ZdbltsgDIaVbEmzJmdNYU3VmlLQXYCnx0/Ng+kcyjA4lj79EgrA943P5/Po/+EbEJGoz0BEY903AQgIAescZ8AObWYZfNT2ea37ekaOT6P9UDfryY93m8bzalOf9zbxvp35h03jtfZyX9clnh6Bp/zO3hsnTGwKJ14zp6Dl3pcdnGeIfduINQJOB5/mgTHgdT+ja7HJ9jNXnT0Yzi84pdne4nAIKB3JkMMsi50xkx3w2MUOBC2AVWFo7idaiVNg8u2ZX5hlDNKc9ARmGbn3WRRVW7SK5VxbC6dYz9qqnCTqiRNUxUycMkUntDxlTFZOlZZa7ZyytqrOwr9CLjjlGZb1RmdlXWkpj622Kr+N9zUrd5yg0I2/njEbQ8ppCYYE1XdGNFHzET2Jtfj+UktrDTsbS0mNcspst2yilob3kD02X4PZLltnfklJeb2hFdnnb1VmUV0p15HrnH7hl5glWv2tB8fKbW9sSRvRY1lHBKtiwNnUdWaZ+EHM00fsaP0xPflsN7Xcj/qk241VE/s7O+5mqX6hV5oUXGBmbemnhGdiwQFHt7j3Fwc/05BefYbxo+ZVJVGi0sZJapwvxiNrNE56ddxnIq5+mLZcVf1f07sMD7bsSPxAtT/OeC2wz0wdQNwfE7O+//ppU7+VLEi3IdV8VLpSA1l/EV803ehdXqrMTugpk8x/CeIwq0eKaENrtrVkIqlOyeyzG1D49dmyZJYhUZQTPgPRQSG+Hi3MSkEwtW851RH0ye57t1KyW5UUlpk7eYdP2osjiO+Peh/dD4ba9swS/7MaxioM9of1kupQeiBrptIyXhaKRaGLZlNY6jzxkzOkXeR4T9S5uPG8LopZT8tV8QwOc4crVnQT1uPn/dSjTrU+VC/Z2l3nfGd7muRyYpl7YxkWxOQmqntLpsTa9Bd5lzpxr/iQtFz99B5uGMe1hqTWmLa0DeTTIz2HN1O3lHr83O+XHl/rRenxc5+uGaf8/DNJKMrL20+Togjeb5nHUqkPjuxhVTu+7eR+v9QbOP1eZE0DOo/oUxB0fve34fE+PGahLcTkEzso9XpQaRyLNvcRM7P5+yOFqo3oqGeWTwCeE8zPaopqizMxXdO1KuVyHRqK77qpzq1X16Kw+c/LiEzsJ3t2jPnVI6wy5JXbumioQXBKfmfeRWH2jdyUp12FeR5z0OoqEl8Fd8q1+UIqPMDfV+rhxHXOx7M7w/AFLascrk3CWRPKLK+DU67UxgMXbUX+Jk5+7bsWg1a3bhvm/zIej4c3zV83brOujNusK+M268q4zboybrOujNusK+M268r4UrO+cfQ28C99RFb3mR4XnQAAAABJRU5ErkJggg=="},5288:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAIAAAAXyW1IAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFwcvOx0zug0AAAQDSURBVHic7ZhrciMhDITbqb2RcqbxmcyZrDN5h4ekFuDNev8kW2UqUSiGGcSnRkCAn1cej8el//luT6JcLpfTn4/vdmNf3m69Ut5uvVJ+qFu/zt+rfqqqiJwWIuA6VJDbMZ66hQL14Wm+KK1jtuPDYXupeUtuaGP0Z33s/mbzKdnosxvEbC9iztpr1j769O5TKZ868paxQTDY+9Tag+UffQKGH0r1XJWnXZq2GiePEUakOpvEaUQQo79NNnh4i8wW0W4NURfI1PHDZmAMWh2wumsrcwoLlkmeOFsbxeEolDgx5HCL9dsszMIIDYugBawKE5s+0SJOgclBz/zCLV93YUlPQKy+MfuZU1hdxfJcWwunqM/aypz6bIiTz9tJMCemOPekFgSbzClo9QQxPrxJI569fB1YrKnPsgb/onCW4lQRCWLw2Gor89vMPq/KPdHoD3pKnGRL695zXWZmYqmchDhFUn+SUX24v+G3pFSiZT4tbCJ2MXvMPIS0Fe06MVtIbzit2vLV55xZVTrbf+H0nB/rbNGW2HgnnRIRBOf3WTHYsNGJJbV36pgJpTgkWtNKVNpNpX2JPLMHSPXZxt48dJnyXx9xA5Npwc8tw/ej+XqT4yadpl4VpVklTggSsy21p5YagxH9Mbf2VFZ+Kl/TWrRV3+0jqfE75owabAqdL2zO6cRGZzhb9ePt8lnGPdHOW8ubyPU+iLYdQy1GMmZvYRHbsinLZBJe5lNT84GCKMn32BPFNKF0jjjbD5FDa7Y7BpszuPWEW1BKMWm1GcJsyND3QfuyxjnFe1ZaVUBzgtxxWkrQb0ukxq7Ve3yrjbPuaQvGPpuWTPXmiLMx0TqasbDQeStz0jTXqPchpO4Wp0xP2+Ks5XpiPC8K2hwu4Q+JkWJiZ3GndbsHDhPrTIvfSelhPm/FNhYUlfaMrsXRI6ulff96Ka6t+MohdsYKTpHfM0s6o9JWmdbgUX+6CuE5QjtNy9j5+0TrcdCEa7/Sx1tvGYnZQsta8uYkrGgeu6euvoa8kWjV2LcMG2d2LGxiTpp1Fsw0nV1JqXD1IG+MteVcv5+lelAyLbmnU3nsmssOzcyyfXJ/ZGY6sw+wFUzpMT19i3ui3Vv89jL2kGk9xk6iU1Z7cn/0T/YIcDTht4faS25H1d+N89adjsEw90LjnK4xNLfjlHq6gJgW3a8waXSnraSP0mLcI73oDLqsHSKavpMUBjXvQfcrcP6bV2LdE9te1kFZXrZTja385WKx+2+AAXccm/W45WQvMC2+A/reB+Y05gpE1OgWCRoVkhnDtMX6M05YxmVasyRWTms9dBaZmtbjrC27jW4S3UZb73+Av1Lebr1S3m69Ut5u/e/lzFu/AfTOp/kTRY1jAAAAAElFTkSuQmCC"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let i={},s=r.createContext(i);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);