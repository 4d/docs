"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68670"],{662531:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>t});var l=JSON.parse('{"id":"Events/onAfterEdit","title":"On After Edit","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                              | D\xe9finition                                                            |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Events/onAfterEdit.md","sourceDirName":"Events","slug":"/Events/onAfterEdit","permalink":"/docs/fr/20-R6/Events/onAfterEdit","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterEdit.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"onAfterEdit","title":"On After Edit"},"sidebar":"docs","previous":{"title":"Sur activation","permalink":"/docs/fr/20-R6/Events/onActivate"},"next":{"title":"On After Keystroke","permalink":"/docs/fr/20-R6/Events/onAfterKeystroke"}}'),i=s("785893"),r=s("250065");let t={id:"onAfterEdit",title:"On After Edit"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Cas g\xe9n\xe9ral",id:"cas-g\xe9n\xe9ral",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"action = editChange",id:"action--editchange",level:4},{value:"action = valueChanged",id:"action--valuechanged",level:4},{value:"action = DragDropBlock",id:"action--dragdropblock",level:4},{value:"action = DragFillBlock",id:"action--dragfillblock",level:4},{value:"action = formulaChanged",id:"action--formulachanged",level:4},{value:"action = clipboardPasted",id:"action--clipboardpasted",level:4},{value:"Exemple",id:"exemple",level:4}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Code"}),(0,i.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,i.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"45"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20-R6/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R6/FormObjects/writeProAreaOverview",children:"Zone 4D Write Pro"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R6/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R6/FormObjects/inputOverview",children:"Input"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R6/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R6/FormObjects/listboxOverview",children:"List Box"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R6/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,i.jsx)(n.td,{children:"Le contenu de l'objet saisissable qui a le focus vient d'\xeatre modifi\xe9"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h3,{id:"cas-g\xe9n\xe9ral",children:"Cas g\xe9n\xe9ral"}),"\n",(0,i.jsx)(n.p,{children:"Cet \xe9v\xe9nement peut \xeatre utilis\xe9 pour filtrer la saisie de donn\xe9es dans les objets saisissables au clavier au niveau le plus bas."}),"\n",(0,i.jsx)(n.p,{children:"Lorsqu'il est utilis\xe9, cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 apr\xe8s chaque modification apport\xe9e au contenu d'un objet saisissable, quelle que soit l'action qui a provoqu\xe9 la modification, c'est-\xe0-dire :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Actions d'\xe9dition standard qui modifient le contenu comme les actions coller, couper, supprimer ou annuler;"}),"\n",(0,i.jsx)(n.li,{children:"D\xe9poser une valeur (action similaire \xe0 coller);"}),"\n",(0,i.jsxs)(n.li,{children:["Toute saisie au clavier effectu\xe9e par l'utilisateur ; dans ce cas, l'\xe9v\xe9nement ",(0,i.jsx)(n.code,{children:"On After Edit"})," est g\xe9n\xe9r\xe9 apr\xe8s les \xe9v\xe9nements ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R6/Events/onBeforeKeystroke",children:(0,i.jsx)(n.code,{children:"On Before Keystroke"})})," et ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R6/Events/onAfterKeystroke",children:(0,i.jsx)(n.code,{children:"On After Keystroke"})}),", s'ils sont utilis\xe9s."]}),"\n",(0,i.jsxs)(n.li,{children:["Toute modification apport\xe9e \xe0 l'aide d'une commande de langage qui simule une action de l'utilisateur (c'est-\xe0-dire ",(0,i.jsx)(n.code,{children:"POST KEY"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Dans l'\xe9v\xe9nement ",(0,i.jsx)(n.code,{children:"On After Edit"}),", les donn\xe9es textuelles entr\xe9es sont renvoy\xe9es par la commande ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page655.html",children:(0,i.jsx)(n.code,{children:"Get edited text"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,i.jsxs)(n.p,{children:["L'objet retourn\xe9 par la commande ",(0,i.jsx)(n.code,{children:"FORM Event"})," contient :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"code"}),(0,i.jsx)(n.td,{children:"entier long"}),(0,i.jsx)(n.td,{children:"On After Edit"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'"On After Edit"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objectName"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Nom de la zone 4D View Pro"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheetName"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Nom de la feuille de l'\xe9v\xe9nement"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"action"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'"editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted"'})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["En fonction de la valeur de la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:"action"}),", l'",(0,i.jsx)(n.a,{href:"/docs/fr/20-R6/Events/overview#event-object",children:"objet event"})," contiendra des propri\xe9t\xe9s suppl\xe9mentaires."]}),"\n",(0,i.jsx)(n.h4,{id:"action--editchange",children:"action = editChange"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"range"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Plage de cellule"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"editingText"}),(0,i.jsx)(n.td,{children:"variant"}),(0,i.jsx)(n.td,{children:"La valeur provenant de l'\xe9diteur courant"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"action--valuechanged",children:"action = valueChanged"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"range"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Plage de cellule"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"oldValue"}),(0,i.jsx)(n.td,{children:"variant"}),(0,i.jsx)(n.td,{children:"Valeur de la cellule avant la modification"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"newValue"}),(0,i.jsx)(n.td,{children:"variant"}),(0,i.jsx)(n.td,{children:"Valeur de la cellule apr\xe8s la modification"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"action--dragdropblock",children:"action = DragDropBlock"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fromRange"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Plage de cellule source (qui est gliss\xe9e)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"toRange"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Plage de cellule de destination (qui est d\xe9pos\xe9e)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"copy"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"Indique si la plage source est copi\xe9e ou non"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"insert"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"Indique si la plage source est ins\xe9r\xe9e ou non"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"action--dragfillblock",children:"action = DragFillBlock"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fillRange"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Plage utilis\xe9e pour le remplissage"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"autoFillType"}),(0,i.jsx)(n.td,{children:"entier long"}),(0,i.jsxs)(n.td,{children:["Valeur utilis\xe9e pour le remplissage.",(0,i.jsx)(n.li,{children:"0 : Les cellules sont remplies avec toutes les donn\xe9es (valeurs, mise en forme et formules)"}),(0,i.jsx)(n.li,{children:"1 : Les cellules sont remplies avec des donn\xe9es automatiquement s\xe9quentielles"}),(0,i.jsx)(n.li,{children:"2 : Les cellules sont remplies avec seulement la mise en forme"}),(0,i.jsx)(n.li,{children:"3 : Les cellules sont remplies avec les valeurs mais sans la mise en forme"}),(0,i.jsx)(n.li,{children:"4 : Les valeurs sont supprim\xe9es des cellules"}),(0,i.jsx)(n.li,{children:"5 : Les cellules sont remplies automatiquement"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fillDirection"}),(0,i.jsx)(n.td,{children:"entier long"}),(0,i.jsxs)(n.td,{children:["Direction du remplissage.",(0,i.jsx)(n.li,{children:"0 : Les cellules \xe0 gauche sont remplies"}),(0,i.jsx)(n.li,{children:"1 : Les cellules \xe0 droite sont remplies"}),(0,i.jsx)(n.li,{children:"2 : Les cellules au-dessus sont remplies"}),(0,i.jsx)(n.li,{children:"3 : Les cellules en dessous sont remplies"})]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"action--formulachanged",children:"action = formulaChanged"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"range"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Plage de cellule"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"formula"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"La formule saisie"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"action--clipboardpasted",children:"action = clipboardPasted"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"range"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Plage de cellule"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pasteOption"}),(0,i.jsx)(n.td,{children:"entier long"}),(0,i.jsxs)(n.td,{children:["Sp\xe9cifie ce qui est coll\xe9 depuis le presse-papiers :",(0,i.jsx)(n.li,{children:"0: Tout est coll\xe9 (valeurs, formatage, et formules)"}),(0,i.jsx)(n.li,{children:" 1: Seules les valeurs sont coll\xe9es"}),(0,i.jsx)(n.li,{children:"2: Seul le formatage est coll\xe9"}),(0,i.jsx)(n.li,{children:"3: Seules les formules sont coll\xe9es"}),(0,i.jsx)(n.li,{children:"4: Les valeurs et le formatage sont coll\xe9s (pas les formules)"}),(0,i.jsx)(n.li,{children:"5: Les formules et le formatage sont coll\xe9s (pas les valeurs)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pasteData"}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsxs)(n.td,{children:["Les donn\xe9es du presse-papiers \xe0 coller",(0,i.jsx)(n.li,{children:'"text" (texte) : Le texte du presse-papiers'}),(0,i.jsx)(n.li,{children:'"html" (texte) : Le HTML du presse-papiers'})]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(n.p,{children:["Voici un exemple qui g\xe8re l'\xe9v\xe9nement ",(0,i.jsx)(n.code,{children:"On After Edit"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On After Edit)\n    If(FORM Event.action="valueChanged")\n       ALERT("WARNING: You are currently changing the value\\  \n       from "+String(FORM Event.oldValue)+\\  \n       " to "+String(FORM Event.newValue)+"!")\n    End if\n End if\n'})}),"\n",(0,i.jsx)(n.p,{children:"L'exemple ci-dessus pourrait g\xe9n\xe9rer un objet \xe9v\xe9nement tel que celui-ci :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n\n"code":45;\n"description":"On After Edit";\n"objectName":"ViewProArea"\n"sheetname":"Sheet1";\n"action":"valueChanged";\n"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};\n"oldValue":"The quick brown fox";\n"newValue":"jumped over the lazy dog";\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return t}});var l=s(667294);let i={},r=l.createContext(i);function t(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);