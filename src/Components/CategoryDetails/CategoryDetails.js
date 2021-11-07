
const CategoryDetails = (props) => {
          const {name} = props.product;
          return (
                    <div>
                              <h3>This is categoryDetails About</h3>
                              <h4>Selected Product : {name}</h4>
                    </div>
          );
};

export default CategoryDetails;