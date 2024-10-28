"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31384],{115559:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(474848),l=t(28453);const i={id:"object-set-style-sheet",title:"OBJECT SET STYLE SHEET",slug:"/commands/object-set-style-sheet",displayed_sidebar:"docs"},r=void 0,o={id:"commands-legacy/object-set-style-sheet",title:"OBJECT SET STYLE SHEET",description:"OBJECT SET STYLE SHEET ( { ;} objet ; nomFeuilleStyle* )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-style-sheet.md",sourceDirName:"commands-legacy",slug:"/commands/object-set-style-sheet",permalink:"/docs/fr/commands/object-set-style-sheet",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-style-sheet.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-set-style-sheet",title:"OBJECT SET STYLE SHEET",slug:"/commands/object-set-style-sheet",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT SET SHORTCUT",permalink:"/docs/fr/commands/object-set-shortcut"},next:{title:"OBJECT SET SUBFORM",permalink:"/docs/fr/commands/object-set-subform"}},a={},d=[{value:"Description",id:"description",level:4},{value:"Note de compatibilit\xe9",id:"note-de-compatibilit\xe9",level:5},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const s={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"OBJECT SET STYLE SHEET"})," ( {* ;} ",(0,n.jsx)(s.em,{children:"objet"})," ; ",(0,n.jsx)(s.em,{children:"nomFeuilleStyle"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param\xe8tre"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"*"}),(0,n.jsx)(s.td,{children:"Op\xe9rateur"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsxs)(s.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,n.jsx)(s.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"objet"}),(0,n.jsx)(s.td,{children:"any"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsxs)(s.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,n.jsx)(s.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"nomFeuilleStyle"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Nom de la feuille de style"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,n.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["La commande ",(0,n.jsx)(s.strong,{children:"OBJECT SET STYLE SHEET"})," vous permet de modifier, pour le process courant, la feuille de style associ\xe9e \xe0 l\u2019objet ou aux objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,n.jsx)(s.em,{children:"objet"})," et ",(0,n.jsx)(s.em,{children:"*"}),". Une feuille de style modifie la police, la taille de police et (hormis pour les feuilles de style automatique) le style de police."]}),"\n",(0,n.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,n.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,n.jsx)(s.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,n.jsx)(s.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,n.jsxs)(s.p,{children:["Passez dans le param\xe8tre ",(0,n.jsx)(s.em,{children:"nomFeuilleStyle"})," le nom de la feuille de style \xe0 appliquer \xe0 l\u2019",(0,n.jsx)(s.em,{children:"objet"}),". Vous pouvez \xe9galement passer soit :"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["un nom de feuille de style existante (si la feuille de style n\u2019existe pas, une erreur est retourn\xe9e, que vous pouvez intercepter l\u2019aide d\u2019une m\xe9thode install\xe9e par la commande ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"),"]}),"\n",(0,n.jsxs)(s.li,{children:['une cha\xeene vide ("") pour ne pas appliquer de feuille de style \xe0 l\u2019',(0,n.jsx)(s.em,{children:"objet"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:['une des constantes suivantes du th\xe8me "',(0,n.jsx)(s.em,{children:"Styles de caract\xe8res"}),'" pour appliquer une feuille de style automatique :',(0,n.jsx)(s.br,{}),"\n| Constante                         | Type   | Valeur                              | Comment                                                                                                                                   |",(0,n.jsx)(s.br,{}),"\n| --------------------------------- | ------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |",(0,n.jsx)(s.br,{}),"\n| Automatic style sheet             | Cha\xeene | __automatic__                   | Utilis\xe9e par d\xe9faut pour tous les objets                                                                                                  |",(0,n.jsx)(s.br,{}),"\n| Automatic style sheet_additional | Cha\xeene | __automatic_additional_text__ | Prise en charge par les textes statiques, champs et variables uniquement. Utilis\xe9e pour du texte additionnel dans les bo\xeetes de dialogue. |",(0,n.jsx)(s.br,{}),"\n| Automatic style sheet_main       | Cha\xeene | __automatic_main_text__       | Prise en charge par les textes statiques, champs et variables uniquement. Utilis\xe9e pour le texte principal des bo\xeetes de dialogue.        |"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Si une feuille de style avait d\xe9j\xe0 \xe9t\xe9 associ\xe9e \xe0 l\u2019objet en mode D\xe9veloppement, l\u2019appel de cette commande la remplace pour le process courant."}),"\n",(0,n.jsxs)(s.p,{children:["Si vous utilisez au cours de la session les commandes ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/st-set-attributes",children:"ST SET ATTRIBUTES"}),", ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/st-set-text",children:"ST SET TEXT"}),", ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/object-set-font",children:"OBJECT SET FONT"})," ou ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/object-set-font-size",children:"OBJECT SET FONT SIZE"})," sur l\u2019",(0,n.jsx)(s.em,{children:"objet"})," afin de modifier sa police ou sa taille de police, la r\xe9f\xe9rence \xe0 la feuille de style est automatiquement supprim\xe9e de l\u2019objet -- m\xeame si vous affectez des attributs identiques \xe0 ceux de la feuille de style. En revanche, si vous modifiez le style (gras, italique...), par exemple avec les commandes ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/st-set-attributes",children:"ST SET ATTRIBUTES"})," ou ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/object-set-font-style",children:"OBJECT SET FONT STYLE"}),", ces nouvelles propri\xe9t\xe9s s\u2019ajoutent \xe0 la feuille de style pour la dur\xe9e de la session."]}),"\n",(0,n.jsx)(s.h5,{id:"note-de-compatibilit\xe9",children:"Note de compatibilit\xe9"}),"\n",(0,n.jsxs)(s.p,{children:["Dans ",(0,n.jsx)(s.strong,{children:"l'architecture Projet"}),", seules les trois feuilles de style automatiques sont prises en charge par cette commande."]}),"\n",(0,n.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/fr/commands/get-style-sheet-info",children:"GET STYLE SHEET INFO"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/fr/commands/list-of-style-sheets",children:"LIST OF STYLE SHEETS"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/fr/commands/object-get-style-sheet",children:"OBJECT Get style sheet"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.em,{children:"Styles de caract\xe8res"})]})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(296540);const l={},i=n.createContext(l);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);