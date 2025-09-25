import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        File myFile = new File("C:\\Users\\student\\Desktop\\Dane_2205\\liczby.txt");

        try {

            Scanner sc = new Scanner(myFile);
            int numberCount = 0;
            boolean find = false;
            int firstNumber = 0;
            while (sc.hasNextInt()) {
                int liczba = sc.nextInt();
                int tempLiczba = liczba;
                int lastDigit = tempLiczba % 10;
                int firstDigit = 0;
                while(tempLiczba>0)
                {
                    firstDigit = tempLiczba % 10;
                    tempLiczba = tempLiczba / 10;
                }
                if(lastDigit == firstDigit)
                {

                    if(find == false)
                    {
                        firstNumber = liczba;
                    }
                    find = true;
                    numberCount++;

                }
                //System.out.println(liczba);
            }
            System.out.println(numberCount + " " + firstNumber);
            sc.close();
        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}