# Project2-Stationery-Store

## Link technologies used:

- React.
- Router.
- Axios.
- Some Bootstrap (It's responsive by more than 50% ).
- Jquery.
- Css.
- Some Icons.

# Wireframe/ Draft

## Structure Of the system's work flow.

![](Images-Wireframes/Structure-Of-React-System.png)

## Home Page.

![](Images-Wireframes/Draft_V1.png)

## Add Page.\_

![](Images-Wireframes/Add-Page.png)

## Edit Page.\_

![](Images-Wireframes/Edit-Page.png)

## Delete Page\_

![](Images-Wireframes/Delete-Page.png)

# User stories

- As a [user], I want to [Add a product with their quantity] so I can [add new product to my table].
- As a [user], I want to [Edit any of my products] so I can [edit on any existed product].
- As a [user], I want to [Delete a specific row of my products] so I can [Get rid any product I want].
- As a [user], I want to [Delete all products] so I can [Quick clear all products with on click].
- As a [user], I want to [Get all products] so I can [know and view my products].
- As a [user], I want to [Mark any products as favorite] so I can [move any products to my favorite list].

# My strategies for solving the problem

- First, I have decided to make a menu as a home page so through that menu the user can go anywhere he wants like add, edit, delete, API, and favorite page.\*
- Second, I have made a form in the add page so the user can enter a new product with their quantity to the table.\*.
- Third, after the user added a product he can also edit on them or even delete on of them or delete all them.\*
- Fourth, I have made a new page as a favorite so the user is able to mark any product as a favorite and added them to the favorite table.\*
- Finally, I have made an API page so through that the user can enter anything in that form and will display to his images as Gif for that input he entered.\*

# Future plan..

_I would like to allow a user to add an image for a product, also make some validation on the system._

# Describe some favorite function work

**This Function take two arguments the name and the quan, then I have pushed the name and the quan to the Fave array then Update the faveObjects state**
\*myFave = (faveName,faveQuan) => {

    console.log(faveName, faveQuan)
    let newFaveArrayName = this.state.faveObjects.isFaveArrayName;
    newFaveArrayName.push(faveName);
    let newFaveArrayQuan = this.state.faveObjects.isFaveArrayQuan;
    newFaveArrayQuan.push(faveQuan);
    this.setState({

      faveObjects: {

        isFaveArrayName: newFaveArrayName,
        isFaveArrayQuan: newFaveArrayQuan,

      }

    });
    console.log(this.state.faveObjects.isFaveArrayName)
    console.log(this.state.faveObjects.isFaveArrayQuan)

    alert("Added Successfully")

}

\* AddProduct = (pName, quan) => {
**This Function take two arguments the name and the quan, then display to the user as a table.**

    console.log(pName, quan);

    this.setState({
      objectOfProducts: {
        name: [...this.state.objectOfProducts.name, pName],
        quan: [...this.state.objectOfProducts.quan, quan],
      },
    });
    alert("Added Successfully ");
    console.log("Added Success");

};

# Links

- The Website http://localhost:3000/AbdulazizAlsaif/Project2-Stationery-Store
