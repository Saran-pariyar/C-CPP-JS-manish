#include<iostream>
using namespace std;
//If there is two func and you make one virtual then the nonvirtual will run first
class base{
    public:
    int baseint=1;
    virtual void display(){ //Now the display of derived class will run cause we declare it virtual function
        cout<<"1 The value of base int is "<<baseint<<endl;
    }
};
class derived : public base{
public:
int derivedint=2;
void display(){
    cout<<"2 The value of base int is "<<baseint<<endl;
    cout<<"2 The value of derived int is "<<derivedint<<endl;
}
};
int main(){ 
     base *base_class_pointer;
     derived d;
     base_class_pointer=&d;
     base_class_pointer->display();
return 0;
}