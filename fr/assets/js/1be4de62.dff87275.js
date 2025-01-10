"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6401"],{589290:function(e,r,s){s.r(r),s.d(r,{default:()=>p,frontMatter:()=>n,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"FormObjects/progressIndicator","title":"Indicateurs de progression","description":"Un indicateur de progression (\xe9galement appel\xe9 \\"thermom\xe8tre\\") est con\xe7u pour afficher ou d\xe9finir graphiquement des valeurs num\xe9riques ou date/heure.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormObjects/progressIndicator.md","sourceDirName":"FormObjects","slug":"/FormObjects/progressIndicator","permalink":"/docs/fr/19/FormObjects/progressIndicator","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FprogressIndicator.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"progressIndicator","title":"Indicateurs de progression"},"sidebar":"docs","previous":{"title":"Zones de plug-in","permalink":"/docs/fr/19/FormObjects/pluginAreaOverview"},"next":{"title":"Bouton radio","permalink":"/docs/fr/19/FormObjects/radiobuttonOverview"}}'),t=s("785893"),o=s("250065");let n={id:"progressIndicator",title:"Indicateurs de progression"},a=void 0,c={},d=[{value:"Utiliser des indicateurs",id:"utiliser-des-indicateurs",level:2},{value:"Le thermom\xe8tre par d\xe9faut",id:"le-thermom\xe8tre-par-d\xe9faut",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:3},{value:"Barber shop",id:"barber-shop",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge-1",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:'Un indicateur de progression (\xe9galement appel\xe9 "thermom\xe8tre") est con\xe7u pour afficher ou d\xe9finir graphiquement des valeurs num\xe9riques ou date/heure.'}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(835935).Z+"",width:"288",height:"45"})}),"\n",(0,t.jsx)(r.h2,{id:"utiliser-des-indicateurs",children:"Utiliser des indicateurs"}),"\n",(0,t.jsx)(r.p,{children:"Vous pouvez utiliser les jauges pour afficher ou d\xe9finir des valeurs. Par exemple, si un indicateur de progression se voit affecter une valeur par une m\xe9thode, il affiche la valeur. Si l\u2019utilisateur modifie manuellement la valeur indiqu\xe9e par la jauge, la valeur contenue par l\u2019objet est modifi\xe9e. Cette valeur peut \xeatre utilis\xe9e pour un autre objet tel qu\u2019un champ, un objet saisissable ou un objet non saisissable."}),"\n",(0,t.jsx)(r.p,{children:"La variable associ\xe9e \xe0 l'indicateur contr\xf4le l\u2019affichage. Vous pouvez y placer des valeurs ou utiliser les valeurs qu\u2019il stocke \xe0 l\u2019aide des m\xe9thodes. Par exemple, la m\xe9thode suivante peut \xeatre utilis\xe9e pour contr\xf4ler un thermom\xe8tre :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:" vTherm:=[Employees]Salary\n"})}),"\n",(0,t.jsx)(r.p,{children:"Cette m\xe9thode affecte \xe0 la variable vTherm la valeur du champ Salaire. Cette m\xe9thode est associ\xe9e au champ Salaire."}),"\n",(0,t.jsx)(r.p,{children:"R\xe9ciproquement, vous pouvez utiliser un indicateur pour contr\xf4ler la valeur d\u2019un champ. L\u2019utilisateur se sert alors de l'indicateur pour saisir la valeur du champ. Dans ce cas la m\xe9thode devient :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:" [Employees]Salary:=vTherm\n"})}),"\n",(0,t.jsx)(r.p,{children:"La m\xe9thode affecte la valeur de l'indicateur au champ Salaire. Lorsque l\u2019utilisateur modifie la valeur affich\xe9e par l'indicateur, la valeur du champ Salaire est modifi\xe9e."}),"\n",(0,t.jsx)(r.h2,{id:"le-thermom\xe8tre-par-d\xe9faut",children:"Le thermom\xe8tre par d\xe9faut"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(230385).Z+"",width:"53",height:"176"})}),"\n",(0,t.jsx)(r.p,{children:"Le thermom\xe8tre est l'indicateur de progression standard."}),"\n",(0,t.jsx)(r.p,{children:"Vous pouvez afficher une barre de progression horizontale ou verticale. Ce param\xe8tre est d\xe9termin\xe9 par la forme de l\u2019objet que vous dessinez."}),"\n",(0,t.jsx)(r.p,{children:"Plusieurs options graphiques sont disponibles : valeurs minimales/maximales, graduations, paliers."}),"\n",(0,t.jsx)(r.h3,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesScale#barber-shop",children:"Barber shop"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesText#bold",children:"Gras"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Style de bordure"})," -",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bas"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#css-class",children:"Classe"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesScale#display-graduation",children:"Afficher graduation"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesEntry#enterable",children:"Saisissable"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesAction#execute-object-method",children:"Ex\xe9cuter m\xe9thode objet"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#expression-type",children:"Type d'expression"}),' (uniquement "integer", "number", "date", ou "time") - ',(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesText#font",children:"Police"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesText#font-color",children:"Couleur de police"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesText#font-size",children:"Taille de police"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#height",children:"Hauteur"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesText#italic",children:"Italique"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesScale#graduation-step",children:"Unit\xe9 de graduation"})," -",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesHelp#help-tip",children:"Message d'aide"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionnement horizontal"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesScale#label-location",children:"Emplacement \xe9tiquette"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#left",children:"Gauche"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesScale#maximum",children:"Maximum"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesScale#minimum",children:"Minimum"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesDisplay#number-format",children:"Format num\xe9rique"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#object-name",children:"Nom objet"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#right",children:"Droite"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesScale#step",children:"Step"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#top",children:"Haut"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesText#underline",children:"Soulign\xe9"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression",children:"Variable ou Expression"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionnement Vertical"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesDisplay#visibility",children:"Visibilit\xe9"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largeur"})]}),"\n",(0,t.jsx)(r.h2,{id:"barber-shop",children:"Barber shop"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(213027).Z+"",width:"280",height:"40"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Le barber shop"})," est une variante du thermom\xe8tre par d\xe9faut. Pour active cette variante, vous devez d\xe9finir la propri\xe9t\xe9 du ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesScale#barber-shop",children:"Barber shop"}),"."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:'En code JSON, supprimez simplement la propri\xe9t\xe9 "max" de l\'objet thermom\xe8tre par d\xe9faut pour activer le barber shop.'}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Le barber shop affiche une animation continue, telle que le ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/spinner",children:"spinner"}),". Les thermom\xe8tres \u201CBarber shop\u201D sont g\xe9n\xe9ralement utilis\xe9s pour indiquer \xe0 l\u2019utilisateur que le programme est en train d\u2019effectuer une op\xe9ration longue. Lorsque le thermom\xe8tre est s\xe9lectionn\xe9, le th\xe8me ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesScale",children:'"Graduations"'})," de la liste des propri\xe9t\xe9s est masqu\xe9."]}),"\n",(0,t.jsxs)(r.p,{children:["A l\u2019ex\xe9cution du formulaire, l'objet n\u2019est pas anim\xe9. Vous devez g\xe9rer l\u2019animation en passant une valeur \xe0 ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression",children:"la variable ou expression qui lui est associ\xe9e"})," :"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"1 = Start animation,"}),"\n",(0,t.jsx)(r.li,{children:"0 = Stopper l\u2019animation."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"propri\xe9t\xe9s-prises-en-charge-1",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesScale#barber-shop",children:"Barber shop"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesText#bold",children:"Gras"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Style de bordure"})," -",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bas"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#css-class",children:"Classe"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesEntry#enterable",children:"Saisissable"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesAction#execute-object-method",children:"Executer m\xe9thode objet"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#expression-type",children:"Type d'expression"}),' (uniquement "integer", "number", "date", ou "time") - ',(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesText#font",children:"Police"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesText#font-color",children:"Couleur de police"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesText#font-size",children:"Taille de police"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#height",children:"Hauteur"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesHelp#help-tip",children:"Message d'aide"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionnement horizontal"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesText#italic",children:"Italique"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#left",children:"Gauche"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#object-name",children:"Nom d'objet"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#right",children:"Droite"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#top",children:"Haut"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesText#underline",children:"Soulign\xe9"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression",children:"Variable ou Expression"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionnement vertical"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesDisplay#visibility",children:"Visibilit\xe9"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largeur"})]}),"\n",(0,t.jsx)(r.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/ruler",children:"r\xe8gle"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/fr/19/FormObjects/stepper",children:"stepper"})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},213027:function(e,r,s){s.d(r,{Z:function(){return i}});let i=s.p+"assets/images/indicator-4aede0e01bdd9a603abe016a5ec90d03.gif"},230385:function(e,r,s){s.d(r,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAACwCAIAAAAg+bFMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAMCSURBVHhe7drBjdswEIVhn7aTtLD1qBsX48sWkBpcxp5dQoacIUVqJNvyk0YK8H4ICE0D8geJOZDYy+Pc0YcV5bsNl8twsw/6MfV9vS/O5AJ89+u32IZh9IlFxzJQj5+xwt5vFXRDsSeOnykd4OsEedrP2Hji+wuna0izm1ob+X6x5A52r2n/j68dmszPlI7wCcHGMpkxfqZ0hE+ST7lxys/kwnwfRh8WfVj0YdGHRR8WfVj0YdGHRR8WfVj0YYX4yt62O8SYzCwU4BOLMtrB/GmBb39fc6Birspzpy2+gOdXDebqTI11to19uqo0u6mUjn9SKjnS9877PZdvRtOYum/n2v/5iaZ5fmkoKAM23y20v29cfs3hnsD6iaUifEj0YdGHRR8WfVj0YdGHRR8WfVj0YdGHRR9WkK/sd5udevd5sQifOyWQiROdH9yGiaHyznL+kv54cnydMydGy23sU4ZmNxVBeYn6Oo/0LTy/Isjjs/vamROsv8RRg2AyrPzbfLVYgE9BufZB9hNLhfiA6MOiD4s+LPqw6MOiD4s+LPqw6MOiD4s+rDhf2gTXzXjZ/77YnQf6ssg4Mj7V+UF+eMO1nLVUXp5/DgzxJd34d2udqbHOtrFPV5VmN3WuI33++Y2ac/rsP2pNaKdbf1q1yMCAIn3OO8QnCSz39N2mAn0fRR8WfVj0YdGHRR/W1Pf18we56HM/ueqiz/3kqos+95OrLvrcT6666HM/ueqiz/3kqmvWVza7zV68TL3YnUf47terbcLraYEMPj0/mPze2mv2+ZXKAULl9WcKs0X6zNWZGutsG/t0VWl201J9l0f6Fp6fkMaFdjafW2ONyX03bX+ff0LpaepUfeeL7e5LmCbjCCz39N2mYtbf59GHRR8WfVj0YdGHRR8WfVj0YdGHRR8WfVghvrLbfbEXnyvAVw8QXp8W+Pb3Vd4bpy2+3X2dqbG+2cY+XWea3nNjH57dq7Slb5c2XH+7JCgDinQtL8AnCSy38t2mQnxA9GGd2/d4/AMvdxxgkVtTAQAAAABJRU5ErkJggg=="},835935:function(e,r,s){s.d(r,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAtCAIAAACBCCG9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAF2SURBVHhe7dXBbQIxEEDRnNJJWqAeuqEYLikgNVBGzpQQhwxkycbY4Mwlfk9zACR7pdF+8XQE0ggMEgkMEgkMEgkMEvUFtt8+nWx2h/gFJvH58m/38eW3Fm7W0RNYueDrAeWDxJjHYbcpcW3P73+xbqFRR0dglxtOD1QYk1kEsG6hVUc7sKtji+tgDt8v/bqFZh0Cg9sEBomSA1seu7oOprAIYN1Cq46OwMq5uKNcpi9mc93QjxZadXQEVpSzJ+fnwDwWgRXrFm7W0RcY8BCBQaI7Ait/gvEJ5tbfgsDgbgKDRAKDRH8f2BuwEGG03BHY8+vLP5h3GCaw6sSGYIDAqhMbggECq05sCAYIrDqxIRggsOrEhmCAwKoTG4IBAqtObAgGCKw6sSEYILDqxIZggMCqExuCAQKrTmwIBgisOrEhGCCw6sSGYIDAqhMbggECq05sCAakBAZcRBgtvYEBDxAYJBIYJBIYJBIYJBIYJBIYpDkePwAePMhF3WLIcQAAAABJRU5ErkJggg=="},250065:function(e,r,s){s.d(r,{Z:function(){return a},a:function(){return n}});var i=s(667294);let t={},o=i.createContext(t);function n(e){let r=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);