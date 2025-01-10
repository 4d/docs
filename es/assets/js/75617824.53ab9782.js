"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88548"],{54910:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"REST/asArray","title":"$asArray","description":"Devuelve el resultado de una petici\xf3n en un array (es decir, una colecci\xf3n) en lugar de un objeto JSON.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/REST/$asArray.md","sourceDirName":"REST","slug":"/REST/asArray","permalink":"/docs/es/20-R6/REST/asArray","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24asArray.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"asArray","title":"$asArray"},"sidebar":"docs","previous":{"title":"dataClass","permalink":"/docs/es/20-R6/REST/dataClass"},"next":{"title":"$atomic/$atOnce","permalink":"/docs/es/20-R6/REST/atomic_$atonce"}}'),a=r("785893"),o=r("250065");let s={id:"asArray",title:"$asArray"},l=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Devuelve el resultado de una petici\xf3n en un array (es decir, una colecci\xf3n) en lugar de un objeto JSON."}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Si desea obtener la respuesta en un array, s\xf3lo tiene que a\xf1adir ",(0,a.jsx)(n.code,{children:"$asArray"})," a su petici\xf3n REST (",(0,a.jsx)(n.em,{children:"e.g."}),", ",(0,a.jsx)(n.code,{children:"$asArray=true"}),")."]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Aqu\xed hay un ejemplo de c\xf3mo recibir la respuesta en un array."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[\n	{\n		"__KEY": 15,\n		"__STAMP": 0,\n		"ID": 15,\n		"name": "Alpha North Yellow",\n		"creationDate": "!!0000-00-00!!",\n		"revenues": 82000000,\n		"extra": null,\n		"comments": "",\n		"__GlobalStamp": 0\n	},\n	{\n		"__KEY": 34,\n		"__STAMP": 0,\n		"ID": 34,\n		"name": "Astral Partner November",\n		"creationDate": "!!0000-00-00!!",\n		"revenues": 90000000,\n		"extra": null,\n		"comments": "",\n		"__GlobalStamp": 0\n	},\n	{\n		"__KEY": 47,\n		"__STAMP": 0,\n		"ID": 47,\n		"name": "Audio Production Uniform",\n		"creationDate": "!!0000-00-00!!",\n		"revenues": 28000000,\n		"extra": null,\n		"comments": "",\n		"__GlobalStamp": 0\n	}\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Los mismos datos en su formato JSON por defecto:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"__entityModel": "Company",\n	"__GlobalStamp": 50,\n	"__COUNT": 52,\n	"__FIRST": 0,\n	"__ENTITIES": [\n		{\n			"__KEY": "15",\n			"__TIMESTAMP": "2018-03-28T14:38:07.434Z",\n			"__STAMP": 0,\n			"ID": 15,\n			"name": "Alpha North Yellow",\n			"creationDate": "0!0!0",\n			"revenues": 82000000,\n			"extra": null,\n			"comments": "",\n			"__GlobalStamp": 0,\n			"employees": {\n				"__deferred": {\n					"uri": "/rest/Company(15)/employees?$expand=employees"\n				}\n			}\n		},\n		{\n			"__KEY": "34",\n			"__TIMESTAMP": "2018-03-28T14:38:07.439Z",\n			"__STAMP": 0,\n			"ID": 34,\n			"name": "Astral Partner November",\n			"creationDate": "0!0!0",\n			"revenues": 90000000,\n			"extra": null,\n			"comments": "",\n			"__GlobalStamp": 0,\n			"employees": {\n				"__deferred": {\n					"uri": "/rest/Company(34)/employees?$expand=employees"\n				}\n			}\n		},\n		{\n			"__KEY": "47",\n			"__TIMESTAMP": "2018-03-28T14:38:07.443Z",\n			"__STAMP": 0,\n			"ID": 47,\n			"name": "Audio Production Uniform",\n			"creationDate": "0!0!0",\n			"revenues": 28000000,\n			"extra": null,\n			"comments": "",\n			"__GlobalStamp": 0,\n			"employees": {\n				"__deferred": {\n					"uri": "/rest/Company(47)/employees?$expand=employees"\n				}\n			}\n		}\n	],\n"__SENT": 3\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var t=r(667294);let a={},o=t.createContext(a);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);