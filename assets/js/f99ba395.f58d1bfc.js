"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10948"],{89225:function(A,e,n){n.r(e),n.d(e,{default:()=>c,frontMatter:()=>r,metadata:()=>t,assets:()=>o,toc:()=>s,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/confirm","title":"CONFIRM","description":"CONFIRM ( message {; okButtonTitle {; cancelButtonTitle}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/confirm.md","sourceDirName":"commands-legacy","slug":"/commands/confirm","permalink":"/docs/20-R8/commands/confirm","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconfirm.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"confirm","title":"CONFIRM","slug":"/commands/confirm","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ALERT","permalink":"/docs/20-R8/commands/alert"},"next":{"title":"DISPLAY NOTIFICATION","permalink":"/docs/20-R8/commands/display-notification"}}'),a=n("785893"),d=n("250065");let r={id:"confirm",title:"CONFIRM",slug:"/commands/confirm",displayed_sidebar:"docs"},l=void 0,o={},s=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function i(A){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...A.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"CONFIRM"})," ( ",(0,a.jsx)(e.em,{children:"message"})," {; ",(0,a.jsx)(e.em,{children:"okButtonTitle"})," {; ",(0,a.jsx)(e.em,{children:"cancelButtonTitle"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Parameter"}),(0,a.jsx)(e.th,{children:"Type"}),(0,a.jsx)(e.th,{}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"message"}),(0,a.jsx)(e.td,{children:"Text"}),(0,a.jsx)(e.td,{children:"\u2192"}),(0,a.jsx)(e.td,{children:"Message to display in the confirmation dialog box"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"okButtonTitle"}),(0,a.jsx)(e.td,{children:"Text"}),(0,a.jsx)(e.td,{children:"\u2192"}),(0,a.jsx)(e.td,{children:"OK button title"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"cancelButtonTitle"}),(0,a.jsx)(e.td,{children:"Text"}),(0,a.jsx)(e.td,{children:"\u2192"}),(0,a.jsx)(e.td,{children:"Cancel button title"})]})]})]}),"\n",(0,a.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(e.p,{children:"The CONFIRM command displays a confirm dialog box composed of a note icon, a message, an OK button, and a Cancel Button."}),"\n",(0,a.jsxs)(e.p,{children:["You pass the message to be displayed in the ",(0,a.jsx)(e.em,{children:"message"})," parameter."]}),"\n",(0,a.jsxs)(e.p,{children:["By default, the title of the OK button is \u201COK\u201D and that of the Cancel button is \u201CCancel.\u201D To change the titles of these buttons, pass the new custom titles into the optional parameters ",(0,a.jsx)(e.em,{children:"okButtonTitle"})," and ",(0,a.jsx)(e.em,{children:"cancelButtonTitle"}),". If necessary, the width of the buttons is resized toward the left, according to the width of the custom titles you pass."]}),"\n",(0,a.jsxs)(e.p,{children:["The OK button has the ",(0,a.jsx)(e.a,{href:"/docs/20-R8/FormObjects/propertiesAppearance#default-button",children:"default button"})," property. If the user clicks the OK button or presses Enter to accept the dialog box, the OK system variable is set to 1. If the user clicks the Cancel button to cancel the dialog box, the OK system variable is set to 0."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Tip:"})," Do not call the CONFIRM command from the section of a form or object method that handles the On Activate or On Deactivate form events; this will cause an endless loop."]}),"\n",(0,a.jsx)(e.h2,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(e.p,{children:"The line:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:'\xa0CONFIRM("WARNING: You will not be able to revert this operation.")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ALL RECORDS([Old Stuff])\n\xa0\xa0\xa0\xa0DELETE SELECTION([Old Stuff])\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Operation canceled.")\n\xa0End if\n'})}),"\n",(0,a.jsx)(e.p,{children:"will display the confirm dialog box (on Windows) shown here:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:n(529414).Z+"",width:"482",height:"166"})}),"\n",(0,a.jsx)(e.h2,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(e.p,{children:"The line:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:'\xa0CONFIRM("Do you really want to close this account?";"Yes";"No")\n'})}),"\n",(0,a.jsx)(e.p,{children:"will display the confirm dialog box (on Windows) shown here:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:n(20139).Z+"",width:"485",height:"165"})}),"\n",(0,a.jsx)(e.h2,{id:"example-3",children:"Example 3"}),"\n",(0,a.jsx)(e.p,{children:"You are writing a 4D application for the international market. You wrote your interface strings along with their target language translations in XLIFF files. In doing so, the code:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:'\xa0var $title;$yes;$no : Text\n\xa0$title:=Localized string("add_Memo")\n\xa0$yes:=Localized string("yes")\n\xa0$no:=Localized string("no")\n\xa0CONFIRM($title;$yes;$no)\n'})}),"\n",(0,a.jsx)(e.p,{children:"could display the French confirm dialog box (on Windows) shown here:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:n(373050).Z+"",width:"482",height:"202"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Note:"})," For more information on xliff database localization, please refer to the ",(0,a.jsx)(e.em,{children:"Appendix B: XLIFF architecture"})," section."]}),"\n",(0,a.jsx)(e.h2,{id:"example-4",children:"Example 4"}),"\n",(0,a.jsx)(e.p,{children:"The line:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:'\xa0CONFIRM("WARNING: If your pursue this operation, some records will be "+"irremediably affected."+\\\n\xa0Char(13)+"What do you want to do?";"Do NOT continue";"Continue")\n'})}),"\n",(0,a.jsx)(e.p,{children:"will display the confirm dialog box (on Windows) shown here:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:n(301431).Z+"",width:"482",height:"187"})}),"\n",(0,a.jsx)(e.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/20-R8/commands/alert",children:"ALERT"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/20-R8/commands/request",children:"Request"})]}),"\n",(0,a.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{}),(0,a.jsx)(e.th,{})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Command number"}),(0,a.jsx)(e.td,{children:"162"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Thread safe"}),(0,a.jsx)(e.td,{children:"\u2713"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Modifies variables"}),(0,a.jsx)(e.td,{children:"OK"})]})]})]})]})}function c(A={}){let{wrapper:e}={...(0,d.a)(),...A.components};return e?(0,a.jsx)(e,{...A,children:(0,a.jsx)(i,{...A})}):i(A)}},529414:function(A,e,n){n.d(e,{Z:function(){return t}});let t="data:image/png;base64,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"},20139:function(A,e,n){n.d(e,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeUAAAClCAYAAABiH+W6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABbISURBVHhe7d1/bBzlncfx79rOL8eJjcFJcZNejdMcJHLboAApkZOoqe4CiEo96a60p6MqEUE5pKRHhXSoElw4VVRCRUpObdQgisJJlOr+qVrx63SpEvsSQptiUR+GMzHOD2POCflFnB9OnOzN95lndmfGu/au7fU+632/pLF3Znfn187OZ55nnplNXLlyJekR7VTwOD4sm9Gec00pzSsAQCSRSNhH7httXoPn9H+4Cw8zj4eGhrysigZx0Kn4/7hsw11USvOK/PDZotiCnSomVymt12zzmgrc0P9MnXnu8uXLyevXr5udWtB5w+T06dNy4cIF0w0PD5fdTo+dPAAUXxBWpUyXYebMmVJdXS1z586VG264QebMmZN6LugqKiokcfHiRS9/0oF84sQJ6e/vlwULFqRGMGPGDPNmAACQv6tXr5pCrpe5MjAwII2NjbJw4cJIKJvOe1EqlHt7e+XatWuyePFimTVrlh0VAACYLENDQ9LX12dyt7m52S8h21CuCAJZS8gayEuWLCGQAQAoEM1YDWOlpeYgh7UzoXzp0iVTZa0lZAAAUHiauZ988onJ4Egoa6OuhoYGSsgAAEwRzVxtv3XmzJl0KGvLaz35rA26AADA1NHsHRwcFM1iZUrKOoBQBgBgamn2aotszWIN5godqNchc9kTAABTS7P3ypUr5rGpvtY/AACgeIIsNqEc1GUDAICpFb6rZuLUqVPJd955R1atWmWfzs0HH3wgBw4ckIceesj0//GPf5TOzk7zONDS0iJ33HGH7QMAAHEHDx6U22+/3dxEZNzV1xrKcZ///OdNSAedhvSbb75pnwUAAJkEtdamoVe+tFR844032r7sNJg//vhjc3E0AAAY3bhCuaenR1pbW23f6Orr6+XcuXO2DwAAZJN39fVvfvMb+epXv2r7xqY/T3X+/HnbBwAA4oIszquk3N7ebqqtb731VjtkbHpPz3nz5tk+AACQTV6h/OGHH5rul7/8pemU/s92zliH63218wlxAADKlQnlXKuwwy2rtQuG3XzzzeZxmAby66+/bi6LAgAAmYUzeFwNvbLRltZBKVoD+Z577uE6ZQAAcpQ4efJksqOjQ772ta/ZQQAAYKq89dZbsmLFCv/mIXYYAAAoMvN7ygAAoHiC+19TUgYAwBGEMgAAjiCUAQBwANXXAAA4hFAGAMARhDIAAI4glAEAcAShDACAIxKffPJJ8t1335VVq1bZQQAAYKocPHhQvvKVr0hlZSUlZQAAXEEoAwDgCEIZAABHEMoAADiAO3oBAOAQQhkAAEcQygAAOIJQBgDAEYQyAACOqNDWXgAAoHiCLKakDACAIwhlAAAcQSgDAOAIQhkAAAdwRy8AABxCKAMA4AhCGQAARxDKAAA4glAGAMARJRXKVYN/Mh0AANNRSYXyrJP/ZjoAAKajkgnliqHjUlnxmun0MQAA003JhPKcY09Isk5Mp48BAJhuTCiXwi9FVc7+T/so+hgAgFIWzuCSKCnXvHevJOfZHo8+1mEoJV3yxPpfyxNttvfwH2TD+lflpcO2H+MQW6fO6JeXNv9aNrzSb/sz8V9T92yX7QegSiKUE3V/8v7YHuU9TtQWrxV27yuvSp23MxzRsYMBMAnan43uW9w78EKhVLhedT3/3TtEqjPM49yk/1yxLG2Sjj3flrOprlV2fNTpfYEo/U1buZbu2/Z628Feabe909t4S+uN8uBO73vz+DLbX64yrD9vO3ttcWt63/LUQtm5jf3KdBdksdsl5etDIjcdyzyXOkyf09c4wd/J/G7DoGz56R+k1w4FgLwsuVOeeaDR9njWLJDN9iGmP6dDufbdFkl6JeJs9Dl9jUtav9Ukq7pPSnv4qNaUsMLVUaOXokzV1Yiq8JHn6eJVXPFzePr8iPN6Y5XigtJgWzDPodea92afXrxaf/RziiFZ5smMb3OGA5xMJVYzjugw8/7UevRLJOn5i04vNa3IMqbHZ55/pFcOinfQ9Uj0uTDzmWwb8B4NyP0jpmPPo6bGn2MJM6/tJ4dpxD7H6LYWf/8o0zLj6ZSd3sOd2/zXx6cV2UYjn+XI7Xn0+Yob/fM04uPLMP3w8+F5j2/L8XnJ6bsV9Mc+v9R0clh/qv1Z7zUbmuTBJXYApjVnQ7ni8hFJ3ng2ei45zntOX6OvdcaSGlnh7bjfD76v+sXzduYrngqqub8tHQ9f8HbYmXfqqvWuhSJvnIjuZA73ycvdNfLdlXoE7e9Q7v8oXIXeIiuebx9jR5YrL3h+5e0ozHjXSasO0uXYJvK72PTSO6Yu2XW8yT7ndb9oEvGez7STGcGUBAbktchr+6V936CsWrtIvDFFLVkk3106KC8fSu8U29/WIAwPs+9fXGf6el85Ibf9Iph3rdHwQjMe+N3e5/T2gtBr0rUeTQ/cZ5ZpldTIDjOe+zLuJFsf9557yvv8ZKFdV3b9mRBply23tKTGr+Pr8HbGox68ZNh+frfBPjdCDtPQgNh2wS6Ddi2hUphuV+3y8tp01am/rWYJ5jXrUu/fbOfvmTX+U+qg9/m/dldoOt763ZxtWUedr5HG+jxNqEbG1yo7brFPZlpP5jPzaeCueH5uaFu3p6bi20tOvPn6afBd0vVZ4wWwXZ9jrL/ge/5jrcou+2r+8uD07ynP675HkrW2ZxT6Gn2tO+rktqX2oX6pfjUgqx5ujXzZmh5YITtioRKxZqn3fDSkeg+dlIPB0XJbt2zp9nb6O+8MBdYyeUZ3LPEwH6fN3wmP21+OzU8FAaOWySZvB3NwX5/dUXnTD+84THCKdPSPEjgp/rh2vh06oDAHIQvlR+FqvJRGaV3rTfu4d9BmdMlrb9TI5g3hYWfl/dRBjK7zdZEQNQc+3Relz/b7vHUaWoaMtR7j1PtKr+zUdgiRdXSn7Iysw7jM20/r4+HPIS2nafRf9Er7c6UptS5Cn5tuV96nvjO0zpseaMpwwJSjDS2h+Y5vLzGjzVcGo3+e3gHi84Pe9ho+cGqUBx/3t+mM68kLSDOv3sHBj71taccvwuvYe+8Px7steOP6Yfq7lM/67H2lwxw4vJHxO4DpyslQrjp/0AvbU7Yv7fKQ38Xpa/U9btAwsA9jwZAWD5U4//l0SPmlvs13+TuR3v4L3g5vwcgdsylxXpDeCYdIjdwWmWV/mYIqtqBb4e34osJVil5JJLUexta0skFWhQ4o/IOQDMtoNTXOTR+AHB6UjqUNsulboXG0nfB2vA3SGtpxR6okTRVzzNJqWWQfTra+45lL/Wa5RxwcBLJtP5nlNA17wKdV6/ESutmutLYg9Rlq51evjkdQS5GTUeYrm6yfp24P3gHWvZFSZ1q29WTowUFsuzFs7UyqBixn4QON/Jj5zGcdYlpwsvV1dd9Wc+euuLlLr5guTl+r73HCGDuEXEVCSkuN3i5k0wTHOTFBtW2ss6V1fwfZKZKqZm31drL+O3NidnpBCUIPQkR2fCt7SSlc5a0BLrqTDY1Dq7PTO17/YGHFvoZ0dX+ourK82FbPe+zpjngIeqXbyOdru3BJvTDGmK+I8vg89VTIzpW2B9Oes62vZ5z39qiz8z9zo+8x7y2qfnnpp968P7zUlvC0KjtTNXX0fGdGS+6UH22IhY59KlJKDNPSYezIPF4aN6WhvGVbjoBdnlg1a368nfJ3Fvq1A+YgJENpJWKZ3LtBq8e7TID7pUm/hkGH9X4UKmGa9RKv7p9aixZnrro1NQJZS+hjrfeo/KaxTJ7xwkzPcQbvybpdTamR8zXCWJ+nadeRvYo423oyGqszV1PbNh3hGqTJ+W6NrmlJbrUkmD6cC+WZA89Jst725EHfo+8tGtPC0m88kj4H5AeNNniJtuzsMOeEM58vTdPzZDvf/kModKygqi/S8MQrPWzT84/BAYE9z/ZGb7pBmTePm0dUOefCVrc/3xFtnNa21y5XozTdEt1J+ctoe3KlpV8vFF6KHYRko8t38PlO2RIKcA0WM6w7dHCiO9pItb6/rvIWb8SXzYjpefOl5xK1ajjcEM9+HtHz92GZt5/2ZzM3vMppGqnPLANb+3B/pLGgd6D57GgNnPw2FLm1HRjFaPMVN+bnadsoRK7tTS9HxvUUTN8cDA/KlkfC69g/2E616fBM3ncr+/rza5+yNLLDtOVUKFedPyCVlQdsX/70vTqOKRE/9/bISfmuVu/GG6doC8un9OL/9Gv9arfMjXUiTEj1ekEfvxxCq/paZYe3i0nPg191HGkU4k3btCA2l/B4nbYCHWc1n7Y+7nhY0uPS7lfVqSr11sdbvHnVm6f4z232IiCv6mtDS78DsuX5uWMesBgmRCR6ftAOi5xzN42dwvN+Qu4d13oIdvY6juyt59M7dn1dsFPVEmB0HQXbzKi1Cxm2n/sl27n23KYxYltMlTgzvN870Hz/rtFqGNIHDvr6nIM1g+zzFZPD5zlye22XlxcH20mG5dwmqVNOWm1sWnMHz+l7tUV6rGHY5Hy3Jm/9YXpI9PX1Jf/85z/L3XffbQcVz9zef5CK+jdt30iVf+GfT752dKb5P0JS5PqZv5YLTf9uB5Q6PXfmh23hz+m5QS9HuV9auAQEQNl46623pKWlRSoqKtwpKVde6pLKRPZAzknCG483Dh3XtGDPnU200Vjp0EubJNXKHADKjTOhPOvjn0jyBtszAToOHVfpC65RTZ8jnu6C60eL28ocAIrHiUuiEsOfSdVMr4g0SXRcOs5S5TfwiDcam8ZMI7lf+3dRKmILaQAohnAOJ44fP57s7Ows6jnluR/8rVTcvM/2ZTfmOeWAnlv+v7Vy4db/sAMAAHDTgQMH5Mtf/rI755Qraya5yaGeW57scQIAUGBFD+V5nWslWTP5Vej6C1I6bgAAXOfOHb3qPzAl20mnS6bjBgCgRBQ1lGs7lomM8nvJcU/9U6Xpcqa/t6zTAACgBBQtlBNXP5Vkw6m8SslP/qDSdDnT31u+6ZSZFgAArjOhXIzLouZ3rZbkvPymu+e/r5suH8n5STMtAABcFGSw/i9KSbny4v9I8oYzti93f/X3w6bLl05LpwkAgMuKEso1H/2dJGttTx5mz/K7fOm0dJoAALhsyu/oVfVZmyRrxneO90L3TNONh05Tpw0AgGuKdknUnIF/nZR7XOdLp6nTBgDAVVMaylXn2iRR9a7tm3o6bZ0HAABclDh27Ji59/Xq1YVvoTz3fx+Qqmu/t33FMVz5dbnwl6/YPgAAimv//v2p31Oe0lAGAABR4VAuSutrAAAwEqEMAIAjpvySKAAAEFW0S6IAAEBmhDIAAI4woUwVNgAAxRFksP6npAwAgCMIZQAAHEHrawAAiozW1wAAOIZQBgDAEYQyAACOIJQBAHAEoQwAgCMIZQAAHMElUQAAOIA7egEA4BBCGQAAR5hQpgobAIDi4Y5eAAA4hlAGAMARhDIAAEUUVF3T+hoAAIcQygAAOIJQBgDAEdzRCwCAIuOSKAAAHEMoAwDgCBPKVGEDAFAc4QympAwAgCMIZQAAHEHrawAAHKB5TEkZAABHEMoAADiCUAYAwBGJnp6e5HvvvSfz58+3gwAAwFT57LPPZPny5VJZWZkO5TVr1tinAQDAVGlra0uFMtXXAAA4glAGAMABXBIFAIBDCGUAABzBHb0AACiyIIspKQMA4AhCGQAARyQOHz6c7Orq4jplAGXt2Llr8o+vnpbOE1fl3OXrdmh5uO9Lc+SZb9TJF2or7ZDxGx4elk8//VSuXLki16+X13qsrq6W+vp6qaqqskNyo9cpL1u2zL95iIay3jxk7dq19mkAKC8ayK0vDsgPVt8oW+6ul7rZ5VOJeNY7ANn9zlnZ9l8npf2hhRMKZg3k/v5+aWhokJtuukkqKspnPeoByOnTp2VgYEAaGxvzCuZwKFN9DaDsPbHnrPzL+gXy5NdvkoZ5s8ywGTNmlMV/Xd6t3oHI1tX1pqZgIjSUPve5z8mCBQvKKpCVLq8eiGinNQXjRSgDKHuvdl+SB2+vNUF19epVM6yc/utyayh3DvjDxuvixYtSV1dn+8qThrJW3Y8XoQwAHq2yDoKq3Ohy182ulHNDEz8HrFWw5UyXP99z6eFLkwllALCCKt1yU67L7SJCGQCsQpaU9z5WKWte6LF9Ph322F7bU0QlV0Ow9zGvRLpGYqtTel5Y48T6nAju6AUAViFLjOse3SWye6+kc2Sv/PbQLnl0ne0tolIsKa9eLbLp+y+E1mfp4wcpACCkoCXG5o3y9MpN8jNbkut54Uk59L110uz3FlUpnkvfv/Jp2RNan9MFoQwAVqFLjOu+uVW2P6mlu73ys00r5emNfiRrtas2EDJdqv51rzwWDMtQVTuZSvWcstY+HFr/mLemMtPTA6n1uqY0StWEMgBYBS8xrntUdslu+dljXil516OiNdcayN+XF+XatWum2yPrzXlRU5Le1W2Ht4nN74IoxZKy0bxRXtx1SNZnOJGsgbzeW5vBeu3+3m5Z6vAJZ36QAgBiCl9ibJaNT6+U7dvTpeTj7+2X/ZuWpkp067eLHOrpkebmlWb4VORIqZaUVfPGF2XXoSdjNQk90nNoq+x5Ln3Cvnnj07J1+2+zlqpdQSgDgDUlJcbFy2X16uWy2PaqrXv80lzQtWlgr3vOPP7mbwtffV2yJWXDP9DRRl/H7ZBSRigDgFWMEuPi5avteebM1j13TbpNw+3CpXIpl5QN7wBGG309udv2e0HdvHJ7pFpbTwds3/pNc8rAZRWJRMI+BIDyVowSY/PGNhMoS4MGSbZUHG78tXT39+TFAp5ULu2Sss9ccrZ/v+3TnO6WXYfWR9Zhd6g62zWaxabjV6IAlLu6n/TJtR/fZkqM0yGg8hUsd+WP3pez/7zIDs3fkSNHpKWlxfaVr87OTvniF79o+8a2b98+Wb58uTl4oPoaAKxyDGRVrsvtIkIZQNmrnV1hfle45M+tjpMu99nL12zf+OnPF2rjtHI20eUnlAGUvZYFM2T7/tOmxBgEczn91+Xe/adzct+X5phh4zVz5swJ/ZbwdHDmzBmprq62ffkjlAGUvZ/fd4NsP3DK607LyfNDZlhQpTvd/+vybttzUrb9/qQ8841aM2y8gh/4167cSsy6vAMDA6arr6+3Q/OX+PDDD5NdXV009AJQ1o6dG5YnXu2TV7vO6O2V7NDpr3Z2pbQsmi8//5vF8oXaKjt0/IaHh+Xo0aNy+vTpyO8ET3faSKu2ttY08Kqqym89Bg29tPqfUAYAoIjCoWyuU+ZaZQAAiiPIYP1vzinzm8oAABRHOINNSVnrv4eG/MYNAABgamj2agv4oLRsSsqzZ8+WwcFBMwAAAEyN8+fPmwxWpvpa/8yZM8c8AQAApo4WiDWDNYtToazNuPv6+uTSpUv2ZQAAoJA0czV758+fbwJZzy2nqq8bGhqkp6eAP9gJAABSNHP1hiuR6uvggd6BRE84669bXLx40bwAAABMLi0ha9bqf81ezeBUd+TIEa/EnDS3CNNO78Kit0hbtGiR1NTUmGL1rFmz7KgAAEC+tNCrbbe00yprLSFrIAe/92xuHKJ39Dp69KgJ5evXr5tQ1v+XL1+Wc+fOmRTXTm+bpvR1E5HP+yc6rUwKMc58TdflKnfl/hnoET4mX7HXqwufayHmIZ9xTnT6+n7t9LInrabWH6sICrsawpFA1tceO3bM259EQ1k7FTwO98flszMq1I4r1/GW0rzmo1DzWgjMKya6k3NVIZar2OuqUNPPZ7waVsWUz7xmem0w/0HwpsLX68KB7A9PyP8Dlzz9QWzNHXMAAAAASUVORK5CYII="},373050:function(A,e,n){n.d(e,{Z:function(){return t}});let t="data:image/png;base64,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"},301431:function(A,e,n){n.d(e,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(A,e,n){n.d(e,{Z:function(){return l},a:function(){return r}});var t=n(667294);let a={},d=t.createContext(a);function r(A){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof A?A(e):{...e,...A}},[e,A])}function l(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(a):A.components||a:r(A.components),t.createElement(d.Provider,{value:e},A.children)}}}]);