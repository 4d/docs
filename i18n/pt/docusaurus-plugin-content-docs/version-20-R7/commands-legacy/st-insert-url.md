---
id: st-insert-url
title: ST INSERT URL
slug: /commands/st-insert-url
displayed_sidebar: docs
---

<!--REF #_command_.ST INSERT URL.Syntax-->**ST INSERT URL** ( {* ;} *objeto* ; *textoURL* ; *enderecoURL* {; *inicioSel* {; *fimSel*}} )<!-- END REF-->
<!--REF #_command_.ST INSERT URL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| textoURL | Text | &#8594;  | Texto visível do URL |
| enderecoURL | Text | &#8594;  | Endereço do URL |
| inicioSel | Integer | &#8594;  | Inicio da seleção |
| fimSel | Integer | &#8594;  | Fim da seleção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ST INSERT URL.Summary-->O comando **ST INSERT URL** insere um link URL no campo ou a variável de texto com estilo designada pelo parâmetro *objeto* .<!-- END REF--> 

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se omitir o parâmetro *\**, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável (variável ou campo objeto unicamente).

No parâmetro *textoURL*, passe o texto visível do URL, como deve aparecer no objeto. Por exemplo, podem ser usadas etiquetas de texto como "Web Site 4D" ou "Siga este link para obter mais informação." Também pode utilizar o endereço mesmo, por exemplo "http://www.4d.com".  
  
No parâmetro *enderecoURL*, passe o endereço completa a qual deseja conectar a página do navegador, por exemplo "http://www.4D.com".

Os parámetros opcionais *inicioSel* e *fimSel* designam uma seleção de texto em *objeto*. Os valores *inicioSel* e *fimSel* expressam uma seleção de texto plano, sem ter em conta etiquetas de estilo que podem estar presentes no texto.  
* Se passar *inicioSel,* *textoURL* é inserido na localização especificada.
* Se omitir *inicioSel* e *fimSel*, *textoURL* é inserido na localização do cursor.
* Se passar *inicioSel* e *fimSel*, **ST INSERT URL** substitui o texto nesta seleção por *textoURL*. Se o valor de *fimSel* é maior que o número total de caracteres no objeto, todos os caracteres entre *inicioSel* e o final do texto são substituídos por *textoURL*.

4D oferece constantes pré definidas para que possa designar automaticamente os limites de seleção nos parâmetros *inicioSel* e *fimSel*. Estas constantes se encontram no tema "*Texto multi estilo*":

| Constante          | Tipo          | Valor  | Comentário                                                            |
| ------------------ | ------------- | ------ | --------------------------------------------------------------------- |
| ST End highlight   | Inteiro longo | \-1001 | Designa o último caractere da seleção atual de texto no objeto (\*)   |
| ST End text        | Inteiro longo | 0      | Designa o último caractere do texto contido no objeto                 |
| ST Start highlight | Inteiro longo | \-1000 | Designa o primeiro caractere da seleção atual de texto no objeto (\*) |
| ST Start text      | Inteiro longo | 1      | Designa o primeiro caractere do texto contido no objeto               |

(\*) Deve passar um nome de objeto em *objeto* para poder utilizar esta constante. Se passar uma referência a um campo ou variável, o comando se aplica a todo o texto do objeto.  
  
**Nota**: se *inicioSel* é maior que *fimSel* (exceto quando *fimSel* é 0) , o comando não faz nada e a variável OK toma o valor 0.

Uma vez inserido o link, é ativo: o uso de **Ctrl+clique** (Windows) ou **Comando+clique** (OS X) abre uma página do navegador por padrão no endereço especificado no parâmetro *enderecoURL*.

#### Exemplo 

Você deseja inserir um link ao web site de 4D para substituir o texto selecionado no objeto:

```4d
 vTitle:="4D Web Site"
 vURL:="http://www.4d.com/"
 ST INSERT URL(*;"myText";vTitle;vURL;ST Start highlight;ST End highlight)
```

#### Ver também 

[ST GET URL](st-get-url.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1280 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


