"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10702"],{609528:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/set-picture-metadata","title":"SET PICTURE METADATA","description":"SET PICTURE METADATA ( image ; nomMeta ; contenuMeta {; nomMeta2 ; contenuMeta2 ; ... ; nomMetaN ; contenuMetaN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-picture-metadata.md","sourceDirName":"commands-legacy","slug":"/commands/set-picture-metadata","permalink":"/docs/fr/commands/set-picture-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-picture-metadata.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-picture-metadata","title":"SET PICTURE METADATA","slug":"/commands/set-picture-metadata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PICTURE FILE NAME","permalink":"/docs/fr/commands/set-picture-file-name"},"next":{"title":"SET PICTURE TO LIBRARY","permalink":"/docs/fr/commands/set-picture-to-library"}}'),r=s("785893"),d=s("250065");let a={id:"set-picture-metadata",title:"SET PICTURE METADATA",slug:"/commands/set-picture-metadata",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Note",id:"note",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET PICTURE METADATA"})," ( ",(0,r.jsx)(n.em,{children:"image"})," ; ",(0,r.jsx)(n.em,{children:"nomMeta"})," ; ",(0,r.jsx)(n.em,{children:"contenuMeta"})," {; ",(0,r.jsx)(n.em,{children:"nomMeta2"})," ; ",(0,r.jsx)(n.em,{children:"contenuMeta2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"nomMetaN"})," ; ",(0,r.jsx)(n.em,{children:"contenuMetaN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"image"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Image dont vous souhaitez \xe9crire les m\xe9tadonn\xe9es"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomMeta"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom ou chemin du bloc \xe0 \xe9crire"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"contenuMeta"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Contenu de la m\xe9tadonn\xe9e"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SET PICTURE METADATA"})," permet d\u2019\xe9crire ou de modifier le contenu de m\xe9tadonn\xe9es (ou m\xe9ta-balises) pr\xe9sentes dans ",(0,r.jsx)(n.em,{children:"image"})," (champ ou une variable image 4D), lorsqu'elles sont modifiables."]}),"\n",(0,r.jsx)(n.p,{children:"Les m\xe9tadonn\xe9es sont des informations suppl\xe9mentaires ins\xe9r\xe9es dans les images. 4D permet de manipuler quatre types de m\xe9tadonn\xe9es standard : EXIF, GPS, IPTC et TIFF."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Pour une description d\xe9taill\xe9e de ces types de metadonn\xe9es, vous pouvez consulter les documents suivants : ",(0,r.jsx)(n.a,{href:"http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf",children:"http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf"})," (IPTC) et ",(0,r.jsx)(n.a,{href:"http://exif.org/Exif2-2.PDF",children:"http://exif.org/Exif2-2.PDF"})," (TIFF, EXIF et GPS)."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"nomMeta"})," une cha\xeene d\xe9signant le type de m\xe9tadonn\xe9e \xe0 \xe9crire ou \xe0 modifier. Vous pouvez passer :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["une des constantes du th\xe8me ",(0,r.jsx)(n.em,{children:"Noms des m\xe9tadonn\xe9es images"}),'. Ce th\xe8me regroupe toutes les balises prises en charge par 4D. Chaque constante contient un chemin de balise (par exemple "TIFF/DateTime"),']}),"\n",(0,r.jsx)(n.li,{children:'le nom d\u2019un bloc complet de m\xe9tadonn\xe9es ("TIFF", "EXIF", "GPS" ou "IPTC"),'}),"\n",(0,r.jsx)(n.li,{children:'une cha\xeene vide ("").'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"contenuMeta"})," les nouvelles valeurs de la m\xe9tadonn\xe9e :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si vous avez pass\xe9 une constante de chemin de balise dans ",(0,r.jsx)(n.em,{children:"nomMeta"}),", passez directement dans ",(0,r.jsx)(n.em,{children:"contenuMeta"})," la valeur \xe0 \xe9crire ou l\u2019une des constantes appropri\xe9es du th\xe8me ",(0,r.jsx)(n.em,{children:"Valeurs des m\xe9tadonn\xe9es images"}),'. La valeur peut \xeatre de type texte, entier long, r\xe9el, date ou heure, en fonction de la m\xe9tadonn\xe9e d\xe9sign\xe9e. Vous pouvez utiliser un tableau si la m\xe9tadonn\xe9e contient plus d\u2019une valeur. Si vous passez une cha\xeene, elle doit \xeatre format\xe9e en XML (norme XMP). Passez une cha\xeene vide ("") pour effacer la m\xe9tadonn\xe9e si elle existe. Si ',(0,r.jsx)(n.em,{children:"nomMeta"})," est ",(0,r.jsx)(n.em,{children:"ind\xe9finie"}),", n'importe quelle cha\xeene est utilis\xe9e."]}),"\n",(0,r.jsxs)(n.li,{children:["Si vous avez pass\xe9 un nom de bloc ou une cha\xeene vide dans ",(0,r.jsx)(n.em,{children:"nomMeta"}),", passez dans ",(0,r.jsx)(n.em,{children:"contenuMeta"})," la r\xe9f\xe9rence XML DOM de l\u2019\xe9l\xe9ment contenant les m\xe9tadonn\xe9es \xe0 \xe9crire. Dans le cas d\u2019une cha\xeene vide, toutes les m\xe9tadonn\xe9es seront modifi\xe9es."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Attention :"})," Certaines m\xe9tadonn\xe9es sont en lecture seulement, par exemple TIFF xResolution/TIFF yResolution, EXIF color space ou EXIF pixel X dimension/EXIF pixel Y dimension, elles ne peuvent donc pas \xeatre modifi\xe9es par la commande ",(0,r.jsx)(n.strong,{children:"SET PICTURE METADATA"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Sous Windows, si une erreur se produit durant l\u2019ex\xe9cution de la commande, la variable OK prend la valeur 0. A noter que sous Mac OS, pour des raisons techniques, les erreurs d\u2019\xe9criture des m\xe9tadonn\xe9es ne sont pas d\xe9tect\xe9es. La variable OK n\u2019est pas modifi\xe9e par cette commande sous Mac OS."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Seuls certains formats d'images (notamment JPEG et TIFF) prennent en charge les m\xe9tadonn\xe9es. A l'inverse, des formats tels que GIF ou BMP n'acceptent pas les m\xe9tadonn\xe9es. En cas de conversion d'une image avec m\xe9tadonn\xe9es dans un format ne les prenant pas en charge, les informations sont perdues."}),"\n",(0,r.jsx)(n.li,{children:"Sous OS X version 10.7 (Lion), un bogue du framework natif utilis\xe9 pour l'encodage et le d\xe9codage des m\xe9tadonn\xe9es d'images peut entra\xeener des erreurs de pr\xe9cision dans les coordonn\xe9es GPS. Dans ce cas, une mise \xe0 jour vers OS X 10.8 (Mountain Lion) ou 10.9 (Maverick) est fortement recommand\xe9e."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:'Ecriture de plusieurs valeurs de la m\xe9tadonn\xe9e "Keywords" via des tableaux :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($tTkeywords;2)\n\xa0$tTkeywords{1}:="france"\n\xa0$tTkeywords{2}:="europe"\n\xa0SET PICTURE METADATA(vImage;IPTC keywords;$tTkeywords)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Ecriture du bloc GPS via une r\xe9f\xe9rence DOM :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $domMetas : Text\n\xa0$domMetas:=DOM Parse XML source("metas.xml")\n\xa0var $refGPS : Text\n\xa0$refGPS:=DOM Find XML element($domMetas;"Metadatas/GPS")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SET PICTURE METADATA(vImage;"GPS";$refGPS)\xa0\xa0//$refGPS pointe bien ici sur l\'\xe9lement GPS\n\xa0\xa0\xa0\xa0...\n\xa0End if\n\xa0DOM CLOSE XML($domMetas)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"note",children:"Note"}),"\n",(0,r.jsx)(n.p,{children:"Lorsque toutes les m\xe9tadonn\xe9es sont manipul\xe9es via une r\xe9f\xe9rence d\u2019\xe9l\xe9ments DOM, les balises sont stock\xe9es comme attributs attach\xe9s \xe0 un \xe9l\xe9ment (enfant de l\u2019\xe9l\xe9ment r\xe9f\xe9renc\xe9) dont le nom est le nom du bloc (TIFF, IPTC, etc.). Lorsqu\u2019un bloc de m\xe9tadonn\xe9es sp\xe9cifique est manipul\xe9, les balises du bloc sont stock\xe9es comme attributs directement attach\xe9s \xe0 l\u2019\xe9lement r\xe9f\xe9renc\xe9 par la commande."}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-picture-keywords",children:"GET PICTURE KEYWORDS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-picture-metadata",children:"GET PICTURE METADATA"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Noms des m\xe9tadonn\xe9es images"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Valeurs des m\xe9tadonn\xe9es images"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1121"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var t=s(667294);let r={},d=t.createContext(r);function a(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);