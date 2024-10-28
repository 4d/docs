"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23738],{640253:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=i(474848),r=i(28453);const s={id:"current-client-authentication",title:"Current client authentication",slug:"/commands/current-client-authentication",displayed_sidebar:"docs"},t=void 0,a={id:"commands-legacy/current-client-authentication",title:"Current client authentication",description:"Current client authentication {( dominio ; protocolo )} -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/current-client-authentication.md",sourceDirName:"commands-legacy",slug:"/commands/current-client-authentication",permalink:"/docs/es/commands/current-client-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-client-authentication.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"current-client-authentication",title:"Current client authentication",slug:"/commands/current-client-authentication",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Count screens",permalink:"/docs/es/commands/count-screens"},next:{title:"Current machine",permalink:"/docs/es/commands/current-machine"}},d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Nivel de seguridad de la autenticaci\xf3n",id:"nivel-de-seguridad-de-la-autenticaci\xf3n",level:5},{value:"Ejemplo",id:"ejemplo",level:4}];function l(e){const n={br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Current client authentication"})," {( ",(0,o.jsx)(n.em,{children:"dominio"})," ; ",(0,o.jsx)(n.em,{children:"protocolo"})," )} -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"dominio"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nombre del dominio"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"protocolo"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:'"Kerberos", "NTLM", o cadena vac\xeda'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nombre de usuario de sesi\xf3n devuelto por Windows"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"Current client authentication"})," pide al servidor Active Directory de Windows autenticar al cliente actual y si tiene \xe9xito, devuelve el nombre de inicio de sesi\xf3n de Windows para este cliente (identificador de sesi\xf3n). Si la autenticaci\xf3n falla, se devuelve una cadena vac\xeda."]}),"\n",(0,o.jsxs)(n.p,{children:["Este comando s\xf3lo se puede utilizar en el contexto de una implementaci\xf3n SSO en Windows con 4D Server. Para m\xe1s informaci\xf3n, por favor consulte la secci\xf3n ",(0,o.jsx)(n.em,{children:"Autenticaci\xf3n \xfanica (Single Sign On - SSO) en Windows"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Por lo general, el cliente y el servidor deben ser gestionados por el mismo Active Directory. Sin embargo, diferentes configuraciones pueden ser soportadas, como se describe en la secci\xf3n ",(0,o.jsx)(n.em,{children:"Configuraciones soportadas"}),"."]}),"\n",(0,o.jsx)(n.p,{children:'La cadena devuelta por el comando debe pasarse a su m\xf3dulo de identificaci\xf3n 4D para conceder los derechos de acceso al cliente en funci\xf3n de su identificador de sesi\xf3n de Windows; si define un "usuario por defecto", puede implementar una interfaz en donde el usuario no tenga que volver a introducir los ID (ver ejemplo).'}),"\n",(0,o.jsx)(n.p,{children:"Opcionalmente, el comando puede devolver dos par\xe1metros de texto:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"dominio"}),": nombre del dominio al que pertenece el cliente."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"protocolo"}),': nombre del protocolo utilizado por Windows para autenticar al usuario. Puede ser "Kerberos" o "NTLM", dependiendo de los recursos disponibles. Si la autenticaci\xf3n falla, se devuelve una cadena vac\xeda ("").']}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Estos par\xe1metros se pueden utilizar para aceptar o rechazar las conexiones si desea filtrar el acceso en relaci\xf3n con el dominio o el protocolo."}),"\n",(0,o.jsx)(n.h5,{id:"nivel-de-seguridad-de-la-autenticaci\xf3n",children:"Nivel de seguridad de la autenticaci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El nivel de seguridad de la autenticaci\xf3n (es decir, cu\xe1nto se puede confiar en el inicio de sesi\xf3n de usuario) depende de la forma en que el usuario se ha identificado. El valor devuelto en los par\xe1metros del comando ",(0,o.jsx)(n.strong,{children:"Current client authentication"})," permitir\xe1n conocer en qu\xe9 se basa el inicio de sesi\xf3n (si lo hay) y, por tanto, el nivel de seguridad:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Login"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"dominio"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"protocolo"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Comentarios"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vac\xedo"}),(0,o.jsx)(n.td,{children:"vac\xedo"}),(0,o.jsx)(n.td,{children:"vac\xedo"}),(0,o.jsx)(n.td,{children:"El comando no pudo obtener informaci\xf3n de autenticaci\xf3n sobre el usuario que ha iniciado sesi\xf3n"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lleno"}),(0,o.jsx)(n.td,{children:"vac\xedo"}),(0,o.jsx)(n.td,{children:"NTLM"}),(0,o.jsx)(n.td,{children:"El ID devuelto es la local, el cual ha sido definido en el equipo local"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lleno"}),(0,o.jsx)(n.td,{children:"lleno"}),(0,o.jsx)(n.td,{children:"NTLM"}),(0,o.jsxs)(n.td,{children:["El ID devuelto ha sido autenticado utilizando el protocolo NTLM en el dominio devuelto en el par\xe1metro ",(0,o.jsx)(n.em,{children:"dominio"}),". En este caso, debe seleccionar el dominio para aumentar el nivel de seguridad. Dado que algunas arquitecturas tienen un dominio forest, es necesario asegurarse de que el dominio en el que se ha autenticado el usuario sea el esperado."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lleno"}),(0,o.jsx)(n.td,{children:"lleno"}),(0,o.jsx)(n.td,{children:"Kerberos"}),(0,o.jsx)(n.td,{children:"El ID devuelto ha sido autenticado con el protocolo Kerberos en el dominio esperado. Esta configuraci\xf3n ofrece el m\xe1s alto nivel de seguridad."})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Para m\xe1s informaci\xf3n sobre los requerimientos, por favor consulte el p\xe1rrafo ."}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"Usted quiere configurar su aplicaci\xf3n para que los usuarios remotos 4D en Windows se conecten directamente a 4D Server (no se muestra ning\xfan cuadro de di\xe1logo de contrase\xf1a), estando conectado con sus derechos actuales. Para ello, es necesario:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Habilitar el control de acceso de su base mediante la adici\xf3n de una contrase\xf1a para el Dise\xf1ador."}),"\n",(0,o.jsxs)(n.li,{children:['En la p\xe1gina "Seguridad" del cuadro de di\xe1logo Propiedades de la base, designar a un usuario como el "usuario por defecto":',(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.img,{src:i(396820).A+"",width:"431",height:"31"}),(0,o.jsx)(n.br,{}),'\nCon esta configuraci\xf3n, no se muestra un di\xe1logo de contrase\xf1a para un 4D remoto que se conecta al servidor, todos los clientes se registran como "Bob".']}),"\n",(0,o.jsx)(n.li,{children:"En el m\xe9todo base On Server Open Connection, agregue el siguiente c\xf3digo para comprobar la autenticaci\xf3n de usuario del directorio  Active:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9todo base On Server Open Connection\n\xa0var $0;$1;$2;$3 : Integer\n\xa0$login:=Current client authentication($domain;$protocol)\n\xa0If($login #"")\xa0//un login fue devuelto\n\xa0\xa0\xa0\xa0CHANGE CURRENT USER($login;"")\xa0//define el usuario actual\n\xa0\xa0\xa0\xa0$0:=0\xa0//acceso aceptado\n\xa0Else\n\xa0\xa0\xa0\xa0$0:=-1\xa0//rechazar la conexi\xf3n\n\xa0End if\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," este escenario b\xe1sico requiere que los nombres de usuario 4D repliquen los nombres del directorio Active, para un mapeo autom\xe1tico. En una aplicaci\xf3n m\xe1s sofisticada, la informaci\xf3n devuelta por el comando se asigna a una tabla [usuarios] para crear o seleccionar los usuarios con base en la informaci\xf3n del directorio Active."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},396820:(e,n,i)=>{i.d(n,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAAfCAIAAADftNWXAAAFRUlEQVR42u3cTUgjVwAH8LelIlsPjV8HkbRu4sfizZSme5C24E7cricP4we0Eih0jYVttsVDqEWhdj0EqezBKPQQhEKzImsPyjZp2UNPjRAPW+z6lXXx4CFuHaG4WiXT92ZGM+ZjHLtLJjj/nyAz7yPzEpi/7+UlXhIEgQAAmN5rRg8AAKAgIA0BABikIQAAgzQEAGCQhgAAzOtGD8AwwWBwa2vr4ODA6IEAQP4UFxdXVVW53e7MqkuCKT9hE5iYeOPy5c7OzoqKCqPHAgD5s729HQqF9l688PT2plWZdG749/Pnn/b3WyyWvb09o8cCAPlTVlbW3d3t9/szq0z6vuHh4SF9Ufb3940eCADkFb3r6b1PEyCzyqRzQ0qUGD0KAMi3XDd+rrlhxGtJcQXiWo8ttz2jUVoHjdZptdqNX/ZFEcXwF2+qcePrYk5SW80WAFDocgWCxtzQORILe2xyHjksy9PCGJc9vPigO1fl2bHob1CuYgDpdZFfGvf9ne85ErlT2uFzeO3sOGsHuRcRMakEuHD0rJS5sdjIkmMuMsblSDxng93o53F+NNGSyaQUbtIZO7HVvUvIglKRtY/0O5mrHgAKn3jOlfJpttZ2Z3AuIh3HAy5lAe2NsMkdHyRRn0NZzaYW2F65tXqdm7kEVvoeN9Z26sLZCtjje70udqpvea2aN0sH6w9nFwjp+ahFLo/cKT92I7Ceart870ZaKQAUjPJs1A1yBcJ5d1EiXseD9pgQtrFDV8AeFqaJarXLjQnCmBxM/sBtTnMJTNue6nvWle/5GqeF8Mn0NG0kcc5DC6NLDTFBsNESPU9G9bpMdVVMSQc9P42yMCS/fVXZNUXPEqMt8cmb7w04v6xNjEotFv6q/yORIKxw4PMJbv6WQet8AMgmkUhUVlamlYg63t3Sn4bScji+tkSiQYfFJ5e529JbyRM+qf3Iq32K9gZnkHedZGf2kTjbW49T+az3MY+OjqRPnv/zLzvr+mH12w/Is2DH9a7Kx1//ev/KLAvHrvffoW3KrrmayMLU7M/fXGdtm1zXymhHqXDhz8e0/tU+UQB4Saurq3V1dSfHad8xKSkpydpLXxrGf3kQbeynOcMWn2lbJqpFLl268mRaoEFEj3p1PXIWNPbUl6ap19jGIs4TFjzS4jjKRmDXHIk+8p8LeaUsnbz14c2m7xYX1zbEK6pSZaNFlH6UfmKqEDsqAIVnZWWlvr6e/tZ/h+pJQ7omZYtUlju22kbiy7kGXl+OyhsqLD1JOyui0RZdXqcd6cPMBQnRMWGk14jyvYFWaRJI18c0/E4iz+YJx4irdy1OOM2R6NisFpXNEmU/RNoZefZofpFO/uzWZHNLJwmFVuJPk81vy6WdLc3JJAvcxflHTz/pIalC7KgAFKInT55kvT1z5aNGGrL9DWkd6hyJCce5wvaXXY7jBSqbnKl6cLdH/FKd0+1W5nc2T7/bwluCrHHm96S5NjfP0w6nJ3mnrsE+5yNVpdbgtDUdjU1rJPqo9pRDn10NyYUdkz9+bE0mrYNLk2Ljrdard1lhk+/hIM2936W2i3eV0o7JQYQhwEVh0v/aMDQ0NDw8vLGxYfRAACDfampqBgYGaAiklZv3m3lEmRsCADDmTUPtTx4BwEX1P943vMiKiop2dnaqq6s3NzeNHgsA5I/VaqX3Pk2AzCqTpmF5efnMzAzP87W1tUaPBQDyZ3d3l977NAEyq0y6i0KNj4/TPxFZ/80ZAFxUdFZYWlra19eXWWXeNAQAUDPp/74GAEiDNAQAYJCGAAAM0hAAgPkPEeUDGB8fQ34AAAAASUVORK5CYII="},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var o=i(296540);const r={},s=o.createContext(r);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);