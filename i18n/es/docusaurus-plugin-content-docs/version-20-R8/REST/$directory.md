---
id: directory
title: $directory
---

El directorio gestiona el acceso de los usuarios a través de peticiones REST.

## $directory/login

Abre una sesión REST en su aplicación 4D y conecta al usuario.

### Descripción

Utilice `$directory/login` para abrir una sesión en su aplicación 4D a través de REST y conecte un usuario. También puede modificar el tiempo de espera por defecto de la sesión 4D.

Todos los parámetros deben pasarse en **encabezados**de un método POST:

| Llave de encabezado | Valor del encabezado                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| username-4D         | Usuario - No obligatorio                                                                                                        |
| password-4D         | Contraseña en texto plano - No es obligatorio                                                                                   |
| session-4D-length   | Tiempo de inactividad de la sesión (minutos). No puede ser inferior a 60 - No es obligatorio |

:::caution

Dado que la contraseña se transmite en texto plano, se recomienda utilizar una conexión https segura para la solicitud de acceso.

:::

### Ejemplo

```4d
C_TEXT($response;$body_t)
ARRAY TEXT($hKey;3)
ARRAY TEXT($hValues;3)
$hKey{1}:="username-4D"
$hKey{2}:="password-4D"
$hKey{3}:="session-4D-length"
$hValues{1}:="john"
$hValues{2}:="123"
$hValues{3}:=120
$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)
```

**Resultado**:

Si la conexión fue exitosa, el resultado será:

```
{
    "result": true
}
```

De lo contrario, la respuesta será:

```
{
     "result": false
}
```
