#include<iostream>
using namespace std;
//We cannot call the members of derived class with the base class pointer
class base{
    public:
    int baseint;
    void display(){
        cout<<"The value of base int is "<<baseint<<endl;
    }
};
class derived : public base{
public:
int derivedint;
void display(){
    cout<<"The value of base int is "<<baseint<<endl;
    cout<<"The value of derived int is "<<derivedint<<endl;
}
};
int main(){ 
  base *base_pointer;
  derived derive;
  base_pointer=&derive;
  base_pointer->baseint=10;
  base_pointer->display();   
 // base_pointer->derivedint=10 //We cannot do this
 derived d;
 derived *derived_pointer=&d;
 derived_pointer->derivedint=20;
 derived_pointer->baseint=44;
 derived_pointer->display();
return 0;
}