"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1119"],{631454:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/query-by-attribute","title":"QUERY BY ATTRIBUTE","description":"QUERY BY ATTRIBUTE ( {;}{conjOp ;} objectField ; attributePath ; queryOp ; value {; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/query-by-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/query-by-attribute","permalink":"/docs/20-R8/commands/query-by-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-by-attribute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"query-by-attribute","title":"QUERY BY ATTRIBUTE","slug":"/commands/query-by-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY","permalink":"/docs/20-R8/commands/query"},"next":{"title":"QUERY BY EXAMPLE","permalink":"/docs/20-R8/commands/query-by-example"}}'),s=r("785893"),i=r("250065");let a={id:"query-by-attribute",title:"QUERY BY ATTRIBUTE",slug:"/commands/query-by-attribute",displayed_sidebar:"docs"},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"The # operator and Null values",id:"the--operator-and-null-values",level:3},{value:"Building multiple queries",id:"building-multiple-queries",level:3},{value:"Date values in the object",id:"date-values-in-the-object",level:3},{value:"Using the virtual length property",id:"using-the-virtual-length-property",level:3},{value:"Linking array attribute query arguments",id:"linking-array-attribute-query-arguments",level:3},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"Example 5",id:"example-5",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"})," ( {",(0,s.jsx)(n.em,{children:"aTable"}),"}{;}{",(0,s.jsx)(n.em,{children:"conjOp"})," ;} ",(0,s.jsx)(n.em,{children:"objectField"})," ; ",(0,s.jsx)(n.em,{children:"attributePath"})," ; ",(0,s.jsx)(n.em,{children:"queryOp"})," ; ",(0,s.jsx)(n.em,{children:"value"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table for which to return a selection of records, or Default table if omitted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"conjOp"}),(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Conjunction operator to use to join multiple queries (if any)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectField"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Object field to query attributes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"attributePath"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name or path of attribute"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"queryOp"}),(0,s.jsx)(n.td,{children:"Text, *"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Query operator (comparator)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"Text, Number, Date, Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Value to compare"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Continue query flag"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"})," looks for records matching the query string defined using the ",(0,s.jsx)(n.em,{children:"objectField"}),", ",(0,s.jsx)(n.em,{children:"attributePath"}),", ",(0,s.jsx)(n.em,{children:"queryOp"})," and ",(0,s.jsx)(n.em,{children:"value"})," parameters, and returns a selection of records for ",(0,s.jsx)(n.em,{children:"aTable"}),".changes the current selection of ",(0,s.jsx)(n.em,{children:"aTable"})," for the current process and makes the first record of the new selection the current record. If the ",(0,s.jsx)(n.em,{children:"aTable"})," parameter is omitted, the command applies to the default table. If no default table has been set, an error occurs."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"conjOp"})," parameter is used to join ",(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"})," calls when defining multiple queries. The conjunction operators available are the same as the ones for the ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/query",children:"QUERY"})," command:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Conjunction"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Symbol to use with QUERY BY ATTRIBUTE"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AND"}),(0,s.jsx)(n.td,{children:"&"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OR"}),(0,s.jsx)(n.td,{children:"|"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Except"}),(0,s.jsx)(n.td,{children:"#"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"conjOp"})," parameter is not used for the first ",(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"})," call of a multiple query, or if the query is a simple query. If you omit it within a multiple query, the AND (&) operator is used by default."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"objectField"}),", pass the Object field whose attribute(s) you want to query. It can come from another table if it is table 1 of a table linked to ",(0,s.jsx)(n.em,{children:"aTable"})," by an automatic or manual link. ",(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"})," supports 4D Write Pro custom attributes when documents are stored in Object fields. For more information about this point, please refer to the ",(0,s.jsx)(n.em,{children:"Storing 4D Write Pro documents in 4D Object fields"})," section."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"attributePath"}),', pass the path of the attribute whose values you want to compare for each record, for example "children.girls.age". If you pass a single name, for example "place", you designate the corresponding attribute found at the first level of the object field. If an attribute "x" is an array, ',(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"}),' will search records which contain an attribute "x" in which at least one element matches the criteria. To search in array attributes, it is necessary to indicate to the ',(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"}),' command that attribute "x" is an array by appending "[]" to its name in ',(0,s.jsx)(n.em,{children:"attributePath"}),' (see example 3). You can add a letter in the brackets (i.e. "[b]") to link arguments (see the ',(0,s.jsx)(n.em,{children:"Linking array attribute query arguments"})," paragraph below)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Keep in mind that attribute names are case-sensitive: you can have different "MyAtt" and "myAtt" attribute names in the same record.'}),"\n",(0,s.jsx)(n.li,{children:'Attribute names are trimmed to eliminate extra spaces. For example, " my first attribute .my second attribute " is interpreted as "my first attribute.my second attribute".'}),"\n",(0,s.jsxs)(n.li,{children:['You cannot query on attributes whose name contains special characters such as "." or "[ ]", because they will be incorrectly evaluated as tokens in the query string. For more information, please refer to the ',(0,s.jsx)(n.em,{children:"Object property identifiers"})," paragraph."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"queryOp"})," parameter is the comparison operator that is applied between ",(0,s.jsx)(n.em,{children:"objectField"})," and ",(0,s.jsx)(n.em,{children:"value"}),". You can pass one of the symbols shown here:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Comparison"})}),(0,s.jsxs)(n.th,{children:[(0,s.jsx)(n.strong,{children:"Symbol to use with"})," ",(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"})]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Equal to"}),(0,s.jsx)(n.td,{children:"="})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Not equal to(*)"}),(0,s.jsx)(n.td,{children:"#"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Less than"}),(0,s.jsx)(n.td,{children:"<"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Greater than"}),(0,s.jsx)(n.td,{children:">"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Less than or equal to"}),(0,s.jsx)(n.td,{children:"<="})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Greater than or equal to"}),(0,s.jsx)(n.td,{children:">="})]})]})]}),"\n",(0,s.jsx)(n.p,{children:'(*) When used with array elements, the # operator means "does not contain any".'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," It is also possible to specify the comparison operator as a text expression instead of a symbol. See the ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/query",children:"QUERY"})," command description for more information."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"value"})," is the data against which the ",(0,s.jsx)(n.em,{children:"attributePath"})," will be compared. The value can be any expression that evaluates to the same data type as ",(0,s.jsx)(n.em,{children:"attributePath"}),'. The value is evaluated once, at the beginning of the query. The value is not evaluated for each record. To query for a string contained within a string (a "contains" query), use the wildcard symbol (@) in ',(0,s.jsx)(n.em,{children:"value"}),' to isolate the string to be searched for as shown in this example: "@Smith@". Note that in this case, the search only partially benefits from the index (compactness of data storage).']}),"\n",(0,s.jsx)(n.p,{children:"Here is the structure of a query by attribute:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Table] ;[Table]ObjectField ;"attribute1.attribute2";=;value)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," An implicit criteria for all operators (except #) is that the Object field contains an attribute. However, for the # operator, it can be undefined (see below)."]}),"\n",(0,s.jsx)(n.h3,{id:"the--operator-and-null-values",children:"The # operator and Null values"}),"\n",(0,s.jsxs)(n.p,{children:["When querying by attribute using the ",(0,s.jsx)(n.strong,{children:"#"})," operator, you must take into account cases where an attribute may not be present in a record. For example, consider the following statement:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([People];[People]Animals;"dog.name";#;"Rex")\n'})}),"\n",(0,s.jsxs)(n.p,{children:['This query will return records for people who have a dog whose name is not "Rex", but will NOT return records for people who do not have a dog, or who have a dog without a name, ',(0,s.jsx)(n.em,{children:"i.e."}),' records for which the "dog.name" property value is ',(0,s.jsx)(n.strong,{children:"null"}),". The underlying concept is: The query engine cannot compare the uncomparable, ",(0,s.jsx)(n.em,{children:"i.e."})," missing or nonexistent data. Thus, records that cannot be compared to the search criteria are excluded from the query."]}),"\n",(0,s.jsx)(n.p,{children:"To use a more generic example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Table];[Table]ObjectField;"attribute1.attribute2";#;value)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This query will return all records for which ",(0,s.jsx)(n.em,{children:"[Table]ObjectField"})," contains an object with an ",(0,s.jsx)(n.em,{children:"attribute1"})," attribute, which is an object containing an ",(0,s.jsx)(n.em,{children:"attribute2"})," attribute whose value is not ",(0,s.jsx)(n.em,{children:"value."})," It will NOT return records where:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the object field does not contain ",(0,s.jsx)(n.em,{children:"attribute1"})]}),"\n",(0,s.jsx)(n.li,{children:"the object field does not contain **attribute1.attribute*2"}),"\n",(0,s.jsx)(n.li,{children:"the object field contains **attribute1.attribute*2=null"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This principle also applies to array attributes. For example, the query will return records for people who have one or several address(es), but none of them is in Paris."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].city";#;"paris")\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," To specifically obtain records where the attribute is undefined, you can use an empty object (see example 2). Note however that searching for NULL values in array elements is not supported."]}),"\n",(0,s.jsx)(n.h3,{id:"building-multiple-queries",children:"Building multiple queries"}),"\n",(0,s.jsx)(n.p,{children:"Here are the rules for building multiple queries by attribute:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The first query argument must not contain a conjunction."}),"\n",(0,s.jsx)(n.li,{children:"Each successive query argument can begin with a conjunction. If you omit it, the AND (&) operator is used by default."}),"\n",(0,s.jsxs)(n.li,{children:["All queries, except the final query, must use the ",(0,s.jsx)(n.em,{children:"*"})," parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"})," can be mixed with ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/query",children:"QUERY"})," commands (see example)."]}),"\n",(0,s.jsxs)(n.li,{children:["To perform the query, do not specify the ",(0,s.jsx)(n.em,{children:"*"})," parameter in the last ",(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"})," command. Alternatively, you can execute the ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/query",children:"QUERY"})," command without any parameters other than the table."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Each table maintains its own currently-built query. This means that you can create multiple queries simultaneously, one for each table."]}),"\n",(0,s.jsx)(n.p,{children:"No matter which way a query has been defined:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the actual query operation is going to take some time to be performed, 4D automatically displays a message containing a progress meter. These messages can be turned on and off by using the ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/messages-on",children:"MESSAGES ON"})," and ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/messages-off",children:"MESSAGES OFF"}),"  commands. If a progress meter is displayed, the user can click on the ",(0,s.jsx)(n.strong,{children:"Stop"})," button to interrupt the query. If the query is completed, OK is set to 1. Otherwise, if the query is interrupted, OK is set to 0 (zero)."]}),"\n",(0,s.jsx)(n.li,{children:"If any indexed object fields are specified, the query is optimized every time that it is possible (indexed fields are searched first) resulting in a query that takes the least amount of time possible."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"date-values-in-the-object",children:"Date values in the object"}),"\n",(0,s.jsxs)(n.p,{children:["Dates are stored in objects according to database settings; by default, the time zone is taken into account (see the JSON use local time selector in the ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'!1973-05-22! -> "1973-05-21T23:00:00.000Z"\n'})}),"\n",(0,s.jsx)(n.p,{children:'This setting is also taken into account during queries, so you do not have to worry about it if you always use your database at the same place and if settings are the same on all machines that access the data. In this case, the following query will correctly return records whose Birthday attribute equals !1973-05-22! (saved as "1973-05-21T23:00:00.00Z"):'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Persons];[Persons]OB_Info;"Birthday";=;!1973-05-22!)\n'})}),"\n",(0,s.jsx)(n.p,{children:"If you do not want to use the GMT settings, you can modify these settings using the following instruction:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET DATABASE PARAMETER(JSON use local time;0)\n"})}),"\n",(0,s.jsx)(n.p,{children:'Keep in mind that the scope of this setting is the process only. If you execute this instruction, then October 1st, 1965 will be stored "1965-10-01T00:00:00.000Z" but you will need to set the same parameter before launching your queries:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0SET DATABASE PARAMETER(JSON use local time;0)\n\xa0QUERY BY ATTRIBUTE([Persons];[Persons]OB_Info;"Birthday";=;!1976-11-27!)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"using-the-virtual-length-property",children:"Using the virtual length property"}),"\n",(0,s.jsxs)(n.p,{children:['You can use the virtual "length" property with this command. This property is available automatically for all array type attributes and returns the size of the array, i.e. the number of elements it contains. It can be used in the context of executing the ',(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"})," command (see example 4)."]}),"\n",(0,s.jsx)(n.h3,{id:"linking-array-attribute-query-arguments",children:"Linking array attribute query arguments"}),"\n",(0,s.jsxs)(n.p,{children:["(New in 4D v16 R2) When searching in array attributes with multiple query arguments joined by the AND operator, you may want to make sure that only records containing elements that match all arguments are returned, and not records where arguments can be found in different elements. To do this, you need to ",(0,s.jsx)(n.em,{children:"link"})," query arguments to array elements, so that only single elements containing linked arguments are found."]}),"\n",(0,s.jsx)(n.p,{children:"For example, with the following two records:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Record 1:"}),(0,s.jsx)(n.br,{}),'\n[People]name: "martin"',(0,s.jsx)(n.br,{}),"\n[People]OB_Field:",(0,s.jsx)(n.br,{}),'\n"locations" : [ {',(0,s.jsx)(n.br,{}),'\n"kind":"home",',(0,s.jsx)(n.br,{}),'\n"city":"paris"',(0,s.jsx)(n.br,{}),"\n} ]"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Record 2:"}),(0,s.jsx)(n.br,{}),'\n[People]name: "smith"',(0,s.jsx)(n.br,{}),"\n[People]OB_Field:",(0,s.jsx)(n.br,{}),'\n"locations" : [ {',(0,s.jsx)(n.br,{}),'\n"kind":"home",',(0,s.jsx)(n.br,{}),'\n"city":"lyon"',(0,s.jsx)(n.br,{}),"\n} , {",(0,s.jsx)(n.br,{}),'\n"kind":"office",',(0,s.jsx)(n.br,{}),'\n"city":"paris"',(0,s.jsx)(n.br,{}),"\n} ]"]}),"\n",(0,s.jsx)(n.p,{children:'You want to find people with a "home" location kind in the city "paris". If you write:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].city";=;"paris";*)\n\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].kind";=;"home")\n'})}),"\n",(0,s.jsx)(n.p,{children:'... the query will return "martin" and "smith" because "smith" has a "locations" element whose "kind" is "home" and a "locations" element whose "city" is "paris", even though they are different elements.'}),"\n",(0,s.jsxs)(n.p,{children:["If you want to only get records where matching arguments are in the same element, you need to ",(0,s.jsx)(n.strong,{children:"link arguments"}),". To link query arguments:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add a letter between the [] in the first path to link and repeat the same letter in all linked arguments. For example: ",(0,s.jsx)(n.strong,{children:"locations[a].city"})," and ",(0,s.jsx)(n.strong,{children:"locations[a].kind"}),". You can use any letter of the Latin alphabet (not case sensitive)."]}),"\n",(0,s.jsx)(n.li,{children:"To add different linked criteria in the same query, use another letter (see examples below). You can create up to 26 combinations of criteria in a single query."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"With the above records, if you write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[a].city";=;"paris";*)\n\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[a].kind";=;"home")\n'})}),"\n",(0,s.jsx)(n.p,{children:'... the query will only return "martin" because it has a "locations" element whose "kind" is "home" and whose "city" is "paris". The query will not return "smith" because the values "home" and "paris" are not in the same array element. See the examples below for more illustrations of this feature.'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"}),' Using a linked syntax in a single query line will give the same results as a standard query, except when using the "#" operator: in this case, invalid results may be returned. This specific syntax is therefore not supported.']}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:'In this example, the "age" attribute is either a string or an integer and we want to find people whose age is between 20 and 29. The first two lines query the attribute as an integer (>=20 and < 30) and the last ones query the field as a string (starts with "2" but is different from "2".)'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Persons];[Persons]OB_Info;"age";>=;20;*)\n\xa0QUERY BY ATTRIBUTE([Persons];&;[Persons]OB_Info;"age";<;30;*)\n\xa0QUERY BY ATTRIBUTE([Persons];|;[Persons]OB_Info;"age";=;"2@";*)\n\xa0QUERY BY ATTRIBUTE([Persons];&;[Persons]OB_Info;"age";#;"2")\xa0//no final * to launch execution\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"})," command can be used to find records where certain attributes are defined (or are not defined). To do this, you have to use an empty object."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Find records where e-mail is defined in the object field\n\xa0var $undefined : Object\n\xa0QUERY BY ATTRIBUTE([Persons];[Persons]Info;"e-mail";#;$undefined)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Find records where zip code is NOT defined in the object field\n\xa0var $undefined : Object\n\xa0QUERY BY ATTRIBUTE([Persons];[Persons]Info;"zip code";=;$undefined)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This specific syntax is not supported with array type attributes. Searching for NULL values in array elements will give invalid results."]}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"You want to search a field containing array attributes. With the following two records:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Record1:"}),(0,s.jsx)(n.br,{}),'\n[People]name: "martin"',(0,s.jsx)(n.br,{}),"\n[People]OB_Field:",(0,s.jsx)(n.br,{}),'\n"locations" : [ {',(0,s.jsx)(n.br,{}),'\n"kind":"office",',(0,s.jsx)(n.br,{}),'\n"city":"paris"',(0,s.jsx)(n.br,{}),"\n} ]"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Record2:"}),'\n[People]name: "smith"',(0,s.jsx)(n.br,{}),"\n[People]OB_Field:",(0,s.jsx)(n.br,{}),'\n"locations" : [ {',(0,s.jsx)(n.br,{}),'\n"kind":"home",',(0,s.jsx)(n.br,{}),'\n"city":"lyon"',(0,s.jsx)(n.br,{}),"\n} , {",(0,s.jsx)(n.br,{}),'\n"kind":"office",',(0,s.jsx)(n.br,{}),'\n"city":"paris"',(0,s.jsx)(n.br,{}),"\n} ]"]}),"\n",(0,s.jsxs)(n.p,{children:["... ",(0,s.jsx)(n.strong,{children:"QUERY BY ATTRIBUTE"}),' will find people with a location in "paris" using this statement:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//flag the array attribute with "[]" syntax\n\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].city";=;"paris")\n\xa0\xa0//selects "martin" and "smith"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"}),' If you defined several criteria on the same array attribute, the matched criteria will not necessarily apply to the same array element. In the following example, the query returns "smith" because it has a "locations" element whose "kind" is "home" and a "locations" element whose "city" is "paris", even if it\'s not the same element:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].kind";=;"home";*)\n\xa0QUERY BY ATTRIBUTE([People];&;[People]OB_Field;"locations[].city";=;"paris")\n\xa0\xa0//selects "smith"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:'This example illustrates the use of the virtual "length" property. Your database has a [Customer]full_Data object field with the following data:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(690410).Z+"",width:"892",height:"416"})}),"\n",(0,s.jsx)(n.p,{children:"You want to get the records for any customers who have two or more children. To do this, you can write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Customer];[Customer]full_Data;"Children.length";>=;2)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-5",children:"Example 5"}),"\n",(0,s.jsx)(n.p,{children:"These examples illustrate the various available combinations of linked query arguments on arrays. Assuming you have the following records:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Record1:"}),(0,s.jsx)(n.br,{}),'\n[Person]Name: "Sam"',(0,s.jsx)(n.br,{}),"\n[Person]ObjectField:",(0,s.jsx)(n.br,{}),'\n"Children": [ {',(0,s.jsx)(n.br,{}),'\n"Name": "Harry",',(0,s.jsx)(n.br,{}),'\n"Age": "15",',(0,s.jsx)(n.br,{}),'\n"Toy": [ {',(0,s.jsx)(n.br,{}),'\n"Name": "Car",',(0,s.jsx)(n.br,{}),'\n"Color": "Blue"',(0,s.jsx)(n.br,{}),"\n}, {",(0,s.jsx)(n.br,{}),'\n"Name": "Teddy Bear",',(0,s.jsx)(n.br,{}),'\n"Color": "Brown"',(0,s.jsx)(n.br,{}),"\n} ]",(0,s.jsx)(n.br,{}),"\n}, {",(0,s.jsx)(n.br,{}),'\n"Name": "Betty",',(0,s.jsx)(n.br,{}),'\n"Age": "9",',(0,s.jsx)(n.br,{}),'\n"Toy": [ {',(0,s.jsx)(n.br,{}),'\n"Name": "Car",',(0,s.jsx)(n.br,{}),'\n"Color": "Green"',(0,s.jsx)(n.br,{}),"\n}, {",(0,s.jsx)(n.br,{}),'\n"Name": "Puzzle",',(0,s.jsx)(n.br,{}),'\n"Color": "Blue"',(0,s.jsx)(n.br,{}),"\n} ]",(0,s.jsx)(n.br,{}),"\n} ]"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Record2:"}),(0,s.jsx)(n.br,{}),'\n[Person]Name: "Louis"',(0,s.jsx)(n.br,{}),"\n[Person]ObjectField:",(0,s.jsx)(n.br,{}),'\n"Children": [ {',(0,s.jsx)(n.br,{}),'\n"Name": "Harry",',(0,s.jsx)(n.br,{}),'\n"Age": "15",',(0,s.jsx)(n.br,{}),'\n"Toy": [ {',(0,s.jsx)(n.br,{}),'\n"Name": "Water gun",',(0,s.jsx)(n.br,{}),'\n"Color": "Blue"',(0,s.jsx)(n.br,{}),"\n} ]",(0,s.jsx)(n.br,{}),"\n}, {",(0,s.jsx)(n.br,{}),'\n"Name": "Betty",',(0,s.jsx)(n.br,{}),'\n"Age": "3",',(0,s.jsx)(n.br,{}),'\n"Toy": [ {',(0,s.jsx)(n.br,{}),'\n"Name": "Car",',(0,s.jsx)(n.br,{}),'\n"Color": "Blue"',(0,s.jsx)(n.br,{}),"\n}, {",(0,s.jsx)(n.br,{}),'\n"Name": "Puzzle",',(0,s.jsx)(n.br,{}),'\n"Color": "Green"',(0,s.jsx)(n.br,{}),"\n} ]",(0,s.jsx)(n.br,{}),"\n} ]"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Record3:"}),(0,s.jsx)(n.br,{}),'\n[Person]Name: "Victor"',(0,s.jsx)(n.br,{}),"\n[Person]ObjectField:",(0,s.jsx)(n.br,{}),'\n"Children": [ {',(0,s.jsx)(n.br,{}),'\n"Name": "Harry",',(0,s.jsx)(n.br,{}),'\n"Age": "9",',(0,s.jsx)(n.br,{}),'\n"Toy": [ {',(0,s.jsx)(n.br,{}),'\n"Name": "Doll",',(0,s.jsx)(n.br,{}),'\n"Color": "Pink"',(0,s.jsx)(n.br,{}),"\n}, {",(0,s.jsx)(n.br,{}),'\n"Name": "Puzzle",',(0,s.jsx)(n.br,{}),'\n"Color": "Blue"',(0,s.jsx)(n.br,{}),"\n} ]",(0,s.jsx)(n.br,{}),"\n}, {",(0,s.jsx)(n.br,{}),'\n"Name": "Betty",',(0,s.jsx)(n.br,{}),'\n"Age": "15",',(0,s.jsx)(n.br,{}),'\n"Toy": [ {',(0,s.jsx)(n.br,{}),'\n"Name": "Water gun",',(0,s.jsx)(n.br,{}),'\n"Color": "Blue"',(0,s.jsx)(n.br,{}),"\n} ]",(0,s.jsx)(n.br,{}),"\n} ]"]}),"\n",(0,s.jsx)(n.p,{children:'To find people who have a child named "Betty" who is 15 years old:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[a].Name";=;"Betty";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Age";=;"15")\n\xa0\xa0//returns "Victor"\n\xa0\n\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Betty";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"15")\n\xa0\xa0//returns "Sam", "Louis" and "Victor"\n'})}),"\n",(0,s.jsx)(n.p,{children:'To find people who have a child named "Betty", 15 years old, and a child named "Harry" who is 9 years old:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[a].Name";=;"Betty";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Age";=;"15";*)\n\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[b].Name";=;"Harry";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[b].Age";=;"9")\n\xa0\xa0//returns "Victor"\n\xa0\n\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Betty";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"15";*)\n\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Harry";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"9")\n\xa0\xa0//returns "Sam" and "Victor"\n'})}),"\n",(0,s.jsx)(n.p,{children:'To find people who have a 15 year-old child named "Harry" who has a "blue car" toy (searching in an array of arrays):'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[a].Name";=;"Harry";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Age";=;"15";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Toy[b].Name";=;"Car";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Toy[b].Color";=;"Blue")\n\xa0\xa0//returns "Sam"\n\xa0\n\xa0QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Harry";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"15";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Toy[].Name";=;"Car";*)\n\xa0QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Toy[].Color";=;"Blue")\n\xa0\xa0//returns "Sam" and "Louis"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsxs)(n.p,{children:["If the query is carried out correctly, the OK system variable is set to 1.",(0,s.jsx)(n.br,{}),"\nThe OK variable is set to 0 if:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the user clicks on the ",(0,s.jsx)(n.strong,{children:"Cancel"}),"/",(0,s.jsx)(n.strong,{children:"Stop"})," button,"]}),"\n",(0,s.jsxs)(n.li,{children:["in 'query and lock' mode (see the ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/set-query-and-lock",children:"SET QUERY AND LOCK"})," command), the query has found at least one locked record. In this case as well, the LockedSet system set is updated."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Structure of 4D language objects"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1331"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Changes current record"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Changes current selection"}),(0,s.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},690410:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/pict2994114.en-68a05af42526ae8a3e86ce9c6c663112.png"},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var t=r(667294);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);