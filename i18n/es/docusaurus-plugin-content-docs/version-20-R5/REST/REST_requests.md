---
id: REST_requests
title: Acerca de las peticiones REST
---

Se soportan las siguientes estructuras para las peticiones REST:

| URI                                                              | Resource (Input)                                                                       | /? or &{filter} (Output)                                                                                                                                       |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| http://{servername}:{port}/rest/ | [{dataClass}](dataClass.md)                                                                               | [$filter]($filter.md), [$attributes]($attributes.md), [$skip]($skip.md), [$method=...]($method.md)... |
|                                                                  | [{dataClass}](dataClass.md)/[$entityset/{entitySetID}]($entityset.md#entitysetentitysetid)                | [$method=...]($method.md)                                                                                                                             |
|                                                                  | [{dataClass}({key})](dataClass.md#dataclasskey)                                        | [$attributes]($attributes.md)                                                                                                                                                                         |
|                                                                  | [{dataClass}:{attribute}(value)](dataClass.md#dataclassattributevalue) |                                                                                                                                                                                                       |

Mientras que todas las solicitudes REST deben contener los parámetros URI y Resource, los filtros de salida (que filtran los datos devueltos) son opcionales.

As with all URIs, the first parameter is delimited by a “?” and all subsequent parameters by a “&”. Por ejemplo:

`GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`

> Puede colocar todos los valores entre comillas en caso de ambigüedad. Por ejemplo, en nuestro ejemplo anterior, podríamos haber puesto el valor del apellido entre comillas simples: "lastName!='Jones'".

Los parámetros le permiten manipular los datos de las clases de datos en su proyecto 4D. Besides retrieving data using `GET` HTTP methods, you can also add, update, and delete entities in a dataclass using `POST` HTTP methods.

If you want the data to be returned in an array instead of JSON, use the [`$asArray`]($asArray.md) parameter.

## Estado y respuesta REST

Con cada petición REST, el servidor devuelve el estado y una respuesta (con o sin error).

### Estado de la petición

Con cada solicitud REST, se obtiene el estado junto con la respuesta. A continuación se presentan algunos de los estados que pueden surgir:

| Estado                    | Descripción                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| 0                         | Solicitud no procesada (el servidor podría no estar iniciado). |
| 200 OK                    | Petición procesada sin error.                                                     |
| 401 Unauthorized          | Error de permisos (compruebe los permisos del usuario).        |
| 402 No session            | Se ha alcanzado el número máximo de sesiones.                                     |
| 404 Not Found             | La clase de datos no es accesible vía REST o el conjunto de entidades no existe.  |
| 500 Internal Server Error | Error al procesar la solicitud REST.                                              |

### Respuesta

La respuesta (en formato JSON) varía en función de la petición.

Si se produce un error, se enviará junto con la respuesta del servidor o será la respuesta del servidor.
