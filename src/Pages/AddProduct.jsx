import Swal from 'sweetalert2'


const AddProduct = () => {

    const handleAdd = e => {
        e.preventDefault();

        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        console.log(photo, name, brand, type, price, description, rating);
        const product = {
            photo,
            name, brand, type, price, description, rating,
        }
        console.log(product);

        fetch('https://brand-shop-server-hvckvfhh7-sans-projects-f62f7a6a.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
                form.reset()
            })
    }
    return (
        <div>
            <h1 className='text-3xl text-center text-[#EDC10F]
mb-5 mt-5 font-bold'>Add New Product From Here</h1>
            <form onSubmit={handleAdd}>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Upload Photo here " required />

                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name Of the Product " required />

                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="brand" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Brand Name " required />

                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Type" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Price" required />

                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Short Description" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="rating" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Rating In Numbers" />

                    </div>
                </div>
                <button type="submit"


                    className="text-white bg-[#EDC10F] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add The Product</button>
            </form>

        </div>
    );
};

export default AddProduct;