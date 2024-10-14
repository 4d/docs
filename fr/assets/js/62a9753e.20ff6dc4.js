"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64077],{993652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(474848),i=n(28453);const s={id:"expand",title:"$expand"},o=void 0,a={id:"REST/expand",title:"$expand",description:"Expands an image stored in an Image attribute (e.g., Employee(1)/photo?$imageformat=best&$expand=photo) or Expands an BLOB attribute to save it.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/$expand.md",sourceDirName:"REST",slug:"/REST/expand",permalink:"/docs/fr/18/REST/expand",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24expand.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"expand",title:"$expand"},sidebar:"docs",previous:{title:"$entityset",permalink:"/docs/fr/18/REST/entityset"},next:{title:"$filter",permalink:"/docs/fr/18/REST/filter"}},d={},u=[{value:"Affichage d&#39;un attribut image",id:"affichage-dun-attribut-image",level:2},{value:"Enregistrement d&#39;un attribut BLOB sur le disque",id:"enregistrement-dun-attribut-blob-sur-le-disque",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Expands an image stored in an Image attribute (",(0,r.jsx)(t.em,{children:"e.g."}),", ",(0,r.jsx)(t.code,{children:"Employee(1)/photo?$imageformat=best&$expand=photo"}),")",(0,r.jsx)(t.br,{})," or",(0,r.jsx)(t.br,{})," Expands an BLOB attribute to save it."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Compatibilit\xe9"})," : pour des raisons de compatibilit\xe9, $expand peut \xeatre utilis\xe9 pour d\xe9velopper un attribut relationnel (par exemple, ",(0,r.jsx)(t.code,{children:"Company(1)?$expand= staff"})," ou ",(0,r.jsx)(t.code,{children:'EmployeeEmployee/?$filter="firstName BEGIN a"&$expand=employer'}),"). Il est cependant recommand\xe9 d'utiliser ",(0,r.jsx)(t.a,{href:"/docs/fr/18/REST/attributes",children:(0,r.jsx)(t.code,{children:"$attributes"})})," pour cette fonctionnalit\xe9."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"affichage-dun-attribut-image",children:"Affichage d'un attribut image"}),"\n",(0,r.jsx)(t.p,{children:"Si vous souhaitez afficher int\xe9gralement un attribut image, saisissez :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,r.jsxs)(t.p,{children:["Pour plus d'informations sur les formats d'image, reportez-vous \xe0 ",(0,r.jsx)(t.a,{href:"/docs/fr/18/REST/imageformat",children:(0,r.jsx)(t.code,{children:"$imageformat"})}),". Pour plus d'informations sur le param\xe8tre de version, reportez-vous \xe0 ",(0,r.jsx)(t.a,{href:"/docs/fr/18/REST/version",children:(0,r.jsx)(t.code,{children:"$version"})}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"enregistrement-dun-attribut-blob-sur-le-disque",children:"Enregistrement d'un attribut BLOB sur le disque"}),"\n",(0,r.jsx)(t.p,{children:'Si vous souhaitez enregistrer un BLOB stock\xe9 dans votre dataclass, vous pouvez \xe9crire ce qui suit en passant \xe9galement "true" \xe0 $binary :'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(296540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);