"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34751"],{245684:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/wa-create-url-history-menu","title":"WA Create URL history menu","description":"WA Create URL history menu ( { ;} objet {; direction*} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/wa-create-url-history-menu.md","sourceDirName":"commands-legacy","slug":"/commands/wa-create-url-history-menu","permalink":"/docs/fr/commands/wa-create-url-history-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-create-url-history-menu.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wa-create-url-history-menu","title":"WA Create URL history menu","slug":"/commands/wa-create-url-history-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Back URL available","permalink":"/docs/fr/commands/wa-back-url-available"},"next":{"title":"WA Evaluate JavaScript","permalink":"/docs/fr/commands/wa-evaluate-javascript"}}'),t=s("785893"),i=s("250065");let d={id:"wa-create-url-history-menu",title:"WA Create URL history menu",slug:"/commands/wa-create-url-history-menu",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WA Create URL history menu"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," {; ",(0,t.jsx)(n.em,{children:"direction"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"direction"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"0 ou omis=Liste des URLs pr\xe9c\xe9dents, 1=Liste des URLs suivants"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"R\xe9f\xe9rence du menu"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WA Create URL history menu"})," cr\xe9e et remplit un menu pouvant \xeatre utilis\xe9 directement pour la navigation parmi les URLs visit\xe9s au cours de la session dans la zone Web d\xe9sign\xe9e par les param\xe8tres ",(0,t.jsx)(n.em,{children:"*"})," et ",(0,t.jsx)(n.em,{children:"objet"}),". Elle permet de construire une interface de navigation personnalis\xe9e."]}),"\n",(0,t.jsx)(n.p,{children:"Les informations fournies concernent la session, c\u2019est-\xe0-dire la navigation effectu\xe9e dans une m\xeame zone Web tant que le formulaire n\u2019a pas \xe9t\xe9 referm\xe9."}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"direction"}),' une valeur indiquant la liste \xe0 r\xe9cup\xe9rer. Vous pouvez utiliser l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,t.jsx)(n.em,{children:"Zone Web"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WA next URLs"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WA previous URLs"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,t.jsx)(n.em,{children:"direction"}),", la valeur 0 est utilis\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["Une fois le menu g\xe9n\xe9r\xe9, vous pouvez l\u2019afficher via la commande de 4D ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"})," et le manipuler via les commandes standard de gestion des menus de 4D. La cha\xeene retourn\xe9e par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"})," contient l\u2019URL de la page visit\xe9e (voir exemple)."]}),"\n",(0,t.jsxs)(n.p,{children:["Appelez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/release-menu",children:"RELEASE MENU"})," pour supprimer un menu historique d\u2019URL lorsqu\u2019il est devenu inutile."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.em,{children:"Note de compatibilit\xe9 :"})," A partir de 4D v19 R5, cette commande remplit un menu uniquement avec l'URL courante des zones web \xe0 l'aide du moteur de rendu du syst\xe8me de Windows."]})}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:'Le code suivant pourrait \xeatre associ\xe9 \xe0 un bouton 3D avec pop up menu libell\xe9 "Pr\xe9c\xe9dent" :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\xa0//Clic simple\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WA OPEN BACK URL(WA_zone)\n\xa0\xa0\xa0\xa0:(Form event code=On Alternative Click)\xa0//Clic sur la fl\xe8che -> affichage du pop up\n\xa0\xa0//Cr\xe9er un menu historique pr\xe9c\xe9dent\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$Menu:=WA Create URL history menu(WA_zone;wa URLs pr\xe9c\xe9dents)\n\xa0\xa0//Afficher ce menu dans un pop up\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$URL:=Dynamic pop up menu($Menu)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($URL#"")\xa0//Si une ligne est s\xe9lectionn\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0WA OPEN URL(WA_zone;$URL)\xa0// Ouvrir la page Web\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RELEASE MENU($Menu)\xa0//Effacer le menu pour lib\xe9rer la m\xe9moire\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/release-menu",children:"RELEASE MENU"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/wa-get-url-history",children:"WA GET URL HISTORY"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1049"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);