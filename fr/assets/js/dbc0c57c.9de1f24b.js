"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["346"],{516570:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/create-document","title":"Create document","description":"Create document ( nomFichier {; typeFichier} ) : Time","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/create-document.md","sourceDirName":"commands-legacy","slug":"/commands/create-document","permalink":"/docs/fr/20-R8/commands/create-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-document.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"create-document","title":"Create document","slug":"/commands/create-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE ALIAS","permalink":"/docs/fr/20-R8/commands/create-alias"},"next":{"title":"CREATE FOLDER","permalink":"/docs/fr/20-R8/commands/create-folder"}}'),r=s("785893"),d=s("250065");let i={id:"create-document",title:"Create document",slug:"/commands/create-document",displayed_sidebar:"docs"},c=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Create document"})," ( ",(0,r.jsx)(n.em,{children:"nomFichier"})," {; ",(0,r.jsx)(n.em,{children:"typeFichier"}),"} ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomFichier"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de document ou Chemin d'acc\xe8s complet de document ou Cha\xeene vide pour afficher la bo\xeete de dialogue standard d'enregistrement de fichiers"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"typeFichier"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'Liste des types de documents \xe0 filtrer, ou "*" pour ne pas filtrer les documents'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence du document"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Create document"})," cr\xe9e un document et retourne son num\xe9ro de r\xe9f\xe9rence de document."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous passez le nom ou le chemin d'acc\xe8s complet du nouveau document dans ",(0,r.jsx)(n.em,{children:"document"}),". Si ",(0,r.jsx)(n.em,{children:"document"})," existe d\xe9j\xe0, il est remplac\xe9. Cependant, si le document est verrouill\xe9 ou est d\xe9j\xe0 ouvert, une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez une cha\xeene vide dans ",(0,r.jsx)(n.em,{children:"document"}),", une bo\xeete de dialogue standard d'enregistrement de fichiers appara\xeet et l'utilisateur peut sp\xe9cifier le nom du document. Si dans ce cas l'utilisateur clique sur le bouton ",(0,r.jsx)(n.strong,{children:"Annuler"}),", ",(0,r.jsx)(n.strong,{children:"Create document"})," retourne une r\xe9f\xe9rence de document nulle, et la variable OK prend la valeur 0."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Create document"})," cr\xe9e par d\xe9faut un document de type TEXT (macOS) ou .TXT (Windows). Pour cr\xe9er un autre type de document, passez un type dans le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"typeFichier"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous utilisez la bo\xeete de dialogue standard d'enregistrement de fichiers, vous pouvez passer dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"typeFichier"})," un ou plusieurs type(s) de fichier(s) afin de configurer la liste des types autoris\xe9s dans la bo\xeete de dialogue. Vous pouvez passer une liste de plusieurs types s\xe9par\xe9s par un ; (point virgule). Pour chaque type d\xe9fini, une ligne sera ajout\xe9e dans le menu de choix de type de la bo\xeete de dialogue.",(0,r.jsx)(n.br,{}),"\nSous Mac OS, vous pouvez passer soit type Mac OS classique (TEXT, APPL, etc.), soit un type UTI (Uniform Type Identifier). Les types UTIs ont \xe9t\xe9 d\xe9finis par Apple afin de r\xe9pondre aux besoins d'uniformisation des types de fichiers. Par exemple, \"public.text\" est le type UTI des fichiers de type texte. Pour plus d'informations sur les UTIs, reportez-vous \xe0 l'adresse ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html",children:"https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html"})})," (documentation en anglais).",(0,r.jsx)(n.br,{}),"\nSous Windows, vous pouvez \xe9galement passer un type de fichier classique Mac OS \u2014 4D effectue la correspondance en interne \u2014 ou l\u2019extension des fichiers (.txt, .exe, etc.). A noter que sous Windows, l\u2019utilisateur aura la possibilit\xe9 de \u201Cforcer\u201D l\u2019affichage de tous les types de fichiers en saisissant *.* dans la bo\xeete de dialogue. Toutefois dans ce cas, 4D effectuera une v\xe9rification suppl\xe9mentaire des types des fichiers s\xe9lectionn\xe9s : si l\u2019utilisateur s\xe9lectionne un type de fichier non autoris\xe9, la commande retourne une erreur.",(0,r.jsx)(n.br,{}),'\nSi vous ne souhaitez pas restreindre les fichiers affich\xe9s \xe0 un ou plusieurs types, passez la cha\xeene "*" (\xe9toile) ou ".*" dans ',(0,r.jsx)(n.em,{children:"typeFichier"}),".",(0,r.jsx)(n.br,{}),"\nSous Windows, vous pouvez passer une extension de fichier Windows ou un type de fichier Mac OS associ\xe9 \xe0 l'aide de la commande ",(0,r.jsx)(n.em,{children:"_o_MAP FILE TYPES"}),". Si vous souhaitez cr\xe9er un document sans extension, un document comportant plusieurs extensions, ou un document comportant une extension de plus de trois caract\xe8res, n'utilisez pas le param\xe8tre ",(0,r.jsx)(n.em,{children:"typeFichier"})," et passez le nom complet dans ",(0,r.jsx)(n.em,{children:"document"})," (cf. exemple 2)."]}),"\n",(0,r.jsxs)(n.p,{children:["Si le document est correctement cr\xe9\xe9 et ouvert, ",(0,r.jsx)(n.strong,{children:"Create document"})," retourne sa r\xe9f\xe9rence de document et la variable syst\xe8me OK prend la valeur 1. La variable syst\xe8me Document est mise \xe0 jour et retourne le chemin d\u2019acc\xe8s complet du document cr\xe9\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Une fois que vous avez cr\xe9\xe9 et ouvert un document, vous pouvez \xe9crire ou lire des valeurs dans ce document \xe0 l'aide des commandes ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/receive-packet",children:"RECEIVE PACKET"})," et ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/send-packet",children:"SEND PACKET"}),", que vous pouvez combiner avec les commandes ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-document-position",children:"Get document position"})," et ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-document-position",children:"SET DOCUMENT POSITION"})," pour acc\xe9der directement \xe0 certains endroits du document."]}),"\n",(0,r.jsxs)(n.p,{children:["N'oubliez pas d'appeler finalement ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/close-document",children:"CLOSE DOCUMENT"})," pour le document."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant cr\xe9e et ouvre un nouveau document qui s'appelle \u201CNote\u201D, \xe9crit la cha\xeene \u201CBonjour\u201D et le referme :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var vDoc : Time\n\xa0vDoc:=Create document("Note.txt")\xa0// Cr\xe9er un nouveau document qui s\'appelle Note\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vDoc;"Bonjour")\xa0// Ecrire un mot dans le document\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vDoc)\xa0// Fermer le document\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant cr\xe9e sous Windows des documents avec des extensions non standard :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vhMonDoc:=Create document("LeDoc.ext1.ext2")\xa0//Plusieurs extensions\n\xa0$vhMonDoc:=Create document("LeDoc.shtml")\xa0//Extension longue\n\xa0$vhMonDoc:=Create document("LeDoc.")\xa0//Pas d\u2019extension (le point "." est obligatoire)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsxs)(n.p,{children:["Si le document est correctement cr\xe9\xe9, la variable syst\xe8me OK prend la valeur 1 et la variable syst\xe8me Document contient le chemin d\u2019acc\xe8s et le nom du fichier ",(0,r.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/append-document",children:"Append document"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-document",children:"Open document"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"266"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK, Document, error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);