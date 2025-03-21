"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4027"],{396861:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/set-channel","title":"SET CHANNEL","description":"SET CHANNEL ( port ; settings )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-channel.md","sourceDirName":"commands-legacy","slug":"/commands/set-channel","permalink":"/docs/20-R7/commands/set-channel","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-channel.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-channel","title":"SET CHANNEL","slug":"/commands/set-channel","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND VARIABLE","permalink":"/docs/20-R7/commands/send-variable"},"next":{"title":"SET TIMEOUT","permalink":"/docs/20-R7/commands/set-timeout"}}'),r=s("785893"),d=s("250065");let i={id:"set-channel",title:"SET CHANNEL",slug:"/commands/set-channel",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Working with Serial Ports: SET CHANNEL (port;settings)",id:"working-with-serial-ports-set-channel-portsettings",level:2},{value:"Note on serial ports",id:"note-on-serial-ports",level:3},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"Working with Documents on Disk: SET CHANNEL(operation;document)",id:"working-with-documents-on-disk-set-channeloperationdocument",level:2},{value:"Example 4",id:"example-4",level:3},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET CHANNEL"})," ( ",(0,r.jsx)(n.em,{children:"port"})," ; ",(0,r.jsx)(n.em,{children:"settings"})," )\xa0",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"SET CHANNEL"})," ( ",(0,r.jsx)(n.em,{children:"operation"})," ; ",(0,r.jsx)(n.em,{children:"document"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"port"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Serial port number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Serial port settings"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"operation"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Document operation to perform"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"document"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Document name"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"SET CHANNEL"})," command opens a serial port or a document. You can open only one serial port or one document at a time with this command. To close an opened serial port, pass SET CHANNEL (11)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Historical Note:"})," This command was originally the first 4D command used for working with serial ports and documents on disks. Since that time, new commands have been added. Today, you will typically work with documents on disk using the commands ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/open-document",children:"Open document"}),", ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/create-document",children:"Create document"})," and ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/append-document",children:"Append document"}),". With these commands, you can read and write characters to and from documents using ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/create-document",children:"Create document"})," or ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-packet",children:"RECEIVE PACKET"})," (these commands work with ",(0,r.jsx)(n.strong,{children:"SET CHANNEL"}),", too). However, if you want to use the commands ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/send-variable",children:"SEND VARIABLE"}),", ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-variable",children:"RECEIVE VARIABLE"}),", ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/send-record",children:"SEND RECORD"})," and ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-record",children:"RECEIVE RECORD"}),", you must use SET CHANNEL to access the document on disk."]}),"\n",(0,r.jsx)(n.p,{children:"The description of SET CHANNEL is composed of two sections:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Working with Serial Ports"}),"\n",(0,r.jsx)(n.li,{children:"Working with Documents"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"working-with-serial-ports-set-channel-portsettings",children:"Working with Serial Ports: SET CHANNEL (port;settings)"}),"\n",(0,r.jsxs)(n.p,{children:["The first form of the ",(0,r.jsx)(n.strong,{children:"SET CHANNEL"})," command opens a serial port, setting the protocol and other port information. Data can be sent with ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/send-packet",children:"SEND PACKET"}),", ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/send-record",children:"SEND RECORD"})," or ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/send-variable",children:"SEND VARIABLE"}),", and received with ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-buffer",children:"RECEIVE BUFFER"}),", ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-packet",children:"RECEIVE PACKET"}),", ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-variable",children:"RECEIVE VARIABLE"})," or ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-record",children:"RECEIVE RECORD"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The first parameter, ",(0,r.jsx)(n.em,{children:"port"}),", selects the port and the protocol. You can address up to 99 serial ports (one at a time).",(0,r.jsx)(n.br,{}),"\nThe following table lists the values for ",(0,r.jsx)(n.em,{children:"port"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Value for port"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Printer port (Macintosh) or COM2 (PC) with no protocol"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Modem port (Macintosh) or COM1 (PC) with no protocol"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20"}),(0,r.jsx)(n.td,{children:"Printer port (Macintosh) or COM2 (PC) with sofware protocol such as XON/XOFF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"21"}),(0,r.jsx)(n.td,{children:"Modem port (Macintosh) or COM1 (PC) with sofware protocol such as XON/XOFF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"30"}),(0,r.jsx)(n.td,{children:"Printer port (Macintosh) or COM2 (PC) with hardware protocol such as RTS/CTS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"31"}),(0,r.jsx)(n.td,{children:"Modem port (Macintosh) or COM1 (PC) with hardware protocol such as RTS/CTS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"101 to 199"}),(0,r.jsx)(n.td,{children:"Serial communication with no protocol"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"201 to 299"}),(0,r.jsx)(n.td,{children:"Serial communication with software protocol such as XON/XOFF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"301 to 399"}),(0,r.jsx)(n.td,{children:"Serial communication with hardware protocol such as RTS/CTS"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important:"})," The value you pass in ",(0,r.jsx)(n.em,{children:"port"})," must refer to an existing serial COM port recognized by the operating system. For example, in order to be able to use the values 101, 103 and 125, the serial ports COM1, COM3 and COM25 must have been set up correctly."]}),"\n",(0,r.jsx)(n.h3,{id:"note-on-serial-ports",children:"Note on serial ports"}),"\n",(0,r.jsx)(n.p,{children:"In a standard configuration Mac OS and Windows support two serial ports: on Mac OS, the modem port and the printer port; on Windows, the COM1 and COM2 ports. However, additional serial ports can be added by the use of extension boards. Originally, 4D only adressed two standard serial ports and it was only later that the support of additional ports was implemented. For compatibility reasons, both addressing systems were kept."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you want to address a standard serial port (printer/COM2 or modem/COM1), you can either pass in the ",(0,r.jsx)(n.em,{children:"port"})," parameter one of the following values 0, 1, 20, 21, 30 and 31 (that corresponds to the old addressing method), or a value greater than 100 (please see the following explanation)."]}),"\n",(0,r.jsx)(n.li,{children:"If you want to address additional serial ports, you need to pass the value N+100 (where N is the value of the port to address). You may also consider adding 100 or 200 to the value mentioned above (N+100), if you want to select respectively a software or a hardware protocol."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"If you want to use the printer/COM2 port with no protocol, you can use one of the following syntaxes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(0;param)\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(102;param)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"If you want to use the modem/COM1 port with the XON/XOFF protocol, you can use one of the following syntaxes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(21;param)\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(201;param)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.p,{children:"If you want to use the COM 25 port with the RTS/CTS protocol, you need to use the following syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(325;param)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"settings"})," parameter sets the speed, number of data bits, number of stop bits, and parity. You determine the value for ",(0,r.jsx)(n.em,{children:"settings"})," by adding the speed, data bits, stop bits, and parity values as listed in the following table. For example, to set 1200 baud, 8 data bits, 1 stop bit, and no parity, you would add 94 + 3072 + 16384 + 0 = 19550. You would then use 19550 as the value of the ",(0,r.jsx)(n.em,{children:"setup"})," parameter."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Control"}),(0,r.jsx)(n.th,{children:"Value to accumulate in settings parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Speed"}),(0,r.jsx)(n.td,{children:"380"}),(0,r.jsx)(n.td,{children:"300"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"(in baud)"}),(0,r.jsx)(n.td,{children:"189"}),(0,r.jsx)(n.td,{children:"600"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"94"}),(0,r.jsx)(n.td,{children:"1200"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"62"}),(0,r.jsx)(n.td,{children:"1800"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"46"}),(0,r.jsx)(n.td,{children:"2400"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"30"}),(0,r.jsx)(n.td,{children:"3600"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"22"}),(0,r.jsx)(n.td,{children:"4800"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"14"}),(0,r.jsx)(n.td,{children:"7200"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"9600"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"19200"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"28800"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"38400"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"57600"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"1022"}),(0,r.jsx)(n.td,{children:"115200"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"1021"}),(0,r.jsx)(n.td,{children:"230400"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Data bits"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"2048"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"1024"}),(0,r.jsx)(n.td,{children:"7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"3072"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Stop bits"}),(0,r.jsx)(n.td,{children:"16384"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u201332768"}),(0,r.jsx)(n.td,{children:"1.5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u201316384"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Parity"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"None"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"4096"}),(0,r.jsx)(n.td,{children:"Odd"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"12288"}),(0,r.jsx)(n.td,{children:"Even"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Tip:"})," The various numeric values to be accumulated and passed in ",(0,r.jsx)(n.em,{children:"port"})," and ",(0,r.jsx)(n.em,{children:"settings"})," (but not including the values for COM1...COM99) are available as predefined constants in the theme ",(0,r.jsx)(n.em,{children:"Communications"})," within the Design environment Explorer windows. For COM1...COM99, use numeric literals."]}),"\n",(0,r.jsx)(n.h2,{id:"working-with-documents-on-disk-set-channeloperationdocument",children:"Working with Documents on Disk: SET CHANNEL(operation;document)"}),"\n",(0,r.jsxs)(n.p,{children:["The second form of the ",(0,r.jsx)(n.strong,{children:"SET CHANNEL"})," command allows you to create, open, and close a document. Unlike the ",(0,r.jsx)(n.em,{children:"System Documents"})," commands, it can open only one document at a time. The document can be read from or written to."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"operation"})," parameter specifies the operation to be performed on the document specified by ",(0,r.jsx)(n.em,{children:"document"}),". The following table lists the values of ",(0,r.jsx)(n.em,{children:"operation"})," and the resulting operation with different values for ",(0,r.jsx)(n.em,{children:"document"}),". The first column lists the allowed values for ",(0,r.jsx)(n.em,{children:"operation"}),". The second column lists the allowed values for ",(0,r.jsx)(n.em,{children:"document"}),". The third column lists the resulting operation."]}),"\n",(0,r.jsx)(n.p,{children:"For example, to display an Open File dialog box to open a text file, you would use the following line:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET CHANNEL(13;"")\n'})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Operation"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Document"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Result"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Opens the document specified by String. If the document doesn\u2019t exist, the document is opened and created."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:'"" (empty string)'}),(0,r.jsx)(n.td,{children:"Displays the Open File dialog box to open a file. All file types are displayed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:"none"}),(0,r.jsx)(n.td,{children:"Closes an open file."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:'"" (empty string)'}),(0,r.jsx)(n.td,{children:"Displays the Save File dialog box to create a new file."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"13"}),(0,r.jsx)(n.td,{children:'"" (empty string)'}),(0,r.jsx)(n.td,{children:"Displays the Open File dialog box to open a file. Only text file types are displayed."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"All of the operations in this table set the Document system variable if appropriate. They also set the OK system variable to 1 if the operation was successful. Otherwise, the OK system variable is set to 0."}),"\n",(0,r.jsx)(n.h3,{id:"example-4",children:"Example 4"}),"\n",(0,r.jsxs)(n.p,{children:["See examples for the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-buffer",children:"RECEIVE BUFFER"}),", ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-timeout",children:"SET TIMEOUT"})," and ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-record",children:"RECEIVE RECORD"})," commands."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/append-document",children:"Append document"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/category/commands/Communications",children:"Communications"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/create-document",children:"Create document"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/get-serial-port-mapping",children:"GET SERIAL PORT MAPPING"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/open-document",children:"Open document"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-packet",children:"RECEIVE PACKET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-record",children:"RECEIVE RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/send-packet",children:"SEND PACKET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/send-record",children:"SEND RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/send-variable",children:"SEND VARIABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-timeout",children:"SET TIMEOUT"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"77"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK, Document"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);