"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7154"],{681e3:function(e,n,d){d.r(n),d.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>o});var l=JSON.parse('{"id":"Concepts/null-undefined","title":"Null e indefinido","description":"Null e Indefinido son tipos de datos que manejan los casos en los que no se conoce el valor de una expresi\xf3n.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Concepts/dt_null_undefined.md","sourceDirName":"Concepts","slug":"/Concepts/null-undefined","permalink":"/docs/es/Concepts/null-undefined","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"null-undefined","title":"Null e indefinido"},"sidebar":"docs","previous":{"title":"Fecha","permalink":"/docs/es/Concepts/date"},"next":{"title":"Number (Real, Integer)","permalink":"/docs/es/Concepts/number"}}'),s=d("785893"),r=d("250065");let i={id:"null-undefined",title:"Null e indefinido"},o=void 0,a={},c=[{value:"Null",id:"null",level:2},{value:"Indefinido",id:"indefinido",level:2},{value:"Operadores Null",id:"operadores-null",level:2},{value:"Operadores indefinidos",id:"operadores-indefinidos",level:2},{value:"Ejemplos",id:"ejemplos",level:2}];function t(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Null e Indefinido son tipos de datos que manejan los casos en los que no se conoce el valor de una expresi\xf3n."}),"\n",(0,s.jsx)(n.h2,{id:"null",children:"Null"}),"\n",(0,s.jsxs)(n.p,{children:["Null es un tipo de datos especial con un solo valor posible: ",(0,s.jsx)(n.strong,{children:"null"}),". Este valor es devuelto por una expresi\xf3n que no contiene ning\xfan valor. Al intentar leer una propiedad de un valor ",(0,s.jsx)(n.strong,{children:"null"})," se produce un error."]}),"\n",(0,s.jsxs)(n.p,{children:["En el lenguaje 4D y para los atributos de los campos de los objetos, los valores nulos se gestionan a trav\xe9s de la funci\xf3n ",(0,s.jsx)(n.code,{children:"Null"}),". Esta funci\xf3n puede utilizarse con las siguientes expresiones para definir o comparar el valor nulo:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"atributos de objetos"}),"\n",(0,s.jsx)(n.li,{children:"elementos de colecciones"}),"\n",(0,s.jsxs)(n.li,{children:["variables de tipo objeto, colecci\xf3n, puntero, imagen o variante (ver tambi\xe9n ",(0,s.jsx)(n.a,{href:"/docs/es/Concepts/data-types#null-as-default-value",children:"Null como valor por defecto"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"indefinido",children:"Indefinido"}),"\n",(0,s.jsxs)(n.p,{children:["Indefinido no es realmente un tipo de datos. Denota una variable que a\xfan no ha sido definida. La evaluaci\xf3n de una propiedad de objeto tambi\xe9n puede producir un valor indefinido. La lectura de una propiedad de valor indefinido devuelve ",(0,s.jsx)(n.strong,{children:"undefined"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Una variable variante tiene ",(0,s.jsx)(n.strong,{children:"undefined"})," como ",(0,s.jsx)(n.a,{href:"/docs/es/Concepts/data-types#default-values",children:"valor por defecto"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Un campo no puede ser indefinido (el comando ",(0,s.jsx)(n.code,{children:"Undefined"})," siempre devuelve False para un campo)."]}),"\n",(0,s.jsx)(n.p,{children:"Normalmente, al intentar leer o asignar expresiones indefinidas, 4D generar\xe1 errores, excepto en los siguientes casos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Asignar un valor indefinido a variables (excepto arrays) tiene el mismo efecto que llamar a ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page89.html",children:(0,s.jsx)(n.code,{children:"CLEAR VARIABLE"})})," con ellas:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"     var $o : Object\n     var $val : Integer\n     $val:=10 //$val=10\n     $val:=$o.a //$o. es indefinido (no hay error) y la asignaci\xf3n de este valor borra la variable\n      //$val=0\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["La asignaci\xf3n de un valor indefinido a una propiedad de objeto existente reinicializa o borra su valor, dependiendo de su tipo:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Objeto, colecci\xf3n, puntero: Null"}),"\n",(0,s.jsx)(n.li,{children:"Imagen: imagen vac\xeda"}),"\n",(0,s.jsx)(n.li,{children:"Booleano: False"}),"\n",(0,s.jsx)(n.li,{children:'Cadena: ""'}),"\n",(0,s.jsx)(n.li,{children:"N\xfamero: 0"}),"\n",(0,s.jsx)(n.li,{children:'Fecha: !00-00-00! Date: !00-00-00! if "Use date type instead of ISO date format in objects" setting is enabled, otherwise ""'}),"\n",(0,s.jsx)(n.li,{children:"Hora: 0 (n\xfamero de ms)"}),"\n",(0,s.jsx)(n.li,{children:"Indefinido, Null: sin cambios"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'     var $o : Object\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"La asignaci\xf3n de un valor indefinido a una propiedad de objeto no existente no hace nada."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Un valor indefinido pasado como par\xe1metro a un m\xe9todo proyecto se convierte autom\xe1ticamente en 0 o "" seg\xfan el tipo de par\xe1metro declarado.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'     var $o : Object\n     mymethod($o.a) //Pasar un par\xe1metro indefinido\n     \n      //En el m\xe9todo mymethod\n     #Declare ($myText : Text) //El tipo de par\xe1metro es texto\n      // $myText contiene ""\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Una expresi\xf3n de condici\xf3n se convierte autom\xe1ticamente en falsa cuando se eval\xfaa a indefinido con las palabras clave If y Case of:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"     var $o : Object\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Cuando se esperan expresiones de un tipo dado en su c\xf3digo 4D, puede asegurarse de que tienen el tipo correcto incluso cuando se eval\xfaan como indefinido rode\xe1ndolas con el comando cast 4D apropiado: ",(0,s.jsx)(n.code,{children:"String"}),", ",(0,s.jsx)(n.code,{children:"Num"}),", ",(0,s.jsx)(n.code,{children:"Date"}),", ",(0,s.jsx)(n.code,{children:"Time"}),", ",(0,s.jsx)(n.code,{children:"Bool"}),". Estos comandos devuelven un valor vac\xedo del tipo especificado cuando la expresi\xf3n se eval\xfaa como indefinida. Por ejemplo:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" $myString:=Lowercase(String($o.a.b)) //asegurarse de obtener un valor de cadena aunque sea indefinido\n  //para evitar errores en el c\xf3digo\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"operadores-null",children:"Operadores Null"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operaci\xf3n"}),(0,s.jsx)(n.th,{children:"Sintaxis"}),(0,s.jsx)(n.th,{children:"Devuelve"}),(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Igual"}),(0,s.jsxs)(n.td,{children:["Null ",(0,s.jsx)(n.code,{children:"="})," Null"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.nullProp ",(0,s.jsx)(n.code,{children:"="})," b.nullProp"]}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Null ",(0,s.jsx)(n.code,{children:"="})," Undefined"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.nullProp ",(0,s.jsx)(n.code,{children:"="})," b.undefinedProp"]}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Null ",(0,s.jsx)(n.code,{children:"="})," ",(0,s.jsx)(n.em,{children:"scalar value"})]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.nullProp ",(0,s.jsx)(n.code,{children:"="})," 42"]}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Desigualdad"}),(0,s.jsxs)(n.td,{children:["Null ",(0,s.jsx)(n.code,{children:"#"})," Null"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.nullProp ",(0,s.jsx)(n.code,{children:"#"})," b.nullProp"]}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Null ",(0,s.jsx)(n.code,{children:"#"})," Undefined"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.nullProp ",(0,s.jsx)(n.code,{children:"#"})," b.undefinedProp"]}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Null ",(0,s.jsx)(n.code,{children:"#"})," ",(0,s.jsx)(n.em,{children:"scalar value"})]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.nullProp ",(0,s.jsx)(n.code,{children:"#"})," 42"]}),(0,s.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Los ",(0,s.jsx)(n.em,{children:"valores escalares"})," son valores de tipo cadena, Fecha, Hora, Booleano, n\xfamero o Blob. Cuando se declaran, su ",(0,s.jsx)(n.a,{href:"/docs/es/Concepts/data-types#default-values",children:"valor por defecto"})," no es ni indefinido ni null. Otros tipos (Puntero, Imagen, Objeto, Colecci\xf3n) tienen un valor por defecto indefinido o null. Ej:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $object : Object\nvar $text : Text\n\n//$object = null\n//$text = "" \n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Las comparaciones con los operadores Mayor que (",(0,s.jsx)(n.code,{children:">"}),"), Menor que (",(0,s.jsx)(n.code,{children:"<"}),"), Greater than or equal to (",(0,s.jsx)(n.code,{children:">="}),") y Menor o igual que (",(0,s.jsx)(n.code,{children:"<="}),") no son soportadas con valores Null y devuelven un error."]})}),"\n",(0,s.jsx)(n.h2,{id:"operadores-indefinidos",children:"Operadores indefinidos"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operaci\xf3n"}),(0,s.jsx)(n.th,{children:"Sintaxis"}),(0,s.jsx)(n.th,{children:"Devuelve"}),(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Igual"}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"="})," Undefined"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"="})," b.undefinedProp"]}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"="})," Null"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"="})," c.nullProp"]}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"="})," ",(0,s.jsx)(n.em,{children:"otros valores"})]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"="})," 42"]}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Desigualdad"}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"#"})," Undefined"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"#"})," b.undefinedProp"]}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"#"})," Null"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"#"})," b.nullProp"]}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"#"})," ",(0,s.jsx)(n.em,{children:"otros valores"})]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"#"})," 42"]}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Mayor que"}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:">"})," string, Date, Time, number"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:">"}),' "abc"']}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Menor que"}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"<"})," string, Date, Time, number"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"<"}),' "abc"']}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Mayor o igual que"}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:">="})," string, Date, Time, number"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:">="}),' "abc"']}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Menor o igual que"}),(0,s.jsxs)(n.td,{children:["Undefined ",(0,s.jsx)(n.code,{children:"<="})," string, Date, Time, number"]}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["a.undefinedProp ",(0,s.jsx)(n.code,{children:"<="}),' "abc"']}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"otros valores"})," son expresiones de todo tipo con un valor ni Undefined ni Null."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Las comparaciones de valores Undefined con valores Pointer, Picture, Boolean, Blob, Object, Collection, Undefined o Null mediante los operadores Mayor que (",(0,s.jsx)(n.code,{children:">"}),"), Menor que (",(0,s.jsx)(n.code,{children:"<"}),"), Mayor o igual que (",(0,s.jsx)(n.code,{children:">="}),") y Menor o igual que (",(0,s.jsx)(n.code,{children:"<="}),") no se admiten y devuelven un error."]})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,s.jsxs)(n.p,{children:["A continuaci\xf3n se muestran los diferentes resultados del comando ",(0,s.jsx)(n.code,{children:"Undefined"})," as\xed como del comando ",(0,s.jsx)(n.code,{children:"Null"})," con propiedades de objetos, dependiendo del contexto:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $vEmp : Object\nvar $result : Boolean\n$vEmp:=New object\n$vEmp.name:="Smith"\n\n$vEmp.children:=Null\n \n$result:=Undefined($vEmp.name) //False\n$result:=($vEmp.name=Null) //False\n \n$result:=Undefined($vEmp.children) //False\n$result:=($vEmp.children=Null) //True\n \n$result:=Undefined($vEmp.parent) //True\n$result:=($vEmp.parent=Null) //True\n'})}),"\n",(0,s.jsx)(n.p,{children:"Ejemplos de resultados de comparaci\xf3n con valores indefinidos y null:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $result : Boolean\nvar $vObj : Object\nvar $vVar : Variant\n\n$vObj:=New object\n$vObj.null:=Null\n//note que $vVar no est\xe1 asignado\n\n$result:=($vObj.undefined=42) //False\n$result:=($vObj.undefined=$vObj.null) //True\n$result:=($vObj.undefined=$vVar)  //True\n\n$result:=($vObj.undefined#$vObj.null) //False\n$result:=($vObj.undefined#42) //True\n$result:=($vObj.undefined#$vVar) //False\n\n$result:=($vObj.undefined>"hello") //False\n$result:=($vObj.undefined>$vVar)  //Error\n$result:=($vObj.undefined>$vObj.null)  //Error\n$result:=($vVar < 42) //False\n\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return i}});var l=d(667294);let s={},r=l.createContext(s);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);