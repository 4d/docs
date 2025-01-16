"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61917"],{506354:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/wa-set-preference","title":"WA SET PREFERENCE","description":"WA SET PREFERENCE ( { ;} objet ; s\xe9lecteur ; valeur* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/wa-set-preference.md","sourceDirName":"commands-legacy","slug":"/commands/wa-set-preference","permalink":"/docs/fr/20-R7/commands/wa-set-preference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-set-preference.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-set-preference","title":"WA SET PREFERENCE","slug":"/commands/wa-set-preference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA SET PAGE CONTENT","permalink":"/docs/fr/20-R7/commands/wa-set-page-content"},"next":{"title":"WA SET URL FILTERS","permalink":"/docs/fr/20-R7/commands/wa-set-url-filters"}}'),t=r("785893"),d=r("250065");let i={id:"wa-set-preference",title:"WA SET PREFERENCE",slug:"/commands/wa-set-preference",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WA SET PREFERENCE"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"s\xe9lecteur"})," ; ",(0,t.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"s\xe9lecteur"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Pr\xe9f\xe9rence \xe0 modifier"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valeur"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur de la pr\xe9f\xe9rence (Vrai = autoris\xe9, Faux = non autoris\xe9)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WA SET PREFERENCE"})," permet de fixer diff\xe9rentes pr\xe9f\xe9rences pour la zone Web d\xe9sign\xe9e par les param\xe8tres ",(0,t.jsx)(n.em,{children:"*"})," et ",(0,t.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"s\xe9lecteur"})," la pr\xe9f\xe9rence \xe0 modifier et dans ",(0,t.jsx)(n.em,{children:"valeur"})," la valeur \xe0 lui attribuer. Vous pouvez passer dans ",(0,t.jsx)(n.em,{children:"s\xe9lecteur"}),' l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,t.jsx)(n.em,{children:"Zone Web"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WA enable contextual menu"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"Autoriser l\u2019affichage du menu contextuel standard dans la zone Web. Par d\xe9faut (n'importe quelle machine) = Faux."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WA enable URL drop"}),(0,t.jsx)(n.td,{children:"101"}),(0,t.jsxs)(n.td,{children:["Modifie l'ic\xf4ne de d\xe9poser et appelle l'\xe9v\xe9nement ",(0,t.jsx)(n.em,{children:"Sur refus ouverture fen\xeatre"})," lorsque les URL ou les fichiers sont d\xe9pos\xe9s dans la zone Web. Par d\xe9faut (n'importe quelle machine) = Faux"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WA enable Web inspector"}),(0,t.jsx)(n.td,{children:"100"}),(0,t.jsx)(n.td,{children:"Autoriser l\u2019affichage de l\u2019inspecteur Web dans la zone. Par d\xe9faut (n'importe quelle machine) = Faux."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Pour chaque pr\xe9f\xe9rence, passez Vrai dans ",(0,t.jsx)(n.em,{children:"valeur"})," pour l\u2019activer et Faux pour l\u2019inactiver."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez autoriser le d\xe9poser d'URLs dans la zone Web 'myarea' :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//dans la m\xe9thode formulaire\n\xa0WA SET PREFERENCE(*;"myarea";WA enable URL drop;True)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//dans une m\xe9thode objet zone web\n\xa0If(FORM Event.code=On Window Opening Denied)\n\xa0\xa0\xa0\xa0WA OPEN URL(*;"myarea";WA Get last filtered URL(*;"WebArea"))\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-get-preference",children:"WA GET PREFERENCE"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1041"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);