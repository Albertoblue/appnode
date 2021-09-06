
const express=require('express')

const app=express()

app.get('/home',(req,res)=>{

    res.send('Bienvenidos a mi pagina web (HOME)');
    console.log(res);


});

app.get('/perfil',(req,res)=>{
    res.send("Este es el perfil");

})

app.get('/carrito',(req,res)=>{
    res.send("Aqui va a encontrar el carrito de compras");
    //Conexion a la base de datos
    //Los resultados los pintamos en un html 
    //Enviamos el resultado al usuario

})


app.listen(8080);
