"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3808"],{114774:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>i,contentTitle:()=>a});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-formula-by-name","title":"VP Get formula by name","description":"VP Get formula by name ( vpAreaName Text { ; scope Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-formula-by-name.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-formula-by-name","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-formula-by-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-formula-by-name.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-get-formula-by-name","title":"VP Get formula by name"},"sidebar":"docs","previous":{"title":"VP Get formula","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-formula"},"next":{"title":"VP Get formulas","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-formulas"}}'),t=o("785893"),s=o("250065");let d={id:"vp-get-formula-by-name",title:"VP Get formula by name"},a=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Objecto devolvido",id:"objecto-devolvido",level:5},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get formula by name"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,t.jsx)(n.em,{children:"name"})," : Text { ; ",(0,t.jsx)(n.em,{children:"scope"})," : Number } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nome do intervalo nomeado"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"\xc2mbito alvo (padr\xe3o=folha atual)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultados"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Defini\xe7\xe3o da f\xf3rmula nomeada ou intervalo nomeado"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP Get formula by name"})," command  returns the formula and comment corresponding to the named range or named formula passed in the ",(0,t.jsx)(n.em,{children:"name"})," parameter, or ",(0,t.jsx)(n.strong,{children:"null"})," if it does not exist in the defined scope."]}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,t.jsxs)(n.p,{children:["Passe o intervalo com nome ou a f\xf3rmula com nome que quiser obter em ",(0,t.jsx)(n.em,{children:"name"}),". Note que os intervalos com nome s\xe3o devolvidos como f\xf3rmulas que cont\xe9m refer\xeancias absolutas de c\xe9lulas."]}),"\n",(0,t.jsxs)(n.p,{children:["You can define where to get the formula in ",(0,t.jsx)(n.em,{children:"scope"})," using either the sheet index (counting begins at 0) or the following constants:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"objecto-devolvido",children:"Objecto devolvido"}),"\n",(0,t.jsx)(n.p,{children:"O objeto retornado cont\xe9m as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formula"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Texto da f\xf3rmula correspondente \xe0 f\xf3rmula nomeada ou intervalo nomeado. Para os intervalos nomeados, a f\xf3rmula \xe9 uma sequ\xeancia de coordenadas absolutas."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"comment"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Coment\xe1rio correspondente \xe0 f\xf3rmula nomeada ou ao intervalo nomeado"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$range:=VP Cell("ViewProArea";0;0)\nVP ADD RANGE NAME("Total1";$range)\n \n$formula:=VP Get formula by name("ViewProArea";"Total1")\n  //$formula.formula=Sheet1!$A$1\n \n$formula:=VP Get formula by name("ViewProArea";"Total")\n  //$formula=null (if not existing)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-add-formula-name",children:"VP ADD FORMULA NAME"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-get-names",children:"VP Get names"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return d}});var r=o(667294);let t={},s=r.createContext(t);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);