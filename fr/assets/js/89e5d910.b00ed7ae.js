"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23122],{35006:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=n(474848),a=n(28453);const r={id:"web-get-statistics",title:"WEB GET STATISTICS",slug:"/commands/web-get-statistics",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/web-get-statistics",title:"WEB GET STATISTICS",description:"WEB GET STATISTICS ( pages ; hits ; usage )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-statistics.md",sourceDirName:"commands-legacy",slug:"/commands/web-get-statistics",permalink:"/docs/fr/commands/web-get-statistics",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-statistics.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"web-get-statistics",title:"WEB GET STATISTICS",slug:"/commands/web-get-statistics",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WEB Get server info",permalink:"/docs/fr/commands/web-get-server-info"},next:{title:"WEB GET VARIABLES",permalink:"/docs/fr/commands/web-get-variables"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4}];function o(e){const s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"WEB GET STATISTICS"})," ( ",(0,t.jsx)(s.em,{children:"pages"})," ; ",(0,t.jsx)(s.em,{children:"hits"})," ; ",(0,t.jsx)(s.em,{children:"usage"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"pages"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Noms des pages les plus consult\xe9es"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"hits"}),(0,t.jsx)(s.td,{children:"Integer array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nombre de hits pour chaque page"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"usage"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Pourcentages du cache utilis\xe9"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"WEB GET STATISTICS"})," vous permet d\u2019obtenir des informations sur les pages les plus consult\xe9es, charg\xe9es dans le cache du serveur Web. Par cons\xe9quent, ces statistiques concernent uniquement les pages statiques, les images GIF, les images JPEG <100 ko et les feuilles de style (.css)."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Pour plus d\u2019informations sur le param\xe9trage du cache du serveur Web 4D, reportez-vous \xe0 la section ",(0,t.jsx)(s.em,{children:"Param\xe9trages du serveur Web"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["La commande remplit le tableau texte ",(0,t.jsx)(s.em,{children:"pages"})," avec les noms des pages les plus consult\xe9es. Le tableau entier long ",(0,t.jsx)(s.em,{children:"hits"})," re\xe7oit le nombre de \u201chits\u201d pour chaque page. La variable num\xe9rique ",(0,t.jsx)(s.em,{children:"usage"})," re\xe7oit le pourcentage du cache Web utilis\xe9 par chaque page."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(s.p,{children:["Vous souhaitez g\xe9n\xe9rer une page semi-dynamique affichant les statistiques d\u2019utilisation du cache Web. Pour cela, dans une page HTML statique appel\xe9e \u201cstats.shtm\u201d (les pages suffix\xe9es .shtm sont automatiquement analys\xe9es par le serveur Web), vous placez la balise ",(0,t.jsx)(s.em,{children:"<!\u2013\u2013#4DSCRIPT/STATS\u2013\u2013>"})," ainsi que des r\xe9f\xe9rences aux variables ",(0,t.jsx)(s.em,{children:"vPages"})," et ",(0,t.jsx)(s.em,{children:"vUsage"}),", par exemple :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-HTML",children:"<html>\n<head><title>Stats Web 4D</title></head>\n\x3c!--#4DSCRIPT/STATS--\x3e\n<body>\n<strong>Pourcentage du cache utilis\xe9 : </strong>\n\x3c!--#4DTEXT vUsage--\x3e\n<hr>\n<strong>Pages les plus consult\xe9es : </strong>\n\x3c!--#4DHTML vPages--\x3e\n</body>\n</html>\n"})}),"\n",(0,t.jsx)(s.p,{children:"Dans la m\xe9thode projet STATS, \xe9crivez le code suivant :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0var $1 : Text\n\xa0var vPages : Text\n\xa0ARRAY TEXT(pages;0)\n\xa0ARRAY LONGINT(hits;0)\n\xa0var vUsage : Integer\n\xa0\n\xa0WEB GET STATISTICS(pages;hits;vUsage)\n\xa0For($i;1;Size of array(pages))\n\xa0\xa0// For each page pr\xe9sente dans le cache\n\xa0\xa0\xa0\xa0vPages:=pages{$i}+"\xa0\xa0\xa0"+String(hits{$i})+"\n"\n\xa0\xa0//Insertion du nom de la page et du code HTML\n\xa0End for\n'})}),"\n",(0,t.jsxs)(s.p,{children:['Vous pouvez envoyer la page "stats.shtm" via un lien URL ou \xe0 l\'aide de commande ',(0,t.jsx)(s.a,{href:"/docs/fr/commands/web-send-file",children:"WEB SEND FILE"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var t=n(296540);const a={},r=t.createContext(a);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);