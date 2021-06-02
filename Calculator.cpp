#include <bits/stdc++.h>
using namespace std;

class Calculator
{
public:
    int a, b;
    Calculator(int x, int y)
    {
        a = x;
        b = y;
    }
    int sum()
    {
        return a + b;
    }
    int difference()
    {
        return a - b;
    }
};

int main()
{
    Calculator calc = Calculator(4, 2);
    cout << calc.sum();
    cout << calc.difference();
}