class LargestElemnt
{
    public static void main(String[] args) {
    // System.out.println("Hello world!");
    int[] a={88,23,45,76,86,12,13};
    int max1=0;
    int max2=0;
    int max3=0;
    for(int i=0;i<a.length;i++)
      {
        if(max1<a[i])
        {
          max3=max2;
          max2=max1;
          max1=a[i];
        }else if(max2<a[i])
        {
          max3=max2;
          max2=a[i];
        }else if(max3<a[i])
        {
          max3=a[i];
        }
      }
    System.out.println("max1=="+max1);
    System.out.println("max2=="+max2);
    System.out.println("max2=="+max3);
  }
}
