def reverse(w):
   resultArray = []
   for i in reversed(w):
       resultArray.append(i)
   print (resultArray)
   return resultArray

w = "abc"
reverse(w)