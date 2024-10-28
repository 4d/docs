"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4422],{544063:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var r=a(474848),n=a(28453);const t={id:"filter-keystroke",title:"FILTER KEYSTROKE",slug:"/commands/filter-keystroke",displayed_sidebar:"docs"},i=void 0,s={id:"commands-legacy/filter-keystroke",title:"FILTER KEYSTROKE",description:"FILTER KEYSTROKE ( carFiltro )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/filter-keystroke.md",sourceDirName:"commands-legacy",slug:"/commands/filter-keystroke",permalink:"/docs/pt/commands/filter-keystroke",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffilter-keystroke.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"filter-keystroke",title:"FILTER KEYSTROKE",slug:"/commands/filter-keystroke",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"EDIT ITEM",permalink:"/docs/pt/commands/edit-item"},next:{title:"Get edited text",permalink:"/docs/pt/commands/get-edited-text"}},d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"FILTER KEYSTROKE"})," ( ",(0,r.jsx)(o.em,{children:"carFiltro"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"carFiltro"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Caracter de filtrado de tecle ou Cadeia vazia para cancelar o filtrado"})]})})]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["FILTER KEYSTROKE permite substituir ou caractere introduzido pelo usu\xe1rio em um campo ou em uma \xe1rea edit\xe1vel pelo primeiro caractere da string ",(0,r.jsx)(o.em,{children:"carFiltro"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Se passar uma string vazia, a tecla \xe9 cancelada e ignorada."}),"\n",(0,r.jsxs)(o.p,{children:["Geralmente, FILTER KEYSTROKE \xe9 chamada em um m\xe9todo de formul\xe1rio ou de objeto quando \xe9 gerenciado o evento de formul\xe1rio On Before Keystroke. Para detectar os eventos de teclagem, utilize o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/form-event",title:"Form event",children:"Form event"}),". Para obter o caractere teclado, utilize o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/keystroke",title:"Keystroke",children:"Keystroke"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"IMPORTANTE:"})," o comando FILTER KEYSTROKE lhe permite cancelar ou substituir o caractere introduzido pelo usu\xe1rio com outro caractere. Por outra parte, se deseja inserir mais de um caractere para um keystroke especifico, lembre que o texto que v\xea na tela ainda NAO \xe9 o valor da vari\xe1vel ou campo fonte de dados para a \xe1rea que est\xe1 sendo editada. O valor do campo ou da vari\xe1vel fonte de dados \xe9 atribu\xedda depois de que se confirma a entrada de dados para a \xe1rea. Portanto depende de voc\xea colocar os dados introduzidos em uma vari\xe1vel e depois trabalhar com o valor da vari\xe1vel e reatribuir a \xe1rea de entrada (ver o exemplo nesta se\xe7\xe3o)."]}),"\n",(0,r.jsx)(o.p,{children:"Utilize o comando FILTER KEYSTROKE para:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"efetuar um filtro personalizado de caracteres"}),"\n",(0,r.jsx)(o.li,{children:"criar um filtro de entrada n\xe3o dispon\xedvel em padr\xe3o, por exemplo nos filtros de entrada"}),"\n",(0,r.jsx)(o.li,{children:"implementar \xe1reas din\xe2micas de pesquisa ou \xe1reas de autocompletar"}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Advert\xeancia:"})," se chamar ao comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/keystroke",title:"Keystroke",children:"Keystroke"})," depois de chamar a FILTER KEYSTROKE, \xe9 devolvido o caractere que voc\xea passa a este comando em lugar do caractere introduzido realmente."]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(o.p,{children:"Utilizando o seguinte c\xf3digo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto da \xe1rea edit\xe1vel meuObjeto\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0meuObjeto:=""\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Position(Keystroke;"0123456789")>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE("*")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Todos os d\xedgitos introduzidos na \xe1rea ",(0,r.jsx)(o.em,{children:"meuObjeto"})," se transformam em asteriscos."]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(o.p,{children:"Este c\xf3digo define o comportamento de uma \xe1rea de entrada de senha, na qual os caracteres introduzidos s\xe3o substitu\xeddos (na tela) por caracteres aleat\xf3rios:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto da \xe1rea edit\xe1vel vsSenha\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsSenha:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsSenhaReal:=""\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Manejo keystroke(->vsSenha;->vsSenhaReal)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Position(Keystroke;Char(Backspace)+Char(Left arrow key)+\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Char(Right arrow key)+Char(Up arrow key)+Char(Down arrow key))=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE(Char(65+(Random%26)))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,r.jsxs)(o.p,{children:["Logo que tiver confirmado a entrada de dados, voc\xea recupera a senha introduzida em realidade pelo usu\xe1rio ",(0,r.jsx)(o.em,{children:"vsSenhaReal"}),". Nota: O m\xe9todo Manejo Handle keystroke est\xe1 listado no exemplo do comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/keystroke",title:"Keystroke",children:"Keystroke"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsxs)(o.p,{children:["Em sua aplica\xe7\xe3o, tem algumas \xe1reas de texto nas quais pode introduzir algumas frases. Sua aplica\xe7\xe3o tamb\xe9m inclui uma tabela de dicion\xe1rio dos termos utilizados com mais frequ\xeancia em seu banco. Durante a edi\xe7\xe3o de suas \xe1reas de texto, \xe9 \xfatil poder recuperar e inserir rapidamente entradas do dicion\xe1rio baseado nos caracteres selecionados na \xe1rea de texto. H\xe1 duas formas de fazer isto:",(0,r.jsx)(o.br,{}),"\n- Oferecer alguns bot\xf5es com teclas associadas ou",(0,r.jsx)(o.br,{}),"\n- Interceptar caracteres especiais durante a edi\xe7\xe3o da \xe1rea de texto"]}),"\n",(0,r.jsx)(o.p,{children:"Este exemplo implementa a segunda solu\xe7\xe3o, baseado na tecla Ajuda."}),"\n",(0,r.jsx)(o.p,{children:"Como se explicou anteriormente, durante a edi\xe7\xe3o da \xe1rea de texto, o valor introduzido ser\xe1 atribu\xeddo \xe0 fonte de dados para esta \xe1rea depois que a entrada de dados seja confirmada. Para poder recuperar e inserir entradas do dicion\xe1rio na \xe1rea de texto, enquanto esta \xe1rea \xe9 editada, deve criar uma segunda \xe1rea para colocar os valores introduzidos. Se passam como primeiros par\xe2metros os ponteiros at\xe9 a \xe1rea de entrada e at\xe9 a vari\xe1vel, depois como terceiro par\xe2metro a string de caracteres \u201cproibidos\u201d. Sem importar como se trate a teclagem, o m\xe9todo retorna a teclagem original. Os caracteres \u201cproibidos\u201d s\xe3o aqueles que voc\xea n\xe3o deseja inserir na \xe1rea edit\xe1vel e deseja tratar como caracteres especiais."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de projeto Teclado sombra\n\xa0\xa0// Teclado sombra ( Ponteiro ; Ponteiro ; Alfa) -> Alfa\n\xa0\xa0// Teclado sombra ( -> srcArea ; -> curValor ; Filtro ) -> Antigo valor teclado\n\xa0C_STRING(1;$0)\n\xa0var $1;$2 : Pointer\n\xa0var $vtNovoValor : Text\n\xa0C_STRING(255;$3)\n\xa0\xa0// Retorna o caractere original\n\xa0$0:=Keystroke\n\xa0\xa0// Obter a sele\xe7\xe3o de texto na \xe1rea edit\xe1vel\n\xa0GET HIGHLIGHT($1->;$vlInicio;$vlFim)\n\xa0\xa0//Come\xe7ar a trabalhar com o valor atual\n\xa0$vtNuevoValor:=$2->\n\xa0\xa0// Dependendo da tecla pressionada ou do caractere introduzida,\n\xa0\xa0// Efetuar as a\xe7\xf5es apropriadas\n\xa0Case of\n\xa0\xa0// a tecla Retorno (eliminar) foi pressionada\n\xa0\xa0\xa0\xa0:(Character code($0)=Backspace)\n\xa0\xa0// Eliminar os caracteres selecionados ou o caractere a esquerda do cursor\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNovoValor:=Eliminar texto($vtNovoValor;$vlInicio;$vlFim)\n\xa0\xa0// Uma tecla flecha foi pressionada\n\xa0\xa0// N\xe3o fazer nada, mas aceitar o caractere teclado\n\xa0\xa0\xa0\xa0:(Character code($0)=Left arrow key)\n\xa0\xa0\xa0\xa0:(Character code($0)=Right arrow key)\n\xa0\xa0\xa0\xa0:(Character code($0)=Up arrow key)\n\xa0\xa0\xa0\xa0:(Character code($0)=Down arrow key)\n\xa0\n\xa0\xa0// Um caractere v\xe1lido foi introduzido\n\xa0\xa0\xa0\xa0:(Position($0;$3)=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNovoValor:=Inserir texto($vtNovoValor;$vlInicio;$vlFim;$0)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0// O caractere n\xe3o foi aceito\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE("")\n\xa0End case\n\xa0\xa0// Devolver o valor para a pr\xf3xima gest\xe3o de keystroke\n\xa0$2->:=$vtNovoValor\n'})}),"\n",(0,r.jsx)(o.p,{children:"Este m\xe9todo utiliza os seguintes dois sub-m\xe9todos:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de projeto Apagar texto\n\xa0\xa0// Apagar texto ( Alfa; Long ; Long ) -> Alfa\n\xa0\xa0// Apagar texto ( -> Texto ; SelInicio ; SelFim ) -> Novo texto\n\xa0var $0;$1 : Text\n\xa0var $2;$3 : Integer\n\xa0$0:=Substring($1;1;$2-1-Num($2=$3))+Substring($1;$3)\n"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de projeto Inserir texto\n\xa0\xa0// Inserir texto ( Alfa ; Long ; Long ; Alfa) -> Alfa\n\xa0\xa0// Inserir texto ( -> srcText ; SelInicio ; SelFin ; Texto a inserir ) -> Novo texto\n\xa0var $0;$1;$4 : Text\n\xa0var $2;$3 : Integer\n\xa0$0:=$1\n\xa0If($2#$3)\n\xa0\xa0\xa0\xa0$0:=Substring($0;1;$2-1)+$4+Substring($0;$3)\n\xa0Else\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($2<=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$4+$0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($2>Length($0))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$0+$4\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=Substring($0;1;$2-1)+$4+Substring($0;$2)\n\xa0\xa0\xa0\xa0End case\n\xa0End if\n"})}),"\n",(0,r.jsx)(o.p,{children:"Quando tiver adicionado estes m\xe9todos de projeto a seu banco, podem ser utilizados desta maneira:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto da \xe1rea edit\xe1vel vsDescri\xe7\xe3o\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsDescri\xe7\xe3o:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsShadowDescri\xe7\xe3o:=""\n\xa0\xa0// Estabelecer a lista de caracteres \u201cproibidos\u201d a tratar como teclas especiais\n\xa0\xa0// ( aqui, neste exemplo, s\xf3 a tecla Help \xe9 filtrada)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsSpecialKeys:=Char(HelpKey)\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsKey:=Teclado sombra(->vsDescri\xe7\xe3o;->vsShadowDescripcion;vsSpecialKeys)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Character code($vsKey)=Help key)\n\xa0\xa0// Fazer algo quando a tecla Ajuda seja pressionada\n\xa0\xa0// Aqui, neste exemplo, uma entrada de dicion\xe1rio deve ser buscada e inserida\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONSULTAR DICIONARIO(->vsDescripcion;->vsShadowDescripcion)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n'})}),"\n",(0,r.jsx)(o.p,{children:"O m\xe9todo de projeto LOOKUP DICTIONARY \xe9 listado a seguir. Seu prop\xf3sito \xe9 utilizar a vari\xe1vel shadow para retribuir a \xe1rea edit\xe1vel a modificar:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de projeto CONSULTAR DICIONARIO\n\xa0\xa0// CONSULTAR DICIONARIO ( Ponteiro ; Ponteiro )\n\xa0\xa0// CONSULTAR DICIONARIO ( -> Area editavel ; ->ShadowVariable )\n\xa0\n\xa0var $1;$2 : Pointer\n\xa0var $vlInicio;$vlFin : Integer\n\xa0\n\xa0\xa0// Obter a sele\xe7\xe3o de texto na \xe1rea edit\xe1vel\n\xa0GET HIGHLIGHT($1->;$vlInicio;$vlFin)\n\xa0\xa0// Obter o texto selecionado ou a palavbra localizada a esquerda do cursor\n\xa0$vtHighlightedText:=ObterTextoSelecionado($2->;$vlInicio;$vlFin)\n\xa0\xa0//H\xe1 algo que buscar?\n\xa0If($vtHighlightedText#"")\n\xa0\xa0// Se a sele\xe7\xe3o de texto era o cursor\n\xa0\xa0// a sele\xe7\xe3o come\xe7a com a palavra situada depois do cursor\n\xa0\xa0\xa0\xa0If($vlInicio=$vlFin)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlInicio:=$vlInicio-Length($vtHighlightedText)\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Buscar a primeira entrada disponivel do dicion\xe1rio\n\xa0\xa0\xa0\xa0QUERY([Dicionario];[Dicionario]Entry=$vtHighlightedText+"@")\n\xa0\xa0// H\xe1 alguma?\n\xa0\xa0\xa0\xa0If(Records in selection([Dicionario])>0)\n\xa0\xa0// Se houver alguma entrada dispon\xedvel, inser\xed-la no texto shadow\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$2->:=Insert text($2->;$vlInicio;$vlFin;[Dicionario]Entry)\n\xa0\xa0// Copiar o texto shadow na \xe1rea edit\xe1vel\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$1->:=$2->\n\xa0\xa0// Fixar a sele\xe7\xe3o logo ap\xf3s inserir a entrada do dicionario\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlFin:=$vlInicio+Length([Dicionario]Entry)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0HIGHLIGHT TEXT(vsComments;$vlFin;$vlFin)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0// N\xe3o h\xe1 uma entrada correspondente no dicion\xe1rio\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BEEP\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0// N\xe3o h\xe1 um texto selecionado\n\xa0\xa0\xa0\xa0BEEP\n\xa0End if\n'})}),"\n",(0,r.jsx)(o.p,{children:"O m\xe9todo ObterTextoSelecionado \xe9 o seguinte:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto ObterTextoSelecionado\n\xa0\xa0// ObterTextoSelecionado( Alfa ; Long ; Long ) -> Alfa\n\xa0\xa0// ObterTextoSelecionado ( Text ; SelInicio ; SelEnd ) -> texto selecionado\n\xa0var $0;$1 : Text\n\xa0var $2;$3 : Integer\n\xa0If($2<$3)\n\xa0\xa0\xa0\xa0$0:=Substring($1;$2;$3-$2)\n\xa0Else\n\xa0\xa0\xa0\xa0$0:=""\n\xa0\xa0\xa0\xa0$2:=$2-1\n\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($2>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Position($1[[$2]];" \xa0,.!?:;()-_\u2013\u2014")=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$1[[$2]]+$0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$2:=$2-1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$2:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Until($2=0)\n\xa0End if\n'})}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/commands/form-event-code",children:"Form event code"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/get-edited-text",children:"Get edited text"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/is-editing-text",children:"Is editing text"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/keystroke",children:"Keystroke"})]})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,o,a)=>{a.d(o,{R:()=>i,x:()=>s});var r=a(296540);const n={},t=r.createContext(n);function i(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);