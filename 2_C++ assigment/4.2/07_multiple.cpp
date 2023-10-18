#include<iostream>
using namespace std;

class student{
	public:
		float per;
		string sname,sage;
	void details(){
		cout<<"****** Student Details ******"<<endl<<endl;
		cout<<"please enter the student name "<<endl;
		cin>>sname;
		cout<<"please enter the student age "<<endl;
		cin>>sage;
		cout<<"please enter the student percentage "<<endl;
		cin>>per;
	}
};
;
class teacher{
	public:
		float salary;
		string tname,tage;
	void details1(){
		cout<<endl<<endl<<"****** Teacher Details ******"<<endl<<endl;
		cout<<"please enter the teacher name "<<endl;
		cin>>tname;
		cout<<"please enter the teacher age "<<endl;
		cin>>tage;
		cout<<"please enter the teacher salary "<<endl;
		cin>>salary;
	}
};
class display:public student,public teacher
{
	public:
		void display1()
		{
			cout<<"****** Student Details ******"<<endl<<endl;
			cout<<"the student name is "<<sname<<endl;
			cout<<"the student age is "<<sage<<endl;
			cout<<"the student percentage is "<<per<<endl;
			cout<<"****** Teacher Details ******"<<endl<<endl;
			cout<<"the teacher name is "<<tname<<endl;
			cout<<"the teacher age is "<<tage<<endl;
			cout<<"the teacher salary is "<<salary<<endl;
		}
};
int main()
{
	display obj;
	obj.details();
	obj.details1();
	obj.display1();
}
