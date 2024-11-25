"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71409"],{54970:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/execute-formula","title":"EXECUTE FORMULA","description":"EXECUTE FORMULA ( instruccion )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/execute-formula.md","sourceDirName":"commands-legacy","slug":"/commands/execute-formula","permalink":"/docs/es/commands/execute-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexecute-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"execute-formula","title":"EXECUTE FORMULA","slug":"/commands/execute-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EDIT FORMULA","permalink":"/docs/es/commands/edit-formula"},"next":{"title":"Formula","permalink":"/docs/es/commands/formula"}}'),r=a("785893"),c=a("250065");let o={id:"execute-formula",title:"EXECUTE FORMULA",slug:"/commands/execute-formula",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Cach\xe9 para f\xf3rmulas en modo compilado",id:"cach\xe9-para-f\xf3rmulas-en-modo-compilado",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"EXECUTE FORMULA"})," ( ",(0,r.jsx)(n.em,{children:"instruccion"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"instruccion"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"C\xf3digo a ejecutar"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"EXECUTE FORMULA"})," ejecuta ",(0,r.jsx)(n.em,{children:"instruccion"})," como una l\xednea de c\xf3digo. Este comando est\xe1 dise\xf1ado para ser utilizado cuando necesita evaluar expresiones que el usuario puede construir o modificar."]}),"\n",(0,r.jsxs)(n.p,{children:["La cadena de instrucci\xf3n debe ser de una sola l\xednea. Si ",(0,r.jsx)(n.em,{children:"instruccion"})," es una cadena vac\xeda, ",(0,r.jsx)(n.strong,{children:"EXECUTE FORMULA"})," no hace nada. La regla es que si la instrucci\xf3n puede ejecutarse como un m\xe9todo de una l\xednea, entonces se ejecutar\xe1 correctamente. El comando ",(0,r.jsx)(n.strong,{children:"EXECUTE FORMULA"})," debe utilizarse con precauci\xf3n, ya que disminuye la velocidad de ejecuci\xf3n. En una base compilada, el c\xf3digo de la instrucci\xf3n no est\xe1 compilado. Esto significa que la instrucci\xf3n ser\xe1 ejecutada, pero no ser\xe1 verificada por el compilador en el momento de la compilaci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," la ejecuci\xf3n de f\xf3rmulas en modo compilado se puede optimizar utilizando una memoria cach\xe9 (ver ",(0,r.jsx)(n.em,{children:"Cach\xe9 para f\xf3rmulas en modo compilado"})," abajo)."]}),"\n",(0,r.jsxs)(n.p,{children:["La ",(0,r.jsx)(n.em,{children:"instrucci\xf3n"})," puede incluir los siguientes elementos:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"una llamada a una funci\xf3n (m\xe9todo proyecto que devuelve un valor),"}),"\n",(0,r.jsx)(n.li,{children:"una llamada a un comando 4D"}),"\n",(0,r.jsx)(n.li,{children:"una tarea"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"La f\xf3rmula puede incluir variables proceso e interproceso. La instrucci\xf3n no puede contener instrucciones de control de flujo (If, While, etc.), porque la instrucci\xf3n debe tener s\xf3lo una l\xednea de c\xf3digo."}),"\n",(0,r.jsxs)(n.p,{children:["Para asegurarse de que la ",(0,r.jsx)(n.em,{children:"instruccion"})," sea evaluada correctamente independientemente del lenguaje o versi\xf3n 4D utilizada, se recomienda utilizar la sintaxis tokenizada para los elementos cuyo nombre puede variar entre las diferentes versiones (comandos, tablas, campos, constantes). Por ejemplo, para insertar el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/current-time",children:"Current time"}),", introduzca ",(0,r.jsx)(n.strong,{children:"'Current time:C178'"}),". Para m\xe1s informaci\xf3n, consulte ",(0,r.jsx)(n.em,{children:"Utilizar tokens en f\xf3rmulas"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si la ",(0,r.jsx)(n.em,{children:"instruccion"})," es un m\xe9todo proyecto, se recomienda utilizar ",(0,r.jsx)(n.a,{href:"/docs/es/commands/execute-method",children:"EXECUTE METHOD"})," que le permite pasar par\xe1metros."]}),"\n",(0,r.jsxs)(n.li,{children:["No se recomienda llamar a ning\xfan comando de declaraci\xf3n de variable como ",(0,r.jsx)(n.a,{href:"c-date.md",children:"C_DATE"})," en ",(0,r.jsx)(n.em,{children:"instruccion"})," ya que puede generar conflictos en el c\xf3digo."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"La f\xf3rmula puede incluir variables de proceso y variables entre procesos. Sin embargo, la declaraci\xf3n no puede contener el control de las instrucciones de flujo (If, While, etc.), ya que debe estar en una l\xednea de c\xf3digo."}),"\n",(0,r.jsxs)(n.p,{children:["Para garantizar que la ",(0,r.jsx)(n.em,{children:"instrucci\xf3n"})," se eval\xfae correctamente, independientemente del lenguaje 4D o la versi\xf3n utilizada, se recomienda utilizar la sintaxis del ",(0,r.jsx)(n.em,{children:"token"}),' para los elementos cuyo nombre puede variar entre diferentes versiones (comandos, tablas, campos, constantes). Por ejemplo, para insertar el comando [#cmd id="178"/], introduzca \'',(0,r.jsx)(n.strong,{children:"Current time:C178"}),"'. Para m\xe1s informaci\xf3n al respecto, consulte ",(0,r.jsx)(n.em,{children:"Utilizar tokens en f\xf3rmulas"}),"."]}),"\n",(0,r.jsx)(n.h5,{id:"cach\xe9-para-f\xf3rmulas-en-modo-compilado",children:"Cach\xe9 para f\xf3rmulas en modo compilado"}),"\n",(0,r.jsxs)(n.p,{children:["Por optimizaci\xf3n, cada f\xf3rmula ejecutada v\xeda ",(0,r.jsx)(n.strong,{children:"EXECUTE FORMULA"})," en modo compilado se puede almacenar en una memoria cach\xe9 en la memoria dedicada. La f\xf3rmula se almacena en cach\xe9 en forma tokenizada. Una vez que se coloca en la cach\xe9, sus ejecuciones posteriores est\xe1n altamente optimizadas ya que el paso de tokenizaci\xf3n se evita."]}),"\n",(0,r.jsxs)(n.p,{children:["El tama\xf1o de la cach\xe9 es cero por defecto (sin cach\xe9); debe ser creada o ajustada con el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),". Por ejemplo:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET DATABASE PARAMETER(Number of formulas in cache;0)\xa0//sin cach\xe9 de f\xf3rmulas\n\xa0SET DATABASE PARAMETER(Number of formulas in cache;3)\xa0//hasta tres f\xf3rmulas se puede almacenar en cach\xe9 para cada proceso\n"})}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"EXECUTE FORMULA"})," utiliza la cach\xe9 s\xf3lo cuando se llama desde una base o componente compilado."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Usted desea ejecutar una f\xf3rmula incluida las llamadas a los comandos y tablas 4D. Dado que estos elementos potencialmente podr\xedan ser renombrados, quiere asegurarse de la correcta ejecuci\xf3n de la instrucci\xf3n en las versiones futuras de su aplicaci\xf3n utilizando la sintaxis ",(0,r.jsx)(n.em,{children:"tokens"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0EXECUTE FORMULA("Year of:C25 ([Products:5]Creation_Date:2])+$add")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/command-name",children:"Command name"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/edit-formula",children:"EDIT FORMULA"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})]})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return o}});var s=a(667294);let r={},c=s.createContext(r);function o(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);