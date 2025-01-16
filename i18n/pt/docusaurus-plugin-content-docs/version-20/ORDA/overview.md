---
id: overview
title: ORDA
---

ORDA significa **Object Relational Data Access (Acesso a dados relacionais a objetos**). É uma tecnologia aprimorada que permite acessar o modelo e os dados de um banco de dados por meio de objetos.

As relações são incluídas de forma transparente no conceito, em combinação com o [lazy loading](glossary.md#lazy-loading), para eliminar todos os problemas típicos de seleção ou transferência de dados do desenvolvedor.

Com o ORDA, os dados são acessados por meio de uma camada de abstração, o [datastore](dsMapping.md#datastore). Um datastore é um objeto que fornece uma interface para o modelo de banco de dados e dados através de objetos e classes. Por exemplo, uma tabela é mapeada para um objeto [dataclass](dsMapping.md#dataclass) , um campo é um atributo [](dsMapping.md##attribute) de um dataclass, e registros são acessados através de [entidades](dsMapping.md#entity) e [seleções da entidade](dsMapping.md#entity-selection).


## Porquê utilizar ORDA?

Em vez de representar as informações como tabelas, registros e campos, a ORDA usa uma abordagem alternativa que mapeia com mais precisão os dados para conceitos do mundo real.

Imagine a capacidade de denormalizar uma estrutura relacional, mas não afeta a eficiência. Imagine descrever tudo sobre os objetos de negócios em seu aplicativo de tal forma que o uso dos dados se torne simples e direto e elimine a necessidade de um entendimento completo da estrutura relacional.

No modelo de dados da ORDA, um dataclass único pode incorporar todos os elementos que compõem uma tabela tradicional de banco de dados relacionado. mas também pode incluir valores de entidades pai relacionadas, e referências diretas a entidades relacionadas e seleções de entidades.

Uma consulta retorna uma lista de entidades chamada seleção de entidades, que cumpre o papel de um conjunto de linhas de uma consulta SQL. A diferença é que cada entidade "sabe" onde pertence no modelo de dados e "entende" sua relação com todas as outras entidades. Isto significa que um desenvolvedor não precisa explicar em uma consulta como relacionar as várias informações, nem em uma atualização de como escrever valores modificados de volta para a estrutura relacional.

Além disso, objetos ORDA como seleções de entidades ou entidades podem ser facilmente vinculados a objetos de interface do usuário, como caixas de lista ou variáveis. Combinado com recursos poderosos, como os comandos `This` e `Form` , eles permitem a construção de interfaces modernas e modulares baseadas em objetos e coleções.

## Como utilizar ORDA?

Basicamente, o ORDA lida com objetos. No ORDA, todos os conceitos principais, incluindo o próprio datastore, estão disponíveis através de objectos. Em 4D, a datastore é automaticamente [mapeada na estrutura 4D](dsMapping.md).

Objetos da ORDA podem ser manipulados como objetos padrão 4D, mas eles se beneficiam automaticamente de propriedades e métodos específicos.

Objetos ORDA são criados e instanciados quando necessário por métodos 4D (não é necessário criá-los). No entanto, objetos de modelo de dados da ORDA estão associados a classes [onde você pode adicionar funções personalizadas](ordaClasses.md).



