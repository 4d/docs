"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61737"],{398708:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/dom-parse-xml-source","title":"DOM Parse XML source","description":"DOM Parse XML source ( nomFichier {; validation {; dtd | sch\xe9ma}} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/dom-parse-xml-source.md","sourceDirName":"commands-legacy","slug":"/commands/dom-parse-xml-source","permalink":"/docs/fr/commands/dom-parse-xml-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-parse-xml-source.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"dom-parse-xml-source","title":"DOM Parse XML source","slug":"/commands/dom-parse-xml-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Insert XML element","permalink":"/docs/fr/commands/dom-insert-xml-element"},"next":{"title":"DOM Parse XML variable","permalink":"/docs/fr/commands/dom-parse-xml-variable"}}'),t=s("785893"),i=s("250065");let d={id:"dom-parse-xml-source",title:"DOM Parse XML source",slug:"/commands/dom-parse-xml-source",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DOM Parse XML source"})," ( ",(0,t.jsx)(n.em,{children:"nomFichier"})," {; ",(0,t.jsx)(n.em,{children:"validation"})," {; dtd | sch\xe9ma}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomFichier"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Chemin d\u2019acc\xe8s du document"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"validation"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Vrai = Validation, Faux = Pas de validation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dtd | sch\xe9ma"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Emplacement de la DTD ou du sch\xe9ma XML"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"R\xe9f\xe9rence de l\u2019\xe9l\xe9ment XML"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"DOM Parse XML source"})," analyse un document contenant une structure XML et retourne une r\xe9f\xe9rence pour ce document. La commande peut valider ou non le document via une DTD ou un sch\xe9ma XML (document XSD, XML Schema Definition).",(0,t.jsx)(n.br,{}),"\nLe document peut \xeatre situ\xe9 sur disque ou sur Internet/Intranet."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," L'ex\xe9cution de la commande ",(0,t.jsx)(n.strong,{children:"DOM Parse XML source"})," est synchrone."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez passer dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"document"})," :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"soit un chemin d\u2019acc\xe8s complet standard (du type C:\\\\Dossier\\\\Fichier\\\\... sous Windows et MacintoshHD:Dossier:Fichier sous Mac OS),"}),"\n",(0,t.jsx)(n.li,{children:"soit un chemin Unix sous Mac OS (d\xe9butant obligatoirement par /)."}),"\n",(0,t.jsxs)(n.li,{children:["soit un chemin r\xe9seau du type ",(0,t.jsx)(n.a,{href:"http://www.site.com/Fichier",children:"http://www.site.com/Fichier"})," ou ftp://public.ftp.com..."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre bool\xe9en ",(0,t.jsx)(n.em,{children:"validation"})," vous permet d\u2019indiquer si vous souhaitez que la structure soit valid\xe9e ou non."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"validation"})," vaut Vrai, la structure sera valid\xe9e. Dans ce cas, l\u2019analyseur tentera de valider la structure XML du document sur la base de la r\xe9f\xe9rence DTD ou XSD incluse dans le document, ou via la DTD ou le sch\xe9ma XML d\xe9sign\xe9(e) par le troisi\xe8me param\xe8tre s'il est pass\xe9."]}),"\n",(0,t.jsxs)(n.li,{children:["Si ",(0,t.jsx)(n.em,{children:"validation"})," vaut Faux, la structure ne sera pas valid\xe9e."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez Vrai dans ",(0,t.jsx)(n.em,{children:"validation"})," et omettez le troisi\xe8me param\xe8tre, la commande tentera de valider la structure XML via une r\xe9f\xe9rence DTD ou XSD trouv\xe9e dans la structure elle-m\xeame. La validation peut \xeatre indirecte : si la structure contient une r\xe9f\xe9rence vers une fichier DTD qui lui-m\xeame contient une r\xe9f\xe9rence vers un fichier XSD, la commande tentera d\u2019effectuer les deux validations."]}),"\n",(0,t.jsx)(n.p,{children:"Le troisi\xe8me param\xe8tre vous permet de d\xe9signer une DTD sp\xe9cifique ou un sch\xe9ma XML pour l\u2019analyse du document. Si vous utilisez ce param\xe8tre, la commande ne tient pas compte de la DTD r\xe9f\xe9renc\xe9e dans le document XML."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Validation par DTD"}),(0,t.jsx)(n.br,{}),"\nIl existe deux moyens pour d\xe9signer une DTD :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["en tant que r\xe9f\xe9rence. Il vous suffit pour cela de passer le chemin d\u2019acc\xe8s complet de la nouvelle DTD (extension \u201Cdtd\u201D) dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"dtd"}),". Si le document d\xe9sign\xe9 ne contient pas de DTD valide, le param\xe8tre ",(0,t.jsx)(n.em,{children:"dtd"})," est ignor\xe9 et une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsx)(n.li,{children:"directement dans un texte. Dans ce cas, si le contenu du param\xe8tre d\xe9bute par \u201C<?xml\u201D, 4D consid\xe9rera qu\u2019il s\u2019agit de la DTD ; dans le cas contraire, 4D consid\xe9rera qu\u2019il s\u2019agit d\u2019un chemin d\u2019acc\xe8s."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Validation par schema"}),(0,t.jsx)(n.br,{}),"\nPour valider le document via un sch\xe9ma XML, il suffit de passer dans le troisi\xe8me param\xe8tre un fichier ou un URL d\u2019extension\u201Cxsd\u201D au lieu de \u201Cdtd\u201D. La validation par sch\xe9ma XML est consid\xe9r\xe9e comme plus souple et plus puissante que la validation par DTD. Le langage des documents XSD est bas\xe9 sur le langage XML. Les sch\xe9mas XML prennent notamment en charge des types de donn\xe9es. Pour plus d\u2019informations sur les sch\xe9mas XML, reportez-vous \xe0 l\u2019adresse ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"http://www.w3.org/XML/Schema",children:"http://www.w3.org/XML/Schema"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si la validation ne peut \xeatre effectu\xe9e (pas de DTD ou d'XSD, URL incorrect, etc.), une erreur est g\xe9n\xe9r\xe9e. La variable syst\xe8me Error indique le num\xe9ro de l\u2019erreur. Vous pouvez intercepter cette erreur \xe0 l\u2019aide d\u2019une m\xe9thode install\xe9e par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"La commande retourne une cha\xeene de 16 caract\xe8res (RefEl\xe9ment) constituant la r\xe9f\xe9rence en m\xe9moire de la structure virtuelle du document. Cette r\xe9f\xe9rence devra \xeatre utilis\xe9e avec les autres commandes d\u2019analyse XML."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important :"})," Une fois que vous n'en avez plus besoin, n'oubliez pas d'appeler la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/dom-close-xml",children:"DOM CLOSE XML"})," avec cette r\xe9f\xe9rence afin de lib\xe9rer la m\xe9moire."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Ouverture sans validation d\u2019un document XML situ\xe9 sur disque :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$ref_XML_Struct:=DOM Parse XML source("C:\\\\import.xml")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Ouverture sans validation d\u2019un document XML situ\xe9 \xe0 c\xf4t\xe9 du fichier de structure de la base :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$ref_XML_Struct:=DOM Parse XML source("import.xml")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Ouverture d\u2019un document XML situ\xe9 sur disque et validation \xe0 l\u2019aide d\u2019une DTD situ\xe9e sur le disque :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$ref_XML_Struct:=DOM Parse XML source("C:\\\\import.xml";True;"C:\\\\import_dtd.xml")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsx)(n.p,{children:"Ouverture sans validation d\u2019un document XML situ\xe9 \xe0 un URL sp\xe9cifique :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$ref_XML_Struct:=DOM Parse XML source("http://www.4D.fr/xml/import.xml")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, la variable syst\xe8me OK prend la valeur 1. Sinon, elle prend la valeur 0."}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/dom-close-xml",children:"DOM CLOSE XML"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/dom-parse-xml-variable",children:"DOM Parse XML variable"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"719"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);