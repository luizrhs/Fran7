Fran7
========================
### Wrapper around ExpressJS and Mongoose

The important things to notice when using Fran7 are just a few.

> `e`
> 
> The ExpressJS app. It's the what you would get by calling the `express()` function.
> It has already some configuration but you are free to change it the way you want.
> 
> It's just an express app.

--

> `m`
> 
> The mongoose object that you got when you `require('mongoose')`
> 
> That's it. Feel free to use in any way.

--

> `models`
>
> Object that holds all the models in the application.
> To access the models use `app.models.User`, for example.

--

> `addModel(name, options, [callback(schema)])`
>
> Helper method to add models to your app.
>
> The `options` parameter is what you would declare as a Schema in mongoose terms.
> You can pass (inside the options parameter) the attributes `statics` and `methods` to easily add those.
>
> The callback takes a paremeter (the Schema that has just been created) so you can do all nasty things with it before the model itself is created

--

> `listen()`
>
> Simple wraper around Express listen method

--

> `connect(options)`
>
> Simple wrapper around Mongoose connect method
> `options` needs two attributes: `uri` and `options`