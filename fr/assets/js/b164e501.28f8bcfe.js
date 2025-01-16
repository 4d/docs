"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5609"],{155939:function(e,s,r){r.r(s),r.d(s,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/import-text","title":"IMPORT TEXT","description":"IMPORT TEXT ( {laTable ;} nomFichier )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/import-text.md","sourceDirName":"commands-legacy","slug":"/commands/import-text","permalink":"/docs/fr/commands/import-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-text.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"import-text","title":"IMPORT TEXT","slug":"/commands/import-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"IMPORT SYLK","permalink":"/docs/fr/commands/import-sylk"},"next":{"title":"Interruptions","permalink":"/docs/fr/category/interruptions"}}'),n=r("785893"),i=r("250065");let o={id:"import-text",title:"IMPORT TEXT",slug:"/commands/import-text",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"IMPORT TEXT"})," ( {",(0,n.jsx)(s.em,{children:"laTable"})," ;} ",(0,n.jsx)(s.em,{children:"nomFichier"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param\xe8tre"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"laTable"}),(0,n.jsx)(s.td,{children:"Table"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Table dans laquelle effectuer l'import ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"nomFichier"}),(0,n.jsx)(s.td,{children:"Text"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Document texte \xe0 importer"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["La commande ",(0,n.jsx)(s.strong,{children:"IMPORT TEXT"})," lit les donn\xe9es de ",(0,n.jsx)(s.em,{children:"document"})," (document texte Windows ou Mac OS) et les \xe9crit dans la table ",(0,n.jsx)(s.em,{children:"laTable"})," en cr\xe9ant de nouveaux enregistrements."]}),"\n",(0,n.jsx)(s.p,{children:"L'op\xe9ration d'import s'effectue par l'interm\xe9diaire du formulaire entr\xe9e courant. Les champs et les variables sont lus en fonction du plan o\xf9 ils se trouvent dans le formulaire entr\xe9e. Soyez donc attentif \xe0 ce qui se trouve au premier ou au deuxi\xe8me plan en mati\xe8re d'objets (champs et variables) dans le formulaire. Le premier objet dans lequel des donn\xe9es sont import\xe9es doit \xeatre \xe0 l'arri\xe8re-plan du formulaire. Si le nombre de champs et de variables dans le formulaire ne correspond pas au nombre de champs \xe0 importer, les champs suppl\xe9mentaires sont ignor\xe9s. Un formulaire entr\xe9e utilis\xe9 pour l'import ne peut contenir de boutons. Les objets de sous-formulaire sont ignor\xe9s."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note :"})," Un moyen de s'assurer que les donn\xe9es sont import\xe9es dans les bons objets est de s\xe9lectionner l'objet dans lequel sera import\xe9 le premier champ. Cet objet doit \xeatre au premier plan. Pour l'import dans le deuxi\xe8me champ, placer ce champ devant le premier et ainsi de suite, pour tous les champs et variables. Le champ qui se trouve au premier plan est donc celui dans lequel sont plac\xe9es les derni\xe8res donn\xe9es du document \xe0 importer."]}),"\n",(0,n.jsx)(s.p,{children:"L'\xe9v\xe9nement On Validate est envoy\xe9 \xe0 la m\xe9thode du formulaire pour chaque enregistrement import\xe9. Utilisez cet \xe9v\xe9nement pour copier les donn\xe9es des variables vers les champs, si vous utilisez des variables dans le formulaire d'import."}),"\n",(0,n.jsxs)(s.p,{children:["Le param\xe8tre ",(0,n.jsx)(s.em,{children:"document"})," peut contenir un chemin d'acc\xe8s aux noms de volumes et de dossiers. Si vous passez une cha\xeene vide, la bo\xeete de dialogue standard d'ouverture de fichiers est affich\xe9e. Si l'utilisateur annule le dialogue, l'op\xe9ration d'import est annul\xe9e et la variable syst\xe8me OK est mise \xe0 0."]}),"\n",(0,n.jsxs)(s.p,{children:["Un thermom\xe8tre de progression est affich\xe9 pendant l'import. L'utilisateur peut annuler l'op\xe9ration en cliquant sur le bouton ",(0,n.jsx)(s.strong,{children:"Stop"}),". Les enregistrements d\xe9j\xe0 import\xe9s le resteront. Si l'import s'est correctement d\xe9roul\xe9, la variable syst\xe8me OK est mise \xe0 1. En cas d'erreur ou d'interruption de l'op\xe9ration, la variable syst\xe8me OK est mise \xe0 0. Vous pouvez cacher le thermom\xe8tre au moyen de la commande ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/messages-off",children:"MESSAGES OFF"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["La commande utilise par d\xe9faut le jeu de caract\xe8res UTF-8. Vous pouvez utiliser la commande ",(0,n.jsx)(s.a,{href:"/docs/fr/commands/use-character-set",children:"USE CHARACTER SET"})," pour modifier ce jeu de caract\xe8res."]}),"\n",(0,n.jsxs)(s.p,{children:["Lors de l'utilisation de ",(0,n.jsx)(s.strong,{children:"IMPORT TEXT"}),", le d\xe9limiteur de champs par d\xe9faut est le caract\xe8re de tabulation (code 9). Le d\xe9limiteur d'enregistrements par d\xe9faut est le retour chariot (code 13). Vous pouvez modifier ces valeurs par d\xe9faut en assignant de nouvelles valeurs aux variables syst\xe8me FldDelimit et RecDelimit. L'utilisateur peut modifier ces valeurs par d\xe9faut dans la bo\xeete de dialogue d'import du mode D\xe9veloppement. Comme les champs Texte peuvent contenir des Retours chariot, soyez prudent si vous utilisez le Retour chariot comme d\xe9limiteur entre les champs \xe0 importer."]}),"\n",(0,n.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsx)(s.p,{children:"Cet exemple importe des donn\xe9es d'un document texte. Cette m\xe9thode commence par le choix du formulaire. Ici, vous changez les d\xe9limiteurs, et vous faites l'import :"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Personnes];"Import")\n\xa0FldDelimit:=27\xa0// caract\xe8re de d\xe9limitation : Escape\n\xa0RecDelimit:=10\xa0// caract\xe8re de d\xe9limitation : Line Feed\n\xa0IMPORT TEXT([Personnes];"Nouvelles Personnes.txt")\xa0// Import du document \u201CNouvelles Personnes.txt\u201D\n'})}),"\n",(0,n.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,n.jsx)(s.p,{children:"OK prend la valeur 1 si l'import s'est correctement d\xe9roul\xe9, sinon elle prend la valeur 0."}),"\n",(0,n.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/fr/commands/export-text",children:"EXPORT TEXT"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/fr/commands/import-dif",children:"IMPORT DIF"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/fr/commands/import-sylk",children:"IMPORT SYLK"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/fr/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,n.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,n.jsx)(s.td,{children:"168"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Thread safe"}),(0,n.jsx)(s.td,{children:"\u2717"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Modifie les variables"}),(0,n.jsx)(s.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return o}});var t=r(667294);let n={},i=t.createContext(n);function o(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);