/*! For license information please see bc044b80.5c503ab7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7484],{642282:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=s(474848),r=s(28453);const a={id:"vp-resize-table",title:"VP RESIZE TABLE"},o=void 0,i={id:"ViewPro/commands/vp-resize-table",title:"VP RESIZE TABLE",description:"Hist\xf3ria",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-resize-table.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-resize-table",permalink:"/docs/pt/ViewPro/commands/vp-resize-table",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-resize-table.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-resize-table",title:"VP RESIZE TABLE"},sidebar:"docs",previous:{title:"VP RESET SELECTION",permalink:"/docs/pt/ViewPro/commands/vp-reset-selection"},next:{title:"VP RESUME COMPUTING",permalink:"/docs/pt/ViewPro/commands/vp-resume-computing"}},d={},l=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:4},{value:"Exemplo",id:"Exemplo",level:4},{value:"Veja tamb\xe9m",id:"Veja-tamb\xe9m",level:4}];function c(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R6"}),(0,t.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP RESIZE TABLE"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object; ",(0,t.jsx)(n.em,{children:"tableName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nova gama para a tabela"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nombre da tabela"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP RESIZE TABLE"})," command changes the ",(0,t.jsx)(n.em,{children:"tableName"})," size with regards to the ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"As regras abaixo s\xe3o v\xe1lidas:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cabe\xe7alhos devem permanecer na mesma linha e o intervalo de tabelas resultante deve sobrepor o intervalo de tabela original."}),"\n",(0,t.jsxs)(n.li,{children:["If the row count of the resized table is inferior to the initial row count, values inside cropped rows or columns are kept if they were not bound to a ",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-data-context",children:"data context"}),", otherwise they are deleted."]}),"\n",(0,t.jsxs)(n.li,{children:["Se a tabela se expandir nas c\xe9lulas que cont\xeam dados:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"se as linhas forem adicionadas, os dados ser\xe3o exclu\xeddos,"}),"\n",(0,t.jsx)(n.li,{children:"se colunas forem adicionadas, dados ser\xe3o mantidos e exibidos em novas colunas."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"tableName"})," does not exist, nothing happens."]}),"\n",(0,t.jsx)(n.h4,{id:"Exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Voc\xea cria uma tabela com um contexto de dados:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $context : Object\n$context:=New object()\n\n$context.col:=New collection\n$context.col.push(New object("name"; "Smith"; "salary"; 10000))\n$context.col.push(New object("name"; "Wesson"; "salary"; 50000))\n$context.col.push(New object("name"; "Gross"; "salary"; 10500)) VP SET DATA CONTEXT("ViewProArea"; $context) VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(953458).A+"",width:"316",height:"150"})}),"\n",(0,t.jsx)(n.p,{children:"Se quiser adicionar uma coluna antes e depois da tabela, bem como duas linhas vazias. Voc\xea pode escrever:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'VP RESIZE TABLE(VP Cells("ViewProArea"; 0; 1; 4; 6); "PeopleTable")\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(736973).A+"",width:"349",height:"179"})}),"\n",(0,t.jsx)(n.h4,{id:"Veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-table-range",children:"VP Get table range"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var t=s(296540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var t,a={},l=null,c=null;for(t in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,t)&&!d.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:r,type:e,key:l,ref:c,props:a,_owner:i.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},474848:(e,n,s)=>{e.exports=s(221020)},953458:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,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"},736973:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV0AAACzCAIAAACl01imAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABtvSURBVHhe7Z19UFXXucY5ph+QhhisYYKMxICiMV5llOtH0Q41ZUyuMkrKJW3UpiVpJeqNc0OqiUT/0GCi1TpkRgZ7e+0EsZkiCcmFjElpUxt0/AhmwCGKKCbRIL0MgqlpICbKfc5+F/ue7HOAA5612VufX5yTtdZe+5x3r4/nfdc+7HU8ly5dqvpLdeZDC8IIIcRA6cI9d8eoAkLITY9b44WOjo7Lly+rjKuIjIyMiopSGVeBNqflNjNUlg9T/3cb17qvqZTboOX2Q8sHist04bPPPpNEd3e3JFwHLbcfWj5Q3KQLEIW2tjZJ0wPYDy23H8YL/eArCoAewH5ouf0wXugLiygA9rT90HL7oS70ir8oAE3xVeeXX6x5oyD1pV/8tGR9+z8/VaUhRYflNTU1aT6Ul5erAyFFX0xbUFCgTE9Lw7Wo0tARcsu7urry8vKUxQYuavNgjHe6LgQUBaBJR5svtTa0fjTxrvhz7S1n2s6r0pCiyfLRo0eXlpZWVVUVFRWVlJTomF06LJcxigQsB7gEjNGOjg45Gio0tfny5cvFbGlzqJs6EDr0xQum8SAjI0OV9uBoXehNFIAm31XX3Dg8IvJnM9KHR9x24GytKg0p+ryuEBsbO2HChPPnQy9qOizft28fXpctWybZqKio/Pz8kH9jr7vNExIStmzZUltb29TUpIpChG7Le8O5utCHKIBu/BdqsHB4o/5vSbGJ/zJq3IToMbXNjTqWEjos96W5ufnChQuTJ09W+dChw/Jz584lJyeHh4ervB50tzmAHI8aNer48eMqHyJssDwgDtWFvkUB6NBRLBywfLg7Kibim9+efvckpP962gVrXQEBQlZWFtaKOTk5GKAYpupA6Ai55VhEtLa2qoxObPC6kLbo6GiVCR36LC8sLJSbC9nZ2f4LNyfqQr+iAHSsu7BwwPJhSmwi0nhF+ujH9Z1ffiFHQ4Xu+wsAA3Tjxo2YdepYiNC31tWNDZZr0jgb7i/s2rXLf+HmOF0IRhRAyHUUSwYsHD7t/OzxVzakvvQLvCLd0PpR86UQd7YNvislJaWlpaWzs1PlQ0TILYePxSKipqYm5BJmwYY217R8s8HygDhLF4IUBRByHZVFxH98/8f7n/wv+Yc0pKGuuVHVCBE2+K6DBw/GxMRERESofIjQYXlqaiokbOfOnZJFQJuXl+eW7yNMYHB+fn5SUlJCQoIqChE2jJaAOEgXghcFENr2wmLh1dq/mIsIQZYSb9T/LbR3HzX1tHl/ASCgXbduXchv5umwHBHstm3b6urqxHJcQkZGRsi/j9DU5uYSHWYjLF+1apU6EDr06YJpPPD/+wWnPGcdvCiMGTMGr6c+PhXhCbE/tIfO7s7xd49XGVeBNqflNjNUljsiXhhQpCDo01Hd0HL7oeUDxRG6cNtttyEKCBI5Zajux1w/tNx+aPlAceV+TfFPz1Mp13J269sq5R5OfHhi4j0TVcZV0PKBonThh3NnS8Qif1+l0nj1+KSNo54wT5A1zbQQTE05ahT0VXPBjv/01nAzW2b+QqXcw8RpE08cO6EyroKWDxSlC9OTQ/9ns/pIfck7qdzocoEEO240/oMPPrjvvvtUxlXQ8oHiuL9rIoQMOdQFQogV6gIhxAp1gRBihbpACLGiUReOflyvdaNEQogmdOnCb/5asvqN0G93RwixAS26IHsZrPnhz+JG8OdwCXEfWnRhxHeGFy/ZMOPuSSpPCHEVvO9ICLFCXSCEWKEuEEKsUBcIIVa06EL7Pz/9acn6h/776XPtLfiHxJo3CkK+4TohRBNadEG+jzA3Vsa/zQtXRXzz2+owIcTZcB1hNxU//41Ld44gNw/UBfuIf3oe/qX//ilJqFJCnAd1gRBihfs72sTzUx997v2XVcYAJSpFSO9MmTJFpWyE+0HbxNmtb1vMdt1dhj/84Q+PPPKIyrgKWj5QXKkLoKysLDMzU2WGgpqaGo8HsY2KZYYNUysyb1BjxDsG3UYdb4T11VfXfrL3OVVsMFS6MAjLv/GNYdOmTRvy2UXL7QO6sPfVCpjiLvbu3atSQ8R7772nUv1xrQcMDmT37Nkj5UMFLbcf11nO+46Dxiv/AnoRTakyPUj7IgEfAD8g7sIZ0HL7cZnl1IVBo7oW/0MfSjea/Y2E2btISqFjuNEsF9tpeQi5uXTh1KlTSUlJGzduVPlQ4O1Gj+eaB10u60OjsCcB9yBJB/5EolbLL168+MADD+Tk5HR2dqqi0KHVcpObebTo0oXy8nL12/ppaVgpqVI9HDx4EC0raBqI/kj/GZLfbXSs2bW+wB04Tw5uOMulvId+LHfUaBmQ5XaiRReamppOnjxZUVFRVVW1fPnywsLCjo4OdSzU7NmzZ/bs2Rs2bJBGnzNnzmuvvaaO6UQiQODt5e7ug++1vLz31O9LT/5+r/xreLns1Nv7PzbDwl6m3xBwM1vO0RIkWnQhISFh7dq14eHhSE+ePBkd0N7eLodCC4LV3bt3z5s3D+ojJYsNkJAgEN0AENCiplQQ4CXgK1AB1ZDFcEE1vEr0+9vf/hZH5Vy4FzkKkEBlqePtO+lmg299c9iJUx+X/c+B0jeq5d/h905++1u3eDy3SAWzphDwg+SQr0Pz/cS+rTKrSWGfnvC6LAcIrY0P8Zgxtr/NFnq7qO3bt+MVHbF161bzEJCrM9ukh+uyHJ/o0tFiP9rvLyBSwEWOGDFC5UNKQ0PD22+/nZKS8t3vflcVGaD/Hn744ZkzZ37++edtbW0oQfdbOrsPli1btnTpUpyIMQT3ghK8Dwp//etfy8gAvveUcYHTp0T/+7/Fj7nrnxc/OYR/d37nfzPnx39/Zqyq0QvyQfLmmGOwEAMLYxcleHu4Nd9P7NsqnItrHDNmDArRLIcPH8ZMkxMtXKflsHD9+vUlJSV4G4g+ProPm4U+Kjz11FO4qNra2vT09ClTplRXV2MSAiRwmRMmTJBqwnVa7vbRYid6daGrq6u8vBxdHhUVpYpCykcffaRSX6empqaurg69FRERgUGABAYEhoU63B/o1KlTp956662YZuhs6D3eBzEn3lPGjeAj6d5OT54y9ieLvjc+LvKemPAfL5w1d84k1LjWfQ3/MCp8/37FRD4Ibx4bG/v3v/8db45RW1RUhBIcjY+P9/3Evq2SQY8sCuPi4jDKMRt7G9zXb7lM4IULF44fP74Pm4W+L+qhhx5CAu/zox/9CHJ2zgAJ/wkMAlo+KWFEMJY7cLQEabn96NWFnTt3RkdHZ2RkqHyoQU+o1Nc5e/asSmnD6DyVQKd70x5Pyvf+9ec/y/rpkswHH/yBOtbt7Wd09v8vMfsEk80MSpcsWaJKg0AGPU7BiRijaHkp98drU09iEJZjusLn4/3xKZgDkJ5+bQ7youbOnYu5hFkqExVZdaAHr009CV/LH3vs4WAsd+BoCdJy+9GoCwUFBa2trVBTldfAyJEjEXz6O0Y4JZXSiFoCYqyLundD7sOupqbONLrZE+YZhn8ez7BheA3zJozq/YDgH64SzgpDBLG6Kg0CGfQS3gtvvfWWv781uF7L161bh/fHZ8Gv4lP6tTnIi8KqAf4W4XdxcTESlkWEQWDLvzdrWjCWO3C0BGm5/Wj5eCwf8vLykMjPz5e7j5qQ4BOjs7CwUErQ63v27ElOTsYIwJoWngqDAAkJ9qQOQKSH0F0iPamgDgTNVag6etbA2+Xeb6SvdqPTvb1rjIFu449VjKOD6GVYjlhdZYJAJpWE96qoF67TcjSv3FHzd7/92tx3BYnh0Sl/+tOfkPAXtd4sN776699yB46WIC23Hy0m1NfXHz16tLKyUv0BQ1oaYgd1LNTAd8EFrV+/3tusHg/6DOtVjIAdO3ZIrAsvgRG8fft2Wd+aLF++HBNp9uzZ999//xNPPIGRoQ4Ex1UEe0aHAm/Qhx5GY167xWP0LzDKr/VkvN9OSeW+gVV33XUXJjksv/3224O3CrMIjQy3jBPlM3v7g5zrtBzNi7mNI/KF3+LFi/u1OfiLkikKkFBFPvRuuVfRvMb2aTlw3mgJ1nK74XNTg+PI4Vp4ACB/7o6Xq1evffnltS+/MkoNDCeB417gMbBsRiEclBwdKpxsORwyph/ctXx5YYFtbhsOCFncSbfnC6/E9+i6V+Q9YbfcEnYL3AC6WHrZcA1XPV95619zyp+yOdly+VYFQbvFXQtsc9vg/guD5NixY3i98mU3utaL92aR8X90eA/oaDOHXschJ+wF4GTLsfZBkH/gwIGUlBRV5APb3DZcrAtXrlxRGUJuXIZSF9y1v6P3cFhY7aFaSRByAzPQe5whwcXxwg9+YPw1iNvA+nnePFduEk/L7QeWD0m8wPuOhBAr1AVCiBXqAiHECnWBEGKFunCD0N7e/stf/vLMmTMqT8h1oEsX7Nzf0aUcOXJkpEFqamrw87msrCwrK0v2v9q6dSuyUu4u5NotO8cg698gSCAr5b71A1ZGa0ghwEdIIRkEWnTBzv0dXQqG8po1a9588822trbXXnvt9ddf7/c5SCEzM7O0tFTT/lc2gMvMzc2trq5+5plnVJEBpnRLS8v58+fRICtXrly7di20DyCxefNmFDY2Nh49elR0MGBlCAFaBtVQiIZF8wavtsSCFl2w7O8YGRkp5cSXO++8Ux4lxiR/+umnIyIiMLgxZzC+xUMifeHCBUQHSJsxAo6a5S+++GJOTo6vbzx9+rR5bpBCYzO4zG3btuF6Vd4Aph46dAhXJI9FyI4suBYwevRoDCFk0UqogGrwMQErQ2tQKIqJU6ZNm1Zby798GyTa7y9UVlbGx8dr2sfNvcTGxsbFxYmjU0UG8IFwevv27YPfQ/qRRx7ZtGkTEpgeu3btUpXCwtCeqAaXW1RUBPc4Y8YMFF66dOnPf/6zeS58plR2PtCFy5cvmxsuYMLjenEJICYmRuY/kEK0mH9lhKiIIJAwC3Fibxu3kX7Rfn9B95ZNLgUDF25z+vTpiYmJvivkO+6444knnsBR+D0cRZA8duxYZGfNmoVx33cIYDnXRbMCUz3gSjPgJaCmf+UrV65AMlSGXDe6dCEjI6PKAIn09HTeegwIwmlZIT/++OOhXQz3tpehM4GQ+UeUcP7+V4HCUaNG+VdGTGoGCybuagRHoX0dMWnSJPguankfYIUcHR1t2XTwZgOLILMFfJcVvlGSLCvCw8P9K8ttBXOYodB3WUEGihZdQHSAdYSkm5ubGxoa2EMWygwkffr0abyOGzdOsgPixlhCy8KntLRUJOCdd96JjIyMjY1NSko6duzY8ePHUYi1BirMmTMnYOWEhAQstVAo92twCjRicE1KgBZdQIwAaZD7Czk5Oc8++2zA7fpuZubPn3/o0KGRBmvWrNm0aZN4vAGxaNGiyspKvIOLvqvHZM7NzYXNLxogIX+VsGLFCrzCf6AE0zsvLy8iImLs2LGbN29GW6EwMTExKytL7rAGrJyZmQm9QDUUDrpJicDnrO2GTyvbD5+zHija7y8QQlwHdYEQYoW6QAixwv0dCXE0Q7K/I39Xxm6G/DdOBg0ttx/+rgwhxClQFwghVqgLhBAr1AVCiBXqAiHEil5dkKckCgoKVJ70sGfPnpycHHnyB5w6dSopKengwYOSBZYKNwwXL1584IEHPD0gbT4ZuXHjRilEU6BBpFBaRspRQQpBwMpoNCkEvo1JBopGXejo6Ni9e7dLn2LQTXJy8ocffnju3DnJtrW11dXVvfPOO5IFZ8+enTNnTkSgn3u/AThw4IB8H/bWW2/J89SY0s3NzZ9//jkKf/WrX61atQp6AZDYsWMHCtFEmOqo1ltlHMV4QzUU4v1XrFhh6gUZKBp1obi4ODU19d5771V54kNcXNw999xjblcDRcD4PnHiBMY3snhFWh5CNX2gr2M0vaXEFKhvOmGZOcA8EYjzRM3Vq1cjLZV9ffXQAsOqq6uXLl0qOgjD8NpgMGbMmKlTpyIL+UAFVGtvbw9YGW2IQlEZnDJz5kzuBjRodOlCU1MTPB50QeXJ18GYRjiAJkJaVGDhwoWIsDC+UYJXpEeOHOnrAyEc27dvxxRCoekti4qK8FaFhYWYEsiCxYsX4x0gCgGd5z/+8Q9oCo7idEw5nIhC+5k9e7YIlqgYjPn0009xvXL01ltvhW0fGcTGxppBkxSiufwrNzY2ok2QkEKcghOleckg0KILXV1du3btwkjldq99gEGMGY5Rjtk7evRouLiUlBSMexzCK9Jwfb4+EI4R80GWHocPHzbXIAJcqHkzQtzvunXrAjpPKRdhwlwyz7IHfDTWDiJhEKwlS5agEdACsp+KhYATGzX9K3/xxRfSdCQkaNGFffv2RUdHcy+WvpkwYQJeERpgxkZGRmKizp07F/MZSoFXpDFjMW8xc8S1wkOePHkSp0AysOTG6SjEpEIJpjrcIzynLA3gfn0niThPlfHB9K5DBS5kw4YNMBWX5r+HCsyLj49XmR5QiGvxr5yYmOh/Of6nkyAJvS4gWMBAr6yslP2aEKkinZ2d7b+H700OPKcECPCK8iMImOqICOBF8Yq0zOeSkhLxrqC2tnb8+PGoiROR9V0gQBpQgvK8vDzohe8kEX1RGSfhaxiGB6IGSfsuK3wjGrQVGgTN4l9ZIiNTDeWdh1z43EvodSE8PDw/P182gwbLly9fsGABlhVcU/gDOSguLj5x4oTEDnD4w4cPf+WVVyZOnCgDHR5v9+7dCAGM6lYwc+69915zpQ1QX9wpXnGizKj3338f6w6HhG8IcMw7o6ZhIpGmwVhooB3i4uJwCBVQDYVoBFRAiwWsjHgByyKzrXAKNEJalQwCXfcdSTDIWgDDGoqArKz5//jHP0r4ABYvXrx06VLMfO9CoucbBPOLBpy+cuVKnJuTkyMlmBgQYpxorixQiJgC7ymBxpADm2GkWOtrmPwClRiMCnAtaA0cwopJblKiEdAUUITeKqOtcFTaCu9cUFAg2koGA5+zthnMapVyG7TcfobKcsYLhBAr1AVCiBXqAiHECvd3JMTRDMn+jvxdGbvhr7PYD39XZqBwHUEIsUJdIIRYoS4QQqxQFwghVqgLhBArWnSho6MjOztbnqcEfJiyN9rb27Oyskb2sHXrVnXgRufIkSP+14ustENqauqZM2dQYmkfpM2dF/wrg7KyMikE+AgpJINAY7zwwgsvyCOVfJgyIBi4iYmJGOttPUihHL1R6ezszM3Nra6ufuaZZ1SRAaZ0S0vL+fPn0Q4rV65cu3atKQFvvvmmtE9paansvBCwMpoOFRobG1GIU9asWWPqBRkoXEcMDZgeGMRFRUWZmZmqyHhMcMaMGUhg3L/88suYP+L3ZC6JGwzoM3EUdXy9K95B6jiNiIiIbdu2yQORJjD+0KFDMB5HkZXHSU+fPm0ctNJbZWgNCkU4Jk+ePG3atNpa/uXbINGoC88++6ysI8rLy1UR6aG5ufncuXNJSUkq7wemOkY5XB+G+HPPPRcTE+P1mG1t06dPz8/Px9yAXpg+EzMNkwRxmZwCfOXG+eByLl++bD4WjWsZPXo0Lk2y8+fP9xW7gJWbmprQGkiYhWgxc5sWMlC06AJWDRijsojAaqKwsJA781q4ePGix+MR54YZLuMemOsIhNkSO0BBMA2ys7OlfNGiRRAU2ebo2LFjkjCBI8W0URn3gEgn4B0otA+iKlE6LA1ycnLQPgErX7lyxdQRcv1oX0ckJycvWLCAfWYB7q67u1tWBJj/GPdookcffVSO+gIFuXTpksoYU0Vu1uCszZs3z5w501QTBOdwkvCZiBrMtYYrMC/KF9P5C7heaCVaKWDl+Ph4S33AfdwGjXZd6Orqam1tVRnSAwY34oVgFsBQkDvuuENlvu5aRVB877FBGlBirjWkmiuA9skWbMCyUhBQiJWCpP0roz2RNt2PVPZXChIkWnQBqwbznkJ9fX1DQwMWyZIlAsZxbm4uAuN+bxCiJqaB+VNUr7/+elxcXKzP/s6YP4mJiTIxBPhJBA5yW84VwHhoGZYMomW42MjISFwj4iCzfY4fP451U1JSUsDKCQkJs2bNQqEESqgMjRg3bpxxKhkwWnQBnVRRUSE3HV944YUtW7agRB0jPcDbNzY2YijLnQVxbv4CimlQVFRkVoMbfP755zHnMWGkBEuJxx57DCXmdxaobN6PcBqYzGLniwZIyF8xrFixAq9oBLE/Ly8PV4SJbV44YqLf/e53Y8eO7a1yZmYm9AISKZU3bdrkq5VkQPA5a7vh08r2w+esB4r2+wuEENdBXSCEWKEuEEKscH9HQhzNkOzvyN+VsRv+xon90PKBwnUEIcQKdYEQYoW6QAixQl0ghFihLhBCrGjUhfLycnlEAnD/BUJchC5dgChACyoqKmR3luTkZHWAEOJ4tOhCR0fH/v37s7Ozw8PDVREhxD1o0YWmpia8vvTSS7KI4D7xhLgLXeuITz755Mknn8QKAkuJmJiY4uJidYAQ4nh06cLw4cNlVwwsJZKTk1tbW7u6uuQQIcThaNGFqKio7p5NTQkhrkOLLiBS8Hg8x48fR7qjowNLCYQMvAdJiFvQFS/k5eWVlJSkpaVlZWWlp6dnZGSoY4QQx6Pr/kJCQsKrr74qf7xAUSDEXejSBUKIe6EuEEKsUBcIIVa4vyMhjmZI9nfk78rYDX+dxX74uzIDhesIQogV6gIhxAp1gRBihbpACLFCXSCEWNGiC747Owp5eXl8zpoQt6BFFzIyMuTJCFBRUTF9+nQ+T0mIi9C+jqivr29paUlNTVV5Qojj0asLWDtgTZGenh4VFaWKCCGOR68uNDc3X7hwYfLkySpPCHEDenWhsrIyKSkpISFB5QkhbkCjLjQ1NdXW1i5Y4LInLwghGnUBwcKoUaNiY2NVnhDiEnTpAoKFd999NyMjg19PEuI6dOmC7O/In6UkxI3ove9ICHEj1AVCiBXqAiHECvd3JMTRcH/HAVBWVpaZmakyruKDDz647777VMZV0HL7GSrLuY4ghFihLhBCrFAXCCFWqAuEECvUBUKIFV26UFNTo7Z2TEsrKChQpYQQN6BFF5qamnbs2FFUVFRVVVVaWlpXV1deXq6OEUIcj6544fbbbx8xYgQSERERMTExUkgIcQVadCEhISE+Pj43N7ejo2Pnzp0oefDBB+UQIcT56IoXVq1aNWXKlKysrHfffTc7O5u7MBDiIrToAsIEaEFKSkpVVdWWLVtWr17N+wuEuAgturB///6YmJhJkyYhjTXFkiVLampq+HtThLgFXeuIlpaWzs5OJCAHEIXo6GguJQhxC1p0ISMjQ24upKWlpaeno2TZsmVyiBDifDTedzR+ntJLfn4+gwVCXIQuXSCEuJWwsP8DRQbReo5L2pYAAAAASUVORK5CYII="},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(296540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);