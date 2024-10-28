"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94918],{337519:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>t,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(474848),r=n(28453);const a={id:"volume-attributes",title:"VOLUME ATTRIBUTES",slug:"/commands/volume-attributes",displayed_sidebar:"docs"},t=void 0,l={id:"commands-legacy/volume-attributes",title:"VOLUME ATTRIBUTES",description:"VOLUME ATTRIBUTES ( volume ; tamanho ; usado ; livre )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/volume-attributes.md",sourceDirName:"commands-legacy",slug:"/commands/volume-attributes",permalink:"/docs/pt/commands/volume-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvolume-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"volume-attributes",title:"VOLUME ATTRIBUTES",slug:"/commands/volume-attributes",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"TEXT TO DOCUMENT",permalink:"/docs/pt/commands/text-to-document"},next:{title:"VOLUME LIST",permalink:"/docs/pt/commands/volume-list"}},i={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const o={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"VOLUME ATTRIBUTES"})," ( ",(0,s.jsx)(o.em,{children:"volume"})," ; ",(0,s.jsx)(o.em,{children:"tamanho"})," ; ",(0,s.jsx)(o.em,{children:"usado"})," ; ",(0,s.jsx)(o.em,{children:"livre"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"volume"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome volume"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"tamanho"}),(0,s.jsx)(o.td,{children:"Real"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Tamanho do volume expresso em bytes"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"usado"}),(0,s.jsx)(o.td,{children:"Real"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Espa\xe7o usado expresso em bytes"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"livre"}),(0,s.jsx)(o.td,{children:"Real"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Espa\xe7o livre expresso em bytes"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando VOLUME ATTRIBUTES retorna em bytes o tamanho, o espa\xe7o utilizado e o espa\xe7o livre do volume cujo nome se passa em ",(0,s.jsx)(o.em,{children:"volume"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota"}),": se ",(0,s.jsx)(o.em,{children:"volume"})," indica um volume remoto n\xe3o montado, a vari\xe1vel OK toma o valor 0 e os tr\xeas par\xe2metros retornam -1."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"Sua aplica\xe7\xe3o inclui algumas opera\xe7\xf5es por lotes que s\xe3o executadas na noite ou os fins de semana para armazenar arquivos tempor\xe1rios grandes em disco. Para que este processo seja t\xe3o autom\xe1tico e flex\xedvel quanto seja poss\xedvel, voc\xea escreve uma rotina que pesquisar\xe1 automaticamente o primeiro volume cujo espa\xe7o livre seja suficiente para seus arquivos tempor\xe1rios. Voc\xea pode escrever o seguinte m\xe9todo de projeto:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de projeto Buscar volume para espa\xe7o\n\xa0\xa0// Buscar volume para espa\xe7o ( Real ) -> Alfa\n\xa0\xa0// Buscar volume para espa\xe7o ( Espa\xe7o necess\xe1rio em bytes ) -> Nome do volume ou string vazia\n\xa0\n\xa0C_STRING(31;$0)\n\xa0C_STRING(255;$vsDocNome)\n\xa0var $vlNbVolumens;$vlVolumens : Integer\n\xa0var $1;$vlTamanho;$vlUtilizado;$vlLivre : Real\n\xa0var $vhDocRef : Time\n\xa0\n\xa0\xa0// Inicializar o resultado da fun\xe7\xe3o\n\xa0$0:=""\n\xa0\xa0// Proteger todas as opera\xe7\xf5es de entrada/saida com um m\xe9todo de interrup\xe7\xe3o de erros\n\xa0ON ERR CALL("ERROR METHOD")\n\xa0\xa0// Obter a lista dos volumens\n\xa0ARRAY STRING(31;$asVolumens;0)\n\xa0gError:=0\n\xa0VOLUME LIST($asVolumens)\n\xa0If(gError=0)\n\xa0\xa0// Se rodar em Windows, ignorar os dois leitores de diskettes\n\xa0\xa0\xa0\xa0If(On Windows)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlVolume:=Find in array($asVolumens;"A:\\\\")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlVolume>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($asVolumene;$vlVolume)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlVolume:=Find in array($asVolumene;"B:\\\\")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlVolume>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FORM ARRAY($asVolumene;$vlVolume)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0$vlNbVolumes:=Size of array($asVolumes)\n\xa0\xa0// Para cada volume\n\xa0\xa0\xa0\xa0For($vlVolume;1;$vlNbVolumes)\n\xa0\xa0// Obter o tamanho, o espa\xe7o utilizado e o espa\xe7o livre\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0gError:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0VOLUME ATTRIBUTES($asVolumes{$vlVolume};$vlTamanho;$vlUtilizado;$vlLivre)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(gError=0)\n\xa0\xa0// O espa\xe7o livre \xe9 suficiente (mais de 32K extra) ?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlLivre>=($1+32768))\n\xa0\xa0// Se for assim, verificar se o volume n\xe3o est\xe1 bloqueado..\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsDocNome:=$asVolumes{$vlVolume}+Char(Directory symbol)+"XYZ"+String(Random)+".TXT"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhDocRef:=Create document($vsDocNome)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocNome)\n\xa0\xa0// Se tudo estiver bem, devolver o nome do volume\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=$asVolumes{$vlVolume}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlVolume:=$vlNbVolumes+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n\xa0ON ERR CALL("")\n'})}),"\n",(0,s.jsx)(o.p,{children:"Quando tiver sido adicionado este m\xe9todo de projeto a sua aplica\xe7\xe3o, pode escrever:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0$vsVolume:=Buscar volume para espa\xe7o(100*1024*1024)\n\xa0If($vsVolume#"")\n\xa0\xa0// Continuar\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("\xc9 necess\xe1rio um volume com pelo menos 100 MB de espa\xe7o livre!")\n\xa0End if\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/commands/volume-list",children:"VOLUME LIST"})})]})}function c(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>l});var s=n(296540);const r={},a=s.createContext(r);function t(e){const o=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);