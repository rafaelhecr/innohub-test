def serieFibonacci(n):
   suc = n
   susc = 1
   bef = 0
   tmp = 0
   while(n>=0):
       tmp = susc
       susc = susc + bef
       bef = tmp
       n = n-1
   return bef + suc
print(serieFibonacci(3))