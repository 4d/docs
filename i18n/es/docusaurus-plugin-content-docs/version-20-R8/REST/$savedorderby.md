---
id: savedorderby
title: $savedorderby
---

Guarda el filtro definido por `$orderby` al crear un conjunto de entidades (_por ejemplo_, `$savedorderby="{orderby}"`)

## Descripción

Cuando se crea un conjunto de entidades, se puede guardar el sentido de la ordenación junto con el filtro utilizado para su creación como medida de seguridad. Si el conjunto de entidades que ha creado es eliminado de la caché de 4D Server (debido al tiempo de espera, a la necesidad de espacio del servidor, o a que lo ha eliminado llamando a [`$method=release`]($method.md#methodrelease)).

Utilice `$savedorderby` para guardar el orden que definió al crear su conjunto de entidades, luego pase `$savedorderby` junto con su llamada para recuperar cada vez el conjunto de entidades.

Si el conjunto de entidades ya no está en la caché de 4D Server, se recreará con un nuevo tiempo de espera de 10 minutos por defecto. Si has usado ambos [`$savedfilter`]($savedfilter. d) y `$savedorderby` en su llamada cuando crea una entidad definida y luego omite una de ellas, la nueva entidad definida, teniendo el mismo número de referencia, lo reflejará.

## Ejemplo

Primero se llama a `$savedorderby` con la llamada inicial para crear un conjunto de entidades:

`GET  /rest/People/?$filter="lastName!=''"&$savedfilter="lastName!=''"&$orderby="salary"&$savedorderby="salary"&$method=entityset`

Luego, cuando acceda a su conjunto de entidades, escriba lo siguiente (utilizando tanto $savedfilter como $savedorderby) para asegurarse de que el filtro y su orden de clasificación siempre existen:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=''"&$savedorderby="salary"`
