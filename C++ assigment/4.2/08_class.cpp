#include<iostream>
using namespace std;
class student{
	public:
		int roll;
		void r()
		{
		cout<<"please neter your roll number "<<endl;
		cin>>roll;
		}
};
class test:public student
{
	public:
		int sci,maths;
		void t()
		{
		cout<<"please enter your science marks "<<endl;
		cin>>sci;
		cout<<"please enter your maths marks "<<endl;
		cin>>maths;	
		}
		
};
class result:public test
{
	public:
		int total;
		void to()
		{
		total=sci+maths;
		cout<<"your obtain marks is "<<total<<endl;
		}
};
int main()
{
	result obj;
	obj.r();
	obj.t();
	obj.to();
	return 0;
}
