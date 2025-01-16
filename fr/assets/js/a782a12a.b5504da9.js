"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68406"],{573898:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/storage","title":"Storage","description":"Storage  : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/storage.md","sourceDirName":"commands-legacy","slug":"/commands/storage","permalink":"/docs/fr/commands/storage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstorage.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"storage","title":"Storage","slug":"/commands/storage","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Values","permalink":"/docs/fr/commands/ob-values"},"next":{"title":"On a Series","permalink":"/docs/fr/category/on-a-series"}}'),s=t("785893"),o=t("250065");let a={id:"storage",title:"Storage",slug:"/commands/storage",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function d(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Storage"}),"  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Catalogue des objets et collections partag\xe9(e)s enregistr\xe9(e)s dans Storage"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"Storage"})," retourne le catalogue des objets partag\xe9s et des collections partag\xe9es qui ont \xe9t\xe9 enregistr\xe9(e)s dans l'objet ",(0,s.jsx)(n.em,{children:"Storage"})," sur la machine ou le composant courant(e)."]}),"\n",(0,s.jsxs)(n.p,{children:["Le catalogue retourn\xe9 par ",(0,s.jsx)(n.strong,{children:"Storage"})," est cr\xe9\xe9 automatiquement par 4D et est disponible pour tous les process de la base, y compris les process pr\xe9emptifs. Il existe un seul catalogue ",(0,s.jsx)(n.strong,{children:"Storage"})," par machine et par composant : dans une application client/serveur, il y a un seul objet partag\xe9 ",(0,s.jsx)(n.strong,{children:"Storage"})," sur le serveur, et un objet partag\xe9 ",(0,s.jsx)(n.strong,{children:"Storage"})," sur chaque application 4D distante ; si la base utilise des composants, il y a \xe9galement un objet ",(0,s.jsx)(n.strong,{children:"Storage"})," par composant."]}),"\n",(0,s.jsxs)(n.p,{children:["Utilisez le catalogue ",(0,s.jsx)(n.strong,{children:"Storage"})," pour r\xe9f\xe9rencer les objets ou collections partag\xe9(e)s que vous souhaitez utiliser depuis tout process pr\xe9emptif ou standard. Pour enregistrer un objet partag\xe9 ou une collection partag\xe9e dans ",(0,s.jsx)(n.strong,{children:"Storage"}),", il suffit d'ajouter sa r\xe9f\xe9rence \xe0 l'objet partag\xe9 retourn\xe9 par ",(0,s.jsx)(n.strong,{children:"Storage"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Comme le catalogue retourn\xe9 par ",(0,s.jsx)(n.strong,{children:"Storage"})," est un ",(0,s.jsx)(n.em,{children:"objet partag\xe9"}),", il suit les r\xe8gles d\xe9crites dans la section ",(0,s.jsx)(n.em,{children:"Objets partag\xe9s et collections partag\xe9es"}),", avec toutefois les sp\xe9cificit\xe9s suivantes :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cet objet peut uniquement contenir des objets partag\xe9s ou des collections partag\xe9es. Si vous tentez d'ajouter d'autres types de valeurs (objets ou collections non partag\xe9(e)s, null, valeurs scalaires), une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,s.jsxs)(n.li,{children:["L'ajout d'une propri\xe9t\xe9 dans cet objet doit \xeatre encadr\xe9 par une structure ",(0,s.jsx)(n.em,{children:"Utiliser...Fin utiliser"}),", sinon une erreur est g\xe9n\xe9r\xe9e. La lecture d'une propri\xe9t\xe9 en-dehors d'une structure ",(0,s.jsx)(n.em,{children:"Utiliser...Fin utiliser"})," est cependant possible."]}),"\n",(0,s.jsxs)(n.li,{children:["Lorsqu'ils sont encadr\xe9s par une structure ",(0,s.jsx)(n.em,{children:"Utiliser...Fin utiliser"}),", les attributs de premier niveau de ",(0,s.jsx)(n.strong,{children:"Storage"})," sont verrouill\xe9s pour les autres process."]}),"\n",(0,s.jsxs)(n.li,{children:["A la diff\xe9rence des objets partag\xe9s standard, l'objet retourn\xe9 par ",(0,s.jsx)(n.strong,{children:"Storage"})," ne partage PAS son ",(0,s.jsx)(n.em,{children:"locking identifier"})," avec les objets partag\xe9s ou les collections partag\xe9es qui lui sont ajout\xe9s en tant qu'attributs (pour plus d'informations, reportez-vous \xe0 la section ",(0,s.jsx)(n.em,{children:"A propos du locking identifier (comment fonctionnent les groupes partag\xe9s)"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsxs)(n.p,{children:["Il est pratique d'initialiser le contenu de l'objet ",(0,s.jsx)(n.strong,{children:"Storage"})," dans la :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Use(Storage)\n\xa0\xa0\xa0\xa0Storage.counters:=New shared object("customers";0;"invoices";0)\n\xa0End use\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsxs)(n.p,{children:["Cet exemple montre la mani\xe8re standard de d\xe9finir les valeurs de ",(0,s.jsx)(n.strong,{children:"Storage"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Use(Storage)\n\xa0\xa0\xa0\xa0Storage.mydata:=New shared object\n\xa0\xa0\xa0\xa0Use(Storage.mydata)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Storage.mydata.prop1:="Smith"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Storage.mydata.prop2:=100\n\xa0\xa0\xa0\xa0End use\n\xa0End use\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Storage"})," permet d'impl\xe9menter un singleton en ",(0,s.jsx)(n.em,{children:"lazy initialization"}),", comme propos\xe9 dans l'exemple ci-dessous."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Pour plus d'informations sur les singletons, vous pouvez consulter cette ",(0,s.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Singleton%5F%28patron%5Fde%5Fconception%29",children:"page Wikipedia"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $0 : Integer\n\xa0var $counterValue : Integer\n\xa0var counter : Object\xa0//cr\xe9er une r\xe9f\xe9rence de counter pour le process\n\xa0\n\xa0If(counter=Null)\xa0//si la r\xe9f\xe9rence est null, on la r\xe9cup\xe8re depuis Storage\n\xa0\xa0\xa0\xa0Use(Storage)\xa0//L'utilisation de Storage n'est n\xe9cessaire qu'une seule fois !\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Storage.counter=Null)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Storage.counter:=New shared object(\"operation\";0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0counter:=Storage.counter\xa0//Obtenir la r\xe9f\xe9rence de l'objet partag\xe9 counter\n\xa0\xa0\xa0\xa0End use\n\xa0End if\n\xa0Use(counter)\xa0//on utilise directement l'objet partag\xe9 counter (pas besoin de Storage)\n\xa0\xa0\xa0\xa0counter.operation:=counter.operation+1\n\xa0\xa0\xa0\xa0$counterValue:=counter.operation\n\xa0End use\n\xa0\n\xa0$0:=$counterValue\n"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Objets partag\xe9s et collections partag\xe9es"})}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1525"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var r=t(667294);let s={},o=r.createContext(s);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);