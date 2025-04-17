"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40540"],{931216:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>i,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/object-get-data-source","title":"OBJECT Get data source","description":"OBJECT Get data source ( { ;} objeto* ) : Pointer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-get-data-source.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-data-source","permalink":"/docs/es/commands/object-get-data-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-data-source.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-get-data-source","title":"OBJECT Get data source","slug":"/commands/object-get-data-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get corner radius","permalink":"/docs/es/commands/object-get-corner-radius"},"next":{"title":"OBJECT GET DRAG AND DROP OPTIONS","permalink":"/docs/es/commands/object-get-drag-and-drop-options"}}'),t=s("785893"),o=s("250065");let d={id:"object-get-data-source",title:"OBJECT Get data source",slug:"/commands/object-get-data-source",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT Get data source"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ) : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,t.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Nombre de objeto (si se especifica *) o ",(0,t.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Pointer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Puntero a la fuente de datos actual del objeto"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"OBJECT Get data source"})," devuelve la fuente de datos actual de los objetos designados por los par\xe1metros ",(0,t.jsx)(n.em,{children:"objeto"})," y ",(0,t.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede definir la fuente de datos para un objeto en modo Dise\xf1o utilizando la Lista de propiedades, o utilizando el comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/object-set-data-source",children:"OBJECT SET DATA SOURCE"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pasando el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Dado un objeto combo box definido en un formulario:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:s(995380).Z+"",width:"150",height:"32"}),(0,t.jsx)(n.img,{src:s(40219).Z+"",width:"229",height:"176"})]}),"\n",(0,t.jsx)(n.p,{children:"Ejecuta el siguiente c\xf3digo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$vPtr :=OBJECT Get data source(*;"vCombo")\n\xa0\xa0// $vPtr contiene -> vCombo\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/object-set-data-source",children:"OBJECT SET DATA SOURCE"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1265"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},995380:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAgCAIAAAB/8BbdAAAAAXNSR0IArs4c6QAAA6xJREFUaEPtmk+IElEcx0fNpY2iEvaQbQSlHUyWIohwCSIoUC97SaiLN72llwUDb1kXL0p00Et4NQIPqbG3Osh22EM0K7EO7bILGbWJrtum+wf3NzPO7IwzzowTwrzZGQSH8b03v+/34/u9N/OeqdlsYsaBsgNmlIM3YicdMBAi/z8wECKP0DQwFq5tWZfWdzYaXZd98qHDgqg+fagA85UIscRiMZYTVPiw3Pr2s/P1x78S3jJZJm7YTyBHUR8qaH5KcPASKfS/75td+NRbe512401lEzl+ELA+VCgXwkukqU/bi6t/aX777d/Wsxee3/6DHMVl600dqADbhUIWn7mEOHgIF4iDF6U6ze+g0/Y9uPf6yWXkEL5dauhABdguFPLSf06IgzcWXrWZYfzDf/V65gn/3ZlXj9HjBwqv2ye7+z3UVQiFJHwi/KDY4IyUhrzV3r00PYVc/9NlwMRafer8KQlp6p4LifSsqX/Mpgn1zpXDpv+qr/7OOqo5OkISn7Ma7/WPHFYs68gPBKWMipBIB6PuUi/jZbQ6IhH2HEH9OghZCiF0tzDbw+icRxTzldCcKDNOcmVqUXXK/aQLF9kivOxZ6xc4uijSlA6sHpcEKYSReChb6DMsF7KheMQBYXhcTpFgymEn2TvJo5bCfSyOSjSB5eBiKZT1mYLUKZxXoknmv8EUqKWwaJAaV4c1NS4LUG9XMpF65xiG5QKemqc7X6VaE4omVnCM6Z0OQM8W8qRyFHhoCvME/OQpdY6v9GdBTAG21tCmULdaJH5mTsj7HlWn9FjonU/hCUif6QRO2+/wBzxszxz1XtLlSXTH7YCUNCBZeEXWE5npDCDD8slk3k0nUWBIZlcfZ4wk0mnIiY5rboxBC8CzQ8ZLkXAq+SLVH9lRVn1TsmK1WIDLTAU/kCQ3IyUZZrNuzgzGm6FGO6bvBzE/mWC9GfaiMx+oHc1Y5WzzuKtBsi1yKKVrqW5K7lZa/Z0mp44fVDTezmgVLBPXmN7OaF32sYpPatX+0S0bol582dhh9x6gqwLM5woZtolCatUe3vffuXIaOYogm7vYjagKmp+SVXteL3yH731e3V5v7NKrvifP2N6HLyKHcKG2rwMVYLtQyMen00IcMqv2osvEGocq3HuAogowWaEQ3kMF7Fpjd13Aqv39GbvGaYmGpw8VIE2hEKlV+2HLxBrnOrD3AFEVYLJCIeLPhRqHZITHdUDu7YzhluYdMBBqHpFcgAZCOYc0//shAp7ICmAXtVcAAAAASUVORK5CYII="},40219:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let t={},o=r.createContext(t);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);