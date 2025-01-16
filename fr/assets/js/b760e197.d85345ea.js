"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82461"],{803992:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"commands-legacy/equal-pictures","title":"Equal pictures","description":"Equal pictures ( image1 ; image2 ; masque ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/equal-pictures.md","sourceDirName":"commands-legacy","slug":"/commands/equal-pictures","permalink":"/docs/fr/20-R7/commands/equal-pictures","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fequal-pictures.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"equal-pictures","title":"Equal pictures","slug":"/commands/equal-pictures","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE THUMBNAIL","permalink":"/docs/fr/20-R7/commands/create-thumbnail"},"next":{"title":"Get picture file name","permalink":"/docs/fr/20-R7/commands/get-picture-file-name"}}'),t=s("785893"),r=s("250065");let a={id:"equal-pictures",title:"Equal pictures",slug:"/commands/equal-pictures",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Equal pictures"})," ( ",(0,t.jsx)(n.em,{children:"image1"})," ; ",(0,t.jsx)(n.em,{children:"image2"})," ; ",(0,t.jsx)(n.em,{children:"masque"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"image1"}),(0,t.jsx)(n.td,{children:"Picture, Picture"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Image source originale"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"image2"}),(0,t.jsx)(n.td,{children:"Picture, Picture"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Image \xe0 comparer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"masque"}),(0,t.jsx)(n.td,{children:"Picture, Picture"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Masque r\xe9sultant"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Vrai si les deux images sont identiques, sinon Faux"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Equal pictures"})," vous permet de comparer pr\xe9cis\xe9ment deux images, tant au niveau de leurs dimensions que de leur contenu."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"image1"})," l\u2019image source et dans ",(0,t.jsx)(n.em,{children:"image2"})," une image \xe0 comparer \xe0 l\u2019image source."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si les deux images sont de dimensions diff\xe9rentes, la commande retourne ",(0,t.jsx)(n.strong,{children:"Faux"})," et le param\xe8tre ",(0,t.jsx)(n.em,{children:"masque"})," contient une image vide."]}),"\n",(0,t.jsxs)(n.li,{children:["Si les deux images sont de m\xeame dimension mais ont des contenus diff\xe9rents, la commande retourne ",(0,t.jsx)(n.strong,{children:"Faux"})," et le param\xe8tre ",(0,t.jsx)(n.em,{children:"masque"})," contient l\u2019image masque r\xe9sultante de la comparaison des deux images. La comparaison est effectu\xe9e par pixel. Chaque pixel diff\xe9rent appara\xeet en blanc sur fond noir."]}),"\n",(0,t.jsxs)(n.li,{children:["Si les deux images sont identiques, la commande retourne ",(0,t.jsx)(n.strong,{children:"Vrai"})," et le param\xe8tre ",(0,t.jsx)(n.em,{children:"masque"})," contient une image noire."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"La variable syst\xe8me OK prend la valeur 1 si les deux images ont pu \xeatre compar\xe9es. En cas d'anomalie, notamment si au moins une des deux images n'est pas initialis\xe9e (image vide), la variable OK prend la valeur 0."}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Dans l\u2019exemple suivant, on compare deux images (pict1 et pict2) et on affiche le masque r\xe9sultant :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(317868).Z+"",width:"735",height:"421"})}),"\n",(0,t.jsxs)(n.p,{children:["Le code du bouton ",(0,t.jsx)(n.strong,{children:"Compare"})," est le suivant :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$equal :=Equal pictures($pict1;$pict2;$mask)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1196"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},317868:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/pict847365.fr-371c587a72091d82fdf973eaf1fc6e05.png"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var i=s(667294);let t={},r=i.createContext(t);function a(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);