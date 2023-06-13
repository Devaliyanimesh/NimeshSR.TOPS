#include<iostream>
using namespace std;
class demo{
	public:
		int a,b,c;
		demo()
		{
			cout<<"please enter the value of a is"<<endl;
			cin>>a;
			cout<<"please enter the value of b is"<<endl;
			cin>>b;
		}
		void add()
		{
			c=a+b;
			cout<<"the Addition is "<<c<<endl;
			c=a-b;
			cout<<"the Subtraction is "<<c<<endl;
			c=a*b;
			cout<<"the  Multiplication is "<<c<<endl;
			c=a/b;
			cout<<"the Division is "<<c<<endl;
		}
};

int main()
{
	demo obj;
	obj.add();
}
