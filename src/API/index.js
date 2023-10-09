// const COHORT = "2302-ACC-CT-WEB-PT-A"
// const BASE_URL = `https://fakestoreapi.com/${COHORT}`

// export const SignInData = async (username, password) => {

//     try {
//         const response = await fetch(`${BASE_URL}/carts`, {
//             method: 'GET', 
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`,
//             }, 
//             body: JSON.stringify({
//                 user: {
//                     username,
//                     password,
//                 }
//             })
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log(result)
//             return result;
//         }
        
//     } catch (error) {
//         console.log(error);
//     }
// }


// export const getProducts = async (id, userId, date, products[productId, quantity]) => {

    //     try {
    //         const response = await fetch(`${BASE_URL}/carts`, {
    //             method: 'GET', 
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`,
    //             }, 
    //             body: JSON.stringify({
    //                 user: {
    //                     id: id,
    //                     userId: userId, 
    //                     date: "",
    //                     products: {
    //                                 productId,
    //                                 quantity
    //                                 }   
    //                 }
    //             })
    //         });
    
    //         if (response.ok) {
    //             const result = await response.json();
    //             console.log(result)
    //             return result;
    //         }
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }