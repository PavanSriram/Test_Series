import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    
    public static int Search(int arr[], int ind1, int ind2, int key){
        for(int i=ind1; i<ind2; i++){
            if(arr[i] == key)
                return i;
        }
        return -1;
    }
    

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int numberOfTestCases = scan.nextInt();
        
        for(int i=0; i<numberOfTestCases; i++){
            int sizeOfArray = scan.nextInt();
            int array[] = new int[sizeOfArray];
            int array1[] = new int[sizeOfArray];

            int three = 0;
            for(int j=0; j<sizeOfArray; j++){
                array[j] = scan.nextInt();
                array1[j] = array[j];
                if(array[j] == 3)
                    three++;
            }
            
            int ind3 = 0;
            int ind4 = 0;

            for(int y=0; y<three; y++){
                ind3 = Search(array, ind3, sizeOfArray, 3);
                ind4 = Search(array, ind4, sizeOfArray, 4);

                array1[ind4] = array1[ind3 + 1];
                array1[ind3 + 1] = 4;
                
                ind3 = ind3 + 1;
                ind4 = ind4 + 1;
                
            }
            for(int j=0; j<sizeOfArray; j++)
                System.out.print(array1[j] + " ");
            
            System.out.println();
        }
    }
}