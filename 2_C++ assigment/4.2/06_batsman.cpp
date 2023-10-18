#include<iostream>
using namespace std;
 
 class cricketer{
 	
 	public:
 		float run,match,average,code_number,total;
 	string name;
 		void c(){
		 
 	cout<<"please enter the name "<<endl;
 	cin>>name;
 	cout<<"please enter the code "<<endl;
 	cin>>code_number;
 	cout<<"please enter the Run "<<endl;
 	cin>>run;
 	cout<<"please enter the match "<<endl;
 	cin>>match;
 	total=run/match;

 }
 };
 
 class batsman:public cricketer
 {
 	public:
 	void b()
	 {
	 	
 		cout<<"the batsman name is "<<name<<endl;
 		cout<<"the batsman code is "<<code_number<<endl;
 		cout<<"the batsman run is "<<run<<endl;
 		cout<<"the batsman match is "<<match<<endl;
 		cout<<"the average run is "<<total<<endl;
	 }
 };
 
 int main()
 {
 	batsman obj;
 	obj.c();
 	obj.b();
 	return 0;
 }
