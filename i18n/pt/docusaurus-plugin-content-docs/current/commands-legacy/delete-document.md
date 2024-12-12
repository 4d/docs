---
id: delete-document
title: DELETE DOCUMENT
slug: /commands/delete-document
displayed_sidebar: docs
---

<!--REF #_command_.DELETE DOCUMENT.Syntax-->**DELETE DOCUMENT** ( *documento* )<!-- END REF-->
<!--REF #_command_.DELETE DOCUMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text | &#8594;  | Nome do documento ou rota de acesso completa |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DELETE DOCUMENT.Summary-->O comando DELETE DOCUMENT apaga o documento cujo nome se passa em *documento*.<!-- END REF-->  
  
Se o nome do documento ou a rota de acesso estiverem incorretos, um erro será gerado.   
  
Se o documento for aberto quando o comando é chamado, o resultado depende do OS.

Em Windows, um erro é gerado  
  
Em macOS, nenhum erro é gerado e o documento é apagado  
  
DELETE DOCUMENT não aceita uma string vazia no parâmetro *documento*. Se uma string vazia for utilizada, a caixa de diálogo de abertura de arquivos não é mostrada um erro é gerado.  
  
**Advertência**: DELETE DOCUMENT pode apagar um arquivo em disco. Isso inclui documentos criados com outras aplicações, além das próprias aplicações. DELETE DOCUMENT deve ser usado com extremo cuidado. A eliminação de um documento é uma operação permanente e não pode ser desfeita.

#### Exemplo 1 

O exemplo abaixo apaga o documento chamado Nota: 

```4d
 DELETE DOCUMENT("Nota") // Apaga o documento
```

#### Exemplo 2 

Veja o exemplo do comando [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md).

#### Variáveis e conjuntos do sistema 

A eliminação de um documento faz que a variável sistema assuma o valor 1\. Se DELETE DOCUMENT não pode apagar o documento, a variável sistema OK assume o valor 0.

#### Ver também 

[Test path name](test-path-name.md)  