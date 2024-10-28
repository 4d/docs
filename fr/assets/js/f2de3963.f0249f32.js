"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53839],{58842:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(474848),t=n(28453);const s={id:"wp-paragraph-range",title:"WP Paragraph range",slug:"/WritePro/commands/wp-paragraph-range",displayed_sidebar:"docs"},i=void 0,o={id:"WritePro/commands-legacy/wp-paragraph-range",title:"WP Paragraph range",description:"WP Paragraph range ( objCible ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-paragraph-range.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-paragraph-range",permalink:"/docs/fr/WritePro/commands/wp-paragraph-range",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-paragraph-range.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-paragraph-range",title:"WP Paragraph range",slug:"/WritePro/commands/wp-paragraph-range",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP New text box",permalink:"/docs/fr/WritePro/commands/wp-new-text-box"},next:{title:"WP Picture range",permalink:"/docs/fr/WritePro/commands/wp-picture-range"}},d={},l=[{value:"Compatibilit\xe9",id:"compatibilit\xe9",level:4},{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"WP Paragraph range"})," ( ",(0,a.jsx)(r.em,{children:"objCible"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Param\xe8tre"}),(0,a.jsx)(r.th,{children:"Type"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"objCible"}),(0,a.jsx)(r.td,{children:"Object"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Plage ou \xe9l\xe9ment"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"R\xe9sultat"}),(0,a.jsx)(r.td,{children:"Object"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"Plage d\xe9finissant uniquement les paragraphes"})]})]})]}),"\n",(0,a.jsx)(r.h4,{id:"compatibilit\xe9",children:"Compatibilit\xe9"}),"\n",(0,a.jsxs)(r.p,{children:["La commande ",(0,a.jsx)(r.strong,{children:"WP Paragraph range"})," \xe9tait nomm\xe9e ",(0,a.jsx)(r.strong,{children:"WP Create Paragraph range"})," dans les versions pr\xe9c\xe9dentes de 4D Write Pro. Elle a \xe9t\xe9 renomm\xe9e pour plus de clart\xe9."]}),"\n",(0,a.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(r.p,{children:["La commande ",(0,a.jsx)(r.strong,{children:"WP Paragraph range"})," retourne un objet plage qui r\xe9f\xe9rence uniquement les paragraphes qui intersectent l'",(0,a.jsx)(r.em,{children:"objCible"})," que vous avez pass\xe9 en param\xe8tre. La plage de paragraphes retourn\xe9e peut \xeatre utilis\xe9e avec ",(0,a.jsx)(r.a,{href:"/docs/fr/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," et ",(0,a.jsx)(r.a,{href:"/docs/fr/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," afin de manipuler les attributs de paragraphes uniquement."]}),"\n",(0,a.jsxs)(r.p,{children:["Dans ",(0,a.jsx)(r.em,{children:"objCible"}),", vous pouvez passer :"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"une plage 4D Write Pro, ou"}),"\n",(0,a.jsx)(r.li,{children:"un \xe9l\xe9ment (tableau / ligne / paragraphe / en-t\xeate / pied / corps / section / sous-section)"}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,a.jsx)(r.p,{children:"Vous voulez d\xe9finir la marge int\xe9rieure pour les paragraphes uniquement :"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0$oParagraphs:=WP Paragraph range($oSelection)\n\xa0WP SET ATTRIBUTES($oParagraphs;wk padding;20)\n"})}),"\n",(0,a.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/fr/WritePro/commands/wp-picture-range",children:"WP Picture range"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/fr/WritePro/commands/wp-selection-range",children:"WP Selection range"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/fr/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var a=n(296540);const t={},s=a.createContext(t);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);