"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55651"],{309264:function(e,r,s){s.r(r),s.d(r,{default:()=>h,frontMatter:()=>n,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"FormObjects/progressIndicator","title":"Progress Indicator","description":"A progress indicator (also called \\"thermometer\\") is designed to display or set numeric or date/time values graphically.","source":"@site/versioned_docs/version-20-R7/FormObjects/progressIndicator.md","sourceDirName":"FormObjects","slug":"/FormObjects/progressIndicator","permalink":"/docs/20-R7/FormObjects/progressIndicator","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FprogressIndicator.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"progressIndicator","title":"Progress Indicator"},"sidebar":"docs","previous":{"title":"Plug-in Area","permalink":"/docs/20-R7/FormObjects/pluginAreaOverview"},"next":{"title":"Radio Button","permalink":"/docs/20-R7/FormObjects/radiobuttonOverview"}}'),o=s("785893"),i=s("250065");let n={id:"progressIndicator",title:"Progress Indicator"},c=void 0,a={},d=[{value:"Using indicators",id:"using-indicators",level:2},{value:"Default thermometer",id:"default-thermometer",level:2},{value:"Supported Properties",id:"supported-properties",level:3},{value:"Barber shop",id:"barber-shop",level:2},{value:"Supported Properties",id:"supported-properties-1",level:3},{value:"See also",id:"see-also",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:'A progress indicator (also called "thermometer") is designed to display or set numeric or date/time values graphically.'}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(191858).Z+"",width:"288",height:"45"})}),"\n",(0,o.jsx)(r.h2,{id:"using-indicators",children:"Using indicators"}),"\n",(0,o.jsx)(r.p,{children:"You can use indicators either to display or set values. For example, if a progress indicator is given a value by a method, it displays the value. If the user drags the indicator point, the value changes. The value can be used in another object such as a field or an enterable or non-enterable object."}),"\n",(0,o.jsx)(r.p,{children:"The variable associated with the indicator controls the display. You place values into, or use values from, the indicator using methods. For example, a method for a field or enterable object could be used to control a progress indicator:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:" vTherm:=[Employees]Salary\n"})}),"\n",(0,o.jsx)(r.p,{children:"This method assigns the value of the Salary field to the vTherm variable. This method would be attached to the Salary field."}),"\n",(0,o.jsx)(r.p,{children:"Conversely, you could use the indicator to control the value in a field. The user drags the indicator to set the value. In this case the method becomes:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:" [Employees]Salary:=vTherm\n"})}),"\n",(0,o.jsx)(r.p,{children:"The method assigns the value of the indicator to the Salary field. As the user drags the indicator, the value in the Salary field changes."}),"\n",(0,o.jsx)(r.h2,{id:"default-thermometer",children:"Default thermometer"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(116637).Z+"",width:"53",height:"176"})}),"\n",(0,o.jsx)(r.p,{children:"The thermometer is the basic progress indicator."}),"\n",(0,o.jsx)(r.p,{children:"You can display horizontal or vertical thermometers bars. This is determined by the shape of the object that you draw."}),"\n",(0,o.jsx)(r.p,{children:"Multiple graphical options are available: minimum/maximum values, graduations, steps."}),"\n",(0,o.jsx)(r.h3,{id:"supported-properties",children:"Supported Properties"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesScale#barber-shop",children:"Barber shop"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," -",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesScale#display-graduation",children:"Display graduation"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesAction#execute-object-method",children:"Execute object method"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesObject#expression-type",children:"Expression Type"}),' (only "integer", "number", "date", or "time") - ',(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesText#font",children:"Font"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesScale#graduation-step",children:"Graduation step"})," -",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesScale#label-location",children:"Label Location"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesScale#maximum",children:"Maximum"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesScale#minimum",children:"Minimum"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesDisplay#number-format",children:"Number Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesScale#step",children:"Step"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,o.jsx)(r.h2,{id:"barber-shop",children:"Barber shop"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(481461).Z+"",width:"280",height:"40"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Barber shop"})," is a variant of the default thermometer. To enable this variant, you need to set the ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesScale#barber-shop",children:"Barber shop"})," property."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:'In JSON code, just remove "max" property from a default thermometer object to enable the Barber shop variant.'}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Barber shop displays a continuous animation, like the ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/spinner",children:"spinner"}),". These thermometers are generally used to indicate to the user that the program is in the process of carrying out a long operation. When this thermometer variant is selected, ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesScale",children:"graphical Scale properties"})," are not available."]}),"\n",(0,o.jsxs)(r.p,{children:["When the form is executed, the object is not animated. You manage the animation by passing a value to its ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesObject#variable-or-expression",children:"associated variable or expression"}),":"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"1 = Start animation,"}),"\n",(0,o.jsx)(r.li,{children:"0 = Stop animation."}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"supported-properties-1",children:"Supported Properties"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesScale#barber-shop",children:"Barber shop"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," -",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesAction#execute-object-method",children:"Execute object method"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesObject#expression-type",children:"Expression Type"}),' (only "integer", "number", "date", or "time") - ',(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesText#font",children:"Font"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,o.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/ruler",children:"rulers"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/20-R7/FormObjects/stepper",children:"steppers"})}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},481461:function(e,r,s){s.d(r,{Z:function(){return t}});let t=s.p+"assets/images/indicator-4aede0e01bdd9a603abe016a5ec90d03.gif"},116637:function(e,r,s){s.d(r,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAACwCAIAAAAg+bFMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAMCSURBVHhe7drBjdswEIVhn7aTtLD1qBsX48sWkBpcxp5dQoacIUVqJNvyk0YK8H4ICE0D8geJOZDYy+Pc0YcV5bsNl8twsw/6MfV9vS/O5AJ89+u32IZh9IlFxzJQj5+xwt5vFXRDsSeOnykd4OsEedrP2Hji+wuna0izm1ob+X6x5A52r2n/j68dmszPlI7wCcHGMpkxfqZ0hE+ST7lxys/kwnwfRh8WfVj0YdGHRR8WfVj0YdGHRR8WfVj0YYX4yt62O8SYzCwU4BOLMtrB/GmBb39fc6Birspzpy2+gOdXDebqTI11to19uqo0u6mUjn9SKjnS9877PZdvRtOYum/n2v/5iaZ5fmkoKAM23y20v29cfs3hnsD6iaUifEj0YdGHRR8WfVj0YdGHRR8WfVj0YdGHRR9WkK/sd5udevd5sQifOyWQiROdH9yGiaHyznL+kv54cnydMydGy23sU4ZmNxVBeYn6Oo/0LTy/Isjjs/vamROsv8RRg2AyrPzbfLVYgE9BufZB9hNLhfiA6MOiD4s+LPqw6MOiD4s+LPqw6MOiD4s+rDhf2gTXzXjZ/77YnQf6ssg4Mj7V+UF+eMO1nLVUXp5/DgzxJd34d2udqbHOtrFPV5VmN3WuI33++Y2ac/rsP2pNaKdbf1q1yMCAIn3OO8QnCSz39N2mAn0fRR8WfVj0YdGHRR/W1Pf18we56HM/ueqiz/3kqos+95OrLvrcT6666HM/ueqiz/3kqmvWVza7zV68TL3YnUf47terbcLraYEMPj0/mPze2mv2+ZXKAULl9WcKs0X6zNWZGutsG/t0VWl201J9l0f6Fp6fkMaFdjafW2ONyX03bX+ff0LpaepUfeeL7e5LmCbjCCz39N2mYtbf59GHRR8WfVj0YdGHRR8WfVj0YdGHRR8WfVghvrLbfbEXnyvAVw8QXp8W+Pb3Vd4bpy2+3X2dqbG+2cY+XWea3nNjH57dq7Slb5c2XH+7JCgDinQtL8AnCSy38t2mQnxA9GGd2/d4/AMvdxxgkVtTAQAAAABJRU5ErkJggg=="},191858:function(e,r,s){s.d(r,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAtCAIAAACBCCG9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAF2SURBVHhe7dXBbQIxEEDRnNJJWqAeuqEYLikgNVBGzpQQhwxkycbY4Mwlfk9zACR7pdF+8XQE0ggMEgkMEgkMEgkMEvUFtt8+nWx2h/gFJvH58m/38eW3Fm7W0RNYueDrAeWDxJjHYbcpcW3P73+xbqFRR0dglxtOD1QYk1kEsG6hVUc7sKtji+tgDt8v/bqFZh0Cg9sEBomSA1seu7oOprAIYN1Cq46OwMq5uKNcpi9mc93QjxZadXQEVpSzJ+fnwDwWgRXrFm7W0RcY8BCBQaI7Ait/gvEJ5tbfgsDgbgKDRAKDRH8f2BuwEGG03BHY8+vLP5h3GCaw6sSGYIDAqhMbggECq05sCAYIrDqxIRggsOrEhmCAwKoTG4IBAqtObAgGCKw6sSEYILDqxIZggMCqExuCAQKrTmwIBgisOrEhGCCw6sSGYIDAqhMbggECq05sCAakBAZcRBgtvYEBDxAYJBIYJBIYJBIYJBIYJBIYpDkePwAePMhF3WLIcQAAAABJRU5ErkJggg=="},250065:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return n}});var t=s(667294);let o={},i=t.createContext(o);function n(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);