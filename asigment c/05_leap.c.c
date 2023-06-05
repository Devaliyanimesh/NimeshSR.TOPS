#include<stdio.h>
int main()
{
	int year;
	printf("please enter the year\n");
	scanf("%d",&year);
	if(year % 400 == 0){
		printf("This year is leap year\n");
	}
	
	else if(year % 4 == 0){
		printf("This year is leap year\n");
	}
	
	else{
		printf("This is not leap year\n");
	}
	return 0;
}