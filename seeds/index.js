const sequelize = require('../config/connection');

const { Category, Product, Tag, ProductTag } = require('../models');

const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');



const seedAll = async () => {
  await sequelize.sync({ force: true });

  const categoryData = await Category.bulkCreate(seedCategories)
  
  const productData = await Product.bulkCreate(seedProducts)

  const tagData = await Tag.bulkCreate(seedTags)
  
    const prodtagData = await ProductTag.bulkCreate(seedProductTags)

  // await seedProductTags();
  // console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
