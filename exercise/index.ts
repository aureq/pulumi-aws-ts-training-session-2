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

  // TODO: 6. Generate a random pet name using the random package

  // TODO: 7. Concatenate the `stackOwner` value with the random pet name (`ownerName-petName`)
  const ownerName = config.require("stackOwner");
  const ownerPetName = `${ownerName}-${petName.id}`;
  console.log("Owner pet name", ownerPetName);

  // TODO: 8. Use pulumi.all() to use the instance names in an SSH config
  const instance1 = pulumi.Output.create("instance1");
  const instance2 = pulumi.Output.create("instance2");
  const sshConfig = "";

  // TODO: 9. Create stack outputs (See README.md)
  return {};
};
