"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92922"],{952974:function(e,s,t){t.r(s),t.d(s,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/export-text","title":"EXPORT TEXT","description":"EXPORT TEXT ( {laTable ;} nomFichier )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/export-text.md","sourceDirName":"commands-legacy","slug":"/commands/export-text","permalink":"/docs/fr/commands/export-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"export-text","title":"EXPORT TEXT","slug":"/commands/export-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPORT SYLK","permalink":"/docs/fr/commands/export-sylk"},"next":{"title":"IMPORT DATA","permalink":"/docs/fr/commands/import-data"}}'),n=t("785893"),o=t("250065");let i={id:"export-text",title:"EXPORT TEXT",slug:"/commands/export-text",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"EXPORT TEXT"})," ( {",(0,n.jsx)(s.em,{children:"laTable"})," ;} ",(0,n.jsx)(s.em,{children:"nomFichier"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param\xe8tre"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"laTable"}),(0,n.jsx)(s.td,{children:"Table"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Table depuis laquelle effectuer l'export ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"nomFichier"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Document texte \xe0 exporter"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,n.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["La commande ",(0,n.jsx)(s.strong,{children:"EXPORT TEXT"})," \xe9crit dans ",(0,n.jsx)(s.em,{children:"document"})," (document texte Windows ou Mac OS) les donn\xe9es des enregistrements de la s\xe9lection courante de la table ",(0,n.jsx)(s.em,{children:"laTable"})," du process courant."]}),"\n",(0,n.jsx)(s.p,{children:"L'op\xe9ration d'export s'effectue par le formulaire sortie courant. Les champs et les variables sont \xe9crits en fonction de l'ordre de saisie dans le formulaire sortie. C'est pourquoi vous devez veiller \xe0 utiliser un formulaire sortie ne contenant que les champs ou objets saisissables que vous voulez exporter. Ne placez pas de boutons ou d'autres objets dans le formulaire sortie. Les objets de sous-formulaire sont ignor\xe9s."}),"\n",(0,n.jsx)(s.p,{children:"L'\xe9v\xe9nement On Load est envoy\xe9 \xe0 la m\xe9thode du formulaire pour chaque enregistrement export\xe9. Utilisez cet \xe9v\xe9nement pour d\xe9finir les variables utilis\xe9es dans le formulaire d'export."}),"\n",(0,n.jsxs)(s.p,{children:["Le param\xe8tre ",(0,n.jsx)(s.em,{children:"document"})," peut cr\xe9er un nouveau document ou d\xe9signer un document existant. Si le document a le m\xeame nom qu'un document existant, ce dernier est remplac\xe9. Le document peut contenir un chemin d'acc\xe8s de volume ou de dossiers. Si vous passez une cha\xeene vide, la bo\xeete de dialogue standard de sauvegarde de fichiers est affich\xe9e. Si l'utilisateur annule ce dialogue, l'op\xe9ration d'export est annul\xe9e et la variable syst\xe8me OK est mise \xe0 0."]}),"\n",(0,n.jsxs)(s.p,{children:["Un thermom\xe8tre de progression est affich\xe9 pendant l'export. L'utilisateur peut annuler l'op\xe9ration en cliquant sur le bouton ",(0,n.jsx)(s.strong,{children:"Stop"}),". Si l'export s'est correctement d\xe9roul\xe9, la variable syst\xe8me OK est mise \xe0 1. En cas d'erreur ou d'interruption de l'op\xe9ration, la variable syst\xe8me OK est mise \xe0 0. Vous pouvez cacher le thermom\xe8tre au moyen de la commande ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/messages-off",children:"MESSAGES OFF"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["La commande utilise par d\xe9faut le jeu de caract\xe8res UTF-8. Vous pouvez utiliser la commande ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/use-character-set",children:"USE CHARACTER SET"})," pour modifier ce jeu de caract\xe8res."]}),"\n",(0,n.jsxs)(s.p,{children:["Lors de l'utilisation de ",(0,n.jsx)(s.strong,{children:"EXPORT TEXT"}),", le d\xe9limiteur de champs par d\xe9faut est le caract\xe8re de tabulation (code 9). Le d\xe9limiteur d'enregistrement est par d\xe9faut le retour chariot (code 13) sous OS X et le retour chariot+retour \xe0 la ligne (code 13 + code 10) sous Windows. Vous pouvez modifier ces valeurs en assignant de nouvelles valeurs aux deux ",(0,n.jsx)(s.em,{children:"Variables syst\xe8me"})," ",(0,n.jsx)(s.em,{children:"FldDelimit"})," et ",(0,n.jsx)(s.em,{children:"RecDelimit"}),". L'utilisateur peut modifier ces valeurs par d\xe9faut dans le dialogue d'export du mode D\xe9veloppement. A noter que si des champs export\xe9s contiennent des caract\xe8res d\xe9finis comme d\xe9limiteurs de champ ou d'enregistrement, ces caract\xe8res sont automatiquement remplac\xe9s par des espaces dans le fichier export\xe9, afin de ne pas perturber le processus d'import."]}),"\n",(0,n.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsx)(s.p,{children:"Cet exemple exporte des donn\xe9es vers un document texte. Cette m\xe9thode commence par le choix du formulaire sortie. Ici, vous modifiez les d\xe9limiteurs et vous effectuez l'export :"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([Personnes];"Export")\n\xa0FldDelimit:=27\xa0// caract\xe8re de d\xe9limitation : Escape\n\xa0RecDelimit:=10\xa0// caract\xe8re de d\xe9limitation : Line Feed\n\xa0EXPORT TEXT([Personnes];"Nouvelles Personnes.txt")\xa0// Export vers le document "Nouvelles Personnes.txt"\n'})}),"\n",(0,n.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,n.jsx)(s.p,{children:"OK prend la valeur 1 si l'export s'est correctement d\xe9roul\xe9, sinon elle prend la valeur 0."}),"\n",(0,n.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/fr/commands/export-dif",children:"EXPORT DIF"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/fr/commands/export-sylk",children:"EXPORT SYLK"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/fr/commands/import-text",children:"IMPORT TEXT"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/fr/commands/use-character-set",children:"USE CHARACTER SET"})]})]})}function u(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return a},a:function(){return i}});var r=t(667294);let n={},o=r.createContext(n);function i(e){let s=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);