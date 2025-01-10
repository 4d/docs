"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75250"],{689997:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/modify-record","title":"MODIFY RECORD","description":"MODIFY RECORD ( {;}{*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/modify-record.md","sourceDirName":"commands-legacy","slug":"/commands/modify-record","permalink":"/docs/fr/commands/modify-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodify-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"modify-record","title":"MODIFY RECORD","slug":"/commands/modify-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Modified","permalink":"/docs/fr/commands/modified"},"next":{"title":"Old","permalink":"/docs/fr/commands/old"}}'),t=s("785893"),i=s("250065");let d={id:"modify-record",title:"MODIFY RECORD",slug:"/commands/modify-record",displayed_sidebar:"docs"},l=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MODIFY RECORD"})," ( {",(0,t.jsx)(n.em,{children:"laTable"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table dans laquelle modifier des donn\xe9es ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cacher les barres de d\xe9filement"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"MODIFY RECORD"})," permet \xe0 l'utilisateur de modifier l'enregistrement courant de ",(0,t.jsx)(n.em,{children:"laTable"}),", ou de la table par d\xe9faut si ce param\xe8tre est omis. ",(0,t.jsx)(n.strong,{children:"MODIFY RECORD"})," charge depuis le disque l'enregistrement courant pour le process en cours (s'il n'est pas d\xe9j\xe0 charg\xe9 par un autre utilisateur/process) et l'affiche dans le formulaire entr\xe9e courant. S'il n'y a pas d'enregistrement courant, ",(0,t.jsx)(n.strong,{children:"MODIFY RECORD"})," ne fait rien. ",(0,t.jsx)(n.strong,{children:"MODIFY RECORD"})," ne change pas la s\xe9lection courante."]}),"\n",(0,t.jsx)(n.p,{children:"Le formulaire est affich\xe9 dans la fen\xeatre se trouvant au premier plan du process. Elle comporte des barres de d\xe9filement et une case de contr\xf4le de taille. Si vous passez le param\xe8tre optionnel ast\xe9risque (*), ces \xe9l\xe9ments n'appara\xeetront pas."}),"\n",(0,t.jsxs)(n.p,{children:["Pour que vous puissiez utiliser ",(0,t.jsx)(n.strong,{children:"MODIFY RECORD"}),", l'enregistrement courant doit \xeatre en Lecture/\xe9criture et ne doit pas \xeatre verrouill\xe9."]}),"\n",(0,t.jsx)(n.p,{children:"Si le formulaire comporte des boutons de navigation parmi les enregistrements de la s\xe9lection, ils restent utilisables, ce qui permet \xe0 l'utilisateur de modifier des enregistrements puis de se d\xe9placer pour en modifier d'autres."}),"\n",(0,t.jsxs)(n.p,{children:["L'enregistrement est sauvegard\xe9 si l'utilisateur clique sur un bouton du type Valider ou appuie sur la touche ",(0,t.jsx)(n.strong,{children:"Entr\xe9e"}),", ou encore si la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/accept",children:"ACCEPT"})," est ex\xe9cut\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["L'enregistrement n'est pas sauvegard\xe9 si l'utilisateur clique sur un bouton du type ",(0,t.jsx)(n.strong,{children:"Annuler"})," ou appuie sur la touche d'annulation (",(0,t.jsx)(n.strong,{children:"Echap"})," sous Windows, ",(0,t.jsx)(n.strong,{children:"Esc"})," sous Mac OS), ou encore si la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/cancel",children:"CANCEL"})," est ex\xe9cut\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["Apr\xe8s un appel \xe0 ",(0,t.jsx)(n.strong,{children:"MODIFY RECORD"}),", la variable syst\xe8me OK prend la valeur 1 si l'enregistrement est valid\xe9, et 0 lorsqu'il est annul\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," M\xeame lorsqu'il est annul\xe9, l'enregistrement reste en m\xe9moire et peut \xeatre sauvegard\xe9 par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/save-record",children:"SAVE RECORD"})," si celle-ci est appel\xe9e avant que le pointeur d'enregistrement courant ne soit modifi\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans le cadre d'un ",(0,t.jsx)(n.strong,{children:"MODIFY RECORD"}),", si l'utilisateur n'effectue aucune modification dans l'enregistrement et le valide, l'enregistrement ne sera pas consid\xe9r\xe9 comme modifi\xe9 et ne sera pas sauvegard\xe9 une nouvelle fois. Les actions telles que le changement de la valeur d'une variable, la s\xe9lection de cases \xe0 cocher ou de boutons radio ne sont pas qualifi\xe9es de modifications. Seule la modification de la valeur d'un champ, par le biais d'une saisie manuelle ou d'une m\xe9thode, provoque une nouvelle sauvegarde de l'enregistrement."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Reportez-vous au second exemple de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/add-record",children:"ADD RECORD"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"La variable syst\xe8me OK prend la valeur 1 lorsque l'enregistrement est valid\xe9 et 0 lorsqu'il est annul\xe9. OK ne prend une valeur qu'apr\xe8s que l'enregistrement ait \xe9t\xe9 effectivement valid\xe9 ou annul\xe9."}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/add-record",children:"ADD RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/locked",children:"Locked"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/modified-record",children:"Modified record"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/read-write",children:"READ WRITE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/unload-record",children:"UNLOAD RECORD"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"57"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Interdite sur le serveur"}),(0,t.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);