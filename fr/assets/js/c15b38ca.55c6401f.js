"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12746"],{984706:function(e,s,n){n.r(s),n.d(s,{default:()=>c,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"ORDA/overview","title":"Que signifie ORDA ?","description":"ORDA signifie Object Relational Data Access (Acc\xe8s objet aux donn\xe9es relationnelles). C\'est une technologie avanc\xe9e permettant l\'acc\xe8s au mod\xe8le et aux donn\xe9es d\'une base de donn\xe9es \xe0 l\'aide d\'objets.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/ORDA/overview.md","sourceDirName":"ORDA","slug":"/ORDA/overview","permalink":"/docs/fr/19/ORDA/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Foverview.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"overview","title":"Que signifie ORDA ?"},"sidebar":"docs","previous":{"title":"Chemins d\'acc\xe8s","permalink":"/docs/fr/19/Concepts/paths"},"next":{"title":"Objets du mod\xe8le de donn\xe9es","permalink":"/docs/fr/19/ORDA/dsmapping"}}'),i=n("785893"),o=n("250065");let r={id:"overview",title:"Que signifie ORDA ?"},a=void 0,d={},l=[{value:"Pourquoi utiliser ORDA ?",id:"pourquoi-utiliser-orda-",level:2},{value:"Comment utiliser ORDA ?",id:"comment-utiliser-orda-",level:2}];function u(e){let s={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["ORDA signifie ",(0,i.jsx)(s.strong,{children:"Object Relational Data Access"})," (Acc\xe8s objet aux donn\xe9es relationnelles). C'est une technologie avanc\xe9e permettant l'acc\xe8s au mod\xe8le et aux donn\xe9es d'une base de donn\xe9es \xe0 l'aide d'objets."]}),"\n",(0,i.jsxs)(s.p,{children:["Les relations font partie du concept de fa\xe7on transparente, en combinaison avec le principe du ",(0,i.jsx)(s.a,{href:"/docs/fr/19/ORDA/glossary#lazy-loading",children:"Lazy loading"}),", afin de supprimer toutes les probl\xe9matiques sp\xe9cifiques \xe0 la s\xe9lection ou au transfert de donn\xe9es."]}),"\n",(0,i.jsxs)(s.p,{children:["Avec ORDA, les donn\xe9es sont accessibles via une couche d'abstraction, le ",(0,i.jsx)(s.a,{href:"/docs/fr/19/ORDA/dsmapping#datastore",children:"datastore"}),". Un datastore est un objet fournissant une interface au mod\xe8le de base de donn\xe9es et aux donn\xe9es via des objets et des classes. Par exemple, une table correspond \xe0 un objet ",(0,i.jsx)(s.a,{href:"/docs/fr/19/ORDA/dsmapping#dataclass",children:"dataclass"}),", un champ est un ",(0,i.jsx)(s.a,{href:"/docs/fr/19/ORDA/dsmapping##attribute",children:"attribut"})," d'une dataclass, et les enregistrements sont des ",(0,i.jsx)(s.a,{href:"/docs/fr/19/ORDA/dsmapping#entity",children:"entit\xe9s"})," et des ",(0,i.jsx)(s.a,{href:"/docs/fr/19/ORDA/dsmapping#entity-selection",children:"s\xe9lections d'\xe9ntit\xe9s"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"pourquoi-utiliser-orda-",children:"Pourquoi utiliser ORDA ?"}),"\n",(0,i.jsx)(s.p,{children:"Au lieu de repr\xe9senter des informations sous forme de tables, d'enregistrements et de champs, ORDA utilise une autre approche qui permet de faire correspondre plus pr\xe9cis\xe9ment les donn\xe9es aux concepts concrets."}),"\n",(0,i.jsx)(s.p,{children:"Imaginez la possibilit\xe9 de d\xe9normaliser une structure relationnelle sans pour autant r\xe9duire l'efficacit\xe9. Imaginez que vous d\xe9criviez la totalit\xe9 des objets m\xe9tier dans votre application de telle sorte que l'utilisation des donn\xe9es devienne simple et directe, et supprime le besoin d'une compr\xe9hension compl\xe8te de la structure relationnelle."}),"\n",(0,i.jsx)(s.p,{children:"Dans un datastore, une seule dataclass peut incorporer tous les \xe9l\xe9ments qui composent une table de base de donn\xe9es relationnelle traditionnelle, mais peut \xe9galement inclure des valeurs d'entit\xe9s parentes li\xe9es et des r\xe9f\xe9rences directes aux entit\xe9s et aux s\xe9lections d'entit\xe9s li\xe9es."}),"\n",(0,i.jsx)(s.p,{children:"Une requ\xeate retourne une liste d'entit\xe9s appel\xe9e s\xe9lection d'entit\xe9s (entity selection), qui joue le r\xf4le d'un ensemble de lignes d'une requ\xeate SQL. La diff\xe9rence est que chaque entit\xe9 \"sait\" \xe0 quoi elle appartient dans le mod\xe8le de donn\xe9es et \"comprend\" sa relation avec toutes les autres entit\xe9s. Cela signifie qu'un d\xe9veloppeur n'a pas besoin d'expliquer, dans une requ\xeate, comment relier les diff\xe9rentes informations, ni comment \xe9crire, dans une mise \xe0 jour, des valeurs modifi\xe9es dans la structure relationnelle."}),"\n",(0,i.jsxs)(s.p,{children:["En outre, les objets ORDA tels que les s\xe9lections d'entit\xe9s ou les entit\xe9s peuvent \xeatre facilement li\xe9s \xe0 des objets UI tels que des list box ou des variables. Combin\xe9s avec des fonctionnalit\xe9s puissantes telles que les commandes ",(0,i.jsx)(s.code,{children:"This"})," et ",(0,i.jsx)(s.code,{children:"Form"}),", ils permettent de construire des interfaces modernes et modulaires bas\xe9s sur des objets et des collections."]}),"\n",(0,i.jsx)(s.h2,{id:"comment-utiliser-orda-",children:"Comment utiliser ORDA ?"}),"\n",(0,i.jsx)(s.p,{children:"Fondamentalement, ORDA g\xe8re des objets. Dans ORDA, tous les concepts principaux, y compris le datastore lui-m\xeame, sont disponibles via des objets. Dans 4D, le datastore est automatiquement [mapp\xe9 sur la structure 4D](dsMapping.md)."}),"\n",(0,i.jsx)(s.p,{children:"Les objets dans ORDA peuvent \xeatre manipul\xe9s comme des objets standard 4D, mais ils b\xe9n\xe9ficient automatiquement de propri\xe9t\xe9s et de fonctions sp\xe9cifiques."}),"\n",(0,i.jsx)(s.p,{children:"Les objets ORDA sont cr\xe9\xe9s et instanci\xe9s lorsque n\xe9cessaire par les m\xe9thodes 4D (vous n'avez pas besoin de les cr\xe9er). Cependant, les objets du mod\xe8le de donn\xe9es ORDA sont associ\xe9s \xe0 [des classes o\xf9 vous pouvez ajouter des fonctions personnalis\xe9es](ordaClasses.md)."})]})}function c(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return r}});var t=n(667294);let i={},o=t.createContext(i);function r(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);