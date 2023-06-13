#include<iostream>
using namespace std;

class cube{
	public:
		float a,b,c,d;
		inline void value(){
			cout<<"please enter the first value"<<endl;
			cin>>a;
			cout<<"please enter the second value"<<endl;
			cin>>b;
		}
		inline void multi(){
			c=a*b;
			cout<<"The multiplication is "<<c<<endl;
		}
		inline void cub(){
			d=c*c;
			cout<<"The Cube Value is "<<d<<endl;
		}
};
int main()
{
	cube obj;
	obj.value();
	obj.multi();
	obj.cub();
	return 0;
}
