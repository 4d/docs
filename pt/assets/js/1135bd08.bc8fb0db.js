"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43359"],{236105:function(e,n,r){r.r(n),r.d(n,{default:()=>c,frontMatter:()=>a,metadata:()=>o,assets:()=>l,toc:()=>i,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/dom-create-xml-element","title":"DOM Create XML element","description":"DOM Create XML element ( refElemento ; xRota {; nomeAtrib ; valorAtrib} {; nomeAtrib2 ; valorAtrib2 ; ... ; nomeAtribN ; valorAtribN} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-create-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-create-xml-element","permalink":"/docs/pt/20-R8/commands/dom-create-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-create-xml-element.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-create-xml-element","title":"DOM Create XML element","slug":"/commands/dom-create-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Count XML elements","permalink":"/docs/pt/20-R8/commands/dom-count-xml-elements"},"next":{"title":"DOM Create XML element arrays","permalink":"/docs/pt/20-R8/commands/dom-create-xml-element-arrays"}}'),t=r("785893"),s=r("250065");let a={id:"dom-create-xml-element",title:"DOM Create XML element",slug:"/commands/dom-create-xml-element",displayed_sidebar:"docs"},d=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let n={a:"a",br:"br",code:"code",elem1:"elem1",elem2:"elem2",elem3:"elem3",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",rootelement:"rootelement",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DOM Create XML element"})," ( ",(0,t.jsx)(n.em,{children:"refElemento"})," ; ",(0,t.jsx)(n.em,{children:"xRota"})," {; ",(0,t.jsx)(n.em,{children:"nomeAtrib"})," ; ",(0,t.jsx)(n.em,{children:"valorAtrib"}),"} {; ",(0,t.jsx)(n.em,{children:"nomeAtrib2"})," ; ",(0,t.jsx)(n.em,{children:"valorAtrib2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"nomeAtribN"})," ; ",(0,t.jsx)(n.em,{children:"valorAtribN"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refElemento"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Refer\xeancia do elemento Root XMLK"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"xRota"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Caminho xRota do elemento XML a ser criado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomeAtrib"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Atributo a estabelecer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valorAtrib"}),(0,t.jsx)(n.td,{children:"Text, Boolean, Integer, Real, Time, Date"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Novo valor de atributo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Refer\xeancia do elemento XML criado"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando DOM Create XML element permite criar um novo elemento no elemento XML ",(0,t.jsx)(n.em,{children:"refElemento"})," na localiza\xe7\xe3o definida pelo par\xe2metro xRota e lhe adicionar atributos se \xe9 necess\xe1rio."]}),"\n",(0,t.jsxs)(n.p,{children:["Passe em ",(0,t.jsx)(n.em,{children:"refElemento"})," a refer\xeancia do elemento raiz (criado, por exemplo com a ajuda do comando ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/dom-create-xml-ref",children:"DOM Create XML Ref"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"xRota"}),', passe a rota de acesso do elemento a criar em nota\xe7\xe3o XPath (para saber mais veja a se\xe7\xe3o [#title id="733" anchor="4967352"/] ). S\xe3o admitidas as express\xf5es de rota abaixo:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Express\xe3o"}),(0,t.jsx)(n.th,{children:"A\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/"}),(0,t.jsx)(n.td,{children:"Determina o nodo raiz (rota absoluta)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"para[1]"}),(0,t.jsx)(n.td,{children:'Determina o primerro filho "para" do nodo de contexto'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"para[last()]"}),(0,t.jsx)(n.td,{children:'Determina o \xfaltimo filho "para" do nodo de contexto'})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota de compatibilidad"}),"e: a partir da v18 R3, a implementa\xe7\xe3o de XPath em 4D \xe9 mais compat\xedvel. Por raz\xf5es de compatibilidade, a implementa\xe7\xe3o n\xe3o padr\xe3o anterior se mant\xe9m de forma pr\xe9-determinada nos bancos de dados convertidos. Se quiser se beneficiar das funcionalidades extendidas em seus bancos de dados convertidos, deve selecionar a op\xe7\xe3o de compatibilidade Utilizar XPath normal de ",(0,t.jsx)(n.em,{children:"P\xe1gina Compatibilidade"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["\xc9 poss\xedvel passar diretamente em ",(0,t.jsx)(n.em,{children:"xRota"})," um nome de elemento simples com o objetivo de criar um subelemento a partir do elemento atual (ver o exemplo 3)."]}),"\n",(0,t.jsx)(n.p,{children:"Se os elementos da rota de acesso n\xe3o existirem, s\xe3o criados. Se j\xe1 existirem os elementos de rota, um novo nodo \xe9 agregado."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": Se voc\xea definiu um ou mais espa\xe7os de nome (namespaces) para a \xe1rvore designada por ",(0,t.jsx)(n.em,{children:"refElemento"})," (ver o comando ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/dom-create-xml-ref",children:"DOM Create XML Ref"})," ), deve prefixar o par\xe2metro xRota do nome de espa\xe7o a utilizar (por exemplo, \u201CMeuNomeEspa\xe7o:MeuElemento\u201D)."]}),"\n",(0,t.jsxs)(n.p,{children:["Pode passar nos par\xe2metros opcionais ",(0,t.jsx)(n.em,{children:"nomAtrib e valorAtrib"})," um par atributo/valor (em forma de vari\xe1veis, campos ou valores literais). Pode passar tantos pares quantos queira."]}),"\n",(0,t.jsxs)(n.p,{children:["O par\xe2metro ",(0,t.jsx)(n.em,{children:"valorAtrib"})," pode ser de tipo texto ou de outro tipo (Booleano, inteiro, real, hora ou data). Se passar um valor de um tipo diferente ao tipo texto, 4D cuida da convers\xe3o para texto, de acordo aos seguintes princ\xedpios:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Tipo"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Exemplo do valor convertido"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:'"true" ou "false"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Inteiro"}),(0,t.jsx)(n.td,{children:'"123456"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:'"12.34" (o separador decimal \xe9 sempre ".")'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Data"}),(0,t.jsx)(n.td,{children:'"2006-12-04T00:00:00Z" (norma RFC 3339)'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hora"}),(0,t.jsx)(n.td,{children:'"5233" (n\xfamero de segundos)'})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"O comando retorna como resultado a refer\xeancia XML do elemento criado."}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"se quisermos criar o elemento abaixo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-RAW",children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n"})}),"\n",(0,t.jsx)(n.p,{children:"Para fazer isso, simplesmente escrevemos:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var vRootRef;vElemRef : Text\n\xa0vRootRef:=DOM Create XML Ref("RootElement")\n\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsxs)(n.p,{children:["Se quisermos criar o elemento abaixo (cont\xe9m os atributos): [#codeXML]",(0,t.jsx)(n.br,{}),"\n",(0,t.jsxs)(n.rootelement,{children:[(0,t.jsx)(n.br,{}),"\n",(0,t.jsxs)(n.elem1,{children:[(0,t.jsx)(n.br,{}),"\n",(0,t.jsxs)(n.elem2,{children:[(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.elem3,{font:"Verdana",size:"10",children:" "}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.elem3,{font:"Verdana",size:"8",children:" "}),(0,t.jsx)(n.br,{}),"\n"]}),(0,t.jsx)(n.br,{}),"\n"]}),(0,t.jsx)(n.br,{}),"\n"]}),"[#/codeRAW]"]}),"\n",(0,t.jsx)(n.p,{children:"Para fazer isso, simplesmente ecrevemos:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var vRootRef;vElemRef : Text\n\xa0var $aAttrName1;$aAttrName2;$aAttrVal1;$aAttrVal2;$aAttrVal3 : Text\n\n$aAttrName1:="Font"\n\xa0$aAttrName2:="Size"\n\xa0$aAttrVal1:="Verdana"\n\xa0$aAttrVal2:="10"\n\xa0$aAttrVal3:="8"\n\xa0\n\xa0vRootRef:=DOM Create XML Ref("RootElement")\n\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3"\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal2)\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal3)\n\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"Se quiser inserir um elemento depois, pode escrever:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath;"Font";"Arial")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Temos ent\xe3o:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-RAW",children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,t.jsx)(n.p,{children:"Queremos criar e exportar a seguinte estrutura:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n<Root>\n\xa0\xa0\xa0<Elem1>Ol\xe1</Elem1>\n</Root>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Queremos utilizar a sintaxe baseada em um nome de elemento simples. Para fazer isso, simplesmente escrevemos:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $root : Text\n\xa0var $ref1 : Text\n\xa0\n\xa0$root:=DOM Create XML Ref("Raiz")\n\xa0$ref1:=DOM Create XML element($root;"Elem1")\n\xa0DOM SET XML ELEMENT VALUE($ref1;"Ol\xe1")\n\xa0DOM EXPORT TO FILE($root;"meudoc.xml")\n\xa0DOM CLOSE XML($root)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsx)(n.p,{children:"Se o comando for executado corretamente, a vari\xe1vel sistema OK assume o valor 1. Do contr\xe1rio, assume o valor 0 e um erro \xe9 gerado."}),"\n",(0,t.jsx)(n.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,t.jsx)(n.p,{children:"Um erro \xe9 gerado quando:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A refer\xeancia do elemento raiz n\xe3o for v\xe1lida."}),"\n",(0,t.jsx)(n.li,{children:"O nome do elemento a ser criado for inv\xe1lido (por exemplo, se come\xe7ar por um n\xfamero)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/dom-create-xml-element-arrays",children:"DOM Create XML element arrays"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/dom-get-xml-element",children:"DOM Get XML element"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/dom-remove-xml-element",children:"DOM REMOVE XML ELEMENT"})]}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"865"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var o=r(667294);let t={},s=o.createContext(t);function a(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);