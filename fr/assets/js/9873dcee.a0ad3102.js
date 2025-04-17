"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95699"],{305177:function(e,s,n){n.r(s),n.d(s,{default:()=>c,frontMatter:()=>i,metadata:()=>t,assets:()=>u,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"Events/onMouseUp","title":"On Mouse Up","description":"| Code | Peut \xeatre appel\xe9 par                                                                                     | D\xe9finition                                                                        |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/Events/onMouseUp.md","sourceDirName":"Events","slug":"/Events/onMouseUp","permalink":"/docs/fr/20-R8/Events/onMouseUp","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseUp.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onMouseUp","title":"On Mouse Up"},"sidebar":"docs","previous":{"title":"On Mouse Move","permalink":"/docs/fr/20-R8/Events/onMouseMove"},"next":{"title":"On Open Detail","permalink":"/docs/fr/20-R8/Events/onOpenDetail"}}'),o=n("785893"),r=n("250065");let i={id:"onMouseUp",title:"On Mouse Up"},l=void 0,u={},d=[{value:"Description",id:"description",level:2}];function a(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Code"}),(0,o.jsx)(s.th,{children:"Peut \xeatre appel\xe9 par"}),(0,o.jsx)(s.th,{children:"D\xe9finition"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"2"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.a,{href:"/docs/fr/20-R8/FormObjects/inputOverview",children:"Zone de saisie"})," de ",(0,o.jsx)(s.a,{href:"/docs/fr/20-R8/FormObjects/propertiesObject#type",children:"type"})," ",(0,o.jsx)(s.code,{children:"image"})]}),(0,o.jsx)(s.td,{children:"L'utilisateur vient de rel\xe2cher le bouton gauche de la souris dans un objet Image"})]})})]}),"\n",(0,o.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(s.p,{children:["L'\xe9v\xe9nement ",(0,o.jsx)(s.code,{children:"On Mouse Up"})," est g\xe9n\xe9r\xe9 lorsque l'utilisateur vient de rel\xe2cher le bouton gauche de la souris tout en faisant glisser une image. Cet \xe9v\xe9nement est utile, par exemple, lorsque vous souhaitez que l'utilisateur puisse d\xe9placer, redimensionner ou dessiner des objets dans une zone SVG."]}),"\n",(0,o.jsxs)(s.p,{children:["Lorsque l'\xe9v\xe9nement ",(0,o.jsx)(s.code,{children:"On Mouse Up"})," est g\xe9n\xe9r\xe9, vous pouvez obtenir les coordonn\xe9es locales o\xf9 le bouton de la souris a \xe9t\xe9 rel\xe2ch\xe9. Ces coordonn\xe9es sont retourn\xe9es dans les variables syst\xe8me ",(0,o.jsx)(s.code,{children:"MouseX"})," et ",(0,o.jsx)(s.code,{children:"MouseY"}),". Les coordonn\xe9es sont exprim\xe9es en pixels par rapport \xe0 l'angle sup\xe9rieur gauche de l'image (0,0)."]}),"\n",(0,o.jsxs)(s.p,{children:["Lorsque vous utilisez cet \xe9v\xe9nement, vous devez \xe9galement utiliser la commande ",(0,o.jsx)(s.code,{children:"Is waiting mouse up"})," pour g\xe9rer les cas o\xf9 le \"gestionnaire d'\xe9tat\" du formulaire est d\xe9synchronis\xe9, c'est-\xe0-dire lorsque l'\xe9v\xe9nement ",(0,o.jsx)(s.code,{children:"On Mouse Up"})," n'est pas re\xe7u apr\xe8s un cli C'est le cas par exemple lorsqu'une bo\xeete de dialogue d'alerte s'affiche au-dessus du formulaire alors que le bouton de la souris n'a pas \xe9t\xe9 rel\xe2ch\xe9. C'est le cas par exemple lorsqu'une bo\xeete de dialogue d'alerte s'affiche au-dessus du formulaire alors que le bouton de la souris n'a pas \xe9t\xe9 rel\xe2ch\xe9. Pour plus d'informations et pour voir un exemple d'utilisation de l'\xe9v\xe9nement ",(0,o.jsx)(s.code,{children:"On Mouse Up"}),", veuillez vous r\xe9f\xe9rer \xe0 la description de la commande ",(0,o.jsx)(s.code,{children:"Is waiting mouse up"}),"."]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["Si l'option ",(0,o.jsx)(s.a,{href:"/docs/fr/20-R8/FormObjects/propertiesAction#draggable",children:"Draggable"})," est activ\xe9e pour l'objet image, l'\xe9v\xe9nement ",(0,o.jsx)(s.code,{children:"On Mouse Up"})," n'est jamais g\xe9n\xe9r\xe9."]}),"\n"]})]})}function c(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return i}});var t=n(667294);let o={},r=t.createContext(o);function i(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);