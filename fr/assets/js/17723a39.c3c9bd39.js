"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63587"],{366036:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>d,metadata:()=>n,assets:()=>l,toc:()=>a,contentTitle:()=>o});var n=JSON.parse('{"id":"commands-legacy/export-dif","title":"EXPORT DIF","description":"EXPORT DIF ( {laTable ;} nomFichier )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/export-dif.md","sourceDirName":"commands-legacy","slug":"/commands/export-dif","permalink":"/docs/fr/commands/export-dif","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-dif.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"export-dif","title":"EXPORT DIF","slug":"/commands/export-dif","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPORT DATA","permalink":"/docs/fr/commands/export-data"},"next":{"title":"EXPORT SYLK","permalink":"/docs/fr/commands/export-sylk"}}'),t=r("785893"),i=r("250065");let d={id:"export-dif",title:"EXPORT DIF",slug:"/commands/export-dif",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"EXPORT DIF"})," ( {",(0,t.jsx)(s.em,{children:"laTable"})," ;} ",(0,t.jsx)(s.em,{children:"nomFichier"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"laTable"}),(0,t.jsx)(s.td,{children:"Table"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Table de laquelle effectuer l'export ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"nomFichier"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Document DIF \xe0 exporter"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"EXPORT DIF"})," \xe9crit dans ",(0,t.jsx)(s.em,{children:"document"})," (document DIF Windows ou Mac OS) les donn\xe9es des enregistrements de la s\xe9lection courante de la table ",(0,t.jsx)(s.em,{children:"laTable"})," du process courant."]}),"\n",(0,t.jsx)(s.p,{children:"L'op\xe9ration d'export s'effectue par l'interm\xe9diaire du formulaire sortie courant. L'op\xe9ration d'export \xe9crit les champs et les variables en fonction de l'ordre de saisie dans le formulaire sortie. C'est pourquoi vous devez veiller \xe0 utiliser un formulaire sortie ne contenant que les champs ou objets saisissables que vous voulez exporter. Ne placez pas de boutons ou autres objets sur le formulaire sortie. Les objets de sous-formulaire sont ignor\xe9s."}),"\n",(0,t.jsx)(s.p,{children:"L'\xe9v\xe9nement On Load est envoy\xe9 \xe0 la m\xe9thode du formulaire pour chaque enregistrement export\xe9. Utilisez cet \xe9v\xe9nement pour d\xe9finir les variables utilis\xe9es dans le formulaire d'export."}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre ",(0,t.jsx)(s.em,{children:"document"})," peut cr\xe9er un nouveau document ou d\xe9signer un document existant. Si le document a le m\xeame nom qu'un document existant, ce dernier est remplac\xe9. Le document peut contenir un chemin d'acc\xe8s de volume et/ou de dossiers. Si vous passez une cha\xeene vide, la bo\xeete de dialogue standard de sauvegarde de fichiers est affich\xe9e. Si l'utilisateur annule ce dialogue, l'op\xe9ration d'export est annul\xe9e et la variable syst\xe8me OK est mise \xe0 0."]}),"\n",(0,t.jsxs)(s.p,{children:["Un thermom\xe8tre de progression est affich\xe9 pendant l'export. L'utilisateur peut annuler l'op\xe9ration en cliquant sur le bouton ",(0,t.jsx)(s.strong,{children:"Stop"}),". Si l'export s'est correctement d\xe9roul\xe9, la variable syst\xe8me OK est mise \xe0 1. En cas d'erreur ou d'interruption de l'op\xe9ration, la variable syst\xe8me OK est mise \xe0 0. Vous pouvez cacher le thermom\xe8tre au moyen de la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/messages-off",children:"MESSAGES OFF"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["La commande utilise par d\xe9faut le jeu de caract\xe8res UTF-8. Les documents au format DIF utilisant g\xe9n\xe9ralement le jeu de caract\xe8res IBM437, il peut \xeatre n\xe9cessaire d'utiliser la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/use-character-set",children:"USE CHARACTER SET"})," pour d\xe9finir le jeu de caract\xe8res appropri\xe9."]}),"\n",(0,t.jsxs)(s.p,{children:["Lors de l'utilisation de ",(0,t.jsx)(s.strong,{children:"EXPORT DIF"}),", le d\xe9limiteur de champs par d\xe9faut est le caract\xe8re de tabulation (code 9). Le d\xe9limiteur d'enregistrement est par d\xe9faut le retour chariot (code 13). Vous pouvez modifier ces valeurs en assignant de nouvelles valeurs aux deux ",(0,t.jsx)(s.em,{children:"Variables syst\xe8me"})," ",(0,t.jsx)(s.em,{children:"FldDelimit"})," et ",(0,t.jsx)(s.em,{children:"RecDelimit"}),". L'utilisateur peut modifier ces valeurs par d\xe9faut dans le dialogue d'export du mode D\xe9veloppement. Comme les champs Texte peuvent contenir des retours chariot, soyez prudent si vous utilisez le retour chariot comme d\xe9limiteur entre les champs \xe0 exporter."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Cet exemple exporte des donn\xe9es vers un document DIF. Cette m\xe9thode commence par le choix du formulaire sortie, puis effectue l'export :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([Personnes];"Export")\n\xa0EXPORT DIF([Personnes];"Nouvelles Personnes.dif")\xa0// Export vers le document "Nouvelles Personnes.dif"\n'})}),"\n",(0,t.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(s.p,{children:"OK prend la valeur 1 si l'export s'est correctement d\xe9roul\xe9, sinon elle prend la valeur 0."}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/export-sylk",children:"EXPORT SYLK"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/export-text",children:"EXPORT TEXT"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/import-dif",children:"IMPORT DIF"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"84"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return o},a:function(){return d}});var n=r(667294);let t={},i=n.createContext(t);function d(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);