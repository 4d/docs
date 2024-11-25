"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68564"],{209652:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-names","title":"VP Get names","description":"VP Get names ( vpAreaName Number } ) : Collection","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-names.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-names","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-names.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-get-names","title":"VP Get names"},"sidebar":"docs","previous":{"title":"VP Get frozen panes","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-frozen-panes"},"next":{"title":"VP Get print info","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-print-info"}}'),o=t("785893"),r=t("250065");let d={id:"vp-get-names",title:"VP Get names"},i=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Cole\xe7\xe3o devolvida",id:"cole\xe7\xe3o-devolvida",level:5},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP Get names"})," ( vpAreaName : Text { ; scope : Number } ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpAreaName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"scope"}),(0,o.jsx)(n.td,{children:"Number"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Escopo de destino (padr\xe3o = planilha atual)"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultados"}),(0,o.jsx)(n.td,{children:"Collection"}),(0,o.jsx)(n.td,{children:"<-"}),(0,o.jsx)(n.td,{children:"Nomes existentes no \xe2mbito definido"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VP Get names"}),' command returns a collection of all defined "names" in the current sheet or in the scope designated by the ',(0,o.jsx)(n.em,{children:"scope"})," parameter."]}),"\n",(0,o.jsxs)(n.p,{children:["Em ",(0,o.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,o.jsxs)(n.p,{children:["You can define where to get the names in ",(0,o.jsx)(n.em,{children:"scope"})," using either the sheet index (counting begins at 0) or the following constants:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"cole\xe7\xe3o-devolvida",children:"Cole\xe7\xe3o devolvida"}),"\n",(0,o.jsx)(n.p,{children:"A cole\xe7\xe3o devolvida cont\xe9m um objeto por nome. As seguintes propriedades do objeto podem ser devolvidas:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Propriedade"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"result[ ].name"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"nome da c\xe9lula ou do intervalo"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"result[ ].formula"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"formula"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"result[ ].comment"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"Coment\xe1rio associado ao nome"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Propriedades dispon\xedveis dependendo do tipo de elemento nomeado (c\xe9lula com nome, intervalo com nome ou f\xf3rmula com nome)"}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'var $list : Collection\n\n\n$list:=VP Get names("ViewProArea";2) //nomes na 3\xaa folha\n'})}),"\n",(0,o.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-add-formula-name",children:"VP ADD FORMULA NAME"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-add-range-name",children:"VP ADD RANGE NAME"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-get-formula-by-name",children:"VP Get formula by name"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let o={},r=s.createContext(o);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);