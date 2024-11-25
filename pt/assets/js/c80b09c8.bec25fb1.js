"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26947"],{49206:function(e,o,a){a.r(o),a.d(o,{metadata:()=>n,contentTitle:()=>s,default:()=>p,assets:()=>d,toc:()=>l,frontMatter:()=>i});var n=JSON.parse('{"id":"Concepts/variant","title":"Diferente de","description":"Variante \xe9 um tipo de vari\xe1vel que permite encapsular dados de qualquer tipo regular v\xe1lido numa vari\xe1vel. Normalmente, este tipo de vari\xe1vel pode ser utilizado para escrever c\xf3digo gen\xe9rico que devolve ou recebe valores para os quais o tipo n\xe3o \xe9 conhecido. \xc9 o caso, por exemplo, do c\xf3digo que trata os atributos dos objectos.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Concepts/dt_variant.md","sourceDirName":"Concepts","slug":"/Concepts/variant","permalink":"/docs/pt/Concepts/variant","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_variant.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"variant","title":"Diferente de"},"sidebar":"docs","previous":{"title":"Hora","permalink":"/docs/pt/Concepts/time"},"next":{"title":"Vari\xe1veis.","permalink":"/docs/pt/Concepts/variables"}}'),r=a("785893"),t=a("250065");let i={id:"variant",title:"Diferente de"},s=void 0,d={},l=[];function c(e){let o={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"Variante \xe9 um tipo de vari\xe1vel que permite encapsular dados de qualquer tipo regular v\xe1lido numa vari\xe1vel. Normalmente, este tipo de vari\xe1vel pode ser utilizado para escrever c\xf3digo gen\xe9rico que devolve ou recebe valores para os quais o tipo n\xe3o \xe9 conhecido. \xc9 o caso, por exemplo, do c\xf3digo que trata os atributos dos objectos."}),"\n",(0,r.jsx)(o.p,{children:"Uma vari\xe1vel de tipo variante pode conter um valor dos seguintes tipos de dados:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"BLOB"}),"\n",(0,r.jsx)(o.li,{children:"boolean"}),"\n",(0,r.jsx)(o.li,{children:"collection"}),"\n",(0,r.jsx)(o.li,{children:"date"}),"\n",(0,r.jsx)(o.li,{children:"inteiro longo"}),"\n",(0,r.jsx)(o.li,{children:"object"}),"\n",(0,r.jsx)(o.li,{children:"picture"}),"\n",(0,r.jsx)(o.li,{children:"pointer"}),"\n",(0,r.jsx)(o.li,{children:"real"}),"\n",(0,r.jsx)(o.li,{children:"text"}),"\n",(0,r.jsx)(o.li,{children:"time"}),"\n",(0,r.jsx)(o.li,{children:"null"}),"\n",(0,r.jsx)(o.li,{children:"indefinido"}),"\n"]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Os arrays n\xe3o podem ser armazenados em vari\xe1veis variant."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Tanto no modo interpretado como no modo compilado, a uma mesma vari\xe1vel variante podem ser atribu\xeddos conte\xfados de tipos diferentes. Ao contr\xe1rio dos tipos de vari\xe1veis regulares, o tipo de conte\xfado da vari\xe1vel de variante \xe9 diferente do pr\xf3prio tipo de vari\xe1vel variant. Por exemplo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'C_VARIANT($variant)\n\n$variant:="hello world"\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 2 (Is text)\n\n$variant:=42\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 1 (Is real)\n'})}),"\n",(0,r.jsx)(o.p,{children:"Pode utilizar vari\xe1veis variant onde quer que sejam esperadas vari\xe1veis, apenas tem de se certificar de que o tipo de dados do conte\xfado da vari\xe1vel \xe9 do tipo esperado. Ao aceder a vari\xe1veis variant, apenas o seu valor actual \xe9 tido em conta. Por exemplo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'C_VARIANT($v)\n$v:="hello world"\n$v2:=$v //atribuir vari\xe1vel a outra vari\xe1vel\n\n$t:=Type($v) // 12 (Is variant)\n$t2:=Type($v2) // 2 (Is text)\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Variant can be used to declare ",(0,r.jsx)(o.a,{href:"/docs/pt/Concepts/parameters",children:"method parameters"})," that can be of various types. Neste caso, pode construir o seu c\xf3digo testando, por exemplo, o tipo de valor do par\xe2metro:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"#DECLARE ($param : Variant)\nCase of\n: (Value type($param)=Is longint)\n...\n: (Value type($param)=Is text)\n...\nEnd case\n"})}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Quando as vari\xe1veis variant n\xe3o s\xe3o necess\xe1rias (ou seja, quando o tipo de dados \xe9 conhecido), recomenda-se a utiliza\xe7\xe3o de vari\xe1veis de tipo regular. As vari\xe1veis de tipo regular proporcionam um melhor desempenho, tornam o c\xf3digo mais claro e s\xe3o \xfateis para o compilador evitar erros relacionados com a passagem de tipos de dados inesperados."}),"\n"]})]})}function p(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return s},a:function(){return i}});var n=a(667294);let r={},t=n.createContext(r);function i(e){let o=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);