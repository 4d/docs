---
id: open-settings-window
title: OPEN SETTINGS WINDOW
slug: /commands/open-settings-window
displayed_sidebar: docs
---

<!--REF #_command_.OPEN SETTINGS WINDOW.Syntax-->**OPEN SETTINGS WINDOW** ( *selector* {; *acceso* {; *tipoParam*}} )<!-- END REF-->
<!--REF #_command_.OPEN SETTINGS WINDOW.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| selector | Text | &#8594;  | Llave que designa un tema o página o un grupo de parámetros de la caja de diálogo Preferencias |
| acceso | Boolean | &#8594;  | True=Bloquear las otras páginas de la caja de diálogo, False o si se omite=Dejar activas las otras páginas de la caja de diálogo |
| tipoParam | Integer | &#8594;  | 0 o si se omite = Parámetros de estructura, 1 = Parámetros de usuario, 2 = Configuración usuario para archivo de datos |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OPEN SETTINGS WINDOW.Summary-->El comando **OPEN SETTINGS WINDOW** abre la caja de diálogo de Preferencias 4D o las Propiedades de la base actual y muestra los parámetros o la página correspondiente a la llave pasada en el parámetro *selector*.<!-- END REF-->

El parámetro *selector* debe contener una llave indicando la caja de diálogo y la página a abrir. Esta llave se crea de esta forma: */Dialogo{/Pagina{/Parametros}}*. *Diálogo* indica la caja de diálogo a mostrar: puede pasar "4D" (para las Preferencias) o "Database" (Propiedades de la base). Por ejemplo, para indicar la página Compilador de las Propiedades de la base, *selector* debe contener "*/Database/Compiler*". La lista de llave que puede utilizar se ofrece a continuación. Si pasa una barra oblicua ("/") en *selector*, el comando muestra la primera página de la caja de diálogo de las Propiedades de la base.

El parámetro *acceso* le permite controlar las acciones del usuario en la caja de diálogo de Preferencias o de las Propiedades de la base bloqueando las otras páginas. Usted podría querer que el usuario pueda personalizar algunos parámetros pero evitar que otros puedan modificarse. En este caso, pasar True en el parámetro *acceso* significa que sólo la página especificada por el parámetro *selector* estará activa y modificable, mientras que el acceso a todas las otras páginas estará bloqueado (hacer clic en los botones de la barra de navegación no tendrá ningún efecto). Si pasa False u omite el parámetro *acceso*, todas las páginas de la caja de diálogo serán accesibles sin restricción. 

El parámetro *tipoPropiedades* se tiene en cuenta en las bases configuradas en modo "Propiedades usuario" únicamente (en este modo, las "Propiedades usuario" personalizadas o "Propiedades usuario para el archivo de datos" se generan en un archivo externo y son utilizadas en lugar de las propiedades estándar, ver la sección *Utilizar las propiedades usuario* en el manual de *Diseño*). En este contexto, este parámetro le permite indicar si quiere acceder a la caja de diálogo de las "Propiedades de estructura", "Propiedades usuario", "Propiedades usuario para el archivo de datos". Puede pasar una de las siguientes constantes, del tema "*Entorno 4D*":

| Constante              | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                   |
| ---------------------- | ------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Structure settings     | Entero largo | 0     | Acceso a las "propiedades estructura" (valor por defecto si el parámetro se omite). En este modo, los valores de *selector* utilizables son idénticos a los del modo estándar.*<br/>*                                                                                |
| User settings          | Entero largo | 1     | Acceso a las "propiedades usuario". En este modo, sólo ciertas llaves son utilizables en el parámetro *selector*.*<br/>*                                                                                                                                             |
| User settings for data | Entero largo | 2     | Acceso a "Configuración usuario para archivo de datos, que es, configuración usuario almacenada en el mismo nivel que el archivo de datos. En este modo, sólo ciertas llaves se pueden utilizar con el parámetro *selector* (mismo subconjunto que la configuración usuario) |

Si pasa una llave invalida, se muestra la primera página de la caja de diálogo de Propiedades de la base.

##### Llaves de rutas (modo estándar) 

La siguiente es una lista de llaves que puede utilizarse en el parámetro *selector* en modo estándar, es decir con las "propiedades estructura": 

*/4D* 
*/4D/General* 
*/4D/Structure* 
*/4D/Form editor* 
*/4D/Method editor* 
*/4D/Shortcuts* 
*/Database* 
*/Database/General* 
*/Database/Mover* 
*/Database/Interface* 
*/Database/Interface/Developper* 
*/Database/Interface/User* 
*/Database/Interface/Shortcuts* 
*/Database/Compiler* 
*/Database/Database* 
*/Database/Database/Data storage* 
*/Database/Database/Memory and cpu* 
*/Database/Database/International* 
*/Database/Backup* 
*/Database/Backup/Scheduler* 
*/Database/Backup/Configuration* 
*/Database/Backup/Backup and restore* 
*/Database/Client-Server* 
*/Database/Client-Server/Network* 
*/Database/Client-Server/IP configuration* 
*/Database/Web* 
*/Database/Web/Config* 
*/Database/Web/Options 1* 
*/Database/Web/Options 2* 
*/Database/Web/Log format* 
*/Database/Web/Log scheduler* 
*/Database/Web/Webservices* 
*/Database/SQL* 
*/Database/php* 
*/Database/Compatibility* 
*/Database/Security* 

**Nota de compatibilidad:** el comando continúa funcionando con las llaves definidas para las versiones 11; la correspondencia es establecida automáticamente por 4D. Sin embargo se recomienda reemplazar las llamadas antiguas por las llaves descritas anteriormente.

##### Llaves de rutas (modo Propiedades Usuario) 

Estas son las llaves que se pueden utilizar en el parámetro *selector* en los modos "Propiedades usuario" y "Propiedades usuario para archivo de datos":

*/Database* 
*/Database/Interface* 
*/Database/Database/Memory and cpu* 
**/Database/Client-Server* 
*/Database/Client-Server/Network* 
*/Database/Client-Server/IP configuration* 
*/Database/Web* 
*/Database/Web/Config* 
*/Database/Web/Options 1* 
*/Database/Web/Options 2* 
*/Database/Web/Log format* 
*/Database/Web/Log scheduler* 
*/Database/Web/Webservices* 
*/Database/SQL* 
*/Database/php* 

Llaves adicionales en modo "Propiedades usuario para archivo de datos":

*/Database/Backup* 
*/Database/Backup/Scheduler* */Database/Backup/Configuration* 
*/Database/Backup/Backup and restore*

#### Ejemplo 1 

  
Apertura de la página “Métodos” de las Preferencias 4D”:   
  
```4d
 OPEN SETTINGS WINDOW("/4D/Method editor")
```

#### Ejemplo 2 

Acceso a los parámetros de los atajos de teclado en las Propiedades de la base con bloqueo de otras propiedades:   

```4d
 OPEN SETTINGS WINDOW("/Database/Interface/Shortcuts";True)
```

#### Ejemplo 3 

Apertura de las Propiedades de la base en la primera página:   

```4d
 OPEN SETTINGS WINDOW("/")
```

#### Ejemplo 4 

Acceso a la página interfaz de las Propiedades de la base en modo "Propiedades usuario":

```4d
 OPEN SETTINGS WINDOW("/Database/Interface";False;1)
```

#### Variables y conjuntos del sistema 

Si la caja de diálogo Preferencias/Propiedades se valida, la variable sistema OK devuelve 1; si se anula, OK devuelve 0.
