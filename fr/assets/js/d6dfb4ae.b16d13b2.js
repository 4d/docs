"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21255"],{736350:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/st-get-text","title":"ST Get text","description":"ST Get text ( { ;} objet {; d\xe9butS\xe9l {; finS\xe9l*}} )  : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-get-text.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-text","permalink":"/docs/fr/20-R7/commands/st-get-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-get-text","title":"ST Get text","slug":"/commands/st-get-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST Get plain text","permalink":"/docs/fr/20-R7/commands/st-get-plain-text"},"next":{"title":"ST GET URL","permalink":"/docs/fr/20-R7/commands/st-get-url"}}'),r=t("785893"),l=t("250065");let i={id:"st-get-text",title:"ST Get text",slug:"/commands/st-get-text",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST Get text"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," {; ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," {; ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),"}} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) ",(0,r.jsx)(n.br,{}),"Si omis, objet est une variable ou un champ"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Variable ou champ Texte (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"d\xe9butS\xe9l"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"D\xe9but de la s\xe9lection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"finS\xe9l"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Fin de la s\xe9lection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Texte incluant les balises de style"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"ST Get text"})," retourne le texte multistyle pr\xe9sent dans le champ ou la variable de texte d\xe9sign\xe9(e) par le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:""}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). A l'ex\xe9cution, si l'objet a le focus, la commande retourne les informations de l'objet en cours d'\xe9dition ; si l'objet n'a pas le focus, la commande retourne les informations de la source de donn\xe9es de l'objet (variable ou champ).",(0,r.jsx)(n.br,{}),"\nSi vous omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable. A l'ex\xe9cution, la commande retourne les informations de la variable ou du champ."]}),"\n",(0,r.jsx)(n.h3,{id:"-1"}),"\n",(0,r.jsx)(n.p,{children:"La commande retourne le texte avec les \xe9ventuelles balises de style qui lui sont associ\xe9es, ce qui permet par exemple de copier et coller du texte en conservant les styles."}),"\n",(0,r.jsxs)(n.p,{children:["Les param\xe8tres optionnels ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," vous permettent de d\xe9signer une s\xe9lection de texte dans ",(0,r.jsx)(n.em,{children:"objet"}),". Les valeurs ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," expriment une s\xe9lection de texte brut, sans tenir compte des balises de style \xe9ventuellement pr\xe9sentes."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["si vous omettez ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", ",(0,r.jsx)(n.strong,{children:"ST Get text"})," retourne la totalit\xe9 du texte contenu dans ",(0,r.jsx)(n.em,{children:"objet"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["si vous passez ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", ",(0,r.jsx)(n.strong,{children:"ST Get text"})," retourne la s\xe9lection de texte d\xe9finie par ces bornes."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["4D propose des constantes pr\xe9d\xe9finies afin de d\xe9signer automatiquement des bornes de s\xe9lection dans les param\xe8tres ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),'. Ces constantes sont plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Texte multistyle"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End highlight"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1001"}),(0,r.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re du texte contenu dans l\u2019objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start highlight"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1000"}),(0,r.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re du texte contenu dans l\u2019objet"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(*) Vous devez passer un nom d\u2019objet dans ",(0,r.jsx)(n.em,{children:"objet"})," pour pouvoir utiliser cette constante. Si vous passez une r\xe9f\xe9rence de variable ou de champ, la commande s\u2019appliquera \xe0 l\u2019ensemble du texte de l\u2019objet."]}),"\n",(0,r.jsxs)(n.p,{children:["Si les valeurs de ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," sont \xe9gales ou si ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," est sup\xe9rieur \xe0 ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", une erreur est retourn\xe9e."]}),"\n",(0,r.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"A l\u2019issue de l\u2019ex\xe9cution de cette commande, la variable OK prend la valeur 1 si aucune erreur n\u2019a \xe9t\xe9 rencontr\xe9e et 0 dans le cas contraire. C\u2019est le cas notamment lorsque l\u2019\xe9valuation des balises de style \xe9choue (balise incorrecte ou manquante)."}),"\n",(0,r.jsx)(n.p,{children:"A noter qu\u2019en cas d\u2019erreur, la variable n\u2019est pas modifi\xe9e. Lorsqu\u2019une erreur se produit sur une variable lors de l\u2019\xe9valuation du texte, 4D transforme le texte en texte brut ; par cons\xe9quent, les caract\xe8res <, > et & seront convertis en entit\xe9s HTML."}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/st-get-plain-text",children:"ST Get plain text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/st-set-text",children:"ST SET TEXT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/text-to-array",children:"TEXT TO ARRAY"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1116"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);