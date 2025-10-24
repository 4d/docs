---
id: http-request-handler
title: HTTP Request handler
---

Por defecto, las peticiones HTTP recibidas por el servidor web 4D se gestionan a través de [funciones de procesamiento integradas](httpRequests.md) o del [servidor REST](../REST/REST_requests.md).

Además, 4D soporta la implementación de **gestores de peticiones HTTP personalizadas**, permitiéndole interceptar peticiones HTTP entrantes específicas y procesarlas utilizando su propio código.

Cuando un manejador de peticiones HTTP personalizado intercepta una solicitud, se procesa directamente y no hay otras funcionalidades de procesamiento (por ejemplo, son llamados métodos base [On Web authentication](./authentication.md#on-web-authentication) o [On Web connection](./httpRequests.md#on-web-connection).

Los gestores de peticiones HTTP personalizados satisfacen diversas necesidades, entre ellas:

- la utilización de una URL dedicada como proveedor de recursos o como cuadro de carga de archivos (para descargar o cargar varios archivos),
- la redirección en páginas específicas en función de un contexto (usuario autentificado, privilegios otorgados...),
- gestionar una autenticación a través de oAuth 2.0.

## Requisitos

Se soportan gestores de solicitudes HTTP personalizados:

- cuando las [sesiones escalables](./sessions.md#enabling-web-sessions) están habilitadas,
- with the main Web Server only (HTTP Request handlers that may have been defined in [Web Servers of components](../WebServer/webServerObject.md) are ignored).

:::warning

[Por defecto](../ORDA/privileges.md#default-file) por razones de seguridad, el acceso externo al datastore no está permitido en 4D. Necesita configurar los [privilegios ORDA](../ORDA/privileges.md) para permitir peticiones HTTP.

:::

## Archivo HTTPHandlers.json

Define sus manejadores de petición HTTP personalizados en un archivo de configuración llamado **HTTPHandlers.json** almacenado en la carpeta [`Project/Sources`](../Project/architecture.md#sources).

This file contains all listened URL patterns, the handled verbs, and the code to be called. Los administradores se proporcionan en forma de colección en formato JSON.

Al momento de la ejecución, se ejecuta el primer patrón que coincida con la URL, los demás se ignoran.

Este es un ejemplo del contenido de un archivo *HTTPHandlers.json*:

```json

[
    {
        "class": "GeneralHandling",
        "method": "gettingStarted",
        "pattern": "start",
        "verbs": "get, post"
    }
]
```

Esta declaración de handler puede leerse como: cuando cualquier petición que comience por `/start/` con un verbo `GET` o `POST` es recibida por el servidor, se ejecuta la función `gettingStarted` del singleton `GeneralHandling`.

:::note

Debe reiniciar el servidor Web para que se tengan en cuenta las modificaciones realizadas en este archivo.

:::

## Definición del gestor

Un manejador está definido por:

- un patrón de URL a interceptar
- una función y su clase donde se implementa el código para manejar el patrón URL escuchado
- los verbos con los que se puede llamar a la URL para activar el gestor

El identificador del gestor es la pareja [patrón + un verbo de la lista de verbos].

### Patrones de la URL

Los patrones de URL pueden indicarse como **prefijos** o utilizando **expresiones regulares**.

- Para declarar un patrón de prefijo, utilice el nombre de propiedad "pattern" en el archivo HTTPHandlers.json. Los prefijos son considerados como expresiones regulares que ya contienen un `/` inicial y final.  
  Ej: `"pattern": "docs"` o `"pattern": "docs/invoices"`

- Para declarar un patrón de expresión regular, utilice el nombre de propiedad "regexPattern" en el archivo HTTPHandlers.json. Los modelos de expresiones regulares se manejan directamente.
  Ej: `"regexPattern" : "/docs/.+/index\.html"`

Las propiedades "Pattern" y "regexPattern" no pueden utilizarse en la misma definición de gestor (en este caso, sólo se tiene en cuenta la propiedad "regexPattern").

#### Correspondencia de modelos

Los modelos de URL se activan en el orden indicado:

- se ejecuta el primer modelo coincidente
- los siguientes patrones no se ejecutan aunque coincidan con la URL

En consecuencia, debe aplicar una estrategia precisa al escribir sus gestores: los patrones más detallados deben escribirse antes que los patrones más generales.

```json
[
    {
        "class": "InvoiceslHandling",
        "method": "handleTheInvoice",
        "regexPattern": "/docs/invoices/details/theInvoice",
        "verbs": "GET"
    },
    {
        "class": "InvoiceslHandling",
        "method": "handleUnauthorizedVerbs",
        "regexPattern": "/docs/invoices/details/theInvoice",
        "comment": "This handler is triggered for all verbs except GET (handled above)"
    },
    {
        "class": "DocsHandling",
        "method": "handleDocs",
        "regexPattern": "/docs",
        "comment": "This handler is triggered for all the verbs"
    }
]

```

#### Patrones prohibidos

Los patrones URL que coincidan con las funciones de procesamiento HTTP integradas en 4D no están permitidos en los gestores HTTP personalizados. Por ejemplo, los siguientes modelos no pueden ser manejados:

- `/4DACTION`
- `/rest`
- `/$lib/renderer`
- `/$shared`

### Clase y método

Declare el código a ejecutar cuando se intercepte un patrón de URL definido utilizando las propiedades "class" y "method".

- "class": nombre de la clase sin `cs.`, por ejemplo, "UsersHandling" para la clase usuario `cs.UsersHandling`. Debe ser una clase [**compartida**](../Concepts/classes.md#shared-singleton) y [**singleton**](../Concepts/classes.md#singleton-classes).
- "method": función de clase perteneciente a la clase.

[Ver abajo](#request-handler-code) para obtener información sobre el código del gestor de peticiones.

### Verbs

Puede utilizar la propiedad "verbs" en la definición del manejador para declarar los verbos HTTP que se admiten en las peticiones entrantes para este manejador. Una solicitud que utiliza un verbo no permitido explícitamente es rechazada automáticamente por el servidor.

Puede declarar varios verbos, separados por una coma. Los nombres de verbos no distinguen entre mayúsculas y minúsculas.

Ej: `"verbs" : "PUT, POST"`

:::note

No se hace ningún control sobre los nombres de los verbos. Se pueden utilizar todos los nombres.

:::

Por defecto, si la propiedad "verbs" no se utiliza para un manejador, **todos** los verbos HTTP son soportados en las peticiones entrantes para este manejador (excepto aquellos posiblemente utilizados de antemano en un patrón más detallado, como se muestra en el ejemplo anterior).

:::note

El verbo HTTP también puede ser evaluado [utilizando la propiedad `.verb` dentro del código del manejador de peticiones](../API/IncomingMessageClass.md#verb) para ser aceptado o rechazado.

:::

## Ejemplo

He aquí un ejemplo detallado de un archivo HTTPHandlers.json:

```json

[
   {
        "clase": "GeneralHandling",
        "method": "handle",
        "pattern": "info", //prefijo URL 
        "verbs": "GET"
    }, 
    {
        "class": "UsersHandling",
        "method": "manageAccount",
        "pattern": "userAccount/update", //prefijo URL
        "verbs": "PUT,POST"
    }, 
    {
        "class": "FinancialHandling",
        "method": "handleInvoices",
        "regexPattern": "/docs/invoices/(past|today)", //prefijo de URL dado como regex
        "verbs": "GET"
    },
    {
        "class": "DocsHandling",
        "method": "handleDocs",
        "regexPattern": "/docs/myPage.html", //prefijo de URL dado como regex
        "verbs": "GET"
    },
    {
        "class": "InvoicesHandling",
        "method": "handleTheInvoice",
                "pattern": "docs/invoices/details/theInvoice", // La URL más específica primero
        "verbs": "GET,POST"
    },
    {
        "class": "InvoicesHandling",
        "method": "handleDetails",
            "pattern": "docs/invoices/details",  // Las URL generales después de
        "verbs": "GET"
    },
    {
        "class": "InvoicesHandling",
        "method": "handleInvoices", // Las URL generales después de
        "pattern": "docs/invoices",
        "verbs": "GET"
    }
]

```

En este ejemplo, debe implementar las siguientes funciones:

- *funciónhandle* en la clase \*GeneralHandling
- *manageAccount* en la clase *UsersHandling*
- *handleInvoices* en la clase *FinancialHandling*
- *handleDocs* en la clase *DocsHandling*
- *handleTheInvoice* / *handleDetails* / *handleInvoices* en la clase *InvoicesHandling*

Ejemplos de URL que activan los gestores personalizados:

`IP:port/info/` con un verbo GET
`IP:port/info/general` con un verbo GET

`IP:port/userAccount/update/` con un verbo POST
`IP:port/userAccount/update/profile` con un verbo POST

`IP:port/docs/invoices/past` con un verbo GET
`IP:port/docs/invoices/today/latest` con un verbo GET

`IP:port//docs/myPage.html` con un verbo GET

`IP:port//docs/invoices/` con un verbo GET, llama a la función *handleInvoices* (clase *InvoicesHandling*)
`IP:port//docs/invoices/details/` con un verbo GET, llama a la función *handleDetails* (clase *InvoicesHandling*)
`IP:port//docs/invoices/details/theInvoice/xxxxxx` con un verbo GET, llama a la función *handleTheInvoice* (clase *InvoiceslHandling*)

## Código del gestor de peticiones

### Configuración de funciones

El código del gestor de peticiones HTTP debe implementarse en una función de una clase [**Compartida**](../Concepts/classes.md#shared-singleton) [**clase singleton**](../Concepts/classes.md#singleton-classes).

Si el singleton no se encuentra o no está compartido, el servidor devuelve un error "No se puede encontrar singleton". Si la clase o la función [definida como manejador](#handler-definition) en el archivo HTTPHandlers.json no se encuentra, el servidor devuelve un error "No se puede encontrar la función singleton".

Las funciones del gestor de peticiones no son necesariamente compartidas, a menos que algunas propiedades del gestor de peticiones sean actualizadas por las funciones. En este caso, necesita declarar sus funciones con la [palabra clave 'shared'](../Concepts/classes.md#shared-functions).

:::note

**no es recomendado** exponer las funciones del gestor de solicitudes a llamadas REST externas usando las palabras claves [`exposed`](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) o [`onHTTPGet`](../ORDA/ordaClasses.md#onhttpget-keyword).

:::

### Entrada: una instancia de la clase 4D.IncomingMessage

Cuando una solicitud ha sido interceptada por el manejador, se recibe en el servidor como una instancia de la [clase 4D.IncomingMessage](../API/IncomingMessageClass.md).

Toda la información necesaria sobre la petición está disponible en este objeto, incluyendo la url de la petición, el verbo, los encabezados y, si los hay, los parámetros (puestos en la URL) y el cuerpo de la petición.

A continuación, el gestor de solicitudes puede utilizar esta información para activar la lógica de negocio adecuada.

### Salida: una instancia de la clase 4D.OutgoingMessage

El gestor de peticiones puede devolver una instancia de objeto de la clase [4D.OutGoingMessage](../API/OutgoingMessageClass.md), es decir, algún contenido web completo listo para que un navegador lo maneje, como un contenido de archivo.

### Ejemplo

La [clase 4D.IncomingMessage](../API/IncomingMessageClass.md) ofrece funciones para obtener los [encabezados](../API/IncomingMessageClass.md#headers) y el [cuerpo](../API/IncomingMessageClass.md#gettext) de la solicitud.

He aquí un ejemplo sencillo para cargar un archivo en el servidor.

El archivo **HTTPHandlers.json**:

```json
[
    {
        "class": "UploadFile",
        "method": "uploadFile",
        "regexPattern": "/putFile",
        "verbs": "POST"
    }
]
```

La URL llamada es: http://127.0.0.1:8044/putFile?fileName=testFile

El contenido binario del archivo se coloca en el cuerpo de la petición y se utiliza un verbo POST. El nombre del archivo se da como parámetro (*fileName*) en la URL. Se recibe en el objeto [`urlQuery`](../API/IncomingMessageClass.md#urlquery) en la petición.

```4d
    //UploadFile class

shared singleton Class constructor()
	
	
Function uploadFile($request : 4D.IncomingMessage) : 4D.OutgoingMessage
	
	var $response:=4D.OutgoingMessage.new()
	
	var $body:="Not supported file"
	var $fileName; $fileType : Text
	var $file : 4D.File
	var $picture : Picture
	var $created : Boolean
	
	$fileName:=$request.urlQuery.fileName
	$fileType:=$request.getHeader("Content-Type")
	
	Case of 
		: ($fileType="application/pdf")
			$file:=File("/PACKAGE/Files/"+$fileName+".pdf")
			$created:=$file.create()
			$file.setContent($request.getBlob())
			$body:="Upload OK - File size: "+String($file.size)
			
		: ($fileType="image/jpeg")
			$file:=File("/PACKAGE/Files/"+$fileName+".jpg")
			$picture:=$request.getPicture()
			WRITE PICTURE FILE($file.platformPath; $picture)
			$body:="Upload OK - Image size: "+String($file.size)
			
	End case 
	
	$response.setBody($body)
	$response.setHeader("Content-Type"; "text/plain")
	
	return $response

```

## Ver también

[Maestría de las peticiones HTTP con los gestores de peticiones 4D](https://blog.4d.com/master-http-requests-with-4d-request-handlers/) (entrada del blog)