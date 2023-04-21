class Foo{
    Foo()
    {
        System.out.println("Foo");
    }
}

class Bar extends Foo{
    Bar()
    {
        super();
        System.out.println("bar");
    }
}

public class Test {
    
}
