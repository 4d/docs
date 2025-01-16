"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46143"],{215306:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>d,assets:()=>o,toc:()=>l,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/generate-digest","title":"Generate digest","description":"Generate digest ( param ; algoritmo {; *} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/generate-digest.md","sourceDirName":"commands-legacy","slug":"/commands/generate-digest","permalink":"/docs/es/commands/generate-digest","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-digest.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"generate-digest","title":"Generate digest","slug":"/commands/generate-digest","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Choose","permalink":"/docs/es/commands/choose"},"next":{"title":"Generate password hash","permalink":"/docs/es/commands/generate-password-hash"}}'),t=s("785893"),r=s("250065");let i={id:"generate-digest",title:"Generate digest",slug:"/commands/generate-digest",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Generate digest"})," ( ",(0,t.jsx)(n.em,{children:"param"})," ; ",(0,t.jsx)(n.em,{children:"algoritmo"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param"}),(0,t.jsx)(n.td,{children:"Blob, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Blob o texto para el cual obtener un extracto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"algoritmo"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Algoritmo utilizado para devolver la llave: 0 = Digest MD5, 1 = Digest SHA1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Codificar digest en Base64URL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valor de la llave digest"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"Generate digest"})," devuelve el extracto de un BLOB o de un texto despu\xe9s de la aplicaci\xf3n de un algoritmo de encripci\xf3n."]}),"\n",(0,t.jsxs)(n.p,{children:["Pase un campo o una variable Texto o BLOB en el par\xe1metro ",(0,t.jsx)(n.em,{children:"param"}),". La funci\xf3n ",(0,t.jsx)(n.strong,{children:"Generate digest"})," devuelve la llave digest como una cadena."]}),"\n",(0,t.jsxs)(n.p,{children:["En el par\xe1metro ",(0,t.jsx)(n.em,{children:"algoritmo"}),", pase un valor designando la funci\xf3n hash a utilizar. Utilice una de las siguientes constantes, ubicadas en el tema ",(0,t.jsx)(n.em,{children:"Tipo Digest"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Comentario"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_o_4D REST digest"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"*** Constante obsoleta ***"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MD5 digest"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsxs)(n.td,{children:["Algoritmo ",(0,t.jsx)(n.em,{children:"Message Digest 5"}),". Una serie de 128 bits devueltos como una cadena de 32 caracteres hexadecimales."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SHA1 digest"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsxs)(n.td,{children:["Algoritmo ",(0,t.jsx)(n.em,{children:"Secure Hash 1"}),". Una serie de 160 bits devueltos como una cadena de 40 caracteres hexadecimales."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SHA256 digest"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"(Familia SHA-2) SHA-256 es una serie de 256 bits devueltos como una cadena de 64 caracteres hexadecimales."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SHA512 digest"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"(Familia SHA-2) SHA-512 es una serie de 512 bits devueltos como una cadena de 128 caracteres hexadecimales."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," no se recomienda utilizar algoritmos MD5 y SHA para manejar contrase\xf1as; si necesita verificar contrase\xf1as, se recomienda utilizar los comandos ",(0,t.jsx)(n.a,{href:"/docs/es/commands/generate-password-hash",children:"Generate password hash"})," y ",(0,t.jsx)(n.a,{href:"/docs/es/commands/verify-password-hash",children:"Verify password hash "}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Por defecto, si se omite el par\xe1metro ",(0,t.jsx)(n.em,{children:"*"}),", el digest devuelto est\xe1 codificado en hexadecimal. Pase el par\xe1metro ",(0,t.jsx)(n.em,{children:"*"})," si desea que se codifique en Base64URL."]}),"\n",(0,t.jsx)(n.p,{children:"El valor devuelto por el mismo objeto es el mismo en todas las plataformas (macOS/Windows). El c\xe1lculo se efect\xfaa a partir de la representaci\xf3n en UTF-8 del texto pasado en par\xe1metro."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"}),' si utiliza el comando con un texto/BLOB vac\xedo, no devolver\xe1 void sino un valor cadena (por ejemplo "d41d8cd98f00b204e9800998ecf8427e" para MD5).']}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"Este ejemplo compara dos documentos utilizando el algoritmo MD5:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPict1;$vPict2 : Picture\n\xa0var $FirstBlob;$SecondBlob : Blob\n\xa0READ PICTURE FILE("c:\\\\myPhotos\\\\photo1.png")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0READ PICTURE FILE("c:\\\\myPhotos\\\\photo2.png")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PICTURE TO BLOB($vPict1;$FirstBlob;".png")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PICTURE TO BLOB($vPict2;$SecondBlob;".png")\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MD5_1:=Generate digest($FirstBlob;MD5 digest)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MD5_2:=Generate digest($SecondBlob;MD5 digest)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($MD5_1#$MD5_2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Estas dos im\xe1genes son diferentes.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Estas dos im\xe1genes son id\xe9nticas.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Estos ejemplos ilustran c\xf3mo recuperar el extracto de un texto:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$key1:=Generate digest("The quick brown fox jumps over the lazy dog.";MD5 digest)\n\xa0\xa0// $key1 is "e4d909c290d0fb1ca068ffaddf22cbd0"\n\xa0$key2:=Generate digest("The quick brown fox jumps over the lazy dog.";SHA1 digest)\n\xa0\xa0// $key2 is "408d94384216f890ff7a0c3528e8bed1e0b01621"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/base64-decode",children:"BASE64 DECODE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/base64-encode",children:"BASE64 ENCODE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/generate-password-hash",children:"Generate password hash"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Protocolo seguro"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/web-validate-digest",children:"WEB Validate digest"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1147"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var d=s(667294);let t={},r=d.createContext(t);function i(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);