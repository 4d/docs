"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55442"],{264681:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>s});var t=JSON.parse('{"id":"REST/asArray","title":"$asArray","description":"Returns the result of a query in an array (i.e. a collection) instead of a JSON object.","source":"@site/versioned_docs/version-18/REST/$asArray.md","sourceDirName":"REST","slug":"/REST/asArray","permalink":"/docs/18/REST/asArray","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24asArray.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"asArray","title":"$asArray"},"sidebar":"docs","previous":{"title":"{dataClass}","permalink":"/docs/18/REST/{dataClass}"},"next":{"title":"$atomic/$atOnce","permalink":"/docs/18/REST/atomic_$atonce"}}'),a=r("785893"),o=r("250065");let s={id:"asArray",title:"$asArray"},l=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Returns the result of a query in an array (i.e. a collection) instead of a JSON object."}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["If you want to receive the response in an array, you just have to add ",(0,a.jsx)(n.code,{children:"$asArray"})," to your REST request (",(0,a.jsx)(n.em,{children:"e.g."}),", ",(0,a.jsx)(n.code,{children:"$asArray=true"}),")."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"Here is an example or how to receive the response in an array."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[\n	{\n		"__KEY": 15,\n		"__STAMP": 0,\n		"ID": 15,\n		"name": "Alpha North Yellow",\n		"creationDate": "!!0000-00-00!!",\n		"revenues": 82000000,\n		"extra": null,\n		"comments": "",\n		"__GlobalStamp": 0\n	},\n	{\n		"__KEY": 34,\n		"__STAMP": 0,\n		"ID": 34,\n		"name": "Astral Partner November",\n		"creationDate": "!!0000-00-00!!",\n		"revenues": 90000000,\n		"extra": null,\n		"comments": "",\n		"__GlobalStamp": 0\n	},\n	{\n		"__KEY": 47,\n		"__STAMP": 0,\n		"ID": 47,\n		"name": "Audio Production Uniform",\n		"creationDate": "!!0000-00-00!!",\n		"revenues": 28000000,\n		"extra": null,\n		"comments": "",\n		"__GlobalStamp": 0\n	}\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"The same data in its default JSON format:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"__entityModel": "Company",\n	"__GlobalStamp": 50,\n	"__COUNT": 52,\n	"__FIRST": 0,\n	"__ENTITIES": [\n		{\n			"__KEY": "15",\n			"__TIMESTAMP": "2018-03-28T14:38:07.434Z",\n			"__STAMP": 0,\n			"ID": 15,\n			"name": "Alpha North Yellow",\n			"creationDate": "0!0!0",\n			"revenues": 82000000,\n			"extra": null,\n			"comments": "",\n			"__GlobalStamp": 0,\n			"employees": {\n				"__deferred": {\n					"uri": "/rest/Company(15)/employees?$expand=employees"\n				}\n			}\n		},\n		{\n			"__KEY": "34",\n			"__TIMESTAMP": "2018-03-28T14:38:07.439Z",\n			"__STAMP": 0,\n			"ID": 34,\n			"name": "Astral Partner November",\n			"creationDate": "0!0!0",\n			"revenues": 90000000,\n			"extra": null,\n			"comments": "",\n			"__GlobalStamp": 0,\n			"employees": {\n				"__deferred": {\n					"uri": "/rest/Company(34)/employees?$expand=employees"\n				}\n			}\n		},\n		{\n			"__KEY": "47",\n			"__TIMESTAMP": "2018-03-28T14:38:07.443Z",\n			"__STAMP": 0,\n			"ID": 47,\n			"name": "Audio Production Uniform",\n			"creationDate": "0!0!0",\n			"revenues": 28000000,\n			"extra": null,\n			"comments": "",\n			"__GlobalStamp": 0,\n			"employees": {\n				"__deferred": {\n					"uri": "/rest/Company(47)/employees?$expand=employees"\n				}\n			}\n		}\n	],\n"__SENT": 3\n}\n'})})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var t=r(667294);let a={},o=t.createContext(a);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);