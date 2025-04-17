"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84970"],{361558:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/st-get-plain-text","title":"ST Get plain text","description":"ST Get plain text ( { ;} objet {; modeR\xe9f*} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/st-get-plain-text.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-plain-text","permalink":"/docs/fr/20-R8/commands/st-get-plain-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-plain-text.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"st-get-plain-text","title":"ST Get plain text","slug":"/commands/st-get-plain-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST GET OPTIONS","permalink":"/docs/fr/20-R8/commands/st-get-options"},"next":{"title":"ST Get text","permalink":"/docs/fr/20-R8/commands/st-get-text"}}'),r=t("785893"),l=t("250065");let i={id:"st-get-plain-text",title:"ST Get plain text",slug:"/commands/st-get-plain-text",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST Get plain text"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," {; ",(0,r.jsx)(n.em,{children:"modeR\xe9f"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) ",(0,r.jsx)(n.br,{}),"Si omis, objet est une variable ou un champ"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Variable ou champ (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modeR\xe9f"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Mode de prise en charge des r\xe9f\xe9rences pr\xe9sentes dans le texte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Texte sans balises"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"ST Get plain text"})," supprime toute balise de style du champ ou de la variable texte d\xe9sign\xe9(e) par les param\xe8tres ",(0,r.jsx)(n.em,{children:"*"})," et ",(0,r.jsx)(n.em,{children:"objet"}),", et retourne le texte brut."]}),"\n",(0,r.jsx)(n.h3,{id:""}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). A l'ex\xe9cution, si l'objet a le focus, la commande retourne les informations de l'objet en cours d'\xe9dition ; si l'objet n'a pas le focus, la commande retourne les informations de la source de donn\xe9es de l'objet (variable ou champ).",(0,r.jsx)(n.br,{}),"\nSi vous omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable. A l'ex\xe9cution, la commande retourne les informations de la variable ou du champ."]}),"\n",(0,r.jsx)(n.h3,{id:"-1"}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"modeR\xe9f"})," permet d\u2019indiquer la mani\xe8re dont les r\xe9f\xe9rences pr\xe9sentes dans ",(0,r.jsx)(n.em,{children:"objet"})," doivent \xeatre retourn\xe9es. Passez dans ",(0,r.jsx)(n.em,{children:"modeR\xe9f"}),' une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Texte multistyle"}),'" (vous pouvez passer une constante ou une combinaison de constantes) :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST 4D Expressions as sources"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"La cha\xeene d\u2019origine des r\xe9f\xe9rences d\u2019expressions 4D est retourn\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST 4D Expressions as values"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Les r\xe9f\xe9rences d\u2019expressions 4D sont retourn\xe9es sous leur forme \xe9valu\xe9e (fonctionnement par d\xe9faut dans les formulaires)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST References as spaces"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Chaque r\xe9f\xe9rence est retourn\xe9e sous forme d\u2019un caract\xe8re espace ins\xe9cable (fonctionnement par d\xe9faut, utilis\xe9 par les autres commandes)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Tags as plain text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"64"}),(0,r.jsxs)(n.td,{children:["Le libell\xe9 de la balise est retourn\xe9 en texte brut. Par exemple pour la balise '",(0,r.jsx)(n.img,{src:"test.jpg",alt:"image"}),'mon image\', le texte brut est "mon image" (fonctionnement par d\xe9faut dans les formulaires)']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Tags as XML code"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"128"}),(0,r.jsxs)(n.td,{children:["Le code XML de la balise est retourn\xe9 en texte brut. Par exemple pour la balise '",(0,r.jsx)(n.img,{src:"test.jpg",alt:"image"}),"mon image', le texte brut est '",(0,r.jsx)(n.img,{src:"test.jpg",alt:"image"}),"mon image'"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Text displayed with 4D Expression sources"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"86"}),(0,r.jsxs)(n.td,{children:["Retourne le texte tel qu\u2019il est visible dans les formulaires avec la cha\xeene d\u2019origine des expressions 4D.",(0,r.jsx)(n.br,{}),"Correspond \xe0 la combinaison pr\xe9d\xe9finie des constantes 2+4+16+64."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Text displayed with 4D Expression values"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"85"}),(0,r.jsxs)(n.td,{children:["Retourne le texte tel qu\u2019il est visible dans les formulaires avec les expressions 4D sous leur forme \xe9valu\xe9e.",(0,r.jsx)(n.br,{}),"Correspond \xe0 la combinaison pr\xe9d\xe9finie de constantes 1+4+16+64."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST URL as labels"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:'Le libell\xe9 visible des URLs est retourn\xe9, par exemple "Visitez notre site Web" (fonctionnement par d\xe9faut dans les formulaires)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST URL as links"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsxs)(n.td,{children:['Le lien est retourn\xe9, par exemple "',(0,r.jsx)(n.a,{href:"http://www.4d.com",children:"http://www.4d.com"}),'"']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST User links as labels"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"16"}),(0,r.jsx)(n.td,{children:"Le libell\xe9 visible du lien utilisateur est retourn\xe9 (fonctionnement par d\xe9faut dans les formulaires)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST User links as links"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"32"}),(0,r.jsx)(n.td,{children:"Le contenu du lien utilisateur est retourn\xe9"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"modeR\xe9f"})," n\u2019est donc utile que si le texte contient des r\xe9f\xe9rences, sinon le texte brut est identique quelle que soit la valeur du param\xe8tre ",(0,r.jsx)(n.em,{children:"modeR\xe9f"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Si un document 4D Write Pro contient des tableaux, le contenu de chaque cellule est trait\xe9 en tant que paragraphe individuel et retourn\xe9 sous forme de texte, s\xe9par\xe9 par des tabulations. Les lignes sont s\xe9par\xe9es par des retours chariot."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(n.p,{children:['Vous cherchez le texte "tr\xe8s beau" parmi les valeurs d\u2019un champ texte multistyle. La valeur a \xe9t\xe9 stock\xe9e sous la forme "Il fait tr\xe8s beau ',(0,r.jsx)(n.strong,{children:"aujourd\u2019hui"}),'".']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY FORMULA([Commentaires];ST Get plain text([Commentaires]Meteo)="@tr\xe8s beau@")\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Dans ce contexte, l\u2019instruction suivante ne donnera pas le r\xe9sultat escompt\xe9 car le texte est enregistr\xe9 avec des balises de style :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Commentaires];[Commentaires]Meteo="@tr\xe8s beau@")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:'Soit le texte suivant plac\xe9 dans la zone multistyle "mazone" :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-RAW",children:"Il est actuellement   Aller sur le site de 4D ou Ouvrir une fen\xeatre\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ce texte est affich\xe9 :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(741734).Z+"",width:"219",height:"36"})}),"\n",(0,r.jsx)(n.p,{children:"Si vous ex\xe9cutez le code suivant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$txt :=ST Get plain text(*;"mazone";ST References as spaces)\n\xa0\xa0\xa0\xa0\xa0//$txt = "Il est actuellement\xa0\xa0\xa0 ou " (espaces)\n\xa0$txt :=ST Get plain text(*;"mazone";ST 4D Expressions as values)\n\xa0\xa0\xa0\xa0\xa0//$txt = "Il est actuellement 18:29:55\xa0 ou\xa0 "\n\xa0$txt :=ST Get plain text(*;"mazone";ST 4D Expressions as sources)\n\xa0\xa0\xa0\xa0\xa0//$txt = "Il est actuellement Heure courante\xa0 ou\xa0 "\n\xa0$txt :=ST Get plain text(*;"mazone";ST URL as links)\n\xa0\xa0\xa0\xa0\xa0//$txt = "Il est actuellement\xa0 http://www.4d.com ou\xa0 "\n\xa0$txt :=ST Get plain text(*;"mazone";ST Text displayed with 4D Expression values)\n\xa0\xa0\xa0\xa0\xa0//$txt = "Il est actuellement 17:54:30 Aller sur le site de 4D ou Ouvrir une fen\xeatre"\n\xa0$txt :=ST Get plain text(*;"mazone";ST Text displayed with 4D Expression sources)\n\xa0\xa0\xa0\xa0\xa0//$txt = "Il est actuellement Heure courante Aller sur le site de 4D ou Ouvrir une fen\xeatre"\n\xa0$txt :=ST Get plain text(*;"mazone";ST User links as labels)\n\xa0\xa0\xa0\xa0\xa0//$txt = "Il est actuellement\xa0\xa0\xa0 ou Ouvrir une fen\xeatre"\n\xa0$txt :=ST Get plain text(*;"mazone";ST User links as links)\n\xa0\xa0\xa0\xa0\xa0//$txt = "Il est actuellement\xa0\xa0\xa0 ou openW"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"A l\u2019issue de l\u2019ex\xe9cution de cette commande, la variable OK prend la valeur 1 si aucune erreur n\u2019a \xe9t\xe9 rencontr\xe9e et 0 dans le cas contraire. C\u2019est le cas notamment lorsque l\u2019\xe9valuation des balises de style \xe9choue (balise incorrecte ou manquante)."}),"\n",(0,r.jsx)(n.p,{children:"A noter qu\u2019en cas d\u2019erreur, la variable n\u2019est pas modifi\xe9e. Lorsqu\u2019une erreur se produit sur une variable lors de l\u2019\xe9valuation du texte, 4D transforme le texte en texte brut ; par cons\xe9quent, les caract\xe8res <, > et & seront convertis en entit\xe9s HTML."}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/st-get-text",children:"ST Get text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/st-set-text",children:"ST SET TEXT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/text-to-array",children:"TEXT TO ARRAY"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1092"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},741734:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);