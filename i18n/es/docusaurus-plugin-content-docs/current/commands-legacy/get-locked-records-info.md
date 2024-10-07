---
id: get-locked-records-info
title: Get locked records info
slug: /commands/get-locked-records-info
displayed_sidebar: docs
---

<!--REF #_command_.Get locked records info.Syntax-->**Get locked records info** ( *laTabla* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get locked records info.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| laTable | Table | &#x1F852; | Tabla de la cual obtener los registros bloqueados |
| Resultado | Object | &#x1F850; | Descripción de los registros bloqueados (si los hay) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get locked records info.Summary-->El comando **Get locked records info** devuelve un objeto que contiene diferente información sobre los registros bloqueados actualmente en *laTabla*.<!-- END REF-->

**Nota**: el comando funciona solo con 4D y 4D Server. Devuelve un objeto no válido cuando se llama desde un 4D remoto. Sin embargo, puede llamarse en este contexto si la opción "Ejecutar en servidor" está activada para el método de llamada. En este caso, el objeto devuelto contendrá información sobre el servidor. Cuando se llama desde un componente, siempre se aplica a la base local.

El objeto devuelto contiene una propiedad "registros", que es una colección de objetos:

```RAW
{    "records": [        objeto descripción,        (…)    ]}
```

Cada elemento de la colección "description object" identifica un registro bloqueado en la tabla especificada. Contiene diferentes propiedades dependiendo del origen del bloqueo (proceso 4D o REST API).

* Si el registro fue bloqueado por un proceso 4D:

| **Propiedad**     | **Tipo**      | **Descripción**                                                                                                                                                                                                                                                                                   |
| ----------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contextID         | UUID (Cadena) | UUID del contexto de la base responsable del bloqueo                                                                                                                                                                                                                                              |
| contextAttributes | Objeto        | Objeto que contiene la misma información que el comando [LOCKED BY](locked-by.md) aplicado al registro, la diferencia es que **Get locked records info** devuelve el nombre del usuario definido en el sistema y no el del usuario 4D, así como también información adicional (ver más adelante). |
| recordNumber      | Entero largo  | Número de registro del registro bloqueado                                                                                                                                                                                                                                                         |

El objeto *contextAttributes* se compone de las siguientes propiedades:

| **Propiedad**                                                                                                 | **Tipo**      | **Descripción**                                                                                             |
| ------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| task\_id                                                                                                      | Número        | Número de referencia del proceso                                                                            |
| user\_name                                                                                                    | Cadena        | Nombre del usuario definido en el sistema operativo                                                         |
| user4d\_alias                                                                                                 | Cadena        | Alias de usuario definido con SET USER ALIAS, o bien nombre de usuario en el directorio de la base 4D       |
| user4d\_id                                                                                                    | Número        | Número del usuario 4D(\*)                                                                                   |
| host\_name                                                                                                    | Cadena        | Nombre de la máquina local                                                                                  |
| task\_name                                                                                                    | Cadena        | Nombre del proceso                                                                                          |
| client\_version                                                                                               | Número        | Versión de la aplicación cliente                                                                            |
| *Únicamente cuando el comando se ejecuta en 4D Server y si el bloqueo del registro proviene de un 4D remoto:* |               |                                                                                                             |
| is\_remote\_context                                                                                           | Boolean       | Indica si un el origen del bloqueo es un 4D remoto (siempre *true* ya que de lo contrario no está presente) |
| client\_uid                                                                                                   | UUID (Cadena) | UUID del 4D remoto en el origen del bloqueo                                                                 |

(\*) Solo devuelto en bases binarias. Puede obtener el nombre del usuario 4D a partir del valor de *user4d\_id* utilizando el siguiente código:  

```4d
 GET USER LIST($arrNames;$arrIDs)
 $User4DName:=Find in array($arrIDs;user4d_id)
```

* Si el registro fue bloqueado por la *petición $lock REST* (a nivel de sesión):

| **Propiedad** | **Tipo** | **Descripción**                                                                                                                                         |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| host          | Cadena   | URL con la que se ha bloqueado la entidad, p. Ej. "127.0.0.1:8044"                                                                                      |
| IPAddr        | Cadena   | Dirección IP utilizada en la URL con la que se ha bloqueado la entidad, p. Ej. "127.0.0.1"                                                              |
| recordNumber  | Entero   | Número de registro del registro bloqueado                                                                                                               |
| userAgent     | Cadena   | Agente de usuario del locker, e.g. "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36" |

#### Ejemplo 

Ejecute el siguiente código:

```4d
 $vOlocked :=Get locked records info([Table])
```

Si dos registros están bloqueados en la tabla \[Table\], el siguiente objeto se devuelve en $vOlocked:

```RAW
{    "records": [        {           "contextID": "A9BB84C0E57349E089FA44E04C0F2F25",            "contextAttributes": {                "task_id": 8,                "user_name": "roland",                "user4d_id": 1,                "host_name": "iMac de roland",                "task_name": "P_RandomLock",                "client_version": -1342106592            },            "recordNumber": 1        },        {            "contextID": "8916338D1B8A4D86B857D92F593CCAC3",            "contextAttributes": {                "task_id": 9,                "user_name": "roland",                "user4d_id": 1,                "host_name": "iMac de roland",                "task_name": "P_RandomLock",                "client_version": -1342106592            },            "recordNumber": 2        }    ]}
```

Si el código se ejecuta en un 4D Server y el bloqueo es causado por una máquina cliente remota, el siguiente objeto es devuelto en $vOlocked:  
  
```RAW
{    "records": [        {            "contextID": "B0EC087DC2FA704496C0EA15DC011D1C",            "contextAttributes": {                "task_id": 2,                "user_name": "achim",                "user4d_id": 1,                "host_name": "achim-pcwin",                "task_name": "P_RandomLock",                "is_remote_context": true,                "client_uid": "0696E66F6CD731468E6XXX581A87554A",                "client_version": -268364752            },            "recordNumber": 1        }    ]}
```

#### Ver también 

[Locked](locked.md)  