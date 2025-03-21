"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79043"],{354454:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/hide-menu-bar","title":"HIDE MENU BAR","description":"HIDE MENU BAR","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/hide-menu-bar.md","sourceDirName":"commands-legacy","slug":"/commands/hide-menu-bar","permalink":"/docs/pt/commands/hide-menu-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhide-menu-bar.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"hide-menu-bar","title":"HIDE MENU BAR","slug":"/commands/hide-menu-bar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET TABLE TITLES","permalink":"/docs/pt/commands/get-table-titles"},"next":{"title":"Macintosh command down","permalink":"/docs/pt/commands/macintosh-command-down"}}'),d=t("785893"),s=t("250065");let o={id:"hide-menu-bar",title:"HIDE MENU BAR",slug:"/commands/hide-menu-bar",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"HIDE MENU BAR"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(n.table,{children:(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,d.jsx)(n.th,{})]})})}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(n.p,{children:"O comando HIDE MENU BAR torna invis\xedvel a barra de menus."}),"\n",(0,d.jsx)(n.p,{children:"Se a barra de menus j\xe1 estiver oculta, o comando n\xe3o faz nada"}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"O m\xe9todo abaixo mostra um registro em toda a tela (Macintosh) at\xe9 que d\xea um clique:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0HIDE TOOL BAR\n\xa0HIDE MENU BAR\n\xa0Open window(-1;-1;1+Screen width;1+Screen height;Alternate dialog box)\n\xa0FORM SET INPUT([Pinturas];"Full Screen 800")\n\xa0DISPLAY RECORD([Pinturas])\n\xa0Repeat\n\xa0\xa0\xa0\xa0MOUSE POSITION($vlX;$vlY;$vlBoton)\n\xa0Until($vlBoton#0)\n\xa0CLOSE WINDOW\n\xa0SHOW MENU BAR\n\xa0SHOW TOOL BAR\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," em Windows, a janela estar\xe1 limitada pelos limites da janena da aplica\xe7\xe3o."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/hide-tool-bar",children:"HIDE TOOL BAR"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/show-menu-bar",children:"SHOW MENU BAR"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/show-tool-bar",children:"SHOW TOOL BAR"})]}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"432"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Proibido no servidor"}),(0,d.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(667294);let d={},s=r.createContext(d);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);