# Idea

Create a system that can allow us to manage categories and products. There should be a chaining between categories and products for example:

- Store name: Awesome Book Store
- Category: Science Fiction, Literature, Technical
- Product: Ready player one, Blindness, Javascript object oriented, Clean Code

- Configure a store name
- CRUD
    - Categories
    - Products

## Model mapping
- Category
    - Id (Given for free when using MongoDb)
    - Name
- Product
    - Id (Given for free when using MongoDb)
    - Name
    - Image
    - ShortDescription
    - LongDescription
    - Brand
    - Tags
    - Price
    - Category_Id

# User Interface
- Use Bootstrap for UI elements
- Have a client site and an admin area