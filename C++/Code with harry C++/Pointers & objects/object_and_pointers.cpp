#include<iostream>
#include<string>
using namespace std;
class shopitem{
string name; int price;
public:
void set(string a, int b){
    name=a; price=b;}
void print(){
    cout<<"The name of the  item is "<<name<<endl;
    cout<<"The price of the item is "<<price<<endl;
}
};
int main(){ 
    string r; int p;
    cout<<"How many things do you want to buy ? \n";
    int amount;
    cin>>amount;
     shopitem *ptr = new shopitem[amount];
     shopitem *ptrtemp = ptr;
     for(int i=0; i<amount; i++){
         cout<<"Enter the name of the item \n";
         cin>>r;
         cout<<"Enter the price of the item \n";
        cin>>p;
        //we can also do (*ptr + i).set(r,p);
        ptr->set(r,p);
        ptr++;
     }
     for(int i=0; i<amount; i++){
         ptrtemp->print();
         ptrtemp++;
         //We have to make ptrtemp because we did the increment of ptr and now while doing increment in here it will start from previos for loop value
     }
     delete []ptr;
return 0;
}