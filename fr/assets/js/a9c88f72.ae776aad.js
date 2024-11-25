"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91448"],{677029:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/invoke-action","title":"INVOKE ACTION","description":"INVOKE ACTION ( action {; cible} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/invoke-action.md","sourceDirName":"commands-legacy","slug":"/commands/invoke-action","permalink":"/docs/fr/commands/invoke-action","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finvoke-action.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"invoke-action","title":"INVOKE ACTION","slug":"/commands/invoke-action","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get pointer","permalink":"/docs/fr/commands/get-pointer"},"next":{"title":"Is a variable","permalink":"/docs/fr/commands/is-a-variable"}}'),i=s("785893"),r=s("250065");let l={id:"invoke-action",title:"INVOKE ACTION",slug:"/commands/invoke-action",displayed_sidebar:"docs"},a=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function d(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"INVOKE ACTION"})," ( ",(0,i.jsx)(n.em,{children:"action"})," {; ",(0,i.jsx)(n.em,{children:"cible"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"action"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom de l'action standard ou syntaxe avec param\xe8tre si celui-ci est requis"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cible"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"D\xe9finit le lieu d'ex\xe9cution de l'action : le formulaire courant (par d\xe9faut) ou le formulaire principal"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"INVOKE ACTION"})," d\xe9clenche l'action standard d\xe9finie par le param\xe8tre ",(0,i.jsx)(n.em,{children:"action"}),", optionnellement dans le contexte de la ",(0,i.jsx)(n.em,{children:"cible"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Dans ",(0,i.jsx)(n.em,{children:"action"}),", passez l'action standard \xe0 ex\xe9cuter. Ce peut \xeatre une cha\xeene ou une constante du th\xe8me ",(0,i.jsx)(n.em,{children:"Action standard"}),". Certaines actions acceptent un \xe9l\xe9ment cible et des param\xe8tres. Dans ce cas, vous devez utiliser la syntaxe requise, par exemple ",(0,i.jsx)(n.em,{children:'"gotoPage?value=2"'})," ou ",(0,i.jsx)(n.em,{children:"paragraph/backgroundPositionV?value=top."})]}),"\n",(0,i.jsxs)(n.p,{children:["Les actions disponibles sont list\xe9es dans la section ",(0,i.jsx)(n.em,{children:"Actions standard"})," du manuel ",(0,i.jsx)(n.em,{children:"4D - Mode D\xe9veloppement"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"})," : Des actions sp\xe9cifiques sont \xe9galement fournies pour les documents 4D Write Pro. Elles sont d\xe9taill\xe9es dans la section ",(0,i.jsx)(n.em,{children:"Utiliser les actions standard 4D Write Pro"})," du manuel de r\xe9f\xe9rence 4D Write Pro."]}),"\n",(0,i.jsx)(n.h5,{id:""}),"\n",(0,i.jsxs)(n.p,{children:["Dans ",(0,i.jsx)(n.em,{children:"cible"}),", vous pouvez passer le contexte formulaire dans lequel l'",(0,i.jsx)(n.em,{children:"action"})," doit \xeatre ex\xe9cut\xe9e. Vous pouvez utiliser une des constantes suivantes, du th\xe8me ",(0,i.jsx)(n.em,{children:"Action standard"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ak current form"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Le formulaire courant est le formulaire depuis lequel l'action a \xe9t\xe9 appel\xe9e. Il peut s'agir soit du formulaire principal du process courant soit d'un formulaire palette situ\xe9 au-dessus du formulaire principal."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ak main form"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Le formulaire principal est le document ou le formulaire de dialogue au premier plan du process, sans tenir compte des fen\xeatres palettes ou flottantes."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Si ",(0,i.jsx)(n.em,{children:"cible"})," est omis, par d\xe9faut le contexte ak current form est utilis\xe9."]}),"\n",(0,i.jsxs)(n.p,{children:["En fonction de la ",(0,i.jsx)(n.em,{children:"cible"}),", l'ex\xe9cution de la commande ",(0,i.jsx)(n.strong,{children:"INVOKE ACTION"})," sera synchrone ou asynchrone :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Avec ak current form comme ",(0,i.jsx)(n.em,{children:"cible"}),", la commande ",(0,i.jsx)(n.strong,{children:"INVOKE ACTION"})," est synchrone ; l'action est ex\xe9cut\xe9e dans le cycle courant, au moment m\xeame o\xf9 la commande est appel\xe9e."]}),"\n",(0,i.jsxs)(n.li,{children:["Avec ak main form comme ",(0,i.jsx)(n.em,{children:"cible"}),", la commande ",(0,i.jsx)(n.strong,{children:"INVOKE ACTION"})," est asynchrone ; l'action est ex\xe9cut\xe9e dans le cycle suivant, apr\xe8s la fin de l'ex\xe9cution de la m\xe9thode de l'objet."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Les actions standard d'\xe9dition (Couper, Copier, Coller, Tout s\xe9lectionner, Effacer, Annuler \xe9dition/R\xe9p\xe9ter) ignore le param\xe8tre ",(0,i.jsx)(n.em,{children:"cible"}),", s'il est pass\xe9. Ces actions sont toujours ex\xe9cut\xe9es de fa\xe7on synchrone dans le contexte de l'objet \xe9ditable qui a le focus."]}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"INVOKE ACTION"})," ne g\xe9n\xe8re pas une erreur, par exemple, si la commande requise n'est pas disponible dans le contexte courant. Vous devez valider l'action attendue en utilisant la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/action-info",children:"Action info"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsxs)(n.p,{children:["Vous souhaitez ex\xe9cuter l'action standard ",(0,i.jsx)(n.strong,{children:"Copier"})," dans le formulaire courant :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0INVOKE ACTION(ak copy;ak current form)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsxs)(n.p,{children:["Vous souhaitez ex\xe9cuter l'action standard ",(0,i.jsx)(n.strong,{children:"Aller a page"})," (page 3) dans le formulaire principal :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0INVOKE ACTION(ak goto page+"?value=3";ak main form)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/action-info",children:"Action info"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);