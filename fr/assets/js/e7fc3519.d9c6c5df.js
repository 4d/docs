"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37414"],{784247:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-formulas","title":"WP Get formulas","description":"WP Get formulas ( objCible ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-formulas.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-formulas","permalink":"/docs/fr/WritePro/commands/wp-get-formulas","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-formulas.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-formulas","title":"WP Get formulas","slug":"/WritePro/commands/wp-get-formulas","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get footer","permalink":"/docs/fr/WritePro/commands/wp-get-footer"},"next":{"title":"WP Get frame","permalink":"/docs/fr/WritePro/commands/wp-get-frame"}}'),t=r("785893"),o=r("250065");let l={id:"wp-get-formulas",title:"WP Get formulas",slug:"/WritePro/commands/wp-get-formulas",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP Get formulas"})," ( ",(0,t.jsx)(n.em,{children:"objCible"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objCible"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Plage ou \xe9l\xe9ment ou document 4D Write Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Collection de formules"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WP Get formulas"})," retoune une collection de toutes les formulas d\xe9finies dans ",(0,t.jsx)(n.em,{children:"objCible"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"objCible"}),", vous pouvez passer :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"une plage, ou"}),"\n",(0,t.jsx)(n.li,{children:"un \xe9l\xe9ment (table / ligne / cellule(s) / paragraphe / corps / en-t\xeate / pied / section / sous-section / image en ligne ou ancr\xe9e / zone de texte), ou"}),"\n",(0,t.jsx)(n.li,{children:"un document 4D Write Pro."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Quand vous passez une section dans objCible, seules les formules d'image ou les formules des zones de texte ancr\xe9es \xe0 cette section (ou \xe0 toutes les sections) sont retourn\xe9es. En revanche, si elles sont ancr\xe9es \xe0 une page ou \xe0 la vue int\xe9gr\xe9e, leurs formules ne seront pas retourn\xe9es. Passez le document dans objCible pour obtenir toutes les formules d'\xe9l\xe9ments ancr\xe9s."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Valeur retourn\xe9e"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WP Get formulas"})," retourne une collection d'objets formule, chacune d'elles contenant une ou plusieurs des propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[ ].formula"}),(0,t.jsx)(n.td,{children:"Objet"}),(0,t.jsxs)(n.td,{children:["Le texte de la formule est disponible via ",(0,t.jsx)(n.strong,{children:"[ ].formula.source"}),". La formule est une ",(0,t.jsx)(n.strong,{children:"copie"})," de la formule trouv\xe9e dans la cible. Si vous souhaitez modifier la formule, elle doit \xeatre r\xe9-ins\xe9r\xe9e dans le document pour \xeatre prise en charge"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[ ].range"}),(0,t.jsx)(n.td,{children:"Objet"}),(0,t.jsx)(n.td,{children:"Plage de la formule (non retourn\xe9e pour les formules d'images ancr\xe9es)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[ ].anchoredID"}),(0,t.jsx)(n.td,{children:"Texte"}),(0,t.jsx)(n.td,{children:"ID de l'image ancr\xe9e (retourn\xe9e uniquement pour les formules d'images ancr\xe9es)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[ ].name"}),(0,t.jsx)(n.td,{children:"Texte"}),(0,t.jsxs)(n.td,{children:["Nom de la formule, si un nom a \xe9t\xe9 d\xe9fini ( non retourn\xe9 dans le cas contraire). Les noms peuvent \xeatre d\xe9finis \xe0 l'aide de ",(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-insert-formula",children:"WP INSERT FORMULA"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[ ].owner"}),(0,t.jsx)(n.td,{children:"Objet"}),(0,t.jsx)(n.td,{children:"Document 4D Write Pro"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si vous avez pass\xe9 une sous-section comme cible, les formules de la section parente sont retourn\xe9es."}),"\n",(0,t.jsx)(n.li,{children:"Si plusieurs formules sont retourn\xe9es, la collection est ordonn\xe9e suivant l'ordre des formules de la cible, \xe0 l'exception des cibles de type de document ou de section (n'importe quel ordre dans ce cas)."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Pour obtenir toutes les formules d'un document :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $formulas : Collection\n\xa0$formulas:=WP Get formulas(WriteProArea)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Pour obtenir toutes les formules de la premi\xe8re section d'un document :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $formulas : Collection\n\xa0$formulas:=WP Get formulas(WP Get section(WriteProArea;1))\n"})}),"\n",(0,t.jsx)(n.p,{children:"Pour obtenir les formules de toutes les images ancr\xe9es d'un document :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $formulas : Collection\n\xa0$formulas:=WP Get formulas(WriteProArea).query("anchoredID # null")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"G\xe9rer des formules"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-compute-formulas",children:"WP COMPUTE FORMULAS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-freeze-formulas",children:"WP FREEZE FORMULAS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-get-links",children:"WP Get links"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-insert-formula",children:"WP INSERT FORMULA"})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var s=r(667294);let t={},o=s.createContext(t);function l(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);