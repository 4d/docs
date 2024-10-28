"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74554],{489400:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=s(474848),r=s(28453);const i={id:"filter-event",title:"FILTER EVENT",slug:"/commands/filter-event",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/filter-event",title:"FILTER EVENT",description:"FILTER EVENT",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/filter-event.md",sourceDirName:"commands-legacy",slug:"/commands/filter-event",permalink:"/docs/fr/commands/filter-event",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffilter-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"filter-event",title:"FILTER EVENT",slug:"/commands/filter-event",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Asserted",permalink:"/docs/fr/commands/asserted"},next:{title:"Get assert enabled",permalink:"/docs/fr/commands/get-assert-enabled"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"FILTER EVENT"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ne requiert pas de param\xe8tre"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FILTER EVENT"})," doit \xeatre appel\xe9e \xe0 l'int\xe9rieur d'une m\xe9thode de gestion d'\xe9v\xe9nements install\xe9e par ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/on-event-call",children:"ON EVENT CALL"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsqu'une m\xe9thode de gestion d'\xe9v\xe9nements appelle la commande ",(0,t.jsx)(n.strong,{children:"FILTER EVENT"}),", l'\xe9v\xe9nement courant n'est pas pass\xe9 \xe0 4D."]}),"\n",(0,t.jsx)(n.p,{children:"Cette commande vous permet d'effacer l'\xe9v\xe9nement courant (i.e. clic, frappe clavier) de la s\xe9quence d'\xe9v\xe9nements, de mani\xe8re \xe0 ce que 4D n'effectue pas de traitement sur l'\xe9v\xe9nement que vous provoquez dans la m\xe9thode de gestion d'\xe9v\xe9nements."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ATTENTION :"})," Evitez de cr\xe9er une m\xe9thode de gestion d'\xe9v\xe9nement appelant uniquement ",(0,t.jsx)(n.strong,{children:"FILTER EVENT"})," car TOUS les \xe9v\xe9nements vont \xeatre ignor\xe9s par 4D. Si vous vous retrouvez dans un tel cas, vous pouvez sortir de la m\xe9thode en tapant ",(0,t.jsx)(n.strong,{children:"Ctrl"}),"+",(0,t.jsx)(n.strong,{children:"Maj"}),"+",(0,t.jsx)(n.strong,{children:"Retour Arri\xe8re"})," (sous Windows) ou ",(0,t.jsx)(n.strong,{children:"Commande"}),"+",(0,t.jsx)(n.strong,{children:"Option"}),"+",(0,t.jsx)(n.strong,{children:"Maj"}),"+",(0,t.jsx)(n.strong,{children:"Contr\xf4le"}),"+",(0,t.jsx)(n.strong,{children:"Retour Arri\xe8re"})," (sous Mac OS). Dans ce cas, le process de gestion d'\xe9v\xe9nement est converti en process normal n'interceptant plus aucun \xe9v\xe9nement."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cas particulier :"})," La commande ",(0,t.jsx)(n.strong,{children:"FILTER EVENT"})," peut \xe9galement \xeatre utilis\xe9e au sein d\u2019une m\xe9thode de formulaire sortie standard, lorsque le formulaire est affich\xe9 par l'interm\xe9diaire des commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/display-selection",children:"DISPLAY SELECTION"})," ou ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"}),". Dans ce cas pr\xe9cis, la commande ",(0,t.jsx)(n.strong,{children:"FILTER EVENT"})," permet de filtrer les double-clics sur les enregistrements (et ainsi, ex\xe9cuter d'autres actions que l'ouverture des enregistrements en mode page).",(0,t.jsx)(n.br,{}),"\nPour cela, il vous suffit de placer dans la m\xe9thode du formulaire sortie les lignes suivantes :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=Sur double clic souris)\n\xa0\xa0\xa0\xa0FILTER EVENT\n\xa0\xa0\xa0\xa0...\xa0//Traiter le double-clic\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["R\xe9f\xe9rez-vous \xe0 l'exemple d'",(0,t.jsx)(n.a,{href:"/docs/fr/commands/on-event-call",children:"ON EVENT CALL"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/on-event-call",children:"ON EVENT CALL"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var t=s(296540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);