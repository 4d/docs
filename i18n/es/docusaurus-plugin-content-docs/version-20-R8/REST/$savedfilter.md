---
id: savedfilter
title: $savedfilter
---

Guarda el filtro definido por $filter al crear un conjunto de entidades (_por ejemplo_, `$savedfilter="{filter}"`)

## Descripción

Cuando se crea un conjunto de entidades, se puede guardar el filtro que se ha utilizado para crearlo como medida de seguridad. Si el conjunto de entidades que ha creado es eliminado de la caché de 4D Server (debido al tiempo de espera, a la necesidad de espacio del servidor, o a que lo ha eliminado llamando a [`$method=release`]($method.md#methodrelease)).

Utilice `$savedfilter` para guardar el filtro que definió al crear su conjunto de entidades y luego pase `$savedfilter` junto con su llamada para recuperar cada vez el conjunto de entidades.

Si el conjunto de entidades ya no está en la caché de 4D Server, se recreará con un nuevo tiempo de espera de 10 minutos por defecto. El conjunto de entidades se refrescará (pueden incluirse ciertas entidades y eliminarse otras) desde la última vez que se creó, si ya no existía antes de recrearlo.

Si ha utilizado tanto `$savedfilter` como [`$savedorderby`]($savedorderby.md) en su llamada al crear un conjunto de entidades y luego omite una de ellas, el nuevo conjunto de entidades, que tendrá el mismo número de referencia, lo reflejará.

## Ejemplo

En nuestro ejemplo, primero llamamos a \`\`$savedfilter\` con la llamada inicial para crear un conjunto de entidades como se muestra a continuación:

` GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset`

A continuación, cuando se accede al conjunto de entidades, se escribe lo siguiente para garantizar que el conjunto de entidades sea siempre válido:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"`
