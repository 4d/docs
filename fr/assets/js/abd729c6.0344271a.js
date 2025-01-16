"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33455"],{176426:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>i,assets:()=>l,toc:()=>a,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/localized-document-path","title":"Localized document path","description":"Localized document path ( cheminRelatif ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/localized-document-path.md","sourceDirName":"commands-legacy","slug":"/commands/localized-document-path","permalink":"/docs/fr/commands/localized-document-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flocalized-document-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"localized-document-path","title":"Localized document path","slug":"/commands/localized-document-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get document size","permalink":"/docs/fr/commands/get-document-size"},"next":{"title":"MOVE DOCUMENT","permalink":"/docs/fr/commands/move-document"}}'),r=s("785893"),c=s("250065");let t={id:"localized-document-path",title:"Localized document path",slug:"/commands/localized-document-path",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Localized document path"})," ( ",(0,r.jsx)(n.em,{children:"cheminRelatif"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cheminRelatif"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Chemin d\u2019acc\xe8s relatif du document dont on veut obtenir la version localis\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Chemin d\u2019acc\xe8s absolu du document localis\xe9"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Localized document path"})," retourne le chemin d\u2019acc\xe8s complet (absolu) d\u2019un document d\xe9sign\xe9 par ",(0,r.jsx)(n.em,{children:"cheminRelatif"})," et situ\xe9 dans un dossier xxx.lproj."]}),"\n",(0,r.jsxs)(n.p,{children:["Cette commande doit \xeatre utilis\xe9e dans le cadre d\u2019une architecture d\u2019application multi-langue bas\xe9e sur la pr\xe9sence d\u2019un dossier ",(0,r.jsx)(n.strong,{children:"Resources"})," et de sous-dossiers ",(0,r.jsx)(n.em,{children:"xxx.lproj"})," (xxx repr\xe9sentant une langue). Avec cette architecture, 4D prend automatiquement en charge les fichiers localis\xe9s de type .xliff ainsi que les images, mais vous pouvez avoir besoin d\u2019utiliser le m\xeame m\xe9canisme pour d\u2019autres types de fichiers."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"cheminRelatif"}),' le chemin d\u2019acc\xe8s relatif du document recherch\xe9. Le chemin saisi doit \xeatre relatif au premier niveau d\u2019un dossier "xxx.lproj" de la base. La commande retournera un chemin d\u2019acc\xe8s complet en utilisant le dossier "xxx.lproj" correspondant \xe0 la langue courante de la base.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," La langue courante est d\xe9finie soit automatiquement par 4D en fonction du contenu du dossier ",(0,r.jsx)(n.strong,{children:"Resources"})," (cf. commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-database-localization",children:"Get database localization"}),"), soit via la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-database-localization",children:"SET DATABASE LOCALIZATION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez exprimer le contenu du param\xe8tre ",(0,r.jsx)(n.em,{children:"cheminRelatif"})," \xe0 l\u2019aide d\u2019une syntaxe posix ou syst\xe8me. Par exemple :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"xsl/log.xsl (syntaxe posix : utilisable sous Mac OS ou Windows)"}),"\n",(0,r.jsx)(n.li,{children:"xsl\\log.xsl (Windows uniquement)"}),"\n",(0,r.jsx)(n.li,{children:"xsl:log.xsl (Mac OS uniquement)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Le chemin d\u2019acc\xe8s absolu retourn\xe9 par la commande est toujours exprim\xe9 en syntaxe syst\xe8me."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D Server :"})," En mode distant, la commande retourne le chemin du dossier ",(0,r.jsx)(n.strong,{children:"Resources"})," sur le poste client si la commande est appel\xe9e depuis un process client."]}),"\n",(0,r.jsxs)(n.p,{children:["4D recherche le fichier en respectant une s\xe9quence permettant de traiter tous les cas d\u2019applications multi-langues. A chaque \xe9tape, 4D teste la pr\xe9sence de ",(0,r.jsx)(n.em,{children:"cheminRelatif"})," dans le dossier correspondant \xe0 la langue et retourne le chemin complet en cas de succ\xe8s. Si ",(0,r.jsx)(n.em,{children:"cheminRelatif"})," n\u2019est pas trouv\xe9 ou si le dossier n\u2019existe pas, 4D passe \xe0 l\u2019\xe9tape suivante. Voici les dossiers des \xe9tapes de recherche :"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Langue courante (ex : fr-ca)"}),"\n",(0,r.jsx)(n.em,{children:"Langue courante sans la r\xe9gion (ex : fr)"}),"\n",(0,r.jsx)(n.em,{children:"Langue charg\xe9e par d\xe9faut au d\xe9marrage (ex : es-ga)"}),"\n",(0,r.jsx)(n.em,{children:"Langue charg\xe9e par d\xe9faut au d\xe9marrage sans la r\xe9gion (ex : es)"}),"\n",(0,r.jsx)(n.em,{children:"Premier dossier .lproj trouv\xe9 (ex : it.lproj)"}),"\n",(0,r.jsx)(n.em,{children:"Premier niveau du dossier Resources"})]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"cheminRelatif"})," n\u2019est trouv\xe9 \xe0 aucun de ces emplacements, la commande retourne une cha\xeene vide."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:['Dans le but de transformer un fichier xml en html, vous souhaitez utiliser un fichier de transformation "log.xsl". Ce fichier diff\xe8re suivant la langue courante. Vous souhaitez donc conna\xeetre le chemin du fichier "log.xsl" \xe0 utiliser.',(0,r.jsx)(n.br,{}),"\nVoici le contenu du dossier Resources :"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(906341).Z+"",width:"186",height:"380"})}),"\n",(0,r.jsx)(n.p,{children:"Pour utiliser un fichier .xsl adapt\xe9 \xe0 la langue courante, il vous suffit de passer :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$monxsl:=Localized document path("xsl/log.xsl")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Si la langue courante est, par exemple, le fran\xe7ais canadien (fr-ca), la commande retourne :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'sous Windows : C:\\users\\\u2026\\\u2026\\\u2026\\resources\\fr_ca.lproj\\xsl\\log.xsl"'}),"\n",(0,r.jsx)(n.li,{children:'sous Mac OS : "HardDisk:users:\u2026:\u2026:\u2026:resources:fr_ca.lproj:xsl:log.xsl"'}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-database-localization",children:"Get database localization"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1105"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},906341:function(e,n,s){s.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return t}});var i=s(667294);let r={},c=i.createContext(r);function t(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);