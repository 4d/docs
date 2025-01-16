"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22984"],{525342:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>r,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/font-style-list","title":"FONT STYLE LIST","description":"FONT STYLE LIST ( familiaFonte ; listaEstilosFonte ; listaNomesFonte )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/font-style-list.md","sourceDirName":"commands-legacy","slug":"/commands/font-style-list","permalink":"/docs/pt/commands/font-style-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffont-style-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"font-style-list","title":"FONT STYLE LIST","slug":"/commands/font-style-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FONT LIST","permalink":"/docs/pt/commands/font-list"},"next":{"title":"GET SYSTEM FORMAT","permalink":"/docs/pt/commands/get-system-format"}}'),o=n("785893"),a=n("250065");let i={id:"font-style-list",title:"FONT STYLE LIST",slug:"/commands/font-style-list",displayed_sidebar:"docs"},d=void 0,l={},r=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"FONT STYLE LIST"})," ( ",(0,o.jsx)(s.em,{children:"familiaFonte"})," ; ",(0,o.jsx)(s.em,{children:"listaEstilosFonte"})," ; ",(0,o.jsx)(s.em,{children:"listaNomesFonte"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"familiaFonte"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Nome da fam\xedlia da fonte"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"listaEstilosFonte"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Lista de estilos de fonte suportados pela fam\xedlia da fonte"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"listaNomesFonte"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Lista de nomes completos de fontes suportadas pela fam\xedlia de fonte"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando ",(0,o.jsx)(s.strong,{children:"FONT STYLE LIST"})," devolve a lista de estilos e a lista de nomes completos suportados pela familia de fonte designada pelo par\xe1metro ",(0,o.jsx)(s.em,{children:"familiaFonte"}),". Este comando lhe permite criar interfaces de manejo de fontes e estilos, em particular no contexto das \xe1reas 4D Write Pro (ver ",(0,o.jsx)(s.em,{children:"Refer\xeancia 4D Write Pro"}),")."]}),"\n",(0,o.jsxs)(s.p,{children:["Em ",(0,o.jsx)(s.em,{children:"familiaFonte"}),", passe o nome da familia de fonte para a qual deseja conhecer os estilos e nomes de fontes suportados."]}),"\n",(0,o.jsxs)(s.p,{children:["Em ",(0,o.jsx)(s.em,{children:"listaEstilosFonte"}),", passe um array texto para ser preenchido com a lista de estilos de fonte suportados pela ",(0,o.jsx)(s.em,{children:"familiaFonte"}),'. Os estilos s\xe3o devolvidos utilizando seus nomes localizados (ou seja, um elemento "cursiva" ser\xe1 devolvido como "It\xe1lico" em um sistema espanhol), pelo que se pode construir um menu pop-up "Estilos" localizado, por exemplo.']}),"\n",(0,o.jsxs)(s.p,{children:["Em ",(0,o.jsx)(s.em,{children:"listaNomsFuente"}),", passe um array texto para ser preenchido com a lista completa de nomes de fontes suportadas pela ",(0,o.jsx)(s.em,{children:"familiaFonte"}),". Diferente do array ",(0,o.jsx)(s.em,{children:"listaEstilosFonte"}),", o array ",(0,o.jsx)(s.em,{children:"listaNomsFonte"})," devolve os valores n\xe3o localizados, ou seja, os nomes de fontes baseados na identifica\xe7\xe3o do sistema. Portanto, os nomes de fontes ser\xe3o independentes do idioma do sistema. Os elementos deste array s\xe3o strings destinadas a ser utilizadas com o atributo wk font do comando 4D Write Pro   ",(0,o.jsx)(s.em,{children:"WP SET ATTRIBUTES"}),". Ao utilizar esta funcionalidade, os documentos 4D Write Pro podem armazenar nomes de fonte e que depois ser\xe3o abertas em m\xe1quinas utilizando qualquer linguagem do sistema sem problemas de fontes."]}),"\n",(0,o.jsxs)(s.p,{children:["Se a ",(0,o.jsx)(s.em,{children:"familiaFonte"})," n\xe3o s\xe3o encontradas na m\xe1quina, os arrays s\xe3o devolvidos vazios. Para obter a lista de familias de fontes dispon\xedveis na m\xe1quina, utilize o comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/font-list",children:"FONT LIST"}),"."]}),"\n",(0,o.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.p,{children:'Se quiser selecionar estilos da familia de fontes "Verdana" (se estiver dispon\xedvel):'}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0ARRAY TEXT($aTfonts;0)\n\xa0ARRAY TEXT($aTStyles;0)\n\xa0ARRAY TEXT($aTnames;0)\n\xa0var $numStyle : Integer\n\xa0\n\xa0FONT LIST($aTfonts)\n\xa0$numStyle:=Find in array($aTfonts;"Verdana")\n\xa0If($numStyle#0)\n\xa0\xa0\xa0\xa0FONT STYLE LIST($aTfonts{$numStyle};$aTStyles;$aTnames)\n\xa0End if\n\xa0\n\xa0\xa0//Por exemplo, os arrays resultantes s\xe3o:\n\xa0\xa0//$aTStyles{1}="Normal"\n\xa0\xa0//$aTStyles{1}="Italic"\n\xa0\xa0//$aTStyles{1}="Bold"\n\xa0\xa0//$aTStyles{1}="Bold Italic"\n\xa0\n\xa0\xa0// $aTnames{1}="Verdana"\n\xa0\xa0// $aTnames{1}="Verdana Italic"\n\xa0\xa0// $aTnames{1}="Verdana Bold"\n\xa0\xa0// $aTnames{1}="Verdana Bold Italic"\n'})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"/docs/pt/commands/font-list",children:"FONT LIST"})}),"\n",(0,o.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"1362"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return i}});var t=n(667294);let o={},a=t.createContext(o);function i(e){let s=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);