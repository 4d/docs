---
id: components
title: Componentes
---

Um componente 4D é um conjunto de código 4D e formulários que representam uma ou mais funcionalidades que pode instalar e usar nos seus projectos. For example, the [4D SVG component](https://doc.4d.com/4Dv20/4D/20/4D-SVG-Component.100-6342795.en.html) adds advanced commands and an integrated rendering engine that can be used to display SVG files.

## Instalação de componentes

Varios componentes están [preinstalados en el entorno de desarrollo 4D](Extensions/overview.md), pero muchos componentes 4D de la comunidad 4D [están disponibles en GitHub](https://github.com/search?q=4d-component\&type=Repositories). Adicionalmente, puede [desarrollar sus propios componentes 4D](Extensions/develop-components.md).

Installation and loading of components in your 4D projects are handled through the [4D package manager](../Project/components.md).

## Utilização de componentes

O código de componente exposto (métodos e funções) assim como os formulários podem ser usados como elementos padrão no seu desenvolvimento 4D.

Cuando un componente instalado contiene métodos, clases y funciones, éstos aparecen en el tema **Métodos componente** de la página Métodos del Explorador:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

Si el componente está compilado, su [espacio de nombres](../Extensions/develop-components.md#declaring-the-component-namespace) se escribe entre paréntesis después de su nombre. Utilize este espaço de nomes para aceder às funções do componente.

:::

Puede seleccionar un [método proyecto](methods.md) o [clase](classes.md) y hacer clic en el botón **Documentación** del Explorador para obtener información sobre el mismo, [si la hay](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)
