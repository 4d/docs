/*! For license information please see 645710c6.484714bf.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10461],{229246:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=r(474848),i=r(28453);const t={id:"webAreaOverview",title:"Web Area"},o=void 0,a={id:"FormObjects/webAreaOverview",title:"Web Area",description:"Web areas can display various types of web content within your forms: HTML pages with static or dynamic contents, files, pictures, JavaScript, etc. The rendering engine of the web area depends on the execution platform of the application and the selected rendering engine option.",source:"@site/versioned_docs/version-20-R6/FormObjects/webArea_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/webAreaOverview",permalink:"/docs/FormObjects/webAreaOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FwebArea_overview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"webAreaOverview",title:"Web Area"},sidebar:"docs",previous:{title:"Text",permalink:"/docs/FormObjects/text"},next:{title:"4D View Pro area",permalink:"/docs/FormObjects/viewProAreaOverview"}},c={},d=[{value:"Specific properties",id:"specific-properties",level:2},{value:"Associated variables",id:"associated-variables",level:3},{value:"Web rendering engine",id:"web-rendering-engine",level:3},{value:"Access 4D methods",id:"access-4d-methods",level:3},{value:"$4d object",id:"4d-object",level:3},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Standard actions",id:"standard-actions",level:2},{value:"Form events",id:"form-events",level:2},{value:"Web area rules",id:"web-area-rules",level:2},{value:"User interface",id:"user-interface",level:3},{value:"Subforms",id:"subforms",level:3},{value:"Web Area and Web server conflict (Windows)",id:"web-area-and-web-server-conflict-windows",level:3},{value:"Insertion of protocol (macOS)",id:"insertion-of-protocol-macos",level:3},{value:"Web inspector",id:"web-inspector",level:2},{value:"Supported Properties",id:"supported-properties",level:2},{value:"4DCEFParameters.json",id:"4dcefparametersjson",level:2},{value:"Examples",id:"examples",level:3},{value:"Default file",id:"default-file",level:4},{value:"Example of disabling default Switch",id:"example-of-disabling-default-switch",level:4},{value:"Example for Autoplay",id:"example-for-autoplay",level:4},{value:"See also",id:"see-also",level:3}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mdxadmonitiontitle:"mdxadmonitiontitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Web areas can display various types of web content within your forms: HTML pages with static or dynamic contents, files, pictures, JavaScript, etc. The rendering engine of the web area depends on the execution platform of the application and the selected ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"rendering engine option"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["It is possible to create several web areas in the same form. Note, however, that the use of web areas must follow ",(0,s.jsx)(n.a,{href:"#web-area-rules",children:"several rules"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Several dedicated ",(0,s.jsx)(n.a,{href:"#standard-actions",children:"standard actions"}),", numerous ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html",children:"language commands"})," as well as generic and specific ",(0,s.jsx)(n.a,{href:"#form-events",children:"form events"})," allow the developer to control the functioning of web areas. Specific variables can be used to exchange information between the area and the 4D environment."]}),"\n",(0,s.jsx)(n.h2,{id:"specific-properties",children:"Specific properties"}),"\n",(0,s.jsx)(n.h3,{id:"associated-variables",children:"Associated variables"}),"\n",(0,s.jsx)(n.p,{children:"Two specific variables can be associated with each web area:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#url",children:(0,s.jsx)(n.code,{children:"URL"})})," --to control the URL displayed by the web area"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#progression",children:(0,s.jsx)(n.code,{children:"Progression"})})," -- to control the loading percentage of the page displayed in the web area."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["As of 4D v19 R5, the Progression variable is no longer updated in Web Areas using the ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/webAreaOverview#web-rendering-engine",children:"Windows system rendering engine"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"web-rendering-engine",children:"Web rendering engine"}),"\n",(0,s.jsxs)(n.p,{children:["You can choose between ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"two rendering engines"})," for the web area, depending on the specifics of your application."]}),"\n",(0,s.jsx)(n.p,{children:"Selecting the embedded web rendering engine allows you to call 4D methods from the web area and to make sure features on macOS and Windows are similar. Selecting the system rendering engine is recommended when the web area is connected to the Internet because it always benefits from the latest security updates."}),"\n",(0,s.jsx)(n.h3,{id:"access-4d-methods",children:"Access 4D methods"}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#access-4d-methods",children:"Access 4D methods"})," property is selected, you can call 4D methods from a web area."]}),"\n",(0,s.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["This property is only available if the web area ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"uses the embedded web rendering engine"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"For security reasons since it allows executing 4D code, this option should only be enabled for pages you trust, such as pages generated by the application."}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"4d-object",children:"$4d object"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"4D embedded web rendering engine"}),' supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.']}),"\n",(0,s.jsxs)(n.p,{children:["For example, to call the ",(0,s.jsx)(n.code,{children:"HelloWorld"})," 4D method, you just execute the following statement:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-codeJS",children:"$4d.HelloWorld();\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'JavaScript is case sensitive so it is important to note that the object is named $4d (with a lowercase "d").'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The syntax of calls to 4D methods is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-codeJS",children:"$4d.4DMethodName(param1,paramN,function(result){})\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"param1...paramN"}),": You can pass as many parameters as you need to the 4D method.\nThese parameters can be of any type supported by JavaScript (string, number, array, object)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"function(result)"}),': Function to pass as last argument. This "callback" function is called synchronously once the 4D method finishes executing. It receives the ',(0,s.jsx)(n.code,{children:"result"})," parameter."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"result"}),': Execution result of the 4D method, returned in the "$0" expression. This result can be of any type supported by JavaScript (string, number, array, object). You can use the ',(0,s.jsx)(n.code,{children:"C_OBJECT"})," command to return the objects."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["By default, 4D works in UTF-8. When you return text containing extended characters, for example characters with accents, make sure the encoding of the page displayed in the Web area is declared as UTF-8, otherwise the characters may be rendered incorrectly. In this case, add the following line in the HTML page to declare the encoding:\n",(0,s.jsx)(n.code,{children:'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["Given a 4D project method named ",(0,s.jsx)(n.code,{children:"today"})," that does not receive parameters and returns the current date as a string."]}),"\n",(0,s.jsxs)(n.p,{children:["4D code of ",(0,s.jsx)(n.code,{children:"today"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" C_TEXT($0)\n $0:=String(Current date;System date long)\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the web area, the 4D method can be called with the following syntax:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"$4d.today()\n"})}),"\n",(0,s.jsx)(n.p,{children:"The 4D method does not receive any parameters but it does return the value of $0 to the callback function called by 4D after the execution of the method. We want to display the date in the HTML page that is loaded by the web area."}),"\n",(0,s.jsx)(n.p,{children:"Here is the code of the HTML page:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n <script type="text/javascript">\n$4d.today(function(dollarZero)\n{\n    var curDate = dollarZero;\n    document.getElementById("mydiv").innerHTML=curDate;\n});\n<\/script>\n</head>\n<body>Today is: <div id="mydiv"></div>\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["The 4D project method ",(0,s.jsx)(n.code,{children:"calcSum"})," receives parameters (",(0,s.jsx)(n.code,{children:"$1...$n"}),") and returns their sum in ",(0,s.jsx)(n.code,{children:"$0"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["4D code of ",(0,s.jsx)(n.code,{children:"calcSum"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" C_REAL(${1}) // receives n REAL type parameters\n C_REAL($0) // returns a Real\n C_LONGINT($i;$n)\n $n:=Count parameters\n For($i;1;$n)\n    $0:=$0+${$i}\n End for\n"})}),"\n",(0,s.jsx)(n.p,{children:"The JavaScript code run in the web area is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)\n    {\n        var result = dollarZero // result is 262.5\n    });\n"})}),"\n",(0,s.jsx)(n.h2,{id:"standard-actions",children:"Standard actions"}),"\n",(0,s.jsxs)(n.p,{children:["Four specific standard actions are available for managing web areas automatically: ",(0,s.jsx)(n.code,{children:"Open Back URL"}),", ",(0,s.jsx)(n.code,{children:"Open Forward URL"}),", ",(0,s.jsx)(n.code,{children:"Refresh Current URL"})," and ",(0,s.jsx)(n.code,{children:"Stop Loading URL"}),". These actions can be associated with buttons or menu commands and allow quick implementation of basic web interfaces. These actions are described in ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html",children:"Standard actions"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"form-events",children:"Form events"}),"\n",(0,s.jsx)(n.p,{children:"Specific form events are intended for programmed management of web areas, more particularly concerning the activation of links:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Events/onBeginUrlLoading",children:(0,s.jsx)(n.code,{children:"On Begin URL Loading"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Events/onUrlResourceLoading",children:(0,s.jsx)(n.code,{children:"On URL Resource Loading"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Events/onEndUrlLoading",children:(0,s.jsx)(n.code,{children:"On End URL Loading"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Events/onUrlLoadingError",children:(0,s.jsx)(n.code,{children:"On URL Loading Error"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Events/onUrlFiltering",children:(0,s.jsx)(n.code,{children:"On URL Filtering"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Events/onOpenExternalLink",children:(0,s.jsx)(n.code,{children:"On Open External Link"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Events/onWindowOpeningDenied",children:(0,s.jsx)(n.code,{children:"On Window Opening Denied"})})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In addition, web areas support the following generic form events:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Events/onLoad",children:(0,s.jsx)(n.code,{children:"On Load"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Events/onUnload",children:(0,s.jsx)(n.code,{children:"On Unload"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Events/onGettingFocus",children:(0,s.jsx)(n.code,{children:"On Getting Focus"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/Events/onLosingFocus",children:(0,s.jsx)(n.code,{children:"On Losing Focus"})})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"web-area-rules",children:"Web area rules"}),"\n",(0,s.jsx)(n.h3,{id:"user-interface",children:"User interface"}),"\n",(0,s.jsx)(n.p,{children:"When the form is executed, standard browser interface functions are available to the user in the web area, which permit interaction with other form areas:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Edit menu commands"}),": When the web area has the focus, the ",(0,s.jsx)(n.strong,{children:"Edit"})," menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Context menu"}),": It is possible to use the standard ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesEntry#context-menu",children:"context menu"})," of the system with the web area. Display of the context menu can be controlled using the ",(0,s.jsx)(n.code,{children:"WA SET PREFERENCE"})," command."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Drag and drop"}),': The user can drag and drop text, pictures and documents within the web area or between a web area and the 4D form objects, according to the 4D object properties.\nFor security reasons, changing the contents of a web area by means of dragging and dropping a file or URL is not allowed by default. In this case, the cursor displays a "forbidden" icon ',(0,s.jsx)(n.img,{src:r(878195).A+"",width:"26",height:"28"}),". You have to use the ",(0,s.jsx)(n.code,{children:'WA SET PREFERENCE(*;"warea";WA enable URL drop;True)'}),' statement to display a "drop" icon and generate the ',(0,s.jsx)(n.a,{href:"/docs/Events/onWindowOpeningDenied",children:(0,s.jsx)(n.code,{children:"On Window Opening Denied"})})," event. In this event, you can call the ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html",children:(0,s.jsx)(n.code,{children:"WA OPEN URL"})})," command or set the ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#url",children:"URL variable"})," in response to a user drop."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Drag and drop features described above are not supported in web areas using the ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"macOS system rendering engine"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"subforms",children:"Subforms"}),"\n",(0,s.jsx)(n.p,{children:"For reasons related to window redrawing mechanisms, the insertion of a web area into a subform is subject to the following constraints:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The subform must not be able to scroll"}),"\n",(0,s.jsx)(n.li,{children:"The limits of the web area must not exceed the size of the subform"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Superimposing a web area on top of or beneath other form objects is not supported."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"web-area-and-web-server-conflict-windows",children:"Web Area and Web server conflict (Windows)"}),"\n",(0,s.jsx)(n.p,{children:"In Windows, it is not recommended to access, via a web area, the Web server of the 4D application containing the area because this configuration could lead to a conflict that freezes the application. Of course, a remote 4D can access the Web server of 4D Server, but not its own web server."}),"\n",(0,s.jsx)(n.h3,{id:"insertion-of-protocol-macos",children:"Insertion of protocol (macOS)"}),"\n",(0,s.jsxs)(n.p,{children:['The URLs handled by programming in web areas in macOS must begin with the protocol. For example, you need to pass the string "',(0,s.jsx)(n.a,{href:"http://www.mysite.com",children:"http://www.mysite.com"}),'" and not just "',(0,s.jsx)(n.a,{href:"http://www.mysite.com",children:"www.mysite.com"}),'".']}),"\n",(0,s.jsx)(n.h2,{id:"web-inspector",children:"Web inspector"}),"\n",(0,s.jsx)(n.p,{children:"You can view and use a web inspector within web areas in your forms or in offscreen web areas. The web inspector is a debugger which allows parsing the code and the flow of information of the web pages."}),"\n",(0,s.jsxs)(n.p,{children:["To display the Web inspector, you can either execute the ",(0,s.jsx)(n.code,{children:"WA OPEN WEB INSPECTOR"})," command, or use the context menu of the web area."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Execute the ",(0,s.jsx)(n.code,{children:"WA OPEN WEB INSPECTOR"})," command"]}),(0,s.jsx)(n.br,{}),"\nThis command can be used directly with onscreen (form object) and offscreen web areas."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Use the web area context menu"}),(0,s.jsx)(n.br,{}),"\nThis feature can only be used with onscreen web areas and requires that the following conditions are met:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesEntry#context-menu",children:"context menu"})," for the web area is enabled"]}),"\n",(0,s.jsx)(n.li,{children:"the use of the inspector is expressly enabled in the area by means of the following statement:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\tWA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  \n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Windows system rendering engine"}),", a change in this preference requires a navigation action in the area (for example, a page refresh) to be taken into account."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, refer to the description of the ",(0,s.jsx)(n.code,{children:"WA SET PREFERENCE"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["When you have done the settings as described above, you then have new options such as ",(0,s.jsx)(n.strong,{children:"Inspect Element"})," in the context menu of the area. When you select this option, the web inspector window is displayed."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"For a detailed description of the features of this debugger, refer to the documentation provided by the web rendering engine."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"supported-properties",children:"Supported Properties"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesEntry#context-menu",children:"Context Menu"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesAction#method",children:"Method"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#progression",children:"Progression"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#url",children:"URL"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Use embedded Web rendering engine"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesDisplay#visibility",children:"Visibilty"})," - ",(0,s.jsx)(n.a,{href:"/docs/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,s.jsx)(n.h2,{id:"4dcefparametersjson",children:"4DCEFParameters.json"}),"\n",(0,s.jsx)(n.p,{children:"The 4DCEFParameters.json is a configuration file that allows customization of CEF parameters to manage the behavior of web areas within 4D applications."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"#default-file",children:"Default switches"})," are provided, but you can override them by using a custom 4DCEFParameters.json file."]}),"\n",(0,s.jsx)(n.p,{children:"In the development phase (using 4D application), create a 4DCEFParameters.json file at the following location:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Windows: ",(0,s.jsx)(n.code,{children:"Users\\[userName]\\AppData\\Roaming\\4D\\4DCEFParameters.json"})]}),"\n",(0,s.jsxs)(n.li,{children:["macOS: ",(0,s.jsx)(n.code,{children:"$HOME/Library/Application Support/4D/4DCEFParameters.json"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Before building a final application, add the custom 4DCEFParameters.json file to the Resources folder of the project."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Adding a custom 4DCEFParameters.json file can fundamentally impact all 4D embedded web areas, including ",(0,s.jsx)(n.a,{href:"/docs/ViewPro/configuring#form-area-properties",children:"4D View Pro areas"}),". It is the developer's responsibility to ensure that the custom switches do not destabilize the 4D application."]})}),"\n",(0,s.jsx)(n.p,{children:"The 4DCEFParameters.json file format is as the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'\n{\n  "switches":{\n     "key":value\n  },\n  "macOS":{\n    "switches": {\n     "key":value\n    }\n  },\n  "windows": {\n    "switches": {\n     "key":value\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The 4DCEFParameters.json file structure contains:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"switches"}),": a list of CEF switches and their corresponding values applied for both macOS and Windows."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"macOS.switches"}),": macOS-specific CEF switches."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"windows.switches"}),": Windows-specific CEF switches."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'The switches in the custom file take precedence. In case of duplication of switches within the same file, the switches defined in the platform-specific subsection ("macOS.switches" or "windows.switches") are given priority and used for configuration.'}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxadmonitiontitle,{}),(0,s.jsx)(n.p,{children:"The list of supported switches is constantly evolving and is managed by the CEF development team. For information about available switches, you need to refer to the CEF developer community."})]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h4,{id:"default-file",children:"Default file"}),"\n",(0,s.jsx)(n.p,{children:"The default 4DCEFParameters.json file contains the following switches:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "switches":{\n     "enable-media-stream":true,\n     "enable-print-preview":true\n  },\n  "macOS":{\n    "switches": {\n      "use-mock-keychain": true\n    }\n  },\n  "windows": {\n    "switches": {\n      "disable-features": "WinUseBrowserSpellChecker"\n    }\n  }\n}\n\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-of-disabling-default-switch",children:"Example of disabling default Switch"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "switches": {\n    "disable-javascript": true,\n    "disable-web-security": true\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-for-autoplay",children:"Example for Autoplay"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "switches":{\n     "autoplay-policy": "no-user-gesture-required"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://blog.4d.com/specify-your-own-parameters-to-initialize-the-embedded-web-area",children:"Specify your own parameters to initialize the embedded web area (blog post)"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var s=r(296540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var s,t={},d=null,l=null;for(s in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,s)&&!c.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:i,type:e,key:d,ref:l,props:t,_owner:a.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},878195:(e,n,r)=>{r.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg=="},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(296540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);