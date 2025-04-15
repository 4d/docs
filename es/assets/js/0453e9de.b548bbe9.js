"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35968"],{477740:function(e,a,n){n.r(a),n.d(a,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>t,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"settings/database","title":"P\xe1gina Base de datos","description":"P\xe1gina Almacenamiento de datos","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/settings/database.md","sourceDirName":"settings","slug":"/settings/database","permalink":"/docs/es/settings/database","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fdatabase.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"database","title":"P\xe1gina Base de datos"},"sidebar":"docs","previous":{"title":"P\xe1gina Compilador","permalink":"/docs/es/settings/compiler"},"next":{"title":"P\xe1gina de respaldo","permalink":"/docs/es/settings/backup"}}'),i=n("785893"),o=n("250065");let r={id:"database",title:"P\xe1gina Base de datos"},c=void 0,t={},d=[{value:"P\xe1gina Almacenamiento de datos",id:"p\xe1gina-almacenamiento-de-datos",level:2},{value:"Par\xe1metros generales",id:"par\xe1metros-generales",level:3},{value:"Autorizar el uso de archivos de datos de s\xf3lo lectura",id:"autorizar-el-uso-de-archivos-de-datos-de-s\xf3lo-lectura",level:4},{value:"Sobre el bloqueo de archivos",id:"sobre-el-bloqueo-de-archivos",level:4},{value:"Ubicaci\xf3n de carpeta temporal",id:"ubicaci\xf3n-de-carpeta-temporal",level:3},{value:"Comparaci\xf3n de texto",id:"comparaci\xf3n-de-texto",level:3},{value:"Soporte de Mecab (versi\xf3n japonesa)",id:"soporte-de-mecab-versi\xf3n-japonesa",level:4},{value:"P\xe1gina Memoria",id:"p\xe1gina-memoria",level:2},{value:"Par\xe1metros de la cach\xe9 para la base",id:"par\xe1metros-de-la-cach\xe9-para-la-base",level:3}];function l(e){let a={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h2,{id:"p\xe1gina-almacenamiento-de-datos",children:"P\xe1gina Almacenamiento de datos"}),"\n",(0,i.jsx)(a.p,{children:"Esta p\xe1gina permite configurar el almacenamiento de datos de la base 4D en el disco."}),"\n",(0,i.jsx)(a.h3,{id:"par\xe1metros-generales",children:"Par\xe1metros generales"}),"\n",(0,i.jsx)(a.h4,{id:"autorizar-el-uso-de-archivos-de-datos-de-s\xf3lo-lectura",children:"Autorizar el uso de archivos de datos de s\xf3lo lectura"}),"\n",(0,i.jsx)(a.p,{children:"Esta opci\xf3n permite configurar el funcionamiento de la aplicaci\xf3n al abrir un archivo de datos bloqueado a nivel del sistema operativo. 4D incluye un mecanismo que impide autom\xe1ticamente la apertura de una base cuando su archivo de datos, o uno de sus segmentos est\xe1 bloqueado. En este caso, cuando se activa esta opci\xf3n de detecci\xf3n, 4D muestra un mensaje de advertencia y no abre la base:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:n(595661).Z+"",width:"493",height:"184"})}),"\n",(0,i.jsx)(a.p,{children:"A menos que se marque esta opci\xf3n, no es posible abrir una base cuando su archivo de datos est\xe1 bloqueado (funcionamiento por defecto para las bases 4D)."}),"\n",(0,i.jsx)(a.h4,{id:"sobre-el-bloqueo-de-archivos",children:"Sobre el bloqueo de archivos"}),"\n",(0,i.jsx)(a.p,{children:"Los archivos bloqueados pueden ser le\xeddos pero su contenido no puede ser modificado. Por ejemplo, los archivos se bloquean cuando se almacenan en un soporte no regrabable (tipo DVD) o cuando se copian desde este tipo de soporte. 4D puede trabajar de forma transparente con archivos de datos bloqueados, lo que permite, en particular, la utilizaci\xf3n de proyectos guardados en DVD. Sin embargo, con esta operaci\xf3n se corre el riesgo de utilizar inadvertidamente un fichero de datos bloqueado en el que no se guardar\xe1n las modificaciones. Esta es la raz\xf3n por la que, por defecto, 4D no permite abrir bases de datos con un archivo de datos bloqueado."}),"\n",(0,i.jsx)(a.h3,{id:"ubicaci\xf3n-de-carpeta-temporal",children:"Ubicaci\xf3n de carpeta temporal"}),"\n",(0,i.jsx)(a.p,{children:"Esta \xe1rea le permite cambiar la ubicaci\xf3n de los archivos temporales creados mientras 4D est\xe1 funcionando. La carpeta de archivos temporales es utilizada por la aplicaci\xf3n, cuando es necesario, para guardar temporalmente en disco los datos en memoria."}),"\n",(0,i.jsx)(a.p,{children:'La ubicaci\xf3n actual de esta carpeta se muestra en el \xe1rea "Actual:". Puede hacer clic en esta \xe1rea para mostrar el nombre de la ruta en forma de lista desplegable:'}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:n(783176).Z+"",width:"774",height:"101"})}),"\n",(0,i.jsx)(a.p,{children:"Se ofrecen tres opciones de ubicaci\xf3n:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Sistema"}),": cuando se selecciona esta opci\xf3n, los archivos temporales 4D se crean en una carpeta situada en la ubicaci\xf3n especificada por Windows y/o macOS. Puede averiguar la ubicaci\xf3n actual definida por su sistema utilizando el comando ",(0,i.jsx)(a.a,{href:"/docs/es/commands/temporary-folder",children:(0,i.jsx)(a.code,{children:"Temporary folder"})})," 4D. Los archivos se colocan en una subcarpeta cuyo nombre est\xe1 formado por el nombre de la base y un identificador \xfanico."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Carpeta de archivos de datos"}),' (opci\xf3n por defecto): cuando se selecciona esta opci\xf3n, los archivos temporales 4D se crean en una carpeta llamada "archivos temporales" situada en el mismo nivel que el archivo de datos de la base de datos.']}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Definido por el usuario"}),": esta opci\xf3n se utiliza para definir una ubicaci\xf3n personalizada. Si se modifica la opci\xf3n de ubicaci\xf3n, ser\xe1 necesario reiniciar la base para que se tenga en cuenta la nueva opci\xf3n. 4D verifica si se puede acceder a la carpeta seleccionada mediante escritura. Si no es as\xed, la aplicaci\xf3n prueba otras opciones hasta encontrar una carpeta v\xe1lida."]}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:['Esta opci\xf3n se almacena en las "propiedades adicionales" de la estructura, accesibles durante la exportaci\xf3n XML de la definici\xf3n de estructura (ver ',(0,i.jsx)(a.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Exporting-and-importing-structure-definitions.300-6750295.en.html",children:"Exportar e importar las definiciones de estructura"}),")."]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"comparaci\xf3n-de-texto",children:"Comparaci\xf3n de texto"}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Si cambia una de estas opciones, tiene que salir y volver a abrir la base para que el cambio surta efecto. Una vez reabierta la base, se vuelven a indexar autom\xe1ticamente todos sus \xedndices."}),"\n"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Considere @ como comod\xedn s\xf3lo cuando se encuentre al principio o al final de patrones de texto"}),': permite definir como se interpretar\xe1 la arroba "@" cuando se utilice en una b\xfasqueda o en una comparaci\xf3n de cadenas de caracteres, cuando se encuentre en\nCuando esta opci\xf3n no est\xe1 marcada (valor por defecto), la arroba se utiliza como car\xe1cter comod\xedn, es decir, sustituye a cualquier caracter (ver ',(0,i.jsx)(a.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Query-editor.300-6750279.en.html#463876",children:"Caracter comod\xedn (@)"}),")."]}),"\n",(0,i.jsx)(a.p,{children:"Cuando la opci\xf3n est\xe1 marcada, la arroba se considera un caracter simple si se encuentra dentro de una palabra. Esta posibilidad es especialmente \xfatil cuando se buscan direcciones de correo electr\xf3nico, donde el signo @ se utiliza internamente. Esta opci\xf3n influye en las b\xfasquedas, ordenaciones, comparaciones de cadenas de caracteres, as\xed como en los datos almacenados en las tablas y los que se encuentran en memoria, como los arrays. Los campos y variables de tipo alfa (indexados o no) y texto se ven afectados por como se interpreta el caracter @ en las b\xfasquedas y ordenaciones."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Notas:"})}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:['Para las b\xfasquedas, si el criterio de b\xfasqueda empieza o acaba por @, el caracter "@" se tratar\xe1 como un comod\xedn. S\xf3lo si el car\xe1cter "@" se coloca en medio de una palabra (por ejemplo: ',(0,i.jsx)(a.a,{href:"mailto:bill@cgi.com",children:"bill@cgi.com"}),") 4D lo trata de forma diferente."]}),"\n",(0,i.jsxs)(a.li,{children:["Esta opci\xf3n tambi\xe9n puede influir en el comportamiento de los comandos del tema ",(0,i.jsx)(a.a,{href:"/docs/es/commands/theme/Objects-Forms",children:"Objetos (Formularios)"}),' que aceptan el caracter comod\xedn ("@") en el par\xe1metro objeto.']}),"\n",(0,i.jsx)(a.li,{children:"Por razones de seguridad, s\xf3lo el Administrador o Dise\xf1ador de la base de datos puede modificar este par\xe1metro."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Lenguaje del archivo de datos actual:"})," permite configurar el lenguaje utilizado para el procesamiento y la comparaci\xf3n de cadenas de caracteres. La elecci\xf3n de un idioma de comparaci\xf3n afecta a la ordenaci\xf3n y la b\xfasqueda de textos, as\xed como al cambio entre min\xfasculas y may\xfasculas, pero no afecta a la traducci\xf3n de etiquetas ni a los formatos de fecha, hora o moneda, que permanecen en el idioma del sistema. Por defecto, 4D utiliza el lenguaje del sistema."]}),"\n",(0,i.jsx)(a.p,{children:"As\xed, un proyecto 4D puede funcionar en un lenguaje distinto del del sistema. Cuando se abre un proyecto, el motor de 4D detecta el lenguaje utilizado por el archivo de datos y lo pasa al lenguaje (modo int\xe9rpretado o compilado). Las comparaciones de texto, independientemente de si las efect\xfaa el motor del proyecto o el lenguaje, se hacen en el mismo idioma."}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["Puede modificar esta configuraci\xf3n en las Preferencias de la aplicaci\xf3n (ver ",(0,i.jsx)(a.a,{href:"/docs/es/Preferences/general",children:"P\xe1gina general"}),"). En este caso, la configuraci\xf3n se aplica a todas las nuevas bases creadas por 4D."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Considerar s\xf3lo caracteres no alfanum\xe9ricos para las palabras claves"}),": modifica el algoritmo utilizado por 4D para identificar los separadores de palabras claves y crear as\xed sus \xedndices. Por defecto, cuando esta opci\xf3n no est\xe1 marcada, 4D utiliza un sofisticado algoritmo que tiene en cuenta las caracter\xedsticas ling\xfc\xedsticas."]}),"\n",(0,i.jsxs)(a.p,{children:["Este algoritmo es similar al que utilizan los programas de tratamiento de textos para determinar los l\xedmites al seleccionar una palabra sobre la que se hace doble clic. Para m\xe1s informaci\xf3n sobre este algoritmo, consulte la siguiente direcci\xf3n: ",(0,i.jsx)(a.code,{children:"http://userguide.icu-project.org/boundaryanalysis"}),"."]}),"\n",(0,i.jsx)(a.p,{children:"Cuando esta opci\xf3n est\xe1 marcada, 4D utiliza un algoritmo simplificado. En esta configuraci\xf3n, todo caracter no alfanum\xe9rico (es decir, que no sea una letra o un n\xfamero) se considera un separador de palabras claves. Esta configuraci\xf3n cumple requisitos espec\xedficos asociados a determinados idiomas, como el japon\xe9s."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Orden de clasificaci\xf3n apropiado para la b\xfasqueda"}),': esta opci\xf3n s\xf3lo aparece cuando se selecciona el idioma japon\xe9s. Modifica la interpretaci\xf3n de caracteres como la "Marca sonora prolongada Katakana-Hiragana" o "\u9577\u97F3\u8A18\u53F7" o las "Marcas de iteraci\xf3n japonesa" como "\u309D" o "\u309E". Es probable que un hablante t\xedpico de japon\xe9s prefiera los resultados cuando el ajuste est\xe1 activado.']}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h4,{id:"soporte-de-mecab-versi\xf3n-japonesa",children:"Soporte de Mecab (versi\xf3n japonesa)"}),"\n",(0,i.jsxs)(a.p,{children:["En los sistemas japoneses, 4D soporta la librer\xeda ",(0,i.jsx)(a.em,{children:"MeCab"}),", con un algoritmo de indexaci\xf3n de palabras claves especialmente adaptado al idioma japon\xe9s."]}),"\n",(0,i.jsxs)(a.p,{children:["Este algoritmo se utiliza por defecto en las versiones japonesas de 4D. Si es necesario, puede desactivar el uso del algoritmo ",(0,i.jsx)(a.em,{children:"MeCab"})," y utilizar la librer\xeda convencional ",(0,i.jsx)(a.em,{children:"ICU"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["Para desactivar ",(0,i.jsx)(a.em,{children:"MeCab"}),", s\xf3lo tiene que marcar la opci\xf3n ",(0,i.jsx)(a.strong,{children:"Considerar solo caracteres no alfanum\xe9ricos para las palabras claves"}),":"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:n(296677).Z+"",width:"474",height:"78"})}),"\n",(0,i.jsx)(a.h2,{id:"p\xe1gina-memoria",children:"P\xe1gina Memoria"}),"\n",(0,i.jsx)(a.p,{children:"Utilice los par\xe1metros de esta pesta\xf1a para configurar la memoria cach\xe9 de la base."}),"\n",(0,i.jsx)(a.h3,{id:"par\xe1metros-de-la-cach\xe9-para-la-base",children:"Par\xe1metros de la cach\xe9 para la base"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"C\xe1lculo de la cach\xe9 adaptable"}),": cuando esta opci\xf3n est\xe1 marcada, la gesti\xf3n de la memoria cach\xe9 es realizada din\xe1micamente por el sistema, respetando los l\xedmites que defina. Esto permite configurar una memoria cach\xe9 de alto rendimiento adaptada a la mayor\xeda de las configuraciones. A continuaci\xf3n, el tama\xf1o de la memoria cach\xe9 se calcula din\xe1micamente en funci\xf3n de los par\xe1metros definidos. Los valores ofrecidos por defecto corresponden al uso est\xe1ndar de 4D."]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Memoria a reservar para el sistema y las otras aplicaciones"}),": parte de la memoria RAM a reservar para el Sistema y las otras aplicaciones. Este valor aumenta para la optimizaci\xf3n cuando otras aplicaciones se ejecutan en la misma m\xe1quina que 4D."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Porcentaje de memoria disponible utilizada para la cach\xe9"}),": porcentaje de la memoria restante asignada por defecto a la cach\xe9.",(0,i.jsx)(a.br,{}),"\nPara obtener el tama\xf1o asignado por defecto a la cach\xe9, basta con realizar el siguiente c\xe1lculo: (Memoria f\xedsica -- Memoria f\xedsica a reservar) X Porcentaje de la memoria utilizada para la cach\xe9. En el modo adaptativo, el tama\xf1o de la memoria cach\xe9 var\xeda din\xe1micamente en funci\xf3n de las necesidades de la aplicaci\xf3n y del sistema. Puede definir los l\xedmites utilizando las siguientes dos opciones:"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Tama\xf1o m\xednimo"}),": cantidad m\xednima de memoria que debe reservarse para la cach\xe9. Este valor no puede ser inferior a 100 MB."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Tama\xf1o m\xe1ximo"}),": cantidad m\xe1xima de memoria que puede utilizar la cach\xe9. Este valor es pr\xe1cticamente ilimitado.\\\nDefinir l\xedmites es especialmente \xfatil para bases distribuidas en m\xe1quinas de las que no se conoce a priori la configuraci\xf3n de memoria. En este caso, los l\xedmites definidos permiten garantizar un rendimiento m\xednimo en todos los casos. El siguiente diagrama ilustra este comportamiento:"]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["Ejemplo de c\xe1lculo de la memoria cach\xe9:\n",(0,i.jsx)(a.em,{children:"Memoria f\xedsica a reservar = 256 MB\nPorcentaje de la memoria disponible utilizado para la cach\xe9 = 50%\nTama\xf1o m\xe1ximo = 1 GB Tama\xf1o m\xednimo = 128 MB"})]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:n(705965).Z+"",width:"1168",height:"348"})}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"C\xe1lculo de cach\xe9 adaptativa no marcado"}),": en este modo, usted mismo define el tama\xf1o de la memoria cach\xe9 para la base. 4D muestra entonces un \xe1rea de entrada que permite configurar la memoria cach\xe9 a utilizar, as\xed como informaci\xf3n relacionada con la memoria f\xedsica (RAM disponible en la m\xe1quina), la cach\xe9 actual y la cach\xe9 tras el reinicio (teniendo en cuenta sus cambios)."]}),"\n",(0,i.jsx)(a.p,{children:"El tama\xf1o de la memoria cach\xe9 que introduzca se reservar\xe1 para la base 4D, independientemente del estado de los recursos de la m\xe1quina. Esta configuraci\xf3n puede utilizarse en determinadas configuraciones espec\xedficas, o cuando la base est\xe1 dise\xf1ada para utilizarse en sistemas dis\xedmiles en cuanto a memoria. En la mayor\xeda de los casos, la cach\xe9 adaptativa ofrece un mejor rendimiento."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Escritura cach\xe9 cada... Segundos/Minutos"}),": especifica el periodo de tiempo entre cada guardado autom\xe1tico de la cach\xe9 de datos, es decir, su escritura en el disco.\n4D guarda los datos colocados en la cach\xe9 a intervalos regulares. Puede especificar todo intervalo de tiempo entre 1 segundo y 500 minutos. Por defecto, 4D guarda sus datos cada 20 segundos. La aplicaci\xf3n tambi\xe9n guarda sus datos en el disco cada vez que cambia a otro entorno o sale de la aplicaci\xf3n. Tambi\xe9n puede llamar al comando ",(0,i.jsx)(a.a,{href:"/docs/es/commands/flush-cache",children:"FLUSH CACHE"})," para activar el vaciado en cualquier momento."]}),"\n",(0,i.jsx)(a.p,{children:"Cuando prevea una entrada de muchos datos, considere la posibilidad de establecer un intervalo de tiempo breve entre guardados. En caso de corte del suministro el\xe9ctrico, s\xf3lo perder\xe1 los datos introducidos desde el \xfaltimo almacenamiento (si la base de datos funciona sin archivo de historial)."}),"\n",(0,i.jsx)(a.p,{children:"Si la base de datos se ralentiza notablemente cada vez que se vac\xeda la cach\xe9, deber\xe1 ajustar la frecuencia. Esta lentitud significa que se est\xe1 guardando una gran cantidad de registros. Por lo tanto, un periodo m\xe1s corto entre guardados ser\xeda m\xe1s eficaz, ya que cada guardado implicar\xeda menos registros y, por lo tanto, ser\xeda m\xe1s r\xe1pido."}),"\n",(0,i.jsxs)(a.p,{children:["Por defecto, 4D muestra una peque\xf1a ventana cuando se vac\xeda la cach\xe9. Si no desea este recordatorio visual, puede deseleccionar la opci\xf3n ",(0,i.jsx)(a.strong,{children:"Escritura de cach\xe9"})," en la ",(0,i.jsx)(a.a,{href:"/docs/es/settings/interface",children:"p\xe1gina Interfaz"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},595661:function(e,a,n){n.d(a,{Z:function(){return s}});let s="data:image/png;base64,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"},705965:function(e,a,n){n.d(a,{Z:function(){return s}});let s=n.p+"assets/images/memory-maximum-size-2040a7588972184f9c94c68a29013ad9.png"},296677:function(e,a,n){n.d(a,{Z:function(){return s}});let s="data:image/png;base64,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"},783176:function(e,a,n){n.d(a,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,a,n){n.d(a,{Z:function(){return c},a:function(){return r}});var s=n(667294);let i={},o=s.createContext(i);function r(e){let a=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);