---
id: form-event
title: FORM Event
slug: /commands/form-event
displayed_sidebar: docs
---

<!--REF #_command_.FORM Event.Syntax-->**FORM Event** : Object<!-- END REF-->
<!--REF #_command_.FORM Event.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Object | &#8592; | objeto evento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FORM Event.Summary-->**FORM Event** devolve um objeto que contém informação sobre o evento de formulário que acaba de ocorrer.<!-- END REF--> Em geral, usará **FORM Event** desde um formulário ou método de objeto.

**Objeto devolvido** 

Cada objeto devolvido inclui as propriedades principais:

| **Propriedade** | **Tipo**      | **Descrição**                                                                                    |
| --------------- | ------------- | ------------------------------------------------------------------------------------------------ |
| objectName      | texto         | Nome de objeto que desencadeia o evento: não inclui se o evento for desencadeado pelo formulário |
| code            | inteiro longo | Valor numérico de evento de formulário. Ver [Form event code](../commands/form-event-code.md)                |
| description     | texto         | Nome de evento de formulário (por exemplo, "On After Edit").                                     |

Por exemplo, no caso de clicar no botão, o objeto contém as propriedades abaixo:

```RAW
{"code":4,"description":"On Clicked","objectName":"Button2"}
```

O objeto de evento pode conter propriedades adicionais, dependendo do objeto para o qual ocorre o evento. Por exemplo, os objetos *eventObj* gerados em:

* Objetos List box ou colunas, veja *list box documentation on developer.4d.com*.
* Áreas 4D View Pro, veja *Evento formulário On VP Ready*.O

**Nota:** se não há um evento atual, **FORM Event** devolvido um objeto nulo.

#### Exemplo 1 

Se quiser manejar o evento On Clicked em um botão:

```4d
 If(FORM Event.code=On Clicked)
    ...
 End if
```

#### Exemplo 2 

Se estabelecer o nome de objeto coluna com um nome atributo real de uma dataclasse como:

![](../assets/en/commands/pict4843820.en.png)

Pode ordenar a coluna usando o evento On Header Click:

```4d
 Form.event:=FORM Event
 Case of
    :(Form event code=On Header Click)
       if(Form.event.columnName="lastname")
          Form.employees:=Form.employees.orderBy(Form.event.columnName+", firstname")
       End if
 End case
```

#### Exemplo 3 

Se quiser manejar On Display Details em um objeto list box com um método estabelecido na propriedade *Meta info expression*:

![](../assets/en/commands/pict4843812.en.png)

O método *setColor*:

```4d
 var $event;$0;$meta : Object
 $event:=[#current_title_incod]
 $meta:=New object
 
 Case of
    :($event.code=On Display Detail)
       If($event.isRowSelected)
          $meta.fill:="lightblue"
       End if
 End case
 $0:=$meta
```

A list box resultado quando linhas são selecionadas:

![](../assets/en/commands/pict4843808.en.png)

#### Ver também 

[Form event code](../commands/form-event-code.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1606 |
| Thread-seguro | &check; |


