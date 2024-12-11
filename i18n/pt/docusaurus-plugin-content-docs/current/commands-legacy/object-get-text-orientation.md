---
id: object-get-text-orientation
title: OBJECT Get text orientation
slug: /commands/object-get-text-orientation
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get text orientation.Syntax-->**OBJECT Get text orientation** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get text orientation.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especifica, objeto é um nome de objeto (cadeia) Se omite, objeto é um campo ou uma variável |
| object | any | &#8594;  | Nome de objeto (se for especificado *) ou Campo ou variável (se for omitido *) |
| Resultado | Integer | &#8592; | Ângulo de rotação de texto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get text orientation.Summary-->O comando **OBJECT Get text orientation** devolve o valor de orientação atual aplicado ao texto do objeto ou dos objetos designado(s) pelos parâmetros *objeto* e *\**.<!-- END REF-->

Pode configurar a opção "Orientação" para um objeto em modo de desenho utilizando a lista de propriedades, ou utilizando o comando [OBJECT SET TEXT ORIENTATION](object-set-text-orientation.md).

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passa uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).

O valor que se devolve corresponde a uma das seguintes constantes, que se encontram no tema "*Propriedades dos objetos* ":

| Constante             | Tipo          | Valor | Comentário                                        |
| --------------------- | ------------- | ----- | ------------------------------------------------- |
| Orientation 0°        | Inteiro longo | 0     | Sem rotação (valor por padrão)                    |
| Orientation 180°      | Inteiro longo | 180   | Orientação do texto a 180° no sentido horário     |
| Orientation 90° left  | Inteiro longo | 270   | Orientação do texto a 90° no sentido anti horário |
| Orientation 90° right | Inteiro longo | 90    | Orientação do texto a 90° no sentido horário      |

#### Exemplo 

Dado o seguinte objeto (onde se aplicou uma orientação "90 ° a esquerda" no editor de formulários):

![](../assets/en/commands/pict1209704.fr.png)

Quando se executa o formulário, é chamada a seguinte declaração:

```4d
 OBJECT SET TEXT ORIENTATION(*;"myText";Orientation 180°)
```

... a continuação, o objeto aparece da seguinte maneira:

![](../assets/en/commands/pict1209706.fr.png)

```4d
 $vOrt:=OBJECT Get text orientation(*;"myText") //$vOrt=180
```

#### Ver também 

[OBJECT SET TEXT ORIENTATION](object-set-text-orientation.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1283 |
| Thread-seguro | &check; |
| Proibido no servidor ||


