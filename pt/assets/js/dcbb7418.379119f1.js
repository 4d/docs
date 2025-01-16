"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72986"],{741291:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/pop-up-menu","title":"Pop up menu","description":"Pop up menu ( conteudo {; padrao {; coordX ; coordY}} )  : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/pop-up-menu.md","sourceDirName":"commands-legacy","slug":"/commands/pop-up-menu","permalink":"/docs/pt/20-R7/commands/pop-up-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpop-up-menu.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pop-up-menu","title":"Pop up menu","slug":"/commands/pop-up-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PLAY","permalink":"/docs/pt/20-R7/commands/play"},"next":{"title":"POST CLICK","permalink":"/docs/pt/20-R7/commands/post-click"}}'),r=n("785893"),a=n("250065");let d={id:"pop-up-menu",title:"Pop up menu",slug:"/commands/pop-up-menu",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Pop up menu"})," ( ",(0,r.jsx)(o.em,{children:"conteudo"})," {; ",(0,r.jsx)(o.em,{children:"padrao"})," {; ",(0,r.jsx)(o.em,{children:"coordX"})," ; ",(0,r.jsx)(o.em,{children:"coordY"}),"}} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"conteudo"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Defini\xe7\xe3o texto do menu"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"padrao"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"N\xfamero do item de menu selecionado como padr\xe3o"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"coordX"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Coordenadas X da esquina esquerda superior"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"coordY"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Coordenadas Y de esquina superior esquerda"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Resultado"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"N\xfamero de item de menu selecionado"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando Pop up menu mostra um menu pop up na localiza\xe7\xe3o atual do mouse ou na localiza\xe7\xe3o definida pelos par\xe2metros opcionais ",(0,r.jsx)(o.em,{children:"coordX"})," e ",(0,r.jsx)(o.em,{children:"coordY"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Para seguir as regras de interface de usu\xe1rio, em geral este comando deve chamado em resposta a um clique e se o bot\xe3o do mouse ainda estiver pressionado."}),"\n",(0,r.jsxs)(o.p,{children:["Os elementos do menu pop up se definem com o par\xe2metro ",(0,r.jsx)(o.em,{children:"conteudo"}),", da maneira abaixo:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:'Cada elemento se separa dos outros por um ponto e v\xedrgula (;). Por exemplo, "Element1;Element2;Element3".'}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Para desativar um elemento, coloque um par\xeanteses aberto (",(0,r.jsx)(o.em,{children:"("}),") no texto do elemento."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:'Para definir uma linha de separa\xe7\xe3o, passe "-" ou "(-" como texto do elemento.'}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Para definir o estilo de fonte para uma linha, coloque no texto do elemento um sinal menor que (<) seguido por um desses caracteres:"}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"<B"}),(0,r.jsx)(o.th,{children:"Negrito"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"<I"}),(0,r.jsx)(o.td,{children:"It\xe1lica"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"<U"}),(0,r.jsx)(o.td,{children:"Sublinhado"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"<O"}),(0,r.jsx)(o.td,{children:"Contorno (Macintosh apenas)"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"<S"}),(0,r.jsx)(o.td,{children:"Sombra (Macintosh apenas)"})]})]})]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Para adicionar uma marca de sele\xe7\xe3o a um elemento, coloque no texto do elemento um sinal de exclama\xe7\xe3o (!) seguido pelo caractere que deseja utilizar como marca de sele\xe7\xe3o."}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Em Macintosh, o caractere \xe9 mostrado diretamente. Para mostrar a marca padr\xe3o sem importar a vers\xe3o ou a linguagem do sistema, utilize a instru\xe7\xe3o: Char(18)."}),"\n",(0,r.jsx)(o.li,{children:"Em Windows, \xe9 mostrada uma marca padr\xe3o, sem importar o caractere que passe."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.li,{children:"Para adicionar um \xedcone a um elemento, coloque no texto do elemento um acento circunflexo (^) seguido por um caractere cujo c\xf3digo mais 208 \xe9 o recurso do \xedcone Mac OS."}),"\n",(0,r.jsx)(o.li,{children:"Para adicionar um atalho a um elemento, coloque no texto do elemento uma barra obl\xedqua (/) seguida pelo caractere do atalho. Note que esta \xfaltima op\xe7\xe3o \xe9 informativa apenas; nenhum atalho de teclado ativa o menu pop up. Entretanto, pode incluir um atalho se o elemento de menu pop up tiver4 um equivalente na barra de menus principal de sua aplica\xe7\xe3o."}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Dica"}),": se for poss\xedvel desativar o mecanismo de interpreta\xe7\xe3o dos caracteres especiais (!, /, etc.) no menu pop up para, por exemplo, ter esses caracteres inclu\xeddos nos textos. Para fazer isso, simplesmente inicie o par\xe2metro conte\xfado com a instru\xe7\xe3o Char(1) depois utilize esta instru\xe7\xe3o como separador:",(0,r.jsx)(o.br,{}),'\nconte\xfado:=Char(1)+"1/4"+Char(1)+"1/2"+Char(1)+"3/4")']}),"\n",(0,r.jsx)(o.p,{children:"Note que uma vez executada esta instru\xe7\xe3o, n\xe3o \xe9 poss\xedvel atribuir estilos ou atalhos ao menu pop up."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Conselho"}),": \xe9 poss\xedvel desativar o mecanismo de interpreta\xe7\xe3o dos caracteres especiais (!, /, etc.) no menu pop up para, por exemplo, ter esses caracteres inclu\xeddos nos textos. Para fazer isso, simplesmente inicie o par\xe2metro ",(0,r.jsx)(o.em,{children:"conteudo"})," com a instru\xe7\xe3o Char(1) depois utilize esta instru\xe7\xe3o como separador:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0conte\xfado:=Char(1)+"1/4"+Char(1)+"1/2"+Char(1)+"3/4")\n'})}),"\n",(0,r.jsx)(o.p,{children:"Note que quando tiver executada esta instru\xe7\xe3o, n\xe3o \xe9 poss\xedvel atribuir estilos ou atalhos ao menu pop up."}),"\n",(0,r.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,r.jsx)(o.em,{children:"padrao"})," lhe permite especificar o elemento de menu selecionado por padr\xe3o quando se mostra o menu. Passe um valor entre 1 e o n\xfamero de elementos do menu. Se omitir este par\xe2metro, o comando seleciona por padr\xe3o o primeiro elemento do menu."]}),"\n",(0,r.jsxs)(o.p,{children:["Os par\xe2metros opcionais ",(0,r.jsx)(o.em,{children:"coordX"})," e ",(0,r.jsx)(o.em,{children:"coordY"})," s\xe3o utilizadas para designar a localiza\xe7\xe3o do menu pop-up a mostrar. Em ",(0,r.jsx)(o.em,{children:"coordX"})," e ",(0,r.jsx)(o.em,{children:"coordY"}),", passe respectivamente as coordenadas horizontal e vertical da esquina superior esquerda do menu. Estas coordenadas devem ser expressas em pixels no sistema de coordenadas local do formul\xe1rio atual. Estes dois par\xe2metros devem ser passados juntos; se s\xf3 for passado um, ser\xe1 ignorado."]}),"\n",(0,r.jsxs)(o.p,{children:["Se utilizar os par\xe2metros ",(0,r.jsx)(o.em,{children:"coordX"})," e ",(0,r.jsx)(o.em,{children:"coordY"}),", o par\xe2metro por padr\xe3o \xe9 ignorado. Neste caso, o mouse n\xe3o \xe9 encontrado necessariamente no n\xedvel do menu pop up."]}),"\n",(0,r.jsx)(o.p,{children:"Estes par\xe2metros s\xe3o \xfateis especialmente para administrar os bot\xf5es 3D com um menu pop up associado."}),"\n",(0,r.jsx)(o.p,{children:"Se seleciona um elemento de menu, o comando retorna seu n\xfamero; do contr\xe1rio, retorna zero (0)."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," utilize os menus pop up com um n\xfamero razo\xe1vel de elementos. Se deseja mostrar mais de 50 elementos, pode utilizar melhor uma \xe1rea de rolagem em um formul\xe1rio."]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"O m\xe9todo de projeto MEU MENU RAPIDO faz aparecer um menu de navega\xe7\xe3o pop up:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de projeto MEU MENU RAPIDO\n\xa0MOUSE POSITION($vlMouseX;$vlMouseY;$vlBotao)\n\xa0 If(Macintosh control down&NBSP;|&NBSP;($vlBotao=2))\n    $vtElementos:="Sobre este banco...<I;(-;!-Outras op\xe7\xf5es;(-"\n    For($vlTabela;1;Get last table number)\n       If(Is table number valid($vlTabela))\n          $vtElementos:=$vtElementos+";"+Table name($vlTabela)\n       End if\n    End for\n    $vlEscolhaUsuario:=Pop up menu($vtElementos)\n    Case of\n       :($vlEscolhaUsuario=1)\n  ` Mostrar informa\xe7\xe3o\n       :($vlEscolhaUsuario=2)\n  ` Mostrar as op\xe7\xf5es\n       Else\n          If($vlEscolhaUsuario>0)\n  ` Ir a tabela cujo n\xfamero for $vlEscolhaUsuario-4\n          End if\n    End case\n End if\n\n'})}),"\n",(0,r.jsx)(o.p,{children:"Este m\xe9todo de projeto pode ser chamado desde:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"o m\xe9todo de um objeto de formul\xe1rio que reage a um clique sem esperar que o bot\xe3o do mouse seja liberado (por exemplo um bot\xe3o invis\xedvel)"}),"\n",(0,r.jsx)(o.li,{children:"um processo que \u201Cespi a\u201D os eventos e se comunica com os outros processos"}),"\n",(0,r.jsxs)(o.li,{children:["um m\xe9todo de gest\xe3o de eventos instalado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Nos dois \xfaltimos casos, n\xe3o \xe9 necess\xe1rio que o clique seja produzido em um objeto de formul\xe1rio. Esta \xe9 uma das janelas do comando Pop up menu. Geralmente, os menus pop up s\xe3o mostrados atrav\xe9s de objetos de formul\xe1rio. Com Pop up menu, pode mostrar um menu pop up em qualquer lugar."}),"\n",(0,r.jsx)(o.p,{children:"O menu pop up \xe9 mostrado em Windows ao pressionar o bot\xe3o direito do mouse, e em Macintosh ao pressionar Control-Clique. Note, entretanto, que o m\xe9todo n\xe3o verifica se na verdade houve um clique; o m\xe9todo chamante faz esse teste."}),"\n",(0,r.jsx)(o.p,{children:"O pr\xf3ximo \xe9 o menu pop-up tal como aparece em Windows (esquerda) e Macintosh (direita). Note a marca de sele\xe7\xe3o padr\xe3o para a vers\xe3o Windows."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:n(805750).Z+"",width:"450",height:"155"})}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/mouse-position",children:"MOUSE POSITION"})]}),"\n",(0,r.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"542"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},805750:function(e,o,n){n.d(o,{Z:function(){return s}});let s=n.p+"assets/images/pict36394.en-ee74214a9708b5aa49412a10c758263c.png"},250065:function(e,o,n){n.d(o,{Z:function(){return t},a:function(){return d}});var s=n(667294);let r={},a=s.createContext(r);function d(e){let o=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);