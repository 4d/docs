"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91181"],{932841:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/method-get-code","title":"METHOD GET CODE","description":"METHOD GET CODE ( rota ; codigo {; option} {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-get-code.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-code","permalink":"/docs/pt/commands/method-get-code","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-code.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-code","title":"METHOD GET CODE","slug":"/commands/method-get-code","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET ATTRIBUTES","permalink":"/docs/pt/commands/method-get-attributes"},"next":{"title":"METHOD GET COMMENTS","permalink":"/docs/pt/commands/method-get-comments"}}'),d=n("785893"),t=n("250065");let a={id:"method-get-code",title:"METHOD GET CODE",slug:"/commands/method-get-code",displayed_sidebar:"docs"},r=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"METHOD GET CODE"})," ( ",(0,d.jsx)(o.em,{children:"rota"})," ; ",(0,d.jsx)(o.em,{children:"codigo"})," {; ",(0,d.jsx)(o.em,{children:"option"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Par\xe2metro"}),(0,d.jsx)(o.th,{children:"Tipo"}),(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"rota"}),(0,d.jsx)(o.td,{children:"Text, Text array"}),(0,d.jsx)(o.td,{children:"\u2192"}),(0,d.jsx)(o.td,{children:"Texto ou array de texto que cont\xe9m uma ou v\xe1rios caminhos de acesso"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"codigo"}),(0,d.jsx)(o.td,{children:"Text, Text array"}),(0,d.jsx)(o.td,{children:"\u2190"}),(0,d.jsx)(o.td,{children:"C\xf3digo dos m\xe9todos designados"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"option"}),(0,d.jsx)(o.td,{children:"Integer"}),(0,d.jsx)(o.td,{children:"\u2192"}),(0,d.jsx)(o.td,{children:"0 ou omis = exportar simples (sem token), 1 = exportar com tokens"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"*"}),(0,d.jsx)(o.td,{children:"Operador"}),(0,d.jsx)(o.td,{children:"\u2192"}),(0,d.jsx)(o.td,{children:"Se passado = o comando \xe9 aplicado \xe0 base de dados de host quando se executa desde um componente (par\xe2metro ignorado fora deste contexto)"})]})]})]}),"\n",(0,d.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(o.p,{children:["O comando ",(0,d.jsx)(o.strong,{children:"METHOD GET CODE"})," devolve no par\xe2metro ",(0,d.jsx)(o.em,{children:"codigo"}),", o conte\xfado dos m\xe9todos designados pelo par\xe2metro ",(0,d.jsx)(o.em,{children:"rota"}),". Este comando pode devolver o c\xf3digo de todos os tipos de m\xe9todos: m\xe9todos base, triggers, m\xe9todos projeto, m\xe9todos formul\xe1rio e m\xe9todos objeto."]}),"\n",(0,d.jsx)(o.p,{children:"Pode utilizar dois tipos de sintaxes, baseadas em arrays texto ou vari\xe1veis texto:"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:"\xa0var tVpath : Text\xa0// vari\xe1veis texto\n\xa0var tVcode : Text\n\xa0METHOD GET CODE(tVpath;tVcode)\xa0// c\xf3digo de somente um m\xe9todo\n"})}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrPaths;0)\xa0// arrays texto\n\xa0ARRAY TEXT(arrCodes;0)\n\xa0METHOD GET CODE(arrPaths;arrCodes)\xa0// c\xf3digos de v\xe1rios m\xe9todos\n"})}),"\n",(0,d.jsx)(o.p,{children:"N\xe3o podem ser combinados as duas sintaxes."}),"\n",(0,d.jsxs)(o.p,{children:["Se passado um caminho de acesso n\xe3o v\xe1lida, o par\xe2metro ",(0,d.jsx)(o.em,{children:"codigo"})," \xe9 deixado vazio e \xe9 gerado um erro."]}),"\n",(0,d.jsxs)(o.p,{children:["No texto do ",(0,d.jsx)(o.em,{children:"codigo"})," gerado por este comando:"]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:['os nomes dos comandos s\xe3o escritos em ingl\xeas, a n\xe3o ser que se use uma vers\xe3o francesa de 4D e tenha sido selecionada a prefer\xeancia "Usar a linguagem francesa e par\xe2metros regionais de sistema" (ver ',(0,d.jsx)(o.a,{href:"/docs/pt/commands/is-a-list",children:"Is a list"}),"). Quando utilizar o par\xe2metro ",(0,d.jsx)(o.em,{children:"op\xe7\xe3o"}),", o c\xf3digo pode conter tokens da linguagem com o objetivo de que seja independente da linguagem de programa\xe7\xe3o 4D e da vers\xe3o  (ver mais adiante)."]}),"\n",(0,d.jsx)(o.li,{children:"Para aumentar a legibilidade do c\xf3digo, o texto \xe9 indentado com os caracteres de tabula\xe7\xe3o em fun\xe7\xe3o das estruturas de programa\xe7\xe3o, da mesma forma que no editor de m\xe9todos."}),"\n",(0,d.jsx)(o.li,{children:"Uma linha \xe9 adicionada no cabe\xe7alho do c\xf3digo gerado que cont\xe9m os metadatos utilizados para a importa\xe7\xe3o do c\xf3digo, por exemplo:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// %attributes = {"lang":"fr","invisible":true,"folder":"Web3"}  \n'})}),"\n",(0,d.jsxs)(o.p,{children:['Durante uma importa\xe7\xe3o, esta linha n\xe3o se importa, se utiliza para definir os atributos a aplicar (os atributos n\xe3o especificados se reinicializam a seu valor como padr\xe3o). O atributo "lang" define a linguagem de exporta\xe7\xe3o e impede uma importa\xe7\xe3o em uma aplica\xe7\xe3o na linguagem diferente (neste caso, se gera um erro). O atributo "folder" cont\xe9m o nome da pasta pai do m\xe9todo; n\xe3o \xe9 mostrada quando o m\xe9todo n\xe3o tem uma pasta pai.',(0,d.jsx)(o.br,{}),"\nPodem ser definidos atributos adicionais. Para saber mais, consulte o comando ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"}),"."]}),"\n",(0,d.jsxs)(o.p,{children:["O par\xe2metro ",(0,d.jsx)(o.em,{children:"op\xe7\xe3o"})," lhe permite seleccionar o modo de exporta\xe7\xe3o do c\xf3digo com respeito aos elementos da linguagem tokenizados dos m\xe9todos:"]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["Se passar 0 ou omitir o par\xe2metro ",(0,d.jsx)(o.em,{children:"op\xe7\xe3o"}),", o c\xf3digo do m\xe9todo se exporta sem tokens, ou seja, da mesma forma que se mostra no editor de m\xe9todos."]}),"\n",(0,d.jsxs)(o.li,{children:["Se passar 1 ou a constante Code with tokens, o c\xf3digo do m\xe9todo se exporta com tokens, ou seja, os elementos tokenizados s\xe3o seguidos por sua refer\xeancia interna no conte\xfado do ",(0,d.jsx)(o.em,{children:"c\xf3digo"}),' exportado. Por exemplo, a express\xe3o"',(0,d.jsx)(o.a,{href:"/docs/pt/commands/string",children:"String"}),'(a)" se exporta "',(0,d.jsx)(o.a,{href:"/docs/pt/commands/string",children:"String"}),':C10(a)", donde "C10" \xe9 a refer\xeancia interna do comando ',(0,d.jsx)(o.a,{href:"/docs/pt/commands/string",children:"String"}),"."]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"Os elementos tokenizados da linguagem incluem:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"os comandos e constantes 4D,"}),"\n",(0,d.jsx)(o.li,{children:"os nomes de tabelas e campos,"}),"\n",(0,d.jsx)(o.li,{children:"os comandos de plug-ins 4D."}),"\n"]}),"\n",(0,d.jsxs)(o.p,{children:["O c\xf3digo exportado com seus tokens faz com que seja independente da linguagem de programa\xe7\xe3o 4D, e tamb\xe9m de qualquer mudan\xe7a de nome poesterior dos elmentos da linguagem. Gra\xe7as aos tokens, o c\xf3digo proporcionado em forma de texto sempre ser\xe1 interpretado corretamente por 4D, por exemplo usando o comando ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/method-set-code",children:"METHOD SET CODE"})," ou por copiar/colar. Para saber mais sobre a sintaxe tokens tokens 4D, consulte ",(0,d.jsx)(o.em,{children:"Usar tokens em f\xf3rmulas"}),"."]}),"\n",(0,d.jsxs)(o.p,{children:["Se o comando for executado desde um componente, se aplica como padr\xe3o para os m\xe9todos do componente. Se passar o par\xe2metro ",(0,d.jsx)(o.em,{children:"*"}),", acessa aos m\xe9todos do banco de dados local."]}),"\n",(0,d.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,d.jsxs)(o.p,{children:["Consulte o exemplo do comando ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/method-set-code",children:"METHOD SET CODE"}),"."]}),"\n",(0,d.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,d.jsxs)(o.p,{children:["Este exemplo ilustra o efeito de par\xe2metro ",(0,d.jsx)(o.em,{children:"op\xe7\xe3o"}),"."]}),"\n",(0,d.jsx)(o.p,{children:'Se quiser exportar o m\xe9todo abaixo "simple_init" :'}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:"\xa0Case of\n\n:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALL RECORDS([Customer])\n\xa0End case\n\n\n"})}),"\n",(0,d.jsx)(o.p,{children:"Se executar o c\xf3digo abaixo:"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'\xa0var $path : Text\n\xa0var $contents : Text\n\xa0$code:=METHOD Get path(Path project method;"simple_init")\n\xa0METHOD GET CODE($path;$contents;0)\xa0//sem tokens\n\xa0TEXT TO DOCUMENT("simple_init.txt";$contents)\n'})}),"\n",(0,d.jsx)(o.p,{children:"O documento resultante conter\xe1:"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-RAW",children:'\xa0 //%attributes = {"lang":"en"} comentario adicionado e reservado por 4DCase of\xa0\xa0\xa0 : (Form event=On Load)\xa0\xa0\xa0 \xa0\xa0\xa0 ALL RECORDS([Customer])End case\n'})}),"\n",(0,d.jsx)(o.p,{children:"Se executar o c\xf3digo abaixo:"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'\xa0var $path : Text\n\xa0var $contents : Text\n\xa0$code:=METHOD Get path(Path project method;"simple_init")\n\xa0METHOD GET CODE($path;$contents;Code with tokens)\xa0//sem tokens\n\xa0TEXT TO DOCUMENT("simple_init.txt";$contents)\n'})}),"\n",(0,d.jsx)(o.p,{children:"O documento resultante conter\xe1:"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-RAW",children:'\xa0 //%attributes = {"lang":"en"} comentario adicionado e reservado por 4DCase of\xa0\xa0\xa0 : (Form event:C388=On Load:K2:1)\xa0\xa0\xa0 \xa0\xa0\xa0 ALL RECORDS:C47([Customer:1])End case\n'})}),"\n",(0,d.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.a,{href:"/docs/pt/commands/method-set-code",children:"METHOD SET CODE"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.em,{children:"Usar tokens em f\xf3rmulas"})]}),"\n",(0,d.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"N\xfamero do comando"}),(0,d.jsx)(o.td,{children:"1190"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Thread-seguro"}),(0,d.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return r},a:function(){return a}});var s=n(667294);let d={},t=s.createContext(d);function a(e){let o=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);