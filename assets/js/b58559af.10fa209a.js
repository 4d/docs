"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10778"],{595208:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>s,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/dom-create-xml-element","title":"DOM Create XML element","description":"DOM Create XML element ( elementRef ; xPath {; attribName ; attrValue} {; attribName2 ; attrValue2 ; ... ; attribNameN ; attrValueN} ) : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/dom-create-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-create-xml-element","permalink":"/docs/commands/dom-create-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-create-xml-element.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-create-xml-element","title":"DOM Create XML element","slug":"/commands/dom-create-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Count XML elements","permalink":"/docs/commands/dom-count-xml-elements"},"next":{"title":"DOM Create XML element arrays","permalink":"/docs/commands/dom-create-xml-element-arrays"}}'),l=t("785893"),a=t("250065");let s={id:"dom-create-xml-element",title:"DOM Create XML element",slug:"/commands/dom-create-xml-element",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"DOM Create XML element"})," ( ",(0,l.jsx)(n.em,{children:"elementRef"})," ; ",(0,l.jsx)(n.em,{children:"xPath"})," {; ",(0,l.jsx)(n.em,{children:"attribName"})," ; ",(0,l.jsx)(n.em,{children:"attrValue"}),"} {; ",(0,l.jsx)(n.em,{children:"attribName2"})," ; ",(0,l.jsx)(n.em,{children:"attrValue2"})," ; ... ; ",(0,l.jsx)(n.em,{children:"attribNameN"})," ; ",(0,l.jsx)(n.em,{children:"attrValueN"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"elementRef"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Root XML element reference"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"xPath"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"XPath path of the XML element to create"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"attribName"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Attribute to set"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"attrValue"}),(0,l.jsx)(n.td,{children:"Text, Boolean, Integer, Real, Time, Date"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"New attribute value"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Function result"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Reference of the created XML element"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"DOM Create XML element"})," command creates a new element in the XML element ",(0,l.jsx)(n.em,{children:"elementRef"})," in the path set by the ",(0,l.jsx)(n.em,{children:"xPath"})," parameter and adds attributes to it if necessary."]}),"\n",(0,l.jsxs)(n.p,{children:["Pass the root element reference in ",(0,l.jsx)(n.em,{children:"elementRef"})," (created, for example, using the ",(0,l.jsx)(n.a,{href:"/docs/commands/dom-create-xml-ref",children:"DOM Create XML Ref"})," command)."]}),"\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.em,{children:"xPath"}),", pass the path of the element to create, expressed using the XPath notation (for more information, see the ",(0,l.jsx)(n.em,{children:"Support of XPath notation (DOM)"})," section). The following path expressions are supported:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Expression"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Action"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"/"}),(0,l.jsx)(n.td,{children:"Designates the root node (absolute path)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"para[1]"}),(0,l.jsx)(n.td,{children:"Designates the first para child of the context node"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"para[last()]"}),(0,l.jsx)(n.td,{children:"Designates the last para child of the context node"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.em,{children:[(0,l.jsx)(n.em,{children:"Compatibility Note:"})," Starting with v18 R3, the XPath implementation in 4D is more compliant. For compatibility reasons, the previous non-standard implementation is maintained by default in converted databases. If you want to benefit from the extended features in your converted databases, you need to select the ",(0,l.jsx)(n.em,{children:"Use standard XPath"})," compatibility option of the Compatibility page."]})}),"\n",(0,l.jsxs)(n.p,{children:["It is possible to pass a simple item name directly in the ",(0,l.jsx)(n.em,{children:"xPath"})," parameter in order to create a sub-item from the current item (see example 3)."]}),"\n",(0,l.jsx)(n.p,{children:"If any path elements do not exist, they are created. If path elements already exist, a new node is added."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note:"})," If you have defined one or more namespaces for the tree set using ",(0,l.jsx)(n.em,{children:"elementRef"})," (see the ",(0,l.jsx)(n.a,{href:"/docs/commands/dom-create-xml-ref",children:"DOM Create XML Ref"})," command), you must precede the ",(0,l.jsx)(n.em,{children:"xPath"})," parameter with the namespace to be used (for example, \u201CMyNameSpace:MyElement\u201D)."]}),"\n",(0,l.jsxs)(n.p,{children:["You can pass attribute/attribute value pairs (in the form of variables, fields or literal values) in the optional ",(0,l.jsx)(n.em,{children:"attrName"})," and ",(0,l.jsx)(n.em,{children:"attrValue"})," parameters. You can pass as many pairs as you want."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.em,{children:"attrValue"})," parameter can be of the text type or another type (Boolean, integer, real, date or time). If you pass a value other than text, 4D handles its conversion to text, according to the following principles:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Type"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Example of converted value"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:'"true" or "false"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:'"123456"'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Real"}),(0,l.jsx)(n.td,{children:'"12.34" (the decimal separator is always ".")'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Date"}),(0,l.jsx)(n.td,{children:'"2006-12-04T00:00:00Z" (RFC 3339 standard)'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Time"}),(0,l.jsx)(n.td,{children:'"5233" (number of seconds)'})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"The command returns the XML reference of the element created as a result."}),"\n",(0,l.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,l.jsx)(n.p,{children:"We want to create the following element:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:'\xa0\xa0\xa0\xa0\xa0<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n<RootElement>\n   <Elem1>\n      <Elem2>\n         <Elem3> </Elem3>\n         <Elem3> </Elem3>\n      </Elem2>\n   </Elem1>\n</RootElement>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n'})}),"\n",(0,l.jsx)(n.p,{children:"To do so, simply write:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var vRootRef;vElemRef : Text\n\xa0vRootRef:=DOM Create XML Ref("RootElement")\n\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,l.jsx)(n.p,{children:"We want to create the following element (containing attributes):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:'\xa0\xa0\xa0\xa0\xa0\xa0\xa0<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n<RootElement>\n   <Elem1>\n      <Elem2>\n         <Elem3 Font=Verdana Size=10> </Elem3>\n         <Elem3 Font=Verdana Size=8> </Elem3>\n      </Elem2>\n   </Elem1>\n</RootElement>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n'})}),"\n",(0,l.jsx)(n.p,{children:"To do so, simply write:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var vRootRef;vElemRef : Text\n\xa0var $aAttrName1;$aAttrName2;$aAttrVal1;$aAttrVal2;$aAttrVal3 : Text\n\n$aAttrName1:="Font"\n\xa0$aAttrName2:="Size"\n\xa0$aAttrVal1:="Verdana"\n\xa0$aAttrVal2:="10"\n\xa0$aAttrVal3:="8"\n\xa0\n\xa0vRootRef:=DOM Create XML Ref("RootElement")\n\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3"\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal2)\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal3)\n\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"If you want to insert an element afterwards, you can write:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath;"Font";"Arial")\n'})}),"\n",(0,l.jsx)(n.p,{children:"You have then:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:'\xa0\xa0\xa0\xa0\xa0<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n<RootElement>\n   <Elem1>\n      <Elem2>\n         <Elem3 Font=Verdana Size=10> </Elem3>\n         <Elem3 Font=Arial> </Elem3>\n         <Elem3 Font=Verdana Size=8> </Elem3>\n      </Elem2>\n   </Elem1>\n</RootElement>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n'})}),"\n",(0,l.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,l.jsx)(n.p,{children:"We want to create and export the following structure:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n<Root>\n\xa0\xa0\xa0<Elem1>Hello</Elem1>\n</Root>\n'})}),"\n",(0,l.jsx)(n.p,{children:"We want to use the syntax based on a simple item name. To do this, simply write:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $root : Text\n\xa0var $ref1 : Text\n\xa0\n\xa0$root:=DOM Create XML Ref("Root")\n\xa0$ref1:=DOM Create XML element($root;"Elem1")\n\xa0DOM SET XML ELEMENT VALUE($ref1;"Hello")\n\xa0DOM EXPORT TO FILE($root;"mydoc.xml")\n\xa0DOM CLOSE XML($root)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,l.jsx)(n.p,{children:"If the command was executed correctly, the system variable OK is set to 1. Otherwise, it is set to 0 and an error is generated."}),"\n",(0,l.jsx)(n.h2,{id:"error-management",children:"Error management"}),"\n",(0,l.jsx)(n.p,{children:"An error is generated when:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The root element reference is invalid."}),"\n",(0,l.jsx)(n.li,{children:"The name of the element to create is invalid (for example, if it starts with a number)."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/commands/dom-create-xml-element-arrays",children:"DOM Create XML element arrays"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/dom-get-xml-element",children:"DOM Get XML element"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/dom-remove-xml-element",children:"DOM REMOVE XML ELEMENT"})]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"865"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifies variables"}),(0,l.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var r=t(667294);let l={},a=r.createContext(l);function s(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);