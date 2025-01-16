"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44497"],{248351:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/new-data-key","title":"New data key","description":"New data key ( phraseSecr\xe8te ) : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/new-data-key.md","sourceDirName":"commands-legacy","slug":"/commands/new-data-key","permalink":"/docs/fr/20-R7/commands/new-data-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-data-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-data-key","title":"New data key","slug":"/commands/new-data-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Encrypt data file","permalink":"/docs/fr/20-R7/commands/encrypt-data-file"},"next":{"title":"Register data key","permalink":"/docs/fr/20-R7/commands/register-data-key"}}'),t=r("785893"),d=r("250065");let a={id:"new-data-key",title:"New data key",slug:"/commands/new-data-key",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"New data key"})," ( ",(0,t.jsx)(n.em,{children:"phraseSecr\xe8te"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"phraseSecr\xe8te"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Phrase secr\xe8te \xe0 utiliser pour g\xe9n\xe9rer la cl\xe9 de chiffrement des donn\xe9es AES"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Objet contenant la cl\xe9 (propri\xe9t\xe9 encodedKey)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"New data key"})," g\xe9n\xe8re une cl\xe9 de chiffrement des donn\xe9es binaires \xe0 partir du texte pass\xe9 dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"phraseSecr\xe8te"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["La cl\xe9 chiffr\xe9e peut \xeatre sauvegard\xe9e localement, afin d'\xeatre stock\xe9e sur un appareil amovible, tel qu'une cl\xe9 USB (voir ",(0,t.jsx)(n.em,{children:"Sauvegarder les cl\xe9s de chiffrement des donn\xe9es dans des fichiers"})," dans le manuel ",(0,t.jsx)(n.em,{children:"4D Mode D\xe9veloppement"}),"). Connecter cet appareil au poste qui h\xe9berge la base chiffr\xe9e permettra automatiquement \xe0 l'utilisateur d'acc\xe9der aux donn\xe9es chiffr\xe9es."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez passer n'importe quel caract\xe8re dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"phraseSecr\xe8te"}),". Ce m\xeame param\xe8tre g\xe9n\xe8rera toujours la m\xeame cl\xe9 de chiffrement des donn\xe9es."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Valeur retourn\xe9e"})}),"\n",(0,t.jsx)(n.p,{children:"L'objet retourn\xe9 contient la propri\xe9t\xe9 suivante :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encodedKey"}),(0,t.jsx)(n.td,{children:"Texte"}),(0,t.jsxs)(n.td,{children:["Cl\xe9 de chiffrement AES (SHA 256 bits) g\xe9n\xe9r\xe9e \xe0 partir de ",(0,t.jsx)(n.em,{children:"phraseSecr\xe8te"})]})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["Si une cha\xeene vide est pass\xe9e dans ",(0,t.jsx)(n.em,{children:"phraseSecr\xe8te"}),", la commande retourne ",(0,t.jsx)(n.em,{children:"null"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez sauvegarder une cl\xe9 de chiffrement dans un fichier .4DKeyChain :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $dataKey : Object\n\xa0var $passphrase : Text\n\xa0\n\xa0$passphrase:=Request("Saisissez la phrase secr\xe8te :")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$dataKey:=New data key($passphrase)\n\xa0\xa0\xa0\xa0TEXT TO DOCUMENT("generatedKey.4DKeyChain";JSON Stringify($dataKey))\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/discover-data-key",children:"Discover data key"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/encrypt-data-file",children:"Encrypt data file"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/register-data-key",children:"Register data key"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1611"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var s=r(667294);let t={},d=s.createContext(t);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);