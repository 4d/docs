"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63156"],{630246:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/generate-certificate-request","title":"GENERATE CERTIFICATE REQUEST","description":"GENERATE CERTIFICATE REQUEST ( privKey ; certifRequest ; codeArray ; nameArray )","source":"@site/versioned_docs/version-20-R7/commands-legacy/generate-certificate-request.md","sourceDirName":"commands-legacy","slug":"/commands/generate-certificate-request","permalink":"/docs/20-R7/commands/generate-certificate-request","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-certificate-request.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"generate-certificate-request","title":"GENERATE CERTIFICATE REQUEST","slug":"/commands/generate-certificate-request","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Secured Protocol","permalink":"/docs/20-R7/category/secured-protocol"},"next":{"title":"GENERATE ENCRYPTION KEYPAIR","permalink":"/docs/20-R7/commands/generate-encryption-keypair"}}'),i=t("785893"),s=t("250065");let c={id:"generate-certificate-request",title:"GENERATE CERTIFICATE REQUEST",slug:"/commands/generate-certificate-request",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GENERATE CERTIFICATE REQUEST"})," ( ",(0,i.jsx)(n.em,{children:"privKey"})," ; ",(0,i.jsx)(n.em,{children:"certifRequest"})," ; ",(0,i.jsx)(n.em,{children:"codeArray"})," ; ",(0,i.jsx)(n.em,{children:"nameArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"privKey"}),(0,i.jsx)(n.td,{children:"Blob"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"BLOB containing the private key"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"certifRequest"}),(0,i.jsx)(n.td,{children:"Blob"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"BLOB receiving the certificate request"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"codeArray"}),(0,i.jsx)(n.td,{children:"Array integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Information code list"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nameArray"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Name list"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"GENERATE CERTIFICATE REQUEST"})," command generates a certificate request at the PKCS format which can be directly used by certificate authorities such as Verisign(R) . The certificate plays an important part in the SSL secured protocol. It is sent to each browser connecting in SSL mode. It contains the \u201CID card\u201D of the Web site (made from the information entered in the command), as well as its public key allowing the browsers to decrypt the received information. Furthermore, the certificate contains various information added by the certificate authority which guarantees its integrity."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," For more information on the SSL protocol use with 4D Web server, refer to the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["The certificate request uses keypairs generated with the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})," command and contains various information. The certificate authority will generate its certificate combining this request with other parameters."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass in ",(0,i.jsx)(n.em,{children:"privKey"})," a BLOB containing the private key generated with the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass in ",(0,i.jsx)(n.em,{children:"certifRequest"})," an empty BLOB. Once the command has been executed, it contains the certificate request at the PKCS format encoded in base64. You can store the contents directly in a text file suffixed .pem, for example using the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-document",children:"BLOB TO DOCUMENT"})," command, to submit it to the certificate authority."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Warning:"})," The private key is used to generate the request but should NOT be sent to the certificate authority."]}),"\n",(0,i.jsxs)(n.p,{children:["The arrays ",(0,i.jsx)(n.em,{children:"codeArray"})," (long integer) and ",(0,i.jsx)(n.em,{children:"nameArray"})," (string) should be filled respectively with the code numbers and the information content required by the certificate authority."]}),"\n",(0,i.jsx)(n.p,{children:"The required codes and names may change according to the certificate authority and the certificate use. However, within a normal use of the certificate (Web server connections via SSL), the arrays should contain the following items:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Information to provide"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"codeArray"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"nameArray (Examples)"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CommonName"}),(0,i.jsx)(n.td,{children:"13"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"http://www.4D.com",children:"www.4D.com"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CountryName (two letters)"}),(0,i.jsx)(n.td,{children:"14"}),(0,i.jsx)(n.td,{children:"US"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LocalityName"}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsx)(n.td,{children:"San Jose"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"StateOrProvinceName"}),(0,i.jsx)(n.td,{children:"16"}),(0,i.jsx)(n.td,{children:"California"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OrganizationName"}),(0,i.jsx)(n.td,{children:"17"}),(0,i.jsx)(n.td,{children:"4D, Inc."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OrganizationUnit"}),(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"Web Administrator"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The code and information content entering order does not matter, however the two arrays must be synchronized: if the third item of the ",(0,i.jsx)(n.em,{children:"codeArray"})," contains the value ",(0,i.jsx)(n.em,{children:"15"})," (locality name), the ",(0,i.jsx)(n.em,{children:"nameArray"})," third item should contain this information, in our example San Jose."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["A \u201CCertificate request\u201D form contains the six fields necessary for a standard certificate request. The ",(0,i.jsx)(n.strong,{children:"Generate"})," button creates a document on disk containing the certificate request. The \u201CPrivatekey.txt\u201D document containing the private key (generated with the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})," command) should be on the disk:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(104630).Z+"",width:"423",height:"312"})}),"\n",(0,i.jsxs)(n.p,{children:["Here is the ",(0,i.jsx)(n.strong,{children:"Generate"})," button method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// bGenerate Object Method\n\xa0\n\xa0var $vbprivateKey;$vbcertifRequest : Blob\n\xa0var $tableNum : Integer\n\xa0ARRAY LONGINT($tLCodes;6)\n\xa0ARRAY STRING(80;$tSInfos;6)\n\xa0\n\xa0$tableNum:=Table(Current form table)\n\xa0For($i;1;6)\n\xa0\xa0\xa0\xa0$tSInfos{$i}:=Field($tableNum;$i)->\n\xa0\xa0\xa0\xa0$tLCodes{$i}:=$i+12\n\xa0End for\n\xa0If(Find in array($tSInfos;"")#-1)\n\xa0\xa0\xa0\xa0ALERT("All fields should be filled.")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Select your private key.")\n\xa0\xa0\xa0\xa0$vhDocRef:=Open document("")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbprivateKey)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GENERATE CERTIFICATE REQUEST($vbPrivateKey;$vbcertifRequest;$tLCodes;$tSInfos)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT("Request.txt";$vbcertifRequest)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Invalid private key.")\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/http-set-certificates-folder",children:"HTTP SET CERTIFICATES FOLDER"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"691"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},104630:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var r=t(667294);let i={},s=r.createContext(i);function c(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);