#include<iostream>
#include <list>
using namespace std;

void display(list<int> &in){
    list<int> :: iterator iter;
cout<<"The elements of the list are ";
for(iter=in.begin(); iter != in.end(); iter++){
    cout<<*iter<<"  ";
}
cout<<endl;
} 

int main(){ 
list<int> list1; //List with zero length
list1.push_back(2);
list1.push_back(4);
list1.push_back(3);


display(list1);
list1.remove(3); //Now this function will remove all the '3' from the list
list1.pop_back();
display(list1);

list<int> list2(4); //Empty list of size 4
list<int> :: iterator iter;
iter=list2.begin();
*iter=10;
iter++;
*iter=20;
iter++;
*iter=30;
iter++;
*iter=40;
iter++;
list2.remove(30); //Now this function will remove all the '30' from the list
display(list2);
// list2.sort() ->This will arrange the elements in asscending order
// list1.reverse(); -> this will reverse the order of the elements in the list
list1.merge(list2);
cout<<"List1 after merging \n";
display(list1);

return 0;
}