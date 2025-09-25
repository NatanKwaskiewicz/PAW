import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        File myFile = new File("C:\\Users\\student\\Desktop\\Dane_2205\\przyklad.txt");

        try {

            Scanner sc = new Scanner(myFile);
            int max_ilosc = 0;
            int max_liczba = 0;
            int max_ilosc_roznych = 0;
            int max_liczba_rozne = 0;
            while (sc.hasNextInt()) {
                int liczba = sc.nextInt();
                int tempLiczba = liczba;
                int count = 0;
                int count_rozne = 0;
                int dzielnik = 2;
                while (tempLiczba > 1) {
                    int p = 0;
                    while (tempLiczba % dzielnik == 0) {
                        count++;
                        tempLiczba = tempLiczba / dzielnik;
                        if(p<1) {
                            count_rozne++;
                        }
                        p++;
                    }
                    dzielnik++;
                    if(count > max_ilosc) {
                        max_ilosc = count;
                        max_liczba = liczba;
                    }
                    if(count_rozne > max_ilosc_roznych) {
                        max_ilosc_roznych = count_rozne;
                        max_liczba_rozne = liczba;
                    }
                }


            }
            System.out.println(max_liczba + " " + max_ilosc);
            System.out.println(max_liczba_rozne + " " + max_ilosc_roznych);


            sc.close();
        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}

