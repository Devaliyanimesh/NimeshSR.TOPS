#include<stdio.h>
int main()
{
	int num,sum=0,a,b;
	printf("please enter the number");
	scanf("%d",&num);
	b=num%10;
    while(num>=10){
		num=num/10;
	}
	a=num;
	sum=a+b;
	printf("sum addtion is = %d",sum);
	
	return 0;
}