---
id: licenses
title: Gestión de licencias 4D
---

Una vez instalados en su disco, debe activar sus productos 4D para poder utilizarlos. Normalmente, la activación es automática si [inicia sesión con su cuenta 4D](GettingStarted/Installation.md) en el asistente de bienvenida.

Sin embargo, en algunos casos específicos podría ser necesario activar las licencias manualmente, por ejemplo si:

- su configuración no permite la activación automática,
- ha adquirido licencias adicionales.

No es necesaria la activación para los siguientes usos:

- 4D utilizado en modo remoto (conexión a un 4D Server)
- 4D utilizado en modo local con un proyecto aplicación interpretado sin acceso al entorno Diseño.

## Primera activación

Con 4D, seleccione el comando **Gestión de licencias...** del menú **Ayuda** de la aplicación. Con 4D Server, basta con lanzar la aplicación 4D Server. Aparece el diálogo para seleccionar el modo de activación.

![](../assets/en/getStart/server1.png)

4D ofrece tres modos de activación. Recomendamos **Activación inmediata**.

### Activación inmediata

Introduzca su identificación de usuario (correo electrónico o cuenta 4D) así como su contraseña. Si no tiene una cuenta de usuario, deberá crearla en la siguiente dirección:

[https://account.4d.com/us/login.shtml](https://account.4d.com/us/login.shtml)

![](../assets/en/getStart/activ1.png)

A continuación, introduzca el número de licencia del producto que desea activar. Este número se facilita por correo electrónico o por correo tras la compra de un producto.

![](../assets/en/getStart/activ2.png)

### Activación diferida

Si no puede utilizar la [activación inmediata](#instant-activation) porque su ordenador no tiene acceso a Internet, proceda a la activación diferida siguiendo los siguientes pasos.

1. En la ventana del Administrador de licencias, seleccione la pestaña **Activación diferida**.
2. Ingrese el número de licencia y su dirección de correo electrónico, luego haga clic en **Generar archivo** para crear el archivo de ID (_reg.txt_).

![](../assets/en/getStart/activ3.png)

3. Guarde el archivo _reg.txt_ en una unidad USB y llévelo a un ordenador que tenga acceso a Internet.
4. En la máquina con acceso a Internet, inicie sesión en [https://activation.4d.com](https://activation.4d.com).
5. En la página Web, haz clic en el botón **Elegir archivo...** y seleccione el archivo _reg.txt_ de los pasos 3 y 4; luego haga clic en el botón **Activate**.
6. Descargue los archivos seriales.

![](../assets/en/getStart/activ4.png)

7. Guarde el(los) archivo(s) _license4d_ en un medio compartido y transfiéralo(s) de nuevo a la máquina 4D del paso 1.
8. Ahora, de vuelta en la máquina con 4D, aún en la página de **Activación Diferida**, haga clic en **Siguiente**; luego clic en el botón **Cargar...** y seleccione un archivo _license4d_ de los medios compartidos del paso 7.

![](../assets/en/getStart/activ5.png)

Con el archivo de licencia cargado, haga clic en **Siguiente**.

![](../assets/en/getStart/activ6.png)

9. Haga clic en el botón **Añadir N°** para añadir otra licencia. Repita estos pasos hasta que se hayan integrado todas las licencias del paso 6.

Su aplicación 4D está ahora activada.

### Activación de emergencia

Este modo puede utilizarse para una activación temporal especial de 4D (5 días como máximo) sin conectarse al sitio web de 4D. Esta activación sólo puede utilizarse una vez.

## Añadir las licencias

Puede añadir nuevas licencias, por ejemplo para ampliar las capacidades de su aplicación, en cualquier momento.

Elija el comando **Administrador de licencias...** del menú **Ayuda** de la aplicación 4D o 4D Server, y luego haga clic en el botón **Refrescar**:

![](../assets/en/getStart/licens1.png)

Este botón lo conecta con nuestra base clientes y activa automáticamente todas las licencias nueva o actualizadas relacionadas con la licencia actual (la licencia actual se muestra en **negrita** en la lista de "Licencias activas"). Sólo se le pedirá su cuenta de usuario y su contraseña.

- Si ha adquirido expansiones adicionales para un servidor 4D, no es necesario introducir ningún número de licencia, simplemente haga clic en **Refrescar**.
- En la primera activación de un 4D Server, basta con introducir el número de servidor y todas las expansiones adquiridas se asignan automáticamente.

Puede utilizar el botón **Refrescar** en los siguientes contextos:

- Cuando haya comprado una expansión adicional y quiera activarla,
- Cuando necesite actualizar un número temporal caducado (Partners o evoluciones).

## 4D Online Store

En 4D Store, puede pedir, actualizar, extender y/o gestionar los productos 4D. Puede llegar a la tienda en la siguiente dirección: [https://store.4d.com/us/](https://store.4d.com/us/) (deberá seleccionar su país).

Haga clic en **Inicio de sesión** para acceder con su cuenta actual o en **Nueva cuenta** para crear una nueva, y luego siga las instrucciones que aparecen en pantalla.

### Gestión de licencias

Después de iniciar sesión, puede hacer clic en **Lista de licencias** en la parte superior derecha de la página:

![](../assets/en/getStart/licens2.png)

Aquí puede gestionar sus licencias asignándolas a proyectos.

Seleccione la licencia adecuada de la lista y, a continuación, haga clic en **Enlazar a un proyecto... >**:

![](../assets/en/getStart/licens3.png)

Puede seleccionar un proyecto existente o crear uno nuevo:

![](../assets/en/getStart/licens4.png)

![](../assets/en/getStart/licens5.png)

Puede utilizar los proyectos para organizar sus licencias según sus necesidades:

![](../assets/en/getStart/licens6.png)

## Solución de problemas

Si el proceso de instalación o activación falla, compruebe la siguiente tabla, en la que se indican las causas más comunes de mal funcionamiento:

| Síntomas                                                                                               | Causas posibles                                                    | Solución(es)                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Imposible descargar el producto desde el sitio web de 4D                                               | Sitio de Internet no disponible, aplicación antivirus, cortafuegos | 1- Inténtelo de nuevo más tarde O 2- Desactive temporalmente su aplicación antivirus o su cortafuegos.                                                              |
| Imposible instalar el producto en el disco (instalación rechazada). | Derechos de acceso de usuario insuficientes                        | Abra una sesión con derechos de acceso que le permitan instalar aplicaciones (acceso administrador)                                                              |
| Fallo de activación en línea                                                                           | Aplicación antivirus, cortafuegos, proxy                           | 1- Desactivar temporalmente su aplicación antivirus o su cortafuegos O 2- Utilizar la activación diferida (no disponible con las licencias de las versiones "R") |

Si esta información no le ayuda a resolver su problema, contacte 4D o a su distribuidor local.

## Contactos

Para cualquier pregunta sobre la instalación o activación de su producto, póngase en contacto con 4D, Inc. o con su distribuidor local.

Para US:

- Web: [https://us.4d.com/4d-technical-support](https://us.4d.com/4d-technical-support)
- Tel: 1-408-557-4600

Para UK:

- Web: [https://uk.4d.com/4d-technical-support](https://uk.4d.com/4d-technical-support)
- Teléfono: 01625 536178
