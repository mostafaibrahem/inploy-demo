import React from 'react'

export default function RegisterForm() {
    const inputs = [
        { id: 1, placeHolder: 'Full Name', name: 'fullName', type: 'text' },
        { id: 2, placeHolder: 'Job Title', name: 'Job Title', type: 'text' },
        { id: 3, placeHolder: 'Email', name: 'email', type: 'text' },
        { id: 4, placeHolder: 'Number', name: 'number', type: 'number' },
        { id: 5, placeHolder: 'Category', name: 'category', type: 'select', items: [{ id: 11, categoryName: 'cat1' }, { id: 12, categoryName: 'cat2' }] },
    ]
    const customInput = (item) => (
        <div className='input-wrapper' key={item.id}>
            <input
                className='custom-input'
                key={item.id}
                type={item.type}
                placeholder={item.placeHolder}
                name={item.name} />
        </div>

    )
    const customSelect = (item) => (
        <div className='input-wrapper' key={item.id}>
            <select className='custom-input custom-select' key={item.id}>
                {item.items.map((catItem) => (
                    <option key={catItem.id}>{catItem.categoryName}</option>
                ))}
            </select>
        </div>
    )
    return (
        <div className='register-form-wrapper'>
            <h1><span>Register </span><span>Now</span> </h1>
            <div className='rectangle-shape'/>
            <form className='register-form'>
                {inputs.map((item) => (
                    item.type === 'select' ? customSelect(item) : customInput(item)
                ))}
            </form>
        </div>

    )
}