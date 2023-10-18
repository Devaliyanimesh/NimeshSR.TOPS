#include<stdio.h>
#include<string.h>
int main()
{
	int num,con,i,space=0,count=0;
	char a[100],b[100],c[100],p1[100],p2[100],cp1[100],cp2[100],ch,str[100],v[100];
	printf("1.Reverse a String\n");
	printf("2.Concatenation\n");
	printf("3.Palidrome\n");
	printf("4.Copy a String\n");
	printf("5.Length of the String\n");
	printf("6.Frequency of Character in s string\n");
	printf("7.Find Number of Vowel and Consonants\n");
	printf("8.Find Number of Blank spaces and Digit\n");
	
	printf("Please Enter Your Choice:-\n");
	scanf("%d",&num);
	
	switch(num)
	{
		case 1:
			printf("Please Enter The String : ");
			scanf("%s",&a);
			
			printf("--The string sfter reversing is : %s",strrev(a));
			break;
		case 2:
		    printf("Please enter the Number or Name 1 :");
			scanf("%s",&b);
			
			printf("Please enter the Number or Name 2 :");
			scanf("%s",&c);
			
			strcat(b,c);
			{
				printf("The Consonant is : %s",b,c,con);
			}
			break;		
		case 3:	
		    printf("Please enter the Number or Name :");
		    scanf("%s",&p1);
		    
		    printf("Please enter the Reverse Number or Name :");
		    scanf("%s",&p2);
		    
		    if(strcmp(p1,p2)==0){
		    	printf("The Value is Palidrome.");
			}
			else{
				printf("The Value is Not Palidrome.");
			}
			break;
		case 4:
		    printf("Enter The Number or Name:");
		    scanf("%s",&cp1);
		    
		    strcpy(cp2,cp1);
		    printf("%s",cp2);
		    break;
		case 5:
		    printf("Enter the Name of :");
			scanf("%s",&a);
			printf("%d",strlen(a));
			break;
		case 6:
		        printf("Enter a string: ");
                fgets(str, sizeof(str), stdin);

                printf("Enter a character to find its frequency: ");
                scanf("%c", &ch);

                 for (int i = 0; str[i] != '\0'; ++i) {
                 if (ch == str[i])
                  count++;
                }

                printf("Frequency of %c = %d", ch, count);
			break;
		case 7:
		    printf("Enter The string :\n");
			scanf("%s",&ch);
			switch (ch){
				case 'a':
					printf("%c is vowel\n",ch);
					break;
				case 'e':
					printf("%c is vowel\n",ch);
					break;
				case 'i':
					printf("%c is vowel\n",ch);
					break;
				case 'o':
					printf("%c is vowel\n",ch);
					break;
				case 'u':
					printf("%c is vowel\n",ch);
					break;
				case 'A':
					printf("%c is vowel\n",ch);
					break;
				case 'E':
					printf("%c is vowel\n",ch);
					break;
				case 'I':
					printf("%c is vowel\n",ch);
					break;
				case 'O':
					printf("%c is vowel\n",ch);
					break;
				case 'U':
					printf("%c is vowel\n",ch);
					break;
					default:
						printf("The Value Is Consonant");
				};
			break;	
		case 8:	
            printf("Enter a string\n");
            scanf("%s",&str);
            gets(str);
            i=0;
             while(i<=str[i]){
               if(str[i]==' '){
                 space++;
                }
                    i++;
                }

                printf("Total white space :%d ",space);
			     break;	
		    
	            }
	return 0;
}