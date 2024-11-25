"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27800"],{563271:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"Concepts/variant","title":"Variant","description":"Variant es un tipo de variable que permite encapsular datos de todo tipo v\xe1lido y est\xe1ndar en una variable. Normalmente, este tipo de variable puede utilizarse para escribir c\xf3digo gen\xe9rico que devuelva o reciba valores cuyo tipo no se conoce. Este es el caso, por ejemplo, del c\xf3digo que maneja los atributos de objeto.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Concepts/dt_variant.md","sourceDirName":"Concepts","slug":"/Concepts/variant","permalink":"/docs/es/20/Concepts/variant","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_variant.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"variant","title":"Variant"},"sidebar":"docs","previous":{"title":"Hora","permalink":"/docs/es/20/Concepts/time"},"next":{"title":"Variables","permalink":"/docs/es/20/Concepts/variables"}}'),i=a("785893"),r=a("250065");let o={id:"variant",title:"Variant"},s=void 0,l={},d=[];function c(e){let n={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Variant es un tipo de variable que permite encapsular datos de todo tipo v\xe1lido y est\xe1ndar en una variable. Normalmente, este tipo de variable puede utilizarse para escribir c\xf3digo gen\xe9rico que devuelva o reciba valores cuyo tipo no se conoce. Este es el caso, por ejemplo, del c\xf3digo que maneja los atributos de objeto."}),"\n",(0,i.jsx)(n.p,{children:"Una variable de tipo variant puede contener un valor de los tipos de datos siguientes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BLOB"}),"\n",(0,i.jsx)(n.li,{children:"boolean"}),"\n",(0,i.jsx)(n.li,{children:"collection"}),"\n",(0,i.jsx)(n.li,{children:"date"}),"\n",(0,i.jsx)(n.li,{children:"entero largo"}),"\n",(0,i.jsx)(n.li,{children:"object"}),"\n",(0,i.jsx)(n.li,{children:"picture"}),"\n",(0,i.jsx)(n.li,{children:"pointer"}),"\n",(0,i.jsx)(n.li,{children:"real"}),"\n",(0,i.jsx)(n.li,{children:"text"}),"\n",(0,i.jsx)(n.li,{children:"time"}),"\n",(0,i.jsx)(n.li,{children:"null"}),"\n",(0,i.jsx)(n.li,{children:"indefinido"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Las matrices no pueden almacenarse en variables de tipo variant."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Tanto en modo interpretado como en compilado, a una misma variable variant se le pueden asignar contenidos de diferentes tipos. A diferencia de los tipos de variable est\xe1ndar, el tipo de contenido de la variable variant es diferente del tipo de variable variant mismo. Por ejemplo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'C_VARIANT($variant)\n\n$variant:="hello world"\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 2 (Is text)\n\n$variant:=42\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 1 (Is real)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Se pueden utilizar variables variant en cualquier lugar donde se esperen variables, s\xf3lo hay que asegurarse de que el tipo de datos del contenido de la variable es del tipo esperado. Al acceder a las variables de las variantes, s\xf3lo se tiene en cuenta su valor actual. Por ejemplo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'C_VARIANT($v)\n$v:="hello world"\n$v2:=$v //asignar una variable a otra variable\n\n$t:=Type($v) // 12 (Is variant)\n$t2:=Type($v2) // 2 (Is text)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Variant se puede utilizar para declarar par\xe1metros de m\xe9todos ($0, $1,...) que pueden ser de varios tipos. En este caso, puede construir su c\xf3digo probando el tipo de valor del par\xe1metro, por ejemplo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"C_VARIANT($1)\nCase of\n: (Value type($1)=Is longint)\n...\n: (Value type($1)=Is text)\n...\n//statement(s)\n End case\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Cuando las variables variant no son necesarias (es decir, cuando se conoce el tipo de datos), se recomienda utilizar variables de tipo est\xe1ndar. Las variables de tipo est\xe1ndar ofrecen un mejor rendimiento, hacen que el c\xf3digo sea m\xe1s claro y son \xfatiles para que el compilador evite los errores relacionados con el paso de tipos de datos inesperados."}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return o}});var t=a(667294);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);