"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43067"],{482202:function(e,o,n){n.r(o),n.d(o,{default:()=>A,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/object-set-corner-radius","title":"OBJECT SET CORNER RADIUS","description":"OBJECT SET CORNER RADIUS ( { ;} objeto ; radio* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-corner-radius.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-corner-radius","permalink":"/docs/pt/20-R7/commands/object-set-corner-radius","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-corner-radius.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-corner-radius","title":"OBJECT SET CORNER RADIUS","slug":"/commands/object-set-corner-radius","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET COORDINATES","permalink":"/docs/pt/20-R7/commands/object-set-coordinates"},"next":{"title":"OBJECT SET DATA SOURCE","permalink":"/docs/pt/20-R7/commands/object-set-data-source"}}'),s=n("785893"),t=n("250065");let d={id:"object-set-corner-radius",title:"OBJECT SET CORNER RADIUS",slug:"/commands/object-set-corner-radius",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"OBJECT SET CORNER RADIUS"})," ( {* ;} ",(0,s.jsx)(o.em,{children:"objeto"})," ; ",(0,s.jsx)(o.em,{children:"radio"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Se especificar, objeto \xe9 um nome de objeto (cadeia) Se omitir, objeto \xe9 uma vari\xe1vel ou um campo"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objeto"}),(0,s.jsx)(o.td,{children:"any"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome de objeto (se especificar *) ou Campo ou vari\xe1vel (se omitir *)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"radio"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Novo r\xe1dio de esquinas arredondadas (em p\xedxels)"})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"OBJECT SET CORNER RADIUS"})," modifica o r\xe1dio das esquinas dos objetos ret\xe2ngulo arredondado cujos nomes passou no par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"}),". O novo r\xe1dio s\xf3 se define para o processo e n\xe3o \xe9 guardado no formul\xe1rio."]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Pode utilizar este comando com os seguientes objetos de formul\xe1rio:",(0,s.jsx)(o.br,{}),"\nret\xe2ngulos"]}),"\n",(0,s.jsx)(o.li,{children:"entradas (s\xf3 projetos 4D)"}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Ao passar o par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"})," indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel em lugar de uma cadeia (campo ou vari\xe1vel objeto unicamente)."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," na vers\xe3o atual de 4D, este comando s\xf3 se aplica aos ret\xe2ngulos arredondados (que s\xe3o objetos est\xe1ticos). Como resultado, s\xf3 a sintaxe baseada no nome do objeto (usando o par\xe2metro ",(0,s.jsx)(o.em,{children:"*"}),") \xe9 compat\xedvel."]}),"\n",(0,s.jsxs)(o.p,{children:["No par\xe2metro ",(0,s.jsx)(o.em,{children:"radio"}),", passe um novo valor do r\xe1dio em p\xedxels a aplicar nas esquinas do objeto. Por padr\xe3o, este valor \xe9 de 5 p\xedxels."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," tamb\xe9m pode modificar este valor a n\xedvel de formul\xe1rio utilizando a lista de propriedades (ver   ",(0,s.jsx)(o.em,{children:"Nova propriedade Arredondada de esquinas para ret\xe2ngulo arredondado"}),")."]}),"\n",(0,s.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(o.p,{children:'Voc\xea t\xeam os seguintes ret\xe2ngulos em seu formul\xe1rio, chamados respectivamente "Rect1" e "Rect2":'}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:n(904257).Z+"",width:"267",height:"71"})}),"\n",(0,s.jsx)(o.p,{children:"Pode executar o seguinte c\xf3digo para mudar seu r\xe1dio:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0OBJECT SET CORNER RADIUS(*;"Rect@";20)\n'})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:n(713261).Z+"",width:"269",height:"67"})}),"\n",(0,s.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:'You have the following text area in your form, named "required-label":'}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:n(974545).Z+"",width:"153",height:"38"})}),"\n",(0,s.jsx)(o.p,{children:"If you execute the following code:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0OBJECT SET CORNER RADIUS(*;"required-label";10)\n'})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:n(87616).Z+"",width:"153",height:"35"})}),"\n",(0,s.jsx)(o.p,{children:"Note that for text areas (as well as inputs), unlike for rectangles, the corner roundness is drawn outside the initial area of the object."}),"\n",(0,s.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/object-get-corner-radius",children:"OBJECT Get corner radius"})}),"\n",(0,s.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1323"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function A(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},904257:function(e,o,n){n.d(o,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAABHCAIAAACf2vWmAAABdklEQVR42u3dQW7aUBRAURx1Ad4la8ouvYNGtFWFlHDzPamf1HMmTBh8v8c1AiGxHcdxA154u/oAMJpCoCgEikKgKASKQqAoBIpCoCgEikKgKATKj1PP3vf96gOPc8z+YZuVfXZqZdv6s//M+v3n1Rc4yX27DY7Eyr5wcmWrhTxmbdCv3E/caP4ZKyvLK1v6HOKd+lvTRjTtPAMtjmj5k7q7UZg5nJmnGmJ5OL7LgqIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKMuF3LerjzrYzOHMPNUQy8NZKuQ4jqsvaLppI5p2noEWR7Stj3Lf98eD/7F/9utWNPblaGVfOLmyE4Xc/k6cJ2Pz+M3KPju1snOFwP/Gd1lQFAJFIVAUAkUhUBQCRSFQFAJFIVAUAkUhUD4Aa+NPawq2l1cAAAAASUVORK5CYII="},713261:function(e,o,n){n.d(o,{Z:function(){return r}});let r="data:image/png;base64,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"},974545:function(e,o,n){n.d(o,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAmCAIAAABYoq5NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG5SURBVHhe7ZbNjYMwEIUpIbccKYBzTiHnSNxTwTZAP+mFSlIEHWz8Mzg2UQTj7Fgw+z69g8NOrM37ZKAagRbgUg9wqQe41ANc6gEu9QCXeoBLPZRw+ftz/eehIoSByxKhIoSByxKhIoSByxKhIoSByxKhIoTZqMuhqSIO99t8ID9dXVX1MLu4Nqc+65+hIoTZrstze/HrR3v4ov2/DVy+/bbFxC6zGxQIXL79tsV8dmnWRDRwuR/DxWYaTns3t9Zj8zCLW3OmU26/1bfmY0V/YmzOCxUhzA5c2mdnc3Jr23Xf+ZmgynadDHNcThb9/PrNeaEihNnBu8/Ub+TDxTxHbcsvNz5BwyqXuZvzQkUIs/lzaSqe2nQvQSnmvKYOsl0yN+eFihBmV/dY0yzdbKPMjo79mOOSuTkvVIQwe3n38aWHRRx7MRFPdcePOjuz4JK3OS9UhDC7cOnvtK5EayIQanWqHH1n1tP113A9LJ7LZN6wtDknVIQwG3X5RTLrFg0VIQxclggVIQxclggVIYw+l1sMFSFMCZegDHCpB7jUA1zqAS71AJd6gEs9wKUe4FIPcKkHuNTCOD4Bf2WRB1/x+2oAAAAASUVORK5CYII="},87616:function(e,o,n){n.d(o,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAjCAYAAACHDaipAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAODSURBVHhe7ZpNSFRRFMf/Iyk6isYUmRC5UFF4RYsalJwKgwik2oQQ1Ca0ReBCoW0rt0GzCNoYGRQE7UqECBpCJ5RpEzZhmAtDmJTScdCZ0HB6Z+bOB1H4NeeMOucHD+9958074zv/uefce58jHA7HoSiMFJm/isKGikxhR0WmsKMiU9hRkSnsqMgUdlRkCjt5WScr+vEdJR/eofjjmP0FfsKx8stYlFwSLyvHWpULv4+7sXLqHNYOHjYWWcRFVvL+DUpfPVVhCRMvKcWvyzewcvqCOSOHmMgcsWWUPX+I4k8Bc0bJB6vH3Ihd706ITgqxmkwFtjOgGJQ9e2B6MoiIjFKkCmznQLGgmEjBLjIq8qkG48Y3+hqOR9nHGPojxshJaML2NQGf6W6fefQKfHeKCcVGAnaR0SxSqshv9ZxBvPNi4vjqAW69yGXw/0NNk+2vCW2mu1ugmFBsJGAXGS1T5IO6xgb0YBFTEqPZLmXfuEwJwy4yWgfbGVAayqRTz5eoOU9E0T+YbZvJSln/SF+UIgdnMEXtyAw86XSZvE+v/XkP3St1zaZ8Z9t4KVqcNy1e+EWWp/Uw32gAXqsBXZXUoyDbv9r2ZCqNd7rhHhk3wqEgD2OgIZNq+xaC8JJpi3gngSd0r0tHUCfsezPQspIE7CKTXI/xjwynR4SXtXbQWlxJQ2gO3moL3TXJLuBCt12zDYTsUSMyj4HZWvQ1Oo0NaGtx26l26/ScJHEZhH1vBtoRkIBfZPsPmBY/6cK/vRbeoUzRPxVZBGaDqDcCpKN+JAz/gj3KLi/BX12Bo+baXJNP3+tBW04SsIts9USzaQliz/jeWtM4P5qsOeoqqwDLnU5J6YNGuvIKtM4u4VviSkMkilyVxPn0vR60pykBu8hoY1YyZaZIpJ1gAL0hu1NzKNP+m0on3JjG3ayC2/c5CL9pA6WwqsPJ9JbArrGGpk17A2zLNx8UE4qNBOwio51/2piVx4X7ibRJM0O73WEhMJRJWZnFWtuWKMaz67nsusiJrrMWkLbP4Yp9342zHd98UEyk3soQ2yB3Pr63i7aWaEY4Cauj2cxO9xa0SR69ecf0+GEfyVLErt1O/HNKfkm9hSGJmMhouky/ntjVrrzUaIUOPXN69hQD6eevb8buYQr2zVil8BBLl0rhoiJT2FGRKeyoyBR2VGQKOyoyhR0VmcIM8AfrddRxuuoD6QAAAABJRU5ErkJggg=="},250065:function(e,o,n){n.d(o,{Z:function(){return a},a:function(){return d}});var r=n(667294);let s={},t=r.createContext(s);function d(e){let o=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);