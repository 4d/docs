"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8419"],{964969:function(e,n,t){t.r(n),t.d(n,{metadata:()=>A,contentTitle:()=>s,default:()=>m,assets:()=>i,toc:()=>a,frontMatter:()=>l});var A=JSON.parse('{"id":"commands-legacy/dom-get-xml-attribute-by-name","title":"DOM GET XML ATTRIBUTE BY NAME","description":"DOM GET XML ATTRIBUTE BY NAME ( elementRef ; attribName ; attribValue )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-get-xml-attribute-by-name.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-attribute-by-name","permalink":"/docs/ja/commands/dom-get-xml-attribute-by-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-attribute-by-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-get-xml-attribute-by-name","title":"DOM GET XML ATTRIBUTE BY NAME","slug":"/commands/dom-get-xml-attribute-by-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM GET XML ATTRIBUTE BY INDEX","permalink":"/docs/ja/commands/dom-get-xml-attribute-by-index"},"next":{"title":"DOM GET XML CHILD NODES","permalink":"/docs/ja/commands/dom-get-xml-child-nodes"}}'),d=t("785893"),r=t("250065");let l={id:"dom-get-xml-attribute-by-name",title:"DOM GET XML ATTRIBUTE BY NAME",slug:"/commands/dom-get-xml-attribute-by-name",displayed_sidebar:"docs"},s=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DOM GET XML ATTRIBUTE BY NAME"})," ( ",(0,d.jsx)(n.em,{children:"elementRef"})," ; ",(0,d.jsx)(n.em,{children:"attribName"})," ; ",(0,d.jsx)(n.em,{children:"attribValue"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"elementRef"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"XML\u8981\u7D20\u53C2\u7167"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"attribName"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u5C5E\u6027\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"attribValue"}),(0,d.jsx)(n.td,{children:"Variable"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u5C5E\u6027\u5024"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["DOM GET XML ATTRIBUTE BY NAME \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u5C5E\u6027\u540D\u306B\u5BFE\u5FDC\u3059\u308B\u5C5E\u6027\u5024\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002\u306B\u8981\u7D20\u53C2\u7167\u3092\u3001",(0,d.jsx)(n.em,{children:"attribName"}),"\u306B\u306F\u5C5E\u6027\u5024\u3092\u53D6\u5F97\u3057\u305F\u3044\u5C5E\u6027\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002\u5024\u306F",(0,d.jsx)(n.em,{children:"attribValue"})," \u5F15\u6570\u306B\u8FD4\u3055\u308C\u307E\u3059\u30024D\u306F\u53D6\u5F97\u3057\u305F\u5024\u3092\u6E21\u3057\u305F\u5909\u6570\u3068\u540C\u3058\u578B\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\u5909\u6570\u306E\u578B\u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u5024\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30C6\u30AD\u30B9\u30C8\u578B\u3067\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"attribName"})," \u5C5E\u6027\u304CXML\u8981\u7D20\u4E2D\u306B\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u8907\u6570\u306E\u540C\u3058\u540D\u524D\u3092\u6301\u3064\u5C5E\u6027\u304CXML\u8981\u7D20\u4E2D\u306B\u5B58\u5728\u3059\u308B\u5834\u5408\u3001\u6700\u521D\u306E\u5C5E\u6027\u306E\u307F\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u540D\u524D\u3092\u6307\u5B9A\u3057\u3066XML\u5C5E\u6027\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var myBlobVar : Blob\n\xa0var $xml_Parent_Ref;$xml_Child_Ref : Text\n\xa0var $LineNum : Integer\n\xa0\n\xa0$xml_Parent_Ref:=DOM Parse XML variable(myBlobVar)\n\xa0$xml_Child_Ref:=DOM Get first child XML element($xml_Parent_Ref)\n\xa0DOM GET XML ATTRIBUTE BY NAME($xml_Child_Ref;"N";$LineNum)\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4EE5\u4E0B\u306E\u4F8B\u984C\u306B\u9069\u7528\u3059\u308B\u3068\u3001$LineNum\u306B\u306F1\u304C\u8FD4\u3055\u308C\u307E\u3059:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(795079).Z+"",width:"510",height:"138"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u30680\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/dom-get-xml-attribute-by-index",children:"DOM GET XML ATTRIBUTE BY INDEX"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/dom-remove-xml-attribute",children:"DOM REMOVE XML ATTRIBUTE"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"728"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"OK\u3001error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},795079:function(e,n,t){t.d(n,{Z:function(){return A}});let A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAACKCAIAAADEyb8RAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuMS4yIChNYWMgT1MgWCkA+zM6JAAAAAd0SU1FB9kIDgctJ6klIrQAAAzcSURBVHic7Z0LkqwsEkatidnpv65Za0/PGG1RPJIkeYiV58SNG9UKSYLyiajk6+fn5wAAAE/8624HAABgNUg/AIA7kH4AAHcg/QAA7kD6AQDcsa/0v17PLuu0OcryWGsA4Jx/D7d4ydOD3hpd6epv+8jFhfqud+yJzQ4AdzFY+kNdq2qcNzRj9qjRlG1IswNAEwMmfH61Rh5yhpJ3/b5mMMItSnEUjF//ogRpQdEWvRHzrMtv40wS5VKzM0EEAFm6Rv2nspR0pypzV5rQjnnQKoyX9YPiViNZbT13hf/3o7QWOpm2LQDAiVH6ZUGJBPT397kl3Z79LRPaUV4nhghf1shWkpptDS4AAJBikX7DwDzV/Rlo5jdOT67fTui8owKAL8Mi/Zd6lnQk3Z4d9Q9HaXzgE1Fhwmc98kSWnAAAXGGc8JGnEUoz5qPUv3rtSX2YxJAiRrmatYPoA0BK12PereaRw5mcQ3wOIaRRGrERvVBUengwyoFNjgsAbMiL9foBALyx70IOAAAwCaQfAMAdSD8AgDuQfgAAdyD9AADuQPoBANyB9AMAuGP8e/3/+Vzc4J8/+//JLXrwz2fpv2nSLVGyK43NIAAADA7VktXuc0t4DRgix6mR7MUAAAAiBodqSdGr/HlJSOU7u7GUvWqQACYAALNCtSxGfyex1bpDAAC3MDhUSzrKVipyOC+U6nh2Y5pXb5ALAAB45lP606mQnC7KiwxPetBaUv8e+wQwAQCffEq/es5kxnjZ8JBW1v2qQUb9AOCTwaFabGNw4b2gkGg2qWkKKNqC6AOAZwaHajHP9dvIvg4kZ0H0AQAI1QIA4A4WcgAAcAfSDwDgDqQfAMAdSD8AgDuQfgAAdyD9AADuQPpjzhf/NV8W61PW7PyPXiu3lri+Cj2UvBVqsUmLPaudBb6iEs9m8Hr9Skqr8Zw/wkgsyiAt2S+5BAsGzi5n+wwi7K5f8CFFT1PAPtx+HNfoAGS5R/qzyMtzpoln+3PRP8767V23dzOATaiu/7inDnwZ6yZ8DDFSlEFaplo4/q/XGsnuDwLz+iO7Ub/r+jPcXjJS8kGYFYlKMVdB82cpV7XWgg9C9YVaNNWo1YeSQaXn+nJfweGL8jZ5omnGY1BkpNZeTDgmDStG/Rsum5M9M04Pw/9lopSdMQB++9J5gTn71fX7CO4Vwl3H5z1EtOsI+nbWTrlSks1DvIMxVEFojWwRVQ+VPshFpxYE3/p9EAz2e14ynj2Oek+qlDrCgjXSicahYa7097e+sEx/lKzJwrwTwnzaGeaCZCHofyzRyvDpLEF55/mwg4Vty9Vdtk9nRpZr0AEuADITpX/U5b0Ut6vTwlTGBoHJil3TeLCpoLE2bVxj0qxLO3g4vOgb6xKR9aR0RJK80jnf0yNsOjC2J34TE6X/Z05ElyEIEz4D7Y8y6PPhcDjPoBlsLma4P/tUsOSJ5ojs1uu3cmYr5k74jLrnGv68d96pMPVUa51vFYzsRsmra7A5u6BOg00HpTplnzW4/sBlPYmOyPU7eAR1bn///kvZ2y+adADRl1nxmDd7KqSTdOcW5czMyoAwwhO5z2THUTjVLguto9ezm70+Llo/pV1KO4KYKm1G1oZUoSQoQhY9yuqnRZeeM5dqZPPB1kRK9MblxKUjkv3zUA/7ZugAoq9hu/toAHgQyhEAs+27wUIOAGBkyAwk3ALSDwDT4eqwG0z4AAC4g1E/AIA7kH4AAHcg/QAA7kD6Y86XgjXvT+tTtpRefGk93GV4t92QBSbReSj1xq0WRvkC+0Koljryxyx6C/JCNDxvF2j9fkppkDYXII7Kd0OolgqpTLd+kTuKzkIfLXNfHOtmtxrJ317t2UnBAKFahmGooGjtFd25V+eC0ixpmui3nCW1XLIgu6H5s+qJjFx06rzZk6aKa2wKrao3ZWvAIWcscVQeCqFa3pwehv8f4qAsSfm2HGW6lkapxv24NsrRQgQLmizKUlLL2QQ9bpidF4yEZOO6tEYpKZVYzWhuE33Elewu2f5R7pILllsYtaQjdEKolgYEiYksdy7ltmYS4LkxSbIIV6/h2CquzDW1VWdoLnFUngihWrRodP/iOrOzycPB2igmadwQwpue0l1Ov/2jMP5tHA7bZ5xsGVeWInfJng5LHJXHQaiWN2KvaHvGmFY8u9pwq1mBrQbgrYy6/7guAGaD6zOuLGW3LrmVM94gVEudJoGuVjZaLb3BDx0DLyepWTPKJf47nR/YpGZPhIwDD03JVHZscXycdef29++/lL0STByVZ0Golgrh1Py1sTVUy1RskUNaLVdVtT+AiZBLfkASOaaJ69IUpcRchYGHpiecC3FUIIWVO0HLpPsJmIfykDHb7hAWcgD4TrhUg8BGX/PChpTmUuCb4Kg6hAkfAAB3MOEDAOAOpB8AwB1IPwCAO5D+mPO5pubbFH3KgZReVAczPU161+F4+mmw0v+1Za0pZwCEaqnT/5aL+aOeUe/n7fae327+QCfyAd32cE9y7BFRbjZ6uXPPKBDpEmCGJWK+ONIIAJzIX8btpm+EahlGUwWvm9DXH9k0UeLUQrpmS4jGjpyx+ruUt8efUuPoi2jalW0QffUNvpUqqGyHUspR7dPqdrVl5L2GdhP+LFVW77Zs5C/NgLmde6PcEKrlzelh+P8hjtOTlG/Lysq+xGApwr1CKaM+MklkTa6pXIWjcFdU2qW8B4rqeKXXFNG6y1BxwVVlnBb56OuTyQVlT4k0V0gpS8kf+YC2nsbVdstSPaZKt6tnZqmDL1gMw6AwAoRq0XKdTPJZ2HR4hi8R3KNimg62kvRCeJcnVWy+6ZeHMxi/kE8J4VoyyZ9JpsaWVWiW085Ap+6MckOoFi2aAVqQ+DiWDARCzIPZn0Kok9DyVX15Zc2mXU+hWn057xynVAUJp0TpoA+/JXoW5WaR+nJPT78ryg2hWt5k/bRNhmxb8RLhvfYlcOlCwUehQcRpsee0wif66stGxns2qKDsQYdCX9irU2896j/G3ZvcG6qlia3Oj1Z+CovyhxPH1QmEoyBDtovobDSjWn31qwUtqL7h4vTEof3sG820WUpq1n9zf0uUG0K1VEiHfuV59nNvdtf7XYKmzv+TRBRpclVpJznFjR5G2ZW7etRwSOmThE9/5shULTQ1QtasMouAfEA7T2PNgbMd09Sxal9QDmf3j3LDXR7Apux5n/QIFt5jPfUWn4UcAADcsdHXvAAAZnrmLc08dMh/MOEDAOAQJnwAANyB9AMAuAPpBwBwB9Ifcz4r0rwWrE/Z7kPzi9VT0fuz0vPdWilk/3bo93DXtgcVhGppwPyycNrHvuPp+rYvntsc6zy+G7bDAh4RlgRSNnq5c7dQBhH9gzj9OrQ+RQRs3HK2yJ8ybd6X4SBUixLNAgyGCl7GX39rRUU/0o3RFeiVIBSRphHyamxGHmaz692Q/xT8ibaXHKsaMeQa2w5pmmzthOYq5UrLzRZa8GTA3M69YUkghVAtb04Pw///Eud1P0rZuVad3BtfuqAWguXS8i9hsibL2UgXTd6WGlZwPqutUVlZx4RGEKqj8XlqO0QWroxNuZrOlk87ZwUz22d351ErP0IJQrVU0MhTajlbcbmzyaX039RnK9I0+tOzcgqiqazWo9lJf1n6xbHHljtDc28MSwIphGqpk941H3WlPlN+tEBpiD2ba1iaHfc1DQOfS6kR7mLn1pZ7bk+/vissCaQQquVN1s+mSYPI/j4VD2/5F49892GrRtj5EOzWc7dy5msgVMtg7jpNNaNI29r0i8enQnFDPNktMsktdyHZRyahG6We2z/0viUsCaQQqmUY1dM06m9DJoLDp3/yY960XH1ol5LlbwrBkc2lDLcyqh2mYmhJ5dBt/7AkkOL03v8r2WQWeyoe6rgtzLZ/EyzkAADgDkb9z2b4JNKGeKgjwGKQfgAAdzDhAwDgDqQfAMAdSD8AgDsmSv9O380AAMCbFZ90lT6/yn7UF30Dkn4V0hT2QWMQAMAbs6T/+vojq93nlvAaMESOq4sCAgDAMWTCpzWogl7lz0tCNoSbRtNLV50oL0EhAMAbXaP+GyM5VNHfSbAmOAB4wyj9eqFMR9lKRQ7nhbJrfAviXooIIRjkAgAAfrBIf2skh0kPWoWgP2b7BIUAAA9YpH9ZJAfDQ1pZ96sGGfUDgAeMEz76SA62MbjwXlBINJvUNAUUbUH0AcAPXY95NfPj5rl+G9nXgeQsiD4AeGPkyp1MkQMAPALW8AEAcAfr9QMAuINRPwCAO5B+AAB3IP0AAO5A+gEA3IH0AwC4A+kHAHAH0g8A4A6kHwDAHUg/AIA7kH4AAHcg/QAA7kD6AQDcgfQDALgD6QcAcAfSDwDgDqQfAMAdSD8AgDv+C3d53Xwo+J1FAAAAAElFTkSuQmCC"},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var A=t(667294);let d={},r=A.createContext(d);function l(e){let n=A.useContext(r);return A.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),A.createElement(r.Provider,{value:n},e.children)}}}]);