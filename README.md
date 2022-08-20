# Pulumi training using TypeScript (2nd session)
Exercises to learn how to use Pulumi (2nd session)

## Content ##

0. Create an `exercise` and switch to it
1. Create a new TypeScript project
2. Create a new configuration entry named `ownerName`
3. Create a new configuration entry named `subscriptionId`
4. Create a new secret entry named `apiKey`
5. Generate a new password using the [Random](https://www.pulumi.com/registry/packages/random/) provider
   * At least 20 charaters long
   * Must contain special characters
6. Generate a random pet name using the [Random](https://www.pulumi.com/registry/packages/random/) provider
7. Concatenate the `ownerName` value with the random pet name (`owner-pet`)
8. Create stack outputs for:
   * the random password generated in 5
   * the stack pet name from step 6
   * the concatenated owner name and pet name from step 7
   * the `apiKey` set in step 1 as `apiKey`
   * the plain text value of `apiKey` set in step 1 as `insecureApiKey`
9. In one command, set the stack tag `pet` as the randomly generated pet name

### Bonus/Challenges ###

10. Set a stack README to your stack

### Answers ###
You will find all the answers [here](answer/)