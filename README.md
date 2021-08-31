# Inventory Management System Backend (Nestjs + Graphql)

### You can start your Inventory Management Backend project from here.

Authentication implemented with OAuth (but not saving in local database). If you want then develop it.

### Technology Used

1. Nestjs (Nodejs Backend Framework)
1. Graphql (Code First Approach)
1. JWT based authentication
1. Mongodb (Nest's mongoose module is used)
1. OAuth (google)


### How to run

1. Clone the project in your local pc
1. Go to the root directory and open terminal (or powershell)
1. Create a database with the name `nest` (mongodb database)
1. Run the command `npm install`
1. After installing all of the packages run `npm run start:dev`
1. Now you can play with the graphql but you need a valid `jwt` token that can be achieved from OAuth authentication (google)
1. To achieve a jwt token go to `http://localhost:3000/auth/google`. Signin with your gmail account and after successfully signedin you will redirected to a new url. Collect the jwt from this page.
1. Now open the browser and go to `localhost:3000/graphql`.
1. Enjoy your project with `query` or `mutation` in the graphql playground. Your first task should be creating some `Customer` and some `Inventory`.

See the graphql query and mutation documentation below for details.

### Graphql Query/Mutation Documentation

**1. Create Customer.**

```
mutation{
  createCustomer(input: {
    name: "Mahmudul Hasan",
    mobile: "01751006948",
    address: "Gulshan, Dhaka"
  }){
    name
    id
    mobile
    address
  }
}
```

**2. Get All Customers.**

```
query{
  customer{
    id
    name
    mobile
    address
  }
}
```

**3. Create New Inventory (Product).**

```
mutation {
  createInventories(
    input: {
      name: "Rice - Basmoti",
      code: "12aa89",
      unit_price: 1700,
      description: "Good rice in reasonable price"
    }
  ) {
    id
    name
    code
    description
    unit_price
  }
}

```

**4. Get all Inventories (Products).**

```
query {
  inventory {
    id
    name
    unit_price
    description
  }
}
```

**5. Create an Invoice.**

```
mutation {
  createInvoice(
    input: {
      total_amount: 314
      number_of_product: 3
      customer: {
        id: "612c376654ca3382d124eaf4"
        name: "Alee Abdullah"
        mobile: "01925008348"
        address: "Niznanduali"
      }
      invoice_items: [
        {
          id: "612c2e9271f82a6bd2c9d83c"
          code: "543fcfvg"
          name: "Madani Panjabi"
          unit_price: 1300
          description: "Alhamdulillah! a nice product"
          qty: 2
        }
        {
          id: "612c2f1c39e3be6d0d52276d"
          name: "Sweet Chokolate"
          code: "ljgo343"
          unit_price: 544
          description: "Masha Allah"
          qty: 4
        }
      ]
    }
  ) {
    total_amount
    number_of_product
    customer {
      id
      name
    }
    invoice_items{
      name
      qty
      unit_price
    }
  }
}


```

**6. Get all Invoices.**

```
query{
  invoices{
    total_amount
    number_of_product
    customer{
      id
      name
      mobile
    }
    invoice_items{
      name
      code
    	qty
    }
  }
}
```

