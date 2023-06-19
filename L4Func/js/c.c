#include <stdio.h>
void showFirstMessage(char[]);
int num = 20;

int calc(int a, int b) {
    return a + b;
}

int main(void) {
    // showFirstMessage("Hello World! \n");
    // printf("%d\n", num);
    // // return 0;
    printf("%d\n%d\n%d\n", calc(5, 2), calc(5, 5), calc(5, 10));
}
void showFirstMessage(char text[]) {
    printf(text);
    num = 10;
    printf("%d\n", num);
}
