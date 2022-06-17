#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <arpa/inet.h>

int main(int argc, char const *argv[])
{
    int socket;
    struct sockaddr_in server;
    char *message;

    // Create Socket
    socket = socket(AF_INET, SOCK_STREAM, 0);
    if(socket == -1)
    {
        printf("Could not create the socket");
        return 0;
    }

    // Validate an IP address has been provided
    if(argc < 2) {
        printf("Please pass the desired servers IP as a param");
        return 1;
    }
    server.sin_addr.s_addr = inet_addr(argv[1]);
    server.sin_family = AF_INET;
    if(argc < 3) {
        printf("Please pass the desired servers port as a param");
        return 1;
    }
    server.sin_port = htons(atoi(argv[2]));

    if((socket = connect(socket, (struct socketaddr *)&server, sizeof(server)) < 0) {
        puts("connect error");
        
        return 1;
    }
    
    puts('Connected');

    return 0;
}
