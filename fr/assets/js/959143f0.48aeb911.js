"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42303"],{452157:function(e,s,n){n.r(s),n.d(s,{default:()=>c,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-set-view-properties","title":"WP SET VIEW PROPERTIES","description":"WP SET VIEW PROPERTIES ( { ;} zoneWP ; attributsVueWP* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-set-view-properties.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-set-view-properties","permalink":"/docs/fr/20-R7/WritePro/commands/wp-set-view-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-set-view-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-set-view-properties","title":"WP SET VIEW PROPERTIES","slug":"/WritePro/commands/wp-set-view-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SET TEXT","permalink":"/docs/fr/20-R7/WritePro/commands/wp-set-text"},"next":{"title":"WP Table append row","permalink":"/docs/fr/20-R7/WritePro/commands/wp-table-append-row"}}'),i=n("785893"),t=n("250065");let l={id:"wp-set-view-properties",title:"WP SET VIEW PROPERTIES",slug:"/WritePro/commands/wp-set-view-properties",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function u(e){let s={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"WP SET VIEW PROPERTIES"})," ( {* ;} ",(0,i.jsx)(s.em,{children:"zoneWP"})," ; ",(0,i.jsx)(s.em,{children:"attributsVueWP"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"*"}),(0,i.jsx)(s.td,{children:"Op\xe9rateur"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Si sp\xe9cifi\xe9, zoneWP est un nom d'objet de formulaire (cha\xeene). Si omis, zoneWP est un champ ou une variable objet"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"zoneWP"}),(0,i.jsx)(s.td,{children:"Text, Object"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Nom d'objet de formulaire (si * sp\xe9cifi\xe9) ou champ ou variable objet 4D Write Pro (si * omis)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"attributsVueWP"}),(0,i.jsx)(s.td,{children:"Object"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Attributs vue \xe0 modifier"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"WP SET VIEW PROPERTIES"})," vous permet de fixer dynamiquement une ou plusieurs propri\xe9t\xe9s de vue pour la zone 4D Write Pro ",(0,i.jsx)(s.em,{children:"zoneWP"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(s.em,{children:"zoneWP"})," est un nom d\u2019objet de formulaire (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(s.em,{children:"zoneWP"})," est un document 4D Write Pro (champ ou variable objet). Cette commande ne peut \xeatre utilis\xe9e que si ",(0,i.jsx)(s.em,{children:"zoneWP"})," est associ\xe9e \xe0 un objet de formulaire (i.e. elle est affich\xe9e dans le formulaire/la page courant(e)), sur n'importe quelle page de formulaire. Si le document 4D Write Pro est affich\xe9 dans plusieurs objets de formulaire, il est n\xe9cessaire d'utiliser le param\xe8tre ",(0,i.jsx)(s.em,{children:"*"})," pour indiquer la vue que vous souhaitez fixer."]}),"\n",(0,i.jsxs)(s.p,{children:["Dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"propsVueWP"}),", passez un objet dans lequel chaque attribut est une propri\xe9t\xe9 de vue que vous souhaitez modifier dans la zone 4D Write Pro. Les propri\xe9t\xe9s de vue qui ne sont pas incluses dans l'objet propsVueWP conserveront leurs valeurs pr\xe9c\xe9dentes. Vous pouvez utiliser les constantes suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Constante"}),(0,i.jsx)(s.th,{children:"Valeur"}),(0,i.jsx)(s.th,{children:"Comment"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk display formula as symbol"}),(0,i.jsx)(s.td,{children:"displayFormulaAsSymbol"}),(0,i.jsxs)(s.td,{children:["Affiche les r\xe9f\xe9rences de formules sous la forme d'un symbole ",(0,i.jsx)(s.img,{src:n(965585).Z+"",width:"14",height:"19"}),". Ne fonctionne que si les formules sont affich\xe9es en tant que r\xe9f\xe9rences (voir wk visible references). Valeurs possibles : Vrai/Faux"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk formula highlight"}),(0,i.jsx)(s.td,{children:"formulaHighlight"}),(0,i.jsx)(s.td,{children:"Mode d'affichage de la surbrillance de la formule. Valeurs possibles : wk references (par d\xe9faut) : les formules affich\xe9es en tant que r\xe9f\xe9rences sont mises en surbrillance wk values : les formules affich\xe9es sous forme de valeurs sont mises en surbrillance wk always : Les formules sont toujours surlign\xe9es, quel que soit leur mode d'affichage wk never : Les formules ne sont jamais mises en \xe9vidence, quel que soit leur mode d'affichage La couleur de la formule en surbrillance peut \xeatre d\xe9finie par wk formula highlight color."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk formula highlight color"}),(0,i.jsx)(s.td,{children:"formulaHighlightColor"}),(0,i.jsx)(s.td,{children:'Couleur des formules en surbrillance (voir wk formula highlight). Valeurs possibles : une cha\xeene de couleur CSS ("#010101" ou "#FFFFFF" ou "red"). une valeur d\'entier long de couleur 4D'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk page view mode"}),(0,i.jsx)(s.td,{children:"pageMode"}),(0,i.jsx)(s.td,{children:'Mode d\'affichage du document 4D Write Pro dans la zone formulaire \xe0 l\'\xe9cran. Valeurs possibles (cha\xeene) : "draft" : Mode brouillon avec propri\xe9t\xe9s basiques du document "page" : Mode d\'affichage le plus complet, qui inclut le contour de la page, l\'orientation, les marges, les sauts de page, les en-t\xeates et les pieds de page, etc. "embedded" : Mode d\'affichage adapt\xe9 aux zones incluses'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk resolution"}),(0,i.jsx)(s.td,{children:"dpi"}),(0,i.jsx)(s.td,{children:"R\xe9solution d'\xe9cran pour le contenu de la zone 4D Write Pro. Valeurs possibles : wk auto (0) Nombre sup\xe9rieur \xe0 1"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk spell enable"}),(0,i.jsx)(s.td,{children:"spellEnabled"}),(0,i.jsx)(s.td,{children:"Active la correction orthographique. Valeurs possibles : True/False"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk visible background and anchored elements"}),(0,i.jsx)(s.td,{children:"visibleBackground"}),(0,i.jsx)(s.td,{children:"Affiche ou exporte les images de fond, la couleur de fond, les images ancr\xe9es et les zones de texte (pour l'affichage, effet visible uniquement en mode d'affichage Page ou Inclus). Valeurs possibles : True/False"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk visible empty images"}),(0,i.jsx)(s.td,{children:"visibleEmptyImages"}),(0,i.jsx)(s.td,{children:"Affiche ou exporte un rectangle noir par d\xe9faut pour les images qui ne peuvent pas \xeatre charg\xe9es ou calcul\xe9es (images vides ou images sous un format non pris en charge). Valeurs possibles : True/False. Valeur par d\xe9faut : True Si la valeur est False, les \xe9l\xe9ments d'image manquants ne seront pas affich\xe9s du tout, m\xeame s'ils ont des bordures, une largeur, une hauteur ou un arri\xe8re-plan ; cela peut avoir une incidence sur la mise en page des images en ligne."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk visible footers"}),(0,i.jsx)(s.td,{children:"visibleFooters"}),(0,i.jsx)(s.td,{children:"Affiche ou exporte les pieds de page (pour l'affichage, effet visible uniquement en mode d'affichage Page). Valeurs possibles : True/False"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk visible headers"}),(0,i.jsx)(s.td,{children:"visibleHeaders"}),(0,i.jsx)(s.td,{children:"Affiche ou exporte les en-t\xeates (pour l'affichage, effet visible uniquement en mode d'affichage Page). Valeurs possibles : True/False"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk visible hidden characters"}),(0,i.jsx)(s.td,{children:"visibleHiddenChars"}),(0,i.jsx)(s.td,{children:"Affiche les caract\xe8res cach\xe9s. Valeurs possibles : True/False"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk visible horizontal ruler"}),(0,i.jsx)(s.td,{children:"visibleHorizontalRuler"}),(0,i.jsx)(s.td,{children:"Affiche la r\xe8gle horizontale. Valeurs possibles : True/False"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk visible HTML WYSIWYG"}),(0,i.jsx)(s.td,{children:"htmlWYSIWIGEnabled"}),(0,i.jsx)(s.td,{children:"Active la vue HTML WYSIWYG. Valeurs possibles : True/False"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk visible page frames"}),(0,i.jsx)(s.td,{children:"visiblePageFrames"}),(0,i.jsx)(s.td,{children:"Affiche les cadres de la page (effet visible uniquement en mode d'affichage Page). Valeurs possibles : True/False"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk visible references"}),(0,i.jsx)(s.td,{children:"visibleReferences"}),(0,i.jsx)(s.td,{children:"Affiche ou exporte toutes les expressions 4D ins\xe9r\xe9es dans le document en tant que r\xe9f\xe9rences. Valeurs possibles : True/False"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk visible vertical ruler"}),(0,i.jsx)(s.td,{children:"visibleVerticalRuler"}),(0,i.jsx)(s.td,{children:"Affiche la r\xe8gle verticale (effet visible uniquement en mode d'affichage Page). Valeurs possibles : True/False"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"wk zoom"}),(0,i.jsx)(s.td,{children:"zoom"}),(0,i.jsx)(s.td,{children:"Pourcentage de zoom pour l'affichage du contenu de la zone 4D Write Pro. Valeur possible : Nombre sup\xe9rieur \xe0 1"})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"Des modifications peuvent \xeatre apport\xe9es \xe0 toutes les propri\xe9t\xe9s \xe0 tout moment, mais certaines ne sont prises en compte que si un mode d'affichage compatible avec 4D Write Pro est utilis\xe9. Ainsi, m\xeame si une propri\xe9t\xe9 de vue est modifi\xe9, la modification n'est pas n\xe9cessairement visible dans le mode d'affichage courant."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," Pour plus d'informations sur les propri\xe9t\xe9s de vue, veuillez consulter la page ",(0,i.jsx)(s.em,{children:"D\xe9finir une zone 4D Write Pro"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Une fois fix\xe9s pour ",(0,i.jsx)(s.em,{children:"zoneWP"})," \xe0 l'aide de cette commande, les propri\xe9t\xe9s de vue sont appliqu\xe9es et la zone de formulaire est utilis\xe9e tant qu'ils ne sont pas modifi\xe9s par un autre appel. Les modifications apport\xe9es aux propri\xe9t\xe9s ne sont pas sauvegard\xe9es avec le document ou le formulaire."]}),"\n",(0,i.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(s.p,{children:"Vous souhaitez fixer certaines propri\xe9t\xe9s de vue pour une zone 4D Write Pro :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0var $viewProps : Object\n\xa0$viewProps:=New object\n\xa0\n\xa0$viewProps[wk page view mode]:="page"\n\xa0\xa0// ou $viewProps.pageMode="page"\n\xa0\n\xa0$viewProps[wk visible horizontal ruler]:=True\n\xa0\xa0// ou $viewProps.visibleHorizontalRuler:=Vrai\n\xa0\n\xa0$viewProps[wk visible vertical ruler]:=True\n\xa0\xa0// ou $viewProps.visibleVerticalRuler:=Vrai\n\xa0\n\xa0WP SET VIEW PROPERTIES(*;"4DWPArea";$viewProps)\n'})}),"\n",(0,i.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-get-view-properties",children:"WP Get view properties"})})]})}function c(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},965585:function(e,s,n){n.d(s,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAATCAIAAAAvYqvDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGTSURBVDhPY3z27BkDcYAJShMBSFCK5oDfX57dvnL79U92USVNZVl+dqgwGCBM/XBlWaGjkWVC76YjR47snVXmaKIbPOnkm99QabjSD0frXRLOui08c3nX3MZEW3EG0ejlZ/YU/651jF95D6Ya6IBn52Z4SCWsuAZiPnt2cYaH39xrDx8+BHGurU6V0qzdC2aDTL21deKvqjw7AZDOnx+fP3vJy/jr008Qj0HAuqTLoH/O4c9ANlDpgzObeLyMJMBSDA8OL9n76Nza2ZuufIAI8Nr6h+w6fwfIgrhVW0YaTDMwqPtkBSrZJFQnWohCRViZWd9++gZkAJUyM7NdfPAYIo4FfP72XllCCMgAKpU1D2RZuPM6IlRQwIvdC/f7mKkAWSAHKPhWOi6uWw0PFAT4fW9ZbgVba7wxK4gHCoZnzx4e6XcQ1slaevQWOFxA4P6JpbnGwjrFm6GB+AwRsb/fXFzdWtCw/o2IrAAzw9eXL/ltcxqbM+2kwCYCAUYi/P3l7ftvf5m5BIV5YGqgYIDTKwMDAJVMvdE9VEl9AAAAAElFTkSuQmCC"},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return l}});var r=n(667294);let i={},t=r.createContext(i);function l(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);