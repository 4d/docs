"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81204"],{705517:function(e,o,a){a.r(o),a.d(o,{default:()=>u,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/keystroke","title":"Keystroke","description":"Keystroke  : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/keystroke.md","sourceDirName":"commands-legacy","slug":"/commands/keystroke","permalink":"/docs/pt/commands/keystroke","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fkeystroke.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"keystroke","title":"Keystroke","slug":"/commands/keystroke","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is editing text","permalink":"/docs/pt/commands/is-editing-text"},"next":{"title":"File and Folder","permalink":"/docs/pt/commands/theme/File-and-Folder"}}'),n=a("785893"),s=a("250065");let t={id:"keystroke",title:"Keystroke",slug:"/commands/keystroke",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Keystroke"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Resultado"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Caracter introduzido pelo usu\xe1rio"})]})})]}),"\n",(0,n.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"Keystroke retorna o caractere introduzido pelo usu\xe1rio em um campo o em uma \xe1rea edit\xe1vel."}),"\n",(0,n.jsxs)(o.p,{children:["Geralmente, Keystroke \xe9 chamada em um m\xe9todo de formul\xe1rio ou de objeto durante a gest\xe3o do evento de formul\xe1rio On Before Keystroke. Para detectar eventos de teclado, utilize o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/form-event",title:"Form event",children:"Form event"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Para substituir o caractere introduzido pelo usu\xe1rio com outro caractere, utilizando o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/filter-keystroke",title:"FILTER KEYSTROKE",children:"FILTER KEYSTROKE"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"**Nota:**a fun\xe7\xe3o Keystroke n\xe3o funciona em subformul\xe1rios."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"IMPORTANTE:"})," se deseja realizar algumas opera\xe7\xf5es \u201Con the fly\u201D dependendo do valor atual da \xe1rea de entrada que est\xe1 sendo editada, assim como do novo car\xe1ctere a ser introduzido, lembre que o texto que v\xea na tela N\xc2O \xc9 ainda o valor do campo ou da vari\xe1vel fonte. O valor do campo ou da vari\xe1vel fonte de dados se atribui depois de que se confirma a entrada de dados para a \xe1rea (tabula\xe7\xe3o em outra \xe1rea, clique em um bot\xe3o, etc). Portanto depende de voc\xea colocar os dados introduzidos em uma vari\xe1vel e depois trabalhar com o valor da vari\xe1vel . Deve fazer isto se necessita saber o valor atual do texto para efetuar a\xe7\xf5es especiais. Igualmente pode utilizar a fun\xe7\xe3o ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/get-edited-text",title:"Get edited text",children:"Get edited text"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Pode utilizar o comando Keystroke para:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"efetuar um filtro personalizado de caracteres"}),"\n",(0,n.jsx)(o.li,{children:"criar um filtro de entrada n\xe3o dispon\xedvel automaticamente, por exemplo nos filtros de entrada"}),"\n",(0,n.jsx)(o.li,{children:"implementar \xe1reas din\xe2micas de pesquisa ou de auto completar"}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsxs)(o.p,{children:["Consulte os exemplos do comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/filter-keystroke",title:"FILTER KEYSTROKE",children:"FILTER KEYSTROKE"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsxs)(o.p,{children:["Quando processa um evento On Before Keystroke, voc\xea est\xe1 administrando a edi\xe7\xe3o da \xe1rea de texto atual (onde se encontra o cursor), n\xe3o o \u201Cvalor futuro\u201D da fonte de dados (campo ou vari\xe1vel) de esta \xe1rea. O m\xe9todo de projeto Handle keystroke permite colocar em uma segunda vari\xe1vel os dados introduzidos em uma \xe1rea de texto, de mode que voc\xea possa utilizar esta vari\xe1vel para realizar diferentes a\xe7\xf5es enquanto introduz caracteres na \xe1rea. Voc\xea passa como primeiro par\xe2metro um ponteiro at\xe9 a fonte de dados da \xe1rea, e como segundo par\xe2metro um ponteiro at\xe9 a segunda vari\xe1vel. O m\xe9todo retorna o novo valor da \xe1rea de texto na segunda vari\xe1vel, e retorna ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," se este valor \xe9 diferente do valor antes da entrada do \xfaltimo caractere."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de projeto Manejar teclagem Handle Keystroke\n\xa0\xa0// Manejar teclagem ( Ponteiro ; Ponteiro ) -> Booleano\n\xa0\xa0// Manejar teclagem ( -> srcArea ; -> curValor ) -> \xc9 um novo valor\n\xa0\n\xa0var $1;$2 : Pointer\n\xa0var $vtNovoValor : Text\n\xa0\n\xa0\xa0// Obter o texto selecionado na \xe1rea edit\xe1vel\n\xa0GET HIGHLIGHT($1->;$vlInicio;$vlFim)\n\xa0\xa0// Come\xe7ar a trabalhar com o valor atual\n\xa0$vtNovoValor:=$2->\n\xa0\xa0// Dependendo da tecla pressionada ou do caractere introduzido,\n\xa0\xa0// Realizar as a\xe7\xf5es apropriadas\n\xa0Case of\n\xa0\n\xa0\xa0// A tecla Retrocesso foi pressionada\n\xa0\xa0\xa0\xa0:(Character code(Keystroke)=Backspace)\n\xa0\xa0// Eliminar os caracteres selecionados ou o caractere a esquerda do cursor\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNovoValor:=Substring($vtNovoValor;1;$vlInicio-1-Num($vlInicio=$vlFim))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0+Substring($vtNovoValor;$vlFim)\n\xa0\n\xa0\xa0// Um caractere aceit\xe1vel foi introduzido\n\xa0\xa0\xa0\xa0:(Position(Keystroke;"abcdefghjiklmnopqrstuvwxyz -0123456789")>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlInicio#$vlFim)\n\xa0\xa0// Um ou v\xe1rios caracteres s\xe3o selecionados, o keystroke vai apag\xe1-los\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNovoValor:=Substring($vtNovoValor;1;$vlInicio-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+Keystroke+Substring($vtNovoValor;$vlFim)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// A sele\xe7\xe3o de texto \xe9 o cursor\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0// O cursor est\xe1 atualmente ao come\xe7o do texto\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlInicio<=1)\n\xa0\xa0// Inser\xe7\xe3o do caractere ao principio do texto\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNovoValor:=Keystroke+$vtNovoValor\n\xa0\xa0// O cursor est\xe1 atualmente ao final do texto\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlInicio>=Length($vtNovoValor))\n\xa0\xa0// Adicionar o\n'})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"\xa0caractere\n"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0ao final do texto\n\xa0$vtNovoValor:=$vtNovoValor+Keystroke\nElse\n\xa0\xa0// O cursor se encontra no texto, inserir o novo caractere\n\xa0$vtNovoValor:=Substring($vtNovoValor;1;$vlInicio-1)+Keystroke\n\xa0+Substring($vtNovoValor;$vlInicio)\nEnd case\nEnd if\n\xa0\n\xa0\xa0// Uma tecla flecha foi pressionada\n\xa0\xa0// N\xe3o fa\xe7a nada, s\xf3 aceite o caractere teclado\n:(Character code(Keystroke)=Left arrow key)\n:(Character code(Keystroke)=Right arrow key)\n:(Character code(Keystroke)=Up arrow key)\n:(Character code(Keystroke)=Down arrow key)\n\xa0\xa0`\nElse\n\xa0\xa0// N\xe3o aceite caracteres diferentes de letras, d\xedgitos, espa\xe7os e h\xedfens\nFILTER KEYSTROKE("")\nEnd case\n\xa0\xa0// O valor \xe9 diferente agora?\n$0:=($vtNovoValor#$2->)\n\xa0\xa0// Devolver o valor para a gest\xe3o do pr\xf3ximo keystroke\n$2->:=$vtNovoValor\n'})}),"\n",(0,n.jsx)(o.p,{children:"Uma vez este m\xe9todo de projeto \xe9 adicionada \xe0 sua aplica\xe7\xe3o, pode ser utilizado da seguinte forma:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto da \xe1rea de entrada MeuObjeto\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MeuObjeto:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MeuObjetoCach\xea:=""\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Manejo teclagem(->MeuObjeto;->MeuObjetoCach\xea))\n\xa0\xa0// Efetuar as a\xe7\xf5es apropriadas utilizando o valor armazenado em MeuObjetoCach\xea\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,n.jsx)(o.p,{children:"Examinemos por exemplo o seguinte formul\xe1rio:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:a(28056).Z+"",width:"274",height:"345"})}),"\n",(0,n.jsxs)(o.p,{children:["Esta composto dos seguintes objetos: uma \xe1rea edit\xe1vel ",(0,n.jsx)(o.em,{children:"vsProcura"}),", uma \xe1rea n\xe3o edit\xe1vel ",(0,n.jsx)(o.em,{children:"vsMensaje"}),", e uma \xe1rea de rolagem ",(0,n.jsx)(o.em,{children:"asProcura"}),". Durante a entrada de caracteres em ",(0,n.jsx)(o.em,{children:"vsProcura"}),", o m\xe9todo para esse objeto realiza uma pesquisa na tabela [C\xf3digos postais], permitindo ao usu\xe1rio encontrar cidades apenas pressionando os primeiros caracteres dos nomes da cidades."]}),"\n",(0,n.jsxs)(o.p,{children:["Este \xe9 o m\xe9todo de objeto ",(0,n.jsx)(o.em,{children:"vsProcura"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto da \xe1rea de entrada vsProcura\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsProcura:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsResult:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsMensaje:="Introduza os primeiros caracteres da cidade que busca."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asBusqueda)\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Manejo teclagem(->vsBusqueda;->vsResult))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(vsResult#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Codigos postais];[Codigos postais]Cidade=vsResult+"@")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGES OFF\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DISTINCT VALUES([Codigos postais]Cidade;asPesquisa)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGES ON\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlResult:=Size of array(asPesquisa)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlResult=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsMensagem:="N\xe3o se encontrou nenhuma cidade."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlResult=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsMensaje:="Se encontrou uma cidade."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsMensaje:=String($vlResult)+" cidades encontradas."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(asPesquisa;1;Size of array(asPesquisa))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsMensaje:="Introduza os primeiros caracteres da cidade que est\xe1 pesquisando."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,n.jsx)(o.p,{children:"Este \xe9 o formul\xe1rio em execu\xe7\xe3o:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:a(458654).Z+"",width:"290",height:"322"})}),"\n",(0,n.jsx)(o.p,{children:"Utilizando as habilidades da comunica\xe7\xe3o interprocesso de 4D, pode construir interfaces de usu\xe1rio nas quais as caracter\xedsticas de pesquisa s\xe3o oferecidas em janelas ventanas flutantes que se comuniquen com processos nas quais os registros s\xe3o listados ou editados."}),"\n",(0,n.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/pt/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/form-event-code",children:"Form event code"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/get-edited-text",children:"Get edited text"})]}),"\n",(0,n.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"390"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28056:function(e,o,a){a.d(o,{Z:function(){return r}});let r=a.p+"assets/images/pict21523.es-e05579dead487c69ae62b46f55697516.png"},458654:function(e,o,a){a.d(o,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,o,a){a.d(o,{Z:function(){return d},a:function(){return t}});var r=a(667294);let n={},s=r.createContext(n);function t(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);