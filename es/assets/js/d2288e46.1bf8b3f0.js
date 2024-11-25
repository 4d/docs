"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32419"],{155720:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>t});var s=JSON.parse('{"id":"commands-legacy/new-data-key","title":"New data key","description":"New data key ( passPhrase ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/new-data-key.md","sourceDirName":"commands-legacy","slug":"/commands/new-data-key","permalink":"/docs/es/commands/new-data-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-data-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-data-key","title":"New data key","slug":"/commands/new-data-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Encrypt data file","permalink":"/docs/es/commands/encrypt-data-file"},"next":{"title":"Register data key","permalink":"/docs/es/commands/register-data-key"}}'),d=a("785893"),r=a("250065");let t={id:"new-data-key",title:"New data key",slug:"/commands/new-data-key",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"New data key"})," ( ",(0,d.jsx)(n.em,{children:"passPhrase"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"passPhrase"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Frase contrase\xf1a a utilizar para generar la llave de cifrado de datos AES"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Objeto que contiene la llave (propiedad encodedKey)"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"New data key"})," genera una llave de cifrado de datos binarios a partir del texto pasado en el par\xe1metro ",(0,d.jsx)(n.em,{children:"passPhrase"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["La llave codificada se puede guardar localmente, para ser almacenada en un dispositivo extra\xedble, como una llave USB (ver ",(0,d.jsx)(n.em,{children:"Almacenamiento de llaves de cifrado de datos en archivos"})," en el manual de ",(0,d.jsx)(n.em,{children:"Dise\xf1o 4D"}),"). Conectar este dispositivo a la m\xe1quina que aloja la base de datos cifrada permitir\xe1 autom\xe1ticamente al usuario acceder a los datos cifrados."]}),"\n",(0,d.jsxs)(n.p,{children:["Puede pasar cualquier caracter en ",(0,d.jsx)(n.em,{children:"passPhrase"}),". La misma ",(0,d.jsx)(n.em,{children:"passPhrase"})," siempre producir\xe1 la misma llave de cifrado de datos."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Valor devuelto"})}),"\n",(0,d.jsx)(n.p,{children:"El objeto devuelto contiene la siguiente propiedad:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Propiedad"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Tipo"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"encodedKey"}),(0,d.jsx)(n.td,{children:"Texto"}),(0,d.jsxs)(n.td,{children:["Llave de cifrado AES (SHA de 256 bits) generada a partir de ",(0,d.jsx)(n.em,{children:"passPhrase"})]})]})})]}),"\n",(0,d.jsxs)(n.p,{children:["Si se pas\xf3 una cadena vac\xeda en ",(0,d.jsx)(n.em,{children:"passPhrase"}),", el comando devuelve ",(0,d.jsx)(n.em,{children:"null"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Desea guardar una llave de cifrado en un archivo .4DKeyChain:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $dataKey : Object\n\xa0var $passphrase : Text\n\xa0\n\xa0$passphrase:=Request("Enter the passphrase:")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$dataKey:=New data key($passphrase)\n\xa0\xa0\xa0\xa0TEXT TO DOCUMENT("generatedKey.4DKeyChain";JSON Stringify($dataKey))\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/discover-data-key",children:"Discover data key"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/encrypt-data-file",children:"Encrypt data file"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/register-data-key",children:"Register data key"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return t}});var s=a(667294);let d={},r=s.createContext(d);function t(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);