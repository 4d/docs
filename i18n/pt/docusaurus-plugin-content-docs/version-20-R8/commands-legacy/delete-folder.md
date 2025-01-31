---
id: delete-folder
title: DELETE FOLDER
slug: /commands/delete-folder
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FOLDER.Syntax-->**DELETE FOLDER** ( *pasta* {; delete Opcao} )<!-- END REF-->
<!--REF #_command_.DELETE FOLDER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| pasta | Text | &#8594;  | Nome da pasta, ou rota de acesso completa da pasta a apagar |
| delete Opcao | Inteiro longo | &#8594;  | Opção de apagar a pasta |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DELETE FOLDER.Summary-->O comando **DELETE FOLDER** apaga a pasta cujo nome ou rota completa for passada em *pasta*.<!-- END REF--> 

Como padrão, por razões de segurança, se omitir o parâmetro *deleteOption*, **DELETE FOLDER** só permite que pastas vazias sejam apagadas. Se quiser que o comando apague pastas não-vazias, deve usar o parâmetro *deleteOption*. Em *deleteOption*, pode passar uma das constantes abaixo, encontradas no tema "*Documentos Sistema*":

| Constante            | Tipo          | Valor | Comentário                                     |
| -------------------- | ------------- | ----- | ---------------------------------------------- |
| Delete only if empty | Inteiro longo | 0     | Apaga a pasta apenas se a pasta estiver vazia. |
| Delete with contents | Inteiro longo | 1     | Apaga a pasta com todos os seus conteúdos      |

* Se Delete only if empty (0) for passada ou omitir o parâmetro *deleteOption* :  
   * A pasta especificada no parâmetro *pasta* é apagada somente se a pasta estiver vazia, senão o comando não faz nada e dá um erro -47 (o arquivo já está aberto ou a pasta não está vazia).  
   * Se a pasta especifica não existir, retorna o erro -120 (Tentativa de acesso a um arquivo usando um nome de rota que especifica um diretório não existente).
* Se Delete with contents (1) for passado:  
   * A pasta é apagada junto com todos os seus conteúdos.  
   **Aviso:** Mesmo se a pasta ou seus conteúdos estiverem bloqueados ou em modo apenas-leitura, se o usuário atual tiver direitos de acesso, eles serão apagados.  
   * Se esta pasta, ou qualquer um dos arquivos que conter, não puder ser apagada, o processo é abortado assim o primeiro elemento inacessível for apagado e um erro(\*) for retornado. Isto significa que uma pasta pode ser parcialmente apagada. Quando o processo de eliminação for abortado, pode usar o comando [Last errors](last-errors.md)  para recuperar o nome e caminho do arquivo problemático.  
   * Se a pasta especificada não existir, o comando não faz nada e nenhum erro é retornado.  
   (\*) em Windows: -54 (Tentativa de abrir um arquivo bloqueado para escrita)  
   em OS X: -45 (O arquivo está bloqueado ou o caminho não é correto)

Pode interceptar estes erros usando o método isntalado pelo comando [ON ERR CALL](on-err-call.md).

#### Ver também 

  
[DELETE DOCUMENT](delete-document.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 693 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |


