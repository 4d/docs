"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49646"],{378380:function(e,a,r){r.r(a),r.d(a,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-text-keywords","title":"GET TEXT KEYWORDS","description":"GET TEXT KEYWORDS ( texto ; arrPalavrasChaves {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-text-keywords.md","sourceDirName":"commands-legacy","slug":"/commands/get-text-keywords","permalink":"/docs/pt/commands/get-text-keywords","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-text-keywords.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-text-keywords","title":"GET TEXT KEYWORDS","slug":"/commands/get-text-keywords","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Delete string","permalink":"/docs/pt/commands/delete-string"},"next":{"title":"Insert string","permalink":"/docs/pt/commands/insert-string"}}'),n=r("785893"),o=r("250065");let t={id:"get-text-keywords",title:"GET TEXT KEYWORDS",slug:"/commands/get-text-keywords",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let a={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"GET TEXT KEYWORDS"})," ( ",(0,n.jsx)(a.em,{children:"texto"})," ; ",(0,n.jsx)(a.em,{children:"arrPalavrasChaves"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Par\xe2metro"}),(0,n.jsx)(a.th,{children:"Tipo"}),(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"texto"}),(0,n.jsx)(a.td,{children:"Text"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Texto original"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"arrPalavrasChaves"}),(0,n.jsx)(a.td,{children:"Text array"}),(0,n.jsx)(a.td,{children:"\u2190"}),(0,n.jsx)(a.td,{children:"Array que cont\xe9m as palavras-chave"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"*"}),(0,n.jsx)(a.td,{children:"Operador"}),(0,n.jsx)(a.td,{children:"\u2192"}),(0,n.jsx)(a.td,{children:"Se passado = palavras \xfanicas"})]})]})]}),"\n",(0,n.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(a.p,{children:["O comando ",(0,n.jsx)(a.strong,{children:"GET TEXT KEYWORDS"})," divide todo o ",(0,n.jsx)(a.em,{children:"texto"})," em palavras individuais e cria, para cada palavra obtida, um elemento no array texto ",(0,n.jsx)(a.em,{children:"arrPalavrasChaves"})," para cada palavra."]}),"\n",(0,n.jsxs)(a.p,{children:["4D utiliza o mesmo algoritmo para dividir o texto em palavras individuais que utiliza para criar os ",(0,n.jsx)(a.em,{children:"\xcdndice de palabras-chaves"}),". Este algoritmo est\xe1 baseado na livraria ICU. Para mais informa\xe7\xe3o sobre como se separa um texto em palavras, consulte o seguinte endere\xe7o: ",(0,n.jsx)(a.a,{href:"http://userguide.icu-project.org/boundaryanalysis",children:"http://userguide.icu-project.org/boundaryanalysis"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota"}),': por pedido dos usu\xe1rios, foi introduzida uma exce\xe7\xe3o para o franc\xeas e o italiano: o ap\xf3strofe (\') seguido por uma vogal ou a letra "h" se considera como um separador de palavra. Por exemplo, as cadeias "L\'homme" ou "l\'arbre" se dividem em "L\u2019"+"homme" y "l\'"+"arbre".']}),"\n",(0,n.jsxs)(a.p,{children:["O algoritmo utilizado difere se a op\xe7\xe3o ",(0,n.jsx)(a.strong,{children:"Considerar s\xf3 caracteres n\xe3o alfanum\xe9ricos para as palavras-chaves"})," est\xe1 selecionada nas ",(0,n.jsx)(a.a,{href:"/docs/pt/settings/database#text-comparison",children:"propriedades da base"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["No par\xe2metro ",(0,n.jsx)(a.em,{children:"texto"}),", passe o texto original a dividir em palavras. Este texto pode ter estilo, cujo caso as etiquetas de estilo s\xe3o ignoradas."]}),"\n",(0,n.jsxs)(a.p,{children:["Para o par\xe2metro ",(0,n.jsx)(a.em,{children:"arrPalavrasChaves"}),", o comando enche este array texto com as palavras extra\xeddas do texto."]}),"\n",(0,n.jsxs)(a.p,{children:["Si passa el par\xe2metro opcional ",(0,n.jsx)(a.em,{children:"*"}),", o comando s\xf3 armazena cada palavra diferente uma vez em ",(0,n.jsx)(a.em,{children:"arrPalavrasChaves"}),". Por defeito, se este par\xe2metro \xe9 omitido, todas as palavras extra\xeddas do texto se guardam no array, inclusive se aparecem varias vezes."]}),"\n",(0,n.jsx)(a.p,{children:'Este comando permite efetuar de maneira simples as pesquisas entre os registros que cont\xe9m grandes quantidades de texto garantindo utilizar as mesmas palavras-chaves que 4D. Por exemplo, imagine que voc\xea tem um texto que cont\xe9m "10,000 Jean-Pierre BC45". Se este texto se divide nas palavras-chaves "10,000" + "Jean-Pierre" + "BC45", o array conter\xe1 4 elementos. Ent\xe3o \xe9 f\xe1cil fazer um bucle neste array para encontrar os registros que cont\xe9m uma ou mais destas palavras-chave utilizando o operador % (ver exemplos).'}),"\n",(0,n.jsx)(a.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsxs)(a.p,{children:["Em um formularia que cont\xe9m uma \xe1rea de pesquisa, os usu\xe1rios podem introduzir uma ou mais palavras. Quando um usu\xe1rio valida este formul\xe1rio, buscamos os registros cujo campo ",(0,n.jsx)(a.em,{children:"Meucampo"})," contenha ao menos uma das palavras-chaves introduzidas pelo usu\xe1rio."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0// vSearch \xe9 a vari\xe1vel da \xe1rea de pesquisa no formul\xe1rio\n\xa0GET TEXT KEYWORDS(vSearch;arrSearch;*)\n\xa0\xa0//* no caso de que um usu\xe1rio introduza a mesma palavra mais de uma vez\n\xa0CREATE SET([MinhaTabela];"Totalfound")\n\xa0$n:=Size of array(arrSearch)\n\xa0For($i;1;$n)\n\xa0\xa0\xa0\xa0QUERY([MinhaTabela];[MinhaTabela]MeuCampo% arrSearch{$i})\n\xa0\xa0\xa0\xa0CREATE SET(([MinhaTabela];"encontrado")\n\xa0\xa0\xa0\xa0UNION("Totalfound";"encontrado";"Totalfound")\n\xa0End for\n\xa0USE SET("Totalfound")\n'})}),"\n",(0,n.jsx)(a.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsxs)(a.p,{children:["No mesmo formul\xe1rio que antes, buscamos os registros onde o campo ",(0,n.jsx)(a.em,{children:"MeuCampo"})," contenha todas as palavras-chaves introduzidas pelo usu\xe1rio."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"\xa0\xa0// vSearch \xe9 a vari\xe1vel da \xe1rea de entrada no formul\xe1rio\n\xa0GET TEXT KEYWORDS(vSearch;arrSearch;*)\n\xa0$n:=Size of array(arrSearch)\n\xa0QUERY([MinhaTabela];[MinhaTabela]MeuCampo>=0;*)\n\xa0\xa0// iniciar a busca = todos os registros\n\xa0For($i;1;$n)\n\xa0\xa0\xa0\xa0QUERY([MyTable];&;[MyTable]MyField % arrSearch{$i};*)\n\xa0\xa0// adicionar o crit\xe9rio\n\xa0End for\n\xa0QUERY([MinhaTabela])\xa0//busca\n"})}),"\n",(0,n.jsx)(a.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,n.jsx)(a.p,{children:"Para contar as palavras de um texto:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:'\xa0GET TEXT KEYWORDS(vText;arrWords)\xa0// todas as palavras\n\xa0$n:=Size of array(arrWords)\n\xa0GET TEXT KEYWORDS(vText;arrWords;*)\xa0// palavras diferentes\n\xa0$m:=Size of array(arrWords)\n\xa0ALERT("Este texto cont\xe9m "+String($n)+" palavras de "+String($m))\n'})}),"\n",(0,n.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"/docs/pt/commands/distinct-values",children:"DISTINCT VALUES"})}),"\n",(0,n.jsx)(a.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{}),(0,n.jsx)(a.th,{})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"N\xfamero do comando"}),(0,n.jsx)(a.td,{children:"1141"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Thread-seguro"}),(0,n.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return d},a:function(){return t}});var s=r(667294);let n={},o=s.createContext(n);function t(e){let a=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);