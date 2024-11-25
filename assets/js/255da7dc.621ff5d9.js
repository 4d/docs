"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44900"],{671088:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/svg-find-element-id-by-coordinates","title":"SVG Find element ID by coordinates","description":"SVG Find element ID by coordinates ( { ;} pictureObject ; x ; y* ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/svg-find-element-id-by-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/svg-find-element-id-by-coordinates","permalink":"/docs/commands/svg-find-element-id-by-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-find-element-id-by-coordinates.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"svg-find-element-id-by-coordinates","title":"SVG Find element ID by coordinates","slug":"/commands/svg-find-element-id-by-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SVG EXPORT TO PICTURE","permalink":"/docs/commands/svg-export-to-picture"},"next":{"title":"SVG Find element IDs by rect","permalink":"/docs/commands/svg-find-element-ids-by-rect"}}'),i=n("785893"),r=n("250065");let d={id:"svg-find-element-id-by-coordinates",title:"SVG Find element ID by coordinates",slug:"/commands/svg-find-element-id-by-coordinates",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let t={a:"a",em:"em",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"SVG Find element ID by coordinates"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"pictureObject"})," ; ",(0,i.jsx)(t.em,{children:"x"})," ; ",(0,i.jsx)(t.em,{children:"y"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, pictureObject is an object name (string) If omitted, pictureObject is a field or variable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pictureObject"}),(0,i.jsx)(t.td,{children:"Picture"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Object name (if * specified) or Field or Variable (if * omitted)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"x"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"X coordinate in pixels"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"y"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Y coordinate in pixels"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"ID of element found at the location X, Y"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"SVG Find element ID by coordinates"}),' command returns the ID ("id" or "xml:id" attribute) of the XML element found at the location set by the coordinates (x,y) in the SVG picture designated by the ',(0,i.jsx)(t.em,{children:"pictureObject"})," parameter. This command can be used more particularly to create interactive graphic interfaces using SVG objects."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," For more information about the SVG format, refer to the ",(0,i.jsx)(t.em,{children:"Overview of XML Utilities Commands"})," section."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"pictureObject"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"pictureObject"})," parameter is a field or variable. In this case, you do not pass a string but a field or variable reference (field or variable object only)."]}),"\n",(0,i.jsx)(t.p,{children:'Note that it is not mandatory for the picture to be displayed in a form. In this case, the "object name" type syntax is not valid and you must pass a field or variable name.'}),"\n",(0,i.jsxs)(t.p,{children:["The coordinates passed in the ",(0,i.jsx)(t.em,{children:"x"})," and ",(0,i.jsx)(t.em,{children:"y"})," parameters must be expressed in pixels relative to the top left corner of the picture (0,0). In the context of a picture displayed in a form, you can use the values returned by the MouseX and MouseY system variables. These variables are updated in the On Clicked, On Double Clicked and On Mouse Up form events, as well as in the On Mouse Enter and On Mouse Move form events."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"}),' In the picture coordinate system, MouseX and MouseY always specify the same point of the picture, regardless of the picture display format (except in the case of the "Replicated" format), even when the picture has been scrolled or zoomed.']}),"\n",(0,i.jsx)(t.p,{children:"The point taken into account is the first point reached. For example, in the case below, the command will return the ID of the circle if the coordinates of point A are passed and that of the rectangle if the coordinates of point B are passed:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(878220).Z+"",width:"200",height:"76"})}),"\n",(0,i.jsx)(t.p,{children:"When the coordinates correspond to superimposed or composite objects, the command returns the ID of the first object having a valid ID attribute by going back, if necessary, among the parent elements."}),"\n",(0,i.jsx)(t.p,{children:"The command returns an empty string if:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'the root is reached without an "id" attribute having been found,'}),"\n",(0,i.jsx)(t.li,{children:"the coordinates point does not belong to any object,"}),"\n",(0,i.jsx)(t.li,{children:'the "id" attribute is an empty string.'}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"}),' This command cannot detect objects whose opacity value ("fill-opacity" attribute) is less than 0.01.']}),"\n",(0,i.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.em,{children:"pictureObject"})," does not contain a valid SVG picture, the command returns an empty string and the OK system variable is set to 0. Otherwise, if the command has been executed correctly, the OK system variable is set to 1."]}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/commands/svg-find-element-ids-by-rect",children:"SVG Find element IDs by rect"})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},878220:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return d}});var s=n(667294);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);