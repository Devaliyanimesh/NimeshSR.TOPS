#include<stdio.h>

int main()
{
	int a,b,c;
	
	printf("***** Addition *****\n\n");
	printf("please enter the value\n");
	scanf("%d",&a);
	printf("please enter the value\n");
	scanf("%d",&b);
	c=a+b;
	printf("The addition of a and b is %d\n\n",c);
	
	printf("***** Substraction *****\n\n");

    printf("please enter the value\n");
	scanf("%d",&a);
	printf("please enter the value\n");
	scanf("%d",&b);
	c=a-b;
	printf("The subtraction of a and b is %d\n\n",c);
	
	printf("***** Multiplication *****\n\n");

    printf("please enter the value\n");
	scanf("%d",&a);
	printf("please enter the value\n");
	scanf("%d",&b);
	c=a*b;
	printf("The multiplication of a and b is %d\n\n",c);
	
	printf("***** Division *****\n\n");

    printf("please enter the value\n");
	scanf("%d",&a);
	printf("please enter the value\n");
	scanf("%d",&b);
	c=a/b;
	printf("The division of a and b is %d\n\n",c);
	
	printf("***** Modulo *****\n\n");

    printf("please enter the value\n");
	scanf("%d",&a);
	printf("please enter the value\n");
	scanf("%d",&b);
	c=a*b/100;
	printf("The modulo of a and b is %d\n",c);
	return 0;
}