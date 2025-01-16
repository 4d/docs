"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7568"],{910742:function(e,r,t){t.r(r),t.d(r,{default:()=>u,frontMatter:()=>d,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/export-structure","title":"EXPORT STRUCTURE","description":"EXPORT STRUCTURE ( structureXML {; format} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/export-structure.md","sourceDirName":"commands-legacy","slug":"/commands/export-structure","permalink":"/docs/fr/20-R7/commands/export-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-structure.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"export-structure","title":"EXPORT STRUCTURE","slug":"/commands/export-structure","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE INDEX","permalink":"/docs/fr/20-R7/commands/delete-index"},"next":{"title":"Field","permalink":"/docs/fr/20-R7/commands/field"}}'),s=t("785893"),i=t("250065");let d={id:"export-structure",title:"EXPORT STRUCTURE",slug:"/commands/export-structure",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"EXPORT STRUCTURE"})," ( ",(0,s.jsx)(r.em,{children:"structureXML"})," {; ",(0,s.jsx)(r.em,{children:"format"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Param\xe8tre"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"structureXML"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Export de la d\xe9finition XML de la structure de la base 4D"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"format"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Export format: xml format (default) or html format"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["La commande ",(0,s.jsx)(r.strong,{children:"EXPORT STRUCTURE"})," exporte la d\xe9finition de la structure de la base 4D courante dans exportedStructure."]}),"\n",(0,s.jsx)(r.p,{children:"Passez dans exportedStructure la variable texte destin\xe9e \xe0 stocker la d\xe9finition de la structure. La d\xe9finition export\xe9e inclut les tables, les champs, les index et les liens, ainsi que leurs attributs et toutes les caract\xe9ristiques n\xe9cessaires \xe0 la description compl\xe8te de la structure. Les \xe9l\xe9ments invisibles sont export\xe9s avec l'attribut correspondant. Les \xe9l\xe9ments supprim\xe9s, cependant, ne sont pas export\xe9s."}),"\n",(0,s.jsx)(r.p,{children:"Par d\xe9faut, si vous omettez le param\xe8tre format, la commande exporte la d\xe9finition de la structure au format XML. Sinon, vous pouvez passer l'une des constantes suivantes dans le param\xe8tre format :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Constante"}),(0,s.jsx)(r.th,{children:"Valeur"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"html format"}),(0,s.jsx)(r.td,{children:"html"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"xml format"}),(0,s.jsx)(r.td,{children:"xml"})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["La commande g\xe9n\xe8re le m\xeame code XML ou HTML que la commande de menu ",(0,s.jsx)(r.strong,{children:"Exporter > D\xe9finition de structure vers le fichier XML... ou Exporter > D\xe9finition de structure vers le fichier HTML"}),"... (voir ",(0,s.jsx)(r.em,{children:"Exporter et importer des d\xe9finitions de structure"}),")."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"format"})," ",(0,s.jsx)(r.strong,{children:"xml"}),' : la "grammaire" interne des d\xe9finitions de structures 4D est document\xe9e via des fichiers DTD - \xe9galement utilis\xe9s pour la validation des fichiers XML. Les fichiers DTD utilis\xe9s par 4D sont regroup\xe9s dans le dossier ',(0,s.jsx)(r.strong,{children:"DTD"}),", situ\xe9 \xe0 c\xf4t\xe9 de l'application 4D. Les fichiers ",(0,s.jsx)(r.strong,{children:"base_core.dtd"})," et ",(0,s.jsx)(r.strong,{children:"common.dtd"})," sont utilis\xe9s pour les d\xe9finitions de structure. Pour plus d'informations, vous pouvez consulter ces fichiers ainsi que les commentaires qu'ils contiennent.",(0,s.jsx)(r.br,{}),"\nUne d\xe9finition de structure export\xe9e au format XML peut \xeatre import\xe9e dans une autre base de donn\xe9es (voir ",(0,s.jsx)(r.a,{href:"/docs/fr/20-R7/commands/import-structure",children:"IMPORT STRUCTURE"}),")."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"format html"})," : la commande g\xe9n\xe8re un code HTML brut qui inclut des r\xe9f\xe9rences \xe0 un dossier contenant des ressources externes telles que des images ou du css, n\xe9cessaires \xe0 la repr\xe9sentation HTML. Si vous souhaitez enregistrer ce code dans une page HTML \xe0 afficher dans un navigateur, vous pouvez r\xe9utiliser le dossier cr\xe9\xe9 par l'option de menu ",(0,s.jsx)(r.strong,{children:"Exporter > D\xe9finition de structure vers le fichier HTML"}),"..., ou cr\xe9er votre propre dossier de ressources."]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(r.p,{children:"Vous voulez exporter la structure de la base courante dans un fichier texte :"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0var $vTStruc : Text\n\xa0EXPORT STRUCTURE($vTStruc)\n\xa0TEXT TO DOCUMENT("myStructure.xml";$vTStruc)\n'})}),"\n",(0,s.jsx)(r.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(r.p,{children:"Vous voulez exporter la structure de la base courante au format html :"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0var $vHtml : Text\n\xa0EXPORT STRUCTURE($vHtml;html format)\n\xa0File("/PACKAGE/myProject Structure Export/myProject.html").setText($vHtml)\n'})}),"\n",(0,s.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/fr/20-R7/commands/import-structure",children:"IMPORT STRUCTURE"})}),"\n",(0,s.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(r.td,{children:"1311"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,r,t){t.d(r,{Z:function(){return l},a:function(){return d}});var n=t(667294);let s={},i=n.createContext(s);function d(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);