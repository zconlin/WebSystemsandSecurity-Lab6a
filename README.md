# Lab-6-Boilerplate
Description (purpose) of the endpoint
Path Parameters (if applicable) and corresponding descriptions, in a markdown table
Request Body JSON Example (if applicable) in a markdown multiline code block, with syntax highlighting
Response Body JSON Example in a markdown multiline code block, with syntax highlighting

User endpoint, all the task endpoints, and the auth endpoints. You don't need to put response examples for the auth ones though

| Display registered users |
| --- |
| /api/v1/user |
Response Body JSON Example: 
```json
{
    {"Id":"fddd7518-a9c2-47ae-9445-e0d370e6036f",
    "UserName":"example.email@gmail.com",
    "NormalizedUserName":"EXAMPLE.EMAIL@GMAIL.COM",
    "Email":"example.email@gmail.com",
    "NormalizedEmail":"EXAMPLE.EMAIL@GMAIL.COM",
    "EmailConfirmed":true,
    "PasswordHash":"AQAAAAEQQCcQAAAAEBVwnWOaGZT0zJpv45VyucwPkWNaWr3fkzMBZDzi99AkqsjIx8egydXfvVCQLhwSvQ==",
    "SecurityStamp":"ERILIQZVVJW44IQEP53CYCYNCVQAOTLG",
    "ConcurrencyStamp":"0a156959-5967-4ef9-8a1d-617410831c76",
    "PhoneNumber":null,
    "PhoneNumberConfirmed":false,
    "TwoFactorEnabled":false,
    "LockoutEnd":null,
    "LockoutEnabled":true,
    "AccessFailedCount":0}
}
```
| Get one task | |
| --- | --- |
| GET | /api/v1/tasks/:id | 
Response Body JSON Example: 
```json
{
    "_id": "6384e436deda701fac533246",
    "UserId": "fddd7518-a9c2-47ae-9445-e0d370e6036f",
    "Text": "Test",
    "Done": false,
    "Date": "11/31",
    "__v": 0
}
```

| Create task | |
| -- | -- |
| POST | /api/v1/tasks |
Response Body JSON Example: 
```json
{
    "UserId:": "fddd7518-a9c2-47ae-9445-e0d370e6036f",
    "Text": "Test", 
    "Date": "11/31", 
    "Done": "true" 
}
}
```
Response Body JSON Example: 
```json
{
    "UserId": "fddd7518-a9c2-47ae-9445-e0d370e6036f",
    "Text": "Test",
    "Done": false,
    "Date": "11/31",
    "_id": "6386898c6ecb8b76fd0c5c11",
    "__v": 0
}
``` 

Get all tasks GET
/api/v1/tasks
Response Body JSON Example: 
```json
{
        "_id": "6384e436deda701fac533246",
        "UserId": "fddd7518-a9c2-47ae-9445-e0d370e6036f",
        "Text": "Test",
        "Done": false,
        "Date": "11/31",
        "__v": 0
}
```

| Update task status | |
| -- | -- |
| PUT | /api/v1/tasks/:id |
Response Body JSON Example:
```json
{
    "_id": "6384e436deda701fac533246",
    "UserId": "fddd7518-a9c2-47ae-9445-e0d370e6036f",
    "Text": "Test",
    "Done": true,
    "Date": "11/31",
    "__v": 0
}
```

| Delete task | |
| -- | -- |
| DELETE| /api/v1/tasks/:id |
Response Body JSON Example:
```json
    Task successfully deleted
```

Redirect to google login page
/api/v1/auth/google

Allows user to share specific data with the application
/api/v1/auth/google/callback

Logout current user
/api/v1/auth/logout
