---
id: change-licenses
title: CHANGE LICENSES
slug: /commands/change-licenses
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE LICENSES.Syntax-->**CHANGE LICENSES**<!-- END REF-->
<!--REF #_command_.CHANGE LICENSES.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.CHANGE LICENSES.Summary-->El comando CHANGE LICENSES muestra la caja de diálogo de gestión de licencias 4D.<!-- END REF--> 

Este comando sólo puede ser utilizado con aplicaciones 4D monousuario y no puede llamarse desde un componente. Cuando las contraseñas están habilitadas, este comando sólo puede ser ejecutado por el Diseñador o Administrador; no hace nada cuando es llamado por los usuarios que no tienen los derechos de acceso adecuados.

La caja de diálogo de gestión de licencias permite a un usuario activar los plug-ins o el servidor web en la máquina dónde se ejecuta. En 4D, puede mostrar esta caja de diálogo seleccionando el comando **Gestión de licencias.** en el menú **Ayuda**. 

CHANGE LICENSES es una forma conveniente de activar licencia y añadir números de expansión en una aplicación 4D monousuario distribuida a los clientes. Los desarrolladores 4D y los administradores de sistemas pueden utilizar este comando para distribuir una aplicación 4D y permitir a los usuarios introducir su Licencia sin enviar una actualización a la aplicación cada vez.

Para mayor información esta caja de diálogo, consulte la sección *Instalación y activación* Guía de instalación de 4D.

#### Ejemplo 

En una caja de diálogo de configuración o de preferencias personalizada, coloque un botón con el siguiente método:

```4d
  // Método de objeto del botón bLicencia
 CHANGE LICENSES
```

De esta forma un usuario puede activar licencias sin tener que modificar la base.

#### Ver también 

[License info](license-info.md)  
[Is license available](is-license-available.md)  