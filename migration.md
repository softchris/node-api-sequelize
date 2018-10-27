# create a migration

```
node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```

# run a migration

```
node_modules/.bin/sequelize db:migrate
```

# undo a migration

```
node_modules/.bin/sequelize db:migrate:undo
```
