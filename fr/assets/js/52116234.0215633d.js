"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26207"],{738995:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/web-get-variables","title":"WEB GET VARIABLES","description":"WEB GET VARIABLES ( tabNoms ; tabValeurs )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-get-variables.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-variables","permalink":"/docs/fr/commands/web-get-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-variables.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-get-variables","title":"WEB GET VARIABLES","slug":"/commands/web-get-variables","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB GET STATISTICS","permalink":"/docs/fr/commands/web-get-statistics"},"next":{"title":"WEB Is secured connection","permalink":"/docs/fr/commands/web-is-secured-connection"}}'),t=n("785893"),i=n("250065");let l={id:"web-get-variables",title:"WEB GET VARIABLES",slug:"/commands/web-get-variables",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Pr\xe9cisions sur les formulaires Web et les actions associ\xe9es",id:"pr\xe9cisions-sur-les-formulaires-web-et-les-actions-associ\xe9es",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"WEB GET VARIABLES"})," ( ",(0,t.jsx)(s.em,{children:"tabNoms"})," ; ",(0,t.jsx)(s.em,{children:"tabValeurs"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tabNoms"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Noms des variables du formulaire Web"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tabValeurs"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Valeurs des variables du formulaire Web"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"WEB GET VARIABLES"})," remplit les tableaux texte ",(0,t.jsx)(s.em,{children:"tabNoms"})," et ",(0,t.jsx)(s.em,{children:"tabValeurs"})," avec, respectivement, les noms et les valeurs des variables contenues dans un formulaire Web \u201Csoumis\u201D (c\u2019est-\xe0-dire envoy\xe9) au serveur Web.",(0,t.jsx)(s.br,{}),"\nCette commande r\xe9cup\xe8re la valeur de toutes les variables pouvant \xeatre incluses dans des pages HTML : zones de saisie, boutons, cases \xe0 cocher, boutons radio, pop up menus, listes d\u2019options..."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Dans le cas des cases \xe0 cocher, le nom de la variable et sa valeur ne sont retourn\xe9s que si la case est effectivement coch\xe9e."]}),"\n",(0,t.jsxs)(s.p,{children:["La commande fonctionne quel que soit le type d\u2019URL ou de formulaire (m\xe9thode POST ou GET) envoy\xe9 au serveur Web.",(0,t.jsx)(s.br,{}),"\nCette commande peut \xeatre appel\xe9e, selon les besoins, dans la ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/qr-set-destination",children:"QR SET DESTINATION"})," ou toute autre m\xe9thode 4D qui r\xe9sulte de la soumission d\u2019un formulaire."]}),"\n",(0,t.jsx)(s.h5,{id:"pr\xe9cisions-sur-les-formulaires-web-et-les-actions-associ\xe9es",children:"Pr\xe9cisions sur les formulaires Web et les actions associ\xe9es"}),"\n",(0,t.jsxs)(s.p,{children:["Un formulaire est compos\xe9 de \u201Czones de saisie\u201D (zones de texte, boutons, cases \xe0 cocher), chacune ayant un nom. Lorsqu\u2019un formulaire est \u201Csoumis\u201D au serveur Web (une requ\xeate est envoy\xe9e au serveur), la requ\xeate comporte, entre autres, la liste des zones de saisie et leurs valeurs respectives.",(0,t.jsx)(s.br,{}),"\nIl y a deux \u201Cm\xe9thodes\u201D pour soumettre un formulaire (4D accepte indiff\xe9remment l\u2019une ou l\u2019autre) :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"POST, g\xe9n\xe9ralement utilis\xe9e pour l\u2019insertion de donn\xe9es dans le serveur Web \u2014 vers une base de donn\xe9es,"}),"\n",(0,t.jsx)(s.li,{children:"GET, g\xe9n\xe9ralement utilis\xe9e pour l\u2019interrogation du serveur Web \u2014 donn\xe9es en provenance d\u2019une base de donn\xe9es."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(s.p,{children:["Un formulaire contient deux champs, vNOM et vVILLE, qui re\xe7oivent les valeurs \u201CMARTIN\u201D et \u201CPARIS\u201D. L\u2019action associ\xe9e au formulaire est \u201C",(0,t.jsx)(s.em,{children:"/4DACTION/WEBFORM"}),"\u201D."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Si la m\xe9thode du formulaire est POST (cas le plus souvent utilis\xe9), les donn\xe9es saisies ne seront pas visibles dans l\u2019URL (c\u2019est-\xe0-dire ",(0,t.jsx)(s.a,{href:"http://127.0.0.1/4DACTION/WEBFORM",children:"http://127.0.0.1/4DACTION/WEBFORM"}),")."]}),"\n",(0,t.jsxs)(s.li,{children:["Si la m\xe9thode du formulaire est GET, les donn\xe9es seront visibles dans l\u2019URL (c\u2019est-\xe0-dire ",(0,t.jsx)(s.a,{href:"http://127.0.0.1/4DACTION/WEBFORM?vNOM=MARTIN&vVILLE=PARIS",children:"http://127.0.0.1/4DACTION/WEBFORM?vNOM=MARTIN&vVILLE=PARIS"}),")."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"La m\xe9thode WEBFORM peut \xeatre de la forme suivante :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0ARRAY TEXT($tnoms;0)\n\xa0ARRAY TEXT($tvaleurs;0)\n\xa0WEB GET VARIABLES($tnoms;$tvaleurs)\n"})}),"\n",(0,t.jsx)(s.p,{children:"On obtient alors :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0$tnoms{1}="vNOM"\n\xa0$tnoms{2}="vVILLE"\n\xa0$tvaleurs{1}="MARTIN"\n\xa0$tvaleurs{2}="PARIS"\n'})}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/fr/commands/web-get-body-part",children:"WEB GET BODY PART"})}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"683"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return l}});var r=n(667294);let t={},i=r.createContext(t);function l(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);