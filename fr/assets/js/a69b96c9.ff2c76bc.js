"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77762"],{912446:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/web-get-statistics","title":"WEB GET STATISTICS","description":"WEB GET STATISTICS ( pages ; hits ; usage )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-get-statistics.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-statistics","permalink":"/docs/fr/commands/web-get-statistics","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-statistics.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-get-statistics","title":"WEB GET STATISTICS","slug":"/commands/web-get-statistics","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Get server info","permalink":"/docs/fr/commands/web-get-server-info"},"next":{"title":"WEB GET VARIABLES","permalink":"/docs/fr/commands/web-get-variables"}}'),r=n("785893"),i=n("250065");let a={id:"web-get-statistics",title:"WEB GET STATISTICS",slug:"/commands/web-get-statistics",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let s={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"WEB GET STATISTICS"})," ( ",(0,r.jsx)(s.em,{children:"pages"})," ; ",(0,r.jsx)(s.em,{children:"hits"})," ; ",(0,r.jsx)(s.em,{children:"usage"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"pages"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Noms des pages les plus consult\xe9es"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hits"}),(0,r.jsx)(s.td,{children:"Integer array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Nombre de hits pour chaque page"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"usage"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Pourcentages du cache utilis\xe9"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"WEB GET STATISTICS"})," vous permet d\u2019obtenir des informations sur les pages les plus consult\xe9es, charg\xe9es dans le cache du serveur Web. Par cons\xe9quent, ces statistiques concernent uniquement les pages statiques, les images GIF, les images JPEG <100 ko et les feuilles de style (.css)."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Pour plus d\u2019informations sur le param\xe9trage du cache du serveur Web 4D, reportez-vous \xe0 la section ",(0,r.jsx)(s.em,{children:"Param\xe9trages du serveur Web"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["La commande remplit le tableau texte ",(0,r.jsx)(s.em,{children:"pages"})," avec les noms des pages les plus consult\xe9es. Le tableau entier long ",(0,r.jsx)(s.em,{children:"hits"})," re\xe7oit le nombre de \u201Chits\u201D pour chaque page. La variable num\xe9rique ",(0,r.jsx)(s.em,{children:"usage"})," re\xe7oit le pourcentage du cache Web utilis\xe9 par chaque page."]}),"\n",(0,r.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(s.p,{children:["Vous souhaitez g\xe9n\xe9rer une page semi-dynamique affichant les statistiques d\u2019utilisation du cache Web. Pour cela, dans une page HTML statique appel\xe9e \u201Cstats.shtm\u201D (les pages suffix\xe9es .shtm sont automatiquement analys\xe9es par le serveur Web), vous placez la balise ",(0,r.jsx)(s.em,{children:"<!\u2013\u2013#4DSCRIPT/STATS\u2013\u2013>"})," ainsi que des r\xe9f\xe9rences aux variables ",(0,r.jsx)(s.em,{children:"vPages"})," et ",(0,r.jsx)(s.em,{children:"vUsage"}),", par exemple :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-HTML",children:"<html>\n<head><title>Stats Web 4D</title></head>\n\x3c!--#4DSCRIPT/STATS--\x3e\n<body>\n<strong>Pourcentage du cache utilis\xe9 : </strong>\n\x3c!--#4DTEXT vUsage--\x3e\n<hr>\n<strong>Pages les plus consult\xe9es : </strong>\n\x3c!--#4DHTML vPages--\x3e\n</body>\n</html>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Dans la m\xe9thode projet STATS, \xe9crivez le code suivant :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0var $1 : Text\n\xa0var vPages : Text\n\xa0ARRAY TEXT(pages;0)\n\xa0ARRAY LONGINT(hits;0)\n\xa0var vUsage : Integer\n\xa0\n\xa0WEB GET STATISTICS(pages;hits;vUsage)\n\xa0For($i;1;Size of array(pages))\n\xa0\xa0// For each page pr\xe9sente dans le cache\n\xa0\xa0\xa0\xa0vPages:=pages{$i}+"\xa0\xa0\xa0"+String(hits{$i})+"\n"\n\xa0\xa0//Insertion du nom de la page et du code HTML\n\xa0End for\n'})}),"\n",(0,r.jsxs)(s.p,{children:['Vous pouvez envoyer la page "stats.shtm" via un lien URL ou \xe0 l\'aide de commande ',(0,r.jsx)(s.a,{href:"/docs/fr/commands/web-send-file",children:"WEB SEND FILE"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"658"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return a}});var t=n(667294);let r={},i=t.createContext(r);function a(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);