"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56680"],{576837:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/wa-execute-javascript-function","title":"WA EXECUTE JAVASCRIPT FUNCTION","description":"WA EXECUTE JAVASCRIPT FUNCTION ( { ;} objeto ; funcionjs ; resultado| {; param}{; param2 ; ... ; paramN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/wa-execute-javascript-function.md","sourceDirName":"commands-legacy","slug":"/commands/wa-execute-javascript-function","permalink":"/docs/es/commands/wa-execute-javascript-function","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-execute-javascript-function.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-execute-javascript-function","title":"WA EXECUTE JAVASCRIPT FUNCTION","slug":"/commands/wa-execute-javascript-function","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Evaluate JavaScript","permalink":"/docs/es/commands/wa-evaluate-javascript"},"next":{"title":"WA Forward URL available","permalink":"/docs/es/commands/wa-forward-url-available"}}'),t=a("785893"),s=a("250065");let i={id:"wa-execute-javascript-function",title:"WA EXECUTE JAVASCRIPT FUNCTION",slug:"/commands/wa-execute-javascript-function",displayed_sidebar:"docs"},c=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WA EXECUTE JAVASCRIPT FUNCTION"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"funcionjs"})," ; resultado|* {; ",(0,t.jsx)(n.em,{children:"param"}),"}{; ",(0,t.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"funcionjs"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de la funci\xf3n JavaScript a ejecutar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resultado|*"}),(0,t.jsx)(n.td,{children:"Variable"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"* para una funci\xf3n sin resultado o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Resultado de la funci\xf3n (si se espera)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param"}),(0,t.jsx)(n.td,{children:"Text, Number, Date, Object, Collection"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Par\xe1metro(s) a pasar a la funci\xf3n"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando WA EXECUTE JAVASCRIPT FUNCTION ejecuta en el \xe1rea Web designada por los par\xe1metros ",(0,t.jsx)(n.em,{children:"*"})," y ",(0,t.jsx)(n.em,{children:"objeto"}),", la funci\xf3n JavaScript ",(0,t.jsx)(n.em,{children:"funcionJS"})," y devuelve opcionalmente su resultado en el par\xe1metro ",(0,t.jsx)(n.em,{children:"resultado"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si la funci\xf3n no devuelve un resultado, pase ",(0,t.jsx)(n.em,{children:"*"})," en el par\xe1metro ",(0,t.jsx)(n.em,{children:"resultado"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede pasar en ",(0,t.jsx)(n.em,{children:"param"})," una o varios par\xe1metros que contengan los par\xe1metros de la funci\xf3n."]}),"\n",(0,t.jsxs)(n.p,{children:["El comando soporta varios tipos de par\xe1metros, tanto para entrada (",(0,t.jsx)(n.em,{children:"param"}),") como para salida (",(0,t.jsx)(n.em,{children:"resultado"}),"). Puede pasar y recuperar datos de tipos cadena, n\xfamero, fecha, objeto y colecci\xf3n. Si el tipo de par\xe1metro no est\xe1 definido, el tipo texto se utiliza de manera predeterminada."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Atenci\xf3n"}),": no se recomienda utilizar este comando para llamar directamente a una funci\xf3n JavaScript que muestre un di\xe1logo ",(0,t.jsx)(n.strong,{children:"(alert(), print()...)"})," ya que el usuario no puede interactuar con el \xe1rea web mientras se ejecuta el c\xf3digo 4D. Si necesita implementar dicha interfaz, puede llamar, por ejemplo, a ",(0,t.jsx)(n.strong,{children:"setTimeout(function(){alert();}, 50))"})," para dejar que termine la ejecuci\xf3n del c\xf3digo 4D y permitir la interacci\xf3n del usuario."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"Llamada de una funci\xf3n JavaScript con 3 par\xe1metros:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$JavaScriptFunction:="FuncionAEjecutar"\n\xa0$Param1:="10"\n\xa0$Param2:="true"\n\xa0$Param3:="1,000.2"\xa0//note "," como separador de miles y "." como separador d\xe9cimal\n\xa0\n\xa0WA EXECUTE JAVASCRIPT FUNCTION(MyWArea;$FuncionAEjecutar;$Result;$Param1;$Param2;$Param3)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:'La funci\xf3n JavaScript "getCustomerInfo" recibe un n\xfamero ID como par\xe1metro y devuelve un objeto:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $Result : Object\n\xa0var $ID : Integer\n\xa0$ID:=1000\n\xa0WA EXECUTE JAVASCRIPT FUNCTION(*,"WA";"getCustomerInfo";$Result;$ID)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/wa-evaluate-javascript",children:"WA Evaluate JavaScript"})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1043"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return i}});var r=a(667294);let t={},s=r.createContext(t);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);