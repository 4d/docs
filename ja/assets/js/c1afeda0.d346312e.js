"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67695"],{251511:function(n,e,r){r.r(e),r.d(e,{metadata:()=>t,contentTitle:()=>l,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>s});var t=JSON.parse('{"id":"REST/asArray","title":"$asArray","description":"\u30AF\u30A8\u30EA\u306E\u7D50\u679C\u3092\u3001JSON\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u306A\u304F\u914D\u5217 (\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3) \u3068\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/REST/$asArray.md","sourceDirName":"REST","slug":"/REST/asArray","permalink":"/docs/ja/REST/asArray","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24asArray.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"asArray","title":"$asArray"},"sidebar":"docs","previous":{"title":"dataClass","permalink":"/docs/ja/REST/dataClass"},"next":{"title":"$atomic/$atOnce","permalink":"/docs/ja/REST/atomic_$atonce"}}'),a=r("785893"),o=r("250065");let s={id:"asArray",title:"$asArray"},l=void 0,i={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function d(n){let e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"\u30AF\u30A8\u30EA\u306E\u7D50\u679C\u3092\u3001JSON\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u306A\u304F\u914D\u5217 (\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3) \u3068\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,a.jsxs)(e.p,{children:["\u30EC\u30B9\u30DD\u30F3\u30B9\u3092\u914D\u5217\u3068\u3057\u3066\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001REST\u30EA\u30AF\u30A8\u30B9\u30C8\u306B ",(0,a.jsx)(e.code,{children:"$asArray"})," \u3092\u8FFD\u52A0\u3057\u307E\u3059 (",(0,a.jsx)(e.em,{children:"\u4F8B:"})," ",(0,a.jsx)(e.code,{children:"$asArray=true"}),")\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,a.jsx)(e.p,{children:"\u914D\u5217\u3068\u3057\u3066\u30EC\u30B9\u30DD\u30F3\u30B9\u3092\u53D6\u5F97\u3059\u308B\u4F8B\u3067\u3059\u3002"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:'GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true'})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u30EC\u30B9\u30DD\u30F3\u30B9"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'[\n	{\n		"__KEY": 15,\n		"__STAMP": 0,\n		"ID": 15,\n		"name": "Alpha North Yellow",\n		"creationDate": "!!0000-00-00!!",\n		"revenues": 82000000,\n		"extra": null,\n		"comments": "",\n		"__GlobalStamp": 0\n	},\n	{\n		"__KEY": 34,\n		"__STAMP": 0,\n		"ID": 34,\n		"name": "Astral Partner November",\n		"creationDate": "!!0000-00-00!!",\n		"revenues": 90000000,\n		"extra": null,\n		"comments": "",\n		"__GlobalStamp": 0\n	},\n	{\n		"__KEY": 47,\n		"__STAMP": 0,\n		"ID": 47,\n		"name": "Audio Production Uniform",\n		"creationDate": "!!0000-00-00!!",\n		"revenues": 28000000,\n		"extra": null,\n		"comments": "",\n		"__GlobalStamp": 0\n	}\n]\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u540C\u3058\u30C7\u30FC\u30BF\u3092\u30C7\u30D5\u30A9\u30EB\u30C8\u306E JSON\u5F62\u5F0F\u3067\u53D6\u5F97\u3057\u305F\u5834\u5408\u3067\u3059:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'{\n	"__entityModel": "Company",\n	"__GlobalStamp": 50,\n	"__COUNT": 52,\n	"__FIRST": 0,\n	"__ENTITIES": [\n		{\n			"__KEY": "15",\n			"__TIMESTAMP": "2018-03-28T14:38:07.434Z",\n			"__STAMP": 0,\n			"ID": 15,\n			"name": "Alpha North Yellow",\n			"creationDate": "0!0!0",\n			"revenues": 82000000,\n			"extra": null,\n			"comments": "",\n			"__GlobalStamp": 0,\n			"employees": {\n				"__deferred": {\n					"uri": "/rest/Company(15)/employees?$expand=employees"\n				}\n			}\n		},\n		{\n			"__KEY": "34",\n			"__TIMESTAMP": "2018-03-28T14:38:07.439Z",\n			"__STAMP": 0,\n			"ID": 34,\n			"name": "Astral Partner November",\n			"creationDate": "0!0!0",\n			"revenues": 90000000,\n			"extra": null,\n			"comments": "",\n			"__GlobalStamp": 0,\n			"employees": {\n				"__deferred": {\n					"uri": "/rest/Company(34)/employees?$expand=employees"\n				}\n			}\n		},\n		{\n			"__KEY": "47",\n			"__TIMESTAMP": "2018-03-28T14:38:07.443Z",\n			"__STAMP": 0,\n			"ID": 47,\n			"name": "Audio Production Uniform",\n			"creationDate": "0!0!0",\n			"revenues": 28000000,\n			"extra": null,\n			"comments": "",\n			"__GlobalStamp": 0,\n			"employees": {\n				"__deferred": {\n					"uri": "/rest/Company(47)/employees?$expand=employees"\n				}\n			}\n		}\n	],\n"__SENT": 3\n}\n'})})]})}function m(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return s}});var t=r(667294);let a={},o=t.createContext(a);function s(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);