---
id: components
title: Componentes
---

Un componente 4D es un conjunto de código y de formularios 4D que representan una o varias funcionalidades que pueden instalarse y utilizarse en sus proyectos. Por ejemplo, el [componente 4D SVG](https://doc.4d.com/4Dv20/4D/20/4D-SVG-Component.100-6342795.en.html) añade comandos avanzados y un motor de renderizado integrado que puede utilizarse para visualizar archivos SVG.

## Instalación de los componentes

Varios componentes están [preinstalados en el entorno de desarrollo 4D](Extensions/overview.md), pero muchos componentes 4D de la comunidad 4D [están disponibles en GitHub](https://github.com/search?q=4d-component\&type=Repositories). Adicionalmente, puede [desarrollar sus propios componentes 4D](Extensions/develop-components.md).

Installation and loading of components in your 4D projects are handled through the [4D dependency manager](../Project/components.md).

## Utilización de los componentes

El código expuesto de los componentes (métodos y funciones) así como los formularios pueden ser utilizados como elementos estándar en su desarrollo 4D.

Cuando un componente instalado contiene métodos, clases y funciones, éstos aparecen en el tema **Métodos componente** de la página Métodos del Explorador:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

Si el componente está compilado, su [espacio de nombres](../Extensions/develop-components.md#declaring-the-component-namespace) se escribe entre paréntesis después de su nombre. Utilice este espacio de nombres para acceder a las funciones del componente.

:::

Puede seleccionar un [método proyecto](methods.md) o [clase](classes.md) y hacer clic en el botón **Documentación** del Explorador para obtener información sobre el mismo, [si la hay](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)
