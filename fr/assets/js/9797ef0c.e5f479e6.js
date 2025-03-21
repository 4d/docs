"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2184"],{855936:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>o});var i=JSON.parse('{"id":"commands-legacy/load-list","title":"Load list","description":"Load list ( nomListe ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/load-list.md","sourceDirName":"commands-legacy","slug":"/commands/load-list","permalink":"/docs/fr/commands/load-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"load-list","title":"Load list","slug":"/commands/load-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LIST OF CHOICE LISTS","permalink":"/docs/fr/commands/list-of-choice-lists"},"next":{"title":"New list","permalink":"/docs/fr/commands/new-list"}}'),t=s("785893"),r=s("250065");let l={id:"load-list",title:"Load list",slug:"/commands/load-list",displayed_sidebar:"docs"},o=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Load list"})," ( ",(0,t.jsx)(n.em,{children:"nomListe"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomListe"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de liste cr\xe9\xe9e dans l'\xe9diteur d'\xe9num\xe9rations"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de la liste nouvellement cr\xe9\xe9e"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Load list"})," cr\xe9e une liste hi\xe9rarchique dont le contenu est copi\xe9 depuis la liste ",(0,t.jsx)(n.em,{children:"nomListe"})," cr\xe9\xe9e en mode D\xe9veloppement, dans l'\xe9diteur d'\xe9num\xe9rations. La fonction retourne le num\xe9ro de r\xe9f\xe9rence de la liste nouvellement cr\xe9\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour conna\xeetre les \xe9num\xe9rations d\xe9finies dans la base, utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/list-of-choice-lists",children:"LIST OF CHOICE LISTS"}),". Pour savoir si la liste a correctement \xe9t\xe9 charg\xe9e, utilisez la fonction ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/is-a-list",children:"Is a list"})," avec le num\xe9ro de r\xe9f\xe9rence retourn\xe9 par ",(0,t.jsx)(n.strong,{children:"Load list"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Notez que la nouvelle liste est une copie de la liste d\xe9finie en mode D\xe9veloppement. Par cons\xe9quent, toute modification apport\xe9e \xe0 cette nouvelle liste n'affectera pas la liste d\xe9finie en mode D\xe9veloppement. De m\xeame, toute modification ult\xe9rieure de l'\xe9num\xe9ration n'affecte pas la liste que vous venez de cr\xe9er."}),"\n",(0,t.jsxs)(n.p,{children:["Si vous modifiez la liste nouvellement cr\xe9\xe9e et voulez enregistrer ces modifications, utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/save-list",children:"SAVE LIST"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous n'avez plus besoin de la liste, n'oubliez pas d'appeler ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/clear-list",children:"CLEAR LIST"})," pour la supprimer. Sinon, elle reste en m\xe9moire jusqu'\xe0 la fin de la session de travail ou jusqu'\xe0 ce que le process dans lequel la liste a \xe9t\xe9 cr\xe9\xe9e soit d\xe9truit."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Astuce :"})," Si vous associez une liste \xe0 un objet de formulaire (liste hi\xe9rarchique, onglet ou menu hi\xe9rarchique) \xe0 l'aide du menu ",(0,t.jsx)(n.strong,{children:"Enum\xe9ration"})," dans la Liste des propri\xe9t\xe9s, il est inutile d'appeler ",(0,t.jsx)(n.strong,{children:"Load list"})," ou ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/clear-list",children:"CLEAR LIST"})," dans la m\xe9thode de l'objet. 4D charge et efface la liste automatiquement pour vous."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Imaginons que vous cr\xe9ez une base pour le march\xe9 international. Vous voulez pouvoir changer la langue utilis\xe9e. Dans un formulaire, vous pr\xe9sentez une liste hi\xe9rarchique ",(0,t.jsx)(n.em,{children:"listeHL"})," qui propose les langues disponibles. En mode D\xe9veloppement, vous avez pr\xe9par\xe9 des listes diff\xe9rentes, par exemple \u201COptions US\u201D pour la version anglaise, \u201COptions FR\u201D pour la version fran\xe7aise, \u201COptions ES\u201D pour la version espagnole, etc. De plus, vous maintenez la variable interprocess ",(0,t.jsx)(n.em,{children:"<>gaLangueCourante"})," dans laquelle vous stockez un code de langue sur 2 caract\xe8res, par exemple \u201CUS\u201D pour la version anglaise, \u201CFR\u201D pour la version fran\xe7aise, \u201CES\u201D pour la version espagnole, etc. Pour vous assurer que la liste correcte sera charg\xe9e en utilisant la langue choisie, vous pouvez \xe9crire :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode objet de la liste hi\xe9rarchique listeHL\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var listeHL : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0listeHL:=Load list("Options"+<>gaLangueCourante)\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR LIST(listeHL;*)\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/clear-list",children:"CLEAR LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/is-a-list",children:"Is a list"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/save-list",children:"SAVE LIST"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"383"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var i=s(667294);let t={},r=i.createContext(t);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);