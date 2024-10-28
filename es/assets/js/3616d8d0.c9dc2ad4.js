"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55633],{824549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=n(474848),o=n(28453);const s={id:"wp-get-body",title:"WP Get body",slug:"/WritePro/commands/wp-get-body",displayed_sidebar:"docs"},d=void 0,c={id:"WritePro/commands-legacy/wp-get-body",title:"WP Get body",description:"WP Get body ( wpDoc ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-body.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-get-body",permalink:"/docs/es/WritePro/commands/wp-get-body",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-body.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-get-body",title:"WP Get body",slug:"/WritePro/commands/wp-get-body",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP GET ATTRIBUTES",permalink:"/docs/es/WritePro/commands/wp-get-attributes"},next:{title:"WP GET BOOKMARKS",permalink:"/docs/es/WritePro/commands/wp-get-bookmarks"}},i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const t={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP Get body"})," ( ",(0,r.jsx)(t.em,{children:"wpDoc"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe1metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wpDoc"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Documento 4D Write Pro"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resultado"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Cuerpo 4D Write Pro"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(t.p,{children:["El comando ",(0,r.jsx)(t.strong,{children:"WP Get body"})," devuelve el elemento cuerpo del documento 4D Write Pro ",(0,r.jsx)(t.em,{children:"wpDoc"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Esta referencia se puede pasar a:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["el comando ",(0,r.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-select",children:"WP SELECT"})," para seleccionar el cuerpo del documento."]}),"\n",(0,r.jsxs)(t.li,{children:["el comando ",(0,r.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-text-range",children:"WP Text range"})," para definir el cuerpo como un rango."]}),"\n",(0,r.jsxs)(t.li,{children:["los comandos ",(0,r.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," y ",(0,r.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," para manejar los atributos del cuerpo."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(t.p,{children:"Usted desea copiar la parte del cuerpo de un documento 4D Write Pro a otro documento 4D Write Pro:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0var $bodySource;$rangeSource;$tempoc;$bodyTarget;$rangeTarget : Object\n\xa0\n\xa0$bodySource:=WP Get body([TEMPLATES]WPtemplate)\n\xa0$rangeSource:=WP Text range($bodySource;wk start text;wk end text)\n\xa0$tempoc:=WP New($rangeSource)\n\xa0\n\xa0$bodyTarget:=WP Get body([Docs]MyWPDoc)\n\xa0$rangeTarget:=WP Text range($bodyTarget;wk start text;wk end text)\n\xa0\n\xa0WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)\n"})}),"\n",(0,r.jsx)(t.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-text-range",children:"WP Text range"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var r=n(296540);const o={},s=r.createContext(o);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);