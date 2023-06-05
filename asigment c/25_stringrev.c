#include<stdio.h>
int main()
{
	char name[10];
	int i,l=0;
	printf("please enter the name:");
	scanf("%s",&name);
	for(i=0;name[i]!='\0';i++){
		l++;
	}
	printf("the length of %s is %d",name,l);
	return 0;
}