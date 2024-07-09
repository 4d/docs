/*! For license information please see a7e2ef1a.d74a00a8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53881],{578634:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>A,default:()=>l,frontMatter:()=>d,metadata:()=>o,toc:()=>i});var n=a(474848),s=a(28453);const d={id:"string",title:"String"},A=void 0,o={id:"Concepts/string",title:"String",description:"String \xe9 um termo gen\xe9rico que significa:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/dt_string.md",sourceDirName:"Concepts",slug:"/Concepts/string",permalink:"/docs/pt/19/Concepts/string",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_string.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"string",title:"String"},sidebar:"docs",previous:{title:"Ponteiro",permalink:"/docs/pt/19/Concepts/pointer"},next:{title:"Hora",permalink:"/docs/pt/19/Concepts/time"}},c={},i=[{value:"String literals",id:"String-literals",level:2},{value:"Sequ\xeancias de escape",id:"Sequ\xeancias-de-escape",level:3},{value:"Operadores de string",id:"Operadores-de-string",level:2},{value:"Compara\xe7\xf5es de cadeias",id:"Compara\xe7\xf5es-de-cadeias",level:2},{value:"Caractere coringa(@)",id:"Caractere-coringa",level:3},{value:"Palavras-chave",id:"Palavras-chave",level:3},{value:"S\xedmbolos de refer\xeancia de caracteres",id:"S\xedmbolos-de-refer\xeancia-de-caracteres",level:2},{value:"Nota avan\xe7ada sobre a refer\xeancia de car\xe1cter inv\xe1lido",id:"Nota-avan\xe7ada-sobre-a-refer\xeancia-de-car\xe1cter-inv\xe1lido",level:3},{value:"Exemplo",id:"Exemplo",level:3}];function t(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"String \xe9 um termo gen\xe9rico que significa:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Campos ou vari\xe1veis texto: um campo, uma vari\xe1vel ou uma express\xe3o texto pode conter de 0 a 2 GB de texto."}),"\n",(0,n.jsx)(r.li,{children:"Campos alfanum\xe9ricos: um campo alfanum\xe9rico pode conter de 0 a 255 caracteres (limite estabelecido aquando da defini\xe7\xe3o do campo)."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"String-literals",children:"String literals"}),"\n",(0,n.jsx)(r.p,{children:'Uma constante string \xe9 colocada entre aspas duplas e rectas ("..."). Eis alguns exemplos:'}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'"Adicionar registos"\n"N\xe3o foram encontrados registos."\n"Fatura "\n'})}),"\n",(0,n.jsx)(r.p,{children:'Uma cadeia vazia \xe9 especificada por duas aspas sem nada entre elas ("").'}),"\n",(0,n.jsx)(r.h3,{id:"Sequ\xeancias-de-escape",children:"Sequ\xeancias de escape"}),"\n",(0,n.jsx)(r.p,{children:"As seguintes sequ\xeancias de escape podem ser utilizadas em strings de caracteres:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Escape sequence"}),(0,n.jsx)(r.th,{children:"Car\xe1cter substitu\xeddo"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\\n"}),(0,n.jsx)(r.td,{children:"LF (Avan\xe7o de linha)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\\t"}),(0,n.jsx)(r.td,{children:"HT (Tab)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\\r"}),(0,n.jsx)(r.td,{children:"CR (Carriage return)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\\\\"}),(0,n.jsx)(r.td,{children:"\\ (Barra invertida)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:'\\"'}),(0,n.jsx)(r.td,{children:'" (aspas)'})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Nota:"}),' O car\xe1cter \\ (barra invertida) \xe9 utilizado como separador em nomes de caminhos no Windows. Portanto, deve usar uma barra invertida dupla \\\\ em caminhos quando quiser ter uma barra invertida \xe0 frente de um car\xe1cter usado numa das sequ\xeancias de escape reconhecidas pelo 4D (por exemplo, "C:\\\\MyDocuments\\\\New.txt").']}),"\n",(0,n.jsx)(r.h2,{id:"Operadores-de-string",children:"Operadores de string"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Opera\xe7\xe3o"}),(0,n.jsx)(r.th,{children:"Sintaxe"}),(0,n.jsx)(r.th,{children:"Retorna"}),(0,n.jsx)(r.th,{children:"Expression"}),(0,n.jsx)(r.th,{children:"Valor"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Concatena\xe7\xe3o"}),(0,n.jsx)(r.td,{children:"String + String"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:'"abc" + "def"'}),(0,n.jsx)(r.td,{children:'"abcdef"'})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Repeti\xe7\xe3o"}),(0,n.jsx)(r.td,{children:"String * Number"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:'"ab" * 3'}),(0,n.jsx)(r.td,{children:'"ababab"'})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Igual"}),(0,n.jsx)(r.td,{children:"String = String"}),(0,n.jsx)(r.td,{children:"Par\xe2metros"}),(0,n.jsx)(r.td,{children:'"abc" = "abc"'}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:'"abc" = "abd"'}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Desigualdade"}),(0,n.jsx)(r.td,{children:"String # String"}),(0,n.jsx)(r.td,{children:"Par\xe2metros"}),(0,n.jsx)(r.td,{children:'"abc" # "abd"'}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:'"abc" # "abc"'}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Maior que"}),(0,n.jsx)(r.td,{children:"String > String"}),(0,n.jsx)(r.td,{children:"Par\xe2metros"}),(0,n.jsx)(r.td,{children:'"abd" > "abc"'}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:'"abc" > "abc"'}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Menor que"}),(0,n.jsx)(r.td,{children:"String < String"}),(0,n.jsx)(r.td,{children:"Par\xe2metros"}),(0,n.jsx)(r.td,{children:'"abc" < "abd"'}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:'"abc" < "abc"'}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Maior ou igual a"}),(0,n.jsx)(r.td,{children:"String >= String"}),(0,n.jsx)(r.td,{children:"Par\xe2metros"}),(0,n.jsx)(r.td,{children:'"abd" >= "abc"'}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:'"abc" >= "abd"'}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Menor que ou igual a"}),(0,n.jsx)(r.td,{children:"String <= String"}),(0,n.jsx)(r.td,{children:"Par\xe2metros"}),(0,n.jsx)(r.td,{children:'"abc" <= "abd"'}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:'"abd" <= "abc"'}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Cont\xe9m palavra chave"}),(0,n.jsx)(r.td,{children:"String % String"}),(0,n.jsx)(r.td,{children:"Par\xe2metros"}),(0,n.jsx)(r.td,{children:'"Alpha Bravo" % "Bravo"'}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:'"Alpha Bravo" % "ravo"'}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Picture % String"}),(0,n.jsx)(r.td,{children:"Par\xe2metros"}),(0,n.jsx)(r.td,{children:'Picture_expr % "Mer"'}),(0,n.jsx)(r.td,{children:"True (*)"})]})]})]}),"\n",(0,n.jsx)(r.p,{children:'(*) Se a palavra-chave "Mer" estiver associada \xe0 imagem armazenada na express\xe3o de imagem (campo ou vari\xe1vel).'}),"\n",(0,n.jsx)(r.h2,{id:"Compara\xe7\xf5es-de-cadeias",children:"Compara\xe7\xf5es de cadeias"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["As cadeias de caracteres s\xe3o comparadas car\xe1cter a car\xe1cter (exceto no caso da pesquisa por palavras-chave ",(0,n.jsx)(r.a,{href:"/docs/pt/19/Concepts/string#keywords"}),", ver abaixo)."]}),"\n",(0,n.jsxs)(r.li,{children:['Quando as cadeias de caracteres s\xe3o comparadas, o caso dos caracteres \xe9 ignorado; assim, "a"="A" devolve ',(0,n.jsx)(r.code,{children:"TRUE"}),". Para testar se o caso de dois caracteres \xe9 diferente, compare os seus c\xf3digos de caracteres. Por exemplo, a seguinte express\xe3o devolve ",(0,n.jsx)(r.code,{children:"FALSE"}),":"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'Character code("A")=Character code("a") // porque 65 n\xe3o \xe9 igual a 97\n'})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["When strings are compared, diacritical characters are compared using the system character comparison table of your computer. Por exemplo, as seguintes express\xf5es retornam ",(0,n.jsx)(r.code,{children:"TRUE"}),":"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'     "n"="\xf1"\n     "n"="\xd1"\n     "A"="\xe5"\n      // etc.\n'})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Nota:"})," A compara\xe7\xe3o das cadeias de caracteres tem em conta as especificidades da l\xedngua ",(0,n.jsx)(r.strong,{children:"definida para o ficheiro de dados 4D"})," (que nem sempre \xe9 a mesma que a l\xedngua definida para o sistema)."]}),"\n",(0,n.jsx)(r.h3,{id:"Caractere-coringa",children:"Caractere coringa(@)"}),"\n",(0,n.jsxs)(r.p,{children:["A linguagem 4D suporta ",(0,n.jsx)(r.strong,{children:"@"})," como um caractere curinga. Este car\xe1cter pode ser utilizado em qualquer compara\xe7\xe3o de cadeia para corresponder a qualquer n\xfamero de caracteres. Por exemplo, a seguinte express\xe3o \xe9 ",(0,n.jsx)(r.code,{children:"TRUE"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'"abcdefghij"="abc@"\n'})}),"\n",(0,n.jsxs)(r.p,{children:["O car\xe1cter wildcard deve ser utilizado dentro do segundo operando (a cadeia do lado direito) para corresponder a qualquer n\xfamero de caracteres. A seguinte express\xe3o \xe9 ",(0,n.jsx)(r.code,{children:"FALSE"}),", porque o @ \xe9 considerado apenas como um car\xe1cter no primeiro operando:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'    "abc@"="abcdefghij"\n'})}),"\n",(0,n.jsxs)(r.p,{children:['O wildcard significa "um ou mais caracteres ou nada". As seguintes express\xf5es s\xe3o ',(0,n.jsx)(r.code,{children:"TRUE"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'     "abcdefghij"="abcdefghij@"\n     "abcdefghij"="@abcdefghij"\n     "abcdefghij"="abcd@efghij"\n     "abcdefghij"="@abcdefghij@"\n     "abcdefghij"="@abcde@fghij@"\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Por outro lado, seja qual for o caso, uma compara\xe7\xe3o de cadeias de caracteres com dois wildcards consecutivos devolver\xe1 sempre ",(0,n.jsx)(r.code,{children:"FALSE"}),". A seguinte express\xe3o \xe9 ",(0,n.jsx)(r.code,{children:"FALSE"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'"abcdefghij"="abc@@fg"\n'})}),"\n",(0,n.jsx)(r.p,{children:"Quando o operador de compara\xe7\xe3o \xe9 ou cont\xe9m um s\xedmbolo < or >, s\xf3 \xe9 suportada a compara\xe7\xe3o com um \xfanico car\xe1cter universal localizado no final do operando:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'     "abcd"<="abc@" // Compara\xe7\xe3o v\xe1lida\n     "abcd"<="abc@ef" //N\xe3o \xe9 uma compara\xe7\xe3o v\xe1lida\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Se quiser executar compara\xe7\xf5es ou consultas utilizando @ como um car\xe1cter (e n\xe3o como um coringa), tem de utilizar a instru\xe7\xe3o ",(0,n.jsx)(r.code,{children:"Character code(At sign)"})," . Imagine, por exemplo, que quer saber se uma cadeia de caracteres termina com o car\xe1cter @. A express\xe3o seguinte (se $vsValue n\xe3o estiver vazia) \xe9 sempre ",(0,n.jsx)(r.code,{children:"TRUE"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'($vsValue[[Length($vsValue)]]="@")\n'})}),"\n",(0,n.jsx)(r.p,{children:"A seguinte express\xe3o ser\xe1 avaliada correctamente:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"(Character code($vsValue[[Length($vsValue)]])#64)  \n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Nota:"})," A op\xe7\xe3o 4D no ambiente de Design permite-lhe definir a forma como o car\xe1cter @ \xe9 interpretado quando \xe9 inclu\xeddo numa cadeia de caracteres."]}),"\n",(0,n.jsx)(r.h3,{id:"Palavras-chave",children:"Palavras-chave"}),"\n",(0,n.jsxs)(r.p,{children:['Ao contr\xe1rio de outras compara\xe7\xf5es de cadeias, a pesquisa por palavras-chave procura "palavras" em "textos": as palavras s\xe3o consideradas individualmente e como um todo. O operador ',(0,n.jsx)(r.strong,{children:"%"})," devolve sempre ",(0,n.jsx)(r.code,{children:"Falso"}),' se a consulta disser respeito a v\xe1rias palavras ou apenas a parte de uma palavra (por exemplo, uma s\xedlaba). As "palavras" s\xe3o cadeias de caracteres rodeadas por "separadores", que s\xe3o espa\xe7os e caracteres de pontua\xe7\xe3o e tra\xe7os. Um ap\xf3strofo, como em "Today\'s", \xe9 normalmente considerado como parte da palavra, mas ser\xe1 ignorado em certos casos (ver as regras abaixo). Os n\xfameros podem ser pesquisados porque s\xe3o avaliados como um todo (incluindo s\xedmbolos decimais). Outros s\xedmbolos (moeda, temperatura, etc.) ser\xe3o ignorados.']}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'     "Alpha Bravo Charlie"%"Bravo"// Retorna True\n     "Alpha Bravo Charlie"%"vo" // Retorna False\n     "Alpha Bravo Charlie"%"Alpha Bravo"// Retorna False\n     "Alpha,Bravo,Charlie"%"Alpha" // Retorna True\n     "Software e Computadores"%"comput@" // Retorna True\n'})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Notas:"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["4D usa a biblioteca ICU para comparar strings (usando ",(0,n.jsx)(r.code,{children:"<>=#"})," operadores) e detetar palavras-chave. Para mais informa\xe7\xf5es sobre as regras aplicadas, consultar o seguinte endere\xe7o: ",(0,n.jsx)(r.a,{href:"http://www.unicode.org/reports/tr29/#Word_Boundaries",children:"http://www.unicode.org/reports/tr29/#Word_Boundaries"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Na vers\xe3o japonesa, em vez de ICU, 4D usa Mecab por defeito para detectar palavras-chave."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"S\xedmbolos-de-refer\xeancia-de-caracteres",children:"S\xedmbolos de refer\xeancia de caracteres"}),"\n",(0,n.jsx)(r.p,{children:"Os s\xedmbolos de refer\xeancia dos caracteres: [[...]]"}),"\n",(0,n.jsx)(r.p,{children:"Estes s\xedmbolos s\xe3o utilizados para se referir a um \xfanico car\xe1cter numa cadeia de caracteres. Esta sintaxe permite-lhe endere\xe7ar individualmente os caracteres de uma vari\xe1vel de texto, de uma vari\xe1vel de cadeia de caracteres ou de um campo."}),"\n",(0,n.jsx)(r.p,{children:"Se os s\xedmbolos de refer\xeancia de car\xe1cter aparecerem no lado esquerdo do operador de atribui\xe7\xe3o (:=), \xe9 atribu\xeddo um car\xe1cter \xe0 posi\xe7\xe3o referenciada na cadeia. Por exemplo, se vsName n\xe3o for uma cadeia de caracteres vazia, a linha seguinte define o primeiro car\xe1cter de vsName como mai\xfasculo:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'If(vsName#"")\n    vsName[[1]]:=Uppercase(vsName[[1]])\nEnd if\n'})}),"\n",(0,n.jsx)(r.p,{children:"Caso contr\xe1rio, se os s\xedmbolos de refer\xeancia de caracteres aparecerem numa express\xe3o, devolvem o car\xe1cter (a que se referem) como uma cadeia de 1 car\xe1cter. Por exemplo:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'//O exemplo a seguir testa se o \xfaltimo caractere de vtText \xe9 um sinal de At "@"\n If(vtText#"")\n    If(Character code(Substring(vtText;Length(vtText);1))=At sign)\n  //...\n    End if\n End if\n\n  //Using the character reference syntax, you would write in a simpler manner:\n If(vtText#"")\n    If(Character code(vtText[[Length(vtText)]])=At sign)\n  // ...\n    End if\n End if\n'})}),"\n",(0,n.jsx)(r.h3,{id:"Nota-avan\xe7ada-sobre-a-refer\xeancia-de-car\xe1cter-inv\xe1lido",children:"Nota avan\xe7ada sobre a refer\xeancia de car\xe1cter inv\xe1lido"}),"\n",(0,n.jsx)(r.p,{children:"Quando utiliza os s\xedmbolos de refer\xeancia de caracteres, deve endere\xe7ar os caracteres existentes na cadeia da mesma forma que endere\xe7a os elementos existentes de uma matriz. Por exemplo, se endere\xe7ar o 20\xba car\xe1cter de uma vari\xe1vel de cadeia, esta vari\xe1vel DEVE conter pelo menos 20 caracteres."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Se n\xe3o o fizer, no modo interpretado, n\xe3o causa um erro de sintaxe."}),"\n",(0,n.jsx)(r.li,{children:"Se n\xe3o o fizer, em modo compilado (sem op\xe7\xf5es), pode levar \xe0 corrup\xe7\xe3o da mem\xf3ria, se, por exemplo, escrever um car\xe1cter para al\xe9m do fim de uma cadeia ou de um texto."}),"\n",(0,n.jsx)(r.li,{children:"Se n\xe3o o fizer, no modo compilado, causa um erro com a op\xe7\xe3o Range Checking On. Por exemplo, executando o seguinte c\xf3digo:"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'//Voisas muito m\xe1s e desagrad\xe1veis a fazer, boo!\n vsAnyText:=""\n vsAnyText[[1]]:="A"\n'})}),"\n",(0,n.jsx)(r.p,{children:"accionar\xe1 o erro de tempo de execu\xe7\xe3o mostrado aqui:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"alt-text",src:a(898896).A+"",width:"642",height:"332"})}),"\n",(0,n.jsx)(r.h3,{id:"Exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(r.p,{children:"O seguinte m\xe9todo de projeto capitaliza o primeiro car\xe1cter de cada palavra do texto recebido como par\xe2metro e devolve o texto capitalizado resultante:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'  //M\xe9todo projecto Capitalize_text\n  //Capitalize_text ( Text ) -> Text\n  //Capitalize_text ( Source text ) -> Capitalized text\n\n $0:=$1\n $vlLen:=Length($0)\n If($vlLen>0)\n    $0[[1]]:=Uppercase($0[[1]])\n    For($vlChar;1;$vlLen-1)\n       If(Position($0[[$vlChar]];" !&()-{}:;<>?/,.=+*")>0)\n          $0[[$vlChar+1]]:=Uppercase($0[[$vlChar+1]])\n       End if\n    End for\n End if\n'})}),"\n",(0,n.jsx)(r.p,{children:"Por exemplo, a linha:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'ALERT(Capitalize_text("hello, my name is jane doe and i\'m running for president!"))\n'})}),"\n",(0,n.jsx)(r.p,{children:"mostra o alerta aqui mostrado:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"alt-text",src:a(674973).A+"",width:"512",height:"282"})})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},221020:(e,r,a)=>{var n=a(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,a){var n,d={},i=null,t=null;for(n in void 0!==a&&(i=""+a),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(t=r.ref),r)A.call(r,n)&&!c.hasOwnProperty(n)&&(d[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===d[n]&&(d[n]=r[n]);return{$$typeof:s,type:e,key:i,ref:t,props:d,_owner:o.current}}r.Fragment=d,r.jsx=i,r.jsxs=i},474848:(e,r,a)=>{e.exports=a(221020)},674973:(e,r,a)=>{a.d(r,{A:()=>n});const n="data:image/png;base64,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"},898896:(e,r,a)=>{a.d(r,{A:()=>n});const n=a.p+"assets/images/Syntax_Error.en-9839a6b23f8e4a167fb902c93d5e8c08.png"},28453:(e,r,a)=>{a.d(r,{R:()=>A,x:()=>o});var n=a(296540);const s={},d=n.createContext(s);function A(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:A(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);