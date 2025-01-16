"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38101"],{694149:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/get-picture-metadata","title":"GET PICTURE METADATA","description":"GET PICTURE METADATA ( image ; nomMeta ; contenuMeta {; nomMeta2 ; contenuMeta2 ; ... ; nomMetaN ; contenuMetaN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-picture-metadata.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-metadata","permalink":"/docs/fr/20-R7/commands/get-picture-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-metadata.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-picture-metadata","title":"GET PICTURE METADATA","slug":"/commands/get-picture-metadata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE KEYWORDS","permalink":"/docs/fr/20-R7/commands/get-picture-keywords"},"next":{"title":"Is picture file","permalink":"/docs/fr/20-R7/commands/is-picture-file"}}'),a=s("785893"),r=s("250065");let d={id:"get-picture-metadata",title:"GET PICTURE METADATA",slug:"/commands/get-picture-metadata",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"GET PICTURE METADATA"})," ( ",(0,a.jsx)(n.em,{children:"image"})," ; ",(0,a.jsx)(n.em,{children:"nomMeta"})," ; ",(0,a.jsx)(n.em,{children:"contenuMeta"})," {; ",(0,a.jsx)(n.em,{children:"nomMeta2"})," ; ",(0,a.jsx)(n.em,{children:"contenuMeta2"})," ; ... ; ",(0,a.jsx)(n.em,{children:"nomMetaN"})," ; ",(0,a.jsx)(n.em,{children:"contenuMetaN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"image"}),(0,a.jsx)(n.td,{children:"Picture"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Image dont vous souhaitez lire les m\xe9tadonn\xe9es"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nomMeta"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nom ou chemin du bloc \xe0 lire"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"contenuMeta"}),(0,a.jsx)(n.td,{children:"Variable"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Contenu de la m\xe9tadonn\xe9e"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["La commande ",(0,a.jsx)(n.strong,{children:"GET PICTURE METADATA"})," permet de lire le contenu de m\xe9tadonn\xe9es (ou m\xe9ta-balises) pr\xe9sentes dans ",(0,a.jsx)(n.em,{children:"image"})," (champ ou une variable image 4D). Pour plus d\u2019informations sur les m\xe9tadonn\xe9es, reportez-vous \xe0 la description de la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-picture-metadata",children:"SET PICTURE METADATA"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,a.jsx)(n.em,{children:"nomMeta"})," une cha\xeene d\xe9signant le type de m\xe9tadonn\xe9e \xe0 r\xe9cup\xe9rer. Vous pouvez passer :"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:['une constante du th\xe8me "',(0,a.jsx)(n.em,{children:"Noms des m\xe9tadonn\xe9es images"}),'" contenant un chemin de balise,']}),"\n",(0,a.jsx)(n.li,{children:'le nom d\u2019un bloc complet de m\xe9tadonn\xe9es ("TIFF", "EXIF", "GPS" ou "IPTC"),'}),"\n",(0,a.jsx)(n.li,{children:'une cha\xeene vide ("").'}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,a.jsx)(n.em,{children:"contenuMeta"})," la variable destin\xe9e \xe0 recevoir les m\xe9tadonn\xe9es."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Si vous avez pass\xe9 un chemin de balise dans ",(0,a.jsx)(n.em,{children:"nomMeta"}),", ",(0,a.jsx)(n.em,{children:"contenuMeta"})," contient directement la valeur \xe0 lire. La valeur sera convertie dans le type de la variable (si le type de la variable n'est pas d\xe9fini, le type texte est utilis\xe9 par d\xe9faut). Les variables de type texte seront format\xe9es en XML (norme XMP). Vous pouvez passer un tableau lorsque la m\xe9tadonn\xe9e contient plus d\u2019une valeur (c\u2019est le cas notamment pour les balises IPTC keywords)."]}),"\n",(0,a.jsxs)(n.li,{children:["Si vous avez pass\xe9 un nom de bloc ou une cha\xeene vide dans ",(0,a.jsx)(n.em,{children:"nomMeta"}),", ",(0,a.jsx)(n.em,{children:"contenuMeta"})," doit \xeatre une r\xe9f\xe9rence d\u2019\xe9l\xe9ment DOM XML valide. Dans ce cas, le contenu du bloc d\xe9sign\xe9 (ou de tous les blocs si vous avez pass\xe9 une cha\xeene vide dans ",(0,a.jsx)(n.em,{children:"nomMeta"}),") est recopi\xe9 dans l\u2019\xe9l\xe9ment r\xe9f\xe9renc\xe9."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,a.jsx)(n.p,{children:"Utilisation d\u2019arbres DOM"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0$xml:=DOM Create XML Ref("Root")\xa0//Cr\xe9ation d\'un arbre XML DOM\n\xa0\n\xa0\xa0\xa0\xa0\xa0//R\xe9ception des m\xe9tadonn\xe9es TIFF\n\xa0$_Xml_TIFF:=DOM Create XML element($xml;"/Root/TIFF")\n\xa0GET PICTURE METADATA(vPicture;"TIFF";$_Xml_TIFF)\n\xa0\n\xa0\xa0\xa0\xa0\xa0//R\xe9ception des m\xe9tadonn\xe9es GPS\n\xa0$_Xml_GPS:=DOM Create XML element($xml;"/Root/GPS")\n\xa0GET PICTURE METADATA(vPicture;"GPS";$_Xml_GPS)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,a.jsx)(n.p,{children:"Utilisation de variables"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $dateAsDate : Date\n\xa0GET PICTURE METADATA(vImage;TIFF date time;$dateAsDate)\xa0\xa0//retourne uniquement la date car "$dateAsDate" est de type Date\n\xa0\n\xa0var $dateAsText : Text\n\xa0GET PICTURE METADATA(vImage;TIFF date time;$dateAsText)\xa0\xa0//retourne uniquement la date mais au format XML\n\xa0\n\xa0C_INTEGER($urgency)\n\xa0GET PICTURE METADATA(vImage;IPTC urgency;$urgency)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,a.jsx)(n.p,{children:"R\xe9ception de balises \xe0 valeurs multiples dans des tableaux"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($tTkeywords;0)\n\xa0GET PICTURE METADATA(vImage;IPTC keywords;$tTkeywords)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Apr\xe8s ex\xe9cution de la commande, tTkeywords contient par exemple :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0$tTkeywords{1}="france"\n\xa0$tTkeywords{2}="europe"\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,a.jsx)(n.p,{children:"R\xe9ception de balises \xe0 valeurs multiples dans une variable texte"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0var $vTmots;0 : Text\n\xa0GET PICTURE METADATA(vImage;IPTC keywords;$vTmots)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Apr\xe8s ex\xe9cution de la commande, ",(0,a.jsx)(n.em,{children:"vTmots"}),' contient par exemple "france;europe".']}),"\n",(0,a.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,a.jsx)(n.p,{children:"La variable syst\xe8me OK retourne 1 si la r\xe9cup\xe9ration des m\xe9tadonn\xe9es s\u2019est bien pass\xe9e, et 0 si une erreur se produit ou si au moins une des balises n\u2019est pas trouv\xe9e. Dans tous les cas, les valeurs lisibles sont retourn\xe9es."}),"\n",(0,a.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-picture-keywords",children:"GET PICTURE KEYWORDS"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"Noms des m\xe9tadonn\xe9es images"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-picture-metadata",children:"SET PICTURE METADATA"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"Valeurs des m\xe9tadonn\xe9es images"})]}),"\n",(0,a.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,a.jsx)(n.td,{children:"1122"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifie les variables"}),(0,a.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let a={},r=t.createContext(a);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);