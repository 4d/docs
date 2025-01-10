"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64126"],{314542:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>a,assets:()=>o,toc:()=>l,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/validate-password","title":"Validate password","description":"Validate password ( refUsuario ; contrase\xf1a {; digest} ) : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/validate-password.md","sourceDirName":"commands-legacy","slug":"/commands/validate-password","permalink":"/docs/es/commands/validate-password","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvalidate-password.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"validate-password","title":"Validate password","slug":"/commands/validate-password","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"USERS TO BLOB","permalink":"/docs/es/commands/users-to-blob"},"next":{"title":"Variables","permalink":"/docs/es/category/variables"}}'),r=s("785893"),d=s("250065");let t={id:"validate-password",title:"Validate password",slug:"/commands/validate-password",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Validate password"})," ( ",(0,r.jsx)(n.em,{children:"refUsuario"})," ; ",(0,r.jsx)(n.em,{children:"contrase\xf1a"})," {; ",(0,r.jsx)(n.em,{children:"digest"}),"} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refUsuario"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de referencia \xfanico"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"contrase\xf1a"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Contrase\xf1a no encriptada"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"digest"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Contrase\xf1a digest = True, ",(0,r.jsx)(n.br,{}),"Contrase\xf1a texto plano (por defecto) = False"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"True = contrase\xf1a correcta False = contrase\xf1a incorrecta"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Validate password devuelve True si la cadena pasada en ",(0,r.jsx)(n.em,{children:"contrase\xf1a"})," es la contrase\xf1a para la cuenta de usuario cuyo n\xfamero de referencia se pasa en ",(0,r.jsx)(n.em,{children:"refUsuario"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"digest"})," indica si el par\xe1metro ",(0,r.jsx)(n.em,{children:"contrase\xf1a"})," contiene una contrase\xf1a en texto plano o na contrase\xf1a en forma hash (modo digest):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["si pasa ",(0,r.jsx)(n.strong,{children:"True"}),", indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"contrase\xf1a"})," contiene una contrase\xf1a en forma hash (modo digest),"]}),"\n",(0,r.jsxs)(n.li,{children:["si pasa ",(0,r.jsx)(n.strong,{children:"False"})," u omite este par\xe1metro, indica que ",(0,r.jsx)(n.em,{children:"contrase\xf1a"})," contiene una contrase\xf1a en texto plano."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Este par\xe1metro es particularmente \xfatil cuando se utilizan m\xe9todos base de autenticaci\xf3n, en particular el ",(0,r.jsx)(n.a,{href:"metodo-base-on-4d-mobile-authentication.md",children:"M\xe9todo base On 4D Mobile Authentication"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"El comando es temporizado con el fin de evitar ataques de fuerza bruta, en otras palabras, intentos de m\xfaltiples combinaciones de nombres de usuario/contrase\xf1a. Como resultado, despu\xe9s de la cuarta llamada a este comando, no se ejecuta por un periodo de 10 segundos. Esta temporizaci\xf3n es global a la estaci\xf3n de trabajo."}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Este ejemplo verifica si la contrase\xf1a del usuario \u201CHardy\u201D es \u201CLaurel\u201D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0GET USER LIST(atNombreUsuario;alRefUsuario)\n\xa0$vlElem:=Find in array(atNombreUsuario;"Hardy")\n\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0If(Validate password(alRefUsuario{$vlElem};"Laurel"))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("\xa1S\xed!")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("\xa1Errorl!")\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Nombre de usuario desconocido")\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsxs)(n.p,{children:["En el ",(0,r.jsx)(n.a,{href:"metodo-base-on-4d-mobile-authentication.md",children:"M\xe9todo base On 4D Mobile Authentication"}),", usted puede probar una petici\xf3n de conexi\xf3n (utilizando los usuarios 4D de la base). Puede escribir:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$0:=Validate password($1;$2;$3)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/set-user-properties",children:"Set user properties"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/web-validate-digest",children:"WEB Validate digest"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"638"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var a=s(667294);let r={},d=a.createContext(r);function t(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);