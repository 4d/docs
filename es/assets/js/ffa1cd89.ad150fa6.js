"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57535"],{247601:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>t,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>o});var a=JSON.parse('{"id":"REST/authUsers","title":"Usuarios y sesiones","description":"Autenticaci\xf3n de los usuarios","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/authUsers.md","sourceDirName":"REST","slug":"/REST/authUsers","permalink":"/docs/es/18/REST/authUsers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"authUsers","title":"Usuarios y sesiones"},"sidebar":"docs","previous":{"title":"Configuraci\xf3n del servidor","permalink":"/docs/es/18/REST/configuration"},"next":{"title":"Obtener informaci\xf3n del servidor","permalink":"/docs/es/18/REST/genInfo"}}'),i=s("785893"),r=s("250065");let o={id:"authUsers",title:"Usuarios y sesiones"},t=void 0,d={},c=[{value:"Autenticaci\xf3n de los usuarios",id:"autenticaci\xf3n-de-los-usuarios",level:2},{value:"Cookie de sesi\xf3n",id:"cookie-de-sesi\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:3}];function l(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"autenticaci\xf3n-de-los-usuarios",children:"Autenticaci\xf3n de los usuarios"}),"\n",(0,i.jsx)(n.p,{children:"Como primer paso para abrir una sesi\xf3n REST en el servidor 4D, el usuario que env\xeda la solicitud debe estar autenticado."}),"\n",(0,i.jsxs)(n.p,{children:["Usted inicia la sesi\xf3n de un usuario en su aplicaci\xf3n pasando el nombre y la contrase\xf1a del usuario en ",(0,i.jsx)(n.a,{href:"/docs/es/18/REST/directory#directorylogin",children:(0,i.jsx)(n.code,{children:"$directory/login"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Una vez que un usuario se registra con \xe9xito, se abre una sesi\xf3n. Vea a continuaci\xf3n para saber c\xf3mo manejar la cookie de sesi\xf3n en las siguientes peticiones del cliente, si es necesario."}),"\n",(0,i.jsx)(n.p,{children:"La sesi\xf3n se cerrar\xe1 autom\xe1ticamente cuando se alcance el tiempo de espera."}),"\n",(0,i.jsx)(n.h2,{id:"cookie-de-sesi\xf3n",children:"Cookie de sesi\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"Cada petici\xf3n REST se gestiona por una sesi\xf3n espec\xedfica en el servidor 4D."}),"\n",(0,i.jsxs)(n.p,{children:["Cuando se recibe una primera petici\xf3n REST v\xe1lida, el servidor crea la sesi\xf3n y env\xeda una cookie de sesi\xf3n llamada ",(0,i.jsx)(n.code,{children:"WASID4D"})," en el encabezado de respuesta ",(0,i.jsx)(n.strong,{children:'"Set-Cookie"'}),", que contiene el UUID de la sesi\xf3n, por ejemplo:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"WASID4D=EA0400C4D58FF04F94C0A4XXXXXX3\n"})}),"\n",(0,i.jsxs)(n.p,{children:["En las siguientes peticiones REST, aseg\xfarese de que esta cookie se incluya en ",(0,i.jsx)(n.strong,{children:'el encabezado "Cookie"'})," con el fin de reutilizar la misma sesi\xf3n. En caso contrario, se abrir\xe1 una nueva sesi\xf3n y se utilizar\xe1 otra licencia."]}),"\n",(0,i.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsxs)(n.p,{children:["La gesti\xf3n de las cookies de sesi\xf3n depende de su cliente HTTP. Este ejemplo muestra c\xf3mo extraer y reenviar la cookie de sesi\xf3n en el contexto de las peticiones gestionadas a trav\xe9s del comando 4D ",(0,i.jsx)(n.code,{children:"HTTP Request"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'// Crear los encabezados\nARRAY TEXT(headerNames;0)\nARRAY TEXT(headerValues;0)\n\nAPPEND TO ARRAY(headerNames;"username-4D")\nAPPEND TO ARRAY(headerNames;"session-4D-length")\nAPPEND TO ARRAY(headerNames;"hashed-password-4D")\n\nAPPEND TO ARRAY(headerValues;"kind user")\nAPPEND TO ARRAY(headerValues;"60")\nAPPEND TO ARRAY(headerValues;Generate digest("test";4D digest))\n\nC_OBJECT($response)\n$response:=New object\n\n//Esta petici\xf3n abre una sesi\xf3n para el usuario "kind user"\n$result:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/$directory/login";"";\\  \n    $response;headerNames;headerValues;*)\n\n\n//Crear nuevos arrays para los encabezados con \xfanicamente la cookie WASID4D\nbuildHeader(->headerNames;->headerValues)\n\n//Esta otra petici\xf3n no abrir\xe1 una nueva sesi\xf3n\n$result:=HTTP Request(HTTP GET method;"127.0.0.1:8044/rest/$catalog";"";\\  \n    $response;headerNames;headerValues;*)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'// m\xe9todo proyecto buildHeader  \n\nC_POINTER($pointerNames;$1;$pointerValues;$2)\nARRAY TEXT($headerNames;0)\nARRAY TEXT($headerValues;0)\n\nCOPY ARRAY($1->;$headerNames)\nCOPY ARRAY($2->;$headerValues)\n\n$indexCookie:=Find in array($headerValues;"WASID4D@")\n$cookie:=$headerValues{$indexCookie}\n$start:=Position("WASID4D";$cookie)\n$end:=Position(";";$cookie)\n$uuid:= Substring($cookie;$start;$end-$start)\n\nARRAY TEXT($headerNames;1)\nARRAY TEXT($headerValues;1)\n\n$headerNames{1}:="Cookie"\n$headerValues{1}:=$uuid\n\nCOPY ARRAY($headerNames;$1->)\nCOPY ARRAY($headerValues;$2->)\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return o}});var a=s(667294);let i={},r=a.createContext(i);function o(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);