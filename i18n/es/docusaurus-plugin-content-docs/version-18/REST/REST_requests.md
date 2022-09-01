---
id: REST_requests
title: Acerca de las peticiones REST
---


Se soportan las siguientes estructuras para las peticiones REST:

| URI                              | Recurso                                                                     | {Subresource}                                                              | {Querystring}                                                   |
| -------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------- |
| http://{servername}:{port}/rest/ | [{dataClass}](%7BdataClass%7D.html)/                                        | [{attribute1, attribute2, ...}](manData.html#selecting-attributes-to-get)/ |                                                                 |
|                                  | [{dataClass}](%7BdataClass%7D.html)/                                        | [{attribute1, attribute2, ...}](manData.html#selecting-attributes-to-get)/ | [{method}](%7BdataClass%7D.html#dataclassmethod)                |
|                                  |                                                                             |                                                                            | [$entityset/{entitySetID}](entityset.html#entitysetentitysetid) |
|                                  |                                                                             |                                                                            | [?$filter]($filter.md)                                          |
|                                  |                                                                             | [{attribute}](manData.html#selecting-attributes-to-get)/                   | [?$compute]($compute.md)                                        |
|                                  | [{dataClass}({key})](%7BdataClass%7D.html#dataclasskey)/                    | [{attribute1, attribute2, ...}](manData.html#selecting-attributes-to-get)/ |                                                                 |
|                                  | [{dataClass}:{attribute}(value)](%7BdataClass%7D%7Battribute%7D_value.html) |                                                                            |                                                                 |
|                                  | [$catalog]($catalog.md)                                                     |                                                                            |                                                                 |
|                                  | [$directory]($directory.md)                                                 |                                                                            |                                                                 |
|                                  | [$info]($info.md)                                                           |                                                                            |                                                                 |


Mientras que todas las solicitudes REST deben contener los parámetros URI y Resource, el subresource (que filtra los datos devueltos) es opcional.

Como en todos los URI, el primer parámetro está delimitado por un "?" y todos los siguientes por un "&". Por ejemplo:

 `GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`
> Puede colocar todos los valores entre comillas en caso de ambigüedad. Por ejemplo, en nuestro ejemplo anterior, podríamos haber puesto el valor del apellido entre comillas simples: "lastName!='Jones'".

Los parámetros le permiten manipular los datos de las clases de datos en su proyecto 4D. Además de recuperar datos mediante los métodos HTTP `GET`, también se pueden añadir, actualizar y eliminar entidades de una clase de datos utilizando los métodos HTTP `POST`.

Si desea que los datos se devuelvan en un array en lugar de en JSON, utilice el parámetro [`$asArray`]($asArray.md).


## Estado y respuesta REST
Con cada petición REST, el servidor devuelve el estado y una respuesta (con o sin error).

### Estado de la petición
Con cada solicitud REST, se obtiene el estado junto con la respuesta. A continuación se presentan algunos de los estados que pueden surgir:

| Estado                    | Descripción                                                                      |
| ------------------------- | -------------------------------------------------------------------------------- |
| 0                         | Solicitud no procesada (el servidor podría no estar iniciado).                   |
| 200 OK                    | Petición procesada sin error.                                                    |
| 401 Unauthorized          | Error de permisos (compruebe los permisos del usuario).                          |
| 402 No session            | Se ha alcanzado el número máximo de sesiones.                                    |
| 404 Not Found             | La clase de datos no es accesible vía REST o el conjunto de entidades no existe. |
| 500 Internal Server Error | Error al procesar la solicitud REST.                                             |

### Respuesta

La respuesta (en formato JSON) varía en función de la petición.

Si se produce un error, se enviará junto con la respuesta del servidor o será la respuesta del servidor.

 

