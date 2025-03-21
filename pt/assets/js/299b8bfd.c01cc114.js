"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87582"],{205055:function(e,d,n){n.r(d),n.d(d,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/add-to-date","title":"Add to date","description":"Add to date ( data ; anos ; meses ; dias ) : Date","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/add-to-date.md","sourceDirName":"commands-legacy","slug":"/commands/add-to-date","permalink":"/docs/pt/20-R7/commands/add-to-date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadd-to-date.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"add-to-date","title":"Add to date","slug":"/commands/add-to-date","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Date and Time","permalink":"/docs/pt/20-R7/commands/theme/Date-and-Time"},"next":{"title":"Current date","permalink":"/docs/pt/20-R7/commands/current-date"}}'),a=n("785893"),s=n("250065");let r={id:"add-to-date",title:"Add to date",slug:"/commands/add-to-date",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let d={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.strong,{children:"Add to date"})," ( ",(0,a.jsx)(d.em,{children:"data"})," ; ",(0,a.jsx)(d.em,{children:"anos"})," ; ",(0,a.jsx)(d.em,{children:"meses"})," ; ",(0,a.jsx)(d.em,{children:"dias"})," ) : Date"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Par\xe2metro"}),(0,a.jsx)(d.th,{children:"Tipo"}),(0,a.jsx)(d.th,{}),(0,a.jsx)(d.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"data"}),(0,a.jsx)(d.td,{children:"Date"}),(0,a.jsx)(d.td,{children:"\u2192"}),(0,a.jsx)(d.td,{children:"Data a qual adicionar dias, meses e anos"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"anos"}),(0,a.jsx)(d.td,{children:"Integer"}),(0,a.jsx)(d.td,{children:"\u2192"}),(0,a.jsx)(d.td,{children:"N\xfamero de anos a adicionar a data"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"meses"}),(0,a.jsx)(d.td,{children:"Integer"}),(0,a.jsx)(d.td,{children:"\u2192"}),(0,a.jsx)(d.td,{children:"N\xfamero de meses a adicionar a data"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"dias"}),(0,a.jsx)(d.td,{children:"Integer"}),(0,a.jsx)(d.td,{children:"\u2192"}),(0,a.jsx)(d.td,{children:"N\xfameros de dias a adicionar a data"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"Resultado"}),(0,a.jsx)(d.td,{children:"Date"}),(0,a.jsx)(d.td,{children:"\u2190"}),(0,a.jsx)(d.td,{children:"Data resultante"})]})]})]}),"\n",(0,a.jsx)(d.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(d.p,{children:["O comando Add to date adiciona ",(0,a.jsx)(d.em,{children:"anos"}),", ",(0,a.jsx)(d.em,{children:"meses,"})," e ",(0,a.jsx)(d.em,{children:"dias"})," a data passada em ",(0,a.jsx)(d.em,{children:"data"}),", depois retorna a data resultante."]}),"\n",(0,a.jsxs)(d.p,{children:["Mesmo que voc\xea possa utilizar os ",(0,a.jsx)(d.a,{href:"/docs/pt/20-R7/commands/self",children:"Self"})," para adicionar dias a uma data, Add to date lhe permite rapidamente adicionar meses e anos sem ter que lidar com o n\xfamero de dias ao m\xeas ou anos bissextos (como seria feito quando utiliza o operador + em datas)."]}),"\n",(0,a.jsx)(d.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-4d",children:"\xa0\xa0// Esta linha calcula a data dentro de um ano, ou mesmo dia\n\xa0$vdInUmano:=Add to date(Current date;1;0;0)\n\xa0\n\xa0\xa0// Esta linha calcula a data ou pr\xf3ximo m\xeas, ou mesmo dia\n\xa0$vdProximoMes:=Add to date(Current date;0;1;0)\n\xa0\n\xa0\xa0// Esta linha faz o mesmo que $vdAmanh\xe3:=Current date+1\n\xa0$vdAmanh\xe3:=Add to date(Current date;0;0;1)\n"})}),"\n",(0,a.jsx)(d.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{}),(0,a.jsx)(d.th,{})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"N\xfamero do comando"}),(0,a.jsx)(d.td,{children:"393"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"Thread-seguro"}),(0,a.jsx)(d.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,d,n){n.d(d,{Z:function(){return o},a:function(){return r}});var t=n(667294);let a={},s=t.createContext(a);function r(e){let d=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(d):{...d,...e}},[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:d},e.children)}}}]);