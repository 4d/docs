"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2204"],{949810:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/get-highlighted-records","title":"GET HIGHLIGHTED RECORDS","description":"GET HIGHLIGHTED RECORDS ( {laTable ;} nomEnsemble )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-highlighted-records.md","sourceDirName":"commands-legacy","slug":"/commands/get-highlighted-records","permalink":"/docs/fr/commands/get-highlighted-records","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-highlighted-records.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-highlighted-records","title":"GET HIGHLIGHTED RECORDS","slug":"/commands/get-highlighted-records","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FIRST RECORD","permalink":"/docs/fr/commands/first-record"},"next":{"title":"GOTO SELECTED RECORD","permalink":"/docs/fr/commands/goto-selected-record"}}'),t=n("785893"),l=n("250065");let i={id:"get-highlighted-records",title:"GET HIGHLIGHTED RECORDS",slug:"/commands/get-highlighted-records",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET HIGHLIGHTED RECORDS"})," ( {",(0,t.jsx)(s.em,{children:"laTable"})," ;} ",(0,t.jsx)(s.em,{children:"nomEnsemble"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"laTable"}),(0,t.jsx)(s.td,{children:"Table"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Table de laquelle lire les enregistrements marqu\xe9s Si omis, table du formulaire courant"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"nomEnsemble"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Ensemble dans lequel stocker les enregistrements marqu\xe9s"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"GET HIGHLIGHTED RECORDS"})," stocke dans l\u2019ensemble d\xe9sign\xe9 par le param\xe8tre ",(0,t.jsx)(s.em,{children:"nomEnsemble"})," les enregistrements marqu\xe9s (c'est-\xe0-dire, les enregistrements \u201Csurlign\xe9s\u201D par l'utilisateur dans le formulaire liste) de ",(0,t.jsx)(s.em,{children:"laTable"})," pass\xe9e en param\xe8tre. Si le param\xe8tre ",(0,t.jsx)(s.em,{children:"laTable"})," est omis, la table du formulaire ou du sous-formulaire courant est utilis\xe9e."]}),"\n",(0,t.jsxs)(s.p,{children:["En mode D\xe9veloppement ou dans le cadre de l'ex\xe9cution des commandes ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/display-selection",children:"DISPLAY SELECTION"})," /",(0,t.jsx)(s.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"}),", cette commande peut \xeatre remplac\xe9e par l'appel de l'ensemble syst\xe8me UserSet, automatiquement maintenu par 4D. Toutefois, comme elle permet de d\xe9signer la table de laquelle r\xe9cup\xe9rer les enregistrements marqu\xe9s, la commande ",(0,t.jsx)(s.strong,{children:"GET HIGHLIGHTED RECORDS"})," peut en outre g\xe9rer les s\xe9lections d\u2019enregistrements dans les sous-formulaires inclus. En effet dans ce cas, les s\xe9lections des sous-formulaires pouvant provenir de tables diff\xe9rentes, l'ensemble syst\xe8me UserSet n'est pas g\xe9r\xe9 par 4D. Pour plus d'informations sur l'ensemble UserSet, reportez-vous \xe0 la section ",(0,t.jsx)(s.em,{children:"Ensembles"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"GET HIGHLIGHTED RECORDS"})," peut \xeatre appel\xe9e hors du contexte d\u2019un formulaire, cependant dans ce cas l\u2019ensemble retourn\xe9 est vide.",(0,t.jsx)(s.br,{}),"\nL\u2019ensemble d\xe9sign\xe9 par le param\xe8tre ",(0,t.jsx)(s.em,{children:"nomEnsemble"})," peut \xeatre local/client, process ou interprocess."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Dans le cadre des sous-formulaires inclus, la commande ",(0,t.jsx)(s.strong,{children:"GET HIGHLIGHTED RECORDS"})," retourne un ensemble vide si le sous-formulaire ne dispose pas de la propri\xe9t\xe9 de s\xe9lection ",(0,t.jsx)(s.strong,{children:"Multilignes"}),". Dans ce contexte, pour conna\xeetre la ligne s\xe9lectionn\xe9e, vous devez utiliser la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/selected-record-number",children:"Selected record number"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Cette m\xe9thode indique combien d\u2019enregistrements sont s\xe9lectionn\xe9s dans le sous-formulaire affichant les enregistrements de la table [CDs] :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0GET HIGHLIGHTED RECORDS([CDs];"$highlight")\n\xa0ALERT(String(Enregistrements dans ensemble("$highlight"))"+"enregistrements s\xe9lectionn\xe9s.")\n\xa0CLEAR SET("$highlight")\n'})}),"\n",(0,t.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(s.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0."}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/fr/commands/highlight-records",children:"HIGHLIGHT RECORDS"})}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"902"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return i}});var r=n(667294);let t={},l=r.createContext(t);function i(e){let s=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);