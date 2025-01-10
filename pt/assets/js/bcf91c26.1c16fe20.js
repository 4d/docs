"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11573"],{316351:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/set-help-menu","title":"SET HELP MENU","description":"SET HELP MENU ( menuCol )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-help-menu.md","sourceDirName":"commands-legacy","slug":"/commands/set-help-menu","permalink":"/docs/pt/commands/set-help-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-help-menu.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-help-menu","title":"SET HELP MENU","slug":"/commands/set-help-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELEASE MENU","permalink":"/docs/pt/commands/release-menu"},"next":{"title":"SET MENU BAR","permalink":"/docs/pt/commands/set-menu-bar"}}'),r=o("785893"),d=o("250065");let t={id:"set-help-menu",title:"SET HELP MENU",slug:"/commands/set-help-menu",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET HELP MENU"})," ( ",(0,r.jsx)(n.em,{children:"menuCol"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuCol"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cole\xe7\xe3o de objetos menu"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"SET HELP MENU"})," lhe permite substituir o menu ",(0,r.jsx)(n.strong,{children:"Ajuda"})," por padr\xe3o de 4D pela cole\xe7\xe3o de elementos do menu ",(0,r.jsx)(n.em,{children:"menuCol"})," de modo aplica\xe7\xe3o."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando substitui o menu ",(0,r.jsx)(n.strong,{children:"Ajuda"})," por padr\xe3o do modo aplica\xe7\xe3o em todos os ambientes 4D: interpretado, compilado, fusionado, monousuario e cliente/servidor."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'A propria etiqueta "Ajuda" \xe9 gestionada pelo sistema e n\xe3o pode ser personalizada com este comando.'}),"\n",(0,r.jsx)(n.li,{children:"Os menus de ajuda personalizados n\xe3o s\xe3o compat\xedveis com submenus, marcas de verifica\xe7\xe3o, estilos ou icones."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"menuCol"}),", passe uma cole\xe7\xe3o de objetos de menu que definam todos os elementos do menu de Ajuda personalizado. Cada objeto de menu pode conte as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsxs)(n.strong,{children:["Propriedade",(0,r.jsx)(n.br,{})]})}),(0,r.jsx)(n.th,{children:(0,r.jsxs)(n.strong,{children:["Tipo ",(0,r.jsx)(n.br,{})]})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"title"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Nome do elemento de menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"method"}),(0,r.jsxs)(n.td,{children:["Text | ",(0,r.jsx)(n.a,{href:"https://developer.4d.com/docs/API/FunctionClass#about-4dfunction-objects",children:"4D.Function"})]}),(0,r.jsx)(n.td,{children:'Nome do m\xe9todo projeto ou objeto f\xf3rmula a executar quando selec ionar o elemento do menu. Quando usar esta propriedade, n\xe3o deve passar a propriedade "action" (do contr\xe1rio se ignora "method").'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"worker"}),(0,r.jsx)(n.td,{children:"Text | Number"}),(0,r.jsxs)(n.td,{children:['Nome do worker ou N\xfamero do processo que se encarregar\xe1 da execu\xe7\xe3o do c\xf3digo do "m\xe9todo". V\xe1rias configura\xe7\xf5es s\xe3o compat\xedveis, dependendo do valor da propriedade "worker":',(0,r.jsx)(n.br,{}),' se o nome de worker (Text), 4D utilizar ou criar este worker para executar o "m\xe9todo" (equivalente a ',(0,r.jsx)(n.a,{href:"/docs/pt/commands/call-worker",children:"CALL WORKER"}),") se for um n\xfamero de processo, 4D utiliza este processo se existir, em caso contr\xe1rio, n\xe3o faz nada (equivalente a ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/call-worker",children:"CALL WORKER"}),") se n\xe3o estiver definido e a aplica\xe7\xe3o mostrar um di\xe1logo atual (frontmost dialog), 4D utiliza o processo deste di\xe1logo (equivalente a ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/call-form",children:"CALL FORM"}),") se n\xe3o estiver definido e a aplica\xe7\xe3o n\xe3o mostrar um di\xe1logo atual, 4D chama e utiliza o worker1 (4D remoto/mono usuario) ou o worker ",(0,r.jsx)(n.em,{children:"4D_server_interface"})," (4D Server)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"action"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"A\xe7\xe3o estandarte"}),' a executar quando o elemento de menu for selecionado. Quando se utilizar esta propriedade, a propriedade "method" se ignora se for passada.']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"shortcutKey"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Tecla de acesso direto do elemento (para chamar com a tecla Ctrl/Comando)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"shortcutShift"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["True para adicionar a tecla ",(0,r.jsx)(n.strong,{children:"Mai\xfas"})," ao acesso direto do elemento"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"shortcutAlt"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["True para adicionar a tecla ",(0,r.jsx)(n.strong,{children:"Alt/Op\xe7\xe3o"})," ao acesso direto do elemento"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["O menu ",(0,r.jsx)(n.strong,{children:"Ajuda"})," personalizado mostrar\xe1 os elementos na mesma ordem que a cole\xe7\xe3o."]}),"\n",(0,r.jsxs)(n.p,{children:["Para inserir uma linha separadora, passe ",(0,r.jsx)(n.strong,{children:"null"})," ou um objeto vazio na cole\xe7\xe3o."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Se quiser personalizar o menu ",(0,r.jsx)(n.strong,{children:"Ajuda"})," de sua aplica\xe7\xe3o:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $col : Collection\n\xa0$col:=New collection\n\xa0$col.push(New object("title";"Knowledge base";"worker";"workerHlp";"method";"methodHlp";"shortcutAlt";True;"shortcutKey";"Y"))\n\xa0$col.push(Null)\xa0//para adicionar uma linha de separa\xe7\xe3o\n\xa0$col.push(New object("title";"Tools";"action";ak msc;"shortcutShift";True;"shortcutKey";"Y"))\n\xa0SET HELP MENU($col)\n\xa0SET ABOUT("About this application";"m_about")\xa0//para substituir \'About 4D\' en Windows\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(442928).Z+"",width:"276",height:"100"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/set-about",children:"SET ABOUT"})}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1801"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},442928:function(e,n,o){o.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return t}});var s=o(667294);let r={},d=s.createContext(r);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);