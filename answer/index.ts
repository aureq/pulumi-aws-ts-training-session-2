import * as pulumi from "@pulumi/pulumi";
import * as random from "@pulumi/random";
import { readFileSync } from "fs";

const config = new pulumi.Config();

export = async () => {
  // TODO: 5. Generate a new password
  const password = new random.RandomPassword("password", {
    length: 20,
    special: true,
  });

  // TODO: 6. Generate a random pet name
  const petName = new random.RandomPet("stack-pet");

  // TODO: 7. Concatenate the `stackOwner` value with the random pet name (`ownerName-petName`)
  const ownerName = config.require("stackOwner");
  const ownerPetName = pulumi.interpolate`${ownerName}-${petName.id}`;
  ownerPetName.apply((n) => console.log("Owner pet name", n));

  // TODO: 8. Use pulumi.all() to use the instance names in an SSH config
  const instance1 = pulumi.Output.create("instance1");
  const instance2 = pulumi.Output.create("instance2");
  const sshConfig = pulumi.all([instance1, instance2]).apply((instances) =>
    instances
      .map((instance) => {
        return `
Host ${instance}
    User ec2-user
    UserKnownHostsFile /dev/null
    StrictHostKeyChecking no
`;
      })
      .join("\n")
  );

  // TODO: 9. Create stack outputs (See README.md)
  return {
    password: password.result,
    stackPet: petName.id,
    ownerPetName: ownerPetName,
    apiKey: config.requireSecret("apiKey"),
    insecureApiKey: pulumi.unsecret(config.requireSecret("apiKey")),
    // TODO: 10. Set a stack README for your stack
    readme: readFileSync("./Pulumi.README.md").toString(),
    sshConfig,
  };
};
