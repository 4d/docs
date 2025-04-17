"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26003"],{565436:function(e,r,n){n.r(r),n.d(r,{default:()=>l,frontMatter:()=>s,metadata:()=>a,assets:()=>i,toc:()=>c,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/get-serial-port-mapping","title":"GET SERIAL PORT MAPPING","description":"GET SERIAL PORT MAPPING ( numArray ; arrayNome )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-serial-port-mapping.md","sourceDirName":"commands-legacy","slug":"/commands/get-serial-port-mapping","permalink":"/docs/pt/commands/get-serial-port-mapping","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-serial-port-mapping.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-serial-port-mapping","title":"GET SERIAL PORT MAPPING","slug":"/commands/get-serial-port-mapping","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Communications","permalink":"/docs/pt/commands/theme/Communications"},"next":{"title":"RECEIVE BUFFER","permalink":"/docs/pt/commands/receive-buffer"}}'),o=n("785893"),t=n("250065");let s={id:"get-serial-port-mapping",title:"GET SERIAL PORT MAPPING",slug:"/commands/get-serial-port-mapping",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"GET SERIAL PORT MAPPING"})," ( ",(0,o.jsx)(r.em,{children:"numArray"})," ; ",(0,o.jsx)(r.em,{children:"arrayNome"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"numArray"}),(0,o.jsx)(r.td,{children:"Integer array"}),(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:"Array de n\xfamero de portas"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"arrayNome"}),(0,o.jsx)(r.td,{children:"Text array"}),(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:"Array de nomes de portas"})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["O comando GET SERIAL PORT MAPPING retorna dois arrays, ",(0,o.jsx)(r.em,{children:"numArray"})," e ",(0,o.jsx)(r.em,{children:"nomeArray"}),", contendo os n\xfameros de porta serial e os nomes porta serial da m\xe1quina atual."]}),"\n",(0,o.jsx)(r.p,{children:"Esse comando \xe9 \xfatil no macOS, onde o sistema operacional aloca dinamicamente o n\xfamero da porta ao usar um adaptador USB serial. Voc\xea pode endere\xe7ar qualquer porta de s\xe9rie usando o seu nome (est\xe1tica), independentemente do seu n\xfamero real."}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Nota:"})," Este comando n\xe3o retorna valores significativos com portas padr\xe3o. Se voc\xea endere\xe7ar uma porta padr\xe3o, voc\xea deve passar o seu valor (0 ou 1) diretamente usando o comando ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"})," (opera\xe7\xe3o 4D)."]}),"\n",(0,o.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(r.p,{children:"Este m\xe9todo de projeto pode ser usado para tratar a mesma porta serial (sem protocolo), independentemente do n\xfamero que foi atribu\xeddo a ele:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"\xa0ARRAY TEXT($arrNomePortas;0)\n\xa0ARRAY LONGINT($arrNumsPortas;0)\n\xa0var $vNumPorta;$vNumPortaFinal : Integer\n\xa0\n\xa0\xa0//Para saber os n\xfameros atuais das portas seriais\n\xa0GET SERIAL PORT MAPPING($arrNumsPortas;$arrNomePortas)\n\xa0$vPortNum:=Find in array($arrNomePortas;vPortName)\n\xa0\xa0// vPortName cont\xe9m o nome da porta a ser utilizada, que pode vir de uma caixa de di\xe1logo,\n\xa0\xa0//\xa0um valor armazenado em um campo, etc.\n\xa0If(arrNumsPortas{$vNumPuerto}=0)\n\xa0\xa0\xa0\xa0vNumPortaFinal:=0\xa0//caso especial para macOS\n\xa0else\n\xa0\xa0\xa0\xa0vNumPortaFinal:=arrNumsPortas{$vNumPorta}+100\n\xa0End if\n\xa0SET CHANNEL(vNumPortaFinal;params)\xa0//params cont\xe9m os par\xe2metros de comunica\xe7\xe3o\n\xa0...\xa0//Realize as opera\xe7\xf5es desejadas\n\xa0SET CHANNEL(11)\xa0//Fechar a porta\n"})}),"\n",(0,o.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/pt/commands/set-channel",children:"SET CHANNEL"})}),"\n",(0,o.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"909"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return s}});var a=n(667294);let o={},t=a.createContext(o);function s(e){let r=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);