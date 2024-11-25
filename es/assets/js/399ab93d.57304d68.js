"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1064"],{646023:function(a,e,o){o.r(e),o.d(e,{metadata:()=>n,contentTitle:()=>r,default:()=>p,assets:()=>t,toc:()=>l,frontMatter:()=>s});var n=JSON.parse('{"id":"MSC/compact","title":"P\xe1gina compactado","description":"Esta p\xe1gina permite acceder a las funciones de compactaci\xf3n del archivos de datos.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/MSC/compact.md","sourceDirName":"MSC","slug":"/MSC/compact","permalink":"/docs/es/19/MSC/compact","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fcompact.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"compact","title":"P\xe1gina compactado","sidebar_label":"P\xe1gina compactado"},"sidebar":"docs","previous":{"title":"P\xe1gina de respaldo","permalink":"/docs/es/19/MSC/backup"},"next":{"title":"P\xe1gina Retroceso","permalink":"/docs/es/19/MSC/rollback"}}'),i=o("785893"),c=o("250065");let s={id:"compact",title:"P\xe1gina compactado",sidebar_label:"P\xe1gina compactado"},r=void 0,t={},l=[{value:"\xbfPor qu\xe9 compactar los archivos?",id:"por-qu\xe9-compactar-los-archivos",level:2},{value:"Compactaci\xf3n est\xe1ndar",id:"compactaci\xf3n-est\xe1ndar",level:2},{value:"Abrir archivo de historial",id:"abrir-archivo-de-historial",level:2},{value:"Modo avanzado",id:"modo-avanzado",level:2},{value:"Compactar los registros y los \xedndices",id:"compactar-los-registros-y-los-\xedndices",level:3},{value:"Forzar la actualizaci\xf3n de los registros",id:"forzar-la-actualizaci\xf3n-de-los-registros",level:3},{value:"Compactar la tabla de direcciones",id:"compactar-la-tabla-de-direcciones",level:3}];function d(a){let e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...a.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Esta p\xe1gina permite acceder a las funciones de compactaci\xf3n del archivos de datos."}),"\n",(0,i.jsx)(e.h2,{id:"por-qu\xe9-compactar-los-archivos",children:"\xbfPor qu\xe9 compactar los archivos?"}),"\n",(0,i.jsx)(e.p,{children:"La compactaci\xf3n de archivos responde a dos tipos de necesidades:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Reducci\xf3n del tama\xf1o y optimizaci\xf3n de los archivos"}),': los archivos pueden contener espacios no utilizados ("huecos"). De hecho, cuando se eliminan los registros, el espacio que ocupaban anteriormente en el archivo queda vac\xedo. 4D reutiliza estos espacios vac\xedos siempre que es posible, pero como el tama\xf1o de los datos es variable, las sucesivas eliminaciones o modificaciones generar\xe1n inevitablemente espacio inutilizable para el programa. Lo mismo ocurre cuando se acaba de borrar una gran cantidad de datos: los espacios vac\xedos quedan sin asignar en el archivo. La relaci\xf3n entre el tama\xf1o del archivo de datos y el espacio realmente utilizado para los datos es la tasa de ocupaci\xf3n de los datos. Una tasa demasiado baja puede provocar, adem\xe1s de un desperdicio de espacio, el deterioro del rendimiento de la base. La compactaci\xf3n puede utilizarse para reorganizar y optimizar el almacenamiento de los datos con el fin de eliminar los "huecos". El \xe1rea "Informaci\xf3n" resume los datos relativos a la fragmentaci\xf3n de los archivos y sugiere las operaciones a realizar. La pesta\xf1a ',(0,i.jsx)(e.a,{href:"/docs/es/19/MSC/information#data",children:"Datos"}),' de la p\xe1gina "Informaci\xf3n" del CSM indica la fragmentaci\xf3n del archivo de datos actual.']}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Actualizaci\xf3n completa de los datos"})," aplicando el formato actual definido en el archivo de estructura. Esto es \xfatil cuando los datos de una misma tabla se almacenan en diferentes formatos, por ejemplo, despu\xe9s de un cambio en la estructura de la base."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["La compactaci\xf3n s\xf3lo est\xe1 disponible en el modo mantenimiento. Si intenta realizar esta operaci\xf3n en modo est\xe1ndar, una caja de di\xe1logo de advertencia le informar\xe1 que la aplicaci\xf3n se cerrar\xe1 y se reiniciar\xe1 en modo mantenimiento. Puede compactar un archivo de datos que no est\xe9 abierto por la aplicaci\xf3n (ver ",(0,i.jsx)(e.a,{href:"#compact-records-and-indexes",children:"Compactar los registros y los \xedndices"})," abajo)."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"compactaci\xf3n-est\xe1ndar",children:"Compactaci\xf3n est\xe1ndar"}),"\n",(0,i.jsx)(e.p,{children:"Para iniciar directamente la compactaci\xf3n del archivo de datos, haga clic en el bot\xf3n de compactaci\xf3n de la ventana del CSM."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:o(257176).Z+"",width:"158",height:"88"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Como la compactaci\xf3n implica la duplicaci\xf3n del archivo original, el bot\xf3n se desactiva cuando no hay espacio suficiente en el disco que contiene el archivo."}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Esta operaci\xf3n compacta el archivo principal y los archivos de \xedndice. 4D copia los archivos originales y los coloca en una carpeta llamada ",(0,i.jsx)(e.strong,{children:"Archivos Reemplazados (Compactando)"}),', que se crea junto al archivo original. Si ha realizado varias operaciones de compactaci\xf3n, se crea una nueva carpeta cada vez. Se llamar\xe1 "Archivos reemplazados (compactando)_1", "Archivos reemplazados (compactando)_2", y as\xed sucesivamente. Puede modificar la carpeta donde se guardan los archivos originales utilizando el modo avanzado.']}),"\n",(0,i.jsx)(e.p,{children:"Una vez finalizada la operaci\xf3n, los archivos compactados sustituyen autom\xe1ticamente a los originales. La aplicaci\xf3n es inmediatamente operacional sin ninguna otra manipulaci\xf3n."}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Cuando la base est\xe1 encriptada, la compactaci\xf3n incluye pasos de encriptaci\xf3n y desencriptaci\xf3n y, por tanto, requiere la llave de encriptaci\xf3n de datos actual. Si no se ha suministrado una llave de datos v\xe1lida, aparecer\xe1 una caja de di\xe1logo solicitando la frase secreta o la llave de datos."}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Atenci\xf3n:"})," cada operaci\xf3n de compactaci\xf3n implica la duplicaci\xf3n del archivo original, lo que aumenta el tama\xf1o de la carpeta de la aplicaci\xf3n. Es importante tener esto en cuenta (especialmente en macOS, donde las aplicaciones 4D aparecen como paquetes) para que el tama\xf1o de la aplicaci\xf3n no aumente excesivamente. Eliminar manualmente las copias del archivo original dentro del paquete puede ser \xfatil para mantener el tama\xf1o del paquete."]}),"\n",(0,i.jsx)(e.h2,{id:"abrir-archivo-de-historial",children:"Abrir archivo de historial"}),"\n",(0,i.jsxs)(e.p,{children:["Una vez finalizada la compactaci\xf3n, 4D genera un archivo de historial en la carpeta Logs del proyecto. Este archivo permite ver todas las operaciones realizadas. Se crea en formato XML y se llama:  ",(0,i.jsx)(e.em,{children:"ApplicationName**_Compact_Log_yyyy-mm-dd hh-mm-ss.xml"}),'" donde:']}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"ApplicationName"}),' es el nombre del archivo del proyecto sin ninguna extensi\xf3n, por ejemplo "Facturas",']}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"yyyy-mm-dd hh-mm-ss"}),' es la marca de tiempo del archivo, basada en la hora del sistema local cuando se inici\xf3 la operaci\xf3n de mantenimiento, por ejemplo "2019-02-11 15-20-45".']}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Al presionar el bot\xf3n ",(0,i.jsx)(e.strong,{children:"Abrir archivo de historial"}),", 4D muestra el archivo de historial m\xe1s reciente en el navegador por defecto de la m\xe1quina."]}),"\n",(0,i.jsx)(e.h2,{id:"modo-avanzado",children:"Modo avanzado"}),"\n",(0,i.jsxs)(e.p,{children:["La p\xe1gina Compactar contiene un bot\xf3n ",(0,i.jsx)(e.strong,{children:"Avanzado>"}),", con el que se puede acceder a una p\xe1gina de opciones para compactar el archivo de datos."]}),"\n",(0,i.jsx)(e.h3,{id:"compactar-los-registros-y-los-\xedndices",children:"Compactar los registros y los \xedndices"}),"\n",(0,i.jsxs)(e.p,{children:["El \xe1rea ",(0,i.jsx)(e.strong,{children:"Compactar los registros y los \xedndices"})," muestra el nombre de la ruta del archivo de datos actual, as\xed como un bot\xf3n ",(0,i.jsx)(e.strong,{children:"[...]"})," que puede utilizarse para especificar otro archivo de datos. Al hacer clic en este bot\xf3n, se muestra una caja de di\xe1logo est\xe1ndar de \xe1pertura de documentos para que pueda designar el archivo de datos a compactar. Debe seleccionar un archivo de datos que sea compatible con el archivo de estructura abierto. Una vez validada esta caja de di\xe1logo, se indica en la ventana el nombre de la ruta del archivo a compactar."]}),"\n",(0,i.jsxs)(e.p,{children:["El segundo bot\xf3n ",(0,i.jsx)(e.strong,{children:"[...]"})," se puede utilizar para especificar otra ubicaci\xf3n para guardar los archivos originales antes de la operaci\xf3n de compactaci\xf3n. Esta opci\xf3n se puede utilizar m\xe1s particularmente cuando se compactan archivos voluminosos mientras se utilizan diferentes discos."]}),"\n",(0,i.jsx)(e.h3,{id:"forzar-la-actualizaci\xf3n-de-los-registros",children:"Forzar la actualizaci\xf3n de los registros"}),"\n",(0,i.jsx)(e.p,{children:"Cuando esta opci\xf3n est\xe1 marcada, 4D reescribe cada registro de cada tabla durante la operaci\xf3n de compactaci\xf3n, seg\xfan su descripci\xf3n en la estructura. Si esta opci\xf3n no est\xe1 marcada, 4D s\xf3lo reorganiza el almacenamiento de datos en el disco. Esta opci\xf3n es \xfatil en los siguientes casos:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Cuando los tipos de campo se modifican en la estructura de la aplicaci\xf3n despu\xe9s de haber introducido los datos. Por ejemplo, puede haber cambiado un campo Longint a un tipo Real. 4D permite incluso cambios entre dos tipos muy diferentes (con riesgo de p\xe9rdida de datos), por ejemplo, un campo Real puede cambiarse a Texto y viceversa. En este caso, 4D no convierte los datos ya introducidos de forma retroactiva; los datos se convierten s\xf3lo cuando se cargan los registros y luego se guardan. Esta opci\xf3n obliga a convertir todos los datos."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Cuando una opci\xf3n de almacenamiento externo para datos de Texto, Imagen o BLOB ha sido cambiada despu\xe9s de haber introducido los datos. Esto puede ocurrir cuando se convierten las bases de datos desde una versi\xf3n anterior a la v13. Como en el caso de la reescritura descrita anteriormente, 4D no convierte los datos ya introducidos con car\xe1cter retroactivo. Para ello, puede forzar la actualizaci\xf3n de los registros para aplicar el nuevo modo de almacenamiento a los registros ya introducidos."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Cuando se han eliminado las tablas o los campos. En este caso, la compactaci\xf3n con actualizaci\xf3n de registros recupera el espacio de estos datos eliminados y reduce as\xed el tama\xf1o del archivo."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Todos los \xedndices se actualizan cuando se selecciona esta opci\xf3n."}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"compactar-la-tabla-de-direcciones",children:"Compactar la tabla de direcciones"}),"\n",(0,i.jsx)(e.p,{children:"(opci\xf3n activa \xfanicamente cuando la opci\xf3n anterior est\xe1 marcada)"}),"\n",(0,i.jsx)(e.p,{children:"Esta opci\xf3n reconstruye completamente la tabla de direcciones para los registros durante la compactaci\xf3n. Esto optimiza el tama\xf1o de la tabla de direcciones y se utiliza principalmente para las bases de datos en las que se crearon grandes vol\xfamenes de datos y luego se borraron. En otros casos, la optimizaci\xf3n no es un factor decisivo."}),"\n",(0,i.jsxs)(e.p,{children:["Tenga en cuenta que esta opci\xf3n ralentiza sustancialmente la compactaci\xf3n e invalida cualquier conjunto guardado mediante el comando ",(0,i.jsx)(e.code,{children:"SAVE SET"}),". Adem\xe1s, recomendamos especialmente que se borren los conjuntos guardados en este caso, ya que su uso puede dar lugar a selecciones de datos incorrectas."]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"La compactaci\xf3n tiene en cuenta los registros de las tablas que se han puesto en la Papelera. Si hay un gran n\xfamero de registros en la Papelera, esto puede ser un factor adicional que puede ralentizar la operaci\xf3n."}),"\n",(0,i.jsx)(e.li,{children:"El uso de esta opci\xf3n hace que la tabla de direcciones, y por tanto la base de datos, sea incompatible con el archivo de diario actual (si existe). Se guardar\xe1 autom\xe1ticamente y habr\xe1 que crear un nuevo archivo de historial la pr\xf3xima vez que se inicie la aplicaci\xf3n."}),"\n",(0,i.jsxs)(e.li,{children:["Puede decidir si la tabla de direcciones necesita ser compactada comparando el n\xfamero total de registros y el tama\xf1o de la tabla de direcciones en la p\xe1gina ",(0,i.jsx)(e.a,{href:"/docs/es/19/MSC/information",children:"Informaci\xf3n"})," del CSM."]}),"\n",(0,i.jsxs)(e.li,{children:["El comando ",(0,i.jsx)(e.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1051.html",children:(0,i.jsx)(e.code,{children:"TRUNCATE TABLE"})})," restablece autom\xe1ticamente la tabla de direcciones para la tabla especificada."]}),"\n"]}),"\n"]})]})}function p(a={}){let{wrapper:e}={...(0,c.a)(),...a.components};return e?(0,i.jsx)(e,{...a,children:(0,i.jsx)(d,{...a})}):d(a)}},257176:function(a,e,o){o.d(e,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABYCAIAAACLVtmFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAS+SURBVHhe7ZrLSitbEIbP2x40UdRgFBGNg4iKiCByQPE2EiLqSCcOoqIEnIjXiIrJeQOfwHN+U3+ys3vbScftbrsq9Q2aXrUuheuje61l+q9dxyjvav91zOFqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqzeJqf3B2dra+vp7L5TKZTG9vL664RwRxtlCFq33n5ORkcnLy73BQizZsrYRuV1utVtfW1sRfNpvd2to6Pz+/v7+vVCq44h4RxKUBWqI9eyaerlYLT/Pz83CWSqUKhcLLy4vEt7e3EcRVioijFm0QRHstdrtarTyvQ0NDpVKJoRoBtQLaoCXi6MVQsuletVg74QnPYrPXy8vLhYWFjY0NVOGKe0RYV7Mrz66Kdbd71cq+CW9almtMT08jiO1x44oI62qgPYLoy3KC6VK1OM/AEPZHjfVVuL29HR0dRZWAe0RYVwPtZVeV/BNRl6rFaRV6sPtluQm4HBkZEa83NzeMNoFeqMUILCeVLlWby+WgB2cbln/m+voa7+HA89oAvdAXI7CcVOyoxV/xT2RkN4STKzt3AnqhbyaTYTmp2FELYa+vr/9FQ9RWKhV2roPgr7CuDnohiE0Wy0nFlFp6i4Bshfyp1UFHauWQE7bWYvfka22C6Ejtzs4O9PgOWQcBtSi24OnpCXr8XKsDCKPVaOTzeRjy/0YpoFO15XIZkvx/yAoIqH1/7bZjfHwcntLpdLNd4L/8JAuootXIvL29LS8vwxaeRbxpG+tuQC3iqJXn1X+v/QY+oRbAriyfAPsj7H5xtsHJ1b+ySAqY8YDa9xduZObm5mRXFYZ/G/Vt7O3twRCtfhaciHDexZYY715sj/2Lxu8HR8/+/v7fV9sAQ2HAsP9GacGCWrxO8c4MqEUxOuxTBxEMiGGZQCfq1R4eHtZWw6Da30HUAgzONArRrfbh4WFwcFA0/Am1GBwpmEwbutUuLS2JA9x8rdrmkZlMG4rVFotFmX1seXAG/Vq1GBDDyvhIxJSq0KoWB5Xh4WGZ+v39fUa/FAwr4yMR0jGqB61qV1dXZd6npqaq1WqhUMCj9oVgQAyLwSUL0jGxHlSqLZVKPT09mHFcLy4uGP0DYPBGosBPCMlHpVr5CuJDUqnUzMwMH70OmZ2dFZEfks1mmV4JKtVyskPo6+u7urpi08g8Pj5mMhkOEQKbKsGgWoDzKJ/EyIyNjbFzOEyvBN1qWa6DpVG+egGbm5uMRuD09FR6gaOjI0brsMLVxgBn+qO5lk8VAVbNg4MDRltyd3fX+NRtcXGR0SakCrCsBGtqgfxa8AkGBgbK5TJHaYLVrjYGONMhcw09ExMTbBEZbL6Oj485xM+whauNAc50+Fw/Pz+vrKxE2RmBdDqdz+dbHFvZztXGAGc6rrlmMlcbA5xpV9sSV9seJnO1McCZdrUtcbXtYTJXGwOcaVfbElfbHiZztTHAmXa1LXG17WEyVxsDnOnYYXolqFTb+OAtTpCU6ZWgUm2xWIzZLtKp+2RVpVonCq7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLK7WLFTrGGR393+ISMRFHIYADQAAAABJRU5ErkJggg=="},250065:function(a,e,o){o.d(e,{Z:function(){return r},a:function(){return s}});var n=o(667294);let i={},c=n.createContext(i);function s(a){let e=n.useContext(c);return n.useMemo(function(){return"function"==typeof a?a(e):{...e,...a}},[e,a])}function r(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:s(a.components),n.createElement(c.Provider,{value:e},a.children)}}}]);