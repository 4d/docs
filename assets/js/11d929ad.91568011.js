"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53293"],{396882:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/font-list","title":"FONT LIST","description":"FONT LIST ( fonts {; listType } )FONT LIST ( fonts {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/font-list.md","sourceDirName":"commands-legacy","slug":"/commands/font-list","permalink":"/docs/20-R7/commands/font-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffont-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"font-list","title":"FONT LIST","slug":"/commands/font-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Font file","permalink":"/docs/20-R7/commands/font-file"},"next":{"title":"FONT STYLE LIST","permalink":"/docs/20-R7/commands/font-style-list"}}'),i=t("785893"),r=t("250065");let o={id:"font-list",title:"FONT LIST",slug:"/commands/font-list",displayed_sidebar:"docs"},l=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"About scalable fonts",id:"about-scalable-fonts",level:3},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FONT LIST"})," ( ",(0,i.jsx)(n.em,{children:"fonts"})," {; ",(0,i.jsx)(n.em,{children:"listType"})," } )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"FONT LIST"})," ( ",(0,i.jsx)(n.em,{children:"fonts"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fonts"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Array of font names"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"listType | *"}),(0,i.jsx)(n.td,{children:"Integer, Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Font type list to return or * to return font names under macOS"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"FONT LIST"})," command populates the ",(0,i.jsx)(n.em,{children:"fonts"})," text array with the names of scalable fonts available on your system."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"listType"})," parameter lets you designate the type of font list you want to get. To do so, you can pass one of the following constants in the ",(0,i.jsx)(n.em,{children:"listType"}),' parameter, available in the "',(0,i.jsx)(n.em,{children:"Font Type List"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Favorite fonts"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"fonts"})," contains the list of favorite fonts.",(0,i.jsx)(n.br,{}),"- Under Windows: list of active font family names.",(0,i.jsx)(n.br,{}),'- Under macOS: list of font family names found in the control panel, entitled "Favorites" in English, "Favoris" in French, "Favoriten" in German, and so on . This collection may be blank if the user has not added any favorite fonts.',(0,i.jsx)(n.br,{})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Recent fonts"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"fonts"})," contains the list of recent fonts (the ones used during the 4D session). This list is used in particular by multi-style text areas."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"System fonts"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"fonts"})," contains the list of all the system fonts. Default option when ",(0,i.jsx)(n.em,{children:"listType"})," is omitted."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Under macOS, when you pass the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, the command populates the ",(0,i.jsx)(n.em,{children:"fonts"})," array with the names of the fonts themselves, and not with the names of the font families. The default operation simplifies programmed management of rich text areas, which use font families. If you pass the ",(0,i.jsx)(n.em,{children:"*"}),' parameter, font names, for example, "Arial bold", "Arial italic", "Arial narrow italic," are returned instead of families, such as "Arial", "Arial black" or "Arial narrow".',(0,i.jsx)(n.br,{}),"\nUnder Windows, the ",(0,i.jsx)(n.em,{children:"*"})," parameter has no effect. The command still returns the font families."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Under macOS, if you use the result of this command with ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/st-set-attributes",children:"ST SET ATTRIBUTES"})," in a multi-style text area, you must not pass the ",(0,i.jsx)(n.em,{children:"*"})," parameter (only font families are supported as Attribute font name). This limitation does not apply to 4D Write Pro areas, which accept either font or font family names."]}),"\n",(0,i.jsx)(n.h3,{id:"about-scalable-fonts",children:"About scalable fonts"}),"\n",(0,i.jsx)(n.p,{children:"This command returns only scalable fonts. Using non-scalable fonts (i.e. bitmap fonts) to design interfaces is not recommended since they are based on an outdated technology and suffer from limitations regarding size variations. They are not supported in cutting-edge features of 4D such as 4D Write Pro areas ."}),"\n",(0,i.jsxs)(n.p,{children:["Under macOS, this principle has been in effect since macOS 10.4 (",(0,i.jsx)(n.em,{children:"QuickDraw"})," bitmap fonts are obsolete beginning with this version)."]}),"\n",(0,i.jsx)(n.p,{children:'Under Windows, this principle is applied beginning with 4D v15 R4. In order to help developers select only modern fonts for their interfaces, only "trueType" or "openType" scalable fonts are listed. For example, "ASI_Mono", "MS Sans Serif" and "System" fonts are no longer available. In addition, GDI names are also ignored; only DirectWrite font family names are supported. For example, "Arial Black" or "Segoe UI Black" font families are not in the list; only "Arial" and "Segoe" are returned.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Compatibility notes for Windows:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Bitmap fonts can still be used in your 4D forms (except in 4D Write Pro areas). They are just removed from the list returned by this command. However, to ensure compatibility with future versions of 4D and Windows, we recommend using only DirectWrite font families."}),"\n",(0,i.jsxs)(n.li,{children:["Since bitmap fonts are filtered from the ",(0,i.jsx)(n.em,{children:"fonts"})," parameter on Windows, the resulting list is different in 4D v15 R4 applications and higher, compared to previous releases. Please make sure to adapt your code if you were using this command to select a non-scalable font."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.p,{children:"In a form, you want a drop-down list that displays a list of the fonts available on your system. The method of the drop-down list is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asFont;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FONT LIST(asFont)\n\xa0\xa0// ...\n\xa0\n\xa0End case\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.p,{children:"You want to get a list of recent fonts:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0FONT LIST($arrFonts;Recent fonts)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/font-style-list",children:"FONT STYLE LIST"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"Font Type List"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/object-set-font",children:"OBJECT SET FONT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/set-recent-fonts",children:"SET RECENT FONTS"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/st-set-attributes",children:"ST SET ATTRIBUTES"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"460"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);