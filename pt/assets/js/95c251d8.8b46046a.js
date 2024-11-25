"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96277"],{240967:function(e,o,r){r.r(o),r.d(o,{metadata:()=>n,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>a,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/object-set-rgb-colors","title":"OBJECT SET RGB COLORS","description":"OBJECT SET RGB COLORS ( { ;} objeto ; corPrimeiroPlano {; corFundo {; corFundoAlternativo*}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-rgb-colors.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-rgb-colors","permalink":"/docs/pt/commands/object-set-rgb-colors","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-rgb-colors.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-rgb-colors","title":"OBJECT SET RGB COLORS","slug":"/commands/object-set-rgb-colors","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET RESIZING OPTIONS","permalink":"/docs/pt/commands/object-set-resizing-options"},"next":{"title":"OBJECT SET SCROLL POSITION","permalink":"/docs/pt/commands/object-set-scroll-position"}}'),s=r("785893"),t=r("250065");let d={id:"object-set-rgb-colors",title:"OBJECT SET RGB COLORS",slug:"/commands/object-set-rgb-colors",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"OBJECT SET RGB COLORS"})," ( {* ;} ",(0,s.jsx)(o.em,{children:"objeto"})," ; ",(0,s.jsx)(o.em,{children:"corPrimeiroPlano"})," {; ",(0,s.jsx)(o.em,{children:"corFundo"})," {; ",(0,s.jsx)(o.em,{children:"corFundoAlternativo"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objeto"}),(0,s.jsx)(o.td,{children:"any"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome de objeto (se* \xe9 especificado) ou Campo ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"corPrimeiroPlano"}),(0,s.jsx)(o.td,{children:"Text, Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Valor de cor RGB para a cor de Primeiro Plano"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"corFundo"}),(0,s.jsx)(o.td,{children:"Text, Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Valor RGB da cor de Fundo"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"corFundoAlternativo"}),(0,s.jsx)(o.td,{children:"Text, Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Valor RGB da cor de fundo alternativa"})]})]})]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"O comando OBJECT SET RGB COLORS modifica as cores de fundo e primeiro plano dos objetos especificados por objeto e o par\xe2metro opcional *. Quando o comando \xe9 aplicado a um objeto list box, um par\xe2metro adicional lhe permite modificar a cor alternativa das filas."}),"\n",(0,s.jsxs)(o.p,{children:["Se passa o par\xe2metro opcional *, indica que o par\xe2metro objeto \xe9 um nome de objeto (string). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro objeto \xe9 um campo ou uma vari\xe1vel. Neste caso, n\xe3o passe uma refer\xeancia de campo ou de vari\xe1vel ao inv\xe9s de uma string. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ",(0,s.jsx)(o.em,{children:"Propriedades dos objetos"})]}),"\n",(0,s.jsx)(o.p,{children:"O par\xe2metro opcional corFundoAlt lhe permite definir uma cor alternativa para o fundo das linhas pares. Este par\xe2metro s\xf3 \xe9 utilizado quando o objeto \xe9 especificado como List box ou coluna de List box. Quando \xe9 utilizado este par\xe2metro, o par\xe2metro corFundo \xe9 utilizado para as linhas \xedmpares unicamente. A utiliza\xe7\xe3o de cores alternativos faz com que as listas sejam mais f\xe1ceis de ler."}),"\n",(0,s.jsx)(o.p,{children:"Se objeto especifica um objeto List box, as cores alternativas s\xe3o utilizadas em todo o List box. Se objeto especifica uma coluna da List box, s\xf3 a coluna utilizar\xe1 as cores definidas."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Defini\xe7\xe3o de cores"})}),"\n",(0,s.jsxs)(o.p,{children:["Os valores das cores RGB s\xe3o indicados nos par\xe2metros ",(0,s.jsx)(o.em,{children:"corPrimeirpoPlano"}),", ",(0,s.jsx)(o.em,{children:"corFundo"})," e ",(0,s.jsx)(o.em,{children:"corFundoAlt"}),". Os formatos abaixo s\xe3o compat\xedveis:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:(0,s.jsxs)(o.strong,{children:["Nombre del formato",(0,s.jsx)(o.br,{})]})}),(0,s.jsx)(o.th,{children:(0,s.jsx)(o.strong,{children:"Tipo"})}),(0,s.jsx)(o.th,{children:(0,s.jsx)(o.strong,{children:"Descripci\xf3n"})}),(0,s.jsx)(o.th,{children:(0,s.jsx)(o.strong,{children:"Ejemplos"})})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"CSS color name"}),(0,s.jsx)(o.td,{children:"Texto"}),(0,s.jsxs)(o.td,{children:["Nome de cor CSS2 padr\xe3o. A lista de nomes dispon\xedveis pode ser encontrada em v\xe1rios lugares na web, por exemplo, em ",(0,s.jsx)(o.a,{href:"https://htmlcolorcodes.com/color-names/",children:"htmlcolorcodes.com"}),".",(0,s.jsx)(o.br,{}),' Utiliza "transparente" para definir a transparencia no fundo (s\xf3 pode ser utilizada com os par\xe2metros ',(0,s.jsx)(o.em,{children:"corFundo"})," e ",(0,s.jsx)(o.em,{children:"corFundoAlt"}),'). Utiliza "" (string vazia) em ',(0,s.jsx)(o.em,{children:"corPrimeiroPlano"})," ou ",(0,s.jsx)(o.em,{children:"corFundo"})," para deix\xe1-lo sem mudan\xe7as"]}),(0,s.jsx)(o.td,{children:'"red", "cyan", "lightblue"'})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:'CSS color "#rrggbb" syntax'}),(0,s.jsx)(o.td,{children:"Texto"}),(0,s.jsx)(o.td,{children:"C\xf3digo de cor hexadecimal CSS2 padr\xe3o: rr = componente vermelho da cor gg = componente verde da cor bb = componente azul da cor"}),(0,s.jsx)(o.td,{children:'"#ff0000", "#00FFFF", "#ADD8E6"'})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:'CSS color "rgb(r,g,b)" syntax'}),(0,s.jsx)(o.td,{children:"Texto"}),(0,s.jsx)(o.td,{children:"C\xf3digo de cor rgb CSS2 padr\xe3o: r = componente vermelho da cor (0...255) g = componente verde da cor (0...255) b = componente azul da cor (0...255)"}),(0,s.jsx)(o.td,{children:'"rgb(255,255,0)", "rgb(255,0,0)"'})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"4-byte RGB value"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsxs)(o.td,{children:["Entero largo de 4 bytes (formato 0x00rrggbb). Valores hexadecimales:",(0,s.jsx)(o.br,{})," rr = componente vermelho da cor gg = componente verde da cor bb = componente azul da cor"]}),(0,s.jsx)(o.td,{children:"0x00000000, 0x00FF7F7F"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:'4D "system" color constant'}),(0,s.jsx)(o.td,{children:"Entero largo"}),(0,s.jsxs)(o.td,{children:["Cores utilizadas por 4D para desenhar objetos com cores autom\xe1ticas. Constantes dispon\xedveis (do tema ",(0,s.jsx)(o.em,{children:"DEFINIR CORES RVA"}),"):",(0,s.jsx)(o.br,{})," Background color Background color none (s\xf3 pode ser utilizada com os par\xe2metros ",(0,s.jsx)(o.em,{children:"corFundo"})," e ",(0,s.jsx)(o.em,{children:"corFundoAlt"}),") Dark shadow color Disable highlight item color Foreground color Highlight menu background color Highlight menu text color Highlight text background color Highlight text color Light shadow color"]}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," ",(0,s.jsx)(o.em,{children:"as cores autom\xe1ticas dependem de sistema e do tipo de objeto ao qual s\xe3o atribu\xeddos."})]})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsxs)(o.p,{children:["Este formul\xe1rio cont\xe9m duas vari\xe1veis edit\xe1veis, ",(0,s.jsx)(o.em,{children:"vsCorValor"})," e ",(0,s.jsx)(o.em,{children:"vsCor"})," assim como tr\xeas barras term\xf4metros: ",(0,s.jsx)(o.em,{children:"thVermelho"}),", ",(0,s.jsx)(o.em,{children:"thVerde"}),", e ",(0,s.jsx)(o.em,{children:"thAzul"}),"."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:r(563111).Z+"",width:"952",height:"532"})}),"\n",(0,s.jsx)(o.p,{children:"Estes s\xe3o os m\xe9todos destes objetos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto da vari\xe1vel n\xe3o edit\xe1vel vsCorValor\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsCorValor:="0x00000000"\n\xa0End case\n\xa0\n\xa0\xa0// M\xe9todo de objeto da vari\xe1vel n\xe3o edit\xe1vel vsCor\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsColor:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET RGB COLORS(vsCor;0x00FFFFFF;0x0000)\n\xa0End case\n\xa0\n\xa0\xa0// M\xe9todo de objeto do term\xf4metro thVermelho\n\xa0CLIQUE no TERM\xd4METRO DE COR\n\xa0\xa0// M\xe9todo de objeto do term\xf4metro thVerde\n\xa0CLIQUE EM TERMOMETRO DE COR\n\xa0\n\xa0\xa0// M\xe9todo de objeto do term\xf4metro thAzul\n\xa0CLIQUE EM TERMOMETRO DE COR\n'})}),"\n",(0,s.jsx)(o.p,{children:"O m\xe9todo de projeto chamado pelos tr\xeas term\xf4metros \xe9:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de projeto CLIQUE EM TERMOMETRO DE COR\n\xa0OBJECT SET RGB COLORS(vsCor;0x00FFFFFF;(thVermelho<<&NBSP;16)+(thVerde&NBSP;<<&NBSP;8)+thAzul)\n\xa0vsCorValor:=String((thVermelho<<\xa016)+(thVerde\xa0<<\xa08)+thAzul;"\xa0&\xa0x")\n\xa0If(thVermelho=0)\n\xa0\xa0\xa0\xa0vsCorValor:=Substring(vsCorValor;1;2)+"0000"+Substring(vsCorValor;3)\n\xa0End if\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Note a utiliza\xe7\xe3o dos ",(0,s.jsx)(o.em,{children:"Bitwise operators"})," para o c\xe1lculo dos valores das cores a partir dos valores dos term\xf4metros."]}),"\n",(0,s.jsx)(o.p,{children:"Em execu\xe7\xe3o, o formul\xe1rio se v\xea assim:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:r(875680).Z+"",width:"1184",height:"808"})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"Muda o fundo transparente com uma cor de fonte clara:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:r(204958).Z+"",width:"153",height:"50"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0OBJECT SET RGB COLORS(*;"myVar";Light shadow color;Background color none)\n'})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:r(295153).Z+"",width:"152",height:"49"})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"_o_OBJECT SET COLOR"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-get-rgb-colors",children:"OBJECT GET RGB COLORS"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/select-rgb-color",children:"Select RGB Color"})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},204958:function(e,o,r){r.d(o,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAyCAIAAADA5e7AAAAC2ElEQVR42u2bP2vbQBTAT232mEIKLSmUImUw/gTy2C5SO2TyVrwUe4tEIFuhFLx1sZcWa3MDLXjq0EhTR+kTGA/WDYEGApmUT+Ce/tiWFCe+s+uqeXq/6UyefBf99N49CUsKgoAgIHhQ9AKQvwa6hAO6hAO6hMNO+sPu20rR60HEuD5dtK6Yl3BAl3BAl3BAl3BAl3BAl3BAl3BAl3BAl3BAl3DY4Yw7l1/SNx+C4LroBZeLSmVX/vnxOf3FE8zr8uHx91f7e0X/a2WEvjglR095IrHGwkHcpdOWEtoO+0h7daneo2svgH3disMXE87YZD7ACLpk5nRiTyP86oTJlA136hryFpeo9eP57BZRu3444ptv9VUCDN79MsEfe2pViceysVWFiCiCeakdtjyzmbna55d/NHBYyU3qL02G8+zIBCxJmfkBcfVeSSY+VevDeep1SbeIZyq8XwYA0f2SFTy/MVRuOd+e2SGDqBxautSMhmzsmZ+cXIDfJblLghlQhg0/rqaks7o45uKJ4dq1cCKnzXYB13XnNbmvFX2S/xFr9LHhDslkjPSbOtXuIKq7LH2J2ngdleBwPJrQbIBsvG95Yz91KJ2M4jRi6Fb2b8tYEq/1baJLzGRp7GVZ955ENgZd1fqxdvkKVdyglXRVU85kEo0HjqBLpzcrfvRsuGiDuPGGZ3R2dOswff7lgxqxOErrHfFRdWUFVy/NDplFtPc5GMdlTVLMmi1+L6LWxs3Z0blU0vrhJqpwdz+5+B67Wxp1TzSinbDyH3ZBUZ9Wpt5HClLvk9zxm8rfn6+ebfoMj/WXnaq/3ZtReNDzS/n2Z3j4m0qYoEs4CD732Qh2b4rd5hbBvIQDb14++np08e7L/mMgL5xcXN2bN4iffDvmjOTtY5H/E+xjYYIu4YAu4YAu4YAu4YAu4YAu4YAu4YAu4YAu4YAu4ZB5HovcazAv4YAu4YAu4fAHqlk+ohKu574AAAAASUVORK5CYII="},295153:function(e,o,r){r.d(o,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAxCAIAAACps/dQAAADAklEQVR42u2bMWwSURjH/2gTxxIHE2ktDodD414DYdKl1oVEHJoYN4gOR2NgMzHOJQZuMCnpUk10YMDBlMmJwNDZdGhvkKgMLl5HJ3x33iEHrXcPCgdfv18u4QHf3Xu8/33/7+7lCBmGAWb+uRT0AJjzgYUkAgtJBBaSCAv9bxYfh4MeDyPHyTv7WpUzkggsJBFYSCKwkERgIYnAQhKBhSQCC0kEFpIILCQRFnzGfVXu6g9eGsZJ0AO+WITDi8qnVzf1z56RfoW8/PzDvWfXcCXoXzYmv4MegDy61oEa8QxjayWCvJDJfVS71rZvvo2WUD1GdOQBZLx3L3SdHp1tMx7wtM0ekkIK2VQgHTK3/BGSQHsL6RjakxzjttVdOitsBnmr/b7lYzcfpwgh/NZIm5Vb6BzZbSHhRPU7X+awOkohmZGNj4jk3M7WO/GtRrJku59I1s1jtxO6A4btMVpymbYnrvg4ys4xhfmXRdc7gIJiF4VM0JM8DWRrZAXpBNaatlSDKHhoGa9Wh9oFntjt1IvBgHwZqT2372VQ3LCdU4OPKjgQD+SyVkcZ0/xzsX9WvF0JepKnwQhXrS3kLCXUYS11vN4yX0Xiinaz5bRjjmZOgLDlAwUrfbtGV+0EEqeIuo6l2x6jOCW+YioqElG7H/SsBoBkjewhlKht4E4GjdH2j2N5+MM60lIayMZTRjIjRYWzcyuONQU/vkh2pyBheWb0ESJ110nQPgTWJe4rTom3TFU4quqvxNJCMiMbh6aV/eUga90GeHmgCx1Le6gqZlMLub+qIL+KYhMp5+AetW0gvozlHGoJ0/lrBZRLyAn33jG91/tQFAgZff/9+M/jkN/e/Lwx7hKduGotID/hm86zmNvbD13rKGcv0fUehxy1Ro7D3M7pLMNrrUSYppCViS/mXWAkrZVdcVbxK+TVt+r33V9Bj/Yicn33qZ8wv1etzGzCf+KhBgtJBBaSCCwkEVhIIrCQRGAhicBCEoGFJAILSQQWkgiutVZmfuGMJAILSYQ/onDta5uziiIAAAAASUVORK5CYII="},563111:function(e,o,r){r.d(o,{Z:function(){return n}});let n=r.p+"assets/images/pict4278097.en-bf48035b2eae013032281d59e3fe41e5.png"},875680:function(e,o,r){r.d(o,{Z:function(){return n}});let n=r.p+"assets/images/pict4278099.en-edd0ab9277daefaf4042727ea6357a21.png"},250065:function(e,o,r){r.d(o,{Z:function(){return i},a:function(){return d}});var n=r(667294);let s={},t=n.createContext(s);function d(e){let o=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);