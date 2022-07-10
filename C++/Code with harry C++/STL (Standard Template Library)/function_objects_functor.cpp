#include<iostream>
#include<functional> //All the things of function object
#include<algorithm>
using namespace std;
int main(){ 
     //Function object (functor): function wrapped in a class  and it is avialable like an object
     int arr[]={1,73,4,2,54,7};
     sort(arr, arr+5); //This will sort only 5 elements
     for(int i=0; i<6; i++){
         cout<<arr[i]<<endl; //The last element will not be sorted because we only commanded to sort 5 elements of arr
     }
     cout<<"Now in decending order "<<endl;
     sort(arr, arr+6,greater<int>()); //Now this will arrange in decending order
     for(int i=0; i<6; i++){
         cout<<arr[i]<<endl; //The last element will not be sorted because we only commanded to sort 5 elements of arr
     }
return 0;
}