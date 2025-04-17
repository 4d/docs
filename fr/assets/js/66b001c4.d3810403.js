"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75147"],{800626:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-selection-range","title":"WP Selection range","description":"WP Selection range ( { ;} zoneWP* ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-selection-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-selection-range","permalink":"/docs/fr/20-R8/WritePro/commands/wp-selection-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-selection-range.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-selection-range","title":"WP Selection range","slug":"/WritePro/commands/wp-selection-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SELECT","permalink":"/docs/fr/20-R8/WritePro/commands/wp-select"},"next":{"title":"WP SET ATTRIBUTES","permalink":"/docs/fr/20-R8/WritePro/commands/wp-set-attributes"}}'),s=r("785893"),i=r("250065");let o={id:"wp-selection-range",title:"WP Selection range",slug:"/WritePro/commands/wp-selection-range",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Compatibilit\xe9",id:"compatibilit\xe9",level:2},{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Selection range"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"zoneWP"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, zoneWP est un nom d'objet de formulaire (cha\xeene). Si omis, zoneWP est un champ ou une variable objet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zoneWP"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom d'objet de formulaire (si * sp\xe9cifi\xe9) ou champ ou variable objet 4D Write Pro (si * omis)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nouvel objet plage ou image"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h2,{id:"compatibilit\xe9",children:"Compatibilit\xe9"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"WP Selection range"})," \xe9tait nomm\xe9e ",(0,s.jsx)(n.strong,{children:"WP Get selection"})," dans les versions pr\xe9c\xe9dentes de 4D Write Pro. Elle a \xe9t\xe9 renomm\xe9e pour plus de clart\xe9."]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"WP Selection range"})," retourne une nouvelle plage de s\xe9lection ou une nouvelle image bas\xe9e sur la s\xe9lection courante dans la zone 4D Write Pro ",(0,s.jsx)(n.em,{children:"zoneWP"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,s.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,s.jsx)(n.em,{children:"zoneWP"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,s.jsx)(n.em,{children:"zoneWP"})," est un champ ou une variable objet. Si le param\xe8tre ",(0,s.jsx)(n.em,{children:"zoneWP"})," ne d\xe9signe pas une zone 4D Write Pro, un objet vide est retourn\xe9."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Cette commande ne peut \xeatre utilis\xe9e que si ",(0,s.jsx)(n.em,{children:"zoneWP"})," est associ\xe9e \xe0 un objet de formulaire (i.e. elle est affich\xe9e dans le formulaire/la page courant(e))."]}),"\n",(0,s.jsxs)(n.p,{children:["Si une image ancr\xe9e (image \xe0 emplacement fixe) est s\xe9lectionn\xe9e dans ",(0,s.jsx)(n.em,{children:"wpArea"}),", ",(0,s.jsx)(n.strong,{children:"WP Selection range"})," retourne un objet contenant une r\xe9f\xe9rence d'image et non un objet plage (pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/WritePro/commands/wp-add-picture",children:"WP Add picture"}),"). Sinon, ",(0,s.jsx)(n.strong,{children:"WP Selection range"})," retourne un nouvel objet de type objPlage (pour plus d'informations, reportez-vous au paragraphe ",(0,s.jsx)(n.em,{children:"Gestion des plages"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez r\xe9cup\xe9rer le texte s\xe9lectionn\xe9 dans une zone 4D Write Pro :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$range:=WP Selection range(*;"WParea")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/WritePro/commands/wp-paragraph-range",children:"WP Paragraph range"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/WritePro/commands/wp-picture-range",children:"WP Picture range"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(667294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);