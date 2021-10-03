const stubs = {};

stubs.cpp = `#include <iostream>
using namespace std;

int main() {
	cout<<"Hello world";
	return 0;
}
`;

stubs.c = `#include <stdio.h>

int main() {
        printf("Hello world");
	return 0;
}
`;

stubs.py = `print("Hello world")`;

export default stubs;
