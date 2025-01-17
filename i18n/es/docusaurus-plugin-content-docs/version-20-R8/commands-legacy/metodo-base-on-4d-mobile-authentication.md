---
id: metodo-base-on-4d-mobile-authentication
title: Metodo base On 4D Mobile Authentication
slug: /commands/metodo-base-on-4d-mobile-authentication
displayed_sidebar: docs
---

<!--REF #_command_.Metodo base On 4D Mobile Authentication.Syntax-->$1, $2, $3, $4 -> Método base On 4D Mobile Authentication : Boolean<!-- END REF-->
<!--REF #_command_.Metodo base On 4D Mobile Authentication.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| $1 | Texto | &#8592; | Nombre de usuario |
| $2 | Texto | &#8592; | Contraseña |
| $3 | Booleano | &#8592; | True = modo Digest, False = modo Basic |
| $4 | Texto | &#8592; | Dirección IP del llamante |
| Resultado | Boolean | &#8592; | True = petición aceptada, False = petición rechazada |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Metodo base On 4D Mobile Authentication.Summary-->El **Método base On 4D Mobile Authentication** está obsoleto en los proyectos a partir de 4D 20 R6.<!-- END REF-->

La [autenticación de inicio de sesión Force](../REST/authUsers.md) es ahora muy recomendable. En los proyectos convertidos, puede actualizar su configuración haciendo clic en el botón [**Activate REST authentication through ds.authentify() function**](../settings/web.md#access). Ver también [esta entrada de blog](https://blog.4d.com/force-login-now-is-the-default-mode-for-all-rest-authentications) para saber cómo migrar su código si es necesario.
