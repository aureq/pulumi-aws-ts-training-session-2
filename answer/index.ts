import * as pulumi from "@pulumi/pulumi";
import * as random from "@pulumi/random";
import { readFileSync } from "fs";

const config = new pulumi.Config();

export = async () => {

    // TODO: 5. Generate a new password
    const password = new random.RandomPassword("password", {
        length: 20,
        special: true
    });

    // TODO: 6. Generate a random pet name
    const petName = new random.RandomPet("stack-pet");

    // TODO: 7. Concatenate the `stackOwner` value with the random pet name (`ownerName-petName`)
    const ownerName = config.require("stackOwner");
    const ownerPetName = pulumi.interpolate`${ownerName}-${petName.id}`;

    // TODO: 8. Create stack outputs (See README.md)
    return {
        password: password.result,
        stackPet: petName.id,
        ownerPetName: ownerPetName,
        apiKey: config.requireSecret("apiKey"),
        insecureApiKey: pulumi.unsecret(config.requireSecret("apiKey")),
        // TODO: 10. Set a stack README to your stack
        readme: readFileSync("./Pulumi.README.md").toString(),
    }
}