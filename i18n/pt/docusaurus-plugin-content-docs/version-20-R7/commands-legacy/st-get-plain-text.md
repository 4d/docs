---
id: st-get-plain-text
title: ST Get plain text
slug: /commands/st-get-plain-text
displayed_sidebar: docs
---

<!--REF #_command_.ST Get plain text.Syntax-->**ST Get plain text** ( {* ;} *objeto* {; *refMode*} ) : Text<!-- END REF-->
<!--REF #_command_.ST Get plain text.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável ou campo. |
| objeto | any | &#8594;  | Nome de objeto (se * é especificado) ou Variável ou campo (se * é omitido) |
| refMode | Integer | &#8594;  | Mode for handling references found in the text |
| Resultado | Text | &#8592; | Texto sem tags |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.ST Get plain text.Summary-->O comando *OBJECT Get plain text* remove as etiquetas de estilo da variável ou campo de texto designado pelos parâmetros *\** e *objeto* e devolve o texto plano.<!-- END REF--> 

##### 

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (cadeia). Durante a execução se o objeto tem o foco, o comando devolve informação sobre o objeto que está sendo editado, no entanto, quando o objeto não tem o foco, o comando devolve informação sobre a fonte de dados (campo ou variável) do objeto.

Se omite o parâmetro *\**, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, passe uma referencia campo ou variável em vez de uma cadeia e durante a execução, o comando devolve informação sobre este campo ou variável.

##### 

O parâmetro opcional *modoRef* indica a forma em que as referências que se encontram em *objeto* devem ser devolvidas. Em *modoRef*, passe uma das seguintes constantes, que se encontram no tema "*Texto multi estilo*" (pode passar uma só constante ou uma combinação):

| Constante                                    | Tipo          | Valor | Comentário                                                                                                                                                                                            |
| -------------------------------------------- | ------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ST 4D Expressions as sources                 | Inteiro longo | 2     | É devolvida a cadeia original das referências de expressões 4D                                                                                                                                        |
| ST 4D Expressions as values                  | Inteiro longo | 1     | As referências de expressões 4D se devolvem em sua forma avaliada (funcionamento por padrão nos formulários)                                                                                          |
| ST References as spaces                      | Inteiro longo | 0     | Cada referência se devolve como um caractere espaço sem separação (funcionamento por padrão, utilizado pelos outros comandos)                                                                         |
| ST Tags as plain text                        | Inteiro longo | 64    | O rótulo da etiqueta se devolve em texto plano. Por exemplo para o tag '<img src="test.jpg" alt="picture">my picture</img>', o texto plano é "my picture" (funcionamento por padrão nos formulários)  |
| ST Tags as XML code                          | Inteiro longo | 128   | O código XML da etiqueta se devolve em texto plano. Por exemplo para o tag '<img src="test.jpg" alt="picture">my picture</img>', o texto plano é '<img src="test.jpg" alt="picture">my picture</img>' |
| ST Text displayed with 4D Expression sources | Inteiro longo | 86    | Devolve o texto tal e como se mostra nos formulários com a cadeia de origem das expressões 4D.<br/>Corresponde a combinação pré definida das constantes 2+4+16+64.                            |
| ST Text displayed with 4D Expression values  | Inteiro longo | 85    | Devolve o texto tal e como é mostrado nos formulários com as expressões 4D em sua forma avaliada.<br/>Corresponde a combinação pré definida das constantes 1+4+16+64.                         |
| ST URL as labels                             | Inteiro longo | 4     | A etiqueta visível dos URLs se devolve, por exemplo "Visite nosso web site" (funcionamento por padrão nos formulários)                                                                                |
| ST URL as links                              | Inteiro longo | 8     | É devolvido o link, por exemplo "http://www.4d.com"                                                                                                                                                   |
| ST User links as labels                      | Inteiro longo | 16    | É devolvida a etiqueta visível do link usuário (funcionamento por padrão nos formulários)                                                                                                             |
| ST User links as links                       | Inteiro longo | 32    | É devolvido o conteúdo do link usuário                                                                                                                                                                |

**Nota**: 

* Dado que o texto plano segue sendo o mesmo, independentemente dos valores passados ​​no parâmetro *modoRef*, o parâmetro *modoRef* opcional só é útil quando o texto contém referências.
* Se um documento 4D Write Pro conter tabelas, o conteúdo de cada célula é tratado como parágrafos individuais e retornados como texto separadamente por tabulações. Linhas são separadas por retornos de carro.

#### Exemplo 1 

Você está procurando o texto "muito bem" entre os valores de um campo de texto multiestilo. O valor foi guardado da seguinte forma: "O clima está muito bem **hoje**". 

```4d
 QUERY BY FORMULA([Comments];ST Get plain text([Comments]Weather)="@muito bem@")
```

**Nota:** Neste contexto, a seguinte instrução não dará o resultado desejado porque o texto está guardado com etiquetas de estilo:   

```4d
 QUERY([Comments];[Comments]Weather="@muitobem@")
```

#### Exemplo 2 

Dado o seguinte texto localizado na área multi estilo "MyArea":

```RAW
It is now   Go to the 4D site or Open a window
```

Este texto é mostrado:

![](../assets/en/commands/pict1217332.en.png)

É executado o seguinte código:

```4d
 $txt :=ST Get plain text(*;"myArea";ST References as spaces)
  // $txt = "agora    ou " (espaços)
 $txt :=ST Get plain text(*;"myArea";ST 4D Expressions as values)
  // $txt = "atualmente 15:48:19  ou  "
 $txt :=ST Get plain text(*;"myArea";ST 4D Expressions as sources)
  // $txt = "é agora a hora atual ou  "
 $txt :=ST Get plain text(*;"myArea";ST URL as links)
  //$txt = "é agora http://www.4d.com or  "
 $txt :=ST Get plain text(*;"myArea";ST Text displayed with 4D Expression values)
  //$txt = "é agora 15:48:19 ir ao site de 4D ou abrir uma janela"
 $txt :=ST Get plain text(*;"myArea";ST Text displayed with 4D Expression sources)
  //$txt = "é atualmente Hora atual ir ao site de 4D ou abrir uma janela"
 $txt :=ST Get plain text(*;"myArea";ST User links as labels)
  //$txt = "é agora ou Abrir uma janela"
 $txt :=ST Get plain text(*;"myArea";ST User links as links)
  //$txt = "é agora ou openW"
```

#### Variáveis e conjuntos do sistema 

Depois de executar este comando, a variável OK toma o valor 1 se não é apresento nenhum erro; do contrário, toma o valor 0\. Este é o caso particularmente quando as etiquetas de estilo não são avaliados corretamente (etiquetas incorretas ou faltantes).   

No caso de erro, não modifica a variável. Quando ocorre um erro em uma variável quando se está avaliando o texto, 4D transforma o texto em texto plano; como resultado, os caracteres <, > e & são convertidas em entidades HTML.

#### Ver também 

[ST Get text](st-get-text.md)  
[ST SET PLAIN TEXT](st-set-plain-text.md)  
[ST SET TEXT](st-set-text.md)  
[TEXT TO ARRAY](text-to-array.md)  