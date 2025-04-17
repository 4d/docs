"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37853"],{108940:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/filter-keystroke","title":"FILTER KEYSTROKE","description":"FILTER KEYSTROKE ( carFiltr\xe9 )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/filter-keystroke.md","sourceDirName":"commands-legacy","slug":"/commands/filter-keystroke","permalink":"/docs/fr/20-R8/commands/filter-keystroke","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffilter-keystroke.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"filter-keystroke","title":"FILTER KEYSTROKE","slug":"/commands/filter-keystroke","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EDIT ITEM","permalink":"/docs/fr/20-R8/commands/edit-item"},"next":{"title":"Get edited text","permalink":"/docs/fr/20-R8/commands/get-edited-text"}}'),r=n("785893"),a=n("250065");let i={id:"filter-keystroke",title:"FILTER KEYSTROKE",slug:"/commands/filter-keystroke",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"FILTER KEYSTROKE"})," ( ",(0,r.jsx)(t.em,{children:"carFiltr\xe9"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tre"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"carFiltr\xe9"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Caract\xe8re(s) de remplacement ou Cha\xeene vide pour annuler le filtrage clavier"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"FILTER KEYSTROKE"})," vous permet de remplacer le caract\xe8re saisi par l'utilisateur dans un champ ou une zone saisissable par le premier caract\xe8re de la cha\xeene ",(0,r.jsx)(t.em,{children:"carFiltr\xe9"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Si vous passez une cha\xeene vide, le filtrage clavier en cours est annul\xe9."}),"\n",(0,r.jsxs)(t.p,{children:["Vous appelez g\xe9n\xe9ralement ",(0,r.jsx)(t.strong,{children:"FILTER KEYSTROKE"})," dans une m\xe9thode formulaire ou objet lorsque vous g\xe9rez l'\xe9v\xe9nement formulaire On Before Keystroke . Pour d\xe9tecter les \xe9v\xe9nements de frappe clavier, utilisez la commande ",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/form-event-code",children:"Form event code"}),". Pour r\xe9cup\xe9rer les caract\xe8res saisis au clavier, utilisez les fonctions ",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/keystroke",children:"Keystroke"})," ou ",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/get-edited-text",children:"Get edited text"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"IMPORTANT :"})," Si vous voulez effectuer des op\xe9rations \u201C\xe0 la vol\xe9e\u201D en fonction de la valeur courante de la zone saisissable en cours de modification ainsi que du caract\xe8re \xe0 saisir, rappelez-vous que le texte affich\xe9 \xe0 l'\xe9cran n'est pas encore la valeur du champ ou de la variable. La valeur saisie dans une variable ou un champ ne lui est affect\xe9e que lorsque la zone est valid\xe9e (lorsque l'utilisateur appuie sur la touche ",(0,r.jsx)(t.strong,{children:"Tabulation"}),", clique sur un bouton, etc.). En cons\xe9quence, pensez \xe0 placer les valeurs saisies dans une variable temporaire et \xe0 travailler avec celle-ci, puis \xe0 assigner cette variable \xe0 la zone de saisie (reportez-vous \xe0 l'exemple ci-dessous). Vous pouvez \xe9galement utiliser la fonction ",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/get-edited-text",children:"Get edited text"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Utilisez la commande ",(0,r.jsx)(t.strong,{children:"FILTER KEYSTROKE"})," dans les cas suivants :"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Pour effectuer un filtrage personnalis\xe9 des caract\xe8res,"}),"\n",(0,r.jsx)(t.li,{children:"Pour cr\xe9er un filtre de saisie non disponible en standard,"}),"\n",(0,r.jsx)(t.li,{children:"Pour impl\xe9menter des zones de recherche ou de pr\xe9-saisie dynamiques."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"ATTENTION :"})," si vous appelez la commande ",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/keystroke",children:"Keystroke"})," apr\xe8s avoir appel\xe9 ",(0,r.jsx)(t.strong,{children:"FILTER KEYSTROKE"}),", c'est le caract\xe8re pass\xe9 \xe0 cette commande qui sera retourn\xe9 et non le caract\xe8re r\xe9ellement saisi."]}),"\n",(0,r.jsx)(t.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(t.p,{children:"Avec le code suivant :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode objet de la zone saisissable monObjet\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0monObjet:=""\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Position(Keystroke;"0123456789")>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE("*")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,r.jsxs)(t.p,{children:["... tous les chiffres saisis dans la zone ",(0,r.jsx)(t.em,{children:"monObjet"})," seront transform\xe9s en ast\xe9risques."]}),"\n",(0,r.jsx)(t.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(t.p,{children:"Le code ci-dessous d\xe9finit le comportement d'une zone de saisie de mot de passe, dans laquelle les caract\xe8res saisis sont remplac\xe9s \xe0 l'\xe9cran par des caract\xe8res al\xe9atoires :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode objet de la zone saisissable vaMotsPasse\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vaMotsPasse:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vaMotPasseActuel:=""\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0G\xe9rer frappe clavier(->vaMotsPasse;->vaMotPasseR\xe9el)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Position(Keystroke;Char(Backspace key)+Char(Left arrow key)+\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Char(Right arrow key)+Char(Up arrow key)+\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Char(Down arrow key))=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE(Char(65+(Random%26)))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Une fois la zone valid\xe9e, vous r\xe9cup\xe9rez le mot de passe r\xe9ellement saisi par l'utilisateur dans la variable ",(0,r.jsx)(t.em,{children:"vaMotPasseR\xe9el"}),". La m\xe9thode G\xe9rer frappe clavier est list\xe9e dans l'exemple de la commande ",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/keystroke",children:"Keystroke"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsxs)(t.p,{children:["Vous disposez dans votre application de diverses zones de texte dans lesquelles vous pouvez saisir quelques phrases. Votre application comporte \xe9galement une table de glossaire contenant les termes les plus fr\xe9quemment utilis\xe9s dans votre base. Lors de l'\xe9dition de vos zones de texte, vous voulez pouvoir rapidement, \xe0 partir du glossaire, retrouver et ins\xe9rer des mots en fonction des caract\xe8res s\xe9lectionn\xe9s dans le texte. Pour cela, vous avez deux solutions : soit placer des boutons avec des touches associ\xe9es qui vont ex\xe9cuter l'op\xe9ration, soit intercepter les frappes clavier sp\xe9ciales pendant la saisie. L'exemple ci-dessous utilise la seconde solution, bas\xe9e sur la touche ",(0,r.jsx)(t.strong,{children:"Aide"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Comme d\xe9crit ci-dessus, lorsque vous \xe9ditez une zone de texte, la valeur du champ ou de la variable de texte ne sera r\xe9ellement modifi\xe9e que lorsque que vous l'aurez valid\xe9e. Pour retrouver et ins\xe9rer rapidement des entr\xe9es du glossaire dans une zone de texte alors qu'elle est en train d'\xeatre modifi\xe9e, vous devez donc cr\xe9er une seconde zone \"tampon\" pour y placer les valeurs saisies. Vous pouvez effectuer cette op\xe9ration \xe0 l'aide de la m\xe9thode projet d\xe9crite ci-dessous. Vous passez comme premiers param\xe8tres des pointeurs vers la zone de saisie et vers la variable, puis la cha\xeene de caract\xe8re \u201Cinterdits\u201D comme troisi\xe8me param\xe8tre. Peu importe comment l'entr\xe9e clavier sera trait\xe9e, la m\xe9thode retourne la valeur saisie originale. Les caract\xe8res \u201Cinterdits\u201D sont les caract\xe8res que vous ne voulez pas ins\xe9rer dans la zone saisissable et que vous voulez traiter en tant que caract\xe8res sp\xe9ciaux."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// Shadow keystroke project method\n\xa0\xa0// Shadow keystroke ( Pointer ; Pointer ; String ) -> String\n\xa0\xa0// Shadow keystroke ( -> srcArea ; -> curValue ; Filter ) -> Old keystroke\n#DECLARE ($srcArea : Pointer ; $curVal : Pointer ; $filter : Text) -> $old : Text\n\xa0var $vtNewValue : Text\n\xa0\xa0// Return the original keystroke\n\xa0$old:=Keystroke\n\xa0\xa0// Get the text selection range within the enterable area\n\xa0GET HIGHLIGHT($srcArea->;$vlStart;$vlEnd)\n\xa0\xa0// Start working with the current value\n\xa0$vtNewValue:=$curVal->\n\xa0\xa0// Depending on the key pressed or the character entered,\n\xa0\xa0// Perform the appropriate actions\n\xa0Case of\n\xa0\xa0// The Backspace (Delete) key has been pressed\n\xa0\xa0\xa0\xa0:(Character code($old)=Backspace)\n\xa0\xa0// Delete the selected characters or the character at the left of the text cursor\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNewValue:=Delete text($vtNewValue;$vlStart;$vlEnd)\n\xa0\xa0// An Arrow key has been pressed\n\xa0\xa0// Do nothing, but accept the keystroke\n\xa0\xa0\xa0\xa0:(Character code($old)=Left arrow key)\n\xa0\xa0\xa0\xa0:(Character code($old)=Right arrow key)\n\xa0\xa0\xa0\xa0:(Character code($old)=Up arrow key)\n\xa0\xa0\xa0\xa0:(Character code($old)=Down arrow key)\n\xa0\n\xa0\xa0// An acceptable character has been entered\n\xa0\xa0\xa0\xa0:(Position($old;$filter)=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNewValue:=Insert text($vtNewValue;$vlStart;$vlEnd;$0)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0// The character is not accepted\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE("")\n\xa0End case\n\xa0\xa0// Return the value for the next keystroke handling\n\xa0$curVal->:=$vtNewValue\n'})}),"\n",(0,r.jsx)(t.p,{children:"Cette m\xe9thode utilise les sous-m\xe9thodes suivantes :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0\xa0// Delete text project method\n\xa0\xa0// Delete text ( String ; Long ; Long ) -> String\n\xa0\xa0// Delete text ( -> Text ; SelStart ; SelEnd ) -> New text\n#DECLARE ($src : Text ; $start : Integer ; $end : Integer) -> $new : Text\xa0\n\xa0$new:=Substring($src;1;$start-1-Num($start=$end))+Substring($src;$end)\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0\xa0// Insert text project method\n\xa0\xa0// Insert text ( String ; Long ; Long ; String ) -> String\n\xa0\xa0// Insert text ( -> srcText ; SelStart ; SelEnd ; Text to insert ) -> New text\n#DECLARE ($src : Text ; $start : Integer ; $end : Integer ; $toInsert : Text) -> $new : Text\xa0\n\xa0$new:=$src\n\xa0If($start # $end)\n\xa0\xa0\xa0\xa0$new:=Substring($new;1;$start-1)+$toInsert+Substring($new;$end)\n\xa0Else\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($start<=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$new:=$toInsert+$new\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($start>Length($new))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$new:=$new+$toInsert\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$new:=Substring($new;1;$start-1)+$toInsert+Substring($new;$start)\n\xa0\xa0\xa0\xa0End case\n\xa0End if\n"})}),"\n",(0,r.jsx)(t.p,{children:"Une fois que vous avez ajout\xe9 ces m\xe9thodes projet \xe0 votre base, vous pouvez les utiliser de la mani\xe8re suivante :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// vsDescription enterable area object method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsDescription:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsShadowDescription:=""\n\xa0\xa0// Establish the list of the \u201Cforbidden\u201D characters to be treated as special keys\n\xa0\xa0// ( here, in this example, only the Help Key is filtered)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsSpecialKeys:=Char(HelpKey)\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsKey:=Shadow keystroke(->vsDescription;->vsShadowDescription;vsSpecialKeys)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Character code($vsKey)=Help key)\n\xa0\xa0// Do something when the Help key is pressed\n\xa0\xa0// Here, in this example, a Dictionary entry must be searched and inserted\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0LOOKUP DICTIONARY(->vsDescription;->vsShadowDescription)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n'})}),"\n",(0,r.jsx)(t.p,{children:"La m\xe9thode projet chercher_Glossaire est list\xe9e ci-dessous (le point principal est l'utilisation de la variable tampon pour r\xe9affecter la zone saisissable \xe0 modifier) :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// LOOKUP DICTIONARY project method\n\xa0\xa0// LOOKUP DICTIONARY ( Pointer ; Pointer )\n\xa0\xa0// LOOKUP DICTIONARY ( -> Enterable Area ; ->ShadowVariable )\n\xa0\n#DECLARE ($area : Pointer ; $shadow : Pointer)\n\xa0var $vlStart;$vlEnd : Integer\n\xa0\n\xa0\xa0// Get the text selection range within the enterable area\n\xa0GET HIGHLIGHT($area->;$vlStart;$vlEnd)\n\xa0\xa0// Get the selected text or the word on the left of the text cursor\n\xa0$vtHighlightedText:=Get highlighted text($shadow->;$vlStart;$vlEnd)\n\xa0\xa0// Is there something to look for?\n\xa0If($vtHighlightedText#"")\n\xa0\xa0// If the text selection was the text cursor,\n\xa0\xa0// the selection now starts at the word preceeding the text cursor\n\xa0\xa0\xa0\xa0If($vlStart=$vlEnd)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlStart:=$vlStart-Length($vtHighlightedText)\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Look for the first available dictionary entry\n\xa0\xa0\xa0\xa0QUERY([Dictionary];[Dictionary]Entry=$vtHighlightedText+"@")\n\xa0\xa0// Is there one?\n\xa0\xa0\xa0\xa0If(Records in selection([Dictionary])>0)\n\xa0\xa0// If so, insert it in the shadow text\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$shadow->:=Insert text($shadow->;$vlStart;$vlEnd;[Dictionary]Entry)\n\xa0\xa0// Copy the shadow text to the enterable being edited\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$area->:=$shadow->\n\xa0\xa0// Set the selection just after the insert dictionary entry\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlEnd:=$vlStart+Length([Dictionary]Entry)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0HIGHLIGHT TEXT(vsComments;$vlEnd;$vlEnd)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0// There is no corresponding entry in the Dictionary\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BEEP\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0// There is no highlighted text\n\xa0\xa0\xa0\xa0BEEP\n\xa0End if\n'})}),"\n",(0,r.jsx)(t.p,{children:"La m\xe9thode obtenirTexteSelectionne est la suivante :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// Get highlighted text project method\n\xa0\xa0// Get highlighted text ( String ; Long ; Long ) -> String\n\xa0\xa0// Get highlighted text ( Text ; SelStart ; SelEnd ) -> highlighted text\n#DECLARE ($text : Text ; $start : Integer ; $end : Integer) -> $highlight : Text\n\xa0If($start<$end)\n\xa0\xa0\xa0\xa0$highlight:=Substring($text;$start;$end-$start)\n\xa0Else\n\xa0\xa0\xa0\xa0$highlight:=""\n\xa0\xa0\xa0\xa0$start:=$start-1\n\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($start>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Position($text[[$start]];" \xa0,.!?:;()-_\u2013\u2014")=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$highlight:=$text[[$start]]+$highlight\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$start:=$start-1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$start:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Until($start=0)\n\xa0End if\n'})}),"\n",(0,r.jsx)(t.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/form-event-code",children:"Form event code"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/get-edited-text",children:"Get edited text"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/is-editing-text",children:"Is editing text"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/20-R8/commands/keystroke",children:"Keystroke"})]}),"\n",(0,r.jsx)(t.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(t.td,{children:"389"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var s=n(667294);let r={},a=s.createContext(r);function i(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);