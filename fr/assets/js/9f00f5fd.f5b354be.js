"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40461"],{303134:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>o,default:()=>c,assets:()=>d,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/form-screenshot","title":"FORM SCREENSHOT","description":"FORM SCREENSHOT ( {{laTable ;} nomFormulaire ;} imageForm {; pageNum} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-screenshot.md","sourceDirName":"commands-legacy","slug":"/commands/form-screenshot","permalink":"/docs/fr/commands/form-screenshot","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-screenshot.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-screenshot","title":"FORM SCREENSHOT","slug":"/commands/form-screenshot","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM PREVIOUS PAGE","permalink":"/docs/fr/commands/form-previous-page"},"next":{"title":"FORM SET ENTRY ORDER","permalink":"/docs/fr/commands/form-set-entry-order"}}'),t=n("785893"),a=n("250065");let i={id:"form-screenshot",title:"FORM SCREENSHOT",slug:"/commands/form-screenshot",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function m(e){let r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"FORM SCREENSHOT"})," ( {{",(0,t.jsx)(r.em,{children:"laTable"})," ;} ",(0,t.jsx)(r.em,{children:"nomFormulaire"})," ;} ",(0,t.jsx)(r.em,{children:"imageForm"})," {; ",(0,t.jsx)(r.em,{children:"pageNum"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Param\xe8tre"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"laTable"}),(0,t.jsx)(r.td,{children:"Table"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Table du formulaire"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nomFormulaire"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Nom du formulaire"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"imageForm"}),(0,t.jsx)(r.td,{children:"Picture"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsxs)(r.td,{children:["Image du formulaire en ex\xe9cution si premier(s) param\xe8tre(s) omis, ou ",(0,t.jsx)(r.br,{}),"Image du formulaire dans l'\xe9diteur de formulaires si un nom de formulaire est pass\xe9"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pageNum"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Num\xe9ro de page du formulaire"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["La commande ",(0,t.jsx)(r.strong,{children:"FORM SCREENSHOT"})," retourne un formulaire sous forme d'image. Cette commande admet deux syntaxes diff\xe9rentes : en fonction de la syntaxe utilis\xe9e, vous pouvez obtenir soit l'image d'un formulaire ex\xe9cut\xe9, soit l'image du formulaire dans l'\xe9diteur de formulaires."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["FORM SCREENSHOT ( ",(0,t.jsx)(r.em,{children:"imageForm"})," )",(0,t.jsx)(r.br,{}),"\nCette syntaxe vous permet d'obtenir une capture \xe9cran de la page courante du formulaire en cours d'ex\xe9cution ou charg\xe9 via la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/form-load",children:"FORM LOAD"})," : l'image retourn\xe9e dans le param\xe8tre ",(0,t.jsx)(r.em,{children:"imageForm"})," contient la totalit\xe9 des objets visibles du formulaire avec les valeurs courantes des champs et des variables du formulaire, les sous-formulaires, etc. Le formulaire est retourn\xe9 int\xe9gralement, sans tenir compte de la taille de la fen\xeatre qui le contient.",(0,t.jsx)(r.br,{}),"\nA noter que cette syntaxe ne fonctionne qu'avec les formulaires d'entr\xe9e."]}),"\n",(0,t.jsxs)(r.li,{children:["FORM SCREENSHOT ( {",(0,t.jsx)(r.em,{children:"laTable"})," ;} ",(0,t.jsx)(r.em,{children:"nomFormulaire"})," ; ",(0,t.jsx)(r.em,{children:"imageForm"})," {; ",(0,t.jsx)(r.em,{children:"pageNum"}),"} )",(0,t.jsx)(r.br,{}),"\nCette syntaxe vous permet d'obtenir une  capture \xe9cran d'un \"mod\xe8le\" de formulaire tel qu'affich\xe9 dans l'\xe9diteur de formulaires. Tous les objets visibles sont dessin\xe9s comme dans l'\xe9diteur ; la commande tient compte des formulaires h\xe9rit\xe9s et des objets plac\xe9s sur la page 0.",(0,t.jsx)(r.br,{}),"\nSi vous souhaitez capturer un formulaire table, passez la table du formulaire dans le param\xe8tre ",(0,t.jsx)(r.em,{children:"laTable"})," puis son nom sous forme de cha\xeene dans ",(0,t.jsx)(r.em,{children:"nomFormulaire"}),". Pour un formulaire projet, passez directement le nom du formulaire dans ",(0,t.jsx)(r.em,{children:"nomFormulaire"}),".",(0,t.jsx)(r.br,{}),"\nPar d\xe9faut, la commande capture la page 1 du formulaire. Si vous souhaitez capturer uniquement la page 0 ou une autre page du formulaire, passez son num\xe9ro dans le param\xe8tre ",(0,t.jsx)(r.em,{children:"pageNum"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Les zones Web ne sont pas dessin\xe9es dans la capture \xe9cran retourn\xe9e par la commande."}),"\n",(0,t.jsxs)(r.li,{children:["Les deux premiers param\xe8tres de cette commande \xe9tant optionnels, il n'est pas possible de passer directement comme argument une fonction retournant un pointeur telle que ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/current-form-table",children:"Current form table"}),"-> ou ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/table",children:"Table"}),"->. Cette syntaxe fonctionnera en mode interpr\xe9t\xe9 mais sera rejet\xe9e lors de la compilation. Il est n\xe9cessaire dans ce cas d'utiliser une variable pointeur interm\xe9diaire. Pour plus d'informations, reportez-vous au paragraphe \"",(0,t.jsx)(r.em,{children:"Utilisation directe de commandes retournant des pointeurs"}),'".']}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/fr/commands/form-load",children:"FORM LOAD"})})]})}function c(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return i}});var s=n(667294);let t={},a=s.createContext(t);function i(e){let r=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);