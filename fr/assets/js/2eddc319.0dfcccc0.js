"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60238"],{319224:function(e,r,s){s.r(r),s.d(r,{metadata:()=>n,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>l});var n=JSON.parse('{"id":"commands-legacy/form-set-output","title":"FORM SET OUTPUT","description":"FORM SET OUTPUT ( {laTable ;} formulaire {; formUtilisateur} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-set-output.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-output","permalink":"/docs/fr/commands/form-set-output","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-output.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-set-output","title":"FORM SET OUTPUT","slug":"/commands/form-set-output","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SET INPUT","permalink":"/docs/fr/commands/form-set-input"},"next":{"title":"FORM SET SIZE","permalink":"/docs/fr/commands/form-set-size"}}'),i=s("785893"),t=s("250065");let l={id:"form-set-output",title:"FORM SET OUTPUT",slug:"/commands/form-set-output",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"FORM SET OUTPUT"})," ( {",(0,i.jsx)(r.em,{children:"laTable"})," ;} ",(0,i.jsx)(r.em,{children:"formulaire"})," {; ",(0,i.jsx)(r.em,{children:"formUtilisateur"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Param\xe8tre"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"laTable"}),(0,i.jsx)(r.td,{children:"Table"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Table pour laquelle d\xe9finir le formulaire sortie ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"formulaire"}),(0,i.jsx)(r.td,{children:"Text, Object"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Nom du formulaire table (cha\xeene), ouChemin POSIX (cha\xeene) d'un fichier .json d\xe9crivant le formulaire, ouObjet d\xe9crivant le formulaire"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"formUtilisateur"}),(0,i.jsx)(r.td,{children:"Text"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Nom du formulaire utilisateur \xe0 utiliser"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"FORM SET OUTPUT"})," vous permet de d\xe9finir ",(0,i.jsx)(r.em,{children:"formulaire"})," ou ",(0,i.jsx)(r.em,{children:"formUtilisateur"})," comme formulaire sortie courant de ",(0,i.jsx)(r.em,{children:"laTable"})," pour le process courant. ",(0,i.jsx)(r.em,{children:"formulaire"})," doit appartenir \xe0 ",(0,i.jsx)(r.em,{children:"laTable"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Dans le param\xe8tre ",(0,i.jsx)(r.em,{children:"formulaire"}),", vous pouvez passer :"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"le nom d'un formulaire (table) \xe0 utiliser,"}),"\n",(0,i.jsxs)(r.li,{children:["le chemin (en syntaxe POSIX) d'un fichier .json valide contenant la description du formulaire \xe0 utiliser (voir ",(0,i.jsx)(r.em,{children:"Chemin d'acc\xe8s du formulaire"}),"),"]}),"\n",(0,i.jsx)(r.li,{children:"un objet contenant la description du formulaire \xe0 utiliser."}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"La port\xe9e de cette commande est le process courant. Chaque table dispose de son propre formulaire sortie dans chaque process."}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Note :"})," Pour des raisons structurelles, cette commande n'est pas compatible avec les formulaires projets."]}),"\n",(0,i.jsxs)(r.p,{children:["La commande ",(0,i.jsx)(r.strong,{children:"FORM SET OUTPUT"})," ne provoque pas l'affichage du formulaire ; elle d\xe9signe simplement le formulaire devant \xeatre imprim\xe9, affich\xe9, ou utilis\xe9 par d'autres commandes. Pour plus d'informations sur la cr\xe9ation de formulaires, reportez-vous au manuel ",(0,i.jsx)(r.em,{children:"Mode D\xe9veloppement"})," de 4D."]}),"\n",(0,i.jsxs)(r.p,{children:["Le formulaire sortie par d\xe9faut est d\xe9fini dans la fen\xeatre de l'Explorateur pour chaque table. Il est identifi\xe9 par la lettre S plac\xe9e pr\xe8s de son nom dans l'Explorateur et dans les bo\xeetes de dialogue listant les formulaires. Ce formulaire par d\xe9faut sera utilis\xe9 si vous n'appelez pas la commande ",(0,i.jsx)(r.strong,{children:"FORM SET OUTPUT"})," ou si vous passez \xe0 cette commande un nom de formulaire erron\xe9 ou inexistant."]}),"\n",(0,i.jsxs)(r.p,{children:["Le param\xe8tre facultatif ",(0,i.jsx)(r.em,{children:"formUtilisateur"})," permet de d\xe9signer un formulaire utilisateur (issu du ",(0,i.jsx)(r.em,{children:"formulaire"}),") comme formulaire sortie par d\xe9faut. Si vous passez un nom de formulaire utilisateur valide, ce formulaire sera utilis\xe9 par d\xe9faut en lieu et place du formulaire sortie dans le process courant. Ce principe permet de disposer simultan\xe9ment de diff\xe9rents formulaires utilisateurs personnalis\xe9s (g\xe9n\xe9r\xe9s \xe0 l\u2019aide de la commande ",(0,i.jsx)(r.em,{children:"_o_CREATE USER FORM"}),") et d\u2019utiliser celui qui convient en fonction du contexte."]}),"\n",(0,i.jsxs)(r.p,{children:["Pour plus d\u2019informations sur les formulaires utilisateurs, reportez-vous \xe0 la section ",(0,i.jsx)(r.em,{children:"Pr\xe9sentation des formulaires utilisateurs"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"Les formulaires sortie sont exploit\xe9s par trois groupes de commandes. Le premier groupe g\xe8re l'affichage des enregistrements \xe0 l'\xe9cran, le deuxi\xe8me g\xe8re la g\xe9n\xe9ration d'\xe9tats et le troisi\xe8me g\xe8re l'export de donn\xe9es."}),"\n",(0,i.jsx)(r.p,{children:"Chacune des commandes suivantes affiche une liste d'enregistrements dans un formulaire sortie :"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/fr/commands/display-selection",children:"DISPLAY SELECTION"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"})}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Vous utilisez le formulaire sortie lorsque vous cr\xe9ez des \xe9tats \xe0 l'aide des commandes suivantes :"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/fr/commands/print-label",children:"PRINT LABEL"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"})}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Chacune des commandes d'export suivantes utilise \xe9galement le formulaire sortie :"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/fr/commands/export-dif",children:"EXPORT DIF"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/fr/commands/export-sylk",children:"EXPORT SYLK"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/fr/commands/export-text",children:"EXPORT TEXT"})}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsxs)(r.p,{children:["L'exemple suivant illustre une utilisation typique ",(0,i.jsx)(r.strong,{children:"FORM SET OUTPUT"}),". Notez que, bien que dans cet exemple la commande ",(0,i.jsx)(r.strong,{children:"FORM SET OUTPUT"})," soit plac\xe9e juste avant que le formulaire soit utilis\xe9, cela n'est pas obligatoire. En fait, la commande pourrait se trouver dans n'importe quelle autre m\xe9thode, dans la mesure o\xf9 elle est ex\xe9cut\xe9e avant celle-ci :"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Parties];"Saisie Parties")\xa0//S\xe9lection du formulaire entr\xe9e\n\xa0FORM SET OUTPUT([Parties];"Liste Parties")\xa0//S\xe9lection du formulaire sortie\n\xa0MODIFY SELECTION([Parties])\xa0//Cette commande utilise les deux formulaires\n'})}),"\n",(0,i.jsx)(r.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(r.p,{children:"L'exemple suivant utilise un formulaire d\xe9crit dans un fichier .json :"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([Personnel];"/RESOURCES/PersonnelPrintForm.json")\n\xa0ALL RECORDS([Personnel])\n\xa0PRINT SELECTION([Personnel])\n'})}),"\n",(0,i.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/fr/commands/display-selection",children:"DISPLAY SELECTION"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/commands/export-dif",children:"EXPORT DIF"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/commands/export-sylk",children:"EXPORT SYLK"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/commands/export-text",children:"EXPORT TEXT"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/commands/form-set-input",children:"FORM SET INPUT"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/commands/print-label",children:"PRINT LABEL"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,i.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(r.td,{children:"54"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Thread safe"}),(0,i.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return o},a:function(){return l}});var n=s(667294);let i={},t=n.createContext(i);function l(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);