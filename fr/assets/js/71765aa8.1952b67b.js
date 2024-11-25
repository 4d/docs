"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39349"],{642523:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/play","title":"PLAY","description":"PLAY ( nomObjet {; asynchrone} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/play.md","sourceDirName":"commands-legacy","slug":"/commands/play","permalink":"/docs/fr/commands/play","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fplay.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"play","title":"PLAY","slug":"/commands/play","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MOUSE POSITION","permalink":"/docs/fr/commands/mouse-position"},"next":{"title":"Pop up menu","permalink":"/docs/fr/commands/pop-up-menu"}}'),t=s("785893"),o=s("250065");let i={id:"play",title:"PLAY",slug:"/commands/play",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PLAY"})," ( ",(0,t.jsx)(n.em,{children:"nomObjet"})," {; ",(0,t.jsx)(n.em,{children:"asynchrone"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomObjet"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom ou chemin de fichier son ou son syst\xe8meCha\xeene vide pour stopper un son asynchrone"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"asynchrone"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"(Windows) Si pass\xe9 : ex\xe9cution asynchrone, si omis : ex\xe9cution synchrone"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"PLAY"})," vous permet de jouer des fichiers de son ou multimedia. Sous OS X, la commande permet \xe9galement de jouer un son syst\xe8me."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Pour jouer un fichier, passez son nom et son chemin d'acc\xe8s dans ",(0,t.jsx)(n.em,{children:"nomObjet"}),". Vous pouvez passer un chemin d'acc\xe8s complet ou relatif au fichier de structure de la base.",(0,t.jsx)(n.br,{}),"\nLes principaux formats de fichiers son et multimedia sont pris en charge : .WAV, .MP3, .AIFF (OS X)... Sous OS X, la commande prend notamment en charge les formats Core Audio."]}),"\n",(0,t.jsxs)(n.li,{children:["(OS X uniquement) Pour jouer un son syst\xe8me, passez directement son nom dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"nomObjet"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Les ressources \u2018snd\u2019, utilis\xe9es dans Mac OS 9 et les syst\xe8mes plus anciens, ne sont plus prises en charge."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"asynchrone"})," permet de jouer le son en synchrone ou en asynchrone sous Windows. Synchrone signifie que tous les traitements s'arr\xeatent jusqu'\xe0 ce que le son soit enti\xe8rement jou\xe9, asynchrone signifie que le traitement ne s'arr\xeate pas et que le son est jou\xe9 en t\xe2che de fond. Si ",(0,t.jsx)(n.em,{children:"asynchrone"})," est pass\xe9 et vaut 0 (ou toute valeur num\xe9rique), le son est jou\xe9 en asynchrone. S'il est omis, le son est jou\xe9 en synchrone.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Note :"})," Sous OS X, le son est toujours asynchrone, que ",(0,t.jsx)(n.em,{children:"asynchrone"})," soit pass\xe9 ou non."]}),"\n",(0,t.jsx)(n.p,{children:"Pour stopper un son asynchrone, il faut ex\xe9cuter l'instruction suivante :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0PLAY("";0)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant montre comment jouer un fichier WAV de votre choix sous Windows :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$DocR\xe9f :=Open document("";"WAV";Read Mode)\xa0//ou MP3...\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($DocR\xe9f)\n\xa0\xa0\xa0\xa0PLAY(Document;0)\xa0//ex\xe9cution asynchrone\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Exemple de son syst\xe8me sous OS X :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0PLAY("Submarine.aiff")\xa0//Jouer le son syst\xe8me\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/beep",children:"BEEP"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var r=s(667294);let t={},o=r.createContext(t);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);