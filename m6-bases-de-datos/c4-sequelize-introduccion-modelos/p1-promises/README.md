# Promises

```
Promise
    .then(res => console.log('El resultado de la promesa es', res)
    .catch(err => console.log('La promesa falló y el error es'. err))
```

```
Promise.all([Promise1, Promise2])
    .then([res1, res2] => console.log('El resultado de las promesas es', res1, res2)
    .catch(err => console.log('La promesa falló y el error es'. err))
```