def totalFibonacci(n):
   def fibonacciRecursive(num):
       if (num <= 1):
           return 1
       else:
           return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2)
   return fibonacciRecursive(n) + n
print(totalFibonacci(3))