//*******************************************************************//
//Class Product Implementation

var Product = function(){

}

Product.prototype = new Model();
Product.prototype.constructor = Product;
Product.prototype.name = "Product";
Product.prototype.createTableString = 'CREATE TABLE IF NOT EXISTS products(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL,image TEXT,colour TEXT NOT NULL,quantity INTEGER, price FLOAT NOT NULL);';

//Properties are required:true by default
Product.prototype.validation = {

    id:{
        rule:"numeric",
        message:"id should be numeric"
    },
    name:{
        rule:"notempty",
        message:"Product name should not be empty"
    },
    colour:{
        rule:"alphanumeric",
        message:"colour should not contain special characters",
        //required:false

    },
     quantity:{
        rule:"numeric",
        message:"quantity should be in decimal format"
    },
    price:{
        rule:"decimal",
        message:"Price should be in decimal format"
    }/*,
    image:{
        rule:,
        message:,
    }*/



}
//********************************************************************//