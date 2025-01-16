"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71720"],{610716:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/generate-encryption-keypair","title":"GENERATE ENCRYPTION KEYPAIR","description":"GENERATE ENCRYPTION KEYPAIR ( cl\xe9Priv\xe9e ; cl\xe9Publique {; longueur} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/generate-encryption-keypair.md","sourceDirName":"commands-legacy","slug":"/commands/generate-encryption-keypair","permalink":"/docs/fr/commands/generate-encryption-keypair","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-encryption-keypair.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"generate-encryption-keypair","title":"GENERATE ENCRYPTION KEYPAIR","slug":"/commands/generate-encryption-keypair","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GENERATE CERTIFICATE REQUEST","permalink":"/docs/fr/commands/generate-certificate-request"},"next":{"title":"Selection","permalink":"/docs/fr/category/selection"}}'),t=s("785893"),i=s("250065");let l={id:"generate-encryption-keypair",title:"GENERATE ENCRYPTION KEYPAIR",slug:"/commands/generate-encryption-keypair",displayed_sidebar:"docs"},c=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"RSA, cl\xe9s priv\xe9es et cl\xe9s publiques",id:"rsa-cl\xe9s-priv\xe9es-et-cl\xe9s-publiques",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GENERATE ENCRYPTION KEYPAIR"})," ( ",(0,t.jsx)(n.em,{children:"cl\xe9Priv\xe9e"})," ; ",(0,t.jsx)(n.em,{children:"cl\xe9Publique"})," {; ",(0,t.jsx)(n.em,{children:"longueur"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cl\xe9Priv\xe9e"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"BLOB devant recevoir la cl\xe9 priv\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cl\xe9Publique"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"BLOB devant recevoir la cl\xe9 publique"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"longueur"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Longueur des cl\xe9s en bits [512...2048] Par d\xe9faut = 512"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"GENERATE ENCRYPTION KEYPAIR"})," g\xe9n\xe8re une nouvelle paire de cl\xe9s RSA. Ces cl\xe9s donnent acc\xe8s \xe0 des fonctionnalit\xe9s de cryptage asym\xe9trique dans 4D, g\xe9n\xe9ralement requises pour s\xe9curiser les \xe9changes de donn\xe9es sur un serveur (par exemple, via le serveur Web de 4D et le protocole TLS)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si vous souhaitez crypter vos donn\xe9es sur disque, il est pr\xe9f\xe9rable d'utiliser les fonctionnalit\xe9s de cryptage du fichier de donn\xe9es propos\xe9es par 4D (voir la page ",(0,t.jsx)(n.em,{children:"Chiffrer les donn\xe9es"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Apr\xe8s l\u2019ex\xe9cution de la commande, les BLOB pass\xe9s dans les param\xe8tres ",(0,t.jsx)(n.em,{children:"cl\xe9Priv\xe9e"})," et ",(0,t.jsx)(n.em,{children:"cl\xe9Publique"})," contiennent une nouvelle paire de cl\xe9s de cryptage."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"longueur"})," vous permet de pr\xe9ciser la taille (en bits) des cl\xe9s que vous souhaitez obtenir. Plus une cl\xe9 est longue, plus son d\xe9cryptage \u201Cfrauduleux\u201D sera difficile.",(0,t.jsx)(n.br,{}),"\nEn contrepartie, plus les cl\xe9s sont longues, plus les d\xe9lais d\u2019ex\xe9cution ou de r\xe9ponse seront importants, en particulier dans le cadre d\u2019une connexion s\xe9curis\xe9e.",(0,t.jsx)(n.br,{}),"\nPar d\xe9faut (si vous omettez le param\xe8tre ",(0,t.jsx)(n.em,{children:"longueur"}),"), la taille des cl\xe9s g\xe9n\xe9r\xe9e est de 512 bits. Vous pouvez g\xe9n\xe9rer des cl\xe9s de 2048 bits, ce qui renforce la s\xe9curit\xe9 du cryptage, mais ralentira les connexions de votre application Web. Pour augmenter encore la s\xe9curit\xe9, vous pouvez envisager de changer de paire de cl\xe9s assez fr\xe9quemment, par exemple tous les six mois."]}),"\n",(0,t.jsxs)(n.p,{children:["Les cl\xe9s g\xe9n\xe9r\xe9es par cette commande sont au format standard PKCS encod\xe9 en base64, ce qui signifie que leur contenu peut \xeatre copi\xe9 et coll\xe9 dans un e-mail en toute s\xe9curit\xe9 et sans risque d\u2019alt\xe9ration. Une fois que vous avez obtenu une paire de cl\xe9s, vous pouvez g\xe9n\xe9rer un document texte au format PEM (par exemple \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),") et stocker les cl\xe9s dans un endroit s\xfbr."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important :"})," La cl\xe9 priv\xe9e ne doit jamais \xeatre diffus\xe9e, sous quelque forme que ce soit."]}),"\n",(0,t.jsx)(n.h4,{id:"rsa-cl\xe9s-priv\xe9es-et-cl\xe9s-publiques",children:"RSA, cl\xe9s priv\xe9es et cl\xe9s publiques"}),"\n",(0,t.jsxs)(n.p,{children:["L\u2019algorithme de cryptage RSA employ\xe9 par la commande ",(0,t.jsx)(n.strong,{children:"GENERATE ENCRYPTION KEYPAIR"})," est bas\xe9 sur un syst\xe8me de cryptage \xe0 double cl\xe9 : une cl\xe9 priv\xe9e et une cl\xe9 publique. Comme son nom l\u2019indique, la cl\xe9 publique peut \xeatre diffus\xe9e aupr\xe8s de tiers, et permet le d\xe9cryptage des informations. Il lui correspond une cl\xe9 priv\xe9e unique, utilis\xe9e pour crypter les donn\xe9es. La cl\xe9 priv\xe9e sert au cryptage ; la cl\xe9 publique, au d\xe9cryptage (ou inversement). Ce qui est crypt\xe9 avec une cl\xe9 ne peut \xeatre d\xe9crypt\xe9 qu\u2019avec l\u2019autre.",(0,t.jsx)(n.br,{}),"\nLes fonctions de cryptage du protocole TLS/SSL sont bas\xe9es sur ce principe, la cl\xe9 publique \xe9tant incluse dans le certificat envoy\xe9 aux navigateurs (cf. section ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Ce mode de cryptage est \xe9galement utilis\xe9 par la premi\xe8re syntaxe des commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/encrypt-blob",children:"ENCRYPT BLOB"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/decrypt-blob",children:"DECRYPT BLOB"}),". Ce principe requiert que la cl\xe9 publique soit diffus\xe9e de mani\xe8re confidentielle.",(0,t.jsx)(n.br,{}),"\nIl est possible de m\xealer les cl\xe9s publiques et priv\xe9es de deux intervenants pour crypter des donn\xe9es de telle mani\xe8re que seul le r\xe9cepteur peut d\xe9crypter les donn\xe9es, et seul l\u2019\xe9metteur peut les avoir crypt\xe9es. C\u2019est le principe de la seconde syntaxe des commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/encrypt-blob",children:"ENCRYPT BLOB"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/decrypt-blob",children:"DECRYPT BLOB"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Reportez-vous \xe0 l\u2019exemple de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/encrypt-blob",children:"ENCRYPT BLOB"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/decrypt-blob",children:"DECRYPT BLOB"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/encrypt-blob",children:"ENCRYPT BLOB"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/generate-certificate-request",children:"GENERATE CERTIFICATE REQUEST"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"688"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);