"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95814],{813869:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var t=s(474848),r=s(28453);const d={id:"generate-digest",title:"Generate digest",slug:"/commands/generate-digest",displayed_sidebar:"docs"},i=void 0,a={id:"commands-legacy/generate-digest",title:"Generate digest",description:"Generate digest ( param ; algorithme {; *} ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/generate-digest.md",sourceDirName:"commands-legacy",slug:"/commands/generate-digest",permalink:"/docs/fr/commands/generate-digest",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-digest.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"generate-digest",title:"Generate digest",slug:"/commands/generate-digest",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Choose",permalink:"/docs/fr/commands/choose"},next:{title:"Generate password hash",permalink:"/docs/fr/commands/generate-password-hash"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Generate digest"})," ( ",(0,t.jsx)(n.em,{children:"param"})," ; ",(0,t.jsx)(n.em,{children:"algorithme"})," {; *} ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param"}),(0,t.jsx)(n.td,{children:"Blob, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Blob ou texte pour lequel obtenir une cl\xe9 digest"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"algorithme"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Algorithme utilis\xe9 pour retourner la cl\xe9 : 0 = Digest MD5, 1 = Digest SHA1, 2 = Digest 4D, 3 = Digest SHA-256, 4 = Digest SHA-512"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Crypter digest en Base64URL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valeur de la cl\xe9 digest"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Generate digest"})," retourne la cl\xe9 digest d\u2019un BLOB ou d\u2019un texte apr\xe8s application d\u2019un algorithme de cryptage."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"algorithme"})," une valeur d\xe9signant la fonction de hachage \xe0 employer. Vous pouvez utiliser l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"Type digest"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_o_4D REST digest"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"*** Constante obsol\xe8te ***"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MD5 digest"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsxs)(n.td,{children:["Algorithme ",(0,t.jsx)(n.em,{children:"Message Digest 5"}),". S\xe9quence de 128 bits retourn\xe9e en tant que cha\xeene de 32 caract\xe8res hexad\xe9cimaux."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SHA1 digest"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsxs)(n.td,{children:["Algorithme ",(0,t.jsx)(n.em,{children:"Secure Hash 1"}),". S\xe9quence de 160 bits retourn\xe9e en tant que cha\xeene de 40 caract\xe8res hexad\xe9cimaux."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SHA256 digest"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsxs)(n.td,{children:["Famille ",(0,t.jsx)(n.em,{children:"SHA-2."})," S\xe9quence de 256 bits retourn\xe9e en tant que cha\xeene de 64 caract\xe8res hexad\xe9cimaux."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SHA512 digest"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsxs)(n.td,{children:["Famille ",(0,t.jsx)(n.em,{children:"SHA-2"}),". S\xe9quence de 512 bits retourn\xe9e en tant que cha\xeene de 128 caract\xe8res hexad\xe9cimaux."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Il est fortement d\xe9conseill\xe9 d'utiliser les algorithmes MD5 ou SHA pour g\xe9rer les mots de passe ; si vous souhaitez v\xe9rifier des mots de passe, nous recommandons l'utilisation des commandes ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/generate-password-hash",children:"Generate password hash"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/verify-password-hash",children:"Verify password hash"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, si le param\xe8tre ",(0,t.jsx)(n.em,{children:"*"})," est omis, la digest retourn\xe9e est cypt\xe9e en hexad\xe9cimal. Passez le param\xe8tre ",(0,t.jsx)(n.em,{children:"*"})," si vous souhaitez qu'elle soit chiffr\xe9e en Base64URL."]}),"\n",(0,t.jsx)(n.p,{children:"La valeur retourn\xe9e pour un m\xeame objet sera identique sur toutes les plates-formes (macOS/Windows). Le calcul est effectu\xe9 \xe0 partir de la repr\xe9sentation en UTF8 du texte pass\xe9 en param\xe8tre."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si vous utilisez la commande avec un texte/BLOB vide, elle ne retournera pas ",(0,t.jsx)(n.em,{children:"void"}),' mais une cha\xeene (par exemple "d41d8cd98f00b204e9800998ecf8427e" pour le MD5.']}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple vous permet de comparer deux images \xe0 l\u2019aide de l\u2019algorithme MD5 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPict1;$vPict2 : Picture\n\xa0var $FirstBlob;$SecondBlob : Blob\n\xa0READ PICTURE FILE("c:\\\\myPhotos\\\\photo1.png")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0READ PICTURE FILE("c:\\\\myPhotos\\\\photo2.png")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PICTURE TO BLOB($vPict1;$FirstBlob;".png")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PICTURE TO BLOB($vPict2;$SecondBlob;".png")\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MD5_1:=Generate digest($FirstBlob;MD5 digest)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MD5_2:=Generate digest($SecondBlob;MD5 digest)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($MD5_1#$MD5_2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Ces deux images sont diff\xe9rentes.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Ces deux images sont identiques.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Ces exemples illustrent comment r\xe9cup\xe9rer la cl\xe9 digest d\u2019un texte :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$key1:=Generate digest("The quick brown fox jumps over the lazy dog.";MD5 digest)\n\xa0\xa0// $key1 vaut "e4d909c290d0fb1ca068ffaddf22cbd0"\n\xa0$key2:=Generate digest("The quick brown fox jumps over the lazy dog.";SHA1 digest)\n\xa0\xa0// $key2 vaut "408d94384216f890ff7a0c3528e8bed1e0b01621"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/base64-decode",children:"BASE64 DECODE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/base64-encode",children:"BASE64 ENCODE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/generate-password-hash",children:"Generate password hash"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Protocole s\xe9curis\xe9"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-validate-digest",children:"WEB Validate digest"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(296540);const r={},d=t.createContext(r);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);