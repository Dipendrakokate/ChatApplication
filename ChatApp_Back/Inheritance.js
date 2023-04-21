class Car{
    constructor(brand)
    {
        this.brand=brand
    }

    present()
    {
        console.log("my carr is "+this.brand);
    }
}

class Mod extends Car{
    constructor(brand,mod)
    {
        super(brand);
        this.mod=mod;
    }

    show()
    {
        super.present();
        console.log("and model hai"+this.mod);
    }
}

const obj=new Mod('Honda',2022);
obj.show();