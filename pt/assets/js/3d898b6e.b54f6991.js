"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9202"],{919206:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>t});var r=JSON.parse('{"id":"Concepts/number","title":"Number (Real, Integer)","description":"N\xfamero \xe9 um termo gen\xe9rico que significa:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Concepts/dt_number.md","sourceDirName":"Concepts","slug":"/Concepts/number","permalink":"/docs/pt/Concepts/number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"number","title":"Number (Real, Integer)"},"sidebar":"docs","previous":{"title":"Null e indefinido","permalink":"/docs/pt/Concepts/null-undefined"},"next":{"title":"Object","permalink":"/docs/pt/Concepts/object"}}'),i=s("785893"),d=s("250065");let t={id:"number",title:"Number (Real, Integer)"},o=void 0,l={},a=[{value:"N\xfameros literais",id:"n\xfameros-literais",level:2},{value:"Operadores de n\xfameros",id:"operadores-de-n\xfameros",level:2},{value:"M\xf3dulo",id:"m\xf3dulo",level:3},{value:"Divis\xe3o inteira",id:"divis\xe3o-inteira",level:3},{value:"Compara\xe7\xe3o real",id:"compara\xe7\xe3o-real",level:3},{value:"Preced\xeancia",id:"preced\xeancia",level:3},{value:"Operadores Bitwise",id:"operadores-bitwise",level:2},{value:"Notas",id:"notas",level:4},{value:"Exemplos",id:"exemplos",level:3}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"N\xfamero \xe9 um termo gen\xe9rico que significa:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Campo real, vari\xe1vel ou express\xe3o. O intervalo para o tipo de dados Real \xe9 de \xb11,7e\xb1308 (13 d\xedgitos significativos)."}),"\n",(0,i.jsxs)(n.li,{children:["Integer variable or expression. The range for the Integer data type is -2^31..(2^31)-1 (4-byte Integer, aka ",(0,i.jsx)(n.em,{children:"Long"})," or ",(0,i.jsx)(n.em,{children:"Longint"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"Compatibidade",type:"info",children:[(0,i.jsxs)(n.p,{children:["Usually when working with Integers, you handle ",(0,i.jsx)(n.em,{children:"Long"})," values (4-byte Integer). However, there are two cases where Integers are stored as ",(0,i.jsx)(n.em,{children:"Shorts"})," values (2-byte Integer), i.e. in the range -32,768..32,767 (2^15..(2^15)-1):"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Database fields with ",(0,i.jsx)(n.code,{children:"Integer"})," type,"]}),"\n",(0,i.jsxs)(n.li,{children:["Elements of arrays declared with ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/array-integer",children:(0,i.jsx)(n.code,{children:"ARRAY INTEGER"})}),"."]}),"\n"]}),(0,i.jsxs)(n.p,{children:["These legacy data types are automatically converted in ",(0,i.jsx)(n.em,{children:"Longs"})," when used in the 4D Language."]})]}),"\n",(0,i.jsx)(n.p,{children:"Pode atribuir qualquer tipo de dados Number a outro; 4D faz a convers\xe3o, truncagem ou arredondamento, se necess\xe1rio. No entanto, quando os valores estiverem fora do intervalo, a convers\xe3o n\xe3o retornar\xe1 um valor v\xe1lido. You can mix number data types in expressions."}),"\n",(0,i.jsx)(n.h2,{id:"n\xfameros-literais",children:"N\xfameros literais"}),"\n",(0,i.jsx)(n.p,{children:"Uma constante literal num\xe9rica \xe9 escrita como um n\xfamero real. Aqui est\xe3o alguns exemplos de constantes num\xe9ricas:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"27\n123.76\n0.0076\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'O separador decimal padr\xe3o \xe9 um ponto (.), independente do idioma do sistema. Se voc\xea marcou a op\xe7\xe3o "Usar configura\xe7\xf5es regionais do sistema" na P\xe1gina de M\xe9todos das Prefer\xeancias, voc\xea deve usar o separador definido no seu sistema.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"N\xfameros negativos s\xe3o especificados com o sinal de menos (-). Por exemplo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"-27\n-123.76\n-0.0076\n"})}),"\n",(0,i.jsx)(n.h2,{id:"operadores-de-n\xfameros",children:"Operadores de n\xfameros"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,i.jsx)(n.th,{children:"Sintaxe"}),(0,i.jsx)(n.th,{children:"Retorna"}),(0,i.jsx)(n.th,{children:"Expression"}),(0,i.jsx)(n.th,{children:"Valor"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Adi\xe7\xe3o"}),(0,i.jsx)(n.td,{children:"N\xfamero + N\xfamero"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"2 + 3"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Subtra\xe7\xe3o"}),(0,i.jsx)(n.td,{children:"N\xfamero - N\xfamero"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"3 \u2013 2"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Multiplica\xe7\xe3o"}),(0,i.jsx)(n.td,{children:"N\xfamero * N\xfamero"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"5 * 2"}),(0,i.jsx)(n.td,{children:"10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Divis\xe3o"}),(0,i.jsx)(n.td,{children:"N\xfamero / N\xfamero"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"5 / 2"}),(0,i.jsx)(n.td,{children:"2.5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Divis\xe3o inteira"}),(0,i.jsx)(n.td,{children:"N\xfamero \\ N\xfamero"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"5 \\ 2"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"M\xf3dulo"}),(0,i.jsx)(n.td,{children:"N\xfamero % N\xfamero"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"5 % 2"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Exponencia\xe7\xe3o"}),(0,i.jsx)(n.td,{children:"N\xfamero ^ N\xfamero"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"2 ^ 3"}),(0,i.jsx)(n.td,{children:"8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Igual"}),(0,i.jsx)(n.td,{children:"N\xfamero = N\xfamero"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"}),(0,i.jsx)(n.td,{children:"10 = 10"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10 = 11"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Desigualdade"}),(0,i.jsx)(n.td,{children:"N\xfamero # N\xfamero"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"}),(0,i.jsx)(n.td,{children:"10 #11"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10 # 10"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Maior que"}),(0,i.jsx)(n.td,{children:"Number > Number"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"}),(0,i.jsx)(n.td,{children:"11 > 10"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10 > 11"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Menor que"}),(0,i.jsx)(n.td,{children:"Number < Number"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"}),(0,i.jsx)(n.td,{children:"10 < 11"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"11 < 10"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Maior ou igual a"}),(0,i.jsx)(n.td,{children:"Number >= Number"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"}),(0,i.jsx)(n.td,{children:"11 >= 10"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"10 >= 11"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Menor que ou igual a"}),(0,i.jsx)(n.td,{children:"Number <= Number"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"}),(0,i.jsx)(n.td,{children:"10 <= 11"}),(0,i.jsx)(n.td,{children:"True"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"11 <= 10"}),(0,i.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"m\xf3dulo",children:"M\xf3dulo"}),"\n",(0,i.jsx)(n.p,{children:"O operador do m\xf3dulo % divide o primeiro n\xfamero pelo segundo n\xfamero e devolve um n\xfamero inteiro restante. Aqui est\xe3o alguns exemplos:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"10 % 2 retorna 0 porque 10 \xe9 dividido uniformemente por 2."}),"\n",(0,i.jsx)(n.li,{children:"10 % 3 devolve 1 porque o resto \xe9 1."}),"\n",(0,i.jsx)(n.li,{children:"10,5% 2 devolve 0 porque o resto n\xe3o \xe9 um n\xfamero inteiro."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["O operador do m\xf3dulo % devolve valores significativos com n\xfameros que se encontram na gama do Long Integer (de menos 2^31 a 2^31 menos um). Para calcular o m\xf3dulo com n\xfameros fora desse intervalo, use o comando ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/mod",children:(0,i.jsx)(n.code,{children:"Mod"})}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"divis\xe3o-inteira",children:"Divis\xe3o inteira"}),"\n",(0,i.jsx)(n.p,{children:"O operador da divis\xe3o de longint retorna valores significativos apenas com n\xfameros inteiros."}),"\n",(0,i.jsx)(n.h3,{id:"compara\xe7\xe3o-real",children:"Compara\xe7\xe3o real"}),"\n",(0,i.jsxs)(n.p,{children:["To compare two reals for equality, the 4D language actually compares the absolute value of the difference with ",(0,i.jsx)(n.em,{children:"epsilon"}),". Consulte o comando ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/set-real-comparison-level",children:(0,i.jsx)(n.code,{children:"SET REAL COMPARISON LEVEL"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For consistency, the 4D database engine always compares database fields of the real type using a 10^-6 value for ",(0,i.jsx)(n.em,{children:"epsilon"})," and does not take the ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/set-real-comparison-level",children:(0,i.jsx)(n.code,{children:"SET REAL COMPARISON LEVEL"})})," setting into account."]})}),"\n",(0,i.jsx)(n.h3,{id:"preced\xeancia",children:"Preced\xeancia"}),"\n",(0,i.jsx)(n.p,{children:"A ordem pela qual uma express\xe3o \xe9 avaliada \xe9 chamada preced\xeancia. 4D tem uma estrita preced\xeancia da esquerda para a direita, na qual a ordem alg\xe9brica n\xe3o \xe9 observada. Por exemplo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" 3+4*5\n"})}),"\n",(0,i.jsx)(n.p,{children:"retorna 35, porque a express\xe3o \xe9 avaliada como 3 + 4, produzindo 7, que \xe9 depois multiplicada por 5, com o resultado final de 35."}),"\n",(0,i.jsx)(n.p,{children:"Para anular a preced\xeancia da esquerda para a direita, DEVE usar par\xeanteses. Por exemplo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" 3+(4*5)\n"})}),"\n",(0,i.jsx)(n.p,{children:"retorna 23 porque a express\xe3o (4 * 5) \xe9 avaliada em primeiro lugar, por causa dos par\xeanteses. O resultado \xe9 20, que \xe9 depois adicionado a 3 para o resultado final de 23."}),"\n",(0,i.jsx)(n.p,{children:"Os par\xeanteses podem ser aninhados dentro de outros conjuntos de par\xeanteses. Certifique-se de que cada par\xeantese esquerdo tem um par\xeantese direito correspondente para assegurar uma avalia\xe7\xe3o adequada das express\xf5es. A falta ou utiliza\xe7\xe3o incorrecta de par\xeanteses pode causar resultados inesperados ou express\xf5es inv\xe1lidas. Al\xe9m disso, se pretende compilar as suas candidaturas, deve ter par\xeanteses correspondentes - o compilador detecta um par\xeantese em falta como um erro de sintaxe."}),"\n",(0,i.jsx)(n.h2,{id:"operadores-bitwise",children:"Operadores Bitwise"}),"\n",(0,i.jsx)(n.p,{children:"The bitwise operators operates on (Long) Integers expressions or values."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"If you pass a (Short) Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long value before calculating the expression that uses the bitwise operator."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"While using the bitwise operators, you must think about a Long value as an array of 32 bits. Os bits s\xe3o numerados de 0 a 31, da direita para a esquerda."}),"\n",(0,i.jsxs)(n.p,{children:["J\xe1 que cada bit pode ser igual a 0 ou 1, tamb\xe9m se pode pensar num valor Long Integer como um valor onde se pode armazenar 32 valores booleanos. A bit equal to 1 means ",(0,i.jsx)(n.strong,{children:"True"})," and a bit equal to 0 means ",(0,i.jsx)(n.strong,{children:"False"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"An expression that uses a bitwise operator returns a Long value, except for the Bit Test operator, where the expression returns a Boolean value. A tabela a seguir lista os operadores bitwise e sua sintaxe:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,i.jsx)(n.th,{children:"Operador"}),(0,i.jsx)(n.th,{children:"Sintaxe"}),(0,i.jsx)(n.th,{children:"Retorna"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bitwise AND"}),(0,i.jsx)(n.td,{children:"&"}),(0,i.jsx)(n.td,{children:"Long & Long"}),(0,i.jsx)(n.td,{children:"Long"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OU (inclusive)"}),(0,i.jsx)(n.td,{children:"&#124"}),(0,i.jsx)(n.td,{children:"Long | Long"}),(0,i.jsx)(n.td,{children:"Long"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bitwise OR (exclusivo)"}),(0,i.jsx)(n.td,{children:"^ &#124"}),(0,i.jsx)(n.td,{children:"Long ^ | Long"}),(0,i.jsx)(n.td,{children:"Long"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Left Bit Shift"}),(0,i.jsx)(n.td,{children:"<<"}),(0,i.jsx)(n.td,{children:"Long << Long"}),(0,i.jsx)(n.td,{children:"Long (ver nota 1)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Right Bit Shift"}),(0,i.jsx)(n.td,{children:"> >"}),(0,i.jsx)(n.td,{children:"Long >> Long"}),(0,i.jsx)(n.td,{children:"Long (ver nota 1)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bit Set"}),(0,i.jsx)(n.td,{children:"?+"}),(0,i.jsx)(n.td,{children:"Long ?+ Long"}),(0,i.jsx)(n.td,{children:"Long (ver nota 2)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bit Clear"}),(0,i.jsx)(n.td,{children:"?-"}),(0,i.jsx)(n.td,{children:"Long ?- Long"}),(0,i.jsx)(n.td,{children:"Long (ver nota 2)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bit Test"}),(0,i.jsx)(n.td,{children:"??"}),(0,i.jsx)(n.td,{children:"Long ?? Long"}),(0,i.jsx)(n.td,{children:"Boolean (ver nota 2)"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"notas",children:"Notas"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["For the ",(0,i.jsx)(n.code,{children:"Left Bit Shift"})," and ",(0,i.jsx)(n.code,{children:"Right Bit Shift"})," operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Portanto, este segundo operador deve estar entre 0 e 31. Note-se, no entanto, que o deslocamento por 0 retorna um valor inalterado e o deslocamento por mais de 31 bits retorna 0x00000000 porque todos os bits s\xe3o perdidos. Se passar outro valor como segundo operando, o resultado n\xe3o \xe9 significativo."]}),"\n",(0,i.jsxs)(n.li,{children:["For the ",(0,i.jsx)(n.code,{children:"Bit Set"}),", ",(0,i.jsx)(n.code,{children:"Bit Clear"})," and ",(0,i.jsx)(n.code,{children:"Bit Test"})," operations , the second operand indicates the number of the bit on which to act. Portanto, este segundo operador deve situar-se entre 0 e 31; caso contr\xe1rio, o resultado da express\xe3o n\xe3o \xe9 significativo."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"O quadro seguinte lista os operadores bitwise e os seus efeitos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bitwise AND"}),(0,i.jsxs)(n.td,{children:["Cada bit resultante \xe9 o E l\xf3gico dos bits nos dois operandos. Here is the logical AND table:",(0,i.jsx)(n.li,{children:"1 & 1 --\x3e 1"}),(0,i.jsx)(n.li,{children:"0 & 1 --\x3e 0"}),(0,i.jsx)(n.li,{children:"1 & 0 --\x3e 0"}),(0,i.jsx)(n.li,{children:"0 & 0 --\x3e 0"}),"In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OU (inclusive)"}),(0,i.jsxs)(n.td,{children:["Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:",(0,i.jsx)(n.li,{children:"1 | 1 --\x3e 1"}),(0,i.jsx)(n.li,{children:"0 | 1 --\x3e 1"}),(0,i.jsx)(n.li,{children:"1 | 0 --\x3e 1"}),(0,i.jsx)(n.li,{children:"0 | 0 --\x3e 0"}),"In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bitwise OR (exclusivo)"}),(0,i.jsxs)(n.td,{children:["Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:",(0,i.jsx)(n.li,{children:"1 ^ | 1 --\x3e 0"}),(0,i.jsx)(n.li,{children:"0 ^ | 1 --\x3e 1"}),(0,i.jsx)(n.li,{children:"1 ^ | 0 --\x3e 1"}),(0,i.jsx)(n.li,{children:"0 ^ | 0 --\x3e 0"}),"In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Left Bit Shift"}),(0,i.jsxs)(n.td,{children:["O valor resultante \xe9 definido como o valor do primeiro operando e, em seguida, os bits resultantes s\xe3o deslocados para a esquerda pelo n\xfamero de posi\xe7\xf5es indicado pelo segundo operando. Os bits \xe0 esquerda s\xe3o perdidos e os novos bits \xe0 direita s\xe3o estabelecidos como 0. ",(0,i.jsx)(n.strong,{children:"Note:"})," Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Right Bit Shift"}),(0,i.jsxs)(n.td,{children:["O valor resultante \xe9 definido como o valor do primeiro operando e, em seguida, os bits resultantes s\xe3o deslocados para a direita pelo n\xfamero de posi\xe7\xf5es indicado pelo segundo operando. The bits on the right are lost and the new bits on the left are set to 0.",(0,i.jsx)(n.strong,{children:"Note:"})," Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bit Set"}),(0,i.jsx)(n.td,{children:"O valor resultante \xe9 definido como o valor do primeiro operando e, em seguida, o bit resultante, cujo n\xfamero \xe9 indicado pelo segundo operando, \xe9 definido como 1. Os outros bits permanecem inalterados."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bit Clear"}),(0,i.jsx)(n.td,{children:"O valor resultante \xe9 definido como o valor do primeiro operando e, em seguida, o bit resultante, cujo n\xfamero \xe9 indicado pelo segundo operando, \xe9 definido como 0. Os outros bits permanecem inalterados."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bit Test"}),(0,i.jsx)(n.td,{children:"Retorna True se, no primeiro operando, o bit cujo n\xfamero \xe9 indicado pelo segundo operando for igual a 1. Retorna False se, no primeiro operando, o bit cujo n\xfamero \xe9 indicado pelo segundo operando for igual a 0."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"exemplos",children:"Exemplos"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,i.jsx)(n.th,{children:"Exemplo"}),(0,i.jsx)(n.th,{children:"Resultados"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bitwise AND"}),(0,i.jsx)(n.td,{children:"0x0000FFFF & 0xFF00FF00"}),(0,i.jsx)(n.td,{children:"0x0000FF00"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OU (inclusive)"}),(0,i.jsx)(n.td,{children:"0x0000FFFF | 0xFF00FF00"}),(0,i.jsx)(n.td,{children:"0xFF00FFFF"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bitwise OR (exclusivo)"}),(0,i.jsx)(n.td,{children:"0x0000FFFF ^ | 0xFF00FF00"}),(0,i.jsx)(n.td,{children:"0xFF0000FF"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Left Bit Shift"}),(0,i.jsx)(n.td,{children:"0x0000FFFF << 8"}),(0,i.jsx)(n.td,{children:"0x00FFFF00"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Right Bit Shift"}),(0,i.jsx)(n.td,{children:"0x0000FFFF >> 8"}),(0,i.jsx)(n.td,{children:"0x000000FF"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bit Set"}),(0,i.jsx)(n.td,{children:"0x00000000 ?+ 16"}),(0,i.jsx)(n.td,{children:"0x00010000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bit Clear"}),(0,i.jsx)(n.td,{children:"0x00010000 ?- 16"}),(0,i.jsx)(n.td,{children:"0x00000000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bit Test"}),(0,i.jsx)(n.td,{children:"0x00010000 ?? 16"}),(0,i.jsx)(n.td,{children:"True"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var r=s(667294);let i={},d=r.createContext(i);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);