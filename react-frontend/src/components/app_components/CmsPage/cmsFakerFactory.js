import { faker } from "@faker-js/faker";
export default (user, count) => {
  let data = [];
  for (let i = 0; i < count; i++) {
    const fake = {
      name: faker.lorem.sentence(1),
      category: faker.lorem.sentence(1),
      path: faker.lorem.sentence(1),
      image1: faker.lorem.sentence(1),
      image2: faker.lorem.sentence(1),
      headerContent: faker.lorem.sentence(1),
      bodyContent: faker.lorem.sentence(1),
      disclaimer: faker.lorem.sentence(1),
      visible: faker.lorem.sentence(1),
      bodyList: faker.lorem.sentence(1),
      listPageTemplate: faker.lorem.sentence(1),

      updatedBy: user._id,
      createdBy: user._id,
    };
    data = [...data, fake];
  }
  return data;
};
