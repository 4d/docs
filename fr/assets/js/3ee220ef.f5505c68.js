"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89638"],{815436:function(e,i,r){r.r(i),r.d(i,{metadata:()=>s,contentTitle:()=>o,default:()=>c,assets:()=>u,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"Backup/log","title":"Fichier d\'historique (.journal)","description":"Une base exploit\xe9e de mani\xe8re continue enregistre en permanence des modifications, des ajouts ou des suppressions d\u2019enregistrements. R\xe9aliser des sauvegardes r\xe9guli\xe8res des donn\xe9es est important mais ne permet pas, en cas d\u2019incident, de r\xe9cup\xe9rer les donn\xe9es saisies depuis la derni\xe8re sauvegarde. Pour r\xe9pondre \xe0 ce besoin, 4D dispose d\u2019un outil particulier : le fichier d\u2019historique. Ce fichier permet d\u2019assurer la s\xe9curit\xe9 permanente des donn\xe9es de la base.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Backup/log.md","sourceDirName":"Backup","slug":"/Backup/log","permalink":"/docs/fr/18/Backup/log","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Flog.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"log","title":"Fichier d\'historique (.journal)"},"sidebar":"docs","previous":{"title":"Param\xe8tres de sauvegarde","permalink":"/docs/fr/18/Backup/settings"},"next":{"title":"Restitution","permalink":"/docs/fr/18/Backup/restore"}}'),n=r("785893"),t=r("250065");let a={id:"log",title:"Fichier d'historique (.journal)"},o=void 0,u={},d=[{value:"Fonctionnement du fichier d&#39;historique",id:"fonctionnement-du-fichier-dhistorique",level:2},{value:"Cr\xe9er le fichier d\u2019historique",id:"cr\xe9er-le-fichier-dhistorique",level:2},{value:"Fermer l\u2019historique",id:"fermer-lhistorique",level:2}];function l(e){let i={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Une base exploit\xe9e de mani\xe8re continue enregistre en permanence des modifications, des ajouts ou des suppressions d\u2019enregistrements. R\xe9aliser des sauvegardes r\xe9guli\xe8res des donn\xe9es est important mais ne permet pas, en cas d\u2019incident, de r\xe9cup\xe9rer les donn\xe9es saisies depuis la derni\xe8re sauvegarde. Pour r\xe9pondre \xe0 ce besoin, 4D dispose d\u2019un outil particulier : le fichier d\u2019historique. Ce fichier permet d\u2019assurer la s\xe9curit\xe9 permanente des donn\xe9es de la base."}),"\n",(0,n.jsx)(i.p,{children:"En outre, 4D travaille en permanence avec un cache de donn\xe9es situ\xe9 en m\xe9moire. Toute modification effectu\xe9e sur les donn\xe9es de la base est stock\xe9e provisoirement dans le cache avant d\u2019\xeatre \xe9crite sur le disque dur. Ce principe permet d\u2019acc\xe9l\xe9rer le fonctionnement des applications ; en effet, les acc\xe8s m\xe9moire sont bien plus rapides que les acc\xe8s disque. Si un incident survient sur la base avant que les donn\xe9es stock\xe9es dans le cache aient pu \xeatre \xe9crites sur le disque, vous devrez int\xe9grer le fichier d\u2019historique courant afin de r\xe9cup\xe9rer enti\xe8rement la base."}),"\n",(0,n.jsxs)(i.p,{children:["Enfin, 4D dispose d'une fonction d'analyse du contenu du fichier d'historique, permettant \xe9galement de remonter en arri\xe8re parmi les op\xe9rations. Ces fonctions sont accessibles via le CSM : reportez-vous aux sections ",(0,n.jsx)(i.a,{href:"/docs/fr/18/MSC/analysis",children:"Page Analyse d'activit\xe9s"})," et ",(0,n.jsx)(i.a,{href:"/docs/fr/18/MSC/rollback",children:"Page Retour arri\xe8re"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"fonctionnement-du-fichier-dhistorique",children:"Fonctionnement du fichier d'historique"}),"\n",(0,n.jsxs)(i.p,{children:["L\u2019historique g\xe9n\xe9r\xe9 par 4D se pr\xe9sente sous la forme d\u2019un fichier dans lequel toutes les op\xe9rations effectu\xe9es sur les donn\xe9es des tables journalis\xe9es de la base viennent s\u2019inscrire s\xe9quentiellement. Par d\xe9faut, toutes les tables sont journalis\xe9es, c'est-\xe0-dire incluses dans l'historique, mais vous pouvez en d\xe9s\xe9lectionner certaines via la propri\xe9t\xe9 ",(0,n.jsx)(i.strong,{children:"Inclure dans le fichier d'historique"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Ainsi, chaque op\xe9ration effectu\xe9e par un utilisateur provoque deux actions simultan\xe9es : une premi\xe8re sur les donn\xe9es de la base (l\u2019instruction est ex\xe9cut\xe9e normalement) et une seconde dans le fichier d\u2019historique (la description de l\u2019op\xe9ration y est enregistr\xe9e). Le fichier d\u2019historique se construit de mani\xe8re ind\xe9pendante, sans g\xeaner ni ralentir le travail de l\u2019utilisateur. Le fichier d\u2019historique se construit de mani\xe8re ind\xe9pendante, sans g\xeaner ni ralentir le travail de l\u2019utilisateur. Le fichier d\u2019historique enregistre les types d\u2019op\xe9rations suivants :"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Ouvertures et fermetures du fichier de donn\xe9es,"}),"\n",(0,n.jsx)(i.li,{children:"Ouvertures et fermetures de process (contextes),"}),"\n",(0,n.jsx)(i.li,{children:"Ajouts d\u2019enregistrements et de BLOBs,"}),"\n",(0,n.jsx)(i.li,{children:"Modifications d\u2019enregistrements,"}),"\n",(0,n.jsx)(i.li,{children:"Suppressions d\u2019enregistrements,"}),"\n",(0,n.jsx)(i.li,{children:"Cr\xe9ations et fermetures de transactions."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Pour plus d\u2019informations sur ces actions, reportez-vous \xe0 la section ",(0,n.jsx)(i.a,{href:"/docs/fr/18/MSC/analysis",children:"Page Analyse d'activit\xe9s"})," du CSM."]}),"\n",(0,n.jsx)(i.p,{children:"Le fichier d\u2019historique est g\xe9r\xe9 par 4D. Il prend en compte indiff\xe9remment toutes les op\xe9rations affectant le fichier de donn\xe9es, que ce soient des manipulations effectu\xe9es par un utilisateur, des m\xe9thodes 4D, le moteur SQL, des plug-ins, un navigaeur Web ou une application mobile."}),"\n",(0,n.jsx)(i.p,{children:"Ce sch\xe9ma r\xe9sume le principe g\xe9n\xe9ral de fonctionnement du fichier d\u2019historique :"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:r(833280).Z+"",width:"523",height:"448"})}),"\n",(0,n.jsx)(i.p,{children:"Le fichier d\u2019historique courant est automatiquement sauvegard\xe9 avec le fichier de donn\xe9es courant. Ce m\xe9canisme procure deux avantages principaux :"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Eviter la saturation du disque accueillant le fichier d\u2019historique. En effet, sans sauvegarde, l\u2019historique grossirait ind\xe9finiment au fur et \xe0 mesure de l\u2019exploitation de la base et finirait par saturer votre disque. A chaque sauvegarde du fichier de donn\xe9es, 4D ou 4D Server ferme le fichier d\u2019historique courant et d\xe9bute imm\xe9diatement un nouveau fichier vide, \xe9vitant ainsi le risque de saturation. L\u2019ancien fichier d\u2019historique est alors archiv\xe9 puis \xe9ventuellement d\xe9truit, conform\xe9ment au m\xe9canisme des jeux de sauvegarde."}),"\n",(0,n.jsx)(i.li,{children:"Conserver les fichiers d\u2019historique correspondant aux sauvegardes, afin de pouvoir analyser ou r\xe9parer a posteriori une base. En effet, l\u2019int\xe9gration du fichier d\u2019historique ne peut se faire que dans la base qui lui correspond. Il est donc important, pour pouvoir int\xe9grer correctement un fichier d\u2019historique dans une sauvegarde, de disposer de sauvegardes et d\u2019historiques archiv\xe9s simultan\xe9ment."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"cr\xe9er-le-fichier-dhistorique",children:"Cr\xe9er le fichier d\u2019historique"}),"\n",(0,n.jsxs)(i.p,{children:["Par d\xe9faut, toute base cr\xe9\xe9e avec 4D utilise un fichier d\u2019historique (option d\xe9finie dans la Page ",(0,n.jsx)(i.strong,{children:"G\xe9n\xe9ral"})," des Pr\xe9f\xe9rences de 4D). Le fichier d\u2019historique est nomm\xe9 par d\xe9faut ",(0,n.jsx)(i.em,{children:"data.journal"})," et est plac\xe9 dans le dossier Data."]}),"\n",(0,n.jsxs)(i.p,{children:["Vous pouvez \xe0 tout moment savoir si votre base utilise un fichier d\u2019historique : l\u2019option ",(0,n.jsx)(i.strong,{children:"Utiliser le fichier d\u2019historique"})," est coch\xe9e dans la Page ",(0,n.jsx)(i.strong,{children:"Sauvegarde/Configuration"})," des Propri\xe9t\xe9s de la base. Si vous avez d\xe9s\xe9lectionn\xe9 cette option ou si vous utilisez une base sans fichier d\u2019historique et souhaitez mettre en place une strat\xe9gie de sauvegarde avec fichier d\u2019historique, il vous appartient d\u2019en cr\xe9er un."]}),"\n",(0,n.jsx)(i.p,{children:"Pour cr\xe9er un fichier d\u2019historique :"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Dans la Page ",(0,n.jsx)(i.strong,{children:"Sauvegarde/Configuration"})," des Propri\xe9t\xe9s de la base, cochez l\u2019option ",(0,n.jsx)(i.strong,{children:"Utiliser le fichier d\u2019historique"}),". Le programme affiche une bo\xeete de dialogue standard d'ouverture/cr\xe9ation de fichier. Par d\xe9faut, le fichier journal est nomm\xe9 ",(0,n.jsx)(i.em,{children:"data.journal"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Conservez le nom par d\xe9faut ou renommez-le, puis s\xe9lectionnez l'emplacement du fichier. Si vous disposez d\u2019au moins deux disques durs, il est recommand\xe9 de placer l\u2019historique sur un autre disque que celui contenant la base, afin de pouvoir l\u2019exploiter en cas de perte totale du disque de la base. Si le disque dur de la base de donn\xe9es est perdu, vous pouvez toujours rappeler votre fichier d'historique."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Cliquez sur ",(0,n.jsx)(i.strong,{children:"Enregistrer"}),". Le disque et le nom du fichier journal ouvert sont maintenant affich\xe9s dans la zone ",(0,n.jsx)(i.strong,{children:"Use Log"})," de la bo\xeete de dialogue. Vous pouvez cliquer sur cette zone pour afficher un menu contextuel contenant le chemin d'acc\xe8s au journal sur le disque."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Validez la bo\xeete de dialogue des Propri\xe9t\xe9s de la base."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Pour que vous puissiez directement cr\xe9er un fichier d\u2019historique, la base de donn\xe9es doit se trouver dans une des situations suivantes :"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Le fichier de donn\xe9es est vierge,"}),"\n",(0,n.jsx)(i.li,{children:"Vous venez d\u2019effectuer une sauvegarde de la base et aucune modification sur les donn\xe9es n\u2019a encore \xe9t\xe9 effectu\xe9e."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Dans tous les autres cas, au moment o\xf9 vous validez la fen\xeatre des Propri\xe9t\xe9s de la base, une bo\xeete de dialogue d\u2019alerte vous informe qu\u2019une sauvegarde est n\xe9cessaire. Si vous cliquez sur ",(0,n.jsx)(i.strong,{children:"OK"}),", la sauvegarde d\xe9marre imm\xe9diatement puis l\u2019historique est activ\xe9. Si vous cliquez sur ",(0,n.jsx)(i.strong,{children:"OK"}),", la sauvegarde d\xe9marre imm\xe9diatement puis l\u2019historique est activ\xe9. If you click ",(0,n.jsx)(i.strong,{children:"OK"}),", the backup begins immediately, then the log file is activated."]}),"\n",(0,n.jsx)(i.p,{children:"Sans autre manipulation de votre part, toutes les op\xe9rations effectu\xe9es sur les donn\xe9es s\u2019inscriront dans ce fichier, et il sera utilis\xe9 \xe9galement lors des ouvertures ult\xe9rieures de la base."}),"\n",(0,n.jsx)(i.p,{children:"Vous devrez cr\xe9er un autre fichier d\u2019historique si vous cr\xe9ez un nouveau fichier de donn\xe9es. Vous devrez d\xe9signer ou cr\xe9er un autre fichier d\u2019historique si vous ouvrez un autre fichier de donn\xe9es non associ\xe9 \xe0 un fichier d\u2019historique (ou si le fichier d\u2019historique est manquant)."}),"\n",(0,n.jsx)(i.h2,{id:"fermer-lhistorique",children:"Fermer l\u2019historique"}),"\n",(0,n.jsxs)(i.p,{children:["Si vous souhaitez interrompre l\u2019enregistrement du fichier d\u2019historique courant, d\xe9s\xe9lectionnez l\u2019option ",(0,n.jsx)(i.strong,{children:"Utiliser le fichier d\u2019historique"})," dans la Page ",(0,n.jsx)(i.strong,{children:"Sauvegarde/Configuration"})," des Propri\xe9t\xe9s de la base."]}),"\n",(0,n.jsx)(i.p,{children:"4D affiche alors un message d\u2019alerte afin d\u2019attirer votre attention sur le fait que cette action vous prive de la s\xe9curit\xe9 apport\xe9e par le fichier d\u2019historique :"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:r(932502).Z+"",width:"482",height:"188"})}),"\n",(0,n.jsxs)(i.p,{children:["Si vous cliquez sur le bouton ",(0,n.jsx)(i.strong,{children:"Fermer"}),", le fichier d\u2019historique courant est imm\xe9diatement referm\xe9 (il n\u2019est pas n\xe9cessaire que la bo\xeete de dialogue des Propri\xe9t\xe9s de la base soit ensuite valid\xe9e)."]}),"\n",(0,n.jsx)(i.p,{children:"Si vous souhaitez fermer votre fichier d\u2019historique courant parce qu\u2019il devient trop important, il est pr\xe9f\xe9rable d\u2019effectuer une sauvegarde du fichier de donn\xe9es, ce qui entra\xeenera la sauvegarde de l\u2019historique."}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"4D Server"})," : La commande ",(0,n.jsx)(i.code,{children:"New log file"})," permet de refermer automatiquement l\u2019historique courant et d\u2019en d\xe9marrer un nouveau. Si le fichier d'historique devient inaccessible au cours de la session de travail, l'erreur 1274 est g\xe9n\xe9r\xe9e et 4D Server ne permet plus aux utilisateurs d'\xe9crire ou de modifier des donn\xe9es. Lorsque le fichier d'historique est de nouveau accessible, il est n\xe9cessaire d'effectuer une sauvegarde."]}),"\n"]})]})}function c(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},833280:function(e,i,r){r.d(i,{Z:function(){return s}});let s=r.p+"assets/images/backup05-467406274aac70bb97c1fc96ec032647.png"},932502:function(e,i,r){r.d(i,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,i,r){r.d(i,{Z:function(){return o},a:function(){return a}});var s=r(667294);let n={},t=s.createContext(n);function a(e){let i=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);