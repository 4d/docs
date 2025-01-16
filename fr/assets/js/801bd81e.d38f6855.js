"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24457"],{265007:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-new-text-box","title":"WP New text box","description":"WP New text box ( wpDoc ; pageNum ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-new-text-box.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new-text-box","permalink":"/docs/fr/WritePro/commands/wp-new-text-box","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-text-box.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-new-text-box","title":"WP New text box","slug":"/WritePro/commands/wp-new-text-box","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP New subsection","permalink":"/docs/fr/WritePro/commands/wp-new-subsection"},"next":{"title":"WP Paragraph range","permalink":"/docs/fr/WritePro/commands/wp-paragraph-range"}}'),d=n("785893"),s=n("250065");let i={id:"wp-new-text-box",title:"WP New text box",slug:"/WritePro/commands/wp-new-text-box",displayed_sidebar:"docs"},o=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let t={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"WP New text box"})," ( ",(0,d.jsx)(t.em,{children:"wpDoc"})," ; ",(0,d.jsx)(t.em,{children:"pageNum"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Param\xe8tre"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"wpDoc"}),(0,d.jsx)(t.td,{children:"Object"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Document 4D Write Pro"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pageNum"}),(0,d.jsx)(t.td,{children:"Number"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Num\xe9ro de page o\xf9 ancrer la zone de texte"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"R\xe9sultat"}),(0,d.jsx)(t.td,{children:"Object"}),(0,d.jsx)(t.td,{children:"\u2190"}),(0,d.jsx)(t.td,{children:"Objet zone de texte"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,d.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(t.p,{children:["La commande ",(0,d.jsx)(t.strong,{children:"WP New text box"})," cr\xe9e et renvoie un nouvel objet zone de texte dans la page pageNum de wpDoc."]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Note :"})," Pour plus d'informations sur les zones de texte, veuillez consulter le paragraphe ",(0,d.jsx)(t.em,{children:"Gestion des zones de texte"}),"."]}),"\n",(0,d.jsx)(t.p,{children:"Dans le param\xe8tre wpDoc, passez un document 4D Write Pro."}),"\n",(0,d.jsxs)(t.p,{children:["Dans pageNum, passez le num\xe9ro de la page \xe0 laquelle la zone de texte doit \xeatre ancr\xe9e. Si pageNum < 0, le num\xe9ro de page ",(0,d.jsx)(t.strong,{children:"1"})," est utilis\xe9 (aucune erreur n'est g\xe9n\xe9r\xe9e)."]}),"\n",(0,d.jsx)(t.p,{children:"The command creates a new text box element with the following default attributes:"}),"\n",(0,d.jsx)(t.p,{children:"La commande cr\xe9e une nouvelle zone de texte avec les attributs par d\xe9faut suivants :"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:"largeur = 8 cm,"}),"\n",(0,d.jsx)(t.li,{children:"hauteur = auto,"}),"\n",(0,d.jsx)(t.li,{children:"bordure noire solide 1 pt,"}),"\n",(0,d.jsx)(t.li,{children:"padding = 4 pt,"}),"\n",(0,d.jsx)(t.li,{children:"marge = 0 pt,"}),"\n",(0,d.jsx)(t.li,{children:"couleur de fond = white,"}),"\n",(0,d.jsx)(t.li,{children:'id = "textBoxN" where N is a number,'}),"\n",(0,d.jsx)(t.li,{children:"anchored in front of the body at the top left corner of the page rectangle (like an anchored picture, a text box can be anchored to embedded mode, or to a section, to all sections or to a subsection in page mode, and to the background or front layer.)"}),"\n",(0,d.jsx)(t.li,{children:"ancr\xe9e devant le corps, dans le coin sup\xe9rieur gauche du rectangle de la page (comme une image ancr\xe9e, une zone de texte peut \xeatre ancr\xe9e au mode incorpor\xe9, ou \xe0 une section, \xe0 toutes les sections ou \xe0 une sous-section en mode page, et au niveau de l'arri\xe8re-plan ou de l'avant-plan)."}),"\n"]}),"\n",(0,d.jsxs)(t.p,{children:["Voir la section ",(0,d.jsx)(t.em,{children:"Attributs 4D Write Pro"})," pour une description d\xe9taill\xe9e de ces attributs."]}),"\n",(0,d.jsxs)(t.p,{children:["The new text box is rendered only on the page ",(0,d.jsx)(t.em,{children:"pageNum,"})," so it may not be rendered if:"]}),"\n",(0,d.jsx)(t.p,{children:"La nouvelle zone texte n'est affich\xe9e que sur la page pageNum, il se peut donc qu'elle ne soit pas affich\xe9e si :"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:"il n'y a pas de page avec le num\xe9ro de page transmis"}),"\n",(0,d.jsx)(t.li,{children:"le mode d'affichage actuel est incorpor\xe9 (embedded) ou brouillon (draft)"}),"\n"]}),"\n",(0,d.jsx)(t.p,{children:"Toutefois, la zone de texte existe toujours et appartient au document, m\xeame si elle n'est pas rendue."}),"\n",(0,d.jsx)(t.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,d.jsx)(t.p,{children:"Vous souhaitez cr\xe9er une zone de texte vide par d\xe9faut :"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-4d",children:"\xa0$textBox:=WP Cr\xe9er zone de texte(WParea;1)\n"})}),"\n",(0,d.jsx)(t.p,{children:"R\xe9sultat :"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.img,{src:n(535688).Z+"",width:"855",height:"154"})}),"\n",(0,d.jsx)(t.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,d.jsx)(t.p,{children:"Dans un mod\xe8le de lettre, on souhaite ajouter une zone de texte pour afficher l'adresse du destinataire (qui est stock\xe9e dans le contexte) :"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// #1 cr\xe9er la zone de texte\n\xa0$textBox:=WP Cr\xe9er zone de texte(WParea;1)\n\xa0\n\xa0\xa0// #2 d\xe9finir quelques attributs de zone de texte\n\xa0WP SET ATTRIBUTES($textBox;wk id;"AddressArea")\n\xa0WP SET ATTRIBUTES($textBox;wk anchor origin;wk paper box)\n\xa0WP SET ATTRIBUTES($textBox;wk anchor horizontal align;wk left;wk vertical align;wk top)\n\xa0WP SET ATTRIBUTES($textBox;wk anchor horizontal offset;$form.offsetX.values[$form.offsetX.index])\n\xa0WP SET ATTRIBUTES($textBox;wk anchor vertical offset;$form.offsetY.values[$form.offsetY.index])\n\xa0WP SET ATTRIBUTES($textBox;wk width;$form.width.values[$form.width.index])\n\xa0WP SET ATTRIBUTES($textBox;wk height;$form.height.values[$form.height.index])\n\xa0WP SET ATTRIBUTES($textBox;wk padding;$form.padding.values[$form.padding.index])\xa0\xa0// inside margins\n\xa0WP SET ATTRIBUTES($textBox;wk border style;wk dashed;wk border color;"Blue";wk border width;"1pt";wk border radius;"10pt")\n\xa0WP SET ATTRIBUTES($textBox;wk vertical align;wk center)\n\n\n\xa0\xa0// #3: d\xe9finir les formules dans la zone de texte\n\xa0WP INS\xc9RER FORMULE($textBox;Formula(This.data.fullName);wk append)\n\xa0WP INS\xc9RER RUPTURE($textBox;wk paragraph break;wk append)\n\xa0WP INS\xc9RER FORMULE($textBox;Formula(This.data.fullAddress);wk append)\n\n\n\xa0\xa0// #4: Styliser le contenu de la zone de texte\n\xa0WP SET ATTRIBUTES($textBox;wk font;"Arial";wk font bold;wk true;wk font size;"18pt")\n\n\n'})}),"\n",(0,d.jsx)(t.p,{children:"R\xe9sultat :"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.img,{src:n(642001).Z+"",width:"787",height:"349"})}),"\n",(0,d.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-delete-text-box",children:"WP DELETE TEXT BOX"})})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},535688:function(e,t,n){n.d(t,{Z:function(){return r}});let r="data:image/png;base64,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"},642001:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict6196766.en-d5d2395be47707f47da410df890a3061.png"},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var r=n(667294);let d={},s=r.createContext(d);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);