"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77193"],{24252:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>s});var o=JSON.parse('{"id":"commands-legacy/hide-tool-bar","title":"HIDE TOOL BAR","description":"HIDE TOOL BAR","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/hide-tool-bar.md","sourceDirName":"commands-legacy","slug":"/commands/hide-tool-bar","permalink":"/docs/pt/20-R8/commands/hide-tool-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhide-tool-bar.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"hide-tool-bar","title":"HIDE TOOL BAR","slug":"/commands/hide-tool-bar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get window title","permalink":"/docs/pt/20-R8/commands/get-window-title"},"next":{"title":"HIDE WINDOW","permalink":"/docs/pt/20-R8/commands/hide-window"}}'),r=a("785893"),t=a("250065");let d={id:"hide-tool-bar",title:"HIDE TOOL BAR",slug:"/commands/hide-tool-bar",displayed_sidebar:"docs"},s=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"HIDE TOOL BAR"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,r.jsx)(n.th,{})]})})}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando HIDE TOOL BAR  gerencia a visualiza\xe7\xe3o das barras de ferramentas personalizadas criadas pelo comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/open-form-window",children:"Open form window"})," para o processo atual."]}),"\n",(0,r.jsxs)(n.p,{children:["Se uma janela barra de ferramentas foi criada pelo comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/open-form-window",children:"Open form window"})," com a op\xe7\xe3o Toolbar form window, o comando oculta esta janela. Se a janela barra de ferramentas j\xe1 estava oculta ou se nenhuma janela deste tipo foi criada, o comando n\xe3o faz nada."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Em macOS, foi definido uma barra de ferramentas personalizada e uma janela estandarte que tem a op\xe7\xe3o Has full screen mode Mac. Quando uma janela estandarte \xe9 maximizada por um usu\xe1rio enquanto \xe9 mostrada a janela da barra de ferramentas, voc\xea n\xe3o deseja que a barra de ferramentas sobrep\xf5e a janela maximizada."}),"\n",(0,r.jsxs)(n.p,{children:["Para evitar isto, no evento formul\xe1rio On Resize da janela estandarte, \xe9 necess\xe1rio detectar quando a janela passa a modo tela completa e logo chamar ",(0,r.jsx)(n.strong,{children:"HIDE TOOL BAR"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Resize)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($left;$top;$right;$bottom)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Screen height=($bottom-$top))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0HIDE TOOL BAR\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SHOW TOOL BAR\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/show-tool-bar",children:"SHOW TOOL BAR"})}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"434"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return d}});var o=a(667294);let r={},t=o.createContext(r);function d(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);