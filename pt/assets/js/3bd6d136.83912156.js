"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53517"],{740013:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-frozen-panes","title":"VP Get frozen panes","description":"VP Get frozen panes ( vpAreaName Integer } ) : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-frozen-panes.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-frozen-panes","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-frozen-panes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-frozen-panes.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-get-frozen-panes","title":"VP Get frozen panes"},"sidebar":"docs","previous":{"title":"VP Get formulas","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-formulas"},"next":{"title":"VP Get names","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-names"}}'),r=t("785893"),o=t("250065");let d={id:"vp-get-frozen-panes",title:"VP Get frozen panes"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Objeto devolvido",id:"objeto-devolvido",level:5},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get frozen panes"})," ( vpAreaName : Text { ; sheet : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto que cont\xe9m as informa\xe7\xf5es sobre as colunas e linhas congeladas"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Get frozen panes"})," command returns an object with information about the frozen columns and rows in ",(0,r.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"sheet"}),", pode designar uma folha espec\xedfica onde o intervalo ser\xe1 definido (a contagem come\xe7a em 0). Se omitido ou se voc\xea passar ",(0,r.jsx)(n.code,{children:"vk current sheet"}),", a planilha atual ser\xe1 usada."]}),"\n",(0,r.jsx)(n.h5,{id:"objeto-devolvido",children:"Objeto devolvido"}),"\n",(0,r.jsx)(n.p,{children:"O comando devolve um objeto que descreve as colunas e linhas congeladas. Este objeto pode conter as seguintes propriedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"columnCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"O n\xfamero de colunas congeladas \xe0 esquerda da folha"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trailingColumnCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"O n\xfamero de colunas congeladas \xe0 direita da folha"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rowCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"O n\xfamero de linhas congeladas na parte superior da folha"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trailingRowCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"O n\xfamero de linhas congeladas na parte inferior da folha"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Pretende obter informa\xe7\xf5es sobre o n\xfamero de colunas e linhas congeladas:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $panesObj : Object\n\n \n$panesObj:=VP Get frozen panes("ViewProArea")\n'})}),"\n",(0,r.jsx)(n.p,{children:"O objeto devolvido cont\xe9m, por exemplo:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(297955).Z+"",width:"1123",height:"210"})}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-set-frozen-panes",children:"VP SET FROZEN PANES"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},297955:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpGetFrozenpanes-398acd4f3af923b58c396d0fa808b53c.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var s=t(667294);let r={},o=s.createContext(r);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);