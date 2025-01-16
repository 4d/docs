"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36356"],{979166:function(e,t,s){s.r(t),s.d(t,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/distinct-attribute-values","title":"DISTINCT ATTRIBUTE VALUES","description":"DISTINCT ATTRIBUTE VALUES ( campoObjeto ; rota ; arrayValores )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/distinct-attribute-values.md","sourceDirName":"commands-legacy","slug":"/commands/distinct-attribute-values","permalink":"/docs/pt/commands/distinct-attribute-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdistinct-attribute-values.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"distinct-attribute-values","title":"DISTINCT ATTRIBUTE VALUES","slug":"/commands/distinct-attribute-values","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DISTINCT ATTRIBUTE PATHS","permalink":"/docs/pt/commands/distinct-attribute-paths"},"next":{"title":"DISTINCT VALUES","permalink":"/docs/pt/commands/distinct-values"}}'),a=s("785893"),n=s("250065");let o={id:"distinct-attribute-values",title:"DISTINCT ATTRIBUTE VALUES",slug:"/commands/distinct-attribute-values",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Usar a propriedade virtual comprimento",id:"usar-a-propriedade-virtual-comprimento",level:5},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let t={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"DISTINCT ATTRIBUTE VALUES"})," ( ",(0,a.jsx)(t.em,{children:"campoObjeto"})," ; ",(0,a.jsx)(t.em,{children:"rota"})," ; ",(0,a.jsx)(t.em,{children:"arrayValores"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Par\xe2metro"}),(0,a.jsx)(t.th,{children:"Tipo"}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"campoObjeto"}),(0,a.jsx)(t.td,{children:"Field"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"Campo Objeto do qual obt\xe9m a lista de valores atributo distintos"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"rota"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"Rota do atributo cujos valores distintos deseja obter."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"arrayValores"}),(0,a.jsx)(t.td,{children:"Text array, Integer array, Boolean array, Date array, Time array"}),(0,a.jsx)(t.td,{children:"\u2190"}),(0,a.jsx)(t.td,{children:"Valores distintos na rota atributo"})]})]})]}),"\n",(0,a.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Tema:"})," Arrays"]}),"\n",(0,a.jsxs)(t.p,{children:["O comando ",(0,a.jsx)(t.strong,{children:"DISTINCT ATTRIBUTE VALUES"})," cria e preenche o ",(0,a.jsx)(t.em,{children:"arrayValores"})," com valores n\xe1o repetidos (\xfanicos) procedentes do atributo ",(0,a.jsx)(t.em,{children:"rota"})," no campo ",(0,a.jsx)(t.em,{children:"campoObjeto"})," para a sele\xe7\xe3o atual da tabela a que pertence o campo. Se ",(0,a.jsx)(t.em,{children:"campoObjeto"})," n\xe3o for um campo de objeto indexado, um erro \xe9 devlvido."]}),"\n",(0,a.jsxs)(t.p,{children:["Passe em ",(0,a.jsx)(t.em,{children:"rota"}),' uma rota atributo v\xe1lida. Utilize a nota\xe7\xe3o ponto padr\xe3o para definir rotas a atributos aninhados, por exemplo "empresa.endere\xe7o.numero". Lembre que os nomes de atributos objeto s\xe3o sens\xedveis \xe0s mai\xfasculas e min\xfasculas.']}),"\n",(0,a.jsxs)(t.p,{children:["O array que passou em ",(0,a.jsx)(t.em,{children:"arrayValores"})," deve ser do mesmo tipo que o atributo ",(0,a.jsx)(t.em,{children:"rota"})," passado como par\xe2metro, do contr\xe1rio o array volta ser digitado. S\xf3 se admitem os seguintes tipos de arrays: num\xe9rico, texto, data e hora (os valores devem ser escalar: ponteiros, objetos, blobs ou imagens n\xe3o s\xe3o suportados)."]}),"\n",(0,a.jsx)(t.p,{children:"Depois da chamada, o tamanho do array \xe9 igual ao n\xfamero de valores diferentes que se encontram na sele\xe7\xe3o. O comando n\xe3o muda a sele\xe7\xe3o atual ou o registro atual."}),"\n",(0,a.jsx)(t.h5,{id:"usar-a-propriedade-virtual-comprimento",children:"Usar a propriedade virtual comprimento"}),"\n",(0,a.jsxs)(t.p,{children:['Pode usar a propriedade virtual "comprimento" com este comando. Est\xe1 automaticamente dispon\xedvel para todos os atributos do tipo array e oferece o tamanho do array, ou seja, o n\xfamero de elementos contidos pelo array. Esta propriedade foi criada para ser usada em pesquisas (ver ',(0,a.jsx)(t.strong,{children:"QUERY BY ATTRIBUTE"}),(0,a.jsx)(t.a,{href:"/docs/pt/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"}),"). Pode tamb\xe9m ser usada com o comando ",(0,a.jsx)(t.strong,{children:"DISTINCT ATTRIBUTE VALUES"})," para obter os diversos tamanhos de array para um atributo."]}),"\n",(0,a.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(t.p,{children:"Se seu banco de dados contiver um campo objeto [Customer]full_Data (indexado) com 12 registros:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:s(673521).Z+"",width:"617",height:"348"})}),"\n",(0,a.jsx)(t.p,{children:"Se executar este c\xf3digo:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0ARRAY LONGINT(aLAges;0)\n\xa0ALL RECORDS([Customer])\n\xa0\xa0//obt\xe9m os valores distintos para o atributo\xa0 "age"\n\xa0DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"age";aLAges)\n'})}),"\n",(0,a.jsxs)(t.p,{children:["O array ",(0,a.jsx)(t.em,{children:"aLAges"})," obt\xe9m os seguintes 9 elementos:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:"\xa0\xa0//aLAges{1}=33\n\xa0\xa0//aLAges{2}=35\n\xa0\xa0//aLAges{3}=36\n\xa0\xa0//aLAges{4}=40\n\xa0\xa0//aLAges{5}=42\n\xa0\xa0//aLAges{6}=44\n\xa0\xa0//aLAges{7}=52\n\xa0\xa0//aLAges{8}=54\n\xa0\xa0//aLAges{9}=60\n"})}),"\n",(0,a.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/docs/pt/commands/distinct-attribute-paths",children:"DISTINCT ATTRIBUTE PATHS"})}),"\n",(0,a.jsx)(t.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"N\xfamero do comando"}),(0,a.jsx)(t.td,{children:"1397"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Thread-seguro"}),(0,a.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},673521:function(e,t,s){s.d(t,{Z:function(){return r}});let r=s.p+"assets/images/pict2897927.en-11f4935c55baf79e470a5d456000c727.png"},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return o}});var r=s(667294);let a={},n=r.createContext(a);function o(e){let t=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);