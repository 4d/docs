---
id: general
title: Página General
---

La página General contiene las opciones para configurar los parámetros genéricos del proyecto 4D.

## Diseño

This area contains the **Display toolbar** option. Cuando está marcada, la barra de herramientas 4D se muestra en el entorno de Diseño.

## General

En esta área se pueden configurar las opciones relativas a la puesta en marcha y el funcionamiento del proyecto.

### Modo de inicio

You use this menu to select the default startup mode for the database: **Design** or **Application**. A menos que se especifique, 4D se abre por defecto en el entorno Diseño si no se activa un sistema de acceso con contraseña.

## Componente

This area allows [component developers](../Extensions/develop-components.md) to configure how their component classes and functions will be exposed in the 4D Code Editor once the component is installed.

### Namespace del componente en la class store

Utilice esta área para declarar un espacio de nombres para las clases y las funciones del componente en el código de los proyectos locales. See [Declaring the component namespace](../Extensions/develop-components.md#declaring-the-component-namespace).

### Generar el archivo de sintaxis para completar el código cuando se compila

Al marcar esta opción, se crea automáticamente un archivo de sintaxis (formato JSON) durante la fase de compilación. See [Code completion for compiled components](../Extensions/develop-components.md#code-completion-for-compiled-components).
