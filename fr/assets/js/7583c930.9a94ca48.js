/*! For license information please see 7583c930.9a94ca48.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44113],{874708:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=n(474848),t=n(28453);const d={id:"creating-using-macros",title:"Cr\xe9er et utiliser des macros"},i=void 0,o={id:"code-editor/creating-using-macros",title:"Cr\xe9er et utiliser des macros",description:"Vous pouvez utiliser des macro-commandes dans vos m\xe9thodes. Les macro-commandes permettent de gagner beaucoup de temps lors de la saisie de code.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/code-editor/creating-using-macros.md",sourceDirName:"code-editor",slug:"/code-editor/creating-using-macros",permalink:"/docs/fr/20/code-editor/creating-using-macros",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20code-editor%2Fcreating-using-macros.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"creating-using-macros",title:"Cr\xe9er et utiliser des macros"},sidebar:"docs",previous:{title:"\xc9diteur de code",permalink:"/docs/fr/20/code-editor/write-class-method"},next:{title:"Balises de transformation",permalink:"/docs/fr/20/Tags/tags"}},a={},l=[{value:"Qu\u2019est-ce qu\u2019une macro ?",id:"quest-ce-quune-macro-",level:2},{value:"Emplacement des macros",id:"emplacement-des-macros",level:2},{value:"Macros par d\xe9faut",id:"macros-par-d\xe9faut",level:2},{value:"Ajout de macros personnalis\xe9es",id:"ajout-de-macros-personnalis\xe9es",level:2},{value:"V\xe9rification de la syntaxe des macros personnalis\xe9es",id:"v\xe9rification-de-la-syntaxe-des-macros-personnalis\xe9es",level:3},{value:"Syntaxe des macros 4D",id:"syntaxe-des-macros-4d",level:2},{value:"\xc0 propos de la balise <code>&lt;method&gt;</code>",id:"\xe0-propos-de-la-balise-method",level:2},{value:"Appeler des macros",id:"appeler-des-macros",level:2},{value:"Menu contextuel et barre d&#39;outils",id:"menu-contextuel-et-barre-doutils",level:3},{value:"Autocompl\xe9tion",id:"autocompl\xe9tion",level:3},{value:"Liste de l&#39;\xe9diteur de code",id:"liste-de-l\xe9diteur-de-code",level:3},{value:"Notes de compatibilit\xe9",id:"notes-de-compatibilit\xe9",level:2},{value:"Variables de s\xe9lection de texte pour les m\xe9thodes",id:"variables-de-s\xe9lection-de-texte-pour-les-m\xe9thodes",level:3},{value:"Incompatibilit\xe9s li\xe9es \xe0 la norme XML",id:"incompatibilit\xe9s-li\xe9es-\xe0-la-norme-xml",level:3}];function c(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Vous pouvez utiliser des macro-commandes dans vos m\xe9thodes. Les macro-commandes permettent de gagner beaucoup de temps lors de la saisie de code."}),"\n",(0,r.jsx)(s.h2,{id:"quest-ce-quune-macro-",children:"Qu\u2019est-ce qu\u2019une macro ?"}),"\n",(0,r.jsxs)(s.p,{children:["Une macro-commande est une partie de code 4D accessible en permanence et pouvant \xeatre ins\xe9r\xe9e \xe0 tout endroit de vos m\xe9thodes, quelle que soit la base ouverte. Les macro-commandes peuvent contenir tout type de texte, des commandes et des constantes 4D, ainsi que des balises sp\xe9ciales, remplac\xe9es au moment de l\u2019insertion de la macro par des valeurs issues du contexte de la m\xe9thode. Par exemple, une macro-commande peut contenir la balise ",(0,r.jsx)(s.code,{children:"<method_name/>;"})," au moment de son insertion, cette balise sera remplac\xe9e par le nom de la m\xe9thode projet courante."]}),"\n",(0,r.jsx)(s.p,{children:"Les macro-commandes sont stock\xe9es dans un ou plusieurs fichier(s) au format XML (texte). Elles peuvent \xeatre affich\xe9es dans une liste de l\u2019\xe9diteur de code; elle peuvent \xe9galement \xeatre appel\xe9es \xe0 l\u2019aide du menu contextuel de l\u2019\xe9diteur ou \xe0 l\u2019aide de la fonction de saisie pr\xe9dictive."}),"\n",(0,r.jsx)(s.p,{children:"Les macro-commandes de 4D sont \xe9crites au format XML. Vous pouvez utiliser \u201ctel quel\u201d le fichier de macro-commandes par d\xe9faut de 4D ou le modifier."}),"\n",(0,r.jsx)(s.h2,{id:"emplacement-des-macros",children:"Emplacement des macros"}),"\n",(0,r.jsxs)(s.p,{children:["4D charge les macros \xe0 partir d\u2019un dossier nomm\xe9 ",(0,r.jsx)(s.strong,{children:"Macros v2"}),". Les macros doivent \xeatre pr\xe9sentes sous forme d\u2019un ou plusieurs fichiers XML plac\xe9s dans ce dossier."]}),"\n",(0,r.jsx)(s.p,{children:"Le dossier \u201cMacros v2\u201d peut \xeatre situ\xe9 :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Dans le dossier 4D actif de la machine. Les macros sont alors partag\xe9es pour toutes les bases. ",(0,r.jsx)(s.strong,{children:"Note :"})," L\u2019emplacement du dossier 4D actif varie en fonction du syst\xe8me d\u2019exploitation. Pour plus d\u2019informations, reportez-vous \xe0 la description de la commande ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html",children:"Get 4D folder"})," dans le ",(0,r.jsx)(s.em,{children:"manuel Langage de 4D"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"A c\xf4t\xe9 du fichier de structure de la base. Les macros ne sont charg\xe9es que pour cette structure."}),"\n",(0,r.jsxs)(s.li,{children:["Pour les composants : dans le dossier ",(0,r.jsx)(s.strong,{children:"Components"})," de la base. Les macros ne sont alors charg\xe9es que si le composant est install\xe9."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Ces trois emplacements peuvent \xeatre utilis\xe9s simultan\xe9ment : il est possible d\u2019installer un dossier \u201cMacros v2\u201d \xe0 chaque emplacement. Les macros seront charg\xe9es dans l\u2019ordre suivant : dossier 4D, fichier de structure, composant 1... composant N."}),"\n",(0,r.jsx)(s.h2,{id:"macros-par-d\xe9faut",children:"Macros par d\xe9faut"}),"\n",(0,r.jsxs)(s.p,{children:['4D propose un ensemble de macros par d\xe9faut contenant, par exemple, des mots-cl\xe9s des conditions et boucles. Ces macros sont incluses dans le fichier par d\xe9faut "',(0,r.jsx)(s.em,{children:"Macros.xml"}),'", plac\xe9 dans le dossier " Macros v2 " qui est cr\xe9\xe9 dans le dossier 4D actif de la machine lors du d\xe9marrage initial de 4D.']}),"\n",(0,r.jsx)(s.p,{children:"Vous pouvez modifier ce fichier ou le contenu du dossier par la suite comme vous le souhaitez (voir le paragraphe suivant). En cas de probl\xe8me avec ce dossier, il peut \xeatre supprim\xe9 et 4D le recr\xe9era au d\xe9marrage suivant."}),"\n",(0,r.jsx)(s.h2,{id:"ajout-de-macros-personnalis\xe9es",children:"Ajout de macros personnalis\xe9es"}),"\n",(0,r.jsx)(s.p,{children:"Vous pouvez ajouter des macros personnalis\xe9es dans le fichier \"Macros.xml\" \xe0 l'aide d'un \xe9diteur de texte standard ou par programmation. Vous pouvez \xe9galement ajouter des fichiers XML de macros personnalis\xe9es dans ce dossier."}),"\n",(0,r.jsx)(s.p,{children:"En mode local, le fichier de macros peut \xeatre ouvert tout en utilisant 4D. La liste des macros disponibles est mise \xe0 jour \xe0 chaque \xe9v\xe9nement activant 4D. Par exemple, il est possible de faire passer l'\xe9diteur de texte au premier plan, de modifier le fichier macro, puis de revenir \xe0 la m\xe9thode : la nouvelle macro est alors disponible dans l'\xe9diteur de code."}),"\n",(0,r.jsx)(s.p,{children:"Les macros vides ou erron\xe9es ne sont pas affich\xe9es."}),"\n",(0,r.jsx)(s.h3,{id:"v\xe9rification-de-la-syntaxe-des-macros-personnalis\xe9es",children:"V\xe9rification de la syntaxe des macros personnalis\xe9es"}),"\n",(0,r.jsxs)(s.p,{children:["Les fichiers de macro-commandes de 4D doivent \xeatre conformes \xe0 la norme XML. Cela signifie plus particuli\xe8rement que la d\xe9claration XML ",(0,r.jsx)(s.code,{children:'<?xml version="1.0" ... ?>'})," et la d\xe9claration de document ",(0,r.jsx)(s.code,{children:'<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">'})," sont obligatoires au d\xe9but d'un fichier macro pour que celui-ci soit charg\xe9. Les diff\xe9rents types d'encodage XML sont pris en charge. Toutefois, il est recommand\xe9 d'utiliser un encodage compatible avec Mac/PC (UTF-8). 4D fournit une DTD qui peut \xeatre utilis\xe9e pour valider les fichiers macro. Ce fichier se trouve \xe0 l'emplacement suivant :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Windows : \\Resources\\DTD\\macros.dtd"}),"\n",(0,r.jsx)(s.li,{children:"Mac OS : :Contenu:Ressources:DTD:macros.dtd"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Si un fichier de macros ne contient pas les d\xe9clarations ou ne peut \xeatre valid\xe9, il n'est pas charg\xe9."}),"\n",(0,r.jsx)(s.h2,{id:"syntaxe-des-macros-4d",children:"Syntaxe des macros 4D"}),"\n",(0,r.jsx)(s.p,{children:'Les macros 4D sont construites \xe0 l\'aide de balises XML personnalis\xe9es appel\xe9es "\xe9l\xe9ments".'}),"\n",(0,r.jsxs)(s.p,{children:["Certaines balises indiquent le d\xe9but et la fin de la d\xe9finition (balises doubles du type ",(0,r.jsx)(s.code,{children:"<tag> </tag>"}),"), d'autres sont remplac\xe9es par des valeurs de contexte d'insertion (",(0,r.jsx)(s.code,{children:"<tag/>"}),")."]}),"\n",(0,r.jsx)(s.p,{children:"Conform\xe9ment aux sp\xe9cifications XML, certaines balises d'\xe9l\xe9ments peuvent inclure des attributs. Sauf indication contraire, ces attributs sont facultatifs et une valeur par d\xe9faut est utilis\xe9e lorsqu'ils sont omis. La syntaxe des \xe9l\xe9ments avec attributs est la suivante :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Balises doubles : ",(0,r.jsx)(s.code,{children:'<tag attribute="value"> </macro>'})]}),"\n",(0,r.jsxs)(s.li,{children:["Balises simples : ",(0,r.jsx)(s.code,{children:'<tag attribute="value"/>'})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Si l'\xe9l\xe9ment accepte plusieurs attributs, vous pouvez les regrouper dans une m\xeame ligne de commande, en les s\xe9parant par un espace : ",(0,r.jsx)(s.code,{children:'\\N-&#060;tag attribut1="valeur" attribut2="valeur" attribut3="valeur"... &#062;'})]}),"\n",(0,r.jsx)(s.p,{children:"Voici la liste des balises et leur mode d'utilisation :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Balises d'\xe9l\xe9ments"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Description"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<macros> </macros>"})}),(0,r.jsx)(s.td,{children:"D\xe9but et fin du fichier macro (balise obligatoire)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<macro> </macro>"})}),(0,r.jsx)(s.td,{children:"D\xe9but et fin de la d\xe9finition d'une macro et de ses attributs."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"Attributs"})," :"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"- name : Nom de la macro tel qu'il appara\xeet dans les menus et les listes de l'\xe9diteur de code (attribut obligatoire)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"- type_ahead_text : Cha\xeene de caract\xe8res \xe0 saisir pour appeler la macro \xe0 l'aide de la fonction de saisie pr\xe9dictive (ou autocompl\xe9tion)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:'- in_menu : Bool\xe9en indiquant si la macro peut \xeatre appel\xe9e \xe0 l\'aide du menu contextuel. Valeurs = "true" (par d\xe9faut) ou "false".'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:'- type_ahead : Bool\xe9en indiquant si la macro peut \xeatre appel\xe9e en utilisant la fonction de saisie pr\xe9dictive (ou autocompl\xe9tion). Valeurs = "true" (par d\xe9faut) ou "false".'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:'- method_event : Utilis\xe9 pour d\xe9clencher l\'appel automatique de la macro en fonction de la phase de traitement courante de chaque m\xe9thode (cr\xe9ation, fermeture, etc.). Valeurs = "on_load" : La macro est d\xe9clench\xe9e \xe0 l\'ouverture de chaque m\xe9thode, "on_save" : La macro est d\xe9clench\xe9e lors de l\'enregistrement de chaque m\xe9thode (fermeture d\'une m\xe9thode modifi\xe9e ou enregistrement \xe0 l\'aide de la commande File>Save, "on_create" : La macro est d\xe9clench\xe9e lorsque chaque m\xe9thode est cr\xe9\xe9e, "on_close" : La macro est d\xe9clench\xe9e lors de la fermeture de chaque m\xe9thode.'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:'"on_save" et "on_close" peuvent \xeatre utilis\xe9s conjointement --- en d\'autres termes, ces deux \xe9v\xe9nements sont g\xe9n\xe9r\xe9s lorsqu\'une m\xe9thode modifi\xe9e est ferm\xe9e. En revanche, "on_create" et "on_load" ne sont jamais g\xe9n\xe9r\xe9s de mani\xe8re cons\xe9cutive. Cet attribut peut \xeatre utilis\xe9, par exemple, pour pr\xe9formater les m\xe9thodes lors de leur cr\xe9ation (commentaires dans la zone d\'en-t\xeate) ou pour enregistrer des informations telles que la date et l\'heure de leur cl\xf4ture.'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:['- version : Utilis\xe9 pour activer le nouveau mode de prise en charge des s\xe9lections de texte pour la macro (voir la section "\xc0 propos de la balise ',(0,r.jsx)(s.code,{children:"<method>"}),'" ci-dessous). Pour activer ce mode, passez la valeur "2". Si vous omettez cet attribut ou passez la version="1", l\'ancien mode est conserv\xe9.']})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:'- in_toolbar : Bool\xe9en indiquant si la macro doit \xeatre pr\xe9sente dans le menu du bouton Macro de la barre d\'outils. Valeurs = "true" (par d\xe9faut) ou "false".'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<selection/>"})}),(0,r.jsx)(s.td,{children:"Balise remplac\xe9e par le texte s\xe9lectionn\xe9 lors de l'insertion de la macro. La s\xe9lection peut \xeatre vide."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<text> </text>"})}),(0,r.jsx)(s.td,{children:"D\xe9but et fin du code qui doit \xeatre ins\xe9r\xe9 dans la m\xe9thode. Un retour chariot sera ajout\xe9 avant et apr\xe8s le code."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<method> </method>"})}),(0,r.jsxs)(s.td,{children:['D\xe9but et fin du nom de la m\xe9thode projet et de son param\xe8tre (facultatif). La m\xe9thode est ex\xe9cut\xe9e lorsque la macro est appel\xe9e. Vous pouvez passer un param\xe8tre sous la forme ("param1;param2 ;..."). Ce param\xe8tre sera re\xe7u dans la m\xe9thode \xe0 l\'aide des variables $1, $2, etc. Pour plus d\'informations sur cette balise, reportez-vous \xe0 la section "\xc0 propos de la balise ',(0,r.jsx)(s.code,{children:"<method>"}),'" ci-dessous.']})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<caret/>"})}),(0,r.jsx)(s.td,{children:"Emplacement du point d'insertion dans le code apr\xe8s l'insertion de la macro."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<user_4D/>"})}),(0,r.jsx)(s.td,{children:"Balise remplac\xe9e par le nom de l'utilisateur 4D courant."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<user_os/>"})}),(0,r.jsx)(s.td,{children:"Balise remplac\xe9e par le nom d'utilisateur courant du syst\xe8me."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<method_name/>"})}),(0,r.jsx)(s.td,{children:"Tag replaced by the current method name."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<method_path/>"})}),(0,r.jsxs)(s.td,{children:["Tag replaced by path syntax (as returned by ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1164.html",children:(0,r.jsx)(s.code,{children:"METHOD Get path"})})," of the current method."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<date/>"})}),(0,r.jsx)(s.td,{children:"Balise remplac\xe9e par la date courante."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"Attribut"}),":"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"- format : Format 4D utilis\xe9 pour afficher la date. Si aucun format n'est d\xe9fini, le format par d\xe9faut est utilis\xe9. Valeurs = num\xe9ro du format 4D (0 \xe0 8)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<time/>"})}),(0,r.jsx)(s.td,{children:"Balise remplac\xe9e par l'heure courante."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"Attribut"}),":"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"- format : Format 4D utilis\xe9 pour afficher l'heure. Si aucun format n'est d\xe9fini, le format par d\xe9faut est utilis\xe9. Valeurs = num\xe9ro du format 4D (0 \xe0 6)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<clipboard/>"})}),(0,r.jsx)(s.td,{children:"Balise remplac\xe9e par le contenu du presse-papiers."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"Attribut"}),":"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"- index : Presse-papiers \xe0 coller. Valeurs = num\xe9ro du presse-papiers (0 \xe0 9)."})]})]})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Les macros peuvent \xeatre appel\xe9es \xe0 l'aide du menu contextuel de l'\xe9diteur de code ou \xe0 l'aide de la fonction type-ahead (voir la section suivante)."}),"\n",(0,r.jsx)(s.li,{children:"Si vous voulez vous conformer aux sp\xe9cifications du langage XML, vous ne devez pas utiliser de caract\xe8res \xe9tendus (caract\xe8res accentu\xe9s, guillemets, etc.)."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Voici un exemple de d\xe9finition de macro :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Contenu de la macro"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Commentaires"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:'<?xml version="1.0"...?>'})}),(0,r.jsx)(s.td,{children:"D\xe9claration XML"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<!DOCTYPE macros SYSTEM>"})}),(0,r.jsx)(s.td,{children:"D\xe9claration de document"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<macros>"})}),(0,r.jsx)(s.td,{children:"D\xe9but du fichier XML des macros"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:'<macro name="RecordLoop">'})}),(0,r.jsx)(s.td,{children:"D\xe9but de la d\xe9finition et du nom de la macro"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<text>"})}),(0,r.jsx)(s.td,{children:"D\xe9but du code de la macro"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["For($i;1;Records in selection(",(0,r.jsx)(s.code,{children:"<Selection/>"}),"))"]}),(0,r.jsxs)(s.td,{children:["La balise ",(0,r.jsx)(s.code,{children:"<Selection/>"})," sera remplac\xe9e par le code s\xe9lectionn\xe9 dans la m\xe9thode 4D au moment de l'insertion de la macro (par exemple, un nom de table)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["SAVE RECORD(",(0,r.jsx)(s.code,{children:"<Selection/>"}),")"]}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["NEXT RECORD(",(0,r.jsx)(s.code,{children:"<Selection/>"}),")"]}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"End for"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"</text>"})}),(0,r.jsx)(s.td,{children:"Fin du code de la macro"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"</macro>"})}),(0,r.jsx)(s.td,{children:"Fin de la d\xe9finition de la macro"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"</macros>"})}),(0,r.jsx)(s.td,{children:"Fin du fichier XML des macros"})]})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"\xe0-propos-de-la-balise-method",children:["\xc0 propos de la balise ",(0,r.jsx)(s.code,{children:"<method>"})]}),"\n",(0,r.jsxs)(s.p,{children:["La balise ",(0,r.jsx)(s.code,{children:"<method>"})," permet de g\xe9n\xe9rer et d'utiliser des macro-commandes qui ex\xe9cutent des m\xe9thodes projet 4D. Cela permet aux d\xe9veloppeurs de cr\xe9er des fonctions sophistiqu\xe9es qui peuvent \xeatre distribu\xe9es via des macro-commandes associ\xe9es \xe0 des composants. Par exemple, la macro suivante provoquera l'ex\xe9cution de la m\xe9thode ",(0,r.jsx)(s.em,{children:"MyMethod"})," avec le nom de la m\xe9thode courante comme param\xe8tre :"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:'<method>MyMethod("<method_name/>")</method>'})}),"\n",(0,r.jsx)(s.p,{children:"Le code d'une m\xe9thode appel\xe9e est ex\xe9cut\xe9 dans un nouveau process. Ce process est tu\xe9 une fois la m\xe9thode ex\xe9cut\xe9e."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Le process de structure reste fig\xe9 jusqu'\xe0 ce que l'ex\xe9cution de la m\xe9thode appel\xe9e soit termin\xe9e. Vous devez vous assurer que l'ex\xe9cution est rapide et qu'il n'y a aucun risque qu'elle bloque l'application. Si cela se produit, utilisez la commande ",(0,r.jsx)(s.strong,{children:"Ctrl+F8"})," (Windows) ou ",(0,r.jsx)(s.strong,{children:"Command+F8"}),' (macOS) pour "tuer" le process.']}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"appeler-des-macros",children:"Appeler des macros"}),"\n",(0,r.jsx)(s.p,{children:"Par d\xe9faut, les macros peuvent \xeatre appel\xe9es \xe0 l'aide du menu contextuel ou de la barre d'outils de l'\xe9diteur de code, de la fonction d'auto-compl\xe9tion ou d'une liste sp\xe9cifique au bas de la fen\xeatre de l'\xe9diteur de code."}),"\n",(0,r.jsx)(s.p,{children:"Notez que pour chaque macro, il est possible de restreindre la possibilit\xe9 de l'appeler \xe0 l'aide du menu contextuel et/ou de la fonction d'autocompl\xe9tion."}),"\n",(0,r.jsx)(s.h3,{id:"menu-contextuel-et-barre-doutils",children:"Menu contextuel et barre d'outils"}),"\n",(0,r.jsxs)(s.p,{children:["Par d\xe9faut, toutes les macros peuvent \xeatre appel\xe9es via le menu contextuel de l'\xe9diteur de code (\xe0 l'aide de la commande hi\xe9rarchique ",(0,r.jsx)(s.strong,{children:"Insert macro"})," ) ou le bouton ",(0,r.jsx)(s.strong,{children:"Macros"})," de la barre d'outils."]}),"\n",(0,r.jsxs)(s.p,{children:["L'attribut ",(0,r.jsx)(s.em,{children:"in_menu"})," de la balise ",(0,r.jsx)(s.code,{children:"<macro>"})," permet de d\xe9finir si la macro appara\xeet ou non dans ce menu."]}),"\n",(0,r.jsx)(s.p,{children:"Dans le menu contextuel, les macros sont affich\xe9es dans l'ordre du fichier \"Macros.xml\" et des \xe9ventuels fichiers XML suppl\xe9mentaires. Il est donc possible de changer l'ordre en modifiant ces fichiers."}),"\n",(0,r.jsx)(s.h3,{id:"autocompl\xe9tion",children:"Autocompl\xe9tion"}),"\n",(0,r.jsxs)(s.p,{children:["Par d\xe9faut, toutes les macros sont accessibles \xe0 l'aide de la fonction d'autocompl\xe9tion (ou fonction de saisie pr\xe9dictive) (voir ",(0,r.jsx)(s.a,{href:"/docs/fr/20/code-editor/write-class-method",children:"Editeur de code"}),"). L'attribut ",(0,r.jsx)(s.em,{children:"type_ahead"})," de la balise ",(0,r.jsx)(s.code,{children:"<macro>"})," peut \xeatre utilis\xe9 pour exclure une macro de ce type d'op\xe9ration."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Si la macro contient la balise ",(0,r.jsx)(s.code,{children:"<selection/>"}),", elle n'appara\xeetra pas dans la fen\xeatre pop-up d'auto-compl\xe9tion."]}),"\n",(0,r.jsx)(s.h3,{id:"liste-de-l\xe9diteur-de-code",children:"Liste de l'\xe9diteur de code"}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez afficher vos macros dans une liste de l'\xe9diteur de code (voir ",(0,r.jsx)(s.a,{href:"/docs/fr/20/code-editor/write-class-method",children:"Editeur de code"}),"). Il suffit de double-cliquer sur le nom d'une macro dans la liste pour l'appeler. Il n'est pas possible d'exclure une macro sp\xe9cifique de cette liste."]}),"\n",(0,r.jsx)(s.h2,{id:"notes-de-compatibilit\xe9",children:"Notes de compatibilit\xe9"}),"\n",(0,r.jsx)(s.p,{children:"La prise en charge des macros peut changer d'une version de 4D \xe0 l'autre. Afin de garder les diff\xe9rentes versions compatibles tout en conservant vos personnalisations, 4D ne supprime pas les versions pr\xe9c\xe9dentes. Si vous souhaitez utiliser les derni\xe8res fonctionnalit\xe9s disponibles, vous devez adapter votre version en cons\xe9quence."}),"\n",(0,r.jsx)(s.h3,{id:"variables-de-s\xe9lection-de-texte-pour-les-m\xe9thodes",children:"Variables de s\xe9lection de texte pour les m\xe9thodes"}),"\n",(0,r.jsxs)(s.p,{children:["Il est recommand\xe9 de g\xe9rer les s\xe9lections de texte \xe0 l'aide des commandes ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page997.html",children:"GET MACRO PARAMETER"})," et ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page998.html",children:"SET MACRO PARAMETER"})," . Ces commandes peuvent \xeatre utilis\xe9es pour surmonter le cloisonnement des espaces d'ex\xe9cution du projet h\xf4te/composant et ainsi permettre la cr\xe9ation de composants d\xe9di\xe9s \xe0 la gestion des macros. Afin d'activer ce mode pour une macro, vous devez d\xe9clarer l'attribut Version avec la valeur 2 dans l'\xe9l\xe9ment Macro. Dans ce cas, 4D ne g\xe8re plus les variables pr\xe9d\xe9finies _textSel,_textReplace, etc. et les commandes ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page997.html",children:"GET MACRO PARAMETER"})," et ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page998.html",children:"SET MACRO PARAMETER"})," sont utilis\xe9es. Cet attribut doit \xeatre d\xe9clar\xe9 comme suit :"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:'<macro name="MyMacro" version="2">'}),(0,r.jsx)(s.br,{})," ",(0,r.jsx)(s.code,{children:"--- Text of the macro ---"}),(0,r.jsx)(s.br,{})," ",(0,r.jsx)(s.code,{children:"</macro>"})]}),"\n",(0,r.jsx)(s.p,{children:"Si vous ne passez pas cet attribut, le mode pr\xe9c\xe9dent est conserv\xe9."}),"\n",(0,r.jsx)(s.h3,{id:"incompatibilit\xe9s-li\xe9es-\xe0-la-norme-xml",children:"Incompatibilit\xe9s li\xe9es \xe0 la norme XML"}),"\n",(0,r.jsx)(s.p,{children:"Des r\xe8gles syntaxiques strictes doivent \xeatre observ\xe9es pour que les fichiers de macros respectent la norme XML. Cela peut entra\xeener des incompatibilit\xe9s avec le code des macros cr\xe9\xe9es avec les versions pr\xe9c\xe9dentes et emp\xeacher le chargement des fichiers XML. Les principales sources de dysfonctionnement sont les suivantes :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['Les commentaires du type "// mon commentaire", autoris\xe9s \xe0 l\'int\xe9rieur des \xe9l\xe9ments ',(0,r.jsx)(s.code,{children:"<macro>"})," dans les versions pr\xe9c\xe9dentes de 4D, ne sont pas compatibles avec la syntaxe XML. Les lignes de commentaires doivent respecter la forme standard ",(0,r.jsx)(s.code,{children:'"\x3c!-- mon commentaire --\x3e"'}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Les symboles ",(0,r.jsx)(s.code,{children:"<>"})," utilis\xe9s plus particuli\xe8rement pour les noms d'objets interprocess doivent \xeatre encod\xe9s. Par exemple, la variable ",(0,r.jsx)(s.code,{children:"<>params"})," doit \xeatre \xe9crite ",(0,r.jsx)(s.code,{children:"&lt;>params"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["La balise de d\xe9claration initiale ",(0,r.jsx)(s.code,{children:"<macros>"})," pouvait \xeatre omise dans les versions pr\xe9c\xe9dentes de 4D. Il est maintenant obligatoire ; sinon, le fichier ne sera pas charg\xe9."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,s,n)=>{var r=n(296540),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var r,d={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)i.call(s,r)&&!a.hasOwnProperty(r)&&(d[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===d[r]&&(d[r]=s[r]);return{$$typeof:t,type:e,key:l,ref:c,props:d,_owner:o.current}}s.Fragment=d,s.jsx=l,s.jsxs=l},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var r=n(296540);const t={},d=r.createContext(t);function i(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);