"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52499"],{652439:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/locked-records-info","title":"Locked records info","description":"Locked records info ( laTable ) : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/locked-records-info.md","sourceDirName":"commands-legacy","slug":"/commands/locked-records-info","permalink":"/docs/fr/20-R7/commands/locked-records-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flocked-records-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"locked-records-info","title":"Locked records info","slug":"/commands/locked-records-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LOCKED BY","permalink":"/docs/fr/20-R7/commands/locked-by"},"next":{"title":"READ ONLY","permalink":"/docs/fr/20-R7/commands/read-only"}}'),t=r("785893"),d=r("250065");let i={id:"locked-records-info",title:"Locked records info",slug:"/commands/locked-records-info",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Locked records info"})," ( ",(0,t.jsx)(n.em,{children:"laTable"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table de laquelle vous souhaitez conna\xeetre les enregistrements verrouill\xe9s"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Description des enregistrements verrouill\xe9s (le cas \xe9ch\xe9ant)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Locked records info"})," retourne un ",(0,t.jsx)(n.a,{href:"#",title:"Donn\xe9es structur\xe9es sous forme d'objet natif 4D",children:"objet"})," d\xe9crivant le ou les enregistrement(s) actuellement verrouill\xe9(s) dans ",(0,t.jsx)(n.em,{children:"laTable"}),".Cette commande fonctionne uniquement avec 4D et 4D Server. Elle retourne toujours un objet invalide lorsqu'elle est appel\xe9e depuis un 4D distant. Elle peut toutefois \xeatre appel\xe9e depuis un 4D distant si la m\xe9thode d'appel dispose de l'option \"Ex\xe9cuter sur serveur\" ; elle retourne dans ce cas les informations relatives au serveur. Lorsqu'elle est appel\xe9e depuis un composant, elle s'applique \xe0 la base h\xf4te."]}),"\n",(0,t.jsx)(n.p,{children:"L'objet retourn\xe9 contient une propri\xe9t\xe9 \"records\" qui est une collection d'objets :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\xa0\xa0\xa0 "records": [\xa0\xa0\xa0 \xa0\xa0\xa0 objet description,\xa0\xa0\xa0 \xa0\xa0\xa0 (\u2026)\xa0\xa0\xa0 ]}\n'})}),"\n",(0,t.jsx)(n.p,{children:'Chaque \xe9l\xe9ment de collection "objet description" identifie un enregistrement verrouill\xe9 dans la table sp\xe9cifi\xe9e. Il contient les propri\xe9t\xe9s suivantes en fonction de l\'origine du "verrou" (process 4D ou API REST) :'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si l'enregistrement a \xe9t\xe9 verrouill\xe9 par un process 4D :"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"contextID"}),(0,t.jsx)(n.td,{children:"UUID (Cha\xeene)"}),(0,t.jsx)(n.td,{children:"UUID du contexte de la base \xe0 l'origine du verrouillage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"contextAttributes"}),(0,t.jsx)(n.td,{children:"Objet"}),(0,t.jsxs)(n.td,{children:["Objet contenant des informations semblables \xe0 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/locked-by",children:"LOCKED BY"})," mais appliqu\xe9es \xe0 l'enregistrement, \xe0 la diff\xe9rence pr\xe8s que ",(0,t.jsx)(n.strong,{children:"Locked records info"})," retourne uniquement le nom de l'utilisateur d\xe9fini dans le syst\xe8me (et pas celui de l'utilisateur 4D) ainsi que des informations suppl\xe9mentaires (voir ci-dessous)."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"recordNumber"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de l'enregistrement verrouill\xe9"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["L'objet ",(0,t.jsx)(n.em,{children:"contextAttributes"})," est constitu\xe9 des propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"task_id"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence du process"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"user_name"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Nom de l'utilisateur d\xe9fini dans le syst\xe8me d'exploitation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"user4d_alias"}),(0,t.jsx)(n.td,{children:"texte"}),(0,t.jsxs)(n.td,{children:["Alias utilisateur d\xe9fini avec ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-user-alias",children:"SET USER ALIAS"}),", sinon le nom d'utilisateur dans le r\xe9pertoire de la base 4D"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"user4d_id"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de l'utilisateur 4D(*)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"host_name"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Nom de la machine h\xf4te"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"task_name"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Nom du process"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"client_version"}),(0,t.jsx)(n.td,{children:"Num\xe9rique"}),(0,t.jsx)(n.td,{children:"version de l'application cliente"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"Uniquement lorsque la commande est ex\xe9cut\xe9e sur 4D Server et si le verrouillage de l'enregistrement provient d'un 4D distant :"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"is_remote_context"}),(0,t.jsx)(n.td,{children:"Bool\xe9en"}),(0,t.jsxs)(n.td,{children:["Indique si l'origine du verrouillage est un 4D distant (toujours ",(0,t.jsx)(n.em,{children:"true"})," car non pr\xe9sent dans les autres cas)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"client_uid"}),(0,t.jsx)(n.td,{children:"UUID (Cha\xeene)"}),(0,t.jsx)(n.td,{children:"Identifiant UUID du 4D distant \xe0 l'origine du verrouillage"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["(*) ",(0,t.jsx)(n.em,{children:"Retourn\xe9 uniquement dans les bases binaires."})," Vous pouvez obtenir le nom d'utilisateur 4D \xe0 partir de la valeur de ",(0,t.jsx)(n.em,{children:"user4d_id"})," en utilisant le code suivant :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0GET USER LIST($tabNoms;$tabIDs)\n\xa0$nom4DUser:=Find in array($tabIDs;user4d_id)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si l'enregistrement a \xe9t\xe9 verrouill\xe9 par une ",(0,t.jsx)(n.em,{children:"requ\xeate REST $lock"})," :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"host"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:'URL avec laquelle l\'entit\xe9 a \xe9t\xe9 verrouill\xe9e, par exemple "127.0.0.1:8044".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"IPAddr"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:"Adresse IP utilis\xe9e dans l'URL avec laquelle l'entit\xe9 a \xe9t\xe9 verrouill\xe9e, par exemple \"127.0.0.1\"."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"recordNumber"}),(0,t.jsx)(n.td,{children:"Entier"}),(0,t.jsx)(n.td,{children:"Num\xe9ro d'enregistrement de l'enregistrement verrouill\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"userAgent"}),(0,t.jsx)(n.td,{children:"Cha\xeene"}),(0,t.jsx)(n.td,{children:'Agent utilisateur du verrou, par exemple "Mozilla/5.0 (Windows NT 10.0 ; Win64 ; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36"'})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous ex\xe9cutez le code suivant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$vOlocked :=Locked records info([Table])\n"})}),"\n",(0,t.jsx)(n.p,{children:"Si deux enregistrements sont verrouill\xe9s dans la table [Table], l'objet suivant est retourn\xe9 dans $vOlocked :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\xa0\xa0\xa0 "records": [\xa0\xa0\xa0 \xa0\xa0\xa0 {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "contextID": "A9BB84C0E57349E089FA44E04C0F2F25",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "contextAttributes": {\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "task_id": 8, \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "user_name": "roland", \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "user4d_id": 1,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "host_name": "iMac de roland",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "task_name": "P_RandomLock", \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "client_version": -1342106592\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "recordNumber": 1\xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0\xa0\xa0 {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "contextID": "8916338D1B8A4D86B857D92F593CCAC3",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "contextAttributes": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "task_id": 9,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "user_name": "roland",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "user4d_id": 1,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "host_name": "iMac de roland",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "task_name": "P_RandomLock",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "client_version": -1342106592\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "recordNumber": 2\xa0\xa0\xa0 \xa0\xa0\xa0 }\xa0\xa0\xa0 ]}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Si le code est ex\xe9cut\xe9 sur 4D Server et que le verrouillage est caus\xe9 par un poste client distant, l'objet suivant est retourn\xe9 dans $vOlocked :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\xa0\xa0\xa0 "records": [\xa0\xa0\xa0 \xa0\xa0\xa0 {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "contextID": "B0EC087DC2FA704496C0EA15DC011D1C",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "contextAttributes": {\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "task_id": 2, \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "user_name": "achim", \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "user4d_id": 1,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "host_name": "achim-pcwin",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "task_name": "P_RandomLock", \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "is_remote_context": true,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "client_uid": "0696E66F6CD731468E6XXX581A87554A",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "client_version": -268364752\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "recordNumber": 1\xa0\xa0\xa0 \xa0\xa0\xa0 }\xa0\xa0\xa0 ]}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/locked",children:"Locked"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1316"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);