"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74354"],{979208:function(e,n,s){s.r(n),s.d(n,{default:()=>A,frontMatter:()=>d,metadata:()=>o,assets:()=>t,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/object-set-corner-radius","title":"OBJECT SET CORNER RADIUS","description":"OBJECT SET CORNER RADIUS ( { ;} objeto ; radio* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-corner-radius.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-corner-radius","permalink":"/docs/es/commands/object-set-corner-radius","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-corner-radius.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-corner-radius","title":"OBJECT SET CORNER RADIUS","slug":"/commands/object-set-corner-radius","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET COORDINATES","permalink":"/docs/es/commands/object-set-coordinates"},"next":{"title":"OBJECT SET DATA SOURCE","permalink":"/docs/es/commands/object-set-data-source"}}'),r=s("785893"),i=s("250065");let d={id:"object-set-corner-radius",title:"OBJECT SET CORNER RADIUS",slug:"/commands/object-set-corner-radius",displayed_sidebar:"docs"},a=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET CORNER RADIUS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"radio"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,r.jsx)(n.br,{}),"Si se omite, objeto es una variable o un campo"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Campo o variable (si se omite *)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"radio"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nuevo radio de esquinas redondeadas (en p\xedxeles)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"OBJECT SET CORNER RADIUS"})," modifica el ",(0,r.jsx)(n.em,{children:"radio"})," de las esquinas de los objetos pasados en el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"}),". El nuevo radio s\xf3lo se define para el proceso y no se guarda en el formulario."]}),"\n",(0,r.jsx)(n.p,{children:"Puede utilizar este comando con los siguientes objetos de formulario:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"rect\xe1ngulos"}),"\n",(0,r.jsx)(n.li,{children:"entradas (s\xf3lo proyectos 4D)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Al pasar el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"radio"}),", pase un nuevo valor del radio en p\xedxeles a aplicar en las esquinas del objeto."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),': con los objetos de entrada y \xe1rea de texto, la propiedad de radio de esquina s\xf3lo est\xe1 disponible con los estilos de l\xednea de borde "ninguno", "s\xf3lido" o "punteado".']}),"\n",(0,r.jsxs)(n.p,{children:["Tambi\xe9n puede modificar este valor a nivel de formulario utilizando la ",(0,r.jsx)(n.em,{children:"propiedad Radio de esquina"})," (ver tambi\xe9n ",(0,r.jsx)(n.em,{children:"Radio de la esquina (rect\xe1ngulos)"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:'Usted tiene los siguientes rect\xe1ngulos en su formulario, llamados respectivamente "Rect1" y "Rect2":'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(921262).Z+"",width:"267",height:"71"})}),"\n",(0,r.jsx)(n.p,{children:"Puede ejecutar el siguiente c\xf3digo para cambiar su radio:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET CORNER RADIUS(*;"Rect@";20)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(789490).Z+"",width:"269",height:"67"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:'Tiene la siguiente \xe1rea de texto en su formulario, llamada "required-label":'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(42034).Z+"",width:"153",height:"38"})}),"\n",(0,r.jsx)(n.p,{children:"Si ejecuta el siguiente c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET CORNER RADIUS(*;"required-label";10)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(23874).Z+"",width:"153",height:"35"})}),"\n",(0,r.jsx)(n.p,{children:"Tenga en cuenta que para las \xe1reas de texto (as\xed como las entradas), a diferencia de los rect\xe1ngulos, la redondez de la esquina se dibuja fuera del \xe1rea inicial del objeto."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/object-get-corner-radius",children:"OBJECT Get corner radius"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1323"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function A(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},921262:function(e,n,s){s.d(n,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAABHCAIAAACf2vWmAAABdklEQVR42u3dQW7aUBRAURx1Ad4la8ouvYNGtFWFlHDzPamf1HMmTBh8v8c1AiGxHcdxA154u/oAMJpCoCgEikKgKASKQqAoBIpCoCgEikKgKATKj1PP3vf96gOPc8z+YZuVfXZqZdv6s//M+v3n1Rc4yX27DY7Eyr5wcmWrhTxmbdCv3E/caP4ZKyvLK1v6HOKd+lvTRjTtPAMtjmj5k7q7UZg5nJmnGmJ5OL7LgqIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKMuF3LerjzrYzOHMPNUQy8NZKuQ4jqsvaLppI5p2noEWR7Stj3Lf98eD/7F/9utWNPblaGVfOLmyE4Xc/k6cJ2Pz+M3KPju1snOFwP/Gd1lQFAJFIVAUAkUhUBQCRSFQFAJFIVAUAkUhUD4Aa+NPawq2l1cAAAAASUVORK5CYII="},789490:function(e,n,s){s.d(n,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAABDCAIAAAAJVcf3AAAGf0lEQVR42u3dfUwTZxwH8JOVUCkTHOKw8iYhQMAw1DCbjC1oXLIXTKxDAYNvxRhcYAtzacyYGlzU6JzZIkvIFhXkfbSRZsmyZMvmolsYiGNDFBItQgtSNgK+0FVAs97ei7TPPdeW5wrfT/p387vnm2/ver27zhsdHeUAwCU/1gMA+AD0BIAMPQEgQ08AyNATADL0BIAMPQEgQ08AyNATADKZN97UYrHomwyt7Z3G3r4BU9+vppusN5NCqDI6IiY2NjoqLTV5w/pMpVLJeqKZgMhcmzfquetWbDabwWAoP1ffdf3awxT1ePRqblEMF/rny4cM3+JfI2Z/U5usrS4hMUmTo968ebNcLmc9mechMoE81hO9Xq/df2g8RnVvRR63/CXOzyt7qpn2aJLrvjC/pWL+rUuHD7yTm5PNeiBPQmTCeaAnHR0dBcXanpFxa1YZF6tivU7eMXBV0VAQKZ849f7htLQ01tO4C5HRcvd7fKNO/2KmujNhm/Xt5lm74nbK5WPFl7pWFr2q3lRVXct6GrcgMhHc2p8cOXbio08qHuz5nItMZb0qM2Wwa3555u4tG0v3l7AeRQxEJo74nhS+pdVd/MW2+zy3IJz1Ssys+78Fns5aE7+opuI061HoIDLRkYk87rJ/LPErXvTVnFtxu6BF1qKvv705+u7BUtajUEBk7kQmpif2A1z7vpv/WAoIYr0AjPjJrBrdGf0XZyvPsR5FEETmZmTUx10dHR32b4H8x9LcOcB1ZrBLfvL5poZqlUrS34YR2X/ERkbdk+fWvdyZsI17oYD1FktDa33s90dbLn4jk0n3xwdE5kBUZHTHXXq9vmdknEvfxXpbJSMtxyILq6qR7pliRDaVqMgo9ic2my155erhrfWz+aS7CINdIR+v+7n1h+DgYNajTIXIpkcfGcX+xGAwjMeosOJThSeOP6OW5o+PiGx69JFR9KT8XD1/IRA8xpqaXdV4nvUU00BkztBGJrQnFoul6/o1/mo5eFxcusncbzQaWc/hAJG5QhmZ0J7omwwPU9Sz5JJSL5hQ7WzQ6VlP4QCRuUYVmdCetLZ38jcngBMTkavaO7tZT+EAkblGFZnQnhh7+/g7eMCZBeF95n7WQzhAZAQ0kQntyYCpz8fucZthCyOGbg+wHsIBIiOgiUxoT/gbprHoLiyMGB7oZT2EA0RGQBMZnrcCQIaeAJChJwBk6AkAGXoCQIaeAJAJ7UmoMpp/5B44M2Lml0hKEBkBTWRCexIRE4tFd2XEvHiJtJ5EjMgIaCIT2pPY6Cj7+7LeMgm7OxgVsZT1EA4QGQFNZEJ7kpaa7G9qY71l0mVfnKS4ZayncIDIXKOKTGhPNqzPlLXV8Q85hukEXKnLzd7EegoHiMw1qsiE9kSpVCYkJnHdF1hvnST1Xg4LVsTHx7OewwEic4UyMorzwpocdWBbNevtkyJ5S2V+Xi7rKaaByJyhjYzieStjY2PJK58dLfiSUy5nvZlSMnTjyQ/Tr15pkeDzVhDZ9Ogjo9ifKBSK9/aXKBrwuDQHQbrCEu1eCZaEQ2ROiIiM7vf4rXlblLLfuR+xK/9He1PIvZ5d+RrWcziFyKYSFRn1dSunThyR64u5wS7WmysBw7cUusKyk8el/NBUDpH9n9jIqHuiUqmOHjoQ+OkGzuqxP0D1SQ/uK8oztUUFGRkZrEchQGR/cyMyMddB7ty+TfPaK4FnsubuuflHk4qKnI1rV7/5RhHrUQRBZG5GJv7/tLLztl/svW/V6LjAENZrMLPsH0sVOelKWU3FaYkfcU2ByERHJv66+obqSs3alMAPVHPrwNd+gHtCtTHlaZ8rCYfI3IjsiX379okeYO2ajKcUAd8d2TEZEsUtnQNn6NubFGeytHt2lB484Ofnk7fuIDJxPPD/8c3Nza8Xay2ysLGsMi48kfXCeMfQjSBdYci9nrKTx6X/xZ0IkdHyQE/sJicnq2pqSw8fs6WobSuyubh01ovkOb2X5S2V/j81lmj37srX+NyxljOIjIpnevKXO3fuVFXXVjWeN5n7J1Q7JyJX8X8tuzCCf/mQETP/ujvob2oLuFIXFqzIz8vdmrdFmr+4uwmRCeTJnvzLaDTW1n/W0X2jz9w/dHtAag9KdC1UGb14iTIqYmlS3LLc7E1SuwrYSxCZa17pCcAs45MnbQBmGHoCQIaeAJChJwBk6AkAGXoCQIaeAJChJwBk6AkA2R9vAnhJmMEn8wAAAABJRU5ErkJggg=="},42034:function(e,n,s){s.d(n,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAmCAIAAABYoq5NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG5SURBVHhe7ZbNjYMwEIUpIbccKYBzTiHnSNxTwTZAP+mFSlIEHWz8Mzg2UQTj7Fgw+z69g8NOrM37ZKAagRbgUg9wqQe41ANc6gEu9QCXeoBLPZRw+ftz/eehIoSByxKhIoSByxKhIoSByxKhIoSByxKhIoTZqMuhqSIO99t8ID9dXVX1MLu4Nqc+65+hIoTZrstze/HrR3v4ov2/DVy+/bbFxC6zGxQIXL79tsV8dmnWRDRwuR/DxWYaTns3t9Zj8zCLW3OmU26/1bfmY0V/YmzOCxUhzA5c2mdnc3Jr23Xf+ZmgynadDHNcThb9/PrNeaEihNnBu8/Ub+TDxTxHbcsvNz5BwyqXuZvzQkUIs/lzaSqe2nQvQSnmvKYOsl0yN+eFihBmV/dY0yzdbKPMjo79mOOSuTkvVIQwe3n38aWHRRx7MRFPdcePOjuz4JK3OS9UhDC7cOnvtK5EayIQanWqHH1n1tP113A9LJ7LZN6wtDknVIQwG3X5RTLrFg0VIQxclggVIQxclggVIYw+l1sMFSFMCZegDHCpB7jUA1zqAS71AJd6gEs9wKUe4FIPcKkHuNTCOD4Bf2WRB1/x+2oAAAAASUVORK5CYII="},23874:function(e,n,s){s.d(n,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAjCAYAAACHDaipAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAODSURBVHhe7ZpNSFRRFMf/Iyk6isYUmRC5UFF4RYsalJwKgwik2oQQ1Ca0ReBCoW0rt0GzCNoYGRQE7UqECBpCJ5RpEzZhmAtDmJTScdCZ0HB6Z+bOB1H4NeeMOucHD+9958074zv/uefce58jHA7HoSiMFJm/isKGikxhR0WmsKMiU9hRkSnsqMgUdlRkCjt5WScr+vEdJR/eofjjmP0FfsKx8stYlFwSLyvHWpULv4+7sXLqHNYOHjYWWcRFVvL+DUpfPVVhCRMvKcWvyzewcvqCOSOHmMgcsWWUPX+I4k8Bc0bJB6vH3Ihd706ITgqxmkwFtjOgGJQ9e2B6MoiIjFKkCmznQLGgmEjBLjIq8qkG48Y3+hqOR9nHGPojxshJaML2NQGf6W6fefQKfHeKCcVGAnaR0SxSqshv9ZxBvPNi4vjqAW69yGXw/0NNk+2vCW2mu1ugmFBsJGAXGS1T5IO6xgb0YBFTEqPZLmXfuEwJwy4yWgfbGVAayqRTz5eoOU9E0T+YbZvJSln/SF+UIgdnMEXtyAw86XSZvE+v/XkP3St1zaZ8Z9t4KVqcNy1e+EWWp/Uw32gAXqsBXZXUoyDbv9r2ZCqNd7rhHhk3wqEgD2OgIZNq+xaC8JJpi3gngSd0r0tHUCfsezPQspIE7CKTXI/xjwynR4SXtXbQWlxJQ2gO3moL3TXJLuBCt12zDYTsUSMyj4HZWvQ1Oo0NaGtx26l26/ScJHEZhH1vBtoRkIBfZPsPmBY/6cK/vRbeoUzRPxVZBGaDqDcCpKN+JAz/gj3KLi/BX12Bo+baXJNP3+tBW04SsIts9USzaQliz/jeWtM4P5qsOeoqqwDLnU5J6YNGuvIKtM4u4VviSkMkilyVxPn0vR60pykBu8hoY1YyZaZIpJ1gAL0hu1NzKNP+m0on3JjG3ayC2/c5CL9pA6WwqsPJ9JbArrGGpk17A2zLNx8UE4qNBOwio51/2piVx4X7ibRJM0O73WEhMJRJWZnFWtuWKMaz67nsusiJrrMWkLbP4Yp9342zHd98UEyk3soQ2yB3Pr63i7aWaEY4Cauj2cxO9xa0SR69ecf0+GEfyVLErt1O/HNKfkm9hSGJmMhouky/ntjVrrzUaIUOPXN69hQD6eevb8buYQr2zVil8BBLl0rhoiJT2FGRKeyoyBR2VGQKOyoyhR0VmcIM8AfrddRxuuoD6QAAAABJRU5ErkJggg=="},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var o=s(667294);let r={},i=o.createContext(r);function d(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);