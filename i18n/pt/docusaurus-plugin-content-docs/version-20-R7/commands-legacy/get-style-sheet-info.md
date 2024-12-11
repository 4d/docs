---
id: get-style-sheet-info
title: GET STYLE SHEET INFO
slug: /commands/get-style-sheet-info
displayed_sidebar: docs
---

<!--REF #_command_.GET STYLE SHEET INFO.Syntax-->**GET STYLE SHEET INFO** ( *nomeFolhaEstilo* ; *fonte* ; *tam* ; *estilos* )<!-- END REF-->
<!--REF #_command_.GET STYLE SHEET INFO.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeFolhaEstilo | Text | &#8594;  | Nome da folha de estilo |
| fonte | Text | &#8592; | Tipo de fonte |
| tam | Integer | &#8592; | Tamanho de fonte |
| estilos | Integer | &#8592; | Valor do estilo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET STYLE SHEET INFO.Summary-->O comando **GET STYLE SHEET INFO** devolve a configuração atual da folha de estilo *nomeFolhaEstilo* .<!-- END REF--> 

Passe em *nomeFolhaEstilo*, o nome da folha de estilo definida em modo Desenho. Para designar a folha de estilo "Automática", pode usar as constantes do tema "*Estilos de fonte*":

| Constante                         | Tipo   | Valor                               | Comentário                                                                                                 |
| --------------------------------- | ------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Automatic style sheet             | Cadeia | \_\_automatic\_\_                   | Usado como padrão para todos os objetos                                                                    |
| Automatic style sheet\_additional | Cadeia | \_\_automatic\_additional\_text\_\_ | Suportado por texto estático, campos e variaáveis somente. Usado para texto adicional em caixas de diálogo |
| Automatic style sheet\_main       | Cadeia | \_\_automatic\_main\_text\_\_       | Suportado apenas para texto estático, campos e variáveis. Usado para texto principal em caixas de diálogo. |

O comando devolve em *fonte*, o nome da fonte de caracteres associada a folha de estilo para a plataforma atual. 

O comando devolve em *tam*, o tamanho em pontos da fonte associado a folha de estilo para a plataforma atual. 

O comando devolve em *estilos*, um valor que corresponde ao estilo(s) associado(s) a folha de estilo para a plataforma atual. Pode comparar o valor recebido com as seguintes constantes, que se encontram no tema "*Estilos de fonte*": 

| Constante            | Tipo          | Valor |
| -------------------- | ------------- | ----- |
| Bold                 | Inteiro longo | 1     |
| Bold and Italic      | Inteiro longo | 3     |
| Bold and Underline   | Inteiro longo | 5     |
| Italic               | Inteiro longo | 2     |
| Italic and Underline | Inteiro longo | 6     |
| Plain                | Inteiro longo | 0     |
| Underline            | Inteiro longo | 4     |

Se o comando se executa corretamente, a variável sistema OK toma o valor 1\. Caso contrário (por exemplo, se *nomeFolhaEstilo* não existe), toma o valor 0.

##### Nota de compatibilidade 

Em **arquitetura de projeto**, só as três folhas de estilo automáticas são compatíveis com esse comando  
  
#### Exemplo 

Se quiser conhecer a configuração atual da folha de estilo "Automatic"

```4d
 var $size;$style : Integer
 var $font : Text
 GET STYLE SHEET INFO(Automatic style sheet;$font;$size;$style)
```

#### Ver também 

[LIST OF STYLE SHEETS](list-of-style-sheets.md)  
[OBJECT SET STYLE SHEET](object-set-style-sheet.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1256 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


