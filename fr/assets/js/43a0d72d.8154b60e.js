"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58075"],{478265:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-set-attributes","title":"WP SET ATTRIBUTES","description":"WP SET ATTRIBUTES ( objCible ; nomAttribut ; valeurAttribut {; nomAttribut2 ; valeurAttribut2 ; ... ; nomAttributN ; valeurAttributN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-set-attributes.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-set-attributes","permalink":"/docs/fr/20-R7/WritePro/commands/wp-set-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-set-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-set-attributes","title":"WP SET ATTRIBUTES","slug":"/WritePro/commands/wp-set-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Selection range","permalink":"/docs/fr/20-R7/WritePro/commands/wp-selection-range"},"next":{"title":"WP SET DATA CONTEXT","permalink":"/docs/fr/20-R7/WritePro/commands/wp-set-data-context"}}'),s=n("785893"),i=n("250065");let a={id:"wp-set-attributes",title:"WP SET ATTRIBUTES",slug:"/WritePro/commands/wp-set-attributes",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"WP SET ATTRIBUTES"})," ( ",(0,s.jsx)(t.em,{children:"objCible"})," ; ",(0,s.jsx)(t.em,{children:"nomAttribut"})," ; ",(0,s.jsx)(t.em,{children:"valeurAttribut"})," {; ",(0,s.jsx)(t.em,{children:"nomAttribut2"})," ; ",(0,s.jsx)(t.em,{children:"valeurAttribut2"})," ; ... ; ",(0,s.jsx)(t.em,{children:"nomAttributN"})," ; ",(0,s.jsx)(t.em,{children:"valeurAttributN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objCible"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Plage ou \xe9l\xe9ment ou document 4D Write Pro"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nomAttribut"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Nom d'attribut dont vous souhaitez fixer la valeur"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"valeurAttribut"}),(0,s.jsx)(t.td,{children:"Text, Number, Object, Collection, Picture, Date"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Nouvelle valeur de l'attribut"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["La commande ",(0,s.jsx)(t.strong,{children:"WP SET ATTRIBUTES"})," vous permet de fixer la valeur d'un ou plusieurs attribut(s) dans une plage, un \xe9l\xe9ment ou un document 4D Write Pro. Cette commande donne acc\xe8s \xe0 tous les types d'attributs internes de 4D Write Pro : caract\xe8re, paragraphe, tableau, document ou image."]}),"\n",(0,s.jsxs)(t.p,{children:["Dans ",(0,s.jsx)(t.em,{children:"objCible"}),", vous pouvez passer :"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"un objet plage 4D Write Pro, ou"}),"\n",(0,s.jsx)(t.li,{children:"un \xe9l\xe9ment (en-t\xeate / pied / corps / tableau / ligne / image en ligne ou ancr\xe9e / paragraphe / section / sous-section / feuille de style), ou"}),"\n",(0,s.jsx)(t.li,{children:"un document 4D Write Pro."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Dans ",(0,s.jsx)(t.em,{children:"nomAttribut"}),", passez le nom de l'attribut \xe0 modifier pour la cible et dans ",(0,s.jsx)(t.em,{children:"valeurAttribut"}),", passez la valeur \xe0 d\xe9finir. Pour une liste compl\xe8te des attributs que vous pouvez passer dans ",(0,s.jsx)(t.em,{children:"nomAttribut"})," ainsi que les valeurs que vous pouvez passer dans ",(0,s.jsx)(t.em,{children:"valeurAttribut"}),", veuillez vous r\xe9f\xe9rer \xe0 la section ",(0,s.jsx)(t.em,{children:"Attributs 4D Write Pro"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Vous pouvez passer autant de paires ",(0,s.jsx)(t.em,{children:"nomAttribut"})," / ",(0,s.jsx)(t.em,{children:"valeurAttribut"})," que vous voulez."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note :"})," Si vous devez d\xe9finir plusieurs attributs pour la m\xeame cible, il est plus optimis\xe9 d'effectuer un appel unique \xe0 ",(0,s.jsx)(t.strong,{children:"WP SET ATTRIBUTES"})," avec toutes les paires attributs/valeurs, que d'appeler plusieurs fois ",(0,s.jsx)(t.strong,{children:"WP SET ATTRIBUTES"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(t.p,{children:"Dans cette zone 4D Write Pro, vous s\xe9lectionnez un mot :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(519656).Z+"",width:"497",height:"286"})}),"\n",(0,s.jsx)(t.p,{children:"Si vous ex\xe9cutez le code suivant :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0$range:=WP Get selection(*;"WParea")\xa0//r\xe9cup\xe9rer la plage s\xe9lectionn\xe9e\n\xa0\n\xa0\xa0// fixer le d\xe9calage d\'ombre en pt pour la s\xe9lection\n\xa0WP SET ATTRIBUTES($range;wk text shadow offset;1)\n\xa0\xa0//d\xe9finir la marge int\xe9rieure du paragraphe\n\xa0WP SET ATTRIBUTES($range;wk padding;1)\n\xa0\xa0//d\xe9finir une bordure de 10 pt\n\xa0WP SET ATTRIBUTES($range;wk border style;wk solid;wk border width;10)\n\xa0\xa0//d\xe9finir les couleurs de bordure\n\xa0WP SET ATTRIBUTES($range;wk border color;"blue";wk border color bottom;"#00FA9A";wk border color right;"#00FA9A")\n'})}),"\n",(0,s.jsx)(t.p,{children:"Vous obtenez le r\xe9sultat suivant :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(957431).Z+"",width:"497",height:"416"})}),"\n",(0,s.jsx)(t.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(t.p,{children:"Cet exemple illustre le r\xf4le des constantes wk inside et wk outside :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0$wpRange:=WP Get selection(writeProdoc)\n\xa0WP SET ATTRIBUTES($wpRange;wk border style+wk inside;wk dotted)\n\xa0WP SET ATTRIBUTES($wpRange;wk border style+wk outside;wk solid)\n\xa0WP SET ATTRIBUTES($wpRange;wk border color+wk outside;"#00FA9A")\n'})}),"\n",(0,s.jsx)(t.p,{children:"En supposant que tout le contenu \xe9tait s\xe9lectionn\xe9, le r\xe9sultat est :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(876459).Z+"",width:"519",height:"282"})}),"\n",(0,s.jsx)(t.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,s.jsx)(t.p,{children:"Vous souhaitez d\xe9finir une image de fond pour le document :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var WParea : Object\n\xa0WParea:=WP New\n\xa0\n\xa0READ PICTURE FILE("C:\\\\Pictures\\\\boats.jpg";$picture)\n\xa0\n\xa0WP SET ATTRIBUTES(WParea;wk background image;$picture)\n'})}),"\n",(0,s.jsx)(t.p,{children:"Le r\xe9sultat est le suivant :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(146849).Z+"",width:"929",height:"1209"})}),"\n",(0,s.jsx)(t.p,{children:"Vous souhaitez d\xe9finir une image de fond qui recouvre la totalit\xe9 de la zone d'impression :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var WParea : Object\n\xa0WParea:=WP New\n\xa0\n\xa0READ PICTURE FILE("C:\\\\Pictures\\\\boats.jpg";$picture)\n\xa0\n\xa0WP SET ATTRIBUTES(WParea;wk background image;$picture)\n\xa0WP SET ATTRIBUTES(WParea;wk background clip;wk paper box)\n\xa0WP SET ATTRIBUTES(WParea;wk background origin;wk paper box)\n'})}),"\n",(0,s.jsx)(t.p,{children:"Le r\xe9sultat est le suivant :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(56197).Z+"",width:"930",height:"1208"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"})," : La valeur wk paper box peut \xeatre appliqu\xe9e uniquement aux documents ou aux sections."]}),"\n",(0,s.jsx)(t.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,s.jsx)(t.p,{children:"Vous souhaitez d\xe9finir des tabulations \xe0 intervalles vari\xe9s et d\xe9finir un caract\xe8re comme \xe9tant le caract\xe8re principal pour la diff\xe9rente tabulation :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0$tab1:=New object()\n\xa0$tab1[wk type]:=wk left\n\xa0$tab1[wk offset]:="3cm"\n\xa0$tab1[wk leading]:=""\n\xa0\n\xa0$tab2:=New object()\n\xa0$tab2[wk type]:=wk center\n\xa0$tab2[wk offset]:="8cm"\n\xa0$tab2[wk leading]:=""\n\xa0\n\xa0$tab3:=New object()\n\xa0$tab3[wk type]:=wk right\n\xa0$tab3[wk offset]:="12cm"\n\xa0$tab3[wk leading]:="."\n\xa0\n\xa0$_tabs:=New collection($tab1;$tab2;$tab3)\n\xa0WP SET ATTRIBUTES(wpArea;wk tabs;$_tabs)\n'})}),"\n",(0,s.jsx)(t.p,{children:"Le r\xe9sultat est du type :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(255022).Z+"",width:"903",height:"280"})}),"\n",(0,s.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Attributs 4D Write Pro"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/20-R7/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"wp-reset-attributes.md",children:"WP RESET ATTRIBUTES"})]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},519656:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict2643639.en-bc19ba21b2a04a6458119054fbb3c295.png"},957431:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict2643642.en-0233353f6bad20669469ae6fdbefc392.png"},876459:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict2821715.en-7c7e1af2be6980c3402bb508c021fb75.png"},146849:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict3514231.en-46d2c539799f5d0e85d2c69910adf85f.png"},56197:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict3514233.en-e2399b1a60b8eff205d2192ae0493b08.png"},255022:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict4251559.en-0b3a188b2a5dbc3152eccb4ef3f4aee6.png"},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var r=n(667294);let s={},i=r.createContext(s);function a(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);