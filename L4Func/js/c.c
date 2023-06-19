#include <stdio.h>

void showFirstMessage(char[]);
int num = 20;

int main(void) {
    showFirstMessage("Hello World! \n");
    printf("%d\n", num);
    // return 0;
}

void showFirstMessage(char text[]) {
    printf(text);
    num = 10;
    printf("%d\n", num);
}