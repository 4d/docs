"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62662"],{505296:function(e,t,r){r.r(t),r.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>a,assets:()=>c,toc:()=>l,frontMatter:()=>o});var i=JSON.parse('{"id":"FormObjects/text","title":"Text","description":"Un objet texte vous permet d\'afficher du contenu \xe9crit statique (ex : instructions, titres, \xe9tiquettes, etc.) dans un formulaire. Ces zones de texte statique peuvent devenir dynamiques lorsqu\'elles incluent des r\xe9f\xe9rences dynamiques. Pour plus d\'informations, reportez-vous \xe0 la section Utiliser des r\xe9f\xe9rences dans les textes statiques.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/FormObjects/text.md","sourceDirName":"FormObjects","slug":"/FormObjects/text","permalink":"/docs/fr/20/FormObjects/text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Ftext.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"text","title":"Text"},"sidebar":"docs","previous":{"title":"Onglets","permalink":"/docs/fr/20/FormObjects/tabControl"},"next":{"title":"Zones Web","permalink":"/docs/fr/20/FormObjects/webAreaOverview"}}'),s=r("785893"),n=r("250065");let o={id:"text",title:"Text"},d=void 0,c={},l=[{value:"Exemple JSON :",id:"exemple-json-",level:4},{value:"Rotation",id:"rotation",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}];function p(e){let t={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Un objet texte vous permet d'afficher du contenu \xe9crit statique (",(0,s.jsx)(t.em,{children:"ex :"})," instructions, titres, \xe9tiquettes, etc.) dans un formulaire. Ces zones de texte statique peuvent devenir dynamiques lorsqu'elles incluent des r\xe9f\xe9rences dynamiques. Pour plus d'informations, reportez-vous \xe0 la section ",(0,s.jsx)(t.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html",children:"Utiliser des r\xe9f\xe9rences dans les textes statiques"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"exemple-json-",children:"Exemple JSON :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'    "myText": {\n                "type": "text",\n                "text": "Hello World!",\n                "textAlign": "center",\n                "left": 60,         \n                "top": 160, \n                "width": 100,\n                "height": 20,\n                "stroke": "#ff0000"     //couleur texte\n                "fontWeight": "bold"\n                }\n'})}),"\n",(0,s.jsx)(t.h2,{id:"rotation",children:"Rotation"}),"\n",(0,s.jsxs)(t.p,{children:["4D vous permet d\u2019effectuer des rotations de zones de texte dans vos formulaires \xe0 l'aide de la propri\xe9t\xe9 ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesText#orientation",children:"Orientation"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(152882).Z+"",width:"211",height:"229"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["La fonctionnalit\xe9 de rotation de texte est disponible via la commande ",(0,s.jsx)(t.code,{children:"OBJECT SET TEXT ORIENTATION"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Une fois qu\u2019un texte a \xe9t\xe9 orient\xe9, il reste possible de modifier sa taille ou sa position ainsi que toutes ses propri\xe9t\xe9s. A noter que les propri\xe9t\xe9s de hauteur et de largeur de la zone de texte ne sont pas d\xe9pendantes de l\u2019orientation :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(312529).Z+"",width:"180",height:"233"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Si l\u2019objet est redimensionn\xe9 dans la direction A, sa ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"largeur"})," sera modifi\xe9e ;"]}),"\n",(0,s.jsxs)(t.li,{children:["Si l\u2019objet est redimensionn\xe9 dans la direction C, sa ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"hauteur"})," sera modifi\xe9e ;"]}),"\n",(0,s.jsxs)(t.li,{children:["Si l\u2019objet est redimensionn\xe9 dans la direction B, sa ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"largeur"})," et sa ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"hauteur"})," seront modifi\xe9es."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,s.jsxs)(t.details,{children:[(0,s.jsx)(t.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Release"}),(0,s.jsx)(t.th,{children:"Modifications"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"19 R7"}),(0,s.jsx)(t.td,{children:"Prise en charge de la propri\xe9t\xe9 Rayon d'angle"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"Corner radius"})," - [Fill Color(properties_BackgroundAndBorder.md#background-color--fill-color) - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesText#font",children:"Font"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesText#horizontal-alignment",children:"Horizontal Alignment"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesText#orientation",children:"Orientation"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesObject#title",children:"Title"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,s.jsx)(t.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function a(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},152882:function(e,t,r){r.d(t,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAADlCAIAAABGRlU+AAAmNklEQVR42uydCVgTx9/HZ5OQYFZRjqBFUQEB5fIC8XjVYlU88CiKQNGKQm3/qHiA+gcVD4pWOVS0KigViwp4tRUUb1CL2CKIXJZweKB4EETBRRKS7DubCEW0fV+biSnP7ufhwdnBZ2Z2881cv9/8FqupqQEMDB8dlqYbwEBTGOUxaAZGeQyagVEeg2ZglMegGRjlMWgGRnkMmoFRHoNmYJTHoBkY5TFoBkZ5DJqBUV675KSwoeS5HCZuP5PMjLgyM+J6VpVE0436MBjltUuOrfORlWbDxKbQ2O45e51yonesjdR0oz4MRnntFQNz46KqepYoc81a769iNmAN+XV1hKYb9QFwNN0Ahn+CIQDrf7krqij7BACB1dj7zxthJo+t6WZ9CIzy2iWBS6fv375TAMCioFkAsEuybtkBkofjmm7XB4DVMJ6h7RNMVg6kUpJnSaXF9wFoVKbbC4zy2itwTldKYFoAWONkjQw8lmI2PFLTjfoAmBVGu6SoTj5v8Yktvv6hPpvg5dO8/G/nhmi6UR8Go7x2ycbVu12woyvcBRhWDi97mXfDMCFBiDXdrg+AUV67hCXKdFmzsdvw+YpRF4ik1NpCJmOUx6BmDAHYny15QO2lALi4WP/DRZijo8OsbRnUTHX+Sf/Nx0jQEwMPSNIOw/Kjg9wEdq6abtcHwCivvSKpSKm4kSb8Q2RqZmAxciLXdAra8h/JwKWSemV6hFknMx7i9jPKa+/AeR76QbacwIJ99rGwS8pL2K0uiQoYZsRFWAWjvHZD0YO6tRfvG3K1/uo/7J3dF1Vd8zcdMa84FbhqOhsXSMXViXt+SqtxTIpbjvB2aGo9KxeD1sMHXBMGHSqMmm2j6Xb9HTqvSt0uhGsZ/PV28exkVHW9LkjxDluoZToSpmFH5/bfgWcXrq+rIxAuYmiqvGC/Xa4BXu5WukAhu6+jr4uzdoLZiZpu199hbDXAM/GHj1ZdmbTPJ83pStAD/mYDGcLyabqrEjDmxc+hfgk51QQluytQdpvnDdV0o/5P2ADwW34IwM8j8CICdkL8Ghm/UIxytjfFVv/7kPgfixuuPpMnCSVrN5+yw0kc6a4Nbed5ssLDK8NSq+TyiSxWWvgCxx5OSzXdpA+gqE6+YfVPbNFVkuyWlBRUnJO/MfxEUtIGVOVjRPk+39WXAKZYvhB2gAyIDOQa2SO8BRqNtnCoeNV8w1LANveKXCbYse1AWvDScQLH+WpZIqoNhfXsmo27bXjyW9YzHEez+UHiZr6JkV8U/8rpoCVrfMU3HUHyzNDeAo2Ul5dfuTUsHXRsJTC+IZxthB7vjMWeIPng6M4Zmm7j/xfKerZjYyPoBJIDwFvWMzTKgyuwemkPrV4eb66loEkKjHFSH90t0Eh5/bo1bJh0ifOW+6Q2IE2BctdKSxuAdqM8pfVslC2VVof1bHvgrmpRJQYo8xwJnxIcf0GjnD94mNf4pWO6IamCpvO8PAIz1ib125X7eGvUbT2LPxx9JzXr243TSA4Q3iwIO1mxzH3Q6/Lf997kBITF2pt2Ur0Kmq5tt/j6lOUVa7oV/xwosoNhX6yfUu9pLlszsRKm0Rptz6Y+WhTkrWXuwTXxsHELG2EsP/ViwOiAJAuczL16FkkVNBptW+NhL4s8l3dgsJVaVxWK2RLWgQMsUXsLw9XSa9MpxvAHEFKAI++7YVd6r6OtcfMlPtyzLjUZeI8zGDIGSGqRVEFT5RX0nMs+GeMdpmtgbg4kUmXmHnTWJzjVX3roj9rUnwD2ApDaTcNdYhc6IBzcQw78XpZbTlL2BagSib5NHxLv1IHL8Rxr7qCHQOVjjOXfBx+8G7Kkt4H2vSeN55PTp9hT+8qZhY88RloguQWaKm/og+N2xrKmp/HgaatcdNan6J9zX5wOXzNRV5uvK22qjkiJCgFzvvefhKr8jncSWCKRpzFlVCiqZOVnYDON5fmVWORPvSL3b+2Oqyo+n/+GSBaGpoX6KPfzHADp9ZWfVAymVZeM6D8RyS3QdIWhdOV9B2Rjr6enZ8iCcf2c5isvHxenLA89ErP/kA6igdEnJGrhINmg6f4ASDHZE//ZaxwWrpjjwPXxDvvUfdHs6SNQVPKoofQaILlA2sS3HArYvRSZLwHojOQWaLrCgCJ7JMN/LJYrf8op0xPiKR/P2uXPyszGU//IkMUAaCjNNhjupdi9w0m2mZP7+Iz4eJJnM8RpcENlEZIqCNBdaOR5t/sMvpV7DehVKMYU2WhkB2g72rbxPzuD2v/MApCRSTdX+k/qBoAIgCNplBp0EBkYgGI/b0tS3vKFRj3Y4KEMJF4nBiimd6Ui7QEo7qKNdY4624bUOgdoq7ywHYcHdLzY2v9sx9pdw9D5ny1dO88vNH7V9dtygTWrugzDsjctGAfYyJS3JtDNPyJh9Zvyi1hYvm/QF3BZU1uQOWiUt+rlq9s6B2irPHX7n+laOR8MkwhvpNU8ztW3F/RymN7Jyh1h+wWDXeM2gYqrF2tEVPmmw9z4FlPgcB63fxWJm6tevrqtc4C2ygPq9z/jmk6xoc5GoPy0WsM3cbUxcX27fDaJD0BSuLqtc4C2ylP6nyn3q6peSE/uOzUQqf9ZirChVtqiYwlXsZbu3pE3sicXSR1whXmxQkI0Kg/YUjEbuRy2hwUfVfvXBLn5b96US1nnwCqPzRiWvzXITeEgiAya7qqo2/9sna+/kKg2pFwSwANFTk9FQtrny0OhE1XvAwNiMqoyYpTlKw7dUoktiSh9qtV9to2mylPwqEFt/mdhsbGWohtuq1YCKUY8EvqsPrJ0rZ9lY+F/wq96Ld3o4qjqVMzT0/NrFzOnmR6tM0meOs6RqMtxkV6j7Y7UUptBvT57s+/Qnd8860ceg6kwPf2ryDUkuy8coPimljOc82Pjb8dtXTTCtrjqdiZQWXlQCw97uSKX2vZzd3MeiRPm9w1NLRW+kLVRHMKzbYBuyutdErP/8KMTk1cHeNqYqdlFKrWENd/oTTpPYqnfmAYT4k62HQGCUNqrAmeFROzuabrb0Ygrbc5UvWsaKIzrkVcK5icPy9/e77Go7Z/RWRcB/UbbmicZcXtickvI/qOX+X7pKFCTr0rm4W93pRbpjl/5tF7atROn9vzWZa7Dhrj5e3r6Lpg93mnyLBXLXxRxpiYnAa5BZQajsIY3mclxqnu2KsviNyfagGwFA+inPMU9i0vunNixIaVW1sPTZZ5TS/6XVggcHpshCo+sOJbyvJFaxACPCboD54YDmbboWqSe3QyWnqpzynunt0obXgLsdfMCA3C0dHtPC0PS9PsykFXekF9UVUtI7ft1tTLRG4bC/6UNdFQeJJvAIpcsxohq2OfpKz495GtDoJA4kEoBh0PyLOOK672tOqlphH9JvRhDPsoQgRX+x/zaM5sOYFg2fDLdASmkvjmGA72XrnQ2Qdtmes3zgMIPPvZobu357zsCYqmzka2rB+B1UP4J4fcaSuFqhaS2UTnRYxP1j69uX+4Wsx95oLFCMXYxu+p68nW2KG1U4n4VS7td1ZC22Q/DwDoXo37jpoHOXcVVRVcTE+Pig6+Z7B5poYuw5fRS3t5zdzPi92LgwTf20k/nLCYNR6kpsnB4TEZ5Rgyu2JNQ7uSNMZcjVB0cp65XSI5fuC1OT8Uw4UBAfu6KYFfoVnoG/B0dOF0w2F35ZLgmlmODnf9YOf/AocMjNy5C+IjopbzaS3umCe7PWObONZlGIt2RbwOU3Qp3a/NBo5dFHNwSHZQRfyC13gqwVZWeDIACAjv1a2XR0cusBmqxDPsnD2ebad6zAeilerOr7t+xEJBQdm9n4+O9F2WG7oYLG4SPiF7KC1jqwjXqj9DJ7G8wGL6Ai+NE9W4ZMLOa6hezMKBuvruKnqFRh3JzTifDPnsAIKc46dtOdw3b9TPHaDgS2SkQdzd3eDdXuyOq8v+EXsrjGo36OBX1xMlL2ffmTR4Ch9rFB25hEjjxAzxq7NVRpdguwkQMPIQJucsMjocbCWWs/RtoalClzDaUSrh/yICsEWvJoQ4+vkDpS6GEXsr7aAT6z3r1pBCAIYFBbhGbt8Icb2czHq6S7CALVn/z+c2UK79kHU89WZB6U2/8nNqCp/2HaalYbAtwjf/w5vX1sx+2yccA+g0Qmu6qqBtC8Z1WegZg4hIZaHrNM8eRuUu9lD/OKj5/6tjZ50KAkXwHx6/muzp06aXyxLUy/QdxTeH7/6bVoQ+i/UIlNFXe6qNlPcz0x9voIg//q8RtbZrfmB5OTrbKy99+uxt5vOBo+FS0tUBNV9++fOV4xvFKFkk6JCWhjOmpbmg62k5/sed4RNVq0kJq7zx1ku1oy06qdxit4ZT9aDYnqOXS3FjCfphIiCfjSN/HSPIsDYZYzhjy5edVNyqun/5YDw/RI9J0AzSDw4KtQ+aWNRRdvpW+bWco5wzpoOfstHveQIRVVIEuPZvTj4EAUEfPCMBTdar3PnCW0Wd9Zn6m9qeGFNqeemS/4FkWWvrd/jSKxAUYlq11fivC0u0E5Ladp7LrsEcyymqyYU8KDpe1ndUztLdPaDrP25pamnPuJkt0wwE8HWwrsx49QtDPkdQbhqr8WuFZv3UHATAkSQsMEwLwLCpw+ieDUR4Cau/QVHlRvh7ZBLVl5b0haKiFnTp2liUVKcJraTWian0DgTq8ydXNUzhJULzFFNIEp2UcgPYtpjRVHkYUVeddyLuSeaGAc4/8TM/lf6aNMp3QE+WbRppRy9mzll2blwAcL67XAuzJVnyEAT0Tfnucuu00CytQhm2kILXRnvSmqfKUyAAoqSqO+m4jUU31f4kqe0l9NG/yWStOBczs4+hopTwKBHP0hqGMGOTp6TvBuH70iD7SptfKHI5WB1T+f28KRFhWOyLrufxCdlXhxVxWZU5XDJtoLB/8KYIzDR/Nm5z9MNHEeP1TQlZFuSYMMjbt6b85gfBxxpGF0iPMZi/vbeeIqsHvQlPlxflt0MeEC8xlAxbbC/r5k3pWSNwIRi8OVibGBoer+xZ+FfHLM3NgYtDEr59L4cD7syJiEJpdm0UuZtH7svvtdEQ4greBpsqL3mSPd531Cu8DJ0ukYthtRHO4j/9OQi187WwWs3klTCxzsQY8nWzY0cL2owt6ch2fyhJt+8+KT/Qd+qsjsiWg7TwPdg6R554UXvwd1wYHQqfm5Nzd8nPB0VBk1q3bz+V7zwjbHFVF+snVNJRewKSSDv1mwEokVTeB+AHXBFmo5IubFjW8eNYEsOZjHhQzolGePaNpnxdyIFN6ftdQQGZT5wymmnxCsstQWrc2rdvdW5Q5USBvap2L8tSgPt/cg4rDTCjiMFPREVC+oGds8JY2OfdR+0nRVHlV53dFrfVmd+mRHfAt9RQ6d4W/ZWI01i2ZTMYSZXoFetkNHke9xEQNqDsOM+xH4VBY2byfV0fIdvhviY1bjjAEIE2VB7nNsbPivPmsjmRSwU90EHV4bDZ7grH8YAEvcjBPTYGk1B2HOeG3ytSodIz1JvwoHHS7Ys9wpHuTNFUenJhvW/edrM9nUGve0dnirCjFVF2lNcb9OvnFe4QWfKIcXuPYb6oOxIZ2NullbQQUQaXQxnrKTQ5vHYc5dEDK8tCEOh9nVHGYz2yPcOv/WMAjE+5w1k8xTUh6quc6ga2yZ2traKq8IV7L1oGQxNQjVCymrEhPl+59vZapWCZReisrIqLl9K4FIF8dXZvT/FeY44H0PO87cZiPINxVAeDZKN/vOnc22Ou9vMe0sG8G3vRbFent6o3QyYumyoMfVl+vyI0zS5QXJM9S9RKtBpjH7V9FGTj/AoRWT3XHYYbceoI5G1LnNk8K65vqqXmwlKjj6SDr9ui1q7I3vTLrHsF/+9xCBy4V+7ADlxM2q4+K5V+tkhSKxD7Wndr0DSeL6w268EahiwBeW3zOLzSeJO1ax2E2aR58VSf3WHgdofOp99e/HwvfdjIX5owQyBdFH0EYvJFeyruyc43odmnLLi/8t7YLmVL65mmqbrdduTLqeWX2/kPxbYJxn4mN+DG9Oilxyz8t+D1QvjBUHGbKF6aHw2jMyh2px03L5jpRf+eEuP65wHoKiaMMMUiv0Xb04qBWV5z7cJEYfwmUJsDBa0UwgoVhZWWxh8uwd2PA20+YmJD+7fM6sZ4OsgGxdRzmigfPgnwSk+M8VSxTrJCbQsFs5S54khATPhhjbW44HeeiPRlPL+W12BTgNzo+p/ZC+F4My/exlY5bsp7ErVGUT5jbvsfKjutTL6+TNr4EOoao70ghZekLVsMpAFRVXnBMxsPCx8k7ZylH1R2ppTcOh8DEHQCq54V8M74fwnbT0Rs+j8DcI65cjPDriuVvW+Q4NvgQItlR5Na85/TrvZfUfrI6v+Voyq7KiJk7tFwpu5JnEig7OL1L+v4/K1ytrxzYSCA1Y9CrzyMA2Hf5yY1927TAA09b2bQlK0jcQfViWxhjbnA6drdBr90TTP9cTMBKN+w5C9eEevpqe6cpB9nnqNP3zQv1dibAThQsWBNM6vW3nmQDTi4kap7hhsj6bHopb3PshfL0H5SBG66YL0k7LQCSP4BCHAY4J+pzVde2Xr5zL6+KPLja7/zkwCFDKBfn2kbZuWPp7LKUgNmjVY/os/3c3dxq8TulcF4/v4vk+fTEyZ1JuXIT+7LiBzU3T8xxMuMa9of5NWJKJ+jkrWg0ysL+9YwFVwYay7UA5ePddC267Z8/V9Wiz+9pvy944skdp9NOb/il+fwr7O0WTtDtN/kr1ds/UBhn3Gpt3hotYwTbhYH+s/w3H9uz8DJMOwByks9iZf7lrDL4Ww9H2WfTa1flL14u2gKqJ/tUcjdTKlVE4m7CtAUGLAGqw7Bqb7/82dVG0WMME7d+U0Plr0dlopLe09ciugsKuimP4d8CHde2DP8GGOUxaAZGeQyagVEeg2ZglMegGRjlMWgGRnkMmoFRHoNmYJTHoBkY5TFoBnp5DNTW1l64cKG6uhrDsPf+B5IkBQLBuHHjdHU/+O1y7bfwj1D+u9BLeZcuXbK3dxg0aCDrf9s7F7AmrrQBn0kCQQbxAmjlopYgdAEBqy5VsK13xYr1Sv2lrlbXdoWCq1gLVIq9oKyAVfTXRV2lFYEiKKUqtVi1VbwBRbDsAqJVBLuCqNHBBJLMnkkAAwnIEJJ5Dpz3eTqdhMk3M8dvZs4k856Pp/1kr1AoCgoKcnJyFi5c2HuCGyC+Jga/2sofleRfq6rv8PFWubgkP/+2WNHNa5bL4THt4uKsUEK3RvUmXMbZ2bm2thbO9JLgBoivFb1mnrwgbev6jYkV0udvEdJbsTFbTpZ39LQPIbkZFxOT8zv1whWw2xq5nCRJVSPKZLLGxkY4Vc0zM6qpErhYF5ID0eAGiK8VPV5tCao4MaPgPgBZV2atmWDZ9C7fyAIA444rdQkEcBmj7t402GSwcRsbmOGdeLA3w/ynVleu+fiG7a76N+glwQ0QXyt6POdVXjh1XzmT+9059dOXpBOfZZYRCFWN0o2bJBQKFbSCOYKZJlTI1Wg54uFiJiYmvSq4AeJror9z3n9/+jZf7uDzdv+rWXlHLlXPnWzdNsvvntq+pWj4+689iNr1I3xpM+690KCpquFR4f49+/1C4r492ZU8haVX2KbV7gN5QF51eNOWrHJm/GGFnVdYyGr3QeyOnD59+tTX1/P5fNiP1ryJg0e2nGl1RdfaF93gBoivib7OeQ1lF05SvIlvz188byJ8mf5TieYyEvHtB/kpX+68vWRNaOC8cVUX/7XxUFOhQRNAnz2QUOS8MjRkyfDaC3tOlAGm//e0wXbKJ9GxcRuXDa+8sOdUGdutgkc2bFZV+0L4zahe8ggen8eHC8DFurDL6AY3QHxN9HTOk+edOkzT431HmxFgiq/Vt5nfn6pY7CrSsNRpemx00lqm2p2n04Or55MuFz/2d+3PXG0J50Wfb2RkMOnvVt8cUS1MOi1b5cQMsChxdSEVF9lvFjxkYWsKBAI4bXNkt/Rm4LRrRza6wQ0QXxO9ZB68t8i8YEQQV/8ZFWUCJMU18AR+9WzhQ9HoNl9CSmhymGVTOgodPSzBaWPVBsF+nouLtXJW1thsthDi0oMx0dnlzwBJAoo3pEvta6QENrH6ZaXlGwTYm9ElORANboD4mugl8+C9xR0ApvkvtwGNjcBojLvj8UPHs49d8h89U3PDm7dAWlZYS5uqDe4qa3tvcXbnJyfLxn2ZuFYkBCeD/L4zZr3xsDdjbGwMmw+2r2ZvBh7WqvdNTbsyxCK6wQ0QXxN99PMewHsLmcOKpbOmTZsFgVN///FCwY30y3Wtd4kewKs/suNYQR0lrcw/llzJd5g+uqMBkZg+hvTp47pbl7/5uoZXW17+mM1mwYa7d+9eQ0OD1sZl2oLHg3+SSqXV1dXt/YjU84IbIL5Wuv+c11CZC+8t5i/2VO/Uuc95B+QmZp8rf8OHuW81Eii/0COe0WCoLDc6IJU5AKzf/DD8reGq5U2Uw7u2iew2c7FZXtqW4ADadKzvRIesM18HHXg5cXlnh/qHbVdYWEiS5Kuvvipox5eH15SCgoJr165NnTqVXTsiG9wA8bXCpW9748jqsHMzvon3BWKxlC/s1JCXckpMAXNzpuMnFouFJItRtWE3pbS0NDU19cmTJx0s1rdvXz8/PycnJ1YHN7rBDRBfK1xm3n8O/+XTzMkJqUv1UeRTK7CJYePW1NS09wU1vLOzsrKCTdyFxkU3uAHia8Jl5j25eSm32uJN7xEGLnUNW7mjFtGtZdENboD4raLh0S0wnICfScZwA848DDfgzMNwA848DDfgzMNwA848DDfgzMNwQ++yHtFVYrFvizboKrE9z7fVX+ZRZxO++qmWYB7IE/b9k+cMH4P/StYGdasUaPwWpPrhSGWV/vDDD3CGz2dR6Avd4AaIrxU9nvMeXC8qBR7eIxS5ubnFebnF1NaI6bb6W90LUbdKW5oY0vRjpfJ/qr+qrFK2yYFocAPE14p+r7YDvRd+uMghyO9iUPCOezVP9bquF4KuEtsjfVs99/MalA+3WzB9UkL5oDshLY0N2D9o0fjKAymFijl7UxfdSIvbqqzdC8AgnzUh73qapkesL3D96MtFqkc+pefi135ntix2+ViCqkjavi2rmHnEoc/I2eHBS0Qku8I3LVYp47nQWp75VjWrjkoscsENEF8T/Wbes7rKmzcbLh1N+C/tFjLNkXlLJntM3bl6oPI1vw/WO9qTQCKmzJeFRo16if5538dpcWd8Upc6iUzSMpIr5m8S8QFx//Ke3LopIQ4AVO1dGZ5Duwd8Fu4guHEwalfYivq4pJU2bE786CqxPc+31WPmGZnQ0oupURcpCh40I6bZWSjLHwpoCSBGrfpH8EQ71WJvLnsfnu+lUspKSBO83yopws1nPpG9LyuvZo2nVXFOCk17zxg9oL7k1GlA+EQET3A0BWBIyIaqpRGZp0v9ljr37fwmtVilRDMtLctMFTTgMVMdlVjkghsgviZ6zLxGCdF/7se7FznUV+dFr4v5cE3jgfj5Zkqj8SUbi+alqCtp/7+NudrCziuzMUawq2H12mK7fx46kvc3T+esrDp7/1k28LrdB/6FHG7ZdMzxSasubBK6Siz2bVmi7OeZWo9ZPHvgpqyfy6kFo1QrbDYan/w7Habdwk0J8xz73s0MD0lRSY/k6wsmJm9LT4jPLQKDN0x8Ge6+XAJvUKjqRzIwiDl3yqQ1XWtfRJVY7Nuyg+nn3TF+VJGbmPUQXjStTGg1n5ZB+qQOThufPHp4p/SblAoCDBZTckDyBoye5gbO5ebeEI5b66G8jTC193IDJzL2po8K9bUDd9N2H6VpDy8Ri0stQFmJxb4tC5T9vH+FbwjfmnBcMWJSSNxfVXcD6kajlctsLyvFsZiPVm+IHThvxiBwf3tQ9G05oPmi2W/Bayx452131ZK0ULQuNmTUw8zIgJUrAiJPPvAMjlsnYtPrQFeJxb4tK0jff3zrq/EuLXSNTk5+/pIUBe44vFxMCZT+otxnHgWE5sq0dF0Sm7yk1WeNrceE7kuimLMiXyU+sttVZJVY7NuiDbpKLPZtkQddJRb7tj0BdJXYnuTb9q6npFR0bwv2mOAGiK8OfiYZww048zDcgDMPww048zDcgDMPww048zDcgDMPww296/s8dJVY7NuiDbpKbM/zbfV2tdWpRq28siT/tzvibt4iZEvQ9sj6trqf8+Tl59MPHcwoo5izNE1ajfjT6x+sWWCrrFE7LjRhhRu7hzeVSM9/vjVtanjGeyMBqD8XH/Wr44o101/WdUORVWKxb6tlm3Pjg+Jz6xSW3oFBk0zFldcv52TnZVdLFtrqVqPWyJIe1FwEt6awPJ+UdjFQ6/ZFVInFvm1bFPd+VKbdzLj4pcwDxMB5tPd0f4oCJA2krWrU6nCUmC7Yn7qgW/YVZSUW+7atuHnlFzj1//s7Nmpv8smmp4U7X6NWQ/+eoxavPidq/UW3NRvfGgFf1BRlfLE57T78rKVXxJerXcxxfdtuCG6A+JrocochLc8vV5hO/rO9sdY/s6hRq9S/jx9INfX7YP2nXm2ec390r7bsEXPANdzMCtqcZuMftmt75Czil03hRynADnRL0OL6turIGiWAHjjIrJ0/s6hR21b/rm8TSpWLNy+dpMHQ10dawOu466SRJ1MZjdKDzQAX6Cqx2LdttbX9BtO8q7/9IfcVaevFsapR21r/1gpV9p9aAjzcvmGd8iVJ0yIj9u2LqBKLfVt1+E4jxxJ5v6bn3P2oveHJWNWolXV800TaiyzpMrvolNBhz99kN6IPukos9m1b8dJkP29A/3pw/da0K/fFFCWuu1XyS3zEzt+o9h+q1qFGreOEmQRRFBmTebsOrut+SX7RAzY3+Ogqsdi31YA/LPBgtO3O+JSMbQUZTe/1cZg9TzmWQOdr1H79f9oXboOx/ewdoY1fbE75OD8FMBcCx08S3S34nT3toavEYt+2XaRU3WNKBneB7NePfGHFWR1q1Ko+LxZTfL6Q7Ew9XDXQVWKxb4s86Cqx2LftCaCrxGLfFm3QVWKxb4vB6ArOPAw34MzDcAPOPAw34MzDcAPOPAw34MzDcEPv+j4PXSUW+7YGQF5ZUig2G+Ey1LzbQ6OrxPY831bfmadW5Zapc2tp5+Txxht/HtzRb/3qymN3gm4J2h5Z31bv/bwH14vK/pBaWlr2FYJ/5545emBb8F82l1Id/UrzXHmUPziblnbtfkO3bIm6VSqTyRobG+FUNc/MqKZKVFZpLwlugPhaMcTVdoD3u6sWOShnqdyET+PPFEUdKkh8f9QLP0iAmkMZGeNcZrkPMn7hwi8EXSUW+7ZdpaGl5BQ5ftX6kivBOWeOlS571UlId2AxEtKK2IBIChA5cUE/PhVt3B/mYnJX05hktSHoKrHYt9WdwW/OsM5JlzyTgYYqxmIc5R/26Vjj77+I2BQ+5ED8/BblkRbazv3r3JKvjg2fvtzXaYCdCd1kTK4cO/Bp8VefH9xzaspu/1dYrRtdJRb7tt2AhGKeCDRqZTH2dZ00kl/7c3mr/p/Qfoy7BQBD3ce6uTmb81XG5BwXGwvzYYwx2YVVo6vEYt+2O1YpsCSARAaeVrzQYpTJmCEyZFIAmH5ee8Zk50FXicW+ra5rIcSFyd9XyW0XDidJfucsxhYzqCNjsnOgq8Ri37YrPKu7dfMOTBNZbUVeYsLR+2Bw4N/n9oN9iwkziezDkTGZke9NsRRQt8v/GOzhZqH+VZGM2f+rV6772Lgzvk+LMXnr+Nc1PBljTDr0Y7Ml6CqxPc+31XvmNVW5bRrGArhOfHftklnDlENStGMxPv8sTTr4TbSJP77t/ePkhn37tRqTics7e5PRYpWamZm1Z5XC98VicXV1tZOTE6vdRDe4AeJrRd+Zp7XK7fNLqpXbvO3Jc9QsRpoZtiy+Zdgy4fhVMaOXiKVAaA6T1XnevkPTW4zJt95hjEkWu4qsEot9W7RBV4nFvi3yoKvEYt+2J4CuEot9W7RBV4nFvi0Goys48zDcgDMPww048zDcgDMPww048zDcgDMPww296/s8dJVY7NvqH7m4pLCcHDFqGMvKUp0BXSUW+7ZdppV4K5E8svb62wfaCocSOpUn7Qh0ldge6dsa7pzHiLfglUmuTHU+qVRIku2sWrfypB2AbglaXN9WV9TE247opvKkbUFXicW+rc5oDBZAUBVpe/ak591V7qHbpsSwV9orT6pcOGn7tqxi5uGaPiNnhwcvEbEptwdQVmKxb6sTtbcL84vqQeMzYGTt4WbHl1ftXBl+Hpj5BERMthdW3qzpL1AVD2LKk1pPXxnqJ02KSdpzQuXVVu1dGZ5Duwd8Fu4guHEwalfYivq4pJU2bM6J6CqxPc+3NVzmGZnQguvZu29lw7sN+ZDFO93seGWnzwPCc/WWd70t4QLW1vbMcjLt5UnrS86fBoRPRPAER1MAhoRsqFoakXm61G+pM4sbkRarlGimpWWZqYIGPGaqoxKLXHADxNfEcJnXKCH6z/p4t//zfl49nymN27df253RWp5U0McIzg63bDrm+KRVF7YBXSUW+7bdCSF/CqcN9dp6rBoVR+USuDBV/UgGlKP7yKQ1XVgjukos9m11QiXeApmMuaYK+g9znOwNTpzbvtnWNPANW+Hv5bcsPDzbKZQLTO293MCJjL3po0J97cDdtN1HadrDS8TuOz90lVjs23adNuKtwtQ3Yf/iwF0b6cjPDm/+6DAjPA7duO81W4H2iqO0ULQuNiQ2IiYy4DvmpalncFygiE2vA10lFvu2uqBVvAX0QJfAHanLxWK50rflw7M7cI1OTm751PwdqfObXxhbjwndl0SJKTngq5RbdruKrBKLfVu0QVeJxb4t8qCrxGLftieArhKLfVu0QVeJxb4tBqMrOPMw3IAzD8MNOPMw3IAzD8MNOPMw3IAzD8MNOPMw3IAzD8MNOPMw3IAzD8MNOPMw3IAzD8MNOPMw3IAzD8MNOPMw3IAzD8MNOPMw3PA/f6PHs2Qf1ZgAAAAASUVORK5CYII="},312529:function(e,t,r){r.d(t,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return o}});var i=r(667294);let s={},n=i.createContext(s);function o(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);