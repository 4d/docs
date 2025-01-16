"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22709"],{969426:function(e,r,n){n.r(r),n.d(r,{default:()=>j,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/new-shared-object","title":"New shared object","description":"New shared object {( propri\xe9t\xe9 ; valeur {; propri\xe9t\xe92 ; valeur2 ; ... ; propri\xe9t\xe9N ; valeurN} )} : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/new-shared-object.md","sourceDirName":"commands-legacy","slug":"/commands/new-shared-object","permalink":"/docs/fr/commands/new-shared-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-shared-object.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"new-shared-object","title":"New shared object","slug":"/commands/new-shared-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New object","permalink":"/docs/fr/commands/new-object"},"next":{"title":"OB Class","permalink":"/docs/fr/commands/ob-class"}}'),t=n("785893"),i=n("250065");let l={id:"new-shared-object",title:"New shared object",slug:"/commands/new-shared-object",displayed_sidebar:"docs"},o=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"New shared object"})," {( ",(0,t.jsx)(r.em,{children:"propri\xe9t\xe9"})," ; ",(0,t.jsx)(r.em,{children:"valeur"})," {; ",(0,t.jsx)(r.em,{children:"propri\xe9t\xe92"})," ; ",(0,t.jsx)(r.em,{children:"valeur2"})," ; ... ; ",(0,t.jsx)(r.em,{children:"propri\xe9t\xe9N"})," ; ",(0,t.jsx)(r.em,{children:"valeurN"}),"} )} : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Param\xe8tre"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"propri\xe9t\xe9"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Nom de propri\xe9t\xe9 \xe0 cr\xe9er"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"valeur"}),(0,t.jsx)(r.td,{children:"Text, Date, Boolean, Pointer, Number, Object"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Valeur de propri\xe9t\xe9"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"R\xe9sultat"}),(0,t.jsx)(r.td,{children:"Object"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Nouvel objet partag\xe9"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["La commande ",(0,t.jsx)(r.strong,{children:"New shared object"})," cr\xe9e un objet partag\xe9 vide ou pr\xe9-rempli et retourne sa r\xe9f\xe9rence. L'ajout et la modification de propri\xe9t\xe9s dans un objet partag\xe9 doivent \xeatre encadr\xe9s par une structure ",(0,t.jsx)(r.em,{children:"Utiliser...Fin utiliser"}),", sinon une erreur est g\xe9n\xe9r\xe9e. La lecture d'une propri\xe9t\xe9 hors ",(0,t.jsx)(r.em,{children:"Utiliser...Fin utiliser"})," est toutefois possible."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note :"})," Pour plus d'informations sur les ",(0,t.jsx)(r.em,{children:"objets partag\xe9s"}),", veuillez vous reporter \xe0 la page ",(0,t.jsx)(r.em,{children:"Objets partag\xe9s et collections partag\xe9es"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Si vous ne passez aucun param\xe8tre, ",(0,t.jsx)(r.strong,{children:"New shared object"})," cr\xe9e un objet partag\xe9 vide et retourne sa r\xe9f\xe9rence. Vous devez assigner cette r\xe9f\xe9rence \xe0 une variable 4D d\xe9clar\xe9e avec ",(0,t.jsx)(r.em,{children:"C_OBJECT"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note :"})," ",(0,t.jsx)(r.em,{children:"C_OBJECT"})," d\xe9clare une variable de type ",(0,t.jsx)(r.a,{href:"#",title:"Donn\xe9es structur\xe9es sous forme d'objet natif 4D",children:"Objet"})," mais ne cr\xe9e pas d'objet."]}),"\n",(0,t.jsxs)(r.p,{children:["Optionnellement, vous pouvez pr\xe9-remplir le nouvel objet en passant une ou plusieurs paires ",(0,t.jsx)(r.em,{children:"propri\xe9t\xe9"}),"/",(0,t.jsx)(r.em,{children:"valeur"})," comme param\xe8tres :"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Dans le param\xe8tre ",(0,t.jsx)(r.em,{children:"propri\xe9t\xe9"}),", passez le libell\xe9 de la propri\xe9t\xe9 \xe0 cr\xe9er (jusqu'\xe0 255 caract\xe8res). Notez que le libell\xe9 du param\xe8tre ",(0,t.jsx)(r.em,{children:"propri\xe9t\xe9"})," est sensible \xe0 la casse."]}),"\n",(0,t.jsxs)(r.li,{children:["Dans le param\xe8tre ",(0,t.jsx)(r.em,{children:"valeur"}),", passez la valeur que vous souhaitez affecter \xe0 la propri\xe9t\xe9. Les objets partag\xe9s peuvent contenir les types de valeur suivants :\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"nombre (r\xe9el, entier long...). Les valeurs num\xe9riques sont toujours stock\xe9es sous forme de r\xe9els."}),"\n",(0,t.jsx)(r.li,{children:"texte"}),"\n",(0,t.jsx)(r.li,{children:"boolean"}),"\n",(0,t.jsx)(r.li,{children:"date"}),"\n",(0,t.jsx)(r.li,{children:"heure (stock\xe9e sous forme de nombre de millisecondes - r\xe9el)"}),"\n",(0,t.jsx)(r.li,{children:"null"}),"\n",(0,t.jsx)(r.li,{children:"objet partag\xe9(*)"}),"\n",(0,t.jsxs)(r.li,{children:["collection partag\xe9e(*)",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.strong,{children:"Note :"})," A la diff\xe9rence des objets standard (non partag\xe9s), les objets partag\xe9s ne peuvent pas contenir d'images, de pointeurs, ni d'objets ou collections qui ne sont pas partag\xe9(e)s."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["(*)Lorsqu'un objet partag\xe9 ou une collection partag\xe9e est ajout\xe9(e) \xe0 un objet partag\xe9, l'objet ou la collection ajout\xe9(e) h\xe9rite du ",(0,t.jsx)(r.em,{children:"locking identifier"})," de l'objet parent. Pour plus d'informations sur ce point, reportez-vous \xe0 la section ",(0,t.jsx)(r.em,{children:"A propos du locking identifier (comment fonctionnent les groupes partag\xe9s)"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(r.p,{children:"Vous voulez cr\xe9er un nouvel objet partag\xe9 pr\xe9rempli :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0var $contact : Object\n\xa0$contact:=New shared object("name";"Smith";"firstname";"John")\n'})}),"\n",(0,t.jsx)(r.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(r.p,{children:["Vous souhaitez cr\xe9er et modifier un objet partag\xe9. La structure ",(0,t.jsx)(r.em,{children:"Utiliser...Fin utiliser"})," doit \xeatre appel\xe9e pour cet objet :"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0var $s_obj : Object\n\xa0$s_obj:=New shared object("prop1";"alpha")\n\xa0Use($s_obj)\n\xa0\xa0\xa0\xa0$s_obj.prop1:="omega"\n\xa0End use\n'})}),"\n",(0,t.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/commands/new-object",children:"New object"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/new-shared-collection",children:"New shared collection"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.em,{children:"Objets partag\xe9s et collections partag\xe9es"})]}),"\n",(0,t.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(r.td,{children:"1526"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function j(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return l}});var s=n(667294);let t={},i=s.createContext(t);function l(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);