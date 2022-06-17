#include <stdio.h>

int const MAX = 100;

struct Person // ~ 64 bytes
{
    char name[64];
    int age;
};

int main(int argc, char const *argv[])
{   
    struct Person people[MAX];

    struct Person *p_Person = &people[0];

    for (int i = 0; i < MAX; i++)
    {
        p_Person->age = 0;
    }


    return 0;
}
