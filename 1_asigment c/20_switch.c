#include<stdio.h>
int main()
{
	int a,b,c;
	char ch;
	printf("Press A for Addition:\n");
	printf("Press S for Subtraction:\n");
	printf("Press M for Multiplication:\n");
	printf("Press D for  Division:\n");
	scanf("%c",&ch);
	printf("Please enter the value of A:-\n");
	scanf("%d",&a);
	printf("Please enter the value of B:-\n");
	scanf("%d",&b);
	switch (ch){
		case 'A':
			c=a+b;
			printf("The Addition is %d",c);
		    break;
		    
		case 'S':
		    c=a-b;
			printf("The Subtraction is %d",c);
			break;
			
		case 'M':
		    c=a*b;
			printf("The Multiplication is %d",c);
			break;
			
		case 'D':
		    c=a/b;
			printf("The Division is %d",c);
			break;
			default:
			printf("You are enter wrong value\n");			
	}
}