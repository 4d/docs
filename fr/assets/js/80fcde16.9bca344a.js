"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38116"],{313386:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-new","title":"WP New","description":"WP New {( source {; option} )} -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-new.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new","permalink":"/docs/fr/WritePro/commands/wp-new","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-new","title":"WP New","slug":"/WritePro/commands/wp-new","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Is font style supported","permalink":"/docs/fr/WritePro/commands/wp-is-font-style-supported"},"next":{"title":"WP NEW BOOKMARK","permalink":"/docs/fr/WritePro/commands/wp-new-bookmark"}}'),s=r("785893"),o=r("250065");let i={id:"wp-new",title:"WP New",slug:"/WritePro/commands/wp-new",displayed_sidebar:"docs"},l=void 0,a={},d=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP New"})," {( ",(0,s.jsx)(n.em,{children:"source"})," {; ",(0,s.jsx)(n.em,{children:"option"}),"} )} -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"source"}),(0,s.jsx)(n.td,{children:"Text, Blob, Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Cha\xeene : Source HTML,",(0,s.jsx)(n.br,{}),"BLOB : Blob document 4D Write (.4w7/.4wt) ou document 4D Write Pro (.4wp),",(0,s.jsx)(n.br,{}),"Objet : Objet plage ou \xe9l\xe9ment 4D Write Pro"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"option"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Option d'import des expressions HTML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Objet 4D Write Pro"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"WP New"})," cr\xe9e et retourne un nouvel objet 4D Write Pro. L'objet retourn\xe9 est un document complet pouvant \xeatre pass\xe9, par exemple, \xe0 la commande ",(0,s.jsx)(n.a,{href:"../commands/wp-insert-document.md",children:"WP INSERT DOCUMENT"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Par d\xe9faut, si vous omettez le param\xe8tre ",(0,s.jsx)(n.em,{children:"source"}),", la commande retourne un objet 4D Write Pro vide."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez \xe9galement utiliser le param\xe8tre ",(0,s.jsx)(n.em,{children:"source"}),", auquel cas le nouvel objet 4D Write Pro sera pr\xe9rempli avec le contenu de ",(0,s.jsx)(n.em,{children:"source"}),". Vous pouvez passer :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["un param\xe8tre cha\xeene : dans ce cas, vous passez une source de type HTML 4D, c'est-\xe0-dire un texte export\xe9 par ",(0,s.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-export-variable",children:"WP EXPORT VARIABLE"})," avec l'option wk web page html 4D. Ce texte peut contenir des r\xe9f\xe9rences (balises et expressions 4D) et des images embarqu\xe9es."]}),"\n",(0,s.jsxs)(n.li,{children:["un param\xe8tre ",(0,s.jsx)(n.a,{href:"#",title:"A series of bytes (from 0 to 2 GB in length)",children:"blob"})," : dans ce cas, vous passez soit :\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["un document au format 4D Write Pro (.4wp) stock\xe9 dans un BLOB. Pour plus d'informations sur le format de document 4D Write Pro, veuillez vous reporter au paragraphe ",(0,s.jsx)(n.em,{children:"Format de document .4wp"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["une ancienne zone 4D Write charg\xe9e dans un BLOB (les Blobs contenant des documents .4w7 ou .4wt sont accept\xe9s). Dans ce cas, vous pouvez utiliser le param\xe8tre option pour int\xe9grer des expressions HTML en txt dans le document import\xe9 (voir ci-dessous).",(0,s.jsx)(n.br,{}),"\nPour une liste d\xe9taill\xe9e des fonctions 4D Write qui sont actuellement prises en charge dans les objets 4D Write Pro, veuillez vous r\xe9f\xe9rer \xe0 la section ",(0,s.jsx)(n.em,{children:"Import de documents 4D Write"}),".",(0,s.jsx)(n.br,{}),"\nSi vous souhaitez importer un document 4D Write (.4w7 ou .4wt) stock\xe9 sur disque, utilisez plut\xf4t la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-import-document",children:"WP Import document"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["un param\xe8tre ",(0,s.jsx)(n.a,{href:"#",title:"Donn\xe9es structur\xe9es sous forme d'objet natif 4D",children:"objet"})," qui peut \xeatre :\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["une plage.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"WP New"})," retournera un nouveau document cr\xe9\xe9 \xe0 partir de cette plage sp\xe9cifique. \xc0 noter que si la plage n'est pas \xe9gale \xe0 la totalit\xe9 du document, seule la premi\xe8re section est export\xe9e et les signets, s'il y en a, ne sont pas export\xe9s."]}),"\n",(0,s.jsxs)(n.li,{children:["un \xe9l\xe9ment (tableau / ligne / paragraphe / image en ligne / en-t\xeate / corps / pied de page / zone de texte / section / sous-section / feuille de style).",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"WP New"})," retournera un nouveau document dont le corps (",(0,s.jsx)(n.em,{children:"body"}),") sera constitu\xe9 du contenu de l'\xe9l\xe9ment r\xe9f\xe9renc\xe9 dans le corps (pour une ligne de tableau, le document contiendra un \xe9l\xe9ment tableau constitu\xe9 de la ligne)."]}),"\n",(0,s.jsxs)(n.li,{children:["un document 4D Write Pro.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"WP New"})," retournera une copie de ce document sp\xe9cifique."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Par d\xe9faut, les expressions HTML ins\xe9r\xe9es dans les anciens documents 4D Write ne sont pas import\xe9es (aucune prise en charge de 4D Write Pro). Si vous passez la constante wk import html expressions as text dans le param\xe8tre option, les expressions HTML seront import\xe9es en texte brut dans les balises ",(0,s.jsx)(n.em,{children:"##htmlBegin##"})," et ",(0,s.jsx)(n.em,{children:"##htmlEnd##"})," -- et devront \xeatre format\xe9es ult\xe9rieurement. Par exemple :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-RAW",children:"##htmlBegin##Titre import\xe9bold##htmlEnd##\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.em,{children:"Note de c"})," ",(0,s.jsx)(n.em,{children:"ompatibilit\xe9"})," : Les feuilles de style de caract\xe8res des documents 4D Write h\xe9rit\xe9s utilisent un m\xe9canisme propri\xe9taire, qui n'est pas pris en charge par 4D Write Pro. Afin d'obtenir le meilleur r\xe9sultat pour les textes import\xe9s, les attributs de feuilles de style sont convertis en attributs de style \"cod\xe9s en dur\". Les feuilles de style de caract\xe8res h\xe9rit\xe9s ne sont pas importants et ne sont plus r\xe9f\xe9renc\xe9s dans les documents."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:'Character style sheets in legacy 4D Write documents use a proprietary mechanism, which is not supported by 4D Write Pro. To get the best result for imported text, style sheet attributes are converted to "hard coded" style attributes. Legacy character style sheets are not imported and are no longer referenced in the document.'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Vous voulez cr\xe9er un objet 4D Write Pro vide :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0myWPObject:=WP New\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"Vous voulez cr\xe9er un nouvel objet 4D Write Pro \xe0 l'aide d'un document 4D Write Pro stock\xe9 sur disque :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $BlobDoc : Blob\n\xa0var myWPArea : Object\n\xa0DOCUMENT TO BLOB("myDoc.4wp";$BlobDoc)\xa0//charger le document dans un Blob\n\xa0myWPArea:=WP New($BlobDoc)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,s.jsx)(n.p,{children:"Vous voulez cr\xe9er un objet 4D Write Pro contenant une simple r\xe9f\xe9rence d'expression 4D :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var myText : Text\n\xa0myText:="Nous sommes le "\n\xa0ST INSERT EXPRESSION(myText;"chaine(date du jour;Syst\xe8me date long)";ST End text)\n\xa0myWPA:=WP New(myText)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,s.jsx)(n.p,{children:"Vous voulez initialiser votre zone 4D Write pro avec un template pr\xe9c\xe9demment cr\xe9\xe9 :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Exporter un template depuis une zone existante\n\xa0var wpTemplate : Text\n\xa0WP EXPORT VARIABLE(myWPArea;wpTemplate;wk web page html 4D)\n\xa0\n\xa0\xa0// Use le template pour une nouvelle zone\n\xa0var myNewWPA : Object\n\xa0myNewWPA:=WP New(wpTemplate)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,s.jsx)(n.p,{children:"Vous voulez importer dans une nouvelle zone 4D Write Pro un document de l'ancien plug-in 4D Write stock\xe9 dans un champ BLOB de l'enregistrement courant, et conserver les expressions HTML :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var wpArea : Object\n\xa0wpArea:=WP New([Templates]Reference_;wk import html expressions as text)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,s.jsxs)(n.p,{children:["Vous avez d\xe9fini un document mod\xe8le (",(0,s.jsx)(n.em,{children:"template"}),") comportant diff\xe9rentes parties pr\xe9format\xe9es, chacune d'elles \xe9tant stock\xe9e en tant que signet. Lorsque vous produisez un document final \xe0 partir du ",(0,s.jsx)(n.em,{children:"template"}),", vous pouvez traiter chaque signet en tant que nouveau document et l'ins\xe9rer dans le document final."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_BookmarkNames;0)\n\xa0WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames)\xa0//lire les signets du template\n\xa0$targetRange:=WP New\xa0//cr\xe9er un nouveau document vide (sera le document final)\n\xa0\n\xa0$p:=Find in array($_BookmarkNames;"Main_Header")\xa0//traiter l\'ent\xeate principal nomm\xe9 "Main_Header"\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p})\xa0//s\xe9lectionner la plage\n\xa0\xa0\xa0\xa0$RangeDoc:=WP New($Range)\xa0//cr\xe9er un nouveau document depuis la plage\n\xa0\xa0\xa0\xa0WP INSERT DOCUMENT($targetRange;$RangeDoc;wk append+wk freeze expressions)\xa0//wk append=apr\xe8s remplacement, $buildRange est \xe9gal \xe0 la fin du texte remplac\xe9\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-import-document",children:"WP Import document"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"../commands/wp-insert-document.md",children:"WP INSERT DOCUMENT"})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(667294);let s={},o=t.createContext(s);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);