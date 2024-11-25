"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79744"],{150960:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>i,default:()=>c,assets:()=>l,toc:()=>u,frontMatter:()=>d});var t=JSON.parse('{"id":"Concepts/error-handling","title":"Gestion des erreurs","description":"Le traitement des erreurs consiste \xe0 anticiper les erreurs pouvant survenir dans votre application et \xe0 y r\xe9pondre. 4D fournit un support complet pour la d\xe9tection et la signalisation des erreurs lors de l\'ex\xe9cution, ainsi que pour l\'analyse de leurs conditions.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Concepts/error-handling.md","sourceDirName":"Concepts","slug":"/Concepts/error-handling","permalink":"/docs/fr/19/Concepts/error-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"error-handling","title":"Gestion des erreurs"},"sidebar":"docs","previous":{"title":"Balises de transformation","permalink":"/docs/fr/19/Tags/tags"},"next":{"title":"Modes interpr\xe9t\xe9 et compil\xe9","permalink":"/docs/fr/19/Concepts/interpreted-compiled"}}'),s=n("785893"),o=n("250065");let d={id:"error-handling",title:"Gestion des erreurs"},i=void 0,l={},u=[{value:"Erreur ou statut",id:"erreur-ou-statut",level:2},{value:"Installer une m\xe9thode de gestion des erreurs",id:"installer-une-m\xe9thode-de-gestion-des-erreurs",level:2},{value:"Port\xe9e et composants",id:"port\xe9e-et-composants",level:3},{value:"G\xe9rer les erreurs dans une m\xe9thode",id:"g\xe9rer-les-erreurs-dans-une-m\xe9thode",level:3},{value:"Exemple",id:"exemple",level:4},{value:"Utiliser une m\xe9thode de gestion des erreurs vide",id:"utiliser-une-m\xe9thode-de-gestion-des-erreurs-vide",level:3}];function a(e){let r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Le traitement des erreurs consiste \xe0 anticiper les erreurs pouvant survenir dans votre application et \xe0 y r\xe9pondre. 4D fournit un support complet pour la d\xe9tection et la signalisation des erreurs lors de l'ex\xe9cution, ainsi que pour l'analyse de leurs conditions."}),"\n",(0,s.jsx)(r.p,{children:"La gestion des erreurs r\xe9pond \xe0 deux besoins principaux :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"rechercher et corriger les \xe9ventuels bugs et erreurs dans votre code pendant la phase de d\xe9veloppement,"}),"\n",(0,s.jsx)(r.li,{children:"d\xe9tecter et r\xe9cup\xe9rer des erreurs inattendues dans les applications d\xe9ploy\xe9es; vous pouvez notamment remplacer les bo\xeetes de dialogue d'erreur syst\xe8me (disque plein, fichier manquant, etc.) par votre propre interface."}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. Cette m\xe9thode \xe9viterait d'afficher des bo\xeetes de dialogue inattendues sur le serveur et pourrait consigner les erreurs dans un fichier consacr\xe9 en vue d'analyses ult\xe9rieures."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"erreur-ou-statut",children:"Erreur ou statut"}),"\n",(0,s.jsxs)(r.p,{children:["De nombreuses fonctions de classe 4D, telles que ",(0,s.jsx)(r.code,{children:"entity.save()"})," ou ",(0,s.jsx)(r.code,{children:"transporter.send()"}),", retournent un objet ",(0,s.jsx)(r.em,{children:"status"}),". Cet objet permet de stocker les erreurs \"pr\xe9visibles\" dans le contexte d'ex\xe9cution, telles qu'un mot de passe invalide, une entit\xe9 verrouill\xe9e, etc., qui ne stoppe pas l'ex\xe9cution du programme. Cette cat\xe9gorie d'erreurs peut \xeatre g\xe9r\xe9e par du code habituel."]}),"\n",(0,s.jsx)(r.p,{children:"D'autres erreurs \"impr\xe9visibles\" peuvent inclure une erreur en \xe9criture sur le disque, une panne de r\xe9seau ou toute interruption inattendue. Cette cat\xe9gorie d'erreurs g\xe9n\xe8re des exceptions et doit \xeatre trait\xe9e par une m\xe9thode de gestion des erreurs."}),"\n",(0,s.jsx)(r.h2,{id:"installer-une-m\xe9thode-de-gestion-des-erreurs",children:"Installer une m\xe9thode de gestion des erreurs"}),"\n",(0,s.jsxs)(r.p,{children:["Dans 4D, toutes les erreurs peuvent \xeatre captur\xe9es et trait\xe9es dans une m\xe9thode projet sp\xe9cifique, la m\xe9thode de ",(0,s.jsx)(r.strong,{children:"gestion des erreurs"})," (ou m\xe9thode de ",(0,s.jsx)(r.strong,{children:"capture d'erreurs"}),")."]}),"\n",(0,s.jsxs)(r.p,{children:["Cette m\xe9thode projet est install\xe9e pour le process en cours et sera automatiquement appel\xe9e pour toute erreur survenant dans le process, en mode interpr\xe9t\xe9 ou compil\xe9. Pour ",(0,s.jsx)(r.em,{children:"installer"})," cette m\xe9thode projet, il vous suffit d\u2019appeler la commande ",(0,s.jsx)(r.code,{children:"APPELER SUR ERREUR"})," avec le nom de la m\xe9thode projet en param\xe8tre. Par exemple :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'APPELER SUR ERREUR("IO_ERRORS") //Installe la m\xe9thode de gestion des erreurs\n'})}),"\n",(0,s.jsxs)(r.p,{children:["Pour ne plus d\xe9tecter d'erreurs et redonner le contr\xf4le \xe0 4D, appelez la m\xe9thode ",(0,s.jsx)(r.code,{children:"ON ERR CALL"})," \xe0 l'aide d'une cha\xeene vide :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("") //redonne le contr\xf4le \xe0 4D\n'})}),"\n",(0,s.jsxs)(r.p,{children:["La commande ",(0,s.jsx)(r.code,{children:"Method called on error"})," vous permet de conna\xeetre le nom de la m\xe9thode install\xe9e par ",(0,s.jsx)(r.code,{children:"ON ERR CALL"})," pour le process courant. Cela est particuli\xe8rement utile dans le contexte du code g\xe9n\xe9rique car il vous permet de modifier temporairement puis de restaurer la m\xe9thode de capture d'erreur :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:' $methCurrent:=Method called on error\n ON ERR CALL("NewMethod")\n  //Si le document ne peut pas \xeatre ouvert, une erreur est g\xe9n\xe9r\xe9e\n $ref:=Open document("MyDocument")\n  //R\xe9tablissement de la m\xe9thode pr\xe9c\xe9dente\n ON ERR CALL($methCurrent)\n\n'})}),"\n",(0,s.jsx)(r.h3,{id:"port\xe9e-et-composants",children:"Port\xe9e et composants"}),"\n",(0,s.jsx)(r.p,{children:"Vous pouvez d\xe9finir une seule m\xe9thode de gestion des erreurs pour l'ensemble de l'application ou diff\xe9rentes m\xe9thodes par module d'application. Cependant, une seule m\xe9thode peut \xeatre install\xe9e par processus."}),"\n",(0,s.jsxs)(r.p,{children:["Une m\xe9thode de gestion des erreurs install\xe9e par la commande ",(0,s.jsx)(r.code,{children:"APPELER SUR ERREUR"})," s'applique uniquement \xe0 l'application en cours d'ex\xe9cution. En cas d'erreur g\xe9n\xe9r\xe9e par un ",(0,s.jsx)(r.strong,{children:"composant"}),", la m\xe9thode ",(0,s.jsx)(r.code,{children:"APPELER SUR ERREUR"})," de l'application h\xf4te n'est pas appel\xe9e, et inversement."]}),"\n",(0,s.jsx)(r.h3,{id:"g\xe9rer-les-erreurs-dans-une-m\xe9thode",children:"G\xe9rer les erreurs dans une m\xe9thode"}),"\n",(0,s.jsx)(r.p,{children:"Dans la m\xe9thode d'erreur personnalis\xe9e, vous pouvez acc\xe9der \xe0 plusieurs informations qui vous aideront \xe0 identifier l'erreur :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"des variables syst\xe8me d\xe9di\xe9es :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"Error"})," (entier long): Code d'erreur"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"Error method"})," (texte) : nom de la m\xe9thode ayant engendr\xe9 l'erreur"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"Error line"})," (entier long) : Num\xe9ro de ligne de la m\xe9thode ayant g\xe9n\xe9r\xe9 l'erreur"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"Error formula"})," (texte) : formule du code 4D (texte brut) \xe0 l'origine de l'erreur."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.admonition,{type:"info",children:[(0,s.jsxs)(r.p,{children:["4D automatically maintains a number of variables called ",(0,s.jsx)(r.a,{href:"/docs/fr/19/Concepts/variables#system-variables",children:(0,s.jsx)(r.strong,{children:"system variables"})}),", meeting different needs. :::"]}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["La commande ",(0,s.jsx)(r.code,{children:"GET LAST ERROR STACK"})," qui retourne les informations sur la pile d'erreur courant de l'application 4D."]}),"\n",(0,s.jsxs)(r.li,{children:["la commande ",(0,s.jsx)(r.code,{children:"Get call chain"})," qui retourne une collection d'objets d\xe9crivant chaque \xe9tape de la cha\xeene d'appel de la m\xe9thode dans le process courant."]}),"\n"]}),(0,s.jsx)(r.h4,{id:"exemple",children:"Exemple"}),(0,s.jsx)(r.p,{children:"Voici un syst\xe8me de gestion des erreurs simple :"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'//installer la m\xe9thode de gestion d\'erreur\nON ERR CALL("errorMethod")\n //... ex\xe9cuter le code\n ON ERR CALL("") //redonner le contr\xf4le \xe0 4D\n'})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'// m\xe9thode projet errorMethod\n If(Error#1006) //ceci n\'est pas une interruption g\xe9n\xe9r\xe9e par l\'utilisateur\n    ALERT("L\'erreur "+String(Error)+" s\'est produite". Le code en question est : \\""+Error formula+"\\"")\n End if\n'})}),(0,s.jsx)(r.h3,{id:"utiliser-une-m\xe9thode-de-gestion-des-erreurs-vide",children:"Utiliser une m\xe9thode de gestion des erreurs vide"}),(0,s.jsxs)(r.p,{children:["Si vous souhaitez essentiellement masquer la boite de dialogue d'erreur standard, vous pouvez installer une m\xe9thode de gestion d'erreurs vide. La variable syst\xe8me ",(0,s.jsx)(r.code,{children:"Error"})," peut \xeatre test\xe9e dans n'importe quelle m\xe9thode, c'est-\xe0-dire en dehors de la m\xe9thode de gestion d'erreurs :"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("emptyMethod") //emptyMethod existe mais est vide\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL.("")\n'})})]})]})}function c(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var t=n(667294);let s={},o=t.createContext(s);function d(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);