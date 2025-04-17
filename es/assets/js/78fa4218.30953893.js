"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87976"],{343300:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/wa-evaluate-javascript","title":"WA Evaluate JavaScript","description":"WA Evaluate JavaScript ( { ;} objeto ; codeJS {; type*} )  : any","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/wa-evaluate-javascript.md","sourceDirName":"commands-legacy","slug":"/commands/wa-evaluate-javascript","permalink":"/docs/es/20-R8/commands/wa-evaluate-javascript","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-evaluate-javascript.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-evaluate-javascript","title":"WA Evaluate JavaScript","slug":"/commands/wa-evaluate-javascript","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Create URL history menu","permalink":"/docs/es/20-R8/commands/wa-create-url-history-menu"},"next":{"title":"WA EXECUTE JAVASCRIPT FUNCTION","permalink":"/docs/es/20-R8/commands/wa-execute-javascript-function"}}'),r=t("785893"),s=t("250065");let d={id:"wa-evaluate-javascript",title:"WA Evaluate JavaScript",slug:"/commands/wa-evaluate-javascript",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WA Evaluate JavaScript"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"codeJS"})," {; ",(0,r.jsx)(n.em,{children:"type"}),"} )  : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codeJS"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"C\xf3digo JavaScript"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tipo al cual convertir el resultado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Date, Time, Object, Pointer, Real, Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Resultado de ejecuci\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando WA Evaluate JavaScript ejecuta en el \xe1rea web designada por los par\xe1metros ",(0,r.jsx)(n.em,{children:"*"})," y ",(0,r.jsx)(n.em,{children:"objeto"})," el c\xf3digo JavaScript pasado en ",(0,r.jsx)(n.em,{children:"codeJS"})," y devuelve el resultado. Este comando debe ser llamado despu\xe9s de cargar la p\xe1gina (el evento de formulario On End URL Loading debe haber sido generado)."]}),"\n",(0,r.jsxs)(n.p,{children:["Por defecto, el comando devuelve el resultado como cadenas. Puede utilizar el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"tipo"}),' para especificar la digitaci\xf3n del valor devuelto. Para hacer esto, pase una de las siguientes constantes, del tema "',(0,r.jsx)(n.em,{children:"Tipos de campos y variables"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is Boolean"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is collection"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"42"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is date"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is object"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"38"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is time"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Atenci\xf3n"}),": no se recomienda utilizar este comando para llamar directamente a una funci\xf3n JavaScript que muestre un di\xe1logo (",(0,r.jsx)(n.strong,{children:"alert(), print()"}),"...) ya que el usuario no puede interactuar con el \xe1rea web mientras se ejecuta el c\xf3digo 4D. Si necesita implementar dicha interfaz, puede llamar, por ejemplo, a ",(0,r.jsx)(n.strong,{children:"setTimeout(function(){alert();}, 50))"})," para dejar que termine la ejecuci\xf3n del c\xf3digo 4D y permitir la interacci\xf3n del usuario."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Este ejemplo de c\xf3digo JavaScript hace que se muestre el URL anterior."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$result:=WA Evaluate JavaScript(MyWArea;"history.back()")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Este ejemplo muestra algunas evaluaciones con conversi\xf3n de los valores recibidos."}),"\n",(0,r.jsx)(n.p,{children:"Las funciones JavaScript se ubican en un archivo HTML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-HTML",children:'<!DOCTYPE html>\n<html>\n\xa0\xa0\xa0 <head>\n\xa0\xa0\xa0 \xa0\xa0\xa0 <script>\n\xa0\xa0\xa0 \xa0\xa0\xa0 function evalLong(){\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 return 123;\n\xa0\xa0\xa0 \xa0\xa0\xa0 }\n\xa0\xa0\xa0 \xa0\xa0\xa0 function evalText(){\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 return "456";\n\xa0\xa0\xa0 \xa0\xa0\xa0 }\n\xa0\xa0\xa0 \xa0\xa0\xa0 function evalObject(){\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 return {a:1,b:"hello world"};\n\xa0\xa0\xa0 \xa0\xa0\xa0 }\n\xa0\xa0\xa0 \xa0\xa0\xa0 function evalDate(){\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 return new Date();\n\xa0\xa0\xa0 \xa0\xa0\xa0 }\n\xa0\xa0\xa0 <\/script>\n\xa0\xa0\xa0 </head>\n\xa0\xa0\xa0 <body>\n\xa0\xa0\xa0 \xa0\xa0\xa0 TEST PAGE\n\xa0\xa0\xa0 </body>\n</html>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Escriba en el m\xe9todo del formulario 4D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0If(Form event code=On Load)\n\xa0\xa0\xa0\xa0WA OPEN URL(*;"Web Area";"C:\\\\myDatabase\\\\index.html")\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"Luego puede evaluar el c\xf3digo JavaScript desde 4D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$Eval1:=WA Evaluate JavaScript(*;"Web Area";"evalLong()";Is longint)\n\xa0\xa0//$Eval1 = 123\n\xa0\xa0//$Eval1 = "123" if type is omitted\n\xa0$Eval2:=WA Evaluate JavaScript(*;"Web Area";"evalText()";Is text)\n\xa0\xa0//$Eval2 = "456"\n\xa0$Eval3:=WA Evaluate JavaScript(*;"Web Area";"evalObject()";Is object)\n\xa0\xa0//$Eval3 = {"a":1,"b":"hello world"}\n\xa0$Eval4:=WA Evaluate JavaScript(*;"Web Area";"evalDate()";Is date)\n\xa0\xa0// $Eval4 = 06/21/13\n\xa0\xa0// $Eval4 = "2013-06-21T14:45:09.694Z" si el tipo se omite\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/wa-execute-javascript-function",children:"WA EXECUTE JAVASCRIPT FUNCTION"})}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1029"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var a=t(667294);let r={},s=a.createContext(r);function d(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);