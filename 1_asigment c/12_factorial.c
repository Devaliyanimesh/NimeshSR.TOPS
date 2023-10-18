#include<stdio.h>
int main()
{
	int number,fact=1,i;
	printf("enter the number\n");
	scanf("%d",&number);
	for(i=1;i<=number;i++){
		fact=fact*i;
	}
	printf("factorial of %d is %d",number,fact);
	return 0;
}