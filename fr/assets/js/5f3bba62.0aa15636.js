"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67662"],{718231:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/qr-set-html-template","title":"QR SET HTML TEMPLATE","description":"QR SET HTML TEMPLATE ( zone ; mod\xe8le )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-html-template.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-html-template","permalink":"/docs/fr/20-R7/commands/qr-set-html-template","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-html-template.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-html-template","title":"QR SET HTML TEMPLATE","slug":"/commands/qr-set-html-template","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET HEADER AND FOOTER","permalink":"/docs/fr/20-R7/commands/qr-set-header-and-footer"},"next":{"title":"QR SET INFO COLUMN","permalink":"/docs/fr/20-R7/commands/qr-set-info-column"}}'),t=s("785893"),l=s("250065");let i={id:"qr-set-html-template",title:"QR SET HTML TEMPLATE",slug:"/commands/qr-set-html-template",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Balises HTML",id:"balises-html",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR SET HTML TEMPLATE"})," ( ",(0,t.jsx)(n.em,{children:"zone"})," ; ",(0,t.jsx)(n.em,{children:"mod\xe8le"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"zone"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mod\xe8le"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Code du mod\xe8le HTML"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"QR SET HTML TEMPLATE"})," permet de d\xe9finir le ",(0,t.jsx)(n.em,{children:"mod\xe8le"})," HTML \xe0 utiliser pour la zone d'\xe9tat rapide r\xe9f\xe9renc\xe9e par ",(0,t.jsx)(n.em,{children:"zone"}),". Ce mod\xe8le sera utilis\xe9 lors de l'ex\xe9cution des \xe9tats au format HTML."]}),"\n",(0,t.jsx)(n.p,{children:"Le mod\xe8le est construit \xe0 l'aide d'un ensemble de balises de traitement des donn\xe9es. Ce fonctionnement vous permet de g\xe9n\xe9rer des documents HTML proches des \xe9tats originaux ou des documents \xe0 l'apparence enti\xe8rement personnalis\xe9e."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Vous devez appeler au pr\xe9alable ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/qr-set-destination",children:"QR SET DESTINATION"})," pour d\xe9finir le format HTML comme destination de sortie."]}),"\n",(0,t.jsx)(n.h4,{id:"balises-html",children:"Balises HTML"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:" ... "}),(0,t.jsx)(n.br,{}),"\nLes intitul\xe9s des colonnes seront ins\xe9r\xe9s entre ces balises. Ces balises sont g\xe9n\xe9ralement utilis\xe9es pour d\xe9finir la ligne de titre de l'\xe9tat."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:" ... "}),(0,t.jsx)(n.br,{}),"\nLes informations ins\xe9r\xe9es entre ces balises seront r\xe9p\xe9t\xe9es pour chaque ligne de donn\xe9es (d\xe9tail et sous-total compris)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:" ... "}),(0,t.jsx)(n.br,{}),"\nLes informations ins\xe9r\xe9es entre ces balises seront r\xe9p\xe9t\xe9es pour chaque colonne de donn\xe9es \xe0 l'int\xe9rieur des lignes. Le tri de la colonne est identique \xe0 celui de l'\xe9tat. Lorsqu'elles sont utilis\xe9es conjointement \xe0 ",(0,t.jsx)(n.em,{children:" ... "}),", les balises ",(0,t.jsx)(n.em,{children:" ... "})," ne seront effectives qu'avec les colonnes dont le contenu n'est pas ins\xe9r\xe9 \xe0 l'aide de ",(0,t.jsx)(n.em,{children:" ... "}),".",(0,t.jsx)(n.br,{}),"\nPar exemple, dans un \xe9tat comportant cinq colonnes, vous utilisez les balises ",(0,t.jsx)(n.em,{children:" ... "})," afin d'ins\xe9rer les donn\xe9es de la deuxi\xe8me colonne. ",(0,t.jsx)(n.em,{children:" ... "})," traiteront, pour chaque ligne, les colonnes 1, 3, 4 et 5. Ces balises ignoreront la colonne dont le contenu est publi\xe9 \xe0 l'aide de ",(0,t.jsx)(n.em,{children:" ... "}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:" ... "}),(0,t.jsx)(n.br,{}),"\nLes informations ins\xe9r\xe9es entre ces balises seront extraites de la colonne de l'\xe9tat dont le num\xe9ro est \u201Cn\u201D. Si, par exemple, dans un \xe9tat HTML \xe0 trois colonnes, vous souhaitez afficher les colonnes dans un ordre diff\xe9rent de celui de l'\xe9tat initial, vous pouvez \xe9crire :",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"...  ...  ...  "}),(0,t.jsx)(n.br,{}),"\nDans cet exemple, les colonnes sont g\xe9n\xe9r\xe9es dans l'ordre inverse de l'\xe9tat."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:" ... "}),(0,t.jsx)(n.br,{}),"\nLes informations ins\xe9r\xe9es entre ces balises seront utilis\xe9es pour la d\xe9finition de la police de la colonne ou cellule courante.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{})," sera remplac\xe9 par une d\xe9finition de police HTML et ",(0,t.jsx)(n.em,{})," sera remplac\xe9 par la balise de fermeture standard (",(0,t.jsx)(n.em,{}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:" ... "}),(0,t.jsx)(n.br,{}),"\nLes informations ins\xe9r\xe9es entre ces balises seront utilis\xe9es pour la d\xe9finition du style de la colonne ou cellule courante.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{})," sera remplac\xe9 par une d\xe9finition de style HTML ",(0,t.jsx)(n.em,{})," sera remplac\xe9 par la balise de fermeture standard (",(0,t.jsx)(n.em,{}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{}),(0,t.jsx)(n.br,{}),"\nCette balise de couleur sera remplac\xe9e par la d\xe9finition de couleur de la cellule courante."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{}),(0,t.jsx)(n.br,{}),"\nCette balise sera remplac\xe9e par les donn\xe9es de la cellule courante."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{}),(0,t.jsx)(n.br,{}),"\nCes balises seront remplac\xe9es respectivement par les donn\xe9es de l'en-t\xeate gauche, central et droit."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{}),(0,t.jsx)(n.br,{}),"\nCes balises seront remplac\xe9es respectivement par les donn\xe9es du pied de page gauche, central et droit."]}),"\n",(0,t.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,t.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/qr-get-html-template",children:"QR Get HTML template"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"750"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);