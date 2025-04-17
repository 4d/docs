"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80952"],{223758:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-frame","title":"WP Get frame","description":"WP Get frame ( { ;} zoneWP {; textBoxID*} ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-get-frame.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-frame","permalink":"/docs/fr/20-R8/WritePro/commands/wp-get-frame","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-frame.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-frame","title":"WP Get frame","slug":"/WritePro/commands/wp-get-frame","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get formulas","permalink":"/docs/fr/20-R8/WritePro/commands/wp-get-formulas"},"next":{"title":"WP Get header","permalink":"/docs/fr/20-R8/WritePro/commands/wp-get-header"}}'),s=t("785893"),d=t("250065");let i={id:"wp-get-frame",title:"WP Get frame",slug:"/WritePro/commands/wp-get-frame",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Get frame"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"zoneWP"})," {; ",(0,s.jsx)(n.em,{children:"textBoxID"}),"} ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, zoneWP est un nom d'objet de formulaire (cha\xeene). Si omis, zoneWP est un champ ou une variable objet"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zoneWP"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom d'objet de formulaire (si * sp\xe9cifi\xe9) ou champ ou variable objet 4D Write Pro (si * omis)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"textBoxID"}),(0,s.jsx)(n.td,{children:"Cha\xeene"}),(0,s.jsx)(n.td,{children:"\uD83E\uDC58"}),(0,s.jsx)(n.td,{children:"ID of the text box (only filled if a text box has the focus)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Cadre dans lequel se trouve le curseur"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"WP Get frame"})," retourne le cadre de la zone 4D Write Pro ",(0,s.jsx)(n.em,{children:"zoneWP"})," dans lequel se trouve actuellement le curseur."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,s.jsx)(n.em,{children:"zoneWP"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,s.jsx)(n.em,{children:"zoneWP"})," est un champ ou une variable objet."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Cette commande ne peut \xeatre utilis\xe9e que si ",(0,s.jsx)(n.em,{children:"zoneWP"})," est associ\xe9 \xe0 un objet de formulaire (",(0,s.jsx)(n.em,{children:"i.e"})," elle est affich\xe9 dans le formulaire/la page courant(e))."]}),"\n",(0,s.jsxs)(n.p,{children:["La valeur retourn\xe9e peut \xeatre compar\xe9e \xe0 l'une des constantes suivantes du th\xe8me ",(0,s.jsx)(n.em,{children:"Constantes 4D Write Pro"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk body"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsxs)(n.td,{children:["Zone de corps (",(0,s.jsx)(n.em,{children:"body"}),") de la section"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section default footer"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"10"}),(0,s.jsx)(n.td,{children:"Pied de page par d\xe9faut de la section (disponible uniquement s'il n'y a pas de pied de sous-section active)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section default header"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"9"}),(0,s.jsx)(n.td,{children:"En-t\xeate par d\xe9faut de la section (disponible uniquement s'il n'y a pas d'en-t\xeate de sous-section active)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section first footer"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Pied de la premi\xe8re page de la section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section first header"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"En-t\xeate de la premi\xe8re page de la section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section left footer"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"Pied de la (des) page(s) gauche(s) de la section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section left header"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"En-t\xeate de la (des) page(s) gauche(s) de la section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section right footer"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{children:"Pied de la (des) page(s) droite(s) de la section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk current section right header"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"7"}),(0,s.jsx)(n.td,{children:"En-t\xeate de la (des) page(s) droite(s) de la section"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk text box"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"11"}),(0,s.jsx)(n.td,{children:"Zone de texte"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Si le curseur est plac\xe9 dans un \xe9l\xe9ment de zone de texte, l'",(0,s.jsx)(n.strong,{children:"id"})," de l'\xe9l\xe9ment de la zone de texte est retourn\xe9 dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"textBoxID"}),". Dans tous les autres cas, ce param\xe8tre est retourn\xe9 vide."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez vous assurer que l'utilisateur a plac\xe9 le curseur dans un cadre d'en-t\xeate ou de pied de page :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $frameGet : Integer\n\xa0$frameGet:=WP Get frame(*;"WParea")\n\xa0If($frameGet=wk body)|($frameGet=wk text box)\n\xa0\xa0\xa0\xa0ALERT("Veuillez s\xe9lectionner une zone d\'en-t\xeate ou de pied de page.")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/WritePro/commands/wp-get-footer",children:"WP Get footer"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/WritePro/commands/wp-set-frame",children:"WP SET FRAME"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);