"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51600"],{538784:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>m,assets:()=>c,toc:()=>o,frontMatter:()=>l});var r=JSON.parse('{"id":"commands-legacy/web-service-call","title":"WEB SERVICE CALL","description":"WEB SERVICE CALL ( urlAcc\xe8s ; soapAction ; nomM\xe9thode ; nameSpace {; typeCompos\xe9 {; *}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-service-call.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-call","permalink":"/docs/fr/commands/web-service-call","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-call.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-service-call","title":"WEB SERVICE CALL","slug":"/commands/web-service-call","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE AUTHENTICATE","permalink":"/docs/fr/commands/web-service-authenticate"},"next":{"title":"WEB SERVICE Get info","permalink":"/docs/fr/commands/web-service-get-info"}}'),t=s("785893"),i=s("250065");let l={id:"web-service-call",title:"WEB SERVICE CALL",slug:"/commands/web-service-call",displayed_sidebar:"docs"},a=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Mode RPC, entr\xe9e et sortie simples",id:"mode-rpc-entr\xe9e-et-sortie-simples",level:5},{value:"Mode RPC, entr\xe9e compos\xe9e et sortie simple",id:"mode-rpc-entr\xe9e-compos\xe9e-et-sortie-simple",level:5},{value:"Mode RPC, entr\xe9e simple et sortie compos\xe9e",id:"mode-rpc-entr\xe9e-simple-et-sortie-compos\xe9e",level:5},{value:"Mode RPC, entr\xe9e et sortie compos\xe9es",id:"mode-rpc-entr\xe9e-et-sortie-compos\xe9es",level:5},{value:"Mode DOC",id:"mode-doc",level:5},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB SERVICE CALL"})," ( ",(0,t.jsx)(n.em,{children:"urlAcc\xe8s"})," ; ",(0,t.jsx)(n.em,{children:"soapAction"})," ; ",(0,t.jsx)(n.em,{children:"nomM\xe9thode"})," ; ",(0,t.jsx)(n.em,{children:"nameSpace"})," {; ",(0,t.jsx)(n.em,{children:"typeCompos\xe9"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"urlAcc\xe8s"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"URL d\u2019acc\xe8s au Web Service"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"soapAction"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Contenu du champ SOAPAction"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomM\xe9thode"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de la m\xe9thode"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nameSpace"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Espace de nommage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"typeCompos\xe9"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Configuration de types compos\xe9s (types simples si omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Ne pas fermer la connexion"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WEB SERVICE CALL"})," permet d\u2019invoquer un Web Service en envoyant une requ\xeate HTTP. Cette requ\xeate contient le message SOAP pr\xe9alablement construit \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Tout appel ult\xe9rieur \xe0 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})," provoquera la construction d\u2019une nouvelle requ\xeate. L\u2019ex\xe9cution d\u2019une commande ",(0,t.jsx)(n.strong,{children:"WEB SERVICE CALL"})," efface \xe9galement tout \xe9ventuel r\xe9sultat de Web Service pr\xe9c\xe9demment appel\xe9 et le remplace par le(s) nouveau(x) r\xe9sultats."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"urlAcc\xe8s"})," l\u2019URL complet permettant d\u2019acc\xe9der au Web Service (ne confondez pas cet URL avec celui du fichier WSDL, d\xe9crivant le Web Service)."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Acc\xe8s en mode s\xe9curis\xe9 (SSL)"})," : Si vous souhaitez utiliser le Web Service en mode s\xe9curis\xe9 (SSL), passez simplement https:// en t\xeate de l\u2019URL au lieu de http://. Ce param\xe9trage active automatiquement la connexion en mode s\xe9curis\xe9.",(0,t.jsx)(n.br,{}),"\nA noter que cette commande peut utiliser un certificat serveur (cf. commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/http-set-certificates-folder",children:"HTTP SET CERTIFICATES FOLDER"}),'). Si le certificat n\u2019est pas valide (expir\xe9 ou r\xe9voqu\xe9), la variable syst\xe8me OK prend la valeur 0 et l\u2019erreur 901 "Certificat serveur invalide" est retourn\xe9e. Vous pouvez intercepter cette erreur \xe0 l\u2019aide d\u2019une m\xe9thode d\u2019appel sur erreur install\xe9e par la commande ',(0,t.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"soapAction"})," le contenu du champ SOAPAction de la requ\xeate. Ce champ contient g\xe9n\xe9ralement la valeur \u201CNomService#NomM\xe9thode\u201D."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"nomM\xe9thode"})," le nom de la m\xe9thode distante (appartenant au Web Service) que vous souhaitez ex\xe9cuter."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"nameSpace"})," l\u2019espace de nommage XML utilis\xe9 pour la requ\xeate SOAP. Pour plus d\u2019informations sur l\u2019espace de nommage XML, reportez-vous au manuel ",(0,t.jsx)(n.em,{children:"Mode D\xe9veloppement"})," de 4D."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"typeCompos\xe9"})," permet d'indiquer la configuration des param\xe8tres Web Service envoy\xe9s ou re\xe7us (d\xe9finis \xe0 l\u2019aide des commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),"). La valeur du param\xe8tre ",(0,t.jsx)(n.em,{children:"typeCompos\xe9"})," d\xe9pend du mode de publication du Web Service (DOC ou RPC, cf. manuel ",(0,t.jsx)(n.em,{children:"Mode D\xe9veloppement"}),") et de ses param\xe8tres.",(0,t.jsx)(n.br,{}),"\nVous devez passer dans ",(0,t.jsx)(n.em,{children:"typeCompos\xe9"})," l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"Web Services (Client)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Web Service dynamic"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Web Service manual"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Web Service manual in"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Web Service manual out"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Chaque constante correspond \xe0 une \u201Cconfiguration\u201D de Web Services. Une configuration repr\xe9sente une combinaison entre le mode de publication (RPC/DOC) et les types de param\xe8tres entr\xe9e/sortie simples ou compos\xe9s (aussi appel\xe9s \u201Ccomplexes\u201D) mis en oeuvre."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," La caract\xe9ristique \u201Centr\xe9e\u201D ou \u201Csortie\u201D des param\xe8tres s\u2019\xe9value du point de vue de la m\xe9thode proxy/du Web Service :",(0,t.jsx)(n.br,{}),"\n\u2022 un param\xe8tre \u201Centr\xe9e\u201D est une valeur pass\xe9e \xe0 la m\xe9thode proxy et donc au Web Service,",(0,t.jsx)(n.br,{}),"\n\u2022 un param\xe8tre \u201Csortie\u201D est retourn\xe9 par le Web Service et donc par la m\xe9thode proxy (g\xe9n\xe9ralement via $0)."]}),"\n",(0,t.jsx)(n.p,{children:"Le tableau suivant fournit les configurations possibles et les constantes correspondantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Param\xe8tres entr\xe9e"})}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Param\xe8tres sortie"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Simples"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Compos\xe9s"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Simples"})}),(0,t.jsx)(n.td,{children:"RPC / Web Service dynamic"}),(0,t.jsx)(n.td,{children:"RPC / Web Service manual in"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Compos\xe9s"})}),(0,t.jsx)(n.td,{children:"RPC / Web Service manual out"}),(0,t.jsx)(n.td,{children:"RPC ou DOC / Web Service manual"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Les cinq configurations d\xe9crites ci-dessous peuvent donc \xeatre mises en oeuvre. Dans tous les cas, 4D se charge de formater la requ\xeate SOAP \xe0 envoyer au Web Service ainsi que son enveloppe. Il vous appartient de formater le contenu de cette requ\xeate suivant la configuration utilis\xe9e."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Bien qu\u2019\xe9tant des types XML compos\xe9s, les tableaux de donn\xe9es sont g\xe9r\xe9s par 4D comme des types simples."]}),"\n",(0,t.jsx)(n.h5,{id:"mode-rpc-entr\xe9e-et-sortie-simples",children:"Mode RPC, entr\xe9e et sortie simples"}),"\n",(0,t.jsxs)(n.p,{children:["Cette configuration est la plus simple \xe0 utiliser. Dans ce cas, le param\xe8tre ",(0,t.jsx)(n.em,{children:"typeCompos\xe9"})," contient la constante Web Service dynamic ou est omis.",(0,t.jsx)(n.br,{}),"\nLes param\xe8tres envoy\xe9s et les r\xe9ponses re\xe7ues peuvent \xeatre manipul\xe9s directement, sans traitement pr\xe9alable.",(0,t.jsx)(n.br,{}),"\nReportez-vous \xe0 l\u2019exemple de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),"."]}),"\n",(0,t.jsx)(n.h5,{id:"mode-rpc-entr\xe9e-compos\xe9e-et-sortie-simple",children:"Mode RPC, entr\xe9e compos\xe9e et sortie simple"}),"\n",(0,t.jsxs)(n.p,{children:["Dans ce cas, le param\xe8tre ",(0,t.jsx)(n.em,{children:"typeCompos\xe9"})," contient la constante Web Service manual in. Avec cette configuration, vous devez passer \u201Cmanuellement\u201D au Web Service chaque \xe9l\xe9ment xml source sous la forme d'un BLOB, \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),".",(0,t.jsx)(n.br,{}),"\nIl vous appartient de formater le BLOB initial sous forme d\u2019\xe9l\xe9ment xml valide. Ce BLOB doit contenir comme premier \xe9l\xe9ment le premier \xe9l\xe9ment \u201Cfils\u201D suppos\xe9 de l\u2019\xe9l\xe9ment  de la requ\xeate finale."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Exemple"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $1 : Blob\n\xa0var $0 : Boolean\n\xa0\n\xa0WEB SERVICE SET PARAMETER("MonBlobXML";$1)\n\xa0WEB SERVICE CALL("http://my.domain.com/mon_service";"MonSoapAction";"LaMethode";"http://my.namespace.com/";Web Service manual in)\n\xa0WEB SERVICE GET RESULT($0;"MaVarSortie";*)\n'})}),"\n",(0,t.jsx)(n.h5,{id:"mode-rpc-entr\xe9e-simple-et-sortie-compos\xe9e",children:"Mode RPC, entr\xe9e simple et sortie compos\xe9e"}),"\n",(0,t.jsxs)(n.p,{children:["Dans ce cas, le param\xe8tre ",(0,t.jsx)(n.em,{children:"typeCompos\xe9"})," contient la constante Web Service manual out. Chaque param\xe8tre de sortie sera retourn\xe9 par le Web Service sous forme d\u2019\xe9l\xe9ment xml stock\xe9 dans un BLOB. Vous r\xe9cup\xe9rez ce param\xe8tre \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),". Vous pourrez ensuite analyser le contenu du BLOB re\xe7u \xe0 l\u2019aide des commandes XML de 4D."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Exemple"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Blob\n\xa0var $1 : Boolean\n\xa0\n\xa0WEB SERVICE SET PARAMETER("MaVarEntree";$1)\n\xa0WEB SERVICE CALL("http://my.domain.com/mon_service";"MonSoapAction";"LaMethode";"http://my.namespace.com/";Web Service manual out)\n\xa0WEB SERVICE GET RESULT($0;"MonXMLSortie";*)\n'})}),"\n",(0,t.jsx)(n.h5,{id:"mode-rpc-entr\xe9e-et-sortie-compos\xe9es",children:"Mode RPC, entr\xe9e et sortie compos\xe9es"}),"\n",(0,t.jsxs)(n.p,{children:["Dans ce cas, le param\xe8tre ",(0,t.jsx)(n.em,{children:"typeCompos\xe9"})," contient la constante Web Service manual. Chaque param\xe8tre d\u2019entr\xe9e et de sortie devra \xeatre stock\xe9 sous forme d\u2019\xe9l\xe9ment xml dans des BLOBs, comme d\xe9crit dans les deux configurations pr\xe9c\xe9dentes."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Exemple"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Blob\n\xa0var $1 : Blob\n\xa0\n\xa0WEB SERVICE SET PARAMETER("MonBlobXMLEntree";$1)\n\xa0WEB SERVICE CALL("http://my.domain.com/mon_service";"MonSoapAction";"LaMethode";"http://my.namespace.com/";Web Service manual)\n\xa0WEB SERVICE GET RESULT($0;"MonXMLSortie";*)\n'})}),"\n",(0,t.jsx)(n.h5,{id:"mode-doc",children:"Mode DOC"}),"\n",(0,t.jsxs)(n.p,{children:["Une m\xe9thode proxy d\u2019appel d\u2019un Web Service DOC est semblable \xe0 une m\xe9thode proxy d\u2019appel d\u2019un Web Service RPC utilisant des param\xe8tres d\u2019entr\xe9e et de sortie compos\xe9s.",(0,t.jsx)(n.br,{}),"\nLa seule diff\xe9rence entre ces deux configurations se situe au niveau du contenu xml des param\xe8tres BLOB pass\xe9s et re\xe7us. Du point de vue de 4D, la construction et l\u2019envoi de la requ\xeate SOAP sont identiques."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Exemple"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Blob\n\xa0var $1 : Blob\n\xa0\n\xa0WEB SERVICE SET PARAMETER("MonXMLEntree";$1)\n\xa0WEB SERVICE CALL("http://my.domain.com/mon_service";"MonSoapAction";"LaMethode";"http://my.namespace.com/";Web Service manual)\n\xa0WEB SERVICE GET RESULT($0;"MonXMLSortie";*)\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"}),' Dans le cas des Web Services DOC, la valeur des cha\xeenes (ci-dessus \u201CMonXMLEntree\u201D et \u201CMonXMLSortie\u201D) pass\xe9es en param\xe8tres n\u2019a pas d\u2019importance ; il est m\xeame possible de passer des cha\xeenes vides (""). En effet, ces valeurs ne sont pas utilis\xe9es dans la requ\xeate SOAP contenant le document xml. Il est toutefois obligatoire de passer ces param\xe8tres.']}),"\n",(0,t.jsx)(n.p,{children:"Pour utiliser un Web Service publi\xe9 en mode DOC (ou en mode RPC avec types compos\xe9s), il est conseill\xe9 de proc\xe9der de la mani\xe8re suivante :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["G\xe9n\xe9rer la m\xe9thode proxy \xe0 l\u2019aide de l\u2019Assistant Client Web Services.",(0,t.jsx)(n.br,{}),"\nLa m\xe9thode proxy sera appel\xe9e de la mani\xe8re suivante : ",(0,t.jsx)(n.em,{children:"$BlobXMLresult:=$proxy_MethodeDOC($BlobXMLparam)"})]}),"\n",(0,t.jsxs)(n.li,{children:["Prendre connaissance du contenu des requ\xeates SOAP \xe0 envoyer au Web Service \xe0 l\u2019aide d\u2019un outil de test en ligne (par exemple ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"http://soapclient.com/soaptest.html",children:"http://soapclient.com/soaptest.html"})}),"). Ce type d\u2019outil permet, \xe0 partir du WSDL du Web Service, de g\xe9n\xe9rer des formulaires HTML de test."]}),"\n",(0,t.jsxs)(n.li,{children:["Copier le contenu xml g\xe9n\xe9r\xe9 \xe0 partir du premier fils de ",(0,t.jsx)(n.em,{}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Ecrire la m\xe9thode permettant de placer les valeurs r\xe9elles des param\xe8tres dans le code xml ; ce code doit ensuite \xeatre plac\xe9 dans le BLOB ",(0,t.jsx)(n.em,{children:"$BlobXMLparam"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Pour l\u2019analyse de la r\xe9ponse, vous pouvez \xe9galement utiliser un outil de test en ligne, ou tirer parti du WSDL qui sp\xe9cifie les \xe9l\xe9ments retourn\xe9s."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"*"})," permet d'optimiser les appels. Lorsqu'il est pass\xe9, la commande ne referme pas la connexion utilis\xe9e par le process \xe0 l\u2019issue de son ex\xe9cution. Dans ce cas, l\u2019appel suivant \xe0 ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"})," r\xe9utilise cette m\xeame connexion si le param\xe8tre * est pass\xe9, et ainsi de suite. Pour refermer la connexion, il suffit d\u2019ex\xe9cuter la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"})," sans le param\xe8tre *. Ce m\xe9canisme permet d\u2019acc\xe9l\xe9rer sensiblement les traitements en cas d\u2019appels successifs de plusieurs Web Services sur le m\xeame serveur, notamment en configuration WAN (via Internet par exemple). A noter que ce m\xe9canisme s\u2019appuie sur le param\xe9trage \u201Ckeep-alive\u201D du serveur Web. Ce param\xe9trage d\xe9finit g\xe9n\xe9ralement un nombre maximal de requ\xeates via une m\xeame connexion, et peut m\xeame les interdire. Si les requ\xeates ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-call",children:"WEB SERVICE CALL"})," encha\xeen\xe9es dans la m\xeame connexion atteignent ce nombre maximal ou si les connexions keep-alive ne sont pas autoris\xe9es, 4D cr\xe9era une nouvelle connexion pour chaque requ\xeate."]}),"\n",(0,t.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"Si la requ\xeate est correctement achemin\xe9e et que le Web Service l\u2019a accept\xe9e, la variable syst\xe8me OK prend la valeur 1. Sinon, elle prend la valeur 0 et une erreur est retourn\xe9e."}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);