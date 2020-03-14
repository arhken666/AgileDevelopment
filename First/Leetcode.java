public class Leetcode {
    public static void main(String[] args)  {
        for(int i = 1 ;i <= 200; i++)
            System.out.printf("第%d次Fibonacci数:%.2f\n",i, Fibonacci.of(i));

    }
}
class Fibonacci{
    public static double of(int num){
        double[] Array = new double[num+1];
        if(num == 1 || num == 2){
            return 1;
        } else{
            Array[1] = 1;
            Array[2] = 1;
            for(int i = 3 ;i <= num; i++){
                Array[i] = Array[i-1]+Array[i-2];
            }
        }
        return Array[num];
    }
}