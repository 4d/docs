"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4778"],{24973:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>a,contentTitle:()=>t});var r=JSON.parse('{"id":"Concepts/number","title":"Number (Real, Integer)","description":"N\xfamero es un t\xe9rmino gen\xe9rico que significa:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Concepts/dt_number.md","sourceDirName":"Concepts","slug":"/Concepts/number","permalink":"/docs/es/20-R7/Concepts/number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"number","title":"Number (Real, Integer)"},"sidebar":"docs","previous":{"title":"Null e indefinido","permalink":"/docs/es/20-R7/Concepts/null-undefined"},"next":{"title":"Object","permalink":"/docs/es/20-R7/Concepts/object"}}'),d=s("785893"),i=s("250065");let l={id:"number",title:"Number (Real, Integer)"},t=void 0,o={},a=[{value:"Constantes literales num\xe9ricas",id:"constantes-literales-num\xe9ricas",level:2},{value:"Operadores num\xe9ricos",id:"operadores-num\xe9ricos",level:2},{value:"M\xf3dulo",id:"m\xf3dulo",level:3},{value:"Divisi\xf3n entera",id:"divisi\xf3n-entera",level:3},{value:"Comparaci\xf3n real",id:"comparaci\xf3n-real",level:3},{value:"Prioridad",id:"prioridad",level:3},{value:"Operadores de bits",id:"operadores-de-bits",level:2},{value:"Notas",id:"notas",level:4},{value:"Ejemplos",id:"ejemplos",level:3}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"N\xfamero es un t\xe9rmino gen\xe9rico que significa:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Los campos, variables o expresiones de tipo real. El rango del tipo Real es \xb11,7e\xb1308 (13 d\xedgitos significativos)."}),"\n",(0,d.jsxs)(n.li,{children:["Variable o expresi\xf3n entera. The range for the Integer data type is -2^31..(2^31)-1 (4-byte Integer, aka ",(0,d.jsx)(n.em,{children:"Long"})," or ",(0,d.jsx)(n.em,{children:"Longint"}),")."]}),"\n"]}),"\n",(0,d.jsxs)(n.admonition,{title:"Compatibilidad",type:"info",children:[(0,d.jsxs)(n.p,{children:["Usually when working with Integers, you handle ",(0,d.jsx)(n.em,{children:"Long"})," values (4-byte Integer). However, there are two cases where Integers are stored as ",(0,d.jsx)(n.em,{children:"Shorts"})," values (2-byte Integer), i.e. in the range -32,768..32,767 (2^15..(2^15)-1):"]}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Database fields with ",(0,d.jsx)(n.code,{children:"Integer"})," type,"]}),"\n",(0,d.jsxs)(n.li,{children:["Elements of arrays declared with ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/array-integer",children:(0,d.jsx)(n.code,{children:"ARRAY INTEGER"})}),"."]}),"\n"]}),(0,d.jsxs)(n.p,{children:["These legacy data types are automatically converted in ",(0,d.jsx)(n.em,{children:"Longs"})," when used in the 4D Language."]})]}),"\n",(0,d.jsx)(n.p,{children:"Puede asignar cualquier tipo de dato num\xe9rico a otro; 4D realiza la conversi\xf3n, truncando o redondeando si es necesario. Sin embargo, cuando los valores est\xe1n fuera del rango, la conversi\xf3n no devolver\xe1 un valor v\xe1lido. You can mix number data types in expressions."}),"\n",(0,d.jsx)(n.h2,{id:"constantes-literales-num\xe9ricas",children:"Constantes literales num\xe9ricas"}),"\n",(0,d.jsx)(n.p,{children:"Una constante literal num\xe9rica se escribe como un n\xfamero real. Estos son algunos ejemplos de constantes num\xe9ricas:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"27\n123.76\n0.0076\n"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:'El separador decimal por defecto es el punto (.), independientemente del lenguaje del sistema. Si ha marcado la opci\xf3n "Utilizar la configuraci\xf3n regional del sistema" en la p\xe1gina de M\xe9todos de las Preferencias, debe utilizar el separador definido en su sistema.'}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Los n\xfameros negativos se especifican con el signo menos (-). Por ejemplo:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"-27\n-123.76\n-0.0076\n"})}),"\n",(0,d.jsx)(n.h2,{id:"operadores-num\xe9ricos",children:"Operadores num\xe9ricos"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Operaci\xf3n"}),(0,d.jsx)(n.th,{children:"Sintaxis"}),(0,d.jsx)(n.th,{children:"Devuelve"}),(0,d.jsx)(n.th,{children:"Expression"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Adici\xf3n"}),(0,d.jsx)(n.td,{children:"N\xfamero + N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"2 + 3"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resta"}),(0,d.jsx)(n.td,{children:"N\xfamero - N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"3 \u2013 2"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Multiplicaci\xf3n"}),(0,d.jsx)(n.td,{children:"N\xfamero * N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"5 * 2"}),(0,d.jsx)(n.td,{children:"10"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Divisi\xf3n"}),(0,d.jsx)(n.td,{children:"N\xfamero / N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"5 / 2"}),(0,d.jsx)(n.td,{children:"2.5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Divisi\xf3n entera"}),(0,d.jsx)(n.td,{children:"N\xfamero \\ N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"5 \\ 2"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"M\xf3dulo"}),(0,d.jsx)(n.td,{children:"N\xfamero % N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"5 % 2"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Exponenciaci\xf3n"}),(0,d.jsx)(n.td,{children:"N\xfamero ^ N\xfamero"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"2 ^ 3"}),(0,d.jsx)(n.td,{children:"8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Igual"}),(0,d.jsx)(n.td,{children:"N\xfamero = N\xfamero"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"10 = 10"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"10 = 11"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Desigualdad"}),(0,d.jsx)(n.td,{children:"N\xfamero # N\xfamero"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"10 #11"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"10 # 10"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Mayor que"}),(0,d.jsx)(n.td,{children:"N\xfamero > N\xfamero"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"11 > 10"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"10 > 11"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Menor que"}),(0,d.jsx)(n.td,{children:"N\xfamero < N\xfamero"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"10 < 11"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"11 < 10"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Mayor o igual que"}),(0,d.jsx)(n.td,{children:"N\xfamero >= N\xfamero"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"11 >= 10"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"10 >= 11"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Menor o igual que"}),(0,d.jsx)(n.td,{children:"N\xfamero <= N\xfamero"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"10 <= 11"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"11 <= 10"}),(0,d.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"m\xf3dulo",children:"M\xf3dulo"}),"\n",(0,d.jsx)(n.p,{children:"El operador modulo % divide el primer n\xfamero entre el segundo y devuelve un resto de n\xfamero entero. He aqu\xed algunos ejemplos:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"10 % 2 devuelve 0 porque 10 est\xe1 dividido uniformemente por 2."}),"\n",(0,d.jsx)(n.li,{children:"10 % 3 devuelve 1 porque el resto es 1."}),"\n",(0,d.jsx)(n.li,{children:"10,5 % 2 devuelve 0 porque el resto no es un n\xfamero entero."}),"\n"]}),"\n",(0,d.jsx)(n.admonition,{type:"warning",children:(0,d.jsxs)(n.p,{children:["El operador modulo % devuelve valores significativos con n\xfameros que est\xe1n en el rango de los enteros largos (de \u20132^31 hasta 2^31 menos 1). Para calcular el m\xf3dulo con n\xfameros fuera de este rango, utilice el comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/mod",children:(0,d.jsx)(n.code,{children:"Mod"})}),"."]})}),"\n",(0,d.jsx)(n.h3,{id:"divisi\xf3n-entera",children:"Divisi\xf3n entera"}),"\n",(0,d.jsx)(n.p,{children:"El operador de divisi\xf3n entero largo \\ devuelve valores significativos s\xf3lo con n\xfameros enteros."}),"\n",(0,d.jsx)(n.h3,{id:"comparaci\xf3n-real",children:"Comparaci\xf3n real"}),"\n",(0,d.jsxs)(n.p,{children:["Para comparar dos reales por igualdad, el lenguaje 4D realmente compara el valor absoluto de la diferencia con el ",(0,d.jsx)(n.em,{children:"\xe9psilon"}),". Ver el comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-real-comparison-level",children:(0,d.jsx)(n.code,{children:"SET REAL COMPARISON LEVEL"})}),"."]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["Por coherencia, el motor de base de datos 4D siempre compara los campos de base de datos de tipo real utilizando un valor de 10^-6 para ",(0,d.jsx)(n.em,{children:"epsilon"})," y no tiene en cuenta el ajuste ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-real-comparison-level",children:(0,d.jsx)(n.code,{children:"SET REAL COMPARISON LEVEL"})}),"."]})}),"\n",(0,d.jsx)(n.h3,{id:"prioridad",children:"Prioridad"}),"\n",(0,d.jsx)(n.p,{children:"El orden en que se eval\xfaa una expresi\xf3n se llama prioridad. 4D tiene una precedencia estricta de izquierda a derecha, en la que no se aplica el orden algebraico. Por ejemplo:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:" 3+4*5\n"})}),"\n",(0,d.jsx)(n.p,{children:"devuelve 35, porque la expresi\xf3n se eval\xfaa como 3 + 4, dando como resultado 7, que luego se multiplica por 5, con el resultado final de 35."}),"\n",(0,d.jsx)(n.p,{children:"Para anular la precedencia de izquierda a derecha, DEBE utilizar par\xe9ntesis. Por ejemplo:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:" 3+(4*5)\n"})}),"\n",(0,d.jsx)(n.p,{children:"devuelve 23 porque la expresi\xf3n (4 * 5) se eval\xfaa primero, debido a los par\xe9ntesis. El resultado es 20, que se suma a 3 para el resultado final de 23."}),"\n",(0,d.jsx)(n.p,{children:"Los par\xe9ntesis pueden anidarse dentro de otros conjuntos de par\xe9ntesis. Aseg\xfarese de que cada par\xe9ntesis de la izquierda tenga un par\xe9ntesis de la derecha que coincida para garantizar la evaluaci\xf3n correcta de las expresiones. La falta o el uso incorrecto de los par\xe9ntesis puede provocar resultados inesperados o expresiones no v\xe1lidas. Adem\xe1s, si pretende compilar sus aplicaciones, debe tener par\xe9ntesis coincidentes: el compilador detecta la falta de par\xe9ntesis como un error de sintaxis."}),"\n",(0,d.jsx)(n.h2,{id:"operadores-de-bits",children:"Operadores de bits"}),"\n",(0,d.jsx)(n.p,{children:"The bitwise operators operates on (Long) Integers expressions or values."}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"If you pass a (Short) Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long value before calculating the expression that uses the bitwise operator."}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"While using the bitwise operators, you must think about a Long value as an array of 32 bits. Los bits est\xe1n numerados de 0 a 31, de derecha a izquierda."}),"\n",(0,d.jsxs)(n.p,{children:["Dado que cada bit puede ser igual a 0 o 1, tambi\xe9n se puede pensar en un valor Entero largo como un valor en el que se pueden almacenar 32 valores booleanos. A bit equal to 1 means ",(0,d.jsx)(n.strong,{children:"True"})," and a bit equal to 0 means ",(0,d.jsx)(n.strong,{children:"False"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"An expression that uses a bitwise operator returns a Long value, except for the Bit Test operator, where the expression returns a Boolean value. La siguiente tabla lista los operadores a nivel de bits y su sintaxis:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Operaci\xf3n"}),(0,d.jsx)(n.th,{children:"Operador"}),(0,d.jsx)(n.th,{children:"Sintaxis"}),(0,d.jsx)(n.th,{children:"Devuelve"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Y"}),(0,d.jsx)(n.td,{children:"&"}),(0,d.jsx)(n.td,{children:"Long & Long"}),(0,d.jsx)(n.td,{children:"Long"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"O (inclusive)"}),(0,d.jsx)(n.td,{children:"&#124"}),(0,d.jsx)(n.td,{children:"Long | Long"}),(0,d.jsx)(n.td,{children:"Long"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"O (exclusivo)"}),(0,d.jsx)(n.td,{children:"^ &#124"}),(0,d.jsx)(n.td,{children:"Long ^ | Long"}),(0,d.jsx)(n.td,{children:"Long"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Left Bit Shift"}),(0,d.jsx)(n.td,{children:"<<"}),(0,d.jsx)(n.td,{children:"Long << Long"}),(0,d.jsx)(n.td,{children:"Long (ver nota 1)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Right Bit Shift"}),(0,d.jsx)(n.td,{children:"> >"}),(0,d.jsx)(n.td,{children:"Long >> Long"}),(0,d.jsx)(n.td,{children:"Long (ver nota 1)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bit Set"}),(0,d.jsx)(n.td,{children:"?+"}),(0,d.jsx)(n.td,{children:"Long ?+ Long"}),(0,d.jsx)(n.td,{children:"Long (ver nota 2)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Poner el bit en 0"}),(0,d.jsx)(n.td,{children:"?-"}),(0,d.jsx)(n.td,{children:"Long ?- Long"}),(0,d.jsx)(n.td,{children:"Long (ver nota 2)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Probar bit"}),(0,d.jsx)(n.td,{children:"??"}),(0,d.jsx)(n.td,{children:"Long ?? Long Long"}),(0,d.jsx)(n.td,{children:"Boolean (ver nota 2)"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"notas",children:"Notas"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["For the ",(0,d.jsx)(n.code,{children:"Left Bit Shift"})," and ",(0,d.jsx)(n.code,{children:"Right Bit Shift"})," operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Por lo tanto, este segundo operando debe estar entre 0 y 31. Tenga en cuenta, sin embargo, que el desplazamiento de 0 devuelve un valor sin cambios y el desplazamiento de m\xe1s de 31 bits devuelve 0x00000000 porque todos los bits se pierden. Si se pasa otro valor como segundo operando, el resultado no es significativo."]}),"\n",(0,d.jsxs)(n.li,{children:["For the ",(0,d.jsx)(n.code,{children:"Bit Set"}),", ",(0,d.jsx)(n.code,{children:"Bit Clear"})," and ",(0,d.jsx)(n.code,{children:"Bit Test"})," operations , the second operand indicates the number of the bit on which to act. Por lo tanto, este segundo operando debe estar entre 0 y 31; de lo contrario, el resultado de la expresi\xf3n no es significativo."]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"La siguiente tabla lista los operadores a nivel de bits y sus efectos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Operaci\xf3n"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Y"}),(0,d.jsx)(n.td,{children:"Cada bit resultante es el resultado de la operaci\xf3n AND l\xf3gica aplicada a los bits de los dos operandos. Cada bit resultante es el resultado de la operaci\xf3n AND l\xf3gica aplicada a los bits de los dos operandos."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"O (inclusive)"}),(0,d.jsxs)(n.td,{children:["Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:",(0,d.jsx)(n.li,{children:"1 \\"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"O (exclusivo)"}),(0,d.jsxs)(n.td,{children:["Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:",(0,d.jsx)(n.li,{children:"1 ^ \\"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Left Bit Shift"}),(0,d.jsxs)(n.td,{children:["El valor resultante se ajusta al valor del primer operando, luego los bits resultantes se desplazan a la izquierda el n\xfamero de posiciones indicado por el segundo operando. Los bits de la izquierda se pierden y los nuevos bits de la derecha se ponen en 0. ",(0,d.jsx)(n.strong,{children:"Note:"})," Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Right Bit Shift"}),(0,d.jsxs)(n.td,{children:["El valor resultante se ajusta al valor del primer operando, luego los bits resultantes se desplazan a la derecha el n\xfamero de posici\xf3n indicado por el segundo operando. The bits on the right are lost and the new bits on the left are set to 0.",(0,d.jsx)(n.strong,{children:"Note:"})," Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bit Set"}),(0,d.jsx)(n.td,{children:"El valor resultante se establece en el valor del primer operando, luego el bit resultante, cuyo n\xfamero es indicado por el segundo operando, se coloca en 1. Los dem\xe1s bits no se modifican."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Poner el bit en 0"}),(0,d.jsx)(n.td,{children:"El valor resultante se establece en el valor del primer operando, luego el bit resultante, cuyo n\xfamero es indicado por el segundo operando, se coloca en 0. Los dem\xe1s bits no se modifican."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Probar bit"}),(0,d.jsx)(n.td,{children:"Devuelve True si, en el primer operando, el bit cuyo n\xfamero indica el segundo operando es igual a 1. Devuelve False si, en el primer operando, el bit cuyo n\xfamero indica el segundo operando es igual a 0."})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"ejemplos",children:"Ejemplos"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Operaci\xf3n"}),(0,d.jsx)(n.th,{children:"Ejemplo"}),(0,d.jsx)(n.th,{children:"Result"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Y"}),(0,d.jsx)(n.td,{children:"0x0000FFFF & 0xFF00FF00"}),(0,d.jsx)(n.td,{children:"0x0000FF00"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"O (inclusive)"}),(0,d.jsx)(n.td,{children:"0x0000FFFF | 0xFF00FF00"}),(0,d.jsx)(n.td,{children:"0xFF00FFFF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"O (exclusivo)"}),(0,d.jsx)(n.td,{children:"0x0000FFFF ^ | 0xFF00FF00"}),(0,d.jsx)(n.td,{children:"0xFF0000FF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Left Bit Shift"}),(0,d.jsx)(n.td,{children:"0x0000FFFF << 8"}),(0,d.jsx)(n.td,{children:"0x00FFFF00"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Right Bit Shift"}),(0,d.jsx)(n.td,{children:"0x0000FFFF >> 8"}),(0,d.jsx)(n.td,{children:"0x000000FF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bit Set"}),(0,d.jsx)(n.td,{children:"0x00000000 ?+ 16"}),(0,d.jsx)(n.td,{children:"0x00010000"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Poner el bit en 0"}),(0,d.jsx)(n.td,{children:"0x00010000 ?- 16"}),(0,d.jsx)(n.td,{children:"0x00000000"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Probar bit"}),(0,d.jsx)(n.td,{children:"0x00010000 ?? 16 16"}),(0,d.jsx)(n.td,{children:"True"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var r=s(667294);let d={},i=r.createContext(d);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);