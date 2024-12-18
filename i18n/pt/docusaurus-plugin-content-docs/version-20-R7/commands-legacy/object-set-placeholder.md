---
id: object-set-placeholder
title: OBJECT SET PLACEHOLDER
slug: /commands/object-set-placeholder
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PLACEHOLDER.Syntax-->**OBJECT SET PLACEHOLDER** ( {* ;} *objeto* ; *textoExemplo* )<!-- END REF-->
<!--REF #_command_.OBJECT SET PLACEHOLDER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| textoExemplo | Text | &#8594;  | Texto de exemplo associado ao objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET PLACEHOLDER.Summary-->O comando **OBJECT SET PLACEHOLDER** associa um texto de exemplo ao objeto ou aos objetos designados pelos parâmetros *objeto* e *\** .<!-- END REF-->  
  
Para obter mais informação sobre os textos de exemplo, consulte o manual de *Desenho*.  
  
Se um texto de exemplo já está associado ao objeto sob a Lista de propriedades, este texto se substitui no processo atual pelo conteúdo do parâmetro *textoExemplo*.  
  
Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente ) .  
  
Em *textoExemplo*, passe o texto de ajuda ou a indicação que deve aparecer quando o objeto esteja vazio.  
  
**Nota**: o comando **OBJECT SET PLACEHOLDER** não soporta a inserção de referências XLIFF nos textos de exemplo. Isto só é possível para os textos de exemplo definidos mediante a Lista de propriedades.  
  
Este comando só pode ser utilizado com objetos de formulário de tipo variável, campo ou combo box. Também pode se associar aos dados de tipo data ou hora se o objeto de formulário tem a propriedade "Vazio se nulo".

#### Exemplo 

Você quer mostrar o texto "Buscar" um combo box:

```4d
 OBJECT SET PLACEHOLDER(*;"search_combo";"Search")
```

![](../assets/en/commands/pict1208449.en.png)

#### Ver também 

[OBJECT Get placeholder](object-get-placeholder.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1295 |
| Thread-seguro | &cross; |


