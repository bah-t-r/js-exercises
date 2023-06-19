#include <iostream>

void showFirstMessage(std::string);
int num = 20;

int calc(int a, int b) {
    return a + b;
}

int main() {
    // showFirstMessage("Hello World!");
    // std::cout << num << "\n";
    std::cout << calc(5, 2) << "\n" << calc(5, 5) << "\n"
    << calc(5, 10) << "\n";
}

void showFirstMessage(std::string text) {
    std::cout << text << "\n";
    num = 10;
    std::cout << num << "\n";
}