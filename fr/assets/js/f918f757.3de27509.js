/*! For license information please see f918f757.3de27509.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92238],{861595:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var n=r(474848),i=r(28453);const t={id:"listOverview",title:"Liste hi\xe9rarchique"},l=void 0,o={id:"FormObjects/listOverview",title:"Liste hi\xe9rarchique",description:"Les listes hi\xe9rarchiques sont des objets de formulaire permettant d'afficher des donn\xe9es sous forme de listes comportant un ou plusieurs niveaux qu'il est possible de d\xe9ployer ou de contracter.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/FormObjects/list_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/listOverview",permalink:"/docs/fr/20-R5/FormObjects/listOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Flist_overview.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"listOverview",title:"Liste hi\xe9rarchique"},sidebar:"docs",previous:{title:"Zone de saisie",permalink:"/docs/fr/20-R5/FormObjects/inputOverview"},next:{title:"List Box",permalink:"/docs/fr/20-R5/FormObjects/listboxOverview"}},d={},c=[{value:"Sources de donn\xe9es de liste hi\xe9rarchique",id:"sources-de-donn\xe9es-de-liste-hi\xe9rarchique",level:2},{value:"RefListe et nom d&#39;objet",id:"refliste-et-nom-dobjet",level:2},{value:"Prise en compte du @",id:"prise-en-compte-du-",level:3},{value:"Commandes g\xe9n\xe9riques utilisables avec les listes hi\xe9rarchiques",id:"commandes-g\xe9n\xe9riques-utilisables-avec-les-listes-hi\xe9rarchiques",level:2},{value:"Priorit\xe9 des commandes de propri\xe9t\xe9",id:"priorit\xe9-des-commandes-de-propri\xe9t\xe9",level:2},{value:"Gestion des \xe9l\xe9ments par position ou par r\xe9f\xe9rence",id:"gestion-des-\xe9l\xe9ments-par-position-ou-par-r\xe9f\xe9rence",level:2},{value:"Exploiter les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments (r\xe9fEl\xe9ment)",id:"exploiter-les-num\xe9ros-de-r\xe9f\xe9rence-des-\xe9l\xe9ments-r\xe9fel\xe9ment",level:3},{value:"Quand avez-vous besoin de num\xe9ros de r\xe9f\xe9rence uniques ?",id:"quand-avez-vous-besoin-de-num\xe9ros-de-r\xe9f\xe9rence-uniques-",level:3},{value:"\xc9l\xe9ment modifiable",id:"\xe9l\xe9ment-modifiable",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Les listes hi\xe9rarchiques sont des objets de formulaire permettant d'afficher des donn\xe9es sous forme de listes comportant un ou plusieurs niveaux qu'il est possible de d\xe9ployer ou de contracter."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:r(944243).A+"",width:"168",height:"162"})}),"\n",(0,n.jsx)(s.p,{children:"Le cas \xe9ch\xe9ant, l'ic\xf4ne d\xe9ployer/contract\xe9e est automatiquement affich\xe9e \xe0 gauche de l'\xe9l\xe9ment. Les listes hi\xe9rarchiques prennent en charge un nombre illimit\xe9 de sous-niveaux."}),"\n",(0,n.jsx)(s.h2,{id:"sources-de-donn\xe9es-de-liste-hi\xe9rarchique",children:"Sources de donn\xe9es de liste hi\xe9rarchique"}),"\n",(0,n.jsx)(s.p,{children:"Le contenu d'un objet formulaire liste hi\xe9rarchique peut \xeatre initialis\xe9 de l'une des mani\xe8res suivantes :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Associer une ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesDataSource#choice-list",children:"\xe9num\xe9ration"})," \xe0 l'objet. L'\xe9num\xe9ration doit avoir \xe9t\xe9 d\xe9finie dans l'\xe9diteur de listes en mode D\xe9veloppement."]}),"\n",(0,n.jsxs)(s.li,{children:["Assignez directement une r\xe9f\xe9rence de liste hi\xe9rarchique \xe0 la ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesObject#variable-or-expression",children:"variable ou \xe0 l'expression"})," associ\xe9e \xe0 l'objet formulaire."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Dans les deux cas, vous g\xe9rez une liste hi\xe9rarchique lors de l'ex\xe9cution via sa r\xe9f\xe9rence ",(0,n.jsx)(s.em,{children:"ListRef"}),", \xe0 l'aide des commandes de ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html",children:"liste hi\xe9rarchique"})," du langage 4D."]}),"\n",(0,n.jsx)(s.h2,{id:"refliste-et-nom-dobjet",children:"RefListe et nom d'objet"}),"\n",(0,n.jsxs)(s.p,{children:["Une liste hi\xe9rarchique est \xe0 la fois un ",(0,n.jsx)(s.strong,{children:"objet de langage"})," existant en m\xe9moire et un ",(0,n.jsx)(s.strong,{children:"objet de formulaire"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["L'",(0,n.jsx)(s.strong,{children:"objet de langage"})," est r\xe9f\xe9renc\xe9 de mani\xe8re unique par un identifiant interne, de type Entier long, d\xe9sign\xe9 par ",(0,n.jsx)(s.em,{children:"RefListe"})," dans ce manuel. Cet identifiant est retourn\xe9 par les commandes permettant de cr\xe9er des listes ",(0,n.jsx)(s.code,{children:"New list"}),", ",(0,n.jsx)(s.code,{children:"Copy list"}),", ",(0,n.jsx)(s.code,{children:"Load list"}),", ",(0,n.jsx)(s.code,{children:"BLOB to list"}),". Il n\u2019existe qu\u2019une seule instance en m\xe9moire de l\u2019objet de langage et toute modification effectu\xe9e sur cet objet est imm\xe9diatement r\xe9percut\xe9e dans tous les endroits o\xf9 il est utilis\xe9."]}),"\n",(0,n.jsxs)(s.p,{children:["L'",(0,n.jsx)(s.strong,{children:"objet de formulaire"})," n'est pas n\xe9cessairement unique : il peut exister plusieurs repr\xe9sentations d\u2019une m\xeame liste hi\xe9rarchique dans un m\xeame formulaire ou dans des formulaires diff\xe9rents. Comme pour les autres objets de formulaire, vous d\xe9signez l'objet dans le langage via la syntaxe (*;\"NomListe\", etc.)."]}),"\n",(0,n.jsxs)(s.p,{children:["Vous connectez l'\"objet de langage\" liste hi\xe9rarchique avec l'\"objet de formulaire\" liste hi\xe9rarchique par l'interm\xe9diaire de la variable contenant la valeur de l'identifiant unique RefListe. Par exemple, si vous avez associ\xe9 la ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesObject#variable-or-expression",children:"variable"})," mylist \xe0 l'objet de formulaire, vous \xe9crivez :"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"mylist:=New list\n"})}),"\n",(0,n.jsx)(s.p,{children:"Chaque repr\xe9sentation de liste dispose de caract\xe9ristiques propres et partage des caract\xe9ristiques communes avec l\u2019ensemble des repr\xe9sentations. Les caract\xe9ristiques propres \xe0 chaque repr\xe9sentation de liste sont les suivantes :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"La s\xe9lection,"}),"\n",(0,n.jsx)(s.li,{children:"L\u2019\xe9tat d\xe9ploy\xe9/contract\xe9 des \xe9l\xe9ments,"}),"\n",(0,n.jsx)(s.li,{children:"La position du curseur de d\xe9filement."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The other characteristics (font, font size, style, entry control, color, list contents, icons, etc.) are common to all the representations and cannot be modified separately.\nConsequently, when you use commands based on the expanded/collapsed configuration or the current item, for example ",(0,n.jsx)(s.code,{children:"Count list items"})," (when the final ",(0,n.jsx)(s.code,{children:"*"})," parameter is not passed), it is important to be able to specify the representation to be used without any ambiguity."]}),"\n",(0,n.jsxs)(s.p,{children:["Vous devez utiliser l'identifiant de type ",(0,n.jsx)(s.code,{children:"RefListe"})," avec les commandes du langage lorsque vous souhaitez d\xe9signer la liste hi\xe9rarchique r\xe9sidant en m\xe9moire. Par ailleurs, si vous souhaitez d\xe9signer la repr\xe9sentation au niveau du formulaire d'un objet Liste hi\xe9rarchique, vous devez utiliser le nom de l'objet (type cha\xeene) dans la commande, via la syntaxe (*;\"NomListe\"...)."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Dans le cas des commandes d\xe9finissant des propri\xe9t\xe9s, la syntaxe bas\xe9e sur le nom d\u2019objet ne signifie pas que seul l\u2019objet de formulaire d\xe9sign\xe9 sera modifi\xe9 par la commande, mais que l\u2019action de la commande sera bas\xe9e sur l\u2019\xe9tat de cet objet. Les caract\xe9risques communes des listes hi\xe9rarchiques sont toujours modifi\xe9es dans toutes les repr\xe9sentations.\nPar exemple, si vous passez l\u2019instruction :"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'SET LIST ITEM FONT(*;"mylist1";*;thefont)\n'})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["... you are indicating that you want to modify the font of the hierarchical list item associated with the ",(0,n.jsx)(s.em,{children:"mylist1"})," form object. La commande tiendra compte de l\u2019\xe9l\xe9ment courant de l\u2019objet ",(0,n.jsx)(s.em,{children:"mylist1"})," pour d\xe9finir l\u2019\xe9l\xe9ment \xe0 modifier, mais cette modification sera report\xe9e dans toutes les repr\xe9sentations de la liste dans tous les process."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"prise-en-compte-du-",children:"Prise en compte du @"}),"\n",(0,n.jsxs)(s.p,{children:["Comme pour les autres commandes de gestion des propri\xe9t\xe9 d\u2019objets, il est possible d\u2019utiliser le caract\xe8re \u201c@\u201d dans le param\xe8tre ",(0,n.jsx)(s.code,{children:"NomListe"}),". En principe, cette syntaxe permet de d\xe9signer un ensemble d\u2019objets dans le formulaire. Toutefois, dans le contexte des commandes de liste hi\xe9rarchique, ce principe n\u2019est pas applicable dans tous les cas. Cette syntaxe aura deux effets diff\xe9rents en fonction du type de commande :"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:'Pour les commandes fixant des propri\xe9t\xe9s, cette syntaxe d\xe9signe tous les objets dont le nom correspond (fonctionnement standard). Par exemple, le param\xe8tre "LH@" d\xe9signe tous les objets de type liste hi\xe9rarchique dont le nom d\xe9bute par \u201cLH\u201d'}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"DELETE FROM LIST"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"INSERT IN LIST"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"SELECT LIST ITEMS BY POSITION"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"SET LIST ITEM"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"SET LIST ITEM FONT"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"SET LIST ITEM ICON"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"SET LIST ITEM PARAMETER"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"SET LIST ITEM PROPERTIES"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Pour les commandes r\xe9cup\xe9rant des propri\xe9t\xe9s, cette syntaxe d\xe9signe le premier objet dont le nom correspond. Ces commandes sont :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Count list items"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Find in list"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"GET LIST ITEM"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Get list item font"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"GET LIST ITEM ICON"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"GET LIST ITEM PARAMETER"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"GET LIST ITEM PROPERTIES"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"List item parent"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"List item position"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"Selected list items"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"commandes-g\xe9n\xe9riques-utilisables-avec-les-listes-hi\xe9rarchiques",children:"Commandes g\xe9n\xe9riques utilisables avec les listes hi\xe9rarchiques"}),"\n",(0,n.jsx)(s.p,{children:"Il est possible de modifier l\u2019apparence d\u2019une liste hi\xe9rarchique dans un formulaire \xe0 l\u2019aide de plusieurs commandes 4D g\xe9n\xe9riques. Vous devez passer \xe0 ces commandes soit le nom d\u2019objet de la liste hi\xe9rarchique (en utilisant le param\xe8tre *), soit son nom de variable (contenant la valeur RefListe) :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"OBJECT SET FONT"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"OBJECT SET FONT STYLE"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"OBJECT SET FONT SIZE"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"OBJECT SET COLOR"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"OBJECT SET FILTER"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"OBJECT SET ENTERABLE"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"OBJECT SET SCROLLBAR"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"OBJECT SET SCROLL POSITION"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"OBJECT SET RGB COLORS"})}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Rappel : A l'exception de la commande ",(0,n.jsx)(s.code,{children:"OBJECT SET SCROLL POSITION"}),", ces commandes modifient toutes les repr\xe9sentations d'une m\xeame liste, m\xeame si vous d\xe9signez une liste via son nom d'objet."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"priorit\xe9-des-commandes-de-propri\xe9t\xe9",children:"Priorit\xe9 des commandes de propri\xe9t\xe9"}),"\n",(0,n.jsxs)(s.p,{children:["Certaines propri\xe9t\xe9s d\u2019une liste hi\xe9rarchique (par exemple l\u2019attribut ",(0,n.jsx)(s.strong,{children:"saisissable"})," ou la couleur) peuvent \xeatre d\xe9finies de trois mani\xe8res : via la Liste des propri\xe9t\xe9s en mode D\xe9veloppement, via une commande du th\xe8me \u201cPropri\xe9t\xe9s des objets\u201d ou via une  Lorsque ces trois moyens sont utilis\xe9s pour d\xe9finir les propri\xe9t\xe9s d\u2019une liste, l\u2019ordre de priorit\xe9 suivant est appliqu\xe9 :"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Commandes du th\xe8me \u201cListe hi\xe9rarchique\u201d"}),"\n",(0,n.jsx)(s.li,{children:"Commandes g\xe9n\xe9rique de propri\xe9t\xe9 d'objet"}),"\n",(0,n.jsx)(s.li,{children:"Propri\xe9t\xe9 formulaire"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Ce principe est appliqu\xe9 quel que soit l\u2019ordre d\u2019appel des commandes. Si une propri\xe9t\xe9 d\u2019\xe9l\xe9ment est modifi\xe9e individuellement via une commande de liste hi\xe9rarchique, la commande de propri\xe9t\xe9 d\u2019objet \xe9quivalente sera sans effet sur cet \xe9l\xe9ment m\xeame si elle est appel\xe9e ult\xe9rieurement. Par exemple, si vous modifiez la couleur d\u2019un \xe9l\xe9ment via la commande ",(0,n.jsx)(s.code,{children:"SET LIST ITEM PROPERTIES"}),", la commande ",(0,n.jsx)(s.code,{children:"OBJECT SET COLOR"})," n\u2019aura aucun effet sur cet \xe9l\xe9ment."]}),"\n",(0,n.jsx)(s.h2,{id:"gestion-des-\xe9l\xe9ments-par-position-ou-par-r\xe9f\xe9rence",children:"Gestion des \xe9l\xe9ments par position ou par r\xe9f\xe9rence"}),"\n",(0,n.jsx)(s.p,{children:"Vous pouvez g\xe9n\xe9ralement travailler de deux mani\xe8res avec le contenu des listes hi\xe9rarchiques : par position ou par r\xe9f\xe9rence."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Lorsque vous travaillez par position, 4D se base sur la position relative des \xe9l\xe9ments dans la liste affich\xe9e \xe0 l'\xe9cran pour les identifier. Le r\xe9sultat sera diff\xe9rent selon que certains \xe9l\xe9ments hi\xe9rarchiques sont d\xe9ploy\xe9s ou non. A noter qu'en cas de multi-repr\xe9sentation, chaque objet de formulaire comporte sa propre configuration d'\xe9l\xe9ments contract\xe9s/d\xe9ploy\xe9s."}),"\n",(0,n.jsxs)(s.li,{children:["Lorsque vous travaillez par r\xe9f\xe9rence, 4D se base sur le num\xe9ro unique ",(0,n.jsx)(s.em,{children:"r\xe9fEl\xe9ment"})," des \xe9l\xe9ments de la liste. Chaque \xe9l\xe9ment peut \xeatre ainsi d\xe9sign\xe9, quelle que soit sa position ou son affichage dans la liste hi\xe9rarchique."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"exploiter-les-num\xe9ros-de-r\xe9f\xe9rence-des-\xe9l\xe9ments-r\xe9fel\xe9ment",children:"Exploiter les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments (r\xe9fEl\xe9ment)"}),"\n",(0,n.jsxs)(s.p,{children:["Chaque \xe9l\xe9ment d'une liste hi\xe9rarchique dispose d'un num\xe9ro de r\xe9f\xe9rence (",(0,n.jsx)(s.em,{children:"r\xe9fEl\xe9ment"}),") de type Entier long. Cette valeur est destin\xe9e uniquement \xe0 votre propre usage : 4D ne fait que la maintenir."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Attention : Vous pouvez utiliser comme num\xe9ro de r\xe9f\xe9rence toute valeur de type entier long, sauf la valeur 0. En effet, pour la plupart des commandes de ce th\xe8me, la valeur 0 permet de d\xe9signer le dernier \xe9l\xe9ment ajout\xe9 \xe0 la liste."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Voici quelques astuces quant \xe0 l'utilisation du num\xe9ro de r\xe9f\xe9rence unique :"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Vous n'avez pas besoin d'identifier chaque \xe9l\xe9ment de fa\xe7on unique (niveau d\xe9butant)."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Premier exemple : vous construisez par programmation un syst\xe8me d'onglets, par exemple, un carnet d'adresses. Comme le syst\xe8me vous retournera le num\xe9ro de l'onglet s\xe9lectionn\xe9, vous n'aurez probablement pas besoin de davantage d'informations. Dans ce cas, ne vous pr\xe9occupez pas des num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments : passez n'importe quelle valeur (hormis 0) dans le param\xe8tre ",(0,n.jsx)(s.em,{children:"r\xe9fEl\xe9ment"}),". Notez que pour un syst\xe8me de carnet d'adresses, vous pouvez pr\xe9d\xe9finir une liste A, B,..., Z en mode D\xe9veloppement. Vous pouvez \xe9galement la cr\xe9er par programmation afin d'\xe9liminer les lettres pour lesquelles il n'y a pas d'enregistrement."]}),"\n",(0,n.jsxs)(s.li,{children:["Deuxi\xe8me exemple : en travaillant avec une base, vous construisez progressivement une liste de mots-cl\xe9s. Vous pouvez sauvegarder la liste \xe0 la fin de chaque session, en utilisant les commandes ",(0,n.jsx)(s.code,{children:"SAVE LIST"})," ou ",(0,n.jsx)(s.code,{children:"LIST TO BLOB"}),", et la recharger au d\xe9but de chaque session, \xe0 l'aide des commandes ",(0,n.jsx)(s.code,{children:"Load list"})," ou ",(0,n.jsx)(s.code,{children:"BLOB to list"}),". Vous pouvez afficher cette liste dans une palette flottante ; lorsque l'utilisateur clique sur un mot-cl\xe9 de la liste, l'\xe9l\xe9ment choisi est ins\xe9r\xe9 dans la zone saisissable s\xe9lectionn\xe9e du process de premier plan. En tout \xe9tat de cause, l'important est que vous ne traitez que l'\xe9l\xe9ment s\xe9lectionn\xe9 (par clic ou glisser-d\xe9poser), car la commande ",(0,n.jsx)(s.code,{children:"Selected list items"}),"vous retourne la position de l'\xe9l\xe9ment que vous devez traiter. En utilisant cette valeur de position, vous obtenez le libell\xe9 de l'\xe9l\xe9ment gr\xe2ce \xe0 la commande ",(0,n.jsx)(s.code,{children:"GET LIST ITEM"}),". Ici aussi, vous n'avez pas besoin d'identifier de fa\xe7on unique chaque \xe9l\xe9ment ; vous pouvez passer n'importe quelle valeur (hormis 0) dans le param\xe8tre ",(0,n.jsx)(s.em,{children:"r\xe9fEl\xe9ment"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Vous avez besoin d'identifier partiellement les \xe9l\xe9ments de la liste (niveau interm\xe9diaire).",(0,n.jsx)(s.br,{}),"\nYou use the item reference number to store information needed when you must work with the item; this point is detailed in the example of the ",(0,n.jsx)(s.code,{children:"APPEND TO LIST"})," command. Dans cet exemple, nous utilisons les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments pour stocker des num\xe9ros d'enregistrements. Cependant, nous devons pouvoir \xe9tablir une distinction entre les \xe9l\xe9ments qui correspondent aux enregistrements [D\xe9partements] et ceux qui correspondent aux enregistrements [Employ\xe9s]."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Vous avez besoin d'identifier les \xe9l\xe9ments de la liste de fa\xe7on unique (niveau avanc\xe9).",(0,n.jsx)(s.br,{}),"\nVous programmez une gestion \xe9labor\xe9e de listes hi\xe9rarchiques, dans laquelle vous devez absolument pouvoir identifier chaque \xe9l\xe9ment de mani\xe8re unique \xe0 tous les niveaux de la liste. Un moyen simple d'impl\xe9menter ce fonctionnement est de maintenir un compteur personnel. Supposons que vous cr\xe9ez une liste ",(0,n.jsx)(s.em,{children:"hlList"})," \xe0 l'aide de la commande ",(0,n.jsx)(s.code,{children:"APPEND TO LIST"}),". A ce stade, vous initialisez un compteur ",(0,n.jsx)(s.em,{children:"vlhCounter"})," \xe0 1. A chaque fois que vous appelez ",(0,n.jsx)(s.code,{children:"APPEND TO LIST"})," ou ",(0,n.jsx)(s.code,{children:"INSERT IN LIST"}),", vous incr\xe9mentez ce compteur ",(0,n.jsx)(s.code,{children:"(vlhCounter:=vlhCounter+1)"}),", et vous passez le compteur comme num\xe9ro de r\xe9f\xe9rence de l'\xe9l\xe9ment. L'astuce consiste \xe0 ne pas d\xe9cr\xe9menter le compteur lorsque vous d\xe9truisez des \xe9l\xe9ments \u2014 le compteur ne peut qu'augmenter. En proc\xe9dant ainsi, vous garantissez l'unicit\xe9 des num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments. Puisque ces num\xe9ros sont des valeurs de type Entier long, vous pouvez ajouter ou ins\xe9rer plus de deux milliards d'\xe9l\xe9ments dans une liste qui a \xe9t\xe9 r\xe9initialis\xe9e... (si vous manipulez d'aussi grandes quantit\xe9s d'\xe9l\xe9ments, cela signifie g\xe9n\xe9ralement que vous devriez utiliser une table plut\xf4t qu'une liste.)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Si vous exploitez les Op\xe9rateurs sur les bits, vous pouvez \xe9galement utiliser les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments pour stocker des informations qui peuvent \xeatre log\xe9es dans un Entier long, c'est-\xe0-dire 2 Entiers, des valeurs de 4 octets ou encore 32 Bool\xe9ens."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"quand-avez-vous-besoin-de-num\xe9ros-de-r\xe9f\xe9rence-uniques-",children:"Quand avez-vous besoin de num\xe9ros de r\xe9f\xe9rence uniques ?"}),"\n",(0,n.jsxs)(s.p,{children:["Dans la plupart des cas, lorsque vous utilisez des listes hi\xe9rarchiques pour des besoins d'interface utilisateur, pour lesquels seul l'\xe9l\xe9ment s\xe9lectionn\xe9 (par un clic ou par glisser-d\xe9poser) est important, vous n'avez pas besoin d'utiliser les num\xe9ros de r\xe9f\xe9rence des \xe9l\xe9ments. Les commandes ",(0,n.jsx)(s.code,{children:"Selected list items"})," et ",(0,n.jsx)(s.code,{children:"GET LIST ITEM"}),"vous fournissent toutes les informations n\xe9cessaires \xe0 la gestion de l'\xe9l\xe9ment s\xe9lectionn\xe9. De plus, des commandes telles que ",(0,n.jsx)(s.code,{children:"INSERT IN LIST"})," et ",(0,n.jsx)(s.code,{children:"DELETE FROM LIST"}),' vous permettent de manipuler la liste de mani\xe8re "relative" \xe0 l\'\xe9l\xe9ment s\xe9lectionn\xe9.']}),"\n",(0,n.jsx)(s.p,{children:"En pratique, vous devez vous pr\xe9occuper des num\xe9ros de r\xe9f\xe9rence d'\xe9l\xe9ments lorsque vous voulez acc\xe9der directement par programmation \xe0 n'importe quel \xe9l\xe9ment de la liste, et pas n\xe9cessairement \xe0 l'\xe9l\xe9ment couramment s\xe9lectionn\xe9."}),"\n",(0,n.jsx)(s.h2,{id:"\xe9l\xe9ment-modifiable",children:"\xc9l\xe9ment modifiable"}),"\n",(0,n.jsxs)(s.p,{children:["Vous pouvez choisir si les \xe9l\xe9ments de la liste hi\xe9rarchique peuvent \xeatre modifi\xe9s par l'utilisateur \xe0 l'aide du raccourci ",(0,n.jsx)(s.strong,{children:"Alt + clic"})," (Windows)/ ",(0,n.jsx)(s.strong,{children:"Option + clic"})," (macOS), ou en effectuant un clic long sur le texte de l'\xe9l\xe9ment."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Quelle que soit la source de donn\xe9es de la liste hi\xe9rarchique, vous pouvez contr\xf4ler l'ensemble de l'objet avec la propri\xe9t\xe9 ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesEntry#enterable",children:"Saisissable"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["En outre, si vous remplissez la liste hi\xe9rarchique \xe0 l'aide d'une liste cr\xe9\xe9e dans l'\xe9diteur de listes, vous contr\xf4lez si un \xe9l\xe9ment d'une liste hi\xe9rarchique est modifiable \xe0 l'aide de l'option ",(0,n.jsx)(s.strong,{children:"\xc9l\xe9ment modifiable"})," dans l'\xe9diteur de listes. Pour plus d'informations, consultez ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv18/4D/18/Definir-les-proprietes-des-enumerations.300-4575487.fr.html",children:"D\xe9finir les propri\xe9t\xe9s des \xe9num\xe9rations "}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesAction#draggable-and-droppable",children:"Draggable"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesAction#draggable-and-droppable",children:"Droppable"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesEntry#entry-filter",children:"Entry Filter"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesBackgroundAndBorder#background-color-fill-color",children:"Fill Color"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesEntry#focusable",children:"Focusable"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesText#font",children:"Font"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Hide focus rectangle"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Horizontal Scroll Bar"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesAction#multi-selectable",children:"Multi-selectable"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Vertical Scroll Bar"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},221020:(e,s,r)=>{var n=r(296540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,r){var n,t={},c=null,a=null;for(n in void 0!==r&&(c=""+r),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(a=s.ref),s)l.call(s,n)&&!d.hasOwnProperty(n)&&(t[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===t[n]&&(t[n]=s[n]);return{$$typeof:i,type:e,key:c,ref:a,props:t,_owner:o.current}}s.Fragment=t,s.jsx=c,s.jsxs=c},474848:(e,s,r)=>{e.exports=r(221020)},944243:(e,s,r)=>{r.d(s,{A:()=>n});const n="data:image/png;base64,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"},28453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>o});var n=r(296540);const i={},t=n.createContext(i);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);