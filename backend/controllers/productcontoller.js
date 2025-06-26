//function for add product

const addproduct = async (req, res) => {
    try {
        const {
          name,
          description,
          price,
          image,
          category,
          subcategory,
          sizes,
          bestseller,
          date,
        } = req.body;

        const image1 = req.files?.image1?.[0] || null;
        const image2 = req.files?.image2?.[0] || null;
        const image3 = req.files?.image3?.[0] || null;
        const image4 = req.files?.image4?.[0] || null;

        console.log(
          name,
          description,
          price,
          image,
          category,
          subcategory,
          sizes,
          bestseller,
          date
        );
        console.log(image1,image2,image3,image4)
        res.json({})

    } catch (error) {
        console.log(error)
 res.json({success:false,message:"error"})       
    }
};
//function for list product
const listproduct = async (req, res) => {};

// function remove product
const removeproduct = async (req, res) => {};

//function for single product info
const singleproduct = async (req, res) => {};

export {listproduct,addproduct,removeproduct,singleproduct}