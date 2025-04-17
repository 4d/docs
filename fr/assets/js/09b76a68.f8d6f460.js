"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63729"],{812258:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-page-count","title":"WP Get page count","description":"WP Get page count ( objCible ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-get-page-count.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-page-count","permalink":"/docs/fr/WritePro/commands/wp-get-page-count","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-page-count.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-get-page-count","title":"WP Get page count","slug":"/WritePro/commands/wp-get-page-count","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get links","permalink":"/docs/fr/WritePro/commands/wp-get-links"},"next":{"title":"WP Get position","permalink":"/docs/fr/WritePro/commands/wp-get-position"}}'),r=t("785893"),o=t("250065");let i={id:"wp-get-page-count",title:"WP Get page count",slug:"/WritePro/commands/wp-get-page-count",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP Get page count"})," ( ",(0,r.jsx)(n.em,{children:"objCible"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objCible"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Document ou section 4D Write Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nombre de pages dans le document"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"WP Get page count"})," retourne le nombre total de pages pass\xe9es dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"objCible"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"objCible"}),", vous pouvez passer :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"une section/sous-section, ou"}),"\n",(0,r.jsx)(n.li,{children:"un document 4D Write Pro"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["La commande retourne le nombre total de pages de ",(0,r.jsx)(n.em,{children:"objCible"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Si vous passez une sous-section, le nombre de pages de la section parente est retourn\xe9."}),"\n",(0,r.jsxs)(n.p,{children:["Les m\xeames param\xe8tres d'affichage que la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-print",children:"WP PRINT"})," sont utilis\xe9s avec ",(0,r.jsx)(n.strong,{children:"WP Get page count"})," :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"en-t\xeates : visibles"}),"\n",(0,r.jsx)(n.li,{children:"pieds : visibles"}),"\n",(0,r.jsx)(n.li,{children:"expressions : calcul\xe9es et affich\xe9es"}),"\n",(0,r.jsx)(n.li,{children:"mode d'affichage : page ou brouillon"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"objCible"})," est affich\xe9 dans une zone de formulaire 4D Write Pro, assurez-vous que les param\xe8tres d'affichage de la zone correspondent \xe0 ceux de la commande afin d'obtenir des informations coh\xe9rentes. Notez \xe9galement que si ces param\xe8tres sont diff\xe9rents dans la zone, 4D Write Pro devra \"cloner\" le document afin de calculer son format \xe0 chaque appel de la commande, ce qui peut prendre du temps. Pour des raisons de performances, il est recommand\xe9 dans ce cas de construire le document hors-\xe9cran et de le copier dans la zone de formulaire une fois les calculs termin\xe9s."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:'Vous souhaitez conna\xeetre le nombre total de pages des documents 4D Write Pro stock\xe9s dans le champ "Manual" de votre s\xe9lection courante. Vous pouvez \xe9crire :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $pageCount : Integer\n\xa0var $totalCount : Integer\n\xa0FIRST RECORD([Items])\n\xa0While(Not(End selection([Items]))\n\xa0\xa0\xa0\xa0$pageCount:=WP Get page count([Items]Manual)\n\xa0\xa0\xa0\xa0$totalCount:=$totalCount+$pageCount\n\xa0\xa0\xa0\xa0NEXT RECORD([Items])\n\xa0End while\n\xa0ALERT("Nombre total de pages des manuels de la s\xe9lection : "+String($totalCount))\n'})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let r={},o=s.createContext(r);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);