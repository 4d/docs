"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63040"],{173716:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/open-document","title":"Open document","description":"Open document ( nomFichier {; typeFichier}{; mode} ) : Time","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/open-document.md","sourceDirName":"commands-legacy","slug":"/commands/open-document","permalink":"/docs/fr/commands/open-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-document.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"open-document","title":"Open document","slug":"/commands/open-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Object to path","permalink":"/docs/fr/commands/object-to-path"},"next":{"title":"Path to object","permalink":"/docs/fr/commands/path-to-object"}}'),r=s("785893"),d=s("250065");let i={id:"open-document",title:"Open document",slug:"/commands/open-document",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function u(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Open document"})," ( ",(0,r.jsx)(n.em,{children:"nomFichier"})," {; ",(0,r.jsx)(n.em,{children:"typeFichier"}),"}{; ",(0,r.jsx)(n.em,{children:"mode"}),"} ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomFichier"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom du document ou Chemin d'acc\xe8s complet au document ou Cha\xeene vide pour afficher la bo\xeete de dialogue"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"typeFichier"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'Liste des types de documents \xe0 filtrer, ou "*" pour ne pas filtrer les documents'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mode"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Mode d\u2019ouverture du document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence du document"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Open document"})," ouvre le document dont vous avez pass\xe9 le nom dans ",(0,r.jsx)(n.em,{children:"nomFichier"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:['Si vous passez une cha\xeene vide ("") dans ',(0,r.jsx)(n.em,{children:"nomFichier"}),", une bo\xeete de dialogue standard d'ouverture de fichiers appara\xeet et l'utilisateur peut d\xe9signer le document. Si dans ce cas l'utilisateur clique sur le bouton ",(0,r.jsx)(n.strong,{children:"Annuler"}),", aucun document n'est ouvert, ",(0,r.jsx)(n.strong,{children:"Open document"})," retourne une r\xe9f\xe9rence de document nulle, et la variable OK prend la valeur 0."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si le document est correctement ouvert, ",(0,r.jsx)(n.strong,{children:"Open document"})," retourne sa r\xe9f\xe9rence de document et la variable OK prend la valeur 1."]}),"\n",(0,r.jsxs)(n.li,{children:["Si le document \xe9tait d\xe9j\xe0 ouvert en lecture et que le param\xe8tre ",(0,r.jsx)(n.em,{children:"mode"})," est omis, ",(0,r.jsx)(n.strong,{children:"Open document"})," l'ouvre en mode lecture/\xe9criture par d\xe9faut et la variable OK prend la valeur 1."]}),"\n",(0,r.jsx)(n.li,{children:"Si le document \xe9tait d\xe9j\xe0 ouvert en \xe9criture et que vous tentez de l'ouvrir en mode \xe9criture, une erreur -43 est g\xe9n\xe9r\xe9e. En revanche, vous pouvez l'ouvrir en mode lecture dans ce cas, la variable OK prend la valeur 1."}),"\n",(0,r.jsx)(n.li,{children:"Si le document n'existe pas, une erreur est g\xe9n\xe9r\xe9e."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"typeFichier"})," le ou les type(s) de fichier(s) pouvant \xeatre s\xe9lectionn\xe9s dans la bo\xeete de dialogue d\u2019ouverture. Vous pouvez passer une liste de plusieurs types s\xe9par\xe9s par un ; (point virgule). Pour chaque type d\xe9fini, une ligne sera ajout\xe9e dans le menu de choix de type de la bo\xeete de dialogue."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sous Mac OS, vous pouvez passer soit un type Mac OS classique (TEXT, APPL, etc.), soit un type UTI (Uniform Type Identifier). Les types UTIs ont \xe9t\xe9 d\xe9finis par Apple afin de r\xe9pondre aux besoins d'uniformisation des types de fichiers. Par exemple, \"public.text\" est le type UTI des fichiers de type texte. Pour plus d'informations sur les UTIs, veuillez consulter la ",(0,r.jsx)(n.em,{children:"page Introduction to Uniform Type Identifiers Overview"})," sur le site ",(0,r.jsx)(n.em,{children:"developer.apple.com"})," (documentation en anglais)."]}),"\n",(0,r.jsx)(n.li,{children:"Sous Windows, vous pouvez \xe9galement passer un type de fichier classique Mac OS \u2014 4D effectue la correspondance en interne \u2014 ou l\u2019extension des fichiers (.txt, .exe, etc.). A noter que sous Windows, l\u2019utilisateur aura la possibilit\xe9 de \u201Cforcer\u201D l\u2019affichage de tous les types de fichiers en saisissant *.* dans la bo\xeete de dialogue. Toutefois dans ce cas, 4D effectuera une v\xe9rification suppl\xe9mentaire des types des fichiers s\xe9lectionn\xe9s : si l\u2019utilisateur s\xe9lectionne un type de fichier non autoris\xe9, la commande retourne une erreur."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:['Si vous ne souhaitez pas restreindre les fichiers affich\xe9s \xe0 un ou plusieurs types, passez la cha\xeene "*" (\xe9toile) ou ".*" dans ',(0,r.jsx)(n.em,{children:"typeFichier"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"mode"})," permet de d\xe9finir le mode d\u2019ouverture du fichier document. Quatre modes d\u2019ouverture sont disponibles. 4D vous propose les constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me ",(0,r.jsx)(n.em,{children:"Documents syst\xe8me"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Get Pathname"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Read and Write"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Read Mode"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Write Mode"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Lorsqu'un document est ouvert, ",(0,r.jsx)(n.strong,{children:"Open document"})," se place initialement au d\xe9but du document, alors que ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/append-document",children:"Append document"})," se place \xe0 la fin."]}),"\n",(0,r.jsxs)(n.p,{children:["Une fois que vous avez ouvert un document, vous pouvez \xe9crire ou lire des valeurs dans ce document \xe0 l'aide des commandes ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/receive-packet",children:"RECEIVE PACKET"})," et ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/send-packet",children:"SEND PACKET"}),", que vous pouvez combiner avec les commandes ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-document-position",children:"Get document position"})," et ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-document-position",children:"SET DOCUMENT POSITION"})," pour acc\xe9der directement \xe0 certains endroits du document."]}),"\n",(0,r.jsxs)(n.p,{children:["N'oubliez pas d'appeler finalement ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/close-document",children:"CLOSE DOCUMENT"})," pour le document."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant ouvre un document existant qui s'appelle \u201CNote\u201D, \xe9crit la cha\xeene \u201CAu revoir\u201D dans le document et le referme. Tout contenu \xe9ventuellement pr\xe9sent dans le document est remplac\xe9 :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var vDoc : Time\n\xa0vDoc:=Open document("Note.txt";Read and Write)\xa0//Ouvrir le document Note\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vDoc;"Au revoir")\xa0//Ecrire un mot dans le document\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vDoc)\xa0//Fermer le document\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez lire un document d\xe9j\xe0 ouvert en \xe9criture :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vDoc:=Open document("PassFile";"TEXT")\xa0// Le fichier est ouvert\n\xa0vRef:=Open document("PassFile";"TEXT";Read Mode)\xa0// Le fichier est lu\n'})}),"\n",(0,r.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsxs)(n.p,{children:["Si le document est correctement ouvert, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0. Apr\xe8s l'appel, la variable syst\xe8me Document contient le nom complet du document.",(0,r.jsx)(n.br,{}),"\nSi vous passez la valeur 3 dans ",(0,r.jsx)(n.em,{children:"mode"}),", la fonction retourne ?00:00:00? (pas de r\xe9f\xe9rence de document). Le document n\u2019est pas ouvert mais les variables syst\xe8me Document et OK sont mises \xe0 jour :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OK prend la valeur 1,"}),"\n",(0,r.jsxs)(n.li,{children:["Document contient le chemin d\u2019acc\xe8s et le nom du fichier ",(0,r.jsx)(n.em,{children:"document"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si vous passez une cha\xeene vide dans ",(0,r.jsx)(n.em,{children:"document"}),", une bo\xeete de dialogue d\u2019ouverture de fichiers appara\xeet. Si elle est valid\xe9e, Document et OK sont mises \xe0 jour comme d\xe9crit ci-dessus. Si elle est annul\xe9e, OK prend la valeur 0."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/append-document",children:"Append document"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/create-document",children:"Create document"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"264"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK, Document, error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);