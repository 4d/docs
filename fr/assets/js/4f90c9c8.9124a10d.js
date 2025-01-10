"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47985"],{352931:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/receive-record","title":"RECEIVE RECORD","description":"RECEIVE RECORD {( laTable )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/receive-record.md","sourceDirName":"commands-legacy","slug":"/commands/receive-record","permalink":"/docs/fr/commands/receive-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"receive-record","title":"RECEIVE RECORD","slug":"/commands/receive-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE PACKET","permalink":"/docs/fr/commands/receive-packet"},"next":{"title":"RECEIVE VARIABLE","permalink":"/docs/fr/commands/receive-variable"}}'),t=s("785893"),i=s("250065");let o={id:"receive-record",title:"RECEIVE RECORD",slug:"/commands/receive-record",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RECEIVE RECORD"})," {( ",(0,t.jsx)(n.em,{children:"laTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table dans laquelle recevoir l'enregistrement, ou Table par d\xe9faut si omis"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RECEIVE RECORD"})," ajoute dans ",(0,t.jsx)(n.em,{children:"laTable"})," un enregistrement re\xe7u par l'interm\xe9diaire du port s\xe9rie ou d'un document ouvert par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-channel",children:"SET CHANNEL"}),". L'enregistrement doit avoir \xe9t\xe9 envoy\xe9 par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/send-record",children:"SEND RECORD"}),". Lorsque vous ex\xe9cutez ",(0,t.jsx)(n.strong,{children:"RECEIVE RECORD"}),", un nouvel enregistrement est automatiquement cr\xe9\xe9 dans ",(0,t.jsx)(n.em,{children:"laTable"}),". Si l'enregistrement a \xe9t\xe9 correctement re\xe7u, vous pouvez le sauvegarder \xe0 l'aide de ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/save-record",children:"SAVE RECORD"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"L'enregistrement est re\xe7u en totalit\xe9, ce qui signifie que les images et BLOBs stock\xe9s dans ou avec l'enregistrement sont \xe9galement re\xe7us."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important :"})," Lorsque des enregistrements sont envoy\xe9s et re\xe7us par ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/send-record",children:"SEND RECORD"})," et ",(0,t.jsx)(n.strong,{children:"RECEIVE RECORD"}),", la structure de la table source et celle de la table de destination doivent \xeatre compatibles. Si ce n'est pas le cas, 4D convertira les valeurs en fonction des d\xe9finitions des tables lorsque ",(0,t.jsx)(n.strong,{children:"RECEIVE RECORD"})," sera ex\xe9cut\xe9e."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Si vous recevez un enregistrement provenant d'un document avec cette commande, le document doit avoir \xe9t\xe9 ouvert par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-channel",children:"SET CHANNEL"}),". Vous ne pouvez pas utiliser ",(0,t.jsx)(n.strong,{children:"RECEIVE RECORD"})," avec un document ouvert par ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/open-document",children:"Open document"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/create-document",children:"Create document"})," ou ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/append-document",children:"Append document"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Pendant l'ex\xe9cution d'un ",(0,t.jsx)(n.strong,{children:"RECEIVE RECORD"}),", l'utilisateur peut interrompre l'op\xe9ration en appuyant sur les touches ",(0,t.jsx)(n.strong,{children:"Ctrl"}),"+",(0,t.jsx)(n.strong,{children:"Alt"}),"+",(0,t.jsx)(n.strong,{children:"Maj"})," (sous Windows) ou ",(0,t.jsx)(n.strong,{children:"Commande"}),"+",(0,t.jsx)(n.strong,{children:"Option"}),"+",(0,t.jsx)(n.strong,{children:"Maj"})," (sous Mac OS). Cette interruption g\xe9n\xe8re une erreur -9994 que vous pouvez intercepter \xe0 l'aide d'une m\xe9thode install\xe9e par la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),". G\xe9n\xe9ralement, vous devez g\xe9rer les interruptions d'une r\xe9ception uniquement lors d'une communication s\xe9rie."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["L'utilisation combin\xe9e de ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/send-variable",children:"SEND VARIABLE"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/send-record",children:"SEND RECORD"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/receive-variable",children:"RECEIVE VARIABLE"})," et ",(0,t.jsx)(n.strong,{children:"RECEIVE RECORD"})," est id\xe9ale pour archiver des donn\xe9es ou \xe9changer des donn\xe9es entre des bases monopostes identiques utilis\xe9es \xe0 diff\xe9rents endroits. Certes, vous pouvez \xe9changer des donn\xe9es entre des bases 4D \xe0 l'aide des commandes d'import/export telles que ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/export-text",children:"EXPORT TEXT"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/import-text",children:"IMPORT TEXT"}),". Cependant, si vos donn\xe9es contiennent des images et/ou des tables li\xe9es, l'utilisation de ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/send-record",children:"SEND RECORD"})," et ",(0,t.jsx)(n.strong,{children:"RECEIVE RECORD"})," est, de loin, plus pratique."]}),"\n",(0,t.jsx)(n.p,{children:"Par exemple, imaginons une documentation cr\xe9\xe9e \xe0 l'aide de 4D et 4D Write. Comme plusieurs r\xe9dacteurs bas\xe9s dans diff\xe9rents pays travaillent sur ce projet, nous avons besoin d'un syst\xe8me simple pour \xe9changer les donn\xe9es entre les diff\xe9rentes bases. Voici une vue simplifi\xe9e de la structure de la base :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(539838).Z+"",width:"434",height:"295"})}),"\n",(0,t.jsxs)(n.p,{children:["La table ",(0,t.jsx)(n.em,{children:"[Commands]"})," contient la description de chaque commande ou section. Les tables ",(0,t.jsx)(n.em,{children:"[CM US Params]"})," et ",(0,t.jsx)(n.em,{children:"[CM FR Params]"})," contiennent respectivement les param\xe8tres de chaque commande en anglais et en fran\xe7ais. La table ",(0,t.jsx)(n.em,{children:"[CM See Also]"})," contient les commandes indiqu\xe9es en tant que R\xe9f\xe9rences pour chaque commande ou section. L'\xe9change de la documentation entre les bases consiste donc \xe0 envoyer les enregistrements de ",(0,t.jsx)(n.em,{children:"[Commands]"})," ainsi que leurs enregistrements li\xe9s. Pour cela, nous utilisons ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/send-record",children:"SEND RECORD"})," et ",(0,t.jsx)(n.strong,{children:"RECEIVE RECORD"}),". De plus, nous utilisons ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/send-variable",children:"SEND VARIABLE"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/send-record",children:"SEND RECORD"}),' pour "cocher" les enregistrements import\xe9s/export\xe9s.']}),"\n",(0,t.jsx)(n.p,{children:"Voici la m\xe9thode projet (simplifi\xe9e) d'export de la documentation :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode projet CM_EXPORT_SEL\n\xa0\xa0// Cette m\xe9thode fonctionne avec la s\xe9lection courante de la table [Commands]\n\xa0\n\xa0SET CHANNEL(12;"")\xa0// Laissons l\'utilisateur cr\xe9er et ouvrir un document s\xe9rie\n\xa0If(OK=1)\n\xa0\xa0// Marquons le document avec une variable d\xe9crivant son contenu\n\xa0\xa0// Note: la variable process BUILD_LANG indique si des donn\xe9es US (anglaises)\n\xa0\xa0// ou FR (fran\xe7aises) sont envoy\xe9es\n\xa0\xa0\xa0\xa0$vsTag:="4DV6COMMAND"+BUILD_LANG\n\xa0\xa0\xa0\xa0SEND VARIABLE($vsTag)\n\xa0\xa0// Envoyer une variable indiquant combien de [Commands] sont export\xe9es\n\xa0\xa0\xa0\xa0$vlNbCmd:=Records in selection([Commands])\n\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbCmd)\n\xa0\xa0\xa0\xa0FIRST RECORD([Commands])\n\xa0\xa0// For each commande\n\xa0\xa0\xa0\xa0For($vlCmd;1;$vlNbCmd)\n\xa0\xa0// Envoyer l\'enregistrement [Commands]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([Commands])\n\xa0\xa0// S\xe9lection de tous les enregistrements li\xe9s\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RELATE MANY([Commands])\n\xa0\xa0// En fonction de la langue, envoyer une variable indiquant\n\xa0\xa0// le nombre de param\xe8tres qui va suivre\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="US")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbParm:=Records in selection([CM US Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="FR")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbParm:=Records in selection([CM FR Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbParm)\n\xa0\xa0// Envoyer les enregistrements des param\xe8tres (s\'il y en a)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlParm;1;$vlNbParm)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="US")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([CM US Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([CM US Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="FR")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([CM FR Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([CM FR Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Envoyer une variable indiquant combien de \u201CR\xe9f\xe9rences\u201D vont suivre\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbSee:=Records in selection([CM See Also])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbSee)\n\xa0\xa0// Envoyer les enregistrements [See Also] (s\'il y en a)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlSee;1;$vlNbSee)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([CM See Also])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([CM See Also])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Aller \xe0 l\'enregistrement [Commands] suivant et continuer l\'export\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Commands])\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\xa0// Fermer le document\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.p,{children:"Voici la m\xe9thode projet (simplifi\xe9e) d'import de la documentation :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode projet CM_IMPORT_SEL\n\xa0\n\xa0SET CHANNEL(10;"")\xa0// Laissons l\'utilisateur ouvrir un document existant\n\xa0If(OK=1)\xa0// Si un document a \xe9t\xe9 ouvert\n\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vsTag)\xa0// Essayons de recevoir la variable marqueur attendue\n\xa0\xa0\xa0\xa0If($vsTag="4DV6COMMAND@")\xa0// Avons-nous le bon marqueur ?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$CurLang:=Substring($vsTag;Length($vsTag)-1)\xa0// Extrayons la langue du marqueur\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(($CurLang="US")\xa0|\xa0($CurLang="FR"))\xa0// Avons-nous re\xe7u un langage valide ?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbCmd)\xa0// Combien de commandes dans ce document?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbCmd>0)\xa0// S\'il en existe une au moins\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlCmd;1;$vlNbCmd)\xa0// For each enregistrement [Commands] archiv\xe9\n\xa0\xa0// R\xe9ception de l\'enregistrement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE RECORD([Commands])\n\xa0\xa0// Appelons une sous-routine qui sauvegarde le nouvel enregistrement ou le copie\n\xa0\xa0// dans un enregistrement existant\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CM_IMP_CMD($CurLang)\n\xa0\xa0// R\xe9ception du nombre de param\xe8tres (s\'il y en a)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbParm)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbParm>=0)\n\xa0\xa0// Appelons une sous-routine qui appelle RECEVOIR ENREGISTREMENT puis stocke\n\xa0\xa0// les nouveaux enregistrements ou les copie dans des enregistrements existants\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CM_IMP_PARM($vlNbParm;$CurLang)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// R\xe9ception du nombre de \u201CR\xe9f\xe9rences\u201D (s\'il y en a)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbSee)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbSee>0)\n\xa0\xa0// Appelons une sous-routine qui appelle RECEVOIR ENREGISTREMENT puis stocke\n\xa0\xa0// les nouveaux enregistrements ou les copie dans des enregistrements existants\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CM_IMP_SEEA($vlNbSee;$CurLang)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Le nombre de commandes dans ce document d\'export est invalide.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Le langage de ce document d\'export est inconnu.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Ce document n\'est pas un document d\'export.")\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\xa0// Fermer document\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.p,{children:"Notez que nous n'avons pas test\xe9 la variable OK pendant la r\xe9ception des donn\xe9es, ni intercept\xe9 les \xe9ventuelles erreurs. Cependant, comme nous avons stock\xe9 dans le document des variables d\xe9crivant le document lui-m\xeame, si ces variables, une fois re\xe7ues, sont correctes, la probabilit\xe9 d'erreur est tr\xe8s faible. Si par exemple un utilisateur ouvre un mauvais document, le premier test stoppe l'op\xe9ration enti\xe8re."}),"\n",(0,t.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"La variable syst\xe8me OK prend la valeur 1 si l'enregistrement est correctement re\xe7u, sinon elle prend la valeur 0."}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/send-record",children:"SEND RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/send-variable",children:"SEND VARIABLE"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"79"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},539838:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);