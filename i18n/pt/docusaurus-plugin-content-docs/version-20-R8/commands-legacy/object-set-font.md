---
id: object-set-font
title: OBJECT SET FONT
slug: /commands/object-set-font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT.Syntax-->**OBJECT SET FONT** ( {* ;} *objeto* ; *fonte* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| fonte | Text | &#8594;  | Nome da fonte ou número da fonte |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET FONT.Summary-->OBJECT SET FONT mostra *objeto* utilizando a fonte especificada no parâmetro *fonte*.<!-- END REF--> O parâmetro *fonte* deve conter um nome de fonte válido.

Se especificar o parâmetro opcional *\**, indica um nome de objeto (uma cadeia) em *objeto*. Se omite o parâmetro opcional \*, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se especifica uma referência de um campo ou de uma variável (objetos campo ou variável unicamente) ao invés de uma string.

**Nota**: Se usar este comando em um objeto que use uma folha de estilo, a referência à folha de estilo é apagada automaticamente do objeto - mesmo se atribuir os mesmos atributos que da folha de estilo.

#### Exemplo 1 

O exemplo a segior define a fonte de um botão chamado *bOK*: 

```4d
 OBJECT SET FONT(bOK;"Arial")
```

#### Exemplo 2 

O exemplo a seguir define a fonte para todos os objetos de formulário cujo nome contenha "info": 

```4d
 OBJECT SET FONT(*;"@info@";"Times")
```

#### Exemplo 3 

O seguinte exemplo utiliza a opção especial *%password*, desenhada para a entrada e visualização de campos de tipo “senha”. Quando passe "%password" no parâmetro *fonte*:

* cada caractere introduzido no objeto é mostrado com o mesmo símbolo,
* as ações "copiar" e "colar" se desativam no objeto.

**Nota:** pode utilizar a opção *%password* com os objetos de tipo campo, variável e combo box.

```4d
 OBJECT SET FONT([Users]Password;"%password")
```

#### Ver também 

[Font file](font-file.md)  
[FONT LIST](font-list.md)  
*Interação de comandos genéricos com textos multi estilos*  
[OBJECT Get font](object-get-font.md)  
[OBJECT SET FONT SIZE](object-set-font-size.md)  
[OBJECT SET FONT STYLE](object-set-font-style.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 164 |
| Thread-seguro | &cross; |


