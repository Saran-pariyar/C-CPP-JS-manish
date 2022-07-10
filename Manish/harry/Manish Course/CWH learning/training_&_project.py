def dict_problem_solution():

      word = input("What do you want to know the meaning? ") #loop
      list_of_words = {
            "loop":"to run something repeatedly" ,
            "object":"the datatype which have more data type nand function inside it ",
            "function":"The set of code made to do a specific task"
       }

      print(list_of_words[word])

def faulty_calculator():
    print(" Please Enter Your mode of operation as per the below instructions: \n + for addition \n - for substraction \n * for multiplication \n / for division \n ** for power")
    a=input("Enter your mode of operation : ")
    b=int(input("Enter your first number : "))
    c=int(input("Enter your second number : "))
    if a=="+":
        if b==56 and c==9 :
            print("The addition is : 77")
        else :
                print("The addition is :", b+c)
    if a=="-":
        print("The substration is : ", b - c)
    if a == "*":
        if b == 45 and c == 5:
            print("The multiplication is : 555")
        else:
            print("The multiplication is :", b * c)
    if a == "/":
        if b == 56 and c == 6:
            print("The division is : 4")
        else:
            print("The division is : ", b / c)
    if a == "**":
        print("The power is : ", b ** c)

def shorthand_if_else():
      a = input("Enter a number")
      b = input("Enter a number")
      print("A is bigger") if a>b else print("B is bigger")

def number_guessing():
    while 1:
        num = 5
        guess = 0
        guess_num =  int(input("Guess number between 1 to 10 : "))
        if(guess_num > num):
            print("Number too high")
            guess += 1
            continue
        elif(guess_num < num):
            print("Number too low")
            guess += 1
            continue
        elif(guess_num == num ):
            guess +=1
            print("You guessed correct")
            print("You guessed in ",  guess ,  "times")
            break

number_guessing()
