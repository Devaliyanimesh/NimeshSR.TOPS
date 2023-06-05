#include<stdio.h>
int main()
{
	int a=1;
	int b=2;
	
	printf("-- swap number without using third variable --\n\n");
	printf("Before Swaping the Value Of A is %d\n",a);
	printf("Before Swaping the Value Of B is %d\n",b);
	
	a=a+b;
	b=a-b;
	a=a-b;
	
	printf("After Swaping the Value Of A is %d\n",a);
	printf("After Swaping the Value Of B is %d\n",b);
	
	return 0;
}