---
id: sdi
title: Mode SDI bajo Windows
---

En Windows, los desarrolladores 4D pueden probar y configurar sus aplicaciones fusionadas 4D para que funcionen como aplicaciones SDI (Single-Document Interface). En las aplicaciones SDI, cada ventana es independiente de las demás y puede tener su propia barra de menús. Las aplicaciones SDI se oponen a las aplicaciones MDI (Multiple Documents Interface), en las que todas las ventanas están contenidas y dependen de la ventana principal.

:::info

The concept of sdi.mdI does not exist on macOS. Esta funcionalidad sólo afecta a las aplicaciones de Windows y las opciones relacionadas se ignoran en macOS.

:::

## Disponibilidad del modo SDI

El modo SDI sólo está disponible en los siguientes entornos de ejecución:

- Windows
- Fusionado aplicación 4D [autónomo](../Desktop/building.md#build-stand-alone-application) o [cliente](../Desktop/building.md#build-client-application)
- [**Funcionalidad de prueba de la aplicación**](bars.md#previewing-menu-bars) disponible desde el menú **Ejecutar**.

## Activación del modo SDI

Para activar el modo SDI en su aplicación, sólo tiene que marcar la opción **Utilizar el modo SDI en Windows** en la página ["Interfaz" de la caja de diálogo Configuración](../settings/interface.md#display-windows).

Una vez habilitado, para ejecutar realmente su aplicación en modo SDI, puede:

- crear una aplicación combinada (independiente y/o cliente) y ejecutarla en Windows, o bien
- seleccione **Aplicación de prueba en modo SDI** en el menú **Ejecutar** en Windows para probar el desarrollo.

:::info

Dado que el entorno de desarrollo se ejecuta en MDI, cambiar del modo de desarrollo al modo de ejecución utilizando el elemento de menú **Probar aplicación en modo SDI** equivale a reiniciar la aplicación.

:::

## Gestión de aplicaciones en modo SDI

La ejecución de una aplicación 4D en modo SDI no requiere ninguna implementación específica: las barras de menú existentes se desplazan automáticamente en las propias ventanas SDI. Sin embargo, debe prestar atención a los principios específicos que se enumeran a continuación.

### Menús en las ventanas

En modo SDI, la barra de menú del proceso se muestra automáticamente en cada ventana de tipo de documento abierta durante la vida del proceso (esto excluye, por ejemplo, las paletas flotantes). Sin embargo, cuando la barra de menús del proceso no está visible, los accesos directos a los elementos del menú permanecen activos.

Los menús se añaden sobre las ventanas sin modificar el tamaño de su contenido:

![](../assets/en/Menus/sdi1.png)

Así, las ventanas pueden utilizarse en los modos MDI o SDI sin tener que recalcular la posición de los objetos.

#### Pantalla de bienvenida

- Si se seleccionó la opción de interfaz **Pantalla de bienvenida** en los [Parámetros](../settings/interface.md#display-windows), la ventana de bienvenida contendrá los menús que se habrían mostrado en la ventana MDI. Tenga en cuenta también que al cerrar la ventana de la pantalla de inicio se saldrá de la aplicación, al igual que en el modo MDI.
- Si no se ha seleccionado la opción de pantalla de bienvenida, los menús se mostrarán sólo en las ventanas abiertas, según las elecciones del desarrollador.

### Debugger

Cuando se muestra en modo SDI, la [ventana del depurador](../Debugging/debugger.md) no contiene [botones de edición](../Debugging/debugger.md#tool-bar-buttons), porque cambiar al entorno de desarrollo requiere abortar la ejecución y reiniciar la aplicación en modo MDI.

### Salida automática

Cuando se ejecuta en modo MDI, una aplicación 4D simplemente se cierra cuando el usuario cierra la ventana de la aplicación (ventana MDI). Sin embargo, cuando se ejecutan en modo SDI, las aplicaciones 4D no tienen una ventana de aplicación y, por otra parte, el cierre de la última ventana abierta no significa necesariamente que el usuario quiera que la aplicación salga (pueden estar ejecutándose procesos sin interfaz, por ejemplo) - aunque podría ser lo que se desea.

Para manejar este caso, las aplicaciones 4D ejecutadas en modo SDI incluyen un mecanismo para salir automáticamente (llamando al comando `QUIT 4D`) cuando se cumplen las siguientes condiciones:

- el usuario no puede seguir interactuando con la aplicación
- no hay procesos de usuario en curso
- Los procesos 4D o workers están esperando un evento
- el servidor web no se ha lanzado
- el [servidor WebAdmin](../Admin/webAdmin.md) no está iniciado.

:::note

Cuando se llama a un menú con una acción estándar asociada *salir*, la aplicación sale y se cierran todas las ventanas, sea cual sea el lugar desde el que se llamó al menú.

:::

## Lenguaje

Aunque es manejado de forma transparente por 4D, el modo SDI introduce pequeñas variaciones en la gestión de la interfaz de la aplicación. A continuación se enumeran las especificidades del lenguaje 4D.

| Comando/funcionalidad             | Especificidad en el modo SDI en Windows                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Open form window`                | Opciones para soportar las ventanas flotantes en SDI (`Controller form window`) y para eliminar la barra de menú (`Form has no menu bar`)                                                                                                                                                                                           |
| `Menu bar height`                 | Devuelve la altura en píxeles de una línea de barra de menú única, incluso si la barra de menú se ha envuelto en dos o más líneas. Devuelve 0 cuando el comando es llamado desde un proceso sin ventana formulario                                                                                                                                        |
| `SHOW MENU BAR` / `HIDE MENU BAR` | Se aplica sólo a la ventana formulario actual (desde donde se ejecuta el código)                                                                                                                                                                                                                                                                       |
| `MAXIMIZE WINDOW`                 | La ventana se maximiza al tamaño de la pantalla                                                                                                                                                                                                                                                                                                                           |
| `CONVERT COORDINATES`             | `XY Screen` es el sistema de coordenadas global donde la pantalla principal se sitúa en (0,0). Las pantallas situadas a su izquierda o arriba pueden tener coordenadas negativas y las situadas a su derecha o debajo pueden tener coordenadas mayores que los valores devueltos por `Screen height` o `Screen width`. |
| `MOUSE POSITION`                  | Las coordenadas globales son relativas a la pantalla                                                                                                                                                                                                                                                                                                                      |
| `GET WINDOW RECT`                 | Cuando se pasa -1 en el parámetro ventana, el comando devuelve 0;0;0;0                                                                                                                                                                                                                                                                                                    |
| `On Drop database method`         | No soportado                                                                                                                                                                                                                                                                                                                                                              |

:::info

You can use the [**Application info**](https://doc.4d.com/4dv19R/help/command/en/page1599.html) command to know the current running mode on Windows.

:::
