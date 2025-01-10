"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97514"],{959575:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/http-request","title":"HTTP Request","description":"HTTP Request ( m\xe9thodeHTTP ; url ; contenu ; r\xe9ponse {; nomsEnT\xeates ; valeursEnT\xeates}{; *} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/http-request.md","sourceDirName":"commands-legacy","slug":"/commands/http-request","permalink":"/docs/fr/commands/http-request","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-request.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"http-request","title":"HTTP Request","slug":"/commands/http-request","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP Parse message","permalink":"/docs/fr/commands/http-parse-message"},"next":{"title":"HTTP SET CERTIFICATES FOLDER","permalink":"/docs/fr/commands/http-set-certificates-folder"}}'),r=s("785893"),d=s("250065");let l={id:"http-request",title:"HTTP Request",slug:"/commands/http-request",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"HTTP Request"})," ( ",(0,r.jsx)(n.em,{children:"m\xe9thodeHTTP"})," ; ",(0,r.jsx)(n.em,{children:"url"})," ; ",(0,r.jsx)(n.em,{children:"contenu"})," ; ",(0,r.jsx)(n.em,{children:"r\xe9ponse"})," {; ",(0,r.jsx)(n.em,{children:"nomsEnT\xeates"})," ; ",(0,r.jsx)(n.em,{children:"valeursEnT\xeates"}),"}{; *} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"m\xe9thodeHTTP"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"M\xe9thode HTTP pour la requ\xeate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"url"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"URL auquel envoyer la requ\xeate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"contenu"}),(0,r.jsx)(n.td,{children:"Text, Blob, Picture, Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Contenu du corps (body) de la requ\xeate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"r\xe9ponse"}),(0,r.jsx)(n.td,{children:"Text, Blob, Picture, Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"R\xe9sultat de la requ\xeate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomsEnT\xeates"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Noms des en-t\xeates de la requ\xeate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Noms d\u2019en-t\xeates retourn\xe9s"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeursEnT\xeates"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valeurs d\u2019en-t\xeates de la requ\xeate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeurs d\u2019en-t\xeates retourn\xe9es"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si pass\xe9, la connexion est maintenue (keep-alive)",(0,r.jsx)(n.br,{}),"Si omis, la connexion est automatiquement referm\xe9e"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Code de statut HTTP"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Compatibilit\xe9",type:"info",children:(0,r.jsxs)(n.p,{children:["Cette commande est maintenue pour des raisons de compatibilit\xe9 uniquement. Il est maintenant recommand\xe9 d'utiliser la classe ",(0,r.jsx)(n.a,{href:"/docs/fr/API/HTTPRequestClass",children:(0,r.jsx)(n.code,{children:"4D.HTTPRequest"})}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"HTTP Request"})," permet d\u2019envoyer tout type de requ\xeate HTTP vers un URL sp\xe9cifique et de traiter la r\xe9ponse du serveur HTTP."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"m\xe9thodeHTTP"})," la m\xe9thode HTTP de la requ\xeate. Vous pouvez utiliser une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,r.jsx)(n.em,{children:"Client HTTP"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP DELETE method"}),(0,r.jsx)(n.td,{children:"Cha\xeene"}),(0,r.jsx)(n.td,{children:"DELETE"}),(0,r.jsxs)(n.td,{children:["Voir la ",(0,r.jsx)(n.em,{children:"RFC 2616"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP GET method"}),(0,r.jsx)(n.td,{children:"Cha\xeene"}),(0,r.jsx)(n.td,{children:"GET"}),(0,r.jsxs)(n.td,{children:["Voir la ",(0,r.jsx)(n.em,{children:"RFC 2616"}),". Equivaut \xe0 utiliser la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/http-get",children:"HTTP Get"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP HEAD method"}),(0,r.jsx)(n.td,{children:"Cha\xeene"}),(0,r.jsx)(n.td,{children:"HEAD"}),(0,r.jsxs)(n.td,{children:["Voir la ",(0,r.jsx)(n.em,{children:"RFC 2616"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP OPTIONS method"}),(0,r.jsx)(n.td,{children:"Cha\xeene"}),(0,r.jsx)(n.td,{children:"OPTIONS"}),(0,r.jsxs)(n.td,{children:["Voir la ",(0,r.jsx)(n.em,{children:"RFC 2616"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP POST method"}),(0,r.jsx)(n.td,{children:"Cha\xeene"}),(0,r.jsx)(n.td,{children:"POST"}),(0,r.jsxs)(n.td,{children:["Voir la ",(0,r.jsx)(n.em,{children:"RFC 2616"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP PUT method"}),(0,r.jsx)(n.td,{children:"Cha\xeene"}),(0,r.jsx)(n.td,{children:"PUT"}),(0,r.jsxs)(n.td,{children:["Voir la ",(0,r.jsx)(n.em,{children:"RFC 2616"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP TRACE method"}),(0,r.jsx)(n.td,{children:"Cha\xeene"}),(0,r.jsx)(n.td,{children:"TRACE"}),(0,r.jsxs)(n.td,{children:["Voir la ",(0,r.jsx)(n.em,{children:"RFC 2616"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"url"})," l\u2019URL auquel adresser la requ\xeate. La syntaxe \xe0 utiliser est :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-RAW",children:"http://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Par exemple, les cha\xeenes suivantes peuvent \xeatre pass\xe9es :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-RAW",children:'\xa0\xa0\xa0 http://www.myserver.com\xa0\xa0\xa0 http://www.myserver.com/path\xa0\xa0\xa0 http://www.myserver.com/path?name="jones"\xa0\xa0\xa0 https://www.myserver.com/login (*)\xa0\xa0\xa0 http://123.45.67.89:8083\xa0\xa0\xa0 http://john:smith@123.45.67.89:8083\xa0\xa0\xa0 http://[2001:0db8:0000:0000:0000:ff00:0042:8329]\xa0\xa0\xa0 http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(*)"})," Lors des requ\xeates https, l\u2019autorit\xe9 du certificat n\u2019est pas v\xe9rifi\xe9e.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"(**)"})," Pour plus d'informations sur les adresses IPv6 dans les urls, veuillez vous r\xe9f\xe9rer \xe0 la ",(0,r.jsx)(n.a,{href:"https://www.ietf.org/rfc/rfc2732.txt",children:"RFC 2732"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"contenu"})," le corps (",(0,r.jsx)(n.em,{children:"body"}),") de la requ\xeate. Les donn\xe9es \xe0 passer dans ce param\xe8tre d\xe9pendent de la m\xe9thode HTTP de la requ\xeate.",(0,r.jsx)(n.br,{}),"\nVous pouvez envoyer des donn\xe9es de type texte, BLOB, image ou objet. Lorsque le ",(0,r.jsx)(n.em,{children:"content-type"})," n\u2019est pas sp\xe9cifi\xe9, les types suivants sont utilis\xe9s :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"pour les textes : text/plain - UTF8"}),"\n",(0,r.jsx)(n.li,{children:"pour les BLOB : application/octet-stream"}),"\n",(0,r.jsxs)(n.li,{children:["pour les images : type mime connu (",(0,r.jsx)(n.em,{children:"best for Web"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"pour les objets : application/json"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Apr\xe8s ex\xe9cution de la commande, le param\xe8tre ",(0,r.jsx)(n.em,{children:"r\xe9ponse"}),' r\xe9cup\xe8re le r\xe9sultat de la requ\xeate retourn\xe9 par le serveur. Ce r\xe9sultat correspond \xe0 la partie "corps" (',(0,r.jsx)(n.em,{children:"body"}),') de la r\xe9ponse, sans les "en-t\xeates" (',(0,r.jsx)(n.em,{children:"headers"}),"). Vous pouvez passer des variables de diff\xe9rents types dans ",(0,r.jsx)(n.em,{children:"r\xe9ponse"})," :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Texte : lorsque le r\xe9sultat est attendu sous forme de texte (cf. note ci-dessous)."}),"\n",(0,r.jsx)(n.li,{children:"BLOB : lorsque le r\xe9sultat est attendu sous forme binaire."}),"\n",(0,r.jsx)(n.li,{children:"Image : lorsque le r\xe9sultat est attendu sous forme d\u2019image."}),"\n",(0,r.jsx)(n.li,{children:"Objets : lorsque le r\xe9sultat est attendu sous forme d'objet."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Lorsqu'une variable texte est pass\xe9e dans ",(0,r.jsx)(n.em,{children:"r\xe9ponse"}),", 4D tente de d\xe9coder les donn\xe9es retourn\xe9es par le serveur. Le programme essaie d'abord de r\xe9cup\xe9rer le charset depuis l'en-t\xeate ",(0,r.jsx)(n.em,{children:"content-type"}),", ou \xe0 d\xe9faut via la BOM de la page ; en dernier lieu 4D recherche tout attribut ",(0,r.jsx)(n.em,{children:"http-equiv charset"})," (dans le contenu html) ou ",(0,r.jsx)(n.em,{children:"encoding"})," (pour le xml). Si aucun charset ne peut \xeatre d\xe9tect\xe9, 4D d\xe9code la r\xe9ponse en ANSI. Si la conversion \xe9choue, le texte r\xe9sultant est vide. Si vous n'\xeates pas s\xfbr que le serveur retourne une information de charset ou une BOM, mais si vous connaissez l'encodage, il est pr\xe9f\xe9rable de passer un BLOB dans ",(0,r.jsx)(n.em,{children:"r\xe9ponse"})," et d'utiliser la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/convert-to-text",children:"Convert to text"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez une variable de type objet dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"r\xe9ponse"})," et si la requ\xeate retourne un r\xe9sultat ayant le content-type texte, 4D tentera d\u2019analyser le contenu en tant que JSON et retournera le r\xe9sultat analys\xe9 sous forme d'objet. Sinon, un objet ",(0,r.jsx)(n.em,{children:"4D.Blob"})," sera retourn\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Si le r\xe9sultat retourn\xe9 par le serveur ne correspond pas au type de la variable ",(0,r.jsx)(n.em,{children:"r\xe9ponse"}),", elle est laiss\xe9e vide."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans les param\xe8tres ",(0,r.jsx)(n.em,{children:"nomsEnT\xeates"})," et ",(0,r.jsx)(n.em,{children:"valeursEnT\xeates"})," des tableaux contenant respectivement les noms et les valeurs des en-t\xeates de la requ\xeate.",(0,r.jsx)(n.br,{}),"\nA l\u2019issue de l\u2019ex\xe9cution de la m\xe9thode, ces tableaux contiendront les noms et valeurs des en-t\xeates retourn\xe9s par le serveur HTTP. Ce principe permet notamment de g\xe9rer des cookies."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"})," permet d\u2019activer le m\xe9canisme de ",(0,r.jsx)(n.em,{children:"keep-alive"})," pour la connexion au serveur. Par d\xe9faut, si ce param\xe8tre est omis, le ",(0,r.jsx)(n.em,{children:"keep-alive"})," n\u2019est pas activ\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["La commande retourne le code de statut HTTP standard (200=OK...) tel que renvoy\xe9 par le serveur. La liste des codes de statut HTTP est fournie dans la ",(0,r.jsx)(n.em,{children:"RFC 2616"}),".",(0,r.jsx)(n.br,{}),"\nSi la connexion au serveur est impossible pour une raison li\xe9e au r\xe9seau (",(0,r.jsx)(n.em,{children:"DNS Failed"}),", ",(0,r.jsx)(n.em,{children:"Server not reachable"}),"...) la commande retourne 0 et une erreur est g\xe9n\xe9r\xe9e. Vous pouvez intercepter les erreurs \xe0 l\u2019aide d\u2019une m\xe9thode install\xe9e par la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Demande de suppression d\u2019un enregistrement dans une base distante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $response : Text\n\xa0$body_t:="{record_id:25}"\n\xa0$httpStatus_l:=HTTP Request(HTTP DELETE method;"database.example.com";$body_t;$response)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Il vous appartient de traiter la demande de mani\xe8re appropri\xe9e au niveau du serveur distant, la commande ",(0,r.jsx)(n.strong,{children:"HTTP Request"})," g\xe8re uniquement la requ\xeate et le r\xe9sultat retourn\xe9."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"Demande d'ajout d\u2019un enregistrement dans une base distante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var $response : Text\n\xa0$body_t:=\"{fName:'john',fName:'Doe'}\"\n\xa0$httpStatus_l:=HTTP Request(HTTP PUT method;\"database.example.com\";$body_t;$response)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Il vous appartient de traiter la demande de mani\xe8re appropri\xe9e au niveau du serveur distant, la commande ",(0,r.jsx)(n.strong,{children:"HTTP Request"})," g\xe8re uniquement la requ\xeate et le r\xe9sultat retourn\xe9."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsx)(n.p,{children:"Demande d\u2019ajout d\u2019enregistrement en JSON dans une base distante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $content : Object\n\xa0OB SET($content;"nom";"Doe";"pr\xe9nom";"John")\n\xa0$result:=HTTP Request(HTTP PUT method;"database.example.com";$content;$response)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/http-get",children:"HTTP Get"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1158"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var t=s(667294);let r={},d=t.createContext(r);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);