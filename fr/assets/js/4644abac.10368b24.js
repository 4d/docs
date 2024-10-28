"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40008],{911348:(n,d,e)=>{e.r(d),e.d(d,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>x});var t=e(474848),r=e(28453);const s={id:"qr-get-command-status",title:"QR Get command status",slug:"/commands/qr-get-command-status",displayed_sidebar:"docs"},i=void 0,l={id:"commands-legacy/qr-get-command-status",title:"QR Get command status",description:"QR Get command status ( zone ; numCommande {; valeur} ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-command-status.md",sourceDirName:"commands-legacy",slug:"/commands/qr-get-command-status",permalink:"/docs/fr/commands/qr-get-command-status",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-command-status.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"qr-get-command-status",title:"QR Get command status",slug:"/commands/qr-get-command-status",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR GET BORDERS",permalink:"/docs/fr/commands/qr-get-borders"},next:{title:"QR GET DESTINATION",permalink:"/docs/fr/commands/qr-get-destination"}},c={},x=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function j(n){const d={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.strong,{children:"QR Get command status"})," ( ",(0,t.jsx)(d.em,{children:"zone"})," ; ",(0,t.jsx)(d.em,{children:"numCommande"})," {; ",(0,t.jsx)(d.em,{children:"valeur"}),"} ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Param\xe8tre"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{}),(0,t.jsx)(d.th,{children:"Description"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"zone"}),(0,t.jsx)(d.td,{children:"Integer"}),(0,t.jsx)(d.td,{children:"\u2192"}),(0,t.jsx)(d.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"numCommande"}),(0,t.jsx)(d.td,{children:"Integer"}),(0,t.jsx)(d.td,{children:"\u2192"}),(0,t.jsx)(d.td,{children:"Num\xe9ro de commande"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"valeur"}),(0,t.jsx)(d.td,{children:"Integer, Text"}),(0,t.jsx)(d.td,{children:"\u2190"}),(0,t.jsx)(d.td,{children:"Valeur du sous-\xe9l\xe9ment s\xe9lectionn\xe9"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"R\xe9sultat"}),(0,t.jsx)(d.td,{children:"Integer"}),(0,t.jsx)(d.td,{children:"\u2190"}),(0,t.jsx)(d.td,{children:"Statut de la commande"})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(d.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(d.p,{children:["La commande ",(0,t.jsx)(d.strong,{children:"QR Get command status"})," retourne 0 si la commande d\xe9sign\xe9e par le param\xe8tre ",(0,t.jsx)(d.em,{children:"numCommande"})," est inactiv\xe9e et 1 si elle est activ\xe9e."]}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.em,{children:"valeur"})," retourne la valeur du sous-\xe9l\xe9ment s\xe9lectionn\xe9, le cas \xe9ch\xe9ant. Par exemple, si la commande s\xe9lectionn\xe9e est la liste d\xe9roulante des polices (1000) et que la police choisie est l'Arial, ",(0,t.jsx)(d.em,{children:"valeur"})," vaut \u201cArial\u201d ; si la commande s\xe9lectionn\xe9e est le menu des couleurs (1002, 1003 ou 1004), ",(0,t.jsx)(d.em,{children:"valeur"})," retourne le num\xe9ro de la couleur."]}),"\n",(0,t.jsxs)(d.p,{children:["La commande ",(0,t.jsx)(d.strong,{children:"QR Get command status"})," peut \xeatre utilis\xe9e dans deux types de contextes :"]}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"comme simple instruction pour d\xe9terminer si une commande est active ou non."}),"\n",(0,t.jsxs)(d.li,{children:["dans une m\xe9thode install\xe9e par ",(0,t.jsx)(d.a,{href:"/docs/fr/commands/qr-on-command",children:"QR ON COMMAND"})," afin de conna\xeetre le sous-\xe9l\xe9ment s\xe9lectionn\xe9. Dans cette m\xe9thode, ",(0,t.jsx)(d.em,{children:"$1"})," contient la r\xe9f\xe9rence de la ",(0,t.jsx)(d.em,{children:"zone"})," et ",(0,t.jsx)(d.em,{children:"$2"})," le num\xe9ro de la commande."]}),"\n"]}),"\n",(0,t.jsxs)(d.p,{children:["Passez dans param\xe8tre ",(0,t.jsx)(d.em,{children:"numCommande"})," une des constantes du th\xe8me ",(0,t.jsx)(d.em,{children:"QR Commandes"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Constante"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Valeur"}),(0,t.jsx)(d.th,{children:"Comment"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd 4D View destination"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2503"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd add column"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2608"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd alt back color palette"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"1004"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd automatic width"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2605"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd average"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"507"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd back color palette"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"1003"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd back colors toolbar"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2052"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd bold"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"500"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd borders"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2609"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd center justified"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"504"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd columns toolbar"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2054"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd count"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"510"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd default justified"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"512"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd delete column"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2601"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd disk file destination"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2501"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd edit column"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2603"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd font color palette"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"1002"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd font dropdown"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"1000"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd format"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2606"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd generate"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2008"}),(0,t.jsxs)(d.td,{children:["Utilisation de la commande ",(0,t.jsx)(d.a,{href:"/docs/fr/commands/qr-run",children:"QR RUN"})," conseill\xe9e"]})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd graph destination"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2502"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd header and footer"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2005"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd hide column"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2602"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd hide line"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2607"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd HTML file destination"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2504"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd insert column"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2600"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd italic"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"501"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd left justified"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"503"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd max"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"509"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd min"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"508"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd move left"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"3002"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd move right"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"3003"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd new"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2000"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd open"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2001"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd operators toolbar"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2051"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd page setup"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2006"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd plain"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"511"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd presentation"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2611"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd print preview"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2007"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd printer destination"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2500"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd repeated values"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2604"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd revert to save"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2004"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd right justified"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"505"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd save"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2002"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd save as"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2003"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd standard deviation"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"513"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd standard toolbar"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2053"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd style toolbar"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2050"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd sum"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"506"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd totals spacing"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"2610"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"qr cmd underline"}),(0,t.jsx)(d.td,{children:"Entier long"}),(0,t.jsx)(d.td,{children:"502"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsxs)(d.p,{children:["Si un num\xe9ro de ",(0,t.jsx)(d.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e.",(0,t.jsx)(d.br,{}),"\nSi le param\xe8tre ",(0,t.jsx)(d.em,{children:"numCommande"})," est incorrect, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsx)(d.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.a,{href:"/docs/fr/commands/qr-execute-command",children:"QR EXECUTE COMMAND"}),(0,t.jsx)(d.br,{}),"\n",(0,t.jsx)(d.a,{href:"/docs/fr/commands/qr-on-command",children:"QR ON COMMAND"})]})]})}function h(n={}){const{wrapper:d}={...(0,r.R)(),...n.components};return d?(0,t.jsx)(d,{...n,children:(0,t.jsx)(j,{...n})}):j(n)}},28453:(n,d,e)=>{e.d(d,{R:()=>i,x:()=>l});var t=e(296540);const r={},s=t.createContext(r);function i(n){const d=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(d):{...d,...n}}),[d,n])}function l(n){let d;return d=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(s.Provider,{value:d},n.children)}}}]);