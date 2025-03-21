"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84076"],{306009:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/clear-pasteboard","title":"CLEAR PASTEBOARD","description":"CLEAR PASTEBOARD","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/clear-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/clear-pasteboard","permalink":"/docs/fr/commands/clear-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclear-pasteboard.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"clear-pasteboard","title":"CLEAR PASTEBOARD","slug":"/commands/clear-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"APPEND DATA TO PASTEBOARD","permalink":"/docs/fr/commands/append-data-to-pasteboard"},"next":{"title":"Get file from pasteboard","permalink":"/docs/fr/commands/get-file-from-pasteboard"}}'),r=s("785893"),d=s("250065");let a={id:"clear-pasteboard",title:"CLEAR PASTEBOARD",slug:"/commands/clear-pasteboard",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CLEAR PASTEBOARD"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ne requiert pas de param\xe8tre"}),(0,r.jsx)(n.th,{})]})})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CLEAR PASTEBOARD"})," efface enti\xe8rement le conteneur de donn\xe9es. Si le conteneur contient plusieurs instances des m\xeames donn\xe9es, toutes les instances sont effac\xe9es. Apr\xe8s un appel \xe0 ",(0,r.jsx)(n.strong,{children:"CLEAR PASTEBOARD"}),", le conteneur de donn\xe9es est vide."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous devez appeler ",(0,r.jsx)(n.strong,{children:"CLEAR PASTEBOARD"})," une fois avant de placer des nouvelles donn\xe9es dans le conteneur \xe0 l'aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"}),", car cette derni\xe8re n'efface pas le conteneur avant d'y coller des donn\xe9es."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous appelez ",(0,r.jsx)(n.strong,{children:"CLEAR PASTEBOARD"})," une fois et puis appelez ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"})," plusieurs fois, vous pouvez couper ou copier les m\xeames donn\xe9es sous des formats diff\xe9rents."]}),"\n",(0,r.jsxs)(n.p,{children:["En revanche, les commandes ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-text-to-pasteboard",children:"SET TEXT TO PASTEBOARD"})," et ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-picture-to-pasteboard",children:"SET PICTURE TO PASTEBOARD"})," effacent automatiquement le conteneur avant d'y placer des donn\xe9es."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Le code suivant efface le conteneur puis y ajoute des donn\xe9es :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CLEAR PASTEBOARD\xa0// Effacer le conteneur\n\xa0APPEND DATA TO PASTEBOARD("com.4d.private.picture.gif";$vxSomeData)\xa0// Ajouter des images gif\n\xa0APPEND DATA TO PASTEBOARD("com.4d.private.text.rtf";$vxSylkData)\xa0// Ajouter du texte RTF\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"402"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var t=s(667294);let r={},d=t.createContext(r);function a(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);