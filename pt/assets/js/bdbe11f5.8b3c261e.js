"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94693"],{196226:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-stylesheets","title":"VP Get stylesheet","description":"VP Get stylesheet ( vpAreaName Text { ; sheet Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-get-stylesheet.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-stylesheets","permalink":"/docs/pt/ViewPro/commands/vp-get-stylesheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-stylesheet.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-stylesheets","title":"VP Get stylesheet"},"sidebar":"docs","previous":{"title":"VP Get stylesheets","permalink":"/docs/pt/ViewPro/commands/vp-get-stylesheet"},"next":{"title":"VP Get column attributes","permalink":"/docs/pt/ViewPro/commands/vp-get-table-column-attributes"}}'),r=n("785893"),l=n("250065");let o={id:"vp-get-stylesheets",title:"VP Get stylesheet"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP Get stylesheet"})," ( ",(0,r.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(t.em,{children:"styleName"})," : Text { ; ",(0,r.jsx)(t.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe2metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vpAreaName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"styleName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Nome do estilo"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sheet"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resultados"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"<-"}),(0,r.jsx)(t.td,{children:"Objeto da folha de estilo"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"VP Get stylesheet"})," command returns the ",(0,r.jsx)(t.em,{children:"styleName"})," style sheet object containing the property values which have been defined."]}),"\n",(0,r.jsxs)(t.p,{children:["Em ",(0,r.jsx)(t.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"styleName"}),", pass the name of the style sheet to get."]}),"\n",(0,r.jsxs)(t.p,{children:["You can define where to get the style sheet in the optional ",(0,r.jsx)(t.em,{children:"sheet"})," parameter using the sheet index (counting begins at 0) or with the following constants:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"vk current sheet"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(t.p,{children:"O seguinte c\xf3digo:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")\n'})}),"\n",(0,r.jsxs)(t.p,{children:["... retorna o objeto estilo ",(0,r.jsx)(t.em,{children:"GreenDashDotStyle"})," da folha atual:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"{\nbackColor:green,\nborderBottom:{color:green,style:10},\nborderLeft:{color:green,style:10},\nborderRight:{color:green,style:10},\nborderTop:{color:green,style:10}\n}\n"})}),"\n",(0,r.jsx)(t.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/pt/ViewPro/configuring#style-objects--style-sheets",children:"4D View Pro Style Objects and Style Sheets"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-get-stylesheet",children:"VP Get stylesheets"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"})]})]})}function a(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var s=n(667294);let r={},l=s.createContext(r);function o(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);