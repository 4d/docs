---
id: overview
title: ORDA
---

ORDA significa **Object Relational Data Access**. É uma tecnologia aprimorada que permite acessar o modelo e os dados de um banco de dados por objetos.

Las relaciones se incluyen de forma transparente en el concepto, en combinación con el principio del [lazy loading](glossary.md#lazy-loading), para eliminar todas las molestias típicas de la selección o la transferencia de datos del desarrollador.

Con ORDA, se accede a los datos a través de una capa de abstracción, el [datastore](dsMapping.md#datastore). Um datastore é um objeto que fornece uma interface para o modelo de banco de dados e dados através de objetos e classes. For example, a table is mapped to a [dataclass](dsMapping.md#dataclass) object, a field is an [attribute](dsMapping.md##attribute) of a dataclass, and records are accessed through [entities](dsMapping.md#entity) and [entity selections](dsMapping.md#entity-selection).

## Porquê utilizar ORDA?

Em vez de representar as informações como tabelas, registros e campos, a ORDA usa uma abordagem alternativa que mapeia com mais precisão os dados para conceitos reais.

Imagine a capacidade de denormalizar uma estrutura relacional, mas não afeta a eficiência. Imagine descrever tudo sobre os objetos de negócios em seu aplicativo de tal forma que o uso dos dados se torne simples e direto e elimine a necessidade de um entendimento completo da estrutura relacional.

No modelo de dados ORDA, um dataclass único pode incorporar todos os elementos que compõem uma tabela tradicional de banco de dados relacionado. mas também pode incluir valores de entidades pai relacionadas, e referências diretas a entidades relacionadas e seleções de entidades.

Uma consulta retorna uma lista de entidades chamada seleção de entidades, que cumpre o papel de um conjunto de linhas de uma consulta SQL. A diferença é que cada entidade "sabe" onde pertence no modelo de dados e "entende" sua relação com todas as outras entidades. Isto significa que um desenvolvedor não precisa explicar em uma consulta como relacionar as várias informações, nem em uma atualização de como escrever valores modificados de volta para a estrutura relacional.

Além disso, objetos ORDA como seleções de entidades ou entidades podem ser facilmente vinculados a objetos de interface do usuário, como list box ou variáveis. Combinadas con las funcionalidades poderosas tales como los comandos `This` y `Form`, permiten construir interfaces modernas y modulares basadas en objetos y colecciones.

## Como utilizar ORDA?

Basicamente, o ORDA lida com objetos. No ORDA, todos os conceitos principais, incluindo o próprio datastore, estão disponíveis através de objectos. En 4D, el datastore es automáticamente [mapeado sobre la estructura 4D](dsMapping.md).

Os objetos no ORDA podem ser manipulados como os objetos padrão 4D, mas eles se beneficiam automaticamente de propriedades e métodos específicos.

Os objetos ORDA são criados e instanciados quando necessário pelos métodos 4D (você não precisa criá-los). Sin embargo, los objetos del modelo de datos ORDA están asociados a las [clases en las que se pueden añadir funciones personalizadas](ordaClasses.md).



