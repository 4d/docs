"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99601"],{379020:function(e,a,n){n.r(a),n.d(a,{default:()=>p,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"Concepts/variant","title":"Variant","description":"Variant es un tipo de variable que permite encapsular datos de todo tipo v\xe1lido y est\xe1ndar en una variable. Normalmente, este tipo de variable puede utilizarse para escribir c\xf3digo gen\xe9rico que devuelva o reciba valores cuyo tipo no se conoce. Este es el caso, por ejemplo, del c\xf3digo que maneja los atributos de objeto.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Concepts/dt_variant.md","sourceDirName":"Concepts","slug":"/Concepts/variant","permalink":"/docs/es/20-R6/Concepts/variant","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_variant.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"variant","title":"Variant"},"sidebar":"docs","previous":{"title":"Hora","permalink":"/docs/es/20-R6/Concepts/time"},"next":{"title":"Variables","permalink":"/docs/es/20-R6/Concepts/variables"}}'),i=n("785893"),r=n("250065");let o={id:"variant",title:"Variant"},s=void 0,l={},d=[];function c(e){let a={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Variant es un tipo de variable que permite encapsular datos de todo tipo v\xe1lido y est\xe1ndar en una variable. Normalmente, este tipo de variable puede utilizarse para escribir c\xf3digo gen\xe9rico que devuelva o reciba valores cuyo tipo no se conoce. Este es el caso, por ejemplo, del c\xf3digo que maneja los atributos de objeto."}),"\n",(0,i.jsx)(a.p,{children:"Una variable de tipo variant puede contener un valor de los tipos de datos siguientes:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"BLOB"}),"\n",(0,i.jsx)(a.li,{children:"boolean"}),"\n",(0,i.jsx)(a.li,{children:"collection"}),"\n",(0,i.jsx)(a.li,{children:"date"}),"\n",(0,i.jsx)(a.li,{children:"entero largo"}),"\n",(0,i.jsx)(a.li,{children:"object"}),"\n",(0,i.jsx)(a.li,{children:"picture"}),"\n",(0,i.jsx)(a.li,{children:"pointer"}),"\n",(0,i.jsx)(a.li,{children:"real"}),"\n",(0,i.jsx)(a.li,{children:"text"}),"\n",(0,i.jsx)(a.li,{children:"time"}),"\n",(0,i.jsx)(a.li,{children:"null"}),"\n",(0,i.jsx)(a.li,{children:"indefinido"}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Las matrices no pueden almacenarse en variables de tipo variant."}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Tanto en modo interpretado como en compilado, a una misma variable variant se le pueden asignar contenidos de diferentes tipos. A diferencia de los tipos de variable est\xe1ndar, el tipo de contenido de la variable variant es diferente del tipo de variable variant mismo. Por ejemplo:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-4d",children:'C_VARIANT($variant)\n\n$variant:="hello world"\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 2 (Is text)\n\n$variant:=42\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 1 (Is real)\n'})}),"\n",(0,i.jsx)(a.p,{children:"Se pueden utilizar variables variant en cualquier lugar donde se esperen variables, s\xf3lo hay que asegurarse de que el tipo de datos del contenido de la variable es del tipo esperado. Al acceder a las variables de las variantes, s\xf3lo se tiene en cuenta su valor actual. Por ejemplo:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-4d",children:'C_VARIANT($v)\n$v:="hello world"\n$v2:=$v //asignar una variable a otra variable\n\n$t:=Type($v) // 12 (Is variant)\n$t2:=Type($v2) // 2 (Is text)\n'})}),"\n",(0,i.jsxs)(a.p,{children:["Variant se puede utilizar para declarar ",(0,i.jsx)(a.a,{href:"/docs/es/20-R6/Concepts/parameters",children:"par\xe1metros de m\xe9todo"})," que pueden ser de varios tipos. En este caso, puede construir su c\xf3digo probando el tipo de valor del par\xe1metro, por ejemplo:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-4d",children:"#DECLARE ($param : Variant)\nCase of\n: (Value type($param)=Is longint)\n...\n: (Value type($param)=Is text)\n...\nEnd case\n"})}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Cuando las variables variant no son necesarias (es decir, cuando se conoce el tipo de datos), se recomienda utilizar variables de tipo est\xe1ndar. Las variables de tipo est\xe1ndar ofrecen un mejor rendimiento, hacen que el c\xf3digo sea m\xe1s claro y son \xfatiles para que el compilador evite los errores relacionados con el paso de tipos de datos inesperados."}),"\n"]})]})}function p(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return s},a:function(){return o}});var t=n(667294);let i={},r=t.createContext(i);function o(e){let a=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);