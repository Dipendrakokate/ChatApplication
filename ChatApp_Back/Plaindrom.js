var prompt=require('prompt-sync')({sigint:true})

function a()
{
    let b=prompt('what is number');
    let temp=b;
    let rem;
    let rev=0;

    while(temp!=0)
    {
        rem=temp%10;
        rev=rev*10+rem;
        temp=parseInt(temp/10);
    }
    
    if(rev==b)
    {
        console.log("Number is palindrom.")
    }else{
        console.log("Number is not palindrom.")
    }
}


a();