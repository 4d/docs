"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90091],{85987:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=s(474848),o=s(28453);const r={id:"ob-keys",title:"OB Keys",slug:"/commands/ob-keys",displayed_sidebar:"docs"},d=void 0,i={id:"commands-legacy/ob-keys",title:"OB Keys",description:"OB Keys ( objet ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-keys.md",sourceDirName:"commands-legacy",slug:"/commands/ob-keys",permalink:"/docs/fr/commands/ob-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-keys.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"ob-keys",title:"OB Keys",slug:"/commands/ob-keys",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OB Is shared",permalink:"/docs/fr/commands/ob-is-shared"},next:{title:"OB REMOVE",permalink:"/docs/fr/commands/ob-remove"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OB Keys"})," ( ",(0,t.jsx)(n.em,{children:"objet"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet dont on veut obtenir les noms des propri\xe9t\xe9s"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Collection de noms de propri\xe9t\xe9 (chaines)"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OB Keys"})," retourne une collection de cha\xeenes contenant tous les noms des propri\xe9t\xe9s \xe9num\xe9rables de l'",(0,t.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Seuls les noms de propri\xe9t\xe9s de premier niveau sont retourn\xe9s (les noms des propri\xe9t\xe9s des sous-objets ne sont pas retourn\xe9s). L'ordre des noms contenus dans la collection retourn\xe9e suit l'ordre de d\xe9fintion des propri\xe9t\xe9s."}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez une collection avec tous les noms de propri\xe9t\xe9s de premier niveau d'un objet :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $person : Object\n\xa0var $col : Collection\n\xa0\n\xa0$person:=New object\n\xa0$person.lastName:="Dupont"\n\xa0$person.firstName:="Jeanne"\n\xa0$person.children:=New object("Marie";12;"Marc";8)\n\xa0\n\xa0$col:=OB Keys($person)\n\xa0\n\xa0\xa0//$col[0]="lastName"\n\xa0\xa0//$col[1]="firstName"\n\xa0\xa0//$col[2]="children"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-entries",children:"OB Entries"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/ob-values",children:"OB Values"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var t=s(296540);const o={},r=t.createContext(o);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);