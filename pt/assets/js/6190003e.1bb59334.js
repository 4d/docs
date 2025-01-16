"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26368"],{124155:function(e,o,a){a.r(o),a.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/set-external-data-path","title":"SET EXTERNAL DATA PATH","description":"SET EXTERNAL DATA PATH ( aCampo ; rota )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-external-data-path.md","sourceDirName":"commands-legacy","slug":"/commands/set-external-data-path","permalink":"/docs/pt/commands/set-external-data-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-external-data-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-external-data-path","title":"SET EXTERNAL DATA PATH","slug":"/commands/set-external-data-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME INDEXES","permalink":"/docs/pt/commands/resume-indexes"},"next":{"title":"SET INDEX","permalink":"/docs/pt/commands/set-index"}}'),s=a("785893"),r=a("250065");let d={id:"set-external-data-path",title:"SET EXTERNAL DATA PATH",slug:"/commands/set-external-data-path",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"SET EXTERNAL DATA PATH"})," ( ",(0,s.jsx)(o.em,{children:"aCampo"})," ; ",(0,s.jsx)(o.em,{children:"rota"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"aCampo"}),(0,s.jsx)(o.td,{children:"Text, Blob, Picture"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Campo para definir o local de armazenamento"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"rota"}),(0,s.jsx)(o.td,{children:"Text, Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Caminho e nome do arquivo d armazenamento externo ou0=usar defini\xe7\xe3o da estrutura1=usar pasta padr\xe3o"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["O comando ",(0,s.jsx)(o.strong,{children:"SET EXTERNAL DATA PATH"}),", define ou modifica, para o atual registro, a localiza\xe7\xe3o do armazenamento externo para o campo ",(0,s.jsx)(o.em,{children:"aCampo"})," passado como par\xe2metro."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Com 4D \xe9 poss\xedvel salvar campos do tipo Texto, BLOB e Imagem fora do arquivo de dados. Para uma descri\xe7\xe3o completa desta funcionalidade, consulte o Manual de Desenho 4D."}),"\n",(0,s.jsx)(o.p,{children:"A configura\xe7\xe3o definida por este comando somente \xe9 aplicada quando o registro atual \xe9 salvo no disco. Se o atual registro \xe9 cancelado, o comando n\xe3o faz nada. Par\xe2metros de armazenamento estabelecidos na estrutura do aplicativo n\xe3o s\xe3o modificadas."}),"\n",(0,s.jsxs)(o.p,{children:["Em ",(0,s.jsx)(o.em,{children:"rota"}),", pode passar um nome de rota padr\xe3o ou uma constante designando uma localiza\xe7\xe3o autom\xe1tica:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Rota padr\xe3o ao arquivo"}),(0,s.jsx)(o.br,{}),'\nNeste caso, voc\xea utiliza armazenamento externo no "modo padr\xe3o." Algumas fun\xe7\xf5es do banco de dados 4D n\xe3o est\xe3o dispon\xedveis automaticamente neste modo (veja o Manual de Desenho 4D), em especial voc\xea deve gerenciar a cria\xe7\xe3o ou modifica\xe7\xe3o dos arquivos voc\xea mesmo.',(0,s.jsx)(o.br,{}),'\nVoc\xea pode passar uma rota relativa ao arquivo de dados ou uma rota absoluta, incluindo o nome e a extens\xe3o do arquivo de armazenamento. Dever\xe1 usar a sintaxe do sistema. Para definir uma rota relativa, passar "../" (no Windows) ou "..:" (OS X) no in\xedcio da string. Poder\xe1 designar qualquer pasta, incluindo a pasta padr\xe3o dos arquivos externos do banco de dados (nomeBanco.DadosExternos) - Neste caso, os arquivos de backup do banco de dados s\xe3o inclu\xeddos quando o banco de dados \xe9 salvo.',(0,s.jsx)(o.br,{}),"\nO arquivo designado pelo par\xe2metro ",(0,s.jsx)(o.em,{children:"rota"})," deve existir ser acess\xedvel quando o comando for executado. Se a rota for inv\xe1lida (uma pasta ou um arquivo n\xe3o existirem), um erro \xe9 retornado s\xf3 nos casos onde rota foi definido como um absoluto. Quando uma rota relativa foi especificada, deve ter certeza de sua validez, j\xe1 que n\xe3o \xe9 retornado um erro se o arquivo n\xe3o for encontrado.",(0,s.jsx)(o.br,{}),"\nSe voc\xea salvar os dados externos na mesma pasta que o arquivo de dados ou uma das suas pastas internas, 4D considera que o caminho especificado \xe9 relativo ao arquivo de dados e mant\xeam o link mesmo quando a pasta do arquivo de dados for movida ou renomeada.",(0,s.jsx)(o.br,{}),'\nNote que isto significa que \xe9 poss\xedvel "compartir" o mesmo arquivo externo entre v\xe1rios registros. Quaisquer que sejam as mudan\xe7as feitas ao arquivo externo, est\xe3o dispon\xedveis em todos os registros. Neste caso, se muitos processos podem escrever nos mesmos campos ao mesmo tempo, dever\xe1 ter cuidado a fim de prevenir acessos simult\xe2neos atrav\xe9s de sem\xe1foros, para n\xe3o correr o risco de danificar os arquivos externos.']}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Locais autom\xe1ticos"}),(0,s.jsx)(o.br,{}),"\nVoc\xea pode designar dois locais autom\xe1ticos, fazendo uso das seguintes constantes, as quais podem ser verificadas no tema ",(0,s.jsx)(o.em,{children:"Manuten\xe7\xe3o do arquivo de dados"}),":"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Constante"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{children:"Valor"}),(0,s.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Use default folder"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"1"}),(0,s.jsxs)(o.td,{children:["Os dados de campo passados como um par\xe2metro ser\xe3o armazenados na pasta padr\xe3o chamado ",(0,s.jsx)(o.em,{children:"nomBase.ExternalData"})," e colocados ao lado do arquivo de dados. Neste modo, os dados externos s\xe3o geridos por 4D como se estivessem dentro do arquivo de dados."]})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Use structure definition"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"0"}),(0,s.jsxs)(o.td,{children:["4D usar\xe1 os par\xe2metros definidos na estrutura para o armazenamento do campo (consulte o manual ",(0,s.jsx)(o.em,{children:"Modo Estrutura"}),"). Se voc\xea passar de um armazenamento externo a armazenamento interno, o arquivo externo n\xe3o \xe9 exclu\xeddo."]})]})]})]}),"\n",(0,s.jsxs)(o.p,{children:["Quando esse comando for executado, 4D automaticamente mant\xe9m o link entre o campo do registro e o arquivo em disco. Voc\xea n\xe3o precisa executar o comando de novo (exceto se voc\xea precisar mudar a ",(0,s.jsx)(o.em,{children:"rota"}),"). Se 4D n\xe3o puder acessar mais os dados do campo (arquivo de armazenamento renomeado, apagado, rota modificada, etc), o campo fica vazio, mas n\xe3o gera um erro."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," O comandoSET EXTERNAL DATA PATH s\xf3 pode ser executado numa m\xe1quina 4D local ou num servidor 4D. N\xe3o faz nada quando for executado numa m\xe1quina 4D remota."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"Se voc\xea deseja guardar o conte\xfado de um arquivo existente no campo imagem, armazenado fora dos dados, na pasta do banco de dados:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0CREATE RECORD([Photos])\n\xa0[Photos]Name:="Paris.png"\n\xa0SET EXTERNAL DATA PATH([Photos]Thumbnail;Get 4D folder(Database folder)+"custom"+Folder separator+[Photos]Name)\n\xa0\xa0//"/custom/Paris.png" deve existir ao lado do arquivo de estrutura\n\xa0SAVE RECORD([Photos])\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/commands/get-external-data-path",children:"Get external data path"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/reload-external-data",children:"RELOAD EXTERNAL DATA"})]}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1134"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return t},a:function(){return d}});var n=a(667294);let s={},r=n.createContext(s);function d(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);