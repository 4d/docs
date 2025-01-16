"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85154"],{67226:function(e,A,n){n.r(A),n.d(A,{default:()=>o,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands/formula-from-string","title":"Formula from string","description":"History","source":"@site/versioned_docs/version-20-R7/commands/formula-from-string.md","sourceDirName":"commands","slug":"/commands/formula-from-string","permalink":"/docs/20-R7/commands/formula-from-string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fformula-from-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"formula-from-string","title":"Formula from string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Formula","permalink":"/docs/20-R7/commands/formula"},"next":{"title":"GET ALLOWED METHODS","permalink":"/docs/20-R7/commands/get-allowed-methods"}}'),r=n("785893"),i=n("250065");let s={id:"formula-from-string",title:"Formula from string",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let A={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(A.details,{children:[(0,r.jsx)(A.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(A.table,{children:[(0,r.jsx)(A.thead,{children:(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.th,{children:"Release"}),(0,r.jsx)(A.th,{children:"Changes"})]})}),(0,r.jsxs)(A.tbody,{children:[(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"20 R3"}),(0,r.jsxs)(A.td,{children:["Support of ",(0,r.jsx)(A.em,{children:"context"})," parameter"]})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"17 R6"}),(0,r.jsx)(A.td,{children:"Renamed New formula from string -> Formula from string"})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"17 R3"}),(0,r.jsx)(A.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(A.p,{children:[(0,r.jsx)(A.strong,{children:"Formula from string"}),"( ",(0,r.jsx)(A.em,{children:"formulaString"})," : Text ) : 4D.Function",(0,r.jsx)(A.br,{}),(0,r.jsx)(A.strong,{children:"Formula from string"}),"( ",(0,r.jsx)(A.em,{children:"formulaString"})," : Text ; ",(0,r.jsx)(A.em,{children:"context"})," : Longint ) : 4D.Function"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(A.table,{children:[(0,r.jsx)(A.thead,{children:(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.th,{children:"Parameter"}),(0,r.jsx)(A.th,{children:"Type"}),(0,r.jsx)(A.th,{style:{textAlign:"center"}}),(0,r.jsx)(A.th,{children:"Description"})]})}),(0,r.jsxs)(A.tbody,{children:[(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"formulaString"}),(0,r.jsx)(A.td,{children:"Text"}),(0,r.jsx)(A.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(A.td,{children:"Text formula to be returned as object"})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"context"}),(0,r.jsx)(A.td,{children:"Number"}),(0,r.jsx)(A.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsxs)(A.td,{children:[(0,r.jsx)(A.code,{children:"sk execute in current database"})," (default) or ",(0,r.jsx)(A.code,{children:"sk execute in host database"})]})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"Result"}),(0,r.jsx)(A.td,{children:"4D.Function"}),(0,r.jsx)(A.td,{style:{textAlign:"center"},children:"\u2190"}),(0,r.jsx)(A.td,{children:"Native object encapsulating the formula"})]})]})]}),"\n",(0,r.jsx)(A.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(A.p,{children:["The ",(0,r.jsx)(A.code,{children:"Formula from string"})," command creates a ",(0,r.jsx)(A.code,{children:"4D.Function"})," object based upon the ",(0,r.jsx)(A.em,{children:"formulaString"})," and, optionnally, a ",(0,r.jsx)(A.em,{children:"context"}),".  ",(0,r.jsx)(A.em,{children:"formulaString"})," can be as simple as a single value or complex, such as a project method with parameters."]}),"\n",(0,r.jsxs)(A.p,{children:["This command is similar to ",(0,r.jsx)(A.a,{href:"/docs/20-R7/commands/formula",children:(0,r.jsx)(A.code,{children:"Formula"})}),", except that it handles a text-based formula and allows to define an execution context. It is usually recommended to use the ",(0,r.jsx)(A.code,{children:"Formula"})," command, except if the original formula was expressed as text (e.g., stored externally in a JSON file), or if you want to create a formula in a host database while calling ",(0,r.jsx)(A.code,{children:"Formula from string"})," from a component. Using syntax with tokens is highly advised with this command."]}),"\n",(0,r.jsxs)(A.blockquote,{children:["\n",(0,r.jsxs)(A.p,{children:["Because local variable contents can not be accessed by name in compiled mode, they can not be used in ",(0,r.jsx)(A.em,{children:"formulaString"}),". An attempt to access a local variable with ",(0,r.jsx)(A.code,{children:"Formula from string"})," will result in an error (-10737)."]}),"\n"]}),"\n",(0,r.jsxs)(A.p,{children:["If the formula is created in a component, you might consider using the ",(0,r.jsx)(A.em,{children:"context"})," parameter. By default, since formulas are executed in the context in which they were created, it will not be able to call a variable, function, or a non-shared method of the host database. In this case, you can pass the ",(0,r.jsx)(A.code,{children:"sk execute in host database"})," constant in the ",(0,r.jsx)(A.em,{children:"context"})," parameter to execute the ",(0,r.jsx)(A.code,{children:"4D.Function"})," object in the context of the host database. The following constants are available:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(A.table,{children:[(0,r.jsx)(A.thead,{children:(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.th,{children:"Constant"}),(0,r.jsx)(A.th,{children:"Type"}),(0,r.jsx)(A.th,{children:"Description"})]})}),(0,r.jsxs)(A.tbody,{children:[(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:(0,r.jsx)(A.code,{children:"sk execute in current database"})}),(0,r.jsx)(A.td,{children:"Integer"}),(0,r.jsx)(A.td,{children:"(default) The formula will be executed in the context it was created"})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:(0,r.jsx)(A.code,{children:"sk execute in host database"})}),(0,r.jsx)(A.td,{children:"Integer"}),(0,r.jsx)(A.td,{children:"The formula will be executed in the host database context"})]})]})]}),"\n",(0,r.jsx)(A.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(A.p,{children:"The following code will create a dialog accepting a formula in text format:"}),"\n",(0,r.jsx)(A.pre,{children:(0,r.jsx)(A.code,{className:"language-4d",children:' var $textFormula : Text\n var $f : 4D.Function\n $textFormula:=Request("Please type a formula")\n If(ok=1)\n    $f:=Formula from string($textFormula)\n    ALERT("Result = "+String($f.call()))\n End if\n'})}),"\n",(0,r.jsx)(A.p,{children:(0,r.jsx)(A.img,{src:n(809527).Z+"",width:"438",height:"217"})}),"\n",(0,r.jsx)(A.p,{children:"...and execute the formula:"}),"\n",(0,r.jsx)(A.p,{children:(0,r.jsx)(A.img,{src:n(236092).Z+"",width:"532",height:"304"})}),"\n",(0,r.jsx)(A.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(A.p,{children:[(0,r.jsx)(A.a,{href:"/docs/20-R7/commands/formula",children:"Formula"}),(0,r.jsx)(A.br,{}),"\n",(0,r.jsx)(A.a,{href:"/docs/20-R7/commands/parse-formula",children:"Parse formula"})]}),"\n",(0,r.jsx)(A.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(A.table,{children:[(0,r.jsx)(A.thead,{children:(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.th,{}),(0,r.jsx)(A.th,{})]})}),(0,r.jsxs)(A.tbody,{children:[(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"Command number"}),(0,r.jsx)(A.td,{children:"1601"})]}),(0,r.jsxs)(A.tr,{children:[(0,r.jsx)(A.td,{children:"Thread safe"}),(0,r.jsx)(A.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:A}={...(0,i.a)(),...e.components};return A?(0,r.jsx)(A,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},236092:function(e,A,n){n.d(A,{Z:function(){return t}});let t="data:image/png;base64,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"},809527:function(e,A,n){n.d(A,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbYAAADZCAIAAADDvoIcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABQ+SURBVHhe7d15cBzVncDxJlyDi3BtyCZkiyKBTW1qD6qWhbBmlyP7T5LdpGorlY3shC1gicGYLMcCwXEcGRtfHLbkA0s+iIVvy7ItyZbkAx0+JGOwDFhYxgbbEpZ1WB75QLZlLGn7eNPT/aafNJJm1DOa76d+VRn1vOnpaaq/aUnGaN0AAAUSCQBKJBIAlEgkACiRSABQIpEAoEQiAUDJO5Hpv1nLMAyTIiPC50WZSPEIAIY0EgkASiQSAJRIJAAokUgAUCKRAKBEIgFAiUQCgBKJBAAlEgkASjFPZNEoLWxUkdgKAMkoHokcnnEo9HAwIul4RwCIqXgmcpDiRSIBxEuc7yLtdh3KGC598x3aMjwjI7ROkVf5tc6v9WUhfFcPINbikciQcLMcvSsaZT4yljmC10MiI16rb3DV0PkqAIiluN1FGuULlSx822fSN+tbwlnzqqFrPw7Wa0NNNZFIAPESt0SacQs/ct/49TGR7teazE5aT5BIAPESx0S62ydlzNhilc+MnfWkI4fhV0S+Vghl1n4XAIixuCbSbJ71lXXXZ7EqaKTP4Ph1TXijNmpUeKP0WnuNM6fhrwAgZmKeyH5wVRUAEgeJBAAlEgkASomQSABIUCQSAJRIJAAokUgAUCKRAKBEIgFAiUQCgBKJBAClfibyFACkABIJAEokEgCUSCQAKJFIAFAikQCgRCIBQIlEAoASiQQAJRIJAEokEgCUSCQAKJFIAFAikQCgRCIBQIlEAoASiQQAJRIJAEokEgCUSCQAKCVrIoOnTm1vanjzcO2j+/fct3fbrbu3BHZu1HZusGdYZfFtu7fe/+H2x2v3ZB45UNV8vE28FACilWSJbG4LLqn/7Jf73rupqkTbUdin+eauTSNrdq/64vCJNj2wANC7pEnkRy1NY2qrb6ws1rYXDnC+WbXp+QMf1p5oEbsGAIUkSKQexxH73rtCr9u2ghjOVds3PFbz/oFWQglAKaET2RgMPl+79+ptG7SKgjjNsG0b/3jg4xa+9QbgJXETWXKs/ntVW7TygkGYH+zauq3xmHjjOMsdm62NrRFfpKaaynvuytbuyn6kSGwYTJx/9EkiJjLY1jau9qPLywq00vxBm6vKC6cdjNmVU521Uk9AeH5VWS2e4RKtecSnOFpIJPok4RLZ2Bb8jz07tHfzfZkRe3e1BGPwTbeRyHAW66b+Sg9lca75hS+XqPt4fGXcQq6c6l+jSCT6JLESefRk691VpdrW9T7OQ7u3HR/wjyblJJnfWlq3TiSSRCKJJFAi9T7+w44t2uZ1vs8/V5UeH9i9ZESSwt9dSpeosVJ8P+4IR+indeaI20+Dc7tj/947Eax72PCrpkY0InS0xsp7suoce3O8dS/vYlIddohjD+EFro3SmdGPqqjYXmyduvB6c7Hj5fY7Gh/E+b28sSa0Z9f57+2AgURJZGMweE9lqbZpXYLMj3ZVDOQ7bnF5i6+sS1FkxXmJGo/tZUYL7GoU2w1yrHf9FC83S7xQtRMn1/HIa+zdipjqlbSecO45unfxPGw3x6nQGcvCuzIPIPQq0T7HTszF9uEZh+340vnaaBMZ1QEjtSVEIttOnfrZe9u14rUJNQ/vqRLH13fuRJoXc+Ql6o5F5IUt2D2S15ui24n7eIw1dgeN/YunnJUx2TuP8lCdFBl17cp47N6P41kzka49GKcu/CmsYoYXOD6jfHiqRLqoDhipLSES+cd9e7WNeQk4Mw58Ig6xj8zL27jHsSbcI+clalyT4TXW2CvdexCXrhkFVyZ63onNkQ+D80t9n84bMfdrQzeY0b2LzvOwXZyJ9KhS+E5ZOmadVDd5gb438WUfEtn7ASO1+Z/ITfVHr9i4Vitck4ATKFpX2dCfPy8ZeXnb3In0vCbNu0775RHLRCh72YlLxPHob2F1yn6g6zmRvb5LL4ctJFAioztgpDafE9kUDN6+pUgryE3YubN0U2tbn/+SoKgSGfltpsV9rRq7irx07dCoduLmmRujhvp7haNjlMXZoL69SzSHrbP3KR67d+t41vOYnYcnL3An0tl65wvDj6M8YKQ2nxP5wt4PtPWrBz5/V7rp2yWF0sZYzZSaj8XhRi3y8rbJl2v4sqybOtZ8iTMc5mOxpqbyEfuyNy5vkRLvnUjcOTAYQSl+xHW3ZSYy3CxXMXt/F9VhSxwR1Mm7dbzjABLp7p3x2d0fxHoc5QEjtfmZyH1NTYH8NdraVQOch9/f1dnVdb7zUu2ZM1+ca2/tuHDq4sU2YzpOXLhQf679kzOnK060LP+ibtKBT375XuV3igukPfQ81xXkfd7HvxYoykTqzEaIsW98zCvc3KjvxK6buIytCVdG57kTN5E/x1GZW1wHaWy5J6tGrNTHcZy6Xt/F+7Al7kTqwq9y7zbyHEqnTl7gSGT48+pj/TmhyERGecBIbX4m8teV27U1qwY4/1L+7oXOTnFkUdt3+tS4mo+/tSFf2ptqnt69Sxz00GEF0Vm6yC1AqvMtkfuaGq/MW63lrhzIfHdjYcuFC9ZR6TeMP9lWftvGguvXrRm2Nvem9Xl3FG34UXnp09UfLK872hpa5nT+0qUZBw9cvy5P2m3kDMtbfXiI/f2Sxt2cdNNEIgGZb4n83XtV2qoVA5nr8nL3nToljqm7u6ylWVrgnCtWr/z59ory5max2qG+vX341s3S+sj5U/UecehDgWcNSSQg8yeRLcHgX+TlaiuW93suX7m8sKFBHJCprLlZWuM5/15eXtfeLl4TcqHz0s+2VUgrpbktf/3Q+K/fiB/AuX/OaCKRgMyfRK44eFBbtmwg88b+/eJoQoxERizznBtzV5ccd+VVd6Gz81+3bJZWSlNy5Ij4AABSgz+JTCsr05Ys7fc8VlklDsWhrKlJWtbDXLlsWW5dnXhlSOO5czevzpVWOmf0jp3iAwBIDT4kMtjW9o2Vq7ScJf2b+0s2dZi/wv4wGLSOx2IkMmJxDxNYuuz9E63ixSGLP/tcWuacO/Ji8ENYAEnEh0RW1tdrf36nf/O9NWtPnDd+N5175OivK7Zbx2Mpa2ySFvc6f7N2vfQHhjq7uv52Xb60zDE5tU1N4mMASAE+JDJz74faopx+zHVLlte0tekHsPvEiWE5S0eUbbOOx2IkMuIlvU5mjfwzzewDn0prnLNkf634GABSgA+JfLy0Qlvw577O5YtyNtZ/ob973dkvv71spb5lRGm5dTyWsuONzvVRzq0rVl/q6hK7MLV1dFyp1zBipTUv7ez/35AGIOn4kMgH1hdq2W/3dWZ8XKO/9emOi3+fu87aMmJrRCLdL4lythyTf7t9X/5GaY09/1m8WXwMACnAh0TevnS1Nm9Rn+bx8h36+37V1fXjDZvsjWlbyqzjsZQ1NNpP9Wme27lL7CLk2Z27pDX2/FPuevExAKQAHxL59fk52tyF0c8D6zZav8IeXb7TuT1tc6l1PJayhuPOZ6Ofe9cUiF2EzNm3X1pjz62Ll4uPASAF+JDIy+Ys1GYviHJuf2dV6/nz+pvO2LtPeiqtxJ3IY8elBVHOjfPfEbsIWXXosLTGnhuyc8THAJACfEikljk/yrk+a/EnJ41fYed/fvTyWQukZ9OK37WOx2Ik0r0g+jl/6ZLYi0l/O2mBPdfMWSQ+BoAU4EciZ2ZHM5dnzi8+Uq+/XXVL67Vz3pae1SetaKt1PJayL45LC6KfoPlnLW2rPv1cWmBPYNYC8TEApAAfEvm1Gdnam1m9Tsaej/X3aviy/a/mL5GesiZtg5TIBmlB9HOqo0PsxTRnb420wJ5AxnzxMQCkAB8SeX3mQu31eT3PqE3GH+g599VXdy9ZIz1lT1rhFut4LGX1DdKC6Oei+9+xea50p7TAnsAMEgmkEB8S+f35y7Tpb/UwD61YbzVrRMEW6SnnpBVsto7HYiQy9NRlr7117cwF9pc9z42Zi8QuQu5fvk5aY0/gjWzxMQCkAB8S+W9L12pT56rmjqylJ88Zv8I+03Fx42dHVXPfO3lp+a5Etp47bz1Vcriu/vTZedU10p5V849vrxa7MJ3tuHj1a1nSGnsCr2WJjwEgBfiQyNEbtmqT53jODW/Mr211/f09Kr/IK05bt0l84eWpkgpp56p5tND1m/HlNQelBc4JTJsnPgaAFOBDIuftqtYmzfac+dXGv2UYjV/kFqWtLRFfROjq6v7u7Bxp56rJ+ahWvMz04Dt50gLnBKa8JT4GgBTgQyI/OFKvvTLLc366PD9j197MKObOrGVpea5ENp5tt599NH+LtGfVXDN5rvNP/OysPy4tkCbw6lzxMQCkAB8Sqbvl9QVaeuYAZ+SaYnFApg8amqUF0czoDeF/Raezq+uH81dKC6QJTJwjPgOAFOBPIh9dU6yNzxjgPLzGdRf5SXOrtKDXuXladvOX58Tru7unb/9AWhA5gQmzxWcAkAL8SeS6D/dr42YOcB5b6/qNth47aUHPc82E2eVHjokXd3dvPlR3xfhMaU3kBNJnic8AIAX4k8iTwbZbpmRpY2cMZMYUuH4Trbtx4lxpjWq+M21+Vf1x8bLu7tLP66+dMFta4zmB8ZniMwBIAf4kUjd2Y5n2+zcHMi8Xu/7DDLpnC3vf59XjMsbkvxs8J35F09XdPbuy+ir9DjFipecExmWIDwAgBfiWyEMNjYGxM7WX3uj3LNxt/EvcTl1d3Uuq9z+YteqaP2RIi7818a2fLsrL2LGn6Wy7WN3dvbeh+aGsVdLKnifwh5niAwBIAb4lUjd6dbH2wut9mhvGz/r+tIX3zVk+tmjbBfffYOZ0qavr2Kmztc0n9zefPBo83d5xUTxh+qqzs7j28M/fXvu1F+X99zqBl2eIo1fQXq5lGCZxRlyZ/eVnIvUbya/rN5LPvxb95Lxfc+ZCR/Dc+cYzX+rt+7Tl5L7GEzWNJ/QHR4KnW862f9lxsdP9n+uynGw/X3W0Yd7OvSOXFH5j/Gxpt9FP4KU3xdEr6P9IxFsC8FtyJ1L3anGF9uz02M5lz02/9vcz/nL8nNsmZn13UvYt6XOvefFNaU2/J/DCG+LQFUgkkDiSPpGtweCd0xZqz0xLlgn83+vi0BVIJJA4kj6Rul2HjgSee0373dSkGP1QxXErOBNZNErTtFFF4iuVQxnD9WWW4RmHxFYAAzcUEqnL3FqpjZmSFBN4Zro4aIVQIu3w9ZrIogzRRbOova8HEK0hkkjdYzn52lOTE38C/ztNHLGClUijdqMyzEr2IXlmI7mRBGJm6CSyNRj8ceYy7cnJCT6Bp6NKpMm6kZQTaWz1zqb3egD9NnQSqWtqPfng6znaE68m8gTGTBWHq9DfRFqLuYcEYmlIJVLXdKL1JxlLtd9OStgJjJ4ijlVBnUgRQQf7KeunkNxAAjE21BKp07/jHrU4X3t8YmJO4MnJ4kAV+n4XKdJJH4GYG4KJtLy1pWrY6Cna/0xMtAk8EetE8ntsIG6GbCJ17x88cvcr2dqjryTU3PDUQH9dIxH3kGH8NBKImaGcSF2wre2NDRU3jZmuPTIhQea+SQvEwSk4EgnAZ0M8kZa6xuYXlhVd98RU7b8n+D5zSnaKw1IgkUDiSIlEWuqbWqasL/vrFzK1h9P9mh+mZ58MtokDUiCRQOJIoUTaSj/69Jmcwh+8OOuyhydov0kftLk3PftwQ5M4CDUSCSSOVEyk7bNjx1fuqB63suS/Mlfc+6es25+befOT067/7eTrHo/l3Dx62gOTFs7bVNnr/aOFRAKJI6UTmZj0fyQMwyTOiCuzv0gkACiRSABQIpEAoEQiAUCJRAKAEokEACUSCQBKJBIAlEgkACiRSABQIpEAoEQiAUCJRAKAEokEACUSCQBKJBIAlEgkACiRSABQIpEAoEQiAUCJRAKAEokEACUSCQBKJBIAlEgkACiRSABQIpEAoEQiAUCJRAKAEokEACUSCQBKJBIAlEgkACiRSABQIpEAoEQiAUCJRAKAEokEACUSCQBKJBIAlEgkACiRSABQIpEAoEQiAUCJRGIw5EFBnKAB0F6uZTxHnKCBIZEYDHoL6hCBRMZ1xAkaGBKJwUAiPcUwkWKPMJFIJBkS6YlExgmJRJIhkZ5IZJyQSCQZEumJRMYJiUSSIZGeSGSckEgkmTgnsiL9Lk24K71CbIyVxSPjsFNL0idSPzchjnPkPGPmP5qRi60vBg2JRJKJYyKla7AiPT3G1yOJVDD66Eph6IvwGYvjuesRiUSSiVsijSszzvcoJNJTxJkPbxBnbBD+2aiQSCSZeCVSfRUatzgW8bx53aaLrY7mGbuwiIXyBhLpxePM65usExU61fE6bb0jkUgycUxkL9ehHTizmXb0xCPjQnfvwBHExSPNR44tsZbciZTPil1N81Tb/5fjBxKJJDP4d5Gh61RnXcrO0oUeR77c2OJgPEkivXiceX2T41Qv1hfE67z1ikQiycQrkapGhje7r1txxfacSGl/JNJTxJkKbwidMf1/5ZM5SEgkkkzcEmldh44L0fqNtp0147q1HjlL5/F0iLG7iC3uDbGTzIm0TpV94p3nLXzGIs/v4CCRSDJxTKTOuBBDHNem+eXIkT3cRYrHgrjcnXszNjkXx1hyJ1IXPnnO20XXGTOWxOv8KZFIJJn4JjJpJX0iExWJRJIhkZ5IZJyQSCQZEumJRMYJiUSSIZGeSGSckEgkGRLpiUTGCYlEkiGRnkhknJBIJBkS6YlExgmJRJIhkZ5imEgmcsQJGhgSicGgtwCexAkaAKkLjD3iBA0MiQQAJRIJAEokEgCUSCQAKJFIAFAikQCgRCIBQIlEAoASiQQAJRIJAEokEgCUSCQAKJFIAFAikQCgRCIBQIlEAoBSPxPJMAyTIiPC58U7kQAAHYkEACUSCQBKJBIAlEgkACiRSABQIpEAoEQiAUChu/v/ASNSxfeT9qACAAAAAElFTkSuQmCC"},250065:function(e,A,n){n.d(A,{Z:function(){return d},a:function(){return s}});var t=n(667294);let r={},i=t.createContext(r);function s(e){let A=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(A):{...A,...e}},[A,e])}function d(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:A},e.children)}}}]);