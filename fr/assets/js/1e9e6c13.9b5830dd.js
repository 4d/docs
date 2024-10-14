"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71746],{441633:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(474848),r=n(28453);const i={id:"compact",title:"Page compactage",sidebar_label:"Page compactage"},a=void 0,o={id:"MSC/compact",title:"Page compactage",description:"Cette page permet d\u2019acc\xe9der aux fonctions de compactage du fichier de donn\xe9es et de structure.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/MSC/compact.md",sourceDirName:"MSC",slug:"/MSC/compact",permalink:"/docs/fr/19/MSC/compact",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fcompact.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"compact",title:"Page compactage",sidebar_label:"Page compactage"},sidebar:"docs",previous:{title:"Page Sauvegarde",permalink:"/docs/fr/19/MSC/backup"},next:{title:"Page Retour en arri\xe8re",permalink:"/docs/fr/19/MSC/rollback"}},c={},d=[{value:"Pourquoi compacter ?",id:"pourquoi-compacter-",level:2},{value:"Le compactage standard",id:"le-compactage-standard",level:2},{value:"Voir le compte rendu",id:"voir-le-compte-rendu",level:2},{value:"Mode avanc\xe9",id:"mode-avanc\xe9",level:2},{value:"Compacter les enregistrements et les index",id:"compacter-les-enregistrements-et-les-index",level:3},{value:"Forcer la mise \xe0 jour des enregistrements",id:"forcer-la-mise-\xe0-jour-des-enregistrements",level:3},{value:"Compacter la table d\u2019adresses",id:"compacter-la-table-dadresses",level:3}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Cette page permet d\u2019acc\xe9der aux fonctions de compactage du fichier de donn\xe9es et de structure."}),"\n",(0,t.jsx)(s.h2,{id:"pourquoi-compacter-",children:"Pourquoi compacter ?"}),"\n",(0,t.jsx)(s.p,{children:"Le compactage d'un fichier r\xe9pond \xe0 deux types de besoins :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"R\xe9duction de taille et optimisation des fichiers"})," : les fichiers peuvent comporter des emplacements inutilis\xe9s (des \u201ctrous\u201d). En effet, lorsque vous supprimez des enregistrements, des formulaires, etc., l\u2019emplacement qu\u2019ils occupaient pr\xe9c\xe9demment dans le fichier devient vacant. 4D r\xe9utilise ces emplacements vides lorsque c\u2019est possible, mais la taille des donn\xe9es \xe9tant variable, les suppressions ou modifications successives g\xe9n\xe8rent in\xe9vitablement des espaces inutilisables pour le programme. Il en va de m\xeame lorsqu\u2019une grande quantit\xe9 de donn\xe9es vient d\u2019\xeatre supprim\xe9e : les emplacements vides restent inaffect\xe9s dans le fichier. Le rapport entre la taille du fichier de donn\xe9es et l\u2019espace r\xe9ellement utilis\xe9 pour les donn\xe9es est le taux d\u2019occupation des donn\xe9es. Un taux trop faible peut entra\xeener, outre un gaspillage de place, une d\xe9gradation des performances de la base. La fonction de compactage permet de r\xe9organiser et d\u2019optimiser le stockage des donn\xe9es afin de faire dispara\xeetre les \u201ctrous\u201d. Les zones \u201cInformations\u201d r\xe9sument les donn\xe9es relatives \xe0 la fragmentation des fichiers et sugg\xe8rent les op\xe9rations \xe0 effectuer. Les onglets de la page ",(0,t.jsx)(s.a,{href:"/docs/fr/19/MSC/information#data",children:"Informations"})," du CSM indiquent la fragmentation courante des fichiers de la base."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"R\xe9enregistrement int\xe9gral des donn\xe9es"})," en appliquant le formatage courant d\xe9fini dans le fichier de structure. Ce principe est utile lorsque les donn\xe9es d'une m\xeame table ont \xe9t\xe9 stock\xe9es dans diff\xe9rents formats, par exemple apr\xe8s un changement dans la structure de la base."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Le compactage n\u2019est disponible qu\u2019en mode maintenance. Si vous tentez d\u2019effectuer cette op\xe9ration en mode standard, une bo\xeete de dialogue d\u2019alerte vous pr\xe9vient que l'application va \xeatre ferm\xe9e puis relanc\xe9e en mode maintenance. Il est possible de compacter un fichier de donn\xe9es non ouvert par l'application (cf. paragraphe ",(0,t.jsx)(s.a,{href:"#compact-records-and-indexes",children:"Compacter les enregistrements et les index"})," ci-dessous)."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"le-compactage-standard",children:"Le compactage standard"}),"\n",(0,t.jsx)(s.p,{children:"Pour d\xe9marrer directement le compactage du fichier de donn\xe9es ou de structure, cliquez sur le bouton correspondant dans la fen\xeatre du CSM."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(928796).A+"",width:"158",height:"88"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Le compactage entra\xeenant la duplication du fichier d\u2019origine, le bouton est d\xe9sactiv\xe9 si la place sur le disque contenant le fichier est insuffisante."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Cette op\xe9ration d\xe9fragmente le fichier principal ainsi que les \xe9ventuels fichiers d\u2019index. 4D effectue une copie des fichiers d\u2019origine et les place dans un dossier nomm\xe9 ",(0,t.jsx)(s.strong,{children:"Replaced Files (Compacting)"}),", cr\xe9\xe9 \xe0 c\xf4t\xe9 du fichier d\u2019origine. Si vous effectuez plusieurs compactages, un nouveau dossier est cr\xe9\xe9 \xe0 chaque fois. Il est nomm\xe9 \u201cReplaced Files (Compacting)_1\u201d, \u201cReplaced Files (Compacting)_2\u201d, etc. Vous pouvez modifier le dossier dans lequel les fichiers d\u2019origine sont sauvegard\xe9s via le mode avanc\xe9."]}),"\n",(0,t.jsx)(s.p,{children:"A l\u2019issue de l\u2019op\xe9ration, les fichiers d\xe9fragment\xe9s remplacent automatiquement les fichiers d\u2019origine. L'application est imm\xe9diatement op\xe9rationnelle sans aucune autre manipulation."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Lorsque la base est chiffr\xe9e, le compactage comprend le chiffrement et le d\xe9chiffrement et requiert ainsi la cl\xe9 de chiffrement des donn\xe9es courante. Si aucune cl\xe9 de chiffrement valide n'a encore \xe9t\xe9 fournie, une bo\xeete de dialogue s'affiche pour vous demander de saisir la phrase secr\xe8te ou la cl\xe9 des donn\xe9es."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Attention :"})," Chaque compactage entra\xeene la duplication du fichier d\u2019origine et donc l\u2019augmentation de la taille du dossier de l\u2019application. Il est important de tenir compte de ce m\xe9canisme (notamment sous macOS o\xf9 les applications 4D apparaissent sous forme de packages) pour que l\u2019application ne grossisse pas de fa\xe7on excessive. Une intervention manuelle \xe0 l\u2019int\xe9rieur du package peut \xeatre utile afin de supprimer les copies des fichiers d\u2019origine."]}),"\n",(0,t.jsx)(s.h2,{id:"voir-le-compte-rendu",children:"Voir le compte rendu"}),"\n",(0,t.jsxs)(s.p,{children:["Une fois le compactage termin\xe9, 4D g\xe9n\xe8re un fichier de compte-rendu dans le dossier Logs du projet. Ce fichier liste l\u2019ensemble des op\xe9rations qui ont \xe9t\xe9 men\xe9es. Il est cr\xe9\xe9 au format xml et est nomm\xe9 ",(0,t.jsx)(s.em,{children:"ApplicationName**_Compact_Log_yyyy-mm-dd hh-mm-ss.xml"}),'" o\xf9 :']}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"ApplicationName"}),' est le nom du fichier de structure sans extension, par exemple "Factures",']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"aaaa-mm-jj hh-mm-ss"})," est l'horodatage du fichier, bas\xe9 sur la date et l'heure syst\xe8me locales au moment du lancement de l'op\xe9ration de v\xe9rification, par exemple \"2019-02-11 15-20-45\"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Lorsque vous cliquez sur le bouton ",(0,t.jsx)(s.strong,{children:"Voir le compte rendu"}),", 4D affiche le fichier de compte-rendu le plus r\xe9cent dans le navigateur par d\xe9faut de l\u2019ordinateur."]}),"\n",(0,t.jsx)(s.h2,{id:"mode-avanc\xe9",children:"Mode avanc\xe9"}),"\n",(0,t.jsxs)(s.p,{children:["La page Compactage comporte un bouton ",(0,t.jsx)(s.strong,{children:"Avanc\xe9"}),", permettant d\u2019acc\xe9der \xe0 une page d\u2019options pour le compactage des fichiers de donn\xe9es et de structure."]}),"\n",(0,t.jsx)(s.h3,{id:"compacter-les-enregistrements-et-les-index",children:"Compacter les enregistrements et les index"}),"\n",(0,t.jsxs)(s.p,{children:["La zone ",(0,t.jsx)(s.strong,{children:"Compacter les enregistrements et les index"})," affiche le chemin d\u2019acc\xe8s du fichier de donn\xe9es courant ainsi qu\u2019un bouton ",(0,t.jsx)(s.strong,{children:"[...]"})," permettant de d\xe9signer un autre fichier de donn\xe9es. Lorsque vous cliquez sur ce bouton, une bo\xeete de dialogue standard d\u2019ouverture de documents s\u2019affiche, vous permettant de d\xe9signer le fichier de donn\xe9es \xe0 compacter. Vous devez s\xe9lectionner un fichier de donn\xe9es compatible avec le fichier de structure ouvert. Une fois la bo\xeete de dialogue valid\xe9e, le chemin d\u2019acc\xe8s du fichier \xe0 compacter est indiqu\xe9 dans la fen\xeatre."]}),"\n",(0,t.jsxs)(s.p,{children:["Le second bouton ",(0,t.jsx)(s.strong,{children:"[...]"})," permet de d\xe9signer un autre emplacement pour les sauvegardes des fichiers originaux effectu\xe9es avant compactage. Cette option permet notamment de compacter des fichiers volumineux en utilisant diff\xe9rents disques."]}),"\n",(0,t.jsx)(s.h3,{id:"forcer-la-mise-\xe0-jour-des-enregistrements",children:"Forcer la mise \xe0 jour des enregistrements"}),"\n",(0,t.jsx)(s.p,{children:"Lorsque cette option est coch\xe9e, 4D r\xe9\xe9crit chaque enregistrement de chaque table lors de l\u2019op\xe9ration de compactage, en fonction de sa description en structure. Lorsque l\u2019option n\u2019est pas coch\xe9e, 4D r\xe9organise uniquement le stockage des donn\xe9es sur le disque. Cette option est utile dans les cas suivants :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Lorsque des modifications de types de champs ont \xe9t\xe9 apport\xe9es \xe0 la structure d\u2019une application apr\xe8s que des donn\xe9es ont \xe9t\xe9 saisies. Par exemple, vous pouvez avoir chang\xe9 le type d\u2019un champ Entier long en R\xe9el. 4D autorise m\xeame des modifications entre des types tr\xe8s diff\xe9rents (avec risques de pertes de donn\xe9es), par exemple un champ R\xe9el peut \xeatre chang\xe9 en Texte et inversement. Dans ce cas, 4D ne convertit pas r\xe9troactivement les donn\xe9es d\xe9j\xe0 saisies, elles ne sont converties que si les enregistrements sont charg\xe9s puis sauvegard\xe9s. L\u2019option permet de forcer la conversion de toutes les donn\xe9es."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Lorsqu\u2019une option de stockage externe des donn\xe9es de type Texte, Image ou BLOB a \xe9t\xe9 modifi\xe9e apr\xe8s que des donn\xe9es aient \xe9t\xe9 saisies. Ce cas peut notamment se produire apr\xe8s conversion d\u2019une base en version 4D ant\xe9rieure \xe0 la v13. Comme pour le cas du retypage ci-dessus, 4D ne modifie pas r\xe9troactivement les donn\xe9es d\xe9j\xe0 saisies. Pour cela, vous pouvez forcer la mise \xe0 jour des enregistrements afin d\u2019appliquer le nouveau mode de stockage aux enregistrements d\xe9j\xe0 saisis."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Lorsque des champs ou des tables ont \xe9t\xe9 supprim\xe9(e)s. Dans ce cas, le compactage avec mise \xe0 jour des enregistrements permet de r\xe9cup\xe9rer la place de ces donn\xe9es supprim\xe9es et donc de r\xe9duire la taille du fichier."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"La s\xe9lection de cette option entra\xeene la mise \xe0 jour de tous les index."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"compacter-la-table-dadresses",children:"Compacter la table d\u2019adresses"}),"\n",(0,t.jsx)(s.p,{children:"(option accessible uniquement lorsque la pr\xe9c\xe9dente est coch\xe9e)"}),"\n",(0,t.jsx)(s.p,{children:"Cette option provoque la reconstruction compl\xe8te de la table d\u2019adresses des enregistrements au moment du compactage. Cette op\xe9ration permet d\u2019optimiser la taille de la table d\u2019adresses. Elle est principalement utile dans les bases de donn\xe9es o\xf9 de tr\xe8s nombreux enregistrements ont \xe9t\xe9 cr\xe9\xe9s puis supprim\xe9s. Dans les autres cas, l\u2019optimisation ne sera pas d\xe9terminante."}),"\n",(0,t.jsxs)(s.p,{children:["A noter que cette option ralentit le compactage de fa\xe7on cons\xe9quente et qu\u2019elle rend invalides les ensembles sauvegard\xe9s via la commande ",(0,t.jsx)(s.code,{children:"SAVE SET"}),". Il est d\u2019ailleurs fortement recommand\xe9 dans ce cas de supprimer les ensembles sauvegard\xe9s car leur utilisation peut conduire \xe0 des s\xe9lections de donn\xe9es erron\xe9es."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Le compactage tient compte des enregistrements des tables plac\xe9es dans la corbeille. La pr\xe9sence d\u2019un grand nombre d\u2019enregistrements dans la corbeille peut constituer un facteur de ralentissement suppl\xe9mentaire pour l\u2019op\xe9ration."}),"\n",(0,t.jsx)(s.li,{children:"L'utilisation de cette option rend la table d'adresses, et donc la base de donn\xe9es, incompatibles avec le fichier d'historique courant (s'il en existe un). Il sera automatiquement sauvegard\xe9 et un nouveau fichier d'historique devra \xeatre cr\xe9\xe9 au prochain lancement de l'application."}),"\n",(0,t.jsxs)(s.li,{children:["Vous pouvez d\xe9terminer si la table d'adresses a besoin d'\xeatre compact\xe9e en comparant sa taille avec le nombre total d'enregistrements dans la Page ",(0,t.jsx)(s.a,{href:"/docs/fr/19/MSC/information",children:"Informations"})," du CSM."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1051.html",children:(0,t.jsx)(s.code,{children:"TRUNCATE TABLE"})})," command automatically resets the address table for the specified table."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},928796:(e,s,n)=>{n.d(s,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABYCAIAAACLVtmFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAS+SURBVHhe7ZrLSitbEIbP2x40UdRgFBGNg4iKiCByQPE2EiLqSCcOoqIEnIjXiIrJeQOfwHN+U3+ys3vbScftbrsq9Q2aXrUuheuje61l+q9dxyjvav91zOFqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqf3B2dra+vp7L5TKZTG9vL664RwRxtlCFq33n5ORkcnLy73BQizZsrYRuV1utVtfW1sRfNpvd2to6Pz+/v7+vVCq44h4RxKUBWqI9eyaerlYLT/Pz83CWSqUKhcLLy4vEt7e3EcRVioijFm0QRHstdrtarTyvQ0NDpVKJoRoBtQLaoCXi6MVQsuletVg74QnPYrPXy8vLhYWFjY0NVOGKe0RYV7Mrz66Kdbd71cq+CW9almtMT08jiO1x44oI62qgPYLoy3KC6VK1OM/AEPZHjfVVuL29HR0dRZWAe0RYVwPtZVeV/BNRl6rFaRV6sPtluQm4HBkZEa83NzeMNoFeqMUILCeVLlWby+WgB2cbln/m+voa7+HA89oAvdAXI7CcVOyoxV/xT2RkN4STKzt3AnqhbyaTYTmp2FELYa+vr/9FQ9RWKhV2roPgr7CuDnohiE0Wy0nFlFp6i4Bshfyp1UFHauWQE7bWYvfka22C6Ejtzs4O9PgOWQcBtSi24OnpCXr8XKsDCKPVaOTzeRjy/0YpoFO15XIZkvx/yAoIqH1/7bZjfHwcntLpdLNd4L/8JAuootXIvL29LS8vwxaeRbxpG+tuQC3iqJXn1X+v/QY+oRbAriyfAPsj7H5xtsHJ1b+ySAqY8YDa9xduZObm5mRXFYZ/G/Vt7O3twRCtfhaciHDexZYY715sj/2Lxu8HR8/+/v7fV9sAQ2HAsP9GacGCWrxO8c4MqEUxOuxTBxEMiGGZQCfq1R4eHtZWw6Da30HUAgzONArRrfbh4WFwcFA0/Am1GBwpmEwbutUuLS2JA9x8rdrmkZlMG4rVFotFmX1seXAG/Vq1GBDDyvhIxJSq0KoWB5Xh4WGZ+v39fUa/FAwr4yMR0jGqB61qV1dXZd6npqaq1WqhUMCj9oVgQAyLwSUL0jGxHlSqLZVKPT09mHFcLy4uGP0DYPBGosBPCMlHpVr5CuJDUqnUzMwMH70OmZ2dFZEfks1mmV4JKtVyskPo6+u7urpi08g8Pj5mMhkOEQKbKsGgWoDzKJ/EyIyNjbFzOEyvBN1qWa6DpVG+egGbm5uMRuD09FR6gaOjI0brsMLVxgBn+qO5lk8VAVbNg4MDRltyd3fX+NRtcXGR0SakCrCsBGtqgfxa8AkGBgbK5TJHaYLVrjYGONMhcw09ExMTbBEZbL6Oj485xM+whauNAc50+Fw/Pz+vrKxE2RmBdDqdz+dbHFvZztXGAGc6rrlmMlcbA5xpV9sSV9seJnO1McCZdrUtcbXtYTJXGwOcaVfbElfbHiZztTHAmXa1LXG17WEyVxsDnOnYYXolqFTb+OAtTpCU6ZWgUm2xWIzZLtKp+2RVpVonCq7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLFTrGGR393+ISMRFHIYADQAAAABJRU5ErkJggg=="},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(296540);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);