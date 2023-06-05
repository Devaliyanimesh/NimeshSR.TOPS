#include<stdio.h>
#include<string.h>

int main()
{
	char name[20],rname[20];
	printf("please enter the name\n");
	scanf("%s",&name);
	printf("please enter the name\n");
	scanf("%s",&rname);
	
	if(strcmp(name,rname)==0)
	{
		printf("the value is palidrom");
	}
	else
	{
		printf("can not palidrom value");
	}
	
	return 0;
}