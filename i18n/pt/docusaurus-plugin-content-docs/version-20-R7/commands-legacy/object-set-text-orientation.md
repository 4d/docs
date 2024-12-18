---
id: object-set-text-orientation
title: OBJECT SET TEXT ORIENTATION
slug: /commands/object-set-text-orientation
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Syntax-->**OBJECT SET TEXT ORIENTATION** ( {* ;} *objeto* ; *orientacao* )<!-- END REF-->
<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| orientacao | Integer | &#8594;  | Valor de orientação do objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Summary-->O comando **OBJECT SET TEXT ORIENTATION** modifica a orientação do conteúdo do objeto ou dos objetos designados pelos parâmetros *objeto* e *\** para o processo atual.<!-- END REF-->

A propriedade "Orientação", disponível no editor de formulários, realiza rotações de áreas de texto de maneira permanente em seus formulários. A diferença desta propriedade, o comando **OBJECT SET TEXT ORIENTATION** aplica a rotação ao conteúdo do objeto, mas não ao objeto em si. Para obter mais informação, consulte o Manual de *Desenho*.  
  
Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro objeto é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável em lugar de uma cadeia (campo ou variável objeto unicamente).  
Só os textos estáticos, assim como as variáveis e campos não editáveis podem girar. Se aplicar este comando a um objeto que não seja compatível com a orientação de texto, o comando não faz nada.  
  
No parâmetro *orientacao*, passe a orientação absoluta que deseja atribuir ao objeto. Deve utilizar uma das seguintes constantes, do tema "*Propriedades dos objetos* ":  
  
| Constante             | Tipo          | Valor | Comentário                                        |
| --------------------- | ------------- | ----- | ------------------------------------------------- |
| Orientation 0°        | Inteiro longo | 0     | Sem rotação (valor por padrão)                    |
| Orientation 180°      | Inteiro longo | 180   | Orientação do texto a 180° no sentido horário     |
| Orientation 90° left  | Inteiro longo | 270   | Orientação do texto a 90° no sentido anti horário |
| Orientation 90° right | Inteiro longo | 90    | Orientação do texto a 90° no sentido horário      |
  
  
**Nota**: só são admitidos os ângulos correspondentes a estes valores. Se passar qualquer outro valor, será ignorado.

#### Exemplo 

Deseja aplicar uma orientação de 270° a uma variável em seu formulário:

```4d
 OBJECT SET ENTERABLE(*;"myVar";False)
  // Obrigatório se a variável é editável
 OBJECT SET TEXT ORIENTATION(*;"myVar";Orientation 90° left)
```

#### Ver também 

[OBJECT Get text orientation](object-get-text-orientation.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1284 |
| Thread-seguro | &cross; |


