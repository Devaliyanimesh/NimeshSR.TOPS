#include<iostream>
using namespace std;

class add{
	public:
		int a,b,c;
		void getdata()
		{
			cout<<"Please enter the value of a"<<endl;
			cin>>a;
			cout<<"Please enter the value of a"<<endl;
			cin>>b;
		}
		void setdata()
		{
			c=a+b;
			cout<<"addition a and b is "<<c<<endl;
			c=a-b;
			cout<<"substraction a and b is "<<c<<endl;
			c=a*b;
			cout<<"multiplication a and b is "<<c<<endl;
			c=a/b;
			cout<<"division a and b is "<<c<<endl;
		}
};
int main()
{
	add obj;
	obj.getdata();
	obj.setdata();
	return 0;
}
