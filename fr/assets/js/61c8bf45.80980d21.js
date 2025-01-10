"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94357"],{531153:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"Events/onAfterEdit","title":"On After Edit","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                   | D\xe9finition                                                            |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/onAfterEdit.md","sourceDirName":"Events","slug":"/Events/onAfterEdit","permalink":"/docs/fr/19/Events/onAfterEdit","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterEdit.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onAfterEdit","title":"On After Edit"},"sidebar":"docs","previous":{"title":"On Activate","permalink":"/docs/fr/19/Events/onActivate"},"next":{"title":"On After Keystroke","permalink":"/docs/fr/19/Events/onAfterKeystroke"}}'),l=t("785893"),r=t("250065");let s={id:"onAfterEdit",title:"On After Edit"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Cas g\xe9n\xe9ral",id:"cas-g\xe9n\xe9ral",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"action = editChange",id:"action--editchange",level:4},{value:"action = valueChanged",id:"action--valuechanged",level:4},{value:"action = DragDropBlock",id:"action--dragdropblock",level:4},{value:"action = DragFillBlock",id:"action--dragfillblock",level:4},{value:"action = formulaChanged",id:"action--formulachanged",level:4},{value:"action = clipboardPasted",id:"action--clipboardpasted",level:4},{value:"Exemple",id:"exemple",level:4}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Code"}),(0,l.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,l.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"45"}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.a,{href:"FormObjects/viewProArea_overview",children:"Zone 4D View Pro"})," - ",(0,l.jsx)(n.a,{href:"FormObjects/writeProArea_overview",children:"Zone 4D Write Pro"})," - ",(0,l.jsx)(n.a,{href:"/docs/fr/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - Formulaire - ",(0,l.jsx)(n.a,{href:"/docs/fr/19/FormObjects/inputOverview",children:"Zone de saisie"})," - ",(0,l.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listOverview",children:"Liste hi\xe9rarchique"})," - ",(0,l.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,l.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview#list-box-columns",children:"Colonne List Box"})]}),(0,l.jsx)(n.td,{children:"Le contenu de l'objet saisissable qui a le focus vient d'\xeatre modifi\xe9"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.h3,{id:"cas-g\xe9n\xe9ral",children:"Cas g\xe9n\xe9ral"}),"\n",(0,l.jsx)(n.p,{children:"Cet \xe9v\xe9nement peut \xeatre utilis\xe9 pour filtrer la saisie de donn\xe9es dans les objets saisissables au clavier au niveau le plus bas."}),"\n",(0,l.jsx)(n.p,{children:"Lorsqu'il est utilis\xe9, cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 apr\xe8s chaque modification apport\xe9e au contenu d'un objet saisissable, quelle que soit l'action qui a provoqu\xe9 la modification, c'est-\xe0-dire :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Actions d'\xe9dition standard qui modifient le contenu comme les actions coller, couper, supprimer ou annuler;"}),"\n",(0,l.jsx)(n.li,{children:"D\xe9poser une valeur (action similaire \xe0 coller);"}),"\n",(0,l.jsxs)(n.li,{children:["Toute entr\xe9e au clavier effectu\xe9e par l'utilisateur; dans ce cas, l'\xe9v\xe9nement ",(0,l.jsx)(n.code,{children:"On After Edit"})," est g\xe9n\xe9r\xe9 apr\xe8s les \xe9v\xe9nements ",(0,l.jsx)(n.a,{href:"/docs/fr/19/Events/onBeforeKeystroke",children:(0,l.jsx)(n.code,{children:"On Before Keystroke"})})," et ",(0,l.jsx)(n.a,{href:"/docs/fr/19/Events/onAfterKeystroke",children:(0,l.jsx)(n.code,{children:"On After Keystroke"})}),", s'ils sont utilis\xe9s."]}),"\n",(0,l.jsxs)(n.li,{children:["Toute modification apport\xe9e \xe0 l'aide d'une commande de langage qui simule une action de l'utilisateur (c'est-\xe0-dire ",(0,l.jsx)(n.code,{children:"POST KEY"}),")."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Dans le cadre de l'\xe9v\xe9nement ",(0,l.jsx)(n.code,{children:"On After Edit"}),", les donn\xe9es textuelles en cours de saisie sont retourn\xe9es par la commande ",(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page655.html",children:(0,l.jsx)(n.code,{children:"Get edited text"})}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,l.jsxs)(n.p,{children:["L'objet retourn\xe9 par la commande ",(0,l.jsx)(n.code,{children:"FORM Event"})," contient :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"code"}),(0,l.jsx)(n.td,{children:"entier long"}),(0,l.jsx)(n.td,{children:"On After Edit"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Description"}),(0,l.jsx)(n.td,{children:"text"}),(0,l.jsx)(n.td,{children:'"On After Edit"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"objectName"}),(0,l.jsx)(n.td,{children:"text"}),(0,l.jsx)(n.td,{children:"Nom de la zone 4D View Pro"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"sheetName"}),(0,l.jsx)(n.td,{children:"text"}),(0,l.jsx)(n.td,{children:"Nom de la feuille de l'\xe9v\xe9nement"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"action"}),(0,l.jsx)(n.td,{children:"text"}),(0,l.jsx)(n.td,{children:'"editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted"'})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["En fonction de la valeur de la propri\xe9t\xe9 ",(0,l.jsx)(n.code,{children:"action"}),", l'",(0,l.jsx)(n.a,{href:"/docs/fr/19/Events/overview#event-object",children:"objet event"})," contiendra des propri\xe9t\xe9s suppl\xe9mentaires."]}),"\n",(0,l.jsx)(n.h4,{id:"action--editchange",children:"action = editChange"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"range"}),(0,l.jsx)(n.td,{children:"object"}),(0,l.jsx)(n.td,{children:"Plage de cellule"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"editingText"}),(0,l.jsx)(n.td,{children:"variant"}),(0,l.jsx)(n.td,{children:"La valeur provenant de l'\xe9diteur courant"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"action--valuechanged",children:"action = valueChanged"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"range"}),(0,l.jsx)(n.td,{children:"object"}),(0,l.jsx)(n.td,{children:"Plage de cellule"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"oldValue"}),(0,l.jsx)(n.td,{children:"variant"}),(0,l.jsx)(n.td,{children:"Valeur de la cellule avant la modification"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"newValue"}),(0,l.jsx)(n.td,{children:"variant"}),(0,l.jsx)(n.td,{children:"Valeur de la cellule apr\xe8s la modification"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"action--dragdropblock",children:"action = DragDropBlock"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fromRange"}),(0,l.jsx)(n.td,{children:"object"}),(0,l.jsx)(n.td,{children:"Plage de cellule source (qui est gliss\xe9e)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"toRange"}),(0,l.jsx)(n.td,{children:"object"}),(0,l.jsx)(n.td,{children:"Plage de cellule de destination (qui est d\xe9pos\xe9e)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"copy"}),(0,l.jsx)(n.td,{children:"boolean"}),(0,l.jsx)(n.td,{children:"Indique si la plage source est copi\xe9e ou non"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"insert"}),(0,l.jsx)(n.td,{children:"boolean"}),(0,l.jsx)(n.td,{children:"Indique si la plage source est ins\xe9r\xe9e ou non"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"action--dragfillblock",children:"action = DragFillBlock"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fillRange"}),(0,l.jsx)(n.td,{children:"object"}),(0,l.jsx)(n.td,{children:"Plage utilis\xe9e pour le remplissage"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"autoFillType"}),(0,l.jsx)(n.td,{children:"longint"}),(0,l.jsxs)(n.td,{children:["Valeur utilis\xe9e pour le remplissage.",(0,l.jsx)(n.li,{children:"0 : les cellules contiennent toutes les donn\xe9es (valeurs, formatage et formules)"}),(0,l.jsx)(n.li,{children:"1 : les cellules contiennent des donn\xe9es automatiquement s\xe9quentielles"}),(0,l.jsx)(n.li,{children:"2 : les cellules contiennent uniquement le formatage"}),(0,l.jsx)(n.li,{children:"3 : les cellules contiennent des valeurs mais pas de formatage"}),(0,l.jsx)(n.li,{children:"4 : les valeurs des cellules sont supprim\xe9es"}),(0,l.jsx)(n.li,{children:"5 : Les cellules sont remplies automatiquement"})]})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"action--formulachanged",children:"action = formulaChanged"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"range"}),(0,l.jsx)(n.td,{children:"object"}),(0,l.jsx)(n.td,{children:"Plage de cellule"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"formula"}),(0,l.jsx)(n.td,{children:"text"}),(0,l.jsx)(n.td,{children:"La formule saisie"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"action--clipboardpasted",children:"action = clipboardPasted"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"range"}),(0,l.jsx)(n.td,{children:"object"}),(0,l.jsx)(n.td,{children:"Plage de cellule"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"pasteOption"}),(0,l.jsx)(n.td,{children:"entier long"}),(0,l.jsxs)(n.td,{children:["Indique ce qui est coll\xe9 \xe0 partir du presse-papiers :",(0,l.jsx)(n.li,{children:"0 : tout est coll\xe9 (valeurs, mise en forme et formules)"}),(0,l.jsx)(n.li,{children:"1 : seules les valeurs sont coll\xe9es"}),(0,l.jsx)(n.li,{children:"2 : seul le formatage est coll\xe9"}),(0,l.jsx)(n.li,{children:"3 : seules les formules sont coll\xe9es"}),(0,l.jsx)(n.li,{children:"4 : les valeurs et la mise en forme sont coll\xe9es (pas les formules)"}),(0,l.jsx)(n.li,{children:"5 : Les formules et la mise en forme sont coll\xe9es (pas les valeurs)"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"pasteData"}),(0,l.jsx)(n.td,{children:"object"}),(0,l.jsxs)(n.td,{children:["Les donn\xe9es du presse-papiers \xe0 coller",(0,l.jsx)(n.li,{children:'"text" (texte) : le texte du presse-papiers'}),(0,l.jsx)(n.li,{children:'"html" (texte) : le code HTML du presse-papiers'})]})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsxs)(n.p,{children:["Voici un exemple qui g\xe8re l'\xe9v\xe9nement ",(0,l.jsx)(n.code,{children:"On After Edit"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On After Edit)\n    If(FORM Event.action="valueChanged")\n       ALERT("WARNING: You are currently changing the value\\  \n       from "+String(FORM Event.oldValue)+\\  \n       " to "+String(FORM Event.newValue)+"!")\n    End if\n End if\n    End if\n End if\n'})}),"\n",(0,l.jsx)(n.p,{children:"L'exemple ci-dessus pourrait g\xe9n\xe9rer un objet \xe9v\xe9nement tel que celui-ci :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n\n"code":45;\n"description":"On After Edit";\n"objectName":"ViewProArea"\n"sheetname":"Sheet1";\n"action":"valueChanged";\n"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};\n"oldValue":"The quick brown fox";\n"newValue":"jumped over the lazy dog";\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var i=t(667294);let l={},r=i.createContext(l);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);