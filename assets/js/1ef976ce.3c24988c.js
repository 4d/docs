"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30828"],{505637:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/set-picture-metadata","title":"SET PICTURE METADATA","description":"SET PICTURE METADATA ( picture ; metaName ; metaContents {; metaName2 ; metaContents2 ; ... ; metaNameN ; metaContentsN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-picture-metadata.md","sourceDirName":"commands-legacy","slug":"/commands/set-picture-metadata","permalink":"/docs/commands/set-picture-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-picture-metadata.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-picture-metadata","title":"SET PICTURE METADATA","slug":"/commands/set-picture-metadata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PICTURE FILE NAME","permalink":"/docs/commands/set-picture-file-name"},"next":{"title":"SET PICTURE TO LIBRARY","permalink":"/docs/commands/set-picture-to-library"}}'),s=n("785893"),r=n("250065");let i={id:"set-picture-metadata",title:"SET PICTURE METADATA",slug:"/commands/set-picture-metadata",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Note",id:"note",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"SET PICTURE METADATA"})," ( ",(0,s.jsx)(t.em,{children:"picture"})," ; ",(0,s.jsx)(t.em,{children:"metaName"})," ; ",(0,s.jsx)(t.em,{children:"metaContents"})," {; ",(0,s.jsx)(t.em,{children:"metaName2"})," ; ",(0,s.jsx)(t.em,{children:"metaContents2"})," ; ... ; ",(0,s.jsx)(t.em,{children:"metaNameN"})," ; ",(0,s.jsx)(t.em,{children:"metaContentsN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"picture"}),(0,s.jsx)(t.td,{children:"Picture"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Picture whose metadata you want to set"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"metaName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Name or path of block to set"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"metaContents"}),(0,s.jsx)(t.td,{children:"Variable"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Metadata contents"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The SET PICTURE METADATA command lets you set or modify the contents of the metadata (or meta-tags) found in the ",(0,s.jsx)(t.em,{children:"picture"})," (4D picture field or variable), when they are modifiable."]}),"\n",(0,s.jsx)(t.p,{children:"Metadata are additional information inserted into pictures. 4D lets you handled four types of standard metadata: EXIF, GPS, IPTC and TIFF."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," For a detailed description of these metadata types, you can consult the following documents: ",(0,s.jsx)(t.a,{href:"http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf",children:"http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf"})," (IPTC) and ",(0,s.jsx)(t.a,{href:"http://exif.org/Exif2-2.PDF",children:"http://exif.org/Exif2-2.PDF"})," (TIFF, EXIF and GPS)."]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.em,{children:"metaName"})," parameter, pass a string specifying the type of metadata to set or modify. You can pass:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["one of the constants from the ",(0,s.jsx)(t.em,{children:"Picture Metadata Names"}),' theme. This theme groups together all the tags supported by 4D. Each constant contains a tag path (for example, "TIFF/DateTime"),']}),"\n",(0,s.jsx)(t.li,{children:'the name of a complete block of metadata ("TIFF", "EXIF", "GPS" or "IPTC"),'}),"\n",(0,s.jsx)(t.li,{children:'an empty string ("").'}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Pass the new values of the metadata in the ",(0,s.jsx)(t.em,{children:"metaContents"})," parameter:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you passed a tag path constant in ",(0,s.jsx)(t.em,{children:"metaName"}),", in the contents parameter you can pass the value to set directly or one of the appropriate constants from the ",(0,s.jsx)(t.em,{children:"Picture Metadata Values"}),' theme. The value can be of the Text, Longint, Real, Date or Time type, according to the metadata specified. You can use an array if the metadata contains more than one value. If you pass a string, it must be formated in XML (XMP standard). You can pass an empty string ("") in order to erase any existing metadata. If ',(0,s.jsx)(t.em,{children:"metaName"})," is ",(0,s.jsx)(t.em,{children:"undefined"}),", an empty string is used."]}),"\n",(0,s.jsxs)(t.li,{children:["If you passed a block name or an empty string in ",(0,s.jsx)(t.em,{children:"metaName"}),", in the ",(0,s.jsx)(t.em,{children:"metaContents"})," parameter you can pass the XML DOM reference of the element containing the metadata to set. In the case of an empty string, all the metadata will be modified."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Warning:"})," Certain metadata are read only and therefore cannot be modified by the ",(0,s.jsx)(t.strong,{children:"SET PICTURE METADATA"})," command, for example TIFF XResolution/TIFF YResolution, EXIF Color Space or EXIF Pixel X Dimension/EXIF Pixel Y Dimension."]}),"\n",(0,s.jsxs)(t.p,{children:["Under Windows, if an error occurs during execution of the command, the ",(0,s.jsx)(t.em,{children:"OK"})," variable is set to 0. Note that under Mac OS, for technical reasons, metadata writing errors are not detected. Therefore this command does not modify the ",(0,s.jsx)(t.em,{children:"OK"})," variable under Mac OS."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Only certain picture formats (more specifically, JPEG and TIFF) support metadata. Conversely, formats such as GIF or BMP do not accept metadata. When you convert a picture with metadata to a format that does not support it, then information is lost."}),"\n",(0,s.jsx)(t.li,{children:"Under OS X version 10.7 (Lion), a bug in the native framework used for encoding and decoding picture metadata may cause inaccuracies in GPS coordinates. In this case, updating to OS X 10.8 (Mountain Lion) or 10.9 (Maverick) is strongly recommended."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:'Setting several values of the "Keywords" metadata via arrays:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrTkeywords;2)\n\xa0$arrTkeywords{1}:="France"\n\xa0$arrTkeywords{2}:="Europe"\n\xa0SET PICTURE METADATA(vPicture;IPTC keywords;$arrTkeywords)\n'})}),"\n",(0,s.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.p,{children:"Setting of GPS block via a DOM reference:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $domMetas : Text\n\xa0$domMetas:=DOM Parse XML source("metas.xml")\n\xa0var $gpsRef : Text\n\xa0$gpsRef:=DOM Find XML element($domMetas;"Metadatas/GPS")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SET PICTURE METADATA(vImage;"GPS";$refGPS)\n\xa0\xa0//here $gpsRef actually points to the GPS element\n\xa0\xa0\xa0\xa0...\n\xa0End if\n\xa0DOM CLOSE XML($domMetas)\n'})}),"\n",(0,s.jsx)(t.h4,{id:"note",children:"Note"}),"\n",(0,s.jsx)(t.p,{children:"When all the metadata are handled via a DOM element reference, the tags are stored as attributes attached to an element (a child of the referenced element) whose name is the block name (TIFF, IPTC, etc.). When a specific metadata block is manipulated, the block tags are stored as attributes that are directly attached to the element referenced by the command."}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/get-picture-keywords",children:"GET PICTURE KEYWORDS"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/get-picture-metadata",children:"GET PICTURE METADATA"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:"Picture Metadata Names"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:"Picture Metadata Values"})]}),"\n",(0,s.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"1121"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modifies variables"}),(0,s.jsx)(t.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return i}});var a=n(667294);let s={},r=a.createContext(s);function i(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);