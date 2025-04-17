"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58121"],{60689:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/blob-properties","title":"BLOB PROPERTIES","description":"BLOB PROPERTIES ( BLOB ; comprimido {; descompTam {; tamanhoAtual}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/blob-properties.md","sourceDirName":"commands-legacy","slug":"/commands/blob-properties","permalink":"/docs/pt/20-R8/commands/blob-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"blob-properties","title":"BLOB PROPERTIES","slug":"/commands/blob-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB","permalink":"/docs/pt/20-R8/commands/theme/BLOB"},"next":{"title":"BLOB size","permalink":"/docs/pt/20-R8/commands/blob-size"}}'),r=o("785893"),d=o("250065");let t={id:"blob-properties",title:"BLOB PROPERTIES",slug:"/commands/blob-properties",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BLOB PROPERTIES"})," ( ",(0,r.jsx)(n.em,{children:"BLOB"})," ; ",(0,r.jsx)(n.em,{children:"comprimido"})," {; ",(0,r.jsx)(n.em,{children:"descompTam"})," {; ",(0,r.jsx)(n.em,{children:"tamanhoAtual"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB do qual obter informa\xe7\xe3o"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"comprimido"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"0 = BLOB n\xe3o est\xe1 comprimido 1 = BLOB comprimido modo compacto 2 = BLOB comprimido modo r\xe1pido"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"descompTam"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tamanho do BLOB (em bytes) quando n\xe3o est\xe1 comprimido"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tamanhoAtual"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tamanho atual do BLOB (em bytes)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"BLOB PROPERTIES"})," retorna informa\xe7\xf5es sobre o ",(0,r.jsx)(n.em,{children:"blob"})," BLOB.diz se o BLOB \xe9 comprimido ou n\xe3o, e retorna um dos seguintes valores."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Compact compression mode"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Comprimido tanto quanto poss\xedvel (\xe1 custa da velocidade das opera\xe7\xf5es de compress\xe3o e descompress\xe3o). M\xe9todo padr\xe3o."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fast compression mode"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Comprimido t\xe3o r\xe1pido quanto poss\xedvel (e ser\xe1 descomprimido t\xe3o r\xe1pido quanto poss\xedvel), \xe0 custa da taxa de compress\xe3o (o BLOB comprimido ser\xe1 maior)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GZIP best compression mode"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"Compress\xe3o GZIP mais compacta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GZIP fast compression mode"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"-2"}),(0,r.jsx)(n.td,{children:"Compress\xe3o GZIP mais r\xe1pida"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is not compressed"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Sem compress\xe3o"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Seja qual for o estado de compress\xe3o do BLOB, o par\xe2metro expandedSize retorna o tamanho do BLOB quando n\xe3o \xe9 comprimido."}),"\n",(0,r.jsxs)(n.li,{children:["O par\xe2metro ",(0,r.jsx)(n.em,{children:"tamanhoAtual"})," retorna o tamanho atual do BLOB. Se o BLOB estiver compactado, voc\xea normalmente ir\xe1 obter ",(0,r.jsx)(n.em,{children:"tamanhoAtual"})," menor que ",(0,r.jsx)(n.em,{children:"descompTam"}),". Se o BLOB n\xe3o est\xe1 compactado, voc\xea vai sempre obter ",(0,r.jsx)(n.em,{children:"tamanhoAtual"})," igual descompTam."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsxs)(n.p,{children:["Veja os exemplos para os comandos ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/compress-blob",title:"COMPRESS BLOB",children:"COMPRESS BLOB"})," e ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/expand-blob",title:"EXPAND BLOB",children:"EXPAND BLOB"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Depois que um BLOB foi comprimido, o m\xe9todo de projeto obt\xe9m a porcentagem de espa\xe7o salvo por compress\xe3o:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de projeto Espa\xe7o economizado por compress\xe3o\n\xa0\xa0// Espa\xe7o economizado pela compress\xe3o (Ponteiro {;\xa0Ponteiro\xa0} ) -> Inteiro Longo\n\xa0\xa0//\xa0Espa\xe7o economizado pela compress\xe3o\xa0( -> BLOB {; -> bytesEconomizados } ) -> Porcentagem\n\xa0\n\xa0#DECLARE ($blob : Pointer ; $saved : Pointer ) -> $percent : Integer\n\xa0var $vlComprimido;$vlDescompTam;$vlTamanhoAtual : Integer\n\xa0\n\xa0BLOB PROPERTIES($blob->;$vlComprimido;$vlDescompTam;$vlTamanhoAtual)\n\xa0If($vlDescompTam=0)\n\xa0\xa0\xa0\xa0$percent:=0\n\xa0\xa0\xa0\xa0If(Count parameters>=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$saved->:=0\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0$percent:=100-(($vlTamanhoAtual/$vlDescompTam)*100)\n\xa0\xa0\xa0\xa0If(Count parameters>=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$saved->:=$vlDescompTam-$vlTamanhoAtual\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.p,{children:"Depois que este m\xe9todo tenha sido adicionado \xe0 sua aplica\xe7\xe3o, voc\xea pode us\xe1-lo desta maneira:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0COMPRESS BLOB(vxBlob)\n\xa0$vlPorcentaje:=Espa\xe7o economizado pela compress\xe3o(->vxBlob;->vlTamanhoBlob)\n\xa0ALERT("A compress\xe3o economizou "+String(vlBlobSize)+" bytes, "+String($vlPorcentagem;"#0%")+\n\xa0" de espa\xe7o.")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/compress-blob",children:"COMPRESS BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/expand-blob",children:"EXPAND BLOB"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"536"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return t}});var s=o(667294);let r={},d=s.createContext(r);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);