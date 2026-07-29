---
id: QuotaManagerClass
title: QuotaManager
---

La clase `4D.QuotaManager` le ofrece una interfaz para configurar y monitorizar algunos límites de uso que aplica a su aplicación 4D. Los umbrales son útiles, por ejemplo, para proteger el servidor frente a solicitudes mal optimizadas o al uso excesivo de los recursos del servidor. Por lo general, el gestor de cuotas le permite ofrecer límites a los recursos ORDA a los que una sesión de servidor REST puede acceder.

Los objetos `4D.QuotaManager` pueden instanciarse mediante la [propiedad `quotas` de un objeto sesión](./SessionClass.md#quotas).

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21 R4       | Clase añadida  |

</details>

### Objeto QuotaManager

Los objetos 4D.QuotaManager ofrecen las siguientes propiedades:

|                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #QuotaManagerClass.currentValues.Syntax -->](#currentvalues)<br/><!-- INCLUDE #QuotaManagerClass.defaultcurrentValuesEntitySetTimeout.Summary -->        |
| [<!-- INCLUDE #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->](#defaultentitysettimeout)<br/><!-- INCLUDE #QuotaManagerClass.defaultEntitySetTimeout.Summary --> |
| [<!-- INCLUDE #QuotaManagerClass.maxEntitySetTimeout.Syntax -->](#maxentitysettimeout)<br/><!-- INCLUDE #QuotaManagerClass.maxEntitySetTimeout.Summary -->             |
| [<!-- INCLUDE #QuotaManagerClass.nbEntitySets.Syntax -->](#nbentitysets)<br/><!-- INCLUDE #QuotaManagerClass.nbEntitySets().Summary -->                                |

<!-- REF QuotaManagerClass.currentValues.Desc -->

## .currentValues

<!-- REF #QuotaManagerClass.currentValues.Syntax -->**currentValues** : Object<!-- END REF -->

#### Descripción

La propiedad `.currentValues` contiene <!-- REF #QuotaManagerClass.currentValues.Summary -->los valores actuales relacionados con las propiedades de cuotas definidas<!-- END REF -->. Este objeto es actualizado automáticamente por el servidor.

<!-- END REF -->

<!-- REF QuotaManagerClass.defaultEntitySetTimeout.Desc -->

## .defaultEntitySetTimeout

<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->**defaultEntitySetTimeout** : Integer<!-- END REF -->

#### Descripción

La propiedad `.defaultEntitySetTimeout` contiene <!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Summary -->el tiempo de espera predeterminado por inactividad para los conjuntos de entidades REST almacenados en memoria durante la sesión actual (en segundos)<!-- END REF -->.

Por defecto, este valor es de 2 horas (7200 segundos). También se puede definir al crear el conjunto de entidades mediante la [API REST `$timeout`](../REST/$timeout.md).

Puede modificar este valor de forma dinámica mediante la propiedad [`quotas.defaultEntitySetTimeout` de la sesión](./SessionClass.md#quotas), de modo que se aplique a cualquier conjunto de entidades que se cree posteriormente en la sesión (los valores de tiempo de espera predeterminados de los conjuntos de entidades existentes no se modifican).

:::note

Si se define un valor superior al de la propiedad `maxEntitySetTimeout`, dicho valor se ajustará al de `maxEntitySetTimeout`.

:::

No se puede pasar un valor <=0 (en ese caso se produce un error). Para restablecer el valor de la propiedad para la sesión, pase *undefined*.

#### Ejemplo

En un código 4D de un proceso REST:

```4d
Session.quotas.defaultEntitySetTimeout:=1200
```

<!-- END REF -->

<!-- REF QuotaManagerClass.maxEntitySetTimeout.Desc -->

## .maxEntitySetTimeout

<!-- REF #QuotaManagerClass.maxEntitySetTimeout.Syntax -->**maxEntitySetTimeout** : Integer<!-- END REF -->

#### Descripción

La propiedad `.maxEntitySetTimeout` contiene <!-- REF #QuotaManagerClass.maxEntitySetTimeout.Summary -->el valor máximo del tiempo de espera por inactividad para los conjuntos de entidades REST almacenados en memoria durante la sesión actual (en segundos)<!-- END REF -->.

Puede definir este valor utilizando la [propiedad `quotas.maxEntitySetTimeout` de la Sesión](./SessionClass.md#quotas), para que se utilice para cualquier conjunto de entidades creado después en la sesión (los valores máximos de tiempo de espera de los conjuntos de entidades existentes no se modifican).

Una vez configurada la propiedad `.maxEntitySetTimeout`, ningún conjunto de entidades creado posteriormente en la sesión podrá tener un tiempo de espera superior al valor de `.maxEntitySetTimeout`.

Por ejemplo, supongamos que el tiempo de espera por inactividad máximo está fijado en 40 minutos (2400 segundos); si se crea un conjunto de entidades con un tiempo de espera obligatorio que supera el valor máximo:

```
http://127.0.0.1/rest/People?$filter=ID>=4&$method=entityset&$timeout=3000
```

... entonces el tiempo de espera definido en la solicitud es ignorado y el conjunto de entidades será liberado después de 40 minutos si no se utiliza durante este período de tiempo.

No se puede pasar un valor <=0 (en ese caso se produce un error). Para restablecer el valor de la propiedad para la sesión, pase *undefined*.

#### Ejemplo

En un código 4D de un proceso REST:

```4d
Session.quotas.maxEntitySetTimeout:=2400
```

<!-- END REF -->

<!-- REF QuotaManagerClass.nbEntitySets.Desc -->

## .nbEntitySets

<!-- REF #QuotaManagerClass.nbEntitySets.Syntax -->**nbEntitySets** : Integer<!-- END REF -->

#### Descripción

La propiedad `.nbEntitySets` contiene <!-- REF #QuotaManagerClass.nbEntitySets.Summary -->el número máximo de conjuntos de entidades REST permitidos en memoria para la sesión actual (en segundos)<!-- END REF -->.

Por defecto, no hay límite para conjuntos de entidades [almacenados en memoria por solicitudes REST](../REST/$info.md) (el valor es 0). Puede definir un límite para controlar la carga útil del servidor para una sesión específica.

Cuando se alcanza el número máximo de conjuntos de entidades permitidas, una solicitud REST que necesita crear un entity set obtendrá un [**status code HTTP 429** y una respuesta de error](../REST/REST_requests.md#rest-status-and-response), hasta que al menos un entity set sea liberado. Puede liberar un conjunto de entidades de la caché mediante el [comando `$release` REST](../REST/$entityset.md#entitysetrelease).

No se puede pasar un valor <=0 (en ese caso se produce un error). Para restablecer el valor de la propiedad para la sesión, pase *undefined*.

#### Ejemplo

En un código 4D de un proceso REST:

```4d
	//máximo 50 conjuntos de entidades
Session.quotas.nbEntitySets:=50
```

<!-- END REF -->




