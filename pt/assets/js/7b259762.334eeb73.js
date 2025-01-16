"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77312"],{436760:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/convert-coordinates","title":"CONVERT COORDINATES","description":"CONVERT COORDINATES ( xCoord ; yCoord ; de ; para )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/convert-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/convert-coordinates","permalink":"/docs/pt/commands/convert-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-coordinates.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"convert-coordinates","title":"CONVERT COORDINATES","slug":"/commands/convert-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLOSE WINDOW","permalink":"/docs/pt/commands/close-window"},"next":{"title":"Current form window","permalink":"/docs/pt/commands/current-form-window"}}'),d=o("785893"),s=o("250065");let a={id:"convert-coordinates",title:"CONVERT COORDINATES",slug:"/commands/convert-coordinates",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"CONVERT COORDINATES"})," ( ",(0,d.jsx)(n.em,{children:"xCoord"})," ; ",(0,d.jsx)(n.em,{children:"yCoord"})," ; ",(0,d.jsx)(n.em,{children:"de"})," ; ",(0,d.jsx)(n.em,{children:"para"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"xCoord"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordenada horizontal de um ponto (Inicial)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Coordenada horizontal de um ponto (Convertida)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"yCoord"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Coordenada vertical de um ponto (inicial)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Coordenada vertical de um ponto (convertida)"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"de"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Sistema de coordenadas que vai ser convertido"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"para"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Sistema de coordenadas para o qual vai converter"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando ",(0,d.jsx)(n.strong,{children:"CONVERT COORDINATES"}),"converte as coordenadas (x;y) de um ponto de um sistema de coordenadas para outro. Os sistemas de coordenada de entrada e sa\xedda compat\xedveis s\xe3o formul\xe1rios e subformul\xe1rios, janelas e a tela. Por exemplo, pode usar este comando para obter as coordenadas no formul\xe1rio principal de um objeto que pertence a um subformul\xe1rio. Isso faz com que seja f\xe1cil criar um menu contextual para qualquer posi\xe7\xe3o personalizada."]}),"\n",(0,d.jsxs)(n.p,{children:["Em ",(0,d.jsx)(n.em,{children:"xCoord"})," e ",(0,d.jsx)(n.em,{children:"yCoord"}),", passe como vari\xe1vies as coordenadas (x;y) do ponto que quiser converter. Ap\xf3s o comando ser executado, estas vari\xe1veis conter\xe3o os valores convertidos."]}),"\n",(0,d.jsxs)(n.p,{children:["No par\xe2metro ",(0,d.jsx)(n.em,{children:"de"}),", passe o sistema de coordenadas inicial que o ponto de input est\xe1 usando, e no par\xe2metro ",(0,d.jsx)(n.em,{children:"para"}),', passe o sistema de coordenadas para o qual vai converter. Ambos par\xe2metros podem tomar um dos valores de constante abaixos, adicionados ao tema "',(0,d.jsx)(n.em,{children:"Janela"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XY Current form"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsxs)(n.td,{children:["A origen \xe9 o canto superior esquerdo do formul\xe1rio atual",(0,d.jsx)(n.br,{})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XY Current window"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsxs)(n.td,{children:["A origem \xe9 a esquina superior esquerda na janela atual ",(0,d.jsx)(n.br,{})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XY Main window"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"Em Windows: origem \xe9 a esquina superior esquerda da janela principal; em OS X: igual que XY Screen"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"XY Screen"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsxs)(n.td,{children:["A origem \xe9 o canto superior esquerdo na tela principal (igual que para o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/screen-coordinates",children:"SCREEN COORDINATES"}),")",(0,d.jsx)(n.br,{})]})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Quando este comando for chamado a partir do m\xe9todo de um subformul\xe1rio ou de um objeto de subformul\xe1rio, e se um dos seletores for XY Current form, ent\xe3o as coordenadas s\xe3o relativas ao pr\xf3prio subformul\xe1rio, e n\xe3o ao seu formul\xe1rio pai."}),"\n",(0,d.jsxs)(n.p,{children:["Quando convertendo de/para a posi\xe7\xe3o de uma janela formul\xe1rio (por exemplo quando convertendo dos resultados de ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/get-window-rect",children:"GET WINDOW RECT"}),", ou para valores passados a ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/open-form-window",children:"Open form window"}),"), XY Main window deve ser usado j\xe1 que \xe9 o sistema de coordenadas usado pelos comandos de janela em Windows. Tamb\xe9m pode ser usado para esse prop\xf3sito em OS X, onde \xe9 equivalente a XY Screen."]}),"\n",(0,d.jsxs)(n.p,{children:["Quando ",(0,d.jsx)(n.em,{children:"de"})," for XY Current form e o ponto estiver na se\xe7\xe3o corpo do formul\xe1rio lista, o resultado depende do contexto de chamada do comando:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Se o comando for chamado no evento On Display Detail, o ponto resultante estar\xe1 localizado na exibi\xe7\xe3o do registro sendo desenhado em tela"}),"\n",(0,d.jsx)(n.li,{children:"Se o comando for chamado fora de um evento On Display Detail mas enquanto um registro estiver sendo editado, o ponto resultante estar\xe1 localizado na exibi\xe7\xe3o do registro sendo editado"}),"\n",(0,d.jsx)(n.li,{children:"De outra forma, o ponto resultate estar\xe1 localizado na exibi\xe7\xe3o do primeiro registro"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,d.jsx)(n.p,{children:'Se quiser abrir um menu pop-up no canto esquerdo inferior do objeto "MyObject".'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// OBJECT GET COORDINATES trabalha no formul\xe1rio atual das coordenadas do sistema\n\xa0\xa0// Menu din\xe2mico pop up usa as coordenadas de sistema da janela atual\n\xa0\xa0// Precisa converter os valores\n\xa0var $left;$top;$right;$bottom : Integer\n\xa0var $menu : Text\n\xa0OBJECT GET COORDINATES(*;"MyObject";$left;$top;$right;$bottom)\n\xa0CONVERT COORDINATES($left;$bottom;XY Current form;XY Current window)\n\xa0$menu:=Create menu\n\xa0APPEND MENU ITEM($menu;"Right here")\n\xa0APPEND MENU ITEM($menu;"Right now")\n\xa0Dynamic pop up menu($menu;"";$left;$bottom)\n\xa0RELEASE MENU($menu)\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:o(257864).Z+"",width:"155",height:"91"})}),"\n",(0,d.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,d.jsxs)(n.p,{children:["Se quiser abrir uma janela pop-up na posi\xe7\xe3o do cursor do mouse, em Windows, precisa converter as coordenadas desde ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/mouse-position",children:"MOUSE POSITION"})," (com o par\xe2metro *) retorna valores baseados na posi\xe7\xe3o da janela MDI:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $mouseX;$mouseY;$mouseButtons : Integer\n\xa0var $window : Integer\n\xa0MOUSE POSITION($mouseX;$mouseY;$mouseButtons)\n\xa0CONVERT COORDINATES($mouseX;$mouseY;XY Current window;XY Main window)\n\xa0$window:=Open form window("PopupWindowForm";Pop up form window;$mouseX;$mouseY)\n\xa0DIALOG("PopupWindowForm")\n\xa0CLOSE WINDOW($window)\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/get-window-rect",children:"GET WINDOW RECT"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/object-get-coordinates",children:"OBJECT GET COORDINATES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/object-set-coordinates",children:"OBJECT SET COORDINATES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/set-window-rect",children:"SET WINDOW RECT"})]}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1365"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},257864:function(e,n,o){o.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return a}});var r=o(667294);let d={},s=r.createContext(d);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);