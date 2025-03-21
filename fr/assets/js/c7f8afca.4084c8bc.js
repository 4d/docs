"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18299"],{334993:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/union","title":"UNION","description":"UNION ( ensemble1 ; ensemble2 ; r\xe9sultat )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/union.md","sourceDirName":"commands-legacy","slug":"/commands/union","permalink":"/docs/fr/commands/union","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Funion.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"union","title":"UNION","slug":"/commands/union","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAVE SET","permalink":"/docs/fr/commands/save-set"},"next":{"title":"USE SET","permalink":"/docs/fr/commands/use-set"}}'),t=s("785893"),l=s("250065");let i={id:"union",title:"UNION",slug:"/commands/union",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"UNION"})," ( ",(0,t.jsx)(n.em,{children:"ensemble1"})," ; ",(0,t.jsx)(n.em,{children:"ensemble2"})," ; ",(0,t.jsx)(n.em,{children:"r\xe9sultat"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ensemble1"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Premier ensemble"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ensemble2"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Second ensemble"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"r\xe9sultat"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Ensemble r\xe9sultant"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"UNION"})," cr\xe9e un nouvel ensemble contenant tous les enregistrements de ",(0,t.jsx)(n.em,{children:"ensemble1"})," et ",(0,t.jsx)(n.em,{children:"ensemble2"}),". Le tableau suivant liste les r\xe9sultats possibles d'une op\xe9ration de r\xe9union d'ensembles."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Ensemble1"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Ensemble2"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Ensemble r\xe9sultant"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Non"}),(0,t.jsx)(n.td,{children:"Oui"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Non"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Non"}),(0,t.jsx)(n.td,{children:"Non"}),(0,t.jsx)(n.td,{children:"Non"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Le sch\xe9ma ci-dessous est la repr\xe9sentation graphique de la r\xe9union de deux ensembles. La zone color\xe9e est l'ensemble r\xe9sultant."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(917994).Z+"",width:"125",height:"82"})}),"\n",(0,t.jsxs)(n.p,{children:["L'ensemble ",(0,t.jsx)(n.em,{children:"r\xe9sultat"})," est cr\xe9\xe9 par ",(0,t.jsx)(n.strong,{children:"UNION"}),". Il remplace tout ensemble du m\xeame nom existant d\xe9j\xe0, y compris ",(0,t.jsx)(n.em,{children:"ensemble1"})," et ",(0,t.jsx)(n.em,{children:"ensemble2"}),". Les ensembles de d\xe9part ",(0,t.jsx)(n.em,{children:"ensemble1"})," et ",(0,t.jsx)(n.em,{children:"ensemble2"})," doivent appartenir \xe0 la m\xeame table. L'ensemble ",(0,t.jsx)(n.em,{children:"r\xe9sultat"})," appartient \xe0 la m\xeame table que ",(0,t.jsx)(n.em,{children:"ensemble1"})," et ",(0,t.jsx)(n.em,{children:"ensemble2"}),". L'enregistrement courant de ",(0,t.jsx)(n.em,{children:"r\xe9sultat"})," est celui de ",(0,t.jsx)(n.em,{children:"ensemble1"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server :"}),' En mode client/serveur, les ensembles sont "visibles" en fonction de leur type (interprocess, process et local) et de leur lieu de cr\xe9ation (serveur ou client). ',(0,t.jsx)(n.strong,{children:"UNION"})," requiert que les trois ensembles soient visibles sur la m\xeame machine. Pour plus d'informations sur ce point, reportez-vous au paragraphe ",(0,t.jsx)(n.em,{children:"4D Server, ensembles et s\xe9lections"})," dans le manuel de r\xe9f\xe9rence de 4D Server."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant ajoute des enregistrements \xe0 l'ensemble des meilleurs clients. Les enregistrements sont affich\xe9s \xe0 l'\xe9cran. Ensuite, l'ensemble des meilleurs clients est charg\xe9 du disque, et tous les enregistrements s\xe9lectionn\xe9s par l'utilisateur (l'ensemble syst\xe8me UserSet) sont ajout\xe9s. Enfin, le nouvel ensemble est sauvegard\xe9 sur le disque :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Clients])\xa0// S\xe9lection de tous les enregistrements\n\xa0DISPLAY SELECTION([Clients])\xa0// Afficher tous les clients en mode liste\n\xa0LOAD SET("$Meilleurs";"$Meilleurs.sav")\xa0// Chargement de l\'ensemble des meilleurs clients\n\xa0UNION("$Meilleurs";"UserSet";"$Meilleurs")\xa0// Ajout de toute s\xe9lection \xe0 l\'ensemble\n\xa0SAVE SET("$Meilleurs";"$Meilleurs.sav")\xa0// Sauvegarde de l\'ensemble des meilleurs clients\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/difference",children:"DIFFERENCE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/intersection",children:"INTERSECTION"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"120"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},917994:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAABSCAIAAAD2GEyRAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kHAgwtKhNHmYEAAAVuSURBVHic7VyNeeMgDFV6ncJryGvcGs4at0Y8R8cwc3gMHyBsxI/r9q4GxeF9X4nyQvizeFZIo9s0TcoCEV+hHIYBJECve+0hlINe90UGfumhfHx82DHB3AH+xhlm/A0zXMvuYJ6h6zoh/n7T/t73vbZwqT2WU6FQ9UZnhOzvN6162xOVlFfiRaH5ex0E/k7Y85SnthFk4bX8XT/qWKL2UAwO9P1KJdg4EmTgwN9Vv1km0NQTwDPlkbpLu9jjv1HnufSdnujJ6KuiJj+rE7VYfZO3K65uB3Wk+PmKt3TrYfREZfizbLurvsGTYd3i8zriQsnH40GGGfqSlGDHHvJuNqxMef/erzFfaTnfgh0VLjGz8c6ezMtyzgneub8ns3aaDnojG2l3+q42rbcLYbY53QaUv0mYjY9MbakO7R7LkziYzjd78ZLiW9549PVdLdtmIOjM3/d2lRC8Z/Xdb0/ll8/zaJd+YW+w10CvCy3TxjvZ5dgWji7k5GSELqqrsqx9cV6t4+nXobCBRvcALi/bZRAlNe//pu+xO+0sfRQj0WXgOymyVa4vzgd7KKlzqO+pk1XDP+t7UAfy6h+3w1vL2X6dsny2zb1RRaUwfX/7XN/dA+ks6Sn43bt5q7EomOvd5E2MgVbTe6b1dmf4lvds8PcDnDxPLWxtInuVvzdzlwJxONB3mLztZWEJtFLl6qQ8QHCfyNtTrh3GZ8dz8F7qWpi+v9b5jNDPq9kzjcvwotD8vQ7a+XsdvJa/Qzt/L18CPM/5+3XQ9L3pOzR/r4UWv9dB8/c68P8f2f1xlPaODsrbCGqGTuvwjIAz2bz8H17bc6fGuetcbzTlWuU8z2L8/Y5qFKgHp0CvuaD4vRzKBzfhebReczn+DmqEYRjUYwR72K7M5TDHtz9hA96HcRxxAFi/5gmDzEI2feMW+7t7rY4dfEc3sp3wEzasH1Rx7Zfv8nK2Y5Q6+P+ZkvapY1DhY9056jUXFL/v2T/aPpafV4YXp++PQQ3jGc3jOIx3ru91IFXfT2sfw8dKc1yZpu+Fbccc6nvJ8uwx0JRFzLHpe2E0fT+xr09sxzR9L2w7psXvP9j+N/im74XR9P3Evj6xHdP0vbDtmFDfA+2r4xLu7I5+5LGW5i9kvskr34W8+P0VIFrfLw0p+n5blkXC0t/vd5OH6oFg0vK474nOKOtOc/N3qP1DHwe6vQ8Txr873fs96nPyhMfjYfy93uX30PcY4+8TRnf3i8Hre+2RBEjCvqvZjiF9T/gKaP5eE1gvsi4dvzd/Lwm5/k6QoMVN368Duf6eekpGH5+db/5eGHL9nSBBi0/Vd1nrvg0xOLNeM3347B5JnR+0fVaRr/HZcR6evws9nznMgXNeSev0dT599bOaFk9yPtObfXBq3kqO/8lh6WpGudWil2SeR/KTPGT+HvFu97Iy5eM8T0dMmi8q78W5ftOxpTz39/fjy1cQeX2n6LJfAzLFJh9l3uNLAz5j0/aU6ihYeZbVCdbsfGqN+1w7jHcZpNI2FzbmPhhDPBdixOo7RpqIEPGxhhJWw9XZAzLvw6AXzLbM+GAtMWxhx9Oz+i7O3zORADJ7JZQKeKTUimCmt+X0I8fF8AIYheXbKsxxxuF7jO44O9q95+m8dDyirDgyG7/zJ4pX5Tx/g/U7urkFzdzW/KI8J2XWpsqsr91+1zaVzWp5mD95He1TxO+bvofxe2ZrrHVInV3+vVuYnS/cJRlbBRkCfdY+5ey0zW0M/HNGNLRgQmL1/bKlxZPE7xdCO5+pYzumnUcWhlx/F3E+fjbf/L0w5Po7QYIWn6rvsuJIEw4PeOGSIO488kUgKH4fx1N+1iQTwzD8BaZz27WZu6g9AAAAAElFTkSuQmCC"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);