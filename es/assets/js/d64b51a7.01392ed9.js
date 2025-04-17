"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94490"],{989656:function(e,a,i){i.r(a),i.d(a,{default:()=>u,frontMatter:()=>r,metadata:()=>d,assets:()=>c,toc:()=>l,contentTitle:()=>o});var d=JSON.parse('{"id":"Backup/backup","title":"Copia de seguridad","description":"Una copia de seguridad puede iniciarse de tres maneras:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Backup/backup.md","sourceDirName":"Backup","slug":"/Backup/backup","permalink":"/docs/es/20/Backup/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fbackup.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"backup","slug":"backup","title":"Copia de seguridad"},"sidebar":"docs","previous":{"title":"Copia de seguridad y restauraci\xf3n","permalink":"/docs/es/20/Backup/overview"},"next":{"title":"Par\xe1metros de la copia de seguridad","permalink":"/docs/es/20/Backup/settings"}}'),n=i("785893"),s=i("250065");let r={id:"backup",slug:"backup",title:"Copia de seguridad"},o=void 0,c={},l=[{value:"Copia de seguridad manual",id:"copia-de-seguridad-manual",level:2},{value:"Backup autom\xe1tico peri\xf3dico",id:"backup-autom\xe1tico-peri\xf3dico",level:2},{value:"Comando BACKUP",id:"comando-backup",level:2},{value:"C\xf3mo funciona la copia de seguridad",id:"c\xf3mo-funciona-la-copia-de-seguridad",level:2},{value:"Acceso a la aplicaci\xf3n durante la copia de seguridad",id:"acceso-a-la-aplicaci\xf3n-durante-la-copia-de-seguridad",level:3},{value:"Gesti\xf3n de los problemas de las copias de seguridad",id:"gesti\xf3n-de-los-problemas-de-las-copias-de-seguridad",level:3},{value:"Historial de copias de seguridad (Backup Journal)",id:"historial-de-copias-de-seguridad-backup-journal",level:2},{value:"Gesti\xf3n del tama\xf1o del historial de copias de seguridad",id:"gesti\xf3n-del-tama\xf1o-del-historial-de-copias-de-seguridad",level:4},{value:"backupHistory.json",id:"backuphistoryjson",level:2}];function t(e){let a={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Una copia de seguridad puede iniciarse de tres maneras:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Manualmente, utilizando el comando ",(0,n.jsx)(a.strong,{children:"Copia de seguridad..."})," del men\xfa 4D ",(0,n.jsx)(a.strong,{children:"Archivo"})," o el bot\xf3n ",(0,n.jsx)(a.strong,{children:"Copia de seguridad"})," del ",(0,n.jsx)(a.a,{href:"/docs/es/20/MSC/backup",children:"Centro de mantenimiento y seguridad"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"Autom\xe1ticamente, utilizando el programador que se puede definir en las Propiedades,"}),"\n",(0,n.jsxs)(a.li,{children:["Por programaci\xf3n, utilizando el comando ",(0,n.jsx)(a.code,{children:"BACKUP"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["4D Server: es posible iniciar una copia de seguridad manualmente desde una m\xe1quina remota mediante un m\xe9todo que llama al comando ",(0,n.jsx)(a.code,{children:"BACKUP"}),". El comando se ejecutar\xe1, en todos los casos, en el servidor."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"copia-de-seguridad-manual",children:"Copia de seguridad manual"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Seleccione el elemento ",(0,n.jsx)(a.strong,{children:"Copia de seguridad..."})," en el men\xfa ",(0,n.jsx)(a.strong,{children:"Archivo"})," de 4D. The backup window appears: ",(0,n.jsx)(a.img,{src:i(105439).Z+"",width:"564",height:"192"}),' You can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. Esta ubicaci\xf3n se define en la p\xe1gina ',(0,n.jsx)(a.strong,{children:"Copia de seguridad/configuraci\xf3n"})," de las Propiedades de la base."]}),"\n"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Tambi\xe9n puede abrir el ",(0,n.jsx)(a.a,{href:"/docs/es/20/MSC/overview",children:"Centro de mantenimiento y seguridad"})," de 4D y mostrar la ",(0,n.jsx)(a.a,{href:"/docs/es/20/MSC/backup",children:"p\xe1gina de copias de seguridad"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"El bot\xf3n **Propiedades de la base...**hace que se muestre la p\xe1gina Copia de seguridad/Configuraci\xf3n de las Propiedades de la estructura."}),"\n",(0,n.jsxs)(a.ol,{start:"2",children:["\n",(0,n.jsxs)(a.li,{children:["Haga clic en ",(0,n.jsx)(a.strong,{children:"Copia de seguridad"})," para iniciar la copia de seguridad utilizando los par\xe1metros actuales."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"backup-autom\xe1tico-peri\xf3dico",children:"Backup autom\xe1tico peri\xf3dico"}),"\n",(0,n.jsxs)(a.p,{children:["Las copias de seguridad programadas se inician autom\xe1ticamente. Se configuran en la p\xe1gina ",(0,n.jsx)(a.strong,{children:"Backup/Planificador"})," de las ** Propiedades**."]}),"\n",(0,n.jsxs)(a.p,{children:["Las copias de seguridad se realizan autom\xe1ticamente a las horas definidas en esta p\xe1gina sin ning\xfan tipo de intervenci\xf3n del usuario. Para m\xe1s informaci\xf3n sobre el uso de esta caja de di\xe1logo, consulte ",(0,n.jsx)(a.a,{href:"/docs/es/20/Backup/settings#scheduler",children:"Definir las copias de seguridad peri\xf3dicas"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"comando-backup",children:"Comando BACKUP"}),"\n",(0,n.jsxs)(a.p,{children:["Puede utilizar los m\xe9todos base ",(0,n.jsx)(a.code,{children:"On Backup Startup"})," and ",(0,n.jsx)(a.code,{children:"On Backup Shutdown"})," para controlar el proceso de copia de seguridad (consulte el manual ",(0,n.jsx)(a.em,{children:"Lenguaje de 4D"}),"). Puede utilizar el m\xe9todo base ",(0,n.jsx)(a.code,{children:"On Backup Startup"})," y ",(0,n.jsx)(a.code,{children:"On Backup Shutdown"}),", para controlar el proceso de backup (ver el manual ",(0,n.jsx)(a.em,{children:"Lenguaje de 4D"}),")."]}),"\n",(0,n.jsx)(a.h2,{id:"c\xf3mo-funciona-la-copia-de-seguridad",children:"C\xf3mo funciona la copia de seguridad"}),"\n",(0,n.jsx)(a.p,{children:"Una vez iniciada la copia de seguridad, 4D muestra una caja de di\xe1logo con un term\xf3metro que indica el progreso de la copia de seguridad:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:i(941110).Z+"",width:"408",height:"168"})}),"\n",(0,n.jsxs)(a.p,{children:["Este term\xf3metro tambi\xe9n se muestra en la p\xe1gina ",(0,n.jsx)(a.a,{href:"/docs/es/20/MSC/backup",children:"Backup del CSM"})," si ha utilizado esta caja de di\xe1logo."]}),"\n",(0,n.jsxs)(a.p,{children:["El bot\xf3n ",(0,n.jsx)(a.strong,{children:"Parar"})," permite al usuario interrumpir la copia de seguridad en cualquier momento (consulte ",(0,n.jsx)(a.a,{href:"/docs/es/20/Backup/backup#handling-backup-issues",children:"Manejar los problemas de la copia de seguridad"})," m\xe1s adelante)."]}),"\n",(0,n.jsxs)(a.p,{children:["El estado de la \xfaltima copia de seguridad (correcta o fallida) se almacena en el \xe1rea de informaci\xf3n de la ",(0,n.jsx)(a.a,{href:"/docs/es/20/MSC/backup",children:"p\xe1gina de copias de seguridad en el CSM"})," o en la ",(0,n.jsx)(a.strong,{children:"p\xe1gina de mantenimiento"})," de 4D Server. Tambi\xe9n se registra en la base ",(0,n.jsx)(a.strong,{children:"Backup journal.txt"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"acceso-a-la-aplicaci\xf3n-durante-la-copia-de-seguridad",children:"Acceso a la aplicaci\xf3n durante la copia de seguridad"}),"\n",(0,n.jsx)(a.p,{children:"4D bloquea los procesos relacionados con los tipos de archivos incluidos en la copia de seguridad: si s\xf3lo se hace una copia de seguridad de los archivos del proyecto, no se podr\xe1 acceder a la estructura pero s\xed a los datos. 4D bloquea todos los procesos relacionados con los tipos de archivos incluidos en la copia de seguridad: si s\xf3lo se est\xe1n copiando los archivos del proyecto, no se podr\xe1 acceder a la estructura pero s\xed a los datos."}),"\n",(0,n.jsx)(a.p,{children:"Por el contrario, si s\xf3lo se hace una copia de seguridad del archivo de datos, se sigue permitiendo el acceso a la estructura. En este caso, las posibilidades de acceso a la aplicaci\xf3n son las siguientes:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Con 4D versi\xf3n monopuesto, la aplicaci\xf3n est\xe1 bloqueada tanto para lectura como para escritura; todos los procesos est\xe1n congelados. No se puede realizar ninguna acci\xf3n."}),"\n",(0,n.jsxs)(a.li,{children:["Con 4D Server, la aplicaci\xb4n s\xf3lo est\xe1 bloqueada en escritura; las m\xe1quinas cliente pueden ver los datos. Si una m\xe1quina cliente env\xeda una petici\xf3n de adici\xf3n, eliminaci\xf3n o cambio al servidor, aparece una ventana que pide al usuario que espere hasta el final de la copia de seguridad. Una vez guardada la aplicaci\xf3n, la ventana desaparece y se realiza la acci\xf3n. Para cancelar la petici\xf3n en proceso y no esperar a que finalice la copia de seguridad, basta con hacer clic en el bot\xf3n ",(0,n.jsx)(a.strong,{children:"Cancelar la operaci\xf3n"}),". Sin embargo, si la acci\xf3n que espera ser ejecutada proviene de un m\xe9todo lanzado antes de la copia de seguridad, no debe cancelarla porque s\xf3lo se cancelan las operaciones que quedan por realizar. Adem\xe1s, un m\xe9todo parcialmente ejecutado puede causar inconsistencias l\xf3gicas en los datos."]}),"\n"]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["Cuando la acci\xf3n que espera ser ejecutada proviene de un m\xe9todo y el usuario hace clic en el bot\xf3n ",(0,n.jsx)(a.strong,{children:"Cancelar operaci\xf3n"}),", 4D Server devuelve el error -9976 (Este comando no puede ejecutarse porque la copia de seguridad de la base est\xe1 en progreso)."]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"gesti\xf3n-de-los-problemas-de-las-copias-de-seguridad",children:"Gesti\xf3n de los problemas de las copias de seguridad"}),"\n",(0,n.jsx)(a.p,{children:"Puede ocurrir que una copia de seguridad no se ejecute correctamente. Puede haber varias causas de fallo en la copia de seguridad: interrupci\xf3n del usuario, archivo adjunto no encontrado, problemas en el disco de destino, transacci\xf3n incompleta, etc. 4D procesa la incidencia seg\xfan la causa."}),"\n",(0,n.jsxs)(a.p,{children:["En todos los casos, tenga en cuenta que el estado de la \xfaltima copia de seguridad (correcta o fallida) se almacena en el \xe1rea de informaci\xf3n de la ",(0,n.jsx)(a.a,{href:"/docs/es/20/MSC/backup",children:"p\xe1gina de copias de seguridad en el CSM"})," o en la ",(0,n.jsx)(a.strong,{children:"p\xe1gina de mantenimiento"})," de 4D Server, as\xed como en el ",(0,n.jsx)(a.strong,{children:"Backup journal.txt"}),"."]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Interrupci\xf3n del usuario"}),": el bot\xf3n ",(0,n.jsx)(a.strong,{children:"Parar"})," de la caja de di\xe1logo de progreso permite a los usuarios interrumpir la copia de seguridad en cualquier momento. En este caso, la copia de elementos se detiene y se genera el error 1406. Puedes interceptar este error en el m\xe9todo base ",(0,n.jsx)(a.code,{children:"On Backup Shutdown"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Archivo adjunto no encontrado"}),": cuando no se encuentra un archivo adjunto, 4D realiza una copia de seguridad parcial (copia de seguridad de los archivos de la aplicaci\xf3n y de los archivos adjuntos accesibles) y devuelve un error."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Backup impossible"})," (disk is full or write-protected, missing disk, disk failure, incomplete transaction, application not launched at time of scheduled automatic backup, etc.): If this is a first-time error, 4D will then make a second attempt to perform the backup. La espera entre los dos intentos se define en la p\xe1gina ",(0,n.jsx)(a.strong,{children:"Backup/Backup y Restauraci\xf3n"})," de las Propiedades. Si el segundo intento falla, se muestra una caja de di\xe1logo de alerta del sistema y se genera un error. Puedes interceptar este error en el m\xe9todo base ",(0,n.jsx)(a.code,{children:"On Backup Shutdown"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"historial-de-copias-de-seguridad-backup-journal",children:"Historial de copias de seguridad (Backup Journal)"}),"\n",(0,n.jsx)(a.p,{children:"Para facilitar el seguimiento y la verificaci\xf3n de las copias de seguridad, el m\xf3dulo de copia de seguridad escribe un resumen de cada operaci\xf3n realizada en un archivo especial, que es similar a un diario de actividades. Al igual que un manual de a bordo, todas las operaciones de la base de datos (copias de seguridad, restauraciones, integraciones de archivos de registro) se registran en este archivo, tanto si se han programado como si se han realizado manualmente. La fecha y la hora en que se produjeron estas operaciones tambi\xe9n se anotan en el diario."}),"\n",(0,n.jsx)(a.p,{children:'El historial de copia de seguridad se llama "Backup Journal[001].txt" y se coloca en la carpeta "Logs" del proyecto. El historial de copias de seguridad puede abrirse con cualquier editor de texto.'}),"\n",(0,n.jsx)(a.h4,{id:"gesti\xf3n-del-tama\xf1o-del-historial-de-copias-de-seguridad",children:"Gesti\xf3n del tama\xf1o del historial de copias de seguridad"}),"\n",(0,n.jsx)(a.p,{children:"En determinadas estrategias de copia de seguridad (por ejemplo, en el caso de que se realicen copias de seguridad de numerosos archivos adjuntos), el historial de copias de seguridad puede alcanzar r\xe1pidamente un gran tama\xf1o. Se pueden utilizar dos mecanismos para controlar este tama\xf1o:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Copia de seguridad autom\xe1tica"}),': antes de cada copia de seguridad, la aplicaci\xf3n examina el tama\xf1o del archivo historial de copia de seguridad actual. Si es superior a 10 MB, se archiva el archivo actual y se crea un nuevo archivo con el n\xfamero [xxx] incrementado, por ejemplo "Backup Journal[002].txt\u201D. Una vez alcanzado el n\xfamero de archivo 999, la numeraci\xf3n vuelve a empezar por el 1 y los archivos existentes ser\xe1n sustituidos.']}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Posibilidad de reducir la cantidad de informaci\xf3n registrada"}),": para ello, basta con modificar el valor de la llave ",(0,n.jsx)(a.code,{children:"VerboseMode"})," en el archivo ",(0,n.jsx)(a.em,{children:"Backup.4DSettings"})," del proyecto. Por defecto, esta llave est\xe1 definida como True. Si cambia el valor de esta llave a False, s\xf3lo se almacenar\xe1 en el diario de copias de seguridad la informaci\xf3n principal: fecha y hora de inicio de la operaci\xf3n y los errores encontrados. Las llaves XML relativas a la configuraci\xf3n de la copia de seguridad se describen en el manual ",(0,n.jsx)(a.em,{children:"Backup de las llaves XML 4D"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"backuphistoryjson",children:"backupHistory.json"}),"\n",(0,n.jsxs)(a.p,{children:["Toda la informaci\xf3n relativa a las \xfaltimas operaciones de copia de seguridad y restauraci\xf3n se almacena en el archivo ",(0,n.jsx)(a.strong,{children:"backupHistory.json"}),' de la aplicaci\xf3n. Registra la ruta de cada archivo guardado (incluidos los adjuntos), as\xed como el n\xfamero, la fecha, la hora, la duraci\xf3n y el estado de cada operaci\xf3n. Para limitar el tama\xf1o del archivo, el n\xfamero de operaciones registradas es el mismo que el n\xfamero de copias de seguridad disponibles ("Conservar s\xf3lo los \xfaltimos X archivos de copia de seguridad") definido en las propiedades de la copia de seguridad.']}),"\n",(0,n.jsxs)(a.p,{children:["El archivo ",(0,n.jsx)(a.strong,{children:"backupHistory.json"})," se crea en la carpeta de destino de la copia de seguridad actual. Puede obtener la ruta real de este archivo utilizando la siguiente declaraci\xf3n:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-4d",children:"$backupHistory:=Get 4D file(Backup history file)\n"})}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Atenci\xf3n"}),(0,n.jsx)(a.br,{}),"\nLa eliminaci\xf3n o el desplazamiento del archivo ",(0,n.jsx)(a.strong,{children:"backupHistory.json"})," har\xe1 que se reinicie el siguiente n\xfamero de copia de seguridad.\nEl archivo ",(0,n.jsx)(a.strong,{children:"backupHistory.json"})," est\xe1 formateado para ser utilizado por la aplicaci\xf3n 4D. Si lo que busca es un informe legible en las operaciones de copia de seguridad, quiz\xe1 le resulte m\xe1s preciso el diario de copias de seguridad."]}),"\n"]})]})}function u(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},105439:function(e,a,i){i.d(a,{Z:function(){return d}});let d="data:image/png;base64,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"},941110:function(e,a,i){i.d(a,{Z:function(){return d}});let d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAACoCAIAAABSVG8bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAActSURBVHhe7dhfit32GcdhX2UnXYFhduEN+Gp2Mpfehu9NoQsoFCeElFLchLRJCfmD45ASGtKGbqCvpJ+O9HuPhiTW+Ghe+3n4QnU0kmYazvlwkgePAIobQvbDj/8zMyu6JWR/evGlmVm5CZmZlZ+QmVn5dSF7/revzMzKTcjMrPy6kL3/8ddmZuUmZGZWfl3IPvjkGzOzchMyMyu/LmQffvrSzKzcupB99I9XZmblJmRmVn5dyP782XdmZuUmZGZWfl3I/vLP783Myq0L2V+/+JeZWbkJmZmVXxeyF1/+YGZWbkJmZuXXhezjr/9tZlZuXcg++eZHM7NyEzIzK78uZJ++/MnMrNyEzMzKrwvZ37/9j5lZuQmZmZVfF7LPXv1sZlZuXcg+f/WzmVm5CZmZld8vhOy/APdMylRMyIBiUqZiQgYUkzIVEzKgmJSpmJABxaRMxYQMKCZlKiZkQDEpUzEhA4pJmYoJGVBMylRMyIBiUqZiQgYUkzIVEzKgmJSpmJABxaRMxYQMKCZlKiZkQDEpUzEhA4pJmYoJGVBMylTskJA9u36wuH7Wzv4KcePVkxftxWt68eRq/0OA46RMxY4K2ZySISu/PmV3ETKguJSp2NEh+21tEjLgHoYsDucvZHHYLF/Rhi9sq3OnG8drh1OrR3U/vXryrN16Vr7+siftt25flh8ynLy+jnPjn7P8dRt/8vjo5Rdt3TXdlF7nHwNJylTsqJCdnH9ax4IMn//hI933ZfrRcH6+7XTx+nh8/m3PSJdNDxoO01+y+ZDh5Py41T39BdPJ4dz2XcvhcBQn1r85vQTOpEzFjv5Gtg7N8HmfjGeGH53H5eqqK9PqUcvx+uTwon/K5mXdLaPNh6xO9n9euyBOdjdNL9JdK3HPeGa5Kb0EzqRMxY4O2akH8/8uMVjOnMSNY8mW0+tHbYVj4ymbl62PJ5sPWZ3sHxw/GF7Mf/t8bnpx610nw+nVd8L0ElhLmYrdm29kp3OnM6ujWbtoOwxxtp1ejtY/n53uXj2mO55sPiTdMj+6u6AdDee2f1H+TZO4fn1+fnm69/wA3lEpU7GjQnZy+kyOH/zhxPX18olerhzrcPoM95VoV1yvP+rjf1wfT0+tWZwecjpIx5PNh/SXzX9yl6a4pJ3q/mP/1l3jc+frl/+LzfQ7T/eeH8A7KmUqdkjI3rQ7+ajvfsgQrLOKArulTMWE7DZ7HxL3++YEb0LKVEzIbvN6D0n/3gjcvZSp2FsZMuBtljIVEzKgmJSpmJABxaRMxYQMKCZlKiZkQDEpUzEhA4pJmYoJGVBMylRMyIBiUqZiQgYUkzIVEzKgmJSpmJABxaRMxYQMKCZlKiZkQDEpUzEhA4pJmYoJGVBMylRMyIBiUqZiQgYUkzIVOyBkfwTeSS0Bu6VMxY4J2Xt/+J1dbN/DPSBktmvtfQSHEjLbtfY+gkMJme1aex/BoYTMdq29j+BQQma71t5HcCghs11r7yM4lJDZrrX3ERxKyGzX2vsIDiVktmvtfQSHEjLbtfY+gkMJme1aex/BoYTMdq29j+BQQma71t5HcCghs11r7yM4lJDZrrX3ERxKyGzX2vsIDiVktmvtfQSHEjLbtfY+gkO9hSED3kEtAbulTMUOCBnAHilTMSEDikmZigkZUEzKVEzIgGJSpmJCBhSTMhUTMqCYlKmYkAHFpEzFhAwoJmUqJmRAMSlTMSEDikmZigkZUEzKVEzIgGJSpmJCBhSTMhUTMqCYlKmYkAHFpEzFhAwoJmUqJmRAMSlTMSEDikmZigkZUEzKVEzIgGJSpmJCBhSTMhUTMrhLv+cW7R/QXUiZigkZ3KX4xL7kjJBBJUK2ScigEiHbJGRQiZBtEjKo5KIhe/r4QfP4aTt1TwkZVHK5kD2/eXjq1/Obm+Eowvbw5vl06n4RMqjkciHbqJaQCRnchcuFbPwXy1W3ln/PbF/Uhq9szfzNbSzd03b+ks0TMqjkgiELrVVdp1qdhq6188NV0/kxdtPhcvIShAwquWzIRmPNxmatQjacnPs2/iBfsJy8BCGDSg4I2VKt3xSy/oo3TMigksuF7OnNOkljn9adiuO5U0uyhpPtiot2TMiglAt+Ixuq1MxFaqeml0OqJuu6PXz8uJ2+XMaEDGq5YMhewxCyOWoXJWRQiZBtEjKoRMg2CRlUcr9Ddhghg0qEbJOQQSXxiWVT+wd0F1KmYkIGFJMyFRMyoJiUqZiQAcWkTMWEDCgmZSomZEAxKVMxIQOKSZmKCRlQTMpUTMiAYlKmYkIGFJMyFRMyoJiUqZiQAcWkTMWEDCgmZSomZEAxKVMxIQOKSZmKCRlQTMpUTMiAYlKmYkIGFJMyFRMyoJiUqZiQAcWkTMWEDCgmZSomZEAxKVOxXwiZmdn9n5CZWfkJmZmVn5CZWfkJmZmVn5CZWfl1ITMzK7oWMoDCHj36P+ZK+ltLrhJrAAAAAElFTkSuQmCC"},250065:function(e,a,i){i.d(a,{Z:function(){return o},a:function(){return r}});var d=i(667294);let n={},s=d.createContext(n);function r(e){let a=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),d.createElement(s.Provider,{value:a},e.children)}}}]);