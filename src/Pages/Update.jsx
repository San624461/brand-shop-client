import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Update = () => {
    const loadedProduct = useLoaderData()
    console.log(loadedProduct);

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const newProduct = {
            photo,
            name,
            brand,
            type,
            price,
            rating
        }

        fetch(`http://localhost:5000/update/${loadedProduct._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
              if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
              }
            })
        console.log(newProduct);
    }
    return (
        <div>
            <div>
                <h1 className='text-3xl text-center text-[#EDC10F]
mb-5 mt-5 font-bold'>Update The Product From Here</h1>
                <form onSubmit={handleUpdate}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Upload Photo here "
                            defaultValue={loadedProduct.photo}
                            required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name Of the Product " defaultValue={loadedProduct.name}
                            required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="brand" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Brand Name "
                            defaultValue={loadedProduct.brand} required />

                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                defaultValue={loadedProduct.type}
                                placeholder="Type" required />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                defaultValue={loadedProduct.price} placeholder="Price" required />

                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="rating" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Rating In Numbers"
                                defaultValue={loadedProduct.rating} />

                        </div>
                    </div>
                    <button type="submit"


                        className="text-white bg-[#EDC10F] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update The Product</button>
                </form>

            </div>
        </div>
    );
};

export default Update;