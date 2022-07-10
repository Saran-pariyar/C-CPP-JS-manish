                              # dont forget to call the function before running the code 

def dictionary():

    # dictionary is nothing but a key value pairs
    # their values cannot be changed
    d = {}
      # print(type(d)) # prints -> <class 'd'>
    d2 = {"harry": "biryani", "saran": 'momo', "manish": 'tea',
          "techlead": {"morning": "burger", "night": "sandwich"}}
          
    print(d2["harry"])  # this values are case-sensative
    print(d2.get("saran")) # we can also use this to get value

    print(d2["techlead"]["morning"])

    d2["rohan"] = "junkfood"
    d2.update({"steve": "bone"})  # we can use this both..

    print(d2)
    del d2["rohan"]
    print(d2)

      # if we did like this
    d3 = d2
      # so we have to do d3 = d2.copy()
    del d3["harry"]
    print(d2)  # the harry inside d2 will also be deleted
    print(d2.keys())
    print(d2.values())
      # prints items with its value ex- (["harry","biryani"],["saran","momo"],)
    print(d2.items())

def learn_set():
      #set only keeps unique values
      s =  set()
      s = set([1,2,3,4])
      s.add("harry")  #adds this item
      s.add("harry")  #does not adds two same item
      s.remove("harry") #removes item
      print(type(s)) #s is a set
      print(s)

      s1 = s.intersection({1,2}) #prints only common
      print(s,s1)
      s1 = s.union({1,2}) #prints all
      print(s,s1)
      print(len(s)) #index starts from one
      print(min(s)) # will produce error because there is a string inside the set
      print(max(s)) # will produce error because there is a string inside the set

def operators():
      #arthematic operators
      print("the answer of 5 + 6  is" , 5 + 6 )
      print("the answer of 5 / 6  is" , 5 / 5 ) #givees float value
      print("the answer of 5 // 6  is" , 5 // 6 )  #gives integer value
      print("The answer of 5 ** 2 is ", 5 ** 2)
      print("The answer of 5 % 2 is ", 5 % 2) #teach to print even number using this

      #assignment operators
      x = 5 
      x += 1 #x = x + 1
      x /= 1
      x -= 1
      x *= 1
      print(x)

      #comparison operators
      i = 1
      print(i == 5) #false
      print(i >= 5)
      print(i != 5)
      print(i == 5)

      #logical operators
      p = True
      j = False
      print ( p and j )
      print ( p or j )

      #identity operator
      #print( 5 is 5)
      #print( 5 is not 5)

      #membership operator

      new_list = [1,2,3,4]
      print(2 in new_list)
      print(2 not in new_list)

      #bitwise operator => works with boolean

def docstring():
  """This is the docstring of the function """
  #use docstring often to explain your codes
  #the string we write in the first line of function is called docstring
  #print(sum((1,2))) #built-in function & user-defined function
  print("Hello")
  return "This is return value" # it will print none if we don't write a return value
  #outside the function things :
  #retrn = docstring() # the return value of function will be stored in var if we write like this
  #print(retrn)
  #print(docstring.__doc__) # to see the docstring this will help while writing big codes in companies

def try_except_handling():
      a = input("Enter a number")
      b = input("Enter a number") 
      try:
          print("The sum is " , int(a) + int(b))
      except Exception as e:
       print(e) #will print error message as string 
       # by this way the clients can use my program even if he has error in something
       

      print("This line must be print")

def file_io_theory():
      print("")
      #two types of memory : Ram and hard disk 
      #  ram is volatile and harddisk is non-volatile

      # types of file read mode:
      #read mode and text mode is default
         # "r": open file for reading 
         # "w" : open file for writing
         # "x" : if file exist then it will fail, but if file does not exist, it will make a file
         # "a" : append means to add more content in the file
         # "t" : "textmode" if file is a text file
         # "b" : binary mode 
         # "+" : read and write
       
def file_writing():
 f = open("text.txt")
 #content = f.read() #to use for in loop, we commneted this
 #content = f.read(2) #will only read two char
 #content = f.read(2) #will give aother 2 char ...i.e. rr..in harry
 for line in f: # to print items line by line
       print(line , end="") #remove the end=" " to see what impact it does
 #  print(content)
 
 #comment for looop to use this 
 #  print(f.readline())
 #  print(f.readline())
 
 #print(f.readlines()) #this will store all the lines of text as list and prints it 
 f.close() # it is a good practice


