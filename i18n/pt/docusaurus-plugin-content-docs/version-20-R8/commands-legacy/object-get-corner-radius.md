---
id: object-get-corner-radius
title: OBJECT Get corner radius
slug: /commands/object-get-corner-radius
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get corner radius.Syntax-->**OBJECT Get corner radius** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get corner radius.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é uma variável ou um campo |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Campo ou variável (se omitido *) |
| Resultado | Integer | &#8592; | Rádio de esquinas arredondadas (em píxels) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get corner radius.Summary-->O comando **OBJECT Get corner radius** devolve o valor atual do rádio da esquina para o objeto retângulo arredondado cujo nome se passar no parâmetro *objeto*.<!-- END REF--> Este valor pode ter sido definido a nível do formulário utilizando a lista de propriedades (ver *Rádio da esquina (retângulos)*), ou para o processo atual com o comando [OBJECT SET CORNER RADIUS](object-set-corner-radius.md).

O comando OBJECT Get corner radius pode ser utilizardo com os seguintes objetos de formulário:

* retângulos
* entradas (só projetos 4D)
* áreas de texto (só projetos 4D)

Ao passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável em vez de uma cadeia (campo ou variável objeto unicamente).

**Nota:** na versão atual de 4D, este comando só se aplica aos retângulos arredondados (que são objetos estáticos). Como resultado, só a sintaxe baseada no nome de objeto (usando o parâmetro *\**) é compatível.

Este comando devolve o rádio de esquinas arredondadas em píxels. Por padrão, este valor é de 5 píxels.

#### Exemplo 

O seguinte código pode ser adicionado a um método button:

```4d
 var $radius : Integer
 $radius:=OBJECT Get corner radius(*;"GreenRect") //obtém o valor atual
 OBJECT SET CORNER RADIUS(*;"GreenRect";$radius+1) //aumenta o rádio
  // O valor máximo será gerenciado automaticamente: quando se alcance, button
  // não fará nada
```

#### Ver também 

[OBJECT SET CORNER RADIUS](object-set-corner-radius.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1324 |
| Thread-seguro | &cross; |


