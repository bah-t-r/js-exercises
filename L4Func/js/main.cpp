#include <iostream>

void showFirstMessage(std::string);
int num = 20;

int main() {
    showFirstMessage("Hello World!");
    std::cout << num << "\n";
}

void showFirstMessage(std::string text) {
    std::cout << text << "\n";
    num = 10;
    std::cout << num << "\n";
}