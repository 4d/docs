"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66150"],{960068:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>t,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/spell-get-dictionary-list","title":"SPELL GET DICTIONARY LIST","description":"SPELL GET DICTIONARY LIST ( lingID ; lingArquivos ; lingNoms )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/spell-get-dictionary-list.md","sourceDirName":"commands-legacy","slug":"/commands/spell-get-dictionary-list","permalink":"/docs/pt/20-R8/commands/spell-get-dictionary-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-get-dictionary-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"spell-get-dictionary-list","title":"SPELL GET DICTIONARY LIST","slug":"/commands/spell-get-dictionary-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SPELL Get current dictionary","permalink":"/docs/pt/20-R8/commands/spell-get-current-dictionary"},"next":{"title":"SPELL SET CURRENT DICTIONARY","permalink":"/docs/pt/20-R8/commands/spell-set-current-dictionary"}}'),i=s("785893"),d=s("250065");let l={id:"spell-get-dictionary-list",title:"SPELL GET DICTIONARY LIST",slug:"/commands/spell-get-dictionary-list",displayed_sidebar:"docs"},o=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"SPELL GET DICTIONARY LIST"})," ( ",(0,i.jsx)(e.em,{children:"lingID"})," ; ",(0,i.jsx)(e.em,{children:"lingArquivos"})," ; ",(0,i.jsx)(e.em,{children:"lingNoms"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Par\xe2metro"}),(0,i.jsx)(e.th,{children:"Tipo"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"lingID"}),(0,i.jsx)(e.td,{children:"Integer array"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"IDs \xfanicos das linguagens"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"lingArquivos"}),(0,i.jsx)(e.td,{children:"Text array"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"Nomes dos arquivos de linguagem instalados"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"lingNoms"}),(0,i.jsx)(e.td,{children:"Text array"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"Nomes locais das linguagens"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(e.p,{children:["O comando ",(0,i.jsx)(e.strong,{children:"SPELL GET DICTIONARY LIST"})," devolve nos arrays ",(0,i.jsx)(e.em,{children:"lingID"}),", ",(0,i.jsx)(e.em,{children:"lingArquivos"})," e ",(0,i.jsx)(e.em,{children:"lingNoms"}),", os IDs, os nomes de arquivos e os nomes dos linguagens correspondentes aos arquivos de dicion\xe1rio Hunspell instalados no equipo."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Nota"}),": Para maior informa\xe7\xe3o sobre os dicion\xe1rios Hunspell, consulte a se\xe7\xe3o ",(0,i.jsx)(e.em,{children:"Corre\xe7\xe3o ortogr\xe1fica"})," no manual de ",(0,i.jsx)(e.em,{children:"Refer\xeancia de Desenho"}),"."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"lingID"})," recebe os n\xfameros de ID gerados automaticamente e utilizados com o comando ",(0,i.jsx)(e.a,{href:"/docs/pt/20-R8/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"}),".",(0,i.jsx)(e.br,{}),"\nNote que os IDs s\xe3o \xfanicos e s\xe3o baseados nos nomes de arquivos. Este comando se utiliza principalmente durante o desenvolvimento, n\xe3o t\xeam que regenerar os IDS cada vez que a base seja executada."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"lingArquivos"})," recebe os nomes dos arquivos de dicion\xe1rios instalados na m\xe1quina."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"lingNoms"}),' recebe os nomes das linguagens expressadas na linguagem atual da aplica\xe7\xe3o. Por exemplo, para um dicion\xe1rio franc\xeas, o valor "fran\xe7ais (France)" ser\xe1 devolvido em uma m\xe1quina configurada em franc\xeas e "French (France)" em um sistema ingl\xeas. O nome da linguagem \xe9 seguido por "- Hunspell". Este campo s\xf3 \xe9 v\xe1lido para os arquivos "conhecidos" por 4D. Para os arquivos n\xe3o conhecidos (por exemplo, arquivos personalizados), \xe9 devolvido o nome "N/A - Hunspell". Este principio n\xe3o lhe impede utilizar o dicion\xe1rio (se o arquivo correspondente \xe9 v\xe1lido), o ID devolvido pode ser passado ao comando ',(0,i.jsx)(e.a,{href:"/docs/pt/20-R8/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(e.p,{children:'Voc\xea coloca "fr-classic+reform1990.aff" e "fr-classic+reform1990.dic" como tamb\xe9m "fr-dentist.aff" e "fr-dentist.dic" no diret\xf3rio Hunspell:'}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:"\xa0ARRAY LONGINT($langID;0)\n\xa0ARRAY TEXT($dicName;0)\n\xa0ARRAY TEXT($langDesc;0)\n\xa0SPELL GET DICTIONARY LIST($langID;$dictName;$langDesc)\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"$langID"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"$dictName"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"$langDesc"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"65536"}),(0,i.jsx)(e.td,{children:"en_GB"}),(0,i.jsx)(e.td,{children:"English (UK)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"65792"}),(0,i.jsx)(e.td,{children:"en_US"}),(0,i.jsx)(e.td,{children:"English (USA)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"131072"}),(0,i.jsx)(e.td,{children:"de_DE"}),(0,i.jsx)(e.td,{children:"German (Germany)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"196608"}),(0,i.jsx)(e.td,{children:"es_ES"}),(0,i.jsx)(e.td,{children:"Spanish"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"262144"}),(0,i.jsx)(e.td,{children:"fr_FR"}),(0,i.jsx)(e.td,{children:"French (France)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"589824"}),(0,i.jsx)(e.td,{children:"nb_NO"}),(0,i.jsx)(e.td,{children:"Norwegian Bokmal (Norway)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1074036166"}),(0,i.jsx)(e.td,{children:"fr-classic+reform1990"}),(0,i.jsx)(e.td,{children:"French (France) - Hunspell"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1073901273"}),(0,i.jsx)(e.td,{children:"fr-dentist"}),(0,i.jsx)(e.td,{children:"No description - Hunspell"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"/docs/pt/20-R8/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"})}),"\n",(0,i.jsx)(e.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"N\xfamero do comando"}),(0,i.jsx)(e.td,{children:"1204"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Thread-seguro"}),(0,i.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return l}});var r=s(667294);let i={},d=r.createContext(i);function l(n){let e=r.useContext(d);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);