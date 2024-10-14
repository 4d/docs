"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75282],{721548:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>t});var r=d(474848),s=d(28453);const o={id:"null-undefined",title:"Null e indefinido"},l=void 0,i={id:"Concepts/null-undefined",title:"Null e indefinido",description:"Nulo e Indefinido s\xe3o tipos de dados que tratam de casos em que o valor de uma express\xe3o n\xe3o \xe9 conhecido.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/pt/Concepts/null-undefined",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"null-undefined",title:"Null e indefinido"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/pt/Concepts/date"},next:{title:"N\xfamero (Real, Longint, Integer)",permalink:"/docs/pt/Concepts/number"}},a={},t=[{value:"Null",id:"null",level:2},{value:"Indefinido",id:"indefinido",level:2},{value:"Operadores Null",id:"operadores-null",level:2},{value:"Operadores indefinidos",id:"operadores-indefinidos",level:2},{value:"Exemplos",id:"exemplos",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Nulo e Indefinido s\xe3o tipos de dados que tratam de casos em que o valor de uma express\xe3o n\xe3o \xe9 conhecido."}),"\n",(0,r.jsx)(n.h2,{id:"null",children:"Null"}),"\n",(0,r.jsxs)(n.p,{children:["Null \xe9 um tipo de dados especial com apenas um valor poss\xedvel: ",(0,r.jsx)(n.strong,{children:"null"}),". Este valor \xe9 devolvido por uma express\xe3o que n\xe3o cont\xe9m nenhum valor. Tentar ler uma propriedade de um valor ",(0,r.jsx)(n.strong,{children:"null"})," retorna um erro."]}),"\n",(0,r.jsxs)(n.p,{children:["Na linguagem 4D e para atributos do campo objeto, valores nulos s\xe3o gerenciados atrav\xe9s da fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:"Null"}),". Esta fun\xe7\xe3o pode ser usada com as express\xf5es abaixo para definir ou comparar o valor nulo:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"atributos de objetos"}),"\n",(0,r.jsx)(n.li,{children:"elementos da cole\xe7\xe3o"}),"\n",(0,r.jsx)(n.li,{children:"vari\xe1veis do tipo objeto, cole\xe7\xe3o, ponteiro, imagem ou variante (consulte tamb\xe9m [Null as default value] (data-types.md#null-as-default-value)."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"indefinido",children:"Indefinido"}),"\n",(0,r.jsxs)(n.p,{children:["Indefinido n\xe3o \xe9 realmente um tipo de dados. Denota uma vari\xe1vel que ainda n\xe3o foi definida. Evaluating an object property can also produce an undefined value. Lendo uma propriedade de um valor indefinido retorna ",(0,r.jsx)(n.strong,{children:"indefinido"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Uma vari\xe1vel variante tem ",(0,r.jsx)(n.strong,{children:"undefined"})," como ",(0,r.jsx)(n.a,{href:"/docs/pt/Concepts/data-types#default-values",children:"valor padr\xe3o"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Um campo n\xe3o pode ser indefinido (o comando ",(0,r.jsx)(n.code,{children:"Undefined"})," sempre retorna False para um campo)."]}),"\n",(0,r.jsx)(n.p,{children:"Typically when trying to read or assign undefined expressions, 4D will generate errors, except in the following cases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Atribuindo um valor indefinido para vari\xe1veis (exceto arrays) tem o mesmo efeito que chamar ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page89.html",children:(0,r.jsx)(n.code,{children:"CLEAR VARIABLE"})})," com eles:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"     C_OBJECT($o)\n     C_LONGINT($val)\n     $val:=10 //$val=10\n     $val:=$o. //$o.a \xe9 indefinido (sem erro), e atribuir este valor limpa a vari\xe1vel\n      //$val=0\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A atribui\xe7\xe3o de um valor indefinido a um objecto existente reinicia ou limpa o seu valor, dependendo do seu tipo:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Objecto, colec\xe7\xe3o, ponteiro: Null"}),"\n",(0,r.jsx)(n.li,{children:"Imagem: Imagem vazia"}),"\n",(0,r.jsx)(n.li,{children:"Booleano: Falso"}),"\n",(0,r.jsx)(n.li,{children:'String: ""'}),"\n",(0,r.jsx)(n.li,{children:"N\xfamero: 0"}),"\n",(0,r.jsx)(n.li,{children:'Data: !00-00-00-00! se a configura\xe7\xe3o "Usar tipo de data em vez de formato de data ISO nos objetos" estiver habilitada, caso contr\xe1rio ""'}),"\n",(0,r.jsx)(n.li,{children:"Hora: 0 (n\xfamero de ms)"}),"\n",(0,r.jsx)(n.li,{children:"Indefinido, Null: sem mudan\xe7a"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     C_OBJECT($o)\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Atribuir um valor indefinido a uma propriedade objecto n\xe3o existente n\xe3o faz nada."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Um valor indefinido passado como par\xe2metro para um m\xe9todo de projecto \xe9 automaticamente convertido em 0 ou "" de acordo com o tipo de par\xe2metro declarado.'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     C_OBJECT($o)\n     meum\xe9todo($o. ) //passa um par\xe2metro indefinido\n\n      //In mymethod\n     C_TEXT($1) //parameter type \xe9 texto\n      // $1 cont\xe9m ""\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Uma express\xe3o de condi\xe7\xe3o \xe9 automaticamente convertida em falsa quando se avalia para indefinida com as palavras-chave If e Case:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"     C_OBJECT($o)\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Quando express\xf5es de um determinado tipo s\xe3o esperadas em seu c\xf3digo 4D, voc\xea pode garantir que elas tenham o tipo correto, mesmo quando avaliadas como indefinidas, cercando-as com o comando 4D cast apropriado: ",(0,r.jsx)(n.code,{children:"String"}),", ",(0,r.jsx)(n.code,{children:"Num"}),", ",(0,r.jsx)(n.code,{children:"Date"}),", ",(0,r.jsx)(n.code,{children:"Time"}),", ",(0,r.jsx)(n.code,{children:"Bool"}),". Estes comandos devolvem um valor vazio de tipo especificado quando a express\xe3o \xe9 avaliada como indefinida. Por exemplo:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" $myString:=Caixa min\xfascula(String($o.a.b))) // certifique-se de obter um valor de string mesmo que n\xe3o esteja definido\n  // para evitar erros no c\xf3digo\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"operadores-null",children:"Operadores Null"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,r.jsx)(n.th,{children:"Sintaxe"}),(0,r.jsx)(n.th,{children:"Retorna"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Igual"}),(0,r.jsxs)(n.td,{children:["Null ",(0,r.jsx)(n.code,{children:"="})," Null"]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.nullProp ",(0,r.jsx)(n.code,{children:"="})," b.nullProp"]}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Null ",(0,r.jsx)(n.code,{children:"="})," Undefined"]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.nullProp ",(0,r.jsx)(n.code,{children:"="})," b.undefinedProp"]}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Null ",(0,r.jsx)(n.code,{children:"="})," ",(0,r.jsx)(n.em,{children:"scalar value"})]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.nullProp ",(0,r.jsx)(n.code,{children:"="})," 42"]}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Desigualdade"}),(0,r.jsxs)(n.td,{children:["Null ",(0,r.jsx)(n.code,{children:"#"})," Null"]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.nullProp ",(0,r.jsx)(n.code,{children:"#"})," b.nullProp"]}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Null ",(0,r.jsx)(n.code,{children:"#"})," Undefined"]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.nullProp ",(0,r.jsx)(n.code,{children:"#"})," b.undefinedProp"]}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Null ",(0,r.jsx)(n.code,{children:"#"})," ",(0,r.jsx)(n.em,{children:"scalar value"})]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.nullProp ",(0,r.jsx)(n.code,{children:"#"})," 42"]}),(0,r.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"*Os valores escalares s\xe3o valores do tipo string, Date, Time, Boolean, number, ou Blob. Quando declarado, seu [valor padr\xe3o] (data-types.md#default-values) n\xe3o \xe9 indefinido nem nulo. Outros tipos (Ponteiro, Imagem, Objecto, Colec\xe7\xe3o) t\xeam valor por defeito indefinido ou nulo. Ex:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $object : Object\nvar $text : Text\n\n//$object = null\n//$text = "" \n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["As compara\xe7\xf5es com os operadores Maior que (",(0,r.jsx)(n.code,{children:">"}),"), Menor que (",(0,r.jsx)(n.code,{children:"<"}),"), Greater than or equal to (",(0,r.jsx)(n.code,{children:">="}),") e Menor que ou igual a (",(0,r.jsx)(n.code,{children:"<="}),") n\xe3o s\xe3o compat\xedveis com valores nulos e retornam um erro."]})}),"\n",(0,r.jsx)(n.h2,{id:"operadores-indefinidos",children:"Operadores indefinidos"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,r.jsx)(n.th,{children:"Sintaxe"}),(0,r.jsx)(n.th,{children:"Retorna"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Igual"}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"="})," Undefined"]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"="})," b.undefinedProp"]}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"="})," Null"]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"="})," c.nullProp"]}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"="})," ",(0,r.jsx)(n.em,{children:"outros valores"})]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"="})," 42"]}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Desigualdade"}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"#"})," Undefined"]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"#"})," b.undefinedProp"]}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"#"})," Null"]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"#"})," b.nullProp"]}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"#"})," ",(0,r.jsx)(n.em,{children:"outros valores"})]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"#"})," 42"]}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Maior que"}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:">"})," string, Date, Time, number"]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:">"}),' "abc"']}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Menor que"}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"<"})," string, Date, Time, number"]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"<"}),' "abc"']}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Maior ou igual a"}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:">="})," string, Date, Time, number"]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:">="}),' "abc"']}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Menor que ou igual a"}),(0,r.jsxs)(n.td,{children:["Undefined ",(0,r.jsx)(n.code,{children:"<="})," string, Date, Time, number"]}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsxs)(n.td,{children:["a.undefinedProp ",(0,r.jsx)(n.code,{children:"<="}),' "abc"']}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"*outros valores s\xe3o express\xf5es de qualquer tipo com um valor nem Indefinido nem Null."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Comparisons of Undefined values with Pointer, Picture, Boolean, Blob, Object, Collection, Undefined or Null values using Greater than (",(0,r.jsx)(n.code,{children:">"}),"), Less than (",(0,r.jsx)(n.code,{children:"<"}),"), Greater than or equal to (",(0,r.jsx)(n.code,{children:">="}),"), and Less than or equal to (",(0,r.jsx)(n.code,{children:"<="}),") operators are not supported and return an error."]})}),"\n",(0,r.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,r.jsxs)(n.p,{children:["Aqui est\xe3o os diferentes resultados do comando ",(0,r.jsx)(n.code,{children:"Undefined"})," e do comando ",(0,r.jsx)(n.code,{children:"Null"})," com propriedades de objeto, dependendo do contexto:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $vEmp : Object\nvar $result : Boolean\n$vEmp:=New object\n$vEmp.name:="Smith"\n\n$vEmp.children:=Null\n \n$result:=Undefined($vEmp.name) //False\n$result:=($vEmp.name=Null) //False\n \n$result:=Undefined($vEmp.children) //False\n$result:=($vEmp.children=Null) //True\n \n$result:=Undefined($vEmp.parent) //True\n$result:=($vEmp.parent=Null) //True\n'})}),"\n",(0,r.jsx)(n.p,{children:"Exemplos de resultados de compara\xe7\xe3o com valores indefinidos e nulos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $result : Boolean\nvar $vObj : Object\nvar $vVar : Variant\n\n$vObj:=New object\n$vObj.null:=Null\n//note that $vVar is not assigned \n\n$result:=($vObj.undefined=42) //False\n$result:=($vObj.undefined=$vObj.null) //True\n$result:=($vObj.undefined=$vVar)  //True\n\n$result:=($vObj.undefined#$vObj.null) //False\n$result:=($vObj.undefined#42) //True\n$result:=($vObj.undefined#$vVar) //False\n\n$result:=($vObj.undefined>"hello") //False\n$result:=($vObj.undefined>$vVar)  //Error\n$result:=($vObj.undefined>$vObj.null)  //Error\n$result:=($vVar < 42) //False\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>i});var r=d(296540);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);