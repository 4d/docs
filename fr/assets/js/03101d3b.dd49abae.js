"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92651"],{682729:function(e,n,s){s.r(n),s.d(n,{default:()=>c,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"MSC/repair","title":"Page R\xe9paration","description":"Cette page permet de r\xe9parer le fichier de donn\xe9es ou le fichier de structure lorsqu\u2019il a \xe9t\xe9 endommag\xe9. G\xe9n\xe9ralement, vous n\'utiliserez ces fonctions que sous la supervision d\'\xe9quipes techniques 4D, lorsque des anomalies ont \xe9t\xe9 d\xe9tect\xe9es lors de l\'ouverture de l\'application ou \xe0 la suite d\'une v\xe9rification.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/MSC/repair.md","sourceDirName":"MSC","slug":"/MSC/repair","permalink":"/docs/fr/20-R7/MSC/repair","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frepair.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"repair","title":"Page R\xe9paration","sidebar_label":"Page R\xe9paration"},"sidebar":"docs","previous":{"title":"Page restitution","permalink":"/docs/fr/20-R7/MSC/restore"},"next":{"title":"Page chiffrement","permalink":"/docs/fr/20-R7/MSC/encrypt"}}'),t=s("785893"),i=s("250065");let a={id:"repair",title:"Page R\xe9paration",sidebar_label:"Page R\xe9paration"},o=void 0,d={},l=[{value:"Fichiers",id:"fichiers",level:2},{value:"Fichier de donn\xe9es \xe0 r\xe9parer",id:"fichier-de-donn\xe9es-\xe0-r\xe9parer",level:3},{value:"Dossier de sauvegarde",id:"dossier-de-sauvegarde",level:3},{value:"Fichiers r\xe9par\xe9s",id:"fichiers-r\xe9par\xe9s",level:3},{value:"R\xe9paration standard",id:"r\xe9paration-standard",level:2},{value:"R\xe9paration par en-t\xeates d&#39;enregistrements",id:"r\xe9paration-par-en-t\xeates-denregistrements",level:2},{value:"Attribution manuelle",id:"attribution-manuelle",level:3},{value:"Voir le compte rendu",id:"voir-le-compte-rendu",level:2}];function u(e){let n={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Cette page permet de r\xe9parer le fichier de donn\xe9es ou le fichier de structure lorsqu\u2019il a \xe9t\xe9 endommag\xe9. G\xe9n\xe9ralement, vous n'utiliserez ces fonctions que sous la supervision d'\xe9quipes techniques 4D, lorsque des anomalies ont \xe9t\xe9 d\xe9tect\xe9es lors de l'ouverture de l'application ou \xe0 la suite d'une ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/MSC/verify",children:"v\xe9rification"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention :"})," Chaque r\xe9paration entra\xeene la duplication du fichier d\u2019origine et donc l\u2019augmentation de la taille du dossier de l\u2019application. Il est important de prendre cela en consid\xe9ration (notamment sous macOS, o\xf9 les applications 4D apparaissent sous forme de paquet) afin de ne pas augmenter excessivement la taille de l'application. Une intervention manuelle \xe0 l\u2019int\xe9rieur du package peut \xeatre utile afin de supprimer les copies des fichiers d\u2019origine."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"La r\xe9paration n\u2019est disponible qu\u2019en mode maintenance. Si vous tentez d\u2019effectuer cette op\xe9ration en mode standard, une bo\xeete de dialogue d\u2019alerte vous pr\xe9vient que l'application va \xeatre ferm\xe9e puis relanc\xe9e en mode maintenance."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Lorsque la base est chiffr\xe9e, la r\xe9paration des donn\xe9es comprend le d\xe9chiffrage et le chiffrage et n\xe9cessite ainsi la cl\xe9 de chiffrement de donn\xe9es courante. Si aucune cl\xe9 de chiffrement valide n'a d\xe9j\xe0 \xe9t\xe9 fournie, une boite de dialogue s'affiche pour demander pour demander le mot de passe ou la cl\xe9 de chiffrement (voir Page Chiffrement)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"fichiers",children:"Fichiers"}),"\n",(0,t.jsx)(n.h3,{id:"fichier-de-donn\xe9es-\xe0-r\xe9parer",children:"Fichier de donn\xe9es \xe0 r\xe9parer"}),"\n",(0,t.jsxs)(n.p,{children:["Chemin d\u2019acc\xe8s du fichier de donn\xe9es courant. Le bouton ",(0,t.jsx)(n.strong,{children:"[...]"})," permet de d\xe9signer un autre fichier de donn\xe9es. Lorsque vous cliquez sur ce bouton, une bo\xeete de dialogue standard d\u2019ouverture de documents s\u2019affiche, vous permettant de d\xe9signer le fichier de donn\xe9es \xe0 r\xe9parer. Une fois cette bo\xeete de dialogue valid\xe9e, le chemin d\u2019acc\xe8s du fichier \xe0 r\xe9parer est indiqu\xe9 dans la fen\xeatre. Si vous effectuez une r\xe9paration par ",(0,t.jsx)(n.a,{href:"#r%C3%A9paration-par-en-t%C3%AAtes-denregistrements",children:"r\xe9paration par en-t\xeates d'enregistrements"}),", vous pouvez s\xe9lectionner tout fichier de donn\xe9es. Une fois cette bo\xeete de dialogue valid\xe9e, le chemin d\u2019acc\xe8s du fichier \xe0 r\xe9parer est indiqu\xe9 dans la fen\xeatre."]}),"\n",(0,t.jsx)(n.h3,{id:"dossier-de-sauvegarde",children:"Dossier de sauvegarde"}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, le fichier de donn\xe9es original sera dupliqu\xe9 avant r\xe9paration. Par d\xe9faut, le fichier de donn\xe9es original sera dupliqu\xe9 avant r\xe9paration. Le second bouton ",(0,t.jsx)(n.strong,{children:"[...]"})," permet de d\xe9signer un autre emplacement pour les sauvegardes des fichiers originaux effectu\xe9es avant r\xe9paration. Cette option permet notamment de r\xe9parer des fichiers volumineux en utilisant diff\xe9rents disques."]}),"\n",(0,t.jsx)(n.h3,{id:"fichiers-r\xe9par\xe9s",children:"Fichiers r\xe9par\xe9s"}),"\n",(0,t.jsx)(n.p,{children:"4D cr\xe9e un nouveau fichier de donn\xe9es vide \xe0 l\u2019emplacement du fichier d\u2019origine. 4D cr\xe9e un nouveau fichier de donn\xe9es vide \xe0 l\u2019emplacement du fichier d\u2019origine. Le fichier vide est rempli avec les donn\xe9es r\xe9cup\xe9r\xe9es."}),"\n",(0,t.jsx)(n.h2,{id:"r\xe9paration-standard",children:"R\xe9paration standard"}),"\n",(0,t.jsx)(n.p,{children:"La r\xe9paration standard permet de r\xe9parer des donn\xe9es dans lesquelles seuls quelques enregistrements ou index sont endommag\xe9s (les tables d'adresses sont intactes). Les donn\xe9es sont compact\xe9es et r\xe9par\xe9es. A noter que ce type de r\xe9paration ne peut \xeatre effectu\xe9 que si le fichier de donn\xe9es et le fichier de structure correspondent."}),"\n",(0,t.jsxs)(n.p,{children:['A l\u2019issue de la proc\xe9dure, la page "R\xe9paration" du CSM est affich\xe9e. Un message indique si la r\xe9paration a \xe9t\xe9 effectu\xe9e avec succ\xe8s. Dans ce cas, vous pouvez imm\xe9diatement ouvrir l\'application.\n',(0,t.jsx)(n.img,{src:s(321424).Z+"",width:"225",height:"45"})]}),"\n",(0,t.jsx)(n.h2,{id:"r\xe9paration-par-en-t\xeates-denregistrements",children:"R\xe9paration par en-t\xeates d'enregistrements"}),"\n",(0,t.jsx)(n.p,{children:"Cette option de r\xe9paration de bas niveau est \xe0 utiliser uniquement dans le cas o\xf9 le fichier de donn\xe9es a \xe9t\xe9 fortement endommag\xe9 et une fois que toutes les autres solutions (restitution de sauvegarde, r\xe9paration standard) se sont av\xe9r\xe9es inefficaces."}),"\n",(0,t.jsx)(n.p,{children:"Les enregistrements de 4D sont de taille variable : il est donc n\xe9cessaire, pour les retrouver, de conserver dans une table sp\xe9ciale l\u2019endroit o\xf9 ils sont stock\xe9s sur votre disque. Le programme acc\xe8de donc \xe0 l\u2019adresse de l\u2019enregistrement par l\u2019interm\xe9diaire d\u2019un index et d\u2019une table d\u2019adresses. Si seuls des enregistrements ou des index sont endommag\xe9s, l\u2019option de r\xe9paration standard suffira g\xe9n\xe9ralement pour r\xe9soudre le probl\xe8me. C\u2019est lorsque la table d\u2019adresses est touch\xe9e qu\u2019il faudra en venir \xe0 une r\xe9cup\xe9ration plus sophistiqu\xe9e, puisqu\u2019il faut la reconstituer. Pour r\xe9aliser cette op\xe9ration, le CSM utilise le marqueur qui se trouve en en-t\xeate de chaque enregistrement. Les marqueurs peuvent \xeatre compar\xe9s \xe0 des r\xe9sum\xe9s des enregistrements, comportant l\u2019essentiel de leurs informations, et \xe0 partir desquels une reconstitution de la table d\u2019adresses est possible."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Si tous les enregistrements et toutes les tables ont \xe9t\xe9 attribu\xe9s, seule la zone principale est affich\xe9e."}),"\n",(0,t.jsxs)(n.p,{children:["La r\xe9cup\xe9ration par en-t\xeates ne tient pas compte des \xe9ventuelles contraintes d\u2019int\xe9grit\xe9. En particulier, \xe0 l\u2019issue de cette op\xe9ration, vous pouvez obtenir des valeurs dupliqu\xe9es avec des champs uniques ou des valeurs NULL avec des champs d\xe9clar\xe9s ",(0,t.jsx)(n.strong,{children:"non NULL"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque vous cliquez sur le bouton ",(0,t.jsx)(n.strong,{children:"R\xe9parer"}),", 4D effectue une analyse compl\xe8te du fichier de donn\xe9es. A l\u2019issue de cette analyse, le r\xe9sultat est affich\xe9 dans la fen\xeatre suivante :"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(105754).Z+"",width:"906",height:"683"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Si tous les enregistrements et toutes les tables ont \xe9t\xe9 attribu\xe9s, seule la zone principale est affich\xe9e."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'La zone "Enregistrements trouv\xe9s dans le fichier de donn\xe9es" comporte deux tableaux synth\xe9tisant les informations issues de l\u2019analyse du fichier de donn\xe9es.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Le premier tableau liste les informations issues de l\u2019analyse du fichier de donn\xe9es. Chaque ligne repr\xe9sente un groupe d\u2019enregistrements r\xe9cup\xe9rables dans le fichier de donn\xe9es :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["La colonne ",(0,t.jsx)(n.strong,{children:"Ordre"})," indique l\u2019ordre de r\xe9cup\xe9ration des groupes d\u2019enregistrements."]}),"\n",(0,t.jsxs)(n.li,{children:["La colonne ",(0,t.jsx)(n.strong,{children:"Nombre"})," indique le nombre d'enregistrements contenus dans la table."]}),"\n",(0,t.jsxs)(n.li,{children:["La colonne ",(0,t.jsx)(n.strong,{children:"Table de destination"})," indique le nom des tables ayant pu \xeatre automatiquement associ\xe9es aux groupes d\u2019enregistrements identifi\xe9s. Les noms des tables attribu\xe9es automatiquement sont affich\xe9s en caract\xe8res verts. Les groupes qui n'ont pas encore \xe9t\xe9 attribu\xe9s, c'est-\xe0-dire, les tables qui n'ont pas pu \xeatre associ\xe9es \xe0 des enregistrements sont affich\xe9es en caract\xe8res rouges."]}),"\n",(0,t.jsxs)(n.li,{children:["La colonne ",(0,t.jsx)(n.strong,{children:"R\xe9cup\xe9rer"})," permet vous permet d\u2019indiquer pour chaque groupe si vous souhaitez r\xe9cup\xe9rer les enregistrements. Par d\xe9faut, l\u2019option est coch\xe9e pour tous les groupes avec les enregistrements qui peuvent \xeatre associ\xe9s \xe0 une table."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Le deuxi\xe8me tableau liste les tables du fichier de structure."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"attribution-manuelle",children:"Attribution manuelle"}),"\n",(0,t.jsx)(n.p,{children:'Si, du fait de l\u2019endommagement de la table d\u2019adresses, un ou plusieurs groupes d\u2019enregistrements n\u2019ont pas pu \xeatre attribu\xe9s \xe0 des tables, vous pouvez les attribuer manuellement.\nPour attribuer une table \xe0 un groupe non identifi\xe9, s\xe9lectionnez le groupe dans le premier tableau. Lorsque vous s\xe9lectionnez des enregistrements non identifi\xe9s, la zone "Contenu des enregistrements" affiche une pr\xe9visualisation du contenu des premiers enregistrements du groupe afin de vous permettre de les attribuer plus facilement :'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(912864).Z+"",width:"903",height:"682"})}),"\n",(0,t.jsxs)(n.p,{children:['S\xe9lectionnez ensuite la table \xe0 attribuer dans le tableau des "Tables non attribu\xe9es" puis cliquez sur le bouton ',(0,t.jsx)(n.strong,{children:"Identifier table"}),". Vous pouvez \xe9galement attribuer une table par glisser-d\xe9poser.\nLe groupe d\u2019enregistrements est alors associ\xe9 \xe0 la table, il sera r\xe9cup\xe9r\xe9 dans cette table. Les noms des tables attribu\xe9es manuellement sont affich\xe9s en caract\xe8res noirs.\nLe bouton ",(0,t.jsx)(n.strong,{children:"Ignorer enregistrements"})," permet de supprimer l\u2019association effectu\xe9e manuellement entre une table et un groupe d\u2019enregistrements."]}),"\n",(0,t.jsx)(n.h2,{id:"voir-le-compte-rendu",children:"Voir le compte rendu"}),"\n",(0,t.jsxs)(n.p,{children:["Une fois la r\xe9paration termin\xe9e, 4D g\xe9n\xe8re un fichier de compte-rendu dans le dossier Logs du projet. Ce fichier liste l\u2019ensemble des op\xe9rations qui ont \xe9t\xe9 men\xe9es. Il est cr\xe9\xe9 au format xml et est nomm\xe9 : ",(0,t.jsx)(n.em,{children:"ApplicationName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml"}),'" o\xf9 :']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"ApplicationName"}),' est le nom du fichier de structure sans extension, par exemple "Factures",']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"aaaa-mm-jj hh-mm-ss"})," est l'horodatage du fichier, bas\xe9 sur la date et l'heure syst\xe8me locales au moment du lancement de l'op\xe9ration de v\xe9rification, par exemple \"2019-02-11 15-20-45\"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque vous cliquez sur le bouton ",(0,t.jsx)(n.strong,{children:"Voir le compte rendu"}),", 4D affiche le fichier de compte-rendu le plus r\xe9cent dans le navigateur par d\xe9faut de l\u2019ordinateur."]})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},321424:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAAtCAIAAADX+5viAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAPcSURBVHhe7ZdBaxNBFMf7qXISD/Ugiih48KAIEYXeRDz3HlD8JLlJta0IIhZpEBLtxZNCL4k2mkZqhXpydt7M7JuZt5vdJGYH/f8ouvvmzZv3Jj9CuzYFIG3gKEgdOApSB46C1IGjIHXgKEgdOApSB46C1IGjIHXgKEgdOApSB46C1GnY0U5rLaTV6fd1uN01STVZbLdHt21b0k/qfwplD+Us2ETFUxpn3j5rXU8S36PUcT7qX3VUX2uV2l5XcFQEjprXmpTv1rdaw9EwE44ug1rXszRHD4bH5qk+1HHoaKuV/csXKE5EHyBfVGTzR/kkqEFlFBf0qqlMJw23p6QfWgpGEPJZR/wTo1PabW+7QjwxDlLV+AIJnk+nFlQIGyhKU49VagYn+xOXsBxHH/fH554Otz99N+81odbtIN47Peph9H3QWCxqoE8lz/Pnd1cpripYgsM7xCXkmfqJluN+5BEstoh0rEYv8O3FJ0rBaLt3OoXycytVcNkZejWLuIfqNXWQPc5mCY4+6o8v73y52zu98Hw0n6bhLbipFP51eLAR+cx8t727DKof3k6U4PDq+G3M7EcewcU1KuLegqOFLaqUeGJJUJ9Ou736Qai4QtiAe9Zkqy6tQk3WlFdyJos6SoLeH5w9/PB7492v+TQNBvQmsLcQ5viI81Mw22KLBJligsO7R5dgH8r7EUeQj6No/q7hCbaUeKLcBtXUpwsJfqikgglShpUsC7pV91ChJmvKldQLs1jIUS4o/dx4Pb26O/pW81fTcCQ+QXALbq5uh98Aq+Dy8hhb5bXlBAfLZG1U68fbbLZ0i49zRS06QJG8kniiGKTtOhadFYVKKngN5NvyJ9d4hZosJV8O9onM72gs6O23J5e2Rx9Htf94ChuldxqQf3xmNCKci27Vke22IfrjwW6wUZUhJxh4F3kb7sFlGPzd4gjRcTag8LezhQzTRMGJcZC261206FWPQ0UVHGwQRX5dOpI9VKkpVRXai5AdfXM4ufly9Pmo0LYlCgpSxMmXAIKje4eT9WfD66+Or+3Kmqq/4iHoP07KjqpvUCXovd6pMu/W3o9YU3yD/hck6+jBcHJ+a3Rn/6fzL9AUgoLVE36PbvaOrrw4esAsNJqOIShoBuH3UVHT9a0hBAWNIDiqiDXd6J1AUNAIsqOKzX2t6XsjJf+BoGCVFDqqEDWFoGDFlDmqCDSFoGD1zHBUYTQdnEFQ0AizHVUoTS/ufIWgoBEqOap4MhhDUNAIVR0FoCngKEgdOApSB46C1IGjIHXgKEgdOApSB46C1IGjIHXgKEgdOArSZjr9Az4Tm0/7xRlRAAAAAElFTkSuQmCC"},105754:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mscrepair2-70f7dc0be1529255122f9c117f88d8a0.png"},912864:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/mscrepair3-fca9ba66ac4c95138c0a5560adae3d30.png"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var r=s(667294);let t={},i=r.createContext(t);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);