"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25159"],{878359:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"ViewPro/commands/vp-set-binding-path","title":"VP SET BINDING PATH","description":"Hist\xf3ria","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-binding-path.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-binding-path","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-binding-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-binding-path.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-binding-path","title":"VP SET BINDING PATH"},"sidebar":"docs","previous":{"title":"VP SET ALLOWED METHODS","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-allowed-methods"},"next":{"title":"VP SET BOOLEAN VALUE","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-boolean-value"}}'),s=t("785893"),r=t("250065");let a={id:"vp-set-binding-path",title:"VP SET BINDING PATH"},o=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R5"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET BINDING PATH"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object  ; ",(0,s.jsx)(n.em,{children:"dataContextAttribute"}),"  : Text)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto intervalo"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataContextAttribute"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsxs)(n.td,{children:["Nome do atributo a associar a ",(0,s.jsx)(n.em,{children:"rangeObj"})]}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SET BINDING PATH"})," command binds an attribute from a sheet's data context to ",(0,s.jsx)(n.em,{children:"rangeObj"}),". After you set a data context using the ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-data-context",children:"SET DATA CONTEXT"})," method. When loaded, if the data context contains the attribute, the value of ",(0,s.jsx)(n.em,{children:"dataContextAttribute"})," is automatically displayed in the cells in ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass an object that is either a cell range or a combined range of cells."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"rangeObj"})," is a range with several cells, the command binds the attribute to the first cell of the range."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"rangeObj"})," contains several ranges of cells, the command binds the attribute to the first cell of each range."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"dataContextAttribute"}),", pass the name of the attribute to bind to ",(0,s.jsx)(n.em,{children:"rangeObj"}),". If ",(0,s.jsx)(n.em,{children:"dataContextAttribute"})," is an empty string, the function removes the current binding."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Os atributos do tipo cole\xe7\xe3o n\xe3o s\xe3o suportados. Quando voc\xea passar o nome de uma cole\xe7\xe3o, o comando n\xe3o faz nada."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:["Defina um contexto de dados e vincule o atributo ",(0,s.jsx)(n.code,{children:"firstName"})," e ",(0,s.jsx)(n.code,{children:"lastName"})," \xe0s c\xe9lulas:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $p : Object\n\n$p:=New object\n$p.firstName:="Freehafer"\n$p.lastName:="Nancy" VP SET DATA CONTEXT("ViewProArea"; $p) VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")\nVP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(660558).Z+"",width:"300",height:"81"})}),"\n",(0,s.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-get-binding-path",children:"VP Get binding path"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-get-data-context",children:"VP Get data context"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-get-data-context",children:"VP SET DATA CONTEXT"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},660558:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(667294);let s={},r=i.createContext(s);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);