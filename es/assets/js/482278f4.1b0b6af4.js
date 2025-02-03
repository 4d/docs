"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63343"],{702447:function(e,n,l){l.r(n),l.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>o,assets:()=>t,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"commands/formula","title":"Formula","description":"Historia","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands/formula.md","sourceDirName":"commands","slug":"/commands/formula","permalink":"/docs/es/commands/formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fformula.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"formula","title":"Formula","slug":"/commands/formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE FORMULA","permalink":"/docs/es/commands/execute-formula"},"next":{"title":"Formula from string","permalink":"/docs/es/commands/formula-from-string"}}'),a=l("785893"),r=l("250065");let s={id:"formula",title:"Formula",slug:"/commands/formula",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ejemplo 6",id:"ejemplo-6",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function i(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.details,{children:[(0,a.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Lanzamiento"}),(0,a.jsx)(n.th,{children:"Modificaciones"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"17 R6"}),(0,a.jsx)(n.td,{children:"Renombrado (New formula -> Formula)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"17 R3"}),(0,a.jsx)(n.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Formula"})," ( ",(0,a.jsx)(n.em,{children:"formulaExp"})," : Expression ) : 4D.Function"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metros"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{style:{textAlign:"center"}}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"formulaExp"}),(0,a.jsx)(n.td,{children:"Expression"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,a.jsx)(n.td,{children:"F\xf3rmula a devolver como objeto"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Result"}),(0,a.jsx)(n.td,{children:"4D.Function"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,a.jsx)(n.td,{children:"Funci\xf3n nativa que encapsula la f\xf3rmula"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.code,{children:"Formula"})," crea un objeto ",(0,a.jsx)(n.code,{children:"4D Function"})," basado en la expresi\xf3n ",(0,a.jsx)(n.em,{children:"formulaExp"}),". ",(0,a.jsx)(n.em,{children:"formulaExp"})," puede ser tan simple como un valor \xfanico o complejo, como un m\xe9todo proyecto con par\xe1metros."]}),"\n",(0,a.jsx)(n.p,{children:'Tener una f\xf3rmula como objeto permite pasarla como par\xe1metro (atributo calculado) a los comandos o a los m\xe9todos o ejecutarla desde varios componentes sin necesidad de declararla como "compartida por los componentes y la base de datos local". Cuando se llama, el objeto f\xf3rmula se eval\xfaa en el contexto de la base de datos o del componente que lo cre\xf3.'}),"\n",(0,a.jsx)(n.p,{children:"La f\xf3rmula devuelta puede ser llamada con:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["los m\xe9todos ",(0,a.jsx)(n.a,{href:"#call",children:(0,a.jsx)(n.code,{children:".call()"})})," o ",(0,a.jsx)(n.a,{href:"#apply",children:(0,a.jsx)(n.code,{children:".apply()"})}),", o"]}),"\n",(0,a.jsxs)(n.li,{children:["la sintaxis de notaci\xf3n objeto (ver ",(0,a.jsx)(n.a,{href:"#formula-object",children:"objeto formula"}),")."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=Formula(1+2)\n $o:=New object("myFormula";$f)\n\n  //tres formas diferentes de llamar a la f\xf3rmula\n $f.call($o) //devuelve 3\n $f.apply($o) //devuelve 3\n $o.myFormula() //devuelve 3\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Puede pasar ",(0,a.jsx)(n.a,{href:"#passing-parameters",children:"par\xe1metros"})," a ",(0,a.jsx)(n.code,{children:"Formula"}),", como se muestra a continuaci\xf3n en el ",(0,a.jsx)(n.a,{href:"#example-4",children:"ejemplo 4"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Se puede especificar el objeto sobre el que se ejecuta la f\xf3rmula, como se ve en ",(0,a.jsx)(n.a,{href:"#ejemplo-5",children:"ejemplo 5"}),". Se puede acceder a las propiedades del objeto mediante el comando ",(0,a.jsx)(n.code,{children:"This"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si ",(0,a.jsx)(n.em,{children:"formulaExp"})," utiliza variables locales, sus valores se copian y almacenan en el objeto f\xf3rmula devuelto durante su creaci\xf3n. Cuando se ejecuta, la f\xf3rmula utiliza estos valores copiados en lugar del valor actual de las variables locales. Tenga en cuenta que no se soporta el uso de arrays como variables locales."]}),"\n",(0,a.jsxs)(n.p,{children:["El objeto creado por ",(0,a.jsx)(n.code,{children:"Formula"})," puede guardarse, por ejemplo, en un campo de base de datos o en un documento blob."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"Una f\xf3rmula simple:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=Formula(1+2)\n\n var $o : Object\n $o:=New object("f";$f)\n\n $result:=$o.f() // devuelve 3\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"Una f\xf3rmula utilizando variables locales:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\n\n $value:=10\n $o:=New object("f";Formula($value))\n $value:=20\n\n $result:=$o.f() // devuelve 10\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,a.jsx)(n.p,{children:"Una f\xf3rmula sencilla que utiliza par\xe1metros:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' $o:=New object("f";Formula($1+$2))\n $result:=$o.f(10;20) //devuelve 30\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,a.jsx)(n.p,{children:"Una f\xf3rmula utilizando un m\xe9todo proyecto con par\xe1metros:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' $o:=New object("f";Formula(myMethod))\n $result:=$o.f("param1";"param2") // equivalente a $result:=myMethod("param1";"param2")\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,a.jsxs)(n.p,{children:["Utilizando ",(0,a.jsx)(n.code,{children:"This"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))\n $o.firstName:="John"\n $o.lastName:="Smith"\n $result:=$o.fullName() //devuelve "John Smith"\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,a.jsx)(n.p,{children:"Llamar a una f\xf3rmula utilizando la notaci\xf3n de objetos:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' var $feta; $robot : Object\n var $calc : 4D.Function\n $robot:=New object("name";"Robot";"price";543;"quantity";2)\n $feta:=New object("name";"Feta";"price";12.5;"quantity";5)\n\n $calc:=Formula(This.total:=This.price*This.quantity)\n\n  //define la f\xf3rmula de las propiedades del objeto\n $feta.calc:=$calc\n $robot.calc:=$calc\n\n  //llama la f\xf3rmula\n $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}\n $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://blog.4d.com/new-formula-more-power-behind-simplicity/",children:"4D Blog - Formula: More power behind simplicity"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"https://blog.4d.com/new-formula-think-outside-the-box/",children:"4D Blog - Formula: Think outside the box"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"https://blog.4d.com/write-your-own-methods-for-objects/",children:"4D Blog - Write your own methods for objects"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/formula-from-string",children:"Formula from string"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"1597"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return s}});var o=l(667294);let a={},r=o.createContext(a);function s(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);