"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58426],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(667294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=s,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},683093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});n(667294);var r=n(603905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const o={id:"overview",title:"ORDA"},i=void 0,l={unversionedId:"ORDA/overview",id:"version-20/ORDA/overview",title:"ORDA",description:"ORDA signifie Object Relational Data Access (Acc\xe8s objet aux donn\xe9es relationnelles). C'est une technologie avanc\xe9e permettant l'acc\xe8s au mod\xe8le et aux donn\xe9es d'une base de donn\xe9es \xe0 l'aide d'objets.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/ORDA/overview.md",sourceDirName:"ORDA",slug:"/ORDA/overview",permalink:"/docs/fr/20/ORDA/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Foverview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"overview",title:"ORDA"},sidebar:"docs",previous:{title:"Chemins d'acc\xe8s",permalink:"/docs/fr/20/Concepts/paths"},next:{title:"Objets Data Model",permalink:"/docs/fr/20/ORDA/dsmapping"}},u={},c=[{value:"Pourquoi utiliser ORDA ?",id:"pourquoi-utiliser-orda-",level:2},{value:"Comment utiliser ORDA ?",id:"comment-utiliser-orda-",level:2}],d={toc:c};function p(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",s({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ORDA signifie ",(0,r.kt)("strong",{parentName:"p"},"Object Relational Data Access")," (Acc\xe8s objet aux donn\xe9es relationnelles). C'est une technologie avanc\xe9e permettant l'acc\xe8s au mod\xe8le et aux donn\xe9es d'une base de donn\xe9es \xe0 l'aide d'objets."),(0,r.kt)("p",null,"Les relations font partie du concept de fa\xe7on transparente, en combinaison avec le principe du ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/ORDA/glossary#lazy-loading"}),"Lazy loading"),", afin de supprimer toutes les probl\xe9matiques sp\xe9cifiques \xe0 la s\xe9lection ou au transfert de donn\xe9es."),(0,r.kt)("p",null,"Avec ORDA, les donn\xe9es sont accessibles via une couche d'abstraction, le ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/ORDA/dsmapping#datastore"}),"datastore"),". Un datastore est un objet fournissant une interface au mod\xe8le de base de donn\xe9es et aux donn\xe9es via des objets et des classes. Par exemple, une table correspond \xe0 un objet ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/ORDA/dsmapping#dataclass"}),"dataclass"),", un champ est un ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/ORDA/dsmapping##attribute"}),"attribut")," d'une dataclass, et les enregistrements sont des ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/ORDA/dsmapping#entity"}),"entit\xe9s")," et des ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/ORDA/dsmapping#entity-selection"}),"s\xe9lections d'\xe9ntit\xe9s"),"."),(0,r.kt)("h2",s({},{id:"pourquoi-utiliser-orda-"}),"Pourquoi utiliser ORDA ?"),(0,r.kt)("p",null,"Au lieu de repr\xe9senter des informations sous forme de tables, d'enregistrements et de champs, ORDA utilise une autre approche qui permet de faire correspondre plus pr\xe9cis\xe9ment les donn\xe9es aux concepts concrets."),(0,r.kt)("p",null,"Imaginez la possibilit\xe9 de d\xe9normaliser une structure relationnelle sans pour autant r\xe9duire l'efficacit\xe9. Imaginez que vous d\xe9criviez la totalit\xe9 des objets m\xe9tier dans votre application de telle sorte que l'utilisation des donn\xe9es devienne simple et directe, et supprime le besoin d'une compr\xe9hension compl\xe8te de la structure relationnelle."),(0,r.kt)("p",null,"Dans un datastore, une seule dataclass peut incorporer tous les \xe9l\xe9ments qui composent une table de base de donn\xe9es relationnelle traditionnelle, mais peut \xe9galement inclure des valeurs d'entit\xe9s parentes li\xe9es et des r\xe9f\xe9rences directes aux entit\xe9s et aux s\xe9lections d'entit\xe9s li\xe9es."),(0,r.kt)("p",null,"Une requ\xeate retourne une liste d'entit\xe9s appel\xe9e s\xe9lection d'entit\xe9s (entity selection), qui joue le r\xf4le d'un ensemble de lignes d'une requ\xeate SQL. La diff\xe9rence est que chaque entit\xe9 \"sait\" \xe0 quoi elle appartient dans le mod\xe8le de donn\xe9es et \"comprend\" sa relation avec toutes les autres entit\xe9s. Cela signifie qu'un d\xe9veloppeur n'a pas besoin d'expliquer, dans une requ\xeate, comment relier les diff\xe9rentes informations, ni comment \xe9crire, dans une mise \xe0 jour, des valeurs modifi\xe9es dans la structure relationnelle."),(0,r.kt)("p",null,"En outre, les objets ORDA tels que les s\xe9lections d'entit\xe9s ou les entit\xe9s peuvent \xeatre facilement li\xe9s \xe0 des objets UI tels que des list box ou des variables. Combin\xe9s avec des fonctionnalit\xe9s puissantes telles que les commandes ",(0,r.kt)("inlineCode",{parentName:"p"},"This")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"Form"),", ils permettent de construire des interfaces modernes et modulaires bas\xe9s sur des objets et des collections."),(0,r.kt)("h2",s({},{id:"comment-utiliser-orda-"}),"Comment utiliser ORDA ?"),(0,r.kt)("p",null,"Fondamentalement, ORDA g\xe8re des objets. Dans ORDA, tous les concepts principaux, y compris le datastore lui-m\xeame, sont disponible via des objets. Dans 4D, le datastore est automatiquement ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/ORDA/dsmapping"}),"mapp\xe9 sur la structure 4D"),"."),(0,r.kt)("p",null,"Les objets dans ORDA peuvent \xeatre manipul\xe9s comme des objets standard 4D, mais ils b\xe9n\xe9ficient automatiquement de propri\xe9t\xe9s et de m\xe9thodes sp\xe9cifiques."),(0,r.kt)("p",null,"ORDA objects are created and instanciated when necessary by 4D methods (you do not need to create them). However, ORDA data model objects are associated with ",(0,r.kt)("a",s({parentName:"p"},{href:"/docs/fr/20/ORDA/ordaClasses"}),"classes where you can add custom functions"),"."))}p.isMDXComponent=!0}}]);