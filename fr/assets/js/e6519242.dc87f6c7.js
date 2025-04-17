"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30302"],{553371:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-set-link","title":"WP SET LINK","description":"WP SET LINK ( objCible ; objLien )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-set-link.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-set-link","permalink":"/docs/fr/WritePro/commands/wp-set-link","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-set-link.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-set-link","title":"WP SET LINK","slug":"/WritePro/commands/wp-set-link","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SET FRAME","permalink":"/docs/fr/WritePro/commands/wp-set-frame"},"next":{"title":"WP SET TEXT","permalink":"/docs/fr/WritePro/commands/wp-set-text"}}'),t=s("785893"),i=s("250065");let l={id:"wp-set-link",title:"WP SET LINK",slug:"/WritePro/commands/wp-set-link",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP SET LINK"})," ( ",(0,t.jsx)(n.em,{children:"objCible"})," ; ",(0,t.jsx)(n.em,{children:"objLien"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objCible"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Plage ou \xe9l\xe9ment ou document 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objLien"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur du lien hypertexte"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WP SET LINK"})," applique une r\xe9f\xe9rence de lien hypertexte au param\xe8tre ",(0,t.jsx)(n.em,{children:"objCible"}),". Les liens vers les URL, les m\xe9thodes 4D et les signets sont pris en charge. Le lien d\xe9clenche une action lorsque l'utilisateur clique dessus (ou lorsqu'il utilise le raccource ",(0,t.jsx)(n.strong,{children:"Ctrl+clic"})," sur Windows ou ",(0,t.jsx)(n.strong,{children:"Cmd+clic"})," sur macOS si le texte n'est pas en lecture seule pour les URL ouvrants)."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"objCible"}),", passez l'objet 4D Write Pro \xe0 l'endroit o\xf9 le lien sera cr\xe9\xe9. Vous pouvez passer :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"une plage, ou"}),"\n",(0,t.jsx)(n.li,{children:"un \xe9l\xe9ment (tableau / ligne / paragraphe / corps / en-t\xeate / pied / section / sous-section), ou"}),"\n",(0,t.jsx)(n.li,{children:"un document 4D Write Pro"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Par exemple, si vous passez un en-t\xeate, tout le contenu de l'en-t\xeate sera affich\xe9 sous forme de lien hypertexte. Lorsque vous ins\xe9rez des liens dans vos documents, 4D Write Pro applique les r\xe8gles suivantes :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si vous fixez un lien dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"objCible"})," qui contient plusieurs paragraphes, plusieurs liens s\xe9par\xe9s seront d\xe9finis."]}),"\n",(0,t.jsxs)(n.li,{children:["Si vous fixez un lien dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"objCible"})," qui contient d\xe9j\xe0 un ou plusieurs liens :\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["tous les liens existants qui sont enti\xe8rement inclus dans ",(0,t.jsx)(n.em,{children:"objCible"})," sont supprim\xe9s et le nouveau lien s'applique \xe0 ",(0,t.jsx)(n.em,{children:"objCible"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["si un lien est partiellement s\xe9lectionn\xe9 (il croise l'",(0,t.jsx)(n.em,{children:"objCible"}),"), il est r\xe9duit afin que la partie non s\xe9lectionn\xe9e conserve le lien pr\xe9c\xe9dent et que le nouveau lien s'applique \xe0 ",(0,t.jsx)(n.em,{children:"objCible"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"objLien"}),", passez un objet qui d\xe9crit le lien hypertexte. Il ne doit contenir qu'une seule des propri\xe9t\xe9s suivantes (except\xe9e la propri\xe9t\xe9 du param\xe8tre, qui peut \xeatre utilis\xe9e avec la propri\xe9t\xe9 de la m\xe9thode) :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Action du lien hypertexte"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"url"}),(0,t.jsx)(n.td,{children:"Texte"}),(0,t.jsx)(n.td,{children:"Destination du lien hypertexte d'un type d'URL (url crypt\xe9)."}),(0,t.jsxs)(n.td,{children:["Cr\xe9e un lien vers une adresse web standard (http ou https://",(0,t.jsx)(n.em,{children:"website"}),", mailto:",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.a,{href:"mailto:abc@xyz.com",children:"abc@xyz.com"}),","]})," etc.) : ouvre l'URL dans l'application par d\xe9faut (g\xe9n\xe9ralement dans un navigateur)Cr\xe9e un lien vers un chemin de fichier (absolu ou relatif au fichier de structure de 4D). Lorsque vous cr\xe9er des liens vers des fichiers .4wp ou .4w7 (file://",(0,t.jsx)(n.em,{children:"filepath"})," ou ",(0,t.jsx)(n.em,{children:"filepath/file.4wp"}),") : charge et remplace le document courant. Lorsque vous cr\xe9ez des liens vers d'autres types de fichiers, cela ouvre un fichier dans l'application par d\xe9faut du syst\xe8me pour le type de fichier."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bookmark"}),(0,t.jsx)(n.td,{children:"Texte"}),(0,t.jsx)(n.td,{children:"Nom du signet"}),(0,t.jsxs)(n.td,{children:["Acc\xe8de au signet mentionn\xe9 dans le document courant. (Voir ",(0,t.jsx)(n.em,{children:"Gestion des signets"}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"method"}),(0,t.jsx)(n.td,{children:"Texte"}),(0,t.jsxs)(n.td,{children:["Nom de la m\xe9thode projet - la m\xe9thode doit \xeatre existante et autoris\xe9e \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-allowed-methods",children:"SET ALLOWED METHODS"}),"."]}),(0,t.jsxs)(n.td,{children:["Ex\xe9cute la m\xe9thode 4D lorsqu'elle est cliqu\xe9e. La m\xe9thode re\xe7oit automatiquement deux param\xe8tres dans $1 et $2:",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.table,{children:(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Param\xe8tre"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Description"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$1"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Texte"}),(0,t.jsx)(n.td,{children:"Nom de la zone 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$2"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Objet"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"method"}),(0,t.jsx)(n.td,{children:"Texte"}),(0,t.jsx)(n.td,{children:"Nom de la m\xe9thode 4D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"parameter"}),(0,t.jsx)(n.td,{children:"Texte | Num\xe9rique"}),(0,t.jsxs)(n.td,{children:["Param\xe8tre utilisateur envoy\xe9 \xe0 la m\xe9thode via la propri\xe9t\xe9 ",(0,t.jsx)(n.em,{children:"parameter"})," (facultatif, voir ci-dessous)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"range"}),(0,t.jsx)(n.td,{children:"Objet"}),(0,t.jsxs)(n.td,{children:["Plage de ",(0,t.jsx)(n.em,{children:"objCible"})]})]})]})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parameter"}),(0,t.jsx)(n.td,{children:"Texte | Num\xe9rique"}),(0,t.jsxs)(n.td,{children:["Utilis\xe9 uniquement avec un lien de type ",(0,t.jsx)(n.em,{children:"method"}),", non obligatoire si la m\xe9thode ne n\xe9cessite pas de param\xe9trage. Contient un param\xe8tre suppl\xe9mentaire \xe0 envoyer \xe0 la m\xe9thode."]}),(0,t.jsx)(n.td,{children:"Re\xe7u en $2.parameter dans la m\xe9thode"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"4D Write Pro n'accepte que des URL valides (cod\xe9s). Les caract\xe8res sp\xe9ciaux contenus dans les liens ne sont pas traduits. Si des caract\xe8res sp\xe9ciaux sont n\xe9cessaires (par exemple %20 au lieu de \" \" pour les espaces) , vous devez les coder clairement. Si le lien n'est pas valide, une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,t.jsx)(n.li,{children:"Les liens vers les m\xe9thodes 4D sont supprim\xe9s des documents 4D Write Pro lorsqu'ils sont export\xe9s en format HTML, MIME HTML, ou .docx."}),"\n",(0,t.jsxs)(n.li,{children:["Si vous souhaitez supprimer un lien de ",(0,t.jsx)(n.em,{children:"objCible"}),", veuillez consulter le paragraphe ",(0,t.jsx)(n.em,{children:"Gestion des liens"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez ajouter un lien dans votre site Web, au niveau du pied de page de votre document :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $footer : Object\n\xa0$footer:=WP Get footer(WPArea;1)\n\xa0WP SET TEXT($footer;"Veuillez consulter notre site Web";wk replace)\n\xa0WP SET LINK($footer;New object("url";"http://www.4d.com"))\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez cr\xe9er une table des mati\xe8res contenant des liens \xe0 l'aide des signets de votre document :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $i;$n;$p;$memoStart : Integer\n\xa0var $range;$link;$toc;$tocRange;$positionInfo;$target : Object\n\xa0var $text : Text\n\xa0\n\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea1;$_bookmarks)\xa0//recenser tous les signets\n\xa0\n\xa0$n:=Size of array($_bookmarks)\n\xa0If($n>0)\n\xa0\xa0\xa0\xa0$tocRange:=WP Text range(WParea1;wk start text;wk start text)\xa0//trouver le d\xe9but du texte\n\xa0\xa0\xa0\xa0WP INSERT BREAK($tocRange;wk page break;wk append;wk exclude from range)\xa0//ajouter un saut de page avant le texte\n\xa0\n\xa0\xa0\xa0\xa0For($i;1;$n)\xa0// Ins\xe9rer la table des mati\xe8res et les liens\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$range:=WP Bookmark range(WParea1;$_bookmarks{$i})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$positionInfo:=WP Get position($range)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$memoStart:=$tocRange.end\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET TEXT($tocRange;Char(Tab)+$_bookmarks{$i}+Char(Tab)+String($positionInfo.page);wk append;wk include in range)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$target:=WP Text range($tocRange;$memoStart+1;$memoStart+1+Length($_bookmarks{$i}))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$link:=New object("bookmark";$_bookmarks{$i})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET LINK($target;$link)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP INSERT BREAK($tocRange;wk line break;wk append;wk include in range)\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:'Vous souhaitez fixer un lien dans une m\xe9thode 4D dans chaque cha\xeene "4D" d\'un document :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $text,$find : Text\n\xa0var $p : Integer\n\xa0var $range;$link : Object\n\xa0\n\xa0$text:=WP Get text(wpArea;wk expressions as value)\xa0//r\xe9cup\xe9rer tout le texte du document\n\xa0\n\xa0$find:="4D"\xa0//cible du lien\n\xa0\n\xa0$p:=Position($find;$text)\xa0//mettre une boucle dans le texte pour rechercher toutes les occurrences de la cible\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$range:=WP Text range(wpArea;$p;$p+LENGTH($find))\xa0//fixer la longueur de la cible\n\xa0\xa0//cr\xe9er l\'objet lien\n\xa0\xa0\xa0\xa0$link:=New object("m\xe9thode";"myAlert";"param\xe8tre";"Vive 4D!")\xa0//Ne pas oublier de donner l\'autorisation \xe0 l\'aide de la commande FIXER METHODES AUTORISEES \xa0\n\xa0\n\xa0\xa0\xa0\xa0WP SET LINK($range;$link)\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-get-links",children:"WP Get links"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);