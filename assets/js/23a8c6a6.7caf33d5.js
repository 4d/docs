"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2132"],{185647:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"FormObjects/webAreaOverview","title":"Web Area","description":"Web areas can display various types of web content within your forms: HTML pages with static or dynamic contents, files, pictures, JavaScript, etc. The rendering engine of the web area depends on the execution platform of the application and the selected rendering engine option.","source":"@site/versioned_docs/version-20-R8/FormObjects/webArea_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/webAreaOverview","permalink":"/docs/20-R8/FormObjects/webAreaOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FwebArea_overview.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"webAreaOverview","title":"Web Area"},"sidebar":"docs","previous":{"title":"Text","permalink":"/docs/20-R8/FormObjects/text"},"next":{"title":"4D View Pro area","permalink":"/docs/20-R8/FormObjects/viewProAreaOverview"}}'),i=s("785893"),t=s("250065");let o={id:"webAreaOverview",title:"Web Area"},a=void 0,c={},d=[{value:"Specific properties",id:"specific-properties",level:2},{value:"Associated variables",id:"associated-variables",level:3},{value:"Web rendering engine",id:"web-rendering-engine",level:3},{value:"Access 4D methods",id:"access-4d-methods",level:3},{value:"$4d object",id:"4d-object",level:3},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Standard actions",id:"standard-actions",level:2},{value:"Form events",id:"form-events",level:2},{value:"Web area rules",id:"web-area-rules",level:2},{value:"User interface",id:"user-interface",level:3},{value:"Subforms",id:"subforms",level:3},{value:"Web Area and Web server conflict (Windows)",id:"web-area-and-web-server-conflict-windows",level:3},{value:"Insertion of protocol (macOS)",id:"insertion-of-protocol-macos",level:3},{value:"Web inspector",id:"web-inspector",level:2},{value:"Supported Properties",id:"supported-properties",level:2},{value:"4DCEFParameters.json",id:"4dcefparametersjson",level:2},{value:"Examples",id:"examples",level:3},{value:"Default file",id:"default-file",level:4},{value:"Example of disabling default Switch",id:"example-of-disabling-default-switch",level:4},{value:"Example for Autoplay",id:"example-for-autoplay",level:4},{value:"See also",id:"see-also",level:3}];function l(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mdxadmonitiontitle:"mdxadmonitiontitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Web areas can display various types of web content within your forms: HTML pages with static or dynamic contents, files, pictures, JavaScript, etc. The rendering engine of the web area depends on the execution platform of the application and the selected ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"rendering engine option"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["It is possible to create several web areas in the same form. Note, however, that the use of web areas must follow ",(0,i.jsx)(n.a,{href:"#web-area-rules",children:"several rules"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Several dedicated ",(0,i.jsx)(n.a,{href:"#standard-actions",children:"standard actions"}),", numerous ",(0,i.jsx)(n.a,{href:"../category/web-area",children:"language commands"})," as well as generic and specific ",(0,i.jsx)(n.a,{href:"#form-events",children:"form events"})," allow the developer to control the functioning of web areas. Specific variables can be used to exchange information between the area and the 4D environment."]}),"\n",(0,i.jsx)(n.h2,{id:"specific-properties",children:"Specific properties"}),"\n",(0,i.jsx)(n.h3,{id:"associated-variables",children:"Associated variables"}),"\n",(0,i.jsx)(n.p,{children:"Two specific variables can be associated with each web area:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#url",children:(0,i.jsx)(n.code,{children:"URL"})})," --to control the URL displayed by the web area"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#progression",children:(0,i.jsx)(n.code,{children:"Progression"})})," -- to control the loading percentage of the page displayed in the web area."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["As of 4D v19 R5, the Progression variable is no longer updated in Web Areas using the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/webAreaOverview#web-rendering-engine",children:"Windows system rendering engine"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"web-rendering-engine",children:"Web rendering engine"}),"\n",(0,i.jsxs)(n.p,{children:["You can choose between ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"two rendering engines"})," for the web area, depending on the specifics of your application."]}),"\n",(0,i.jsx)(n.p,{children:"Selecting the embedded web rendering engine allows you to call 4D methods from the web area and to make sure features on macOS and Windows are similar. Selecting the system rendering engine is recommended when the web area is connected to the Internet because it always benefits from the latest security updates."}),"\n",(0,i.jsx)(n.h3,{id:"access-4d-methods",children:"Access 4D methods"}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#access-4d-methods",children:"Access 4D methods"})," property is selected, you can call 4D methods from a web area."]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This property is only available if the web area ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"uses the embedded web rendering engine"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"For security reasons since it allows executing 4D code, this option should only be enabled for pages you trust, such as pages generated by the application."}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"4d-object",children:"$4d object"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"4D embedded web rendering engine"}),' supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.']}),"\n",(0,i.jsxs)(n.p,{children:["For example, to call the ",(0,i.jsx)(n.code,{children:"HelloWorld"})," 4D method, you just execute the following statement:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.HelloWorld();\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["JavaScript is case sensitive so it is important to note that the object is named ",(0,i.jsx)(n.strong,{children:"$4d"}),' (with a lowercase "d").']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The syntax of calls to 4D methods is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.4DMethodName(param1,paramN,function(result){})\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"param1...paramN"}),": You can pass as many parameters as you need to the 4D method.\nThese parameters can be of any type supported by JavaScript (string, number, array, object)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"function(result)"}),': Function to pass as last argument. This "callback" function is called synchronously once the 4D method finishes executing. It receives the ',(0,i.jsx)(n.code,{children:"result"})," parameter."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"result"}),": Execution result of the 4D method. This result can be of any type supported by JavaScript (string, number, array, object)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["By default, 4D works in UTF-8. When you return text containing extended characters, for example characters with accents, make sure the encoding of the page displayed in the Web area is declared as UTF-8, otherwise the characters may be rendered incorrectly. In this case, add the following line in the HTML page to declare the encoding:\n",(0,i.jsx)(n.code,{children:'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(n.p,{children:["Given a 4D project method named ",(0,i.jsx)(n.code,{children:"today"})," that does not receive parameters and returns the current date as a string."]}),"\n",(0,i.jsxs)(n.p,{children:["4D code of ",(0,i.jsx)(n.code,{children:"today"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" #DECLARE : Text\n return String(Current date;System date long)\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the web area, the 4D method can be called with the following syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.today()\n"})}),"\n",(0,i.jsx)(n.p,{children:"The 4D method does not receive any parameters but it does return the result to the callback function called by 4D after the execution of the method. We want to display the date in the HTML page that is loaded by the web area."}),"\n",(0,i.jsx)(n.p,{children:"Here is the code of the HTML page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n <script type="text/javascript">\n$4d.today(function(result)\n{\n    var curDate = result;\n    document.getElementById("mydiv").innerHTML=curDate;\n});\n<\/script>\n</head>\n<body>Today is: <div id="mydiv"></div>\n</body>\n</html>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(n.p,{children:["The 4D project method ",(0,i.jsx)(n.code,{children:"calcSum"})," receives parameters and returns their sum:"]}),"\n",(0,i.jsxs)(n.p,{children:["4D code of ",(0,i.jsx)(n.code,{children:"calcSum"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" #DECLARE (... : Real) -> $sum : Real \n  // receives n Real type parameters\n  // and returns a Real\n var $i; $n : Integer\n $n:=Count parameters\n For($i;1;$n)\n    $0:=$0+${$i}\n End for\n"})}),"\n",(0,i.jsx)(n.p,{children:"The JavaScript code run in the web area is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"$4d.calcSum(33, 45, 75, 102.5, 7, function(theSum)\n    {\n        var result = theSum // result is 262.5\n    });\n"})}),"\n",(0,i.jsx)(n.h2,{id:"standard-actions",children:"Standard actions"}),"\n",(0,i.jsxs)(n.p,{children:["Four specific standard actions are available for managing web areas automatically: ",(0,i.jsx)(n.code,{children:"Open Back URL"}),", ",(0,i.jsx)(n.code,{children:"Open Forward URL"}),", ",(0,i.jsx)(n.code,{children:"Refresh Current URL"})," and ",(0,i.jsx)(n.code,{children:"Stop Loading URL"}),". These actions can be associated with buttons or menu commands and allow quick implementation of basic web interfaces. These actions are described in ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Standard-actions.300-6750239.en.html",children:"Standard actions"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"form-events",children:"Form events"}),"\n",(0,i.jsx)(n.p,{children:"Specific form events are intended for programmed management of web areas, more particularly concerning the activation of links:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/Events/onBeginUrlLoading",children:(0,i.jsx)(n.code,{children:"On Begin URL Loading"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/Events/onUrlResourceLoading",children:(0,i.jsx)(n.code,{children:"On URL Resource Loading"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/Events/onEndUrlLoading",children:(0,i.jsx)(n.code,{children:"On End URL Loading"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/Events/onUrlLoadingError",children:(0,i.jsx)(n.code,{children:"On URL Loading Error"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/Events/onUrlFiltering",children:(0,i.jsx)(n.code,{children:"On URL Filtering"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/Events/onOpenExternalLink",children:(0,i.jsx)(n.code,{children:"On Open External Link"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/Events/onWindowOpeningDenied",children:(0,i.jsx)(n.code,{children:"On Window Opening Denied"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In addition, web areas support the following generic form events:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/Events/onLoad",children:(0,i.jsx)(n.code,{children:"On Load"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/Events/onUnload",children:(0,i.jsx)(n.code,{children:"On Unload"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/Events/onGettingFocus",children:(0,i.jsx)(n.code,{children:"On Getting Focus"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/Events/onLosingFocus",children:(0,i.jsx)(n.code,{children:"On Losing Focus"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"web-area-rules",children:"Web area rules"}),"\n",(0,i.jsx)(n.h3,{id:"user-interface",children:"User interface"}),"\n",(0,i.jsx)(n.p,{children:"When the form is executed, standard browser interface functions are available to the user in the web area, which permit interaction with other form areas:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Edit menu commands"}),": When the web area has the focus, the ",(0,i.jsx)(n.strong,{children:"Edit"})," menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Context menu"}),": It is possible to use the standard ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesEntry#context-menu",children:"context menu"})," of the system with the web area. Display of the context menu can be controlled using the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/wa-set-preference",children:(0,i.jsx)(n.code,{children:"WA SET PREFERENCE"})})," command."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Drag and drop"}),': The user can drag and drop text, pictures and documents within the web area or between a web area and the 4D form objects, according to the 4D object properties.\nFor security reasons, changing the contents of a web area by means of dragging and dropping a file or URL is not allowed by default. In this case, the cursor displays a "forbidden" icon ',(0,i.jsx)(n.img,{src:s(151625).Z+"",width:"26",height:"28"}),". You have to use the ",(0,i.jsx)(n.code,{children:'WA SET PREFERENCE(*;"warea";WA enable URL drop;True)'}),' statement to display a "drop" icon and generate the ',(0,i.jsx)(n.a,{href:"/docs/20-R8/Events/onWindowOpeningDenied",children:(0,i.jsx)(n.code,{children:"On Window Opening Denied"})})," event. In this event, you can call the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/wa-open-url",children:(0,i.jsx)(n.code,{children:"WA OPEN URL"})})," command or set the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#url",children:"URL variable"})," in response to a user drop."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Drag and drop features described above are not supported in web areas using the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"macOS system rendering engine"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"subforms",children:"Subforms"}),"\n",(0,i.jsx)(n.p,{children:"For reasons related to window redrawing mechanisms, the insertion of a web area into a subform is subject to the following constraints:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The subform must not be able to scroll"}),"\n",(0,i.jsx)(n.li,{children:"The limits of the web area must not exceed the size of the subform"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Superimposing a web area on top of or beneath other form objects is not supported."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"web-area-and-web-server-conflict-windows",children:"Web Area and Web server conflict (Windows)"}),"\n",(0,i.jsx)(n.p,{children:"In Windows, it is not recommended to access, via a web area, the Web server of the 4D application containing the area because this configuration could lead to a conflict that freezes the application. Of course, a remote 4D can access the Web server of 4D Server, but not its own web server."}),"\n",(0,i.jsx)(n.h3,{id:"insertion-of-protocol-macos",children:"Insertion of protocol (macOS)"}),"\n",(0,i.jsxs)(n.p,{children:['The URLs handled by programming in web areas in macOS must begin with the protocol. For example, you need to pass the string "',(0,i.jsx)(n.a,{href:"http://www.mysite.com",children:"http://www.mysite.com"}),'" and not just "',(0,i.jsx)(n.a,{href:"http://www.mysite.com",children:"www.mysite.com"}),'".']}),"\n",(0,i.jsx)(n.h2,{id:"web-inspector",children:"Web inspector"}),"\n",(0,i.jsx)(n.p,{children:"You can view and use a web inspector within web areas in your forms or in offscreen web areas. The web inspector is a debugger which allows parsing the code and the flow of information of the web pages."}),"\n",(0,i.jsxs)(n.p,{children:["To display the Web inspector, you can either execute the ",(0,i.jsx)(n.code,{children:"WA OPEN WEB INSPECTOR"})," command, or use the context menu of the web area."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Execute the ",(0,i.jsx)(n.code,{children:"WA OPEN WEB INSPECTOR"})," command"]}),(0,i.jsx)(n.br,{}),"\nThis command can be used directly with onscreen (form object) and offscreen web areas."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Use the web area context menu"}),(0,i.jsx)(n.br,{}),"\nThis feature can only be used with onscreen web areas and requires that the following conditions are met:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesEntry#context-menu",children:"context menu"})," for the web area is enabled"]}),"\n",(0,i.jsx)(n.li,{children:"the use of the inspector is expressly enabled in the area by means of the following statement:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'	WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  \n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["With ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Windows system rendering engine"}),", a change in this preference requires a navigation action in the area (for example, a page refresh) to be taken into account."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information, refer to the description of the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/wa-set-preference",children:(0,i.jsx)(n.code,{children:"WA SET PREFERENCE"})})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["When you have done the settings as described above, you then have new options such as ",(0,i.jsx)(n.strong,{children:"Inspect Element"})," in the context menu of the area. When you select this option, the web inspector window is displayed."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"For a detailed description of the features of this debugger, refer to the documentation provided by the web rendering engine."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"supported-properties",children:"Supported Properties"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesEntry#context-menu",children:"Context Menu"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesAction#method",children:"Method"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#progression",children:"Progression"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#url",children:"URL"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Use embedded Web rendering engine"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesDisplay#visibility",children:"Visibilty"})," - ",(0,i.jsx)(n.a,{href:"/docs/20-R8/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,i.jsx)(n.h2,{id:"4dcefparametersjson",children:"4DCEFParameters.json"}),"\n",(0,i.jsx)(n.p,{children:"The 4DCEFParameters.json is a configuration file that allows customization of CEF parameters to manage the behavior of web areas within 4D applications."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#default-file",children:"Default switches"})," are provided, but you can override them by using a custom 4DCEFParameters.json file."]}),"\n",(0,i.jsx)(n.p,{children:"In the development phase (using 4D application), create a 4DCEFParameters.json file at the following location:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Windows: ",(0,i.jsx)(n.code,{children:"Users\\[userName]\\AppData\\Roaming\\4D\\4DCEFParameters.json"})]}),"\n",(0,i.jsxs)(n.li,{children:["macOS: ",(0,i.jsx)(n.code,{children:"$HOME/Library/Application Support/4D/4DCEFParameters.json"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Before building a final application, add the custom 4DCEFParameters.json file to the Resources folder of the project."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Adding a custom 4DCEFParameters.json file can fundamentally impact all 4D embedded web areas, including ",(0,i.jsx)(n.a,{href:"/docs/20-R8/ViewPro/configuring#form-area-properties",children:"4D View Pro areas"}),". It is the developer's responsibility to ensure that the custom switches do not destabilize the 4D application."]})}),"\n",(0,i.jsx)(n.p,{children:"The 4DCEFParameters.json file format is as the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n  "switches":{\n     "key":value\n  },\n  "macOS":{\n    "switches": {\n     "key":value\n    }\n  },\n  "windows": {\n    "switches": {\n     "key":value\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The 4DCEFParameters.json file structure contains:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"switches"}),": a list of CEF switches and their corresponding values applied for both macOS and Windows."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"macOS.switches"}),": macOS-specific CEF switches."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"windows.switches"}),": Windows-specific CEF switches."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'The switches in the custom file take precedence. In case of duplication of switches within the same file, the switches defined in the platform-specific subsection ("macOS.switches" or "windows.switches") are given priority and used for configuration.'}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxadmonitiontitle,{}),(0,i.jsx)(n.p,{children:"The list of supported switches is constantly evolving and is managed by the CEF development team. For information about available switches, you need to refer to the CEF developer community."})]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h4,{id:"default-file",children:"Default file"}),"\n",(0,i.jsx)(n.p,{children:"The default 4DCEFParameters.json file contains the following switches:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "switches":{\n     "enable-media-stream":true,\n     "enable-print-preview":true\n  },\n  "macOS":{\n    "switches": {\n      "use-mock-keychain": true\n    }\n  },\n  "windows": {\n    "switches": {\n      "disable-features": "WinUseBrowserSpellChecker"\n    }\n  }\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-of-disabling-default-switch",children:"Example of disabling default Switch"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "switches": {\n    "disable-javascript": true,\n    "disable-web-security": true\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-for-autoplay",children:"Example for Autoplay"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "switches":{\n     "autoplay-policy": "no-user-gesture-required"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://blog.4d.com/specify-your-own-parameters-to-initialize-the-embedded-web-area",children:"Specify your own parameters to initialize the embedded web area (blog post)"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},151625:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg=="},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var r=s(667294);let i={},t=r.createContext(i);function o(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);