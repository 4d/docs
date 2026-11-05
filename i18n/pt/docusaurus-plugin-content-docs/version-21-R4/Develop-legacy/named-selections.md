---
id: named-selections
title: Seleções Nomeadas
slug: /Develop/named-selections
displayed_sidebar: docs
---



Seleções nomeadas fornecem uma maneira fácil de manipular várias seleções simultaneamente. Uma seleção nomeada é uma lista ordenada de registros para uma tabela em um processo. Essa lista ordenada pode receber um nome e ser mantida na memória. Seleções nomeadas oferecem um meio simples de preservar na memória a ordem da seleção e o registro atual da seleção.

Os seguintes comandos permitem que você trabalhe com seleções nomeadas:

- [`COPY NAMED SELECTION`](../commands/copy-named-selection)
- [`CUT NAMED SELECTION`](../commands/cut-named-selection)
- [`USE NAMED SELECTION`](../commands/use-named-selection)
- [`CLEAR NAMED SELECTION`](../commands/clear-named-selection)
- [`CREATE SELECTION FROM ARRAY`](../commands/create-selection-from-array)


Seleções nomeadas são criadas com [`COPY NAMED SELECTION`](../commands/copy-named-selection), [`CUT NAMED SELECTION`](../commands/cut-named-selection) e [`CREATE SELECTION FROM ARRAY`](../commands/create-selection-from-array). Seleções nomeadas são geralmente usadas para trabalhar com uma ou mais seleções e para salvar e posteriormente restaurar uma seleção ordenada. Pode haver várias seleções nomeadas para cada tabela em um processo. Para reutilizar uma seleção nomeada como a seleção atual, chame [`USE NAMED SELECTION`](../commands/use-named-selection). Quando terminar de usar uma seleção nomeada, utilize [`CLEAR NAMED SELECTION`](../commands/clear-named-selection).

:::note

Combinar a instrução `SET QUERY DESTINATION(Into named selection;namedselection)` com um comando de busca (por exemplo [`QUERY`](../commands/query)) também pode ser usado para criar uma seleção nomeada. Consulte a descrição do comando [`SET QUERY DESTINATION`](../commands/set-query-destination).

:::

Seleções nomeadas podem ter escopo local, de processo ou interprocesso.

Uma seleção nomeada é local quando seu nome é precedido por um cifrão. Quando seu nome não é precedido por nenhum símbolo, é uma seleção nomeada de processo e é uma seleção nomeada interprocesso se seu nome for precedido pelos símbolos (<>), ou seja, um sinal de “menor que” seguido por um sinal de “maior que”.

O escopo de uma seleção nomeada interprocesso é idêntico ao escopo de uma variável interprocesso (*obsoleto*). Uma seleção nomeada interprocesso pode ser acessada a partir de qualquer processo. Com o 4D em modo remoto e 4D Server, uma seleção nomeada interprocesso está disponível apenas para os processos do cliente que a criou. Uma seleção nomeada interprocesso não está disponível para outras máquinas clientes.
Uma seleção nomeada de processo está disponível apenas dentro do processo em que foi criada e no servidor.
Uma seleção nomeada local é definida para o processo que a criou e não é visível no servidor.

:::note

Criar uma seleção nomeada requer acesso à seleção da tabela. Como as seleções são mantidas no servidor e um processo local não tem acesso aos dados do servidor, não utilize seleções nomeadas dentro de processos locais.

:::

## Visibilidade das Seleções Nomeadas  

A tabela a seguir indica os princípios relativos à visibilidade das seleções nomeadas dependendo do seu escopo e de onde foram criadas:


||Processo do cliente|Outros processos no mesmo cliente|Outros clientes	|Processo do servidor|Outros processos no servidor|
|---|---|---|---|---|---|
|Criação em um processo do cliente	||||||	 	 
|$test|X|||||
|test	|X|||X(Trigger)	 ||
|<>test| X| X	||||
|Criação em um processo do servidor	 ||||||	 	 	 	 
|$test||||X||
|test|||| X	|| 
|<>test	|||| X|X|


## Seleções Nomeadas e Conjuntos

As diferenças entre [conjuntos](./sets.md) e seleções nomeadas são:

- Uma seleção nomeada é uma lista ordenada de registros; um conjunto não é.
- Conjuntos são muito eficientes em termos de memória, pois requerem apenas um bit para cada registro no arquivo. Seleções nomeadas requerem 4 bytes para cada registro na seleção.
- Diferente dos conjuntos, seleções nomeadas não podem ser salvas em disco.
- Conjuntos possuem as operações padrão [`INTERSECTION`](../commands/intersection), [`UNION`](../commands/union) e [`DIFFERENCE`](../commands/difference); seleções nomeadas não podem ser combinadas com outras seleções nomeadas.


As semelhanças entre seleções nomeadas e conjuntos são:

- Assim como um conjunto, uma seleção nomeada existe na memória.
- Uma seleção nomeada e um conjunto armazenam referências a um registro. Se registros forem modificados ou excluídos, a seleção nomeada ou o conjunto podem se tornar inválidos.
- Assim como um conjunto, uma seleção nomeada “lembra” o registro atual no momento em que a seleção nomeada foi criada.
