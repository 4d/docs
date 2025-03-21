"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54999"],{700633:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/document-list","title":"DOCUMENT LIST","description":"DOCUMENT LIST ( cheminAcc\xe8s ; documents {; options} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/document-list.md","sourceDirName":"commands-legacy","slug":"/commands/document-list","permalink":"/docs/fr/commands/document-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdocument-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"document-list","title":"DOCUMENT LIST","slug":"/commands/document-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FOLDER","permalink":"/docs/fr/commands/delete-folder"},"next":{"title":"Document to text","permalink":"/docs/fr/commands/document-to-text"}}'),i=s("785893"),r=s("250065");let d={id:"document-list",title:"DOCUMENT LIST",slug:"/commands/document-list",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Exemple 5",id:"exemple-5",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DOCUMENT LIST"})," ( ",(0,i.jsx)(n.em,{children:"cheminAcc\xe8s"})," ; ",(0,i.jsx)(n.em,{children:"documents"})," {; ",(0,i.jsx)(n.em,{children:"options"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cheminAcc\xe8s"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Chemin d'acc\xe8s de volume ou de dossier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"documents"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Nom des documents situ\xe9s \xe0 cet endroit"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Options de construction de la liste"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"DOCUMENT LIST"})," remplit le tableau de type Texte ",(0,i.jsx)(n.em,{children:"documents"})," avec les noms des documents situ\xe9s \xe0 l'endroit que vous avez indiqu\xe9 avec le param\xe8tre ",(0,i.jsx)(n.em,{children:"cheminAcc\xe8s"}),".Vous devez passer un chemin d'acc\xe8s absolu dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"cheminAcc\xe8s"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Par d\xe9faut, si vous omettez le param\xe8tre ",(0,i.jsx)(n.em,{children:"options"}),", seuls les noms des documents sont retourn\xe9s dans le tableau ",(0,i.jsx)(n.em,{children:"documents"}),". Vous pouvez modifier ce fonctionnement en passant dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"options"})," une ou plusieurs des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,i.jsx)(n.em,{children:"Documents syst\xe8me"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Absolute path"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsxs)(n.td,{children:["Le tableau ",(0,i.jsx)(n.em,{children:"documents"})," contient des chemins d\u2019acc\xe8s absolus"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ignore invisible"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"Les documents invisibles ne sont pas list\xe9s"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Posix path"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsxs)(n.td,{children:["Le tableau ",(0,i.jsx)(n.em,{children:"documents"})," contient des chemins d\u2019acc\xe8s au format POSIX"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Recursive parsing"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:["Le tableau ",(0,i.jsx)(n.em,{children:"documents"})," contient les fichiers et tous les sous-dossiers du dossier sp\xe9cifi\xe9"]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Avec l\u2019option Recursive parsing en mode relatif (option 1 seule), les chemins des documents situ\xe9s dans des sous-dossiers d\xe9butent par les caract\xe8res ":" ou "\\" en fonction de la plate-forme.'}),"\n",(0,i.jsx)(n.li,{children:'Avec l\u2019option Posix path en mode relatif (option 4 seule), les chemins ne d\xe9butent pas par "/"'}),"\n",(0,i.jsx)(n.li,{children:'Avec l\u2019option Posix path en mode absolu (option 4 + 2), les chemins d\xe9butent toujours par "/"'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["S'il n'y pas de document \xe0 l'endroit d\xe9fini, la commande retourne un tableau vide. Si le chemin d'acc\xe8s que vous avez pass\xe9 dans ",(0,i.jsx)(n.em,{children:"cheminAcc\xe8s"})," est invalide, ",(0,i.jsx)(n.strong,{children:"DOCUMENT LIST"})," g\xe9n\xe8re une erreur de gestionnaire de fichier que vous pouvez intercepter \xe0 l'aide d'une m\xe9thode install\xe9e par ",(0,i.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(n.p,{children:"Liste de tous les documents dans un dossier (syntaxe par d\xe9faut) :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\";tabFichiers)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["-> tabFichiers :",(0,i.jsx)(n.br,{}),"\nTexte1.txt",(0,i.jsx)(n.br,{}),"\nTexte2.txt"]}),"\n",(0,i.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(n.p,{children:"Liste de tous les documents dans un dossier en mode absolu :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\";tabFichiers; Chemin absolu)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["-> tabFichiers :",(0,i.jsx)(n.br,{}),"\nC:\\Texte1.txt",(0,i.jsx)(n.br,{}),"\nC:\\Texte2.txt"]}),"\n",(0,i.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,i.jsx)(n.p,{children:"Liste de tous les documents en mode r\xe9cursif (relatif) :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\";tabFichiers;Chemin r\xe9cursif)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["-> tabFichiers :",(0,i.jsx)(n.br,{}),"\nTexte1.txt",(0,i.jsx)(n.br,{}),"\nTexte2.txt",(0,i.jsx)(n.br,{}),"\n\\Dossier1\\Texte3.txt",(0,i.jsx)(n.br,{}),"\n\\Dossier1\\Texte4.txt",(0,i.jsx)(n.br,{}),"\n\\Dossier2\\Texte5.txt",(0,i.jsx)(n.br,{}),"\n\\Dossier2\\Dossier3\\Image1.png"]}),"\n",(0,i.jsx)(n.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,i.jsx)(n.p,{children:"Liste de tous les documents en mode r\xe9cursif absolu :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\MonDossier\\\\";tabFichiers;Chemin r\xe9cursif+Chemin absolu)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["-> tabFichiers :",(0,i.jsx)(n.br,{}),"\nC:\\MonDossier\\MonTexte1.txt",(0,i.jsx)(n.br,{}),"\nC:\\MonDossier\\MonTexte2.txt",(0,i.jsx)(n.br,{}),"\nC:\\MonDossier\\Dossier1\\MonTexte3.txt",(0,i.jsx)(n.br,{}),"\nC:\\MonDossier\\Dossier1\\MonTexte4.txt",(0,i.jsx)(n.br,{}),"\nC:\\MonDossier\\Dossier2\\MonTexte5.txt",(0,i.jsx)(n.br,{}),"\nC:\\MonDossier\\Dossier2\\Dossier3\\MonImage1.png"]}),"\n",(0,i.jsx)(n.h2,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,i.jsx)(n.p,{children:"Liste de tous les documents en mode r\xe9cursif POSIX (relatif) :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT LIST("C:\\\\MonDossier\\\\";tabFichiers;Chemin r\xe9cursif+Chemin POSIX)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["-> tabFichiers :",(0,i.jsx)(n.br,{}),"\nMonTexte1.txt",(0,i.jsx)(n.br,{}),"\nMonTexte2.txt",(0,i.jsx)(n.br,{}),"\nDossier1/MonTexte3.txt",(0,i.jsx)(n.br,{}),"\nDossier1/MonTexte4.txt",(0,i.jsx)(n.br,{}),"\nDossier2/MonTexte5.txt",(0,i.jsx)(n.br,{}),"\nDossier2/Dossier3/MonImage1.png"]}),"\n",(0,i.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/folder-list",children:"FOLDER LIST"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/volume-list",children:"VOLUME LIST"})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"474"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifie les variables"}),(0,i.jsx)(n.td,{children:"error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);