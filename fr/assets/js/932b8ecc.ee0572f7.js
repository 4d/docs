"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67697"],{536971:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>m,assets:()=>d,toc:()=>a,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/form-convert-to-dynamic","title":"FORM Convert to dynamic","description":"FORM Convert to dynamic ( {uneTable ;} nomFormulaire ) : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-convert-to-dynamic.md","sourceDirName":"commands-legacy","slug":"/commands/form-convert-to-dynamic","permalink":"/docs/fr/commands/form-convert-to-dynamic","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-convert-to-dynamic.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-convert-to-dynamic","title":"FORM Convert to dynamic","slug":"/commands/form-convert-to-dynamic","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Form","permalink":"/docs/fr/commands/form"},"next":{"title":"FORM FIRST PAGE","permalink":"/docs/fr/commands/form-first-page"}}'),t=r("785893"),i=r("250065");let o={id:"form-convert-to-dynamic",title:"FORM Convert to dynamic",slug:"/commands/form-convert-to-dynamic",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FORM Convert to dynamic"})," ( {",(0,t.jsx)(n.em,{children:"uneTable"})," ;} ",(0,t.jsx)(n.em,{children:"nomFormulaire"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uneTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table du formulaire"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomFormulaire"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'un formulaire projet ou d'un formulaire table \"classique\""})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"formName converti en formulaire dynamique"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"FORM Convert to dynamic"})," convertit le formulaire classique ",(0,t.jsx)(n.em,{children:"nomFormulaire"})," en formulaire dynamique et le retourne sous forme d'objet."]}),"\n",(0,t.jsxs)(n.p,{children:["Les ",(0,t.jsx)(n.em,{children:"formulaires classiques"})," sont des formulaires 4D stock\xe9s dans le fichier structure en format binaire. Les *",(0,t.jsx)(n.em,{children:"formulaires dynamiques"})," sont des formulaires dont les structures sont d\xe9finies via un un objet 4D (ou un fichier .json). Pour plus d'informations, veuillez consulter la section ",(0,t.jsx)(n.em,{children:"Formulaires dynamiques"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous souhaitez convertir un formulaire table, passez la table dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"uneTable"})," puis passez son nom dans la cha\xeene ",(0,t.jsx)(n.em,{children:"nomFormulaire"}),". Pour un formulaire projet, passez directement le nom du formulaire directement dans ",(0,t.jsx)(n.em,{children:"nomFormulaire"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pour pouvoir ex\xe9cuter directement le formulaire en passant l'objet r\xe9sultant \xe0 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/dialog",children:"DIALOG"}),", ",(0,t.jsx)(n.strong,{children:"FORM Convert to dynamic"})," applique des r\xe8gles sp\xe9cifiques lors de la conversion du formulaire :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Les r\xe9f\xe9rences aux listes sont export\xe9es par nom, au lieu d'un pointeur JSON r\xe9f\xe9ren\xe7ant le fichier lists.json."}),"\n",(0,t.jsx)(n.li,{children:"Les r\xe9f\xe9rences aux filtres nomm\xe9s et aux formats d'affichage nomm\xe9s (pr\xe9fix\xe9s par le caract\xe8re '|') sont export\xe9es par valeur, au lieu d'un pointeur JSON r\xe9f\xe9ren\xe7ant le fichier filters.json."}),"\n",(0,t.jsxs)(n.li,{children:['Les images de la biblioth\xe8que d\'images n\'\xe9tant pas export\xe9es par la commande, les objets r\xe9f\xe9ren\xe7ant une image de la biblioth\xe8que d\'images continuent de r\xe9f\xe9rencer la biblioth\xe8que apr\xe8s la conversion. Dans leur propri\xe9t\xe9 "icon", ils utilisent une URL "pictlib:xx" sp\xe9cifique, o\xf9 ',(0,t.jsx)(n.em,{children:"xx"})," correspond \xe0 l'identifiant dans la biblioth\xe8que."]}),"\n",(0,t.jsx)(n.li,{children:"Les images statiques sont converties en propri\xe9t\xe9s d'objet de type image."}),"\n",(0,t.jsx)(n.li,{children:"Les objets obsol\xe8tes sont ignor\xe9s. Veuillez vous reporter au paragraphe pour consulter la liste des objets ou des propri\xe9t\xe9s qui ne sont pas pris en charge dans les formulaires dynamiques."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Les r\xe9f\xe9rences aux m\xe9thodes formulaire et aux m\xe9thodes objets sont export\xe9es avec des ID internes, qui seront valides uniquement dans la base courante tant que les m\xe9thodes de ",(0,t.jsx)(n.em,{children:"nomFormulaire"}),' ne seront pas modifi\xe9es. Si vous souhaitez utiliser le formulaire export\xe9 dans un autre contexte, vous devez associer des noms de m\xe9thodes projet \xe0 la propri\xe9t\xe9 "method" du formulaire ou des objets du formulaire (voir l\'exemple).']}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez convertir, modifier et afficher un formulaire classique."}),"\n",(0,t.jsx)(n.p,{children:"Le formulaire initial :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(969456).Z+"",width:"499",height:"253"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $dynForm : Object\n\xa0$dynForm:=FORM Convert to dynamic("FormulaireAconvertir")\n\xa0$dynForm.pages[1].objects.TitleA:="rouge"\n\xa0$dynForm.pages[1].objects.bOK.method:="myMethod"\xa0\xa0// associez une m\xe9thode projet\n\xa0DIALOG($dynForm)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Si vous ex\xe9cutez le code :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(55673).Z+"",width:"278",height:"199"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/dialog",children:"DIALOG"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/export-structure-file",children:"Export structure file"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},969456:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict3977360.en-0c0d5ff744828490012f7ba86aee899b.png"},55673:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var s=r(667294);let t={},i=s.createContext(t);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);