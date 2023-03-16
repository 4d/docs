---
id: php
title: Págin PHP
---

En 4D, puede ejecutar scripts PHP configurando directamente la página PHP de las Propiedades de la base de datos (ver [Ejecución de scripts PHP en 4D](https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.en.html) en el manual *Lenguaje* de 4D).

## Intérprete

-   **Dirección IP** y número de puerto Por defecto, 4D ofrece un intérprete PHP, compilado en FastCGI. Por razones relacionadas con la arquitectura interna, las peticiones de ejecución van al intérprete PHP en una dirección HTTP específica. Por defecto, 4D utiliza la dirección 127.0.0.1 y el puerto 8002. Puede cambiar esta dirección y/o puerto si ya están siendo utilizados por otro servicio o si tiene varios intérpretes en la misma máquina. Para esto, modifique los parámetros **Dirección IP** y **Número de puerto**.\
  Tenga en cuenta que la dirección HTTP debe estar en la misma máquina que 4D.

-   **Intérprete externo** Si utiliza un intérprete PHP externo, debe estar compilado en FastCGI y estar en la misma máquina que 4D (ver "Utilizando otro intérprete PHP u otro archivo php.ini" en [Ejecutando scripts PHP en 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html)). Seleccione esta opción para que 4D no intente una conexión con el intérprete interno durante la ejecución de una petición PHP. Tenga en cuenta que esta configuración requiere su ejecución manual y el control del intérprete externo.

**4D Server:** estos parámetros son compartidos entre 4D Server y las máquinas remotas 4D, por lo que no es posible utilizar un intérprete externo en la máquina servidor y utilizar simultáneamente el intérprete interno en las máquinas clientes (y viceversa). Además, si el servidor utiliza un intérprete externo en el puerto 9002, las máquinas cliente también deben utilizar un intérprete en este puerto.

## Opciones

Estas opciones están relacionadas con la gestión automática del intérprete PHP 4D y se desactivan cuando se selecciona la opción **Intérprete externo**.

-   **Número de procesos**: el intérprete PHP 4D maneja un conjunto de procesos de ejecución sistema llamados "procesos hijos". Para su optimización, puede ejecutar y mantener hasta cinco procesos hijo simultáneamente por defecto. Puede modificar el número de procesos hijos según sus necesidades. Por ejemplo, puede que desee aumentar este valor si utiliza el intérprete PHP de forma intensiva. Para más información, consulte la sección "Arquitectura" en [Ejecución de scripts PHP en 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html).

    > **Nota:** en Mac OS, todos los procesos hijo comparten el mismo puerto. En Windows, cada proceso hijo utiliza un número de puerto específico. El primer número es el definido para el intérprete PHP; los otros procesos hijo incrementan este número. Por ejemplo, si el puerto por defecto es 8002 y lanza 5 procesos hijo, éstos utilizarán los puertos 8002 a 8006.

-   **Reiniciar el intérprete después de X peticiones**: define el número máximo de peticiones que acepta el intérprete PHP de 4D. Cuando se alcanza este número, el intérprete se reinicia. Para más información sobre este parámetro, consulte la documentación FastCGI-PHP.
> **Nota:** en esta caja de diálogo, los parámetros se especifican por defecto para todas las máquinas conectadas y todas las sesiones. También puede modificarlos y leerlos por separado para cada máquina y cada sesión utilizando los comandos [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) y [Get database parameter](https://doc.4d.com/4dv19R/help/command/en/page643.html). Los parámetros modificados por el comando [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) tienen prioridad para la sesión actual.