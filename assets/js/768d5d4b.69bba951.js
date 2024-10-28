"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32697],{58495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var r=t(474848),s=t(28453);const d={id:"decrypt-blob",title:"DECRYPT BLOB",slug:"/commands/decrypt-blob",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/decrypt-blob",title:"DECRYPT BLOB",description:"DECRYPT BLOB ( toDecrypt ; sendPubKey {; recipPrivKey} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/decrypt-blob.md",sourceDirName:"commands-legacy",slug:"/commands/decrypt-blob",permalink:"/docs/commands/decrypt-blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdecrypt-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"decrypt-blob",title:"DECRYPT BLOB",slug:"/commands/decrypt-blob",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"COPY BLOB",permalink:"/docs/commands/copy-blob"},next:{title:"DELETE FROM BLOB",permalink:"/docs/commands/delete-from-blob"}},o={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DECRYPT BLOB"})," ( ",(0,r.jsx)(n.em,{children:"toDecrypt"})," ; ",(0,r.jsx)(n.em,{children:"sendPubKey"})," {; ",(0,r.jsx)(n.em,{children:"recipPrivKey"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"toDecrypt"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2194"}),(0,r.jsx)(n.td,{children:"Data to decrypt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Decrypted data"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sendPubKey"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Sender\u2019s public key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"recipPrivKey"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Recipient\u2019s private key"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The DECRYPT BLOB command decrypts the content of the BLOB ",(0,r.jsx)(n.em,{children:"toDecrypt"})," using the sender\u2019s public key ",(0,r.jsx)(n.em,{children:"sendPubKey"})," and, optionally, the recipient\u2019s private key ",(0,r.jsx)(n.em,{children:"recipPrivKey"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The BLOB containing the sender\u2019s public key is passed in the ",(0,r.jsx)(n.em,{children:"sendPubKey"})," parameter. This key has been generated by the sender using the ",(0,r.jsx)(n.a,{href:"/docs/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})," command and it has to be sent to the recipient."]}),"\n",(0,r.jsxs)(n.p,{children:["The BLOB containing the recipient\u2019s private key can be passed in the optional parameter ",(0,r.jsx)(n.em,{children:"recipPrivKey"}),". In this case, the recipient has to generate a pair of encryption keys with the ",(0,r.jsx)(n.a,{href:"/docs/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})," command and has to send his/her public key to the sender. The keypair-based encryption system guarantees that the message has been encrypted by the sender only and it can be decrypted by the recipient only. For more information about the keypair-based encryption system, refer to the routine ",(0,r.jsx)(n.a,{href:"/docs/commands/encrypt-blob",children:"ENCRYPT BLOB"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The command DECRYPT BLOB offers a checksum functionality in order to avoid any BLOB content modification (deliberate or not). If the encrypted BLOB is damaged or modified, the command will do nothing and an error will be returned."}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Refer to the examples given for the ",(0,r.jsx)(n.a,{href:"/docs/commands/encrypt-blob",children:"ENCRYPT BLOB"})," command."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/encrypt-blob",children:"ENCRYPT BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(296540);const s={},d=r.createContext(s);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);