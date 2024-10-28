"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42007],{927146:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(474848),t=o(28453);const a={id:"wp-bookmark-range",title:"WP Bookmark range",slug:"/WritePro/commands/wp-bookmark-range",displayed_sidebar:"docs"},d=void 0,s={id:"WritePro/commands-legacy/wp-bookmark-range",title:"WP Bookmark range",description:"WP Bookmark range ( docWP ; NomeBK ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-bookmark-range.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-bookmark-range",permalink:"/docs/pt/WritePro/commands/wp-bookmark-range",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-bookmark-range.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-bookmark-range",title:"WP Bookmark range",slug:"/WritePro/commands/wp-bookmark-range",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP Add picture",permalink:"/docs/pt/WritePro/commands/wp-add-picture"},next:{title:"WP COMPUTE FORMULAS",permalink:"/docs/pt/WritePro/commands/wp-compute-formulas"}},i={},c=[{value:"Compatibilidade",id:"compatibilidade",level:4},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"WP Bookmark range"})," ( ",(0,n.jsx)(r.em,{children:"docWP"})," ; ",(0,n.jsx)(r.em,{children:"NomeBK"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe2metro"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"docWP"}),(0,n.jsx)(r.td,{children:"Object"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Documento 4D Write Pro"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"NomeBK"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Nome de bookmark cuja faixa quer obter"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Resultado"}),(0,n.jsx)(r.td,{children:"Object"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"Faixa de bookmark"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"compatibilidade",children:"Compatibilidade"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"WP Bookmark range"})," era chamada ",(0,n.jsx)(r.strong,{children:"WP Get bookmark range"})," em vers\xf5es anteriores de 4D Write Pro. Foi renomeada por claridade."]}),"\n",(0,n.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O comando ",(0,n.jsx)(r.strong,{children:"WP Bookmark range"})," devolve um objeto de tipo faixa de texto (objFaixa) que cont\xe9m a faixa para o marcador com o nome ",(0,n.jsx)(r.em,{children:"nombk"})," em ",(0,n.jsx)(r.em,{children:"docWP"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Se o marcador ",(0,n.jsx)(r.em,{children:"nombk"})," n\xe3o existir em ",(0,n.jsx)(r.em,{children:"wpDoc"}),", um objeto objFaixa \xe9 devolvido."]}),"\n",(0,n.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(r.p,{children:'Se quiser mostrar a faixa do marcador "MyBookmark" em seu documento:'}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0var $wpRange : Object\n\xa0$wpRange:=WP Get bookmark range(WParea;"MyBookmark")\n\xa0WP SELECT(WParea;$wpRange)\n'})}),"\n",(0,n.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-delete-bookmark",children:"WP DELETE BOOKMARK"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-get-bookmarks",children:"WP GET BOOKMARKS"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-new-bookmark",children:"WP NEW BOOKMARK"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function l(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>d,x:()=>s});var n=o(296540);const t={},a=n.createContext(t);function d(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);