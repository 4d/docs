---
id: components
title: Componentes
---

Um componente 4D é um conjunto de código 4D e formulários que representam uma ou mais funcionalidades que pode instalar e usar nos seus projectos. Por exemplo, o [componente 4D SVG](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html) adiciona comandos avançados e um motor de renderização integrado que pode ser utilizado para apresentar ficheiros SVG.

## Onde encontrar componentes?

Criar e instalar componentes 4D é realizado diretamente a partir de 4D. Basicamente, os componentes são geridos como [plug-ins](Concepts/plug-ins.md) de acordo com os seguintes princípios: Além disso, pode [desenvolver os seus próprios componentes 4D](Extensions/develop-components.md).


## Instalação de componentes

To install a component, you simply need to copy the component package folder into the [`Components` folder of the project](Project/architecture.md). Pode usar pseudónimos ou atalhos.

Um projecto anfitrião executado em modo interpretado pode utilizar componentes interpretados ou compilados. Um projecto anfitrião executado em modo compilado não pode utilizar componentes interpretados. Por isso não pode ser usado em um componente.

:::note

Interpreted component package folder name must be suffixed ".4dbase".

:::

## Utilização de componentes

O código de componente exposto (métodos e funções) assim como os formulários podem ser usados como elementos padrão no seu desenvolvimento 4D.

Quando um componente instalado contém métodos, classes e funções, estes aparecem no tema **Component Methods** da página Métodos do Explorador:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

Se o componente for compilado, o seu espaço de nomes [](../Extensions/develop-components.md#declaring-the-component-namespace) é escrito entre parênteses após o seu nome. Utilize este espaço de nomes para aceder às funções do componente.

:::

Pode seleccionar um componente [método de projecto](methods.md) ou [classe](classes.md) e clicar no botão **Documentação** do Explorador para obter informações sobre o mesmo, [se existir](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)
