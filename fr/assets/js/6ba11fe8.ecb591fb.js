"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89493"],{647334:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/wa-get-current-url","title":"WA Get current URL","description":"WA Get current URL ( { ;} objet* ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/wa-get-current-url.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-current-url","permalink":"/docs/fr/commands/wa-get-current-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-current-url.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wa-get-current-url","title":"WA Get current URL","slug":"/commands/wa-get-current-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Get context","permalink":"/docs/fr/commands/wa-get-context"},"next":{"title":"WA GET EXTERNAL LINKS FILTERS","permalink":"/docs/fr/commands/wa-get-external-links-filters"}}'),s=t("785893"),c=t("250065");let i={id:"wa-get-current-url",title:"WA Get current URL",slug:"/commands/wa-get-current-url",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WA Get current URL"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objet"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objet"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"URL actuellement charg\xe9 dans la zone Web"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"WA Get current URL"})," retourne l\u2019adresse URL de la page affich\xe9e dans la zone Web d\xe9sign\xe9e par les param\xe8tres ",(0,s.jsx)(n.em,{children:"*"})," et ",(0,s.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Si l\u2019URL courant n\u2019est pas disponible, la commande retourne une cha\xeene vide."}),"\n",(0,s.jsx)(n.p,{children:'Si la page Web est enti\xe8rement charg\xe9e, la valeur retourn\xe9e par la fonction est identique \xe0 celle de la variable "URL" associ\xe9e \xe0 la zone Web. Si la page est en cours de chargement, les deux valeurs seront diff\xe9rentes : la fonction retourne l\u2019URL enti\xe8rement charg\xe9 et la variable contient l\u2019URL en cours de chargement.'}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsxs)(n.p,{children:['La page affich\xe9e est l\u2019URL "',(0,s.jsx)(n.a,{href:"http://www.apple.com",children:"www.apple.com"}),'" et la page "',(0,s.jsx)(n.a,{href:"http://www.4d.com",children:"www.4d.com"}),'" est en cours de chargement :']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$url:=WA Get current URL(MaZoneW)\xa0//retourne "http://www.apple.com"\n\xa0\xa0//La variable URL associ\xe9e contient "http://www.4d.com"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/wa-open-url",children:"WA OPEN URL"})}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1025"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var r=t(667294);let s={},c=r.createContext(s);function i(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);