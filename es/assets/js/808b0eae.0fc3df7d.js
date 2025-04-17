"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79491"],{947208:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/object-get-text-orientation","title":"OBJECT Get text orientation","description":"OBJECT Get text orientation ( { ;} objeto* ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-get-text-orientation.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-text-orientation","permalink":"/docs/es/commands/object-get-text-orientation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-text-orientation.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-get-text-orientation","title":"OBJECT Get text orientation","slug":"/commands/object-get-text-orientation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get subform container value","permalink":"/docs/es/commands/object-get-subform-container-value"},"next":{"title":"OBJECT Get three states checkbox","permalink":"/docs/es/commands/object-get-three-states-checkbox"}}'),s=t("785893"),i=t("250065");let o={id:"object-get-text-orientation",title:"OBJECT Get text orientation",slug:"/commands/object-get-text-orientation",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT Get text orientation"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Nombre de objeto (si se especifica *) o ",(0,s.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\xc1ngulo de rotaci\xf3n de texto"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"OBJECT Get text orientation"})," devuelve el valor de orientaci\xf3n actual aplicado al texto del objeto o de los objetos designado(s) por los par\xe1metros ",(0,s.jsx)(n.em,{children:"objeto"})," y ",(0,s.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:['Puede configurar la opci\xf3n "Orientaci\xf3n" para un objeto en modo de dise\xf1o utilizando la lista de propiedades, o utilizando el comando ',(0,s.jsx)(n.a,{href:"/docs/es/commands/object-set-text-orientation",children:"OBJECT SET TEXT ORIENTATION"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no se pasa este par\xe1metro, indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,s.jsxs)(n.p,{children:['El valor que se devuelve corresponde a una de las siguientes constantes, que se encuentran en el tema "',(0,s.jsx)(n.em,{children:"Propiedades de los objetos"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Orientation 0\xb0"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Sin rotaci\xf3n (valor por defecto)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Orientation 180\xb0"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"180"}),(0,s.jsx)(n.td,{children:"Orientaci\xf3n del texto a 180\xb0 en el sentido horario"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Orientation 90\xb0 left"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"270"}),(0,s.jsx)(n.td,{children:"Orientaci\xf3n del texto a 90\xb0 en el sentido antihorario"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Orientation 90\xb0 right"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"90"}),(0,s.jsx)(n.td,{children:"Orientaci\xf3n del texto a 90\xb0 en el sentido horario"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:'Dado el siguiente objeto (donde se aplic\xf3 una orientaci\xf3n "90 \xb0 a la izquierda" en el editor de formularios):'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(263322).Z+"",width:"114",height:"198"})}),"\n",(0,s.jsx)(n.p,{children:"Cuando se ejecuta el formulario, si se llama a la siguiente declaraci\xf3n:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET TEXT ORIENTATION(*;"myText";Orientation 180\xb0)\n'})}),"\n",(0,s.jsx)(n.p,{children:"... a continuaci\xf3n, el objeto aparece de la siguiente manera:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(100208).Z+"",width:"114",height:"199"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$vOrt:=OBJECT Get text orientation(*;"myText")\xa0//$vOrt=180\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/object-set-text-orientation",children:"OBJECT SET TEXT ORIENTATION"})}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1283"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},263322:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAADGCAIAAACB5ENJAAAIEklEQVR42u2dW0wUVxjHZy9gqWlEICZAES2XGGNMJa0JSDFesCIP+kIJD6U0yqWaFLExIRFjVHyyqUpS5FJTfFKbGDUpl2IbY2IlDda0KSXKTYVUGovAgiILuzs9u7OXWS47s+t+ObPm/8s8zJmMh29/OXPmm3NmPLrx8XEBBBs97wDeTKCVBGglwSgvPJ4I+31wamjUvDYuYkeyIbAatVMJRwyVlZXuX9L2t+nBv9N/PX3V0mXSGcLfjzP6W512KuGLpxNgrWNgxMy2YdPs9OTo93dHAqhOO5XwxdMK2BU3ODoj/RLL5H9mvXHZOyv8rW5odICiEt6W/MbTWlkv5v4l1unJrevjAqhOO5XwRTcuexxoujfNrjjzy4mPN8SfzUsJrMZztwaDW8nxnct4W/IbL60SAVy2RJgmn/EOIUCQt5IArSRAKwnQSgK0kgCtJEArCdBKArSSAK0kQCsJ0EoCtJIArSRAKwnQSgK0kgCtJEArCdBKArSSAK0kQCsJ0EoCtJIArSRAKwnQSgK0kgCtJEArCdBKArSSAK0kQCsJ0EoCtJIArSRAKwnQSgK0kgCtJEArCdBKArSSAK0kQCsJ0EoCtJIArSRAKwnQSgK0kgCtJEArCdBKArSSAK0kQCsJ0EoCtJIArSRAKwnQSgK0kgCtJEArCQuukjGwNi4ib0Msx7D+/GfMEcmLEF0lw6NVWpticHRmYMR87Y/xp+OD5VtWcomJOfWKJCOm6IO3eIvyjyCvkhEUtBNJwPhaJYNXTNqJJGCCvEpGUNBOJAET/FUyggJWySAEq2QAL6CVBGglAVpJgFYSoJUEaCUBWkmAVhKglQRoJQFaSYBWEqCVBGglAVpJgFYSoJUEaCUBWkmAVhKglQRoJQFaSYBWEqCVBFVa+2qsOsOMtG2qsfGOOQRQ1tpaNpNSYXUX71ZYYFYRRa22642CUGwUreHS1lLMzIqtvOPWOOhbSVB80Vm/p1hoaLToGmXHinU5vOPWOMqtNacuvPeM7FsT1iHUoY0rgNeGSVC+ZZW6UivvzYq7lg8CvpytuzJtfbyj1yyKWu23rIwzngSL9bP2YrNB6BB7eUevWdTlrd4gb1VE+UuytelCQ4VFVyE7lG6ozrUK6UaenxhpG+VOoPyO8Wy67EC6sfeObp0glFTpk3lHr1mQYJGgIhNosyK78hflW9a5aquaioAc5dba3SGUNDueX1mv6kywMCaggNrHgeRcXUaH2NwvJKciwVJGWStLsLp6bEKSsE6wHkyd0eWiT1BGRYJ10SjYm6e+vtk5jlXSbEAn4BskWCSo6VttpQbruX7HLku2MMKiAhUJVqalQbB2O4ZV+noEocOSUoYpQgXUJlj1O+37yV8a7JlWIzIBBVQlWPZMwEVvNzIBZdRNEc4ZwcIUoRKqpghbimVlTBGqAAkWCT7anX1ycFPNglOEGMFSAJczCegESMAwNgkqXr/AkJX/qOpb2VOW+z0Bx4YRLAWUBwbrmw3ypyygBh9PWSy1sjS4Cl5PWYKhBQ3WJ0iwSPChVV/vmBCUveFuLHH2s2iqCvhqrX01VvvHGF2Cc9y6n+0KDbkzpW28o9Y8vh5em3+w2rvRO66XgpL0v/YYM5jZakwQKOCrtXZ3CHNfCUjSXzyDVzCVUbhl3e2eewTD2GrwGhNwLT5ilhYfaS2b2dXomXGxwx5k2UOXzyFX17oh5tdZwUReSSguPuLRKl98ZNg0+3lGTPmWd+WpqwvD2R5DedKiOuZV4vcKJvMrecMWH2E51ryXW62LOhWCtG7IG774iDQuV9QqFMn/xaRgWry6odEXC1biF/Mr4W3Jb4K8+Ih2KuGLobKyUtpLitLrDOFdz0RRH5770frqXZEBVKedSviywOwAeH0w1EICtJIArSRAKwnQSgK0kgCtJEArCdBKArSSAK0kQCsJ0EoCtJKw6MB7U1PT8PCw2WzmHWFosGTJktjY2KKiIqm48Hjr+bq6tyMi8vPzY2JieAccGoyMjFy5cmXq1asvysqExVrr6PPnew8fjoyMnJqa4h1waBAVFVVQUHD69GmpuHDfOjs7y86bnp7mHW3IwFwxY8ybVFy0bxUd8I42lJDrMqo8D/iFrwRL1ALtByNdZNcOyI66SwO12ZGRB9t5B+rVBH11AjYb708Gfj4Und996t7zstWs8KhuZ9oO8V6bvWD/Efb4bOyUtGt77Gdwj1YMkU5goO7ri4WXR0pXSYGsKv22+vrGmpul32x3ahX7z+fki54ztIOGtQ603+gs/GqbLIrV2bs/vNHXL257z1FsP7Txxu7fWrZpzangQ6vFYpmYmOAZ2kuzNS1xhVcQ7FBnX9fERMzLWaGzqqqz4EJ/DOcoPSxdutS9r+0xgft9j+YeSkte7dw5euHow715TU94B7kQvjoBzjeBhM05G07evHUia7PryJNffryfeiCBxcUue9GWWHjlu96UrUcSe09ufp0/RICWE6yVnx3Iv7yv6razeLtq+ynhyN4sRzIjSvFlnbh55OG+T5oe845VDKUEK/P4g4Zja1JTpVJ+w4NLWdI1ZA9MSrASPr3U0LcmO1/86VJhItdgRZUJFn+tjMxj3d3H5kXEjma6i/ZTtBKuE2231pAipFpraIIRrKCh3FrDwsLGxsbi4+OHhoZ4RxsaJCQkMGPMm1RcWGt0dPTVq1fz8vKSk/Gf4KvCZDIxY8ybVFz024Ha2lqm3z3cDXzD2uny5cv3798vFfFJBgnaHhMIWf4HDa4KFZdpl+IAAAAASUVORK5CYII="},100208:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);