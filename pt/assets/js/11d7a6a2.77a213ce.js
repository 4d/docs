"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26666"],{607093:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>d,assets:()=>l,toc:()=>i,contentTitle:()=>r});var d=JSON.parse('{"id":"commands-legacy/window-list","title":"WINDOW LIST","description":"WINDOW LIST ( janelas {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/window-list.md","sourceDirName":"commands-legacy","slug":"/commands/window-list","permalink":"/docs/pt/commands/window-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwindow-list.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"window-list","title":"WINDOW LIST","slug":"/commands/window-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Window kind","permalink":"/docs/pt/commands/window-kind"},"next":{"title":"Window process","permalink":"/docs/pt/commands/window-process"}}'),o=s("785893"),t=s("250065");let a={id:"window-list",title:"WINDOW LIST",slug:"/commands/window-list",displayed_sidebar:"docs"},r=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WINDOW LIST"})," ( ",(0,o.jsx)(n.em,{children:"janelas"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"janelas"}),(0,o.jsx)(n.td,{children:"Array"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Array de n\xfameros de refer\xeancia de janelas"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Se especificado, considere janela flutuante, se omitido, ignore janela flutuante"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando WINDOW LIST preenche o array ",(0,o.jsx)(n.em,{children:"janelas"}),' com os n\xfameros de refer\xeancia das janelas abertas atualmente em todos os processos (processos kernel ou usu\xe1rio). Apenas janelas "vis\xedveis" (ou seja, n\xe3o ocultadas) s\xe3o retornadas.']}),"\n",(0,o.jsxs)(n.p,{children:["Se n\xe3o passar o par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", as janelas flutuantes s\xe3o ignoradas."]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"O m\xe9todo de projeto abaixo coloca em mosaico todas as janelas abertas atualmente, exceto as janelas suspensas e as caixas de di\xe1logo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de projeto TILE WINDOWS\n\xa0\n\xa0WINDOW LIST($alWnd)\n\xa0$vlLeft:=10\n\xa0$vlTop:=80\xa0// Deixar espa\xe7o para a barra de ferramentas\n\xa0For($vlWnd;1;Size of array($alWnd))\n\xa0\xa0\xa0\xa0If(Window kind($alWnd{$vlWnd})#Modal dialog)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWR:=$vlLeft+($vlWR-$vlWL)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWB:=$vlTop+($vlWB-$vlWT)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWL:=$vlLeft\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWT:=$vlTop\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlLeft:=$vlLeft+10\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlTop:=$vlTop+25\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," este m\xe9todo pode ser melhorado adicionando testes do tamanho da janela principal (em Windows) ou do tamanho e localiza\xe7\xe3o das telas (em Macintosh)."]}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/window-kind",children:"Window kind"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/window-process",children:"Window process"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"442"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return a}});var d=s(667294);let o={},t=d.createContext(o);function a(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);