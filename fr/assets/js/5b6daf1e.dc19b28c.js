"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9472"],{942579:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/object-set-rgb-colors","title":"OBJECT SET RGB COLORS","description":"OBJECT SET RGB COLORS ( { ;} objet ; couleurAvantPlan {; couleurArri\xe8rePlan {; couleurArri\xe8rePlanAlt*}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-rgb-colors.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-rgb-colors","permalink":"/docs/fr/commands/object-set-rgb-colors","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-rgb-colors.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-rgb-colors","title":"OBJECT SET RGB COLORS","slug":"/commands/object-set-rgb-colors","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET RESIZING OPTIONS","permalink":"/docs/fr/commands/object-set-resizing-options"},"next":{"title":"OBJECT SET SCROLL POSITION","permalink":"/docs/fr/commands/object-set-scroll-position"}}'),t=r("785893"),l=r("250065");let o={id:"object-set-rgb-colors",title:"OBJECT SET RGB COLORS",slug:"/commands/object-set-rgb-colors",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET RGB COLORS"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"couleurAvantPlan"})," {; ",(0,t.jsx)(n.em,{children:"couleurArri\xe8rePlan"})," {; ",(0,t.jsx)(n.em,{children:"couleurArri\xe8rePlanAlt"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est un champ ou une variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Champ ou Variable (si * est omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"couleurAvantPlan"}),(0,t.jsx)(n.td,{children:"Text, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur de la couleur RVB d'avant-plan"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"couleurArri\xe8rePlan"}),(0,t.jsx)(n.td,{children:"Text, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur de la couleur RVB d'arri\xe8re-plan"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"couleurArri\xe8rePlanAlt"}),(0,t.jsx)(n.td,{children:"Text, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur de la couleur RVB d'arri\xe8re-plan altern\xe9e"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OBJECT SET RGB COLORS"})," modifie les couleurs d'avant-plan et d'arri\xe8re-plan du ou des objet(s) d\xe9fini(s) par le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," et le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),". Lorsque la commande est appliqu\xe9e \xe0 un objet de type list box, un param\xe8tre suppl\xe9mentaire permet de modifier la couleur altern\xe9e des lignes."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", vous sp\xe9cifiez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est le nom d'un objet (une cha\xeene de caract\xe8res). Si le param\xe8tre * est omis, vous sp\xe9cifiez que ",(0,t.jsx)(n.em,{children:"objet"})," est un champ ou un objet. Dans ce cas, vous ne passez pas dans ",(0,t.jsx)(n.em,{children:"objet"})," une cha\xeene de caract\xe8res mais la r\xe9f\xe9rence \xe0 un champ ou \xe0 une variable (champ ou variable objet uniquement). Pour plus d'informations sur les noms d'objets, reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"Objets de formulaires"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,t.jsx)(n.em,{children:"couleurArri\xe8rePlanAlt"})," permet de d\xe9signer une couleur alternative pour l\u2019arri\xe8re-plan (c\u2019est-\xe0-dire le fond) des lignes paires. Ce param\xe8tre n\u2019est utile que lorsque l\u2019objet d\xe9sign\xe9 est de type list box ou colonne de list box. Lorsque ce param\xe8tre est utilis\xe9, la ",(0,t.jsx)(n.em,{children:"couleurArri\xe8rePlan"})," est utilis\xe9e pour le fond des lignes impaires uniquement. Utiliser des couleurs altern\xe9es am\xe9liore la lisibilit\xe9 des tableaux."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"objet"})," d\xe9signe l\u2019objet list box, les couleurs altern\xe9es sont utilis\xe9es dans la totalit\xe9 de la list box. Si ",(0,t.jsx)(n.em,{children:"objet"})," d\xe9signe une colonne de list box, seule cette colonne utilisera les couleurs d\xe9finies."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"D\xe9finition des couleurs"})}),"\n",(0,t.jsxs)(n.p,{children:["Vous passez des valeurs de couleurs RVB dans les param\xe8tres ",(0,t.jsx)(n.em,{children:"couleurAvantPlan"})," et, \xe9ventuellement, ",(0,t.jsx)(n.em,{children:"couleurArri\xe8rePlan"})," et ",(0,t.jsx)(n.em,{children:"couleurArri\xe8rePlanAlt"}),". Les formats suivants sont pris en charge :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Nom du format"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Exemples"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Nom de la couleur CSS"}),(0,t.jsx)(n.td,{children:"Texte"}),(0,t.jsxs)(n.td,{children:["Nom de la couleur CSS standard. ",(0,t.jsx)(n.br,{})," La liste des noms est disponible en ligne, comme par exemple sur le site web ",(0,t.jsx)(n.a,{href:"https://htmlcolorcodes.com/color-names/",children:"htmlcolorcodes.com"}),'. Utilisez "transparent" pour obtenir un fond transparent (peut \xeatre utilis\xe9 uniquement avec les param\xe8tres ',(0,t.jsx)(n.em,{children:"couleurArri\xe8rePlan"})," et ",(0,t.jsx)(n.em,{children:"couleurArri\xe8rePlanAlt"}),'). Utilisez "" (cha\xeene vide) dans ',(0,t.jsx)(n.em,{children:"couleurAvantPlan"})," et/ou couleurArri\xe8rePlan pour laisser la couleur inchang\xe9e."]}),(0,t.jsx)(n.td,{children:'"red", "cyan", "lightblue"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'Syntaxe "#rrggbb" de la couleur CSS'}),(0,t.jsx)(n.td,{children:"Texte"}),(0,t.jsx)(n.td,{children:"Code couleur standard CSS2 en notation hexad\xe9cimale : rr = Composante rouge de la couleur gg = Composante verte de la couleur bb = Composante bleue de la couleur"}),(0,t.jsx)(n.td,{children:'"#ff0000", "#00FFFF", "#ADD8E6"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'Syntaxe "rgb(r,g,b)" de la couleur CSS'}),(0,t.jsx)(n.td,{children:"Texte"}),(0,t.jsxs)(n.td,{children:["Code couleur standard CSS2 en notation rvb :",(0,t.jsx)(n.br,{})," r = Composante rouge de la couleur (0...255) g = Composante verte de la couleur (0...255) b = Composante bleue de la couleur (0...255)"]}),(0,t.jsx)(n.td,{children:'"rgb(255,255,0)", "rgb(255,0,0)"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Valeur RVB de 4 octets"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsxs)(n.td,{children:["Entier long de 4 octets (format 0x00rrggbb). Valeurs hexad\xe9cimales :",(0,t.jsx)(n.br,{})," rr = Composante rouge de la couleur gg = Composante verte de la couleur bb = Composante bleue de la couleur"]}),(0,t.jsx)(n.td,{children:"0x00000000, 0x00FF7F7F"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'Constante couleur "syst\xe8me" 4D'}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsxs)(n.td,{children:["Couleurs utilis\xe9es par 4D pour dessiner des objets avec des couleurs automatiques. Constantes disponibles (du th\xe8me ",(0,t.jsx)(n.em,{children:"FIXER COULEUR RVB"}),"):",(0,t.jsx)(n.br,{})," Background color Background color none (cette constante peut \xeatre utilis\xe9e uniquement avec les param\xe8tres ",(0,t.jsx)(n.em,{children:"couleurArri\xe8rePlan"})," et couleurArri\xe8rePlanAlt) Dark shadow color Disable highlight item color Foreground color Highlight menu background color Highlight menu text color Highlight text background color Highlight text color Light shadow color"]}),(0,t.jsx)(n.td,{children:(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.em,{children:"Note :"})," Les couleurs automatiques d\xe9pendent du syst\xe8me et du type d'objet auxquels elles sont affect\xe9es."]})})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:["Voici un formulaire contenant deux variables non saisissables, ",(0,t.jsx)(n.em,{children:"vsColorValue"})," et ",(0,t.jsx)(n.em,{children:"vsColor"})," ainsi que trois thermom\xe8tres, ",(0,t.jsx)(n.em,{children:"thRouge"}),", ",(0,t.jsx)(n.em,{children:"thVert"})," et ",(0,t.jsx)(n.em,{children:"thBleu"})," :"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(724450).Z+"",width:"952",height:"532"})}),"\n",(0,t.jsx)(n.p,{children:"Les m\xe9thodes associ\xe9es \xe0 ces objets sont les suivantes :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode objet de la variable non saisissable vsColorValue\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsColorValue:="0x00000000"\n\xa0End case\n\xa0\n\xa0\xa0// M\xe9thode objet de la variable non saisissable vsColor\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsColor:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET RGB COLORS(vsColor;0x00FFFFFF;0x0000)\n\xa0End case\n\xa0\n\xa0\xa0// M\xe9thode objet du thermom\xe8tre thRouge\n\xa0CLIC SUR THERMOMETRE COULEUR\n\xa0\n\xa0\xa0// M\xe9thode objet du thermom\xe8tre thVert\n\xa0CLIC SUR THERMOMETRE COULEUR\n\xa0\n\xa0\xa0// M\xe9thode objet du thermom\xe8tre thBleu\n\xa0CLIC SUR THERMOMETRE COULEUR\n'})}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode projet appel\xe9e par les trois thermom\xe8tres est la suivante :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode projet CLIC SUR THERMOMETRE COULEUR\n\xa0OBJECT SET RGB COLORS(vsColor;0x00FFFFFF;(thRouge\xa0<<\xa016)+(thVert\xa0<<\xa08)+thBleu)\n\xa0vsColorValue:=String((thRouge\xa0<<\xa016)+(thVert\xa0<<\xa08)+thBleu;"\xa0&\xa0x")\n\xa0If(thRouge=0)\n\xa0\xa0\xa0\xa0vsColorValue:=Substring(vsColorValue;1;2)+"0000"+Substring(vsColorValue;3)\n\xa0End if\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Notez l'utilisation des ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})})," pour le calcul des valeurs des couleurs \xe0 partir de celles des thermom\xe8tres."]}),"\n",(0,t.jsx)(n.p,{children:"En ex\xe9cution, le formulaire a l'aspect suivant :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(645138).Z+"",width:"1184",height:"808"})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Passage du fond en transparent avec couleur de police claire :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(779175).Z+"",width:"153",height:"50"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET RGB COLORS(*;"maVar";Light shadow color;Background color none)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(860969).Z+"",width:"152",height:"49"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/object-get-rgb-colors",children:"OBJECT GET RGB COLORS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/select-rgb-color",children:"Select RGB Color"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"628"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},779175:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAyCAIAAADA5e7AAAACrklEQVR42u2bP2/TQBiHz9C9ERIDCCSEbIbKn8AeYbFh6NQNZUHJVluVulVCSNm62Aso3kIlkDLTeGK0P0HUofZQCSQkJvcTBPvyBzuJy4W4cvrL+0yX+LXv4ifve2fHkZIkYQQE9+oeAFEZ5BIHcokDucRhJ/9i922j7vEQq3F99nfpSnmJA7nEgVziQC5xIJc4kEscyCUO5BIHcokDucRhRzDuSn4Zv3mfJNd1D3i7aDR25W8fnsXfRYJFXd4/+vrqycO6P9o2Ej8/Y4ePRSKpxuJALnFYzaXflubQ3fi2hha7+lqHTwd7i6PbQFZzaXRHnEGLaU6UtQJLFtjvv06rbAWChyc4VGNxqMhlVg/HtP18ccwSUtcl02OhrfCN88GlR8llM2/4k42TDgoVvhCwpAKU9ghFJS79ttI/iMbVl3VcZgUD1T710/dNNgiCYFaTu8ZCcO68+6e2OhgX8SywQGh3WI9Xd8+UmryZtsOsl2JA5DC7WbRZ3iMWVbiML4fjtEsxvfAiyibWATOl1OSClCXBU5Q9zTNL5lXN6fGp09hPvxYHr/ksmrWHl3ExQLZOWoWj3tQjFlXNl61JQi3LKdHgbLEz6rHmeqUwU7fe8O4qVbiUX6jMK9YuXl3TimYuSFkSXNxuBZGjzdJNmLB/zneJz/thaz/v6189wlBJXhrdbJZSpssL19XNoXNsMOPYGfKimVbD2dpnLjjnenr1qtjqycrXIpp60ZzsPF/Yy3vEQkpy/w264fnYHx9/P93c+7Hpt6CzF2FejMZXv+Ty+7H0fCwm5BIH0d+8NhujO4JdnYoj6vLB58Of7z7VPdpt5NGXI8FI0bUPsZnQ2gcTcokDucSBXOJALnEglziQSxzIJQ7kEgdyiQO5xKFwP5a401Be4kAucSCXOPwBd61Pk/urN9EAAAAASUVORK5CYII="},860969:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAxCAIAAACps/dQAAACw0lEQVR42u2bsWsaURzHv7bZIxkKbSNEOJfQvWDpIO2StDhJtqSbYoeohUwJlA5ZuuhlqChZYocuDkWKTiVDqeA/0KEeGGjI0KWXv8C+d3rkrmJ8F69c7ufvw4Hvzt/j93xff997Ps6IaZpgws+doAfA+AMLSQQWkggsJBGWnCfL29Ggx8N44/LjeK3KFUkEFpIILCQRWEgisJBEYCGJwEISgYUkAgtJBBaSCEuKcWfaM+PlW9O8DHrAi0U0uqx9ebdmfJ0ZqSrk3Tefnr++F/TnWkSMowvsPpgZxtZKBBaSCB6F3B+i5T52kv9raPEKWn3Eb9w/O1/3kOFRyMMI0uLICetGwWo3ugrdbjSngyLSCQyCnqGQwNZKBJ+ElDY4Mts2kETVttxUG9U+WjVAgz7EfnYi2InVcfRWCo46thqpytVbO323sbsDJt1+akY6+CJkFvqLsdOWxSwD+RwyB/J6SbQTV1Z8WJ8Idkx66gDnOcu6Izj9J4WGLVhdOigNgVfjtsziDijoyJy4bXx6RkL4IWR8fVxw4itf2kDsEVCXUyYKsbypEGxz9hOPa1Mm2sD7onw9/Szb37p2O2FrZgeIO2tPw5paRkKobgjMooP05rzBcnVTtGxTQ3myKBVJYnXO4YUSPypy8APYcFeSZarCUUtthWA3jQSaBmJeDVDDU6tLfAsPO64vwcyMJPClIusorEP/jox11tOxWkDzCdBFcw/VCvLC7mrS3Ho5eZt0BVtXRoiVkbA+iSggYZ6ePFBofyJLWSCq+brhOTISImI6/sRzzXOtvz78jt3evVaxat1DgeaPTuPoQpu+18rPtVKDhSQCDSHrvJmnuthZaeyeH/8JerSLyP3jvEqY6mKHuZ3wYocaLCQRWEgisJBEYCGJwEISgYUkAgtJBBaSCCwkEVhIIrj2WpnwwhVJBBaSCH8Bdgnx5QmCuAYAAAAASUVORK5CYII="},724450:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict4278097.en-bf48035b2eae013032281d59e3fe41e5.png"},645138:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict4278099.en-edd0ab9277daefaf4042727ea6357a21.png"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var s=r(667294);let t={},l=s.createContext(t);function o(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);