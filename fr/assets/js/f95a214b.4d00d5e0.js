"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75413"],{992690:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>x,assets:()=>c,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/web-send-text","title":"WEB SEND TEXT","description":"WEB SEND TEXT ( texteHTML {; type} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-send-text.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-text","permalink":"/docs/fr/commands/web-send-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-send-text","title":"WEB SEND TEXT","slug":"/commands/web-send-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SEND RAW DATA","permalink":"/docs/fr/commands/web-send-raw-data"},"next":{"title":"WEB Server","permalink":"/docs/fr/commands/web-server"}}'),r=t("785893"),d=t("250065");let i={id:"web-send-text",title:"WEB SEND TEXT",slug:"/commands/web-send-text",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WEB SEND TEXT"})," ( ",(0,r.jsx)(n.em,{children:"texteHTML"})," {; ",(0,r.jsx)(n.em,{children:"type"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"texteHTML"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Champ ou variable texte au format HTML \xe0 envoyer au navigateur"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Type MIME"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"WEB SEND TEXT"})," permet d\u2019envoyer directement des donn\xe9es texte format\xe9es en HTML."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"texteHTML"})," contient les donn\xe9es \xe0 envoyer. 4D n\u2019effectue aucun contr\xf4le sur le contenu de ce param\xe8tre, vous devez donc veiller \xe0 ce que le codage HTML soit correct."]}),"\n",(0,r.jsxs)(n.p,{children:["Les \xe9ventuelles r\xe9f\xe9rences aux variables 4D et balises de type ",(0,r.jsx)(n.em,{children:"4DSCRIPT"})," dans le texte sont toujours analys\xe9es."]}),"\n",(0,r.jsxs)(n.p,{children:["Par d\xe9faut, si vous omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"type"}),', 4D assume que les donn\xe9es envoy\xe9es sont du type "text/html". La commande \xe9quivaut alors strictement \xe0 l\u2019envoi d\u2019un BLOB ayant le type "text/html" \xe0 l\u2019aide de la commande ',(0,r.jsx)(n.a,{href:"/docs/fr/commands/web-send-blob",children:"WEB SEND BLOB"}),".",(0,r.jsx)(n.br,{}),"\nVous pouvez \xe9galement pr\xe9ciser dans ",(0,r.jsx)(n.em,{children:"type"})," le type MIME du texte \xe0 envoyer. Pour plus d\u2019informations sur les types MIME pris en charge, reportez-vous \xe0 la description de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/web-send-blob",children:"WEB SEND BLOB"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"La m\xe9thode suivante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0TEXT TO BLOB(""+String(Heure courante)+"";$blob;UTF8 Texte sans longueur)\n\xa0WEB SEND BLOB($blob;"text/html")\n'})}),"\n",(0,r.jsx)(n.p,{children:"... peut \xeatre remplac\xe9e par :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0WEB SEND TEXT(""+String(Heure courante)+"")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/web-send-blob",children:"WEB SEND BLOB"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"677"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);