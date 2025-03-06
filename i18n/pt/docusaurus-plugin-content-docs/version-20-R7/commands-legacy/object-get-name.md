---
id: object-get-name
title: OBJECT Get name
slug: /commands/object-get-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get name.Syntax-->**OBJECT Get name** {( *seletor* )} : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get name.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| seletor | Integer | &#8594;  | Categoria de objeto |
| Resultado | Text | &#8592; | Nome de objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get name.Summary-->O comando OBJECT Get name retorna o nome de um objeto de formulário.<!-- END REF-->   
  
O comando permite designar dois tipos de objetos em função do parâmetro *seletor*. Neste parâmetro, pode passar uma das seguintes constantes (localizadas no tema "*Objetos de formulário (Acesso)*":  

* Object current ou *seletor* omitido: se passar este seletor ou omitir o parâmetro *seletor*, o comando retorna o nome do objeto a partir do qual foi chamado (método objeto ou submétodo chamado pelo método de objeto). Neste caso, o comando deve ser chamado no contexto de um objeto de formulário, do contrário retorna uma string vazia.
* Object with focus: se passar este seletor, o comando retorna o nome do objeto que tem o foco no formulário.

#### Exemplo 

Método objeto do botão "bValidateForm":

```4d
 $btnName:=OBJECT Get name(Object current)
```

Depois da execução deste método objeto, a variável *$btnName* contém o valor "bValidateForm".

#### Ver também 

[OBJECT Get pointer](object-get-pointer.md)  
*Objetos (Formulários)*  
*Objetos de formulário (Acesso)*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1087 |
| Thread-seguro | &cross; |


