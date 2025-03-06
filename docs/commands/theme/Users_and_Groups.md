---
id: Users_and_Groups
title: Users and Groups
---
||
|---|
|[**BLOB TO USERS** ( *users* )](../../commands-legacy/blob-to-users)<br/>The BLOB TO USERS command replaces the user accounts and groups found in the BLOB *users* in the current database.|
|[**CHANGE CURRENT USER** {( *user* ; *password* )}](../../commands-legacy/change-current-user)<br/>**CHANGE CURRENT USER** changes the identity of the current user in the database, without needing to quit.|
|[**CHANGE PASSWORD** ( *password* )](../../commands-legacy/change-password)<br/>CHANGE PASSWORD changes the password of the current user.|
|[**Current user** {( *user* )} : Text](../../commands-legacy/current-user)<br/>Current user returns the alias or account name of the current user.|
|[**DELETE USER** ( *userID* )](../../commands-legacy/delete-user)<br/>The **DELETE USER** command deletes the user whose unique user ID number you pass in *userID*.|
|[**EDIT ACCESS**](../../commands-legacy/edit-access)<br/>EDIT ACCESS lets the user edit the password system.|
|[**Get default user**  : Integer](../../commands-legacy/get-default-user)<br/>The Get default user command returns the unique user ID of the user set as “Default user” in the database Settings dialog box|
|[**Get group access** : Collection](../../commands-legacy/get-group-access)<br/>The **Get group access** command returns the memberships of the 4D user account for the current session.|
|[**GET GROUP LIST** ( *groupNames* ; *groupNumbers* )](../../commands-legacy/get-group-list)<br/>GET GROUP LIST populates the arrays *groupNames* and *groupNumbers* with the names and unique ID numbers of the groups as they appear in the Password editor window.|
|[**GET GROUP PROPERTIES** ( *groupID* ; *name* ; *owner* {; *members*} )](../../commands-legacy/get-group-properties)<br/>GET GROUP PROPERTIES returns the properties of the group whose unique group ID number you pass in *groupID*.|
|[**Get plugin access** ( *plugIn* ) : Text](../../commands-legacy/get-plugin-access)<br/>The Get plugin access command returns the name of the user group authorized to use the plug-in whose number was passed in the *plugIn* parameter.|
|[**GET USER LIST** ( *userNames* ; *userNumbers* )](../../commands-legacy/get-user-list)<br/>GET USER LIST populates the arrays *userNames* and *userNumbers* with the names and unique ID numbers of the users as they appear in the Passwords window.|
|[**GET USER PROPERTIES** ( *userID* ; *name* ; *startup* ; *password* ; *nbLogin* ; *lastLogin* {; *memberships* {; *groupOwner*}} )](../../commands-legacy/get-user-properties)<br/>**GET USER PROPERTIES** returns the information about the user whose unique user ID number you pass in *userID*.|
|[**Is user deleted** ( *userNumber* ) : Boolean](../../commands-legacy/is-user-deleted)<br/>The Is user deleted command tests the user account whose unique user ID number you pass in *userID*.|
|[**SET GROUP ACCESS** {( *groups* )}](../../commands-legacy/set-group-access)<br/>The **SET GROUP ACCESS** command modifies the memberships of the 4D user account for the current session.|
|[**Set group properties** ( *groupID* ; *name* ; *owner* {; *members*} )  : Integer](../../commands-legacy/set-group-properties)<br/>Set group properties enables you to change and update the properties of an existing group whose unique group ID number you pass in *groupID*, or to add a new group.|
|[**SET PLUGIN ACCESS** ( *plugIn* ; *group* )](../../commands-legacy/set-plugin-access)<br/>The SET PLUGIN ACCESS command sets, by programming, the user group allowed to use each “serialized” plug-in that is installed in the database.|
|[**SET USER ALIAS** ( *alias* )](../../commands-legacy/set-user-alias)<br/>The **SET USER ALIAS** command defines an alternate, custom name to use in place of the current 4D user account name for the current session.|
|[**Set user properties** ( *userID* ; *name* ; *startup* ; *password* ; *nbLogin* ; *lastLogin* {; *memberships* {; *groupOwner*}} ) : Integer](../../commands-legacy/set-user-properties)<br/>Set user properties lets you change and update the properties of an existing user account whose unique user ID number you pass in *userID*, or add a new user.|
|[**User in group** ( *user* ; *group* ) : Boolean](../../commands-legacy/user-in-group)<br/>User in group returns TRUE if *user* is in *group*.|
|[**USERS TO BLOB** ( *users* )](../../commands-legacy/users-to-blob)<br/>**Compatibility Note:* This command only works in binary databases.|
|[**Validate password** ( *userID* ; *password* {; *digest*} ) : Boolean](../../commands-legacy/validate-password)<br/>Validate password returns True if the string passed in *password* is the password for the user account whose ID number or name is passed in *userID*.|
