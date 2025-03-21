"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84498"],{811968:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/distinct-attribute-paths","title":"DISTINCT ATTRIBUTE PATHS","description":"DISTINCT ATTRIBUTE PATHS ( campoObjeto ; rotaArray )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/distinct-attribute-paths.md","sourceDirName":"commands-legacy","slug":"/commands/distinct-attribute-paths","permalink":"/docs/pt/commands/distinct-attribute-paths","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdistinct-attribute-paths.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"distinct-attribute-paths","title":"DISTINCT ATTRIBUTE PATHS","slug":"/commands/distinct-attribute-paths","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM ARRAY","permalink":"/docs/pt/commands/delete-from-array"},"next":{"title":"DISTINCT ATTRIBUTE VALUES","permalink":"/docs/pt/commands/distinct-attribute-values"}}'),r=t("785893"),d=t("250065");let a={id:"distinct-attribute-paths",title:"DISTINCT ATTRIBUTE PATHS",slug:"/commands/distinct-attribute-paths",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DISTINCT ATTRIBUTE PATHS"})," ( ",(0,r.jsx)(n.em,{children:"campoObjeto"})," ; ",(0,r.jsx)(n.em,{children:"rotaArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"campoObjeto"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"campo objeto indexado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rotaArray"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Array que vai receber a lsita de diferentes rotas"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"DISTINCT ATTRIBUTE PATHS"})," [#descv] devolve a lista de rotas diferentes que se encontram no campo objeto indexado passado em ",(0,r.jsx)(n.em,{children:"campoObjeto"})," para a sele\xe7\xe3o atual da tabela a qual pertence o campo. [#descv]"]}),"\n",(0,r.jsxs)(n.p,{children:["Se ",(0,r.jsx)(n.em,{children:"campoObjeto"})," n\xe3o for um campo de objeto indexado, um erro \xe9 devolvido."]}),"\n",(0,r.jsxs)(n.p,{children:["Depois da chamada, o tamanho de ",(0,r.jsx)(n.em,{children:"arrayRota"}),' \xe9 igual ao n\xfamero de rotas distintas que se encontram na sele\xe7\xe3o. As rotas a atributos de objetos aninhados se devolvem utilizando a nota\xe7\xe3o padr\xe3o ponto, por exemplo "empresa.endere\xe7o.n\xfamero". Lembre que os nomes de atributo de objeto s\xe3o sens\xedveis \xe0s mai\xfasculas e min\xfasculas. O comando n\xe3o muda a sele\xe7\xe3o atual ou o registro atual.']}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"arrayRota"}),", a lista de rotas diferentes \xe9 retornada em ordem alfab\xe9tica (diacr\xedtica)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Registros com um valor indefinido no ",(0,r.jsx)(n.em,{children:"campoObj"})," n\xe3o foram levadas em considera\xe7\xe3o."]}),"\n",(0,r.jsx)(n.li,{children:"Rotas atributos criadas durante uma transa\xe7\xe3o foram levadas em considera\xe7\xe3o pelo comando. \xc9 importante notar que estas rotas s\xe3o mantidas no \xedndice do campo objeto mesmo se a transa\xe7\xe3o tiver sido cancelada"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Se seu banco de dados contiver um campo objeto [Customer]full_Data (indexado) com 15 registros:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:t(673521).Z+"",width:"617",height:"348"})," ",(0,r.jsx)(n.img,{src:t(476945).Z+"",width:"892",height:"416"})]}),"\n",(0,r.jsx)(n.p,{children:"Este c\xf3digo ser\xe1 executado:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(aTPaths;0)\n\xa0ALL RECORDS([Customer])\n\xa0DISTINCT ATTRIBUTE PATHS([Customer]full_Data;aTPaths)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["O array ",(0,r.jsx)(n.em,{children:"aTPaths"})," obt\xe9m os elementos abaixo:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Element"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:'"age"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:'"Children"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:'"Children[]"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:'"Children[].age"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:'"Children[].Name"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:'"Children.length"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:'"client"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:'"FirstName"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:'"LastName"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:'"Sex"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:'"telephone"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:'"telephone[]"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"13"}),(0,r.jsx)(n.td,{children:'"telephone.length"'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),' "length"/comprimento \xe9 uma ',(0,r.jsx)(n.em,{children:"propriedade virtual"}),' que est\xe1 dispon\xedvel automaticamente para todos os atributos de tipo array. Oferece o tamanho do array, ou seja, o n\xfamero de elementos, e pode ser usada em pesquisas. Para saber mais, veja o par\xe1grafo [#cmd id="1397" anchor="2998555"/].']}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/distinct-attribute-values",children:"DISTINCT ATTRIBUTE VALUES"})}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1395"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},673521:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict2897927.en-11f4935c55baf79e470a5d456000c727.png"},476945:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict2994114.en-68a05af42526ae8a3e86ce9c6c663112.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var s=t(667294);let r={},d=s.createContext(r);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);