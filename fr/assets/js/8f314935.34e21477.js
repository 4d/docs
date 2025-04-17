"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3457"],{585587:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/st-set-plain-text","title":"ST SET PLAIN TEXT","description":"ST SET PLAIN TEXT ( { ;} objet ; nouvTexte {; d\xe9butS\xe9l {; finS\xe9l*}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/st-set-plain-text.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-plain-text","permalink":"/docs/fr/20-R8/commands/st-set-plain-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-plain-text.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"st-set-plain-text","title":"ST SET PLAIN TEXT","slug":"/commands/st-set-plain-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST SET OPTIONS","permalink":"/docs/fr/20-R8/commands/st-set-options"},"next":{"title":"ST SET TEXT","permalink":"/docs/fr/20-R8/commands/st-set-text"}}'),r=s("785893"),d=s("250065");let i={id:"st-set-plain-text",title:"ST SET PLAIN TEXT",slug:"/commands/st-set-plain-text",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST SET PLAIN TEXT"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"nouvTexte"})," {; ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," {; ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) ",(0,r.jsx)(n.br,{}),"Si omis, objet est une variable ou un champ"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Variable ou champ (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nouvText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Texte brut \xe0 ins\xe9rer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"d\xe9butS\xe9l"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"D\xe9but de la s\xe9lection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"finS\xe9l"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Fin de la s\xe9lection"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"ST SET PLAIN TEXT"})," ins\xe8re le texte pass\xe9 dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"nouvTexte"})," dans le champ ou la variable de texte multistyle d\xe9sign\xe9(e) par le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"}),". Cette commande s\u2019applique uniquement au texte brut du param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"}),", sans modifier les \xe9ventuelles balises de style qu\u2019il contient."]}),"\n",(0,r.jsxs)(n.p,{children:["A la diff\xe9rence de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/st-set-text",children:"ST SET TEXT"}),", ",(0,r.jsx)(n.strong,{children:"ST SET PLAIN TEXT"})," permet d\u2019ins\xe9rer uniquement du texte sans style. Le texte ",(0,r.jsx)(n.em,{children:"nouvTexte"})," ne doit pas contenir de balises de style. S\u2019il contient les caract\xe8res <, > ou &, ils seront consid\xe9r\xe9s comme des caract\xe8res standard et seront convertis en entit\xe9s HTML :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"'&' est converti en &"}),"\n",(0,r.jsx)(n.li,{children:"'<' est converti en <"}),"\n",(0,r.jsx)(n.li,{children:"'>' est converti en >"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:""}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). A l'ex\xe9cution, si l'objet a le focus, la commande s'applique uniquement \xe0 l'objet en cours d'\xe9dition et non \xe0 sa source de donn\xe9es (variable ou champ). Les modifications ne sont report\xe9es dans la source (et donc dans les \xe9ventuels autres objets utilisant la m\xeame source) que lorsque l'objet en cours d'\xe9dition est valid\xe9 via une perte de focus ou la touche ",(0,r.jsx)(n.strong,{children:"Entr\xe9e"}),". Si l'objet n'a pas le focus, la commande s'applique directement \xe0 la source de donn\xe9es et les modifications sont imm\xe9diatement r\xe9percut\xe9es aux \xe9ventuels autres objets utilisant la m\xeame source.",(0,r.jsx)(n.br,{}),"\nSi vous omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable. La commande s'applique directement au champ ou \xe0 la variable et les modifications sont r\xe9percut\xe9es \xe0 tous les objets utilisant cette source, y compris l'objet ayant le focus."]}),"\n",(0,r.jsx)(n.h3,{id:"-1"}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"nouvTexte"})," le texte brut \xe0 ins\xe9rer."]}),"\n",(0,r.jsxs)(n.p,{children:["Les param\xe8tres optionnels ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," vous permettent de d\xe9signer une s\xe9lection de texte dans ",(0,r.jsx)(n.em,{children:"objet"}),". Les valeurs ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," expriment une s\xe9lection de texte brut, sans tenir compte des balises de style \xe9ventuellement pr\xe9sentes dans le texte. L\u2019action de la commande diff\xe8re en fonction des param\xe8tres facultatifs ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["si vous omettez ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})," remplace la totalit\xe9 du texte de ",(0,r.jsx)(n.em,{children:"objet"})," par ",(0,r.jsx)(n.em,{children:"nouvTexte"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["si vous passez uniquement ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," ou si les valeurs de ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," sont \xe9gales, ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})," ins\xe8re le texte ",(0,r.jsx)(n.em,{children:"nouvTexte"})," dans ",(0,r.jsx)(n.em,{children:"objet"})," \xe0 partir de ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["si vous passez ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})," remplace le texte brut d\xe9fini par ces bornes avec le texte ",(0,r.jsx)(n.em,{children:"nouvTexte"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["vous pouvez passer 0 dans ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," afin de d\xe9signer automatiquement le dernier caract\xe8re du texte (passez 1 dans ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," pour d\xe9signer le premier caract\xe8re)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["4D propose des constantes pr\xe9d\xe9finies afin de d\xe9signer automatiquement des bornes de s\xe9lection dans les param\xe8tres ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),'. Ces constantes sont plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Texte multistyle"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End highlight"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1001"}),(0,r.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re du texte contenu dans l\u2019objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start highlight"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1000"}),(0,r.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re du texte contenu dans l\u2019objet"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(*) Vous devez passer un nom d\u2019objet dans ",(0,r.jsx)(n.em,{children:"objet"})," pour pouvoir utiliser cette constante. Si vous passez une r\xe9f\xe9rence de variable ou de champ, la commande s\u2019appliquera \xe0 l\u2019ensemble du texte de l\u2019objet."]}),"\n",(0,r.jsxs)(n.p,{children:["Le style du premier caract\xe8re remplac\xe9 sera utilis\xe9 pour la totalit\xe9 du texte ",(0,r.jsx)(n.em,{children:"nouvTexte"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," est sup\xe9rieur \xe0 ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", le texte n'est pas modifi\xe9 et la variable OK prend la valeur 0 (hormis lorsque ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," vaut 0, cf. ci-dessus)."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Soit la variable texte multistyle suivante :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(994092).Z+"",width:"362",height:"39"})}),"\n",(0,r.jsxs)(n.p,{children:['Vous voulez ins\xe9rer des noms de soci\xe9t\xe9s stock\xe9s dans un champ texte. Ces noms peuvent comporter par exemple le caract\xe8re "&". Dans ce cas, il est n\xe9cessaire d\'utiliser la commande ',(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ST SET PLAIN TEXT(monTexteStyl;[Soci\xe9t\xe9]Nom;33;34)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Le r\xe9sultat est alors :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(432430).Z+"",width:"362",height:"41"})}),"\n",(0,r.jsx)(n.p,{children:"Voici le texte brut contenu dans la variable :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(341282).Z+"",width:"362",height:"61"})}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez constater que le texte ins\xe9r\xe9 a \xe9t\xe9 encapsul\xe9 au sein d'une paire de balises de style suppl\xe9mentaires. Ces balises correspondent au style du caract\xe8re pr\xe9c\xe9dent l'insertion. Ce m\xe9canisme permet de garantir un affichage correct des champs multistyles dans tous les cas de figure."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si vous aviez utilis\xe9 la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/st-set-text",children:"ST SET TEXT"})," dans ce cas, 4D n'aurait rien ins\xe9r\xe9, car la pr\xe9sence du caract\xe8re \"&\" non encod\xe9 emp\xeacherait l'interpr\xe9tation des balises de style pr\xe9sentes dans la variable. Pour plus d'informations, reportez-vous \xe0 la description de cette commande."]}),"\n",(0,r.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"A l\u2019issue de l\u2019ex\xe9cution de cette commande, la variable OK prend la valeur 1 si aucune erreur n\u2019a \xe9t\xe9 rencontr\xe9e et 0 dans le cas contraire. C\u2019est le cas notamment lorsque l\u2019\xe9valuation des balises de style \xe9choue (balise incorrecte ou manquante)."}),"\n",(0,r.jsx)(n.p,{children:"A noter qu\u2019en cas d\u2019erreur, la variable n\u2019est pas modifi\xe9e. Lorsqu\u2019une erreur se produit sur une variable lors de l\u2019\xe9valuation du texte, 4D transforme le texte en texte brut ; par cons\xe9quent, les caract\xe8res <, > et & seront convertis en entit\xe9s HTML."}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/st-get-plain-text",children:"ST Get plain text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/st-set-text",children:"ST SET TEXT"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1136"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},994092:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},432430:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict572271.fr-7ddaf71413acae1ad9d9246dbecba4d3.png"},341282:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/pict572279.fr-41aa5144ada58286bd8e64ce9d799fb7.png"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);