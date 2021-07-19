import java.util.Scanner;



class test{
    public static void main(String[] args) {
        
   
        int x = 1;
        if(x>2){
            System.out.println("x is greter than 2");
        }else{
            System.out.println("x is smaller than 2");
        }

        String text = "poovven";
        System.out.println(text);

        for(int i = 0; i<10 ; i++){
            System.out.println(i);
        }

        Scanner input = new Scanner(System.in);

        System.out.println("enter your name");
        String first = input.next();

        System.out.println("enter your lname");
        String last = input.next();



    }
}
