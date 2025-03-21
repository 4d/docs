"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28625"],{636149:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/wa-open-url","title":"WA OPEN URL","description":"WA OPEN URL ( { ;} objet ; url* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/wa-open-url.md","sourceDirName":"commands-legacy","slug":"/commands/wa-open-url","permalink":"/docs/fr/20-R7/commands/wa-open-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-open-url.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-open-url","title":"WA OPEN URL","slug":"/commands/wa-open-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA OPEN FORWARD URL","permalink":"/docs/fr/20-R7/commands/wa-open-forward-url"},"next":{"title":"WA OPEN WEB INSPECTOR","permalink":"/docs/fr/20-R7/commands/wa-open-web-inspector"}}'),t=s("785893"),i=s("250065");let d={id:"wa-open-url",title:"WA OPEN URL",slug:"/commands/wa-open-url",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WA OPEN URL"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"url"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"url"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"URL \xe0 charger dans la zone Web"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WA OPEN URL"})," charge dans la zone Web d\xe9sign\xe9e par les param\xe8tres ",(0,t.jsx)(n.em,{children:"*"})," et ",(0,t.jsx)(n.em,{children:"objet"})," l\u2019URL pass\xe9 dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"url"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si une cha\xeene vide est pass\xe9e dans ",(0,t.jsx)(n.em,{children:"url"}),", la commande ",(0,t.jsx)(n.strong,{children:"WA OPEN URL"}),' ne fait rien et aucune erreur n\u2019est g\xe9n\xe9r\xe9e. Pour charger une page vide dans la zone Web, passez la cha\xeene "about:blank" dans ',(0,t.jsx)(n.em,{children:"url"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Comme la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/open-url",children:"OPEN URL"}),", ",(0,t.jsx)(n.strong,{children:"WA OPEN URL"})," accepte plusieurs types de syntaxes dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"url"})," pour d\xe9signer les fichiers :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'syntaxe posix : "file:///c:/Mon%20Fichier"'}),"\n",(0,t.jsx)(n.li,{children:'syntaxe syst\xe8me : "c:\\MonDossier\\MonFichier" (Windows) ou "MonDisque:MonDossier:MonFichier" (Mac OS).'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"}),' Par compatibilit\xe9, la syntaxe "file://" (utilisation de deux "/") est accept\xe9e dans 4D mais elle n\'est pas conforme aux RFC. Il est conseill\xe9 d\'utiliser la syntaxe "file:///" (trois "/") qui est conforme aux RFC.']}),"\n",(0,t.jsxs)(n.p,{children:["Sous Mac OS, quand FileVault est activ\xe9, vous devez utiliser la syntaxe posix. Vous pouvez transformer les chemins syst\xe8me via la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/convert-path-system-to-posix",children:"Convert path system to POSIX"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'Cette commande a le m\xeame effet que la modification de la valeur de la variable "URL" associ\xe9e \xe0 la zone. Par exemple, si la variable de la zone est nomm\xe9e MaZoneW_url :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0MaZoneW_url:="http://www.4d.com/"\n'})}),"\n",(0,t.jsx)(n.p,{children:"\xe9quivaut \xe0 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0WA OPEN URL(MaZoneW;"http://www.4d.com/")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/open-url",children:"OPEN URL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-open-back-url",children:"WA OPEN BACK URL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/wa-open-forward-url",children:"WA OPEN FORWARD URL"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1020"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);