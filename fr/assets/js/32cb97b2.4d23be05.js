"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17511],{153925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(474848),r=t(28453);const i={id:"wp-get-breaks",title:"WP Get breaks",slug:"/WritePro/commands/wp-get-breaks",displayed_sidebar:"docs"},d=void 0,l={id:"WritePro/commands-legacy/wp-get-breaks",title:"WP Get breaks",description:"WP Get breaks ( objCible {; typeSaut} ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-breaks.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-get-breaks",permalink:"/docs/fr/WritePro/commands/wp-get-breaks",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-breaks.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-get-breaks",title:"WP Get breaks",slug:"/WritePro/commands/wp-get-breaks",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP GET BOOKMARKS",permalink:"/docs/fr/WritePro/commands/wp-get-bookmarks"},next:{title:"WP Get data context",permalink:"/docs/fr/WritePro/commands/wp-get-data-context"}},a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Get breaks"})," ( ",(0,s.jsx)(n.em,{children:"objCible"})," {; ",(0,s.jsx)(n.em,{children:"typeSaut"}),"} ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objCible"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Plage ou \xe9l\xe9ment ou document 4D Write Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"typeSaut"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Type de sauts \xe0 retourner"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Collection de plages"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"WP Get breaks"})," retourne la collection de tous les sauts ins\xe9r\xe9s dans ",(0,s.jsx)(n.em,{children:"objCible"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Cette commande retourne uniquement les sauts saisis par un utilisateur ou par le code, et non ceux g\xe9n\xe9r\xe9s automatiquement par 4D Write Pro \xe0 des fins de mise en page."}),"\n",(0,s.jsx)(n.p,{children:"Dans le param\xe8tre objCible, vous pouvez passer :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"une plage, ou"}),"\n",(0,s.jsx)(n.li,{children:"un \xe9l\xe9ment (tableau / ligne / paragraphe / corps / en-t\xeate / pied de page / section / sous-section / zone de texte), ou"}),"\n",(0,s.jsx)(n.li,{children:"un document 4D Write Pro"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Par d\xe9faut, les sauts de tout type sont retourn\xe9s. Vous pouvez s\xe9lectionner un type de saut sp\xe9cifique \xe0 retourner, en passant l'une des constantes suivantes dans le param\xe8tre facultatif ",(0,s.jsx)(n.em,{children:"typeSaut"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk column break"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Saut de colonne : ins\xe8re un saut de colonne"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk continuous section break"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"D\xe9finit un saut de section continu (souvent utilis\xe9 pour modifier le nombre de colonnes sans commencer une nouvelle page)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk line break"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Saut de ligne (dans le m\xeame paragraphe)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk page break"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Saut de page : d\xe9finit une nouvelle page"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk paragraph break"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Saut de paragraphe : d\xe9finit un nouveau paragraphe"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk section break"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Saut de section: d\xe9finit une nouvelle section"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Valeur retourn\xe9e"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Get breaks"})," retourne une collection d'objets plage, chacun d'eux d\xe9crivant un saut dans objCible. Une propri\xe9t\xe9 sp\xe9cifique en lecture seule est disponible dans chaque objet plage, indiquant le type de saut :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Constante"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].breakType"}),(0,s.jsx)(n.td,{children:"Num\xe9rique"}),(0,s.jsx)(n.td,{children:"wk break type"}),(0,s.jsx)(n.td,{children:"Lecture seule : type de saut"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"Si objCible est une plage ou un \xe9l\xe9ment, les sauts sont retourn\xe9s dans l'ordre o\xf9 ils ont \xe9t\xe9 trouv\xe9s."}),"\n",(0,s.jsx)(n.p,{children:"Si objCible est un document 4D Write Pro, les sauts sont retourn\xe9s dans l'ordre suivant :"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"corps"}),"\n",(0,s.jsx)(n.li,{children:"en-t\xeate de premi\xe8re page de la section 1 (le cas \xe9ch\xe9ant)"}),"\n",(0,s.jsx)(n.li,{children:"pied de page de la premi\xe8re page de la section 1 (le cas \xe9ch\xe9ant)"}),"\n",(0,s.jsx)(n.li,{children:"en-t\xeate de la page de gauche pour la section 1 (le cas \xe9ch\xe9ant)"}),"\n",(0,s.jsx)(n.li,{children:"pied de la page de gauche pour la section 1 (le cas \xe9ch\xe9ant)"}),"\n",(0,s.jsx)(n.li,{children:"en-t\xeate de la page de droite pour la section (le cas \xe9ch\xe9ant)"}),"\n",(0,s.jsx)(n.li,{children:"pied de la page de droite pour la section 1 (le cas \xe9ch\xe9ant)"}),"\n",(0,s.jsx)(n.li,{children:"en-t\xeate principal de la section 1 (le cas \xe9ch\xe9ant)"}),"\n",(0,s.jsx)(n.li,{children:"pied de page principal de la section 1 (le cas \xe9ch\xe9ant)"}),"\n",(0,s.jsx)(n.li,{children:"faire de m\xeame avec la section 2, la section 3, et ainsi de suite."}),"\n",(0,s.jsx)(n.li,{children:"zones de texte."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Une collection vide est retourn\xe9e si objCible ne contient aucun saut (ni aucun saut de ",(0,s.jsx)(n.em,{children:"typeSaut"})," demand\xe9)."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez remplacer tous les sauts de ligne par des sauts de paragraphe dans un document :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $_filteredBreaks : Collection\n\xa0var $break : Object\n\xa0$_filteredBreaks:=WP Get breaks(WParea;wk line break)\n\xa0For each($break;$_filteredBreaks)\n\xa0\xa0\xa0\xa0WP INSERT BREAK($break;wk paragraph break;wk replace)\n\xa0End for each\n"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-get-elements",children:"WP Get elements"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-insert-break",children:"WP INSERT BREAK"})]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var s=t(296540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);