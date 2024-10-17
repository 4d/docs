---
id: copy-array
title: COPY ARRAY
slug: /commands/copy-array
displayed_sidebar: docs
---

<!--REF #_command_.COPY ARRAY.Syntax-->**COPY ARRAY** ( *fonte* ; *destino* )<!-- END REF-->
<!--REF #_command_.COPY ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| fonte | Array | &#8594;  | Array do qual se copia |
| destino | Array | &#8592; | Array para o qual se copia |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.COPY ARRAY.Summary-->O comando COPY ARRAY cria ou reescreve o array de destino com os mesmos conteúdo, tamanho e fonte do array fonte.<!-- END REF-->

**Nota**: no caso de arrays numéricos de tipos diferentes, o tipo de array *destino* é mantido.

Os arrays *fonte* e *destino* podem ser arrays locais, de processo ou interprocesso. Ao se copiar arrays, o tamanho do array não interessa.

**Notas**: 

* em modo compilado, o array destino deve ser do mesmo tipo que o array fonte. Assim é recomendado sempre usar arrays do mesmo tipo para ter comportamento similar em modos interpretado e compilado.
* Quando copiar arrays de objeto, apenas referênc ias a objetos que eles contem são duplicadas, e não os objetos em si. Significa que qualquer modificação feita em um objeto em um array serão aplicadas a instancias existentes do objeto em arrays copiados. Se precisar duplicar objetos, deve usar o comando [OB Copy](ob-copy.md).

#### Exemplo 

O exemplo seguinte preenche o array chamado C. Ele então cria um novo array, chamado D, do mesmo tamanho e conteúdo que o C:

```4d
 ALL RECORDS([Pessoas]) // Selecionar todos os registros em Pessoas
 SELECTION TO ARRAY([Pessoas]Empresa;C) // Mover os dados do campo empresa ao array C
 COPY ARRAY(C;D) // Copiar o array C ao array D
```
