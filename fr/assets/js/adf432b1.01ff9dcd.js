"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34652"],{486767:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-position","title":"WP Get position","description":"WP Get position ( objCible {; presentation} ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-position.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-position","permalink":"/docs/fr/WritePro/commands/wp-get-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-position","title":"WP Get position","slug":"/WritePro/commands/wp-get-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get page count","permalink":"/docs/fr/WritePro/commands/wp-get-page-count"},"next":{"title":"WP Get section","permalink":"/docs/fr/WritePro/commands/wp-get-section"}}'),t=r("785893"),i=r("250065");let l={id:"wp-get-position",title:"WP Get position",slug:"/WritePro/commands/wp-get-position",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP Get position"})," ( ",(0,t.jsx)(n.em,{children:"objCible"})," {; ",(0,t.jsx)(n.em,{children:"presentation"}),"} ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objCible"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Plage ou \xe9l\xe9ment ou document 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"presentation"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Mise en page de document 4D Write Pro utilis\xe9e pour la pr\xe9sentation :",(0,t.jsx)(n.br,{}),"0 (par d\xe9faut) = mise en page 4D Write Pro,",(0,t.jsx)(n.br,{}),"1 = HTML WYSIWYG"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Informations sur la position"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WP Get position"})," retourne un objet d\xe9crivant la position courante de ",(0,t.jsx)(n.em,{children:"objCible"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"objCible"})," vous pouvez passer :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"une plage, ou"}),"\n",(0,t.jsx)(n.li,{children:"un \xe9l\xe9ment (tableau / ligne / paragraphe / corps / en-t\xeate / pied / image / section / sous-section / zone de texte), ou"}),"\n",(0,t.jsx)(n.li,{children:"un document 4D Write Pro"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"L'objet retourn\xe9 par la commande comporte les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Nom de la propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"section"}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsxs)(n.td,{children:["Num\xe9ro de la premi\xe8re section qui croise l'",(0,t.jsx)(n.em,{children:"objCible"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"page"}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsxs)(n.td,{children:["Num\xe9ro de la premi\xe8re page qui croise l'",(0,t.jsx)(n.em,{children:"objCible"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"column"}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsxs)(n.td,{children:["Index de la premi\xe8re colonne qui croise l'",(0,t.jsx)(n.em,{children:"objCible"})," (base 1)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"line"}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsxs)(n.td,{children:["Index de la premi\xe8re ligne qui croise l'",(0,t.jsx)(n.em,{children:"objCible"})," (par rapport \xe0 la colonne -ou la page si aucune colonne- base 1)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"position"}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsxs)(n.td,{children:["Position dans la ligne du premier caract\xe8re de l'",(0,t.jsx)(n.em,{children:"objCible"})," (base 1)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bounds"}),(0,t.jsx)(n.td,{children:"Objet"}),(0,t.jsxs)(n.td,{children:["Coordonn\xe9es du rectangle englobant d'",(0,t.jsx)(n.em,{children:"objCible"}),", exprim\xe9es dans l'unit\xe9 du document courant et relativement \xe0 l'extr\xe9mit\xe9 sup\xe9rieure gauche de la page. Le padding et les tailles des bordures (le cas \xe9ch\xe9ant) sont pris en compte ; les marges et les r\xe8gles ne le sont pas."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"top"}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsx)(n.td,{children:"Coordonn\xe9e sup\xe9rieure du rectangle"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"left"}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsx)(n.td,{children:"Coordonn\xe9e gauche du rectangle"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bottom"}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsx)(n.td,{children:"Coordonn\xe9e inf\xe9rieure du rectangle"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"right"}),(0,t.jsx)(n.td,{children:"Numbre"}),(0,t.jsx)(n.td,{children:"Coordonn\xe9e droite du rectangle"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeHeight"}),(0,t.jsx)(n.td,{children:"Nombre"}),(0,t.jsxs)(n.td,{children:["Hauteur du rectangle englobant de l'",(0,t.jsx)(n.em,{children:"objCible"}),". Cette valeur peut \xeatre diff\xe9rente de ",(0,t.jsx)(n.em,{children:"bounds.bottom-bounds.top"})," si ",(0,t.jsx)(n.em,{children:"objCible"})," s'\xe9tend sur plusieurs colonnes (voir l'exemple 4)."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"objCible"})," est une plage vide, ",(0,t.jsx)(n.strong,{children:"WP Get position"})," retourne des informations sur la position du d\xe9but de la plage. Notez que lorsqu'une plage de type par d\xe9faut (texte) est vide, la hauteur de la plage (",(0,t.jsx)(n.em,{children:"range"})," ou ",(0,t.jsx)(n.em,{children:"bounds.bottom-bounds.top"}),") correspond \xe0 la hauteur du curseur et la largeur de la plage (",(0,t.jsx)(n.em,{children:"bounds.right-bounds.left"}),") est de 1 pixel.",(0,t.jsx)(n.br,{}),"\nSi ",(0,t.jsx)(n.em,{children:"objCible"})," est un texte en en-t\xeate ou en pied, ",(0,t.jsx)(n.strong,{children:"WP Get position"})," retourne des informations sur la position o\xf9 l'en-t\xeate et le pied de page sont affich\xe9s dans la premi\xe8re section/page.",(0,t.jsx)(n.br,{}),"\nSi ",(0,t.jsx)(n.em,{children:"objCible"})," est une image ancr\xe9e (qui peut \xeatre r\xe9pliqu\xe9e sur plusieurs pages), ",(0,t.jsx)(n.strong,{children:"WP Get position"})," renvoie des informations sur la position o\xf9 l'image est ancr\xe9e dans la premi\xe8re section/page.",(0,t.jsx)(n.br,{}),"\nSi ",(0,t.jsx)(n.em,{children:"objCible"})," est une sous-section, ",(0,t.jsx)(n.strong,{children:"WP Get position"})," renvoie des informations sur la position de la premi\xe8re page de la section parente."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"presentation"})," peut \xeatre utilis\xe9 pour d\xe9finir du wysiwyg HTML pour l'\xe9valuation de l'",(0,t.jsx)(n.em,{children:"objCible"}),'. Vous pouvez passer une des constantes suivantes du th\xe8me "4D Write Pro" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk 4D Write Pro layout"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Format 4D Write Pro standard, pouvant inclure des attributs de style sp\xe9cifiques"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wk html wysiwyg"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Dans ce format, les \xe9ventuels attributs avanc\xe9s de 4D Write Pro non disponibles dans tous les navigateurs sont supprim\xe9s (multi-colonnes, double interlignes...)"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"presentation"})," est omis, la pr\xe9sentation 4D Write Pro (0) est utilis\xe9e par d\xe9faut."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes sur les performances"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Les m\xeames param\xe9trages de pr\xe9sentation que pour la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-print",children:"WP PRINT"})," sont utilis\xe9s avec ",(0,t.jsx)(n.strong,{children:"WP Get position"})," :\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"en-t\xeates : visible"}),"\n",(0,t.jsx)(n.li,{children:"pieds : visible"}),"\n",(0,t.jsx)(n.li,{children:"expressions : calcul\xe9es et affich\xe9es"}),"\n",(0,t.jsxs)(n.li,{children:["mode page : page ou brouillon (vue wysiwyg HTML telle que d\xe9finie par la commande)",(0,t.jsx)(n.br,{}),"\nSi ",(0,t.jsx)(n.em,{children:"objCible"})," est affich\xe9 dans une zone formulaire 4D Write Pro, assurez-vous que les param\xe8tres d'affichage de la zone correspondent aux param\xe8tres d'affichage de la commande afin d'obtenir des informations coh\xe9rentes. Notez \xe9galement que si ces param\xe8tres sont diff\xe9rents dans la zone, 4D Write Pro devra \"cloner\" le document pour calculer la pr\xe9sentation \xe0 chaque appel de la commande, ce qui peut prendre un certain temps. Pour des raisons de performances, il est recommand\xe9 dans ce cas de cr\xe9er le document hors ligne et de le copier dans la zone sur le formulaire uniquement lorsque la g\xe9n\xe9ration est termin\xe9e."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Cette commande ne doit pas \xeatre appel\xe9e dans des \xe9v\xe9nements fr\xe9quemment g\xe9n\xe9r\xe9s (tels que On After Edit), \xe9tant donn\xe9 que, par exemple, ",(0,t.jsx)(n.em,{children:"result.rangeHeight"})," peut n\xe9cessiter de co\xfbteux calculs de rendu \xe0 chaque appel d'\xe9v\xe9nement."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez conna\xeetre le num\xe9ro de page d'une plage :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $range;$rangePosition : Object\n\xa0$range:=WP Text range(WParea)\xa0//plage de la s\xe9lection de l\'utilisateur\n\xa0$rangePosition:=WP Get position($range;wk 4D Write Pro layout)\n\xa0ALERT("Votre s\xe9lection se trouve en page\xa0 "+String($rangePosition.page))\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Vous voulez appliquer la couleur bleue pour le texte de la premi\xe8re et de la derni\xe8re page d'un document :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $nbPages : Integer\n\xa0var $body : Object\n\xa0var $_paragraphs : Collection\n\xa0\n\xa0$nbPages:=WP Get page count([DOC]Sample)\n\xa0$body:=WP Get body([DOC]Sample)\n\xa0$_paragraphs:=WP Get elements($body;wk type paragraph)\n\xa0For each($paragraph;$_paragraphs)\n\xa0\xa0\xa0\xa0$info:=WP Get position($paragraph)\n\xa0\xa0\xa0\xa0If($info.page=1)|($info.page=$nbPages)\xa0// pour la premi\xe8re et la derni\xe8re page, couleur du texte en bleu\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($paragraph;wk text color;"blue")\n\xa0\xa0\xa0\xa0Else\xa0//pour les paragraphes des autres pages, le texte est en noir\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($paragraph;wk text color;"black")\n\xa0\xa0\xa0\xa0End if\n\xa0End for each\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Lors de la cr\xe9ation d'un document, vous souhaitez \xe9viter les fractionnements de paragraphes :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var WParea;$body : Object\n\xa0var $_paragraphs : Collection\n\xa0WParea:=WP New\n\xa0\n\xa0$body:=WP Get body([DOC]Sample)\n\xa0$_paragraphs:=WP Get elements($body;wk type paragraph)\n\xa0\n\xa0For each($paragraph;$_paragraphs)\n\xa0\xa0\xa0\xa0$insert:=WP New($paragraph)\n\xa0\n\xa0\xa0//m\xe9morise la plage courante et le num\xe9ro de page\n\xa0\xa0\xa0\xa0$rangeBefore:=WP Text range(WParea;wk end text;wk end text)\n\xa0\xa0\xa0\xa0$info:=WP Get position($rangeBefore)\n\xa0\xa0\xa0\xa0$memoPage:=$info.page\n\xa0\n\xa0\xa0//ins\xe8re les contenus, sans toucher \xe0 la plage\n\xa0\xa0\xa0\xa0WP INSERT DOCUMENT($rangeBefore;$insert;wk append;wk exclude from range)\n\xa0\n\xa0\xa0//v\xe9rifie la position apr\xe8s l'insertion\n\xa0\xa0\xa0\xa0$rangeAfter:=WP Text range(WParea;wk end text;wk end text)\n\xa0\xa0\xa0\xa0$info:=WP Get position($rangeAfter)\n\xa0\n\xa0\xa0\xa0\xa0If($memoPage#$info.page)\xa0// si la page a chang\xe9, insertion d'un saut de page\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP INSERT BREAK($rangeBefore;wk page break;wk replace)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0fin de si\n\xa0\n\xa0\xa0\xa0\xa0End for each\n"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsxs)(n.p,{children:["Les exemples suivants illustrent les coordonn\xe9es retourn\xe9es du rectangle englobant, en fonction de ",(0,t.jsx)(n.em,{children:"objCible"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$default:=WP Text range(WPArea)\xa0//plage par d\xe9faut (texte)\n\xa0$textCoordinates:=WP Get position($default)\xa0//ligne pointill\xe9e rouge\n\xa0\n\xa0$paragraph:=WP Create paragraph range($default)\xa0//plage paragraphe\n\xa0$paraCoordinates:=WP Get position($paragraph)\xa0//ligne pointill\xe9e verte\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(371117).Z+"",width:"800",height:"421"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Ligne pointill\xe9e rouge :"})," ",(0,t.jsx)(n.em,{children:"valeurs $textCoordinates de l'objet"}),"\n*",(0,t.jsx)(n.em,{children:"Ligne pointill\xe9e verte :"})," *",(0,t.jsx)(n.em,{children:"valeurs $"})," ",(0,t.jsx)(n.em,{children:"paraCoordinates"})," *",(0,t.jsx)(n.em,{children:"de l'objet"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," En cas d'affichage sur plusieurs colonnes, la propri\xe9t\xe9 ",(0,t.jsx)(n.em,{children:"rangeHeight"})," (lignes pleines) peut \xeatre plus importante que ",(0,t.jsx)(n.em,{children:"bounds.bottom"}),"-",(0,t.jsx)(n.em,{children:"bounds.top"})," (lignes pointill\xe9es) :"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(256268).Z+"",width:"567",height:"427"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-print",children:"WP PRINT"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},371117:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict4096405.en-06494b17daf4c188448c7a627e5e83c7.png"},256268:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict4096411.en-392fb0a306ecaaf16fc2ed9654286496.png"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return l}});var s=r(667294);let t={},i=s.createContext(t);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);