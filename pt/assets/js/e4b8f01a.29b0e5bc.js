"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45946"],{426058:function(e,s,o){o.r(s),o.d(s,{default:()=>m,frontMatter:()=>a,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/blob-to-print-settings","title":"BLOB to print settings","description":"BLOB to print settings ( confImpr {; params} ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-print-settings.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-print-settings","permalink":"/docs/pt/commands/blob-to-print-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-print-settings.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-print-settings","title":"BLOB to print settings","slug":"/commands/blob-to-print-settings","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ACCUMULATE","permalink":"/docs/pt/commands/accumulate"},"next":{"title":"BREAK LEVEL","permalink":"/docs/pt/commands/break-level"}}'),r=o("785893"),t=o("250065");let a={id:"blob-to-print-settings",title:"BLOB to print settings",slug:"/commands/blob-to-print-settings",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Windows / OS X",id:"windows--os-x",level:5},{value:"Compatibilidade com comandos 4D Pack",id:"compatibilidade-com-comandos-4d-pack",level:5},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"BLOB to print settings"})," ( ",(0,r.jsx)(s.em,{children:"confImpr"})," {; ",(0,r.jsx)(s.em,{children:"params"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"confImpr"}),(0,r.jsx)(s.td,{children:"Blob"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"BLOB que cont\xe9m as configura\xe7\xf5es de Impress\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"params"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"0 = restaura valores salvos para n\xfamero de c\xf3pias e faixa de p\xe1ginas 1 = reseta para os valores padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Resultado"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"c\xf3digo de estatus 1= opera\xe7\xe3o bem sucedida, 0 = n\xe3o h\xe1 impressora atual, -1=par\xe2metros incorretos, 2=impressora mudada"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["O comando ",(0,r.jsx)(s.strong,{children:"BLOB to print settings"})," substitui a configura\xe7\xe3o de impress\xe3o 4D atual pelos par\xe2metros armazenados no BLOB ",(0,r.jsx)(s.em,{children:"confImpr"}),". Este BLOB deve ter sido gerado pelo comando ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/print-settings-to-blob",children:"Print settings to BLOB"})," ou pelo comando 4D Pack  4D Pack (ver abaixo)."]}),"\n",(0,r.jsxs)(s.p,{children:["O par\xe2metro ",(0,r.jsx)(s.em,{children:"params"}),' lhe permite definir como manejar o "n\xfamero de c\xf3pias" e os ajustes b\xe1sicos de "intervalo de p\xe1ginas":']}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Se passa 0 ou omite este par\xe2metro, os valores armazenados no BLOB s\xe3o restaurados,"}),"\n",(0,r.jsx)(s.li,{children:'Se passa 1, os valores se restabelecem aos valores predeterminados: o n\xfamero de c\xf3pias se estabelecem em 1 e o intervalo de p\xe1ginas se estabelece em "todas as p\xe1ginas".'}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Os ajustes de impress\xe3o s\xe3o aplicadas ",(0,r.jsx)(s.a,{href:"https://developer.4d.com/docs/settings/compatibility/",children:" \xe0s configura\xe7\xf5es de impress\xe3o 4D"}),", sempre e cuando nenhum comando como ",(0,r.jsx)(s.em,{children:"_o_PAGE SETUP"}),", ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/set-print-option",children:"SET PRINT OPTION"})," ou ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"})," sem o par\xe2metro > os modifique. O conjunto de par\xe2metros se utiliza particularmente para os comandos ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/print-label",children:"PRINT LABEL"}),", ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/print-record",children:"PRINT RECORD"}),", ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/print-form",children:"Print form"})," e ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/qr-report",children:"QR REPORT"}),", assim como para os comandos de menu de 4D, incluindo as do ambiente Desenho."]}),"\n",(0,r.jsxs)(s.p,{children:["Os comandos ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/print-label",children:"PRINT LABEL"})," e ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/print-record",children:"PRINT RECORD"})," devem ser chamados com o par\xe2metro ",(0,r.jsx)(s.em,{children:">"})," (se aplicado) para que os par\xe2metros definidos por ",(0,r.jsx)(s.strong,{children:"BLOB to print settings"})," se mantenham."]}),"\n",(0,r.jsx)(s.p,{children:"O comando devolve um dos seguintes c\xf3digos de estado:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"-1: o BLOB \xe9 incorreto,"}),"\n",(0,r.jsx)(s.li,{children:"0: n\xe3o est\xe1 selecionada nenhuma impressora atual (neste caso, o comando n\xe3o faz nada),"}),"\n",(0,r.jsx)(s.li,{children:"1: o BLOB foi carregado corretamente,"}),"\n",(0,r.jsxs)(s.li,{children:["2: o BLOB foi carregado corretamente, mas o nome da impressora atual mudou(*)",(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.strong,{children:"Nota:"})," Code (2) sempre se devolve se o BLOB foi criado pelo comando 4D Pack , mesmo se o nome da impressora n\xe3o mudou de verdade, j\xe1 que esta informa\xe7\xe3o n\xe3o foi incluida nos BLOBs 4D Pack."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"(*) As configura\xe7\xf5es dependem da impressora selecionada no momento em que o BLOB foi guardado. A aplica\xe7\xe3o destes valores em outra impressora \xe9 compat\xedvel se ambas as impressoras forem do mesmo modelo. Se as impressoras forem diferentes, s\xf3 os par\xe2metros comuns ser\xe3o restaurados"}),"\n",(0,r.jsx)(s.h5,{id:"windows--os-x",children:"Windows / OS X"}),"\n",(0,r.jsxs)(s.p,{children:["O BLOB ",(0,r.jsx)(s.em,{children:"confImp"}),"  pode ser salvado e lido em ambas plataformas. Entretanto, mesmo se alguns ajustes de impress\xe3o s\xe3o id\xeanticos, alguns outros s\xe3o espec\xedficos para a plataforma e dependem dos controladores e as vers\xf5es de sistema. Se o mesmo BLOB ",(0,r.jsx)(s.em,{children:"confImp"})," for compartido entre ambas plataformas, \xe9 poss\xedvel que perda partes de informa\xe7\xe3o.",(0,r.jsx)(s.br,{}),"\nQuando for utilizada em um ambiente heterog\xeaneo, com o fim de restaurar a m\xe1xima configura\xe7\xe3o dispon\xedvel para cada plataforma (e n\xe3o s\xf3 a parte comum), se recomenda que maneje dois BLOBs ",(0,r.jsx)(s.em,{children:"confImp"}),", um para cada plataforma."]}),"\n",(0,r.jsx)(s.h5,{id:"compatibilidade-com-comandos-4d-pack",children:"Compatibilidade com comandos 4D Pack"}),"\n",(0,r.jsxs)(s.p,{children:["Os ajustes de impress\xe3o BLOB gerados pelo comando  legacy 4D podem ser carregados e utilizados pelo comando ",(0,r.jsx)(s.strong,{children:"BLOB to print settings"}),". Lembre que se s\xe3o salvos por ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/print-settings-to-blob",children:"Print settings to BLOB"}),", s\xe3o convertidos e n\xe3o ser\xe3o abertos mais por . O comando",(0,r.jsx)(s.strong,{children:"BLOB to print settings"})," armazena mais informa\xe7\xe3o sobre a impress\xe3o que ."]}),"\n",(0,r.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(s.p,{children:"Se quiser aplicar a configura\xe7\xe3o de impress\xe3o salva no disco para o contexto de impress\xe3o 4D atual:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0var curSettings : Blob\n\xa0DOCUMENT TO BLOB(Get 4D folder(Active 4D Folder)+"current4Dsettings.blob";curSettings)\n\xa0\xa0//current4Dsettings foi criado por Print settings to BLOB\n\xa0$err:=BLOB to print settings(curSettings;0)\n\xa0Case of\n\xa0\xa0\xa0\xa0:($err=1)\n\xa0\xa0//tudo est\xe1 OK\n\xa0\xa0\xa0\xa0:($err=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("\xa1A impressora foi mudada!\\n\\nRevisar os par\xe2metros de impress\xe3o?")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0PRINT SETTINGS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:($err=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("N\xe3o h\xe1 impressora atual.")\n\xa0\xa0\xa0\xa0:($err=-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Arquivo de configura\xe7\xe3o n\xe3o \xe9 valido.")\n\xa0End case\n'})}),"\n",(0,r.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/print-settings-to-blob",children:"Print settings to BLOB"})}),"\n",(0,r.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"1434"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return i},a:function(){return a}});var n=o(667294);let r={},t=n.createContext(r);function a(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);