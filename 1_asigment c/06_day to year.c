#include<stdio.h>
int main()
{
	int year,day,convert;
	printf("please enter the no. of year\n");
	scanf("%d",&year);
	convert=year*365;
	printf("the no. of day is %d\n\n",convert);
	
	printf("please enter the no. of day\n");
	scanf("%d",&day);
	convert=day/365;
	printf("the no. of year is %d",convert);
	
	return 0;
}