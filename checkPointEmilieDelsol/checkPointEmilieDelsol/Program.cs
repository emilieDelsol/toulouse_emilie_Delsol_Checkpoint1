using System;

namespace checkPointEmilieDelsol
{
    /*Lien vers la vidéo de l'exécution du programme https://www.loom.com/share/59ec364062bd4ef58d1f4d56a27797eb?from_recorder=1 */

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("**********************************" +
                "\nThe SUM:" +
                "\n**********************************");
            Console.WriteLine("Enter first number");
            decimal firstNumber = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine("Enter second number");
            decimal secondNumber = Convert.ToDecimal(Console.ReadLine());

            Console.WriteLine($"{firstNumber} + {secondNumber} = {Add(firstNumber, secondNumber)}");

            Console.WriteLine("\n**********************************" +
                "\n The AVERAGE: " +
                "\n**********************************");
            Console.WriteLine("Enter how many number you want average");
            int length = Convert.ToInt32(Console.ReadLine());
            int[] table = new int[length];
            for (int i = 0; i < table.Length; i++)
            {
                Console.WriteLine("type number:");
                table[i] = Convert.ToInt32(Console.ReadLine());
            }
            Console.WriteLine($"The average of your numbers is  {Average(table)}");

            Console.WriteLine("\n**********************************" +
                "\nThe BUBBLE SORT:" +
                "\n**********************************");
            int[] tableToSort = new int[] { 99, 10, 50, 520, 30, 5, 9, 4, 1, 0 };
            Console.WriteLine($"The table to sort is: ");
            foreach (int number in tableToSort) { Console.Write($" {number} "); }
            Console.WriteLine("\n-----------------------------------" +
                "\nThe table sort is: ");
            BubbleSort(tableToSort);
            foreach (int number in tableToSort) { Console.Write($" {number} "); }

            Console.WriteLine("\n\n**********************************" +
                "\nThe COCKTAIL SORT:" +
                "\n**********************************");
            int[] tableToSortCoktail = new int[] { 99, 10, 50, 520, 30, 5, 9, 4, 1, 0 };
            Console.WriteLine($"The table to sort is: ");
            foreach (int number in tableToSortCoktail) { Console.Write($" {number} "); }
            Console.WriteLine("\n-----------------------------------" +
                "\nThe table sort is: ");
            CocktailSort(tableToSortCoktail);
            foreach (int number in tableToSortCoktail) { Console.Write($" {number} "); }

            
        }

        public static decimal Add(decimal a, decimal b)
        {
            return a + b;
        }

        public static int Average(int[] table)
        {
            int sum = 0;
            foreach (int number in table)
            {
                sum = sum + number;
            }
            return sum / table.Length;
        }

        public static int[] BubbleSort(int[] integerTable)
        {
            for (int j = 0; j <= integerTable.Length - 2; j++)
            {
                for (int i = 0; i <= integerTable.Length - 2; i++)
                {
                    if (integerTable[i] > integerTable[i + 1])
                    {
                        int temp = integerTable[i + 1];
                        integerTable[i + 1] = integerTable[i];
                        integerTable[i] = temp;
                    }

                }
            }
            return integerTable;
        }
        public static int[] CocktailSort(int[] integerTable)
        {

            for (int i = 1; i < integerTable.Length; i++)
            {
                int val = integerTable[i];
                int flag = 0;
                for (int j = i - 1; j >= 0 && flag != 1;)
                {
                    if (val < integerTable[j])
                    {
                        integerTable[j + 1] = integerTable[j];
                        j--;
                        integerTable[j + 1] = val;
                    }
                    else
                    {
                        flag = 1;
                    }
                }

            }

            return integerTable;

        }
        
    }
}
