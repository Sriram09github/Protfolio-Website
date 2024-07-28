// // ContactForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:8000/api/contact/', formData)
//             .then(response => {
//                 console.log(response.data);
//                 alert('Message sent successfully!');
//             })
//             .catch(error => {
//                 console.error('There was an error sending the message!', error);
//             });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//             />
//             <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//             />
//             <textarea
//                 name="message"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//             />
//             <button type="submit">Send</button>
//         </form>
//     );
// };

// export default ContactForm;

import React, { useState } from 'react';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number:'',
        description:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/submit-form/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <input type="number" name="number" value={formData.number} onChange={handleChange} />
                <textarea name="" id="textarea" cols="30" rows="5" placeholder="Description"></textarea>
            </div>
            <div class="btn">
            <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default FormComponent;
