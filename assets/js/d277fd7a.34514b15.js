"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67385"],{80823:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/transform-picture","title":"TRANSFORM PICTURE","description":"TRANSFORM PICTURE ( picture ; operator {; param1 {; param2 {; param3 {; param4}}}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/transform-picture.md","sourceDirName":"commands-legacy","slug":"/commands/transform-picture","permalink":"/docs/20-R8/commands/transform-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftransform-picture.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"transform-picture","title":"TRANSFORM PICTURE","slug":"/commands/transform-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PICTURE TO LIBRARY","permalink":"/docs/20-R8/commands/set-picture-to-library"},"next":{"title":"WRITE PICTURE FILE","permalink":"/docs/20-R8/commands/write-picture-file"}}'),i=r("785893"),s=r("250065");let d={id:"transform-picture",title:"TRANSFORM PICTURE",slug:"/commands/transform-picture",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"TRANSFORM PICTURE"})," ( ",(0,i.jsx)(n.em,{children:"picture"})," ; ",(0,i.jsx)(n.em,{children:"operator"})," {; ",(0,i.jsx)(n.em,{children:"param1"})," {; ",(0,i.jsx)(n.em,{children:"param2"})," {; ",(0,i.jsx)(n.em,{children:"param3"})," {; ",(0,i.jsx)(n.em,{children:"param4"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"picture"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Source picture to be transformed"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Resulting picture after transformation"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"operator"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Type of transformation to be done"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"param1"}),(0,i.jsx)(n.td,{children:"Real"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Transformation parameter"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"param2"}),(0,i.jsx)(n.td,{children:"Real"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Transformation parameter"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"param3"}),(0,i.jsx)(n.td,{children:"Real"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Transformation parameter"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"param4"}),(0,i.jsx)(n.td,{children:"Real"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Transformation parameter"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The TRANSFORM PICTURE command applies a transformation of the ",(0,i.jsx)(n.em,{children:"operator"})," type to the picture passed in the ",(0,i.jsx)(n.em,{children:"picture"})," parameter.This command extends the functionalities offered by conventional picture transformation operators. These operators remain entirely usable in 4D."]}),"\n",(0,i.jsxs)(n.p,{children:["The source ",(0,i.jsx)(n.em,{children:"picture"})," is modified directly after execution of the command. Note that certain operations are not destructive and can be reversed by performing the opposite operation or by means of the \u201CReset\u201D operation. For example, a picture reduced to 1% will regain its original size with no alteration if it is enlarged by a factor of 100 subsequently. Transformations do not modify the original picture type: for example, a vectorial picture will remain vectorial after its transformation."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"operator"}),", pass the number of the operation to be carried out and in ",(0,i.jsx)(n.em,{children:"param"}),', the parameter(s) needed for this operation (the number of parameters depends on the operation). You can use one of the constants of the "',(0,i.jsx)(n.em,{children:"Picture Transformation"}),'" theme in ',(0,i.jsx)(n.em,{children:"operator"}),". These operators and their parameters are described in the following table:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"operator (value)"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"param1"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"param2"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"param3"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"param4"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Values"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Cancellable"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Reset (0)"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Scale (1)"}),(0,i.jsx)(n.td,{children:"Width"}),(0,i.jsx)(n.td,{children:"Height"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Factors"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Translate (2)"}),(0,i.jsx)(n.td,{children:"X axis"}),(0,i.jsx)(n.td,{children:"Y axis"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Pixels"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Flip horizontally (3)"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Flip vertically (4)"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Crop (100)"}),(0,i.jsx)(n.td,{children:"X Orig."}),(0,i.jsx)(n.td,{children:"Y Orig."}),(0,i.jsx)(n.td,{children:"Width"}),(0,i.jsx)(n.td,{children:"Height"}),(0,i.jsx)(n.td,{children:"Pixels"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Fade to grey scale (101)"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Transparency (102)"}),(0,i.jsx)(n.td,{children:"RGB color"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"-"}),(0,i.jsx)(n.td,{children:"Hexadecimal"}),(0,i.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Reset: All matrix operations carried out on the picture (scale, flip, and so on) are undone."}),"\n",(0,i.jsxs)(n.li,{children:["Scale: The picture is resized horizontally and vertically according to the values passed respectively in ",(0,i.jsx)(n.em,{children:"param1"})," and ",(0,i.jsx)(n.em,{children:"param2"}),". These values are factors: for example, to enlarge the width by 50%, pass 1.5 in ",(0,i.jsx)(n.em,{children:"param1"})," and to reduce the height by 50%, pass 0.5 in ",(0,i.jsx)(n.em,{children:"param2"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Translate: The picture is moved by ",(0,i.jsx)(n.em,{children:"param1"})," pixels horizontally and by ",(0,i.jsx)(n.em,{children:"param2"})," pixels vertically. Pass a positive value to move to the right or towards the bottom and a negative value to move to the left or towards the top."]}),"\n",(0,i.jsx)(n.li,{children:"Flip horizontally and Flip vertically: The original picture is flipped. Any movement that was carried out beforehand will not be taken into account."}),"\n",(0,i.jsxs)(n.li,{children:["Crop: The picture is cropped starting from the point of the ",(0,i.jsx)(n.em,{children:"param1"})," and ",(0,i.jsx)(n.em,{children:"param2"})," coordinates (expressed in pixels). The width and height of the new picture is determined by the ",(0,i.jsx)(n.em,{children:"param3"})," and ",(0,i.jsx)(n.em,{children:"param4"})," parameters. This transformation cannot be undone."]}),"\n",(0,i.jsx)(n.li,{children:"Fade to grey scale: The picture is switched to gray scale (no parameter is required). This transformation cannot be undone."}),"\n",(0,i.jsxs)(n.li,{children:["Transparency: A transparency mask is applied to the picture based on the color passed in ",(0,i.jsx)(n.em,{children:"param1"}),". For example, if you pass 0x00FFFFFF (white color) in ",(0,i.jsx)(n.em,{children:"param1"}),", all the white pixels in the original picture will be transparent in the transformed picture. This operation can be applied to bitmap or vector pictures. By default, if the ",(0,i.jsx)(n.em,{children:"param1"})," parameter is omitted, the color white (0x00FFFFFF) is set as the target color. This function is specially designed to handle transparency in pictures converted from the deprecated PICT format pictures, but can be used with pictures of any type. This transformation cannot be undone."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.p,{children:"You want to set the white parts of a picture to transparent. To do this, you can use the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0TRANSFORM PICTURE(Pict1;Transparency;0x00FFFFFF)\xa0//0x00FFFFFF is white\n"})}),"\n",(0,i.jsx)(n.p,{children:"You will get the following result:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(594262).Z+"",width:"633",height:"301"})}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of cropping a picture (the picture is displayed in the form with the \u201CTruncated (non-centered)\u201D format):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0TRANSFORM PICTURE($vpGears;Crop;50;50;100;100)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(687064).Z+"",width:"581",height:"220"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/combine-pictures",children:"COMBINE PICTURES"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"988"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},594262:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/pict1359750.en-d8ebc0e4ecc7e27cf14ef2eb6ec1c568.png"},687064:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/pict28288.en-7cd1dbfedd5017b2a3558783b4ed9981.png"},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var t=r(667294);let i={},s=t.createContext(i);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);