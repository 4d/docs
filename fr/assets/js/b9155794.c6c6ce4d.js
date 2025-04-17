"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88244"],{441643:function(e,n,s){s.r(n),s.d(n,{default:()=>A,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/object-set-corner-radius","title":"OBJECT SET CORNER RADIUS","description":"OBJECT SET CORNER RADIUS ( { ;} objet ; rayon* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-corner-radius.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-corner-radius","permalink":"/docs/fr/20-R8/commands/object-set-corner-radius","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-corner-radius.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-corner-radius","title":"OBJECT SET CORNER RADIUS","slug":"/commands/object-set-corner-radius","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET COORDINATES","permalink":"/docs/fr/20-R8/commands/object-set-coordinates"},"next":{"title":"OBJECT SET DATA SOURCE","permalink":"/docs/fr/20-R8/commands/object-set-data-source"}}'),t=s("785893"),i=s("250065");let o={id:"object-set-corner-radius",title:"OBJECT SET CORNER RADIUS",slug:"/commands/object-set-corner-radius",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET CORNER RADIUS"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"rayon"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est un champ ou une variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Champ ou variable (si * est omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rayon"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nouveau rayon des angles arrondis (en pixels)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OBJECT SET CORNER RADIUS"})," vous permet de modifier le rayon des angles du ou des objet(s) que vous avez pass\xe9s dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"}),". Le nouveau rayon est d\xe9fini pour le process uniquement, il n'est pas stock\xe9 dans le formulaire."]}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez utiliser cette commande avec les objets de formulaire suivants :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"rectangles"}),"\n",(0,t.jsx)(n.li,{children:"zones de saisie (projets 4D uniquement)"}),"\n",(0,t.jsx)(n.li,{children:"zones de texte (projets 4D uniquement)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans le param\xe9tre ",(0,t.jsx)(n.em,{children:"radius"}),", vous passez une nouvelle valeur de rayon en pixels \xe0 appliquer aux angles de l'objet."]}),"\n",(0,t.jsx)(n.p,{children:'Remarque : avec les objets de type zones de saisie et zones de texte, la propri\xe9t\xe9 de rayon d\'angle n\'est disponible qu\'avec les styles de ligne de bordure "Aucune", "solid" ou "Trait pointill\xe9".'}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez modifier cette valeur au niveau du formulaire \xe0 l'aide de la ",(0,t.jsx)(n.em,{children:"propriet\xe9 corner radius"})," (voir \xe9galement ",(0,t.jsx)(n.em,{children:"Rayon d'arrondi (rectangles)"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:'Votre formulaire contient les rectangles suivants, nomm\xe9s "Rect1" et "Rect2" :'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(258997).Z+"",width:"267",height:"71"})}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez ex\xe9cuter le code suivant afin de changer leurs angles arrondis :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET CORNER RADIUS(*;"Rect@";20)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(773161).Z+"",width:"269",height:"67"})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:'Soit la zone de texte suivante dans votre formulaire, nomm\xe9e "required-label":'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(1531).Z+"",width:"153",height:"38"})}),"\n",(0,t.jsx)(n.p,{children:"Si vous ex\xe9cutez le code suivant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET CORNER RADIUS(*;"required-label";10)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(49337).Z+"",width:"153",height:"35"})}),"\n",(0,t.jsx)(n.p,{children:"Notez que pour les zones de texte (ainsi que pour les zones de saisie), contrairement aux rectangles, l'arrondi de l'angle est dessin\xe9 en dehors de la zone initiale de l'objet."}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/object-get-corner-radius",children:"OBJECT Get corner radius"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1323"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function A(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},258997:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAABHCAIAAACf2vWmAAABdklEQVR42u3dQW7aUBRAURx1Ad4la8ouvYNGtFWFlHDzPamf1HMmTBh8v8c1AiGxHcdxA154u/oAMJpCoCgEikKgKASKQqAoBIpCoCgEikKgKATKj1PP3vf96gOPc8z+YZuVfXZqZdv6s//M+v3n1Rc4yX27DY7Eyr5wcmWrhTxmbdCv3E/caP4ZKyvLK1v6HOKd+lvTRjTtPAMtjmj5k7q7UZg5nJmnGmJ5OL7LgqIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKAqBohAoCoGiECgKgaIQKMuF3LerjzrYzOHMPNUQy8NZKuQ4jqsvaLppI5p2noEWR7Stj3Lf98eD/7F/9utWNPblaGVfOLmyE4Xc/k6cJ2Pz+M3KPju1snOFwP/Gd1lQFAJFIVAUAkUhUBQCRSFQFAJFIVAUAkUhUD4Aa+NPawq2l1cAAAAASUVORK5CYII="},773161:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},1531:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAmCAIAAABYoq5NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG5SURBVHhe7ZbNjYMwEIUpIbccKYBzTiHnSNxTwTZAP+mFSlIEHWz8Mzg2UQTj7Fgw+z69g8NOrM37ZKAagRbgUg9wqQe41ANc6gEu9QCXeoBLPZRw+ftz/eehIoSByxKhIoSByxKhIoSByxKhIoSByxKhIoTZqMuhqSIO99t8ID9dXVX1MLu4Nqc+65+hIoTZrstze/HrR3v4ov2/DVy+/bbFxC6zGxQIXL79tsV8dmnWRDRwuR/DxWYaTns3t9Zj8zCLW3OmU26/1bfmY0V/YmzOCxUhzA5c2mdnc3Jr23Xf+ZmgynadDHNcThb9/PrNeaEihNnBu8/Ub+TDxTxHbcsvNz5BwyqXuZvzQkUIs/lzaSqe2nQvQSnmvKYOsl0yN+eFihBmV/dY0yzdbKPMjo79mOOSuTkvVIQwe3n38aWHRRx7MRFPdcePOjuz4JK3OS9UhDC7cOnvtK5EayIQanWqHH1n1tP113A9LJ7LZN6wtDknVIQwG3X5RTLrFg0VIQxclggVIQxclggVIYw+l1sMFSFMCZegDHCpB7jUA1zqAS71AJd6gEs9wKUe4FIPcKkHuNTCOD4Bf2WRB1/x+2oAAAAASUVORK5CYII="},49337:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAjCAYAAACHDaipAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAODSURBVHhe7ZpNSFRRFMf/Iyk6isYUmRC5UFF4RYsalJwKgwik2oQQ1Ca0ReBCoW0rt0GzCNoYGRQE7UqECBpCJ5RpEzZhmAtDmJTScdCZ0HB6Z+bOB1H4NeeMOucHD+9958074zv/uefce58jHA7HoSiMFJm/isKGikxhR0WmsKMiU9hRkSnsqMgUdlRkCjt5WScr+vEdJR/eofjjmP0FfsKx8stYlFwSLyvHWpULv4+7sXLqHNYOHjYWWcRFVvL+DUpfPVVhCRMvKcWvyzewcvqCOSOHmMgcsWWUPX+I4k8Bc0bJB6vH3Ihd706ITgqxmkwFtjOgGJQ9e2B6MoiIjFKkCmznQLGgmEjBLjIq8qkG48Y3+hqOR9nHGPojxshJaML2NQGf6W6fefQKfHeKCcVGAnaR0SxSqshv9ZxBvPNi4vjqAW69yGXw/0NNk+2vCW2mu1ugmFBsJGAXGS1T5IO6xgb0YBFTEqPZLmXfuEwJwy4yWgfbGVAayqRTz5eoOU9E0T+YbZvJSln/SF+UIgdnMEXtyAw86XSZvE+v/XkP3St1zaZ8Z9t4KVqcNy1e+EWWp/Uw32gAXqsBXZXUoyDbv9r2ZCqNd7rhHhk3wqEgD2OgIZNq+xaC8JJpi3gngSd0r0tHUCfsezPQspIE7CKTXI/xjwynR4SXtXbQWlxJQ2gO3moL3TXJLuBCt12zDYTsUSMyj4HZWvQ1Oo0NaGtx26l26/ScJHEZhH1vBtoRkIBfZPsPmBY/6cK/vRbeoUzRPxVZBGaDqDcCpKN+JAz/gj3KLi/BX12Bo+baXJNP3+tBW04SsIts9USzaQliz/jeWtM4P5qsOeoqqwDLnU5J6YNGuvIKtM4u4VviSkMkilyVxPn0vR60pykBu8hoY1YyZaZIpJ1gAL0hu1NzKNP+m0on3JjG3ayC2/c5CL9pA6WwqsPJ9JbArrGGpk17A2zLNx8UE4qNBOwio51/2piVx4X7ibRJM0O73WEhMJRJWZnFWtuWKMaz67nsusiJrrMWkLbP4Yp9342zHd98UEyk3soQ2yB3Pr63i7aWaEY4Cauj2cxO9xa0SR69ecf0+GEfyVLErt1O/HNKfkm9hSGJmMhouky/ntjVrrzUaIUOPXN69hQD6eevb8buYQr2zVil8BBLl0rhoiJT2FGRKeyoyBR2VGQKOyoyhR0VmcIM8AfrddRxuuoD6QAAAABJRU5ErkJggg=="},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);