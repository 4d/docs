"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1738"],{496230:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-remove-stylesheet","title":"VP REMOVE STYLESHEET","description":"VP REMOVE STYLESHEET ( vpAreaName Text { ; sheet : Integer } )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-remove-stylesheet.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-remove-stylesheet","permalink":"/docs/pt/ViewPro/commands/vp-remove-stylesheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-stylesheet.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-remove-stylesheet","title":"VP REMOVE STYLESHEET"},"sidebar":"docs","previous":{"title":"VP REMOVE SPAN","permalink":"/docs/pt/ViewPro/commands/vp-remove-span"},"next":{"title":"VP REMOVE TABLE","permalink":"/docs/pt/ViewPro/commands/vp-remove-table"}}'),r=n("785893"),o=n("250065");let d={id:"vp-remove-stylesheet",title:"VP REMOVE STYLESHEET"},i=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP REMOVE STYLESHEET"})," ( ",(0,r.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(t.em,{children:"styleName"})," : Text { ; ",(0,r.jsx)(t.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe2metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vpAreaName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"styleName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Nome do estilo a remover"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sheet"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"VP REMOVE STYLESHEET"})," command removes the style sheet passed in the ",(0,r.jsx)(t.em,{children:"styleName"})," from the ",(0,r.jsx)(t.em,{children:"vpAreaName"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Em ",(0,r.jsx)(t.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,r.jsxs)(t.p,{children:["Passe a folha de estilo para remover no par\xe2metro ",(0,r.jsx)(t.em,{children:"styleName"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can define where to remove the style in the optional ",(0,r.jsx)(t.em,{children:"sheet"})," parameter using the sheet index (counting begins at 0) or with the following constants:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"vk current sheet"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(t.p,{children:["To remove the ",(0,r.jsx)(t.em,{children:"GreenDashDotStyle"})," style object from the current sheet:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")\n'})}),"\n",(0,r.jsx)(t.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-get-stylesheets",children:"VP Get stylesheet"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-get-stylesheet",children:"VP Get stylesheets"})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var s=n(667294);let r={},o=s.createContext(r);function d(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);