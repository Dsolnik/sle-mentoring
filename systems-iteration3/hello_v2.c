#include <unistd.h>
#include <sys/types.h>
#include <errno.h>
#include <stdio.h>
#include <sys/wait.h>
#include <stdlib.h>


int main(void)
{
    pid_t childPID;

    childPID = fork();

    if(childPID >= 0) // fork was successful
    {
        if(childPID == 0) // child process
        {
            printf("\n Child Process says HELLO");
        }
        else //Parent process
        {
            printf("\n Parent process says WORLD");
        }
    }
    else // fork failed
    {
        printf("\n Fork failed, quitting!!!!!!\n");
        return 1;
    }

    return 0;
}
