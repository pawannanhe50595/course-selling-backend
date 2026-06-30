import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  
  const users = await prisma.user.findMany();
  console.log("All Users:");
  console.log(users);

  
  const user = await prisma.user.findUnique({
    where: {
      email: "john@gmail.com",
    },
  });

  console.log("Single User:");
  console.log(user);

  const updatedUser = await prisma.user.update({
    where: {
      email: "john@gmail.com",
    },
    data: {
      name: "John Doe",
    },
  });

  console.log("Updated User:");
  console.log(updatedUser);
  const deletedUser = await prisma.user.delete({
    where: {
      email: "john@gmail.com",
    },
  });

  console.log("Deleted User:");
  console.log(deletedUser);
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });