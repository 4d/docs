"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26803],{769213:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var n=o(474848),s=o(28453);const i={id:"code-overview",title:"Methods and classes"},r=void 0,d={id:"Project/code-overview",title:"Methods and classes",description:"The 4D code used across your project is written in methods and classes.",source:"@site/versioned_docs/version-20-R6/Project/code-overview.md",sourceDirName:"Project",slug:"/Project/code-overview",permalink:"/docs/20-R6/Project/code-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fcode-overview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"code-overview",title:"Methods and classes"},sidebar:"docs",previous:{title:"Documenting a project",permalink:"/docs/20-R6/Project/documentation"},next:{title:"Code Editor",permalink:"/docs/20-R6/code-editor/write-class-method"}},h={},a=[{value:"Creating methods",id:"creating-methods",level:2},{value:"Creating classes",id:"creating-classes",level:2},{value:"Deleting methods or classes",id:"deleting-methods-or-classes",level:2},{value:"Importing and exporting code",id:"importing-and-exporting-code",level:2},{value:"Project method properties",id:"project-method-properties",level:2},{value:"Name",id:"name",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Invisible",id:"invisible",level:4},{value:"Shared by components and host database",id:"shared-by-components-and-host-database",level:4},{value:"Execute on Server",id:"execute-on-server",level:4},{value:"Execution mode",id:"execution-mode",level:3},{value:"Available through",id:"available-through",level:3},{value:"Web Services",id:"web-services",level:4},{value:"Published in WSDL",id:"published-in-wsdl",level:4},{value:"4D tags and URLs (4DACTION...)",id:"4d-tags-and-urls-4daction",level:4},{value:"SQL",id:"sql",level:4},{value:"REST Server",id:"rest-server",level:4},{value:"Batch setting for method attributes",id:"batch-setting-for-method-attributes",level:4}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The 4D code used across your project is written in ",(0,n.jsx)(t.a,{href:"/docs/20-R6/Concepts/methods",children:"methods"})," and ",(0,n.jsx)(t.a,{href:"/docs/20-R6/Concepts/classes",children:"classes"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The 4D IDE provides you with various features to create, edit, export, or delete your code. You will usually use the 4D ",(0,n.jsx)(t.a,{href:"/docs/20-R6/code-editor/write-class-method",children:"code editor"})," to work with your code."]}),"\n",(0,n.jsx)(t.h2,{id:"creating-methods",children:"Creating methods"}),"\n",(0,n.jsxs)(t.p,{children:["A method in 4D is stored in a ",(0,n.jsx)(t.strong,{children:".4dm"})," file located in the appropriate folder of the ",(0,n.jsx)(t.a,{href:"/docs/20-R6/Project/architecture#sources",children:(0,n.jsx)(t.code,{children:"/Project/Sources/"})})," folder."]}),"\n",(0,n.jsxs)(t.p,{children:["You can create ",(0,n.jsx)(t.a,{href:"/docs/20-R6/Concepts/methods",children:"several types of methods"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["All types of methods can be created or opened from the ",(0,n.jsx)(t.strong,{children:"Explorer"})," window (except Object methods which are managed from the ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormEditor/overview",children:"Form editor"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["Project methods can also be created or opened from the ",(0,n.jsx)(t.strong,{children:"File"})," menu or toolbar (",(0,n.jsx)(t.strong,{children:"New/Method..."})," or ",(0,n.jsx)(t.strong,{children:"Open/Method..."}),") or using shortcuts in the ",(0,n.jsx)(t.a,{href:"/docs/20-R6/code-editor/write-class-method#shortcuts",children:"Code editor window"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Triggers can also be created or opened from the Structure editor."}),"\n",(0,n.jsxs)(t.li,{children:["Form methods can also be created or opened from the ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormEditor/overview",children:"Form editor"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"creating-classes",children:"Creating classes"}),"\n",(0,n.jsxs)(t.p,{children:["A user class in 4D is defined by a specific method file (",(0,n.jsx)(t.strong,{children:".4dm"}),"), stored in the ",(0,n.jsx)(t.a,{href:"/docs/20-R6/Project/architecture#sources",children:(0,n.jsx)(t.code,{children:"/Project/Sources/Classes/"})})," folder. The name of the file is the class name."]}),"\n",(0,n.jsxs)(t.p,{children:["You can create a class file from the ",(0,n.jsx)(t.strong,{children:"File"})," menu or toolbar (",(0,n.jsx)(t.strong,{children:"New/Class..."}),") or in the ",(0,n.jsx)(t.strong,{children:"Methods"})," page of the ",(0,n.jsx)(t.strong,{children:"Explorer"})," window."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information, please refer to the ",(0,n.jsx)(t.a,{href:"/docs/20-R6/Concepts/classes",children:"Classes"})," section."]}),"\n",(0,n.jsx)(t.h2,{id:"deleting-methods-or-classes",children:"Deleting methods or classes"}),"\n",(0,n.jsx)(t.p,{children:"To delete an existing method or class, you can:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["on your disk, remove the ",(0,n.jsx)(t.em,{children:".4dm"}),' file from the "Sources" folder,']}),"\n",(0,n.jsxs)(t.li,{children:["in the 4D Explorer, select the method or class and click ",(0,n.jsx)(t.img,{src:o(237257).A+"",width:"19",height:"18"})," or choose ",(0,n.jsx)(t.strong,{children:"Move to Trash"})," from the contextual menu."]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["To delete an object method, choose ",(0,n.jsx)(t.strong,{children:"Clear Object Method"})," from the ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormEditor/overview",children:"Form editor"})," (",(0,n.jsx)(t.strong,{children:"Object"})," menu or context menu)."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"importing-and-exporting-code",children:"Importing and exporting code"}),"\n",(0,n.jsxs)(t.p,{children:["You can import and export a method or a class code in the form of a file. These commands are found in the ",(0,n.jsx)(t.strong,{children:"Method"})," menu of the ",(0,n.jsx)(t.a,{href:"/docs/20-R6/code-editor/write-class-method",children:"Code editor"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["When you select the ",(0,n.jsx)(t.strong,{children:"Export Method..."})," command, a standard file saving dialog box appears, allowing you to choose the name, location and format of the export file (see below). As with printing, exporting does not take the collapsed state of code structures into account and the entire code is exported."]}),"\n",(0,n.jsxs)(t.li,{children:["When you select the ",(0,n.jsx)(t.strong,{children:"Import Method..."})," command, a standard file opening dialog box appears, allowing you to designate the file to be imported. Importing replaces the selected text in the method. To replace an existing method by an imported method, select the entire contents of the method before carrying out the import."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The import/export function is multi-platform: a method exported under Mac OS can be imported under Windows and vice versa; 4D handles the conversion of characters when necessary."}),"\n",(0,n.jsx)(t.p,{children:"4D can export and import methods in two formats:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["4D method (extension ",(0,n.jsx)(t.em,{children:".c4d"}),"): In this format, methods are exported in encoded form. The names of objects are tokenized. This format is used in particular for exchanging methods between 4D applications and plug-ins in different languages. Conversely, it is not possible to display them in a text editor."]}),"\n",(0,n.jsxs)(t.li,{children:["Text (extension ",(0,n.jsx)(t.em,{children:".txt"}),"): In this format, methods are exported in text-only form. In this case, the methods are readable using a standard text editor or a source control tool."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"project-method-properties",children:"Project method properties"}),"\n",(0,n.jsx)(t.p,{children:"After creating a project method, you can rename it and modify its properties. Project method properties mainly concern their access and security conditions (access by users, integrated servers or services) as well as their execution mode."}),"\n",(0,n.jsx)(t.p,{children:"The other types of methods do not have specific properties. Their properties are related to those of the objects to which they are attached."}),"\n",(0,n.jsxs)(t.p,{children:["To display the ",(0,n.jsx)(t.strong,{children:"Method Properties"})," dialog box for a project method, you can either:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["in the ",(0,n.jsx)(t.a,{href:"/docs/20-R6/code-editor/write-class-method",children:"Code Editor"}),", select the ",(0,n.jsx)(t.strong,{children:"Method Properties..."})," command in the ",(0,n.jsx)(t.strong,{children:"Method"})," menu,"]}),"\n",(0,n.jsxs)(t.li,{children:["or on the ",(0,n.jsx)(t.strong,{children:"Methods"})," page of the Explorer, ",(0,n.jsx)(t.strong,{children:"right-click"})," on the project method and select ",(0,n.jsx)(t.strong,{children:"Method Properties..."})," in the context menu or options menu."]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["A batch setting function allows you to modify a property for all or part of the database project methods in a single operation (see ",(0,n.jsx)(t.a,{href:"#batch-setting-for-method-attributes",children:"Batch setting for method attributes"}),")."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"name",children:"Name"}),"\n",(0,n.jsxs)(t.p,{children:["You can change the name of a project method in the ",(0,n.jsx)(t.strong,{children:"Name"})," area of the ",(0,n.jsx)(t.strong,{children:"Method Properties"})," window or in the Explorer."]}),"\n",(0,n.jsxs)(t.p,{children:["The new name must comply with 4D naming rules (see ",(0,n.jsx)(t.a,{href:"/docs/20-R6/Concepts/identifiers",children:"Identifiers"}),"). If a method with the same name already exists, 4D displays a message saying that the method name has already been used. If necessary, 4D sorts the list of methods again."]}),"\n",(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsxs)(t.p,{children:["Changing the name of a method already used in the database can invalidate any methods or formulas that use the old method name and runs the risk of disrupting application functioning. You can rename the method manually but it is strongly recommended to use the renaming function for project methods, described in ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html",children:"Renaming"}),". With this function, you can automatically update the name wherever the method is called throughout the Design environment."]}),(0,n.jsx)(t.p,{children:"With 4D Server, the method name is changed on the server when you finish editing it. If more than one user is modifying the method name at the same time, the final method name will be the name specified by the last user to finish editing it. You may want to specify a method owner so that only certain users can change the method's name"})]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Database methods cannot be renamed. The same goes for triggers, form methods, and object methods, which are bound to objects and take their names from the object concerned."})}),"\n",(0,n.jsx)(t.h3,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsx)(t.p,{children:"You can control how project methods are used and/or called in different contexts using attributes. Note that you can set attributes for an entire selection of project methods using the Explorer (see following section)."}),"\n",(0,n.jsx)(t.h4,{id:"invisible",children:"Invisible"}),"\n",(0,n.jsxs)(t.p,{children:["If you do not want users to be able to run a project method using the ",(0,n.jsx)(t.strong,{children:"Method..."})," command of the ",(0,n.jsx)(t.strong,{children:"Run"})," menu, you can make it Invisible by checking this option. An invisible method does not appear in the method execution dialog box."]}),"\n",(0,n.jsx)(t.p,{children:"When you make a project method invisible, it is still available to database programmers. It remains listed on the method list of the Explorer and of the Code Editor."}),"\n",(0,n.jsx)(t.h4,{id:"shared-by-components-and-host-database",children:"Shared by components and host database"}),"\n",(0,n.jsx)(t.p,{children:"This attribute is used within the framework of components. When it is checked, it indicates that the method will be available to components when the application is used as the host database. On the other hand, when the application is used as a component, the method will be available to the host databases."}),"\n",(0,n.jsxs)(t.p,{children:["For more information about components, refer to the ",(0,n.jsx)(t.a,{href:"/docs/20-R6/Extensions/develop-components",children:"Developing and installing 4D components"})," chapter."]}),"\n",(0,n.jsx)(t.h4,{id:"execute-on-server",children:"Execute on Server"}),"\n",(0,n.jsx)(t.p,{children:"This attribute is only taken into account for a 4D application in client-server mode. When this option is checked, the project method is always executed on the server, regardless of how it is called."}),"\n",(0,n.jsxs)(t.p,{children:["For more information on this option, refer to ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html",children:"Execute on Server attribute"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"execution-mode",children:"Execution mode"}),"\n",(0,n.jsxs)(t.p,{children:["This option allows you to declare the method eligible for execution in preemptive mode. It is described in the ",(0,n.jsx)(t.a,{href:"/docs/20-R6/Develop/processes#preemptive-processes",children:"Preemptive processes section"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"available-through",children:"Available through"}),"\n",(0,n.jsx)(t.p,{children:"Availability attributes specify the external services which are allowed to explicitly call the method."}),"\n",(0,n.jsx)(t.h4,{id:"web-services",children:"Web Services"}),"\n",(0,n.jsxs)(t.p,{children:["This attribute lets you publish the current method as a Web Service accessible via SOAP requests. For more information, refer to the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html",children:"Publication and use of Web Services"})," chapter. When this option is checked, the ",(0,n.jsx)(t.strong,{children:"Published in WSDL"})," option is enabled."]}),"\n",(0,n.jsxs)(t.p,{children:["In the Explorer, project methods that are offered as a Web Service are given a specific icon ",(0,n.jsx)(t.img,{src:"https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png",alt:""}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). If the method name is not in keeping with this, 4D does not assign the property."]}),"\n",(0,n.jsx)(t.h4,{id:"published-in-wsdl",children:"Published in WSDL"}),"\n",(0,n.jsxs)(t.p,{children:['This attribute is only available when the "Web Service" attribute is checked. It lets you include the current method in the WSDL of the 4D application. For more information about this, refer to ',(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689",children:"Generation of the WSDL"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ",(0,n.jsx)(t.img,{src:"https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png",alt:""}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"4d-tags-and-urls-4daction",children:"4D tags and URLs (4DACTION...)"}),"\n",(0,n.jsxs)(t.p,{children:["This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special ",(0,n.jsx)(t.a,{href:"/docs/20-R6/WebServer/httpRequests#4daction",children:"4DACTION URL"})," used for calling 4D methods, nor the special ",(0,n.jsx)(t.a,{href:"/docs/20-R6/Tags/transformation-tags",children:"4DSCRIPT, 4DTEXT and 4DHTML tags"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In the Explorer, project methods with this attribute are given a specific icon ",(0,n.jsx)(t.img,{src:"https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png",alt:""}),"."]}),"\n",(0,n.jsx)(t.p,{children:"For security reasons, this option is unchecked by default. Each method that can be executed using the special Web URL or tags must be indicated individually."}),"\n",(0,n.jsx)(t.h4,{id:"sql",children:"SQL"}),"\n",(0,n.jsx)(t.p,{children:"When it is checked, this option allows the project method to be executed by the SQL engine of 4D. By default, it is not selected, which means that, unless explicitly authorized, 4D project methods are protected and cannot be called by the SQL engine of 4D."}),"\n",(0,n.jsxs)(t.p,{children:["This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html",children:"Begin SQL"}),"/",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html",children:"End SQL"}),"  tags or the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html",children:"QUERY BY SQL"})," command."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'Even if a method has the "SQL" attribute, access rights set at the level of the database settings and method properties are taken into account for the execution of the method.'}),"\n",(0,n.jsxs)(t.li,{children:["The ODBC ",(0,n.jsx)(t.strong,{children:"SQLProcedure"}),' function only returns project methods with the "SQL" attribute.']}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For more information, refer to ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html",children:"4D SQL engine implementation"})," in the 4D SQL manual."]}),"\n",(0,n.jsx)(t.h4,{id:"rest-server",children:"REST Server"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["This option is deprecated. Calling code through REST calls is only supported with ",(0,n.jsx)(t.a,{href:"/docs/20-R6/REST/classFunctions",children:"ORDA data model class functions"}),"."]})}),"\n",(0,n.jsx)(t.h4,{id:"batch-setting-for-method-attributes",children:"Batch setting for method attributes"}),"\n",(0,n.jsx)(t.p,{children:'Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. This feature is especially useful for modifying the attributes of a large number of project methods. It can also be used during development to apply common attributes to groups of similar methods quickly.'}),"\n",(0,n.jsx)(t.p,{children:"For batch setting of method attributes:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["On the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html",children:"Methods Page"})," of the 4D Explorer, expand the options menu, then choose the ",(0,n.jsx)(t.strong,{children:"Batch setting of attributes..."})," command. The ",(0,n.jsx)(t.strong,{children:"Attributes for methods"})," dialog appears."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'In the "Matching method name:" area, enter a string that lets you designate the methods you want to modify as a batch.\nThe character string is used as a search criterion for the method names.'}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Use the wildcard character @ to help define groups of methods:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["To designate methods whose names begin with..., type @ at the end of the string. For example: ",(0,n.jsx)(t.code,{children:"web@"})]}),"\n",(0,n.jsxs)(t.li,{children:["To designate methods whose names contain..., type @ in the middle of the string. For example: ",(0,n.jsx)(t.code,{children:"web@write"})]}),"\n",(0,n.jsxs)(t.li,{children:["To designate methods whose names end with..., type @ at the beginning of the string. For example: ",(0,n.jsx)(t.code,{children:"@write"})]}),"\n",(0,n.jsx)(t.li,{children:"To designate all of the methods, just type @ in the area."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The search does not take upper/lower case into account."}),"\n",(0,n.jsxs)(t.li,{children:["You can enter several @ characters in the string, for example ",(0,n.jsx)(t.code,{children:"dtro_@web@pro.@"})]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:['In the "Attribute to Modify" area, choose an attribute from the drop-down list, then click on the ',(0,n.jsx)(t.strong,{children:"True"})," or ",(0,n.jsx)(t.strong,{children:"False"})," radio button corresponding to the value to be applied."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"}),' If the "Published in WSDL" attribute is set to True, it will only be applied to project methods already containing the "Offered as a Web Service" attribute.']}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.strong,{children:"Apply"}),". The modification is applied instantly to all the project methods designated by the character string entered."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},237257:(e,t,o)=>{o.d(t,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg=="},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>d});var n=o(296540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);