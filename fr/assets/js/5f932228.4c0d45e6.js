"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43551"],{790140:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/new-process","title":"New process","description":"New process ( m\xe9thode ; pile {; nom {; param {; param2 ; ... ; paramN}}}{; *} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/new-process.md","sourceDirName":"commands-legacy","slug":"/commands/new-process","permalink":"/docs/fr/commands/new-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-process.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"new-process","title":"New process","slug":"/commands/new-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET REGISTERED CLIENTS","permalink":"/docs/fr/commands/get-registered-clients"},"next":{"title":"PAUSE PROCESS","permalink":"/docs/fr/commands/pause-process"}}'),o=n("785893"),t=n("250065");let l={id:"new-process",title:"New process",slug:"/commands/new-process",displayed_sidebar:"docs"},d=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"M\xe9thode du process",id:"m\xe9thode-du-process",level:3},{value:"Pile du process",id:"pile-du-process",level:3},{value:"Nom du process",id:"nom-du-process",level:3},{value:"Param\xe8tres de la m\xe9thode process",id:"param\xe8tres-de-la-m\xe9thode-process",level:3},{value:"Param\xe8tre optionnel *",id:"param\xe8tre-optionnel-",level:3},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"New process"})," ( ",(0,o.jsx)(s.em,{children:"m\xe9thode"})," ; ",(0,o.jsx)(s.em,{children:"pile"})," {; ",(0,o.jsx)(s.em,{children:"nom"})," {; ",(0,o.jsx)(s.em,{children:"param"})," {; ",(0,o.jsx)(s.em,{children:"param2"})," ; ... ; ",(0,o.jsx)(s.em,{children:"paramN"}),"}}}{; *} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Param\xe8tre"}),(0,o.jsx)(s.th,{children:"Type"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Description"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"m\xe9thode"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"M\xe9thode \xe0 ex\xe9cuter dans le process"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"pile"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Taille de la pile en octets (0 = taille par d\xe9faut)"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"nom"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Nom du process cr\xe9\xe9"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"param"}),(0,o.jsx)(s.td,{children:"Expression"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Param\xe8tre(s) de la m\xe9thode"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"*"}),(0,o.jsx)(s.td,{children:"Op\xe9rateur"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Process unique"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"R\xe9sultat"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Num\xe9ro du process nouvellement cr\xe9\xe9 ou du process d\xe9j\xe0 en cours d'ex\xe9cution"})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(s.p,{children:["La commande ",(0,o.jsx)(s.strong,{children:"New process"})," lance un nouveau process (sur la m\xeame machine) et retourne le num\xe9ro de ce process."]}),"\n",(0,o.jsxs)(s.p,{children:["Si le process n'a pas pu \xeatre cr\xe9\xe9, par exemple s'il n'y a pas assez de m\xe9moire, ",(0,o.jsx)(s.strong,{children:"New process"})," retourne z\xe9ro et une erreur est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur \xe0 l'aide d'une m\xe9thode de gestion d'erreurs install\xe9e par la commande ",(0,o.jsx)(s.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"m\xe9thode-du-process",children:"M\xe9thode du process"}),"\n",(0,o.jsxs)(s.p,{children:["Vous passez le nom de la m\xe9thode de gestion du nouveau process dans ",(0,o.jsx)(s.em,{children:"m\xe9thode"}),". Une fois que 4D a d\xe9fini le contexte pour le nouveau process, il d\xe9marre l'ex\xe9cution de cette m\xe9thode qui devient alors la m\xe9thode du process."]}),"\n",(0,o.jsxs)(s.p,{children:["Si le contexte d'ex\xe9cution prend en charge le mode pr\xe9emptif, et si ",(0,o.jsx)(s.em,{children:"m\xe9thode"}),' est d\xe9clar\xe9e "thread-safe", le nouveau process 4D sera ex\xe9cut\xe9 dans un ',(0,o.jsx)(s.em,{children:"thread"})," pr\xe9emptif lorsque l'application sera ex\xe9cut\xe9e en mode compil\xe9. Pour plus d'informations, veuillez consulter la page ",(0,o.jsx)(s.em,{children:"Process 4D pr\xe9emptifs"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"pile-du-process",children:"Pile du process"}),"\n",(0,o.jsxs)(s.p,{children:["Le param\xe8tre ",(0,o.jsx)(s.em,{children:"pile"}),' permet d\'indiquer la quantit\xe9 de m\xe9moire allou\xe9e pour la pile du process. Cette valeur repr\xe9sente la place utilis\xe9e en m\xe9moire pour "empiler" les appels de m\xe9thode, les variables locales, les param\xe8tres des sous-routines et les enregistrements empil\xe9s.']}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Passez 0 dans ",(0,o.jsx)(s.em,{children:"pile"})," pour utiliser une taille de pile par d\xe9faut, adapt\xe9e \xe0 la plupart des applications (param\xe9trage recommand\xe9)."]}),"\n",(0,o.jsx)(s.li,{children:"Dans certains cas particuliers, vous pouvez souhaiter utiliser une valeur personnalis\xe9e. Elle doit \xeatre exprim\xe9e en octets. Ce param\xe9trage doit \xeatre utilis\xe9 avec pr\xe9caution, et d\xe9pend de la cha\xeene d'appel dans le process et de la plateforme."}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Note :"})," La pile n'est pas la m\xe9moire totale r\xe9serv\xe9e au process. Les process se partagent la m\xe9moire pour les enregistrements, les variables interprocess, etc. Un process utilise \xe9galement de la m\xe9moire suppl\xe9mentaire pour stocker ses variables process. La pile contient diverses informations internes \xe0 4D ; la taille de ces informations varie en fonction du nombre d'appels de m\xe9thodes imbriqu\xe9es."]}),"\n",(0,o.jsx)(s.h3,{id:"nom-du-process",children:"Nom du process"}),"\n",(0,o.jsxs)(s.p,{children:["Vous passez le nom du nouveau process dans ",(0,o.jsx)(s.em,{children:"nomProcess"}),". Ce nom s'affichera dans la ",(0,o.jsx)(s.strong,{children:"liste des process"})," de l'Explorateur d'ex\xe9cution et sera retourn\xe9 par la commande ",(0,o.jsx)(s.a,{href:"/docs/fr/commands/process-info",children:"Process info"}),". Vous pouvez omettre ce param\xe8tre ; dans ce cas, le nom du process sera une cha\xeene vide. Vous pouvez cr\xe9er un process local en pr\xe9fixant son nom d'un symbole dollar (",(0,o.jsx)(s.em,{children:"$"}),")."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Important :"})," Rappelez-vous que, en client/serveur, les process locaux ne doivent pas acc\xe9der aux donn\xe9es. Pour plus d'informations, veuillez consulter la section ",(0,o.jsx)(s.em,{children:"Process globaux et locaux"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"param\xe8tres-de-la-m\xe9thode-process",children:"Param\xe8tres de la m\xe9thode process"}),"\n",(0,o.jsxs)(s.p,{children:["Vous pouvez passer des param\xe8tres \xe0 la m\xe9thode process via un ou plusieurs param\xe8tre(s) ",(0,o.jsx)(s.em,{children:"param"}),". Vous pouvez le faire de la m\xeame mani\xe8re que pour les sous-routines (cf. paragraphe ). Une fois qu'elle a commenc\xe9 \xe0 s'ex\xe9cuter dans le contexte du nouveau process, la m\xe9thode process re\xe7oit les valeurs des param\xe8tres dans ",(0,o.jsx)(s.em,{children:"$1"}),", ",(0,o.jsx)(s.em,{children:"$2"}),", etc. N'oubliez pas que les tableaux ne peuvent pas \xeatre pass\xe9s comme param\xe8tres \xe0 une m\xe9thode. En outre, des consid\xe9rations suppl\xe9mentaires sont \xe0 prendre en compte dans le contexte de la commande ",(0,o.jsx)(s.strong,{children:"New process"})," :"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"les pointeurs vers des tables ou des champs sont autoris\xe9s,"}),"\n",(0,o.jsx)(s.li,{children:"les pointeurs vers des variables, en particulier des variables process et locales, sont d\xe9conseill\xe9s car les variables peuvent \xeatre ind\xe9finies au moment o\xf9 la m\xe9thode process y acc\xe8de."}),"\n",(0,o.jsxs)(s.li,{children:["les param\xe8tres de type Objet ou Collection sont pass\xe9s ",(0,o.jsx)(s.strong,{children:"par copie"}),", ",(0,o.jsx)(s.em,{children:"i.e."})," 4D cr\xe9era une copie de l'objet ou de la collection dans le process de destination, et non une r\xe9f\xe9rence. Si vous souhaitez passer un param\xe8tre de type objet ou collection ",(0,o.jsx)(s.strong,{children:"par r\xe9f\xe9rence"}),", vous devez utiliser un objet ou une collection partag\xe9(e) (voir ",(0,o.jsx)(s.em,{children:"Objets partag\xe9s et collections partag\xe9es"}),")."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Note :"})," Si vous passez des param\xe8tres \xe0 la m\xe9thode process, vous devez passer le param\xe8tre ",(0,o.jsx)(s.em,{children:"nom"}),", il ne peut \xeatre omis dans ce cas."]}),"\n",(0,o.jsx)(s.h3,{id:"param\xe8tre-optionnel-",children:"Param\xe8tre optionnel *"}),"\n",(0,o.jsxs)(s.p,{children:["Si vous passez le dernier param\xe8tre (optionnel) ",(0,o.jsx)(s.em,{children:"*"}),", vous indiquez \xe0 4D de v\xe9rifier en premier lieu si un process du m\xeame nom que celui que vous avez pass\xe9 dans ",(0,o.jsx)(s.em,{children:"nom"})," est d\xe9j\xe0 en cours d'ex\xe9cution. Si c'est le cas, 4D ne d\xe9marre pas de nouveau process et retourne le num\xe9ro du process existant."]}),"\n",(0,o.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsx)(s.p,{children:"Examinons la m\xe9thode projet suivante :"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// AJOUT CLIENTS\n\xa0SET MENU BAR(1)\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD([Clients];*)\n\xa0Until(OK=0)\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Si vous associez cette m\xe9thode projet \xe0 une commande de menu cr\xe9\xe9 dans l'\xe9diteur de barres de menus et que vous lui affectez la propri\xe9t\xe9 ",(0,o.jsx)(s.strong,{children:"D\xe9marrer un process"}),", 4D va automatiquement cr\xe9er un nouveau process lors de l'ex\xe9cution de la m\xe9thode. L'instruction ",(0,o.jsx)(s.a,{href:"/docs/fr/commands/set-menu-bar",children:"SET MENU BAR"}),"(1) associe cette barre de menus au nouveau process. En l'absence de toute fen\xeatre (que vous pourriez avoir ouverte avec ",(0,o.jsx)(s.a,{href:"/docs/fr/commands/open-window",children:"Open window"}),"), l'appel \xe0 ",(0,o.jsx)(s.a,{href:"/docs/fr/commands/add-record",children:"ADD RECORD"})," en cr\xe9era une automatiquement."]}),"\n",(0,o.jsx)(s.p,{children:"Si maintenant vous voulez pouvoir d\xe9marrer le process Ajout Clients lorsque vous cliquez sur un bouton situ\xe9 dans un tableau de contr\xf4le personnalis\xe9, vous pouvez \xe9crire :"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode objet bouton bAjoutClients\n\xa0$vlProcessID:=New process("Ajout Clients";0;"Ajout de clients")\n'})}),"\n",(0,o.jsx)(s.p,{children:"Ce bouton fait la m\xeame chose que la commande de menu personnalis\xe9e."}),"\n",(0,o.jsx)(s.p,{children:"Si, maintenant, lorsque la commande de menu est s\xe9lectionn\xe9e ou lorsque le bouton re\xe7oit un clic, vous voulez que le process soit lanc\xe9 s'il n'existe pas ou qu'il soit pass\xe9 au premier plan s'il existe d\xe9j\xe0, vous pouvez cr\xe9er la m\xe9thode DEMARRER AJOUT CLIENTS :"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// DEMARRER AJOUT CLIENTS\n\xa0$vlProcessID:=New process("Ajout Clients";0;"Ajout de clients ";*)\n\xa0If($vlProcessID#0)\n\xa0\xa0\xa0\xa0BRING TO FRONT($vlProcessID)\n\xa0End if\n'})}),"\n",(0,o.jsxs)(s.p,{children:["La m\xe9thode objet de ",(0,o.jsx)(s.em,{children:"bAjoutClient"})," devient :"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode objet bouton bAjoutClients\n\xa0DEMARRER AJOUT CLIENTS\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Dans l'\xe9diteur de barres de menus, vous remplacez AJOUT CLIENTS par la m\xe9thode DEMARRER AJOUT CLIENTS. D\xe9s\xe9lectionnez l'option ",(0,o.jsx)(s.strong,{children:"D\xe9marrer un process"})," pour la commande de menu."]}),"\n",(0,o.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/fr/commands/execute-on-server",children:"Execute on server"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.em,{children:"Introduction aux process"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.em,{children:"Process 4D pr\xe9emptifs"})]}),"\n",(0,o.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,o.jsx)(s.td,{children:"317"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread safe"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var r=n(667294);let o={},t=r.createContext(o);function l(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);