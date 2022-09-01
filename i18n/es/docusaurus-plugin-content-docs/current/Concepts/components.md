---
id: components
title: Componentes
---

Un componente 4D es un conjunto de métodos y formularios 4D que representan una o varias funcionalidades que pueden instalarse y utilizarse en sus proyectos. Por ejemplo, el [componente 4D SVG](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html) añade comandos avanzados y un motor de renderizado integrado que puede utilizarse para mostrar los archivos SVG.

## ¿Dónde encontrar los componentes?

Varios componentes están [preinstalados en el entorno de desarrollo 4D](Extensions/overview.md), pero muchos componentes 4D de la comunidad 4D [están disponibles en GitHub](https://github.com/search?q=4d-component&type=Repositories). Adicionalmente, puede [desarrollar sus propios componentes 4D](Extensions/develop-components.md).


## Instalación de los componentes

Para instalar un componente, basta con copiar los archivos del componente en la carpeta [`Components` del proyecto](Project/architecture.md). Puede utilizar alias o atajos.

Un proyecto local que se ejecuta en modo interpretado puede utilizar componentes interpretados o compilados. Un proyecto local que se ejecuta en modo compilado no puede utilizar componentes interpretados. En este caso, sólo se pueden utilizar componentes compilados.

## Utilización de los componentes

Los métodos y formularios de los componentes pueden utilizarse como elementos estándar en su desarrollo 4D.

Cuando un componente instalado contiene métodos, éstos aparecen en el tema **Métodos componente** de la página Métodos del Explorador.

Puede seleccionar un método componente y hacer clic en el botón **Documentación** del Explorador para obtener información sobre el mismo, [si la hay](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)
