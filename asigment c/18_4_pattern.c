#include<stdio.h>
int main()
{
	char i,j,ch;
	printf("enter as many character as you want to print\n");
	scanf("%c",&ch);
	for(i='A';i<=ch;i++){
		for(j='A';j<=i;j++){
			printf("%c",j);
		}
		printf("\n");
	}
	return 0;
}