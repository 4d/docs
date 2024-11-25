"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85541"],{881770:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>l});var a=JSON.parse('{"id":"commands-legacy/set-database-localization","title":"SET DATABASE LOCALIZATION","description":"SET DATABASE LOCALIZATION ( codeLangue {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-database-localization.md","sourceDirName":"commands-legacy","slug":"/commands/set-database-localization","permalink":"/docs/fr/commands/set-database-localization","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-database-localization.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-database-localization","title":"SET DATABASE LOCALIZATION","slug":"/commands/set-database-localization","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND MESSAGE TO REMOTE USER","permalink":"/docs/fr/commands/send-message-to-remote-user"},"next":{"title":"SET DATABASE PARAMETER","permalink":"/docs/fr/commands/set-database-parameter"}}'),t=s("785893"),r=s("250065");let l={id:"set-database-localization",title:"SET DATABASE LOCALIZATION",slug:"/commands/set-database-localization",displayed_sidebar:"docs"},i=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET DATABASE LOCALIZATION"})," ( ",(0,t.jsx)(n.em,{children:"codeLangue"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"codeLangue"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"S\xe9lecteur de langue"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Port\xe9e de la commande"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SET DATABASE LOCALIZATION"})," permet de modifier la langue courante de la base pour la session courante."]}),"\n",(0,t.jsxs)(n.p,{children:["La langue courante de la base permet de d\xe9finir le dossier .lproj dans lequel le programme va chercher les \xe9l\xe9ments localis\xe9s de l\u2019application (textes et images). Par d\xe9faut, 4D d\xe9termine automatiquement la langue courante en fonction du contenu du dossier ",(0,t.jsx)(n.strong,{children:"Resources"})," et de l'environnement syst\xe8me (cf. description de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-database-localization",children:"Get database localization"}),"). ",(0,t.jsx)(n.strong,{children:"SET DATABASE LOCALIZATION"})," vous permet de modifier la langue courante par d\xe9faut."]}),"\n",(0,t.jsx)(n.p,{children:"La commande ne modifie pas la langue des formulaires d\xe9j\xe0 charg\xe9s, seuls les \xe9l\xe9ments affich\xe9s post\xe9rieurement \xe0 l\u2019appel de la commande tiendront compte du nouveau param\xe9trage."}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"codeLangue"}),' la langue \xe0 utiliser pour l\u2019application, exprim\xe9e dans la norme d\xe9finie par la RFC 3066, ISO639 et ISO3166. Typiquement, vous devez passer "fr" pour le fran\xe7ais, "es" pour l\'espagnol, "en-us" pour l\u2019anglais am\xe9ricain, etc. Pour plus d\'informations sur cette norme, reportez-vous \xe0 l\'',(0,t.jsx)(n.em,{children:"Annexe B : Architecture XLIFF"})," dans le manuel ",(0,t.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, la commande s\u2019applique \xe0 toutes les bases et composants ouverts, pour tous les process. Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", s\u2019il est pass\xe9, sp\xe9cifie que la commande doit s\u2019appliquer uniquement \xe0 la base qui a l\u2019a appel\xe9e. Ce param\xe8tre permet en particulier de d\xe9finir s\xe9par\xe9ment la langue de la base et celle d\u2019un composant."]}),"\n",(0,t.jsx)(n.p,{children:"Si la commande est correctement ex\xe9cut\xe9e, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"}),' Conform\xe9ment \xe0 la RFC, la commande utilise le "-" (tiret) pour s\xe9parer le code langue et le code r\xe9gion, par exemple "fr-ca" ou "en-us". En revanche, les dossiers "lproj" du dossier ',(0,t.jsx)(n.strong,{children:"Resources"}),' utilisent le "_" (soulignement), par exemple "fr_ca.lproj" ou "en_us.lproj".']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server :"})," Avec 4D Server, les langues disponibles sont celles situ\xe9es sur le poste distant ayant appel\xe9 la commande. Vous devez donc veiller \xe0 la synchronisation des dossiers ",(0,t.jsx)(n.strong,{children:"Resources"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Nous souhaitons d\xe9finir la langue de l\u2019interface en fran\xe7ais :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SET DATABASE LOCALIZATION("fr")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:'L\u2019interface de votre application utilise la cha\xeene statique ":xliff:shopping". Les fichiers xliff contiennent notamment les informations suivantes :'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Dossier FR :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:'<trans-unit id="15" resname="Shopping">  \n\xa0 <source>Shopping</source>  \n\xa0 <target>Faire les courses</target>  \n</trans-unit>  \n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Dossier FR_CA :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:'<trans-unit id="15" resname="Shopping">  \n\xa0 <source>Shopping</source>  \n\xa0 <target>Magasiner</target>  \n</trans-unit>  \n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SET DATABASE LOCALIZATION("fr")\n\xa0\xa0//La cha\xeene ":xliff:shopping" affiche "Faire les courses"\n\xa0SET DATABASE LOCALIZATION("fr-ca")\n\xa0\xa0//La cha\xeene ":xliff:shopping" affiche "Magasiner"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-database-localization",children:"Get database localization"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var a=s(667294);let t={},r=a.createContext(t);function l(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);