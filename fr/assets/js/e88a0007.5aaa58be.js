"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31424"],{174657:function(e,t,s){s.r(t),s.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-new-style-sheet","title":"WP New style sheet","description":"WP New style sheet ( docWP ; typeFeuilleStyle ; nomFeuilleStyle ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-new-style-sheet.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new-style-sheet","permalink":"/docs/fr/20-R7/WritePro/commands/wp-new-style-sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-style-sheet.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-new-style-sheet","title":"WP New style sheet","slug":"/WritePro/commands/wp-new-style-sheet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP New header","permalink":"/docs/fr/20-R7/WritePro/commands/wp-new-header"},"next":{"title":"WP New subsection","permalink":"/docs/fr/20-R7/WritePro/commands/wp-new-subsection"}}'),l=s("785893"),r=s("250065");let i={id:"wp-new-style-sheet",title:"WP New style sheet",slug:"/WritePro/commands/wp-new-style-sheet",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"WP New style sheet"})," ( ",(0,l.jsx)(t.em,{children:"docWP"})," ; ",(0,l.jsx)(t.em,{children:"typeFeuilleStyle"})," ; ",(0,l.jsx)(t.em,{children:"nomFeuilleStyle"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Param\xe8tre"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"docWP"}),(0,l.jsx)(t.td,{children:"Object"}),(0,l.jsx)(t.td,{children:"\u2192"}),(0,l.jsx)(t.td,{children:"Document 4D Write Pro"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"typeFeuilleStyle"}),(0,l.jsx)(t.td,{children:"Integer"}),(0,l.jsx)(t.td,{children:"\u2192"}),(0,l.jsx)(t.td,{children:"Type de la feuille de style"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"nomFeuilleStyle"}),(0,l.jsx)(t.td,{children:"Text"}),(0,l.jsx)(t.td,{children:"\u2192"}),(0,l.jsx)(t.td,{children:"Nom de la feuille de style"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"R\xe9sultat"}),(0,l.jsx)(t.td,{children:"Object"}),(0,l.jsx)(t.td,{children:"\u2190"}),(0,l.jsx)(t.td,{children:"Objet feuille de style"})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(t.p,{children:["La commande ",(0,l.jsx)(t.strong,{children:"WP New style sheet"})," cr\xe9e un nouvel objet feuille de style (vide) pour le ",(0,l.jsx)(t.em,{children:"docWP"})," d\xe9sign\xe9."]}),"\n",(0,l.jsx)(t.p,{children:"Dans le param\xe8tre docWP, passez un document 4D Write Pro."}),"\n",(0,l.jsxs)(t.p,{children:["Le param\xe8tre ",(0,l.jsx)(t.em,{children:"typeFeuilleStyle"})," vous permet d'indiquer le type de feuille de style, ",(0,l.jsx)(t.em,{children:"i.e."})," la partie de docWP qui sera affect\xe9e par la feuille de style. Deux types sont disponibles :"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"wk type character : Applique les attributs de style aux caract\xe8res."}),"\n",(0,l.jsx)(t.li,{children:"wk type paragraph : Applique les attributs de style aux paragraphes."}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["Passez un nom \xe0 la feuille de style dans le param\xe8tre ",(0,l.jsx)(t.em,{children:"nomFeuilleStyle"}),". Le nom de la feuille de style est stock\xe9 avec le document et facilite la r\xe9utilisation ou la modification du style. Il peut \xe9galement \xeatre utilis\xe9 avec les commandes ",(0,l.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-get-style-sheet",children:"WP Get style sheet"})," et ",(0,l.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),". Le nom de la feuille de style doit \xeatre conforme aux r\xe8gles suivantes :"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"il doit commencer par une lettre"}),"\n",(0,l.jsx)(t.li,{children:'il peut ensuite contenir des caract\xe8res alphanum\xe9riques, des espaces, des caract\xe8res "-" ou des caract\xe8res unicode >= 128'}),"\n",(0,l.jsx)(t.li,{children:"il doit \xeatre unique dans le document, quel que soit le type"}),"\n",(0,l.jsx)(t.li,{children:'il ne doit pas commencer par "section", qui est r\xe9serv\xe9'}),"\n",(0,l.jsx)(t.li,{children:'le "_" est remplac\xe9 par un espace et les espaces de fin de ligne sont supprim\xe9s.'}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["Vous pouvez indiquer les attributs de la feuille de style \xe0 l'aide de la commande ",(0,l.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," ou de la notation objet (voir ",(0,l.jsx)(t.em,{children:"Attributs 4D Write Pro"}),"). Pour consulter la liste des attributs disponibles, r\xe9f\xe9rez-vous \xe0 la section ",(0,l.jsx)(t.em,{children:"Style sheet attributes"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Notes"})," :"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Une feuille de style modifie uniquement l'affichage d'un caract\xe8re ou d'un paragraphe, mais ne modifie pas la fa\xe7on dont il est stock\xe9 dans le document. Si une feuille de style est supprim\xe9e, le texte reprendra le style par d\xe9faut."}),"\n",(0,l.jsxs)(t.li,{children:["Les attributs de style non d\xe9finis dans la nouvelle feuille de style utiliseront automatiquement le style Normal. Pour plus d'informations, consultez ",(0,l.jsx)(t.em,{children:"Commandes feuilles de style"}),"."]}),"\n"]}),"\n",(0,l.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(t.p,{children:"Le code suivant cr\xe9e et d\xe9finit une feuille de style de paragraphe :"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-4d",children:'\xa0var $styleSheet : Object\n\xa0$styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Titre principal")\n\xa0\n\xa0\xa0//d\xe9finit les param\xe8tres de la feuille de style\n\xa0WP SET ATTRIBUTES($styleSheet;wk font family;"Papyrus")\n\xa0WP FIXER\xa0ATTRIBUTS($styleSheet;wk font size;"48pt")\n\xa0WP FIXER\xa0ATTRIBUTS($styleSheet;wk text color;"red")\n\xa0WP FIXER\xa0ATTRIBUTS($styleSheet;wk text align;wk left)\n\xa0\n\xa0\n\xa0\xa0//Appliquer la feuille de style au premier paragraphe\n\xa0var $Paragraphs : Collection\n\xa0$Paragraphs:=WP Lire\xe9l\xe9ments(wpArea;wk type paragraph)\n\xa0If($Paragraphs.length>0)\n\xa0\xa0\xa0\xa0WP SET ATTRIBUTES($Paragraphs[0];wk style sheet;$styleSheet)\n\xa0End if\xa0\n'})}),"\n",(0,l.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.em,{children:"Acc\xe9der au contenu des documents par programmation"}),(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-get-style-sheet",children:"WP Get style sheet"}),(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-get-style-sheets",children:"WP Get style sheets"}),(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-import-style-sheets",children:"WP IMPORT STYLE SHEETS"})]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return i}});var n=s(667294);let l={},r=n.createContext(l);function i(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);