"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34939"],{869352:function(e,n,r){r.r(n),r.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"Concepts/number","title":"N\xfamero (Real, Longint, Integer)","description":"N\xfamero \xe9 um termo gen\xe9rico que significa:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Concepts/dt_number.md","sourceDirName":"Concepts","slug":"/Concepts/number","permalink":"/docs/pt/20/Concepts/number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_number.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"number","title":"N\xfamero (Real, Longint, Integer)"},"sidebar":"docs","previous":{"title":"Null e indefinido","permalink":"/docs/pt/20/Concepts/null-undefined"},"next":{"title":"Object","permalink":"/docs/pt/20/Concepts/object"}}'),o=r("785893"),d=r("250065");let i={id:"number",title:"N\xfamero (Real, Longint, Integer)"},t=void 0,a={},l=[{value:"N\xfameros literais",id:"n\xfameros-literais",level:2},{value:"Operadores de n\xfameros",id:"operadores-de-n\xfameros",level:2},{value:"M\xf3dulo",id:"m\xf3dulo",level:3},{value:"Divis\xe3o inteira",id:"divis\xe3o-inteira",level:3},{value:"Compara\xe7\xe3o real",id:"compara\xe7\xe3o-real",level:3},{value:"Preced\xeancia",id:"preced\xeancia",level:3},{value:"Operadores Bitwise",id:"operadores-bitwise",level:2},{value:"Notas",id:"notas",level:4},{value:"Exemplos",id:"exemplos",level:3}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"N\xfamero \xe9 um termo gen\xe9rico que significa:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Campo real, vari\xe1vel ou express\xe3o. O intervalo para o tipo de dados Real \xe9 de \xb11,7e\xb1308 (13 d\xedgitos significativos)."}),"\n",(0,o.jsx)(n.li,{children:"Campo Inteiro Longo, vari\xe1vel ou express\xe3o. O intervalo para o tipo de dados Long Integer (4-byte Integer) \xe9 -2^31...(2^31)-1."}),"\n",(0,o.jsx)(n.li,{children:"Campo inteiro, array ou express\xe3o. O intervalo para o tipo de dados Integer (Inteiro 2 bytes) \xe9 -32.768...32.767(2^15...(2^25)-1)."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," Valores de campo inteiro s\xe3o automaticamente convertidos em inteiros longos quando usados na linguagem 4D."]}),"\n",(0,o.jsx)(n.p,{children:"Pode atribuir qualquer tipo de dados Number a outro; 4D faz a convers\xe3o, truncagem ou arredondamento, se necess\xe1rio. No entanto, quando os valores estiverem fora do intervalo, a convers\xe3o n\xe3o retornar\xe1 um valor v\xe1lido. Pode misturar tipos de dados num\xe9ricos em express\xf5es."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," No manual de Refer\xeancia de Idioma 4D, n\xe3o importa o tipo de dado real, a Real, Inteiro, e par\xe2metros longos de n\xfameros inteiros nas descri\xe7\xf5es de comandos s\xe3o indicados como n\xfamero, exceto quando marcados de outra forma."]}),"\n",(0,o.jsx)(n.h2,{id:"n\xfameros-literais",children:"N\xfameros literais"}),"\n",(0,o.jsx)(n.p,{children:"Uma constante literal num\xe9rica \xe9 escrita como um n\xfamero real. Aqui est\xe3o alguns exemplos de constantes num\xe9ricas:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"27\n123.76\n0.0076\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:'O separador decimal padr\xe3o \xe9 um ponto (.), independente do idioma do sistema. Se voc\xea marcou a op\xe7\xe3o "Usar configura\xe7\xf5es regionais do sistema" na P\xe1gina de M\xe9todos das Prefer\xeancias, voc\xea deve usar o separador definido no seu sistema.'}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"N\xfameros negativos s\xe3o especificados com o sinal de menos (-). Por exemplo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"-27\n-123.76\n-0.0076\n"})}),"\n",(0,o.jsx)(n.h2,{id:"operadores-de-n\xfameros",children:"Operadores de n\xfameros"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,o.jsx)(n.th,{children:"Sintaxe"}),(0,o.jsx)(n.th,{children:"Retorna"}),(0,o.jsx)(n.th,{children:"Expression"}),(0,o.jsx)(n.th,{children:"Valor"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Adi\xe7\xe3o"}),(0,o.jsx)(n.td,{children:"N\xfamero + N\xfamero"}),(0,o.jsx)(n.td,{children:"Number"}),(0,o.jsx)(n.td,{children:"2 + 3"}),(0,o.jsx)(n.td,{children:"5"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Subtra\xe7\xe3o"}),(0,o.jsx)(n.td,{children:"N\xfamero - N\xfamero"}),(0,o.jsx)(n.td,{children:"Number"}),(0,o.jsx)(n.td,{children:"3 \u2013 2"}),(0,o.jsx)(n.td,{children:"1"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Multiplica\xe7\xe3o"}),(0,o.jsx)(n.td,{children:"N\xfamero * N\xfamero"}),(0,o.jsx)(n.td,{children:"Number"}),(0,o.jsx)(n.td,{children:"5 * 2"}),(0,o.jsx)(n.td,{children:"10"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Divis\xe3o"}),(0,o.jsx)(n.td,{children:"N\xfamero / N\xfamero"}),(0,o.jsx)(n.td,{children:"Number"}),(0,o.jsx)(n.td,{children:"5 / 2"}),(0,o.jsx)(n.td,{children:"2.5"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Divis\xe3o inteira"}),(0,o.jsx)(n.td,{children:"N\xfamero \\ N\xfamero"}),(0,o.jsx)(n.td,{children:"Number"}),(0,o.jsx)(n.td,{children:"5 \\ 2"}),(0,o.jsx)(n.td,{children:"2"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"M\xf3dulo"}),(0,o.jsx)(n.td,{children:"N\xfamero % N\xfamero"}),(0,o.jsx)(n.td,{children:"Number"}),(0,o.jsx)(n.td,{children:"5 % 2"}),(0,o.jsx)(n.td,{children:"1"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Exponencia\xe7\xe3o"}),(0,o.jsx)(n.td,{children:"N\xfamero ^ N\xfamero"}),(0,o.jsx)(n.td,{children:"Number"}),(0,o.jsx)(n.td,{children:"2 ^ 3"}),(0,o.jsx)(n.td,{children:"8"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Igual"}),(0,o.jsx)(n.td,{children:"N\xfamero = N\xfamero"}),(0,o.jsx)(n.td,{children:"Par\xe2metros"}),(0,o.jsx)(n.td,{children:"10 = 10"}),(0,o.jsx)(n.td,{children:"True"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"10 = 11"}),(0,o.jsx)(n.td,{children:"False"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Desigualdade"}),(0,o.jsx)(n.td,{children:"N\xfamero # N\xfamero"}),(0,o.jsx)(n.td,{children:"Par\xe2metros"}),(0,o.jsx)(n.td,{children:"10 #11"}),(0,o.jsx)(n.td,{children:"True"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"10 # 10"}),(0,o.jsx)(n.td,{children:"False"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Maior que"}),(0,o.jsx)(n.td,{children:"Number > Number"}),(0,o.jsx)(n.td,{children:"Par\xe2metros"}),(0,o.jsx)(n.td,{children:"11 > 10"}),(0,o.jsx)(n.td,{children:"True"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"10 > 11"}),(0,o.jsx)(n.td,{children:"False"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Menor que"}),(0,o.jsx)(n.td,{children:"Number < Number"}),(0,o.jsx)(n.td,{children:"Par\xe2metros"}),(0,o.jsx)(n.td,{children:"10 < 11"}),(0,o.jsx)(n.td,{children:"True"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"11 < 10"}),(0,o.jsx)(n.td,{children:"False"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Maior ou igual a"}),(0,o.jsx)(n.td,{children:"Number >= Number"}),(0,o.jsx)(n.td,{children:"Par\xe2metros"}),(0,o.jsx)(n.td,{children:"11 >= 10"}),(0,o.jsx)(n.td,{children:"True"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"10 >= 11"}),(0,o.jsx)(n.td,{children:"False"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Menor que ou igual a"}),(0,o.jsx)(n.td,{children:"Number <= Number"}),(0,o.jsx)(n.td,{children:"Par\xe2metros"}),(0,o.jsx)(n.td,{children:"10 <= 11"}),(0,o.jsx)(n.td,{children:"True"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"11 <= 10"}),(0,o.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"m\xf3dulo",children:"M\xf3dulo"}),"\n",(0,o.jsx)(n.p,{children:"O operador do m\xf3dulo % divide o primeiro n\xfamero pelo segundo n\xfamero e devolve um n\xfamero inteiro restante. Aqui est\xe3o alguns exemplos:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"10 % 2 retorna 0 porque 10 \xe9 dividido uniformemente por 2."}),"\n",(0,o.jsx)(n.li,{children:"10 % 3 devolve 1 porque o resto \xe9 1."}),"\n",(0,o.jsx)(n.li,{children:"10,5% 2 devolve 0 porque o resto n\xe3o \xe9 um n\xfamero inteiro."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["O operador do m\xf3dulo % devolve valores significativos com n\xfameros que se encontram na gama do Long Integer (de menos 2^31 a 2^31 menos um). Para calcular o m\xf3dulo com n\xfameros fora desse intervalo, use o comando [",(0,o.jsx)(n.code,{children:"Mod"}),"(",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page98.html",children:"https://doc.4d.com/4dv20/help/command/en/page98.html"}),")]."]})}),"\n",(0,o.jsx)(n.h3,{id:"divis\xe3o-inteira",children:"Divis\xe3o inteira"}),"\n",(0,o.jsx)(n.p,{children:"O operador da divis\xe3o de longint retorna valores significativos apenas com n\xfameros inteiros."}),"\n",(0,o.jsx)(n.h3,{id:"compara\xe7\xe3o-real",children:"Compara\xe7\xe3o real"}),"\n",(0,o.jsxs)(n.p,{children:["Para comparar dois reais por igualdade, a linguagem 4D realmente compara o valor absoluto da diferen\xe7a com ",(0,o.jsx)(n.em,{children:"epsilon"}),". Veja o comando ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page623.html",children:(0,o.jsx)(n.code,{children:"SET REAL COMPARISON LEVEL"})}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Para consist\xeancia, o mecanismo de banco de dados 4D sempre compara os campos do banco de dados do tipo real usando um valor 10^-6 para ",(0,o.jsx)(n.em,{children:"epsilon"})," e n\xe3o leva o par\xe2metro ",(0,o.jsx)(n.code,{children:"SET REAL COMPARISON LEVEL"})," definindo em conta."]})}),"\n",(0,o.jsx)(n.h3,{id:"preced\xeancia",children:"Preced\xeancia"}),"\n",(0,o.jsx)(n.p,{children:"A ordem pela qual uma express\xe3o \xe9 avaliada \xe9 chamada preced\xeancia. 4D tem uma estrita preced\xeancia da esquerda para a direita, na qual a ordem alg\xe9brica n\xe3o \xe9 observada. Por exemplo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" 3+4*5\n"})}),"\n",(0,o.jsx)(n.p,{children:"retorna 35, porque a express\xe3o \xe9 avaliada como 3 + 4, produzindo 7, que \xe9 depois multiplicada por 5, com o resultado final de 35."}),"\n",(0,o.jsx)(n.p,{children:"Para anular a preced\xeancia da esquerda para a direita, DEVE usar par\xeanteses. Por exemplo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" 3+(4*5)\n"})}),"\n",(0,o.jsx)(n.p,{children:"retorna 23 porque a express\xe3o (4 * 5) \xe9 avaliada em primeiro lugar, por causa dos par\xeanteses. O resultado \xe9 20, que \xe9 depois adicionado a 3 para o resultado final de 23."}),"\n",(0,o.jsx)(n.p,{children:"Os par\xeanteses podem ser aninhados dentro de outros conjuntos de par\xeanteses. Certifique-se de que cada par\xeantese esquerdo tem um par\xeantese direito correspondente para assegurar uma avalia\xe7\xe3o adequada das express\xf5es. A falta ou utiliza\xe7\xe3o incorrecta de par\xeanteses pode causar resultados inesperados ou express\xf5es inv\xe1lidas. Al\xe9m disso, se pretende compilar as suas candidaturas, deve ter par\xeanteses correspondentes - o compilador detecta um par\xeantese em falta como um erro de sintaxe."}),"\n",(0,o.jsx)(n.h2,{id:"operadores-bitwise",children:"Operadores Bitwise"}),"\n",(0,o.jsxs)(n.p,{children:["Os operadores bitwise operam em ",(0,o.jsx)(n.strong,{children:"Long Integer"})," express\xf5es ou valores."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Se passar um valor Inteiro ou Real a um operador bitwise, 4D avalia o valor como um valor Long Integer antes de calcular a express\xe3o que utiliza o operador bitwise."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Ao utilizar os operadores bitwise, deve pensar num valor Long Integer como um array de 32 bits. Os bits s\xe3o numerados de 0 a 31, da direita para a esquerda."}),"\n",(0,o.jsxs)(n.p,{children:["J\xe1 que cada bit pode ser igual a 0 ou 1, tamb\xe9m se pode pensar num valor Long Integer como um valor onde se pode armazenar 32 valores booleanos. Um bit igual a 1 significa ",(0,o.jsx)(n.strong,{children:"True"})," e um bit igual a 0 significa ",(0,o.jsx)(n.strong,{children:"False"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Uma express\xe3o que utilizar um operador Bitwise retorna um valor Long Integer, exceto para o operador Bit Test, onde a express\xe3o retorna um valor Booleano. A tabela a seguir lista os operadores bitwise e sua sintaxe:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,o.jsx)(n.th,{children:"Operador"}),(0,o.jsx)(n.th,{children:"Sintaxe"}),(0,o.jsx)(n.th,{children:"Retorna"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bitwise AND"}),(0,o.jsx)(n.td,{children:"&"}),(0,o.jsx)(n.td,{children:"Long & Long"}),(0,o.jsx)(n.td,{children:"Long"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"OU (inclusive)"}),(0,o.jsx)(n.td,{children:"|"}),(0,o.jsx)(n.td,{children:"Long | Long"}),(0,o.jsx)(n.td,{children:"Long"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bitwise OR (exclusivo)"}),(0,o.jsx)(n.td,{children:"^ |"}),(0,o.jsx)(n.td,{children:"Long ^ | Long"}),(0,o.jsx)(n.td,{children:"Long"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Left Bit Shift"}),(0,o.jsx)(n.td,{children:"<<"}),(0,o.jsx)(n.td,{children:"Long << Long"}),(0,o.jsx)(n.td,{children:"Long (ver nota 1)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Right Bit Shift"}),(0,o.jsx)(n.td,{children:">>"}),(0,o.jsx)(n.td,{children:"Long >> Long"}),(0,o.jsx)(n.td,{children:"Long (ver nota 1)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bit Set"}),(0,o.jsx)(n.td,{children:"?+"}),(0,o.jsx)(n.td,{children:"Long ?+ Long"}),(0,o.jsx)(n.td,{children:"Long (ver nota 2)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bit Clear"}),(0,o.jsx)(n.td,{children:"?-"}),(0,o.jsx)(n.td,{children:"Long ?- Long"}),(0,o.jsx)(n.td,{children:"Long (ver nota 2)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bit Test"}),(0,o.jsx)(n.td,{children:"??"}),(0,o.jsx)(n.td,{children:"Long ?? Long"}),(0,o.jsx)(n.td,{children:"Boolean (ver nota 2)"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"notas",children:"Notas"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Para as opera\xe7\xf5es ",(0,o.jsx)(n.code,{children:"Left Bit Shift"})," e ",(0,o.jsx)(n.code,{children:"Right Bit Shift"})," , o segundo operador indica o n\xfamero de posi\xe7\xf5es pelas quais os bits do primeiro operador ser\xe3o deslocados no valor resultante. Portanto, este segundo operador deve estar entre 0 e 31. Note-se, no entanto, que o deslocamento por 0 retorna um valor inalterado e o deslocamento por mais de 31 bits retorna 0x00000000 porque todos os bits s\xe3o perdidos. Se passar outro valor como segundo operando, o resultado n\xe3o \xe9 significativo."]}),"\n",(0,o.jsxs)(n.li,{children:["Para o conjunto de bits ``, ",(0,o.jsx)(n.code,{children:"Bit Clear"})," e ",(0,o.jsx)(n.code,{children:"Bit Test"})," opera\xe7\xf5es , o segundo operando indica o n\xfamero do bit sobre o qual se deve agir. Portanto, este segundo operador deve situar-se entre 0 e 31; caso contr\xe1rio, o resultado da express\xe3o n\xe3o \xe9 significativo."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"O quadro seguinte lista os operadores bitwise e os seus efeitos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bitwise AND"}),(0,o.jsxs)(n.td,{children:["Cada bit resultante \xe9 o E l\xf3gico dos bits nos dois operandos. Aqui est\xe1 a tabela l\xf3gica AND:",(0,o.jsx)(n.li,{children:"1 & 1 --\x3e 1"}),(0,o.jsx)(n.li,{children:"0 & 1 --\x3e 0"}),(0,o.jsx)(n.li,{children:"1 & 0 --\x3e 0"}),(0,o.jsx)(n.li,{children:"0 & 0 --\x3e 0"}),"Em outras palavras, o bit resultante ser\xe1 1 se os dois bits do operando forem 1; caso contr\xe1rio, o bit resultante ser\xe1 0."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"OU (inclusive)"}),(0,o.jsxs)(n.td,{children:["Cada bit resultante \xe9 o OR l\xf3gico dos bits nos dois operands. Aqui est\xe1 a tabela l\xf3gica OR:",(0,o.jsx)(n.li,{children:"1 | 1 --\x3e 1"}),(0,o.jsx)(n.li,{children:"0 | 1 --\x3e 1"}),(0,o.jsx)(n.li,{children:"1 | 0 --\x3e 1"}),(0,o.jsx)(n.li,{children:"0 | 0 --\x3e 0"}),"Em outras palavras, o bit resultante \xe9 1 se pelo menos um dos dois bits do operando for 1; caso contr\xe1rio, o bit resultante \xe9 0."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bitwise OR (exclusivo)"}),(0,o.jsxs)(n.td,{children:["Cada bit resultante \xe9 o XOR l\xf3gico dos bits nos dois operandos. Aqui est\xe1 a tabela XOR l\xf3gica:",(0,o.jsx)(n.li,{children:"1 ^ | 1 --\x3e 0"}),(0,o.jsx)(n.li,{children:"0 ^ | 1 --\x3e 1"}),(0,o.jsx)(n.li,{children:"1 ^ | 0 --\x3e 1"}),(0,o.jsx)(n.li,{children:"0 ^ | 0 --\x3e 0"}),"Em outras palavras, o bit resultante \xe9 1 se apenas um dos dois bits do operando for 1; caso contr\xe1rio, o bit resultante \xe9 0."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Left Bit Shift"}),(0,o.jsxs)(n.td,{children:["O valor resultante \xe9 definido como o valor do primeiro operando e, em seguida, os bits resultantes s\xe3o deslocados para a esquerda pelo n\xfamero de posi\xe7\xf5es indicado pelo segundo operando. Os bits \xe0 esquerda s\xe3o perdidos e os novos bits \xe0 direita s\xe3o estabelecidos como 0. ",(0,o.jsx)(n.strong,{children:"Nota:"})," Considerando apenas valores positivos, deslocar-se para a esquerda por N bits \xe9 o mesmo que multiplicar por 2^N."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Right Bit Shift"}),(0,o.jsxs)(n.td,{children:["O valor resultante \xe9 definido como o valor do primeiro operando e, em seguida, os bits resultantes s\xe3o deslocados para a direita pelo n\xfamero de posi\xe7\xf5es indicado pelo segundo operando. Os bits \xe0 direita s\xe3o perdidos e os novos bits \xe0 esquerda s\xe3o definidos como 0.",(0,o.jsx)(n.strong,{children:"Nota:"})," Considerando apenas valores positivos, deslocar N bits para a direita \xe9 o mesmo que dividir por 2^N."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bit Set"}),(0,o.jsx)(n.td,{children:"O valor resultante \xe9 definido como o valor do primeiro operando e, em seguida, o bit resultante, cujo n\xfamero \xe9 indicado pelo segundo operando, \xe9 definido como 1. Os outros bits permanecem inalterados."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bit Clear"}),(0,o.jsx)(n.td,{children:"O valor resultante \xe9 definido como o valor do primeiro operando e, em seguida, o bit resultante, cujo n\xfamero \xe9 indicado pelo segundo operando, \xe9 definido como 0. Os outros bits permanecem inalterados."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bit Test"}),(0,o.jsx)(n.td,{children:"Retorna True se, no primeiro operando, o bit cujo n\xfamero \xe9 indicado pelo segundo operando for igual a 1. Retorna False se, no primeiro operando, o bit cujo n\xfamero \xe9 indicado pelo segundo operando for igual a 0."})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"exemplos",children:"Exemplos"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,o.jsx)(n.th,{children:"Exemplo"}),(0,o.jsx)(n.th,{children:"Resultados"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bitwise AND"}),(0,o.jsx)(n.td,{children:"0x0000FFFF & 0xFF00FF00"}),(0,o.jsx)(n.td,{children:"0x0000FF00"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"OU (inclusive)"}),(0,o.jsx)(n.td,{children:"0x0000FFFF | 0xFF00FF00"}),(0,o.jsx)(n.td,{children:"0xFF00FFFF"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bitwise OR (exclusivo)"}),(0,o.jsx)(n.td,{children:"0x0000FFFF ^ | 0xFF00FF00"}),(0,o.jsx)(n.td,{children:"0xFF0000FF"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Left Bit Shift"}),(0,o.jsx)(n.td,{children:"0x0000FFFF << 8"}),(0,o.jsx)(n.td,{children:"0x00FFFF00"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Right Bit Shift"}),(0,o.jsx)(n.td,{children:"0x0000FFFF >> 8"}),(0,o.jsx)(n.td,{children:"0x000000FF"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bit Set"}),(0,o.jsx)(n.td,{children:"0x00000000 ?+ 16"}),(0,o.jsx)(n.td,{children:"0x00010000"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bit Clear"}),(0,o.jsx)(n.td,{children:"0x00010000 ?- 16"}),(0,o.jsx)(n.td,{children:"0x00000000"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bit Test"}),(0,o.jsx)(n.td,{children:"0x00010000 ?? 16"}),(0,o.jsx)(n.td,{children:"True"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return i}});var s=r(667294);let o={},d=s.createContext(o);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);