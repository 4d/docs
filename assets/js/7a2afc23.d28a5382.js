"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13973"],{99294:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/get-picture-metadata","title":"GET PICTURE METADATA","description":"GET PICTURE METADATA ( picture ; metaName ; metaContents {; metaName2 ; metaContents2 ; ... ; metaNameN ; metaContentsN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-picture-metadata.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-metadata","permalink":"/docs/20-R7/commands/get-picture-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-metadata.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-picture-metadata","title":"GET PICTURE METADATA","slug":"/commands/get-picture-metadata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE KEYWORDS","permalink":"/docs/20-R7/commands/get-picture-keywords"},"next":{"title":"Is picture file","permalink":"/docs/20-R7/commands/is-picture-file"}}'),s=n("785893"),r=n("250065");let i={id:"get-picture-metadata",title:"GET PICTURE METADATA",slug:"/commands/get-picture-metadata",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"GET PICTURE METADATA"})," ( ",(0,s.jsx)(t.em,{children:"picture"})," ; ",(0,s.jsx)(t.em,{children:"metaName"})," ; ",(0,s.jsx)(t.em,{children:"metaContents"})," {; ",(0,s.jsx)(t.em,{children:"metaName2"})," ; ",(0,s.jsx)(t.em,{children:"metaContents2"})," ; ... ; ",(0,s.jsx)(t.em,{children:"metaNameN"})," ; ",(0,s.jsx)(t.em,{children:"metaContentsN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"picture"}),(0,s.jsx)(t.td,{children:"Picture"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Picture whose metadata you want to get"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"metaName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Name or path of block to get"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"metaContents"}),(0,s.jsx)(t.td,{children:"Variable"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Metadata contents"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"GET PICTURE METADATA"})," command can be used to read the contents of the metadata (or meta-tags) found in ",(0,s.jsx)(t.em,{children:"picture"})," (4D picture field or variable). For more information about metadata, please refer to the description of the ",(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/set-picture-metadata",children:"SET PICTURE METADATA"})," command."]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.em,{children:"metaName"})," parameter, pass a string specifying the type of metadata to retrieve. You can pass:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["a constant from the ",(0,s.jsx)(t.em,{children:"Picture Metadata Names"})," theme containing a tag path,"]}),"\n",(0,s.jsx)(t.li,{children:'the name of a complete block of metadata ("TIFF", "EXIF", "GPS" or "IPTC"),'}),"\n",(0,s.jsx)(t.li,{children:'an empty string ("").'}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Pass the variable intended to receive the metadata in the ",(0,s.jsx)(t.em,{children:"metaContents"})," parameter."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you passed a tag path in ",(0,s.jsx)(t.em,{children:"metaName"}),", the ",(0,s.jsx)(t.em,{children:"metaContents"})," parameter will directly contain the value to get. The value will be converted to the type of the variable (if the variable type is not defined, the Text type is used by default). Variables of the Text type will be formatted in XML (XMP standard). You can pass an array when the metadata contains more than one value (this is the case, more particularly, for the IPTC Keywords tags)."]}),"\n",(0,s.jsxs)(t.li,{children:["If you passed a block name or an empty string in ",(0,s.jsx)(t.em,{children:"metaName"}),", the ",(0,s.jsx)(t.em,{children:"metaContents"})," parameter must be a valid XML DOM element reference. In this case, the contents of the designated block (or all the blocks if you passed an empty string in ",(0,s.jsx)(t.em,{children:"metaName"}),") is recopied into the element referenced."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:"Use of DOM tree structures"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0$xml:=DOM Create XML Ref("Root")\xa0//Creation of an XML DOM tree\n\xa0\n\xa0\xa0//Reception of TIFF metadata\n\xa0$_Xml_TIFF:=DOM Create XML element($xml;"/Root/TIFF")\n\xa0GET PICTURE METADATA(vPicture;"TIFF";$_Xml_TIFF)\n\xa0\n\xa0\xa0//Reception of GPS metadata\n\xa0$_Xml_GPS:=DOM Create XML element($xml;"/Root/GPS")\n\xa0GET PICTURE METADATA(vPicture;"GPS";$_Xml_GPS)\n'})}),"\n",(0,s.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.p,{children:"Use of variables"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0var $dateAsDate : Date\n\xa0GET PICTURE METADATA(vPicture;TIFF date time;$dateAsDate)\n\xa0\xa0//only returns the date since $dateAsDate is of the Date type\n\xa0\n\xa0var $dateAsText : Text\n\xa0GET PICTURE METADATA(vPicture;TIFF date time;$dateAsText)\n\xa0\xa0//only returns the date but in XML format\n\xa0\n\xa0C_INTEGER($urgency)\n\xa0GET PICTURE METADATA(vPicture;IPTC urgency;$urgency)\n"})}),"\n",(0,s.jsx)(t.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(t.p,{children:"Reception of tags with multiple values in arrays"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0ARRAY TEXT($tTkeywords;0)\n\xa0GET PICTURE METADATA(vPicture;IPTC keywords;$tTkeywords)\n"})}),"\n",(0,s.jsx)(t.p,{children:"After execution of the command, arrTkeywords contains for example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0$arrTkeywords{1}="France"\n\xa0$arrTkeywords{2}="Europe"\n'})}),"\n",(0,s.jsx)(t.h4,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(t.p,{children:"Reception of tags with multiple values in a Text variable"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0var $vTwords;0 : Text\n\xa0GET PICTURE METADATA(vPicture;IPTC keywords;$vTwords)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["After execution of the command, ",(0,s.jsx)(t.em,{children:"vTwords"}),' contains for example "France;Europe".']}),"\n",(0,s.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"OK"})," system variable returns 1 if the retrieval of the metadata has proceeded correctly and 0 if an error occurs or if at least one of the tags is not found. In all cases, the any values that can be read are returned."]}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/get-picture-keywords",children:"GET PICTURE KEYWORDS"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:"Picture Metadata Names"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:"Picture Metadata Values"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/20-R7/commands/set-picture-metadata",children:"SET PICTURE METADATA"})]}),"\n",(0,s.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"1122"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifies variables"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return i}});var a=n(667294);let s={},r=a.createContext(s);function i(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);