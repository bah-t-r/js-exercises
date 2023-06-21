#include <stdio.h>



int main(void) {
    char str[] = "test";
    int arr[] = {1,2,3};
    printf("%c\n%d\n%d\n%d\n%d", str[0],
    sizeof(str)/sizeof(char)-1, sizeof(char), sizeof(str)-1,
    sizeof(arr)/sizeof(int));
    // return 0;
}