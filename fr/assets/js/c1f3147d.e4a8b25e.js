"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77704"],{587575:function(e,s,r){r.r(s),r.d(s,{metadata:()=>n,contentTitle:()=>i,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>t});var n=JSON.parse('{"id":"commands-legacy/form-goto-page","title":"FORM GOTO PAGE","description":"FORM GOTO PAGE ( num\xe9roPage {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-goto-page.md","sourceDirName":"commands-legacy","slug":"/commands/form-goto-page","permalink":"/docs/fr/commands/form-goto-page","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-goto-page.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-goto-page","title":"FORM GOTO PAGE","slug":"/commands/form-goto-page","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM GET VERTICAL RESIZING","permalink":"/docs/fr/commands/form-get-vertical-resizing"},"next":{"title":"FORM LAST PAGE","permalink":"/docs/fr/commands/form-last-page"}}'),a=r("785893"),o=r("250065");let t={id:"form-goto-page",title:"FORM GOTO PAGE",slug:"/commands/form-goto-page",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"A propos des commandes de gestion des pages",id:"a-propos-des-commandes-de-gestion-des-pages",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"FORM GOTO PAGE"})," ( ",(0,a.jsx)(s.em,{children:"num\xe9roPage"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Param\xe8tre"}),(0,a.jsx)(s.th,{children:"Type"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"num\xe9roPage"}),(0,a.jsx)(s.td,{children:"Integer"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Num\xe9ro de la page \xe0 afficher"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"*"}),(0,a.jsx)(s.td,{children:"Op\xe9rateur"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Changer la page du sous-formulaire courant"})]})]})]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,a.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"FORM GOTO PAGE"})," change la page courante du formulaire pour afficher la page d\xe9sign\xe9e par ",(0,a.jsx)(s.em,{children:"num\xe9roPage"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Si aucun formulaire n'est affich\xe9 ou charg\xe9 via la commande ",(0,a.jsx)(s.a,{href:"/docs/fr/commands/form-load",children:"FORM LOAD"}),", ou si ",(0,a.jsx)(s.em,{children:"num\xe9roPage"})," correspond \xe0 la page courante du formulaire, ",(0,a.jsx)(s.strong,{children:"FORM GOTO PAGE"})," ne fait rien. Si ",(0,a.jsx)(s.em,{children:"num\xe9roPage"})," est sup\xe9rieur au nombre de pages du formulaire, la derni\xe8re page est affich\xe9e. Si ",(0,a.jsx)(s.em,{children:"num\xe9roPage"})," est inf\xe9rieur \xe0 1, la premi\xe8re page est affich\xe9e."]}),"\n",(0,a.jsxs)(s.p,{children:["Le param\xe8tre ",(0,a.jsx)(s.em,{children:"*"})," est utile lorsque la commande est appel\xe9e dans le contexte d\u2019un sous-formulaire en page contenant plusieurs pages. Dans ce cas, si vous passez ce param\xe8tre, la commande change la page du sous-formulaire courant (celui qui a appel\xe9 la commande). Par d\xe9faut, si le param\xe8tre ",(0,a.jsx)(s.em,{children:"*"})," est omis, la commande s\u2019applique toujours au formulaire parent."]}),"\n",(0,a.jsx)(s.h5,{id:"a-propos-des-commandes-de-gestion-des-pages",children:"A propos des commandes de gestion des pages"}),"\n",(0,a.jsxs)(s.p,{children:["4D vous fournit des actions automatiques pour les boutons qui effectuent les m\xeames t\xe2ches que les commandes ",(0,a.jsx)(s.a,{href:"/docs/fr/commands/form-first-page",children:"FORM FIRST PAGE"}),", ",(0,a.jsx)(s.a,{href:"/docs/fr/commands/form-last-page",children:"FORM LAST PAGE"}),", ",(0,a.jsx)(s.a,{href:"/docs/fr/commands/form-next-page",children:"FORM NEXT PAGE"}),", ",(0,a.jsx)(s.a,{href:"/docs/fr/commands/form-previous-page",children:"FORM PREVIOUS PAGE"}),", ",(0,a.jsx)(s.a,{href:"/docs/fr/commands/form-goto-page",children:"FORM GOTO PAGE"})," que vous pouvez associer aux objets tels que les onglets, les listes d\xe9roulantes, etc. A chaque fois que c'est possible, utilisez les actions automatiques pour les boutons plut\xf4t que ces commandes.",(0,a.jsx)(s.br,{}),"\nLes commandes de gestion des pages peuvent \xeatre utilis\xe9es avec des formulaires entr\xe9e ou des formulaires affich\xe9s dans des bo\xeetes de dialogue. Les formulaires sortie n'utilisent que la premi\xe8re page. Un formulaire comprend toujours au minimum une page, la premi\xe8re. Notez bien que quel que soit le nombre de pages qu'il contient, un formulaire ne peut \xeatre associ\xe9 qu'\xe0 une seule m\xe9thode formulaire."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Vous pouvez utiliser la commande ",(0,a.jsx)(s.a,{href:"/docs/fr/commands/form-get-current-page",children:"FORM Get current page"})," pour savoir quelle page est affich\xe9e \xe0 l'\xe9cran."]}),"\n",(0,a.jsxs)(s.li,{children:["Vous pouvez utiliser l'",(0,a.jsx)(s.a,{href:"form-event-code.md",children:"Form event code"})," On Page Change qui est g\xe9n\xe9r\xe9 \xe0 chaque fois que le formulaire change de page courante."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Note :"})," Pendant que vous construisez un formulaire, vous pouvez utiliser les pages 1 \xe0 N du formulaire ainsi que la page 0 (z\xe9ro), dans laquelle vous placez les objets que vous voulez faire appara\xeetre sur toutes les pages. Lors de l'utilisation du formulaire, et donc lorsque les commandes de gestion des pages sont appel\xe9es, seules les pages 1 \xe0 N sont accessibles : la page 0 est automatiquement combin\xe9e \xe0 la page affich\xe9e \xe0 l'\xe9cran."]}),"\n",(0,a.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,a.jsx)(s.p,{children:"L'exemple suivant est la m\xe9thode objet d'un bouton affichant la page 3 du formulaire :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0FORM GOTO PAGE(3)\n"})}),"\n",(0,a.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/fr/commands/form-first-page",children:"FORM FIRST PAGE"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/fr/commands/form-get-current-page",children:"FORM Get current page"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/fr/commands/form-last-page",children:"FORM LAST PAGE"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/fr/commands/form-next-page",children:"FORM NEXT PAGE"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/fr/commands/form-previous-page",children:"FORM PREVIOUS PAGE"})]})]})}function u(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return i},a:function(){return t}});var n=r(667294);let a={},o=n.createContext(a);function t(e){let s=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);