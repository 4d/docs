"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38560"],{57170:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>r});var o=JSON.parse('{"id":"commands-legacy/get-picture-metadata","title":"GET PICTURE METADATA","description":"GET PICTURE METADATA ( imagem ; nomeMeta ; conteudoMeta {; nomeMeta2 ; conteudoMeta2 ; ... ; nomeMetaN ; conteudoMetaN} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-picture-metadata.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-metadata","permalink":"/docs/pt/20-R8/commands/get-picture-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-metadata.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-picture-metadata","title":"GET PICTURE METADATA","slug":"/commands/get-picture-metadata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE KEYWORDS","permalink":"/docs/pt/20-R8/commands/get-picture-keywords"},"next":{"title":"Is picture file","permalink":"/docs/pt/20-R8/commands/is-picture-file"}}'),t=a("785893"),d=a("250065");let s={id:"get-picture-metadata",title:"GET PICTURE METADATA",slug:"/commands/get-picture-metadata",displayed_sidebar:"docs"},r=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET PICTURE METADATA"})," ( ",(0,t.jsx)(n.em,{children:"imagem"})," ; ",(0,t.jsx)(n.em,{children:"nomeMeta"})," ; ",(0,t.jsx)(n.em,{children:"conteudoMeta"})," {; ",(0,t.jsx)(n.em,{children:"nomeMeta2"})," ; ",(0,t.jsx)(n.em,{children:"conteudoMeta2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"nomeMetaN"})," ; ",(0,t.jsx)(n.em,{children:"conteudoMetaN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"imagem"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Imagem cujos metadados voc\xea deseja conseguir"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomeMeta"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome ou caminho do bloco a ser lido"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"conteudoMeta"}),(0,t.jsx)(n.td,{children:"Variable"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Conte\xfado do Metadado"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"GET PICTURE METADATA"})," permite ler o conte\xfado dos metadados (ou meta-tags) presentes em ",(0,t.jsx)(n.em,{children:"imagem"})," (campo ou vari\xe1vel imagem 4D). Para maior informa\xe7\xe3o sobre metadados, consulte a descri\xe7\xe3o do comando ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/set-picture-metadata",children:"SET PICTURE METADATA"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["No par\xe2metro ",(0,t.jsx)(n.em,{children:"nomMeta"}),", passe uma string especificando o tipo de metadado a recuperar. Pode passar:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["uma constante do tema ",(0,t.jsx)(n.em,{children:"Picture Metadata Names"})," com uma rota de etiqueta,"]}),"\n",(0,t.jsx)(n.li,{children:'Ou nome de um bloco completo de metadados ("TIFF", "EXIF", "GPS" ou "IPTC"),'}),"\n",(0,t.jsx)(n.li,{children:'Uma cadeia vazia ("").'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,t.jsx)(n.em,{children:"ConteudoMeta"})," a vari\xe1vel destinada a receber os metadados."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Se passa uma rota de etiqueta em ",(0,t.jsx)(n.em,{children:"nomMeta"}),", o par\xe2metro ",(0,t.jsx)(n.em,{children:"ConteudoMeta"})," cont\xe9m diretamente o valor a ser lido. O valor ser\xe1 convertido no tipo da vari\xe1vel. As vari\xe1veis de tipo texto ser\xe3o formatadas em XML (padr\xe3o XMP). Pode passar um array quando o metadado contiver mais de um valor (este \xe9 o caso, particularmente, para as etiquetas IPTC Keywords)."]}),"\n",(0,t.jsxs)(n.li,{children:["Se passa um nome de bloco ou uma string vazia em ",(0,t.jsx)(n.em,{children:"nomMeta"}),", o par\xe2metro ",(0,t.jsx)(n.em,{children:"ConteudoMeta"})," deve ser uma refer\xeancia v\xe1lida do elemento DOM XML. Neste caso, o conte\xfado do bloco designado (ou de todos os blocos se passou uma string vazia em ",(0,t.jsx)(n.em,{children:"nomMeta"}),") se copia novamente no elemento de refer\xeancia."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"Uso de estruturas da \xe1rvore DOM"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$xml:=DOM Create XML Ref("Root")\xa0//Cria\xe7\xe3o de uma \xe1rvore XML DOM\n\xa0\n\xa0\\Recep\xe7\xe3o dos metadados TIFF\n\xa0$_Xml_TIFF:=DOM Create XML element($xml;"/Root/TIFF")\n\xa0GET PICTURE METADATA(vImagem;"TIFF";$_Xml_TIFF)\n\xa0\n\xa0\xa0//Recep\xe7\xe3o dos metadados GPS\n\xa0$_Xml_GPS:=DOM Create XML element($xml;"/Root/GPS")\n\xa0GET PICTURE METADATA(vImagem;"GPS";$_Xml_GPS)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Uso de vari\xe1veis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $dataComoData : Date\n\xa0GET PICTURE METADATA(vImagem;TIFF DateTime;$dataComoData)\n\xa0\xa0//devolve unicamente a data j\xe1 que $dataComoData \xe9 de tipo Data\n\xa0\n\xa0var $dataComoTexto : Text\n\xa0GET PICTURE METADATA(vImagem;TIFF/DateTime;$DataComoTexto)\n\xa0\xa0//devolve unicamente a data em formato XML\n\xa0\n\xa0C_INTEGER($urgency)\n\xa0GET PICTURE METADATA(vImagem;IPTC urgency;$urg\xeancia)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,t.jsx)(n.p,{children:"Recep\xe7\xe3o de etiquetas com valores m\xfaltiplos em arrays"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($tTkeywords;0)\n\xa0GET PICTURE METADATA(vImagem;IPTC keywords;$tTkeywords)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Depois da execu\xe7\xe3o do comando, arrTkeywords cont\xe9m por exemplo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$arrTkeywords{1}="Fran\xe7a"\n\xa0$arrTkeywords{2}="Europa"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,t.jsx)(n.p,{children:"Recep\xe7\xe3o de etiquetas com valores m\xfaltiplos em uma vari\xe1vel Texto"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $vTwords;0 : Text\n\xa0GET PICTURE METADATA(vImagem;IPTC keywords;$vTwords)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Depois da execu\xe7\xe3o do comando, ",(0,t.jsx)(n.em,{children:"vTwords"}),' cont\xe9m por exemplo "Fran\xe7a;Europa".']}),"\n",(0,t.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsxs)(n.p,{children:["La variable sistema ",(0,t.jsx)(n.em,{children:"OK"})," devolve 1 se a recuperaci\xf3n dos metadados es correta e 0 se for produzido um erro ou se n\xe3o se encontra ao menos uma das etiquetas. Em todos os casos, se devolvem os valores leg\xedveis."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/get-picture-keywords",children:"GET PICTURE KEYWORDS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Picture Metadata Names"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Picture Metadata Values"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/set-picture-metadata",children:"SET PICTURE METADATA"})]}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1122"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return s}});var o=a(667294);let t={},d=o.createContext(t);function s(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);