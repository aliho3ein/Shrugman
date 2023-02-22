# Shrugman

Let's build another guessing game. One player, makes up a secret word or phrase (we will use movie titles), while the other player tries to guess the word by asking what letters it contains. However, every wrong guess brings them one step closer to losing. To indicate how many attempts are left, instead of the usual hanging man drawing, we draw the shrug emoji. It consists of exactly 10 characters:

> ¯\\\_('')\_/¯

Every wrong guess, draws one more piece of the emoji. If the user has already guessed this letter once, ask them for another letter, instead of couting it as a wrong guess.

The secret movie title is displayed masked - every character except spaces is represented by an underscore \_. With every correct guess, all ocurrences of the letter are revealed.
