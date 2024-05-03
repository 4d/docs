---
id: sdi
title: Mode SDI bajo Windows
---

En Windows, los desarrolladores 4D pueden probar y configurar sus aplicaciones fusionadas 4D para que funcionen como aplicaciones SDI (Single-Document Interface). En las aplicaciones SDI, cada ventana es independiente de las demás y puede tener su propia barra de menús. Las aplicaciones SDI se oponen a las aplicaciones MDI (Multiple Documents Interface), en las que todas las ventanas están contenidas y dependen de la ventana principal.

:::info

El concepto de SDI/MDI no existe en macOS. Esta funcionalidad sólo afecta a las aplicaciones de Windows y las opciones relacionadas se ignoran en macOS.

:::

## Disponibilidad del modo SDI

El modo SDI sólo está disponible en los siguientes entornos de ejecución:

- Windows
- Merged [stand-alone](../Desktop/building.md#build-stand-alone-application) or [client](../Desktop/building.md#build-client-application) 4D application
- [**Test application** feature](bars.md#previewing-menu-bars) available from the **Run** menu.

## Activación del modo SDI

To enable the SDI mode in your application, just check the **Use SDI mode on Windows** option in the ["Interface" page of the Settings dialog box](../settings/interface.md#display-windows).

Una vez habilitado, para ejecutar realmente su aplicación en modo SDI, puede:

- crear una aplicación combinada (independiente y/o cliente) y ejecutarla en Windows, o bien
- select **Test Application in SDI Mode** from the **Run** menu on Windows to test the development.

:::info

Because the development environment is executed in MDI, switching from development mode to runtime mode using the **Test Application in SDI Mode** menu item is equivalent to restarting your application.

:::

## Gestión de aplicaciones en modo SDI

La ejecución de una aplicación 4D en modo SDI no requiere ninguna implementación específica: las barras de menú existentes se desplazan automáticamente en las propias ventanas SDI. Sin embargo, debe prestar atención a los principios específicos que se enumeran a continuación.

### Menús en las ventanas

En modo SDI, la barra de menú del proceso se muestra automáticamente en cada ventana de tipo de documento abierta durante la vida del proceso (esto excluye, por ejemplo, las paletas flotantes). Sin embargo, cuando la barra de menús del proceso no está visible, los accesos directos a los elementos del menú permanecen activos.

Los menús se añaden sobre las ventanas sin modificar el tamaño de su contenido:

![](../assets/en/Menus/sdi1.png)

Así, las ventanas pueden utilizarse en los modos MDI o SDI sin tener que recalcular la posición de los objetos.

#### Pantalla de bienvenida

- If the **Splash screen** interface option was [selected in the Settings](../settings/interface.md#display-windows), the splash window will contain any menus that would have been displayed in the MDI window. Tenga en cuenta también que al cerrar la ventana de la pantalla de inicio se saldrá de la aplicación, al igual que en el modo MDI.
- Si no se ha seleccionado la opción de pantalla de bienvenida, los menús se mostrarán sólo en las ventanas abiertas, según las elecciones del desarrollador.

### Debugger

When displayed in SDI mode, the [debugger window](../Debugging/debugger.md) does not contain [editing buttons](../Debugging/debugger.md#tool-bar-buttons), because switching to development environment requires to abort execution and restart the application in MDI mode.

### Salida automática

Cuando se ejecuta en modo MDI, una aplicación 4D simplemente se cierra cuando el usuario cierra la ventana de la aplicación (ventana MDI). Sin embargo, cuando se ejecutan en modo SDI, las aplicaciones 4D no tienen una ventana de aplicación y, por otra parte, el cierre de la última ventana abierta no significa necesariamente que el usuario quiera que la aplicación salga (pueden estar ejecutándose procesos sin interfaz, por ejemplo) - aunque podría ser lo que se desea.

To handle this case, 4D applications executed in SDI mode include a mechanism to automatically quit (by calling the `QUIT 4D` command) when the following conditions are met:

- el usuario no puede seguir interactuando con la aplicación
- no hay procesos de usuario en curso
- Los procesos 4D o workers están esperando un evento
- el servidor web no se ha lanzado
- the [WebAdmin server](../Admin/webAdmin.md) is not started.

:::note

When a menu with an associated _quit_ standard action is called, the application quits and all windows are closed, wherever the menu was called from.

:::

## Lenguaje

Aunque es manejado de forma transparente por 4D, el modo SDI introduce pequeñas variaciones en la gestión de la interfaz de la aplicación. A continuación se enumeran las especificidades del lenguaje 4D.

| Comando/funcionalidad             | Especificidad en el modo SDI en Windows                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Open form window`                | Options to support floating windows in SDI (`Controller form window`) and to remove the menu bar (`Form has no menu bar`)                                                                                                                                                                                                    |
| `Menu bar height`                 | Devuelve la altura en píxeles de una línea de barra de menú única, incluso si la barra de menú se ha envuelto en dos o más líneas. Devuelve 0 cuando el comando es llamado desde un proceso sin ventana formulario                                                                                                                                 |
| `SHOW MENU BAR` / `HIDE MENU BAR` | Se aplica sólo a la ventana formulario actual (desde donde se ejecuta el código)                                                                                                                                                                                                                                                                |
| `MAXIMIZE WINDOW`                 | La ventana se maximiza al tamaño de la pantalla                                                                                                                                                                                                                                                                                                                    |
| `CONVERT COORDINATES`             | `XY Screen` is the global coordinate system where the main screen is positioned at (0,0). Screens on its left side or on top of it can have negative coordinates and any screens on its right side or underneath it can have coordinates greater than the values returned by `Screen height` or `Screen width`. |
| `GET MOUSE`                       | Las coordenadas globales son relativas a la pantalla                                                                                                                                                                                                                                                                                                               |
| `GET WINDOW RECT`                 | Cuando se pasa -1 en el parámetro ventana, el comando devuelve 0;0;0;0                                                                                                                                                                                                                                                                                             |
| `On Drop database method`         | No soportado                                                                                                                                                                                                                                                                                                                                                       |

:::info

You can use the [**Get application info**](https://doc.4d.com/4dv19R/help/command/en/page1599.html) command to know the current running mode on Windows.

:::
