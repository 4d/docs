"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80995"],{925230:function(e,A,n){n.r(A),n.d(A,{default:()=>c,frontMatter:()=>t,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/call-form","title":"CALL FORM","description":"CALL FORM ( fen\xeatre ; formule {; param}{; param2 ; ... ; paramN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/call-form.md","sourceDirName":"commands-legacy","slug":"/commands/call-form","permalink":"/docs/fr/commands/call-form","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcall-form.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"call-form","title":"CALL FORM","slug":"/commands/call-form","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Before","permalink":"/docs/fr/commands/before"},"next":{"title":"CALL SUBFORM CONTAINER","permalink":"/docs/fr/commands/call-subform-container"}}'),r=n("785893"),i=n("250065");let t={id:"call-form",title:"CALL FORM",slug:"/commands/call-form",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function d(e){let A={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(A.p,{children:[(0,r.jsx)(A.strong,{children:"CALL FORM"})," ( ",(0,r.jsx)(A.em,{children:"fen\xeatre"})," ; ",(0,r.jsx)(A.em,{children:"formule"})," {; ",(0,r.jsx)(A.em,{children:"param"}),"}{; ",(0,r.jsx)(A.em,{children:"param2"})," ; ... ; ",(0,r.jsx)(A.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(A.table,{children:[(0,r.jsx)(A.thead,{children:(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.th,{children:"Param\xe8tre"}),(0,r.jsx)(A.th,{children:"Type"}),(0,r.jsx)(A.th,{}),(0,r.jsx)(A.th,{children:"Description"})]})}),(0,r.jsxs)(A.tbody,{children:[(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"fen\xeatre"}),(0,r.jsx)(A.td,{children:"Integer"}),(0,r.jsx)(A.td,{children:"\u2192"}),(0,r.jsx)(A.td,{children:"Num\xe9ro de r\xe9f\xe9rence de la fen\xeatre"})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"formule"}),(0,r.jsx)(A.td,{children:"Object, Text"}),(0,r.jsx)(A.td,{children:"\u2192"}),(0,r.jsx)(A.td,{children:"Objet Formula ou Nom de la m\xe9thode projet"})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"param"}),(0,r.jsx)(A.td,{children:"Expression"}),(0,r.jsx)(A.td,{children:"\u2192"}),(0,r.jsx)(A.td,{children:"Param\xe8tre(s) pass\xe9(s) \xe0 la m\xe9thode"})]})]})]}),"\n",(0,r.jsx)(A.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,r.jsxs)(A.p,{children:["La commande ",(0,r.jsx)(A.strong,{children:"CALL FORM"})," ex\xe9cute le code 4D d\xe9sign\xe9 dans formule avec un ou plusieurs ",(0,r.jsx)(A.em,{children:"param"}),"(s) optionnel(s) dans le contexte d'un formulaire affich\xe9 dans la ",(0,r.jsx)(A.em,{children:"fen\xeatre"}),", ind\xe9pendamment du process auquel appartient la fen\xeatre."]}),"\n",(0,r.jsxs)(A.p,{children:["Tout comme dans la communication interprocess bas\xe9e sur les workers (voir ",(0,r.jsx)(A.em,{children:"A propos des workers"}),"), une bo\xeete aux lettres est associ\xe9e \xe0 chaque fen\xeatre et peut \xeatre utilis\xe9e lorsque la fen\xeatre affiche un formulaire (apr\xe8s l'\xe9v\xe9nement On Load). ",(0,r.jsx)(A.strong,{children:"CALL FORM"})," encapsule la formule et ses arguments dans un message envoy\xe9 dans la bo\xeete aux lettres de la fen\xeatre. Le formulaire ex\xe9cute alors le message dans son propre process. Le process appelant peut \xeatre coop\xe9ratif ou pr\xe9emptif, par cons\xe9quent cette fonctionnalit\xe9 permet \xe0 un process pr\xe9emptif d'\xe9changer des informations avec des formulaires."]}),"\n",(0,r.jsxs)(A.p,{children:["Dans ",(0,r.jsx)(A.em,{children:"fen\xeatre"}),", passez le num\xe9ro de r\xe9f\xe9rence de la fen\xeatre affichant le formulaire appel\xe9."]}),"\n",(0,r.jsxs)(A.p,{children:["Dans ",(0,r.jsx)(A.em,{children:"formule"}),", vous d\xe9signez le code 4D qui doit \xeatre ex\xe9cut\xe9 dans le contexte du process parent de la ",(0,r.jsx)(A.em,{children:"fen\xeatre"}),". Vous pousser passer soit :"]}),"\n",(0,r.jsxs)(A.ul,{children:["\n",(0,r.jsxs)(A.li,{children:["un objet ",(0,r.jsx)(A.strong,{children:"formula"})," (voir ",(0,r.jsx)(A.em,{children:"Objets Formula"}),"). Les objets formula peuvent encapsuler toute expression ex\xe9cutable, y compris les fonctions et les m\xe9thodes projet ;"]}),"\n",(0,r.jsxs)(A.li,{children:["une ",(0,r.jsx)(A.strong,{children:"cha\xeene"})," contenant le nom d'une m\xe9thode projet."]}),"\n"]}),"\n",(0,r.jsxs)(A.p,{children:["Vous pouvez aussi passer des param\xe8tres \xe0 la formule en utilisant un ou plusieurs param\xe8tres ",(0,r.jsx)(A.em,{children:"param"}),". Vous pouvez utiliser des ",(0,r.jsx)(A.em,{children:"param\xe8tres s\xe9quentiels"})," ou, si l'expression de la formule est une fonction ou une m\xe9thode projet, des ",(0,r.jsx)(A.em,{children:"param\xe8tres nomm\xe9s"}),". Lors de l'ex\xe9cution dans le contexte du formulaire, la formule du process re\xe7oit les param\xe8tres nomm\xe9s ou bien les valeurs des param\xe8tres dans ",(0,r.jsx)(A.em,{children:"$1"}),", ",(0,r.jsx)(A.em,{children:"$2"}),", et ainsi de suite. N'oubliez pas que des tableaux ne peuvent pas \xeatre pass\xe9s en param\xe8tre. En outre, dans le contexte de la commande ",(0,r.jsx)(A.strong,{children:"CALL FORM"}),", les points suivants doivent \xeatre pris en compte :"]}),"\n",(0,r.jsxs)(A.ul,{children:["\n",(0,r.jsx)(A.li,{children:"Les pointeurs sur les tables et les champs sont autoris\xe9s."}),"\n",(0,r.jsx)(A.li,{children:"Les pointeurs sur les variables, en particulier les variables locales ou process, ne sont pas recommand\xe9s car ces variables peuvent \xeatre ind\xe9finies au moment o\xf9 la m\xe9thode du process tente d'y acc\xe9der."}),"\n",(0,r.jsxs)(A.li,{children:["Si vous passez un param\xe8tre de type Objet ou Collection, 4D cr\xe9e une copie de l'objet ou de la collection dans le process de destination si le formulaire est dans un process diff\xe9rent de celui appelant la commande ",(0,r.jsx)(A.strong,{children:"CALL FORM"}),"."]}),"\n"]}),"\n",(0,r.jsx)(A.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(A.p,{children:["Vous pouvez utiliser la commande ",(0,r.jsx)(A.strong,{children:"CALL FORM"})," pour passer des param\xe8tres personnalis\xe9s \xe0 un formulaire, tels que des valeurs de configuration par exemple, sans avoir \xe0 utiliser de variables process :"]}),"\n",(0,r.jsx)(A.pre,{children:(0,r.jsx)(A.code,{className:"language-4d",children:'\xa0$win:=Cr\xe9er fen\xeatre formulaire("form")\n\xa0CALL FORM($win;Formula(configure);param1;param2)\n\xa0DIALOG("form")\n'})}),"\n",(0,r.jsx)(A.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(A.p,{children:"Vous voulez ouvrir deux fen\xeatres de dialogue \xe0 partir d'un m\xeame formulaire, mais avec des couleurs de fonds diff\xe9rentes et des messages diff\xe9rents. Vous souhaitez \xe9galement envoyer des messages par la suite et les afficher dans chaque fen\xeatre de dialogue."}),"\n",(0,r.jsx)(A.p,{children:"Dans le formulaire principal, un bouton ouvre les deux dialogues :"}),"\n",(0,r.jsx)(A.pre,{children:(0,r.jsx)(A.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode objet pour cr\xe9er les formulaires\n\xa0\xa0//Premi\xe8re fen\xeatre\n\xa0formRef1:=Open form window("FormMessage";Palette form window;On the left)\n\xa0SET WINDOW TITLE("MyForm1";formRef1)\n\xa0DIALOG("FormMessage";*)\n\xa0SHOW WINDOW(formRef1)\n\xa0\n\xa0\xa0//Seconde fen\xeatre\n\xa0formRef2:=Open form window("FormMessage";Palette form window;On the left+500)\n\xa0SET WINDOW TITLE("MyForm2";formRef2)\n\xa0DIALOG("FormMessage";*)\n\xa0SHOW WINDOW(formRef2)\n\xa0\n\xa0\xa0//Envoi des couleurs\n\xa0CALL FORM(formRef1;"doSetColor";0x00E6F2FF)\n\xa0CALL FORM(formRef2;"doSetColor";0x00F2E6FF)\n\xa0\xa0//Cr\xe9ation des messages\n\xa0CALL FORM(formRef1;"doAddMessage";Current process name;"Hello Form 1")\n\xa0CALL FORM(formRef2;"doAddMessage";Current process name;"Hello Form 2")\n'})}),"\n",(0,r.jsxs)(A.p,{children:["La m\xe9thode ",(0,r.jsx)(A.em,{children:"doAddMessage"}),' ajoute simplement une ligne dans la list box du formulaire "FormMessage" :']}),"\n",(0,r.jsx)(A.pre,{children:(0,r.jsx)(A.code,{className:"language-4d",children:'\xa0var $1 : Text\xa0//Origine du message\n\xa0var $2 : Text\xa0//Message \xe0 afficher\n\xa0\xa0//R\xe9cup\xe8re le message contenu dans $2 et l\'envoie dans la list box\n\xa0$p:=OBJECT Get pointer(Object named;"Column1")\n\xa0INSERT IN ARRAY($p->;1)\n\xa0$p->{1}:=$1+" sends "+$2\n'})}),"\n",(0,r.jsx)(A.p,{children:"A l'utilisation, vous obtenez le r\xe9sultat suivant :"}),"\n",(0,r.jsx)(A.p,{children:(0,r.jsx)(A.img,{src:n(434198).Z+"",width:"728",height:"339"})}),"\n",(0,r.jsxs)(A.p,{children:["Vous pouvez alors ajouter d'autres messages en ex\xe9cutant \xe0 nouveau la commande ",(0,r.jsx)(A.strong,{children:"CALL FORM"})," :"]}),"\n",(0,r.jsx)(A.pre,{children:(0,r.jsx)(A.code,{className:"language-4d",children:'\xa0CALL FORM(formRef1;"doAddMessage";Current process name;"Hello 2 Form 1")\n\xa0CALL FORM(formRef2;"doAddMessage";Current process name;"Hello 2 Form 2")\n'})}),"\n",(0,r.jsx)(A.p,{children:(0,r.jsx)(A.img,{src:n(153179).Z+"",width:"730",height:"343"})}),"\n",(0,r.jsx)(A.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(A.p,{children:[(0,r.jsx)(A.a,{href:"/docs/fr/commands/call-worker",children:"CALL WORKER"}),(0,r.jsx)(A.br,{}),"\n",(0,r.jsx)(A.a,{href:"/docs/fr/commands/dialog",children:"DIALOG"})]}),"\n",(0,r.jsx)(A.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(A.table,{children:[(0,r.jsx)(A.thead,{children:(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.th,{}),(0,r.jsx)(A.th,{})]})}),(0,r.jsxs)(A.tbody,{children:[(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(A.td,{children:"1391"})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"Thread safe"}),(0,r.jsx)(A.td,{children:"\u2713"})]})]})]})]})}function c(e={}){let{wrapper:A}={...(0,i.a)(),...e.components};return A?(0,r.jsx)(A,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},434198:function(e,A,n){n.d(A,{Z:function(){return s}});let s="data:image/png;base64,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"},153179:function(e,A,n){n.d(A,{Z:function(){return s}});let s=n.p+"assets/images/pict2896833.en-bb285df41f1a94c3545469d7f96eb922.png"},250065:function(e,A,n){n.d(A,{Z:function(){return l},a:function(){return t}});var s=n(667294);let r={},i=s.createContext(r);function t(e){let A=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(A):{...A,...e}},[A,e])}function l(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:A},e.children)}}}]);