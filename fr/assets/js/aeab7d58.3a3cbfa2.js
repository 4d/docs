"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92387"],{566779:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/st-set-text","title":"ST SET TEXT","description":"ST SET TEXT ( { ;} objet ; nouvTexte {; d\xe9butS\xe9l {; finS\xe9l*}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-set-text.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-text","permalink":"/docs/fr/commands/st-set-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-set-text","title":"ST SET TEXT","slug":"/commands/st-set-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST SET PLAIN TEXT","permalink":"/docs/fr/commands/st-set-plain-text"},"next":{"title":"Subrecords","permalink":"/docs/fr/category/subrecords"}}'),r=s("785893"),i=s("250065");let l={id:"st-set-text",title:"ST SET TEXT",slug:"/commands/st-set-text",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST SET TEXT"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"nouvTexte"})," {; ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," {; ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) ",(0,r.jsx)(n.br,{}),"Si omis, objet est une variable ou un champ"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Variable ou champ Texte (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nouvText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Texte multistyle \xe0 ins\xe9rer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"d\xe9butS\xe9l"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"D\xe9but de la s\xe9lection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"finS\xe9l"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Fin de la s\xe9lection"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"ST SET TEXT"})," ins\xe8re le texte pass\xe9 dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"nouvTexte"})," dans le champ ou la variable de texte multistyle d\xe9sign\xe9(e) par le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"}),". Cette commande s\u2019applique uniquement au texte brut du param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"}),", sans modifier les \xe9ventuelles balises de style qu\u2019il contient. Elle permet de modifier par programmation du texte multistyle affich\xe9 \xe0 l\u2019\xe9cran."]}),"\n",(0,r.jsx)(n.h5,{id:""}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). A l'ex\xe9cution, si l'objet a le focus, la commande s'applique uniquement \xe0 l'objet en cours d'\xe9dition et non \xe0 sa source de donn\xe9es (variable ou champ). Les modifications ne sont report\xe9es dans la source (et donc dans les \xe9ventuels autres objets utilisant la m\xeame source) que lorsque l'objet en cours d'\xe9dition est valid\xe9 via une perte de focus ou la touche ",(0,r.jsx)(n.strong,{children:"Entr\xe9e"}),". Si l'objet n'a pas le focus, la commande s'applique directement \xe0 la source de donn\xe9es et les modifications sont imm\xe9diatement r\xe9percut\xe9es aux \xe9ventuels autres objets utilisant la m\xeame source.",(0,r.jsx)(n.br,{}),"\nSi vous omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable. La commande s'applique directement au champ ou \xe0 la variable et les modifications sont r\xe9percut\xe9es \xe0 tous les objets utilisant cette source, y compris l'objet ayant le focus."]}),"\n",(0,r.jsx)(n.h5,{id:"-1"}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"nouvTexte"})," le texte \xe0 ins\xe9rer. La commande ",(0,r.jsx)(n.strong,{children:"ST SET TEXT"})," est destin\xe9e aux manipulations de texte styl\xe9 (multistyle), contenant des balises de type ",(0,r.jsxs)(n.span,{children:[". Dans tous les autres cas (notamment en cas de manipulation de texte non styl\xe9 mais contenant les caract\xe8res <, > ou &), vous devez utiliser la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"}),". Si vous passez \xe0 la commande ",(0,r.jsx)(n.strong,{children:"ST SET TEXT"})," un texte brut contenant des caract\xe8res <, > ou &, la commande ne fait rien. Ce principe de fonctionnement est n\xe9cessaire car l'insertion directe d'une cha\xeene telle que \"a<b\" au sein d'un texte styl\xe9 va fausser l'analyse interne des balises ",(0,r.jsxs)(n.span,{children:['. Dans ce cas, le caract\xe8re "<" doit \xeatre pr\xe9alablement encod\xe9 "<", ce qui est effectu\xe9 par la commande ',(0,r.jsx)(n.a,{href:"/docs/fr/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})," (voir \xe9galement l'exemple de cette commande)."]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Les param\xe8tres optionnels ",(0,r.jsx)(n.em,{children:"d\xe9butSel"})," et ",(0,r.jsx)(n.em,{children:"finSel"})," vous permettent de d\xe9signer une s\xe9lection de texte dans ",(0,r.jsx)(n.em,{children:"objet"}),". Les valeurs ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," expriment une s\xe9lection de texte brut, sans tenir compte des balises de style \xe9ventuellement pr\xe9sentes dans le texte. L\u2019action de la commande diff\xe8re en fonction des param\xe8tres facultatifs ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["si vous omettez ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", ",(0,r.jsx)(n.strong,{children:"ST SET TEXT"})," remplace la totalit\xe9 du texte de ",(0,r.jsx)(n.em,{children:"objet"})," par ",(0,r.jsx)(n.em,{children:"nouvTexte"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["si vous passez uniquement ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," ou si les valeurs de ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," sont \xe9gales, ",(0,r.jsx)(n.strong,{children:"ST SET TEXT"})," ins\xe8re le texte ",(0,r.jsx)(n.em,{children:"nouvTexte"})," dans ",(0,r.jsx)(n.em,{children:"objet"})," \xe0 partir de ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["si vous passez ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", ",(0,r.jsx)(n.strong,{children:"ST SET TEXT"})," remplace le texte brut d\xe9fini par ces bornes avec le texte ",(0,r.jsx)(n.em,{children:"nouvTexte"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["vous pouvez passer 0 dans ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," afin de d\xe9signer automatiquement le dernier caract\xe8re du texte (passez 1 dans ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," pour d\xe9signer le premier caract\xe8re)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["4D propose des constantes pr\xe9d\xe9finies afin de d\xe9signer automatiquement des bornes de s\xe9lection dans les param\xe8tres ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),'. Ces constantes sont plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Texte multistyle"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End highlight"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1001"}),(0,r.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re du texte contenu dans l\u2019objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start highlight"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1000"}),(0,r.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re du texte contenu dans l\u2019objet"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(*) Vous devez passer un nom d\u2019objet dans ",(0,r.jsx)(n.em,{children:"objet"})," pour pouvoir utiliser cette constante. Si vous passez une r\xe9f\xe9rence de variable ou de champ, la commande s\u2019appliquera \xe0 l\u2019ensemble du texte de l\u2019objet."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," est sup\xe9rieur \xe0 ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", le texte n'est pas modifi\xe9 et la variable OK prend la valeur 0 (hormis lorsque ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," vaut 0, cf. ci-dessus)."]}),"\n",(0,r.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"A l\u2019issue de l\u2019ex\xe9cution de cette commande, la variable OK prend la valeur 1 si aucune erreur n\u2019a \xe9t\xe9 rencontr\xe9e et 0 dans le cas contraire. C\u2019est le cas notamment lorsque l\u2019\xe9valuation des balises de style \xe9choue (balise incorrecte ou manquante)."}),"\n",(0,r.jsx)(n.p,{children:"A noter qu\u2019en cas d\u2019erreur, la variable n\u2019est pas modifi\xe9e. Lorsqu\u2019une erreur se produit sur une variable lors de l\u2019\xe9valuation du texte, 4D transforme le texte en texte brut ; par cons\xe9quent, les caract\xe8res <, > et & seront convertis en entit\xe9s HTML."}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez remplacer le texte multistyle s\xe9lectionn\xe9 par l\u2019utilisateur avec le contenu d'une variable."}),"\n",(0,r.jsx)(n.p,{children:"Voici le texte s\xe9lectionn\xe9 :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(27006).Z+"",width:"446",height:"57"})}),"\n",(0,r.jsx)(n.p,{children:"Le contenu stock\xe9 dans le champ est le suivant :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(804969).Z+"",width:"396",height:"60"})}),"\n",(0,r.jsx)(n.p,{children:"Apr\xe8s ex\xe9cution de ce code :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vtempo:="D\xe9monstration"\n\xa0GET HIGHLIGHT([Produits]Notes;vDebut;vFin)\n\xa0ST SET TEXT([Produits]Notes;vtempo;vDebut;vFin)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Le champ et son contenu sont les suivants :"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:s(975239).Z+"",width:"445",height:"44"})," ",(0,r.jsx)(n.img,{src:s(829321).Z+"",width:"395",height:"55"})]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/st-get-plain-text",children:"ST Get plain text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/st-get-text",children:"ST Get text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},27006:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict579068.fr-aae093bf0b3994553faa6f967e77da43.png"},804969:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict579073.fr-de1ea579865eb23bdebac866d7df89ad.png"},975239:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict579075.fr-9df23fa2882fa111249c1ef41a56414a.png"},829321:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict579077.fr-1f254f2d39744aebf0a3cba5e80141b1.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);