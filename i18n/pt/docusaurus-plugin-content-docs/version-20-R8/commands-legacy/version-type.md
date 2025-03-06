---
id: version-type
title: Version type
slug: /commands/version-type
displayed_sidebar: docs
---

<!--REF #_command_.Version type.Syntax-->**Version type**  : Integer<!-- END REF-->
<!--REF #_command_.Version type.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Informação sobre o tipo de versão (bitfield) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Version type.Summary-->O comando Version type retorna um valor numérico que representa o tipo de versão de 4D ou 4D Server que você está utilizando.<!-- END REF--> 4D oferece as seguintes constantes pré-definidas que se encontram no tema *Ambiente 4D*:

| Constante          | Tipo          | Valor | Comentário                                               |
| ------------------ | ------------- | ----- | -------------------------------------------------------- |
| 64 bit version     | Inteiro longo | 1     |                                                          |
| Demo version       | Inteiro longo | 0     |                                                          |
| Merged application | Inteiro longo | 2     | A versão é uma aplicação fusionada com 4D Volume Desktop |

**Nota:** Nas versões atuais de 4D, o modo demonstração não está disponível.

Version type retorna um valor em forma de um campo de bits, é necessário utilizar os operadores de bits para interpretá-lo (ver o exemplo).

#### Exemplo 

Esta prova permite executar código diferente dependendo de que versão é uma aplicação fusionada ou uma base aberta por 4D/4D Server:

```4d
 If(Version type?? Merged application)
  // Estamos em uma aplicação fusionada
 Else
  // Estamos em uma base executada por 4D
 End if
```

#### Ver também 

[Application type](application-type.md)  
[Application version](application-version.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 495 |
| Thread-seguro | &check; |


