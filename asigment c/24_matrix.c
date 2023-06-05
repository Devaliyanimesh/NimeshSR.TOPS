#include<stdio.h>

int main()
{
	int a[3][3],b[3][3],c[3][3],i,j;
	for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		{
			printf("please enter the element");
			scanf("%d",&a[i][j]);
		}
		printf("\n");
	}

	for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		{
			printf("please enter the element");
			scanf("%d",&b[i][j]);
		}
	printf("\n");
}
for(i=0;i<3;i++)
{
	for(j=0;j<3;j++)
	{
	c[i][j]=a[i][j]+b[i][j];
		
	}
	printf("\n");
}
for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		{
			printf("\t%d",c[i][j]);
			
		}
		printf("\n");
	}
for(i=0;i<3;i++)
{
	for(j=0;j<3;j++)
	{
	c[i][j]=a[i][j]-b[i][j];
		
	}
	printf("\n");
}
for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		{
			printf("\t%d",c[i][j]);
			
		}
		printf("\n");
	}
	for(i=0;i<3;i++)
{
	for(j=0;j<3;j++)
	{
	c[i][j]=a[i][j]*b[i][j];
		
	}
	printf("\n");
}
for(i=0;i<3;i++)
	{
		for(j=0;j<3;j++)
		{
			printf("\t%d",c[i][j]);
			
		}
		printf("\n");
	}
	return 0;
}
