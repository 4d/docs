---
id: char
title: Char
slug: /commands/char
displayed_sidebar: docs
---

<!--REF #_command_.Char.Syntax-->**Char** ( *codigoCaractere* ) : Text<!-- END REF-->
<!--REF #_command_.Char.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| codigoCaractere | Integer | &#8594;  | Código do caractere |
| Resultado | Text | &#8592; | Caractere representado por códigoCaractere |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Char.Summary-->O comando **Char** devolve o caractere cujo código é *codigoCaractere*.<!-- END REF-->

Passe um valor UTF-16 (entre 1 e 65535) em *codigoCaractere.*

**Dica**: O comando **Char** geralmente se utiliza para inserir no editor de métodos os caracteres que no podem ser introduzidos desde o teclado ou que devem ser interpretados como um comando de edição no editor de métodos.  

#### Exemplo 

O seguinte exemplo utiliza Char para inserir um retorno de carro no texto de uma mensagem de alerta:

```4d
 ALERT("Empregados: "+String(Records in table([Empregados]))+Char(Carriage return)+"Pressione Aceitar para continuar.")
```
  
  

#### Ver também 

[Character code](character-code.md)  
*Códigos Unicode*  
*Símbolos de referência de caracteres*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 90 |
| Thread-seguro | &check; |
| Proibido no servidor ||


