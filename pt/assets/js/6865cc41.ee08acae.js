"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71101"],{57394:function(e,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>a,assets:()=>i,toc:()=>c,contentTitle:()=>s});var a=JSON.parse('{"id":"commands-legacy/trace","title":"TRACE","description":"TRACE","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/trace.md","sourceDirName":"commands-legacy","slug":"/commands/trace","permalink":"/docs/pt/commands/trace","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrace.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"trace","title":"TRACE","slug":"/commands/trace","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"This","permalink":"/docs/pt/commands/this"},"next":{"title":"Type","permalink":"/docs/pt/commands/type"}}'),r=o("785893"),d=o("250065");let t={id:"trace",title:"TRACE",slug:"/commands/trace",displayed_sidebar:"docs"},s=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"TRACE"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,r.jsx)(n.th,{})]})})}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"TRACE"})," se utiliza para executar passo a passo m\xe9todos durante o desenvolvimento de um banco."]}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"TRACE"})," mostra o depurador de 4D no processo atual. A janela",(0,r.jsx)(n.em,{children:"Depurador"})," aparece antes da execu\xe7\xe3o da linha de c\xf3digo seguinte, e continua para cada linha de c\xf3digo que \xe9 executada. Igualmente pode chamar manualmente ao depurador pressionando ",(0,r.jsx)(n.strong,{children:"Alt+Shift+clique direito"})," (Windows) ou ",(0,r.jsx)(n.strong,{children:"Control+Op\xe7\xe3o+comando+clique"})," (Macintosh) durante a execu\xe7\xe3o do c\xf3digo."]}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"TRACE"})," \xe9 ignorado quando o c\xf3digo executando for compilado."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D Server:"})," ",(0,r.jsx)(n.strong,{children:"TRACE"})," \xe9 chamada desde um m\xe9todo de projeto executado no contexto de um Procedimento armazenado, a janela do depurador aparece na m\xe1quina servidor."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dica:"})," n\xe3o chame ",(0,r.jsx)(n.strong,{children:"TRACE"})," quando utilize um formul\xe1rio para o qual os eventos On Activate e On Deactivate tenham sido ativados. Cada vez que a janela do depurador apare\xe7a, estes eventos ser\xe3o invocados; isto criar\xe1 um loop infinito entre estes eventos e a janela do depurador. Se terminar nesta situa\xe7\xe3o, utilize a combina\xe7\xe3o Shif",(0,r.jsx)(n.strong,{children:"t+clique"})," no bot\xe3o Continu",(0,r.jsx)(n.strong,{children:"ar"})," do depurador para sair da\xed. Qualquer chamada posterior a ",(0,r.jsx)(n.strong,{children:"TRACE"})," dentro do processo ser\xe1 ignorada."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"O c\xf3digo a seguir espera que a vari\xe1vel processo CREAR_LENG seja igual a \u201CUS\u201D ou \u201CFR\u201D. Se n\xe3o for o caso, chama ao m\xe9todo de projeto DEBUG:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0Case of\n\xa0\xa0\xa0\xa0:(CREAR_LENG="US")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsBHCmdNom:=[Comandos]CM US Nom\n\xa0\xa0\xa0\xa0:(CREAR_LENG="FR")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsBHCmdNom:=[Comandos]CM FR Nom\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DEBUG("Valor de CREAR_LENG")\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.p,{children:"O m\xe9todo de projeto DEBUG \xe9 listado aqui:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de projeto DEBUG\n\xa0\xa0// DEBUG (Texto)\n\xa0\xa0// DEBUG (Informa\xe7\xe3o opcional de depura\xe7\xe3o)\n\xa0\n\xa0var $1 : Text\n\xa0\n\xa0If(\u25CAvbDebugOn)\xa0// Vari\xe1vel interprocesso definida no M\xe9todo On Startup\n\xa0\xa0\xa0\xa0If(Compiled application)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Count parameters>=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT($1+Char(13)+"Chamar ao desenhador ao x911")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"157"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return t}});var a=o(667294);let r={},d=a.createContext(r);function t(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);