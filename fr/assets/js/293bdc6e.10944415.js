"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51279],{658392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var c=t(474848),s=t(28453);const l={id:"clickcount",title:"Clickcount",slug:"/commands/clickcount",displayed_sidebar:"docs"},i=void 0,r={id:"commands-legacy/clickcount",title:"Clickcount",description:"Clickcount  -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/clickcount.md",sourceDirName:"commands-legacy",slug:"/commands/clickcount",permalink:"/docs/fr/commands/clickcount",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclickcount.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"clickcount",title:"Clickcount",slug:"/commands/clickcount",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"CALL SUBFORM CONTAINER",permalink:"/docs/fr/commands/call-subform-container"},next:{title:"Contextual click",permalink:"/docs/fr/commands/contextual-click"}},o={},d=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4}];function u(e){const n={code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Clickcount"}),"  -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Param\xe8tre"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"R\xe9sultat"}),(0,c.jsx)(n.td,{children:"Integer"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"Nombre de clics cons\xe9cutifs"})]})})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,c.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:["La commande ",(0,c.jsx)(n.strong,{children:"Clickcount"})," retourne, dans le contexte d'un \xe9v\xe9nement clic, le nombre de fois que l'utilisateur a cliqu\xe9 de mani\xe8re r\xe9p\xe9t\xe9e avec le m\xeame bouton de la souris. Typiquement, la commande retourne 2 pour un double-clic."]}),"\n",(0,c.jsx)(n.p,{children:"Cette commande vous permet notamment de d\xe9tecter des double-clics dans les en-t\xeates ou les pieds des list box, et \xe9galement de g\xe9rer des s\xe9quences de triple-clics ou plus."}),"\n",(0,c.jsxs)(n.p,{children:["Chaque clic avec un bouton de la souris g\xe9n\xe8re un \xe9v\xe9nement clic s\xe9par\xe9. Par exemple, si un utilisateur effectue un double-clic, un \xe9v\xe9nement est g\xe9n\xe9r\xe9 pour le premier clic, dans lequel ",(0,c.jsx)(n.strong,{children:"Clickcount"})," retourne 1 ; puis un autre \xe9v\xe9nement est g\xe9n\xe9r\xe9 pour le second clic, dans lequel ",(0,c.jsx)(n.strong,{children:"Clickcount"})," retourne 2."]}),"\n",(0,c.jsx)(n.p,{children:"Cette commande peut uniquement \xeatre appel\xe9e dans le contexte de l'\xe9v\xe9nement formulaire On Clicked, On Header Click ou On Footer Click . Par cons\xe9quent, il est n\xe9cessaire de v\xe9rifier en mode D\xe9veloppement que l'\xe9v\xe9nement correspondant a bien \xe9t\xe9 s\xe9lectionn\xe9 dans les propri\xe9t\xe9s du formulaire et/ou pour l'objet concern\xe9."}),"\n",(0,c.jsxs)(n.p,{children:["Lorsque les deux \xe9v\xe9nements formulaire On Clicked et On Double Clicked sont activ\xe9s, la s\xe9quence suivante est retourn\xe9e par ",(0,c.jsx)(n.strong,{children:"Clickcount"})," :"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"1 dans l'\xe9v\xe9nement On Clicked"}),"\n",(0,c.jsx)(n.li,{children:"2 dans l'\xe9v\xe9nement On Double Clicked"}),"\n",(0,c.jsx)(n.li,{children:"2+n dans l'\xe9v\xe9nement On Clicked"}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,c.jsx)(n.p,{children:"La structure de code suivante peut \xeatre plac\xe9e dans un en-t\xeate de list box pour g\xe9rer les clics simples et les double-clics :"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=Sur clic ent\xeate)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Clickcount=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0//simple clic\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Clickcount=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0//double clic\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n"})}),"\n",(0,c.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,c.jsx)(n.p,{children:"Les libell\xe9s ne sont pas saisissables mais ils peuvent le devenir apr\xe8s un triple-clic. Si vous souhaitez permettre aux utilisateurs de modifier les libell\xe9s, vous pouvez \xe9crire la m\xe9thode objet suivante :"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0If(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Clickcount=3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET ENTERABLE(*;"Label";True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0EDIT ITEM(*;"Label")\n\xa0\xa0\xa0\xa0End case\n\xa0End if\n'})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var c=t(296540);const s={},l=c.createContext(s);function i(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);