#include <stdio.h>

int main(int argc, char *argv[])
{
    printf("\nexe name=%s", argv[0]);

    for(int i = 1; i < argc; i++) {
        printf("\ni = %d", i);
        printf("\narg%d=%s", i, argv[i]);
    }

    printf("\n");

    return 0;	
}
