"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55309"],{878806:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>r,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/object-get-help-tip","title":"OBJECT Get help tip","description":"OBJECT Get help tip ( { ;} objeto* ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-help-tip.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-help-tip","permalink":"/docs/pt/20-R7/commands/object-get-help-tip","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-help-tip.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-help-tip","title":"OBJECT Get help tip","slug":"/commands/object-get-help-tip","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get format","permalink":"/docs/pt/20-R7/commands/object-get-format"},"next":{"title":"OBJECT Get horizontal alignment","permalink":"/docs/pt/20-R7/commands/object-get-horizontal-alignment"}}'),s=n("785893"),d=n("250065");let r={id:"object-get-help-tip",title:"OBJECT Get help tip",slug:"/commands/object-get-help-tip",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"OBJECT Get help tip"})," ( {* ;} ",(0,s.jsx)(t.em,{children:"objeto"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Par\xe2metro"}),(0,s.jsx)(t.th,{children:"Tipo"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operador"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Se especificado, objeto \xe9 um nome de objeto(cadeia)Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objeto"}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Nome de objeto (se especificado *) ou Vari\xe1vel (se omitido *)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resultado"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Mensagem de ajuda do objeto"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(t.p,{children:["O comando ",(0,s.jsx)(t.strong,{children:"OBJECT Get help tip"})," devolve a mensagem de ajuda associado ao objeto ou aos objetos designados pelos par\xe2metros ",(0,s.jsx)(t.em,{children:"objeto"})," e ",(0,s.jsx)(t.em,{children:"*"})," no processo atual."]}),"\n",(0,s.jsxs)(t.p,{children:["Se passado o par\xe2metro opcional ",(0,s.jsx)(t.em,{children:"*"}),", indica que o par\xe2metro ",(0,s.jsx)(t.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se n\xe3o passa este par\xe2metro, isto indica que o par\xe2metro ",(0,s.jsx)(t.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, uma referencia passa de vari\xe1vel em lugar de uma cadeia."]}),"\n",(0,s.jsxs)(t.p,{children:["O comando devolve a mensagem de ajuda atual associado ao objeto, tal como est\xe1 definido no modo Desenho ou para o processo utilizando o comando ",(0,s.jsx)(t.a,{href:"/docs/pt/20-R7/commands/object-set-help-tip",children:"OBJECT SET HELP TIP"}),". La cadeia outra vez mostra o mensagem como aparece quando se executa o formul\xe1rio. Se cont\xe9m elementos vari\xe1veis (",(0,s.jsx)(t.em,{children:"resname"})," xliff ou referencias 4D), se interpretam em fun\xe7\xe3o do contexto."]}),"\n",(0,s.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(t.p,{children:"O t\xedtulo de um bot\xe3o imagem \xe9 guardado em forma de mensagem de ajuda. Este t\xedtulo se guarda em um arquivo xliff e difere em fun\xe7\xe3o da linguagem atual de la aplica\xe7\xe3o:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0OBJECT SET HELP TIP(*;"button1";":xliff:btn_discover")\n\xa0$helpmessage:=OBJECT Get help tip(*;"button1")\n\xa0\xa0// $helpmessage cont\xe9m por exemplo "D\xe9couvrir" com um 4D franc\xeas e "Discover" com um 4D ingl\xeas.\n'})}),"\n",(0,s.jsx)(t.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/pt/20-R7/commands/object-set-help-tip",children:"OBJECT SET HELP TIP"})}),"\n",(0,s.jsx)(t.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"N\xfamero do comando"}),(0,s.jsx)(t.td,{children:"1182"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread-seguro"}),(0,s.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var o=n(667294);let s={},d=o.createContext(s);function r(e){let t=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);