#include<iostream>
using namespace std;
class complex {
  int real ; int imaginary;
  public:
  void getdata(){
      cout<<"The real number is "<<real<<endl;
      cout<<"The imginary number is "<<imaginary<<endl;
  }
  void setdata(int a,int b){
      real=a;
      imaginary=b;
  }
};
int main(){ 
  complex com;
  complex *ptr = &com; //now we can access or modify the members of the com using the pointer
//   complex *ptr = new complex -->we can also do like this 
  com.setdata(2,4);
  com.getdata();   
  (*ptr).getdata(); //It is good to use the bracket in the (*ptr) because it will be more safer
  ptr->getdata(); //This will look much better than the above code
  //The arrow operator means to use the getdata() method of the class which the pointer is pointing
  //this meand dereference the (ptr) and then sun the method
cout<<endl<<"Now with arrays" <<endl;
complex *pointer = new complex[4];
pointer->setdata(4,5);
pointer->getdata();
(pointer + 1)->setdata(3,4);
(pointer +1 )->getdata();

return 0;
}